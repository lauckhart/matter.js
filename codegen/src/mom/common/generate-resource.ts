/**
 * @license
 * Copyright 2022-2025 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { FormattedText, serialize } from "#general";
import { Model, Resources } from "#model";
import { Block, TsFile } from "#util/TsFile.js";

export function generateResource(target: TsFile, element: Model, identifierName: string): boolean {
    const patch = generateResourcePatch(element);
    if (!patch) {
        return false;
    }

    target.addImport("!elements/models.js", identifierName);
    target.expressions(`${identifierName}.patch(`, ")");

    target.value(`${identifierName}.patch(`, ")");

    return true;
}

interface ResourcePatch {
    resources?: Resources;
    children?: ResourcePatch[];
}

function generateResourcePatch(element: Model): ResourcePatch | undefined {
    const resources = element.hasResources ? element.resources : undefined;
    let children = element.hasChildren ? element.children.map(generateResourcePatch) : undefined;

    if (children?.some(c => c)) {
        children = children.map(c => c ?? {});
    } else {
        children = undefined;
    }

    return { resources, children: children as ResourcePatch[] };
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
