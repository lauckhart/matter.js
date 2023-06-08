/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ClusterModel, DeviceTypeElement, Mei, Model } from "../index.js";

export class DeviceTypeModel extends Model implements DeviceTypeElement {
    override type!: DeviceTypeElement.Type;
    override id!: Mei;
    classification!: DeviceTypeElement.Classification;
    override children!: (DeviceTypeModel | ClusterModel)[];

    constructor(definition: DeviceTypeElement.Properties) {
        super(definition);
    }

    static {
        Model.constructors[DeviceTypeElement.Type] = this;
    }
}
