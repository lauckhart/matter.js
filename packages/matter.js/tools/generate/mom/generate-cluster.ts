/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

export const CLUSTER_PATH = "src/model/instance";
export const CLUSTER_SUFFIX = "Model";

import { Logger } from "../../../src/log/Logger.js";
import { ClusterElement } from "../../../src/model/index.js";
import { TsFile } from "../util/TsFile.js";
import { clean } from "../util/file.js";
import { generateElement } from "./generate-element.js";

const logger = Logger.get("generate-cluster");

function cleanCluster(source: string) {
    clean(CLUSTER_PATH, CLUSTER_SUFFIX);
}

function generateCluster(cluster: ClusterElement, source: string) {
    const file = new TsFile(`${CLUSTER_PATH}/${source}/${cluster.name}${CLUSTER_SUFFIX}`);

    file.addImport("../Matter", "Matter");

    generateElement(
        file,
        cluster,
        `Matter.children.push(`,
        ")"
    )

    file.save();
}

export function generateClusters(source: string, clusters: ClusterElement[]) {
    logger.info(`generate from ${source}`);
    Logger.nest(() => {
        logger.info(`clusters`);
        Logger.nest(() => {
            cleanCluster(source);
            for (const cluster of clusters) {
                logger.debug(cluster.name);
                Logger.nest(() => generateCluster(cluster, source));
            }
        });
    });
}
