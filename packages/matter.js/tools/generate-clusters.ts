/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { InternalError } from "../src/common/index.js";
import { AttributeModel, ClusterModel, ClusterVariance, CommandModel, Conformance, Datatype, DatatypeModel, ElementTag, EventModel, MatterElement, MatterModel, MergeElements, Metatype, Model } from "../src/model/index.js";
import { camelize, serialize } from "../src/util/index.js";
import { Block, TsFile } from "./util/TsFile.js";
import { wordWrap } from "./util/string.js";

const mom = new MatterModel(MergeElements() as MatterElement);
for (const cluster of mom.clusters) {
    const file = new TsFile(`src/cluster2/${cluster.name}Cluster`);
    generateCluster(file, cluster);
    file.save();
}

function generateCluster(file: TsFile, cluster: ClusterModel) {
    function addImport(symbol: string, filename: string) {
        file.addImport(symbol, `../${filename}`);
    }

    function tlvTypeRef(model: DatatypeModel) {
        const base = model.metaBase;
        if (!base) {
            throw new InternalError(`Unknown metabase type for ${model.base} ${model.name}`);
        }
    
        let tlv: string;
        switch (base.name) {
            case Datatype.bool:
                tlv = "TlvBoolean";
                addImport(tlv, "tlv/TlvNumber");
    
            case Datatype.uint8:
            case Datatype.uint16:
            case Datatype.uint32:
            case Datatype.uint64:
            case Datatype.int8:
            case Datatype.int16:
            case Datatype.int32:
            case Datatype.int64:
            case Datatype.single:
            case Datatype.double:
                tlv = camelize(`tlv ${base.name}`);
                addImport(tlv, "tlv/TlvNumber");
                break;

            case "enum8":
            case "enum16":
                tlv = `TlvEnum<${model.base}>()`;
                addImport("TlvEnum", "tlv/TlvNumber");
                break;

            case Datatype.octstr:
            case "string":
                tlv = base.name == Datatype.octstr ? "TlvByteString" : "TlvString";
                addImport(tlv, "tlv/TlvString");
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

            case Datatype.list:
                addImport("TlvArray", "tlv/TlvArray");
                tlv = `TlvArray(${tlvTypeRef(model.children[0])})`;
                break;

            case Datatype.struct:
                tlv = `Tlv${model.name}`;
                break;

            default:
                throw new InternalError(`No tlv mapping for ${base.name} ${model.name}`);
        }
        if (model.quality.nullable) {
            addImport("TlvNullable", "tlv/TlvNullable");
            tlv = `TlvNullable(${tlv})`;
        }
        return tlv;
    }
    
    function document(target: Block, model: Model) {
        const lines = [];
        if (model.details) {
            lines.push(model.details);
        }
        if (model.xref) {
            let spec;
            switch (model.xref.document) {
                case "core":
                    spec = "MatterCoreSpecificationV1_1";
                    break;

                case "cluster":
                    spec = "MatterApplicationClusterSpecificationV1_1";
                    break;

                case "device":
                    spec = "MatterDeviceLibrarySpecificationV1_1";
                    break;
            }
            if (spec) {
                addImport(spec, "spec/Specifications");
                lines.push(`@see {@link ${spec}} § ${model.xref.section}`);
            }
        }
        if (lines.length) {
            target.add(...wordWrap(lines.join("\n")));
        }
    }
    
    function defineEnum(datatype: DatatypeModel) {
        document(file, datatype);
        const block = file.expressions(`export const enum ${datatype.name} = {`, "};");
        datatype.children.forEach(child => {
            document(block, child);
            block.atom(child.name, child.id);
        });
    }

    function defineStruct(datatype: DatatypeModel) {
        addImport("TlvObject", "tlv/TlvObject");
        document(file, datatype);
        const block = file.expressions(`export const ${datatype.name} = TlvObject({`, "})");
        datatype.children.forEach(field => {
            let tlv: string;
            if (field.conformance.type == Conformance.Flag.Mandatory) {
                tlv = "TlvField";
            } else {
                tlv = "TlvOptionalField"
            }
            addImport(tlv, "tlv/TlvObject");
            document(block, field);
            block.atom(field.name, `${tlv}(${field.effectiveId}, ${tlvTypeRef(field)})`);
        });
    }

    function defineBitmap(datatype: DatatypeModel) {
        addImport("TlvBitmap", "tlv/TlvNumber");
        document(file, datatype);

        let tlvNum;
        switch (datatype.metaBase?.name) {
            case "enum8":
                tlvNum = "TlvUint8";
                break;

            case "enum16":
                tlvNum = "TlvUint16";
                break;

            default:
                throw new InternalError(`Could not determin numeric base for ${datatype.base} ${datatype.name}`);
        }
        addImport(tlvNum, "tlv/TlvNumber");

        const block = file.expressions(`export const ${datatype.name} = TlvBitmap(${tlvNum}, {`, "});");
        datatype.children.forEach(child => {
            document(block, child);
            block.atom(child.name, `BitFlag(${child.id})`);
        });
    }

    cluster.datatypes.forEach(datatype => {
        switch (datatype.metatype) {
            case Metatype.enum:
                defineEnum(datatype);
                break;

            case Metatype.object:
                defineStruct(datatype);
                break;

            case Metatype.bitmap:
                defineBitmap(datatype);
                break;

            default:
                throw new InternalError(`Unsupported top-level ${datatype.metatype} ${datatype.name}`);
        }
    });

    const variance = ClusterVariance(cluster);
    const elements = file.statements(`export namespace ${cluster}Cluster {`, "}");
}
