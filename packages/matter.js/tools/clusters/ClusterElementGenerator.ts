/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Access, AttributeModel, ClusterModel, CommandModel, ElementTag, ElementVariance, EventElement, EventModel, Model } from "../../src/model/index.js";
import { serialize, camelize } from "../../src/util/String.js";
import { Block } from "../util/TsFile.js";
import { ClusterFile } from "./ClusterFile.js";
import { TlvGenerator } from "./TlvGenerator.js";

/** Generates cluster attributes, commands and events */
export class ClusterElementGenerator {
    private tlv: TlvGenerator;

    constructor(private file: ClusterFile, private cluster: ClusterModel) {
        this.tlv = new TlvGenerator(this.file, cluster);
    }

    defineElements(name: string, elements: ElementVariance) {
        const block = this.file.definitions.expressions(`const ${name} = {`, `}`);
        const mandatory = new Set(elements.mandatory);

        this.defineTypedElements(AttributeModel, elements, block, model => {
            if (model.base instanceof AttributeModel && model.base.global) {
                return;
            }
    
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
            this.file.addImport("cluster/Cluster", factory);
    
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
            // TODO - don't currently have a way to express "this field should
            // default to the value of another field" as indicated by
            // model.default.reference
            if (model.default !== undefined && !(model.default && model.default.reference)) {
                options.default = model.default;
            }
            if (model.access.readPriv) {
                options.readAcl = serialize.asIs(this.mapPrivilege(model.access.readPriv));
            }
            if (model.access.writePriv) {
                options.writeAcl = serialize.asIs(this.mapPrivilege(model.access.writePriv));
            }
    
            const args = [ model.id, this.tlv.reference(model) ];
            if (Object.keys(options).length) {
                args.push(serialize(options)!);
            }
    
            return `${factory}(${args.join(", ")})`;
        });
    
        this.defineTypedElements(CommandModel, elements, block, model => {
            if (!model.isRequest) {
                return;
            }
    
            let factory;
            if (mandatory.has(model)) {
                factory = "Command";
            } else {
                factory = "OptionalCommand";
            }
            this.file.addImport("cluster/Cluster", factory);
    
            let responseType;
            let responseId;
    
            // Note - we end up mapping "status" response type to TlvNoResponse.
            // Technically "no response" and "status response" are different things
            // but there's currently only a single place in the specification where
            // it makes a difference and neither we nor CHIP implement it yet
            if (model.response && model.response != "status") {
                const responseModel = this.cluster.get(CommandModel, model.response);
                if (responseModel) {
                    responseId = responseModel.id;
                    responseType = this.tlv.reference(responseModel);
                }
            }
            if (!responseType) {
                this.file.addImport("cluster/Cluster", "TlvNoResponse");
                responseId = model.id;
                responseType = "TlvNoResponse";
            }
    
            return `${factory}(${model.id}, ${this.tlv.reference(model)}, ${responseId}, ${responseType})`;
        });
    
        this.defineTypedElements(EventModel, elements, block, model => {
            let factory;
            if (mandatory.has(model)) {
                factory = "Event";
            } else {
                factory = "OptionalEvent";
            }
            this.file.addImport("cluster/Cluster", factory);
            this.file.addImport("cluster/Cluster", "EventPriority");
    
            const priority = camelize(model.priority ?? EventElement.Priority.Debug);
    
            return `${factory}(${model.id}, EventPriority.${priority}, ${this.tlv.reference(model)})`;
        });
    }

    private mapPrivilege(privilege: Access.Privilege) {
        this.file.addImport("cluster/Cluster", "AccessLevel");
        return `AccessLevel.${Access.PrivilegeName[privilege]}`
    }

    private defineTypedElements<T extends (new(...args: any[]) => Model) & { Tag: ElementTag }>(
        type: T,
        elements: ElementVariance,
        target: Block,
        define: (model: InstanceType<T>) => string | undefined
    ) {
        const typed = [ ...elements.optional, ...elements.mandatory ]
            .filter(e => e instanceof type && !e.deprecated)
            .sort((a, b) => a.id! - b.id!)

        const definitions = Array<{ model: Model, body: string }>();
        for (const model of typed) {
            const body = define(model as InstanceType<T>);
            
            if (body) {
                definitions.push({ model, body });
            }
        }
        if (!definitions.length) {
            return;
        }

        const elementBlock = target.expressions(`${type.Tag}s: {`, "}");
        for (const { model, body } of definitions) {
            elementBlock.atom(camelize(model.name, false), body)
                .document(model);
        }
    }

}
