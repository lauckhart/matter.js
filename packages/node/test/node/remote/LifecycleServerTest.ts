/**
 * @license
 * Copyright 2022-2026 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { LifecycleServer } from "#behavior/system/lifecycle/LifecycleServer.js";
import { Api } from "#behavior/system/remote/api/Api.js";
import { WebSocketServer } from "#behavior/system/websocket/WebSocketServer.js";
import { Environment, HttpEndpointFactory, MockHttpEndpointFactory } from "@matter/general";
import { MockServerNode } from "../mock-server-node.js";
import { MockSite } from "../mock-site.js";

const LifecycleRootEndpoint = MockServerNode.RootEndpoint.with(WebSocketServer, LifecycleServer);

describe("LifecycleServer", () => {
    before(() => {
        MockTime.init();
    });

    it("stops node via remote API invoke", async () => {
        await using site = new MockSite();

        const factory = new MockHttpEndpointFactory();
        const env = new Environment("ws-lifecycle");
        env.set(HttpEndpointFactory, factory);

        const node = await site.addNode(LifecycleRootEndpoint, { environment: env });
        expect(node.lifecycle.isOnline).true;

        // Invoke lifecycle/stop via the remote API directly
        const response = await Api.execute(
            "test",
            node,
            {
                method: "invoke",
                target: "0/lifecycle/stop",
                id: "1",
            },
            new AbortController(),
        );

        expect(response.kind).equals("ok");

        // Let the deferred close complete
        await MockTime.resolve(node.lifecycle.offline);

        expect(node.lifecycle.isOnline).false;
    });
});
