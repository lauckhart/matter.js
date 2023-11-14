/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ClusterServer } from "../../cluster/server/ClusterServer.js";
import { ValidatedElements } from "../cluster/ValidatedElements.js";
import type { ClusterBehavior } from "../cluster/ClusterBehavior.js";
import type {
    ClusterServerObj,
    CommandHandler,
    SupportedEventsList
} from "../../cluster/server/ClusterServerTypes.js";
import type { Part } from "../../endpoint/Part.js";
import { InvocationContext } from "../InvocationContext.js";
import { Session } from "../../session/Session.js";
import { MatterDevice } from "../../MatterDevice.js";
import { EndpointInterface } from "../../endpoint/EndpointInterface.js";
import { ImplementationError, InternalError } from "../../common/MatterError.js";
import { isDeepEqual } from "../../util/DeepEqual.js";
import { ClusterEvents } from "../cluster/ClusterEvents.js";
import { AttributeServer, FabricScopedAttributeServer } from "../../cluster/server/AttributeServer.js";
import { SecureSession } from "../../session/SecureSession.js";
import { ServerBehaviorBacking } from "./ServerBehaviorBacking.js";
import { Attributes, Events } from "../../cluster/Cluster.js";

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
            const { get, set } = createAttributeAccessors(this, name, type.cluster.attributes[name].fabricScoped);
            handlers[`${name}AttributeGetter`] = get;
            handlers[`${name}AttributeSetter`] = set;
        }

        // Flag supported events
        const supportedEvents = {} as SupportedEventsList<any>;
        for (const name of elements.events) {
            supportedEvents[name] = true;
        }

        // Create the cluster server
        this.#clusterServer = ClusterServer(
            type.cluster,
            type.defaults,
            handlers,
            supportedEvents
        )

        // Monitor change events so we can notify the cluster server of data
        // changes
        for (const name in elements.attributes) {
            createChangeHandler(this, name);
        }

        for (const name in this.#clusterServer.attributes) {
            const attr = this.#clusterServer.attributes[name];
            if (attr) {
                attr.addValueChangeListener
            }
        }
    }

    get clusterServer() {
        return this.#clusterServer;
    }
}

function createCommandHandler(backing: ClusterServerBehaviorBacking, name: string): CommandHandler<any, any, any> {
    return (args) => {
        const context: InvocationContext = {
            fabric: args.session.getAssociatedFabric(),
            session: args.session,
            message: args.message,
        };

        const agent = backing.part.getAgent(context);
        const behavior = agent.get(backing.type);
        return (behavior as unknown as Record<string, (arg: any) => any>)[name](args.request);
    }
}

function createAttributeAccessors(backing: ClusterServerBehaviorBacking, name: string, fabric: boolean):
    {
        get: (session?: Session<MatterDevice>, endpoint?: EndpointInterface) => any,
        set: (value: any, session?: Session<MatterDevice>, endpoint?: EndpointInterface) => boolean,
    }
{
    const getScope = fabric
        ?
            (op: string, session?: Session<MatterDevice>) => {
                const fabric = session?.getAssociatedFabric();
                if (!fabric) {
                    throw new InternalError(`Attempted ${
                        op
                    } on ${
                        backing.clusterServer.name
                    } attribute ${
                        name
                    } without associated fabric`);
                }

                return backing.getFabricScope(fabric) as Record<string, any>;
            }
        :
            () => {
                return backing.endpointScope as Record<string, any>;
            };

    return {
        get() {
            return getScope("get")[name];
        },

        set(value: any) {
            const scope = getScope("set");
            if (isDeepEqual(scope[name], value)) {
                return false;
            }
            scope[name] = value;
            return true;
        }
    }
}

function createChangeHandler(backing: ClusterServerBehaviorBacking, name: string) {
    const observable =
        (backing.events as any)[`${name}$change`] as
            ClusterEvents.AttributeObservable;
    if (!observable) {
        return;
    }

    const attributeServer = backing.clusterServer.attributes[name];
    if (!attributeServer) {
        return;
    }

    if (attributeServer instanceof FabricScopedAttributeServer) {
        observable((_value, _oldValue, context) => {
            const session = context.session;
            if (session instanceof SecureSession) {
                attributeServer.updated(session);
            } else if (context.fabric) {
                attributeServer.updatedLocalForFabric(context.fabric);
            } else {
                throw new ImplementationError(`Attribute with fabric-scoped server updated outside of fabric context`);
            }
        })
    } else if (attributeServer instanceof AttributeServer) {
        observable((_value, _oldValue, context) => {
            const session = context.session;
            if (session instanceof SecureSession) {
                attributeServer.updated(session);
            } else {
                attributeServer.updatedLocal();
            }
        })
    }
}
