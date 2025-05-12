/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { FabricElement } from "../elements/index.js";
import { Children } from "./Children.js";
import { Model } from "./Model.js";
import { NodeModel } from "./NodeModel.js";

export class FabricModel extends Model<FabricElement> implements FabricElement {
    override tag: FabricElement.Tag = FabricElement.Tag;

    override get children(): Children<NodeModel> {
        return super.children as Children<NodeModel>;
    }

    override set children(children: Children.InputIterable<NodeModel>) {
        super.children = children;
    }

    get nodes() {
        return this.children;
    }

    override get id() {
        return super.id;
    }

    override set id(id: number) {
        super.id = id;
    }

    static Tag = FabricElement.Tag;
}

FabricModel.register();
