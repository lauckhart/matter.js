/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

export const CLUSTER_PATH = "src/model/instance/clusters";
export const CLUSTER_SUFFIX = "Model";

import { ClusterElement } from "../../../src/model";
import { TsFile } from "../util/TsFile.js";
import { clean } from "../util/file.js";
import { generateElement } from "./generate-element";

export function cleanCluster() {
    clean(CLUSTER_PATH, CLUSTER_SUFFIX);
}

export function generateCluster(cluster: ClusterElement) {
    const file = new TsFile(`${CLUSTER_PATH}/${cluster.name}${CLUSTER_SUFFIX}`);

    file.addImport("../Matter.js", "Matter");

    generateElement(
        file,
        cluster,
        `Matter.children.push(`,
        ")"
    )

    file.save();
}
