/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { MatterError } from "../common/MatterError.js";
import { BitSchema, TypeFromPartialBitSchema } from "../schema/BitmapSchema.js";
import { serialize } from "../util/String.js";
import { Attributes, Cluster, Commands, Events } from "./Cluster.js";

export class IllegalClusterError extends MatterError {}

export type ClusterComponent<A extends Attributes, C extends Commands, E extends Events> = {
    readonly attributes: A,
    readonly commands: C,
    readonly events: E
};

export function ClusterComponent<
    A extends Attributes,
    C extends Commands,
    E extends Events
>({
    attributes = {} as A,
    commands = {} as C,
    events = {} as E
}: Partial<ClusterComponent<A, C, E>>): ClusterComponent<A, C, E> {
    return {
        attributes,
        commands,
        events
    };
}

export type ClusterMetadata<F extends BitSchema> = {
    id: number,
    name: string,
    revision: number,
    features: F
}

export function ClusterMetadata<F extends BitSchema>(metadata: ClusterMetadata<F>): ClusterMetadata<F> {
    return metadata;
}

export function extendCluster<F extends BitSchema>(
    cluster: Cluster<F, any, any, any, any>,
    component: ClusterComponent<any, any, any>,
    ...applicableFeatures: TypeFromPartialBitSchema<F>[]
) {
    let applicable = false;
    pool: for (const features of applicableFeatures) {
        for (const k in features) {
            if (cluster.supportedFeatures[k] !== features[k]) {
                continue pool;
            }
        }
        applicable = true;
        break;
    }

    if (!applicable) {
        return;
    }

    if (component.attributes) {
        if (cluster.attributes) {
            cluster.attributes = { ...cluster.attributes, ...component.attributes };
        } else {
            cluster.attributes = component.attributes;
        }
    }

    if (component.commands) {
        if (cluster.commands) {
            cluster.commands = { ...cluster.commands, ...component.commands };
        } else {
            cluster.commands = component.commands;
        }
    }

    if (component.events) {
        if (cluster.events) {
            cluster.events = { ...cluster.events, ...component.events };
        } else {
            cluster.events = component.events;
        }
    }
}

export function preventCluster<F extends BitSchema>(
    cluster: Cluster<F, any, any, any, any>,
    ...illegalFeatureCombinations: TypeFromPartialBitSchema<F>[]
) {
    pool: for (const bitmap of illegalFeatureCombinations) {
        for (const k in bitmap) {
            if (cluster.supportedFeatures[k] !== bitmap[k]) {
                continue pool;
            }
        }
        throw new IllegalClusterError(`Feature combination ${serialize(bitmap)} is disallowed by the Matter specification`);
    }
}
