/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { PipeCommand } from "./pipe-command.js";

const utf8 = new TextDecoder();

/**
 * Implements back-channel communication between CHIP and the local subject.
 *
 * Must be extended to implement actual communication.
 */
export abstract class CommandPipe {
    #filename: string;
    #listener?: (command: PipeCommand) => void | Promise<void>;

    constructor(appName: string) {
        this.#filename = `/tmp/${appName}_fifo_${process.pid}`;
    }

    get filename() {
        return this.#filename;
    }

    async activate(listener: (command: PipeCommand) => void | Promise<void>): Promise<void> {
        this.#listener = listener;
    }

    async deactivate(): Promise<void> {
        this.#listener = undefined;
    }

    protected onData(dataBuf: Uint8Array) {
        if (!this.#listener) {
            console.warn("Ignoring pipe command without active listener");
            return;
        }

        let data: Record<string, unknown>;
        try {
            data = JSON.parse(utf8.decode(dataBuf));
        } catch (error) {
            console.error("Error parsing pipe command:", error);
            return;
        }

        if (typeof data !== "object" || data === null) {
            console.error("Pipe command is not an object:", data);
            return;
        }

        if (typeof data.Name !== "string") {
            console.error("Pipe command does not have a name:", data);
            return;
        }

        try {
            const result = this.#listener(data as PipeCommand);
            if (result) {
                result.catch(listenerError);
            }
        } catch (error) {
            listenerError(error);
        }

        function listenerError(error: unknown) {
            console.error("Unhandled error in pipe command listener:", error);
        }
    }
}
