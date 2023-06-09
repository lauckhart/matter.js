/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ClusterModel, DeviceTypeModel, FabricModel, MatterElement, Model, NodeModel } from "../index.js";

export class MatterModel extends Model implements MatterElement {
    override type: MatterElement.Type = MatterElement.Type;
    version?: string;

    override get children(): MatterModel.Child[] {
        return super.children as any;
    }

    override set children(children: (MatterModel.Child | MatterElement.Child)[]) {
        super.children = children;
    }

    override validate() {
        this.validateStructure(MatterElement.Type, false, DeviceTypeModel, ClusterModel, FabricModel, NodeModel);
        this.validateProperty({ name: "version", type: "string", required: true });
        return super.validate();
    }

    constructor(definition: MatterElement.Properties, parent?: Model) {
        super(definition, parent);
    }

    static {
        Model.constructors[MatterElement.Type] = this;
    }
}

export namespace MatterModel {
    export type Child = DeviceTypeModel | ClusterModel | FabricModel | NodeModel;
}
