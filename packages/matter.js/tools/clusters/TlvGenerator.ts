/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { InternalError } from "../../src/common/index.js";
import { ClusterModel, CommandModel, Conformance, Datatype, DatatypeModel, EventModel, Metatype, Model, ValueModel } from "../../src/model/index.js";
import { camelize, serialize } from "../../src/util/index.js";
import { asObjectKey } from "../util/string.js";
import { ClusterFile } from "./ClusterFile.js";

/** Adds TLV structures for ValueModels to a ClusterFile */
export class TlvGenerator {
    private definedDatatypes = new Set<Model>();
    private definedNames = new Set<string>();
    private scopedNames = new Set<string>();

    constructor(private file: ClusterFile, cluster: ClusterModel) {
        // Find datatype names that conflict at top-level module scope.
        // Datatypes at cluster level get to use their own name but for nested
        // structures we prepend the parent name
        const names = new Set<string>();
        cluster.visit((model) => {
            if (model instanceof DatatypeModel && model.children.length) {
                const metatype = model.effectiveMetatype;
                switch (metatype) {
                    case Metatype.object:
                    case Metatype.enum:
                    case Metatype.bitmap:
                        if (names.has(model.name)) {
                            this.scopedNames.add(model.name);
                        } else {
                            names.add(model.name);
                        }
                }
            }
        })
    }

    /**
     * Reference a TLV type.  Adds definitions to the file as necessary.
     * 
     * @return the referencing TS expression as a string
     */
    reference(model: ValueModel): string {
        const metabase = model.metabase;
        if (!metabase) {
            throw new InternalError(`${model.path}: No root type for ${model.type}`);
        }

        let tlv: string;
        switch (metabase.metatype) {
            case Metatype.boolean:
                tlv = "TlvBoolean";
                this.file.addImport("tlv/TlvBoolean", tlv);
                break;

            case Metatype.float:
                if (metabase.name == "single") {
                    tlv = "TlvFloat";
                } else {
                    tlv = "TlvDouble";
                }
                this.file.addImport("tlv/TlvNumber", tlv);
                break;

            case Metatype.integer:
                tlv = this.integerTlv(metabase);
                break;

            case Metatype.any:
                tlv = "TlvAny";
                this.file.addImport("tlv/TlvAny", tlv);
                break;
    
            case Metatype.bytes:
            case Metatype.string:
                tlv = metabase.name == Datatype.octstr ? "TlvByteString" : "TlvString";
                this.file.addImport("tlv/TlvString", tlv);
                if (model.constraint.min != undefined || model.constraint.max != undefined) {
                    const bounds = {} as any;
                    if (model.constraint.min) {
                        bounds.minLength = model.constraint.min;
                    }
                    if (model.constraint.max) {
                        bounds.maxLength = model.constraint.max;
                    }
                    tlv = `${tlv}.bound(${serialize(bounds)})`;
                }
                break;
    
            case Metatype.array:
                this.file.addImport("tlv/TlvArray", "TlvArray");
                const entry = model.listEntry;
                if (!entry) {
                    throw new InternalError(`${model.path}: No list entry type`);
                }
                tlv = `TlvArray(${this.reference(entry)})`;
                break;
    
            case Metatype.bitmap:
                {
                    const dt = this.defineDatatype(model);
                    if (dt) {
                        tlv = dt;
                    } else {
                        // No fields; revert to the primitive type the bitmap
                        // derives from
                        tlv = this.primitiveTlv(metabase);
                    }
                }
                break;
    
            case Metatype.enum:
                {
                    const dt = this.defineDatatype(model);
                    if (dt) {
                        this.file.addImport("tlv/TlvNumber", "TlvEnum");
                        tlv = `TlvEnum<${dt}>()`;
                    } else {
                        // No fields; revert to the primitive type the enum
                        // derives from
                        tlv = this.primitiveTlv(metabase);
                    }
                }
                break;

            case Metatype.object:
                {
                    const dt = this.defineDatatype(model);
                    if (dt) {
                        tlv = dt;
                    } else {
                        // This is only legal for commands but we'll fall back
                        // to it in the (illegal) case where an object has no
                        // fields
                        this.file.addImport("tlv/TlvNoArguments", "TlvNoArguments");
                        return "TlvNoArguments";
                    }
                }
                break;

            default:
                throw new InternalError(`${model.path}: No tlv mapping for base type ${metabase.name}`);
        }
        if (model.quality.nullable) {
            this.file.addImport("tlv/TlvNullable", "TlvNullable");
            tlv = `TlvNullable(${tlv})`;
        }
        return tlv;
    }

