/**
 * @license
 * Copyright 2022-2025 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Model, Resources } from "#model";
import { Block, TsFile } from "#util/TsFile.js";
import { addDetailsAndCrossReferences, addProperties } from "./element-generation.js";

export function generateResource(target: TsFile, element: Model, identifierName: string): boolean {
    const patch = generateResourcePatch(element);
    if (!patch) {
        return false;
    }

    target.addImport("#index.js", identifierName);
    const expr = target.expressions(`${identifierName}.patch(`, ")");

    addResource(expr, patch);

    return true;
}

function addResource(target: Block, patch: ResourcePatch) {
    const expr = target.expressions("{", "}");

    if (patch.resources) {
        const smallProps = { ...patch.resources };
        delete smallProps.xref;
        delete smallProps.details;

        addProperties(expr, smallProps);
        addDetailsAndCrossReferences(expr, patch.resources);
    }

    if (patch.children) {
        const children = expr.expressions("children: [", "]");
        for (const child of patch.children) {
            if (child) {
                addResource(children, child);
            } else {
                children.atom("undefined");
            }
        }
    }

    return true;
}

interface ResourcePatch {
    resources?: Resources;
    children?: ResourcePatch[];
}

function generateResourcePatch(element: Model): ResourcePatch | undefined {
    const resources = element.hasResources ? element.resources : undefined;
    const children = element.hasChildren ? element.children.map(generateResourcePatch) : undefined;

    let patch: ResourcePatch | undefined;
    if (resources) {
        const entries = Object.entries(resources).filter(
            ([k, v]) => v !== undefined && k !== "asOf" && k !== "until" && k !== "matchTo" && k !== "errors",
        );
        if (entries.length) {
            patch = { resources: Object.fromEntries(entries) };
        }
    }

    if (children?.some(c => c)) {
        while (children.length && children[children.length - 1] === undefined) {
            children.length = children.length - 1;
        }

        if (patch) {
            patch.children = children as ResourcePatch[];
        } else {
            patch = { children: children as ResourcePatch[] };
        }
    }

    return patch;
}
