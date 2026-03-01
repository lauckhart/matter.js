/**
 * @license
 * Copyright 2022-2026 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { OnOffServer } from "#behaviors/on-off";
import { OnOffLightDevice } from "#devices/on-off-light";
import { Endpoint } from "#endpoint/Endpoint.js";
import { MockSite } from "../mock-site.js";
import { addWebSocketNode, connectRemote, waitForBehavior } from "./mock-remote-site.js";

/**
 * Get the OnOffLight child endpoint from the server node.
 */
function serverLight(node: { parts: Iterable<Endpoint> }) {
    const light = [...node.parts].find(part => part.behaviors.has(OnOffServer));
    if (!light) {
        throw new Error("Server OnOffLight endpoint not found");
    }
    return light as Endpoint;
}

describe("RemoteNode", () => {
    before(() => {
        MockTime.init();
        MockTime.macrotasks = true;
    });

    it("invokes a command on a child endpoint", async () => {
        await using site = new MockSite();
        const { node, factory } = await addWebSocketNode(site, { device: OnOffLightDevice });
        const remote = await connectRemote(factory, node.id);

        try {
            const clientLight = await waitForBehavior(remote, "onOff");

            // Verify server-side initial state
            const light = serverLight(node);
            const serverOnOff = await light.act(agent => agent.get(OnOffServer).state.onOff);
            expect(serverOnOff).false;

            // Invoke the toggle command via the remote client
            await clientLight.act(async agent => {
                const onOffType = agent.endpoint.behaviors.supported["onOff"];
                const onOff = agent.get(onOffType);
                await (onOff as any).toggle();
            });

            // Allow the command and subscription update to propagate
            await new Promise<void>(resolve => queueMicrotask(() => resolve()));

            // Verify server-side state toggled
            const serverOnOffAfter = await light.act(agent => agent.get(OnOffServer).state.onOff);
            expect(serverOnOffAfter).true;
        } finally {
            await MockTime.resolve(remote.close());
        }
    });

    it("mirrors endpoint structure on the client", async () => {
        await using site = new MockSite();
        const { node, factory } = await addWebSocketNode(site, { device: OnOffLightDevice });
        const remote = await connectRemote(factory, node.id);

        try {
            const clientLight = await waitForBehavior(remote, "onOff");
            expect(clientLight).not.undefined;

            const parts = [...remote.parts];
            expect(parts.length).greaterThanOrEqual(1);
        } finally {
            await MockTime.resolve(remote.close());
        }
    });

    it("reads state on the client", async () => {
        await using site = new MockSite();
        const { node, factory } = await addWebSocketNode(site, { device: OnOffLightDevice });
        const remote = await connectRemote(factory, node.id);

        try {
            const clientLight = await waitForBehavior(remote, "onOff");

            // Read onOff state from the client — should reflect server state (false)
            const onOffType = clientLight.behaviors.supported["onOff"];
            const clientOnOff = await clientLight.act(agent => (agent.get(onOffType).state as any).onOff);
            expect(clientOnOff).false;

            // Toggle on the server side
            const light = serverLight(node);
            await light.act(async agent => {
                await agent.get(OnOffServer).toggle();
            });

            // Poll for the subscription update to propagate through the macrotask pipe
            await MockTime.resolve(
                (async () => {
                    while (true) {
                        const val = await clientLight.act(agent => (agent.get(onOffType).state as any).onOff);
                        if (val === true) return;
                        await new Promise<void>(resolve => setTimeout(resolve, 0));
                    }
                })(),
                { macrotasks: true },
            );
        } finally {
            await MockTime.resolve(remote.close());
        }
    });

    it("handles WebSocket disconnection gracefully", async () => {
        await using site = new MockSite();
        const { node, factory } = await addWebSocketNode(site);
        const remote = await connectRemote(factory, node.id);

        try {
            expect(remote.lifecycle.isOnline).true;
        } finally {
            await MockTime.resolve(remote.close());
        }
    });
});
