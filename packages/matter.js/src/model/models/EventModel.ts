/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { DataModel, DatatypeModel, EventElement, Mei, Model } from "../index.js";

export class EventModel extends DataModel implements EventElement {
    override type!: EventElement.Type;
    override id!: Mei;
    priority!: EventElement.Priority;

    override validate() {
        this.validateStructure(EventElement.Type, true, DatatypeModel);
        this.validateProperty({ name: "priority", type: EventElement.Priority, required: true })
        return super.validate();
    }

    constructor(definition: EventElement.Properties, parent?: Model) {
        super(definition, parent);
    }

    static {
        Model.constructors[EventElement.Type] = this;
    }
}
