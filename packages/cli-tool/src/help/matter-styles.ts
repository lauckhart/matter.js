/**
 * @license
 * Copyright 2022-2026 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ansi, type TextBuilder } from "@matter/tools/ansi-text";

/**
 * Semantic styles for Matter-specific UI elements.
 *
 * Each binding is a {@link TextBuilder} that can be reassigned for theme customization.
 */
export namespace MatterStyles {
    export let command: TextBuilder = ansi.cyan;
    export let attribute: TextBuilder = ansi.yellow;
    export let event: TextBuilder = ansi.magenta;
}
