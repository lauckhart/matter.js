/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Access, BaseDataElement, Conformance, Constraint, Model, Quality } from "../index.js";
import type { DatatypeModel } from "../index.js";

export abstract class DataModel extends Model implements BaseDataElement {
    base?: string;
    byteSize?: BaseDataElement.Size;
    default?: any;
    override children!: DatatypeModel[];

    constraint: Constraint;
    conformance: Conformance;
    access: Access;
    quality: Quality;

    protected constructor(definition: BaseDataElement.Properties, parent?: Model) {
        super(definition, parent);

        this.constraint = new Constraint(definition.constraint);
        this.conformance = new Conformance(definition.conformance);
        this.access = new Access(definition.access);
        this.quality = new Quality(definition.quality);
    }
}
