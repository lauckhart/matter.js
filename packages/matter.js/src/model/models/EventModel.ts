/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { DataModel, Datatype, EventElement, Mei, Model } from "../index.js";

export class EventModel extends DataModel implements EventElement {
    override type!: EventElement.Type;
    override id!: Mei;
    priority?: EventElement.Priority;

    override get actualBase() {
        return Datatype.struct;
    }

    constructor(definition: EventElement.Properties) {
        super(definition);
    }

    static {
        Model.constructors[EventElement.Type] = this;
    }
}
