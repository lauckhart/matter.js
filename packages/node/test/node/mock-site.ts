/**
 * @license
 * Copyright 2022-2025 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Logger, MatterAggregateError, NetworkSimulator } from "#general";
import { Node } from "#node/Node.js";
import { ServerNode } from "#node/ServerNode.js";
import { MockServerNode } from "./mock-server-node.js";

const logger = Logger.get("MockSite");

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

    async addUncommissionedPair() {
        const controller = await this.addNode(undefined, {
            online: false,
            device: undefined,
            commissioning: { enabled: false },
        });
        const device = await this.addNode();

        return { controller, device };
    }

    async addCommissionedPair() {
        const { controller, device } = await this.addUncommissionedPair();

        const { passcode, discriminator } = device.state.commissioning;
        await MockTime.resolve(controller.nodes.commission({ passcode, discriminator, timeoutSeconds: 30 }));

        return { controller, device };
    }

    async [Symbol.asyncDispose]() {
        try {
            await MockTime.resolve(
                MatterAggregateError.allSettled(
                    [...this.#nodes].map(async node => {
                        await node.close();
                    }),
                ),

                // Not sure why macrotasks are necessary; something hangs with microtasks but haven't tracked down
                { macrotasks: true },
            );
        } catch (e) {
            logger.error("Error closing mock site", e);
        }
    }
}
