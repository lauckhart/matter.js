/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { CommissioningBehavior } from "../../behavior/definitions/commissioning/CommissioningBehavior.js";
import { ImplementationError, InternalError } from "../../common/MatterError.js";
import { EndpointNumber } from "../../datatype/EndpointNumber.js";
import { Part } from "../../endpoint/Part.js";
import { RootEndpoint } from "../../endpoint/definitions/system/RootEndpoint.js";
import { IndexBehavior } from "../../behavior/definitions/index/IndexBehavior.js";
import { PartServer } from "../../endpoint/PartServer.js";
import { Logger } from "../../log/Logger.js";
import { Host } from "../Host.js";
import { Node } from "../Node.js";
import { ServerOptions } from "../options/ServerOptions.js";
import { ServerStore } from "./storage/ServerStore.js";
import { AsyncConstruction, asyncNew } from "../../util/AsyncConstruction.js";
import { PartLifecycle } from "../../endpoint/part/PartLifecycle.js";
import { PartInitializer } from "../../endpoint/part/PartInitializer.js";
import { ServerBehaviorInitializer } from "./ServerBehaviorInitializer.js";
import { PartStoreService } from "./storage/PartStoreService.js";
import { EventHandler } from "../../protocol/interaction/EventHandler.js";
import { IdentityService } from "./IdentityService.js";
import { Diagnostic } from "../../log/Diagnostic.js";
import { LifecycleStatus, UninitializedDependencyError } from "../../common/Lifecycle.js";
import { ServerResetService } from "./ServerResetService.js";
import { RootServer } from "../../behavior/definitions/root/RootServer.js";
import { VariableService } from "../../environment/VariableService.js";

const logger = Logger.get("NodeServer");

/**
 * Implementation of a Matter Node server.
 *
 * This is this highest-level API Matter.js offers for implementing a Matter Node.
 *
 * This is perhaps more appropriately called "ServerNode" but that gets confusing with the conventions of
 * matter-node.js.
 */
export class NodeServer implements Node {
    #configuration: ServerOptions.Configuration;
    #root: Part<RootEndpoint>;
    #host?: Host;
    #construction: AsyncConstruction<NodeServer>;
    #runtime?: RootServer;
    #store?: ServerStore;
    #partInitializer?: PartInitializer;
    #identityService?: IdentityService;
    #resetService?: ServerResetService;

    get id() {
        return this.#root.id;
    }

    get owner() {
        return undefined;
    }

    get root() {
        return this.rootPart.agent;
    }

    get rootPart() {
        if (!this.#root) {
            throw new UninitializedDependencyError(
                this.constructor.name,
                "is unavailable because initialization is incomplete; await the NodeServer to avoid this error"
            );
        }
        return this.#root;
    }

    /**
     * The configuration of the server.
     * 
     * This is derived from {@link ServerOptions} during initialization.
     */
    get configuration() {
        return this.#configuration;
    }

    get construction() {
        return this.#construction;
    }

