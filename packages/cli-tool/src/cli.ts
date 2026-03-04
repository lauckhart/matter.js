/**
 * @license
 * Copyright 2022-2026 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Domain, DomainContext } from "#domain.js";
import { CommandInput } from "#parser.js";
import { repl } from "#repl.js";
import { Environment, LogFormat, MatterError } from "@matter/general";
import "@matter/nodejs";
import colors from "ansi-colors";
import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { stdout } from "node:process";
import { fileURLToPath } from "node:url";
import "./commands/index.js";
import "./providers/index.js";

export async function main(argv: string[]) {
    colors.enabled = stdout.isTTY;

    let args = argv.slice(2);
    if (!args.length) {
        await repl();
        return;
    }

    for (const arg of args) {
        if (arg.startsWith("-")) {
            if (arg === "--help") {
                args = ["help"];
            } else if (arg === "--version" || arg === "-v") {
                stdout.write(`matter.js ${readVersion()}\n`);
                return;
            } else {
                throw new MatterError(`Unknown command line argument ${arg}`);
            }
        } else {
            break;
        }
    }

    const command: CommandInput = {
        kind: "command",
        name: args[0],
        args: args.slice(1).map(arg => {
            let js;
            if (arg.startsWith("(")) {
                js = arg;
            } else {
                js = JSON.stringify(arg);
            }
            return {
                line: 0,
                column: 0,
                js,
            };
        }),
    };

    const cx: DomainContext = {
        description: "matter.js",
        env: Environment.default,

        out(...text) {
            stdout.write(text.join(""));
        },

        err(...text) {
            let str = text.join("");
            if (str.indexOf("\x1b") === -1) {
                str = colors.red(str);
            }
            stdout.write(str);
        },

        get terminalWidth() {
            return process.stdout.columns;
        },

        colorize: true,
    };

    const domain = await Domain(cx);
    try {
        const result = await domain.execute(command);
        if (result !== undefined) {
            domain.out(domain.inspect(result), "\n");
        }
    } catch (e) {
        domain.err(LogFormat.formats.ansi(e), "\n");
        process.exitCode = 1;
    } finally {
        // Force clean exit — one-shot commands shouldn't leave lingering event loops
        process.exit(process.exitCode ?? 0);
    }
}

function readVersion(): string {
    let path = dirname(fileURLToPath(import.meta.url));
    while (dirname(path) !== path) {
        try {
            const pkg = readFileSync(join(path, "package.json"), "utf-8");
            const parsed = JSON.parse(pkg);
            if (typeof parsed.version === "string") {
                return parsed.version;
            }
        } catch (e) {
            if ((e as NodeJS.ErrnoException).code !== "ENOENT") {
                throw e;
            }
        }
        path = dirname(path);
    }
    return "unknown";
}
