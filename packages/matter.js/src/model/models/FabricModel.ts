/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { DatatypeModel, FabricElement, Model, NodeElement, NodeModel } from "../index.js";

export class FabricModel extends Model implements FabricElement {
    override type!: FabricElement.Type;
    override id!: number;

    override get children(): NodeModel[] {
        return super.children as any;
    }

    override set children(children: (NodeModel | NodeElement)[]) {
        super.children = children;
    }

    override validate() {
        this.validateStructure(FabricElement.Type, true, DatatypeModel);
        return super.validate();
    }

    constructor(definition: FabricElement.Properties) {
        super(definition);
    }

    static {
        Model.constructors[FabricElement.Type] = this;
    }
}
