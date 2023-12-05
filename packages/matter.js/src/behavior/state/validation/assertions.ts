/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ValueModel } from "../../../model/index.js";
import { ByteArray } from "../../../util/ByteArray.js";
import { Schema } from "../Schema.js";
import { ValidateError } from "../../errors.js";
import { Val } from "../Val.js";

export function assertNumber(value: Val, schema: Schema): asserts value is number {
    if (typeof value === "number") {
        return;
    }
    throw new ValidateError(
        schema,
        `Expected number but received ${typeof value}`
    );
}

export function assertObject(value: Val, schema: Schema): asserts value is Val.Struct {
    if (typeof value === "object") {
        return;
    }
    throw new ValidateError(
        schema,
        `Expected object but received ${typeof value}`
    )
}

export function assertNumeric(value: Val, schema: ValueModel): asserts value is number | bigint {
    if (typeof value === "number" || typeof value === "bigint") {
        return;
    }
    throw new ValidateError(
        schema,
        `Expected number or bigint but received ${typeof value}`
    );
}

export function assertString(value: Val, schema: ValueModel): asserts value is string {
    if (typeof value === "string") {
        return;
    }
    throw new ValidateError(
        schema,
        `Expected string but received ${typeof value}`
    );
}

export function assertBytes(value: Val, schema: ValueModel): asserts value is ByteArray {
    if (value instanceof ByteArray) {
        return;
    }
    throw new ValidateError(
        schema,
        `Expected byte array but received ${typeof value}`
    );
}

export function assertSequence(value: Val, schema: ValueModel): asserts value is string | ByteArray {
    if (typeof value === "string" || value instanceof ByteArray) {
        return;
    }
    throw new ValidateError(
        schema,
        `Expected string or ByteArray but received ${typeof value} that is neither`
    );
}

export function assertArray(value: Val, schema: ValueModel): asserts value is Val[] {
    if (!Array.isArray(value)) {
        throw new ValidateError(
            schema,
            `Expected array but received ${typeof value}`
        );
    }
}
