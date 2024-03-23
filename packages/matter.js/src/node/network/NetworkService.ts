/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { NoProviderError } from "../../common/MatterError.js";
import { Environment } from "../../environment/Environment.js";
import { Environmental } from "../../environment/Environmental.js";
import { NetworkAddress } from "../../net/NetworkAddress.js";
import { NetworkProvider } from "./NetworkProvider.js";

export class NetworkService {
    #env: Environment;

    constructor(env: Environment) {
        this.#env = env;
        env.set(NetworkService, this);
    }

    open(address: NetworkAddress) {
        for (const factory of NetworkProvider.factories) {
            const provider = factory(this.#env, address);
            if (provider) {
                return provider;
            }
        }

        throw new NoProviderError(`No network provider supports address ${NetworkAddress.str(address)}`);
    }

    static [Environmental.create](environment: Environment) {
        new NetworkService(environment);
    }
}
