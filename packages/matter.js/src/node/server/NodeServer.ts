/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Behavior } from "../../behavior/Behavior.js";
import { BehaviorBacking } from "../../behavior/BehaviorBacking.js";
import { CommissioningBehavior } from "../../behavior/definitions/commissioning/CommissioningBehavior.js";
import { PartsBehavior } from "../../behavior/definitions/parts/PartsBehavior.js";
import { ImplementationError, InternalError, NotInitializedError } from "../../common/MatterError.js";
import { EndpointNumber } from "../../datatype/EndpointNumber.js";
import { FabricIndex } from "../../datatype/FabricIndex.js";
import { Part } from "../../endpoint/Part.js";
import { RootEndpoint } from "../../endpoint/definitions/system/RootEndpoint.js";
import { IndexBehavior } from "../../behavior/definitions/index/IndexBehavior.js";
import { PartServer } from "../../endpoint/server/PartServer.js";
import { PersistenceBehavior } from "../../endpoint/server/PersistenceBehavior.js";
import { EndpointType } from "../../endpoint/type/EndpointType.js";
import { Logger } from "../../log/Logger.js";
import { StorageContext } from "../../storage/StorageContext.js";
import { Host } from "../Host.js";
import { Node } from "../Node.js";
import { CommissioningOptions } from "../options/CommissioningOptions.js";
import { ServerOptions } from "../options/ServerOptions.js";
import { BaseNodeServer } from "./BaseNodeServer.js";
import { NodeStore } from "./NodeStore.js";
import { TransactionalInteractionServer } from "./TransactionalInteractionServer.js";
import { AsyncConstruction, asyncNew } from "../../util/AsyncConstructable.js";
import { Lifecycle } from "../../endpoint/part/Lifecycle.js";

const logger = Logger.get("NodeServer");

/**
 * Implementation of a Matter Node server.
 *
 * This is this highest-level API Matter.js offers for implementing a Matter
 * Node.
 *
 * This is perhaps more appropriately called "ServerNode" but that gets
 * confusing with the conventions of matter-node.js.
 */
export class NodeServer extends BaseNodeServer implements Node {
    #configuration: ServerOptions.Configuration;
    #root?: Part<RootEndpoint>;
    #rootServer?: PartServer;
    #nextEndpointId: EndpointNumber;
    #host?: Host;
    #store?: NodeStore;
    #construction: AsyncConstruction<NodeServer>;

    get owner() {
        return undefined;
    }

