/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { DatatypeElement, DataModel, Mei, Model, Datatype, Globals } from "../index.js";

export class DatatypeModel extends DataModel implements DatatypeElement {
    override type: DatatypeElement.Type = DatatypeElement.Type;
    override id?: Mei;

    override get actualBase() {
        const base = super.actualBase;
        if (base || !(this.parent instanceof DatatypeModel)) {
            return base;
        }

        // If this is an untyped item parented by an enum or bitmap, infer
        // the base type as the corresponding unsigned integer type
        switch (this.parent.base) {
            case Globals.enum8.name:
            case Datatype.map8:
                return Datatype.uint8;

            case Globals.enum16.name:
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
        Model.constructors[DatatypeElement.Type] = this;
    }
}
