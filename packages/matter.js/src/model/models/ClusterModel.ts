/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ClusterElement, Mei, Model } from "../index.js";
import type { AttributeModel, CommandModel, DatatypeModel, EventModel } from "../index.js";

export class ClusterModel extends Model implements ClusterElement {
    override type!: ClusterElement.Type;
    override id!: Mei;
    override children!: ClusterModel.Children[];

    constructor(definition: ClusterElement.Properties, parent?: Model) {
        super(definition, parent);
    }

    static {
        Model.constructors[ClusterElement.Type] = this;
    }
}

export namespace ClusterModel {
    export type Children =
        DatatypeModel
        | AttributeModel
        | CommandModel
        | EventModel;
}
