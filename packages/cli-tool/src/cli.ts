/**
 * @license
 * Copyright 2022-2026 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { clusterCommandFor } from "#cluster-command.js";
import { Domain, DomainContext } from "#domain.js";
import { bin } from "#globals.js";
import { topics } from "#help/topics.js";
import { CommandInput } from "#parser.js";
import { Environment, LogFormat, MatterError } from "@matter/general";
import "@matter/nodejs";
import "@matter/nodejs-ws";
import { DefinitionList, Markdown, Printer, TextWriter, Wrapper } from "@matter/tools/ansi-text";
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
    // `matter` (no args) or `matter help` (no topic)
    if (!args.length || (args[0] === "help" && args.length === 1)) {
        showWelcome();
        return true;
    }

    // `matter help <topic>` — look up topic's help
    if (args[0] === "help" && args.length === 2) {
        const topic = args[1];
        const help = helpFor(topic);
        if (help) {
            help();
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
            help();
            return true;
        }
        // Unknown command — fall through to Domain
        return false;
    }

    return false;
}

function createHelpPrinter(): Printer {
    const terminalWidth = process.stdout.columns;
    const styleEnabled = !!stdout.isTTY;
    const writer = new TextWriter(text => stdout.write(text), { terminalWidth });
    writer.state.styleEnabled = styleEnabled;
    const wrapper = new Wrapper(writer, { wrapPrefix: "  ", preserveSpace: false });
    return Printer(wrapper);
}

function showWelcome() {
    const printer = createHelpPrinter();

    printer.write(
        "\n",
        Markdown(
            `# matter.js

A CLI for interacting with Matter devices and your local Matter environment.

Run \`matter help <topic>\` for details on any topic below, or \`matter <command>\` to run a
command directly.

## Topics`,
        ),
        "\n",
    );

    const entries = Object.entries(topics).map(([key, topic]) => ({
        name: key,
        description: topic.summary,
    }));
    printer.write(DefinitionList(entries), "\n");

    printer.close();
}

function helpFor(name: string): (() => void) | undefined {
    const topic = topics[name];
    if (topic) {
        return () => {
            const printer = createHelpPrinter();
            printer.write("\n");
            topic.render(printer);
        };
    }

    const command = bin[name] ?? clusterCommandFor(name);
    if (!command?.help) {
        return;
    }

    // help() currently expects a Domain-like context; pass a minimal shim
    return () => {
        const cx = {
            out(...text: string[]) {
                stdout.write(text.join(""));
            },
            terminalWidth: process.stdout.columns,
            colorize: !!stdout.isTTY,
        };
        command.help(cx as never);
    };
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
