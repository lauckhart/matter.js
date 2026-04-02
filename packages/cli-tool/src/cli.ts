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
import { LogFormat, MatterError } from "@matter/general";
import "@matter/model/resources";
import "@matter/nodejs";
import "@matter/nodejs-ws";
import { DefinitionList, Markdown } from "@matter/tools/ansi-text";
import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { stdout } from "node:process";
import { fileURLToPath } from "node:url";
import "./commands/index.js";
import "./providers/index.js";

export async function main(argv: string[]) {
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

    const cx = DomainContext();

    // Help-only invocations bypass Domain entirely — no environment, no logs, no cleanup needed
    if (handleHelpOnly(cx, args)) {
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
function handleHelpOnly(cx: DomainContext, args: string[]): boolean {
    // `matter` (no args) or `matter help` (no topic)
    if (!args.length || (args[0] === "help" && args.length === 1)) {
        showWelcome(cx);
        return true;
    }

    // `matter help <topic>` — look up topic's help
    if (args[0] === "help" && args.length === 2) {
        const topic = args[1];
        if (helpFor(cx, topic)) {
            return true;
        }
        // Unknown topic — fall through to Domain for richer error handling
        return false;
    }

    // `matter <cmd> --help` — look up cmd's help
    if (args.length >= 1 && args.includes("--help")) {
        const cmd = args[0];
        if (helpFor(cx, cmd)) {
            return true;
        }
        // Unknown command — fall through to Domain
        return false;
    }

    return false;
}

function showWelcome(cx: DomainContext) {
    cx.out(
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
    cx.out(DefinitionList(entries), "\n");

    cx.out.close();
}

function helpFor(cx: DomainContext, name: string): boolean {
    const topic = topics[name];
    if (topic) {
        cx.out("\n");
        topic.render(cx.out);
        return true;
    }

    const command = bin[name] ?? clusterCommandFor(name);
    if (!command?.help) {
        return false;
    }

    command.help(cx as never);
    return true;
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
