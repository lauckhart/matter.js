/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ImplementationError } from "../../../common/MatterError.js";
import { ValueModel } from "../../../model/index.js";
import { StatusResponseError } from "../../../protocol/interaction/InteractionMessenger.js";
import { StatusCode } from "../../../protocol/interaction/InteractionProtocol.js";
import { Schema } from "../Schema.js";

/**
 * Errors thrown by state I/O.
 */
export class IoError extends StatusResponseError {
    constructor(prefix: string, schema: Schema, message: string, code: StatusCode) {
        super(
            `${prefix} ${schema.path}: ${message}`,
            code
        );
    }
}

export namespace IoError {
    /**
     * Thrown when datatypes are invalid.
     */
    export class ValidationError extends IoError {
        constructor(schema: Schema, message: string, code?: StatusCode) {
            super("Validating", schema, message, code ?? StatusCode.InvalidDataType);
        }
    }

    /**
     * Thrown when constraint is violated.
     */
    export class ConstraintError extends ValidationError {
        constructor(schema: Schema, message: string) {
            super(
                schema,
                ` constraint "${(schema as ValueModel).constraint}": ${message}`,
                StatusCode.ConstraintError,
            )
        }
    }

    /**
     * Thrown when conformance is violated.
     */
    export class ConformanceError extends ValidationError {
        constructor(schema: Schema, message: string) {
            super(
                schema,
                ` conformance "${(schema as ValueModel).conformance}": ${message}`,
                StatusCode.InvalidAction,
            )
        }
    }

    /**
     * Thrown when conformance is violated.
     */

    /**
     * Thrown for invalid reads.
     */
    export class ReadError extends IoError {
        constructor(schema: Schema, message: string, code?: StatusCode) {
            super("Reading", schema, message, code ?? StatusCode.UnsupportedRead);
        }
    }

    /**
     * Thrown for invalid writes.
     */
    export class WriteError extends IoError {
        constructor(schema: Schema, message: string, code?: StatusCode) {
            super("Writing", schema, message, code ?? StatusCode.UnsupportedWrite);
        }
    }

    /**
     * Thrown for issues with metadata definitions or related data that are
     * a local (vs network client) problem.
     */
    export class SchemaError extends ImplementationError {
        constructor(schema: Schema, message: string) {
            super(`Path ${schema.path}: ${message}`);
        }
    }
}
