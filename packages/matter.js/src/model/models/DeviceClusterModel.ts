/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Conformance, Quality } from "../aspects/index.js";
import { DeviceClusterElement } from "../elements/index.js";
import { Aspects } from "./Aspects.js";
import { BaseClusterModel } from "./BaseClusterModel.js";
import { Model } from "./Model.js";

const CONFORMANCE: unique symbol = Symbol("conformance");
const QUALITY: unique symbol = Symbol("quality");

export class DeviceClusterModel extends BaseClusterModel implements DeviceClusterElement {
    override tag: DeviceClusterElement.Tag = DeviceClusterElement.Tag;
    client: boolean = false;

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

    static {
        Model.constructors[DeviceClusterElement.Tag] = this;
    }
}
