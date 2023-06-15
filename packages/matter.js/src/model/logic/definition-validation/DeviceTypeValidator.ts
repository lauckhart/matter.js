/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { DeviceTypeElement } from "../../elements/index.js";
import { ClusterModel, DeviceTypeModel } from "../../models/index.js";
import { ModelValidator } from "./ModelValidator.js";

ModelValidator.validators[DeviceTypeElement.Type] =
class DeviceTypeValidator extends ModelValidator<DeviceTypeModel> {
    override validate() {
        this.validateStructure(true, DeviceTypeModel, ClusterModel);
        this.validateProperty({
            name: "classification",
            type: DeviceTypeElement.Classification
        });

        super.validate();
    }
}