    #allocateFallbackId() {
        const vars = this.#configuration.environment.get(VariableService);
        const number = vars.increment("node.nextFallbackId");
        return `node${number}`;
    }

    /**
     * Create a new NodeServer.
     * 
     * @param options server configuration options
     */
    constructor(options?: ServerOptions.Configuration) {
        this.#configuration = ServerOptions.configurationFor(options);

        const root = this.#root = Part.from(this.#configuration.root);

        if (!root.lifecycle.hasId) {
            root.id = this.#allocateFallbackId();
        }

        if (root.type.deviceType !== RootEndpoint.deviceType) {
            throw new ImplementationError(`Root node device type must be a ${RootEndpoint.deviceType}`);
        }

        root.owner = this;
    
        if (!root.lifecycle.hasNumber) {
            root.number = EndpointNumber(0);
        } else if (root.number !== 0) {
            throw new ImplementationError(`Root node ID must be 0`);
        }

        if (!root.lifecycle.hasId) {
            root.id = this.#allocateFallbackId();
        }
    
        root.behaviors.require(CommissioningBehavior);
        root.behaviors.require(IndexBehavior);

        this.#construction = AsyncConstruction(
            this,
            async () => {
                this.#store = await ServerStore.create(
                    this.#configuration.environment,
                    root.id,
                    this.#configuration.nextEndpointNumber,
                );
                
                root.lifecycle.change(PartLifecycle.Change.Installed);

                await this.#root.construction;
            }
        );
    }

    /**
     * Create a new NodeServer and wait for initialization to complete.
     */
    static async create(options?: ServerOptions.Configuration) {
        return asyncNew(NodeServer, options);
    }

    /**
     * Bring the server online.
     * 
     * TODO - should acquire some type of OS- or FS-level lock while running
     */
    async start() {
        await this.construction;
        await this.serviceFor(RootServer).start();
    }

    /**
     * Take the server offline.
     */
    async stop() {
        await this.serviceFor(RootServer).stop();
    }

    /**
     * Run the node in "standalone" mode.
     *
     * This mode creates a {@link Host} dedicated to this node.
     */
    async run() {
        if (this.#host) {
            throw new ImplementationError("Already running");
        }
        const host = new Host(this.#configuration);
        host.add(this);

        try {
            await host.run();
        } catch (e) {
            logger.error("Node server terminated due to error:", e);
        }
    }

    /**
     * Add a {@link Part} to the {@link root}.
     */
    add(endpoint: Part.Definition) {
        this.rootPart.parts.add(endpoint);
    }

    /**
     * Retrieve a part by number.
     */
    partForNumber(number: number) {
       return this.root.get(IndexBehavior).forNumber(number);
    }

    /**
     * Support for JS "async using".  Cleans up resources when the server is no longer needed.
     */
    async [Symbol.asyncDispose]() {
        await this.#runtime?.[Symbol.asyncDispose]();
        this.#runtime = undefined;

        await this.#root[Symbol.asyncDispose]();
        
        await this.#store?.[Symbol.asyncDispose]();
        this.#store = undefined;

        this.construction.setStatus(LifecycleStatus.Destroyed);
    }

    fallbackIdFor(part: Part) {
        if (part === this.#root) {
            throw new InternalError("Root has no ID");
        } else if (part.owner instanceof Part) {
            let index = 0;
            for (const part2 of part.owner.parts) {
                if (part2 === part) {
                    const id = `part${index}`;
                    const desc = part.owner instanceof Part ? `${part.owner}.${id}` : id;
                    logger.warn(`Using fallback for ${desc}; set part ID to remove this warning`);
                    return id;
                }
                index++;
            }
        }
        throw new ImplementationError(`Cannot determine ID for ${part}`);
    }

    serviceFor<T>(type: abstract new (...args: any[]) => T): T {
        switch (type as unknown) {
            case RootServer:
                if (!this.#runtime) {
                    this.#runtime = new RootServer(this);
                }
                return this.#runtime as T;

            case PartInitializer:
                if (!this.#partInitializer) {
                    this.#partInitializer = new ServerBehaviorInitializer(this);
                }
                return this.#partInitializer as T;

            case PartStoreService:
                return this.#initializedStore.partStores as T;

            case EventHandler:
                return this.#initializedStore.eventHandler as T;

            case IdentityService:
                if (!this.#identityService) {
                    this.#identityService = new IdentityService(this.#root, this.toString());
                }
                return this.#identityService as T;

            case ServerResetService:
                if (this.#store && this.#host) {
                    if (!this.#resetService) {
                        this.#resetService = new ServerResetService(this, this.#store, this.#host);
                    }
                    return this.#resetService as T;
                }
        }

        throw new ImplementationError(`Unsupported service ${type.name}`);
    }

    set host(host: Host) {
        if (this.#host) {
            throw new ImplementationError(`Node ${this} already installed in host`);
        }
        this.#host = host;
    }

    async getMdnsBroadcaster() {
        if (this.#host === undefined) {
            throw new ImplementationError("Cannot start NodeServer without installed host");
        }
        return this.#host.mdnsBroadcaster;
    }

    async getMdnsScanner() {
        if (this.#host === undefined) {
            throw new ImplementationError("Cannot start NodeServer without installed host");
        }
        return this.#host.mdnsScanner;
    }

    /**
     * Textual description of the node used in diagnostic messages.
     */
    toString() {
        return `${this.constructor.name}#${this.id}`
    }

    get [Diagnostic.value]() {
        return [
            this.toString(),
            this.#runtime,
            Diagnostic.list([
                PartServer.forPart(this.#root)[Diagnostic.value],
            ])
        ]
    }

    get #initializedStore() {
        if (this.#store === undefined) {
            throw new ImplementationError(`Storage for ${this} accessed prior to initialization`);
        }
        return this.#store;
    }
}
