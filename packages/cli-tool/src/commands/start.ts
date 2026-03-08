/**
 * @license
 * Copyright 2022-2026 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { LazyNode } from "#lazy-node.js";
import { NodeRegistry } from "#node-registry.js";
import { fork } from "node:child_process";
import { closeSync, mkdirSync, openSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { Command } from "./command.js";

/**
 * Resolve the default node entrypoint script path.
 */
function defaultEntrypoint() {
    return join(dirname(fileURLToPath(import.meta.url)), "..", "node-entrypoint.js");
}

Command({
    usage: "<node> [options]",
    description:
        "Start a registered node.\n\n" +
        'If the node name is "controller" or "device" and is not yet registered, it is auto-registered with ' +
        "defaults.\n\n" +
        "By default the node runs as a detached background process.  Use --foreground to run in the current terminal.",
    positionalArgs: [{ name: "node", type: "string", description: "Node ID to start" }],
    namedArgs: [
        { name: "foreground", description: "Run in the current terminal instead of daemonizing" },
        { name: "f", description: "Short for --foreground" },
    ],

    invoke: async function start(args) {
        const nodeId = args.node;
        if (!nodeId) {
            this.err("Node ID is required\n");
            return;
        }

        const registry = this.env.get(NodeRegistry);

        // Auto-register controller/device if not yet registered
        let type = registry.get(nodeId, "type");
        if (type === undefined && (nodeId === "controller" || nodeId === "device")) {
            await registry.register(nodeId, nodeId, registry.managementConfig(nodeId));
            type = nodeId;
            this.out(`Auto-registered ${type} node "${nodeId}"\n`);
        }

        if (type === undefined) {
            this.err(`Unknown node "${nodeId}".  Register it first with the register command.\n`);
            return;
        }

        if (type === "remote") {
            this.err(`Cannot start remote node "${nodeId}" — it is managed externally\n`);
            return;
        }

        // Check if already running
        const existingPid = await registry.readPid(nodeId);
        if (existingPid !== undefined && registry.isAlive(existingPid)) {
            this.out(`Node "${nodeId}" is already running (pid ${existingPid})\n`);
            return;
        }

        // Build environment for the child process
        const childEnv = { ...process.env, ...registry.envForNode(nodeId) };
        childEnv.MATTER_NODE_ID = nodeId;

        // Resolve the entry point — custom entrypoint or the default runner
        const entrypoint = registry.get(nodeId, "entrypoint") ?? defaultEntrypoint();

        const foreground = args.foreground || args.f;

        if (foreground) {
            // Foreground mode — inherit stdio, wait for exit
            const child = fork(entrypoint, [], {
                env: childEnv,
                stdio: "inherit",
            });

            await new Promise<void>(resolve => {
                child.on("exit", (code, signal) => {
                    if (signal) {
                        this.out(`Node "${nodeId}" killed by ${signal}\n`);
                    } else if (code !== 0) {
                        this.err(`Node "${nodeId}" exited with code ${code}\n`);
                    }
                    resolve();
                });
            });
        } else {
            // Daemonized mode — detach with stdout/stderr routed to a log file
            const nodeDir = join(registry.storageRoot, nodeId);
            mkdirSync(nodeDir, { recursive: true });
            const logPath = join(nodeDir, "matter.log");
            const logFd = openSync(logPath, "a");
            const child = fork(entrypoint, [], {
                env: childEnv,
                detached: true,
                stdio: ["ignore", logFd, logFd, "ipc"],
            });

            child.disconnect();
            child.unref();
            closeSync(logFd);

            // Wait for the PID file to appear, confirming the process started
            const started = await registry.watchPidFile(nodeId, "appear", 5000);

            if (!started) {
                if (child.pid !== undefined && registry.isAlive(child.pid)) {
                    this.out(`Started node "${nodeId}" (pid ${child.pid}, still initializing)\n`);
                } else {
                    this.err(`Node "${nodeId}" failed to start\n`);
                    return;
                }
            }

            // Wait for the ready file, confirming the node is fully online.  We watch a regular file rather than
            // the Unix domain socket because socket files do not trigger fs.watch() events reliably on macOS.
            const readyPath = join(registry.storageRoot, `.${nodeId}.ready`);
            await registry.watchFile(readyPath, "appear", 10_000);

            const pid = await registry.readPid(nodeId);
            this.out(`Started node "${nodeId}" (pid ${pid ?? child.pid}), logging to ${logPath}\n`);

            // Register a LazyNode so subsequent commands (stop, logs, etc.) can connect via WebSocket
            if (!(this.globals[nodeId] instanceof LazyNode)) {
                this.globals[nodeId] = new LazyNode(nodeId, registry, this.env, this.globals);
            }
        }
    },
});
