/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { DataModel, EventElement, Mei, Model } from "../index.js";

export class EventModel extends DataModel implements EventElement {
    override type!: EventElement.Type;
    override id!: Mei;
    priority!: EventElement.Priority;

    constructor(definition: EventElement.Properties, parent?: Model) {
        super(definition, parent);
    }

    static {
        Model.constructors[EventElement.Type] = this;
    }
}
