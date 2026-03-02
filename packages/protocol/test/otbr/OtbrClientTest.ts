/**
 * @license
 * Copyright 2022-2026 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Bytes } from "@matter/general";
import { OtbrClient } from "../../src/otbr/OtbrClient.js";
import { OtbrActiveDataset, OtbrPendingDataset, OtbrResponseError } from "../../src/otbr/OtbrTypes.js";
import { MockOtbrServer } from "./MockOtbrServer.js";

const SAMPLE_TLV_HEX = "0e080000000000010000";
const SAMPLE_ACTIVE_DATASET: OtbrActiveDataset = {
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
const SAMPLE_PENDING_DATASET: OtbrPendingDataset = {
    ...SAMPLE_ACTIVE_DATASET,
    pendingTimestamp: { seconds: 2, ticks: 0, authoritative: false },
    delay: 30000,
};

describe("OtbrClient", () => {
    const mock = new MockOtbrServer();
    let client: OtbrClient;

    beforeEach(() => {
        mock.install();
        mock.activeDatasetTlv = SAMPLE_TLV_HEX;
        mock.pendingDatasetTlv = SAMPLE_TLV_HEX;
        mock.activeDatasetJson = SAMPLE_ACTIVE_DATASET;
        mock.pendingDatasetJson = SAMPLE_PENDING_DATASET;
        client = new OtbrClient();
    });

    afterEach(() => {
        mock.uninstall();
    });

    describe("getActiveDataset", () => {
        it("returns TLV bytes when dataset exists", async () => {
            const result = await client.getActiveDataset();
            expect(Bytes.toHex(result)).equals(SAMPLE_TLV_HEX);
        });

        it("returns empty bytes on 204", async () => {
            mock.activeDatasetTlv = "";
            const result = await client.getActiveDataset();
            expect(result.byteLength).equals(0);
        });
    });

    describe("getPendingDataset", () => {
        it("returns TLV bytes when dataset exists", async () => {
            const result = await client.getPendingDataset();
            expect(Bytes.toHex(result)).equals(SAMPLE_TLV_HEX);
        });

        it("returns empty bytes on 204", async () => {
            mock.pendingDatasetTlv = "";
            const result = await client.getPendingDataset();
            expect(result.byteLength).equals(0);
        });
    });

    describe("setActiveDataset", () => {
        it("PUTs hex and updates mock state", async () => {
            const newTlv = "aabbccdd";
            await client.setActiveDataset(Bytes.fromHex(newTlv));
            expect(mock.activeDatasetTlv).equals(newTlv);
        });
    });

    describe("setPendingDataset", () => {
        it("PUTs hex and updates mock state", async () => {
            const newTlv = "11223344";
            await client.setPendingDataset(Bytes.fromHex(newTlv));
            expect(mock.pendingDatasetTlv).equals(newTlv);
        });
    });

    describe("getBorderAgentId", () => {
        it("returns 16-byte binary from hex", async () => {
            const result = await client.getBorderAgentId();
            expect(result.byteLength).equals(16);
            expect(Bytes.toHex(result)).equals(mock.borderAgentId);
        });
    });

    describe("getState", () => {
        it("returns state string", async () => {
            const result = await client.getState();
            expect(result).equals("leader");
        });

        it("reflects state changes", async () => {
            mock.nodeState = "disabled";
            const result = await client.getState();
            expect(result).equals("disabled");
        });
    });

    describe("getExtendedPanId", () => {
        it("returns hex string", async () => {
            const result = await client.getExtendedPanId();
            expect(result).equals(mock.extPanId);
        });
    });

    describe("getNetworkName", () => {
        it("returns name", async () => {
            const result = await client.getNetworkName();
            expect(result).equals("TestThread");
        });
    });

    describe("getActiveDatasetJson", () => {
        it("returns parsed JSON", async () => {
            const result = await client.getActiveDatasetJson();
            expect(result).deep.equals(SAMPLE_ACTIVE_DATASET);
        });

        it("returns undefined on 204", async () => {
            mock.activeDatasetJson = undefined;
            const result = await client.getActiveDatasetJson();
            expect(result).undefined;
        });
    });

    describe("getPendingDatasetJson", () => {
        it("returns parsed JSON", async () => {
            const result = await client.getPendingDatasetJson();
            expect(result).deep.equals(SAMPLE_PENDING_DATASET);
        });

        it("returns undefined on 204", async () => {
            mock.pendingDatasetJson = undefined;
            const result = await client.getPendingDatasetJson();
            expect(result).undefined;
        });
    });

    describe("setActiveDatasetJson", () => {
        it("PUTs JSON and updates mock state", async () => {
            const dataset: OtbrActiveDataset = { ...SAMPLE_ACTIVE_DATASET, networkName: "NewNetwork" };
            await client.setActiveDatasetJson(dataset);
            expect(mock.activeDatasetJson?.networkName).equals("NewNetwork");
        });
    });

    describe("setPendingDatasetJson", () => {
        it("PUTs JSON and updates mock state", async () => {
            const dataset: OtbrPendingDataset = { ...SAMPLE_PENDING_DATASET, delay: 60000 };
            await client.setPendingDatasetJson(dataset);
            expect(mock.pendingDatasetJson?.delay).equals(60000);
        });
    });

    describe("error handling", () => {
        it("throws OtbrResponseError on non-ok status", async () => {
            // Temporarily replace global fetch with one that always returns 500
            const mockFetch = globalThis.fetch;
            globalThis.fetch = (async () => new Response("Internal Server Error", { status: 500 })) as any;

            try {
                await expect(client.getState()).rejectedWith(OtbrResponseError);
            } finally {
                globalThis.fetch = mockFetch;
            }
        });
    });
});