    private integerTlv(metabase: ValueModel) {
        const tlv = camelize(`tlv ${metabase.name}`).replace("Uint", "UInt");
        this.file.addImport("tlv/TlvNumber", tlv);
        return tlv;
    }

    private primitiveTlv(metabase: ValueModel) {
        const primitive = metabase.primitiveBase;
        if (!primitive) {
            throw new InternalError(`No primitive base for type ${metabase.name}`);
        }
        return this.integerTlv(primitive);
    }

    private defineEnum(name: string, model: ValueModel) {
        const block = this.file.types.expressions(`export const enum ${name} {`, "}")
            .document(model);
        this.file.types.insertingBefore(block, () => {
            model.children.forEach(child => {
                block.atom(`${asObjectKey(child.name)} = ${child.id}`)
                    .document(child);
            });
        });
    }

    private defineStruct(name: string, model: ValueModel) {
        this.file.addImport("tlv/TlvObject", "TlvObject");
        const block = this.file.types.expressions(`export const ${name} = TlvObject({`, "})")
            .document(model);
        this.file.types.insertingBefore(block, () => {
            model.children.forEach(field => {
                let tlv: string;
                if (field.conformance.type == Conformance.Flag.Mandatory) {
                    tlv = "TlvField";
                } else {
                    tlv = "TlvOptionalField"
                }
                this.file.addImport("tlv/TlvObject", tlv);
                block.atom(field.name, `${tlv}(${field.effectiveId}, ${this.reference(field)})`)
                    .document(field);
            });
        });
    }

    private defineBitmap(name: string, model: ValueModel) {
        this.file.addImport("tlv/TlvNumber", "TlvBitmap");

        let tlvNum;
        switch (model.metabase?.name) {
            case "map8":
                tlvNum = "TlvUInt8";
                break;

            case "map16":
                tlvNum = "TlvUInt16";
                break;

            case "map32":
                tlvNum = "TlvUInt32";
                break;

            case "map64":
                tlvNum = "TlvUInt64";
                break;

            default:
                throw new InternalError(`${model.path}: Could not determine numeric type for ${model.type}`);
        }
        this.file.addImport("tlv/TlvNumber", tlvNum);

        this.file.addImport("schema/BitmapSchema", "BitFlag");
        const block = this.file.types.expressions(`export const ${name} = TlvBitmap(${tlvNum}, {`, "})")
            .document(model);

        this.file.types.insertingBefore(block, () => {
            model.children.forEach(child => {
                block.atom(child.name, `BitFlag(${child.id})`)
                    .document(child);
            });
        });
    }

    private defineDatatype(model: ValueModel) {
        let defining = model.definingModel;
        if (defining) {
            model = defining;
        } else {
            // If there's no defining model, the datatype is empty.  Use either
            // the base or the model directly for naming.  Handling of this is
            // context specific
            return;
        }

        let name = model.name;
        if (this.scopedNames.has(name) && model.parent && !(model instanceof ClusterModel)) {
            name = `${model.parent.name}${name}`;
        }

        if (model instanceof CommandModel && model.isRequest) {
            name += "Request";
        }
        if (model instanceof EventModel) {
            name += "Event";
        }

        if (this.definedDatatypes.has(model)) {
            return name;
        }

        this.definedDatatypes.add(model);
        if (this.definedNames.has(name)) {
            debugger;
            throw new InternalError(`Duplicate definitions of module-scope "${name}"`);
        }
        this.definedNames.add(name);

        switch (model.effectiveMetatype) {
            case Metatype.enum:
                this.defineEnum(name, model);
                break;

            case Metatype.object:
                this.defineStruct(name, model);
                break;

            case Metatype.bitmap:
                this.defineBitmap(name, model);
                break;

            default:
                throw new InternalError(`${model.path}: Top-level ${model.effectiveMetatype} is unsupported`);
        }

        return name;
    }
}
