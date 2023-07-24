/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Mei } from "../definitions/index.js";
import { DeviceTypeElement, DeviceClusterElement, DatatypeElement } from "../elements/index.js";
import { DatatypeModel } from "./DatatypeModel.js";
import { DeviceClusterModel } from "./DeviceClusterModel.js";
import { Model } from "./Model.js";

export class DeviceTypeModel extends Model implements DeviceTypeElement {
    override tag: DeviceTypeElement.Tag = DeviceTypeElement.Tag;
    override id!: Mei;
    classification!: DeviceTypeElement.Classification;
    revision!: number;

    get clusters() {
        return this.all(DeviceClusterModel);
    }

    override get children(): (DeviceClusterModel | DatatypeModel)[] {
        return super.children as any;
    }

    override set children(children: (DeviceClusterModel | DatatypeModel | DeviceClusterElement | DatatypeElement)[]) {
        super.children = children;
    }

    constructor(definition: DeviceTypeElement.Properties) {
        super(definition);
    }

    static {
        Model.constructors[DeviceTypeElement.Tag] = this;
    }
}
