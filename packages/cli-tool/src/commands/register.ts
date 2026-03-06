/**
 * @license
 * Copyright 2022-2026 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { VariableService } from "@matter/general";
import { Domain } from "#domain.js";
import { LazyNode } from "#lazy-node.js";
import { NodeRegistry } from "#node-registry.js";
import { access } from "node:fs/promises";
import { resolve } from "node:path";
import { Command } from "./command.js";

Command({
    usage: ["remote <name> <url>", "controller [options]", "device <script> [options]"],
    description:
        "Register a Matter node.  Subcommands:\n\n" +
        "  remote <name> <url>       Register a remote node at a WebSocket URL.\n" +
        "  controller [options]      Register a CLI-managed controller node.\n" +
        "  device <script> [options] Register a node backed by a user script.\n\n" +
        'Options may include { name: "myname" } to override auto-generated names.  Controller names default to' +
        ' "controller"; device names default to "device".  Numeric suffixes are appended on conflict.',
    positionalArgs: [{ name: "subcommand", type: "string", description: "One of: remote, controller, device" }],
    restArgs: { name: "args", type: "any", description: "Subcommand arguments" },

    invoke: async function register(args) {
        switch (args.subcommand) {
            case "remote":
                return registerRemote(this, args._);

            case "controller":
                return registerController(this, args._);

            case "device":
                return registerDevice(this, args._);

            default:
                if (args.subcommand) {
                    this.err(`Unknown subcommand: ${args.subcommand}\n`);
                } else {
                    this.err("Subcommand required (remote, controller, or device)\n");
                }
                break;
        }
    },
});

async function registerRemote(domain: Domain, args: unknown[]) {
    const [name, url] = args as [string | undefined, string | undefined];

    if (!name) {
        domain.err("Node name is required\n");
        return;
    }

    if (!url) {
        domain.err("URL argument is required\n");
        return;
    }

    const registry = domain.env.get(NodeRegistry);
    await registry.register(name, "remote", { url });

    if (!(name in domain.globals)) {
        domain.globals[name] = new LazyNode(name, registry, domain.env, domain.globals);
    }

    domain.out(`Registered remote node "${name}" → ${url}\n`);
}

async function registerController(domain: Domain, args: unknown[]) {
    const registry = domain.env.get(NodeRegistry);
    const options = (args[0] && typeof args[0] === "object" ? args[0] : {}) as Record<string, VariableService.Value>;
    const name = await registry.autoName("controller", options.name as string | undefined);

    await registry.register(name, "controller", { ...registry.managementConfig(name), ...options });

    if (!(name in domain.globals)) {
        domain.globals[name] = new LazyNode(name, registry, domain.env, domain.globals);
    }

    domain.out(`Registered controller node "${name}"\n`);
}

async function registerDevice(domain: Domain, args: unknown[]) {
    const script = args[0] as string | undefined;
    if (!script) {
        domain.err("Script path is required\n");
        return;
    }

    const scriptPath = resolve(script);

    try {
        await access(scriptPath);
    } catch {
        domain.err(`Script not found: ${scriptPath}\n`);
        return;
    }

    const registry = domain.env.get(NodeRegistry);
    const options = (args[1] && typeof args[1] === "object" ? args[1] : {}) as Record<string, VariableService.Value>;
    const name = await registry.autoName("device", options.name as string | undefined);

    await registry.register(name, "device", { ...registry.managementConfig(name), script: scriptPath, ...options });

    if (!(name in domain.globals)) {
        domain.globals[name] = new LazyNode(name, registry, domain.env, domain.globals);
    }

    domain.out(`Registered device node "${name}" → ${scriptPath}\n`);
}
