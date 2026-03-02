/**
 * @license
 * Copyright 2022-2026 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Bytes, Duration, Logger, Seconds } from "@matter/general";
import { OtbrActiveDataset, OtbrError, OtbrNodeState, OtbrPendingDataset, OtbrResponseError } from "./OtbrTypes.js";

const logger = Logger.get("OtbrClient");

const DEFAULT_OTBR_TIMEOUT = Seconds(5);

/**
 * REST client for the OpenThread Border Router (OTBR) HTTP API.
 *
 * OTBR exposes a REST API (default port 8081) for managing the Thread network. This client provides typed access to
 * dataset, state, and identity endpoints.
 */
export class OtbrClient {
    readonly #baseUrl: string;
    readonly #timeout: Duration;

    constructor({ host = "localhost", port = 8081, timeout = DEFAULT_OTBR_TIMEOUT }: OtbrClient.Options = {}) {
        this.#baseUrl = `http://${host}:${port}`;
        this.#timeout = timeout;
    }

    /**
     * Get the active operational dataset as raw Thread TLV bytes.  Returns empty bytes if no dataset.
     */
    async getActiveDataset(): Promise<Bytes> {
        return this.#fetchDatasetTlv("/node/dataset/active");
    }

    /**
     * Get the pending operational dataset as raw Thread TLV bytes.  Returns empty bytes if no dataset.
     */
    async getPendingDataset(): Promise<Bytes> {
        return this.#fetchDatasetTlv("/node/dataset/pending");
    }

    /**
     * Set the active operational dataset from raw Thread TLV bytes.
     */
    async setActiveDataset(tlv: Bytes): Promise<void> {
        await this.#putDatasetTlv("/node/dataset/active", tlv);
    }

    /**
     * Set the pending operational dataset from raw Thread TLV bytes.
     */
    async setPendingDataset(tlv: Bytes): Promise<void> {
        await this.#putDatasetTlv("/node/dataset/pending", tlv);
    }

    /**
     * Get the Border Agent ID (16-byte unique identifier).
     */
    async getBorderAgentId(): Promise<Bytes> {
        const json = await this.#fetchJson<{ BorderAgentId: string }>("/node/ba-id");
        return Bytes.fromHex(json.BorderAgentId);
    }

    /**
     * Get the current Thread node state.
     */
    async getState(): Promise<OtbrNodeState> {
        return (await this.#fetchText("/node/state")) as OtbrNodeState;
    }

    /**
     * Get the Extended PAN ID as a hex string.
     */
    async getExtendedPanId(): Promise<string> {
        const json = await this.#fetchJson<{ ExtPanId: string }>("/node/ext-panid");
        return json.ExtPanId;
    }

    /**
     * Get the Thread network name.
     */
    async getNetworkName(): Promise<string> {
        const json = await this.#fetchJson<{ NetworkName: string }>("/node/network-name");
        return json.NetworkName;
    }

    /**
     * Get the active operational dataset as parsed JSON.  Returns undefined if no dataset is configured.
     */
    async getActiveDatasetJson(): Promise<OtbrActiveDataset | undefined> {
        return this.#fetchDatasetJson<OtbrActiveDataset>("/node/dataset/active");
    }

    /**
     * Get the pending operational dataset as parsed JSON.  Returns undefined if no dataset is configured.
     */
    async getPendingDatasetJson(): Promise<OtbrPendingDataset | undefined> {
        return this.#fetchDatasetJson<OtbrPendingDataset>("/node/dataset/pending");
    }

    /**
     * Set the active operational dataset from a JSON object.  Allows configuring a Thread network without manually
     * encoding Thread TLV.
     */
    async setActiveDatasetJson(dataset: OtbrActiveDataset): Promise<void> {
        await this.#putJson("/node/dataset/active", dataset);
    }

    /**
     * Set the pending operational dataset from a JSON object.
     */
    async setPendingDatasetJson(dataset: OtbrPendingDataset): Promise<void> {
        await this.#putJson("/node/dataset/pending", dataset);
    }

    async #fetchDatasetTlv(path: string): Promise<Bytes> {
        const url = new URL(path, this.#baseUrl).toString();
        logger.debug("GET", url, "(text/plain)");

        const response = await this.#fetch(url, {
            method: "GET",
            headers: { Accept: "text/plain" },
        });

        if (response.status === 204) {
            return new Uint8Array(0);
        }

        if (!response.ok) {
            throw new OtbrResponseError(response.status, await response.text());
        }

        const hex = (await response.text()).trim();
        return hex.length > 0 ? Bytes.fromHex(hex) : new Uint8Array(0);
    }

    async #putJson(path: string, body: object): Promise<void> {
        const url = new URL(path, this.#baseUrl).toString();
        logger.debug("PUT", url, "(application/json)");

        const response = await this.#fetch(url, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body),
        });

        if (!response.ok) {
            throw new OtbrResponseError(response.status, await response.text());
        }
    }

    async #putDatasetTlv(path: string, tlv: Bytes): Promise<void> {
        const url = new URL(path, this.#baseUrl).toString();
        const hex = Bytes.toHex(tlv);
        logger.debug("PUT", url, `(${tlv.byteLength} bytes)`);

        const response = await this.#fetch(url, {
            method: "PUT",
            headers: { "Content-Type": "text/plain" },
            body: hex,
        });

        if (!response.ok) {
            throw new OtbrResponseError(response.status, await response.text());
        }
    }

    async #fetchJson<T>(path: string): Promise<T> {
        const url = new URL(path, this.#baseUrl).toString();
        logger.debug("GET", url, "(application/json)");

        const response = await this.#fetch(url, {
            method: "GET",
            headers: { Accept: "application/json" },
        });

        if (!response.ok) {
            throw new OtbrResponseError(response.status, await response.text());
        }

        return await response.json();
    }

    async #fetchText(path: string): Promise<string> {
        const url = new URL(path, this.#baseUrl).toString();
        logger.debug("GET", url, "(text/plain)");

        const response = await this.#fetch(url, {
            method: "GET",
            headers: { Accept: "text/plain" },
        });

        if (!response.ok) {
            throw new OtbrResponseError(response.status, await response.text());
        }

        return (await response.text()).trim();
    }

    async #fetchDatasetJson<T>(path: string): Promise<T | undefined> {
        const url = new URL(path, this.#baseUrl).toString();
        logger.debug("GET", url, "(application/json dataset)");

        const response = await this.#fetch(url, {
            method: "GET",
            headers: { Accept: "application/json" },
        });

        if (response.status === 204) {
            return undefined;
        }

        if (!response.ok) {
            throw new OtbrResponseError(response.status, await response.text());
        }

        return await response.json();
    }

    async #fetch(url: string, init: RequestInit): Promise<Response> {
        try {
            return await fetch(url, {
                ...init,
                signal: AbortSignal.timeout(this.#timeout),
            });
        } catch (error) {
            OtbrError.reject(error);
            throw new OtbrError(`OTBR request to ${url} failed: ${(error as Error).message}`, { cause: error });
        }
    }
}

export namespace OtbrClient {
    export interface Options {
        /**
         * OTBR REST API host.  Default is "localhost".
         */
        host?: string;

        /**
         * OTBR REST API port.  Default is 8081.
         */
        port?: number;

        /**
         * Timeout for requests.  Default is 5s.
         */
        timeout?: Duration;
    }
}
