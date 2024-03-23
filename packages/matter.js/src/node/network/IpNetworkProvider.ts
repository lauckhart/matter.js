/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { InstanceBroadcaster } from "../../common/InstanceBroadcaster.js";
import { ImplementationError } from "../../common/MatterError.js";
import { Scanner } from "../../common/Scanner.js";
import { TransportInterface } from "../../common/TransportInterface.js";
import { Environment } from "../../environment/Environment.js";
import { Environmental } from "../../environment/Environmental.js";
import { Logger } from "../../log/Logger.js";
import { MdnsBroadcaster } from "../../mdns/MdnsBroadcaster.js";
import { MdnsScanner } from "../../mdns/MdnsScanner.js";
import { Network } from "../../net/Network.js";
import { IpAddress } from "../../net/NetworkAddress.js";
import { UdpInterface } from "../../net/UdpInterface.js";
import { NetworkProvider } from "./NetworkProvider.js";

const logger = Logger.get("IpInterfaceContext");

class IpInterfaceContext {
    #network: Network;
    #interface?: string;
    #ipv4?: boolean;
    #broadcaster?: MdnsBroadcaster;
    #scanner?: MdnsScanner;

    constructor(network: Network, intf?: string, ipv4?: boolean) {
        this.#network = network;
        this.#interface = intf;
        this.#ipv4 = ipv4;
    }

    async broadcaster() {
        if (this.#broadcaster === undefined) {
            this.#broadcaster = await MdnsBroadcaster.create(this.#network, {
                multicastInterface: this.#interface,
                enableIpv4: this.#ipv4,
            });
        }
        return this.#broadcaster;
    }

    async scanner() {
        if (this.#scanner === undefined) {
            this.#scanner = await MdnsScanner.create(this.#network, {
                netInterface: this.#interface,
                enableIpv4: this.#ipv4,
            });
        }
        return this.#scanner;
    }

    close() {
        return Promise.all(
            [this.#broadcaster, this.#scanner].map(async obj => {
                try {
                    await obj?.close();
                } catch (e) {
                    logger.error(`Error closing ${obj?.constructor?.name}:`, e);
                }
            }),
        );
    }
}

class IpEnvironmentContext {
    #network: Network;
    #interfaces = new Map<IpAddress["host"], IpInterfaceContext>();

    constructor(environment: Environment) {
        this.#network = environment.get(Network);
        environment.root.set(IpEnvironmentContext, this);
        environment.runtime.add(this);
    }

    static [Environmental.create](environment: Environment) {
        return new IpEnvironmentContext(environment);
    }

    close() {
        const promise = Promise.allSettled([...this.#interfaces.values()].map(intf => intf.close())).then(() => {});
        this.#interfaces.clear();
        return promise;
    }

    async contextsFor(address: IpAddress) {
        let interfaces = new Set<string | undefined>();

        if (address.host !== undefined && address.host !== "" && address.host !== "::") {
            interfaces = new Set<string>();
            const addrs = await this.#network.lookup(address.host, address.family);
            for (const addr of addrs) {
                interfaces.add(addr.ip);
            }
        } else {
            interfaces.add(undefined);
        }

        return [...interfaces].map(name => {
            let result = this.#interfaces.get(name);
            if (!result) {
                result = new IpInterfaceContext(this.#network, name, address.family !== "ipv6");
                this.#interfaces.set(name, result);
            }
            return result;
        });
    }
}

export class IpNetworkProvider extends NetworkProvider {
    constructor(address: IpAddress, environment: Environment) {
        if (address.transport !== "udp") {
            throw new ImplementationError("UdpNetworkProvider instantiated with non-UDP address");
        }

        super(address, environment);
    }

    override get address() {
        return super.address as IpAddress;
    }

    override async openInterface(): Promise<TransportInterface> {
        return UdpInterface.create(
            this.env.get(Network),
            this.address.family,
            this.address.port,
            this.address.transport,
        );
    }

    override async openBroadcaster(): Promise<InstanceBroadcaster> {
        throw new Error("Method not implemented.");
    }

    override async openScanner(): Promise<Scanner> {
        throw new Error("Method not implemented.");
    }
}
