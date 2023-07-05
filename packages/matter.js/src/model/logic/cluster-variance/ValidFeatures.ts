/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { FeatureSet } from "../../definitions/index.js";
import { ClusterModel } from "../../models/index.js";
import { RecordValidator } from "../RecordValidator.js";

export type ValidFeatures = FeatureSet[];

/**
 * Generates a list of FeatureSets that represent all valid feature
 * combinations.
 */
export function ValidFeatures(cluster: ClusterModel): ValidFeatures {
    const features = new FeatureSet(cluster.features.map(f => f.name));

    const valid = [];
    for (const subset of permute(features.array)) {
        const featureSet = new FeatureSet(subset);
        const validator = RecordValidator(cluster.features, featureSet);
        if (validator.validate(featureSet.record).valid) {
            valid.push(featureSet);
        }
    }

    return valid;
}

/**
 * Permutes an array into all combinations of the members.
 */
function permute<T>(array: T[]): T[][] {
    const permutations = Array<T[]>();

    function permute(onto: Array<T>, from: number) {
        for (let i = from; i < array.length; i++) {
            const base = Array(...onto, array[i]);
            permutations.push(base);
            permute(base, i + 1);
        }
    }

    permute(Array<T>(), 0);
    return permutations;
}
