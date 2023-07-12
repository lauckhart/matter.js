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
import { InferredComponent } from "../../src/model/logic/cluster-variance/InferredComponents.js";
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

    defineComponent(component: NamedComponent) {
        this.file.addImport("cluster/ClusterFactory", "ClusterComponent");
        const name = `${component.name}Component`;
        const block = this.target.expressions(`export const ${name} = ClusterComponent({`, `})`)
            .document(component.documentation);
        return this.populateComponent(component, block);
    }

    populateComponent(component: InferredComponent, block: Block) {
        const mandatory = new Set(component.mandatory);

        const elements = [...component.optional, ...component.mandatory]
            .sort((a, b) => (a.id ?? 0) - (b.id ?? 0));

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
                options.atom("persistent", true);
            }
            if (model.quality.changesOmitted) {
                options.atom("omitChanges", true);
            }

            // TODO - don't currently have a way to express "this field should
            // default to the value of another field" as indicated by
            // model.default.reference
            const def = this.createDefaultValue(model);
            if (def !== undefined) {
                options.value(def, "default: ");
            }
            
            // View is the default
            if (model.access.readPriv && model.access.readPriv != Access.Privilege.View) {
                options.atom("readAcl", this.mapPrivilege(model.access.readPriv));
            }

            // Operate is the default
            if (model.access.writePriv && model.access.writePriv != Access.Privilege.Operate) {
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

    private defineTypedElements<T extends (new (...args: any[]) => Model) & { Tag: ElementTag }>(
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

    private createDefaultValue(model: AttributeModel) {
        let defaultValue = model.effectiveDefault;
        if (defaultValue === undefined || defaultValue === null) {
            return defaultValue;
        }

        // TODO - don't currently have a way to express "this field should
        // default to the value of another field" as indicated by
        // model.default.reference
        if (FieldValue.is(defaultValue, FieldValue.reference)) {
            return;
        }

        const metatype = model.effectiveMetatype;

        switch (metatype) {
            case Metatype.integer:
            case Metatype.float:
                // Simple numbers serialize either as one of our "wrapped ID"
                // things or just as a numeric literal
                const id = FieldValue.numericValue(defaultValue, model.type);
                if (id !== undefined && this.tlv.isSpecializedId(model)) {
                    return { id };
                }
                return id;

            case Metatype.enum:
                // For enums, translate ID or string into an enum constant
                if (typeof defaultValue == "number" || typeof defaultValue == "string") {
                    const value = model.member(defaultValue);
                    if (value) {
                        let enumName = this.tlv.nameFor(value.parent);
                        if (enumName) {
                            return serialize.asIs(`${enumName}.${value.name}`);
                        }
                    }
                }
                break;

            case Metatype.bitmap:
                // Bitmaps are more complicated.  We need to collect bits into
                // individual fields.  Then we generate a value for each field
                // depending on the field type
                const bits = FieldValue.numericValue(defaultValue, model.type);
                if (bits === undefined) {
                    break;
                }

                const fields = new Map<ValueModel, number>();
                for (let bit = 0; Math.pow(bit, 2) <= bits; bit++) {
                    if (!(bits & (1 << bit))) {
                        continue;
                    }

                    const definition = model.bitDefinition(bit);
                    if (!definition || definition.deprecated) {
                        continue;
                    }

                    if (definition.constraint.value !== undefined) {
                        fields.set(definition, 1);
                    } else if (definition.constraint.min !== undefined) {
                        const fieldBit = 1 << (bit - (definition.constraint.min as number));
                        fields.set(definition, (fields.get(definition) ?? 0) & fieldBit);
                    }
                }

                const properties = {} as { [name: string]: boolean | number | string };
                for (const [field, bits] of fields) {
                    const name = camelize(field.name, false);
                    if (typeof field.constraint.value === "number") {
                        properties[name] = true;
                    } else {
                        const defining = field.definingModel;
                        const enumValue = defining?.member(bits);
                        if (enumValue) {
                            properties[name] = serialize.asIs(`${this.tlv.nameFor(defining)}.${enumValue.name}`);
                        } else {
                            properties[name] = bits;
                        }
                    }
                }

                this.file.addImport("schema/BitmapSchema", "BitsFromPartial");
                return serialize.asIs(`BitsFromPartial(${this.tlv.nameFor(model)}, ${serialize(properties)})`);
        }

        return defaultValue;
    }
}
