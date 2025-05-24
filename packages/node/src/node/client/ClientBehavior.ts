/**
 * @license
 * Copyright 2022-2025 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ClusterBehavior } from "#behavior/cluster/ClusterBehavior.js";
import type { ClientNetworkRuntime } from "#behavior/system/network/ClientNetworkRuntime.js";
import { NetworkRuntime } from "#behavior/system/network/NetworkRuntime.js";
import { camelize } from "#general";
import { AttributeModel, ClusterModel, CommandModel, FeatureBitmap, Matter } from "#model";
import { Invoke } from "#protocol";
import {
    Attribute,
    AttributeId,
    ClusterId,
    ClusterRegistry,
    ClusterType,
    Command,
    CommandId,
    TlvAny,
    TlvNoResponse,
} from "#types";

const BIT_BLOCK_SIZE = Math.log2(Number.MAX_SAFE_INTEGER);

const cache = {} as Record<string, ClusterBehavior.Type>;

/**
 * Obtain a {@link ClusterBehavior.Type} for a remote cluster.
 */
export function ClientBehavior(shape: ClientBehavior.ClusterShape): ClusterBehavior.Type {
    const analysis = ShapeAnalysis(shape);

    const fingerprint = createFingerprint(analysis);
    let type = cache[fingerprint];
    if (type) {
        return type;
    }

    type = generateType(analysis);
    cache[fingerprint] = type;

    return type;
}

export namespace ClientBehavior {
    export interface ClusterShape {
        id: ClusterId;
        revision: number;
        features: FeatureBitmap;
        attributes: AttributeId[];
        commands: CommandId[];
    }
}

function generateType(shape: ShapeAnalysis): ClusterBehavior.Type {
    let { schema } = shape;
    const { extraAttrs, extraCommands } = shape;

    let cluster = ClusterRegistry.get(shape.schema.id);
    if (!cluster) {
        cluster = ClusterType({ id: schema.id, name: schema.name, revision: schema.revision });
    }

    if (schema.revision !== shape.shape.revision || extraAttrs.size || extraCommands.size) {
        schema = schema.clone();
        cluster = { ...cluster, attributes: { ...cluster.attributes }, commands: { ...cluster.commands } };

        for (const id of extraAttrs) {
            const name = createUnknownName("attr", id);
            cluster.attributes[camelize(name, false)] = Attribute(id, TlvAny);
            schema.children.push(new AttributeModel({ id, name, type: "any" }));
        }

        for (const id of extraCommands) {
            const name = createUnknownName("command", id);
            cluster.commands[camelize(name, false)] = Command(id, TlvAny, 0, TlvNoResponse);
            schema.children.push(new CommandModel({ id, name, type: "any" }));
        }
    }

    const type = ClusterBehavior.for(cluster, schema);

    for (const id of shape.shape.commands) {
        const name = schema.get(CommandModel, id)?.name ?? createUnknownName("command", id);
        type.prototype[camelize(name, false)] = implementCommand(id);
    }

    return type;

    function implementCommand(id: CommandId) {
        return async function (this: ClusterBehavior, payload: unknown) {
            const runtime = this.env.get(NetworkRuntime) as ClientNetworkRuntime;
            return await runtime.interact(async client => {
                for await (const chunk of client.invoke(Invoke(), this.context)) {
                }
            });
        };
    }
}

function createFingerprint(shape: ShapeAnalysis) {
    const fingerprint = [shape.shape.id] as (number | string)[];

    if (shape.extraAttrs.size) {
        fingerprint.push("a", createElementFingerprint(shape.extraAttrs));
    }

    if (shape.extraCommands.size) {
        fingerprint.push("c", createElementFingerprint(shape.extraCommands));
    }

    return fingerprint.join(";");

    function createElementFingerprint(ids: Iterable<number>) {
        const blocks = {} as Record<number, number>;

        for (const id of ids) {
            const block = Math.floor(id / BIT_BLOCK_SIZE);
            blocks[block] = (blocks[block] ?? 0) | (1 << id % BIT_BLOCK_SIZE);
        }

        return Object.entries(blocks)
            .sort(([a], [b]) => a.localeCompare(b))
            .map(([block, map]) => (block ? `${block}:${map}` : map))
            .join(",");
    }
}

function createUnknownName(prefix: string, id: number) {
    return `${prefix}$${id.toString(16)}`;
}

interface ShapeAnalysis {
    schema: ClusterModel & { id: ClusterId };
    shape: ClientBehavior.ClusterShape;
    extraAttrs: Set<number>;
    extraCommands: Set<number>;
}

function ShapeAnalysis(shape: ClientBehavior.ClusterShape): ShapeAnalysis {
    const schema =
        Matter.get(ClusterModel, shape.id) ??
        new ClusterModel({ id: shape.id, name: createUnknownName("Cluster", shape.id), revision: shape.revision });

    const extraAttrs = new Set(shape.attributes);
    for (const attr of schema.attributes) {
        extraAttrs.delete(attr.id as AttributeId);
    }

    const extraCommands = new Set(shape.commands);
    for (const command of schema.commands) {
        extraCommands.delete(command.id as CommandId);
    }

    return {
        schema: schema as ClusterModel & { id: ClusterId },
        shape,
        extraAttrs,
        extraCommands,
    };
}
