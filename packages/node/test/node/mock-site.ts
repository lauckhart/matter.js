/**
 * @license
 * Copyright 2022-2025 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { MatterAggregateError, NetworkSimulator } from "#general";
import { ServerNode } from "#node/ServerNode.js";
import { MockServerNode } from "./mock-server-node.js";

/**
 * Manages a mock network with nodes on it.
 */
export class MockSite {
    #simulator = new NetworkSimulator();
    #nodes = new Set<MockServerNode>();
    #nextNetworkIndex = 1;

    constructor() {}

    async addNode<T extends ServerNode.RootEndpoint = ServerNode.RootEndpoint>(options?: MockServerNode.Options<T>) {
        options = {
            ...options,
            simulator: this.#simulator,
            networkIndex: this.#nextNetworkIndex++,
        } as MockServerNode.Options<T>;

        const node = await MockServerNode.createOnline(options);
        this.#nodes.add(node);

        return node;
    }

    async addCommissionedPair() {
        const controller = await this.addNode({ online: false, device: undefined });
        const device = await this.addNode();

        const { passcode, discriminator } = device.state.commissioning;
        await controller.nodes.commission(passcode, discriminator);

        return { controller, device };
    }

    async [Symbol.asyncDispose]() {
        await MatterAggregateError.allSettled([...this.#nodes].map(node => node.close()));
    }
}
