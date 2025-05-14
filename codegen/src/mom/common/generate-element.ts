/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Model } from "#model";
import { Block } from "../../util/TsFile.js";
import { camelize, serialize } from "../../util/string.js";
import { addDetailsAndCrossReferences } from "./generate-resource.js";

export function generateElement({
    target,
    importFrom,
    element,
    prefix = "",
    suffix = "",
    operational = true,
}: {
    target: Block;
    importFrom: string;
    element: Model;
    prefix?: string;
    suffix?: string;
    operational?: boolean;
}) {
    const factory = camelize(element.tag, true);
    target.file.addImport(importFrom, `${factory}Element as ${factory}`);
    const expr = target.expressions(`${prefix}${factory}(`, `)${suffix}`);
    const head = expr.expressions("{", "}");

    const fields = element.toElement(operational) as { [name: string]: any };

    delete fields.tag;
    delete fields.xref;
    delete fields.children;
    delete fields.details;
    delete fields.resources;

    // First, tag/ID/name/type
    const properties = Array<string>(`name: ${serialize(element.name)}`);
    if (element.id !== undefined) {
        const idStr = element.id < 0 ? `${element.id}` : `0x${element.id.toString(16)}`;
        properties.push(`id: ${idStr}`);
    }
    delete fields.id;
    delete fields.name;
    if (fields.type) {
        properties.push(`type: ${serialize((element as any).type)}`);
        delete fields.type;
    }

    // This is for codegen only
    delete fields.matchTo;

    // Next: Other fields
    properties.push(
        ...Object.entries(fields)
            .sort((a, b) => a[0].toLowerCase().localeCompare(b[0].toLowerCase()))
            .map(([k, v]) => `${k}: ${serialize(v)}`),
    );

    // Segment properties into rows
    let row = Array<string>();
    let length = 0;
    for (const property of properties) {
        length += property.length + (length ? 2 : 0);
        if (row.length && length >= 100) {
            head.atom(row.join(", "));
            row = [property];
            length = property.length;
        } else {
            row.push(property);
        }
    }
    if (row.length) {
        head.atom(row.join(", "));
    }

    // Details and cross-references
    if (!operational) {
        addDetailsAndCrossReferences(head, element);
    }

    // Children
    if (element.children?.length) {
        for (const child of element.children) {
            generateElement({ target: expr, importFrom, element: child, operational });
        }
    }
}
