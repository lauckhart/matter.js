/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { FeatureSet } from "../definitions/FeatureSet.js";
import { DataModel } from "../index.js";
import { Validator } from "./record-validation/Validator.js";
import { ValidatorImplementation } from "./record-validation/ValidatorImplementation.js";

/**
 * Creates a utility object that can validate records based on a model.
 * 
 * TODO - doesn't currently recurse into children
 * 
 * @param fields defines the record to test
 * @param features active features
 * 
 * @return a Validator
 */
export function RecordValidator(fields: DataModel[], features: FeatureSet): Validator {
    return new ValidatorImplementation(fields, features);
}
