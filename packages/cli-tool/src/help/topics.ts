/**
 * @license
 * Copyright 2022-2026 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { bin, DomainCommand } from "#globals.js";
import { DefinitionList, Markdown, Printer } from "@matter/tools/ansi-text";

export interface Topic {
    name: string;
    summary: string;
    render(printer: Printer): void;
}

function firstSentence(text: string): string {
    const match = text.match(/^(.+?\.)\s/);
    return match ? match[1] : text;
}

export const topics: Record<string, Topic> = {
    "getting-started": {
        name: "Getting Started",
        summary: "First steps: register, start, and commission",

        render(printer) {
            printer.write(
                Markdown(
                    `# Getting Started

Register a controller, start a device, commission it, and check status.

Use \`matter register\` to add a new node to your local environment. Once registered, start it
with \`matter start\` and commission it onto a fabric with \`matter commission\`.

Check on your nodes at any time with \`matter status\`.`,
                ),
                "\n",
            );
        },
    },

    nodes: {
        name: "Nodes",
        summary: "Matter nodes and lifecycle management",

        render(printer) {
            printer.write(
                Markdown(
                    `# Nodes

A Matter node is a logical device or controller on a fabric. matter.js stores node configuration
in the \`~/.matter/\` directory.

Nodes may be **local** (running in this process) or **remote** (commissioned devices you interact
with as a controller).

## Lifecycle commands

Use \`register\`, \`start\`, \`stop\`, and \`status\` to manage node lifecycle.`,
                ),
                "\n",
            );
        },
    },

    clusters: {
        name: "Clusters",
        summary: "Attributes, commands, and events",

        render(printer) {
            printer.write(
                Markdown(
                    `# Clusters

A cluster is a group of related attributes, commands, and events exposed by a Matter node. Each
cluster maps to a set of CLI operations:

* \`get <cluster>.<attribute>\` — read an attribute
* \`set <cluster>.<attribute> <value>\` — write an attribute
* \`<cluster>.<command> [args]\` — invoke a cluster command

Use \`help <cluster-name>\` for details on a specific cluster.`,
                ),
                "\n",
            );
        },
    },

    interactive: {
        name: "Interactive Mode",
        summary: "The shell, navigation, and built-in commands",

        render(printer) {
            printer.write(
                Markdown(
                    `# Interactive Mode

Run \`matter shell\` to enter the interactive REPL. The shell understands both JavaScript and a
shell-like command syntax.

The current path appears in the prompt and determines the context for commands. Navigate with
\`cd <path>\` using familiar \`/\`, \`.\`, and \`..\` conventions.

## Commands`,
                ),
                "\n",
            );

            const seen = new Set<DomainCommand>();
            const entries = Array<DefinitionList.Entry>();
            for (const [name, command] of Object.entries(bin)) {
                if (seen.has(command)) {
                    continue;
                }
                seen.add(command);
                entries.push({ name, description: firstSentence(command.description ?? "") });
            }

            printer.write(DefinitionList(entries), "\n");
        },
    },
};
