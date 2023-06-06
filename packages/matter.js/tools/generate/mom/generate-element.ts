/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { AnyElement } from "../../../src/model/index.js";
import { camelize, serialize } from "../../../src/util/String.js";
import { Block } from "../util/TsFile.js";

export function generateElement(target: Block, element: AnyElement, prefix: string = "", suffix = "") {
    const factory = camelize(`${element.type} element`);
    const block = target.expressions(`${prefix}${factory}({`, `})${suffix}`);

    target.file.addImport("../../index", factory);

    const fields = { ...element } as { [ name: string ]: any };
    
    delete fields.type;
    delete fields.xref;
    delete fields.children;
    delete fields.details;

    // ID/name/base on first row
    const idStr = element.id < 0
        ? `${element.id}`
        : `0x${element.id.toString(16).padStart(4, "0")}`;
    let row1 = `id: ${idStr}, name: ${serialize(element.name)}`;
    delete fields.id;
    delete fields.name;
    if ((element as any).base) {
        row1 = `${row1}, base: ${serialize((element as any).base)}`
        delete fields.base;
    }
    block.atom(row1);

    // Next row: Other fields
    const row2 = Object.entries(fields)
        .sort((a, b) => a[0].toLowerCase().localeCompare(b[0].toLowerCase()))
        .map(([k, v]) => `${k}: ${serialize(v)}`)
        .join(', ');
    if (row2 != "") {
        block.atom(row2);
    }

    // Next row: Details
    if (element.details) {
        block.atom("details", serialize(element.details));
    }

    // Next row: Cross reference
    if (element.xref) {
        block.atom("xref", serialize(element.xref));
    }

    // Children
    if (element.children.length) {
        const children = block.expressions(`children: [`, "]");
        for (const child of element.children) {
            generateElement(children, child as AnyElement);
        }
    }
}
