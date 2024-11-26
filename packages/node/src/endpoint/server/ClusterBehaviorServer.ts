/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { AccessControl } from "#behavior/AccessControl.js";
import { Behavior } from "#behavior/Behavior.js";
import { ClusterBehavior } from "#behavior/cluster/ClusterBehavior.js";
import { ValidatedElements } from "#behavior/cluster/ValidatedElements.js";
import { ClusterEvents, Contextual, Resource } from "#behavior/index.js";
import { StructManager } from "#behavior/state/managed/values/StructManager.js";
import { Status } from "#behavior/state/transaction/Status.js";
import { Val } from "#behavior/state/Val.js";
import { Agent } from "#endpoint/Agent.js";
import { Endpoint } from "#endpoint/Endpoint.js";
import { camelize, Diagnostic, ImplementationError, InternalError, isObject, Logger, MaybePromise } from "#general";
import { CommandModel, ElementTag } from "#model";
import {
    AttributeServer,
    ClusterDatasource,
    CommandServer,
    createAttributeServer as ConstructAttributeServer,
    EventServer,
    FabricManager,
    Message,
    OccurrenceManager,
    SecureSession,
} from "#protocol";
import { Attribute, Command, Event, TlvNoResponse } from "#types";
import { EndpointServer } from "./EndpointServer.js";

const logger = Logger.get("ClusterBehaviorServer");

interface ElementServerContext {
    endpoint: Endpoint;
    type: ClusterBehavior.Type;
    clusterDatasource: ClusterDatasource;
    endpointServer: EndpointServer;
}

export function ClusterBehaviorServer(endpoint: Endpoint, agent: Agent, type: ClusterBehavior.Type) {
    const { id, name, attributes, commands, events } = type.cluster;

    const clusterServer = {
        id,
        name,
        datasource: createClusterDatasource(endpoint, type),
        attributes: {},
        commands: {},
        events: {},
    };

    const owner = {
        endpoint,
        type,
        clusterDatasource: clusterServer.datasource,
        endpointServer: EndpointServer.forEndpoint(endpoint),
    } satisfies ElementServerContext;

    const behavior = agent.get(type);

    // Validate elements and determine which are applicable
    const elements = new ValidatedElements(type, behavior);
    elements.report();

    // Attribute servers.  Include global attributes as well as cluster attributes
    configureServers(
        owner,
        elements.attributes,
        attributes,
        clusterServer.attributes,
        behavior,
        ["attributeList"],
        createAttributeServer,
    );

    // Command servers
    configureServers(
        owner,
        elements.commands,
        commands,
        clusterServer.commands,
        behavior,
        ["acceptedCommandList", "generatedCommandList"],
        createCommandServer,
    );

    // Event servers
    configureServers(owner, elements.events, events, clusterServer.events, behavior, undefined, createEventServer);
}

/**
 * Create the {@link ClusterDatasource} that adapts the Behavior API to the AttributeServer API.
 */
function createClusterDatasource(endpoint: Endpoint, type: Behavior.Type): ClusterDatasource {
    const env = endpoint.env;

    return {
        get version() {
            return endpoint.behaviors.versionOf(type);
        },

        get eventManager() {
            return env.get(OccurrenceManager);
        },

        get fabrics() {
            return env.get(FabricManager).fabrics;
        },

        // We handle change management ourselves
        changed() {},

        // We handle version management ourselves
        increaseVersion() {
            return this.version;
        },
    };
}

/**
 * Configure the servers for a set of elements (attributes, commands or events).
 */
function configureServers<T, S>(
    owner: ElementServerContext,
    names: Iterable<string>,
    definitions: Record<string, T>,
    servers: Record<string, S>,
    behavior: Behavior,
    attributeNames: ["attributeList"] | ["acceptedCommandList", "generatedCommandList"] | undefined,
    addServer: (
        name: string,
        definition: T,
        backing: ElementServerContext,
        behavior: Behavior,
    ) => { ids: number[]; server: S },
) {
    const collectedIds = Array<Set<number>>();
    if (attributeNames !== undefined) {
        attributeNames.forEach(() => collectedIds.push(new Set()));
    }

    // Create a server for each supported element and record the ID
    for (const name of names) {
        const definition = definitions[name];
        const { ids, server } = addServer(name, definition, owner, behavior);
        if (attributeNames !== undefined) {
            ids.forEach((id, index) => collectedIds[index].add(id));
        }
        servers[name] = server;
    }

    if (attributeNames !== undefined) {
        // Set the global attribute detailing supported elements
        attributeNames.forEach((attributeName, index) => {
            (behavior.state as Record<string, number[]>)[attributeName] = [...collectedIds[index].values()];
        });
    }
}

