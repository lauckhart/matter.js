/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Part } from "../Part.js";
import { ObservableSet, WritableObservableSet } from "../../util/Observable.js";
import { Behavior } from "../../behavior/Behavior.js";
import { State } from "../../behavior/state/State.js";
import { LifecycleBehavior } from "./LifecycleBehavior.js";
import { InternalError } from "../../common/MatterError.js";

/**
 * Manages parent-child relationship between endpoints.
 * 
 * You can manipulate child parts using {@link WritableObservableSet}
 * interface.
 * 
 * Notifications of structural change bubble via
 * {@link LifecycleBehavior.events.structure$change}.
 */
export class PartsBehavior extends Behavior implements WritableObservableSet<Part> {
    static override readonly id = "parts"; 

    declare readonly state: PartsBehavior.EndpointScope;

    override initialize() {
        const parts = this.state.parts;
        const state = this.state;
        const agent = this.agent;
        const owner = this.agent.part.owner;
        const lifecycle = agent.get(LifecycleBehavior);

        // Update state in response to the mutation state.parts
        parts.added(child => adoptPart(child));
        parts.deleted(child => disownPart(child));

        // Immediately adopt any parts present in state upon initialization
        for (const part of this.state.parts) {
            adoptPart(part);
        }

        // Monitor online state of owner so we can propagate to children
        lifecycle.events.online$change((online) => {
            for (const part of state.parts) {
                part.getAgent().get(LifecycleBehavior).state.online = online;
            }
        })

        /**
         * Broadcast the lifecycle "structure changed" event.  Invoked in
         * response to structure changes in children.  This is how the event
         * bubbles.
         */
        function structureChangeEmitter(part: Part) {
            agent.get(LifecycleBehavior).events.structure$change.emit(part);
        }

        /**
         * Remove a destroyed part.  Invoked in response to the child's
         * "destroyed" event.
         */
        function childDestroyed(part: Part) {
            if (parts.has(part)) {
                parts.delete(part);
                structureChangeEmitter(part);
            }
        }

        /**
         * Validates and updates part status.
         */
        function partReady(child: Part) {
            if (child.id === undefined) {
                throw new InternalError("Part reports as initialized but has no assigned ID");
            }

            child.getAgent().get(LifecycleBehavior).state.online = lifecycle.state.online;
        }

        /**
         * Take ownership of a part.  Invoked when a part is added to
         * state.parts.
         */
        function adoptPart(child: Part) {
            child.owner = owner;
            
            const registerIfInitialized = () => {
                if (lifecycle.state.initialized) {
                    lifecycle.events.initialized$change.off(registerIfInitialized);
                }
                state.initializing.delete(child);

                partReady(child);
            }

            lifecycle.events.initialized$change(registerIfInitialized);
            registerIfInitialized();

            const childLifecycle = child.getAgent().get(LifecycleBehavior);
            childLifecycle.events.structure$change(structureChangeEmitter);
            childLifecycle.events.destroyed(childDestroyed);

            structureChangeEmitter(agent.part);
        }

        /**
         * Terminate ownership of a part.  Invoked when a part is removed from
         * state.parts.
         */
        function disownPart(child: Part) {
            if (child.id === undefined) {
                return;
            }

            const childLifeCycle = child.getAgent().get(LifecycleBehavior);
            childLifeCycle.events.structure$change.off(structureChangeEmitter);
            childLifeCycle.events.destroyed.off(childDestroyed);

            structureChangeEmitter(agent.part);
        }
    }

    has(part: Part) {
        return this.state.parts.has(part);
    }

    add(part: Part) {
        this.state.parts.add(part);
    }

    delete(part: Part) {
        return this.state.parts.delete(part);
    }

    clear() {
        this.state.parts.clear();
    }

    get added() {
        return this.state.parts.added;
    }

    get deleted() {
        return this.state.parts.deleted;
    }

    [Symbol.iterator]() {
        return this.state.parts[Symbol.iterator]();
    }
}

export namespace PartsBehavior {
    export class EndpointScope extends State {
        /**
         * Child parts of the endpoint.
         */
        parts = new ObservableSet<Part>();

        /**
         * The behavior stores parts undergoing initialization here.
         */
        initializing = new Set<Part>();
    }
}
