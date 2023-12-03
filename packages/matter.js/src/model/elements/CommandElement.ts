/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ElementTag, Mei } from "../definitions/index.js";
import { BaseElement } from "./BaseElement.js";
import { ValueElement } from "./ValueElement.js";

/**
 * A command describes a remote procedure call.
 */
export interface CommandElement extends ValueElement {
    id: Mei;
    tag: `${CommandElement.Tag}`;

    // Direction is required but we handling missing direction in validation
    direction?: `${CommandElement.Direction}`;

    response?: string;
};

export function CommandElement(definition: CommandElement.Properties) {
    return ValueElement(CommandElement.Tag, definition) as CommandElement;
}

export namespace CommandElement {
    export type Tag = ElementTag.Command;
    export const Tag = ElementTag.Command;
    export type Properties = BaseElement.Properties<CommandElement>;

    /**
     * Indicates request vs response command.
     */
    export enum Direction {
        Request = "request",
        Response = "response",
    }
}
