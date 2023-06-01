/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { NodeElement, BaseTypeElement } from "./index.js"

/**
 * Runtime representation of a fabric.
 */
export type FabricElement = BaseTypeElement & {
    nodes: NodeElement[]
}
