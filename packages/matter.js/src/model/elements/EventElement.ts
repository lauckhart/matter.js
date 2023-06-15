/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ElementType, Mei } from "../definitions/index.js";
import { ValueElement } from "./ValueElement.js";
import { BaseElement } from "./BaseElement.js";

/**
 * An event is triggered by endpoints.
 */
export type EventElement = ValueElement & {
    id: Mei,
    type: `${EventElement.Type}`,

    // Priority is required but we handle missing priority in validation
    priority?: `${EventElement.Priority}`
}

export function EventElement(definition: EventElement.Properties) {
    return ValueElement(EventElement.Type, definition) as EventElement;
}

export namespace EventElement {
    export type Type = ElementType.Event;
    export const Type = ElementType.Event;
    export type Properties = BaseElement.Properties<EventElement>;

    /**
     * Event priority as defined in Matter specification.
     */
    export enum Priority {
        Debug = "debug",
        Info = "info",
        Critical = "critical"
    }

    /**
     * Event priority mapped to official ID.
     */
    export enum PriorityId {
        debug = 0,
        info = 1,
        critical = 2
    }
}

export const Debug = EventElement.Priority.Debug;
export const Info = EventElement.Priority.Info;
export const Critical = EventElement.Priority.Critical;
