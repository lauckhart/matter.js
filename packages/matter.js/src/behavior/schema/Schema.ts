/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { type ClusterModel, type ValueModel, DatatypeModel } from "../../model/index.js";

/**
 * We model state using Matter semantics.  For schema we therefore allow any
 * Matter model that defines a datatype.
 * 
 * Most schema is a {@link ValueModel} which explicitly models data.
 * {@link ClusterModel} is also valid schema.
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
    export const empty = new DatatypeModel({ name: "Empty", type: "struct" });
}
