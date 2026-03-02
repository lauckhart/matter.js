/**
 * @license
 * Copyright 2022-2026 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { OnOffServer } from "#behaviors/on-off";
import { Endpoint } from "#endpoint/Endpoint.js";
import { MockSite } from "../mock-site.js";
import { addCommissionedWebSocketPair, connectRemote, waitForBehavior, waitForPeer } from "./mock-remote-site.js";

/**
 * Get the OnOffLight child endpoint from a node.
 */
function findLight(node: { parts: Iterable<Endpoint> }) {
    const light = [...node.parts].find(part => part.behaviors.has(OnOffServer));
    if (!light) {
        throw new Error("OnOffLight endpoint not found");
    }
    return light as Endpoint;
}

describe("RemotePeerNode", () => {
    before(() => {
        MockTime.init();
        MockTime.forceMacrotasks = true;
    });

    it("discovers peer through subscription", async () => {
        await using site = new MockSite();
        const { controller, factory } = await addCommissionedWebSocketPair(site);

        expect(controller.peers.size).equals(1);

        const remote = await connectRemote(factory, controller.id);

        try {
            const peer = await MockTime.resolve(waitForPeer(remote), { macrotasks: true });
            expect(peer).not.undefined;
        } finally {
            await MockTime.resolve(remote.close());
        }
    });

    it("mirrors endpoint structure on the peer", async () => {
        await using site = new MockSite();
        const { controller, factory } = await addCommissionedWebSocketPair(site);
        const remote = await connectRemote(factory, controller.id);

        try {
            const peer = await MockTime.resolve(waitForPeer(remote), { macrotasks: true });
            const peerLight = await MockTime.resolve(waitForBehavior(peer, "onOff"), { macrotasks: true });
            expect(peerLight).not.undefined;
        } finally {
            await MockTime.resolve(remote.close());
        }
    });

    it("reads state on the peer", async () => {
        await using site = new MockSite();
        const { controller, device, factory } = await addCommissionedWebSocketPair(site);
        const remote = await connectRemote(factory, controller.id);

        try {
            const peer = await MockTime.resolve(waitForPeer(remote), { macrotasks: true });
            const peerLight = await MockTime.resolve(waitForBehavior(peer, "onOff"), { macrotasks: true });

            // Read onOff state — should be false initially
            const onOffType = peerLight.behaviors.supported["onOff"];
            const initialVal = await peerLight.act(agent => (agent.get(onOffType).state as any).onOff);
            expect(initialVal).false;

            // Toggle on the actual device
            const deviceLight = findLight(device);
            await deviceLight.act(async agent => {
                await agent.get(OnOffServer).toggle();
            });

            // Wait for the change to propagate: device → IM subscription → controller → StateStream →
            // WebSocket pipe (macrotask) → RemoteNode → RemotePeerNode
            await MockTime.resolve(
                (async () => {
                    while (true) {
                        const v = await peerLight.act(agent => (agent.get(onOffType).state as any).onOff);
                        if (v === true) return;
                        await MockTime.macrotask;
                    }
                })(),
                { macrotasks: true },
            );

            const val = await peerLight.act(agent => (agent.get(onOffType).state as any).onOff);
            expect(val).true;
        } finally {
            await MockTime.resolve(remote.close());
        }
    });

    it("handles peer disconnection", async () => {
        await using site = new MockSite();
        const { controller, factory } = await addCommissionedWebSocketPair(site);
        const remote = await connectRemote(factory, controller.id);

        try {
            await MockTime.resolve(waitForPeer(remote), { macrotasks: true });
            expect(remote.peers.size).equals(1);

            // Decommission the peer from the controller — this destroys the ClientNode and emits a delete
            // through the StateStream
            const controllerPeer = [...controller.peers][0];
            await MockTime.resolve(controllerPeer.decommission(), { macrotasks: true });

            // Wait for peer removal to propagate through the WebSocket pipe
            await MockTime.resolve(
                (async () => {
                    while (remote.peers.size > 0) {
                        await MockTime.macrotask;
                    }
                })(),
                { macrotasks: true },
            );

            expect(remote.peers.size).equals(0);
        } finally {
            await MockTime.resolve(remote.close());
        }
    });
});
