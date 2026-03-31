/**
 * @license
 * Copyright 2022-2026 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Endpoint } from "#endpoint/Endpoint.js";
import { ImplementationError, MaybePromise } from "@matter/general";
import { EndpointSelector, FabricManager } from "@matter/protocol";
import { FabricIndex } from "@matter/types";
import { Node } from "./Node.js";
import { ServerNode } from "./ServerNode.js";

/**
 * Resolves {@link EndpointSelector} targets against a collection of nodes.
 *
 * The constructor takes accessor functions rather than a static array because node access may be async (e.g. lazy
 * connections).
 */
export class NodeSet {
    #options: NodeSet.Options;

    constructor(options: NodeSet.Options) {
        this.#options = options;
    }

    /**
     * Select endpoints matching {@link selector}, optionally filtered by {@link filter}.
     */
    select(selector: EndpointSelector, filter?: NodeSet.Filter): MaybePromise<Endpoint[]> {
        if (selector.isPath) {
            throw new ImplementationError("Path selectors require CLI context");
        }

        return MaybePromise.then(
            () => this.#resolveNodes(selector.node),
            nodes =>
                MaybePromise.then(
                    () => this.#collectEndpoints(nodes, selector, filter),
                    endpoints => endpoints,
                ),
        );
    }

    #resolveNodes(nodeSelector: "*" | string[] | undefined): MaybePromise<Node[]> {
        const { get, ids, context } = this.#options;

        if (nodeSelector === undefined) {
            if (context) {
                return [context];
            }
            const allIds = ids();
            if (allIds.length === 1) {
                return MaybePromise.then(
                    () => get(allIds[0]),
                    node => [node],
                );
            }
            if (allIds.length === 0) {
                throw new ImplementationError("No nodes available");
            }
            throw new ImplementationError(
                `Node selector is ambiguous; ${allIds.length} nodes available (${allIds.join(", ")}). Specify a node name or use "*"`,
            );
        }

        if (nodeSelector === "*") {
            return this.#loadAll();
        }

        return this.#loadByNames(nodeSelector);
    }

    #loadAll(): MaybePromise<Node[]> {
        const allIds = this.#options.ids();
        return this.#loadByNames(allIds);
    }

    #loadByNames(names: string[]): MaybePromise<Node[]> {
        const nodes = Array<Node>();

        const iter = names[Symbol.iterator]();

        const loadNext = (): MaybePromise<Node[]> => {
            const { value, done } = iter.next();
            if (done) {
                return nodes;
            }
            return MaybePromise.then(
                () => this.#options.get(value),
                node => {
                    nodes.push(node);
                    return loadNext();
                },
            );
        };

        return loadNext();
    }

    #collectEndpoints(
        nodes: Node[],
        selector: EndpointSelector,
        filter: NodeSet.Filter | undefined,
    ): MaybePromise<Endpoint[]> {
        const endpoints = Array<Endpoint>();
        const isWildcard = selector.node === "*";
        const fabricIndices = this.#resolveFabricFilter(nodes, selector.fabric);

        const iter = nodes[Symbol.iterator]();

        const processNext = (): MaybePromise<Endpoint[]> => {
            const { value: node, done } = iter.next();
            if (done) {
                return endpoints;
            }

            // Resolve endpoints on this node
            const nodeEndpoints = this.#resolveEndpoints(node, selector.endpoint, isWildcard);

            // Also search peers if endpoint selector is non-empty
            const peerEndpoints =
                selector.endpoint !== undefined ? this.#searchPeers(node, selector, fabricIndices) : [];

            return MaybePromise.then(
                () => nodeEndpoints,
                resolved => {
                    endpoints.push(...this.#applyBehaviorFilter(resolved, filter, isWildcard));
                    return MaybePromise.then(
                        () => peerEndpoints,
                        peerResolved => {
                            endpoints.push(...this.#applyBehaviorFilter(peerResolved, filter, true));
                            return processNext();
                        },
                    );
                },
            );
        };

        return processNext();
    }

    #resolveEndpoints(node: Node, endpointSelector: "*" | string[] | undefined, isWildcard: boolean): Endpoint[] {
        if (endpointSelector === undefined) {
            return [node];
        }

        if (endpointSelector === "*") {
            return allEndpoints(node);
        }

        const results = Array<Endpoint>();

        for (const value of endpointSelector) {
            const found = this.#findEndpoint(node, value, isWildcard);

            if (found.length === 0) {
                if (isWildcard) {
                    // Wildcard node: silently skip non-matching
                    continue;
                }
                throw new ImplementationError(`Endpoint "${value}" not found on node "${node.id}"`);
            }

            results.push(...found);
        }

        return results;
    }

    #findEndpoint(node: Node, value: string, isWildcard: boolean): Endpoint[] {
        // @name → device type name match
        if (value.startsWith("@")) {
            const typeName = value.slice(1);
            return allEndpoints(node).filter(ep => ep.type.name.toLowerCase() === typeName.toLowerCase());
        }

        // Numeric → endpoint number
        if (/^\d+$/.test(value)) {
            const num = Number(value);
            const found = allEndpoints(node).filter(ep => ep.maybeNumber === num);
            return found;
        }

        // Bare string on wildcarded node → device type name only (numeric already rejected by parser)
        if (isWildcard) {
            return allEndpoints(node).filter(ep => ep.type.name.toLowerCase() === value.toLowerCase());
        }

        // Bare string on specific node → try endpoint ID first, then device type name
        const byId = allEndpoints(node).filter(ep => ep.maybeId === value);
        if (byId.length > 0) {
            return byId;
        }
        return allEndpoints(node).filter(ep => ep.type.name.toLowerCase() === value.toLowerCase());
    }

    #searchPeers(node: Node, selector: EndpointSelector, fabricIndices?: Set<FabricIndex>): Endpoint[] {
        const peers = nodePeers(node);
        if (peers === undefined) {
            return [];
        }

        const results = Array<Endpoint>();

        for (const peer of peers) {
            // Apply fabric filter for ServerNode peers (ClientNode has peerAddress)
            if (fabricIndices !== undefined && "peerAddress" in peer) {
                const peerAddress = (peer as { peerAddress?: { fabricIndex?: FabricIndex } }).peerAddress;
                if (peerAddress?.fabricIndex !== undefined && !fabricIndices.has(peerAddress.fabricIndex)) {
                    continue;
                }
            }

            const peerEndpoints = this.#resolveEndpoints(peer as Node, selector.endpoint, true);
            results.push(...peerEndpoints);
        }

        return results;
    }

    #resolveFabricFilter(nodes: Node[], fabricSelector: "*" | string[] | undefined): Set<FabricIndex> | undefined {
        if (fabricSelector === undefined || fabricSelector === "*") {
            return undefined;
        }

        // Find a ServerNode to access FabricManager
        let fabricManager: FabricManager | undefined;
        for (const node of nodes) {
            if (node instanceof ServerNode) {
                try {
                    fabricManager = node.env.get(FabricManager);
                    break;
                } catch {
                    // FabricManager not available
                }
            }
        }

        if (fabricManager === undefined) {
            // No FabricManager available (e.g. RemoteNode only) — skip fabric filtering
            return undefined;
        }

        const indices = new Set<FabricIndex>();

        for (const value of fabricSelector) {
            const fabric = resolveFabricValue(fabricManager, value);
            if (fabric !== undefined) {
                indices.add(fabric);
            }
        }

        return indices;
    }

    #applyBehaviorFilter(endpoints: Endpoint[], filter: NodeSet.Filter | undefined, isWildcard: boolean): Endpoint[] {
        if (!filter?.behavior) {
            return endpoints;
        }

        const filtered = endpoints.filter(ep => ep.behaviors.supported[filter.behavior!] !== undefined);

        if (filtered.length === 0 && !isWildcard && endpoints.length > 0) {
            throw new ImplementationError(`No endpoints support behavior "${filter.behavior}"`);
        }

        return filtered;
    }
}

