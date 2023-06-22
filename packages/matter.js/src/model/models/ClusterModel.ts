/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Mei } from "../definitions/index.js";
import { ClusterElement, Globals } from "../elements/index.js";
import { AttributeModel } from "./AttributeModel.js";
import { CommandModel } from "./CommandModel.js";
import { DatatypeModel } from "./DatatypeModel.js";
import { EventModel } from "./EventModel.js";
import { Model } from "./Model.js";

export class ClusterModel extends Model implements ClusterElement {
    override tag: ClusterElement.Tag = ClusterElement.Tag;
    override id?: Mei;
    override isTypeScope = true;
    singleton?: boolean;
    classification?: ClusterElement.Classification;

    get attributes() {
        return this.childrenOfType(AttributeModel);
    }

    get commands() {
        return this.childrenOfType(CommandModel);
    }

    get events() {
        return this.childrenOfType(EventModel);
    }

    get datatypes() {
        return this.childrenOfType(DatatypeModel);
    }

    get revision() {
        let revision = 1;
        const revisionAttr = this.childOfType(AttributeModel, Globals.ClusterRevision.id);
        if (revisionAttr?.default != undefined) {
            revision = revisionAttr.default;
        }
        return revision;
    }

    get features() {
        return this.childOfType(AttributeModel, Globals.FeatureMap.id);
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
        Model.constructors[ClusterElement.Tag] = this;
    }
}

export namespace ClusterModel {
    export type Child =
        DatatypeModel
        | AttributeModel
        | CommandModel
        | EventModel;
}
