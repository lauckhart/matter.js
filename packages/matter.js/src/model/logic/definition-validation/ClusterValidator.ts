/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { AttributeModel, ClusterElement, ClusterModel, CommandModel, DatatypeModel, EventModel } from "../../index.js";
import { ModelValidator } from "./index.js";

ModelValidator.validators[ClusterElement.Type] =
class DeviceTypeValidator extends ModelValidator<ClusterModel> {
    override validate() {

        this.validateStructure(true, DatatypeModel, AttributeModel, CommandModel, EventModel);

        this.validateProperty({ name: "singleton", type: "boolean" });
        this.validateProperty({ name: "classification", type: ClusterElement.Classification });
        
        if (!this.model.children.length) {
            this.error("EMPTY_CLUSTER", "Cluster has no elements");
        }
        
        super.validate();
    }
}
