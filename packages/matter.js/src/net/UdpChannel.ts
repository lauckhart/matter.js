/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Listener } from "../common/TransportInterface.js";
import { ByteArray } from "../util/ByteArray.js";

export interface UdpChannelOptions {
    /**
     * IP address family.  Leave undefined for automatic family selection.  If undefined and {@link listeningAddress} is
     * undefined or "::" then the socket will operate in dual-mode ipv4/ipv6.
     */
    family?: "ipv4" | "ipv6";

    /**
     * The port to listen on.  undefined or 0 directs the operating system to select an open port.
     */
    listeningPort?: number;

    /**
     * The address to listen on, either a hostname or IP address in correct format based on {@link type}.
     */
    listeningAddress?: string;

    /**
     * If true the socket is opened non-exclusively.
     */
    reuseAddress?: boolean;

    /**
     * The interface for outbound multicast.
     */
    multicastInterface?: string;

    /**
     * Multicast membership IP addresses.
     */
    membershipAddresses?: string[];

    /**
     * Multicast membership interfaces.
     */
    membershipInterfaces?: string[];
}

export interface UdpChannel {
    onData(listener: (netInterface: string, peerAddress: string, peerPort: number, data: ByteArray) => void): Listener;
    send(host: string, port: number, data: ByteArray): Promise<void>;
    close(): void;
    get port(): number;
}
