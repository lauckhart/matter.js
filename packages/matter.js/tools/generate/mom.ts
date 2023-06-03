/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

// This script scrapes specification information from a HTML version of the
// Matter specification.  Override the default location with
// MATTER_SPECIFICATION_PATH environment variable.
//
// I used Adobe Acrobat Pro v23.001.20174.0 to generate the HTML, choosing
// the option to save individual HTML based on headers.  We will probably parse
// output of the current Acrobat version.  Other means of HTML generation will
// likely require this code to be reworked.
//
// Reach out in Matter Integrators Discord server if you would like access to
// a Dropbox folder with the HTML version of the specification.  Specifically
// mention the term "masochist".

import { ClusterElement } from "../../src/model/index.js"
import { scanIndex } from "./mom/html-scan.js";

import { paths } from "./mom/input.js";
import { ClusterReference, HtmlReference } from "./mom/intermediate.js";
import { clusterLoad } from "./mom/cluster-load.js";
import { clusterMap } from "./mom/cluster-map.js";
import { Logger } from "../../src/log/Logger.js";

const clusters = Array<ClusterElement>();
const logger = Logger.get("mom");

function scanCluster(clusterRef: HtmlReference) {
    logger.info(`cluster ${clusterRef.name} (${clusterRef.xref.document} § ${clusterRef.xref.section})`);

    Logger.nest(() => {
        logger.info("ingest");
        let definition: ClusterReference;
        Logger.nest(() => definition = clusterLoad(clusterRef));
        
        logger.info("translate");
        Logger.nest(() => clusters.push(...clusterMap(definition)));
    });
}

paths.forEach(path => {
    logger.info(`specification ${path}`);
    Logger.nest(() => {
        const index = scanIndex(path);
        if (index) {
            index.clusters.forEach(scanCluster);
        }
    });
})
