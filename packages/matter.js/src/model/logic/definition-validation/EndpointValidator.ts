/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { EndpointElement } from "../../elements/index.js";
import { EndpointModel } from "../../models/index.js";
import { ModelValidator } from "./ModelValidator.js";

ModelValidator.validators[EndpointElement.Type] =
class EndpointValidator extends ModelValidator<EndpointModel> {
    override validate() {
        this.validateStructure(true, EndpointModel);
        super.validate();
    }
}
