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
// a Dropbox folder with the HTML version of the specification.

import { ClusterElement } from "../../src/model/index.js"
import { scanIndex } from "./mom/html-scanner.js";

import { paths } from "./mom/input.js";
import { Reference } from "./mom/intermediate.js";
import { loadClusterDefinition } from "./mom/load-cluster.js";
import { translateClusterDefinition } from "./mom/translate-cluster.js";

const clusters = Array<ClusterElement>();

function scanCluster(clusterRef: Reference) {
    console.info(`  cluster ${clusterRef.name} (${clusterRef.spec} § ${clusterRef.section})`);

    const definition = loadClusterDefinition(clusterRef);
    clusters.push(...translateClusterDefinition(definition));
}

paths.forEach(path => {
    const index = scanIndex(path);
    index.clusters.forEach(scanCluster);
})
