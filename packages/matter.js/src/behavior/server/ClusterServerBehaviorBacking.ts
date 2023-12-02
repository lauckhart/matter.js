/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { MatterDevice } from "../../MatterDevice.js";
import { Attributes, Events } from "../../cluster/Cluster.js";
import { AttributeServer, FabricScopedAttributeServer } from "../../cluster/server/AttributeServer.js";
import { ClusterServer } from "../../cluster/server/ClusterServer.js";
import type { ClusterServerObj, CommandHandler, SupportedEventsList } from "../../cluster/server/ClusterServerTypes.js";
import { ImplementationError } from "../../common/MatterError.js";
import { EndpointInterface } from "../../endpoint/EndpointInterface.js";
import type { Part } from "../../endpoint/Part.js";
import { Transaction } from "../state/transaction/Transaction.js";
import { Logger } from "../../log/Logger.js";
import { StatusResponseError } from "../../protocol/interaction/InteractionMessenger.js";
import { SecureSession, } from "../../session/SecureSession.js";
import { Session } from "../../session/Session.js";
import { Behavior } from "../Behavior.js";
import { InvocationContext } from "../InvocationContext.js";
import type { ClusterBehavior } from "../cluster/ClusterBehavior.js";
import { ClusterEvents } from "../cluster/ClusterEvents.js";
import { ValidatedElements } from "../cluster/ValidatedElements.js";
import { State } from "../state/State.js";
import { ServerBehaviorBacking } from "./ServerBehaviorBacking.js";

const logger = Logger.get("ClusterServer");

/**
 * Backing for cluster behaviors on servers.
 */
export class ClusterServerBehaviorBacking extends ServerBehaviorBacking {
    #clusterServer: ClusterServerObj<Attributes, Events>;

    constructor(part: Part, type: ClusterBehavior.Type) {
        super(part, type);

        const elements = new ValidatedElements(type);
        elements.report();

        // Install command handlers that map to implementation methods
        const handlers = {} as Record<string, any>;
        for (const name of elements.commands) {
            handlers[name] = createCommandHandler(this, name);
        }

        // Install attribute accessors
        for (const name of elements.attributes) {
            const { get, set } = createAttributeAccessors(
                this,
                name,
            );
            handlers[`${name}AttributeGetter`] = get;
            handlers[`${name}AttributeSetter`] = set;
        }

        // Flag supported events
        const supportedEvents = {} as SupportedEventsList<any>;
        for (const name of elements.events) {
            supportedEvents[name] = true;
        }

        // Create the cluster server
        this.#clusterServer = ClusterServer(type.cluster, type.defaults, handlers, supportedEvents);

        // Monitor change events so we can notify the cluster server of data
        // changes
        for (const name in elements.attributes) {
            createChangeHandler(this, name);
        }
    }

    get clusterServer() {
        return this.#clusterServer;
    }
}

function transact<T>(
    backing: ClusterServerBehaviorBacking,
    session: Session<MatterDevice> | undefined,
    options: InvocationContext,
    fn: (behavior: Behavior) => T
): T {
    const fabric = session?.isSecure() ? session.getAssociatedFabric() : undefined;
    const transaction = new Transaction(backing.part.transactionCoordinator);

    const context: InvocationContext = {
        ...options,
        fabric,
        session,
        transaction,
    }

    const agent = backing.part.getAgent(context);

    let aborted = false;
    try {
        return fn(agent.get(backing.type));
    } catch (e) {
        aborted = true;

        if (transaction.status !== Transaction.Status.Finished) {
            try {
                transaction.rollback();
            } catch (e) {
                logger.error(`Error rolling back transaction for ${backing.part.description}:`, e);
            }
        }

        throw e;
    } finally {
        if (!aborted) {
            try {
                transaction.commit();
            } catch (e) {
                if (e instanceof StatusResponseError) {
                    throw e;
                }

                const error = e instanceof Error ? e : new Error(`${e}`);
                error.message =
                    `Error committing transaction for ${
                        backing.part.description
                    }: ${
                        error.message
                    }`;

                throw error;
            }
        }
    }
}

function createCommandHandler(
    backing: ClusterServerBehaviorBacking,
    name: string
): CommandHandler<any, any, any> {
    return ({ request, session, message }) => {
        transact(
            backing,
            session,
            { message },
            behavior => {
                return (behavior as unknown as Record<string, (arg: any) => any>)[name](request);
            }
        )
    };
}

function createAttributeAccessors(
    backing: ClusterServerBehaviorBacking,
    name: string
): {
    get: (session?: Session<MatterDevice>, endpoint?: EndpointInterface, isFabricFiltered?: boolean) => any;
    set: (value: any, session?: Session<MatterDevice>, endpoint?: EndpointInterface) => boolean;
} {
    return {
        get(session, _endpoint, isFabricFiltered) {
            return transact(
                backing,
                session,
                { fabricFiltered: isFabricFiltered },
                behavior => {
                    const state = behavior.state as State.Internal;

                    return state[State.GET](name);
                }
            );
        },

        set(value, session) {
            return transact(
                backing,
                session,
                {},
                behavior => {
                    const state = behavior.state as State.Internal;

                    state[State.SET](name, value);

                    // If the transaction is a write transaction, report that
                    // the attribute is updated
                    return behavior.context.transaction?.status === Transaction.Status.Exclusive;
                }
            )
        }
    }
}

function createChangeHandler(backing: ClusterServerBehaviorBacking, name: string) {
    const observable = (backing.events as any)[`${name}$change`] as ClusterEvents.AttributeObservable;
    if (!observable) {
        return;
    }

    const attributeServer = backing.clusterServer.attributes[name];
    if (!attributeServer) {
        return;
    }

    if (attributeServer instanceof FabricScopedAttributeServer) {
        observable.on((_value, _oldValue, context) => {
            const session = context.session;
            if (session instanceof SecureSession) {
                attributeServer.updated(session);
            } else if (context.fabric) {
                attributeServer.updatedLocalForFabric(context.fabric);
            } else {
                throw new ImplementationError(`Attribute with fabric-scoped server updated outside of fabric context`);
            }
        });
    } else if (attributeServer instanceof AttributeServer) {
        observable.on((_value, _oldValue, context) => {
            const session = context.session;
            if (session instanceof SecureSession) {
                attributeServer.updated(session);
            } else {
                attributeServer.updatedLocal();
            }
        });
    }
}
