/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { DatatypeModel, FabricElement, FabricModel } from "../../index.js";
import { ModelValidator } from "./index.js";

ModelValidator.validators[FabricElement.Type] =
class AttributeValidator extends ModelValidator<FabricModel> {
    override validate() {
        this.validateStructure(true, DatatypeModel);
        super.validate();
    }
}
