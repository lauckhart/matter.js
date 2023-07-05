/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { FeatureSet } from "../../definitions/index.js";
import { NamedComponent, NamedComponents } from "./NamedComponents.js";
import { ValidFeatures } from "./ValidFeatures.js";

/**
 * Associates a set of features with a set of components.
 */
export type ClusterDefinition = {
    features: FeatureSet,
    components: NamedComponent[];
}

/**
 * All valid cluster definitions for a specific cluster.
 */
export type ValidClusters = ClusterDefinition[];

export function ValidClusters(validFeatures: ValidFeatures, components: NamedComponents): ValidClusters {
    return validFeatures.map(features => ({
        features,
        components: components.filter(component => checkApplicability(features, component))
    }));
}

function checkApplicability(features: FeatureSet, component: NamedComponent) {
    const condition = component.condition;

    if (!condition) {
        return true;
    }

    if (condition.not && features.has(condition.not)) {
        return false;
    }

    if (condition.allOf) {
        for (const feature of condition.allOf) {
            if (!features.has(feature)) {
                return false;
            }
        }
    }

    if (condition.anyOf) {
        let foundOne = false;
        for (const feature of condition.anyOf) {
            if (features.has(feature)) {
                foundOne = true;
                break;
            }
        }
        if (!foundOne) {
            return false;
        }
    }

    return true;
}
