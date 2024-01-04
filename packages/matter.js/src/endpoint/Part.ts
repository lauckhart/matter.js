/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { AccessControl } from "../behavior/AccessControl.js";
import { Behavior } from "../behavior/Behavior.js";
import { BehaviorBacking } from "../behavior/BehaviorBacking.js";
import type { InvocationContext } from "../behavior/InvocationContext.js";
import { IndexBehavior } from "../behavior/definitions/index/IndexBehavior.js";
import { PartsBehavior } from "../behavior/definitions/parts/PartsBehavior.js";
import { ImplementationError, NotInitializedError } from "../common/MatterError.js";
import { EndpointNumber } from "../datatype/EndpointNumber.js";
import { AsyncConstruction } from "../util/AsyncConstruction.js";
import { Agent } from "./Agent.js";
import { RootEndpoint } from "./definitions/system/RootEndpoint.js";
import { Behaviors } from "./part/Behaviors.js";
import { Lifecycle } from "./part/Lifecycle.js";
import type { PartOwner } from "./part/PartOwner.js";
import { EndpointType } from "./type/EndpointType.js";

/**
 * Endpoints consist of a hierarchy of parts.  This class manages the current
 * state of a single part.
 *
 * You can interact with endpoints using an {@link Agent} created
 * with {@link Part.getAgent}.  Agents are stateless and designed for quick
 * instantiation so you can create them as needed then discard.
 * 
 * Most often direct access to {@link Agent} is transparent as Matter.js
 * acquires an agent as necessary for {@link Behavior} interactions.
 */
export class Part<T extends EndpointType = EndpointType.Empty> implements PartOwner {
    #type: EndpointType;
    #id?: string;
    #number?: EndpointNumber;
    #owner?: PartOwner;
    #agentType?: Agent.Type<T["behaviors"]>;
    #offlineAgent?: Agent.Instance<T["behaviors"]>;
    #behaviors?: Behaviors;
    #lifecycle: Lifecycle;
    #parts?: PartsBehavior;
    #construction: AsyncConstruction<Part<T>>;
    #ownerReady?: () => void;

    /**
     * A string that uniquely identifies a part.  This ID must be unique across
     * the Matter node.
     */
    get id() {
        if (this.#id === undefined) {
            throw new NotInitializedError(
                "Part ID is not yet assigned; set ID or await part.construction to avoid this error"
            );
        }
        return this.#id;
    }

    /**
     * The Matter {@link EndpointNumber} of the endpoint.  This uniquely
     * identifies the {@link Part} in the scope of the Matter node.
     */
    get number(): EndpointNumber {
        if (this.#number === undefined) {
            throw new NotInitializedError(
                "Part number is not yet assigned; set number or await part.construction to avoid this error"
            );
        }
        return this.#number;
    }

    /**
     * The owner of the part.
     */
    get owner() {
        if (this.#owner === undefined) {
            throw new NotInitializedError(
                "Part owner is not yet assigned; add part to parent to avoid this error");
        }
        return this.#owner;
    }

    /**
     * Access the pool of behaviors supported by this part.
     */
    get behaviors() {
        if (this.#behaviors === undefined) {
            throw new NotInitializedError(
                "Part behaviors not yet initialized; await part.construction to avoid this error"
            );
        }
        return this.#behaviors;
    }
    
    get construction() {
        return this.#construction;
    }

    constructor(config: Part.Configuration<T> | T);

    constructor(type: T, options: Part.Options<T>);

