/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { InstanceBroadcaster } from "../../common/InstanceBroadcaster.js";
import { Scanner } from "../../common/Scanner.js";
import { TransportInterface } from "../../common/TransportInterface.js";
import { Environment } from "../../environment/Environment.js";
import { NetworkAddress } from "../../net/NetworkAddress.js";

/**
 * A network "providers" supplies Node functionality related to a specific networking technology.
 */
export abstract class NetworkProvider {
    #address: NetworkAddress;
    #env: Environment;

    constructor(address: NetworkAddress, environment: Environment) {
        this.#address = address;
        this.#env = environment;
    }

    get address() {
        return this.#address;
    }

    get env() {
        return this.#env;
    }

    abstract openInterface(): Promise<TransportInterface>;
    abstract openBroadcaster(): Promise<InstanceBroadcaster>;
    abstract openScanner(): Promise<Scanner>;

    async close() {}
}

export namespace NetworkProvider {
    export type Factory = (environment: Environment, address: NetworkAddress) => NetworkProvider | undefined;

    export const factories = new Set<Factory>();
}
