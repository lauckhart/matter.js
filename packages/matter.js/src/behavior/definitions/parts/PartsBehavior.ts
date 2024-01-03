/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Agent } from "../../../endpoint/Agent.js";
import { Part } from "../../../endpoint/Part.js";
import { Lifecycle } from "../../../endpoint/part/Lifecycle.js";
import { EndpointType } from "../../../endpoint/type/EndpointType.js";
import { BasicSet, MutableSet } from "../../../util/Set.js";
import { Behavior } from "../../Behavior.js";
import { IdentityConflictError, IndexBehavior } from "../index/IndexBehavior.js";

/**
 * Manages parent-child relationship between endpoints.
 *
 * You can manipulate child parts using {@link MutableSet}
 * interface.
 *
 * Notifications of structural change bubble via
 * {@link Part.lifecycle.events.change}.
 */
export class PartsBehavior extends Behavior implements MutableSet<Part, Part | Agent> {
    static override readonly id = "parts";

    declare readonly internal: PartsBehavior.Internal;
    declare readonly state: PartsBehavior.State;

    override initialize() {
        const change = this.part.lifecycle.events.change;
        this.internal.emitChange = (type, part) => change.emit(type, part);
        this.internal.disownPart = (part) => this.#disownPart(part);

        // Update state in response to mutation of state.parts
        const children = this.state.children;
        children.added.on(child => this.#adoptPart(child));
        children.deleted.on(child => this.#disownPart(child));

        // Propagate "installed" status changes to children
        this.part.lifecycle.events.installed.on(() => {
            for (const part of this.state.children) {
                part.lifecycle.change(Lifecycle.Change.Installed);
            }
        })

        // Immediately adopt any parts present in state upon initialization
        for (const part of this.state.children) {
            this.#adoptPart(part);
        }
    }

    add(child: Part.Definition | Agent) {
        this.state.children.add(this.#partFor(child));
    }

    delete(child: Part | Agent) {
        return this.state.children.delete(this.#partFor(child));
    }
 
    clear() {
        this.state.children.clear();
    }

    has(child: Part | Agent) {
        return this.state.children.has(this.#partFor(child));
    }

    indexOf(child: Part | Agent) {
        const part = this.#partFor(child);
        let index = 0;

        for (const other of this.state.children) {
            if (part === other) {
                return index;
            }
            index++;
        }

        return -1;
    }

    get added() {
        return this.state.children.added;
    }

    get deleted() {
        return this.state.children.deleted;
    }

    get size() {
        return this.state.children.size;
    }

    [Symbol.iterator]() {
        return this.state.children[Symbol.iterator]();
    }

    /**
     * Take ownership of a part.  Invoked when a part is added to
     * {@link state.children}.
     */
    #adoptPart(child: Part) {
        this.#validateInsertion(child);
        child.owner = this.agent.part;

        child.lifecycle.events.change.on(this.internal.emitChange);
        child.lifecycle.events.destroyed.on(this.internal.disownPart);

        if (this.part.lifecycle.installed) {
            child.lifecycle.change(Lifecycle.Change.Installed);
        }

        this.internal.emitChange(
            Lifecycle.Change.PartAdded,
            child,
        );
    }

    /**
     * Terminate ownership of a part.  Invoked when a part is destroyed or
     * removed from state.parts.
     */
    #disownPart(child: Part) {
        const childLifeCycle = child.lifecycle;
        childLifeCycle.events.change.off(this.internal.emitChange);
        childLifeCycle.events.destroyed.off(this.internal.disownPart);

        this.internal.emitChange(Lifecycle.Change.PartDeleted, child)
    }
    
    #validateInsertion(part: Part, usedIds?: Set<string>, usedNumbers?: Set<number>) {
        // If there is no index then we aren't yet installed.  This test
        // will occur instead when we're installed
        const index = this.part.root?.agent.get(IndexBehavior);
        if (!index) {
            return;
        }

        if (part.id) {
            index.assertIdAvailable(part.id, part);
            if (usedIds?.has(part.id)) {
                throw new IdentityConflictError(
                    `${part.description}: Cannot add part because descendents have conflicting definitions for ID ${part.id}`
                );
            }
        }

        if (part.number) {
            index.assertNumberAvailable(part.number, part);
            if (usedNumbers?.has(part.number)) {
                throw new IdentityConflictError(
                    `${part.description}: Cannot add part because descendents have conflicting definitions for endpoint number ${part.number}`
                );
            }
        }

        if (!part.behaviors.isActive(PartsBehavior)) {
            return;
        }

        const children = part.parts;
        if (!children.size) {
            return;
        }

        // We cannot rely on index to track identity of incoming part hierarchy
        // because the entries are not yet present in the index
        if (!usedIds) {
            usedIds = new Set;
        }
        if (part.id) {
            usedIds.add(part.id);
        }
        if (!usedNumbers) {
            usedNumbers = new Set;
        }
        if (part.number) {
            usedNumbers.add(part.number);
        }

        for (const child of children) {
            this.#validateInsertion(child, usedIds, usedNumbers);
        }
    }

    #partFor(child: Part.Definition | Agent) {
        if (child instanceof Agent) {
            child = child.part;
        }

        if (!(child instanceof Part)) {
            if ((child as any).type) {
                (child as any).owner = this.part;
            } else {
                child = {
                    type: child as EndpointType,
                    owner: this.part,
                }
            }
        }

        return Part.partFor(child);
    }
}

export namespace PartsBehavior {
    export class Internal {
        emitChange: (type: Lifecycle.Change, part: Part) => void
            = () => {};

        disownPart: (part: Part) => void
            = () => {};
    }

    export class State {
        /**
         * Child parts of the endpoint.
         */
        children = new BasicSet<Part>();
    }
}
