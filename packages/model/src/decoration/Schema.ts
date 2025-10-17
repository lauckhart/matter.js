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
import { MissingMetadataError } from "./errors.js";
import { Semantics } from "./semantics/Semantics.js";

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
 * Obtain {@link Schema} for a {@link Schema.Source} if present.
 */
export function Schema(source: Model.Source) {
    const model = Semantics.modelOf(source);
    if (!model) {
        return;
    }

    if (model.tag !== ElementTag.Cluster && model.tag !== ElementTag.Datatype) {
        throw new ImplementationError(`Model ${model.name} tag ${model.tag} is not legal for schema`);
    }

    return model as Schema;
}

export namespace Schema {
    /**
     * Obtain {@link Schema} that is required for operation.
     */
    export function Required(source: Model.Source) {
        const schema = Schema(source);

        if (schema === undefined) {
            throw new MissingMetadataError(`Metadata missing for class ${source.name}`);
        }

        return schema;
    }

    export type Source = Schema | NewableFunction;

    export const empty = new DatatypeModel({ name: "Empty", type: "struct" });
}
