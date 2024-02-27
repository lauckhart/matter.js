/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Diagnostic } from "../../../log/Diagnostic.js";
import { Observable } from "../../../util/Observable.js";

/**
 * Tracks activity associated with a node.
 */
export class NodeActivity {
    #tasks = new Map<{}, NodeActivity.Task>();
    #active = new Observable<[]>();
    #inactive = new Observable<[]>();

    get isActive() {
        return this.#tasks.size !== 0;
    }

    get active() {
        return this.#active;
    }

    get inactive() {
        return this.#inactive;
    }

    get tasks() {
        return this.#tasks.values();
    }

    add(host: {}) {
        const elapsed = Diagnostic.elapsed();
        this.#tasks.set(host, {
            get name() {
                return Diagnostic.via(host.toString());
            },
            get elapsed() {
                return elapsed;
            },
        });

        if (this.#tasks.size === 1) {
            this.#active.emit();
        }
    }

    delete(host: {}) {
        this.#tasks.delete(host);
        if (this.#tasks.size === 0) {
            this.#inactive.emit();
        }
    }
}

export namespace NodeActivity {
    export interface Task {
        readonly name: string;
        readonly elapsed: Diagnostic.Elapsed;
    }
}
