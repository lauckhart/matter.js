/**
 * @license
 * Copyright 2022-2026 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ClusterModel } from "#model";
import { ScopeFile } from "../util/ScopeFile.js";
import { Block } from "../util/TsFile.js";

export class ClusterFile extends ScopeFile {
    clusterName: string;
    typesName: string;

    /**
     * Section for component type definitions and interfaces (enums, structs, bitmaps, component interfaces).
     * Appears at the top of the namespace, before ClusterType definitions.
     */
    components: Block;

    /**
     * Section for ClusterType definitions (TLV schemas, MutableCluster.Component consts).
     */
    types: Block;

    ns: Block;

    constructor(cluster: ClusterModel) {
        super({ scope: cluster });
        this.clusterName = `${cluster.name}Cluster`;
        this.typesName = cluster.name;
        this.ns = this.statements(`export namespace ${this.typesName} {`, "}");
        this.components = this.ns.section();
        this.types = this.ns.section();
    }

    get cluster() {
        return this.model as ClusterModel;
    }
}
