/**
 * @license
 * Copyright 2022-2025 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import {
    Crypto,
    Environment,
    Logger,
    MatterAggregateError,
    MockCrypto,
    Network,
    NetworkSimulator,
    StorageBackendMemory,
    StorageService,
} from "#general";
import { Node } from "#node/Node.js";
import { ServerNode } from "#node/ServerNode.js";
import type { MockServerNode } from "./mock-server-node.js";

const logger = Logger.get("MockSite");

/**
 * Manages a mock network with nodes on it.
 */
export class MockSite {
    #simulator = new NetworkSimulator();
    #nodes = new Set<ServerNode>();
    #nextNetworkIndex = 1;

    constructor() {
        // Date zero causes issue with cert generation
        MockTime.reset(new Date("2010-01-01T00:00:00.000Z").getTime());
    }

    addNode<T extends ServerNode.RootEndpoint = ServerNode.RootEndpoint>(
        type?: T,
        options?: MockServerNode.Options<T>,
    ): Promise<ServerNode<T>>;
    addNode<T extends ServerNode.RootEndpoint = ServerNode.RootEndpoint>(
        definition: T | MockServerNode.Configuration<T>,
        options?: MockServerNode.Options<T>,
    ): Promise<ServerNode<T>>;
    async addNode<T extends ServerNode.RootEndpoint = ServerNode.RootEndpoint>(
        definition: T | MockServerNode.Configuration<T>,
        options?: MockServerNode.Options<T>,
    ) {
        const config = Node.nodeConfigFor(
            ServerNode.RootEndpoint as T,
            definition,
            options ?? ({} as MockServerNode.Options<T>),
        );

        const index = (config.index ??= this.#nextNetworkIndex++);
        const id = (config.id ??= `node${index.toString(16).padStart(2, "0")}`);
        const env = (config.environment ??= new Environment(id));
        if (!env.has(Crypto)) {
            env.set(Crypto, MockCrypto(index));
        }
        if (!env.has(Network)) {
            env.set(Network, (config.simulator ?? this.#simulator).addHost(index));
        }

        const storage = env.get(StorageService);
        const location = `/memory/${id}`;
        if (storage.location !== location) {
            storage.location = location;
            storage.factory = () => new StorageBackendMemory();
        }

        // Note that we don't use MockServerNode as we don't actually want anything mocked
        const node = new ServerNode(config);
        this.#nodes.add(node);

        if (config.device) {
            await node.add(config.device);
        }

        await node.start();

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

        const controllerCrypto = controller.env.get(Crypto) as MockCrypto;
        const deviceCrypto = device.env.get(Crypto) as MockCrypto;

        // We require more random data
        controllerCrypto.entropic = deviceCrypto.entropic = true;

        const { passcode, discriminator } = device.state.commissioning;
        await MockTime.resolve(controller.nodes.commission({ passcode, discriminator, timeoutSeconds: 90 }), {
            macrotasks: true,
        });

        controllerCrypto.entropic = deviceCrypto.entropic = true;

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
