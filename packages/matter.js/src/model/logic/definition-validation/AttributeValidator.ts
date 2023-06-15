/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { AttributeElement } from "../../elements/index.js";
import { AttributeModel, DatatypeModel } from "../../models/index.js";
import { DataValidator } from "./DataValidator.js";
import { ModelValidator } from "./ModelValidator.js";

ModelValidator.validators[AttributeElement.Type] =
class AttributeValidator extends DataValidator<AttributeModel> {
    override validate() {
        this.validateStructure(true, DatatypeModel);
        
        super.validate();
    }
}
