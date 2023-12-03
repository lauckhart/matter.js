/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { InternalError } from "../../../../common/MatterError.js";
import { Schema } from "../../Schema.js";
import { Io } from "../Io.js";
import { IoError } from "../IoError.js";


export function assertStruct(schema: Schema, item: Io.Val): asserts item is Io.Struct {
    if (typeof item !== "object" || item === null) {
        throw new IoError.SchemaError(
            schema,
            `Struct value type was not object but ${
                typeof item
            }`
        );
    }
}

export function assertArray(schema: Schema, item: Io.Val): asserts item is Io.List {
    if (!Array.isArray(item)) {
        throw new IoError.SchemaError(
            schema,
            `Listvalue type was notarray but ${
                typeof item
            }`
        );
    }
}

export function getListIndex(schema: Schema, path: Io.Path) {
    let index = path?.[0];
    if (index === undefined) {
        throw new InternalError("Expected list index in empty path");
    }

    if (typeof index === "string") {
        index = Number.parseInt(index);
        if (Number.isNaN(index)) {
            throw new IoError.SchemaError(
                schema,
                "List index is non-numeric"
            )
        }
    }

    if (index < 0) {
        throw new IoError.SchemaError(
            schema,
            `List index ${index} is negative`
        )
    }

    return index;
}
