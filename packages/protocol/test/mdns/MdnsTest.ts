/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Fabric } from "#fabric/Fabric.js";
import {
    Bytes,
    createPromise,
    DnsCodec,
    DnsMessage,
    DnsMessageType,
    DnsRecordType,
    MockCrypto,
    MockNetwork,
    MockUdpChannel,
    NetworkSimulator,
    UdpChannel,
} from "#general";
import {
    Advertisement,
    Advertiser,
    CommissioningMode,
    MdnsAdvertiser,
    MdnsClient,
    MdnsScannerTargetCriteria,
    MdnsServer,
    MdnsSocket,
    ServiceDescription,
} from "#index.js";
import { NodeId, VendorId } from "#types";

const SERVER_IPv4 = "192.168.200.1";
const SERVER_IPv6 = "fe80::e777:4f5e:c61e:7314";
const SERVER_MAC = "00:B0:D0:63:C2:26";
const CLIENT_IPv4 = "192.168.200.2";
const CLIENT_IPv6 = "fe80::e777:4f5e:c61e:7315";
const CLIENT_MAC = "CA:FE:00:00:BE:EF";
const PORT = 5540;
const PORT2 = 5541;
const PORT3 = 5542;

const OPERATIONAL_ID = Bytes.fromHex("0000000000000018");
const NODE_ID = NodeId(BigInt(1));

const FABRIC = { operationalId: OPERATIONAL_ID, nodeId: NODE_ID } as Fabric;
const OPERATIONAL_SERVICE = ServiceDescription.Operational({
    fabric: FABRIC,
});

const COMMISSIONABLE_SERVICE = ServiceDescription.Commissionable({
    name: "Test Device",
    mode: CommissioningMode.Basic,
    deviceType: 1,
    vendorId: VendorId(1),
    productId: 0x8000,
    discriminator: 1234,
});

