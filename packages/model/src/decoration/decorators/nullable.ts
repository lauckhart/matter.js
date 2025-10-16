/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Quality } from "#aspects/Quality.js";
import { FieldDecoration } from "#decoration/decorations/FieldDecoration.js";
import { InvalidMetadataError } from "#decoration/errors.js";
import { Decorator } from "#general";
import { ValueModel } from "#models/ValueModel.js";

/**
 * Mark a field as nullable.
 */
export const nullable = Decorator<Decorator.PropertyCollector>((_target, context) => {
    const model = FieldDecoration.of(context).model;
    if (!(model instanceof ValueModel)) {
        throw new InvalidMetadataError("Only a value models may be nullable");
    }
    model.quality = new Quality({ ...model.quality, nullable: true });
});
