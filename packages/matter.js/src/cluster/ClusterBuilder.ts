/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { BitSchema, TypeFromPartialBitSchema } from "../schema/index.js";
import { FilteredPluck, MergeAll } from "../util/Type.js";
import { Attributes, Cluster, Commands, Events } from "./Cluster.js";

export type ClusterElements = {
    attributes?: Attributes,
    commands?: Commands,
    events?: Events
};

export type BuildCluster<
    F extends BitSchema,
    SF extends TypeFromPartialBitSchema<F>,
    E extends ClusterElements[]
> = Cluster<
    F,
    SF,
    MergeAll<FilteredPluck<"attributes", E>>,
    MergeAll<FilteredPluck<"commands", E>>,
    MergeAll<FilteredPluck<"events", E>>
>;

export type BuildClusterDefinition<
    F extends BitSchema,
    SF extends TypeFromPartialBitSchema<F>,
    E extends ClusterElements[]
> = {
    id: number,
    name: string,
    revision: number,
    features?: F,
    supportedFeatures?: SF,
    elements: E
};

export function BuildCluster<
    F extends BitSchema,
    SF extends TypeFromPartialBitSchema<F>,
    E extends ClusterElements[]
>({ id, name, revision, features, supportedFeatures, elements}: BuildClusterDefinition<F, SF, E>) {
    return Cluster({
        id,
        name,
        revision,
        features,
        supportedFeatures,
        attributes: MergeAll(...FilteredPluck("attributes", ...elements)),
        commands: MergeAll(...FilteredPluck("commands", ...elements)),
        events: MergeAll(...FilteredPluck("events", ...elements))
    });
}
