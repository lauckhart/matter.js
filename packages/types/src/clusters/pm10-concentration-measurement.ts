/**
 * @license
 * Copyright 2022-2026 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MutableCluster } from "../cluster/mutation/MutableCluster.js";
import { ConcentrationMeasurement } from "./concentration-measurement.js";
import { Identity } from "@matter/general";
import { ClusterRegistry } from "../cluster/ClusterRegistry.js";
import { ClusterNamespace } from "../cluster/ClusterNamespace.js";
import { Pm10ConcentrationMeasurement as Pm10ConcentrationMeasurementModel } from "@matter/model";
import { ClusterId } from "../datatype/ClusterId.js";

export namespace Pm10ConcentrationMeasurement {
    export interface Attributes {
        measurementMedium: ConcentrationMeasurement.MeasurementMedium;
        measuredValue: number | null;
        minMeasuredValue: number | null;
        maxMeasuredValue: number | null;
        measurementUnit: ConcentrationMeasurement.MeasurementUnit;
        uncertainty: number;
        peakMeasuredValue: number | null;
        peakMeasuredValueWindow: number;
        averageMeasuredValue: number | null;
        averageMeasuredValueWindow: number;
        levelValue: ConcentrationMeasurement.LevelValue;
    }

    export namespace Attributes {
        export type Components = [
            { flags: {}, mandatory: "measurementMedium" },
            {
                flags: { numericMeasurement: true },
                mandatory: "measuredValue" | "minMeasuredValue" | "maxMeasuredValue" | "measurementUnit",
                optional: "uncertainty"
            },
            { flags: { peakMeasurement: true }, mandatory: "peakMeasuredValue" | "peakMeasuredValueWindow" },
            { flags: { averageMeasurement: true }, mandatory: "averageMeasuredValue" | "averageMeasuredValueWindow" },
            { flags: { levelIndication: true }, mandatory: "levelValue" }
        ];
    }

    export type Features = "NumericMeasurement" | "LevelIndication" | "MediumLevel" | "CriticalLevel" | "PeakMeasurement" | "AverageMeasurement";

    export const Base = { ...ConcentrationMeasurement.Base, id: 0x42d, name: "Pm10ConcentrationMeasurement" } as const;

    /**
     * @see {@link Cluster}
     */
    export const ClusterInstance = MutableCluster.ExtensibleOnly(Base);

    /**
     * This alias specializes the semantics of {@link ConcentrationMeasurement.Base}.
     *
     * Per the Matter specification you cannot use {@link Pm10ConcentrationMeasurementCluster} without enabling certain
     * feature combinations. You must use the {@link with} factory method to obtain a working cluster.
     */
    export interface Cluster extends Identity<typeof ClusterInstance> {}

    export const Cluster: Cluster = ClusterInstance;

    /**
     * This cluster supports all Pm10ConcentrationMeasurement features. It may support illegal feature combinations.
     *
     * If you use this cluster you must manually specify which features are active and ensure the set of active features
     * is legal per the Matter specification.
     */
    export const CompleteInstance = MutableCluster({
        ...ConcentrationMeasurement.Complete,
        id: 0x42d,
        name: "Pm10ConcentrationMeasurement"
    });

    export interface Complete extends Identity<typeof CompleteInstance> {}
    export const Complete: Complete = CompleteInstance;
    export const id = ClusterId(0x42d);
    export const revision = 1;
    export declare const attributes: ClusterNamespace.Attributes<Attributes>;
    export declare const features: ClusterNamespace.Features<Features>;
}

export type Pm10ConcentrationMeasurementCluster = Pm10ConcentrationMeasurement.Cluster;
export const Pm10ConcentrationMeasurementCluster = Pm10ConcentrationMeasurement.Cluster;
ClusterRegistry.register(Pm10ConcentrationMeasurement.Complete);
ClusterNamespace.define(Pm10ConcentrationMeasurement, Pm10ConcentrationMeasurementModel);
export interface Pm10ConcentrationMeasurement extends ClusterNamespace { Attributes: Pm10ConcentrationMeasurement.Attributes & { Components: Pm10ConcentrationMeasurement.Attributes.Components }; Features: Pm10ConcentrationMeasurement.Features }
