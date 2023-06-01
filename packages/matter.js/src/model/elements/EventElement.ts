/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Access, Conformance, BaseTypeElement, PriorityCode } from "../index.js"

/**
 * An event is triggered by endpoints.
 */
export type EventElement = BaseTypeElement & {
    priority: PriorityCode,

    access: Access,
    conformance: Conformance
}
