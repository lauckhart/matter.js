/**
 * @license
 * Copyright 2022-2026 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { clusterCommandFor } from "#cluster-command.js";
import { Domain, DomainContext } from "#domain.js";
import { bin } from "#globals.js";
import { CommandInput } from "#parser.js";
import { Environment, FormattedText, LogFormat, MatterError } from "@matter/general";
import "@matter/nodejs";
import "@matter/nodejs-ws";
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

    // Help-only invocations bypass Domain entirely — no environment, no logs, no cleanup needed
    if (handleHelpOnly(args)) {
        return;
    }

    const command: CommandInput = {
        kind: "command",
        name: args[0],
        args: args.slice(1).map(arg => {
            let js;
            if (arg.startsWith("(") || arg.startsWith("{")) {
                js = arg.startsWith("{") ? `(${arg})` : arg;
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

        colorize: !!stdout.isTTY,
        keepAlive: false,
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
    }
}

/**
 * Handle help-only invocations without creating a Domain.
 *
 * Returns true if help was displayed (caller should return), false if the invocation needs full Domain processing.
 */
function handleHelpOnly(args: string[]): boolean {
    const terminalWidth = process.stdout.columns;
    const colorize = !!stdout.isTTY;

    function out(...text: string[]) {
        stdout.write(text.join(""));
    }

    // `matter` (no args) or `matter help` (no topic)
    if (!args.length || (args[0] === "help" && args.length === 1)) {
        showWelcome(out, terminalWidth, colorize);
        return true;
    }

    // `matter help <topic>` — look up topic's help
    if (args[0] === "help" && args.length === 2) {
        const topic = args[1];
        const help = helpFor(topic);
        if (help) {
            help({ out, terminalWidth, colorize });
            return true;
        }
        // Unknown topic — fall through to Domain for richer error handling
        return false;
    }

    // `matter <cmd> --help` — look up cmd's help
    if (args.length >= 1 && args.includes("--help")) {
        const cmd = args[0];
        const help = helpFor(cmd);
        if (help) {
            help({ out, terminalWidth, colorize });
            return true;
        }
        // Unknown command — fall through to Domain
        return false;
    }

    return false;
}

function showWelcome(out: (...text: string[]) => void, terminalWidth: number, _colorize: boolean) {
    const text = `This tool allows you to interact with matter.js and your local Matter environment.
This tool understands both JavaScript and a shell-like syntax that maps "commands" to functions. Use "ls /bin" to see commands you can always use. Use "help <name>" for help with a specific command.
The current path appears in the prompt. This points to the object this tool uses to find commands. It is also the "global" object for any JavaScript statements you enter.
You can change the current path using "cd <path>". Paths work like you would expect, including "/", "." and "..".
Run "matter shell" to enter interactive mode.\n`;

    out("\nWelcome to matter.js.\n\n", FormattedText(text, terminalWidth).join("\n"), "\n\n");
}

interface HelpContext {
    out: (...text: string[]) => void;
    terminalWidth: number;
    colorize: boolean;
}

function helpFor(name: string): ((cx: HelpContext) => void) | undefined {
    const command = bin[name] ?? clusterCommandFor(name);
    if (!command?.help) {
        return;
    }

    return (cx: HelpContext) => command.help(cx as never);
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
