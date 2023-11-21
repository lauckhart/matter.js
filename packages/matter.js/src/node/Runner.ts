/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { CommissioningController } from "../CommissioningController.js";
import { CommissioningServer } from "../CommissioningServer.js";
import { MatterServer } from "../MatterServer.js";
import { ImplementationError } from "../common/MatterError.js";
import { StorageManager } from "../storage/StorageManager.js";
import { Node } from "./Node.js";
import { ServerConfiguration } from "./server/ServerConfiguration.js";
import { ServerOptions } from "./server/ServerOptions.js";

enum Status {
    INACTIVE,
    ACTIVE,
    ABORTED,
}

/**
 * Runner exposes one or more {@link Node} instances to a Matter network.
 */
export class Runner {
    // We share configuration with the server
    #configuration: ServerConfiguration;

    // One or more NodeClient and NodeServer instances we will host
    #nodes = new Set<Node>();

    // We track state outside of run() so it is available to abort()
    #status = Status.INACTIVE;

    // If the server is running an abortable operation internally, this method
    // will execute the abort.  If an async operation is not abortable, we wait
    // until it completes to check the abort flag and this property is
    // undefined
    #abort?: () => void;

    // The task registered with the environment.  On Node SIGINT triggers task
    // abort
    task = {
        name: "Node execution",
        abort: () => this.abort(),
    };

    constructor(options?: ServerOptions) {
        if (options instanceof ServerConfiguration) {
            this.#configuration = options;
        } else {
            this.#configuration = new ServerConfiguration(options);
        }
    }

    /**
     * Add a node to execute.
     */
    async add(node: Node) {
        this.#nodes.add(node);
    }

    /**
     * Bring the server online.
     */
    async run() {
        if (this.#status !== Status.INACTIVE) {
            throw new ImplementationError("Server is already running");
        }
        this.#status = Status.ACTIVE;

        const environment = this.#configuration.environment;

        let storage: StorageManager | undefined;

        environment.tasks.add(this.task);

        try {
            try {
                storage = await environment.createStorage();

                // No way to abort storage initialization; best we can do is
                // respect the abort once initialization completes
                if (this.aborted) {
                    return;
                }
            } finally {
                this.#abort = undefined;
            }

            const server = new MatterServer(storage, {
                mdnsAnnounceInterface: this.#configuration.network.announceInterface,
                mdnsInterface: this.#configuration.network.discoverInterface,
                disableIpv4: this.#configuration.network.disableIpv4,
            });

            for (const node of this.#nodes) {
                if (node instanceof CommissioningController) {
                    server.addCommissioningController(node);
                } else if (node instanceof CommissioningServer) {
                    server.addCommissioningServer(node);
                } else {
                    throw new ImplementationError(
                        "Cannot run node that is neither a CommissioningController nor a CommissioningServer",
                    );
                }
            }

            await new Promise<void>((resolve, reject) => {
                try {
                    this.#abort = () => {
                        server.close().then(resolve).catch(reject);
                    };
                } catch (e) {
                    reject(e);
                }
            });
            server.start();
        } finally {
            // Can't cancel this either so just have to wait
            await storage?.close();

            environment.tasks.delete(this.task);
        }
        this.#status = Status.INACTIVE;
    }

    /**
     * Terminate the server.  You may only invoke this method once and only
     * while the server is running.
     */
    abort() {
        if (!this.running) {
            throw new ImplementationError("Server is not running");
        }
        if (this.aborted) {
            throw new ImplementationError("Server is already aborted");
        }
        this.#status = Status.ABORTED;
        this.#abort?.();
    }

    private get running() {
        return this.#status === Status.ACTIVE;
    }

    private get aborted() {
        return this.#status === Status.ABORTED;
    }
}
