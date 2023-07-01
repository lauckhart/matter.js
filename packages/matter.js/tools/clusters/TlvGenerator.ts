/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { InternalError } from "../../src/common/index.js";
import { ClusterModel, CommandModel, Conformance, Datatype, DatatypeModel, EventModel, Globals, Metatype, Model, ValueModel } from "../../src/model/index.js";
import { camelize, serialize } from "../../src/util/index.js";
import { asObjectKey } from "../util/string.js";
import { ClusterFile } from "./ClusterFile.js";

const IntegerGlobalMap: { [name: string]: [ string, string ]} = {
    [Globals.actionId.name]: [ "datatype", "TlvAttributeId" ],
    [Globals.clusterId.name]: [ "datatype", "TlvClusterId" ],
    [Globals.commandId.name]: [ "datatype", "TlvCommandId" ],
    [Globals.deviceTypeId.name]: [ "datatype", "TlvDeviceTypeId" ],
    [Globals.endpointNo.name]: [ "datatype", "TlvEndpointNumber" ],
    [Globals.eventId.name]: [ "datatype", "TlvEventId" ],
    [Globals.fabricId.name]: [ "datatype", "TlvFabricId" ],
    [Globals.groupId.name]: [ "datatype", "TlvGroupId" ],
    [Globals.nodeId.name]: [ "datatype", "TlvNodeId" ],
    [Globals.SubjectId.name]: [ "datatype", "TlvSubjectId" ],
    [Globals.vendorId.name]: [ "datatype", "TlvVendorId" ]
};

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
     * Import TLV type with automatic file naming.  Returns the name.
     */
    importTlv(fileOrDirectory: string, name: string) {
        if (fileOrDirectory == "datatype") {
            fileOrDirectory = `${fileOrDirectory}/${name.replace(/^Tlv/, "")}`;
        } else if (fileOrDirectory == "tlv") {
            fileOrDirectory = `${fileOrDirectory}/${name}`;
        }
        this.file.addImport(fileOrDirectory, name);
        return name;
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
                tlv = this.importTlv("tlv", "TlvBoolean");
                break;

            case Metatype.float:
                if (metabase.name == "single") {
                    tlv = "TlvFloat";
                } else {
                    tlv = "TlvDouble";
                }
                this.importTlv("tlv/TlvNumber", tlv);
                break;

            case Metatype.integer:
                tlv = this.integerTlv(metabase, model);
                break;

            case Metatype.any:
                tlv = this.importTlv("tlv", "TlvAny");
                break;
    
            case Metatype.bytes:
            case Metatype.string:
                tlv = this.importTlv("tlv/TlvString", metabase.name == Datatype.octstr ? "TlvByteString" : "TlvString");
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
                this.importTlv("tlv", "TlvArray");
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
                        tlv = this.primitiveTlv(metabase, model);
                    }
                }
                break;
    
            case Metatype.enum:
                {
                    const dt = this.defineDatatype(model);
                    if (dt) {
                        this.importTlv("tlv/TlvNumber", "TlvEnum");
                        tlv = `TlvEnum<${dt}>()`;
                    } else {
                        // No fields; revert to the primitive type the enum
                        // derives from
                        tlv = this.primitiveTlv(metabase, model);
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
                        return this.importTlv("tlv", "TlvNoArguments");
                    }
                }
                break;

            default:
                throw new InternalError(`${model.path}: No tlv mapping for base type ${metabase.name}`);
        }
        if (model.quality.nullable) {
            this.importTlv("tlv", "TlvNullable");
            tlv = `TlvNullable(${tlv})`;
        }
        return tlv;
    }

    private integerTlv(metabase: ValueModel, model: ValueModel) {
        const globalMapping = IntegerGlobalMap[model.globalBase?.type as any];
        if (globalMapping) {
            return this.importTlv(...globalMapping);
        }
        
        let tlv = camelize(`tlv ${metabase.name}`).replace("Uint", "UInt");
        this.importTlv("tlv/TlvNumber", tlv);

        const bounds = {} as { min?: number, max?: number };
        if (model.constraint.min != undefined) {
            bounds.min = model.constraint.min;
        }
        if (model.constraint.max != undefined) {
            bounds.max = model.constraint.max;
        }
        if (Object.keys(bounds).length) {
            tlv = `${tlv}.bound(${serialize(bounds)})`;
        }

        return tlv;
    }

    private primitiveTlv(metabase: ValueModel, model: ValueModel) {
        const primitive = metabase.primitiveBase;
        if (!primitive) {
            throw new InternalError(`No primitive base for type ${metabase.name}`);
        }
        return this.integerTlv(primitive, model);
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
        this.importTlv("tlv", "TlvObject");
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
                this.importTlv("tlv/TlvObject", tlv);
                block.atom(camelize(field.name, false), `${tlv}(${field.effectiveId}, ${this.reference(field)})`)
                    .document(field);
            });
        });
    }

    private defineBitmap(name: string, model: ValueModel) {
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

        this.importTlv("tlv/TlvNumber", tlvNum);
        this.importTlv("tlv/TlvNumber", "TlvBitmap");
        this.importTlv("schema/BitmapSchema", "BitFlag");

        const block = this.file.types.expressions(`export const ${name}Bits = {`, "}")
            .document(model);

        this.file.types.insertingBefore(block, () => {
            model.children.forEach(child => {
                block.atom(camelize(child.name, false), `BitFlag(${child.id})`)
                    .document(child);
            });
        });

        this.file.types.atom(`export const ${name} = TlvBitmap(${tlvNum}, ${name}Bits)`);
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

        name = "Tlv" + name;

        if (this.definedDatatypes.has(model)) {
            return name;
        }

        this.definedDatatypes.add(model);
        if (this.definedNames.has(name)) {
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
