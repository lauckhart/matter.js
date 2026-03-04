/**
 * @license
 * Copyright 2022-2026 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { StorageService, VariableService } from "@matter/general";
import { readdir } from "node:fs/promises";
import { join } from "node:path";

/**
 * Manages discovery and registration of Matter nodes under the storage root (typically `~/.matter/`).
 *
 * Node configuration lives in the {@link VariableService} under `nodes.<nodeId>` and is persisted to the global
 * `config.json`.  Local nodes are auto-discovered from existing storage subdirectories; remote nodes are explicitly
 * registered with a URL.
 */
export class NodeRegistry {
    #storageRoot: string;
    #vars: VariableService;

    constructor(storageService: StorageService, vars: VariableService) {
        const location = storageService.location;
        if (location === undefined) {
            throw new Error("Storage location is not configured");
        }
        this.#storageRoot = location;
        this.#vars = vars;
    }

    get storageRoot() {
        return this.#storageRoot;
    }

    /**
     * Enumerate all node directories under the storage root.
     *
     * Returns an array of node IDs (directory names).  Does not open or inspect storage.
     */
    async discover(): Promise<string[]> {
        let entries;
        try {
            entries = await readdir(this.#storageRoot, { withFileTypes: true });
        } catch (e) {
            if ((e as NodeJS.ErrnoException).code === "ENOENT") {
                return [];
            }
            throw e;
        }

        return entries.filter(entry => entry.isDirectory()).map(entry => entry.name);
    }

    /**
     * Resolve the WebSocket URL for a node.
     *
     * If the node has a configured URL, returns it.  Otherwise assumes a local node and returns a `ws+unix://` URL
     * pointing to `matter.sock` in the node's directory.
     */
    resolveUrl(nodeId: string): string {
        const url = this.#vars.string(`nodes.${nodeId}.url`);
        if (url) {
            return url;
        }
        const socketPath = join(this.#storageRoot, nodeId, "remote.sock");
        return `ws+unix://${encodeURIComponent(socketPath)}/`;
    }

    /**
     * Get a configuration value for a node.
     */
    get(nodeId: string, key: string): string | undefined {
        return this.#vars.string(`nodes.${nodeId}.${key}`);
    }

    /**
     * Register a remote node by persisting its URL to config.
     */
    async register(nodeId: string, url: string) {
        await this.#vars.persist(`nodes.${nodeId}.url`, url);
    }
}
