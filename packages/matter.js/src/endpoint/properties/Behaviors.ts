/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Behavior } from "../../behavior/Behavior.js";
import type { ClusterBehavior } from "../../behavior/cluster/ClusterBehavior.js";
import { ValidatedElements } from "../../behavior/cluster/ValidatedElements.js";
import { ActionContext } from "../../behavior/context/ActionContext.js";
import { NodeActivity } from "../../behavior/context/NodeActivity.js";
import { OfflineContext } from "../../behavior/context/server/OfflineContext.js";
import { DescriptorServer } from "../../behavior/definitions/descriptor/DescriptorServer.js";
import { BehaviorBacking } from "../../behavior/internal/BehaviorBacking.js";
import { Val } from "../../behavior/state/Val.js";
import { Transaction } from "../../behavior/state/transaction/Transaction.js";
import { ClusterType } from "../../cluster/ClusterType.js";
import { Lifecycle, UninitializedDependencyError } from "../../common/Lifecycle.js";
import { ImplementationError, InternalError, ReadOnlyError } from "../../common/MatterError.js";
import { Diagnostic } from "../../log/Diagnostic.js";
import { Logger } from "../../log/Logger.js";
import { FeatureSet } from "../../model/index.js";
import { AsyncConstruction } from "../../util/AsyncConstruction.js";
import { EventEmitter } from "../../util/Observable.js";
import { MaybePromise } from "../../util/Promises.js";
import { camelize, describeList } from "../../util/String.js";
import type { Agent } from "../Agent.js";
import type { Endpoint } from "../Endpoint.js";
import { EndpointVariableService } from "../EndpointVariableService.js";
import { BehaviorInitializationError, EndpointBehaviorsError } from "../errors.js";
import { EndpointInitializer } from "./EndpointInitializer.js";
import { EndpointLifecycle } from "./EndpointLifecycle.js";
import type { SupportedBehaviors } from "./SupportedBehaviors.js";

const logger = Logger.get("Behaviors");

/**
 * This class manages {@link Behavior} instances owned by a {@link Endpoint}.
 */
export class Behaviors {
    #endpoint: Endpoint;
    #supported: SupportedBehaviors;
    #backings: Record<string, BehaviorBacking> = {};
    #options: Record<string, object | undefined>;

    /**
     * The {@link SupportedBehaviors} of the {@link Endpoint}.
     */
    get supported() {
        return this.#supported;
    }

    get status() {
        const status = {} as Record<string, Lifecycle.Status>;
        for (const key in this.#supported) {
            status[key] = this.#backings[key]?.status ?? Lifecycle.Status.Inactive;
        }
        return status;
    }

    get [Diagnostic.value]() {
        return Diagnostic.lifecycleList(this.status);
    }

