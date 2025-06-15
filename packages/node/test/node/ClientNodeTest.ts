/**
 * @license
 * Copyright 2022-2025 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { DiscoveryError } from "#behavior/system/controller/discovery/DiscoveryError.js";
import { MockSite } from "./mock-site.js";

describe("ClientNode", () => {
    it("times out commissioning discovery", async () => {
        await using site = new MockSite();
        const controller = await site.addNode(undefined, { online: false, device: undefined });
        await MockTime.resolve(
            expect(
                controller.nodes.commission({ passcode: 12341234, discriminator: 1234, timeoutSeconds: 90 }),
            ).rejectedWith(DiscoveryError),
        );
    });

    it("times out continuous discovery", async () => {
        await using site = new MockSite();

        const controller = await site.addNode(undefined, { online: false, device: undefined });
        const discovered = await MockTime.resolve(
            controller.nodes.discover({ longDiscriminator: 1234, timeoutSeconds: 90 }),
        );

        expect(discovered.length).equals(0);
    });

    it("discovers", async () => {
        await using site = new MockSite();
        const { controller, device } = await site.addUncommissionedPair();

        const { discriminator } = device.state.commissioning;
        const discovered = await MockTime.resolve(
            controller.nodes.discover({ longDiscriminator: discriminator, timeoutSeconds: 90 }),
            { macrotasks: true },
        );

        expect(discovered.length).equals(1);
        expect(discovered[0].state.commissioning.discriminator === device.state.commissioning.discriminator);
    });

    it("commissions", async () => {
        await using site = new MockSite();
        const { controller, device } = await site.addCommissionedPair();

        expect(device.state.commissioning.commissioned).equals(true);
        expect(controller.nodes.size).equals(1);
    }).timeout(30 * 60 * 1000);
});
