/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { EndpointElement } from "../elements/index.js";
import { DeviceTypeModel } from "./DeviceTypeModel.js";
import { Model } from "./Model.js";

export class EndpointModel extends Model<EndpointModel, DeviceTypeModel> implements EndpointElement {
    override tag: EndpointElement.Tag = EndpointElement.Tag;
    declare id: number;

    get deviceTypes() {
        return this.children;
    }

    static {
        Model.types[EndpointElement.Tag] = this;
    }
}
