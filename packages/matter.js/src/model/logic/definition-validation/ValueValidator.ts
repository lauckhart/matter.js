/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Access, Conformance, Constraint, Quality } from "../../aspects/index.js";
import { DefinitionError, FieldValue, Metatype } from "../../definitions/index.js";
import { CommandElement, DatatypeElement } from "../../elements/index.js";
import { ClusterModel, ValueModel } from "../../models/index.js";
import { ModelValidator } from "./ModelValidator.js";

/**
 * Validates models that extend DataModel.
 */
export class ValueValidator<T extends ValueModel> extends ModelValidator<T> {
    override validate() {
        this.validateProperty({ name: "type", type: "string" });
        this.validateProperty({ name: "byteSize", type: "number" });
        this.validateProperty({ name: "constraint", type: Constraint });
        this.validateProperty({ name: "conformance", type: Conformance });
        this.validateProperty({ name: "access", type: Access });
        this.validateProperty({ name: "quality", type: Quality });
        this.validateProperty({ name: "metatype", type: Metatype });

        this.model.conformance.validateReferences((name) => {
            // Features are all caps, other names are field references
            if (name.match(/^[A-Z_$]+$/)) {
                // Feature lookup
                const cluster = this.model.owner(ClusterModel);
                return !!cluster?.features.find(f => f.name === name);
            } else {
                // Field lookup
                return !!this.model.parent?.member(name);
            }
        });

        this.validateAspect("conformance");
        this.validateAspect("constraint");
        this.validateAspect("access");
        this.validateAspect("quality");

        this.validateType();
        this.validateEntries();

        super.validate();
    }

    private validateAspect(name: string) {
        const aspect = (this.model as any)[name];
        if (aspect?.errors) {
            aspect.errors.forEach((e: DefinitionError) => this.model.error(e.code, e.message));
        }
    }

    private validateType() {
        if (this.model.effectiveType === undefined) {
            if (this.model.metatype) {
                // Not a derivative type
                return;
            }

            // Spec does not always provide type information for deprecated
            // fields
            if (this.model.deprecated) {
                return;
            }

            // Non-global types must specify a base type
            this.error("NO_TYPE", "No type information");
            return;
        }

        const base = this.model.base;
        if (base === undefined) {
            // Error is reported as ModelValidator TYPE_UNKNOWN
            return;
        }

        const metabase = this.model.metabase;
        if (metabase === undefined) {
            this.error("METATYPE_UNKNOWN", `No metatype for ${this.model.type}`);
            return;
        }
        const metatype = metabase.metatype;
        if (metatype === undefined) {
            // This shouldn't happen because the presence of the metatype is
            // what makes it a metabase.  But eslint doesn't know that
            this.error("METATYPE_MISSING", `Metabase ${metabase.name} has no metatype`);
            return;
        }

        let def = this.model.default;
        if (def === undefined) {
            return;
        }

        if (this.validateSpecialDefault(metatype, def)) {
            return;
        }

        // Convert value to proper type if possible
        const cast = Metatype.cast(metatype, def);
        if (cast === FieldValue.Invalid) {
            this.error("INVALID_VALUE", `Value "${def}" is not a ${metatype}`);
            return;
        }
        def = cast;

        // For bitmaps and enums, convert string name to numeric ID
        if (metatype === Metatype.bitmap || metatype === Metatype.enum) {
            if (typeof def === "string") {
                let member = this.model.member(def);

                // If the name didn't match, try case-insensitive search
                if (!member) {
                    // Cast of def to string should be unnecessary here, TS bug?
                    member = this.model.member(model => model.name.toLowerCase() === (def as string).toLowerCase());
                }

                if (member && member.effectiveId !== undefined) {
                    def = member.effectiveId;
                } else {
                    this.error("INVALID_ENTRY", `"${def}" is not in ${metatype} ${this.model.type}`);
                }
            }
        }

        // If default bitmap values are numeric, convert them to a flag array
        if (metatype === Metatype.bitmap && typeof def === "number") {
            const flags = Array<string>();

            for (let bit = 1; bit <= def; bit <<= 1) {
                if (def & bit) {
                    const flag = this.model.member(bit);
                    if (flag) {
                        flags.push(flag.name);
                    } else {
                        // Do not count as an error if there are a lot of high
                        // bits set.  The spec often specifies masks as
                        // inclusive of undefined values
                        if (!(def & 0xff00)) {
                            this.error("INVALID_DEFAULT_BIT", `Bitmap default bit ${Math.log2(bit)} is not defined`);
                        }
                    }
                }
            }

            if (flags.length) {
                def = FieldValue.Flags(flags);
            }
        }

        this.model.default = def;
    }

    private validateEntries() {
        // Note - these checks only apply for first-order derived types, so use
        // direct metatype
        const metatype = this.model.directMetatype;
        switch (metatype) {
            case Metatype.object:
                if (this.model.metatype || !this.model.children.length) {
                    this.error("CHILDLESS_STRUCT", `struct element with no children`);
                }
                break;

            case Metatype.enum:
            case Metatype.bitmap:
                if (!this.model.children.length && !this.model.global) {
                    if (
                        this.model.parent?.tag === CommandElement.Tag
                        || this.model.parent?.tag === DatatypeElement.Tag
                    ) {
                        // The specification defines some fields as enums without specific values, so
                        // allow this under command and datatype fields
                        break;
                    }

                    this.error(
                        `CHILDLESS_${metatype.toUpperCase()}`,
                        `${this.model.type} with no children`);
                }
                const ids = new Set<number>();
                const names = new Set<string>();
                for (const c of this.model.children) {
                    if (c.id) {
                        if (ids.has(c.id)) {
                            this.error(
                                `DUPLICATE_${metatype.toUpperCase()}_ID`,
                                `${this.model.type} ID 0x${c.id.toString(16)} appears more than once`);
                        } else {
                            ids.add(c.id);
                        }
                    }
                    if (names.has(c.name)) {
                        this.error(
                            `DUPLICATE_${metatype.toUpperCase()}_NAME`,
                            `${this.model.type} name "${c.name}" appears more than once`)
                    }
                }
                break;

            case Metatype.array:
                if (!this.model.children.length) {
                    this.error("UNTYPED_ARRAY", `array element with no entry type`);
                } else if (this.model.children.length > 1) {
                    this.error("OVERLY_TYPED_ARRAY", `array element with multiple entry types`);
                }
                break;
        }
    }

    private validateSpecialDefault(metatype: Metatype, def: any) {
        // Special "reference" object referencing another field by name
        if (typeof def === "object" && FieldValue.is(def, FieldValue.reference)) {
            const reference = (def as FieldValue.Reference).name;
            const other = this.model.parent?.member(reference);
            if (!other) {
                this.error("MEMBER_UNKNOWN", `Default value references unknown property ${reference}`);
            }
            return true;
        }

        // If the default value is a string referencing another field, convert
        // to a reference object
        if (typeof def === "string") {
            const other = this.model.parent?.member(def);
            if (other) {
                this.model.default = FieldValue.Reference(other.name);
                return true;
            }
        }

        // If the default value for bitmaps is an array, treat as a set of
        // flag names or IDs; validate as such
        if (metatype === Metatype.bitmap && Array.isArray(def)) {
            for (const value of def) {
                if (typeof value !== "string" && typeof value !== "number") {
                    this.error("INVALID_BIT_FLAG", `Default bit flag ${def} is not a string or number`);
                    continue;
                }
                if (!this.model.member(value)) {
                    this.error("UNRESOLVED_BIT_FLAG", `Default bit flag ${def} is not a valid bit value`);
                }
            }
            return true;
        }
    }
}
