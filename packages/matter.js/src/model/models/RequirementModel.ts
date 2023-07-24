/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Conformance, Quality } from "../aspects/index.js";
import { RequirementElement, NodeElement } from "../elements/index.js";
import { Aspects } from "./Aspects.js";
import { ClusterModel } from "./ClusterModel.js";
import { Model } from "./Model.js";

const CONFORMANCE: unique symbol = Symbol("conformance");
const QUALITY: unique symbol = Symbol("quality");

export class RequirementModel extends Model implements RequirementElement {
    override tag: RequirementElement.Tag = RequirementElement.Tag;
    override id!: number;
    clientServer!: RequirementElement.ClientServer;

    get conformance(): Conformance {
        return Aspects.getAspect(this, CONFORMANCE, Conformance);
    }
    set conformance(definition: Conformance | Conformance.Definition) {
        Aspects.setAspect(this, CONFORMANCE, Conformance, definition);
    }
    get effectiveConformance(): Conformance {
        return Aspects.getEffectiveAspect(this, CONFORMANCE, Conformance);
    }

    get quality(): Quality {
        return Aspects.getAspect(this, QUALITY, Quality);
    }
    set quality(definition: Quality | Quality.Definition) {
        Aspects.setAspect(this, QUALITY, Quality, definition);
    }
    get effectiveQuality(): Quality {
        return Aspects.getEffectiveAspect(this, QUALITY, Quality);
    }

    override get children(): ClusterModel.Child[] {
        return super.children as any;
    }

    override set children(children: ClusterModel.Child[]) {
        super.children = children;
    }

    constructor(definition: RequirementElement.Properties) {
        super(definition);
    }

    static {
        Model.constructors[RequirementElement.Tag] = this;
    }
}
