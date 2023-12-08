/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { FeatureSet, ValueModel } from "../../../model/index.js";
import { ValueManager } from "../managed/values/ValueManager.js";
import { astToFunction } from "./conformance-compiler.js";

/**
 * Creates a function that validates a field based on its conformance
 * definition.
 */
export function createConformanceValidator(
    schema: ValueModel,
    featureMap: ValueModel,
    supportedFeatures: FeatureSet,
    nextValidator?: ValueManager.Validate
): ValueManager.Validate | undefined {
    const validate = astToFunction(schema, featureMap, supportedFeatures);

    if (validate) {
        return (value, options) => {
            validate(value, options);
            nextValidator?.(value, options);
        }
    }

    return nextValidator;
}
