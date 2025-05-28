/**
 * @license
 * Copyright 2022-2025 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { MockSite } from "./mock-site.js";

describe("ClientNode", () => {
    it("commissions", async () => {
        await using site = new MockSite();
        const { controller, device } = await site.addCommissionedPair();

        expect(device.state.commissioning.commissioned).equals(true);
        expect(controller.nodes.size).equals(1);
    });
});
