/**
 * @license
 * Copyright 2022-2026 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { NodeRegistry } from "#node-registry.js";
import { Directory, Stat } from "#stat.js";
import { Environment } from "@matter/general";
import type { ActionContext } from "@matter/node";
import { RemoteNode } from "@matter/node";
import colors from "ansi-colors";

/**
 * A placeholder for a remote node that connects lazily on first access.
 *
 * When the user navigates into a node (e.g. `cd node0`), the proxy triggers connection via
 * {@link RemoteNode.create} and replaces itself in the globals namespace.
 */
export class LazyNode {
    readonly id: string;
    readonly #registry: NodeRegistry;
    readonly #environment: Environment;
    readonly #globals: Record<string, unknown>;
    #remote?: RemoteNode;
    #connecting?: Promise<RemoteNode>;
    #error?: Error;

    constructor(id: string, registry: NodeRegistry, environment: Environment, globals: Record<string, unknown>) {
        this.id = id;
        this.#registry = registry;
        this.#environment = environment;
        this.#globals = globals;
    }

    /**
     * Connect to the remote node.  Returns the cached RemoteNode if already connected.
     */
    async connect(): Promise<RemoteNode> {
        if (this.#remote) {
            return this.#remote;
        }

        if (this.#error) {
            throw this.#error;
        }

        if (this.#connecting) {
            return this.#connecting;
        }

        this.#connecting = this.#doConnect();

        try {
            this.#remote = await this.#connecting;
            this.#globals[this.id] = this.#remote;
            return this.#remote;
        } catch (e) {
            this.#error = e instanceof Error ? e : new Error(String(e));
            throw this.#error;
        } finally {
            this.#connecting = undefined;
        }
    }

    async #doConnect(): Promise<RemoteNode> {
        const url = this.#registry.resolveUrl(this.id);

        return await RemoteNode.connect({
            url,
            id: this.id,
            environment: new Environment(this.id, this.#environment),
        });
    }

    /**
     * Current connection state for display purposes.
     */
    get status(): "connected" | "connecting" | "error" | "idle" {
        if (this.#remote) {
            return "connected";
        }
        if (this.#connecting) {
            return "connecting";
        }
        if (this.#error) {
            return "error";
        }
        return "idle";
    }

    /**
     * The error from the last failed connection attempt.
     */
    get lastError(): Error | undefined {
        return this.#error;
    }

    /**
     * Reset error state so the next access retries connection.
     */
    resetError() {
        this.#error = undefined;
    }

    toString() {
        switch (this.status) {
            case "connected":
                return `${this.id} ${colors.green("(connected)")}`;
            case "connecting":
                return `${this.id} ${colors.yellow("(connecting...)")}`;
            case "error":
                return `${this.id} ${colors.red(`(error: ${this.#error?.message})`)}`;
            default:
                return `${this.id} ${colors.dim("(idle)")}`;
        }
    }
}

/**
 * Register the {@link Stat} provider for {@link LazyNode} so it appears as a navigable directory in the CLI.
 *
 * On path access, the lazy node connects and delegates to the underlying RemoteNode's Stat provider.
 */
Stat.provide((definition, context) => {
    if (!(definition instanceof LazyNode)) {
        return;
    }

    return Directory({
        tag: "node",
        name: definition.id,
        summary: definition.toString(),

        async paths() {
            let remote;
            try {
                remote = await definition.connect();
            } catch {
                return ["status"];
            }

            const stat = Stat.of(remote, context);
            if (stat.kind === "directory") {
                return await stat.paths;
            }
            return [];
        },

        async definitionAt(path: string, context: ActionContext) {
            if (path === "status") {
                return definition.toString();
            }

            const remote = await definition.connect();
            const stat = Stat.of(remote, context);
            if (stat.kind === "directory") {
                return await stat.definitionAt(path, context);
            }
        },
    });
});

/**
 * Populate the globals namespace with lazy node proxies for all discovered nodes.
 */
export async function populateNodes(
    globals: Record<string, unknown>,
    registry: NodeRegistry,
    environment: Environment,
) {
    const nodeIds = await registry.allNodeIds();

    for (const id of nodeIds) {
        if (id in globals) {
            continue;
        }
        globals[id] = new LazyNode(id, registry, environment, globals);
    }
}
