/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Datatype, Mei } from "../definitions/index.js";
import { DatatypeElement } from "../elements/index.js";
import { ValueModel } from "./ValueModel.js";
import { Model } from "./Model.js";

export class DatatypeModel extends ValueModel implements DatatypeElement {
    override tag: DatatypeElement.Tag = DatatypeElement.Tag;
    override id?: Mei;

    override get effectiveType() {
        const base = super.effectiveType;
        if (base || !(this.parent instanceof ValueModel)) {
            return base;
        }

        // If this is an untyped item parented by an enum or bitmap, infer
        // the base type as the corresponding unsigned integer type
        switch (this.parent.type) {
            case "enum8":
            case Datatype.map8:
                return Datatype.uint8;

            case "enum16":
            case Datatype.map16:
                return Datatype.uint16;

            case Datatype.map32:
                return Datatype.uint32;

            case Datatype.map64:
                return Datatype.uint64;
        }
    }

    constructor(definition: DatatypeElement.Properties) {
        super(definition);
    }

    static {
        Model.constructors[DatatypeElement.Tag] = this;
    }
}
