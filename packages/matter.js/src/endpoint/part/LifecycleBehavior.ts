/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Behavior } from "../../behavior/Behavior.js";
import { State } from "../../behavior/state/State.js";
import { EventEmitter, Observable, ObservableSet } from "../../util/Observable.js";
import type { Part } from "../Part.js";

/**
 * Manages Part lifecycle.
 */
export class LifecycleBehavior extends Behavior {
    static override readonly id = "lifecycle";

    declare state: LifecycleBehavior.EndpointScope;
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

        this.events.installed$change(() => updateStatus());

        this.state.initializingBehaviors.deleted(updateStatus);
    }
}

export namespace LifecycleBehavior {
    export class EndpointScope extends State {
        installed = false;
        initialized = false;
        initializingBehaviors = new ObservableSet<Behavior>();
    }

    export class Events extends EventEmitter {
        installed$change = Observable();
        initialized$change = Observable();

        /**
         * This event is special cased in Part.  It is invoked after all
         * behaviors are destroyed.
         */
        destroyed = Observable<[ part: Part]>();

        /**
         * This event bubbles up when any part or behavior is added or removed
         * in the part ownership tree.
         */
        structure$change = Observable<[ part: Part ]>();
    }
}
