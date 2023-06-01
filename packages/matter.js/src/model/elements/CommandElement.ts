/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Access, Conformance, BaseTypeElement } from "../index.js"

/**
 * A command describes a remote procedure call.
 */
export type CommandElement = BaseTypeElement & {
    access: Access.Definition,
    conformance: Conformance.Definition,

    direction: CommandElement.Direction,
    response?: CommandElement
}

export namespace CommandElement {
    export enum Direction {
        inbound = "inbound",
        outbound = "outbound"
    }
}
