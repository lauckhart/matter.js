/**
 * @license
 * Copyright 2022-2025 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import type { Datasource } from "#behavior/state/managed/Datasource.js";
import { BasicInformationCluster } from "#clusters/basic-information";
import { DescriptorCluster } from "#clusters/descriptor";
import { Endpoint } from "#endpoint/Endpoint.js";
import { DatasourceCache } from "#endpoint/storage/DatasourceCache.js";
import { MutableEndpoint } from "#endpoint/type/MutableEndpoint.js";
import type { ClientNode } from "#node/ClientNode.js";
import type { NodeStore } from "#node/storage/NodeStore.js";
import { ServerNodeStore } from "#node/storage/ServerNodeStore.js";
import type { ReadResult } from "#protocol";
import type { AttributeId, ClusterId, EndpointNumber } from "#types";

/**
 * Creates and maintains client endpoints for a specific node.
 */
export class AttributeProcessor {
    #nodeStore: NodeStore;
    #endpoints: Record<EndpointNumber, EndpointState> = {};

    constructor(node: ClientNode) {
        this.#nodeStore = node.env.get(ServerNodeStore).clientStores.storeForNode(node);
        this.#endpointFor(0 as EndpointNumber);
    }

    async apply(changes: ReadResult) {
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
        await cluster.externalSet(values.values);

        switch (values.clusterId) {
            case BasicInformationCluster.id:
                this.#synchronizeBasicInformation(values);
                break;

            case DescriptorCluster.id:
                this.#synchronizeDescriptor(values);
                break;
        }
    }

    #synchronizeBasicInformation() {
        // TODO
    }

    #synchronizeDescriptor() {
        // TODO
    }

    #endpointFor(number: EndpointNumber) {
        let endpoint = this.#endpoints[number];
        if (endpoint) {
            return endpoint;
        }

        endpoint = {
            endpoint: new Endpoint(ClientEndpointType),
            ownerNumber: 0 as EndpointNumber,
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

        cluster = this.#nodeStore.endpointStores
            .storeForEndpoint(endpoint.endpoint)
            .createStoreForBehavior(id.toString(), DatasourceCache);
        endpoint.clusters[id] = cluster;

        return cluster;
    }
}

interface AttributeUpdates {
    endpointNo: EndpointNumber;
    clusterId: ClusterId;
    values: Record<AttributeId, unknown>;
}

interface EndpointState {
    endpoint: Endpoint;
    ownerNumber: EndpointNumber;
    clusters: Record<ClusterId, Datasource.ExternallyMutableStore>;
}

const ClientEndpointType = MutableEndpoint({
    name: "ClientEndpoint",
    deviceType: -1,
    deviceRevision: -1,
});
