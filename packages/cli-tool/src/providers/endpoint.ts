/**
 * @license
 * Copyright 2022-2026 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { CliCommand } from "#cli-command.js";
import { DomainCommand } from "#globals.js";
import { Directory, Stat } from "#stat.js";
import { CommandModel, ElementTag, Scope } from "@matter/model";
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

const commandCache = new WeakMap<Behavior, Map<string, DomainCommand>>();

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

            const member = (behavior as unknown as Record<string, unknown>)[path];
            if (typeof member !== "function") {
                return member;
            }

            const commandModel = findCommandModel(behavior, path);
            if (commandModel) {
                let cache = commandCache.get(behavior);
                if (!cache) {
                    cache = new Map();
                    commandCache.set(behavior, cache);
                }

                let wrapped = cache.get(path);
                if (!wrapped) {
                    wrapped = CliCommand.forBehavior({
                        method: member,
                        behavior,
                        schema: commandModel,
                        name: path,
                    });
                    cache.set(path, wrapped);
                }
                return wrapped;
            }

            return member;
        },
    });
});

/**
 * Derive navigable paths for a behavior from its schema: commands, events, and state.
 */
function behaviorPaths(behavior: Behavior): string[] {
    const paths = Array<string>();
    const schema = (behavior.constructor as Behavior.Type).supervisor?.schema;

    if (schema) {
        const scope = Scope(schema);

        for (const command of scope.membersOf(schema, {
            tags: [ElementTag.Command],
            conformance: "conformant",
        })) {
            if ((command as CommandModel).isRequest) {
                paths.push(command.propertyName);
            }
        }

        for (const event of scope.membersOf(schema, {
            tags: [ElementTag.Event],
            conformance: "conformant",
        })) {
            paths.push(event.propertyName);
        }
    }

    paths.push("state");
    paths.push("events");

    return paths;
}

/**
 * Find the {@link CommandModel} for a named method on a behavior.
 */
function findCommandModel(behavior: Behavior, name: string): CommandModel | undefined {
    const schema = (behavior.constructor as Behavior.Type).supervisor?.schema;

    if (!schema) {
        return;
    }

    const commands = Scope(schema).membersOf(schema, {
        tags: [ElementTag.Command],
        conformance: "conformant",
    });

    const command = commands(name) as CommandModel | undefined;
    if (command?.isRequest) {
        return command;
    }
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
