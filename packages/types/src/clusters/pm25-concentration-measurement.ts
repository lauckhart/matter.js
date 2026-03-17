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
import { ClusterNamespace, ClusterNamespaceTyping } from "../cluster/ClusterNamespace.js";
import { Pm25ConcentrationMeasurement as Pm25ConcentrationMeasurementModel } from "@matter/model";
import { ClusterId } from "../datatype/ClusterId.js";

export namespace Pm25ConcentrationMeasurement {
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

    export const Base = { ...ConcentrationMeasurement.Base, id: 0x42a, name: "Pm25ConcentrationMeasurement" } as const;

    /**
     * @see {@link Cluster}
     */
    export const ClusterInstance = MutableCluster.ExtensibleOnly(Base);

    /**
     * This alias specializes the semantics of {@link ConcentrationMeasurement.Base}.
     *
     * Per the Matter specification you cannot use {@link Pm25ConcentrationMeasurementCluster} without enabling certain
     * feature combinations. You must use the {@link with} factory method to obtain a working cluster.
     */
    export interface Cluster extends Identity<typeof ClusterInstance> {}

    export const Cluster: Cluster = ClusterInstance;

    /**
     * This cluster supports all Pm25ConcentrationMeasurement features. It may support illegal feature combinations.
     *
     * If you use this cluster you must manually specify which features are active and ensure the set of active features
     * is legal per the Matter specification.
     */
    export const CompleteInstance = MutableCluster({
        ...ConcentrationMeasurement.Complete,
        id: 0x42a,
        name: "Pm25ConcentrationMeasurement"
    });

    export interface Complete extends Identity<typeof CompleteInstance> {}
    export const Complete: Complete = CompleteInstance;
    export const id = ClusterId(0x42a);
    export const name = "Pm25ConcentrationMeasurement" as const;
    export const revision = 1;
    export const schema = Pm25ConcentrationMeasurementModel;
    export declare const attributes: ClusterNamespace.Attributes<Attributes>;
    export declare const features: ClusterNamespace.Features<Features>;
    export declare const Typing: Pm25ConcentrationMeasurement;
}

export type Pm25ConcentrationMeasurementCluster = Pm25ConcentrationMeasurement.Cluster;
export const Pm25ConcentrationMeasurementCluster = Pm25ConcentrationMeasurement.Cluster;
ClusterRegistry.register(Pm25ConcentrationMeasurement.Complete);
ClusterNamespace.define(Pm25ConcentrationMeasurement);
export interface Pm25ConcentrationMeasurement extends ClusterNamespaceTyping { Attributes: Pm25ConcentrationMeasurement.Attributes & { Components: Pm25ConcentrationMeasurement.Attributes.Components }; Features: Pm25ConcentrationMeasurement.Features }
