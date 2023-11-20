/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { CommissioningServer } from "../../CommissioningServer.js";
import { ImplementationError } from "../../common/MatterError.js";
import { Part } from "../../endpoint/Part.js";
import { LifecycleBehavior } from "../../behavior/definitions/lifecycle/LifecycleBehavior.js";
import { PartServer } from "../../endpoint/server/PartServer.js";
import { Node } from "../Node.js";
import { Runner } from "../Runner.js";
import { ServerConfiguration } from "./ServerConfiguration.js";
import { ServerOptions } from "./ServerOptions.js";
import { EndpointType } from "../../endpoint/type/EndpointType.js";
import { PartsBehavior } from "../../behavior/definitions/parts/PartsBehavior.js";

/**
 * Implementation of a Matter Node server.
 * 
 * This is this highest-level API Matter.js offers for implementing a Matter
 * Node.
 * 
 * This is perhaps more appropriately called "ServerNode" but that gets
 * confusing with the conventions of matter-node.js.
 */
export class NodeServer extends CommissioningServer implements Node {
    #configuration: ServerConfiguration;
    #root: Part;
    #runner?: Runner;

    constructor(options?: ServerOptions) {
        const configuration = new ServerConfiguration(options);
        const root = configuration.root;
        super({
            ...configuration.commissioningServerOptions,
            rootEndpoint: new PartServer(root)
        });
        configuration.owner = this;
        this.#configuration = configuration;
        this.#root = root;
    }

    /**
     * Add an endpoint.
     */
    add(endpoint: Part | EndpointType) {
        if (typeof endpoint === "function") {
            this.root.agent.get(PartsBehavior).add(endpoint);
        }
    }

    /**
     * Access the root endpoint {@link Part}.
     */
    get root() {
        return this.#root;
    }

    /**
     * Run the node in "standalone" mode.
     * 
     * This mode creates a {@link Runner} dedicated to this node.
     */
    async run() {
        if (this.#runner) {
            throw new ImplementationError("Already running");
        }
        const runner = new Runner(this.#configuration);
        runner.add(this);
        await runner.run();
    }

    /**
     * Terminate after starting with run().
     */
    abort() {
        if (!this.#runner) {
            throw new ImplementationError("Not running");
        }
        this.#runner.abort();
    }

    override async start() {
        await super.start();
        this.#root.agent.get(LifecycleBehavior).state.online = true;
    }

    override async close() {
        this.#root.agent.get(LifecycleBehavior).state.online = false;
        await super.close();
    }
}
