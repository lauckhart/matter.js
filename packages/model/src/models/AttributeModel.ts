/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Mei } from "../common/Mei.js";
import { AttributeElement } from "../elements/index.js";
import { Model } from "./Model.js";
import { PropertyModel } from "./PropertyModel.js";

// Full set of global IDs per core spec 1.3
export const GLOBAL_IDS = new Set([0xfffd, 0xfffc, 0xfffb, 0xfffa, 0xfff9, 0xfff8]);

export class AttributeModel extends PropertyModel<AttributeElement> implements AttributeElement {
    override tag: AttributeElement.Tag = AttributeElement.Tag;
    declare id: Mei;

    get readable() {
        return this.effectiveAccess.readable;
    }

    get writable() {
        return !this.fixed && this.effectiveAccess.writable;
    }

    get fabricScoped() {
        return !!this.effectiveAccess.fabric;
    }

    get fixed() {
        return !!this.effectiveQuality.fixed;
    }

    get changesOmitted() {
        return this.effectiveQuality.changesOmitted;
    }

    constructor(definition: AttributeElement.Properties) {
        super(definition);
    }

    static {
        Model.types[AttributeElement.Tag] = this;
    }

    static isGlobal(model: Model) {
        return model instanceof AttributeModel && GLOBAL_IDS.has(model.id);
    }

    static get globalIds() {
        return GLOBAL_IDS;
    }

    static Tag = AttributeElement.Tag;
}
