/**
 * @license
 * Copyright 2022-2025 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Endpoint } from "#endpoint/Endpoint.js";
import { ClientNode } from "#node/ClientNode.js";
import { ReadResult } from "#protocol";
import { AttributeId, ClusterId, EndpointNumber } from "#types";

/**
 * Creates and maintains client endpoints for a specific node.
 */
export class EndpointFabricator {
    #node: ClientNode;

    /**
     * Index of endpoints by number.
     */
    #endpoints: Record<EndpointNumber, Endpoint>;

    /**
     * Map of child number -> owner number.
     *
     * This denormalizes the partsList attribute such that we efficiently know where to install an endpoint.
     *
     * We always prefer the deepest descendent for installation of the child endpoint.
     */
    #ownership: Record<EndpointNumber, EndpointNumber> = {};

    constructor(node: ClientNode) {
        this.#node = node;
        this.#endpoints = { [node.number]: node };
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
        const endpoint = this.#endpoints[values.endpointNo];
        if (endpoint) {
            await this.#updateEndpoint(endpoint, values);
        }

        let seed = this.#endpointSeeds[values.endpointNo];
        if (seed) {
            seed.values.push(values);
        } else {
            seed = this.#endpointSeeds[values.endpointNo] = { values: [values] };
        }
    }

    async #updateEndpoint(endpoint: Endpoint, updates: AttributeUpdates) {}
}

interface AttributeUpdates {
    endpointNo: EndpointNumber;
    clusterId: ClusterId;
    values: Record<AttributeId, unknown>;
}

interface EndpointSeed {
    values: AttributeUpdates[];
}
