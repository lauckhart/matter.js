/**
 * @license
 * Copyright 2022-2025 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ClusterBehavior } from "#behavior/cluster/ClusterBehavior.js";
import { camelize } from "#general";
import { AttributeModel, ClusterModel, CommandModel, FeatureBitmap, Matter } from "#model";
import type { ClientNode } from "#node/ClientNode.js";
import { Node } from "#node/Node.js";
import { Invoke } from "#protocol";
import {
    Attribute,
    AttributeId,
    ClusterId,
    ClusterRegistry,
    ClusterType,
    Command,
    CommandId,
    Status,
    StatusResponseError,
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
        features: FeatureBitmap | number;
        attributes: AttributeId[];
        commands: CommandId[];
    }
}

function generateType(analysis: ShapeAnalysis): ClusterBehavior.Type {
    let { schema } = analysis;
    const { extraAttrs, extraCommands } = analysis;

    let cluster = ClusterRegistry.get(analysis.schema.id) as ClusterType;
    if (!cluster) {
        cluster = ClusterType({ id: schema.id, name: schema.name, revision: schema.revision });
    }

    if (schema.revision !== analysis.shape.revision || extraAttrs.size || extraCommands.size) {
        schema = schema.clone();

        let supportedFeatures = analysis.shape.features;
        if (typeof supportedFeatures === "number") {
            supportedFeatures = cluster.attributes.featureMap.schema.decode(supportedFeatures as any) as FeatureBitmap;
        }

        cluster = {
            ...cluster,
            supportedFeatures,
            attributes: { ...cluster.attributes },
            commands: { ...cluster.commands },
        };

        schema.supportedFeatures = supportedFeatures;

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

    for (const id of analysis.shape.commands) {
        const name = schema.get(CommandModel, id)?.name ?? createUnknownName("command", id);
        const command = cluster.commands[name];
        type.prototype[camelize(name, false)] = implementCommand(command);
    }

    return type;

    function implementCommand(command: ClusterType.Command) {
        return async function (this: ClusterBehavior, fields?: {}) {
            const node = this.env.get(Node) as ClientNode;

            const chunks = node.interaction.invoke(
                Invoke(
                    Invoke.Command<any>({
                        endpoint: this.endpoint,
                        cluster,
                        command,
                        fields,
                    }),
                ),
            );

            for await (const chunk of chunks) {
                for (const entry of chunk) {
                    // TODO - do we need to support multiple data chunks?
                    switch (entry.kind) {
                        case "cmd-status":
                            if (entry.status !== Status.Success) {
                                throw StatusResponseError.create(entry.status, undefined, entry.clusterStatus);
                            }
                            break;

                        case "cmd-response":
                            return command.responseSchema.decodeTlv(entry.data);
                    }
                }
            }
        };
    }
}

function createFingerprint(analysis: ShapeAnalysis) {
    const fingerprint = [analysis.shape.id] as (number | string)[];

    if (analysis.extraAttrs.size) {
        fingerprint.push("a", createElementFingerprint(analysis.extraAttrs));
    }

    if (analysis.extraCommands.size) {
        fingerprint.push("c", createElementFingerprint(analysis.extraCommands));
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
