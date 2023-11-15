/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Behavior } from "../../behavior/Behavior.js";
import { ImplementationError } from "../../common/MatterError.js";
import { BehaviorBacking } from "../../behavior/BehaviorBacking.js";
import { LifecycleBehavior } from "./LifecycleBehavior.js";
import { DescriptorServer } from "../../behavior/server/definitions/DescriptorServer.js";
import type { Part } from "../Part.js";
import type { SupportedBehaviors } from "./SupportedBehaviors.js";
import type { EndpointAgent } from "../EndpointAgent.js";
import type { ClusterBehavior } from "../../behavior/cluster/ClusterBehavior.js";
import { camelize, describeList } from "../../util/String.js";

/**
 * This class manages {@link Behavior} instances owned by a {@link Part}.
 */
export class Behaviors {
    #part: Part;
    #supported: SupportedBehaviors;
    #backings: Record<string, BehaviorBacking> = {};

    constructor(part: Part, supported: SupportedBehaviors) {
        if (typeof supported !== "object") {
            throw new ImplementationError("Part \"behaviors\" option must be an array of Behavior.Type instances");
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

        this.require(LifecycleBehavior);

        if (!this.has(DescriptorServer)) {
            this.require(DescriptorServer.set({
                deviceTypeList: [
                    {
                        deviceType: part.type.deviceType,
                        revision: part.type.deviceRevision,
                    }
                ]
            }));
        }
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
     * {@link EndpointAgent.require}.
     */
    require(type: Behavior.Type) {
        if (this.#supported[type.id]) {
            if (!this.has(type)) {
                throw new ImplementationError(
                    `Cannot require behavior ${
                        type.id
                    } because incompatible implementation already exists`);
            }
        } else {
            this.#supported[type.id] = type;
        }
    }

    /**
     * Create a behavior.  {@link EndpointAgent} obtains behaviors via this
     * method.
     */
    create(type: Behavior.Type, agent: EndpointAgent) {
        const behavior = this.getBacking(type).createBehavior(agent);
        if (behavior instanceof type) {
            return behavior;
        }

        throw new ImplementationError(
            `Cannot create behavior ${
                type.id
            } because installed implementation is incompatible`);
    }

    /**
     * Complete initialization after installation into a {@link Part}.
     */
    initialize() {
        const descriptor = this.#part.getAgent().get(DescriptorServer);
        descriptor.addServers(...Object.values(this.#supported));
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
            let name = camelize(requirement.name)

            const cluster = (requirement as ClusterBehavior.Type).cluster;
            if (cluster) {
                name = `${name} (0x${cluster.id.toString(16)})`;
            }

            if (!this.#part.behaviors.has(requirement)) {
                missing.push(name)
            }
        }

        if (missing.length) {
            throw new ImplementationError(
                `${
                    this.#part.description
                } is missing required clusters: ${
                    describeList("and", ...missing)
                }`
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

        this.#part.getAgent().get(type).initialize();

        return backing;
    }

    private getBehaviorType(type: Behavior.Type) {
        const myType = this.#supported[type.id];
        
        if (myType === undefined) {
            return myType;
        }

        if (typeof myType !== "function" || !(myType.prototype instanceof Behavior)) {
            throw new ImplementationError(
                `Endpoint behavior ${
                    type.id
                } implementation is not a Behavior`);
        }
        
        return myType;
    }
}
