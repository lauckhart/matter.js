/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { MatterError, NoProviderError } from "../common/MatterError.js";
import { UdpChannel, UdpChannelOptions } from "./UdpChannel.js";

export class NetworkError extends MatterError {}

export abstract class Network {
    static readonly ANY_INTERFACE = "";

    // TODO - remove this singleton
    static get: () => Network = () => {
        throw new NoProviderError("No provider configured");
    };

    abstract getNetInterfaces(): string[];
    abstract lookup(host: string, family?: "ipv4" | "ipv6"): Promise<string[]>;
    abstract interfaceWithLocalAddress(ip: string): Promise<string>;
    abstract interfaceForRemoteAddress(ip: string): Promise<string>;
    abstract getIpMac(netInterface: string): { mac: string; ips: string[] } | undefined;
    abstract createUdpChannel(options: UdpChannelOptions): Promise<UdpChannel>;

    async close() {
        // Nothing to do
    }
}
