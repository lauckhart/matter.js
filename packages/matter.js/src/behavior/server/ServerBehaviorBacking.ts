/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { BehaviorBacking } from "../BehaviorBacking.js";
import { InvocationContext } from "../InvocationContext.js";
import { Datasource } from "../state/managed/Datasource.js";

/**
 * This class backs the server implementation of a behavior.
 */
export class ServerBehaviorBacking extends BehaviorBacking {
    #datasource?: Datasource;

    /**
     * Obtain a managed state instance.
     */
    createState(context: InvocationContext) {
        return this.datasource.reference(context);
    }

    /**
     * Obtain the source of raw data that backs managed state instances.
     */
    get datasource() {
        this.#datasource = Datasource({
            manager: this.type.schema,
            type: this.type.State,
            events: this.events as unknown as Datasource.Events,
        });

        return this.#datasource;
    }
}
