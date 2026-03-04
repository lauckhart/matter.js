/**
 * @license
 * Copyright 2022-2026 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { LazyNode } from "#lazy-node.js";
import { NodeRegistry } from "#node-registry.js";
import colors from "ansi-colors";
import { Command } from "./command.js";

Command({
    description:
        "Show all known Matter nodes and their connection state.  Lists nodes discovered from the storage root along with their current status (idle, connected, or error).",

    invoke: async function status() {
        let registry;
        try {
            registry = this.env.get(NodeRegistry);
        } catch {
            this.err("No storage configured; cannot discover nodes\n");
            return;
        }

        const nodeIds = await registry.discover();

        if (!nodeIds.length) {
            this.out("No nodes found\n");
            return;
        }

        const maxIdLen = Math.max(...nodeIds.map(id => id.length));

        for (const id of nodeIds) {
            const paddedId = id.padEnd(maxIdLen);
            const url = registry.get(id, "url");
            const pid = await registry.readPid(id);
            const node = this.globals[id];

            let statusStr: string;
            let urlStr: string;

            if (pid !== undefined && registry.isAlive(pid)) {
                statusStr = colors.green(`running (pid ${pid})`);
            } else if (pid !== undefined) {
                // Stale PID file — clean it up
                await registry.removePid(id);
                statusStr = colors.dim("stopped");
            } else if (node instanceof LazyNode) {
                switch (node.status) {
                    case "connected":
                        statusStr = colors.green("connected");
                        break;
                    case "connecting":
                        statusStr = colors.yellow("connecting");
                        break;
                    case "error":
                        statusStr = colors.red(`error: ${node.lastError?.message}`);
                        break;
                    default:
                        statusStr = colors.dim("idle");
                        break;
                }
            } else if (node !== undefined) {
                statusStr = colors.green("connected");
            } else {
                statusStr = colors.dim("idle");
            }

            if (url) {
                urlStr = colors.dim(` (${url})`);
            } else {
                urlStr = colors.dim(" (local)");
            }

            this.out(`  ${colors.bold(paddedId)}  ${statusStr}${urlStr}\n`);
        }
    },
});
