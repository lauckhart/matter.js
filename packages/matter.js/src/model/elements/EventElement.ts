/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { BaseDataElement, BaseElement } from "../index.js";

/**
 * An event is triggered by endpoints.
 */
export type EventElement = BaseDataElement & {
    type: EventElement.Type,
    priority: EventElement.Priority
}

export function EventElement(definition: EventElement.Definition) {
    return BaseDataElement({
        type: BaseElement.Type.Event,
        ...definition
    }) as EventElement;
}

export namespace EventElement {
    export type Type = BaseElement.Type.Event;
    export const Type = BaseElement.Type.Event;
    export type Definition = BaseDataElement.Definition & {
        priority: `${Priority}`
    }

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
