/**
 * @license
 * Copyright 2022-2026 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MutableCluster } from "../cluster/mutation/MutableCluster.js";
import { ResourceMonitoring } from "./resource-monitoring.js";
import { Identity, MaybePromise } from "@matter/general";
import { ClusterRegistry } from "../cluster/ClusterRegistry.js";
import { ClusterNamespace } from "../cluster/ClusterNamespace.js";
import { ActivatedCarbonFilterMonitoring as ActivatedCarbonFilterMonitoringModel } from "@matter/model";
import { ClusterId } from "../datatype/ClusterId.js";

export namespace ActivatedCarbonFilterMonitoring {
    export interface Attributes {
        changeIndication: ResourceMonitoring.ChangeIndication;
        inPlaceIndicator: boolean;
        lastChangedTime: number | null;
        condition: number;
        degradationDirection: ResourceMonitoring.DegradationDirection;
        replacementProductList: ResourceMonitoring.ReplacementProduct[];
    }

    export namespace Attributes {
        export type Components = [
            { flags: {}, mandatory: "changeIndication", optional: "inPlaceIndicator" | "lastChangedTime" },
            { flags: { condition: true }, mandatory: "condition" | "degradationDirection" },
            { flags: { replacementProductList: true }, mandatory: "replacementProductList" }
        ];
    }

    export interface Commands extends Commands.Base {}

    export namespace Commands {
        export interface Base {
            /**
             * Upon receipt, the device shall reset the Condition and ChangeIndicator attributes, indicating full
             * resource availability and readiness for use, as initially configured. Invocation of this command may
             * cause the LastChangedTime to be updated automatically based on the clock of the server, if the server
             * supports setting the attribute.
             *
             * @see {@link MatterSpecification.v142.Cluster} § 2.8.7.1
             */
            resetCondition(): MaybePromise;
        }

        export type Components = [{ flags: {}, methods: Base }];
    }

    export type Features = "Condition" | "Warning" | "ReplacementProductList";

    export const Base = { ...ResourceMonitoring.Base, id: 0x72, name: "ActivatedCarbonFilterMonitoring" } as const;

    /**
     * @see {@link Cluster}
     */
    export const ClusterInstance = MutableCluster(Base);

    /**
     * This alias specializes the semantics of {@link ResourceMonitoring.Base}.
     *
     * ActivatedCarbonFilterMonitoringCluster supports optional features that you can enable with the
     * ActivatedCarbonFilterMonitoringCluster.with() factory method.
     */
    export interface Cluster extends Identity<typeof ClusterInstance> {}

    export const Cluster: Cluster = ClusterInstance;

    /**
     * This cluster supports all ActivatedCarbonFilterMonitoring features. It may support illegal feature combinations.
     *
     * If you use this cluster you must manually specify which features are active and ensure the set of active features
     * is legal per the Matter specification.
     */
    export const CompleteInstance = MutableCluster({
        ...ResourceMonitoring.Complete,
        id: 0x72,
        name: "ActivatedCarbonFilterMonitoring"
    });

    export interface Complete extends Identity<typeof CompleteInstance> {}
    export const Complete: Complete = CompleteInstance;
    export const id = ClusterId(0x72);
    export const revision = 1;
    export declare const attributes: ClusterNamespace.Attributes<Attributes>;
    export declare const commands: ClusterNamespace.Commands<Commands>;
    export declare const features: ClusterNamespace.Features<Features>;
}

export type ActivatedCarbonFilterMonitoringCluster = ActivatedCarbonFilterMonitoring.Cluster;
export const ActivatedCarbonFilterMonitoringCluster = ActivatedCarbonFilterMonitoring.Cluster;
ClusterRegistry.register(ActivatedCarbonFilterMonitoring.Complete);
ClusterNamespace.define(ActivatedCarbonFilterMonitoring, ActivatedCarbonFilterMonitoringModel);
export interface ActivatedCarbonFilterMonitoring extends ClusterNamespace { Attributes: ActivatedCarbonFilterMonitoring.Attributes & { Components: ActivatedCarbonFilterMonitoring.Attributes.Components }; Commands: ActivatedCarbonFilterMonitoring.Commands & { Components: ActivatedCarbonFilterMonitoring.Commands.Components }; Features: ActivatedCarbonFilterMonitoring.Features }
