/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ClusterModel, DeviceTypeModel, FabricModel, MatterElement, Model, NodeModel } from "../index.js";

export class MatterModel extends Model implements MatterElement {
    override type!: MatterElement.Type;
    version?: string;
    override children!: MatterModel.Child[];

    override validate() {
        this.validateStructure(MatterElement.Type, true, DeviceTypeModel, ClusterModel, FabricModel, NodeModel);
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
