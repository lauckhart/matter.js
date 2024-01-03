/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Part } from "../../endpoint/Part.js";
import { PersistenceBehavior } from "../../endpoint/server/PersistenceBehavior.js";
import { EventHandler } from "../../protocol/interaction/EventHandler.js";
import { AsyncConstruction } from "../../util/AsyncConstructable.js";
import { MaybePromise } from "../../util/Type.js";
import { Behavior } from "../Behavior.js";
import { BehaviorBacking } from "../BehaviorBacking.js";
import { InvocationContext } from "../InvocationContext.js";
import { Datasource } from "../state/managed/Datasource.js";

/**
 * This class backs the server implementation of a behavior.
 */
export class ServerBehaviorBacking extends BehaviorBacking {
    #store?: Datasource.Store;
    #eventHandler?: EventHandler;
    #datasource?: Datasource;
    #construction: AsyncConstruction<ServerBehaviorBacking>;

    get construction() {
        return this.#construction;
    }

    constructor(part: Part, type: Behavior.Type, options?: Behavior.Options) {
        super(part, type);

        this.#construction = AsyncConstruction(
            this,
            () => this.initialize(options),
        );
    }

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
     * Obtain a managed state instance.
     */
    referenceState(context: InvocationContext) {
        return this.datasource.reference(context);
    }

    /**
     * The source of raw data that backs managed state instances.
     */
    get datasource() {
        this.construction.assertAvailable();

        if (!this.#datasource) {
            this.#datasource = Datasource({
                supervisor: this.type.supervisor,
                type: this.type.State,
                events: this.events as unknown as Datasource.Events,
                defaults: this.part.behaviors.defaultsFor(this.type),
                store: this.#store,
            });
        }

        return this.#datasource;
    }

    /**
     * The target for events.
     */
    get eventHandler() {
        this.construction.assertAvailable();
        
        return this.#eventHandler as EventHandler;
    }
}
