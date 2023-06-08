/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ByteArray } from "../../util/ByteArray.js";
import { BaseDataElement, DatatypeElement, Mei, Model } from "../index.js";
import { DataModel } from "./DataModel.js";

const Datatype = BaseDataElement.Datatype;

export class DatatypeModel extends DataModel implements DatatypeElement {
    override type: DatatypeElement.Type = DatatypeElement.Type;
    override id?: Mei;

    override validate() {
        this.validateStructure(DatatypeElement.Type, false, DatatypeModel);
        return super.validate();
    }

    constructor(definition: DatatypeElement.Properties, parent?: Model) {
        super(definition, parent);
    }

    static {
        Model.constructors[DatatypeElement.Type] = this;
    }

    override get nativeType(): DataModel.NativeType | undefined {
        switch (this.name) {
            case "string":
                if (this == this.globals.string) {
                    return String;
                }
                break;

            case "date":
                if (this == this.globals.date) {
                    return Date;
                }
        }

        if (this.base) {
            return super.nativeType;
        }

        switch (this.name) {
            case Datatype.bool:
                return Boolean;

            case Datatype.map8:
            case Datatype.map16:
            case Datatype.map32:
            case Datatype.map64:
            case Datatype.uint8:
            case Datatype.uint16:
            case Datatype.uint24:
            case Datatype.uint32:
            case Datatype.uint40:
            case Datatype.uint48:
            case Datatype.uint56:
            case Datatype.uint64:
            case Datatype.int8:
            case Datatype.int16:
            case Datatype.int24:
            case Datatype.int32:
            case Datatype.int40:
            case Datatype.int48:
            case Datatype.int56:
            case Datatype.int64:
                return BigInt;

            case Datatype.single:
            case Datatype.double:
                return Number;

            case Datatype.octstr:
                return ByteArray;

            case Datatype.list:
                return Array;

            case Datatype.struct:
                return Object;
        }
    }
}
