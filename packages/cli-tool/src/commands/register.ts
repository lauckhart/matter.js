/**
 * @license
 * Copyright 2022-2026 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { LazyNode } from "#lazy-node.js";
import { NodeRegistry } from "#node-registry.js";
import { Command } from "./command.js";

Command({
    usage: "NAME URL",
    description:
        "Register a remote Matter node.  Creates a directory under the storage root with a CLI config file pointing to the given WebSocket URL.  The node appears in the CLI namespace and connects lazily on first access.",
    positionalArgs: [
        { name: "name", description: "Name for the node (used as directory name and CLI identifier)", type: "string" },
        { name: "url", description: "WebSocket URL of the remote node", type: "string" },
    ],

    invoke: async function register(args) {
        const { name, url } = args;

        if (!name) {
            this.err("Node name is required\n");
            return;
        }

        if (!url) {
            this.err("URL argument is required\n");
            return;
        }

        const registry = this.env.get(NodeRegistry);
        await registry.register(name, url);

        if (!(name in this.globals)) {
            this.globals[name] = new LazyNode(name, registry, this.env, this.globals);
        }

        this.out(`Registered node "${name}" → ${url}\n`);
    },
});
