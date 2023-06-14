/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { MatterElement, MatterModel } from "../../index.js";
import { ModelValidator } from "./index.js";

ModelValidator.validators[MatterElement.Type] =
class MatterValidator extends ModelValidator<MatterModel> {
    override validate() {
        this.validateStructure(false);
        this.validateProperty({ name: "version", type: "string" });

        super.validate();
    }
}
