/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Behavior } from "../../behavior/Behavior.js";
import { BehaviorBacking } from "../../behavior/BehaviorBacking.js";
import type { ClusterBehavior } from "../../behavior/cluster/ClusterBehavior.js";
import { LifecycleBehavior } from "../../behavior/definitions/lifecycle/LifecycleBehavior.js";
import { ImplementationError } from "../../common/MatterError.js";
import { Observable } from "../../util/Observable.js";
import { camelize, describeList } from "../../util/String.js";
import type { Agent } from "../Agent.js";
import type { Part } from "../Part.js";
import type { SupportedBehaviors } from "./SupportedBehaviors.js";

/**
 * This class manages {@link Behavior} instances owned by a {@link Part}.
 */
export class Behaviors {
    #part: Part;
    #supported: SupportedBehaviors;
    #backings: Record<string, BehaviorBacking> = {};
    #supportAdded = Observable<[type: Behavior.Type]>();

    /**
     * Event emitted when support is added for a new behavior.
     */
    get supportAdded() {
        return this.#supportAdded;
    }

    constructor(part: Part, supported: SupportedBehaviors) {
        if (typeof supported !== "object") {
            throw new ImplementationError('Part "behaviors" option must be an array of Behavior.Type instances');
        }
        for (const id in supported) {
            if (!(supported[id].prototype instanceof Behavior)) {
                throw new ImplementationError(`Part behavior #${id} is not a Behavior.Type`);
            }
            if (typeof supported[id].id !== "string") {
                throw new ImplementationError(`Part behavior #${id} has no ID`);
            }
        }

        this.#part = part;
        this.#supported = supported;
    }

    /**
     * List the {@link SupportedBehaviors} of the {@link Part}.
     */
    get supported() {
        return this.#supported;
    }

    /**
     * Does the {@link Part} support a specified behavior?
     */
    has<T extends Behavior.Type>(type: T) {
        const myType = this.#supported[type.id];
        return myType === type || myType?.supports(type);
    }

    /**
     * Add behavior support dynamically at runtime.  Typically called via
     * {@link Agent.require}.
     */
    require(type: Behavior.Type) {
        if (this.#supported[type.id]) {
            if (!this.has(type)) {
                throw new ImplementationError(
                    `Cannot require behavior ${type.id} because incompatible implementation already exists`,
                );
            }
        } else {
            if (!type.supports(LifecycleBehavior)) {
                if (this.#part.agent.get(LifecycleBehavior).state.online) {
                    throw new ImplementationError(`Cannot add behavior ${type.id} after part is online`);
                }
            }
            this.#supported[type.id] = type;
            this.#supportAdded.emit(type);
        }
    }

    /**
     * Create a behavior.  {@link Agent} obtains behaviors via this
     * method.
     */
    create(type: Behavior.Type, agent: Agent) {
        const behavior = this.getBacking(type).createBehavior(agent);
        if (behavior instanceof type) {
            return behavior;
        }

        throw new ImplementationError(
            `Cannot create behavior ${type.id} because installed implementation is incompatible`,
        );
    }

    /**
     * Destroy all behaviors.
     */
    destroy() {
        for (const backing of Object.values(this.#backings)) {
            backing.destroy();
        }
        this.#backings = {};
    }

    /**
     * Ensure a set of behavior requirements are met.  Throws an error
     * detailing missing requirements.
     */
    validateRequirements(requirements?: SupportedBehaviors) {
        if (!requirements) {
            return;
        }

        const missing = Array<string>();
        for (const requirement of Object.values(requirements)) {
            let name = camelize(requirement.name);

            const cluster = (requirement as ClusterBehavior.Type).cluster;
            if (cluster) {
                name = `${name} (0x${cluster.id.toString(16)})`;
            }

            if (!this.#part.behaviors.has(requirement)) {
                missing.push(name);
            }
        }

        if (missing.length) {
            throw new ImplementationError(
                `${this.#part.description} is missing required clusters: ${describeList("and", ...missing)}`,
            );
        }
    }

    /**
     * Obtain the backing for a behavior type.
     */
    private getBacking(type: Behavior.Type) {
        let backing = this.#backings[type.id];

        if (backing) {
            return backing;
        }

        return this.initializeBacking(type);
    }

    private initializeBacking(type: Behavior.Type) {
        const myType = this.getBehaviorType(type);
        if (!myType) {
            throw new ImplementationError(`Request for unsupported behavior ${type.id}`);
        }

        const backing = this.#part.owner.initializeBehavior(this.#part, myType);
        this.#backings[type.id] = backing;

        this.#part.agent.get(type).initialize();

        return backing;
    }

    private getBehaviorType(type: Behavior.Type) {
        const myType = this.#supported[type.id];

        if (myType === undefined) {
            return myType;
        }

        if (typeof myType !== "function" || !(myType.prototype instanceof Behavior)) {
            throw new ImplementationError(`Endpoint behavior ${type.id} implementation is not a Behavior`);
        }

        return myType;
    }
}