    constructor(definition: T | Part.Configuration<T>, options?: Part.Options<T>) {
        if (Part.isConfiguration(definition)) {
            options = definition;
            definition = definition.type
        }

        this.#type = definition;
        this.#owner = options?.owner;
        this.#lifecycle = new Lifecycle(this);

        if (options?.id !== undefined) {
            this.id = options?.id;
        }

        if (options?.number !== undefined) {
            this.number = options?.number;
        }

        const behaviors = this.#type.behaviors ?? [];
        this.#behaviors = new Behaviors(this, behaviors, { ...options?.config });

        this.#construction = AsyncConstruction(this, () => {
            if (this.#owner) {
                // Immediate initialization
                return this.#initialize();
            }

            // Deferred initialization -- wait for installation
            const installed = new Promise<void>(fulfilled => {
                const installationListener = () => {
                    this.#lifecycle.events.installed.off(installationListener);
                    fulfilled();
                }
                this.#lifecycle.events.installed.on(installationListener);
            });
            return installed.then(() => this.#initialize());
        });
    }

    #initialize() {
        this.owner.initializePart(this);
        return this.behaviors.initialize();
    }

    set id(id: string) {
        if (this.#id === id) {
            return;
        }
        if (this.#id !== undefined) {
            throw new ImplementationError(`${this.description}: ID is already assigned, cannot reassign`);
        }
        if (typeof id !== "string") {
            throw new ImplementationError(`Illegal endpoint ID type "${typeof id}"`);
        }
        if (id === "") {
            throw new ImplementationError("Endpoint ID may not be empty");
        }
        if (id.includes(".")) {
            throw new ImplementationError('Endpoint ID may not include "."');
        }

        const index = this.root?.agent.get(IndexBehavior);
        index?.assertIdAvailable(id, this);
        
        this.#id = id;
        this.lifecycle.change(
            Lifecycle.Change.IdAssigned,
            this
        );
    }

    set number(number: number) {
        if (this.#number === number) {
            return;
        }
        if (this.#number !== undefined) {
            throw new ImplementationError(`${this.description}: Endpoint number is already assigned, cannot reassign`)
        }
        if (typeof number !== "number") {
            throw new ImplementationError(`Illegal endpoint number type "${typeof number}"`);
        }
        if (number < 0 || number > 0xffff) {
            throw new ImplementationError(`Endpoint number ${number} is out of bounds`);
        }

        if (this.type.deviceClass === RootEndpoint.deviceClass) {
            if (number !== 0) {
                throw new ImplementationError("The root endpoint must have ID 0");
            }
        } else {
            if (number === 0) {
                throw new ImplementationError("Root endpoint must be a ");
            }

            const index = this.root?.agent.get(IndexBehavior);
            index?.assertNumberAvailable(number, this);
        }

        this.#number = EndpointNumber(number);

        this.lifecycle.change(
            Lifecycle.Change.NumberAssigned,
            this
        );
    }

    set owner(owner: PartOwner) {
        if (this.#owner !== undefined) {
            throw new ImplementationError("Part owner cannot be reassigned");
        }
        this.#owner = owner;
        this.#ownerReady?.();
    }

    /**
     * The type of endpoint this part implements.
     */
    get type() {
        return this.#type;
    }

    /**
     * Access child parts.
     */
    get parts() {
        if (!this.#parts) {
            this.#agent.require(PartsBehavior);
            this.#parts = this.#agent.get(PartsBehavior);
        }
        return this.#parts;
    }

    /**
     * Access lifecycle information.
     */
    get lifecycle() {
        return this.#lifecycle;
    }

    /**
     * Returns a human-readable name for the part.
     */
    get description() {
        let description;
        if (this.id) {
            description = ` ${this.id}`;
        }
        if (this.number) {
            if (description) {
                description = `${description} (#${this.number})`;
            } else {
                description = ` #${this.number}`;
            }
        }
        description = `Endpoint ${description ?? ""} of type ${
            this.type.name
        } (device type 0x${this.type.deviceType.toString(16)})`;

        return description;
    }

    /**
     * Access the root of the part hierarchy, if any.
     */
    get root(): Part<RootEndpoint> | undefined {
        for (let part: PartOwner | undefined = this; part = part; part = part.owner) {
            if (part instanceof Part && part.type.deviceClass === RootEndpoint.deviceClass) {
                return part as Part<RootEndpoint>;
            }
        }
    }

    /**
     * Create an {@link Agent}.  This is the primary means of
     * interacting with an endpoint.
     *
     * If {@link InvocationContext.fabric} is not present the operation will
     * fail.
     */
    getAgent(context: InvocationContext): Agent.Instance<T["behaviors"]> {
        return new this.#resolvedAgentType(this, context);
    }

    /**
     * Access an offline {@link Agent}.  An offline agent enforces no ACLs and
     * all state is read/write.
     *
     * This should only be used for local purposes.  All network interaction
     * should use {@link getAgent} to create a context-aware agent.
     */
    get agent() {
        return this.#agent;
    }

    toString() {
        const ident = Array<string>();
        if (this.id) {
            ident.push(this.id);
        }
        if (this.number) {
            ident.push(`#${this.number}`);
        }
        if (!ident.length) {
            ident.push("anon");
        }
        return `${this.type.name}<${ident.join("; ")}>`;
    }

    get #agent() {
        if (!this.#offlineAgent) {
            this.#offlineAgent = new this.#resolvedAgentType(this, AccessControl.OfflineSession);
        }
        return this.#offlineAgent;
    }

    async destroy() {
        await this[Symbol.asyncDispose]();
    }

    async [Symbol.asyncDispose]() {
        const destroyedEvent = this.lifecycle.events.destroyed;
        await this.behaviors[Symbol.asyncDispose]();
        destroyedEvent.emit(this);
    }

    initializePart(part: Part) {
        this.owner.initializePart(part);
    }

    createBacking(part: Part, behavior: Behavior.Type): BehaviorBacking {
        if (!this.owner) {
            throw new ImplementationError("Cannot initialize behavior because parent is not installed");
        }
        return this.owner.createBacking(part, behavior);
    }

    get #resolvedAgentType() {
        if (!this.#agentType) {
            this.#agentType = Agent.for(this.type.name, this.behaviors.supported);
        }
        return this.#agentType;
    }
}

export namespace Part {
    /**
     * Construction options for {@link Part}.
     */
    export type Options<T extends EndpointType = EndpointType.Empty> = 
        & {
            owner?: PartOwner;
            id?: string;
            number?: number;
            config?: BehaviorConfigurations<T>;
        };

    /**
     * Options with embedded type.
     */
     export type Configuration<T extends EndpointType = EndpointType.Empty> =
        & { type: T }
        & Options<T>;

    export type BehaviorConfigurations<T extends EndpointType> = {
        [id in keyof T["behaviors"]]?: Behavior.Options<T["behaviors"][id]>
    }    

    /**
     * Definition of a Part.  May be an {@link EndpointType},
     * {@link Configuration}, or a {@link Part} instance.
     */
    export type Definition<T extends EndpointType = EndpointType.Empty> =
        | T
        | Configuration<T>
        | Part<T>;

    /**
     * Determine whether a {@link Definition} is a {@link Configuration}.
     */
    export function isConfiguration<T extends EndpointType>(
        definition: Definition<T>
    ): definition is Configuration<T> {
        return !(definition instanceof Part) && !!(definition as Configuration<T>).type;
    }

    /**
     * Obtain a part for the given {@link Definition}.
     */
    export function partFor<T extends EndpointType>(definition: Definition<T>): Part<T> {
        if (definition instanceof Part) {
            return definition;
        }

        return new Part(definition);
    }
}
