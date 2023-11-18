/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Logger } from "@project-chip/matter.js/log";
import { ClusterModel, ClusterVariance, CommandModel } from "@project-chip/matter.js/model";
import { TsFile } from "../util/TsFile.js";
import { decamelize } from "@project-chip/matter.js/util"

const logger = Logger.get("BehaviorFile");

export class BehaviorFile extends TsFile {
    readonly baseName: string;
    readonly definitionName: string;

    constructor(public cluster: ClusterModel, private variance: ClusterVariance) {
        const baseName = `${decamelize(cluster.name)}/Behavior`;
        super(`#behaviors/${baseName}`);
        this.baseName = baseName;
        this.definitionName = `${cluster.name}Behavior`;
        this.cluster = cluster;

        this.generate();
    }

    private generate() {
        logger.info(`${this.cluster.name} → ${this.name}.ts`);

        this.addImport(`../../../cluster/definitions/${this.cluster.name}Cluster`, this.cluster.name);
        this.addImport(`../../cluster/ClusterBehavior`, "ClusterBehavior");

        const builder = this.builder(`export const ${this.cluster.name}Behavior = ClusterBehavior`);

        if (this.cluster.all(CommandModel).length) {
            this.addImport(`./Interface`, `${this.cluster.name}Interface`);
            builder.atom(`withInterface<${this.cluster.name}Interface>()`);
        }

        let extraDocs;
        if (this.variance.requiresFeatures) {
            this.addImport(`../../../cluster/ClusterType`, "ClusterType");
            builder.atom(`for(ClusterType(${this.cluster.name}.Base))`);
            extraDocs = `${this.cluster.name}.Cluster requires you to enable one or more optional features.  `
                + `You can do so using {@link ${this.cluster.name}Behavior.with}.`;
        } else {
            builder.atom(`for(${this.cluster.name}.Cluster)`);
            if (Object.keys(this.variance.components).length) {
                extraDocs = `This class does not have optional features of ${this.cluster.name}.Cluster enabled.  `
                    + `You can enable additional features using ${this.cluster.name}Behavior.with.`;
            }
        }

        builder.document(
            `${this.cluster.name}Behavior is the base class for objects that support interaction with {@link ${this.cluster.name}.Cluster}.`,
            extraDocs
        );

        this.atom(`type ${this.cluster.name}BehaviorType = InstanceType<typeof ${this.cluster.name}Behavior>`);
        this.undefine(`${this.cluster.name}Behavior`);
        this.atom(`export interface ${this.cluster.name}Behavior extends ${this.cluster.name}BehaviorType {}`);
    }
}
