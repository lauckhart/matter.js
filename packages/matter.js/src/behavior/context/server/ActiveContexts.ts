/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Observable } from "../../../util/Observable.js";
import { ActionContext } from "../ActionContext.js";

/**
 * Tracks activity associated with a specific node.
 */
export class NodeActivity {
    #contexts = new Set<ActionContext>;
    #active = new Observable<[]>();
    #inactive = new Observable<[]>();

    get isActive() {
        return this.#contexts.size !== 0;
    }

    get active() {
        return this.#active;
    }

    get inactive() {
        return this.#inactive;
    }

    add(context: ActionContext) {
        this.#contexts.add(context);
        if (this.#contexts.size === 1) {
            this.#active.emit();
        }
    }

    delete(context: ActionContext) {
        this.#contexts.delete(context);
        if (this.#contexts.size === 0) {
            this.#inactive.emit();
        }
    }
}
