/**
 * @license
 * Copyright 2022-2025 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ClusterBehavior } from "#behavior/cluster/ClusterBehavior.js";
import { Datasource } from "#behavior/state/managed/Datasource.js";
import { DescriptorCluster } from "#clusters/descriptor";
import { Endpoint } from "#endpoint/Endpoint.js";
import { DatasourceCache } from "#endpoint/storage/DatasourceCache.js";
import { EndpointType } from "#endpoint/type/EndpointType.js";
import { AcceptedCommandList, AttributeList, ClusterRevision, FeatureMap, type FeatureBitmap } from "#model";
import type { ClientNode } from "#node/ClientNode.js";
import { NodeStore } from "#node/storage/NodeStore.js";
import { ReadScope, type Read, type ReadResult } from "#protocol";
import type { AttributeId, ClusterId, CommandId, DeviceTypeId, EndpointNumber } from "#types";
import { MaybePromise } from "@matter/general";
import { ClientBehavior } from "./ClientBehavior.js";

const DEVICE_TYPE_LIST_ATTR_ID = DescriptorCluster.attributes.deviceTypeList.id;
const SERVER_LIST_ATTR_ID = DescriptorCluster.attributes.serverList.id;
const PARTS_LIST_ATTR_ID = DescriptorCluster.attributes.partsList.id;

/**
 * Manages endpoint and behavior structure for a single client node.
 */
export class ClientStructure {
    #nodeStore: NodeStore;
    #endpoints: Record<EndpointNumber, EndpointStructure> = {};

