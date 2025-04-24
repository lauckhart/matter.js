/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { createSocket, Socket } from "node:dgram";
import { BackchannelCommand } from "../device/backchannel.js";
import { Container } from "../docker/container.js";
import { Terminal } from "../docker/terminal.js";
import { CommandPipe } from "./command-pipe.js";

const FIFO_HOST = "localhost";
const FIFO_PORT = 7027;
const FIFO_PATH = "/command-pipe.fifo";

/**
 * A command pipe that reads commands from a Docker container.
 */
export class ContainerCommandPipe extends CommandPipe {
    #container: Container;
    #deactivate?: () => void;
    #stopped?: Promise<void>;

    constructor(container: Container, subject: BackchannelCommand.Subject) {
        super(subject, "/command-pipe.fifo");
        this.#container = container;
    }

    override async initialize() {
        // We create a single FIFO for the container and symlink to the hard-coded name expected by CHIP
        await this.#container.createPipe(FIFO_PATH);

        this.#stopped = this.#processCommands();
    }

    async installForApp(name: string) {
        await this.#container.exec(["ln", "-sf", this.filename, ContainerCommandPipe.filenameFor(name)]);
    }

    override async close() {
        this.#deactivate?.();
        this.#deactivate = undefined;

        await this.#stopped;
        this.#stopped = undefined;
    }

    async #processCommands() {
        let proxy: Terminal<string> | undefined;
        let socket: Socket | undefined;
        try {
            socket = createSocket("udp4");
            socket.on("message", msg => this.onData(msg.toString("utf-8")));
            socket.bind(FIFO_PORT, FIFO_HOST);
            proxy = await this.#container.exec(
                ["bash", "-c", `while true; do nc -u -q0 localhost ${FIFO_PORT} < ${FIFO_PATH}; done`],
                Terminal.StdoutLine,
            );

            const deactivated = new Promise<void>(resolve => {
                this.#deactivate = resolve;
            });

            await deactivated;
        } finally {
            if (proxy) {
                try {
                    await proxy.close();
                } catch (e) {
                    console.warn(`Error closing command proxy for ${this.filename}:`, e);
                }
            }

            if (socket) {
                try {
                    socket.close();
                } catch (e) {
                    console.warn(`Error closing command socket for ${this.filename}:`, e);
                }
            }

            try {
                await this.#container.delete(this.filename, { force: true });
            } catch (e) {
                console.warn(`Error deleting FIFO ${this.filename}:`, e);
            }
        }
    }
}
