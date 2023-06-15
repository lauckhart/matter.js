/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Mei } from "../definitions/index.js";
import { AttributeElement } from "../elements/index.js";
import { ValueModel } from "./ValueModel.js";
import { Model } from "./Model.js";

export class AttributeModel extends ValueModel implements AttributeElement {
    override type: AttributeElement.Type = AttributeElement.Type;
    override id!: Mei;

    constructor(definition: AttributeElement.Properties) {
        super(definition);
    }

    static {
        Model.constructors[AttributeElement.Type] = this;
    }
}
