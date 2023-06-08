/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { DatatypeElement, Mei, Model } from "../index.js";
import { DataModel } from "./DataModel.js";

export class DatatypeModel extends DataModel implements DatatypeElement {
    override type: DatatypeElement.Type = DatatypeElement.Type;
    override id?: Mei;

    constructor(definition: DatatypeElement.Properties, parent?: Model) {
        super(definition, parent);
    }

    static {
        Model.constructors[DatatypeElement.Type] = this;
    }
}
