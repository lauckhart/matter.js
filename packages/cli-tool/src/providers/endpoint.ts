/**
 * @license
 * Copyright 2022-2026 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Directory, Stat } from "#stat.js";
import { camelize } from "@matter/general";
import { type Model, ClusterModel, CommandModel, EventModel } from "@matter/model";
import type { Peers, ServerNode } from "@matter/node";
import { Behavior, Endpoint } from "@matter/node";

const STATIC = new Set(["act", "start", "factoryReset", "run", "set", "visit", "nodes", "parts", "behaviors"]);

const BEHAVIOR_PREFIX = "behavior_";
const PART_PREFIX = "part_";
const NODE_PREFIX = "node_";

Stat.provide(endpoint => {
    if (!isEndpoint(endpoint)) {
        return;
    }

    return Directory({
        definitionAt(path, context) {
            if (STATIC.has(path)) {
                return (endpoint as unknown as Record<string, unknown>)[path];
            }

            const nodes = (endpoint as ServerNode).peers as Peers | undefined;

            if (path.startsWith(BEHAVIOR_PREFIX)) {
                const id = path.slice(BEHAVIOR_PREFIX.length);
                const behaviorType = endpoint.behaviors.supported[id];
                if (behaviorType) {
                    return endpoint.agentFor(context).get(behaviorType);
                }
            } else if (path.startsWith(PART_PREFIX)) {
                const id = path.slice(PART_PREFIX.length);
                const part = endpoint.parts.get(id);
                if (part) {
                    return part;
                }
            } else if (nodes && path.startsWith(NODE_PREFIX)) {
                const id = path.slice(NODE_PREFIX.length);
                const node = nodes.get(id);
                if (node) {
                    return node;
                }
            }

            const behaviorType = endpoint.behaviors.supported[path];
            if (behaviorType) {
                return endpoint.agentFor(context).get(behaviorType);
            }

            const part = endpoint.parts.get(path);
            if (part) {
                return part;
            }

            const node = nodes?.get(path);
            if (node) {
                return node;
            }
        },

        paths() {
            if (!endpoint.lifecycle.isPartsReady) {
                return endpoint.construction.then(listPaths);
            }

            return listPaths(endpoint);
        },
    });
});

function isEndpoint(item: unknown): item is Endpoint {
    return item instanceof Endpoint;
}

/**
 * Stat provider for {@link Behavior} instances.
 *
 * Enumerates commands, events, and state from the behavior's schema so that `paths` and `definitionAt` stay in sync.
 */
Stat.provide(behavior => {
    if (!(behavior instanceof Behavior)) {
        return;
    }

    const names = behaviorPaths(behavior);

    return Directory({
        tag: "behavior",

        paths() {
            return names;
        },

        definitionAt(path) {
            if (!names.includes(path)) {
                return;
            }
            if (path === "state") {
                return behavior.state;
            }
            if (path === "events") {
                return behavior.events;
            }
            return (behavior as unknown as Record<string, unknown>)[path];
        },
    });
});

/**
 * Derive navigable paths for a behavior from its schema: commands, events, and state.
 */
function behaviorPaths(behavior: Behavior): string[] {
    const paths = Array<string>();
    const schema = (behavior.constructor as Behavior.Type).supervisor?.schema;

    if (schema instanceof ClusterModel) {
        for (const command of schema.conformant.commands) {
            paths.push(camelize(command.name));
        }
        for (const event of schema.conformant.events) {
            paths.push(camelize(event.name));
        }
    } else if (schema) {
        for (const child of schema.children as Iterable<Model>) {
            if (child instanceof CommandModel) {
                paths.push(camelize(child.name));
            } else if (child instanceof EventModel) {
                paths.push(camelize(child.name));
            }
        }
    }

    paths.push("state");
    paths.push("events");

    return paths;
}

function listPaths(endpoint: Endpoint) {
    const paths = new Set<string>();

    for (const command of STATIC) {
        if ((endpoint as any)[command] !== undefined) {
            paths.add(command);
        }
    }

    for (const basename in endpoint.behaviors.supported) {
        if (paths.has(basename)) {
            continue;
        }
        paths.add(basename);
    }

    for (const part of endpoint.parts) {
        let basename = part.id;
        if (paths.has(basename)) {
            basename = `${PART_PREFIX}${basename}`;
        }
        paths.add(basename);
    }

    const peers = (endpoint as ServerNode).peers;
    if (peers !== undefined) {
        for (const node of peers) {
            let basename = node.id;
            if (paths.has(basename)) {
                basename = `${NODE_PREFIX}${basename}`;
            }
            paths.add(basename);
        }
    }

    return [...paths];
}
