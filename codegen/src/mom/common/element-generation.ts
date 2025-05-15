/**
 * @license
 * Copyright 2022-2025 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { FormattedText, serialize } from "#general";
import { Specification } from "#model";
import { Block } from "#util/TsFile.js";

export function addProperties(target: Block, ...sets: Record<string, unknown>[]) {
    const serializedSets = sets.map(set =>
        Object.entries(set)
            .sort((a, b) => a[0].toLowerCase().localeCompare(b[0].toLowerCase()))
            .map(([k, v]) => `${k}: ${serialize(v)}`),
    );

    for (const set of serializedSets) {
        // Segment properties into rows
        let row = Array<string>();
        let length = 0;
        for (const property of set) {
            length += property.length + (length ? 2 : 0);
            if (row.length && length >= 100) {
                target.atom(row.join(", "));
                row = [property];
                length = property.length;
            } else {
                row.push(property);
            }
        }
        if (row.length) {
            target.atom(row.join(", "));
        }
    }
}

export function addDetailsAndCrossReferences(
    target: Block,
    element: { xref?: Specification.CrossReference; details?: string },
) {
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
