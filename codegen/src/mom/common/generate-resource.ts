/**
 * @license
 * Copyright 2022-2025 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Model, Resources, ValueModel } from "#model";
import { Block, TsFile } from "#util/TsFile.js";
import { addDetailsAndCrossReferences, addProperties } from "./element-generation.js";

export function generateResource(target: TsFile, element: Model): boolean {
    const patch = generateResourceDefinition(element);
    if (!patch) {
        return false;
    }

    target.addImport("!model/model/Resources", "Resources");
    const expr = target.expressions(`Resources.add(`, ")");

    addResource(expr, patch);

    return true;
}

function addResource(target: Block, definition: Resources.Named) {
    const expr = target.expressions("{", "}");

    const props = { ...definition } as Record<string, unknown>;

    delete props.tag;
    delete props.name;
    delete props.discriminator;
    delete props.children;

    const hasProps = !!Object.keys(props).length;
    const hasChildren = !!definition.children?.length;

    if (!hasProps && !hasChildren) {
        return;
    }

    // Add identifying fields
    if (hasProps || hasChildren) {
        const { tag, name, discriminator } = definition;
        const identity = { tag, name } as Record<string, unknown>;
        if (discriminator) {
            identity.discriminator = discriminator;
        }

        addProperties(expr, identity);
    }

    if (hasProps) {
        delete props.description;
        delete props.xref;

        addProperties(expr, props);
        addDetailsAndCrossReferences(expr, definition);
    }

    if (hasChildren) {
        const children = expr.expressions("children: [", "]");
        for (const child of definition.children!) {
            if (child) {
                addResource(children, child);
            } else {
                children.atom("undefined");
            }
        }
    }

    return true;
}

function generateResourceDefinition(element: Model): Resources.Named | undefined {
    const resources = element.hasLocalResource ? element.resource : undefined;
    const children = element.hasChildren
        ? (element.children.map(generateResourceDefinition).filter(c => c) as Resources.Named[])
        : undefined;

    let definition: Resources.Named | undefined;
    if (resources) {
        const entries = Object.entries(resources).filter(
            ([k, v]) => v !== undefined && k !== "asOf" && k !== "until" && k !== "matchTo" && k !== "errors",
        );
        if (entries.length) {
            definition = { tag: element.tag, name: element.name, ...Object.fromEntries(entries) };
        }
    }

    if (children?.length) {
        if (definition) {
            definition.children = children;
        } else {
            definition = { tag: element.tag, name: element.name, children: children };
        }
    }

    if (definition && (element.parent?.all(element.constructor as Model.Type, definition.name).length ?? 0) > 1) {
        const conformance = (element as ValueModel).conformance;
        if (conformance?.isEmpty === false) {
            definition.discriminator = conformance.toString();
        }
    }

    return definition;
}
