/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Decoration } from "#decoration/decorations/Decoration.js";
import { Decorator } from "#general";

/**
 * Mark a field as nonvolatile (persistent).
 */
export const nonvolatile = Decorator<Decorator.PropertyCollector>((_target, context) => {
    Decoration.classDecorationOf(context).fieldFor(context.name).nonvolatile = true;
});
