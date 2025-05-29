/**
 * @license
 * Copyright 2022-2025 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { MatterAggregateError, NetworkSimulator } from "#general";
import { Node } from "#node/Node.js";
import { ServerNode } from "#node/ServerNode.js";
import { MockServerNode } from "./mock-server-node.js";

/**
 * Manages a mock network with nodes on it.
 */
export class MockSite {
    #simulator = new NetworkSimulator();
    #nodes = new Set<MockServerNode>();
    #nextNetworkIndex = 1;

    constructor() {
        // Date zero causes issue with cert generation
        MockTime.reset(new Date("2010-01-01T00:00:00.000Z").getTime());
    }

    addNode<T extends ServerNode.RootEndpoint = ServerNode.RootEndpoint>(
        type?: T,
        options?: MockServerNode.Options<T>,
    ): Promise<MockServerNode<T>>;
    addNode<T extends ServerNode.RootEndpoint = ServerNode.RootEndpoint>(
        definition: T | MockServerNode.Configuration<T>,
        options?: MockServerNode.Options<T>,
    ): Promise<MockServerNode<T>>;
    async addNode<T extends ServerNode.RootEndpoint = ServerNode.RootEndpoint>(
        definition: T | MockServerNode.Configuration<T>,
        options?: MockServerNode.Options<T>,
    ) {
        const config = Node.nodeConfigFor(
            ServerNode.RootEndpoint as T,
            definition,
            options ?? ({} as MockServerNode.Options<T>),
        );

        config.simulator = this.#simulator;
        config.networkIndex = this.#nextNetworkIndex++;

        const node = await MockServerNode.createOnline(config);
        this.#nodes.add(node);

        return node;
    }

    async addCommissionedPair() {
        const controller = await this.addNode(undefined, { online: false, device: undefined });
        const device = await this.addNode();

        const { passcode, discriminator } = device.state.commissioning;
        await MockTime.resolve(controller.nodes.commission(passcode, discriminator));

        return { controller, device };
    }

    async [Symbol.asyncDispose]() {
        await MockTime.resolve(MatterAggregateError.allSettled([...this.#nodes].map(node => node.close())));
    }
}
