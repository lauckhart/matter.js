/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { BehaviorBacking } from "../BehaviorBacking.js";
import { InvocationContext } from "../InvocationContext.js";
import { ManagedState } from "../state/ManagedState.js";

/**
 * This class backs the server implementation of a behavior.
 */
export class ServerBehaviorBacking extends BehaviorBacking {
    #state?: ManagedState;

    /**
     * Obtain a managed state instance.
     */
    createState(context: InvocationContext) {
        if (!this.#state) {
            this.#state = new ManagedState(this.type);
        }

        return this.#state.forContext(context);
    }
}
