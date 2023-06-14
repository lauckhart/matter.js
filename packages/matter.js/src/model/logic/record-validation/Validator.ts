/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { DefinitionError } from "../../index.js";

/**
 * The result of validation.
 */
export interface ValidationResult {
    valid: boolean;
    errors?: DefinitionError[];
}

/**
 * Record validation API.
 */
export interface Validator {
    validate(record: { [name: string]: any }): ValidationResult;
}
