/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Behavior } from "#behavior/Behavior.js";
import { ActionContext } from "#behavior/context/ActionContext.js";
import { AsyncObservable, EventEmitter } from "#general";

/**
 * Dynamic matter.js extension management.
 */
export class PluginsBehavior extends Behavior {
    declare state: PluginsBehavior.State;
    declare events: PluginsBehavior.Events;

    static override readonly id = "plugins";
}

export namespace PluginsBehavior {
    export class State {
        #use = Array<string>();

        /**
         * Currently registered plugins.
         */
        get use() {
            return this.#use;
        }

        /**
         * Add registered plugins.
         *
         * Plugins cannot be uninstalled so setting the plugins will not remove previously registered plugins.
         */
        set use(names: string | string[]) {
            if (!Array.isArray(names)) {
                names = [names];
            }
            this.#use = [...new Set(...this.#use, ...names)];
        }
    }

    export class Events extends EventEmitter {
        use$Changed = AsyncObservable<[value: string[], oldValue: string[], context: ActionContext]>();
    }
}
