/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { BitSchema } from "../schema/index.js";
import { FilteredPluck, MergeAll } from "../util/Type.js";
import { Attributes, Cluster, Commands, Events } from "./Cluster.js";

export type ClusterElements = {
    attributes?: Attributes,
    commands?: Commands,
    events?: Events
};

/*
export type BuildCluster<
    F extends BitSchema,
    E extends ClusterElements[]
> = Cluster<
    F,
    TypeFromPartialBitSchema<F>,
    MergeAll<FilteredPluck<"attributes", E>>,
    MergeAll<FilteredPluck<"commands", E>>,
    MergeAll<FilteredPluck<"events", E>>
>;
*/

export function BuildCluster<
    F extends BitSchema,
    E extends ClusterElements[]
>(
    id: number,
    name: string,
    revision: number,
    features: F,
    elements: E
 ) {
    return Cluster({
        id,
        name,
        revision,
        features,
        attributes: MergeAll(...FilteredPluck("attributes", ...elements)),
        commands: MergeAll(...FilteredPluck("commands", ...elements)),
        events: MergeAll(...FilteredPluck("events", ...elements))
    });
}
