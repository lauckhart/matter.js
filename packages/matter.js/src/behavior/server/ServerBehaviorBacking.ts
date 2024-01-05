/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { PersistenceBehavior } from "../../endpoint/server/PersistenceBehavior.js";
import { EventHandler } from "../../protocol/interaction/EventHandler.js";
import { MaybePromise } from "../../util/Promises.js";
import { Behavior } from "../Behavior.js";
import { BehaviorBacking } from "../BehaviorBacking.js";
import { Datasource } from "../state/managed/Datasource.js";

/**
 * This class backs the server implementation of a behavior.
 */
export class ServerBehaviorBacking extends BehaviorBacking {
    #store?: Datasource.Store;
    #eventHandler?: EventHandler;
    #datasource?: Datasource;

    protected override invokeInitializer(behavior: Behavior, options?: Behavior.Options) {
        // If we have persistent fields install a store before initializing.
        // Loading of persistence may be asynchronous; chain promises if so
        if (this.type.supervisor.persists) {
            this.part.agent.require(PersistenceBehavior);
            const persistence = this.part.agent.waitFor(PersistenceBehavior);
            
            if (MaybePromise.is(persistence)) {
                return persistence
                    .then(persistence => {
                        this.#store = persistence.storeFor(this.type);
                        this.#eventHandler = persistence.eventHandler;
                        return super.invokeInitializer(behavior, options);
                    })
            }

            this.#store = persistence.storeFor(this.type);
            this.#eventHandler = persistence.eventHandler;
        }

        return super.invokeInitializer(behavior, options);
    }

    /**
     * Are there dirty values requiring persistence?
     */
    get hasDirty() {
        return !!this.#datasource?.dirty;
    }

    /**
     * The target for events.
     */
    get eventHandler() {
        this.construction.assertAvailable();
        
        return this.#eventHandler as EventHandler;
    }

    override get store() {
        return this.#store;
    }
}
