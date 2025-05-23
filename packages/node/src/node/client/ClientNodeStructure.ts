/**
 * @license
 * Copyright 2022-2025 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ClusterBehavior } from "#behavior/index.js";
import type { Datasource } from "#behavior/state/managed/Datasource.js";
import { DescriptorBehavior } from "#behaviors/descriptor";
import { DescriptorCluster } from "#clusters/descriptor";
import { Endpoint } from "#endpoint/Endpoint.js";
import { DatasourceCache } from "#endpoint/storage/DatasourceCache.js";
import { EndpointType } from "#endpoint/type/EndpointType.js";
import { AcceptedCommandList, AttributeList, ClusterRevision, FeatureMap, type FeatureBitmap } from "#model";
import type { ClientNode } from "#node/ClientNode.js";
import type { NodeStore } from "#node/storage/NodeStore.js";
import { ServerNodeStore } from "#node/storage/ServerNodeStore.js";
import type { ReadResult } from "#protocol";
import type { AttributeId, ClusterId, CommandId, EndpointNumber } from "#types";
import { ClientBehavior } from "./ClientBehavior.js";

/**
 * Manages endpoint and behavior structure for a single client node.
 */
export class ClientNodeStructure {
    #nodeStore: NodeStore;
    #endpoints: Record<EndpointNumber, EndpointState> = {};

    constructor(node: ClientNode) {
        this.#nodeStore = node.env.get(ServerNodeStore).clientStores.storeForNode(node);
        this.#endpointFor(0 as EndpointNumber);
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
    async mutate(changes: ReadResult) {
        let currentUpdates: AttributeUpdates | undefined;

        for await (const chunk of changes) {
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
    async #updateCluster(values: AttributeUpdates) {
        const endpoint = this.#endpointFor(values.endpointNo);
        const cluster = this.#clusterFor(endpoint, values.clusterId);
        await cluster.store.externalSet(values.values);

        if (cluster.behavior === undefined) {
            const {
                [ClusterRevision.id]: clusterRevision,
                [FeatureMap.id]: features,
                [AttributeList.id]: attributes,
                [AcceptedCommandList.id]: commands,
            } = values.values;

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
                cluster.behavior = behavior;
                endpoint.endpoint.behaviors.require(behavior);
            }
        }

        switch (values.clusterId) {
            case DescriptorCluster.id:
                this.#synchronizeDescriptor(endpoint, values as Partial<DescriptorBehavior.State>);
                break;
        }
    }

    #synchronizeDescriptor(
        endpoint: EndpointState,
        { deviceTypeList, partsList, serverList }: Partial<DescriptorBehavior.State>,
    ) {
        if (deviceTypeList?.[0]) {
            const [{ deviceType, revision }] = deviceTypeList;
            endpoint.endpoint.type.deviceType = deviceType;
            endpoint.endpoint.type.deviceRevision = revision;
        }

        if (serverList) {
            for (const cluster of serverList) {
                this.#clusterFor(endpoint, cluster);
            }
        }

        if (partsList) {
            for (const partNo of partsList) {
                const part = this.#endpointFor(partNo);

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
            endpoint: new Endpoint(
                EndpointType({
                    name: "ClientEndpoint",
                    deviceType: -1,
                    deviceRevision: -1,
                }),
            ),
            clusters: {},
        };
        this.#endpoints[number] = endpoint;

        return endpoint;
    }

    #clusterFor(endpoint: EndpointState, id: ClusterId) {
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

interface EndpointState {
    endpoint: Endpoint;
    clusters: Record<ClusterId, ClusterState>;
}

interface ClusterState extends Partial<ClientBehavior.ClusterShape> {
    id: ClusterId;
    behavior?: ClusterBehavior.Type;
    store: Datasource.ExternallyMutableStore;
}
