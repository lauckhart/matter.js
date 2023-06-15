/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Mei } from "../definitions/index.js";
import { ClusterElement, DeviceTypeElement } from "../elements/index.js";
import { ClusterModel } from "./ClusterModel.js";
import { Model } from "./Model.js";

export class DeviceTypeModel extends Model implements DeviceTypeElement {
    override type!: DeviceTypeElement.Type;
    override id!: Mei;
    classification!: DeviceTypeElement.Classification;

    get clusters() {
        return this.local(ClusterModel);
    }

    get deviceTypes() {
        return this.local(DeviceTypeModel);
    }

    override get children(): (DeviceTypeModel | ClusterModel)[] {
        return super.children as any;
    }

    override set children(children: (DeviceTypeModel | ClusterModel | DeviceTypeElement | ClusterElement)[]) {
        super.children = children;
    }

    constructor(definition: DeviceTypeElement.Properties) {
        super(definition);
    }

    static {
        Model.constructors[DeviceTypeElement.Type] = this;
    }
}
