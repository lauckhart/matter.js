/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { NodeElement } from "../elements/index.js";
import { EndpointModel } from "./EndpointModel.js";
import { Model } from "./Model.js";

export class NodeModel extends Model<NodeElement, EndpointModel> implements NodeElement {
    override tag: NodeElement.Tag = NodeElement.Tag;
    declare id: number;

    get endpoints() {
        return this.children;
    }

    static {
        Model.types[NodeElement.Tag] = this;
    }
}
