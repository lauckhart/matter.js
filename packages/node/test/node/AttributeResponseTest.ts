/**
 * @license
 * Copyright 2022-2025 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { BasicInformationCluster } from "#clusters/basic-information";
import { AttributeResponse, Read } from "#protocol";
import { MockServerNode } from "./mock-server-node.js";

describe("AttributeReaderRequest", () => {
    it("reads concrete attribute", async () => {
        const response = await read(
            Read.Attribute({
                cluster: BasicInformationCluster,
                attributes: "vendorName",
            }),
        );

        expect(response).deep.equals([
            [
                {
                    kind: "attr-value",
                    path: {
                        attributeId: 1,
                        clusterId: 40,
                        endpointId: 0,
                    },
                    value: "Matter.js Test Vendor",
                },
            ],
        ]);
    });

    it("reads wildcard attributes", async () => {
        const response = await read(
            Read.Attribute({
                cluster: BasicInformationCluster,
            }),
        );

        expect(response).deep.equals([]);
    });

    // TODO - more tests
});

async function read(...args: Parameters<typeof Read>) {
    const request = Read(...args);
    if (!Read.isAttribute(request)) {
        throw new Error("Expected an attribute request");
    }

    const node = await MockServerNode.createOnline();

    const results = node.online({}, ({ context }) => {
        return [...new AttributeResponse(node.protocol, context, request)];
    });

    return results;
}
