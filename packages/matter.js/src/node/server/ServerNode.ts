/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { CommissioningServer } from "../../CommissioningServer.js";
import { ImplementationError } from "../../common/MatterError.js";
import { EndpointNumber } from "../../datatype/EndpointNumber.js";
import { Part } from "../../endpoint/Part.js";
import { LifecycleBehavior } from "../../behavior/definitions/lifecycle/LifecycleBehavior.js";
import { PartServer } from "../../endpoint/server/PartServer.js";
import { Node } from "../Node.js";
import { NodeRunner } from "../NodeRunner.js";
import { ServerConfiguration } from "./ServerConfiguration.js";
import { ServerOptions } from "./ServerOptions.js";

/**
 * Implementation of a Matter Node server.
 * 
 * This is this highest-level API Matter.js offers for implementing a Matter
 * Node.
 */
export class ServerNode extends CommissioningServer implements Node {
    #configuration: ServerConfiguration;
    #root: Part;
    #runner?: NodeRunner;

    constructor(options?: ServerOptions) {
        const configuration = ServerConfiguration.for(options);
        const root = new Part({
            id: EndpointNumber(0),
            type: configuration.root,
        })
        super({
            ...configuration.commissioningServerOptions,
            rootEndpoint: new PartServer(root)
        });
        this.#configuration = configuration;
        this.#root = root;
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
     * This mode creates a {@link NodeRunner} dedicated to this node.
     */
    async run() {
        if (this.#runner) {
            throw new ImplementationError("Already running");
        }
        const runner = new NodeRunner(this.#configuration);
        runner.add(this);
        await runner.run();
    }

    /**
     * Terminate after starting with run().
     */
    async abort() {
        if (!this.#runner) {
            throw new ImplementationError("Not running");
        }
        this.#runner.abort();
    }

    override async start() {
        await super.start();
        this.#root.getAgent().get(LifecycleBehavior).state.online = true;
    }

    override async close() {
        this.#root.getAgent().get(LifecycleBehavior).state.online = false;
        await super.close();
    }
}
