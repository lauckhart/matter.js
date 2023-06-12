/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { AnyElement, AttributeModel, ClusterModel, DatatypeModel, DeviceTypeModel, FabricModel, Globals, MatterElement, Model } from "../index.js";

/**
 * The root of a Matter model.
 */
export class MatterModel extends Model implements MatterElement {
    override type: MatterElement.Type = MatterElement.Type;
    version?: string;

    /**
     * Clusters.
     */
    get clusters() {
        return this.local(ClusterModel)
    }

    /**
     * Device types.
     */
    get deviceTypes() {
        return this.local(DeviceTypeModel);
    }

    /**
     * Global datatypes.
     */
    get datatypes() {
        return this.local(DatatypeModel);
    }

    /**
     * Global attributes.
     */
    get attributes() {
        return this.local(AttributeModel);
    }

    /**
     * Fabrics.
     */
    get fabrics() {
        return this.local(FabricModel);
    }

    override get children(): Model[] {
        return super.children as any;
    }

    override set children(children: (Model | AnyElement)[]) {
        super.children = children;
    }

    constructor(definition: MatterElement.Properties, globals = Object.values(Globals)) {
        const children = [ ...globals, ...(definition.children || []) ]
        super({ ...definition, children: children });
    }

    static {
        Model.constructors[MatterElement.Type] = this;
    }
}
