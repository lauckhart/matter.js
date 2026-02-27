/**
 * @license
 * Copyright 2022-2026 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { OtbrActiveDataset, OtbrNodeState, OtbrPendingDataset } from "../../src/otbr/OtbrTypes.js";

/**
 * Stateful mock that overrides global `fetch` to simulate the OTBR REST API.
 *
 * State fields are public so tests can set them directly.  Routes match on URL path, HTTP method, and Accept header.
 */
export class MockOtbrServer {
    activeDatasetTlv = "";
    pendingDatasetTlv = "";
    activeDatasetJson?: OtbrActiveDataset;
    pendingDatasetJson?: OtbrPendingDataset;
    borderAgentId = "0102030405060708090a0b0c0d0e0f10";
    nodeState: OtbrNodeState = "leader";
    extPanId = "dead00beef00cafe";
    networkName = "TestThread";

    #originalFetch: typeof globalThis.fetch;
    #installed = false;

    constructor() {
        this.#originalFetch = globalThis.fetch;
    }

    install() {
        if (this.#installed) {
            throw new Error("MockOtbrServer is already installed");
        }
        this.#originalFetch = globalThis.fetch;
        globalThis.fetch = this.#handleFetch.bind(this) as typeof globalThis.fetch;
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

        // Dataset routes
        if (path === "/node/dataset/active") {
            return this.#handleDataset(method, accept, contentType, init, "active");
        }
        if (path === "/node/dataset/pending") {
            return this.#handleDataset(method, accept, contentType, init, "pending");
        }

        // Identity/state routes
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
        const tlvField = which === "active" ? "activeDatasetTlv" : "pendingDatasetTlv";
        const jsonField = which === "active" ? "activeDatasetJson" : "pendingDatasetJson";

        if (method === "GET") {
            if (accept.includes("application/json")) {
                const json = this[jsonField];
                if (json === undefined) {
                    return new Response(null, { status: 204 });
                }
                return this.#jsonResponse(json);
            }
            // Default to text/plain for TLV
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
        return new Response(text, {
            status: 200,
            headers: { "Content-Type": "text/plain" },
        });
    }

    #jsonResponse(data: unknown): Response {
        return new Response(JSON.stringify(data), {
            status: 200,
            headers: { "Content-Type": "application/json" },
        });
    }
}