    get detailedDiagnostic() {
        return Object.entries(this.#supported).map(([name, type]) => {
            const backing = this.#backings[name];

            const result = [Diagnostic(backing?.status ?? Lifecycle.Status.Inactive, name)];

            const cluster = clusterOf(type);
            if (!cluster) {
                return result;
            }

            const elementDiagnostic = Array<unknown>();

            const elements = new ValidatedElements(type as ClusterBehavior.Type);

            const features = new FeatureSet(cluster.supportedFeatures);
            if (features.size) {
                elementDiagnostic.push([Diagnostic.strong("features"), features]);
            }

            if (elements.attributes.size) {
                elementDiagnostic.push([Diagnostic.strong("attributes"), elements.attributes]);
            }
            if (elements.commands.size) {
                elementDiagnostic.push([Diagnostic.strong("commands"), elements.commands]);
            }
            if (elements.events.size) {
                elementDiagnostic.push([Diagnostic.strong("events"), elements.events]);
            }

            if (elementDiagnostic.length) {
                result.push(Diagnostic.list(elementDiagnostic));
            }

            return result;
        });
    }

    constructor(endpoint: Endpoint, options: Record<string, object | undefined>) {
        const { type } = endpoint;
        if (typeof type?.behaviors !== "object") {
            throw new ImplementationError('EndpointType "behaviors" must be an array of Behavior.Type instances');
        }

        this.#endpoint = endpoint;
        this.#supported = type.behaviors;
        this.#options = options;

        // DescriptorBehavior is unequivocally mandatory
        if (!this.#supported.descriptor) {
            this.#supported.descriptor = DescriptorServer;
        }

        for (const id in this.#supported) {
            const type = this.#supported[id];
            if (!(type.prototype instanceof Behavior)) {
                throw new ImplementationError(`${endpoint}.${id}" is not a Behavior.Type`);
            }
            if (typeof type.id !== "string") {
                throw new ImplementationError(`${endpoint}.${id} has no ID`);
            }
            this.#augmentEndpoint(type);
        }
    }

    /**
     * Activate any behaviors designated for immediate activation.  Returns a promise iff any behaviors have ongoing
     * initialization.
     *
     * Throws an error if any behavior crashes, but we allow all behaviors to settle before throwing.  The goal is to
     * surface multiple configuration errors and prevent inconsistent state caused by partial initialization.
     */
    initialize(agent: Agent): MaybePromise {
        // Activate behaviors
        //
        // TODO - add a timeout on behavior initialization
        for (const type of Object.values(this.supported)) {
            if (type.early) {
                this.activate(type, agent);
            }
        }

        return AsyncConstruction.all(
            {
                [Symbol.iterator]: () => {
                    return Object.values(this.#backings)[Symbol.iterator]();
                },
            },

            causes => {
                throw new EndpointBehaviorsError(causes);
            },
        );
    }

    /**
     * Does the {@link Endpoint} support a specified behavior?
     */
    has<T extends Behavior.Type>(type: T) {
        const myType = this.#supported[type.id];
        return myType === type || myType?.supports(type);
    }

    /**
     * Add behavior support dynamically at runtime.  Typically called via {@link Agent.require}.
     */
    require<T extends Behavior.Type>(type: T, options?: Behavior.Options<T>) {
        if (options) {
            this.#options[type.id] = options;
        }

        if (this.#supported[type.id]) {
            if (!this.has(type)) {
                throw new ImplementationError(
                    `Cannot require ${this.#endpoint}.${type.id} because incompatible implementation already exists`,
                );
            }
            return;
        }

        this.#supported[type.id] = type;

        this.#augmentEndpoint(type);

        this.#endpoint.lifecycle.change(EndpointLifecycle.Change.ServersChanged);

        if (type.early && this.#endpoint.lifecycle.isInstalled) {
            this.#activateLate(type);
        }
    }

    /**
     * Create a behavior synchronously.  Fails if the behavior is not fully initialized.
     */
    createSync(type: Behavior.Type, agent: Agent) {
        const behavior = this.createMaybeAsync(type, agent);

        if (MaybePromise.is(behavior)) {
            throw new ImplementationError(
                `Synchronous access to ${this.#endpoint}.${type.id} is impossible because it is still initializing`,
            );
        }

        return behavior;
    }

    /**
     * Create a behavior asynchronously.  Waits for the behavior to complete initialization.
     */
    async createAsync(type: Behavior.Type, agent: Agent) {
        return MaybePromise.then(
            () => this.createMaybeAsync(type, agent),
            undefined,
            e => {
                // We log the actual error produced by the backing.  Here we want the error to present as crashed
                // access with a proper stack trace
                const backing = this.#backings[type.id];
                if (!backing) {
                    throw e;
                }
                backing.construction.assert(backing.toString());
            },
        );
    }

    /**
     * Create a behavior, possibly asynchronously.
     *
     * This method returns a {@link Promise} only if await is necessary so the behavior can be used immediately if
     * possible.
     */
    createMaybeAsync(type: Behavior.Type, agent: Agent): MaybePromise<Behavior> {
        this.activate(type, agent);
        const backing = this.#backings[type.id];

        // On first activation the backing will create the behavior to initialize.  Otherwise we need to create now.
        // This function obtains the behavior in both cases
        const getBehavior = () => {
            if (agent.isLoaded(type)) {
                return agent.get(type);
            }
            return backing.createBehavior(agent, type);
        };

        // If the backing initializes asynchronously, return a promise that returns the behavior when initialized
        if (!backing.construction.ready) {
            return backing.construction
                .then(() => getBehavior())
                .catch(() => {
                    // The backing logs the actual error so here the error should just throw "unavailable due to crash"
                    backing.construction.assert(backing.toString());

                    // Shouldn't get here but catch result type needs to be a behavior
                    return getBehavior();
                });
        }

        // Synchronous construction; first a sanity check
        backing.construction.assert(backing.toString());

        // Return the behavior instance
        return getBehavior();
    }

    /**
     * Activate a behavior.
     *
     * Semantically identical to createAsync() but does not return a {@link Promise} or throw an error.
     *
     * Behaviors that fail initialization will be marked with crashed {@link status}.
     */
    activate(type: Behavior.Type, agent: Agent) {
        let backing = this.#backings[type.id];

        if (!backing) {
            backing = this.#createBacking(type, agent);
        }
    }

    /**
     * Determine if a specified behavior is supported and active.
     */
    isActive(type: Behavior.Type) {
        const backing = this.#backings[type.id];
        return !!backing && backing.type.supports(type);
    }

    /**
     * Destroy all behaviors that are initialized (have backings present).
     */
    async close() {
        const dispose = async (context: ActionContext) => {
            const agent = context.agentFor(this.#endpoint);

            let destroyNow = new Set(Object.keys(this.#backings));
            while (destroyNow.size) {
                for (const key in this.#backings) {
                    const dependencies = this.#backings[key].type.dependencies;

                    if (!dependencies) {
                        continue;
                    }

                    for (const type of dependencies) {
                        destroyNow.delete(type.id);
                    }

                    if (!destroyNow.size) {
                        throw new ImplementationError("Cannot destroy behaviors due to circular dependency");
                    }
                }

                for (const id of destroyNow) {
                    await this.#backings[id].close(agent);
                    delete this.#backings[id];
                }

                destroyNow = new Set(Object.keys(this.#backings));
            }

            // Commit any state changes that occurred during destruction
            const transaction = agent.context.transaction;
            if (transaction.status === Transaction.Status.Exclusive) {
                await transaction.commit();
            }
        };

        await OfflineContext.act("dispose-behaviors", this.#endpoint.env.get(NodeActivity), dispose);
    }

    /**
     * Ensure a set of behavior requirements are met.  Throws an error detailing missing requirements.
     */
    validateRequirements(requirements?: SupportedBehaviors) {
        if (!requirements) {
            return;
        }

        const missing = Array<string>();
        for (const requirement of Object.values(requirements)) {
            let name = camelize(requirement.name, true);

            if (this.#endpoint.behaviors.has(requirement)) {
                continue;
            }

            // For ClusterBehaviors, accept any behavior that supports the cluster.  Could confirm features too but
            // doesn't currently
            const cluster = clusterOf(requirement);
            if (cluster) {
                const other = this.#endpoint.behaviors.supported[requirement.id];

                if (clusterOf(other)?.id === cluster.id) {
                    continue;
                }

                name = `${name} (0x${cluster.id.toString(16)})`;
            }

            missing.push(name);
        }

        if (missing.length) {
            throw new ImplementationError(
                `${this.#endpoint} is missing required behaviors: ${describeList("and", ...missing)}`,
            );
        }
    }

    /**
     * Obtain default values for a behavior.  This is state values as present when the behavior is first initialized for
     * a new endpoint.
     */
    defaultsFor(type: Behavior.Type) {
        let defaults: Val.Struct | undefined;

        // Set defaults from options
        const options = this.#options[type.id];
        if (options) {
            for (const key in type.defaults) {
                if (key in options) {
                    if (!defaults) {
                        defaults = {};
                    }
                    defaults[key] = (options as Val.Struct)[key];
                }
            }
        }
        // Set defaults from environmental configuration
        const varService = this.#endpoint.env.get(EndpointVariableService);
        const vars = varService.forBehaviorInstance(this.#endpoint, type);
        if (vars !== undefined) {
            defaults = { ...defaults, ...(type.supervisor.cast(vars) as Val.Struct) };
        }

        return defaults;
    }

    /**
     * Access internal state for a {@link Behavior}.
     *
     * Internal state is not stable API and not intended for consumption outside of the behavior.  However it is not
     * truly private and may be accessed by tightly coupled implementation.
     *
     * As this API is intended for use by "friendly" code, it does not perform the same initialization assertions as
     * does access to {@link Behavior.State} and {@link Behavior.Events}.
     */
    internalsOf<T extends Behavior.Type>(type: T) {
        let backing = this.#backings[type.id];
        if (!backing) {
            this.#activateLate(type);
            backing = this.#backings[type.id];
            if (backing === undefined) {
                throw new InternalError(`Behavior ${this.#endpoint}.${type.id} late activation did not create backing`);
            }
        }
        return backing.getInternal() as InstanceType<T["Internal"]>;
    }

    /**
     * Destroy in-memory state, resetting behaviors to uninitialized state.
     */
    async reset() {
        for (const backing of Object.values(this.#backings)) {
            try {
                await this.#endpoint.act(async agent => {
                    await backing.close(agent);
                });
            } catch (e) {
                logger.error(`Error during reset of ${backing}:`, e);
            }
            delete this.#backings[backing.type.id];
        }
    }

    #activateLate(type: Behavior.Type) {
        const result = OfflineContext.act("behavior-late-activation", this.#endpoint.env.get(NodeActivity), context =>
            this.activate(type, context.agentFor(this.#endpoint)),
        );

        if (MaybePromise.is(result)) {
            result.then(undefined, error => {
                // The backing should handle its own errors so assume this is a commit error and crash the backing.  If
                // there's no backing then there shouldn't be a promise so this is effectively an internal error
                const backing = this.#backings[type.id];
                if (backing) {
                    backing.construction.crashed(error);
                } else {
                    logger.error("Unexpected rejection of late activation", error);
                }
            });
        }
    }

    /**
     * Obtain a backing for an endpoint shortcut.
     */
    #backingFor(container: string, type: Behavior.Type) {
        if (this.#endpoint.construction.status !== Lifecycle.Status.Initializing) {
            this.#endpoint.construction.assert(`Cannot access ${this.#endpoint}.${type.id} because endpoint`);
        }

        let backing = this.#backings[type.id];
        if (!backing) {
            try {
                this.#activateLate(type);
            } catch (e) {
                logger.warn(`Cannot initialize ${container}.${type.id} until node is initialized: ${e}`);
                throw new UninitializedDependencyError(
                    `${container}.${type.id}`,
                    "is not available until node is initialized, you may await node.construction to avoid this error",
                );
            }
            backing = this.#backings[type.id];
            if (backing === undefined) {
                throw new InternalError(`Behavior ${this.#endpoint}.${type.id} late activation did not create backing`);
            }
        }
        return backing;
    }

    #createBacking(type: Behavior.Type, agent: Agent) {
        // Ensure the type is supported.  If it is, we instantiate with our type rather than the specified type because
        // our type might be an extension
        const myType = this.#getBehaviorType(type);
        if (!myType) {
            throw new BehaviorInitializationError(`Initializing ${this.#endpoint}.${type.id}: Unsupported behavior`);
        }

        const backing = this.#endpoint.env.get(EndpointInitializer).createBacking(this.#endpoint, myType);
        this.#backings[type.id] = backing;

        backing.construction.start(agent);

        return backing;
    }

    #getBehaviorType(type: Behavior.Type) {
        const myType = this.#supported[type.id];

        if (myType === undefined) {
            return myType;
        }

        if (typeof myType !== "function" || !(myType.prototype instanceof Behavior)) {
            throw new ImplementationError(`Endpoint behavior "${type.id}" implementation is not a Behavior`);
        }

        return myType;
    }

    /**
     * Updates endpoint "state" and "events" properties to include properties for our implementations.
     */
    #augmentEndpoint(type: Behavior.Type) {
        Object.defineProperty(this.#endpoint.state, type.id, {
            get: () => {
                return this.#backingFor("state", type).stateView;
            },

            set() {
                throw new ReadOnlyError('The "state" property is read-only; you must use set() to modify state');
            },

            enumerable: true,
        });

        let events: undefined | EventEmitter;
        Object.defineProperty(this.#endpoint.events, type.id, {
            get: () => {
                if (!events) {
                    events = new type.Events();
                }
                return events;
            },

            enumerable: true,
        });
    }
}

function clusterOf(behavior?: Behavior.Type): ClusterType | undefined {
    return (behavior as ClusterBehavior.Type)?.cluster;
}
