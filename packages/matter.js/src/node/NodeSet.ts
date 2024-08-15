/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Lifecycle } from "../common/Lifecycle.js";
import { Environment } from "../environment/Environment.js";
import { Environmental } from "../environment/Environmental.js";
import { BasicSet } from "../util/Set.js";
import { ClientNode } from "./ClientNode.js";
import { Node } from "./Node.js";
import { ServerNode } from "./ServerNode.js";

/**
 * A set of nodes.
 *
 * Nodes implemented in this process are {@link NodeServer}s.  Nodes implemented in other processes are
 * {@link NodeClient}s.
 */
export class NodeSet extends BasicSet<Node> {
    #env: Environment;

    constructor(env = Environment.default) {
        super();

        if (!env.has(NodeSet)) {
            env.set(NodeSet, this);
        }

        this.#env = env;

        this.added.on(this.#nodeAdded.bind(this));
    }

    [Environmental.create](env: Environment) {
        return new NodeSet(env);
    }

    get env() {
        return this.#env;
    }

    /**
     * Local nodes.
     */
    get servers() {
        return [...this].filter(node => node instanceof ServerNode);
    }

    /**
     * Remote nodes.
     */
    get clients() {
        return [...this].filter(node => node instanceof ClientNode);
    }

    /**
     * Remote nodes that are commissionable.
     */
    get commissionable() {
        return this.clients.filter(node => !node.lifecycle.isCommissioned);
    }

    /**
     * Register listeners to automatically delete the node if destroyed.
     */
    #nodeAdded(node: Node) {
        const onDelete = (deleted: Node) => {
            if (deleted !== node) {
                return;
            }

            node.construction.change.off(onChange);
            this.deleted.off(onDelete);
        };
        this.deleted.on(onDelete);

        const onChange = (status: Lifecycle.Status, node: Node) => {
            if (status !== Lifecycle.Status.Destroyed) {
                return;
            }
            this.delete(node);
        };

        node.construction.change.on(onChange);
    }
}
