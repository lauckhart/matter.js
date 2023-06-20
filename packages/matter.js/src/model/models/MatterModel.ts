/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Globals, MatterElement } from "../elements/index.js";
import { Matter } from "../instance/index.js";
import { AttributeModel } from "./AttributeModel.js";
import { ClusterModel } from "./ClusterModel.js";
import { DatatypeModel } from "./DatatypeModel.js";
import { DeviceTypeModel } from "./DeviceTypeModel.js";
import { FabricModel } from "./FabricModel.js";
import { Model } from "./Model.js";

/**
 * The root of a Matter model.
 */
export class MatterModel extends Model implements MatterElement {
    override tag: MatterElement.Tag = MatterElement.Tag;
    override isTypeScope = true;
    version?: string;

    /**
     * Clusters.
     */
    get clusters() {
        return this.childrenOfType(ClusterModel)
    }

    /**
     * Device types.
     */
    get deviceTypes() {
        return this.childrenOfType(DeviceTypeModel);
    }

    /**
     * Global datatypes.
     */
    get datatypes() {
        return this.childrenOfType(DatatypeModel);
    }

    /**
     * Global attributes.
     */
    get attributes() {
        return this.childrenOfType(AttributeModel);
    }

    /**
     * Fabrics.
     */
    get fabrics() {
        return this.childrenOfType(FabricModel);
    }

    override get children(): MatterModel.Child[] {
        return super.children as any;
    }

    override set children(children: (MatterModel.Child | MatterElement.Child)[]) {
        super.children = children;
    }

    constructor(definition: MatterElement.Properties = Matter, globals = Object.values(Globals)) {
        const children = [ ...globals, ...(definition.children || []) ]
        super({ ...definition, children: children });
    }

    static {
        Model.constructors[MatterElement.Tag] = this;
    }
}

export namespace MatterModel {
    export type Child =
        ClusterModel
        | DeviceTypeModel
        | DatatypeModel
        | AttributeModel
        | FabricModel;
}
