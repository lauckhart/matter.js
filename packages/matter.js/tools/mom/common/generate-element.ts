/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { AnyElement } from "../../../src/model/index.js";
import { serialize } from "../../../src/util/String.js";
import { Block } from "../../util/TsFile.js";
import { wordWrap } from "../../util/string.js";

export function generateElement(target: Block, element: AnyElement, prefix: string = "", suffix = "") {
    const block = target.expressions(`${prefix}{`, `}${suffix}`);

    const fields = element.valueOf() as { [ name: string ]: any };
    
    delete fields.tag;
    delete fields.xref;
    delete fields.children;
    delete fields.details;

    // Tag/ID/name/type on first row
    const row1 = Array<string>(`tag: ${serialize(element.tag)}`);
    if (element.id != undefined) {
        const idStr = element.id < 0
            ? `${element.id}`
            : `0x${element.id.toString(16).padStart(4, "0")}`;
        row1.push(`id: ${idStr}`);
    }
    row1.push(`name: ${serialize(element.name)}`);
    delete fields.id;
    delete fields.name;
    if (fields.base) {
        row1.push(`base: ${serialize((element as any).base)}`);
        delete fields.base;
    }
    block.atom(row1.join(", "));
    
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
        const lines = wordWrap(element.details, 70);
        for (let i = 0; i < lines.length; i++) {
            const prefix = i
                ? "         "
                : "details: ";
            const suffix = i < lines.length - 1 ? " +" : "";
            lines[i] = `${prefix}${serialize(lines[i] == "" ? "\n" : lines[i])}${suffix}`;
        }
        const text = lines.join("\n");
        if (text) {
            block.atom(text);
        }
    }

    // Next row: Cross reference
    if (element.xref) {
        block.atom("xref", serialize(element.xref));
    }

    // Children
    const children = element.children?.filter(c => !c.isGlobal);
    if (children?.length) {
        const childBlock = block.expressions(`children: [`, "]");
        for (const child of children) {
            generateElement(childBlock, child as AnyElement);
        }
    }
}
