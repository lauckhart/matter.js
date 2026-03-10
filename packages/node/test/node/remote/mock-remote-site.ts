/**
 * @license
 * Copyright 2022-2026 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { WebSocketServer } from "#behavior/system/websocket/WebSocketServer.js";
import { OnOffLightDevice } from "#devices/on-off-light";
import { Endpoint } from "#endpoint/Endpoint.js";
import {
    Crypto,
    Environment,
    HttpEndpointFactory,
    MockCrypto,
    MockHttpEndpointFactory,
    Seconds,
    WebSocketClient,
} from "@matter/general";
import { RemotePeerNode } from "#node/remote/RemotePeerNode.js";
import { RemoteNode } from "#node/remote/RemoteNode.js";
import { FabricId } from "@matter/types";
import { MockServerNode } from "../mock-server-node.js";
import type { MockSite } from "../mock-site.js";

const WebSocketRootEndpoint = MockServerNode.RootEndpoint.with(WebSocketServer);

/**
 * Add a {@link ServerNode} with {@link WebSocketServer} to a {@link MockSite}, injecting a
 * {@link MockHttpEndpointFactory} so WebSocket connections can be created via {@link MockHttpEndpointFactory.connect}.
 */
export async function addWebSocketNode(site: MockSite, options?: MockServerNode.Options<typeof WebSocketRootEndpoint>) {
    const factory = new MockHttpEndpointFactory();
    const env = new Environment("ws-server");
    env.set(HttpEndpointFactory, factory);

    const node = await site.addNode(WebSocketRootEndpoint, {
        ...options,
        environment: env,
    });

    return { node, factory };
}

/**
 * Create a {@link RemoteNode} connected to a server via the given {@link MockHttpEndpointFactory}.
 */
export async function connectRemote(factory: MockHttpEndpointFactory, serverNodeId = "node0") {
    const wsClient = new WebSocketClient();
    wsClient.connect = async () => factory.connect();
    Environment.default.set(WebSocketClient, wsClient);

    return await RemoteNode.connect({
        id: serverNodeId,
        url: MockHttpEndpointFactory.WS_URL,
    });
}

/**
 * Wait for a remote's structure to include a child endpoint with the given behavior ID.
 */
export async function waitForBehavior(
    remote: { parts: Iterable<Endpoint> },
    behaviorId: string,
    timeoutMs = 1000,
): Promise<Endpoint> {
    const start = Date.now();
    while (true) {
        for (const part of remote.parts) {
            if (part.behaviors.has(behaviorId)) {
                return part;
            }
        }
        if (Date.now() - start > timeoutMs) {
            throw new Error(`Timed out waiting for behavior "${behaviorId}" on remote`);
        }
        // Yield to allow async wire changes to process
        await new Promise<void>(resolve => queueMicrotask(() => resolve()));
    }
}

/**
 * Add a commissioned controller+device pair where the controller has {@link WebSocketServer}, injecting a
 * {@link MockHttpEndpointFactory} so WebSocket connections can be created via {@link MockHttpEndpointFactory.connect}.
 */
export async function addCommissionedWebSocketPair(site: MockSite, options?: MockSite.PairOptions) {
    const factory = new MockHttpEndpointFactory();
    const env = new Environment("ws-controller");
    env.set(HttpEndpointFactory, factory);

    const controller = await site.addNode(WebSocketRootEndpoint, {
        ...options?.controller,
        environment: env,
        controller: { adminFabricId: FabricId(1), ...options?.controller?.controller },
        commissioning: { enabled: false, ...options?.controller?.commissioning },
    });

    const device = await site.addNode(undefined, {
        device: OnOffLightDevice,
        ...options?.device,
    });

    const controllerCrypto = controller.env.get(Crypto) as MockCrypto;
    const deviceCrypto = device.env.get(Crypto) as MockCrypto;

    controllerCrypto.entropic = deviceCrypto.entropic = true;

    const { passcode, discriminator } = device.state.commissioning;
    await MockTime.resolve(controller.peers.commission({ passcode, discriminator, timeout: Seconds(90) }), {
        macrotasks: true,
    });

    controllerCrypto.entropic = deviceCrypto.entropic = false;

    return { controller, device, factory };
}

/**
 * Wait for a {@link RemoteNode} to discover at least one {@link RemotePeerNode} peer.
 */
export async function waitForPeer(remote: RemoteNode, timeoutMs = 5000): Promise<RemotePeerNode> {
    if (remote.peers.size > 0) {
        return [...remote.peers][0];
    }

    return new Promise<RemotePeerNode>((resolve, reject) => {
        const timer = setTimeout(() => {
            remote.peers.added.off(listener);
            reject(new Error("Timed out waiting for peer on remote"));
        }, timeoutMs);

        const listener = (peer: RemotePeerNode) => {
            clearTimeout(timer);
            remote.peers.added.off(listener);
            resolve(peer);
        };

        remote.peers.added.on(listener);
    });
}
