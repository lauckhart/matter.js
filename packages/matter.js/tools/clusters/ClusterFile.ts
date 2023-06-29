/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ClusterModel } from "../../src/model/index.js";
import { TsFile } from "../util/TsFile.js";
import { clean } from "../util/file.js";

const DEFINITION_PATH = "src/cluster/definitions"

export class ClusterFile extends TsFile {
    clusterName: string;

    constructor(cluster: ClusterModel) {
        const name =`${cluster.name}Cluster`;
        super(ClusterFile.createFilename(name));
        this.clusterName = name;
    }

    static clean() {
        clean(DEFINITION_PATH);
    }

    static createFilename(name: string) {
        return `${DEFINITION_PATH}/${name}`;
    }

    override addImport(filename: string, symbol: string) {
        return super.addImport(`../../${filename}`, symbol);
    }
}
