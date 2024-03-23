/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Crypto } from "../crypto/Crypto.js";
import { Network } from "../net/Network.js";
import { IpAddress } from "../net/NetworkAddress.js";
import { isDeepEqual } from "../util/DeepEqual.js";
import { isIPv6 } from "../util/Ip.js";
import { MdnsInstanceBroadcaster } from "./MdnsInstanceBroadcaster.js";

/**
 * A set of {@link BroadcastHost}s and their associated interfaces.
 */
export type BroadcastInterfaceHosts = Record<string, BroadcastHost[]>;

/**
 * A hostname and the IPs and ports to serve for said name.
 */
export interface BroadcastHost {
    /**
     * The unqualified hostname for this set of IPs.
     */
    qname: string;

    /**
     * The set of IPs to bind to the hostname (maps to A/AAAA records).
     */
    ips: string[];

    /**
     * The ports supported on this host (maps to SRV records).
     */
    ports: number[];
}

/**
 * Utility class to convert a list of addresses into groups of (hostname, ips, ports) tuples.
 *
 * A "host" is a list of IPs and ports on the same interface.  If the set of ports is different for the set of IPs then
 * it cannot be the same hostname as some of our SRV records will then reference the wrong set of addresses.
 *
 * Note that we assume all IPs on the same interface are routable together.  In theory this is not required to be the
 * case but seems like an extreme edge case so not designing for it.
 *
 * Matter's definition of "hostname" in the spec (based solely on MAC address) is too limited to support multiple hosts.
 * This is also an edge case but we support by generating a random "MAC address" if necessary.  That's what CHIP does if
 * it fails to load the MAC address.
 *
 * This is a class because we maintain the interface/hostname -> IP mapping for the life of the broadcaster.
 */
export class BroadcastHostGenerator {
    readonly #network: Network;
    readonly #ipsToHostnameMap = {} as Record<string, string>;
    readonly #usedHostnamesForInterfaces = {} as Record<string, Set<string>>;

    constructor(network: Network) {
        this.#network = network;
    }

    /**
     * For the given instance, creates a mapping of interface to (hostname, ip, ports) tuples.  Only includes interfaces
     * and IPs the instance is actually listening on.
     */
    async generate(instance: MdnsInstanceBroadcaster): Promise<BroadcastInterfaceHosts> {
        const intfToIpToPort = {} as Record<string, Record<string, number>>;

        /**
         * Adds all IPs associated with a specific NetworkAddress.
         */
        const addIpsForAddress = async (address: IpAddress, ips: string[], intf?: string) => {
            for (const ip of ips) {
                if (isIPv6(ip)) {
                    if (address.family === "ipv4") {
                        continue;
                    }
                } else if (address.family === "ipv6") {
                    continue;
                }

                if (intf === undefined) {
                    intf = await this.#network.interfaceWithLocalAddress(ip);
                    if (intf === undefined) {
                        continue;
                    }
                }

                let addrToPort = intfToIpToPort[intf];
                if (addrToPort === undefined) {
                    addrToPort = intfToIpToPort[intf] = {};
                }
                addrToPort[ip] = address.port ?? 5540;
            }
        };

        /**
         * Adds all IPs associated with a network interface.
         */
        const addIpsForIntf = async (address: IpAddress, name: string) => {
            const ipmac = this.#network.getIpMac(name);
            if (ipmac !== undefined) {
                await addIpsForAddress(address, ipmac.ips, name);
            }
        };

        // Process each address
        for (const address of instance.addresses) {
            if (address.transport !== "udp") {
                continue;
            }

            if (address.host === undefined) {
                // Host has no hostname - map all IPs
                for (const intf of this.#network.getNetInterfaces()) {
                    await addIpsForIntf(address, intf);
                }
            } else if (address.host.startsWith("%")) {
                // Host is a bare "scope" - we just use this to specify "all IPs for this interface"
                await addIpsForIntf(address, address.host.substring(1));
            } else {
                // Host is a hostname or IP address
                await addIpsForAddress(address, await this.#network.lookup(address.host));
            }
        }

        // Convert to output format except without the hostname
        const intfToHosts = {} as Record<string, Array<Omit<BroadcastHost, "qname">>>;
        for (const intf in intfToIpToPort) {
            const ipToPorts = {} as Record<string, number[]>;

            Object.entries(intfToIpToPort[intf]).map(([ip, port]) => {
                let ports = ipToPorts[ip];
                if (ports === undefined) {
                    ports = ipToPorts[ip] = [port];
                } else {
                    ports.push(port);
                }
            });

            intfToHosts[intf] = [];
            const hosts = intfToHosts[intf];
            ip: for (const ip in ipToPorts) {
                const ports = ipToPorts[ip];
                for (const record of hosts) {
                    if (isDeepEqual(record.ports, ports)) {
                        record.ips.push(ip);
                        continue ip;
                    }
                }
                hosts.push({ ips: [ip], ports });
            }
        }

        // Add hostnames
        const result = {} as BroadcastInterfaceHosts;
        for (const intf in intfToHosts) {
            const hosts = intfToHosts[intf];

            result[intf] = hosts.map(({ ips, ports }) => {
                let usedHostnames = this.#usedHostnamesForInterfaces[intf];
                if (usedHostnames === undefined) {
                    usedHostnames = this.#usedHostnamesForInterfaces[intf] = new Set();
                }

                const key = `${intf} ${ips.sort().join(" ")}`;
                let hostname = this.#ipsToHostnameMap[key];
                if (hostname === undefined) {
                    const ipmac = this.#network.getIpMac(intf);
                    if (ipmac) {
                        hostname = ipmac.mac.replace(/:/g, "");
                    }
                    while (!hostname || usedHostnames.has(hostname)) {
                        hostname = Crypto.getRandomData(6).toHex().toUpperCase();
                    }
                }

                usedHostnames.add(hostname);

                return { qname: `${hostname}.local`, ips, ports };
            });
        }

        return result;
    }
}