export namespace NodeSet {
    export interface Options {
        /**
         * Look up a node by ID.  Throws if not found.
         */
        get(id: string): MaybePromise<Node>;

        /**
         * Iterate all available node IDs.
         */
        ids(): string[];

        /**
         * The "context" node — used when selector has no explicit node.
         */
        context?: Node;
    }

    export interface Filter {
        /**
         * Only return endpoints that support this behavior (by property name).
         */
        behavior?: string;
    }
}

/**
 * Collect all endpoints depth-first (node + all parts recursively).
 */
function allEndpoints(node: Endpoint): Endpoint[] {
    const result = Array<Endpoint>();
    node.visit(ep => {
        result.push(ep);
    });
    return result;
}

/**
 * Get peers for a node, if it supports them.
 */
function nodePeers(node: Node): Iterable<Endpoint> | undefined {
    if (node instanceof ServerNode) {
        try {
            return node.peers;
        } catch {
            return undefined;
        }
    }

    // RemoteNode peers
    if ("peers" in node) {
        try {
            return (node as { peers: Iterable<Endpoint> }).peers;
        } catch {
            return undefined;
        }
    }

    return undefined;
}

/**
 * Resolve a fabric selector string to a {@link FabricIndex}.
 *
 * - All digits, small value (≤ 254) → FabricIndex
 * - All hex digits, large value → GlobalFabricId
 * - Otherwise → fabric label (case-insensitive)
 */
function resolveFabricValue(fabricManager: FabricManager, value: string): FabricIndex | undefined {
    // Numeric: could be FabricIndex or GlobalFabricId
    if (/^[\da-fA-F]+$/.test(value)) {
        const num = parseInt(value, /[a-fA-F]/.test(value) ? 16 : 10);

        if (!Number.isNaN(num) && /^\d+$/.test(value) && num <= 254) {
            // Small decimal → FabricIndex
            const idx = FabricIndex(num);
            if (fabricManager.has(idx)) {
                return idx;
            }
            return undefined;
        }

        // Large hex → GlobalFabricId
        const globalId = BigInt(`0x${value}`);
        const fabric = fabricManager.find(f => f.globalId === globalId);
        return fabric?.fabricIndex;
    }

    // Label match (case-insensitive)
    const lower = value.toLowerCase();
    const fabric = fabricManager.find(f => f.label.toLowerCase() === lower);
    return fabric?.fabricIndex;
}
