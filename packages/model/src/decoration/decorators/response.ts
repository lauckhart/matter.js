/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Decoration } from "#decoration/decorations/Decoration.js";
import { Decorator } from "#general";
import { DatatypeModel } from "#models/DatatypeModel.js";

/**
 * Specifies the response type for a command.
 */
export function response(type: DatatypeModel): Decorator.ClassMethod {
    return Decorator((_target, context) => {
        Decoration.classDecorationOf(context).fieldFor(context.name).response = type;
    });
}
