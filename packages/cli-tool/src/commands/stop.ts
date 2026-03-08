/**
 * @license
 * Copyright 2022-2026 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { NodeRegistry } from "#node-registry.js";
import { WebSocketClient } from "@matter/general";
import { Command } from "./command.js";

Command({
    usage: "<node> [options]",
    description:
        "Stop a running node.\n\n" +
        "Attempts graceful shutdown via the WebSocket management API, then falls back to signals if needed.",
    positionalArgs: [{ name: "node", type: "string", description: "Node ID to stop" }],
    namedArgs: [
        { name: "force", description: "Kill immediately without graceful shutdown" },
        { name: "timeout", type: "integer", default: 10, description: "Seconds to wait for graceful shutdown" },
    ],

    invoke: async function stop(args) {
        const nodeId = args.node;
        if (!nodeId) {
            this.err("Node ID is required\n");
            return;
        }

        const registry = this.env.get(NodeRegistry);

        const pid = await registry.readPid(nodeId);
        if (pid === undefined || !registry.isAlive(pid)) {
            if (pid !== undefined) {
                await registry.removePid(nodeId);
            }
            this.out(`Node "${nodeId}" is not running\n`);
            return;
        }

        if (args.force) {
            process.kill(pid, "SIGKILL");
            await registry.removePid(nodeId);
            this.out(`Killed node "${nodeId}" (pid ${pid})\n`);
            return;
        }

        const timeoutMs = (args.timeout ?? 10) * 1000;

        // Try graceful shutdown via a lightweight WebSocket request, fall back to SIGTERM
        try {
            const url = registry.resolveUrl(nodeId);
            const ws = await this.env.get(WebSocketClient).connect(url);

            const writer = ws.writable.getWriter();
            await writer.write(JSON.stringify({ method: "invoke", target: "0/lifecycle/stop", id: "1" }));
            writer.releaseLock();

            await ws.writable.close();
        } catch (e) {
            // Connection or command failed — fall back to SIGTERM
            this.err(`Graceful stop failed: ${e instanceof Error ? e.message : e}\n`);
            try {
                process.kill(pid, "SIGTERM");
            } catch {
                // Process may have exited between check and kill
            }
        }

        // For local nodes, wait for the process to fully exit
        if (registry.get(nodeId, "type") !== "remote") {
            if (!(await registry.watchPidFile(nodeId, "disappear", timeoutMs))) {
                if (registry.isAlive(pid)) {
                    // Escalate to SIGKILL
                    try {
                        process.kill(pid, "SIGKILL");
                    } catch {
                        // Already dead
                    }
                }
                await registry.removePid(nodeId);
                this.out(`Killed node "${nodeId}" (pid ${pid})\n`);
                return;
            }
        } else {
            await registry.removePid(nodeId);
        }

        this.out(`Stopped node "${nodeId}" (pid ${pid})\n`);
    },
});
