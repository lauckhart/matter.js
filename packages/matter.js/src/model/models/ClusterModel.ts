/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ClusterElement } from "../elements/index.js";
import { BaseClusterModel } from "./BaseClusterModel.js";
import { Model } from "./Model.js";

export class ClusterModel extends BaseClusterModel implements ClusterElement {
    override tag: ClusterElement.Tag = ClusterElement.Tag;
    classification?: ClusterElement.Classification;

    static {
        Model.constructors[ClusterElement.Tag] = this;
    }
}
