/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { DnsMessageType, DnsRecord, DnsRecordClass, DnsRecordType, SrvRecordValue } from "#codec/DnsCodec.js";
import { MockCrypto } from "#crypto/MockCrypto.js";
import { DiscoveryNames } from "#net/dns-sd/DiscoveryNames.js";
import { DiscoveryService } from "#net/dns-sd/DiscoveryService.js";
import { MdnsSocket } from "#net/dns-sd/MdnsSocket.js";
import { MockNetwork } from "#net/mock/MockNetwork.js";
import { NetworkSimulator } from "#net/mock/NetworkSimulator.js";
import { Hours } from "#time/TimeUnit.js";
import { hex } from "#util/String.js";

export const MOCK_SERVICE_DOMAIN = "_foo._tcp.local";

export class MockSite {
    simulator = new NetworkSimulator();
    #hosts = new Map<number, MockHost>();

    async addHost(index: number) {
        index += 0x80;
        let host = this.#hosts.get(index);
        if (host === undefined) {
            const network = this.simulator.addHost(index);
            const mdns = await MdnsSocket.create(network);
            this.#hosts.set(index, (host = new MockHost(network, mdns, index)));
        }
        return host;
    }

    async addPair(index: number = 0) {
        return {
            client: await this.addHost(index + 1),
            server: await this.addHost(index + 0x11),
        };
    }

    async [Symbol.asyncDispose]() {
        for (const host of this.#hosts.values()) {
            await host.close();
        }
    }
}

export class MockHost {
    #network: MockNetwork;
    #mdns: MdnsSocket;
    #index: number;
    #names?: DiscoveryNames;
    #services?: Map<string, DiscoveryService>;

    constructor(network: MockNetwork, mdns: MdnsSocket, index: number) {
        this.#network = network;
        this.#mdns = mdns;
        this.#index = index;
    }

    get mdns() {
        return this.#mdns;
    }

    get names() {
        if (this.#names === undefined) {
            this.#names = new DiscoveryNames({ socket: this.mdns, entropy: MockCrypto(this.#index) });
        }
        return this.#names;
    }

    /**
     * Retrieve a specific service.
     */
    addService(nameOrIndex: number | string = 1) {
        if (!this.#services) {
            this.#services = new Map();
        }
        const qname = qnameOf(nameOrIndex);
        let service = this.#services.get(qname);
        if (service === undefined) {
            this.#services.set(qname, (service = new DiscoveryService(qname, this.names)));
        }
        return service;
    }

    /**
     * Respond to SRV queries with {@link broadcast}.
     */
    publish(nameOrIndex: number | string = 1, ttl = Hours(1)) {
        const qname = qnameOf(nameOrIndex);
        this.#mdns.receipt.on(async message => {
            if (message.queries.find(record => record.recordType === DnsRecordType.SRV && record.name === qname)) {
                await this.broadcast(qname, ttl);
            }
        });
    }

    /**
     * Send MDNS message now.
     */
    async broadcast(nameOrIndex: number | string = 1, ttl = Hours(1)) {
        const qname = qnameOf(nameOrIndex);
        const hostname = `${hex.fixed(this.#index, 16)}.local`;

        const answers: DnsRecord[] = [
            {
                name: qname,
                recordType: DnsRecordType.SRV,
                ttl,
                recordClass: DnsRecordClass.IN,
                value: {
                    port: 1234,
                    priority: 10,
                    weight: 1,
                    target: hostname,
                } satisfies SrvRecordValue,
            },

            {
                name: qname,
                recordType: DnsRecordType.TXT,
                ttl,
                recordClass: DnsRecordClass.IN,
                value: ["foo=bar", "flag"],
            },
        ];

        const additionalRecords = Array<DnsRecord>();
        for (const intf of this.#network.getNetInterfaces()) {
            const { ipV4, ipV6 } = this.#network.getIpMac(intf.name);

            for (const ips of [ipV4, ipV6]) {
                const recordType = ips === ipV4 ? DnsRecordType.A : DnsRecordType.AAAA;
                for (const ip of ips) {
                    answers.push({
                        name: hostname,
                        recordType,
                        ttl,
                        recordClass: DnsRecordClass.IN,
                        value: ip,
                    });
                }
            }
        }

        await this.#mdns.send({
            messageType: DnsMessageType.Response,
            answers,
            additionalRecords,
        });
    }

    async close() {
        await this.#names?.close();
        await this.#network.close();
    }
}

function qnameOf(nameOrIndex: number | string) {
    if (typeof nameOrIndex === "number") {
        return `service${hex.byte(nameOrIndex + 0x80)}.${MOCK_SERVICE_DOMAIN}`;
    }
    return nameOrIndex;
}
