/**
 * @license
 * Copyright 2022-2026 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { CliCommand } from "#cli-command.js";
import { DomainCommand } from "#globals.js";
import { Directory, Stat } from "#stat.js";
import { CommandModel, DatatypeModel, ElementTag, FieldModel, Schema, Scope } from "@matter/model";
import type { ActionContext, Peers, ServerNode } from "@matter/node";
import { Behavior, Endpoint } from "@matter/node";
import type { Val } from "@matter/protocol";

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
            if (path === "get") {
                return cachedCommand(behavior, "get", () => createGetCommand(behavior));
            }
            if (path === "set") {
                return cachedCommand(behavior, "set", () => createSetCommand(behavior));
            }

            const member = (behavior as unknown as Record<string, unknown>)[path];
            if (typeof member === "function") {
                const commandModel = findCommandModel(behavior, path);
                if (commandModel) {
                    return cachedCommand(behavior, path, () =>
                        CliCommand.forBehavior({
                            method: member,
                            behavior,
                            schema: commandModel,
                            name: path,
                        }),
                    );
                }
                return member;
            }

            // Attribute-level state access
            return (behavior.state as Val.Struct)[path];
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

        for (const attr of scope.membersOf(schema, {
            tags: [ElementTag.Attribute],
            conformance: "conformant",
        })) {
            paths.push(attr.propertyName);
        }
    }

    paths.push("state");
    paths.push("events");
    paths.push("get");
    paths.push("set");

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

function cachedCommand(behavior: Behavior, name: string, create: () => DomainCommand): DomainCommand {
    let cache = commandCache.get(behavior);
    if (!cache) {
        cache = new Map();
        commandCache.set(behavior, cache);
    }

    let wrapped = cache.get(name);
    if (!wrapped) {
        wrapped = create();
        cache.set(name, wrapped);
    }
    return wrapped;
}

function behaviorSchema(behavior: Behavior): Schema | undefined {
    return (behavior.constructor as Behavior.Type).supervisor?.schema;
}

function createGetCommand(behavior: Behavior): DomainCommand {
    const schema = behaviorSchema(behavior);
    const boolSchema = buildBehaviorBooleanSchema(schema, "get");

    return CliCommand.create({
        name: "get",
        description: "Read behavior state. Without arguments, returns all attributes.",
        schema: boolSchema,
        usage: ["[ATTRIBUTE]", "[--ATTR]...", "+attr,attr,..."],

        invoke(_context: ActionContext, args: never) {
            const { _, ...flags } = args as Val.Struct;
            const positionals = _ as unknown[];

            // Collect selected attributes from flags and positionals
            const selected = Array<string>();
            for (const [key, value] of Object.entries(flags)) {
                if (value === true) {
                    selected.push(key);
                }
            }
            for (const arg of positionals) {
                if (typeof arg === "string") {
                    selected.push(arg);
                }
            }

            if (selected.length === 0) {
                return behavior.state;
            }
            if (selected.length === 1) {
                return (behavior.state as Val.Struct)[selected[0]];
            }

            const result: Val.Struct = {};
            for (const key of selected) {
                result[key] = (behavior.state as Val.Struct)[key];
            }
            return result;
        },
    });
}

function createSetCommand(behavior: Behavior): DomainCommand {
    const schema = behaviorSchema(behavior);

    if (!schema) {
        const command: DomainCommand = function set() {
            throw new Error("No schema available for this behavior");
        };
        command.help = domain => {
            domain.out("\nNo schema available for this behavior.\n\n");
        };
        return command;
    }

    return CliCommand.create({
        name: "set",
        description: schema.description ? `Set attributes: ${schema.description}` : "Set behavior attributes.",
        schema,
        invoke: (_context: ActionContext, args: never) => {
            const { _, ...values } = args as Val.Struct;
            Object.assign(behavior.state, values);
        },
    });
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

/**
 * Build a synthetic boolean schema with one boolean field per conformant attribute/property, plus a rest collector
 * for positional attribute names.
 */
function buildBehaviorBooleanSchema(schema: Schema | undefined, name: string): DatatypeModel {
    const children = Array<FieldModel>();

    if (schema) {
        for (const prop of schema.conformant.properties) {
            children.push(new FieldModel({ name: prop.name, type: "bool" }));
        }
    }

    // Add a rest collector so positional attribute names are accepted
    children.push(new FieldModel({ name: "restArgs", type: "list", constraint: "max 100" }));

    const result = new DatatypeModel({ name, type: "struct" }, ...children);
    result.finalize();
    return result;
}
