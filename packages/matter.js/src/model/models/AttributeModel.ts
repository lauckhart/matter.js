/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { AttributeElement, DataModel, Mei, Model } from "../index.js";

export class AttributeModel extends DataModel implements AttributeElement {
    override type: AttributeElement.Type = AttributeElement.Type;
    override id!: Mei;

    constructor(definition: AttributeElement.Properties) {
        super(definition);
    }

    static {
        Model.constructors[AttributeElement.Type] = this;
    }
}
