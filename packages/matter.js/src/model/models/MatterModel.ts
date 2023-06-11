/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { AnyElement, Globals, MatterElement, Model } from "../index.js";

/**
 * The root of a Matter model.
 */
export class MatterModel extends Model implements MatterElement {
    override type: MatterElement.Type = MatterElement.Type;
    version?: string;

    override get children(): Model[] {
        return super.children as any;
    }

    override set children(children: (Model | AnyElement)[]) {
        super.children = children;
    }

    override validate() {
        this.validateStructure(MatterElement.Type, false);
        this.validateProperty({ name: "version", type: "string" });
        return super.validate();
    }

    constructor(definition: MatterElement.Properties, globals = Object.values(Globals)) {
        super(definition);
        this.children = globals;
    }

    static {
        Model.constructors[MatterElement.Type] = this;
    }
}
