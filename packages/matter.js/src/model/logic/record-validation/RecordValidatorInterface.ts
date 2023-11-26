/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { DefinitionError } from "../../definitions/index.js";

/**
 * The result of validation.
 */
export interface RecordValidationResult {
    valid: boolean;
    errors?: DefinitionError[];
}

/**
 * Record validation API.  This validates an object such as a struct or cluster
 * attributes.
 * 
 * We perform validation at this level because validation may involve
 * cross-field dependencies.
 */
export interface RecordValidator {
    validate(record: Record<string, any>): RecordValidationResult;
    logFailure(): void;
}
