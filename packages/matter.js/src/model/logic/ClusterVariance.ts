/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ClusterModel } from "../models/index.js";
import { IllegalFeatureCombinations } from "./cluster-variance/IllegalFeatureCombinations.js";
import { InferredComponents } from "./cluster-variance/InferredComponents.js";
import { NamedComponents } from "./cluster-variance/NamedComponents.js";

/**
 * Defines different variants of clusters.
 */
export type ClusterVariance = {
    /**
     * True iff the cluster has optional components.
     */
    componentized: boolean,

    /**
     * All components with name and documentation.
     */
    components: NamedComponents,

    /**
     * Illegal feature combinations as bit flags.
     */
    illegal: IllegalFeatureCombinations
};

/**
 * Analyzes a cluster to determine components, component names and feature
 * flag -> component mapping. 
 */
export function ClusterVariance(cluster: ClusterModel): ClusterVariance {
    const inferredComponents = InferredComponents(cluster);
    const components = NamedComponents(cluster, inferredComponents);
    const illegal = IllegalFeatureCombinations(cluster);

    return {
        componentized: components.length > 1,
        components,
        illegal
    }
}
