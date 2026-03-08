/**
 * @license
 * Copyright 2022-2026 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * Barebones node runner entry point.  Spawned by the `start` command to run a {@link ServerNode} in a child process.
 *
 * All node composition is config-driven via environment variables — the runner itself does not hardcode any behaviors.
 * The CLI injects plugins (WebSocketServer, LifecycleServer, etc.) via `MATTER_PLUGINS` / `MATTER_NODES_<id>_PLUGINS`.
 *
 * Signal handling (SIGTERM, SIGINT) is provided by the {@link ProcessManager} installed by `@matter/nodejs`.
 *
 * Environment variables:
 *   - `MATTER_NODE_ID` — the node's identity (used by {@link ServerNode} as the default ID)
 *   - Standard `MATTER_*` variables for node configuration and plugins
 */

import { Environment, StorageService } from "@matter/general";
import { ServerNode } from "@matter/node";
import "@matter/nodejs";
import "@matter/nodejs-ws";
import { closeSync, openSync, unlinkSync } from "node:fs";
import { join } from "node:path";

const node = await ServerNode.create();
const nodeId = node.id;

// Touch a ready file when the node goes online so the CLI can detect startup via fs.watch() (Unix domain socket
// files do not trigger kqueue/inotify events reliably)
const storageRoot = Environment.default.get(StorageService).location;
const readyPath = storageRoot ? join(storageRoot, `.${nodeId}.ready`) : undefined;

function touchReady() {
    if (readyPath) {
        try {
            closeSync(openSync(readyPath, "w"));
        } catch {
            // Best effort
        }
    }
}

function removeReady() {
    if (readyPath) {
        try {
            unlinkSync(readyPath);
        } catch {
            // Best effort
        }
    }
}

node.lifecycle.online.on(touchReady);

// Keep the event loop alive during shutdown.  When the runtime cancels in response to SIGTERM/SIGINT, network handles
// are closed before storage cleanup finishes.  Without a ref'd handle, Node.js would exit before the PID/lock files
// are removed.
const keepAlive = setInterval(() => {}, 60_000);
try {
    await node.run();
} finally {
    clearInterval(keepAlive);
    removeReady();
}
