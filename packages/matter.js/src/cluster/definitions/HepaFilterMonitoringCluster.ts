/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MutableCluster } from "../mutation/MutableCluster.js";
import { ResourceMonitoring } from "./ResourceMonitoringCluster.js";
import { Identity } from "../../util/Type.js";
import { ClusterRegistry } from "../ClusterRegistry.js";

export namespace HepaFilterMonitoring {
    export const Base = { ...ResourceMonitoring.Base, id: 0x71, name: "HepaFilterMonitoring" }

    /**
     * @see {@link Cluster}
     */
    export const ClusterInstance = MutableCluster(Base);

    /**
     * This alias specializes the semantics of {@link ResourceMonitoring.Cluster}.
     *
     * HepaFilterMonitoringCluster supports optional features that you can enable with the
     * HepaFilterMonitoringCluster.with() factory method.
     */
    export interface Cluster extends Identity<typeof ClusterInstance> {}

    export const Cluster: Cluster = ClusterInstance;

    /**
     * This cluster supports all HepaFilterMonitoring features. It may support illegal feature combinations.
     *
     * If you use this cluster you must manually specify which features are active and ensure the set of active
     * features is legal per the Matter specification.
     */
    export const CompleteInstance = MutableCluster({
        ...ResourceMonitoring.Complete,
        id: 0x71,
        name: "HepaFilterMonitoring"
    });

    export interface Complete extends Identity<typeof CompleteInstance> {}
    export const Complete: Complete = CompleteInstance;
}

export type HepaFilterMonitoringCluster = HepaFilterMonitoring.Cluster;
export const HepaFilterMonitoringCluster = HepaFilterMonitoring.Cluster;
ClusterRegistry.register(HepaFilterMonitoring.Complete);