function createAttributeServer(
    name: string,
    definition: Attribute<any, any>,
    owner: ElementServerContext,
    behavior: Behavior,
) {
    function getter(_session: any, _endpoint: any, _isFabricFiltered: any, message?: Message) {
        if (!message) {
            // If there is no message this is getLocal
            return (owner.endpoint.state as Val.Struct)[name];
        }

        const behavior = behaviorFor(owner, message);

        behavior.context.activity?.frame(`read ${name}`);

        const trace = behavior.context.trace;
        if (trace) {
            trace.path = owner.endpoint.path.at(name);
        }

        logger.debug("Read", Diagnostic.strong(`${owner}.state.${name}`), "via", behavior.context.transaction.via);

        const state = behavior.state as Val.Struct;

        StructManager.assertDirectReadAuthorized(state, name);

        if (trace) {
            trace.output = state[name];
        }

        return state[name];
    }

    function setter(value: any, _session: any, _endpoint: any, message?: Message) {
        const behavior = behaviorFor(owner, message);

        behavior.context.activity?.frame(`write ${name}`);

        logger.info("Write", Diagnostic.strong(`${owner}.state.${name}`), "via", behavior.context.transaction.via);

        const trace = behavior.context.trace;
        if (trace) {
            trace.path = owner.endpoint.path.at(name);
            trace.input = value;
        }

        const state = behavior.state as Val.Struct;

        state[name] = value;

        // If the transaction is a write transaction, report that
        // the attribute is updated
        return behavior.context.transaction?.status === Status.Exclusive;
    }

    const server = ConstructAttributeServer(
        owner.type.cluster,
        definition,
        name,
        (behavior.state as Val.Struct)[name],
        owner.clusterDatasource,
        getter,
        setter,
    );

    // Wire events (FixedAttributeServer is not an AttributeServer so we skip that)
    if (server instanceof AttributeServer) {
        const observable = (owner.endpoint.events as any)[`${name}$Changed`] as
            | ClusterEvents.AttributeObservable
            | undefined;
        observable?.on((_value, _oldValue, context) => {
            const session = context.session;
            if (session instanceof SecureSession) {
                server.updated(session);
            } else {
                server.updatedLocal();
            }
        });
    }

    server.assignToEndpoint(owner.endpointServer);

    return {
        ids: [definition.id],
        server,
    };
}

function createCommandServer(name: string, definition: Command<any, any, any>, owner: ElementServerContext) {
    // TODO: Introduce nicer ways to get command incl caching and such, aka "make api suck less"
    const schema = owner.type.schema?.member(camelize(name, true), [ElementTag.Command]) as CommandModel;
    if (schema === undefined) {
        throw new ImplementationError(`There is no metadata for command ${name}`);
    }
    const access = AccessControl(schema);

    const handler = (request: unknown, _session: unknown, message: Message) => {
        let requestDiagnostic: unknown;
        if (isObject(request)) {
            requestDiagnostic = Diagnostic.dict(request);
        } else if (request !== undefined) {
            requestDiagnostic = request;
        } else {
            requestDiagnostic = Diagnostic.weak("(no payload)");
        }

        const behavior = behaviorFor(owner, message);

        const path = owner.endpoint.path.at(name);

        const trace = behavior.context.trace;
        if (trace) {
            trace.path = owner.endpoint.path.at(name);
            trace.input = request;
        }

        logger.info("Invoke", Diagnostic.strong(path.toString()), behavior.context.transaction.via, requestDiagnostic);

        access.authorizeInvoke(behavior.context, {
            path,
            cluster: behavior.cluster.id,
        });

        let isAsync = false;
        let activity: undefined | Disposable;
        let result: unknown;
        try {
            activity = behavior.context?.activity?.frame(`invoke ${name}`);

            const invoke = (behavior as unknown as Record<string, (arg: unknown) => unknown>)[name].bind(behavior);

            // Lock if necessary, then invoke
            if ((behavior.constructor as ClusterBehavior.Type).lockOnInvoke) {
                const tx = behavior.context.transaction;
                if (Resource.isLocked(behavior)) {
                    // Automatic locking with locked resource; requires async lock acquisition
                    result = (async function invokeAsync() {
                        await tx.addResources(behavior);
                        await tx.begin();
                        return invoke(request);
                    })();
                } else {
                    // Automatic locking on unlocked resource; may proceed synchronously
                    tx.addResourcesSync(behavior);
                    tx.beginSync();
                    result = invoke(request);
                }
            } else {
                // Automatic locking disabled
                result = invoke(request);
            }

            if (MaybePromise.is(result)) {
                isAsync = true;
                result = Promise.resolve(result)
                    .then(result => {
                        if (trace) {
                            trace.output = result;
                        }
                        return result;
                    })
                    .finally(() => activity?.[Symbol.dispose]());
            } else if (trace) {
                trace.output = result;
            }
        } finally {
            if (!isAsync) {
                activity?.[Symbol.dispose]();
            }
        }

        return result;
    };

    const server = new CommandServer(
        definition.requestId,
        definition.responseId,
        name,
        definition.requestSchema,
        definition.responseSchema,
        definition.timed,
        definition.invokeAcl,
        handler,
    );

    // Eliminate redundant diagnostic messages
    server.debug = () => {};

    const ids = [definition.requestId];
    if (definition.responseSchema !== TlvNoResponse) {
        ids.push(definition.responseId);
    }
    return {
        ids,
        server,
    };
}

function createEventServer(name: string, definition: Event<any, any>, owner: ElementServerContext) {
    const observable = (owner.endpoint.events as any)[name] as ClusterEvents.EventObservable;

    const server = new EventServer(
        definition.id,
        owner.type.cluster.id,
        name,
        definition.schema,
        definition.priority,
        definition.readAcl,
    );

    observable?.on((payload, _context) => {
        const maybePromise = server.triggerEvent(payload);
        if (MaybePromise.is(maybePromise)) {
            owner.endpoint.env.runtime.add(maybePromise);
        }
    });

    server.assignToEndpoint(owner.endpointServer);
    const promise = server.bindToEventManager(owner.endpoint.env.get(OccurrenceManager));
    if (MaybePromise.is(promise)) {
        // Current code structure means this should never happen.  Refactor after removal of old API will resolve this
        throw new InternalError("Event handler binding returned a promise");
    }

    return {
        ids: [definition.id],
        server,
    };
}

function behaviorFor(owner: ElementServerContext, message: Message | undefined) {
    const context = Contextual.contextOf(message);
    if (!context) {
        throw new InternalError("Message context not installed");
    }

    const agent = context.agentFor(owner.endpoint);

    return agent.get(owner.type);
}
