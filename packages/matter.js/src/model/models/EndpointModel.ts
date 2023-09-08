/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { DeviceTypeElement, EndpointElement } from "../elements/index.js";
import { DeviceTypeModel } from "./DeviceTypeModel.js";
import { ElementModel, Model } from "./Model.js";

export class EndpointModel extends ElementModel<DeviceTypeElement, DeviceTypeModel> implements EndpointElement {
    override tag: EndpointElement.Tag = EndpointElement.Tag;
    override id!: number;

    get deviceTypes() {
        return this.children;
    }

    constructor(definition: EndpointElement.Properties) {
        super(definition);
    }

    static {
        Model.constructors[EndpointElement.Tag] = this;
    }
}
