/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Decoration } from "#decoration/decorations/Decoration.js";
import { Decorator } from "#general";
import { FieldModel } from "#models/FieldModel.js";
import type { Model } from "#models/Model.js";

/**
 * Decorate a property as an array.
 */
export function listOf(entry: Model): Decorator.PropertyCollector {
    return (_target, context) => {
        Decoration.of(context).type = new FieldModel(
            {
                name: context.name.toString(),
                type: "list",
            },

            new FieldModel({
                name: "entry",
                operationalBase: Decoration.modelOf(entry),
            }),
        );
    };
}
