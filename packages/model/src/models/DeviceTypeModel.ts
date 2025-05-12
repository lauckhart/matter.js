/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { DeviceClassification } from "../common/DeviceClassification.js";
import { DeviceTypeElement } from "../elements/index.js";
import { Children } from "./Children.js";
import { FieldModel } from "./FieldModel.js";
import { Model } from "./Model.js";
import { RequirementModel } from "./RequirementModel.js";

export class DeviceTypeModel extends Model<DeviceTypeElement> implements DeviceTypeElement {
    override tag: DeviceTypeElement.Tag = DeviceTypeElement.Tag;

    override get children(): Children<DeviceTypeModel.Child> {
        return super.children as Children<DeviceTypeModel.Child>;
    }

    override set children(children: Children.InputIterable<DeviceTypeModel.Child>) {
        super.children = children;
    }

    get requirements() {
        return this.all(RequirementModel);
    }

    get revision() {
        return (
            this?.get(RequirementModel, "Descriptor")?.get(RequirementModel, "DeviceTypeList")?.default[0].revision ?? 1
        );
    }

    get classification() {
        return this.hasResources
            ? (this.resources.classification as DeviceClassification)
            : DeviceClassification.Simple;
    }

    set classification(classification: DeviceClassification) {
        if (classification || this.hasResources) {
            this.resources.classification = classification;
        }
    }

    constructor(definition: DeviceTypeModel | DeviceTypeElement.Properties, ...children: Model.Definition<Model>[]) {
        super(definition, ...children);
        this.classification = definition.classification as DeviceClassification;
    }

    override get id() {
        return super.id as number;
    }

    override set id(id: number) {
        super.id = id;
    }

    static Tag = DeviceTypeElement.Tag;
}

DeviceTypeModel.register();

export namespace DeviceTypeModel {
    export type Child = RequirementModel | FieldModel;
}
