/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { InstanceBroadcaster } from "../common/InstanceBroadcaster.js";
import { NoProviderError } from "../common/MatterError.js";
import { Scanner } from "../common/Scanner.js";
import { Diagnostic } from "../log/Diagnostic.js";
import { Logger } from "../log/Logger.js";
import { NetworkAddress } from "../net/NetworkAddress.js";
import { isDeepEqual } from "../util/DeepEqual.js";
import { Environment } from "./Environment.js";
import { Environmental } from "./Environmental.js";

const logger = Logger.get("MDNS");

export class TransportService {
    #environment: Environment;
    #providers = new Set<TransportService.Provider>();

    constructor(environment: Environment) {
        environment.set(TransportService, this);
        environment.runtime.add(this);
        this.#environment = environment;
    }

    register(provider: TransportService.Factory) {
        this.#providerFactories.add(provider);
    }

    static [Environmental.create](environment: Environment) {
        return new this(environment);
    }

    async broadcasterFor(address: NetworkAddress) {
        return (await this.#providerFor(address)).broadcaster;
    }

    async scannerFor(address: NetworkAddress) {
        return (await this.#providerFor(address)).scanner;
    }

    get [Diagnostic.value]() {
        return "Discovery";
    }

    async [Symbol.asyncDispose]() {
        for (const provider of this.#providers) {
            try {
                await provider.close();
            } catch (e) {
                logger.error(
                    `Error disposing of discovery provider for transport ${provider.address.transport} host ${provider.address.host}`,
                    e,
                );
            }
        }
    }

    async #providerFor(address: NetworkAddress) {
        for (const provider of this.#providers) {
            if (isDeepEqual(provider.address, address)) {
                return provider;
            }
        }

        for (const factory of this.#providerFactories) {
            const provider = await factory.open(this.#environment, address);
            if (provider) {
                this.#providers.add(provider);
                return provider;
            }
        }

        throw new NoProviderError(`No discover provider for transport ${address.transport} host ${address.host}`);
    }
}

export namespace TransportService {
    export interface Factory {
        open(environment: Environment, address: NetworkAddress): Promise<Provider | undefined>;
    }

    export abstract class Transport {
        #address: NetworkAddress;

        constructor(address: NetworkAddress) {
            this.#address = address;
        }

        get address() {
            return this.#address;
        }

        async close() {}

        abstract scanner: Scanner;
        abstract broadcaster: InstanceBroadcaster;
    }
}
