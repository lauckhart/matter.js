/**
 * @license
 * Copyright 2022-2025 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Model, Resources } from "#model";
import { TsFile } from "#util/TsFile.js";

export function generateResource(target: TsFile, element: Model, identifierName: string): boolean {
    const patch = generateResourcePatch(element);
    if (!patch) {
        return false;
    }

    target.addImport("!elements/models.js", identifierName);
    target.expressions(`${identifierName}.patch(`, ")");

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
