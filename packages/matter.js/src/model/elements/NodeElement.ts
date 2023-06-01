/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Element, EndpointElement } from "./index.js";

/**
 * Runtime representation of a node.
 */
export type NodeElement = Element & {
    endpoints: EndpointElement[]
}
