/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { AttributeElement, AttributeModel, DatatypeModel } from "../../index.js";
import { DataValidator, ModelValidator } from "./index.js";

ModelValidator.validators[AttributeElement.Type] =
class AttributeValidator extends DataValidator<AttributeModel> {
    override validate() {
        this.validateStructure(true, DatatypeModel);
        
        super.validate();
    }
}
