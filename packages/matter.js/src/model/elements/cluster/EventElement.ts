/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { BaseTypeElement, Priority, BaseElement } from "../../index.js"

/**
 * An event is triggered by endpoints.
 */
export type EventElement = BaseTypeElement & {
    type: EventElement.Type,
    priority: Priority,
}

export function EventElement(definition: BaseElement.Typeless<EventElement>): EventElement {
    return { ...definition, type: EventElement.Type }
}

export namespace EventElement {
    export type Type = BaseElement.Type.Event;
    export const Type = BaseElement.Type.Event;
}
