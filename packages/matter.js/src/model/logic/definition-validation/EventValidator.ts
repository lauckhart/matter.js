/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { DatatypeModel, EventElement, EventModel } from "../../index.js";
import { DataValidator, ModelValidator } from "./index.js";

ModelValidator.validators[EventElement.Type] =
class EventValidator extends DataValidator<EventModel> {
    override validate() {
        this.validateStructure(true, DatatypeModel);
        this.validateProperty({ name: "priority", type: EventElement.Priority, required: true })
        super.validate();
    }
}
