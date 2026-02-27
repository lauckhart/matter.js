/**
 * @license
 * Copyright 2022-2026 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { OtbrServer } from "#behaviors/thread-border-router-management";
import { Bytes } from "#general";
import { OtbrActiveDataset, OtbrNodeState, OtbrPendingDataset } from "#protocol";
import { StatusResponseError } from "#types";
import { MockEndpoint } from "../../endpoint/mock-endpoint.js";

/**
 * Stateful mock that overrides global `fetch` to simulate the OTBR REST API.
 */
class MockOtbrServer {
    activeDatasetTlv = "";
    pendingDatasetTlv = "";
    activeDatasetJson?: OtbrActiveDataset;
    pendingDatasetJson?: OtbrPendingDataset;
    borderAgentId = "0102030405060708090a0b0c0d0e0f10";
    nodeState: OtbrNodeState = "leader";
    extPanId = "dead00beef00cafe";
    networkName = "TestThread";

    #originalFetch!: typeof globalThis.fetch;
    #installed = false;

    install() {
        if (this.#installed) {
            throw new Error("MockOtbrServer is already installed");
        }
        this.#originalFetch = globalThis.fetch;
        globalThis.fetch = (input: string | URL | Request, init?: RequestInit) =>
            this.#handleFetch(input, init) as Promise<Response>;
        this.#installed = true;
    }

    uninstall() {
        if (!this.#installed) {
            return;
        }
        globalThis.fetch = this.#originalFetch;
        this.#installed = false;
    }

    async #handleFetch(input: string | URL | Request, init?: RequestInit): Promise<Response> {
        const url = typeof input === "string" ? input : input instanceof URL ? input.toString() : input.url;
        const path = new URL(url).pathname;
        const method = init?.method?.toUpperCase() ?? "GET";
        const accept = (init?.headers as Record<string, string>)?.Accept ?? "";
        const contentType = (init?.headers as Record<string, string>)?.["Content-Type"] ?? "";

        if (path === "/node/dataset/active") {
            return this.#handleDataset(method, accept, contentType, init, "active");
        }
        if (path === "/node/dataset/pending") {
            return this.#handleDataset(method, accept, contentType, init, "pending");
        }
        if (path === "/node/ba-id" && method === "GET") {
            return this.#jsonResponse({ BorderAgentId: this.borderAgentId });
        }
        if (path === "/node/state" && method === "GET") {
            return this.#textResponse(this.nodeState);
        }
        if (path === "/node/ext-panid" && method === "GET") {
            return this.#jsonResponse({ ExtPanId: this.extPanId });
        }
        if (path === "/node/network-name" && method === "GET") {
            return this.#jsonResponse({ NetworkName: this.networkName });
        }
        return new Response("Not Found", { status: 404 });
    }

    #handleDataset(
        method: string,
        accept: string,
        contentType: string,
        init: RequestInit | undefined,
        which: "active" | "pending",
    ): Response {
        const tlvField = which === "active" ? ("activeDatasetTlv" as const) : ("pendingDatasetTlv" as const);
        const jsonField = which === "active" ? ("activeDatasetJson" as const) : ("pendingDatasetJson" as const);

        if (method === "GET") {
            if (accept.includes("application/json")) {
                const json = this[jsonField];
                if (json === undefined) {
                    return new Response(null, { status: 204 });
                }
                return this.#jsonResponse(json);
            }
            const tlv = this[tlvField];
            if (!tlv) {
                return new Response(null, { status: 204 });
            }
            return this.#textResponse(tlv);
        }

        if (method === "PUT") {
            const body = init?.body as string;
            if (contentType.includes("application/json")) {
                (this as any)[jsonField] = JSON.parse(body);
            } else {
                this[tlvField] = body;
            }
            return new Response(null, { status: 200 });
        }

        return new Response("Method Not Allowed", { status: 405 });
    }

    #textResponse(text: string): Response {
        return new Response(text, { status: 200, headers: { "Content-Type": "text/plain" } });
    }

    #jsonResponse(data: unknown): Response {
        return new Response(JSON.stringify(data), { status: 200, headers: { "Content-Type": "application/json" } });
    }
}

const SAMPLE_TLV_HEX = "0e080000000000010000";

const SAMPLE_ACTIVE_JSON: OtbrActiveDataset = {
    activeTimestamp: { seconds: 1, ticks: 0, authoritative: false },
    networkKey: "00112233445566778899aabbccddeeff",
    networkName: "TestThread",
    extPanId: "dead00beef00cafe",
    panId: "0xface",
    channel: 15,
    meshLocalPrefix: "fdde:ad00:beef:0::/64",
    securityPolicy: { rotationTime: 672, flags: 0xf8 },
    pskc: "aabbccdd",
    channelMask: 0x07fff800,
};

const SAMPLE_PENDING_JSON: OtbrPendingDataset = {
    ...SAMPLE_ACTIVE_JSON,
    pendingTimestamp: { seconds: 2, ticks: 0, authoritative: false },
    delay: 30000,
};

/**
 * Flush pending micro- and macro-tasks.  The sync loop's fetch calls, transaction commits, and Response.text()/json()
 * calls all need multiple event loop ticks to resolve.
 */
async function flush() {
    for (let i = 0; i < 10; i++) {
        await new Promise(resolve => setTimeout(resolve, 0));
    }
}

