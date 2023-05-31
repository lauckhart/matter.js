/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { CodedElement } from "./Element.js";
import { NodeElement } from "./NodeElement.js";

/**
 * Runtime representation of a fabric.
 */
export type FabricElement = CodedElement & {
    nodes: NodeElement[]
}
