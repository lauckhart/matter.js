/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Metatype } from "../../../../model/index.js";
import type { Schema } from "../../Schema.js";
import type { Io } from "../Io.js";
import type { IoFactory } from "../IoFactory.js";
import { ListManager } from "./list.js";
import { StructManager } from "./struct.js";

/**
 * State I/O is largely designed to manipulate vanilla JS objects.
 * 
 * This is lightweight, but for convenience we also offer a JS API that behaves
 * like vanilla JS objects but with read/write semantics of the I/O API.
 * 
 * IoManager creates a factory method to perform the necessary wrapping for
 * this to work.
 * 
 * Wrapped entries are also automatically transactional if supported by the
 * owner.
 */
export function IoManager(schema: Schema, factory: IoFactory): Io.Manage {
    switch (schema.effectiveMetatype) {
        case Metatype.object:
            return StructManager(factory, schema);

        case Metatype.array:
            return ListManager(factory, schema);

        // TODO - for completeness we should either make ByteArray immutable
        // in state or wrap here but meh

        default:
            return value => value;
    }
}
