/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { BaseDataElement, BaseElement, DatatypeElement } from "../index.js"

/**
 * A command describes a remote procedure call.
 */
export type CommandElement = BaseDataElement & {
    type: CommandElement.Type,
    direction: CommandElement.Direction,
    response?: string,
    children: (DatatypeElement | CommandElement)[]
}

export function CommandElement(definition: CommandElement.Definition) {
    return BaseDataElement({
        type: CommandElement.Type,
        ...definition
    }) as CommandElement;
}

export namespace CommandElement {
    export type Type = BaseElement.Type.Command;
    export const Type = BaseElement.Type.Command;
    export type Definition = BaseDataElement.Definition & {
        direction: `${CommandElement.Direction}`,
        response?: string,
        children?: (DatatypeElement | CommandElement)[]
    }

    /**
     * Indicates request vs response command.
     */
    export enum Direction {
        Request = "request",
        Response = "response"
    }
}
