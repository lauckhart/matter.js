/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { MatterServer } from "../MatterServer.js";
import { ImplementationError } from "../common/MatterError.js";
import { ServerOptions } from "./server/ServerOptions.js";
import { Storage } from "../storage/Storage.js";
import { StorageManager } from "../storage/StorageManager.js";
import { ServerConfiguration } from "./server/ServerConfiguration.js";
import { Node } from "./Node.js";
import { CommissioningController } from "../CommissioningController.js";
import { CommissioningServer } from "../CommissioningServer.js";

/**
 * Runner exposes one or more {@link Node} instances to a Matter network.
 */
export class Runner {
    #configuration: ServerConfiguration;
    #nodes = new Set<Node>;
    #abort?: () => void;
    #aborted = false;

    constructor(options?: ServerOptions) {
        this.#configuration = ServerConfiguration.for(options);
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
        if (this.#abort) {
            throw new ImplementationError("Server is already running");
        }
        this.#aborted = false;

        let storage = this.#configuration.storageManager;
        let manageStorage = false;
        try {
            if (!storage) {
                storage = new StorageManager(
                    Storage.create(this.#configuration.commissioning.productDescription.name, false)
                );
                
                this.#abort = () => {
                    storage?.close();
                    storage = undefined;
                }
                
                await storage.initialize();

                if (this.#aborted) {
                    return;
                }

                manageStorage = true;
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
                        "Cannot run node that is neither a CommissioningController nor a CommissioningServer"
                    );
                }
            }

            await new Promise<void>((resolve, reject) => {
                try {
                    this.#abort = () => {
                        this.#aborted = true;
                        server.close().then(resolve).catch(reject);
                    }
                } catch (e) {
                    reject(e);
                }
            })
            server.start();
        } finally {
            if (manageStorage) {
                await storage?.close();
            }
        }
    }

    /**
     * Terminate the server.  You may only invoke this method once and only
     * while the server is running.
     */
    abort() {
        if (!this.#abort) {
            throw new ImplementationError("Server is not running");
        }
        if (this.#aborted) {
            throw new ImplementationError("Already aborted");
        }
        this.#aborted = true;
        this.#abort();
    }
}
