/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { BaseTypeElement, BaseElement } from "../../index.js"

/**
 * A command describes a remote procedure call.
 */
export type CommandElement = BaseTypeElement & {
    type: CommandElement.Type,
    direction: CommandElement.Direction,
    response?: CommandElement
}

export function CommandElement(definition: BaseElement.Typeless<CommandElement>): CommandElement {
    return { ...definition, type: CommandElement.Type }
}

export namespace CommandElement {
    export type Type = BaseElement.Type.Command;
    export const Type = BaseElement.Type.Command;

    /**
     * Indicates request vs response command.
     */
    export enum Direction {
        Request = "request",
        Response = "response"
    }
}
