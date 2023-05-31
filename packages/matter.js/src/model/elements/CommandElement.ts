/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Access, Conformance } from "../index.js"
import { TypeDefinition } from "../types/TypeDefinition.js"

/**
 * A command describes a remote procedure call.
 */
export type CommandElement = {
    access: Access.Definition,
    conformance: Conformance.Definition,

    direction: CommandElement.Direction,
    type: TypeDefinition,
    response?: CommandElement
}

export namespace CommandElement {
    export enum Direction {
        inbound = "inbound",
        outbound = "outbound"
    }
}
