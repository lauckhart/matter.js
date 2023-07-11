/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { InternalError } from "../../src/common/InternalError.js";
import { ClusterModel } from "../../src/model/index.js";
import { Block, TsFile } from "../util/TsFile.js";
import { clean } from "../util/file.js";

const DEFINITION_PATH = "src/cluster/definitions"

export class ClusterFile extends TsFile {
    clusterName: string;
    types: Block;
    definedNames = new Set<string>();

    constructor(public cluster: ClusterModel) {
        const name = `${cluster.name}Cluster`;
        super(ClusterFile.createFilename(name));
        this.clusterName = name;
        this.types = this.section();
    }

    static clean() {
        clean(DEFINITION_PATH);
    }

    static createFilename(name: string) {
        return `${DEFINITION_PATH}/${name}`;
    }

    nameDefined(name: string): void {
        if (this.definedNames.has(name)) {
            throw new InternalError(`Conflicting definitions of module-scope ${name} in ${this.clusterName}`);
        }
        this.definedNames.add(name);
    }

    override addImport(filename: string, symbol: string) {
        return super.addImport(`../../${filename}`, symbol);
    }
}
