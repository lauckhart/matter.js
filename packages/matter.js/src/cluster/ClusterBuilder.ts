/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { BitSchema, TypeFromPartialBitSchema } from "../schema/index.js";
import { TlvUInt16 } from "../tlv/TlvNumber.js";
import { FilteredPluck, MergeAll, Properties } from "../util/Type.js";
import { Attribute, Attributes, Cluster, Commands, Events } from "./Cluster.js";

export type ClusterElements<A extends Attributes, C extends Commands, E extends Events> = {
    readonly attributes?: A,
    readonly commands?: C,
    readonly events?: E
};

export function ClusterElements<A extends Attributes, C extends Commands, E extends Events>(elements: ClusterElements<A, C, E>): ClusterElements<A, C, E> {
    return elements;
}

export type BuildCluster<
    F extends BitSchema,
    SF extends TypeFromPartialBitSchema<F>,
    EL extends readonly ClusterElements<any, any, any>[]
> = Cluster<
    F,
    SF,
    MergeAll<FilteredPluck<"attributes", EL>>,
    MergeAll<FilteredPluck<"commands", EL>>,
    MergeAll<FilteredPluck<"events", EL>>
>;

export type BuildClusterDefinition<
    F extends BitSchema,
    SF extends TypeFromPartialBitSchema<F>,
    EL extends readonly ClusterElements<any, any, any>[]
> = {
    id: number,
    name: string,
    revision: number,
    readonly features?: F,
    readonly supportedFeatures?: SF,
    readonly elements: EL
};

export function BuildCluster<
    F extends BitSchema,
    SF extends TypeFromPartialBitSchema<F>,
    EL extends readonly ClusterElements<any, any, any>[]
>(id: number, name: string, revision: number, features: F, supportedFeatures: SF, ...elements: [ ...EL ]): BuildCluster<F, SF, EL> {
    const attrs = FilteredPluck("attributes", ...elements);
    return Cluster({
        id,
        name,
        revision,
        features,
        supportedFeatures,
        attributes: MergeAll(FilteredPluck("attributes", elements)),
        commands: MergeAll(FilteredPluck("commands", elements)),
        events: MergeAll(FilteredPluck("events", elements))
    });
}

const a = ClusterElements({
    attributes: {
        x: Attribute(1, TlvUInt16)
    }
});

const b = ClusterElements({
    attributes: {
        y: Attribute(2, TlvUInt16)
    }
});

function makeit<T extends readonly Properties[]>(...things: [ ...T ]): FilteredPluck<"attributes", T> {
    const a = FilteredPluck("attributes", ...things);
    const b = MergeAll(a);
    return b;
}

const xy = makeit(a, b);
