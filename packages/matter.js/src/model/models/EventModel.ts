/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Datatype, Mei } from "../definitions/index.js";
import { EventElement } from "../elements/index.js";
import { ValueModel } from "./ValueModel.js";
import { Model } from "./Model.js";

export class EventModel extends ValueModel implements EventElement {
    override tag!: EventElement.Tag;
    override id!: Mei;
    priority?: EventElement.Priority;

    override get actualBase() {
        return Datatype.struct;
    }

    constructor(definition: EventElement.Properties) {
        super(definition);
    }

    static {
        Model.constructors[EventElement.Tag] = this;
    }
}
