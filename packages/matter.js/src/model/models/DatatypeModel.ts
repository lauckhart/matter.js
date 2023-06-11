/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { DatatypeElement, DataModel, Mei, Model, Datatype, Globals, Metatype, CommandElement } from "../index.js";

export class DatatypeModel extends DataModel implements DatatypeElement {
    override type: DatatypeElement.Type = DatatypeElement.Type;
    override id?: Mei;

    override validate() {
        this.validateStructure(DatatypeElement.Type, false, DatatypeModel);
        this.validateEntries();
        return super.validate();
    }

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

    private validateEntries() {
        switch (Metatype.of(this.base)) {
            case Metatype.object:
                if (!this.children.length) {
                    this.error("CHILDLESS_OBJECT", `struct element with no children`);
                }
                break;

            case Metatype.bitmap:
            case Metatype.enum:
                if (!this.children.length) {
                    if (this.parent?.type == CommandElement.Type || this.parent?.type == DatatypeElement.Type) {
                        // The specification defines some fields as enums without specific values, so
                        // allow this under command and datatype fields
                        break;
                    }

                    this.error("CHILDLESS_ENUM", `${this.base} with no children`);
                }
                break;

            case Metatype.array:
                if (!this.children.length) {
                    this.error("UNTYPED_ARRAY", `array element with no entry type`);
                } else if (this.children.length > 1) {
                    this.error("OVERLY_TYPED_ARRAY", `array element with multiple entry types`);
                }
                break;
        }
    }
}

// This allows DataModel to access DatatypeModel without a circular dependency.
DataModel.DatatypeModel = DatatypeModel;