    get root() {
        if (!this.#root) {
            throw new NotInitializedError("Root part is unavailable because initialization is incomplete; await the NodeServer to avoid this error");
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

    /**
     * Create a new NodeServer.
     * 
     * @param options server configuration options
     */
    constructor(options?: ServerOptions.Configuration) {
        super();

        this.#configuration = ServerOptions.configurationFor(options);

        const root = this.#root = Part.partFor(this.#configuration.root);

        if (root.type.deviceType !== RootEndpoint.deviceType) {
            throw new ImplementationError(`Root node device type must be a ${RootEndpoint.deviceType}`);
        }
    
        if (root.number === undefined) {
            root.number = EndpointNumber(0);
        } else if (root.number !== 0) {
            throw new ImplementationError(`Root node ID must be 0`);
        }
    
        root.behaviors.require(PartsBehavior);
        root.behaviors.require(CommissioningBehavior);
        root.behaviors.require(IndexBehavior);
        this.#nextEndpointId = this.#configuration.nextEndpointNumber;

        this.#construction = AsyncConstruction(
            this,
            async () => {
                this.#store = await NodeStore.create(this.#configuration);
                root.lifecycle.change(Lifecycle.Change.Installed);
            });
    }

    static async create(options?: ServerOptions.Configuration) {
        return asyncNew(NodeServer, options);
    }

    /**
     * Bring the device online.
     */
    override async start() {
        await this.construction;

        const agent = this.root.agent;

        if (!this.commissioned) {
            const commissioning = await agent.waitFor(CommissioningBehavior);
            commissioning.initiateCommissioning();
        }

        await super.start();

        logger.info(`Node "${this.description}" is online`);
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
        const runner = new Host(this.#configuration);
        runner.add(this);
        await runner.run();
    }

    /**
     * Add an endpoint that implements a {@link EndpointType}.
     */
    add<T extends EndpointType>(type: T, options?: Part.Options<T>): void;

    /**
     * Add an endpoint implemented by a {@link Part}.
     */
    add(part: Part): void;

    add(endpoint: Part.Definition) {
        this.root.parts.add(endpoint);
    }

    /**
     * Terminate after starting with run().
     */
    abort() {
        if (!this.#host) {
            throw new ImplementationError("Not running");
        }
        this.#host.abort();
    }

    /**
     * An index of all parts.
     */
    get index() {
        return this.root.agent.get(IndexBehavior);
    }

    /**
     * Retrieve a part by number.
     */
    partForNumber(number: number) {
       return this.root.agent.get(IndexBehavior).forNumber(number);
    }

    /**
     * Support for JS "async using".  Cleans up resources when the server is
     * no longer needed.
     */
    async [Symbol.asyncDispose]() {
        await this.#rootServer?.[Symbol.asyncDispose]();
        await this.#store?.[Symbol.asyncDispose]();
    }

    /**
     * Initialize part state.
     */
    initializePart(part: Part) {
        if (!part.lifecycle.hasId) {
            part.id = this.#identifyPart(part);
        }

        const store = this.#initializedStore.storeFor(part);

        part.agent.require(PersistenceBehavior);
        part.agent.get(PersistenceBehavior).configureStorage(
            store,
            this.#initializedStore.eventHandler,
        )

        if (!part.lifecycle.hasNumber) {
            part.number = EndpointNumber(store.number ?? this.#initializedStore.allocateNumber());
        }
    }

    /**
     * If a {@link Part} does not yet have a {@link PartServer}, create one
     * now, then create a {@link BehaviorBacking} for a specific
     * {@link Behavior}.
     * 
     * This is where we adapt parts and behaviors for a server role.
     */
    initializeBehavior(part: Part, behavior: Behavior.Type): BehaviorBacking {
        return PartServer.forPart(part).createBacking(behavior);
    }

    fallbackIdFor(part: Part) {
        if (part === this.#root) {
            return "root";
        } else if (part.owner instanceof Part) {
            let index = 0;
            for (const part2 of part.owner.parts) {
                if (part2 === part) {
                    const id = `${part.owner.id}#${index}`;
                    logger.warn(`Using fallback ID ${id} for unidentified part; set part ID to remove this warning`);
                    return id;
                }
                index++;
            }
        }
        throw new ImplementationError(`${part.description}: Cannot determine ID`);
    }

    /**
     * Textual description of the node used in diagnostic messages.
     */
    get description() {
        return this.commissioningConfig.productDescription.name;
    }

    protected override get commissioningConfig() {
        return this.root.agent.get(CommissioningBehavior).state as CommissioningOptions.Configuration;
    }

    protected override get networkConfig() {
        return this.#configuration.network;
    }

    protected override get rootEndpoint() {
        if (!this.#rootServer) {
            this.#rootServer = PartServer.forPart(this.root);
        }
        return this.#rootServer;
    }

    protected override get nextEndpointId() {
        return this.#nextEndpointId;
    }

    protected override set nextEndpointId(id: EndpointNumber) {
        this.#nextEndpointId = id;
    }

    protected override get advertiseOnStartup() {
        return !!this.root.agent.get(CommissioningBehavior).state.automaticAnnouncement;
    }

    protected override emitCommissioningChanged(_fabric: FabricIndex): void {}

    protected override emitActiveSessionsChanged(_fabric: FabricIndex): void {}

    protected override createInteractionServer() {
        return new TransactionalInteractionServer(
            this.root,
            this.#initializedStore,
            this.#configuration.subscription
        );
    }

    protected override get sessionStorage(): StorageContext {
        return this.#initializedStore.sessionStorage;
    }

    protected override get fabricStorage(): StorageContext {
        return this.#initializedStore.fabricStorage;
    }

    protected override initializeEndpoints(): void {
        throw new Error("Method not implemented.");
    }

    protected override clearStorage(): Promise<void> {
        throw new Error("Method not implemented.");
    }

    get #initializedStore() {
        if (this.#store === undefined) {
            throw new ImplementationError(`${this.description}: Storage accessed prior to initialization`);
        }
        return this.#store;
    }

    /**
     * Select an ID for a part automatically based on available metadata.
     */
    #identifyPart(part: Part) {
        const basicInfo = part.behaviors.supported.basicInformation ?? part.behaviors.supported.bridgedDeviceBasicInformation;
        if (basicInfo) {
            const defaults = {
                ...new basicInfo.State,
                ...part.behaviors.defaultsFor(basicInfo),
            }

            let id = (defaults as Record<string, string>).uniqueId;
            if (id) {
                return id;
            }

            id = (defaults as Record<string, string>).serialNumber;
            if (id) {
                return id;
            }
        }

        if (part === this.#root) {
            return "root";
        }

        if (!(part.owner instanceof Part)) {
            throw new InternalError("Cannot determine ID for part with unknown parent type");
        }
        if (part.owner.id === undefined) {
            throw new InternalError("Cannot determine ID for part because parent has no ID");
        }

        const index = part.owner.parts.indexOf(part);
        if (index === -1) {
            throw new InternalError("Cannot determine ID for part because parent does not list as child");
        }

        // Should we throw here instead?
        const id = `${part.owner.id}#${index}`;
        logger.warn(`Using fallback ID of ${id} for anonymous part based on index within parent; assign ID to remove this warning`);

        return id;
    }
}