    constructor(node: ClientNode) {
        this.#nodeStore = node.env.get(NodeStore);
        this.#endpoints[node.number] = {
            endpoint: node,
            clusters: {},
        };
    }

    /**
     * Load initial structure from cache.
     */
    async loadCache() {
        for (const store of this.#nodeStore.endpointStores) {
            const id = store.id;

            // Client storage currently does not persist endpoint number; we determine from the persisted name, either
            // "root" for endpoint 0 or "epN" for other endpoints
            let number;
            if (id === "root") {
                number = 0;
            } else {
                const match = id.match(/^ep(\d+)$/);
                if (!match) {
                    continue;
                }
                number = Number.parseInt(match[1]);
            }

            const endpoint = this.#endpointFor(number as EndpointNumber);

            // Load state for each behavior
            for (const idStr of store.knownBehaviors) {
                const id = Number.parseInt(idStr) as ClusterId;
                if (Number.isNaN(id)) {
                    continue;
                }

                const cluster = this.#clusterFor(endpoint, id);
                await this.#initializeCluster(endpoint, cluster);
            }
        }
    }

    /**
     * Obtain the store for a behavior.
     */
    storeFor(endpoint: Endpoint, type: ClusterBehavior.Type) {
        const endpointStructure = this.#endpointFor(endpoint.number);
        const clusterStructure = this.#clusterFor(endpointStructure, type.cluster.id);

        return clusterStructure.store;
    }

    /**
     * Inject version filters into a Read or Subscribe request.
     */
    injectVersionFilters<T extends Read>(request: T): T {
        const scope = ReadScope(request);
        let result = request;

        for (const {
            endpoint: { number: endpointId },
            clusters,
        } of Object.values(this.#endpoints)) {
            for (const {
                id: clusterId,
                store: { version },
            } of Object.values(clusters)) {
                if (!scope.isRelevant(endpointId, clusterId)) {
                    continue;
                }

                if (version === Datasource.UNKNOWN_VERSION) {
                    continue;
                }

                if (result === request) {
                    result = { ...request };
                }

                if (result.dataVersionFilters === undefined) {
                    result.dataVersionFilters = [];
                }

                result.dataVersionFilters.push({ path: { endpointId, clusterId }, dataVersion: version });
            }
        }

        return result;
    }

    /**
     * Update the node structure by applying attribute changes.
     */
    async *mutate(request: Read, changes: ReadResult) {
        const scope = ReadScope(request);

        let currentUpdates: AttributeUpdates | undefined;

        for await (const chunk of changes) {
            if ("subscriptionId" in chunk) {
                // Skip subscribe response
                continue;
            }

            for (const change of chunk) {
                if (change.kind !== "attr-value") {
                    continue;
                }

                const { endpointId, clusterId, attributeId } = change.path;

                // If we are building updates to a cluster and the cluster/endpoint changes, apply the current update
                // set
                if (
                    currentUpdates &&
                    (currentUpdates.endpointId !== endpointId || currentUpdates.clusterId !== clusterId)
                ) {
                    await this.#updateCluster(currentUpdates);
                    currentUpdates = undefined;
                }

                if (currentUpdates === undefined) {
                    // Updating a new endpoint/cluster
                    currentUpdates = {
                        endpointId,
                        clusterId,
                        values: {
                            [attributeId]: change.value,
                        },
                    };

                    // Update version but only if this was a wildcard read
                    if (scope.isWildcard(endpointId, clusterId)) {
                        currentUpdates.values[DatasourceCache.VERSION_KEY] = change.version;
                    }
                } else {
                    // Add value to change set for current endpoint/cluster
                    currentUpdates.values[attributeId] = change.value;
                }
            }

            yield chunk;
        }

        if (currentUpdates) {
            await this.#updateCluster(currentUpdates);
        }
    }

    /**
     * Apply new attribute values for specific endpoint/cluster.
     *
     * This is invoked in a batch when we've collected all sequential values for the current endpoint/cluster.
     */
    async #updateCluster(attrs: AttributeUpdates) {
        const endpoint = this.#endpointFor(attrs.endpointId);
        const cluster = this.#clusterFor(endpoint, attrs.clusterId);
        await cluster.store.externalSet(attrs.values);
        await this.#initializeCluster(endpoint, cluster);
    }

    /**
     * If enough attributes are present, installs a behavior on an endpoint
     *
     * If the cluster is Descriptor, performs additional {@link Endpoint} configuration such as installing parts and
     * device types.
     *
     * Invoked once we've loaded all attributes.
     */
    async #initializeCluster(endpoint: EndpointStructure, cluster: ClusterStructure) {
        const attrs = cluster.store.initialValues ?? {};

        // Generate a behavior if enough information is available
        if (cluster.behavior === undefined) {
            const {
                [ClusterRevision.id]: clusterRevision,
                [FeatureMap.id]: features,
                [AttributeList.id]: attributeList,
                [AcceptedCommandList.id]: commandList,
            } = attrs;

            if (typeof clusterRevision === "number") {
                cluster.revision = clusterRevision;
            }

            if (typeof features === "object" && features !== null && !Array.isArray(features)) {
                cluster.features = features as FeatureBitmap;
            }

            if (Array.isArray(attributeList)) {
                cluster.attributes = attributeList.filter(attr => typeof attr === "number") as AttributeId[];
            }

            if (Array.isArray(commandList)) {
                cluster.commands = commandList.filter(cmd => typeof cmd === "number") as CommandId[];
            }

            if (
                cluster.revision !== undefined &&
                cluster.features !== undefined &&
                cluster.attributes !== undefined &&
                cluster.commands !== undefined
            ) {
                const behavior = ClientBehavior(cluster as ClientBehavior.ClusterShape);
                if (MaybePromise.is(behavior)) {
                    cluster.behavior = await behavior;
                } else {
                    cluster.behavior = behavior;
                }
                endpoint.endpoint.behaviors.require(cluster.behavior);
            }
        }

        // Special handling for descriptor cluster
        if (cluster.id === DescriptorCluster.id) {
            this.#synchronizeDescriptor(endpoint, attrs);
        }
    }

    #synchronizeDescriptor(endpoint: EndpointStructure, attrs: Record<number, unknown>) {
        const deviceTypeList = attrs[DEVICE_TYPE_LIST_ATTR_ID];
        if (Array.isArray(deviceTypeList) && deviceTypeList?.[0]) {
            const [{ deviceType, revision }] = deviceTypeList;
            if (typeof deviceType === "number") {
                endpoint.endpoint.type.deviceType = deviceType as DeviceTypeId;
            }
            if (typeof revision === "number") {
                endpoint.endpoint.type.deviceRevision = revision;
            }
        }

        const serverList = attrs[SERVER_LIST_ATTR_ID];
        if (Array.isArray(serverList)) {
            for (const cluster of serverList) {
                if (typeof cluster === "number") {
                    this.#clusterFor(endpoint, cluster as ClusterId);
                }
            }
        }

        const partsList = attrs[PARTS_LIST_ATTR_ID];
        if (Array.isArray(partsList)) {
            for (const partNo of partsList) {
                if (typeof partNo !== "number") {
                    continue;
                }

                const part = this.#endpointFor(partNo as EndpointNumber);

                let isAlreadyDescendant = false;
                for (let owner = part.endpoint.owner; owner; owner = owner.owner) {
                    if (owner === endpoint.endpoint) {
                        isAlreadyDescendant = true;
                        break;
                    }
                }

                if (isAlreadyDescendant) {
                    continue;
                }

                part.endpoint.owner = endpoint.endpoint;
            }
        }
    }

    #endpointFor(number: EndpointNumber) {
        let endpoint = this.#endpoints[number];
        if (endpoint) {
            return endpoint;
        }

        endpoint = {
            endpoint: new Endpoint({
                id: `ep${number}`,
                number,
                type: EndpointType({
                    name: "ClientEndpoint",
                    deviceType: -1,
                    deviceRevision: -1,
                }),
            }),
            clusters: {},
        };
        this.#endpoints[number] = endpoint;

        return endpoint;
    }

    #clusterFor(endpoint: EndpointStructure, id: ClusterId) {
        let cluster = endpoint.clusters[id];
        if (cluster) {
            return cluster;
        }

        cluster = {
            id,
            store: this.#nodeStore.endpointStores
                .storeForEndpoint(endpoint.endpoint)
                .createStoreForBehavior(id.toString(), DatasourceCache),
        };
        endpoint.clusters[id] = cluster;

        return cluster;
    }
}

interface AttributeUpdates {
    endpointId: EndpointNumber;
    clusterId: ClusterId;
    values: {
        [K in number | typeof DatasourceCache.VERSION_KEY]?: unknown;
    };
}

interface EndpointStructure {
    endpoint: Endpoint;
    clusters: Record<ClusterId, ClusterStructure>;
}

interface ClusterStructure extends Partial<ClientBehavior.ClusterShape> {
    id: ClusterId;
    behavior?: ClusterBehavior.Type;
    store: Datasource.ExternallyMutableStore;
}
