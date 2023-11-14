/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Part } from "../Part.js";
import { ObservableSet, WritableObservableSet } from "../../util/Observable.js";
import { Behavior } from "../../behavior/Behavior.js";
import { State } from "../../behavior/state/State.js";
import { DescriptorServer } from "../../behavior/server/definitions/DescriptorServer.js";
import { LifecycleBehavior } from "./LifecycleBehavior.js";
import { InternalError } from "../../common/MatterError.js";

/**
 * Manages parent-child relationship between endpoints.
 * 
 * You can manipulate child parts using {@link WritableObservableSet}
 * interface.
 * 
 * The parts behavior automatically updates the Matter PartsList.
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

        parts.added(child => adoptPart(child));
        parts.deleted(child => disownPart(child));

        for (const part of this.state.parts) {
            adoptPart(part);
        }
        const owner = this.agent.part.owner;

        function structureChangeEmitter(part: Part) {
            agent.get(LifecycleBehavior).events.structure$change.emit(part);
        }

        function childDestroyed(part: Part) {
            if (parts.has(part)) {
                parts.delete(part);
                structureChangeEmitter(part);
            }
        }

        function registerPart(child: Part) {
            if (child.id === undefined) {
                throw new InternalError("Part reports as initialized but has no assigned ID");
            }

            const descriptor = agent.get(DescriptorServer);
            descriptor.addParts(child);
        }

        function adoptPart(child: Part) {
            child.owner = owner;

            const lifecycle = agent.get(LifecycleBehavior);
            
            const registerIfInitialized = () => {
                if (lifecycle.state.initialized) {
                    lifecycle.events.initialized$change.off(registerIfInitialized);
                }
                state.initializing.delete(child);

                registerPart(child);
            }

            lifecycle.events.initialized$change(registerIfInitialized)
            registerIfInitialized();

            const childLifecycle = child.getAgent().get(LifecycleBehavior);
            childLifecycle.events.structure$change(structureChangeEmitter);
            childLifecycle.events.destroyed(childDestroyed);

            structureChangeEmitter(agent.part);
        }

        function disownPart(child: Part) {
            if (child.id === undefined) {
                return;
            }

            const descriptor = agent.get(DescriptorServer);
            descriptor.removeParts(child);

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
