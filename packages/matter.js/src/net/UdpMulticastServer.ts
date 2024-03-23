/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Logger } from "../log/Logger.js";
import { ByteArray } from "../util/ByteArray.js";
import { Cache } from "../util/Cache.js";
import { isIPv4 } from "../util/Ip.js";
import { Network } from "./Network.js";
import { UdpChannel } from "./UdpChannel.js";

const logger = Logger.get("UdpMulticastServer");

export interface UdpMulticastServerOptions {
    network: Network;
    listeningPort: number;
    broadcastAddressIpv6: string;
    broadcastAddressIpv4?: string;
    interfaces?: string[];
}

export class UdpMulticastServer {
    static async create({
        interfaces,
        broadcastAddressIpv4,
        broadcastAddressIpv6,
        listeningPort,
        network,
    }: UdpMulticastServerOptions) {
        return new UdpMulticastServer(
            network,
            broadcastAddressIpv4,
            broadcastAddressIpv6,
            listeningPort,
            broadcastAddressIpv4 === undefined
                ? undefined
                : await network.createUdpChannel({
                      family: "ipv4",
                      listeningPort,
                      membershipAddresses: [broadcastAddressIpv4],
                      membershipInterfaces: interfaces,
                      reuseAddress: true,
                  }),
            await network.createUdpChannel({
                family: "ipv6",
                listeningPort,
                membershipAddresses: [broadcastAddressIpv6],
                membershipInterfaces: interfaces,
                reuseAddress: true,
            }),
            interfaces,
        );
    }

    private readonly broadcastChannels = new Cache<Promise<UdpChannel>>(
        "UDP broadcast channel",
        (netInterface, iPv4) => this.createBroadcastChannel(netInterface, iPv4),
        5 * 60 * 1000 /* 5mn */,
        async (_netInterface, channel) => (await channel).close(),
    );

    private constructor(
        private readonly network: Network,
        private readonly broadcastAddressIpv4: string | undefined,
        private readonly broadcastAddressIpv6: string,
        private readonly broadcastPort: number,
        private readonly serverIpv4: UdpChannel | undefined,
        private readonly serverIpv6: UdpChannel,
        private readonly interfaces: string[] | undefined,
    ) {}

    onMessage(listener: (message: ByteArray, peerAddress: string, netInterface: string) => void) {
        this.serverIpv4?.onData((netInterface, peerAddress, _port, message) =>
            listener(message, peerAddress, netInterface),
        );
        this.serverIpv6.onData((netInterface, peerAddress, _port, message) =>
            listener(message, peerAddress, netInterface),
        );
    }

    async send(message: ByteArray, interfaces?: string[], uniCastTarget?: string) {
        // Handle unicast
        if (uniCastTarget !== undefined) {
            try {
                // Interface selection is irrelevant for unicast as we can rely on ARP/NDP
                const intf = await this.network.interfaceForRemoteAddress(uniCastTarget);
                await (
                    await this.broadcastChannels.get(intf, isIPv4(uniCastTarget))
                ).send(uniCastTarget, this.broadcastPort, message);
            } catch (error) {
                logger.info(`Unicast to ${uniCastTarget}: ${(error as Error).message}`);
            }

            return;
        }

        // Determine interfaces for multicast
        if (interfaces === undefined) {
            interfaces = this.interfaces ?? this.network.getNetInterfaces();
        }

        // Determine which interfaces support IPv4 and/or IPv6
        const broadcasts = [];
        for (const intf of interfaces) {
            const { ips } = this.network.getIpMac(intf) ?? { ips: [] };

            let has4 = false,
                has6 = false;
            for (const ip of ips) {
                if (isIPv4(ip)) {
                    has4 = true;
                } else {
                    has6 = true;
                }
            }

            if (has4 && this.broadcastAddressIpv4) {
                broadcasts.push({ intf, addr: this.broadcastAddressIpv4, ipv4: true });
            }
            if (has6) {
                broadcasts.push({ intf, addr: this.broadcastAddressIpv6 });
            }
        }

        // Perform the broadcast
        await Promise.all(
            broadcasts.map(async ({ intf, addr, ipv4 }) => {
                try {
                    const channel = await this.broadcastChannels.get(intf, ipv4);
                    await channel.send(addr, this.broadcastPort, message);
                } catch (e) {
                    logger.error(`Multicast to ${addr} on ${intf}:`, e);
                }
            }),
        );
    }

    private async createBroadcastChannel(netInterface: string, iPv4: string): Promise<UdpChannel> {
        return await this.network.createUdpChannel({
            family: iPv4 ? "ipv4" : "ipv6",
            listeningPort: this.broadcastPort,
            multicastInterface: netInterface,
            reuseAddress: true,
        });
    }

    async close() {
        this.serverIpv4?.close();
        this.serverIpv6.close();
        await this.broadcastChannels.close();
    }
}
