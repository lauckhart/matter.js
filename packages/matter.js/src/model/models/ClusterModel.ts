/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ClusterElement, Mei, Model, AttributeModel, CommandModel, DatatypeModel, EventModel } from "../index.js";

export class ClusterModel extends Model implements ClusterElement {
    override type!: ClusterElement.Type;
    override id!: Mei;
    singleton?: boolean;
    classification?: ClusterElement.Classification;

    get attributes() {
        return this.local(AttributeModel);
    }

    get commands() {
        return this.local(CommandModel);
    }

    get events() {
        return this.local(EventModel);
    }

    get datatypes() {
        return this.local(DatatypeModel);
    }

    override get children(): ClusterModel.Child[] {
        return super.children as any;
    }

    override set children(children: (ClusterModel.Child | ClusterElement.Child)[]) {
        super.children = children;
    }

    constructor(definition: ClusterElement.Properties) {
        super(definition);
    }

    static {
        Model.constructors[ClusterElement.Type] = this;
    }
}

export namespace ClusterModel {
    export type Child =
        DatatypeModel
        | AttributeModel
        | CommandModel
        | EventModel;
}
