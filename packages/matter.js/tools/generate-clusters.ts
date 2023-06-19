/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import {
    Access,
    ClusterModel,
    ClusterVariance,
    CommandModel,
    Conformance,
    Datatype,
    EventElement,
    EventModel,
    MatterModel,
    Metatype,
    Model,
    ValueModel
} from "../src/model/index.js";
import { InternalError } from "../src/common/index.js";
import { camelize, serialize } from "../src/util/index.js";
import { Block, TsFile } from "./util/TsFile.js";
import { wordWrap } from "./util/string.js";

const mom = new MatterModel();
for (const cluster of mom.clusters) {
    const file = new TsFile(`src/cluster2/${cluster.name}Cluster`);
    generateCluster(file, cluster);
    file.save();
}

function generateCluster(file: TsFile, cluster: ClusterModel) {
    const variance = ClusterVariance(cluster);
    const mandatory = new Set(variance.mandatory);
    const definedDatatypes = new Set<Model>();

    const ns = file.statements(`export namespace ${cluster}Cluster {`, "}");
    
    addImport("Cluster", "cluster/Cluster");
    document(ns, cluster, `This cluster definition includes all elements an implementation may support.  For type safety, use \`${cluster.name}.with()\` and a list of supported features.`);
    const complete = ns.expressions("export const Complete: Cluster = {", "};");
    complete.atom("id", `0x${cluster.id.toString(16)}`);
    complete.atom("name", JSON.stringify(cluster.name));
    complete.atom("revision", JSON.stringify(cluster.revision));

    const features = cluster.features;
    if (features?.children.length) {
        addImport("BitFlag", "tlv/BitmapSchema");
        const featureBlock = complete.expressions("features: {", "}");
        features.children.forEach(feature => {
            document(featureBlock, feature);
            featureBlock.atom(feature.name, `BitFlag(${feature.effectiveId})`);
        })
    }

    defineElements(complete, "attributes", model => {
        const factoryParts = Array<string>("Attribute");
        if (model.fixed) {
            factoryParts.unshift("Fixed");
        }
        if (model.fabricScoped) {
            factoryParts.unshift("FabricScoped");
        }
        if (model.writable) {
            factoryParts.unshift("Writable");
        }
        if (!mandatory.has(model)) {
            factoryParts.unshift("Optional");
        }
        factoryParts.push("Attribute");

        const factory = factoryParts.join("");
        addImport(factory, "cluster/Cluster");

        const options = {} as { [name: string]: any };
        if (model.quality.scene) {
            options.scene = true;
        }
        if (model.quality.nonvolatile) {
            options.persistent = true;
        }
        if (model.quality.changesOmitted) {
            options.omitChanges = true;
        }
        if (model.default !== undefined) {
            options.default = model.default;
        }
        if (model.access.readPriv) {
            options.readAcl = mapPrivilege(model.access.readPriv);
        }
        if (model.access.writePriv) {
            options.writeAcl = mapPrivilege(model.access.writePriv);
        }

        const args = [ model.id, tlvTypeRef(model) ];
        if (Object.keys(options).length) {
            args.push(serialize(options)!);
        }

        return `${factory}(${args.join(", ")})`;
    });

    defineElements(complete, "commands", model => {
        let factory;
        if (mandatory.has(model)) {
            factory = "Command";
        } else {
            factory = "OptionalCommand";
        }

        let responseType;
        let responseId;
        // Note - we end up mapping "status" response type to TlvNoResponse.
        // This doesn't seem technically correct but is the way we've
        // historically done it so sticking with that for now
        if (model.response && model.response != "status") {
            const responseModel = cluster.local(CommandModel, model.response);
            if (responseModel) {
                responseId = responseModel.id;
                responseType = tlvTypeRef(responseModel);
            }
        }
        if (!responseType) {
            addImport("TlvNoResponse", "cluster/Cluster");
            responseId = model.id;
            responseType = "TlvNoResponse";
        }

        return `${factory}(${model.id}, ${tlvTypeRef(model)}, ${responseId}, ${responseType})`;
    });

    defineElements(complete, "events", model => {
        let factory;
        if (mandatory.has(model)) {
            factory = "Event";
        } else {
            factory = "OptionalEvent";
        }

        const priority = camelize(model.priority ?? EventElement.Priority.Debug);

        return `${factory}(${model.id}, ${priority}, ${tlvTypeRef(model)})`;
    });

    return;


    // End of logic, helper functions follow


    function addImport(symbol: string, filename: string) {
        file.addImport(symbol, `../${filename}`);
    }

    function mapPrivilege(privilege: Access.Privilege) {
        file.addImport("AccessLevel", "cluster/Cluster");
        return `AccessLevel.${Access.PrivilegeName[privilege]}`
    }

    function defineDatatype(model: ValueModel) {
        let name = model.name;
        if (model instanceof CommandModel && model.isRequest) {
            name += "Request";
        }
        if (model instanceof EventModel) {
            name += "Event";
        }

        if (definedDatatypes.has(model)) {
            return name;
        }

        definedDatatypes.add(model);

        switch (model.effectiveMetatype) {
            case Metatype.enum:
                defineEnum(name, model);
                break;

            case Metatype.object:
                defineStruct(name, model);
                break;

            case Metatype.bitmap:
                defineBitmap(name, model);
                break;

            default:
                throw new InternalError(`${model.path}: Top-level ${model.effectiveMetatype} is unsupported`);
        }

        return name;
    }

    function tlvTypeRef(model: ValueModel): string {
        const base = model.metaBase;
        if (!base) {
            throw new InternalError(`${model.path}: No base type ${model.type}`);
        }

        if (model.type) {
            const definition = cluster.local(model.type);
            if (definition instanceof ValueModel) {
                return tlvTypeRef(definition);
            }
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

            case Datatype.map8:
            case Datatype.map16:
            case Datatype.map32:
            case Datatype.map64:
                tlv = defineDatatype(model);
                break;

            case "enum8":
            case "enum16":
                tlv = `TlvEnum<${defineDatatype(model)}>()`;
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
                tlv = defineDatatype(model);
                break;

            default:
                throw new InternalError(`${model.path}: No tlv mapping for base type ${base.name}`);
        }
        if (model.quality.nullable) {
            addImport("TlvNullable", "tlv/TlvNullable");
            tlv = `TlvNullable(${tlv})`;
        }
        return tlv;
    }
    
    function document(target: Block, model: Model, extra?: string) {
        const lines = [];
        if (model.details) {
            lines.push(model.details);
        }
        if (extra) {
            lines.push(extra);
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
    
    function defineEnum(name: string, model: ValueModel) {
        document(file, model);
        const block = file.expressions(`export const enum ${name} = {`, "};");
        model.children.forEach(child => {
            document(block, child);
            block.atom(child.name, child.id);
        });
    }

    function defineStruct(name: string, model: ValueModel) {
        addImport("TlvObject", "tlv/TlvObject");
        document(file, model);
        const block = file.expressions(`export const ${name} = TlvObject({`, "})");
        model.children.forEach(field => {
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

    function defineBitmap(name: string, model: ValueModel) {
        addImport("TlvBitmap", "tlv/TlvNumber");
        document(file, model);

        let tlvNum;
        switch (model.metaBase?.name) {
            case "map8":
                tlvNum = "TlvUint8";
                break;

            case "map16":
                tlvNum = "TlvUint16";
                break;

            case "map32":
                tlvNum = "TlvUint32";
                break;

            case "map64":
                tlvNum = "TlvUint64";
                break;

            default:
                throw new InternalError(`${model.path}: Could not determine numeric type for ${model.type}`);
        }
        addImport(tlvNum, "tlv/TlvNumber");

        addImport("BitFlag", "tlv/TlvBitmap");
        const block = file.expressions(`export const ${name} = TlvBitmap(${tlvNum}, {`, "})");
        model.children.forEach(child => {
            document(block, child);
            block.atom(child.name, `BitFlag(${child.id})`);
        });
    }

    function defineElements<N extends "attributes" | "commands" | "events">(
        target: Block,
        name: N,
        define: (model: ClusterModel[N][number]) => string
    ) {
        const elements = Array<ClusterModel[N][number]>();
        for (const e of cluster[name]) {
            if (!e.isGlobal && (!(e instanceof CommandModel) || e.isRequest)) {
                elements.push(e);
            }
        }
        if (!elements.length) {
            return;
        }

        const elementBlock = target.expressions(`${name}: {`, "}");
        elements.forEach(model => {
            document(elementBlock, model);
            elementBlock.atom(model.name, define(model));
        })
    }
}
