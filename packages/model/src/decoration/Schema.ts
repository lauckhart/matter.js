/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ElementTag } from "#common/ElementTag.js";
import { ImplementationError } from "#general";
import type { ClusterModel } from "#models/ClusterModel.js";
import { DatatypeModel } from "#models/DatatypeModel.js";
import type { Model } from "#models/Model.js";
import type { ValueModel } from "#models/ValueModel.js";
import { Decoration } from "./decorations/Decoration.js";

/**
 * Here we use the term "schema" to mean any model element that defines a datatype.  For schema we allow any Matter
 * model for such an element.
 *
 * Most schema is a {@link ValueModel} which explicitly models data. {@link ClusterModel} is also valid schema.
 *
 * You will see references to "structs" and "lists" throughout our code. These are Matter's two container types and map
 * to JS objects and arrays respectively.  Thus we tend to use struct/object and list/array interchangeably.
 *
 * If schema is a {@link ClusterModel}, it models a struct with attributes as fields.
 */
export type Schema = ClusterModel | ValueModel;

/**
 * Obtain {@link Schema} for a {@link Schema.Source}.
 */
export function Schema(source: Model.Source): Schema {
    const model = Decoration.modelOf(source);
    if (model.tag !== ElementTag.Cluster && model.tag !== ElementTag.Datatype) {
        throw new ImplementationError(`Model ${model.name} tag ${model.tag} is not legal for schema`);
    }
    return model as Schema;
}

export namespace Schema {
    export type Source = Schema | NewableFunction;

    export const empty = new DatatypeModel({ name: "Empty", type: "struct" });
}
