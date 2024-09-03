/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MutableCluster } from "../mutation/MutableCluster.js";
import { ConcentrationMeasurement } from "./ConcentrationMeasurementCluster.js";
import { Identity } from "@project-chip/matter.js-general";
import { ClusterRegistry } from "../ClusterRegistry.js";

export namespace CarbonMonoxideConcentrationMeasurement {
    export const Base = {
        ...ConcentrationMeasurement.Base,
        id: 0x40c,
        name: "CarbonMonoxideConcentrationMeasurement"
    } as const;

    /**
     * @see {@link Cluster}
     */
    export const ClusterInstance = MutableCluster.ExtensibleOnly(Base);

    /**
     * This alias specializes the semantics of {@link ConcentrationMeasurement.Base}.
     *
     * Per the Matter specification you cannot use {@link CarbonMonoxideConcentrationMeasurementCluster} without
     * enabling certain feature combinations. You must use the {@link with} factory method to obtain a working cluster.
     */
    export interface Cluster extends Identity<typeof ClusterInstance> {}

    export const Cluster: Cluster = ClusterInstance;

    /**
     * This cluster supports all CarbonMonoxideConcentrationMeasurement features. It may support illegal feature
     * combinations.
     *
     * If you use this cluster you must manually specify which features are active and ensure the set of active
     * features is legal per the Matter specification.
     */
    export const CompleteInstance = MutableCluster({
        ...ConcentrationMeasurement.Complete,
        id: 0x40c,
        name: "CarbonMonoxideConcentrationMeasurement"
    });

    export interface Complete extends Identity<typeof CompleteInstance> {}
    export const Complete: Complete = CompleteInstance;
}

export type CarbonMonoxideConcentrationMeasurementCluster = CarbonMonoxideConcentrationMeasurement.Cluster;
export const CarbonMonoxideConcentrationMeasurementCluster = CarbonMonoxideConcentrationMeasurement.Cluster;
ClusterRegistry.register(CarbonMonoxideConcentrationMeasurement.Complete);
