/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { CodedElement } from "./Element.js";
import { EndpointElement } from "./index.js";

/**
 * Runtime representation of a node.
 */
export type NodeElement = CodedElement & {
    endpoints: EndpointElement[]
}
