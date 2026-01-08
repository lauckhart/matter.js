/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Minutes, ServerAddressUdp } from "#index.js";
import { DiscoveryService } from "#net/dns-sd/DiscoveryService.js";
import { MockSite } from "./dns-sd-helpers.js";

describe("DiscoveryService", () => {
    before(() => MockTime.enable());

    it("notices new addresses", async () => {
        await using site = new MockSite();
        const { client, server } = await site.addPair();

        const service = client.addService();
        const discovered = new Promise<void>(resolve => service.changed.once(resolve));

        await server.broadcast();

        await MockTime.resolve(discovered);

        expectAddresses(service.addresses);
        expectKvs(service);
    });

    it("solicits and resolves", async () => {
        await using site = new MockSite();
        const { client, server } = await site.addPair();

        const service = client.addService();

        server.publish();

        const addresses = await MockTime.resolve(service.resolve());

        expectAddresses(addresses);
        expectKvs(service);
    });

    it("expires", async () => {
        await using site = new MockSite();
        const { client, server } = await site.addPair();

        const service = client.addService();
        const discovered = new Promise<void>(resolve => service.changed.once(resolve));

        await server.broadcast();

        await MockTime.resolve(discovered);

        expectAddresses(service.addresses);

        await MockTime.advance(Minutes(30));

        expectAddresses(service.addresses);

        const expired = new Promise<void>(resolve => service.changed.once(resolve));

        await MockTime.advance(Minutes(31));

        await MockTime.resolve(expired);

        expect([...service.addresses].length).equals(0);
    });

    it("streams adds and deletes", () => {
        // TODO
    });
});

function expectAddresses(addresses?: Iterable<ServerAddressUdp>) {
    expect(addresses).not.undefined;
    expect([...addresses!]).deep.equals([
        { type: "udp", ip: "1111:2222:3333:4444:5555:6666:7777:8891", port: 1234 },
        { type: "udp", ip: "10.10.10.145", port: 1234 },
    ]);
}

function expectKvs(service: DiscoveryService) {
    expect([...service.kvs]).deep.equals([
        ["foo", "bar"],
        ["flag", ""],
    ]);
}
