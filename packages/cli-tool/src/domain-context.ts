/**
 * @license
 * Copyright 2022-2026 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Environment } from "@matter/general";
import { Printer } from "@matter/tools/ansi-text";
import colors from "ansi-colors";
import { stdout } from "node:process";

/**
 * The application environment shared by {@link Domain} and the help system.
 */
export interface DomainContext {
    description: string;
    env: Environment;
    out: Printer;
    err: Printer;
    terminalWidth: number;
    colorize: boolean;

    /**
     * When true, register a keep-alive worker with {@link RuntimeService} to prevent premature shutdown while
     * ephemeral connections come and go.  Defaults to true.
     */
    keepAlive?: boolean;
}

const WRAP = { wrapPrefix: "  ", preserveSpace: false } as const;

/**
 * Create a {@link DomainContext} wired to stdout with terminal detection.
 */
export function DomainContext(options?: DomainContext.Options): DomainContext {
    const colorize = !!stdout.isTTY;
    colors.enabled = colorize;

    return {
        description: options?.description ?? "matter.js",
        env: options?.env ?? Environment.default,

        out: Printer(text => stdout.write(text), {
            terminalWidth: stdout.columns,
            styleEnabled: colorize,
            wrap: WRAP,
        }),

        err: Printer(
            text => {
                if (text.indexOf("\x1b") === -1) {
                    text = colors.red(text);
                }
                stdout.write(text);
            },
            {
                terminalWidth: stdout.columns,
                styleEnabled: colorize,
                wrap: WRAP,
            },
        ),

        get terminalWidth() {
            return stdout.columns;
        },

        colorize,
        keepAlive: options?.keepAlive ?? false,
    };
}

export namespace DomainContext {
    export interface Options {
        description?: string;
        env?: Environment;
        keepAlive?: boolean;
    }
}
