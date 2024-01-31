/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ValueModel } from "../model/index.js";
import { StatusCode, StatusResponseError } from "../protocol/interaction/StatusCode.js";
import { Schema } from "./supervision/Schema.js";
import { SchemaPath } from "./supervision/SchemaPath.js";

export type SchemaErrorPath = (SchemaPath & { path?: undefined }) | { path: SchemaPath };

/**
 * Thrown due to schema violations.
 */
export class SchemaViolationError extends StatusResponseError {
    constructor(prefix: string, path: SchemaErrorPath, message: string, code: StatusCode) {
        const text = `${prefix} ${path.path ?? path}: ${message} (${code})`;
        super(text, code);

        // Remove default status code injection
        this.message = text;
    }
}

/**
 * Thrown for invalid reads.
 */
export class ReadError extends SchemaViolationError {
    constructor(path: SchemaErrorPath, message: string, code?: StatusCode) {
        super("Reading", path, message, code ?? StatusCode.UnsupportedRead);
    }
}

/**
 * Thrown for invalid writes.
 */
export class WriteError extends SchemaViolationError {
    constructor(path: SchemaErrorPath, message: string, code?: StatusCode) {
        super("Writing", path, message, code ?? StatusCode.UnsupportedWrite);
    }
}

/**
 * Thrown for invalid invokes.
 */
export class InvokeError extends SchemaViolationError {
    constructor(path: SchemaErrorPath, message: string, code?: StatusCode) {
        super("Invoking", path, message, code ?? StatusCode.UnsupportedAccess);
    }
}

/**
 * Thrown when validation fails.
 */
export class ValidateError extends SchemaViolationError {
    constructor(path: SchemaErrorPath, message: string, code?: StatusCode) {
        super("Validating", path, message, code ?? StatusCode.InvalidDataType);
    }
}

/**
 * Thrown when a value is of the wrong datatype.
 */
export class DatatypeError extends ValidateError {
    constructor(path: SchemaErrorPath, type: string, value: unknown, code?: StatusCode) {
        const str = `${value}`;
        if (str.length > 60) {
            value = `${str.substring(60)}…`;
        }
        super(path, `Value "${str}" is not ${type}`, code);
    }
}

/**
 * Thrown when constraint is violated.
 */
export class ConstraintError extends ValidateError {
    constructor(schema: Schema, path: SchemaErrorPath, message: string) {
        super(path, `Constraint "${(schema as ValueModel).constraint}": ${message}`, StatusCode.ConstraintError);
    }
}

/**
 * Thrown when conformance is violated.
 */
export class ConformanceError extends ValidateError {
    constructor(schema: Schema, path: SchemaErrorPath, message: string, choice?: string) {
        let prefix;
        if (choice) {
            prefix = `Conformance choice "${choice}"`;
        } else {
            prefix = `Conformance "${(schema as ValueModel).conformance}"`;
        }
        super(path, `${prefix}: ${message}`, StatusCode.InvalidAction);
    }
}

/**
 * Thrown for access attempts against a managed value that is no longer valid.
 */
export class ExpiredReferenceError extends SchemaViolationError {
    constructor(path: SchemaErrorPath) {
        super("Reference to", path, "Referencing invalidated by context exit", StatusCode.Failure);
    }
}

/**
 * Thrown for access attempts against a managed value referencing a container that was removed.
 */
export class PhantomReferenceError extends SchemaViolationError {
    constructor(path: SchemaErrorPath) {
        super("Reference to", path, "Container was removed", StatusCode.Failure);
    }
}

/**
 * Thrown for issues with metadata definitions or related data that are a local (vs network client) problem.
 */
export class SchemaImplementationError extends SchemaViolationError {
    constructor(path: SchemaErrorPath, message: string, code?: StatusCode) {
        super("Definition of", path, message, code ?? StatusCode.Failure);
    }
}
