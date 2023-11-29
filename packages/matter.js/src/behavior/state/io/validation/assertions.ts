/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ValueModel } from "../../../../model/index.js";
import { ByteArray } from "../../../../util/ByteArray.js";
import { Io } from "../Io.js";

export function assertNumber(value: Io.Item, schema: Io.Schema): asserts value is number {
    if (typeof value === "number") {
        return;
    }
    throw new Io.DatatypeError(
        schema,
        `Expected number but received ${typeof value}`
    );
}

export function assertObject(value: Io.Item, schema: Io.Schema): asserts value is Io.Struct {
    if (typeof value === "object") {
        return;
    }
    throw new Io.DatatypeError(
        schema,
        `Expected object but received ${typeof value}`
    )
}

export function assertNumeric(value: Io.Item, schema: ValueModel): asserts value is number | bigint {
    if (typeof value === "number" || typeof value === "bigint") {
        return;
    }
    throw new Io.DatatypeError(
        schema,
        `Expected number or bigint but received ${typeof value}`
    );
}

export function assertString(value: Io.Item, schema: ValueModel): asserts value is string {
    if (typeof value === "string") {
        return;
    }
    throw new Io.DatatypeError(
        schema,
        `Expected string but received ${typeof value}`
    );
}

export function assertBytes(value: Io.Item, schema: ValueModel): asserts value is ByteArray {
    if (value instanceof ByteArray) {
        return;
    }
    throw new Io.DatatypeError(
        schema,
        `Expected byte array but received ${typeof value}`
    );
}

export function assertSequence(value: Io.Item, schema: ValueModel): asserts value is string | ByteArray {
    if (typeof value === "string" || value instanceof ByteArray) {
        return;
    }
    throw new Io.DatatypeError(
        schema,
        `Expected string or ByteArray but received ${typeof value} that is neither`
    );
}

export function assertArray(value: Io.Item, schema: ValueModel): asserts value is Io.Item[] {
    if (!Array.isArray(value)) {
        throw new Io.DatatypeError(
            schema,
            `Expected array but received ${typeof value}`
        );
    }
}
