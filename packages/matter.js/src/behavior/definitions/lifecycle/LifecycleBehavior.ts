/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import type { Part } from "../../../endpoint/Part.js";
import { EventEmitter, Observable } from "../../../util/Observable.js";
import { BasicSet } from "../../../util/Set.js";
import { Behavior } from "../../Behavior.js";
import { State as BaseState } from "../../state/State.js";

/**
 * This behavior manages state related to the owning {@link Part}'s lifecycle.
 *
 * {@link LifecycleBehavior.state} includes:
 *     - Whether the part is installed into an owner
 *     - Whether the part's behaviors are initialized
 *     - Whether the part is online (addressable from a network)
 *
 * Other components that depend on this information may react to changes via
 * {@link LifecycleBehavior.events}.
 */
export class LifecycleBehavior extends Behavior {
    static override readonly id = "lifecycle";

    declare state: LifecycleBehavior.State;
    declare events: LifecycleBehavior.Events;

    override initialize() {
        const state = this.state;

        function updateStatus() {
            if (state.initialized) {
                return;
            }

            if (state.installed && !state.initializingBehaviors.size) {
                state.initialized = true;
            }
        }

        this.events.installed$change.on(() => updateStatus());

        this.state.initializingBehaviors.deleted.on(updateStatus);
    }
}

export namespace LifecycleBehavior {
    export class State extends BaseState {
        /**
         * True when the part is installed into a parent.
         *
         * Updated by the part when its owner is set.
         */
        installed = false;

        /**
         * True when all behaviors have completed initialization.
         *
         * Set by LifecycleBehavior when the part is installed and
         * {@link initializingBehaviors} is empty.
         */
        initialized = false;

        /**
         * True when the part is online (addressable from a network).
         *
         * Updated by the Node when it is started or stopped.
         */
        online = false;

        /**
         * The set of behaviors still undergoing initialization.
         *
         * Updated by parts that perform asynchronous initialization.
         */
        initializingBehaviors = new BasicSet<Behavior>();
    }

    export class Events extends EventEmitter {
        installed$change = Observable();
        initialized$change = Observable();
        online$change = new Observable<[online: boolean]>();

        /**
         * This event is special cased in Part.  It is invoked after all
         * behaviors are destroyed.
         */
        destroyed = new Observable<[part: Part]>();

        /**
         * This event bubbles up when any part or behavior is added or removed
         * in the part ownership tree.
         */
        structure$change = new Observable<[part: Part]>();
    }
}
