/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Access, Conformance, Constraint, Quality } from "../../aspects/index.js";
import { Datatype, Metatype } from "../../definitions/index.js";
import { CommandElement, DatatypeElement, Globals } from "../../elements/index.js";
import { ValueModel } from "../../models/index.js";
import { ModelValidator } from "./ModelValidator.js";

/**
 * Validates models that extend DataModel.
 */
export class ValueValidator<T extends ValueModel> extends ModelValidator<T> {
    override validate() {
        this.validateProperty({ name: "base", type: "string" });
        this.validateProperty({ name: "byteSize", type: "number" });
        this.validateProperty({ name: "constraint", type: Constraint });
        this.validateProperty({ name: "conformance", type: Conformance });
        this.validateProperty({ name: "access", type: Access });
        this.validateProperty({ name: "quality", type: Quality });
        this.validateProperty({ name: "metatype", type: Metatype })

        this.validateAspect("constraint");
        this.validateAspect("conformance");
        this.validateAspect("access");
        this.validateAspect("quality");

        this.validateType();
        this.validateEntries();

        super.validate();
    }

    private validateAspect(name: string) {
        const aspect = (this as any)[name];
        if (aspect?.errors) {
            this.model.addErrors(aspect);
        }
    }

    private validateType() {
        if (this.model.effectiveType == undefined) {
            if ((Globals as any)[this.model.name]) {
                // Not a derivative type
                return;
            }

            // Non-global types must specify a base type
            this.error("NO_TYPE", "No type information");
            return;
        }

        const base = this.model.base;
        if (base == undefined) {
            this.error("TYPE_UNKNOWN", `Unknown type ${this.model.type}`);
            return;
        }

        const metatype = this.model.metabase?.metatype;
        if (metatype == undefined) {
            this.error("METATYPE_UNKOWN", `No metatype for ${this.model.type}`);
            return;
        }

        // Require an ID for enum and bitmap values.  These are any children
        // of enums or bitmaps
        if (this.model.default == undefined) {
            if (this.model.parent instanceof ValueModel) {
                if (this.model.id === undefined) {
                    switch (this.model.parent.metabase?.metatype) {
                        case Metatype.enum:
                        case Metatype.bitmap:
                            this.error("MISSING_ITEM_ID", `No ID for ${this.model.parent.type} child`)
                    }
                }
            }

            // If not an enum or bitmap, undefined and null are both OK
            return;
        }

        // Convert value to proper type if possible
        const value = Metatype.cast(metatype, this.model.default);
        if (value == Metatype.Invalid) {
            this.error("INVALID_VALUE", `Value "${this.model.default}" is not a ${metatype}`);
            return;
        }
        this.model.default = value;

        // For bitmaps and enums, convert string name to numeric ID
        if (metatype == Metatype.bitmap || metatype == Metatype.enum) {
            if (typeof value == "string") {
                const member = this.model.member(value);
                if (member) {
                    this.model.default = member.id;
                } else {
                    this.error("INVALID_ENTRY", `"${value}" is not in ${metatype} ${this.model.type}`);
                }
            }
        }
    }

    private validateEntries() {
        // Note - these checks only apply for first-order derived types so
        // only apply for specific bases
        switch (this.model.type) {
            case Datatype.struct:
                if (this.model.metatype || !this.model.children.length) {
                    this.error("CHILDLESS_STRUCT", `struct element with no children`);
                }
                break;

            case "enum8":
            case "enum16":
            case Datatype.map8:
            case Datatype.map16:
            case Datatype.map32:
            case Datatype.map64:
                if (!this.model.children.length) {
                    if (
                        this.model.parent?.tag == CommandElement.Tag
                        || this.model.parent?.tag == DatatypeElement.Tag
                    ) {
                        // The specification defines some fields as enums without specific values, so
                        // allow this under command and datatype fields
                        break;
                    }

                    this.error(
                        `CHILDLESS_${this.model.type.toUpperCase()}`,
                        `${this.model.type} with no children`);
                }
                const ids = new Set<number>();
                const names = new Set<string>();
                for (const c of this.model.children) {
                    if (c.id) {
                        if (ids.has(c.id)) {
                            this.error(
                                `DUPLICATE_${this.model.type.toUpperCase()}_ID`,
                                `${this.model.type} ID 0x${c.id.toString(16)} appears more than once`);
                        } else {
                            ids.add(c.id);
                        }
                    }
                    if (names.has(c.name)) {
                        this.error(
                            `DUPLICATE_${this.model.type.toUpperCase()}_NAME`,
                            `${this.model.type} name "${c.name}" appears more than once`)
                    }
                }
                break;

            case Datatype.list:
                if (!this.model.children.length) {
                    this.error("UNTYPED_ARRAY", `array element with no entry type`);
                } else if (this.model.children.length > 1) {
                    this.error("OVERLY_TYPED_ARRAY", `array element with multiple entry types`);
                }
                break;
        }
    }
}
