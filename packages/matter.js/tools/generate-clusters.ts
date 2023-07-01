/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import "./util/setup.js";
import {
    MatterModel
} from "../src/model/index.js";
import { generateCluster } from "./clusters/generate-cluster.js";
import { ClusterFile } from "./clusters/ClusterFile.js";
import { TsFile } from "./util/TsFile.js";

const mom = new MatterModel();

ClusterFile.clean();
const index = new TsFile(ClusterFile.createFilename("index"));

for (const cluster of mom.clusters) {
    const file = new ClusterFile(cluster);
    generateCluster(file, cluster);
    file.save();

    index.atom(`export { ${file.clusterName} } from "./${file.clusterName}.js"`);
}

index.save();
