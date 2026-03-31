/**
 * @license
 * Copyright 2022-2026 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Semantics } from "#decoration/semantics/Semantics.js";
import { Decorator } from "@matter/general";

/**
 * Set the description of a decorated element.
 */
export function description(text: string): Decorator.PropertyCollector {
    return Decorator((_target, context) => {
        Semantics.of(context).mutableModel.description = text;
    });
}
