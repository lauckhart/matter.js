/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { DatatypeElement } from "../../elements/index.js";
import { DatatypeModel } from "../../models/index.js";
import { DataValidator } from "./DataValidator.js";
import { ModelValidator } from "./ModelValidator.js";

ModelValidator.validators[DatatypeElement.Tag] =
class AttributeValidator extends DataValidator<DatatypeModel> {
    override validate() {
        this.validateStructure(false, DatatypeModel);

        super.validate();
    }
}
