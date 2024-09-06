/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { SemanticNamespaceElement } from "../elements/index.js";
import { Model } from "./Model.js";
import { SemanticTagModel } from "./SemanticTagModel.js";

export class SemanticNamespaceModel
    extends Model<SemanticNamespaceElement, SemanticTagModel>
    implements SemanticNamespaceElement
{
    override tag: SemanticNamespaceElement.Tag = SemanticNamespaceElement.Tag;
    declare id: number;
    mfgCode?: number;

    get endpoints() {
        return this.children;
    }

    static {
        Model.types[SemanticNamespaceElement.Tag] = this;
    }
}
