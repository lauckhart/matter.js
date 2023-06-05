/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { AnyElement } from "../../../src/model";
import { camelize } from "../../../src/util/String";
import { Block } from "../util/TsFile";

export function generateElement(target: Block, element: AnyElement, prefix: string = "", suffix = "") {
    const type = camelize(`${element.type} element`);
    const block = target.expressions(`${prefix} ${type}({`, `})${suffix}`);

    for (const key in element) {
        if (key == "type" || key == "children") {
            continue;
        }
        block.add(`${key}: ${JSON.stringify(element[key])}`);
    }

    if (element.children) {
        const children = target.expressions(`children: [`, "]");
        for (const child of element.children) {
            generateElement(children, child as AnyElement);
        }
    }
}
