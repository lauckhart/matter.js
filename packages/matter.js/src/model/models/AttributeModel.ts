/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { AttributeElement, DataModel, DatatypeModel, Mei, Model } from "../index.js";

export class AttributeModel extends DataModel implements AttributeElement {
    override type: AttributeElement.Type = AttributeElement.Type;
    override id!: Mei;

    override validate() {
        this.validateStructure(AttributeElement.Type, true, DatatypeModel);
        return super.validate();
    }

    constructor(definition: AttributeElement.Properties, parent?: Model) {
        super(definition, parent);
    }

    static {
        Model.constructors[AttributeElement.Type] = this;
    }
}
