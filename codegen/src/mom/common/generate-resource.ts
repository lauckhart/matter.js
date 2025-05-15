/**
 * @license
 * Copyright 2022-2025 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Model, Resources } from "#model";
import { TsFile } from "#util/TsFile.js";
import { serialize } from "@matter/general";
import { addDetailsAndCrossReferences, addProperties } from "./element-generation.js";

export function generateResource(target: TsFile, element: Model, identifierName: string): boolean {
    const patch = generateResourcePatch(element);
    if (!patch) {
        return false;
    }

    target.addImport("!elements/models.js", identifierName);
    const expr = target.expressions(`${identifierName}.patch({`, "})");

    if (patch.resources) {
        addProperties(expr, patch.resources as Record<string, unknown>);
    }

    addDetailsAndCrossReferences(expr, element);

    if (patch.children) {
        expr.value(patch.children, "children: ");
    }

    return true;
}

interface ResourcePatch {
    resources?: Resources;
    children?: ResourcePatch[];
}

function generateResourcePatch(element: Model): ResourcePatch | undefined {
    const resources = element.hasResources ? element.resources : undefined;
    let children = element.hasChildren ? element.children.map(generateResourcePatch) : undefined;

    let patch: ResourcePatch | undefined;
    if (resources) {
        const entries = Object.entries(resources).filter(
            ([k, v]) =>
                v !== undefined &&
                k !== "asOf" &&
                k !== "until" &&
                k !== "matchTo" &&
                k !== "details" &&
                k !== "xref" &&
                k !== "errors",
        );
        if (entries.length) {
            patch = Object.fromEntries(entries);
        }
    }

    if (children?.some(c => c)) {
        while (children.length && children[children.length - 1] === undefined) {
            children.length = children.length - 1;
        }

        children = children.map(child => child ?? serialize.asIs("undefined"));

        if (patch) {
            patch.children = children as ResourcePatch[];
        } else {
            patch = { children: children as ResourcePatch[] };
        }
    }

    return patch;
}
