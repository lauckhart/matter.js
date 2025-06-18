/**
 * @license
 * Copyright 2022-2025 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ClusterBehavior } from "#behavior/index.js";
import type { Datasource } from "#behavior/state/managed/Datasource.js";
import { DescriptorCluster } from "#clusters/descriptor";
import { Endpoint } from "#endpoint/Endpoint.js";
import { DatasourceCache } from "#endpoint/storage/DatasourceCache.js";
import { EndpointType } from "#endpoint/type/EndpointType.js";
import { AcceptedCommandList, AttributeList, ClusterRevision, FeatureMap, type FeatureBitmap } from "#model";
import type { ClientNode } from "#node/ClientNode.js";
import type { NodeStore } from "#node/storage/NodeStore.js";
import { ServerNodeStore } from "#node/storage/ServerNodeStore.js";
import type { ReadResult, SubscribeResult } from "#protocol";
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
        this.#nodeStore = node.env.get(ServerNodeStore).clientStores.storeForNode(node);
        this.#endpoints[node.number] = {
            endpoint: node,
            clusters: {},
        };
    }

    /**
     * Obtain the store for a behavior.
     */
    storeFor(endpoint: Endpoint, type: ClusterBehavior.Type) {
        const endpointState = this.#endpointFor(endpoint.number);
        const clusterState = this.#clusterFor(endpointState, type.cluster.id);

        return clusterState.store;
    }

    /**
     * Update the node structure by applying attribute changes.
     */
    async *mutate(changes: ReadResult | SubscribeResult) {
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

                const { endpointId: endpointNo, clusterId, attributeId } = change.path;

                if (
                    currentUpdates &&
                    (currentUpdates.endpointNo !== endpointNo || currentUpdates.clusterId !== clusterId)
                ) {
                    await this.#updateCluster(currentUpdates);
                    currentUpdates = undefined;
                }

                if (currentUpdates === undefined) {
                    currentUpdates = {
                        endpointNo,
                        clusterId,
                        values: {
                            [attributeId]: change.value,
                        },
                    };
                } else {
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
     * This is invoked in a batch when we've collected all sequential values for current endpoint/cluster.
     */
    async #updateCluster(attrs: AttributeUpdates) {
        const endpoint = this.#endpointFor(attrs.endpointNo);
        const cluster = this.#clusterFor(endpoint, attrs.clusterId);
        await cluster.store.externalSet(attrs.values);

        if (cluster.behavior === undefined) {
            const {
                [ClusterRevision.id]: clusterRevision,
                [FeatureMap.id]: features,
                [AttributeList.id]: attributes,
                [AcceptedCommandList.id]: commands,
            } = attrs.values;

            if (typeof clusterRevision === "number") {
                cluster.revision = clusterRevision;
            }

            if (typeof features === "object" && features !== null && !Array.isArray(features)) {
                cluster.features = features as FeatureBitmap;
            }

            if (Array.isArray(attributes)) {
                cluster.attributes = attributes.filter(attr => typeof attr === "number") as AttributeId[];
            }

            if (Array.isArray(commands)) {
                cluster.commands = commands.filter(attr => typeof attr === "number") as CommandId[];
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

        switch (attrs.clusterId) {
            case DescriptorCluster.id:
                this.#synchronizeDescriptor(endpoint, attrs.values);
                break;
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
    endpointNo: EndpointNumber;
    clusterId: ClusterId;
    values: Record<number, unknown>;
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
