/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ClusterModel } from "../models/index.js";
import { InferredComponents } from "./cluster-variance/InferredComponents.js";
import { NamedComponents } from "./cluster-variance/NamedComponents.js";
import { ClusterDefinition, ValidClusters } from "./cluster-variance/ValidClusters.js";
import { ValidFeatures } from "./cluster-variance/ValidFeatures.js";

/**
 * Defines different variants of clusters.
 */
type ClusterVariance = {
    /**
     * True iff the cluster has optional components.
     */
    componentized: boolean,

    /**
     * All components with name and documentation.
     */
    components: NamedComponents,

    /**
     * Feature + component combinations for the cluster.
     */
    clusters: ClusterDefinition[]
};

/**
 * Analyzes a cluster to determine components, component names and feature
 * flag -> component mapping. 
 */
export function ClusterVariance(cluster: ClusterModel): ClusterVariance {
    const inferredComponents = InferredComponents(cluster);
    const components = NamedComponents(cluster, inferredComponents);
    const validFeatures = ValidFeatures(cluster);
    const clusters = ValidClusters(validFeatures, components);

    return {
        componentized: components.length > 1,
        components,
        clusters
    }
}
