/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { EndpointModel, NodeElement, NodeModel } from "../../index.js";
import { ModelValidator } from "./index.js";

ModelValidator.validators[NodeElement.Type] =
class AttributeValidator extends ModelValidator<NodeModel> {
    override validate() {
        this.validateStructure(true, EndpointModel);

        super.validate();
    }
}
