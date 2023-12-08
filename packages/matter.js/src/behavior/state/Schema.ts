/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { FieldModel, type ClusterModel, type ValueModel } from "../../model/index.js";

/**
 * We model state using Matter semantics.  For schema we therefore allow any
 * Matter model that defines a datatype.
 * 
 * Most schema is a ValueModel which explicitly models data.
 * 
 * You will see references to "structs" and "lists" throughout this code.
 * These are Matter's two container types and map to JS objects and arrays
 * respectively.
 * 
 * If the schema is a ClusterModel, it models a struct with attributes as
 * fields.
 */
export type Schema = ClusterModel | ValueModel;

export namespace Schema {
    /**
     * This is a simple struct schema implementation that allows arbitrary
     * access to a fixed list of fields with no validation.
     */
    export function Simple(fields: string[]) {
        const schema = new FieldModel({ name: "Anonymous" });

        for (const field of fields) {
            schema.add(new FieldModel({ name: field, type: "any" }));
        }

        return schema;
    }
}
