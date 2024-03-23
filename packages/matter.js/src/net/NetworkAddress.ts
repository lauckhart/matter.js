/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ByteArray } from "../util/ByteArray.js";

/**
 * The address of a network-based resource on an IP network.
 */
export interface IpAddress {
    /**
     * Transport identifier, either UDP or TCP/IP.
     */
    transport: "udp" | "tcp";

    /**
     * The hostname or IP address.  Leave undefined for all addresses, "0.0.0.0" for all IPv4 addresses, and "::"
     * for all IPv6 addresses.
     */
    host?: string;

    /**
     * The network port if applicable.
     */
    port?: number;

    /**
     * Optional designator of IP family.
     */
    family?: "ipv4" | "ipv6";
}

/**
 * The address of a network-based resource on a Bluetooth LE network,
 */
export interface BleAddress {
    transport: "ble";

    /**
     * The address of the bluetooth adapter.
     *
     * By default selects the first adapter on the system.
     */
    address?: string;

    /**
     * Optional extended data for broadcast, if applicable.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 5.4.2.4.4.
     */
    extended?: ByteArray;
}

export type NetworkAddress = BleAddress | IpAddress;

export namespace NetworkAddress {
    export function str(address: NetworkAddress) {
        let addr;

        switch (address.transport) {
            case "udp":
            case "tcp":
                addr = address.host ?? "*";
                if (address.host?.indexOf(":") !== -1) {
                    addr = `[${addr}]`;
                }
                if (address.port) {
                    addr = `:${address.port}`;
                }
                break;

            case "ble":
                addr = address.address ?? "*";
                if (addr.indexOf(":") !== -1) {
                    addr = `[${addr}]`;
                }
                break;

            default:
                addr = "?";
        }

        return `${address.transport}:${addr}`;
    }
}
