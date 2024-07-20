/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import colors from "ansi-colors";
import { stderr, stdout } from "process";
import { Package } from "./package.js";

const MOVE_TO_CHAR_0 = "\x1b[G";
const CLEAR = "\x1b[K";

function packageIdentity(pkg: Package) {
    return `${colors.bold(pkg.json.name)}@${pkg.json.version}`;
}

/**
 * Intercept writes to stderr and stdout so we can ensure our updates appear on different lines from other output.
 */
const writeStatus = (() => {
    let currentStatus: undefined | string;
    let needNewlineForUpdate = false;

    function intercept(stream: NodeJS.WriteStream) {
        const actualWrite = stream.write;
        stream.write = (payload: Uint8Array | string, ...params: any[]) => {
            if (payload.length) {
                if (currentStatus) {
                    actualWrite.call(stream, "\n");
                    currentStatus = undefined;
                }

                // Require a newline for status updates any time the cursor does not end at the beginning of a line
                needNewlineForUpdate =
                    // Update ends in newline
                    payload[payload.length - 1] !== "\n" &&
                    // Update ends in carriage return
                    payload[payload.length - 1] !== "\r" &&
                    // Payload ends in MOVE_TO_CHAR_0
                    (payload[payload.length - 3] !== "\x1b" ||
                        payload[payload.length - 2] !== "[" ||
                        payload[payload.length - 1] !== "G");
            }
            return actualWrite.call(stream, payload, ...params);
        };
    }

    intercept(stdout);
    intercept(stderr);

    return function writeStatus(text: string) {
        if (text === currentStatus) {
            return;
        }

        if (currentStatus) {
            currentStatus = undefined;
            stdout.write(CLEAR);
        } else if (needNewlineForUpdate) {
            stdout.write("\n");
        }

        stdout.write(text);

        currentStatus = text;
    };
})();

export class Progress {
    status = Progress.Status.Startup;
    #start?: number;

    constructor() {}

    skip(why: string, pkg: Package) {
        stdout.write(colors.dim(`Skip ${packageIdentity(pkg)}: ${why}\n\n`));
    }

    startup(what: string, pkg?: Package) {
        this.status = Progress.Status.Startup;
        if (pkg === undefined) {
            writeStatus(what);
        } else {
            stdout.write(`${what} ${packageIdentity(pkg)}\n`);
        }
    }

    update(text: string, extra?: string) {
        this.status = Progress.Status.Ongoing;
        let duration;
        if (this.#start === undefined) {
            this.#start = new Date().getTime();
            duration = "";
        } else {
            duration = this.#duration;
        }
        extra = extra === undefined ? "" : ` ${extra}`;
        writeStatus(`  ${colors.yellow("⧗")} ${text} ${duration}${extra}${MOVE_TO_CHAR_0}\r`);
    }

    success(text: string) {
        this.status = Progress.Status.Success;
        writeStatus(`  ${colors.green("✔")} ${text} ${this.#duration}\n`);
        this.#start = undefined;
    }

    failure(text: string) {
        this.status = Progress.Status.Failure;
        writeStatus(`  ${colors.redBright("✗")} ${text} ${this.#duration}\n`);
        this.#start = undefined;
    }

    info(label: string, value?: any) {
        if (value) {
            label = `${colors.dim(label)} ${value}`;
        }
        writeStatus(`  ${colors.dim("‣")} ${label}\n`);
    }

    shutdown() {}

    async run(what: string, fn: () => Promise<void>) {
        this.update(what);
        await fn();
        this.success(what);
    }

    get #duration() {
        let ms = this.#start ? new Date().getTime() - this.#start : 0;
        if (ms < 1000) {
            ms = Math.round(ms / 10) / 100;
        } else if (ms < 10000) {
            ms = Math.round(ms / 100) / 10;
        } else {
            ms = Math.trunc(ms / 1000);
        }
        return colors.dim.yellow(`(${ms}s)`);
    }
}

export namespace Progress {
    export enum Status {
        Startup = "startup",
        Ongoing = "ongoing",
        Success = "success",
        Failure = "failure",
    }
}
