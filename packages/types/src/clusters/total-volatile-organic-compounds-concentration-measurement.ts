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
import {
    TotalVolatileOrganicCompoundsConcentrationMeasurement as TotalVolatileOrganicCompoundsConcentrationMeasurementModel
} from "@matter/model";
import { ClusterId } from "../datatype/ClusterId.js";

export namespace TotalVolatileOrganicCompoundsConcentrationMeasurement {
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

    export const Base = {
        ...ConcentrationMeasurement.Base,
        id: 0x42e,
        name: "TotalVolatileOrganicCompoundsConcentrationMeasurement"
    } as const;

    /**
     * @see {@link Cluster}
     */
    export const ClusterInstance = MutableCluster.ExtensibleOnly(Base);

    /**
     * This alias specializes the semantics of {@link ConcentrationMeasurement.Base}.
     *
     * Per the Matter specification you cannot use {@link TotalVolatileOrganicCompoundsConcentrationMeasurementCluster}
     * without enabling certain feature combinations. You must use the {@link with} factory method to obtain a working
     * cluster.
     */
    export interface Cluster extends Identity<typeof ClusterInstance> {}

    export const Cluster: Cluster = ClusterInstance;

    /**
     * This cluster supports all TotalVolatileOrganicCompoundsConcentrationMeasurement features. It may support illegal
     * feature combinations.
     *
     * If you use this cluster you must manually specify which features are active and ensure the set of active features
     * is legal per the Matter specification.
     */
    export const CompleteInstance = MutableCluster({
        ...ConcentrationMeasurement.Complete,
        id: 0x42e,
        name: "TotalVolatileOrganicCompoundsConcentrationMeasurement"
    });

    export interface Complete extends Identity<typeof CompleteInstance> {}
    export const Complete: Complete = CompleteInstance;
    export const id = ClusterId(0x42e);
    export const name = "TotalVolatileOrganicCompoundsConcentrationMeasurement" as const;
    export const revision = 1;
    export const schema = TotalVolatileOrganicCompoundsConcentrationMeasurementModel;
    export declare const attributes: ClusterNamespace.Attributes<Attributes>;
    export declare const features: ClusterNamespace.Features<Features>;
    export declare const Typing: TotalVolatileOrganicCompoundsConcentrationMeasurement;
}

export type TotalVolatileOrganicCompoundsConcentrationMeasurementCluster = TotalVolatileOrganicCompoundsConcentrationMeasurement.Cluster;
export const TotalVolatileOrganicCompoundsConcentrationMeasurementCluster = TotalVolatileOrganicCompoundsConcentrationMeasurement.Cluster;
ClusterRegistry.register(TotalVolatileOrganicCompoundsConcentrationMeasurement.Complete);
ClusterNamespace.define(TotalVolatileOrganicCompoundsConcentrationMeasurement);
export interface TotalVolatileOrganicCompoundsConcentrationMeasurement extends ClusterNamespaceTyping { Attributes: TotalVolatileOrganicCompoundsConcentrationMeasurement.Attributes & { Components: TotalVolatileOrganicCompoundsConcentrationMeasurement.Attributes.Components }; Features: TotalVolatileOrganicCompoundsConcentrationMeasurement.Features }
