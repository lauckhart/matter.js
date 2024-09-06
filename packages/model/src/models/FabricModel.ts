/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { FabricElement } from "../elements/index.js";
import { Model } from "./Model.js";
import { NodeModel } from "./NodeModel.js";

export class FabricModel extends Model<FabricElement, NodeModel> implements FabricElement {
    override tag: FabricElement.Tag = FabricElement.Tag;
    declare id: number;

    get nodes() {
        return this.children;
    }

    static {
        Model.types[FabricElement.Tag] = this;
    }
}
