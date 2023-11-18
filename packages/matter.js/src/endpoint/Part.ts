/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ImplementationError } from "../common/MatterError.js";
import { EndpointAgent } from "./EndpointAgent.js";
import { EndpointType } from "./type/EndpointType.js";
import { Behaviors } from "./part/Behaviors.js";
import { LifecycleBehavior } from "./part/LifecycleBehavior.js";
import type { InvocationContext } from "../behavior/InvocationContext.js";
import type { EndpointNumber } from "../datatype/EndpointNumber.js";
import type { PartOwner } from "./part/PartOwner.js";
import { BasicInformationBehavior } from "../behavior/definitions/basic-information/Behavior.js";
import { BridgedDeviceBasicInformationBehavior } from "../behavior/definitions/bridged-device-basic-information/Behavior.js";

/**
 * Endpoints consist of a root part and one or more child parts.  This class
 * manages the current state of a single part.
 * 
 * You can interact with endpoints using an {@link EndpointAgent} created
 * with {@link Part.getAgent}.  Agents are stateless and designed for quick
 * instantiation so you can create them as needed then discard.
 */
export class Part {
    #id?: EndpointNumber;
    #key?: string | undefined;
    #type: EndpointType;
    #owner?: PartOwner;
    #agentType?: EndpointAgent.Type;
    #unscopedAgent?: EndpointAgent;
    #behaviors: Behaviors;

    constructor(options: Part.Options) {
        this.#type = options.type;

        if (options.id !== undefined) {
            this.id = options.id;
        }
        
        if (options.key !== undefined) {
            // Any other limitations?
            if (typeof options.key !== "string" || !options.key.length) {
                throw new ImplementationError(`Illegal part identifier ${options.key}`);
            }
            this.#key = options.key;
        }

        const behaviors = options.type?.behaviors;
        if (!behaviors || !Object.keys(behaviors).length) {
            throw new ImplementationError("Part created with no behaviors");
        }
        
        this.#behaviors = new Behaviors(this, behaviors);
    }

    /**
     * The Matter {@link EndpointNumber} of the endpoint.  This uniquely
     * identifies the {@link Part} in the scope of the Matter node.
     */
    get id() {
        return this.#id;
    }

    /**
     * A string that uniquely identifies a part.  This is an alternative ID
     * that is unique across the Matter node.
     */
    get key() {
        return this.#key;
    }

    /**
     * The type of endpoint this part implements.
     */
    get type() {
        return this.#type;
    }

    /**
     * Access the owner of the part.  The part will only have an owner if it
     * is installed in a Node.
     */
    get owner() {
        if (this.#owner === undefined) {
            throw new ImplementationError("Cannot access owner of uninstalled part");
        }
        return this.#owner;
    }

    /**
     * Set the part's owner.  Once set, the owner is responsible for managing
     * the part's lifecycle.
     */
    set owner(owner: PartOwner) {
        if (this.#owner !== undefined) {
            throw new ImplementationError(`Cannot reparent installed part`);
        }
        this.#owner = owner;

        if (this.#id !== undefined) {
            this.getAgent().get(LifecycleBehavior).state.installed = true;
        }
    }

    /**
     * Set endpoint ID.  TS requires us to allow undefined here but it is not
     * a legal argument type.
     */
    set id(value: EndpointNumber | undefined) {
        if (typeof value !== "number") {
            throw new ImplementationError(`Illegal endpoint ID type "${typeof value}"`);
        }
        if (value < 1 || value > 65535) {
            throw new ImplementationError(`Endpoint ID ${value} is out of bounds`);
        }
        if (this.#id !== undefined && this.#id !== value) {
            throw new ImplementationError(
                `Illegal attempt to reassign endpoint ${
                    this.#id
                } ID to ${
                    value
                }`);
        }
        this.#id = value;

        if (this.#owner !== undefined) {
            this.getAgent().get(LifecycleBehavior).state.installed = true;
        }
    }

    /**
     * Access the pool of behaviors supported by this part.
     */
    get behaviors() {
        return this.#behaviors;
    }

    /**
     * Returns a human-readable name for the part.
     */
    get description() {
        let description;
        if (this.key) {
            description = ` ${this.key}`;
        }
        if (this.id) {
            if (description) {
                description = `${description} (#${this.id})`;
            } else {
                description = ` #${this.id}`;
            }
        }
        description = `Endpoint ${
            description ?? ""
        } of type ${
            this.type.name
        } (device type 0x${
            this.type.deviceType.toString(16)
        })`;

        return description;
    }

    /**
     * Obtain the key used to identify this part across invocations.
     * 
     * @returns the key, or undefined if the key is unavailable
     */
    get uniqueId() {
        if (this.key) {
            return `custom_${this.key}`;
        }
        
        const agent = this.getAgent();
        let basicInfo;
        if (agent.has(BasicInformationBehavior)) {
            basicInfo = agent.get(BasicInformationBehavior).state;
        } else if (agent.has(BridgedDeviceBasicInformationBehavior)) {
            basicInfo = agent.get(BridgedDeviceBasicInformationBehavior).state;
        } else {
            return;
        }

        const uniqueId = basicInfo.uniqueId;
        if (uniqueId) {
            return `unique_${uniqueId}`
        }

        const serialNumber = basicInfo.serialNumber;
        if (serialNumber) {
            return `serial_${serialNumber}`;
        }
    }

    /**
     * Create an {@link EndpointAgent}.  This is the primary means of
     * interacting with an endpoint.
     * 
     * If {@link InvocationContext.fabric} is not present, any operations of
     * the agent that reference fabric scope will throw an error.
     */
    getAgent(context?: InvocationContext) {
        if (!this.#agentType) {
            this.#agentType = EndpointAgent.for(this.#behaviors.supported);
        }

        // For unscoped access we cache the agent
        if (!context || !context.fabric) {
            if (!this.#unscopedAgent) {
                this.#unscopedAgent = new this.#agentType(this, {});
            }
            return this.#unscopedAgent;
        }

        // For scoped access we need an agent with session context
        //
        // TODO - agents need a 1:1 mapping with sessions.  They're optimized
        // for fast creation but if necessary we could cache and reuse by
        // replacing the context
        return new this.#agentType(this, context);
    }

    destroy() {
        const destroyedEvent = this.getAgent().get(LifecycleBehavior).events.destroyed;
        this.behaviors.destroy();
        destroyedEvent.emit(this);
    }
}

export namespace Part {
    /**
     * Construction options for {@link Part}.
     */
    export interface Options {
        type: EndpointType,
        key?: string,
        id?: EndpointNumber,
    }
}