async function createEndpoint(mock: MockOtbrServer) {
    MockTime.reset();

    const endpoint = await MockEndpoint.createWith(
        OtbrServer.set({
            borderRouterName: "Test BR",
            borderAgentId: Bytes.fromHex(mock.borderAgentId),
            interfaceEnabled: true,
            activeDatasetTimestamp: null,
            pendingDatasetTimestamp: null,
        }),
    );

    // Wait for the initial sync loop iteration to complete
    await flush();

    return endpoint;
}

/**
 * Wait for a sync loop iteration to complete after advancing time past the poll interval.
 */
async function advancePastPoll() {
    await MockTime.advance(31_000);
    await flush();
}

describe("OtbrServer", () => {
    const mock = new MockOtbrServer();

    beforeEach(() => {
        mock.activeDatasetTlv = SAMPLE_TLV_HEX;
        mock.pendingDatasetTlv = SAMPLE_TLV_HEX;
        mock.activeDatasetJson = { ...SAMPLE_ACTIVE_JSON };
        mock.pendingDatasetJson = { ...SAMPLE_PENDING_JSON };
        mock.borderAgentId = "0102030405060708090a0b0c0d0e0f10";
        mock.nodeState = "leader";
        mock.networkName = "TestThread";
        mock.install();
    });

    afterEach(() => {
        mock.uninstall();
    });

    describe("initial sync", () => {
        it("populates attributes from OTBR state", async () => {
            await using endpoint = await createEndpoint(mock);

            await endpoint.act(agent => {
                const state = agent.threadBorderRouterManagement.state;
                expect(state.interfaceEnabled).equals(true);
                expect(state.borderRouterName).equals("TestThread");
                expect(state.activeDatasetTimestamp).equals(1);
                expect(state.pendingDatasetTimestamp).equals(2);
                expect(Bytes.toHex(state.borderAgentId)).equals(mock.borderAgentId);
            });
        });
    });

    describe("getActiveDatasetRequest", () => {
        it("returns TLV dataset", async () => {
            await using endpoint = await createEndpoint(mock);

            const result = await endpoint.act(agent => {
                return agent.threadBorderRouterManagement.getActiveDatasetRequest();
            });

            expect(Bytes.toHex(result.dataset)).equals(SAMPLE_TLV_HEX);
        });
    });

    describe("setActiveDatasetRequest", () => {
        it("rejects when activeDatasetTimestamp is not null", async () => {
            await using endpoint = await createEndpoint(mock);

            // After initial sync, activeDatasetTimestamp is set to 1 (not null)
            await expect(
                endpoint.act(agent => {
                    return agent.threadBorderRouterManagement.setActiveDatasetRequest({
                        activeDataset: Bytes.fromHex("aabbccdd"),
                    });
                }),
            ).rejectedWith(StatusResponseError);
        });

        it("succeeds when activeDatasetTimestamp is null", async () => {
            mock.activeDatasetJson = undefined;
            await using endpoint = await createEndpoint(mock);

            // With no active dataset JSON, activeDatasetTimestamp stays null
            await endpoint.act(agent => {
                return agent.threadBorderRouterManagement.setActiveDatasetRequest({
                    activeDataset: Bytes.fromHex("aabbccdd"),
                });
            });

            expect(mock.activeDatasetTlv).equals("aabbccdd");
        });
    });

    describe("setPendingDatasetRequest", () => {
        it("forwards to OTBR", async () => {
            await using endpoint = await createEndpoint(mock);

            await endpoint.act(agent => {
                return agent.threadBorderRouterManagement.setPendingDatasetRequest({
                    pendingDataset: Bytes.fromHex("11223344"),
                });
            });

            expect(mock.pendingDatasetTlv).equals("11223344");
        });
    });

    describe("periodic polling", () => {
        it("refreshes attributes after poll interval", async () => {
            await using endpoint = await createEndpoint(mock);

            // Change mock state
            mock.networkName = "UpdatedNetwork";
            mock.nodeState = "disabled";
            mock.activeDatasetJson = {
                ...SAMPLE_ACTIVE_JSON,
                activeTimestamp: { seconds: 99, ticks: 0, authoritative: false },
            };

            // Advance past the default poll interval (30s) and wait for sync
            await advancePastPoll();

            await endpoint.act(agent => {
                const state = agent.threadBorderRouterManagement.state;
                expect(state.borderRouterName).equals("UpdatedNetwork");
                expect(state.interfaceEnabled).equals(false);
                expect(state.activeDatasetTimestamp).equals(99);
            });
        });
    });

    describe("error resilience", () => {
        it("survives sync errors without crashing", async () => {
            await using endpoint = await createEndpoint(mock);

            // Replace mock to return errors temporarily
            mock.uninstall();
            const savedFetch = globalThis.fetch;
            globalThis.fetch = (async () => new Response("Internal Server Error", { status: 500 })) as any;

            // Advance past poll interval — sync should fail but loop continues
            await advancePastPoll();

            // Restore mock and advance again — sync should recover
            globalThis.fetch = savedFetch;
            mock.install();
            mock.networkName = "Recovered";

            await advancePastPoll();

            await endpoint.act(agent => {
                expect(agent.threadBorderRouterManagement.state.borderRouterName).equals("Recovered");
            });
        });
    });
});
