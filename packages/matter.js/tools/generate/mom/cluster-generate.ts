/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

export const CLUSTER_PATH = "src/model/definitions/clusters";
export const CLUSTER_SUFFIX = "Model";

import { ClusterElement } from "../../../src/model";
import { TsFile } from "../util/TsFile.js";
import { clean } from "../util/file.js";

export function clusterClean() {
    clean(CLUSTER_PATH, CLUSTER_SUFFIX);
}

export function clusterGenerate(cluster: ClusterElement) {
    const file = new TsFile(`${CLUSTER_PATH}/${cluster.name}${CLUSTER_SUFFIX}`);

    // TODO

    file.save();
}
