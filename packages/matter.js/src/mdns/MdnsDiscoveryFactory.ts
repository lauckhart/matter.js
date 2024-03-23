/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { InstanceBroadcaster } from "../common/InstanceBroadcaster.js";
import { Scanner } from "../common/Scanner.js";
import { TransportService } from "../environment/TransportService.js";
import { Environment } from "../environment/Environment.js";
import { Network } from "../net/Network.js";
import { NetworkAddress } from "../net/NetworkAddress.js";

export class MdnsDiscoveryFactory implements TransportService.Factory {
    open(environment: Environment, address: NetworkAddress): Promise<TransportService.Provider | undefined> {
        let ipv4 = true;

        switch (address.transport) {
            case "udp":
            case "udp4":
                // We don't support disabling ipv6
                break;

            case "udp6":
                ipv4 = false;
                break;
        }

        const network = environment.get(Network);

        let interface: string | undefined;
        if (address.host) {
            const address = network.getIpMac(address.host);
        }


            const netInterface = vars.get("mdns.networkInterface", options?.networkInterface);
            this.#broadcaster = await MdnsBroadcaster.create(network, {
                enableIpv4: this.enableIpv4,
                multicastInterface: netInterface,
            });

            this.#scanner = await MdnsScanner.create(network, {
                enableIpv4: this.enableIpv4,
                netInterface: netInterface,
            });
        });
    }
}

class MdnsDiscoveryProvider extends TransportService.Provider {
    override #scanner: Scanner;
    override #broadcaster: InstanceBroadcaster;

    get scanner() {
        return this.#scanner;
    }

    get broadcaster() {
        return this.#broadcaster;
    }

    constructor({ transport, host }: NetworkAddress, scanner: Scanner, broadcaster: InstanceBroadcaster) {
        super({ transport, host });
        this.#scanner = scanner;
        this.#broadcaster = broadcaster;
    }

    override async close() {
        await Promise.all([this.#broadcaster.close(), this.#scanner.close()]);
    }
}
