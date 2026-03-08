/**
 * @license
 * Copyright 2022-2026 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Behavior } from "#behavior/Behavior.js";
import { LifecycleServer } from "#behavior/system/lifecycle/LifecycleServer.js";
import { WebSocketServer } from "#behavior/system/websocket/WebSocketServer.js";
import { Environment, HttpEndpointFactory, MockHttpEndpointFactory } from "@matter/general";
import { field, method, response, string as stringType } from "@matter/model";
import { MockServerNode } from "../mock-server-node.js";
import { MockSite } from "../mock-site.js";
import { connectRemote } from "./mock-remote-site.js";

/**
 * A non-cluster behavior with both state and a command for testing remote access.
 */
class TestPluginBehavior extends Behavior {
    static override readonly id = "testPlugin";

    declare state: InstanceType<typeof TestPluginBehavior.State>;

    @method()
    @response(stringType)
    greet(): string {
        return `Hello from ${this.state.name}!`;
    }

    @method()
    rename(input: TestPluginBehavior.RenameRequest): void {
        this.state.name = input.name;
    }

    static override State = class State {
        @field(stringType)
        name = "test-node";
    };
}

namespace TestPluginBehavior {
    export class RenameRequest {
        @field(stringType)
        name!: string;
    }
}

const TestRootEndpoint = MockServerNode.RootEndpoint.with(WebSocketServer, LifecycleServer, TestPluginBehavior);

describe("NonClusterRemote", () => {
    before(() => {
        MockTime.init();
        MockTime.forceMacrotasks = true;
    });

    it("dynamically wires commandsOf for a non-cluster behavior", async () => {
        await using site = new MockSite();

        const factory = new MockHttpEndpointFactory();
        const env = new Environment("ws-test");
        env.set(HttpEndpointFactory, factory);

        const node = await site.addNode(TestRootEndpoint, { environment: env });
        expect(node.lifecycle.isOnline).true;

        const remote = await connectRemote(factory, node.id);

        try {
            // commandsOf dynamically wires non-cluster behaviors with @method schema
            const cmds = remote.commandsOf(LifecycleServer);
            expect(cmds).not.undefined;
            expect(typeof cmds.stop).equals("function");
        } finally {
            await MockTime.resolve(remote.close());
        }
    });

    it("invokes a command that returns a value on a non-cluster behavior", async () => {
        await using site = new MockSite();

        const factory = new MockHttpEndpointFactory();
        const env = new Environment("ws-test");
        env.set(HttpEndpointFactory, factory);

        const node = await site.addNode(TestRootEndpoint, { environment: env });

        const remote = await connectRemote(factory, node.id);

        try {
            const cmds = remote.commandsOf(TestPluginBehavior);
            const result = await cmds.greet(undefined);
            expect(result).equals("Hello from test-node!");
        } finally {
            await MockTime.resolve(remote.close());
        }
    });

    it("invokes multiple commands sequentially on a non-cluster behavior", async () => {
        await using site = new MockSite();

        const factory = new MockHttpEndpointFactory();
        const env = new Environment("ws-test");
        env.set(HttpEndpointFactory, factory);

        const node = await site.addNode(TestRootEndpoint, { environment: env });

        const remote = await connectRemote(factory, node.id);

        try {
            const cmds = remote.commandsOf(TestPluginBehavior);

            // Two successive greet calls should both work
            const result1 = await cmds.greet(undefined);
            expect(result1).equals("Hello from test-node!");

            const result2 = await cmds.greet(undefined);
            expect(result2).equals("Hello from test-node!");
        } finally {
            await MockTime.resolve(remote.close());
        }
    });

    it("reads state from a non-cluster behavior", async () => {
        await using site = new MockSite();

        const factory = new MockHttpEndpointFactory();
        const env = new Environment("ws-test");
        env.set(HttpEndpointFactory, factory);

        const node = await site.addNode(TestRootEndpoint, { environment: env });

        // Set a distinct name on the server so we can verify the remote reads server state, not defaults
        await node.act(agent => {
            agent.get(TestPluginBehavior).state.name = "custom-server-name";
        });

        const remote = await connectRemote(factory, node.id);

        try {
            // Wire the behavior for remote access
            remote.commandsOf(TestPluginBehavior);

            // Poll until the state stream delivers the server's testPlugin state
            await MockTime.resolve(
                (async () => {
                    const type = remote.behaviors.supported["testPlugin"];
                    while (true) {
                        const name = await remote.act(agent => (agent.get(type).state as any).name);
                        if (name === "custom-server-name") return;
                        await MockTime.macrotask;
                    }
                })(),
                { macrotasks: true },
            );
        } finally {
            await MockTime.resolve(remote.close());
        }
    });

    it("reflects server state changes on the remote", async () => {
        await using site = new MockSite();

        const factory = new MockHttpEndpointFactory();
        const env = new Environment("ws-test");
        env.set(HttpEndpointFactory, factory);

        const node = await site.addNode(TestRootEndpoint, { environment: env });

        const remote = await connectRemote(factory, node.id);

        try {
            // Wire the behavior
            remote.commandsOf(TestPluginBehavior);

            // Wait for initial state to arrive
            const type = remote.behaviors.supported["testPlugin"];
            await MockTime.resolve(
                (async () => {
                    while (true) {
                        const name = await remote.act(agent => (agent.get(type).state as any).name);
                        if (name === "test-node") return;
                        await MockTime.macrotask;
                    }
                })(),
                { macrotasks: true },
            );

            // Change state on the server
            await node.act(agent => {
                agent.get(TestPluginBehavior).state.name = "updated-name";
            });

            // Wait for the subscription update to propagate
            await MockTime.resolve(
                (async () => {
                    while (true) {
                        const name = await remote.act(agent => (agent.get(type).state as any).name);
                        if (name === "updated-name") return;
                        await MockTime.macrotask;
                    }
                })(),
                { macrotasks: true },
            );
        } finally {
            await MockTime.resolve(remote.close());
        }
    });

    it("writes state to a non-cluster behavior over the wire", async () => {
        await using site = new MockSite();

        const factory = new MockHttpEndpointFactory();
        const env = new Environment("ws-test");
        env.set(HttpEndpointFactory, factory);

        const node = await site.addNode(TestRootEndpoint, { environment: env });

        const remote = await connectRemote(factory, node.id);

        try {
            // Wire the behavior and wait for initial state
            remote.commandsOf(TestPluginBehavior);
            const type = remote.behaviors.supported["testPlugin"];
            await MockTime.resolve(
                (async () => {
                    while (true) {
                        const name = await remote.act(agent => (agent.get(type).state as any).name);
                        if (name === "test-node") return;
                        await MockTime.macrotask;
                    }
                })(),
                { macrotasks: true },
            );

            // Write state on the remote — this sends a write request over WebSocket
            await MockTime.resolve(
                remote.act(async agent => {
                    (agent.get(type).state as any).name = "remote-written";
                }),
                { macrotasks: true },
            );

            // Verify the server received the write
            const serverName = await node.act(agent => agent.get(TestPluginBehavior).state.name);
            expect(serverName).equals("remote-written");
        } finally {
            await MockTime.resolve(remote.close());
        }
    });
});
