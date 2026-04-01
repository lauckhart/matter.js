/**
 * @license
 * Copyright 2022-2026 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { StorageService, VariableService } from "@matter/general";
import { existsSync, watch } from "node:fs";
import { readdir, readFile, unlink } from "node:fs/promises";
import { basename, dirname, join } from "node:path";

const PID_FILE = "matter.pid";

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

        return entries.filter(entry => entry.isDirectory() && !entry.name.startsWith(".")).map(entry => entry.name);
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
        return `ws+unix://${socketPath}:/`;
    }

    /**
     * Get a configuration value for a node.
     */
    get(nodeId: string, key: string): string | undefined {
        return this.#vars.string(`nodes.${nodeId}.${key}`);
    }

    /**
     * Persist a configuration value for a node.
     */
    async set(nodeId: string, key: string, value: string) {
        await this.#vars.persist(`nodes.${nodeId}.${key}`, value);
    }

    /**
     * Register a node by persisting its type and optional config values.
     */
    async register(nodeId: string, type: string, config?: Record<string, VariableService.Value>) {
        await this.set(nodeId, "type", type);
        if (config) {
            for (const [key, value] of Object.entries(config)) {
                if (key !== "id") {
                    await this.#vars.persist(`nodes.${nodeId}.${key}`, value);
                }
            }
        }
    }

    /**
     * Build the standard management config for a CLI-managed node.
     *
     * Uses canonical schema paths so values flow through {@link EndpointVariableService} automatically.
     */
    managementConfig(nodeId: string): Record<string, VariableService.Value> {
        return {
            plugins: [
                "@matter/node/behaviors/system/websocket",
                "@matter/node/behaviors/system/lifecycle",
                "@matter/node/behaviors/system/logs",
            ].join(","),
            "logs.path": join(this.#storageRoot, nodeId, "matter.log"),
            "network.port": 0,
        };
    }

    /**
     * Generate a unique node name from a base, checking against all known node IDs.
     *
     * If {@link overrideName} is provided, returns it directly.  Otherwise tries the base name, then appends numeric
     * suffixes ("controller2", "controller3", ...) until a unique name is found.
     */
    async autoName(base: string, overrideName?: string): Promise<string> {
        if (overrideName) {
            return overrideName;
        }
        const existing = new Set(await this.allNodeIds());
        if (!existing.has(base)) {
            return base;
        }
        for (let i = 2; ; i++) {
            const candidate = `${base}${i}`;
            if (!existing.has(candidate)) {
                return candidate;
            }
        }
    }

    /**
     * All known node IDs: discovered storage directories plus nodes with config entries.
     */
    async allNodeIds(): Promise<string[]> {
        const ids = new Set(await this.discover());
        const nodesMap = this.#vars.get<VariableService.Map>("nodes");
        if (nodesMap && typeof nodesMap === "object" && !Array.isArray(nodesMap)) {
            for (const key of Object.keys(nodesMap)) {
                ids.add(key);
            }
        }
        return [...ids];
    }

    /**
     * Read the PID of a running node process, if recorded.
     */
    async readPid(nodeId: string): Promise<number | undefined> {
        const pidPath = join(this.#storageRoot, nodeId, PID_FILE);
        try {
            const data = await readFile(pidPath, "utf-8");
            const pid = parseInt(data.trim(), 10);
            return isNaN(pid) ? undefined : pid;
        } catch (e) {
            if ((e as NodeJS.ErrnoException).code === "ENOENT") {
                return undefined;
            }
            throw e;
        }
    }

    /**
     * Remove the PID file for a node.
     */
    async removePid(nodeId: string) {
        const pidPath = join(this.#storageRoot, nodeId, PID_FILE);
        try {
            await unlink(pidPath);
        } catch (e) {
            if ((e as NodeJS.ErrnoException).code === "ENOENT") {
                return;
            }
            throw e;
        }
    }

    /**
     * Build a `MATTER_NODES_<ID>_*` environment variable map from the node's stored config.
     *
     * This allows a forked child process to inherit all registered config values via the standard
     * {@link VariableService} parsing.
     */
    envForNode(nodeId: string): Record<string, string> {
        const nodeConfig = this.#vars.get<VariableService.Map>(`nodes.${nodeId}`);
        if (!nodeConfig || typeof nodeConfig !== "object" || Array.isArray(nodeConfig)) {
            return {};
        }

        const env: Record<string, string> = {};
        const prefix = `MATTER_NODES_${nodeId.toUpperCase()}`;

        const flatten = (obj: VariableService.Map, keyPrefix: string) => {
            for (const [key, value] of Object.entries(obj)) {
                const envKey = `${keyPrefix}_${key.toUpperCase()}`;
                if (value !== null && typeof value === "object" && !Array.isArray(value)) {
                    flatten(value as VariableService.Map, envKey);
                } else if (value !== undefined && value !== null) {
                    env[envKey] = String(value);
                }
            }
        };

        flatten(nodeConfig, prefix);
        return env;
    }

    /**
     * Watch for the PID file to appear or disappear.
     *
     * Uses `fs.watch()` for OS-level filesystem events rather than polling.  Returns true if the condition was met,
     * false on timeout.
     *
     * @param nodeId - The node whose PID file to watch
     * @param expect - "appear" to wait for the file to be created, "disappear" to wait for the process to exit
     * @param timeoutMs - Maximum time to wait
     */
    watchPidFile(nodeId: string, expect: "appear" | "disappear", timeoutMs: number): Promise<boolean> {
        const dir = join(this.#storageRoot, nodeId);

        return new Promise<boolean>(resolve => {
            const watcher = watch(dir, (_, filename) => {
                if (filename !== PID_FILE) {
                    return;
                }

                if (expect === "appear") {
                    void this.readPid(nodeId).then(pid => {
                        if (pid !== undefined && this.isAlive(pid)) {
                            cleanup(true);
                        }
                    });
                } else {
                    void this.readPid(nodeId).then(pid => {
                        if (pid === undefined || !this.isAlive(pid)) {
                            cleanup(true);
                        }
                    });
                }
            });

            const timer = setTimeout(() => cleanup(false), timeoutMs);

            let settled = false;
            const cleanup = (result: boolean) => {
                if (settled) {
                    return;
                }
                settled = true;
                clearTimeout(timer);
                watcher.close();
                resolve(result);
            };

            // Check immediately in case the condition is already met
            void this.readPid(nodeId).then(pid => {
                if (expect === "appear") {
                    if (pid !== undefined && this.isAlive(pid)) {
                        cleanup(true);
                    }
                } else {
                    if (pid === undefined || !this.isAlive(pid)) {
                        cleanup(true);
                    }
                }
            });
        });
    }

    /**
     * Watch for a file to appear or disappear.
     *
     * Uses `fs.watch()` for OS-level filesystem events.  Returns true if the condition was met, false on timeout.
     */
    watchFile(filePath: string, expect: "appear" | "disappear", timeoutMs: number): Promise<boolean> {
        const dir = dirname(filePath);
        const target = basename(filePath);

        return new Promise<boolean>(resolve => {
            const watcher = watch(dir, (_, filename) => {
                if (filename !== target) {
                    return;
                }
                check();
            });

            const timer = setTimeout(() => cleanup(false), timeoutMs);

            let settled = false;
            const cleanup = (result: boolean) => {
                if (settled) {
                    return;
                }
                settled = true;
                clearTimeout(timer);
                watcher.close();
                resolve(result);
            };

            const check = () => {
                const exists = existsSync(filePath);
                if (expect === "appear" ? exists : !exists) {
                    cleanup(true);
                }
            };

            // Check immediately in case the condition is already met
            check();
        });
    }

    /**
     * Check whether a process is still alive.
     */
    isAlive(pid: number): boolean {
        try {
            process.kill(pid, 0);
            return true;
        } catch (e) {
            // EPERM means the process exists but we lack permission to signal it
            if ((e as NodeJS.ErrnoException).code === "EPERM") {
                return true;
            }
            return false;
        }
    }
}
