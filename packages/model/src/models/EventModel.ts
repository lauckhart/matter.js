/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { EventElement } from "../elements/index.js";
import { ValueModel } from "./ValueModel.js";

export class EventModel extends ValueModel<EventElement> implements EventElement {
    override tag: EventElement.Tag = EventElement.Tag;
    priority?: EventElement.Priority;

    constructor(definition: EventElement.Properties) {
        super(definition);

        this.priority = definition.priority as EventElement.Priority;
    }

    get fabricSensitive(): boolean {
        return this.effectiveAccess.fabricSensitive;
    }

    override get requiredFields() {
        return { ...super.requiredFields, id: this.id };
    }

    static Tag = EventElement.Tag;
}

EventModel.register();
