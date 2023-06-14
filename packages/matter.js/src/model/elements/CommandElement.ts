/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { BaseDataElement, BaseElement, ElementType, Mei } from "../index.js"

/**
 * A command describes a remote procedure call.
 */
export type CommandElement = BaseDataElement & {
    id: Mei,
    type: `${CommandElement.Type}`,

    // Direction is required but we handling missing direction in validation
    direction?: `${CommandElement.Direction}`,

    response?: string
}

export function CommandElement(definition: CommandElement.Properties) {
    return BaseDataElement(CommandElement.Type, definition) as CommandElement;
}

export namespace CommandElement {
    export type Type = ElementType.Command;
    export const Type = ElementType.Command;
    export type Properties = BaseElement.Properties<CommandElement>;

    /**
     * Indicates request vs response command.
     */
    export enum Direction {
        Request = "request",
        Response = "response"
    }
}
