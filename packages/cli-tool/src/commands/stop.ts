/**
 * @license
 * Copyright 2022-2026 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { CliCommand } from "#cli-command.js";
import { NodeRegistry } from "#node-registry.js";
import { bool, description, field, string, uint16 } from "@matter/model";
import { LifecycleServer, RemoteNode } from "@matter/node";

class StopPositional {
    @description("Node ID to stop")
    @field(string)
    node?: string;
}

class StopArgs {
    @description("Kill immediately without graceful shutdown")
    @field(bool)
    force?: boolean;

    @description("Seconds to wait for graceful shutdown")
    @field(uint16)
    timeout = 10;

    @field(StopPositional)
    positionalArgs?: StopPositional;
}

new CliCommand({
    name: "stop",
    usage: "<node> [options]",
    description:
        "Stop a running node.\n\n" +
        "Attempts graceful shutdown via the WebSocket management API, then falls back to signals if needed.",
    input: StopArgs,

    invoke: async function stop(
        _context,
        { node: nodeId, force, timeout }: { node?: string; force?: boolean; timeout?: number },
    ) {
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

        if (force) {
            process.kill(pid, "SIGKILL");
            await registry.removePid(nodeId);
            this.out(`Killed node "${nodeId}" (pid ${pid})\n`);
            return;
        }

        const timeoutMs = (timeout ?? 10) * 1000;

        // Try graceful shutdown via RemoteNode, fall back to SIGTERM
        try {
            const url = registry.resolveUrl(nodeId);
            const remote = await RemoteNode.connect({ url, id: nodeId, subscribe: false });
            try {
                await remote.commandsOf(LifecycleServer).stop(undefined);
            } finally {
                await remote.close();
            }
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
