/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MutableCluster } from "../../cluster/mutation/MutableCluster.js";
import { LevelControl } from "./LevelControlCluster.js";
import { Identity } from "../../util/Type.js";
import { ClusterRegistry } from "../../cluster/ClusterRegistry.js";

export namespace PulseWidthModulation {
    /**
     * @see {@link Cluster}
     */
    export const ClusterInstance = MutableCluster({
        ...LevelControl.Cluster,
        id: 0x1c,
        supportedFeatures: { onOff: true }
    })

    /**
     * This alias specializes the semantics of {@link LevelControl.Cluster}.
     *
     * PulseWidthModulationCluster supports optional features that you can enable with the
     * PulseWidthModulationCluster.with() factory method.
     */
    export interface Cluster extends Identity<typeof ClusterInstance> {}

    export const Cluster: Cluster = ClusterInstance;

    /**
     * This cluster supports all PulseWidthModulation features. It may support illegal feature combinations.
     *
     * If you use this cluster you must manually specify which features are active and ensure the set of active
     * features is legal per the Matter specification.
     */
    export const CompleteInstance = MutableCluster({ ...LevelControl.Complete, id: 0x1c });

    export interface Complete extends Identity<typeof CompleteInstance> {}

    export const Complete: Complete = CompleteInstance;
}

export type PulseWidthModulationCluster = PulseWidthModulation.Cluster;
export const PulseWidthModulationCluster = PulseWidthModulation.Cluster;
ClusterRegistry.register(PulseWidthModulation.Complete);
