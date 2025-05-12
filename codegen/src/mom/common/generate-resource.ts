/**
 * @license
 * Copyright 2022-2025 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { FormattedText, serialize } from "#general";
import { Model } from "#model";
import { Block } from "#util/TsFile.js";

export function generateResource(target: Block, element: Model) {
    const { description, details, xref } = element;
}

export function addDetailsAndCrossReferences(target: Block, element: Model) {
    // Next row: Details
    if (element.details) {
        const lines = FormattedText(element.details, 100);
        for (let i = 0; i < lines.length; i++) {
            const prefix = i ? "    " : "details: ";
            const suffix = i < lines.length - 1 ? " +" : "";
            lines[i] = `${prefix}${serialize(lines[i] === "" ? "\n" : lines[i])}${suffix}`;
        }
        const text = lines.join("\n");
        if (text) {
            target.atom(text);
        }
    }

    // Next row: Cross reference
    if (element.xref) {
        target.atom("xref", serialize(element.xref));
    }
}