[
    { serverHasIpv4Addresses: true, testIpv4Enabled: true },
    { serverHasIpv4Addresses: true, testIpv4Enabled: false },
    { serverHasIpv4Addresses: false, testIpv4Enabled: false },
].forEach(({ serverHasIpv4Addresses, testIpv4Enabled }) => {
    const serverIps = serverHasIpv4Addresses ? [SERVER_IPv4, SERVER_IPv6] : [SERVER_IPv6];
    const clientIps = testIpv4Enabled ? [CLIENT_IPv4, CLIENT_IPv6] : [CLIENT_IPv6];

    const IPDnsRecords = [
        {
            flushCache: false,
            name: "00B0D063C2260000.local",
            recordType: 28,
            recordClass: 1,
            ttl: 120,
            value: "fe80::e777:4f5e:c61e:7314",
        },
    ];
    if (testIpv4Enabled && serverHasIpv4Addresses) {
        IPDnsRecords.push({
            flushCache: false,
            name: "00B0D063C2260000.local",
            recordType: 1,
            recordClass: 1,
            ttl: 120,
            value: "192.168.200.1",
        });
    }

    const IPIntegrationResultsPort1 = [{ ip: `${SERVER_IPv6}%fake0`, port: PORT, type: "udp" }];
    const IPIntegrationResultsPort2 = [{ ip: `${SERVER_IPv6}%fake0`, port: PORT2, type: "udp" }];
    if (testIpv4Enabled && serverHasIpv4Addresses) {
        IPIntegrationResultsPort1.push({ ip: SERVER_IPv4, port: PORT, type: "udp" });
        IPIntegrationResultsPort2.push({ ip: SERVER_IPv4, port: PORT2, type: "udp" });
    }

    describe(`MDNS Scanner and Broadcaster ${testIpv4Enabled ? "with" : "without"} IPv4 (and Ipv4 ${
        serverHasIpv4Addresses ? "" : "not "
    }provided)`, () => {
        const crypto = MockCrypto();
        before(MockTime.enable);

        let serverSocket: MdnsSocket;
        let server: MdnsServer;
        let clientSocket: MdnsSocket;
        let client: MdnsClient;
        let scanListener: UdpChannel;
        let broadcastListener: UdpChannel;

        let advertisers = {} as Record<number, Advertiser>;

        beforeEach(async () => {
            const simulator = new NetworkSimulator();
            const serverNetwork = new MockNetwork(simulator, SERVER_MAC, serverIps);
            const clientNetwork = new MockNetwork(simulator, CLIENT_MAC, clientIps);

            let multicastIp, type: "udp4" | "udp6";
            if (testIpv4Enabled) {
                multicastIp = "224.0.0.251";
                type = "udp4";
            } else {
                multicastIp = "ff02::fb";
                type = "udp6";
            }

            advertisers = {};

            clientSocket = await MdnsSocket.create(clientNetwork, {
                enableIpv4: testIpv4Enabled,
                netInterface: "fake0",
            });
            client = new MdnsClient(clientSocket);

            serverSocket = await MdnsSocket.create(serverNetwork, {
                enableIpv4: testIpv4Enabled,
                netInterface: "fake0",
            });
            server = new MdnsServer(serverSocket);

            // Add an additional listener on the broadcaster to detect scans
            scanListener = new MockUdpChannel(serverNetwork, {
                listeningPort: 5353,
                listeningAddress: testIpv4Enabled ? SERVER_IPv4 : SERVER_IPv6,
                type,
            });
            (scanListener as any).foo = "scannerChannel";
            scanListener.addMembership(multicastIp);

            // Add an additional listener on the scanner to detect broadcaster announcements
            broadcastListener = new MockUdpChannel(clientNetwork, {
                listeningPort: 5353,
                listeningAddress: testIpv4Enabled ? CLIENT_IPv4 : CLIENT_IPv6,
                type,
            });
            (broadcastListener as any).foo = "broadcasterChannel";
            broadcastListener.addMembership(multicastIp);
        });

        afterEach(async () => {
            await MockTime.resolve(closeAll());
            await server.close();
            await client.close();
            await scanListener.close();
            await broadcastListener.close();
        });

        function advertise(service: ServiceDescription, port = PORT) {
            let advertiser = advertisers[port];
            if (advertiser === undefined) {
                advertiser = advertisers[port] = new MdnsAdvertiser(crypto, server, port);
            }
            const ad = advertiser.advertise(service)!;
            expect(ad).not.undefined;
        }

        async function close(port = PORT) {
            const advertiser = advertisers[port];
            expect(advertiser.advertisements.size).greaterThan(0);
            await MockTime.resolve(Advertisement.closeAll(advertiser.advertisements));
        }

        async function closeAll() {
            for (const port in advertisers) {
                await advertisers[port].close();
                delete advertisers[port];
            }
        }

        describe("broadcaster", () => {
            it("has correct crypto installed", async () => {
                // This is the first place we encounter this in a full test run so be a little explicit about it
                expect(crypto.randomUint8).equals(0x80, "Crypto mocking is broken, tests will fail");
            });

            it("it broadcasts the device fabric on one port and expires", async () => {
                const { promise, resolver } = createPromise<Uint8Array>();
                const listener = scanListener.onData((_netInterface, _peerAddress, _peerPort, data) => resolver(data));

                advertise({
                    ...OPERATIONAL_SERVICE,
                    idleIntervalMs: 100,
                    activeIntervalMs: 200,
                });

                const result = DnsCodec.decode(await promise);
                expectMessage(result, {
                    transactionId: 0,
                    messageType: 0x8400,
                    queries: [],
                    answers: [
                        {
                            flushCache: false,
                            name: "_services._dns-sd._udp.local",
                            recordType: 12,
                            recordClass: 1,
                            ttl: 120,
                            value: "_matter._tcp.local",
                        },
                        {
                            flushCache: false,
                            name: "_services._dns-sd._udp.local",
                            recordType: 12,
                            recordClass: 1,
                            ttl: 120,
                            value: "_I0000000000000018._sub._matter._tcp.local",
                        },
                        {
                            flushCache: false,
                            name: "_matter._tcp.local",
                            recordType: 12,
                            recordClass: 1,
                            ttl: 120,
                            value: "0000000000000018-0000000000000001._matter._tcp.local",
                        },
                        {
                            flushCache: false,
                            name: "_I0000000000000018._sub._matter._tcp.local",
                            recordType: 12,
                            recordClass: 1,
                            ttl: 120,
                            value: "0000000000000018-0000000000000001._matter._tcp.local",
                        },
                    ],
                    authorities: [],
                    additionalRecords: [
                        {
                            flushCache: false,
                            name: "0000000000000018-0000000000000001._matter._tcp.local",
                            recordType: 33,
                            recordClass: 1,
                            ttl: 120,
                            value: { priority: 0, weight: 0, port: PORT, target: "00B0D063C2260000.local" },
                        },
                        {
                            flushCache: false,
                            name: "0000000000000018-0000000000000001._matter._tcp.local",
                            recordType: 16,
                            recordClass: 1,
                            ttl: 120,
                            value: ["SII=100", "SAI=200", "SAT=4000"],
                        },
                        ...IPDnsRecords,
                    ],
                });
                await listener.close();

                const { promise: expiryPromise, resolver: expiryResolver } = createPromise<Uint8Array>();
                const expiryListener = scanListener.onData((_netInterface, _peerAddress, _peerPort, data) =>
                    expiryResolver(data),
                );

                // And expire the announcement
                await close();

                const expiryResult = DnsCodec.decode(await expiryPromise);

                // Expiry is the same as the announcement result but with ttl = 0
                expectMessage(expiryResult, {
                    transactionId: 0,
                    messageType: 0x8400,
                    queries: [],
                    answers: [
                        {
                            flushCache: false,
                            name: "_services._dns-sd._udp.local",
                            recordType: 12,
                            recordClass: 1,
                            ttl: 0,
                            value: "_matter._tcp.local",
                        },
                        {
                            flushCache: false,
                            name: "_services._dns-sd._udp.local",
                            recordType: 12,
                            recordClass: 1,
                            ttl: 0,
                            value: "_I0000000000000018._sub._matter._tcp.local",
                        },
                        {
                            flushCache: false,
                            name: "_matter._tcp.local",
                            recordType: 12,
                            recordClass: 1,
                            ttl: 0,
                            value: "0000000000000018-0000000000000001._matter._tcp.local",
                        },
                        {
                            flushCache: false,
                            name: "_I0000000000000018._sub._matter._tcp.local",
                            recordType: 12,
                            recordClass: 1,
                            ttl: 0,
                            value: "0000000000000018-0000000000000001._matter._tcp.local",
                        },
                    ],
                    authorities: [],
                    additionalRecords: [
                        {
                            flushCache: false,
                            name: "0000000000000018-0000000000000001._matter._tcp.local",
                            recordType: 33,
                            recordClass: 1,
                            ttl: 0,
                            value: { priority: 0, weight: 0, port: PORT, target: "00B0D063C2260000.local" },
                        },
                        {
                            flushCache: false,
                            name: "0000000000000018-0000000000000001._matter._tcp.local",
                            recordType: 16,
                            recordClass: 1,
                            ttl: 0,
                            value: ["SII=100", "SAI=200", "SAT=4000"],
                        },
                        ...IPDnsRecords.map(record => ({ ...record, ttl: 0 })),
                    ],
                });
                await expiryListener.close();
            });

            it("it broadcasts the device commissionable info on one port", async () => {
                const { promise, resolver } = createPromise<Uint8Array>();
                const listener = scanListener.onData((_netInterface, _peerAddress, _peerPort, data) => resolver(data));

                advertise(COMMISSIONABLE_SERVICE);

                const result = DnsCodec.decode(await promise);

                expectMessage(result, {
                    additionalRecords: [
                        {
                            flushCache: false,
                            name: "8080808080808080._matterc._udp.local",
                            recordClass: 1,
                            recordType: 33,
                            ttl: 120,
                            value: { port: PORT, priority: 0, target: "00B0D063C2260000.local", weight: 0 },
                        },
                        {
                            flushCache: false,
                            name: "8080808080808080._matterc._udp.local",
                            recordClass: 1,
                            recordType: 16,
                            ttl: 120,
                            value: [
                                "VP=1+32768",
                                "DT=1",
                                "DN=Test Device",
                                "SII=500",
                                "SAI=300",
                                "SAT=4000",
                                "D=1234",
                                "CM=1",
                                "PH=33",
                                "PI=",
                            ],
                        },
                        ...IPDnsRecords,
                    ],
                    answers: [
                        {
                            flushCache: false,
                            name: "_services._dns-sd._udp.local",
                            recordClass: 1,
                            recordType: 12,
                            ttl: 120,
                            value: "_matterc._udp.local",
                        },
                        {
                            flushCache: false,
                            name: "_services._dns-sd._udp.local",
                            recordClass: 1,
                            recordType: 12,
                            ttl: 120,
                            value: "_V1._sub._matterc._udp.local",
                        },
                        {
                            flushCache: false,
                            name: "_services._dns-sd._udp.local",
                            recordClass: 1,
                            recordType: 12,
                            ttl: 120,
                            value: "_T1._sub._matterc._udp.local",
                        },
                        {
                            flushCache: false,
                            name: "_services._dns-sd._udp.local",
                            recordClass: 1,
                            recordType: 12,
                            ttl: 120,
                            value: "_S4._sub._matterc._udp.local",
                        },
                        {
                            flushCache: false,
                            name: "_services._dns-sd._udp.local",
                            recordClass: 1,
                            recordType: 12,
                            ttl: 120,
                            value: "_L1234._sub._matterc._udp.local",
                        },
                        {
                            flushCache: false,
                            name: "_services._dns-sd._udp.local",
                            recordClass: 1,
                            recordType: 12,
                            ttl: 120,
                            value: "_CM._sub._matterc._udp.local",
                        },
                        {
                            flushCache: false,
                            name: "_matterc._udp.local",
                            recordClass: 1,
                            recordType: 12,
                            ttl: 120,
                            value: "8080808080808080._matterc._udp.local",
                        },
                        {
                            flushCache: false,
                            name: "_V1._sub._matterc._udp.local",
                            recordClass: 1,
                            recordType: 12,
                            ttl: 120,
                            value: "8080808080808080._matterc._udp.local",
                        },
                        {
                            flushCache: false,
                            name: "_T1._sub._matterc._udp.local",
                            recordClass: 1,
                            recordType: 12,
                            ttl: 120,
                            value: "8080808080808080._matterc._udp.local",
                        },
                        {
                            flushCache: false,
                            name: "_S4._sub._matterc._udp.local",
                            recordClass: 1,
                            recordType: 12,
                            ttl: 120,
                            value: "8080808080808080._matterc._udp.local",
                        },
                        {
                            flushCache: false,
                            name: "_L1234._sub._matterc._udp.local",
                            recordClass: 1,
                            recordType: 12,
                            ttl: 120,
                            value: "8080808080808080._matterc._udp.local",
                        },
                        {
                            flushCache: false,
                            name: "_CM._sub._matterc._udp.local",
                            recordClass: 1,
                            recordType: 12,
                            ttl: 120,
                            value: "8080808080808080._matterc._udp.local",
                        },
                    ],
                    authorities: [],
                    messageType: 0x8400,
                    queries: [],
                    transactionId: 0,
                });

                await listener.close();

                // And expire the announcement
                await close();
            });

            it("it broadcasts the controller commissioner on one port", async () => {
                const { promise, resolver } = createPromise<Uint8Array>();
                const listener = scanListener.onData((_netInterface, _peerAddress, _peerPort, data) => resolver(data));

                advertise(
                    ServiceDescription.Commissioner({
                        name: "Test Commissioner",
                        deviceType: 1,
                        vendorId: VendorId(1),
                        productId: 0x8000,
                    }),
                );

                const result = DnsCodec.decode(await promise);

                expectMessage(result, {
                    additionalRecords: [
                        {
                            flushCache: false,
                            name: "8080808080808080._matterd._udp.local",
                            recordClass: 1,
                            recordType: 33,
                            ttl: 120,
                            value: { port: PORT, priority: 0, target: "00B0D063C2260000.local", weight: 0 },
                        },
                        {
                            flushCache: false,
                            name: "8080808080808080._matterd._udp.local",
                            recordClass: 1,
                            recordType: 16,
                            ttl: 120,
                            value: ["VP=1+32768", "DT=1", "DN=Test Commissioner", "SII=500", "SAI=300", "SAT=4000"],
                        },
                        ...IPDnsRecords,
                    ],
                    answers: [
                        {
                            flushCache: false,
                            name: "_services._dns-sd._udp.local",
                            recordClass: 1,
                            recordType: 12,
                            ttl: 120,
                            value: "_matterd._udp.local",
                        },
                        {
                            flushCache: false,
                            name: "_matterd._udp.local",
                            recordClass: 1,
                            recordType: 12,
                            ttl: 120,
                            value: "_V1._sub._matterd._udp.local",
                        },
                        {
                            flushCache: false,
                            name: "_V1._sub._matterd._udp.local",
                            recordClass: 1,
                            recordType: 12,
                            ttl: 120,
                            value: "8080808080808080._matterd._udp.local",
                        },
                        {
                            flushCache: false,
                            name: "_services._dns-sd._udp.local",
                            recordClass: 1,
                            recordType: 12,
                            ttl: 120,
                            value: "_T1._sub._matterd._udp.local",
                        },
                        {
                            flushCache: false,
                            name: "_T1._sub._matterd._udp.local",
                            recordClass: 1,
                            recordType: 12,
                            ttl: 120,
                            value: "8080808080808080._matterd._udp.local",
                        },
                    ],
                    authorities: [],
                    messageType: 0x8400,
                    queries: [],
                    transactionId: 0,
                });

                await listener.close();

                // And expire the announcement
                await close();
            });

            it.only("it allows announcements of multiple devices on different ports", async () => {
                const { promise, resolver } = createPromise<void>();
                const dataArr: Uint8Array[] = [];
                const listener = scanListener.onData((_netInterface, _peerAddress, _peerPort, data) => {
                    dataArr.push(data);
                    if (dataArr.length === 3) resolver();
                });

                advertise(OPERATIONAL_SERVICE);
                advertise(COMMISSIONABLE_SERVICE, PORT2);
                advertise(
                    ServiceDescription.Commissioner({
                        name: "Test Commissioner",
                        deviceType: 1,
                        vendorId: VendorId(1),
                        productId: 0x8000,
                    }),
                );

                await promise;

                const result1 = DnsCodec.decode(dataArr[0]);
                expectMessage(result1, {
                    transactionId: 0,
                    messageType: 0x8400,
                    queries: [],
                    answers: [
                        {
                            flushCache: false,
                            name: "_services._dns-sd._udp.local",
                            recordType: 12,
                            recordClass: 1,
                            ttl: 120,
                            value: "_matter._tcp.local",
                        },
                        {
                            flushCache: false,
                            name: "_services._dns-sd._udp.local",
                            recordType: 12,
                            recordClass: 1,
                            ttl: 120,
                            value: "_I0000000000000018._sub._matter._tcp.local",
                        },
                        {
                            flushCache: false,
                            name: "_matter._tcp.local",
                            recordType: 12,
                            recordClass: 1,
                            ttl: 120,
                            value: "0000000000000018-0000000000000001._matter._tcp.local",
                        },
                        {
                            flushCache: false,
                            name: "_I0000000000000018._sub._matter._tcp.local",
                            recordType: 12,
                            recordClass: 1,
                            ttl: 120,
                            value: "0000000000000018-0000000000000001._matter._tcp.local",
                        },
                    ],
                    authorities: [],
                    additionalRecords: [
                        {
                            flushCache: false,
                            name: "0000000000000018-0000000000000001._matter._tcp.local",
                            recordType: 33,
                            recordClass: 1,
                            ttl: 120,
                            value: { priority: 0, weight: 0, port: PORT, target: "00B0D063C2260000.local" },
                        },
                        {
                            flushCache: false,
                            name: "0000000000000018-0000000000000001._matter._tcp.local",
                            recordType: 16,
                            recordClass: 1,
                            ttl: 120,
                            value: ["SII=500", "SAI=300", "SAT=4000"],
                        },
                        ...IPDnsRecords,
                    ],
                });

                const result2 = DnsCodec.decode(dataArr[1]);
                expect(result2).deep.equal({
                    additionalRecords: [
                        {
                            flushCache: false,
                            name: "8080808080808080._matterc._udp.local",
                            recordClass: 1,
                            recordType: 33,
                            ttl: 120,
                            value: { port: PORT2, priority: 0, target: "00B0D063C2260000.local", weight: 0 },
                        },
                        {
                            flushCache: false,
                            name: "8080808080808080._matterc._udp.local",
                            recordClass: 1,
                            recordType: 16,
                            ttl: 120,
                            value: [
                                "VP=1+32768",
                                "DT=1",
                                "DN=Test Device",
                                "SII=500",
                                "SAI=300",
                                "SAT=4000",
                                "D=1234",
                                "CM=1",
                                "PH=33",
                                "PI=",
                            ],
                        },
                        ...IPDnsRecords,
                    ],
                    answers: [
                        {
                            flushCache: false,
                            name: "_services._dns-sd._udp.local",
                            recordClass: 1,
                            recordType: 12,
                            ttl: 120,
                            value: "_matterc._udp.local",
                        },
                        {
                            flushCache: false,
                            name: "_services._dns-sd._udp.local",
                            recordClass: 1,
                            recordType: 12,
                            ttl: 120,
                            value: "_V1._sub._matterc._udp.local",
                        },
                        {
                            flushCache: false,
                            name: "_services._dns-sd._udp.local",
                            recordClass: 1,
                            recordType: 12,
                            ttl: 120,
                            value: "_T1._sub._matterc._udp.local",
                        },
                        {
                            flushCache: false,
                            name: "_services._dns-sd._udp.local",
                            recordClass: 1,
                            recordType: 12,
                            ttl: 120,
                            value: "_S4._sub._matterc._udp.local",
                        },
                        {
                            flushCache: false,
                            name: "_services._dns-sd._udp.local",
                            recordClass: 1,
                            recordType: 12,
                            ttl: 120,
                            value: "_L1234._sub._matterc._udp.local",
                        },
                        {
                            flushCache: false,
                            name: "_services._dns-sd._udp.local",
                            recordClass: 1,
                            recordType: 12,
                            ttl: 120,
                            value: "_CM._sub._matterc._udp.local",
                        },
                        {
                            flushCache: false,
                            name: "_matterc._udp.local",
                            recordClass: 1,
                            recordType: 12,
                            ttl: 120,
                            value: "8080808080808080._matterc._udp.local",
                        },
                        {
                            flushCache: false,
                            name: "_V1._sub._matterc._udp.local",
                            recordClass: 1,
                            recordType: 12,
                            ttl: 120,
                            value: "8080808080808080._matterc._udp.local",
                        },
                        {
                            flushCache: false,
                            name: "_T1._sub._matterc._udp.local",
                            recordClass: 1,
                            recordType: 12,
                            ttl: 120,
                            value: "8080808080808080._matterc._udp.local",
                        },
                        {
                            flushCache: false,
                            name: "_S4._sub._matterc._udp.local",
                            recordClass: 1,
                            recordType: 12,
                            ttl: 120,
                            value: "8080808080808080._matterc._udp.local",
                        },
                        {
                            flushCache: false,
                            name: "_L1234._sub._matterc._udp.local",
                            recordClass: 1,
                            recordType: 12,
                            ttl: 120,
                            value: "8080808080808080._matterc._udp.local",
                        },
                        {
                            flushCache: false,
                            name: "_CM._sub._matterc._udp.local",
                            recordClass: 1,
                            recordType: 12,
                            ttl: 120,
                            value: "8080808080808080._matterc._udp.local",
                        },
                    ],
                    authorities: [],
                    messageType: 0x8400,
                    queries: [],
                    transactionId: 0,
                });

                const result3 = DnsCodec.decode(dataArr[2]);
                expectMessage(result3, {
                    additionalRecords: [
                        {
                            flushCache: false,
                            name: "8080808080808080._matterd._udp.local",
                            recordClass: 1,
                            recordType: 33,
                            ttl: 120,
                            value: { port: PORT3, priority: 0, target: "00B0D063C2260000.local", weight: 0 },
                        },
                        {
                            flushCache: false,
                            name: "8080808080808080._matterd._udp.local",
                            recordClass: 1,
                            recordType: 16,
                            ttl: 120,
                            value: ["VP=1+32768", "DT=1", "DN=Test Commissioner", "SII=500", "SAI=300", "SAT=4000"],
                        },
                        ...IPDnsRecords,
                    ],
                    answers: [
                        {
                            flushCache: false,
                            name: "_services._dns-sd._udp.local",
                            recordClass: 1,
                            recordType: 12,
                            ttl: 120,
                            value: "_matterd._udp.local",
                        },
                        {
                            flushCache: false,
                            name: "_matterd._udp.local",
                            recordClass: 1,
                            recordType: 12,
                            ttl: 120,
                            value: "_V1._sub._matterd._udp.local",
                        },
                        {
                            flushCache: false,
                            name: "_V1._sub._matterd._udp.local",
                            recordClass: 1,
                            recordType: 12,
                            ttl: 120,
                            value: "8080808080808080._matterd._udp.local",
                        },
                        {
                            flushCache: false,
                            name: "_services._dns-sd._udp.local",
                            recordClass: 1,
                            recordType: 12,
                            ttl: 120,
                            value: "_T1._sub._matterd._udp.local",
                        },
                        {
                            flushCache: false,
                            name: "_T1._sub._matterd._udp.local",
                            recordClass: 1,
                            recordType: 12,
                            ttl: 120,
                            value: "8080808080808080._matterd._udp.local",
                        },
                    ],
                    authorities: [],
                    messageType: 0x8400,
                    queries: [],
                    transactionId: 0,
                });
                await listener.close();

                // And expire the announcement for all via close
                await closeAll();
            });
        });

        describe("Disabled discovery", () => {
            it("the client do not know announced records if scanning is not enabled by criteria", async () => {
                advertise(COMMISSIONABLE_SERVICE);
                advertise(OPERATIONAL_SERVICE, PORT2);

                await MockTime.yield3();
                await MockTime.yield3();

                // Same result when we just get the records
                expect(client.getDiscoveredOperationalDevice(FABRIC, NODE_ID)?.addresses).deep.equal(undefined);

                // No commissionable devices because never queried
                expect(client.getDiscoveredCommissionableDevices({ longDiscriminator: 1234 })).deep.equal([]);

                // And expire the announcement
                await closeAll();

                // And removed after expiry
                expect(client.getDiscoveredOperationalDevice(FABRIC, NODE_ID)).deep.equal(undefined);

                expect(client.getDiscoveredCommissionableDevices({ longDiscriminator: 1234 })).deep.equal([]);
            });
        });

        describe("Only commissionable discovery", () => {
            const criteria: MdnsScannerTargetCriteria = {
                commissionable: true,
                operationalTargets: [],
            };
            beforeEach(() => client.targetCriteriaProviders.add(criteria));
            afterEach(() => client.targetCriteriaProviders.delete(criteria));

            it("the client do not know announced operational records if scanning is not enabled by criteria", async () => {
                advertise(COMMISSIONABLE_SERVICE);
                advertise(OPERATIONAL_SERVICE, PORT2);

                await MockTime.yield3();
                await MockTime.yield3();

                // Same result when we just get the records
                expect(client.getDiscoveredOperationalDevice(FABRIC, NODE_ID)?.addresses).deep.equal(undefined);

                // No commissionable devices because never queried
                expect(client.getDiscoveredCommissionableDevices({ longDiscriminator: 1234 })).deep.equal([
                    {
                        CM: 1,
                        D: 1234,
                        DN: "Test Device",
                        DT: 1,
                        P: 32768,
                        PH: 33,
                        PI: "",
                        SAI: 300,
                        SD: 4,
                        SII: 500,
                        SAT: 4000,
                        T: 0,
                        ICD: 0,
                        V: 1,
                        VP: "1+32768",
                        addresses: IPIntegrationResultsPort1,
                        deviceIdentifier: "8080808080808080",
                        discoveredAt: undefined,
                        ttl: undefined,
                        instanceId: "8080808080808080",
                    },
                ]);

                // And expire the announcement
                await closeAll();

                // And removed after expiry
                expect(client.getDiscoveredOperationalDevice(FABRIC, NODE_ID)).deep.equal(undefined);

                expect(client.getDiscoveredCommissionableDevices({ longDiscriminator: 1234 })).deep.equal([]);
            });
        });

        describe("Operational discovery", () => {
            const criteria: MdnsScannerTargetCriteria = {
                commissionable: false,
                operationalTargets: [{ operationalId: OPERATIONAL_ID }],
            };
            beforeEach(() => client.targetCriteriaProviders.add(criteria));
            afterEach(() => client.targetCriteriaProviders.delete(criteria));

            it("the client directly returns server record if it has been announced before and records are removed on cancel", async () => {
                let queryReceived = false;
                let dataWereSent = false;
                const listener = scanListener.onData((_netInterface, _peerAddress, _peerPort, data) => {
                    dataWereSent = true;
                    const dataDecoded = DnsCodec.decode(data);
                    if (dataDecoded?.messageType === DnsMessageType.Query) {
                        queryReceived = true;
                    }
                });
                advertise(OPERATIONAL_SERVICE);

                await MockTime.yield3(); // Make sure data were broadcasted async
                await MockTime.yield3(); // Make sure data were received and processed async

                const result = await client.findOperationalDevice(
                    { operationalId: OPERATIONAL_ID } as Fabric,
                    NODE_ID,
                    1,
                );

                expect(dataWereSent).equal(true);
                expect(queryReceived).equal(false);
                expect(result?.addresses).deep.equal(IPIntegrationResultsPort1);
                await listener.close();

                // Same result when we just get the records
                expect(
                    client.getDiscoveredOperationalDevice({ operationalId: OPERATIONAL_ID } as Fabric, NODE_ID)
                        ?.addresses,
                ).deep.equal(IPIntegrationResultsPort1);

                // And expire the announcement
                await close();

                // And empty result after expiry
                expect(
                    client.getDiscoveredOperationalDevice({ operationalId: OPERATIONAL_ID } as Fabric, NODE_ID),
                ).deep.equal(undefined);
            });

            it("the client queries the server record if it has not been announced before", async () => {
                const sentData = new Array<Uint8Array>();
                const listener = scanListener.onData((_netInterface, _peerAddress, _peerPort, data) =>
                    sentData.push(data),
                );

                advertise(OPERATIONAL_SERVICE);

                const findPromise = client.findOperationalDevice({ operationalId: OPERATIONAL_ID } as Fabric, NODE_ID);

                await MockTime.yield3(); // make sure responding promise is created
                await MockTime.advance(1); // Trigger timer to send query (0ms timer)
                await MockTime.yield3(); // make sure responding promise is created

                expectMessage(DnsCodec.decode(sentData[0]), {
                    additionalRecords: [],
                    answers: [],
                    authorities: [],
                    messageType: 0,
                    queries: [
                        {
                            name: "0000000000000018-0000000000000001._matter._tcp.local",
                            recordClass: 1,
                            recordType: 33,
                            uniCastResponse: false,
                        },
                    ],
                    transactionId: 0,
                });

                const result = await findPromise;

                expect(result?.addresses).deep.equal(IPIntegrationResultsPort1);
                await listener.close();

                // Same result when we just get the records
                expect(
                    client.getDiscoveredOperationalDevice({ operationalId: OPERATIONAL_ID } as Fabric, NODE_ID)
                        ?.addresses,
                ).deep.equal(IPIntegrationResultsPort1);

                // And expire the announcement
                await close();

                // And empty result after expiry
                expect(
                    client.getDiscoveredOperationalDevice({ operationalId: OPERATIONAL_ID } as Fabric, NODE_ID),
                ).deep.equal(undefined);
            });

            it("the client queries the server record and get correct response also with multiple announced instances", async () => {
                const netData = new Array<Uint8Array>();
                const listener = broadcastListener.onData((_netInterface, _peerAddress, _peerPort, data) => {
                    netData.push(data);
                });

                advertise(COMMISSIONABLE_SERVICE);
                advertise(OPERATIONAL_SERVICE);

                const findPromise = client.findOperationalDevice({ operationalId: OPERATIONAL_ID } as Fabric, NODE_ID);

                await MockTime.yield3(); // make sure responding promise is created
                await MockTime.advance(1); // Trigger timer to send query (0ms timer)
                await MockTime.yield3(); // Make sure data were queried async
                await MockTime.yield3(); // Make sure data were queried async
                await MockTime.yield3(); // Make sure data were queried async

                expect(netData.length).equal(2);

                const query = DnsCodec.decode(netData[0]);
                expectMessage(query, {
                    additionalRecords: [],
                    answers: [],
                    authorities: [],
                    messageType: 0,
                    queries: [
                        {
                            name: "0000000000000018-0000000000000001._matter._tcp.local",
                            recordClass: 1,
                            recordType: 33,
                            uniCastResponse: false,
                        },
                    ],
                    transactionId: 0,
                });
                const response2 = DnsCodec.decode(netData[1]);
                expectMessage(response2, {
                    additionalRecords: [
                        {
                            flushCache: false,
                            name: "0000000000000018-0000000000000001._matter._tcp.local",
                            recordClass: 1,
                            recordType: 16,
                            ttl: 120,
                            value: ["SII=500", "SAI=300", "SAT=4000"],
                        },
                        ...IPDnsRecords,
                    ],
                    answers: [
                        {
                            flushCache: false,
                            name: "0000000000000018-0000000000000001._matter._tcp.local",
                            recordClass: 1,
                            recordType: 33,
                            ttl: 120,
                            value: { port: PORT2, priority: 0, target: "00B0D063C2260000.local", weight: 0 },
                        },
                    ],
                    authorities: [],
                    messageType: 0x8400,
                    queries: [],
                    transactionId: 0,
                });

                const result = await findPromise;

                expect(result?.addresses).deep.equal(IPIntegrationResultsPort2);

                await listener.close();

                // Same result when we just get the records
                expect(
                    client.getDiscoveredOperationalDevice({ operationalId: OPERATIONAL_ID } as Fabric, NODE_ID)
                        ?.addresses,
                ).deep.equal(IPIntegrationResultsPort2);

                // No commissionable devices because never queried
                expect(client.getDiscoveredCommissionableDevices({ longDiscriminator: 1234 })).deep.equal([]);

                // And expire the announcement
                await closeAll();

                // And empty result after expiry
                expect(
                    client.getDiscoveredOperationalDevice({ operationalId: OPERATIONAL_ID } as Fabric, NODE_ID),
                ).deep.equal(undefined);
            });
        });

        describe("Operational and commissionable discovery", () => {
            const criteria: MdnsScannerTargetCriteria = {
                commissionable: true,
                operationalTargets: [{ operationalId: OPERATIONAL_ID }],
            };
            beforeEach(() => client.targetCriteriaProviders.add(criteria));
            afterEach(() => client.targetCriteriaProviders.delete(criteria));

            it("the client knows announced records if scanning is enabled by criteria", async () => {
                advertise(COMMISSIONABLE_SERVICE);
                advertise(OPERATIONAL_SERVICE, PORT2);

                await MockTime.yield3();
                await MockTime.yield3();

                // Same result when we just get the records
                expect(
                    client.getDiscoveredOperationalDevice({ operationalId: OPERATIONAL_ID } as Fabric, NODE_ID)
                        ?.addresses,
                ).deep.equal(IPIntegrationResultsPort2);

                // No commissionable devices because never queried
                expect(client.getDiscoveredCommissionableDevices({ longDiscriminator: 1234 })).deep.equal([
                    {
                        CM: 1,
                        D: 1234,
                        DN: "Test Device",
                        DT: 1,
                        P: 32768,
                        PH: 33,
                        PI: "",
                        SAI: 300,
                        SD: 4,
                        SII: 500,
                        SAT: 4000,
                        T: 0,
                        ICD: 0,
                        V: 1,
                        VP: "1+32768",
                        addresses: IPIntegrationResultsPort1,
                        deviceIdentifier: "8080808080808080",
                        discoveredAt: undefined,
                        ttl: undefined,
                        instanceId: "8080808080808080",
                    },
                ]);

                // And expire the announcement
                await closeAll();

                // And removed after expiry
                expect(
                    client.getDiscoveredOperationalDevice({ operationalId: OPERATIONAL_ID } as Fabric, NODE_ID),
                ).deep.equal(undefined);

                expect(client.getDiscoveredCommissionableDevices({ longDiscriminator: 1234 })).deep.equal([]);
            });

            it("the client queries the server record and get correct response when announced before", async () => {
                let dataWereSent = false;
                let queryReceived = false;
                const listener = scanListener.onData((_netInterface, _peerAddress, _peerPort, data) => {
                    dataWereSent = true;
                    const dataDecoded = DnsCodec.decode(data);
                    if (dataDecoded?.messageType === DnsMessageType.Query) {
                        queryReceived = true;
                    }
                });

                advertise(COMMISSIONABLE_SERVICE);
                advertise(OPERATIONAL_SERVICE);

                await MockTime.yield3();
                await MockTime.yield3();

                const result = await client.findOperationalDevice(
                    { operationalId: OPERATIONAL_ID } as Fabric,
                    NODE_ID,
                    10,
                );

                expect(dataWereSent).equal(true);
                expect(queryReceived).equal(false);
                expect(result?.addresses).deep.equal(IPIntegrationResultsPort2);

                await listener.close();

                // Same result when we just get the records
                expect(
                    client.getDiscoveredOperationalDevice({ operationalId: OPERATIONAL_ID } as Fabric, NODE_ID)
                        ?.addresses,
                ).deep.equal(IPIntegrationResultsPort2);

                // Also commissionable devices known now
                expect(client.getDiscoveredCommissionableDevices({ longDiscriminator: 1234 })).deep.equal([
                    {
                        CM: 1,
                        D: 1234,
                        DN: "Test Device",
                        DT: 1,
                        P: 32768,
                        PH: 33,
                        PI: "",
                        SAI: 300,
                        SD: 4,
                        SII: 500,
                        SAT: 4000,
                        T: 0,
                        ICD: 0,
                        V: 1,
                        VP: "1+32768",
                        addresses: IPIntegrationResultsPort1,
                        deviceIdentifier: "8080808080808080",
                        discoveredAt: undefined,
                        ttl: undefined,
                        instanceId: "8080808080808080",
                    },
                ]);

                // And expire the announcement
                await closeAll();

                // And removed after expiry
                expect(
                    client.getDiscoveredOperationalDevice({ operationalId: OPERATIONAL_ID } as Fabric, NODE_ID),
                ).deep.equal(undefined);

                expect(client.getDiscoveredCommissionableDevices({ longDiscriminator: 1234 })).deep.equal([]);
            });
        });
    });
});

function expectMessage(actual: DnsMessage | undefined, expected: DnsMessage) {
    for (const message of [actual, expected]) {
        if (!message) {
            continue;
        }
        message.answers.sort((a, b) => a.name.localeCompare(b.name));

        message.additionalRecords.forEach(r => {
            if (r.recordType === DnsRecordType.TXT && Array.isArray(r.value)) {
                r.value.sort();
            }
        });
    }

    expect(actual).deep.equals(expected);
}
