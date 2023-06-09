/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ClusterElement, ClusterModel, DeviceTypeElement, Mei, Model } from "../index.js";

export class DeviceTypeModel extends Model implements DeviceTypeElement {
    override type!: DeviceTypeElement.Type;
    override id!: Mei;
    classification!: DeviceTypeElement.Classification;


    override get children(): (DeviceTypeModel | ClusterModel)[] {
        return super.children as any;
    }

    override set children(children: (DeviceTypeModel | ClusterModel | DeviceTypeElement | ClusterElement)[]) {
        super.children = children;
    }

    override validate() {
        this.validateStructure(DeviceTypeElement.Type, true, DeviceTypeModel, ClusterModel);
        this.validateProperty({ name: "classification", type: DeviceTypeElement.Classification });
        return super.validate();
    }

    constructor(definition: DeviceTypeElement.Properties, parent?: Model) {
        super(definition, parent);
    }

    static {
        Model.constructors[DeviceTypeElement.Type] = this;
    }
}
