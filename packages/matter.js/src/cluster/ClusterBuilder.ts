/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { BitSchema, TypeFromPartialBitSchema } from "../schema/index.js"
import { Attribute, Attributes, Cluster, Commands, Events } from "./Cluster.js"

export type ClusterElements = {
    attributes: Attributes,
    commands: Commands,
    events: Events
};

export type Concat<T> = T extends [ infer E, ...infer R ]
    ? E extends any[] ? [ ...E, Concat<R> ] : E
    : T;

export type MergedElements<E extends []> = 

export type BuildCluster<
    F extends BitSchema,
    E extends ClusterElements[]
> = Cluster<
    F,
    TypeFromPartialBitSchema<F>,
    MergedElements<E[0]["attributes"]>,
    MergedElements<E[0]["commands"]>,
    MergedElements<E[0]["events"]>
>;
