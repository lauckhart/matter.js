/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ClusterElement } from "../../../src/model/index.js"
import { scanIndex } from "./spec/scan-index.js";

import { paths } from "./spec/spec-input.js";
import { ClusterReference, HtmlReference } from "./spec/spec-types.js";
import { loadCluster } from "./spec/load-cluster.js";
import { translateCluster } from "./spec/translate-cluster.js";
import { Logger } from "../../../src/log/Logger.js";
import { generateClusters } from "./generate-cluster.js";

const clusters = Array<ClusterElement>();
const logger = Logger.get("generate-spec");

function scanCluster(clusterRef: HtmlReference) {
    logger.info(`cluster ${clusterRef.name} (${clusterRef.xref.document} § ${clusterRef.xref.section})`);

    Logger.nest(() => {
        logger.info("ingest");
        let definition: ClusterReference;
        Logger.nest(() => definition = loadCluster(clusterRef));
        
        logger.info("translate");
        Logger.nest(() => clusters.push(...translateCluster(definition)));
    });
}

paths.forEach(path => {
    logger.info(`load from spec ${path}`);
    Logger.nest(() => {
        const index = scanIndex(path);
        if (index) {
            index.clusters.forEach(scanCluster);
        }
    });

    generateClusters("spec", clusters);
});
