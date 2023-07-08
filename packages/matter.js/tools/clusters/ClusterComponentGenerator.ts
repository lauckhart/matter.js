/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import {
    Access,
    AttributeModel,
    ClusterModel,
    CommandModel,
    ElementTag,
    EventElement,
    EventModel,
    FieldValue,
    Metatype,
    Model,
    ValueModel
} from "../../src/model/index.js";
import { NamedComponent } from "../../src/model/logic/cluster-variance/NamedComponents.js";
import { serialize, camelize } from "../../src/util/String.js";
import { Block } from "../util/TsFile.js";
import { ClusterFile } from "./ClusterFile.js";
import { TlvGenerator } from "./TlvGenerator.js";

/** Generates cluster attributes, commands and events */
export class ClusterComponentGenerator {
    private tlv: TlvGenerator;
    private file: ClusterFile;

    constructor(private target: Block, private cluster: ClusterModel) {
        this.file = target.file as ClusterFile;
        this.tlv = new TlvGenerator(this.file, cluster);
    }

    defineComponent(component: NamedComponent): Block {
        this.target.file.addImport("cluster/ClusterFactory", "ClusterComponent");
        const block = this.target.expressions(`export const ${component.name}Component = ClusterComponent({`, `})`)
            .document(component.documentation);
        const mandatory = new Set(component.mandatory);

        const elements = [ ...component.optional, ...component.mandatory ]
            .sort((a, b) => a.id! - b.id!);

        this.defineTypedElements(AttributeModel, elements, block, (model, add) => {
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

            const tlvType = this.tlv.reference(model);

            const block = add(factory);
            block.atom(model.id);
            block.atom(tlvType);
    
            const options = block.expressions("{", "}");
            if (model.quality.scene) {
                options.atom("scene", true);
            }
            if (model.quality.nonvolatile) {
                options.atom("persistent", true);;
            }
            if (model.quality.changesOmitted) {
                options.atom("omitChanges", true);
            }

            // TODO - don't currently have a way to express "this field should
            // default to the value of another field" as indicated by
            // model.default.reference
            const def = this.createDefaultValue(model, tlvType);
            if (def !== undefined) {
                options.value(def, "default: ");
            }
            if (model.access.readPriv) {
                options.atom("readAcl", this.mapPrivilege(model.access.readPriv));
            }
            if (model.access.writePriv) {
                options.atom("writeAcl", this.mapPrivilege(model.access.writePriv));
            }

            if (!options.length) {
                options.remove();
            }
        });
    
        this.defineTypedElements(CommandModel, elements, block, (model, add) => {
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

            const block = add(factory);
            block.atom(model.id);
            block.atom(this.tlv.reference(model));

            // Note - we end up mapping "status" response type to TlvNoResponse.
            // Technically "no response" and "status response" are different things
            // but there's currently only a single place in the specification where
            // it makes a difference and neither we nor CHIP implement it yet
            let responseModel;
            if (model.response && model.response !== "status") {
                responseModel = this.cluster.get(CommandModel, model.response);
            }
            if (responseModel) {
                block.atom(responseModel.id);
                block.atom(this.tlv.reference(responseModel));
            } else {
                this.file.addImport("cluster/Cluster", "TlvNoResponse");
                block.atom(model.id);
                block.atom("TlvNoResponse");
            }
        });

        this.defineTypedElements(EventModel, elements, block, (model, add) => {
            let factory;
            if (mandatory.has(model)) {
                factory = "Event";
            } else {
                factory = "OptionalEvent";
            }
            this.file.addImport("cluster/Cluster", factory);
            this.file.addImport("cluster/Cluster", "EventPriority");
    
            const priority = camelize(model.priority ?? EventElement.Priority.Debug);

            const block = add(factory);
            block.atom(model.id);
            block.atom(`EventPriority.${priority}`);
            block.atom(this.tlv.reference(model));
        });

        return block;
    }

    private mapPrivilege(privilege: Access.Privilege) {
        this.file.addImport("cluster/Cluster", "AccessLevel");
        return `AccessLevel.${Access.PrivilegeName[privilege]}`
    }

    private defineTypedElements<T extends (new(...args: any[]) => Model) & { Tag: ElementTag }>(
        type: T,
        elements: ValueModel[],
        target: Block,
        define: (model: InstanceType<T>, add: (factory: string) => Block) => void
    ) {
        const typed = elements.filter(e => e instanceof type && !e.deprecated);

        const definitions = target.expressions(`${type.Tag}s: {`, "}");
        for (const model of typed) {
            define(model as InstanceType<T>, factory =>
                definitions.expressions(`${camelize(model.name, false)}: ${factory}(`, ")")
                    .document(model)
            );
        }
        if (!definitions.length) {
            definitions.remove();
        }
    }

    private createDefaultValue(model: AttributeModel, tlvType: string) {
        let def = model.effectiveDefault;
        if (def === undefined || def === null) {
            return def;
        }

        // TODO - don't currently have a way to express "this field should
        // default to the value of another field" as indicated by
        // model.default.reference
        if (FieldValue.is(def, FieldValue.reference)) {
            return;
        }

        const metatype = model.effectiveMetatype;

        switch (metatype) {
            case Metatype.integer:
            case Metatype.float:
                return FieldValue.numericValue(def, model.type);

            case Metatype.bitmap:
                if (!FieldValue.is(def, FieldValue.flags)) {
                    // TLV doesn't understand anything other than an object
                    // as the default value.  To create said object we need
                    // named references
                    return;
                }

                this.file.addImport("schema/BitmapSchema", "BitFlags");
                const flags = (def as FieldValue.Flags).flags.map(f => serialize(camelize(f, true)));
                def = serialize.asIs(`BitFlags(${tlvType}Bits, ${flags.join(", ")})`);

                break;
        }

        return def;
    }
}
