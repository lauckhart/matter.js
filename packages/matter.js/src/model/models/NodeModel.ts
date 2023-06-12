/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { EndpointElement, EndpointModel, Model, NodeElement } from "../index.js";

export class NodeModel extends Model implements NodeElement {
    override type!: NodeElement.Type;
    override id!: number;

    get endpoints() {
        return this.children;
    }

    override get children(): EndpointModel[] {
        return super.children as any;
    }

    override set children(children: (EndpointModel | EndpointElement)[]) {
        super.children = children;
    }

    constructor(definition: NodeElement.Properties) {
        super(definition);
    }

    static {
        Model.constructors[NodeElement.Type] = this;
    }
}
