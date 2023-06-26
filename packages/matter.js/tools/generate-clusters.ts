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
    ModelChildArray,
    ValueModel
} from "../src/model/index.js";
import { InternalError } from "../src/common/index.js";
import { camelize, serialize } from "../src/util/index.js";
import { Block, TsFile } from "./util/TsFile.js";

const mom = new MatterModel();
for (const cluster of mom.clusters) {
    const file = new TsFile(`src/cluster2/${cluster.name}Cluster`);
    generateCluster(file, cluster);
    file.save();
}

function generateCluster(file: TsFile, cluster: ClusterModel) {
    const definitions = file.section();
    const variance = ClusterVariance(cluster);
    const mandatory = new Set(variance.mandatory);
    const definedDatatypes = new Set<Model>();

    const ns = file.statements(`export namespace ${cluster.name}Cluster {`, "}");
    
    addImport("Cluster", "cluster/Cluster");
    ns.document(cluster, `This cluster definition includes all elements an implementation may support.  For type safety, use \`${cluster.name}.with()\` and a list of supported features.`);
    const complete = ns.expressions("export const Complete = Cluster({", "})");
    if (cluster.id != undefined) {
        complete.atom("id", `0x${cluster.id.toString(16)}`);
    }
    complete.atom("name", JSON.stringify(cluster.name));
    complete.atom("revision", JSON.stringify(cluster.revision));

    const features = cluster.features;
    if (features?.children.length) {
        addImport("BitFlag", "schema/BitmapSchema");
        const featureBlock = complete.expressions("features: {", "}");
        features.children.forEach(feature => {
            featureBlock.document(feature);
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
            options.readAcl = serialize.asIs(mapPrivilege(model.access.readPriv));
        }
        if (model.access.writePriv) {
            options.writeAcl = serialize.asIs(mapPrivilege(model.access.writePriv));
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
        addImport(factory, "cluster/Cluster");

        let responseType;
        let responseId;

        // Note - we end up mapping "status" response type to TlvNoResponse.
        // Technically "no response" and "status response" are different things
        // but there's currently only a single place in the specification where
        // it makes a difference and neither we nor CHIP implement it yet.
        if (model.response && model.response != "status") {
            const responseModel = cluster.childOfType(CommandModel, model.response);
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
        addImport(factory, "cluster/Cluster");

        const priority = camelize(model.priority ?? EventElement.Priority.Debug);

        return `${factory}(${model.id}, ${priority}, ${tlvTypeRef(model)})`;
    });

    return;


    // End of logic, helper functions follow


    function addImport(symbol: string, filename: string) {
        file.addImport(`../${filename}`, symbol);
    }

    function mapPrivilege(privilege: Access.Privilege) {
        addImport("AccessLevel", "cluster/Cluster");
        return `AccessLevel.${Access.PrivilegeName[privilege]}`
    }

    function defineDatatype(model: ValueModel) {
        let defining = model.definingModel;
        if (defining) {
            model = defining;
        } else {
            // If there's no defining model, the datatype is empty.  Use either
            // the base or the model directly for naming
            const base = model.base;
            if (base?.parent instanceof ClusterModel) {
                model = base;
            }
        }

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
        const metabase = model.metabase;
        if (!metabase) {
            debugger;
            throw new InternalError(`${model.path}: No root type for ${model.type}`);
        }

        let tlv: string;
        switch (metabase.metatype) {
            case Metatype.boolean:
                tlv = "TlvBoolean";
                addImport(tlv, "tlv/TlvBoolean");
                break;

            case Metatype.integer:
            case Metatype.float:
                tlv = camelize(`tlv ${metabase.name}`).replace("Uint", "UInt");
                addImport(tlv, "tlv/TlvNumber");
                break;

            case Metatype.bytes:
            case Metatype.string:
                tlv = metabase.name == Datatype.octstr ? "TlvByteString" : "TlvString";
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
    
            case Metatype.array:
                addImport("TlvArray", "tlv/TlvArray");
                const entry = model.listEntry;
                if (!entry) {
                    throw new InternalError(`${model.path}: No list entry type`);
                }
                tlv = `TlvArray(${tlvTypeRef(entry)})`;
                break;
    
            case Metatype.bitmap:
                tlv = defineDatatype(model);
                break;
    
            case Metatype.enum:
                tlv = `TlvEnum<${defineDatatype(model)}>()`;
                addImport("TlvEnum", "tlv/TlvNumber");
                break;

            case Metatype.object:
                if (!model.children.length && (model instanceof CommandModel || model instanceof EventModel)) {
                    addImport("TlvNoArguments", "tlv/TlvNoArguments");
                    tlv = "TlvNoArguments";
                    break;
                }
                tlv = defineDatatype(model);
                break;

            default:
                throw new InternalError(`${model.path}: No tlv mapping for base type ${metabase.name}`);
        }
        if (model.quality.nullable) {
            addImport("TlvNullable", "tlv/TlvNullable");
            tlv = `TlvNullable(${tlv})`;
        }
        return tlv;
    }
    
    function defineEnum(name: string, model: ValueModel) {
        definitions.document(model);
        const block = definitions.expressions(`export const enum ${name} {`, "}");
        model.children.forEach(child => {
            block.document(child);
            block.atom(`${child.name} = ${child.id}`);
        });
    }

    function defineStruct(name: string, model: ValueModel) {
        addImport("TlvObject", "tlv/TlvObject");
        definitions.document(model);
        const block = definitions.expressions(`export const ${name} = TlvObject({`, "})");
        model.children.forEach(field => {
            let tlv: string;
            if (field.conformance.type == Conformance.Flag.Mandatory) {
                tlv = "TlvField";
            } else {
                tlv = "TlvOptionalField"
            }
            addImport(tlv, "tlv/TlvObject");
            block.document(field);
            block.atom(field.name, `${tlv}(${field.effectiveId}, ${tlvTypeRef(field)})`);
        });
    }

    function defineBitmap(name: string, model: ValueModel) {
        addImport("TlvBitmap", "tlv/TlvNumber");
        definitions.document(model);

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
        addImport(tlvNum, "tlv/TlvNumber");

        addImport("BitFlag", "schema/BitmapSchema");
        const block = definitions.expressions(`export const ${name} = TlvBitmap(${tlvNum}, {`, "})");
        model.children.forEach(child => {
            block.document(child);
            block.atom(child.name, `BitFlag(${child.id})`);
        });
    }

    function defineElements<N extends "attributes" | "commands" | "events">(
        target: Block,
        name: N,
        define: (model: ModelChildArray.Type<ClusterModel[N]>) => string
    ) {
        const elements = Array<ModelChildArray.Type<ClusterModel[N]>>();
        for (const e of cluster[name]) {
            if (!e.global && (!(e instanceof CommandModel) || e.isRequest)) {
                elements.push(e as any);
            }
        }
        if (!elements.length) {
            return;
        }

        const elementBlock = target.expressions(`${name}: {`, "}");
        elements.forEach(model => {
            if (model.deprecated) {
                return;
            }
            elementBlock.document(model);
            elementBlock.atom(model.name, define(model));
        })
    }
}
