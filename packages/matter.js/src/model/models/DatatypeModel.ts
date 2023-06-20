/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Mei } from "../definitions/index.js";
import { DatatypeElement } from "../elements/index.js";
import { ValueModel } from "./ValueModel.js";
import { Model } from "./Model.js";
import { ModelTraversal } from "../logic/ModelTraversal.js";

export class DatatypeModel extends ValueModel implements DatatypeElement {
    override tag: DatatypeElement.Tag = DatatypeElement.Tag;
    override id?: Mei;

    override get effectiveType(): string | undefined {
        const type = super.effectiveType;
        if (type || !(this.parent instanceof ValueModel)) {
            return type;
        }
        return new ModelTraversal().getTypeName(this);
    }

    constructor(definition: DatatypeElement.Properties) {
        super(definition);
    }

    static {
        Model.constructors[DatatypeElement.Tag] = this;
    }
}
