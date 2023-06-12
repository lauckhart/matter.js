/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { DeviceTypeElement, DeviceTypeModel, EndpointElement, Model } from "../index.js";

export class EndpointModel extends Model implements EndpointElement {
    override type!: EndpointElement.Type;
    override id!: number;

    get deviceTypes() {
        return this.children;
    }

    override get children(): DeviceTypeModel[] {
        return super.children as any;
    }

    override set children(children: (DeviceTypeModel | DeviceTypeElement)[]) {
        super.children = children;
    }

    constructor(definition: EndpointElement.Properties) {
        super(definition);
    }

    static {
        Model.constructors[EndpointElement.Type] = this;
    }
}
