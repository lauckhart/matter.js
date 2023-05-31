/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Access, Conformance, PriorityCode } from "../index.js"
import { TypeDefinition } from "../types/TypeDefinition.js"

/**
 * An event is triggered by endpoints.
 */
export type EventElement = {
    priority: PriorityCode,

    access: Access,
    conformance: Conformance,
    type: TypeDefinition
}
