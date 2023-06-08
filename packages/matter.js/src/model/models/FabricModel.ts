/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { FabricElement, Model, NodeModel } from "../index.js";

export class FabricModel extends Model implements FabricElement {
    override type!: FabricElement.Type;
    override id!: number;
    override children!: NodeModel[];

    constructor(definition: FabricElement.Properties) {
        super(definition);
    }

    static {
        Model.constructors[FabricElement.Type] = this;
    }
}
