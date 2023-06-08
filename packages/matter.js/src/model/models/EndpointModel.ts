/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { DeviceTypeModel, EndpointElement, Model } from "../index.js";

export class EndpointModel extends Model implements EndpointElement {
    override type!: EndpointElement.Type;
    override id!: number;
    override children!: DeviceTypeModel[];

    override validate() {
        this.validateStructure(EndpointElement.Type, true, DeviceTypeModel);
        return super.validate();
    }

    constructor(definition: EndpointElement.Properties, parent?: Model) {
        super(definition, parent);
    }

    static {
        Model.constructors[EndpointElement.Type] = this;
    }
}
