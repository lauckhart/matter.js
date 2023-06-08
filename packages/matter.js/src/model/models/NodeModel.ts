/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { EndpointModel, Model, NodeElement } from "../index.js";

export class NodeModel extends Model implements NodeElement {
    override type!: NodeElement.Type;
    override id!: number;
    override children!: EndpointModel[];

    override validate() {
        this.validateStructure(NodeElement.Type, true, EndpointModel);
        return super.validate();
    }

    constructor(definition: NodeElement.Properties, parent?: Model) {
        super(definition, parent);
    }

    static {
        Model.constructors[NodeElement.Type] = this;
    }
}
