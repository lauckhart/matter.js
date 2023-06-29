/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import {
    ClusterModel,
    ClusterVariance,
    ElementVariance
} from "../../src/model/index.js";
import { Logger } from "../../src/log/index.js";
import { ClusterFile } from "./ClusterFile.js";
import { ClusterElementGenerator } from "./ClusterElementGenerator.js";

const logger = Logger.get("generate-cluster");

export function generateCluster(file: ClusterFile, cluster: ClusterModel) {
    logger.info(`${cluster.name} → ${file.name}.ts`);

    const ns = file.statements(`export namespace ${cluster.name}Cluster {`, "}")
        .document(cluster);

    ns.atom(`export const name = ${JSON.stringify(cluster.name)}`);
    ns.atom(`export const revision = ${JSON.stringify(cluster.revision)}`);

    const features = cluster.features;
    if (features?.children.length) {
        file.addImport("schema/BitmapSchema", "BitFlag");
        const featureBlock = ns.expressions("export const featureMap = {", "}");
        features.children.forEach(feature => {
            featureBlock.atom(feature.name, `BitFlag(${feature.effectiveId})`)
                .document(feature);
        });
    }

    const variance = ClusterVariance(cluster);
    const elementSets = {} as { [name: string]: ElementVariance };
    elementSets.Base = variance;
    Object.entries(variance.features).forEach(([name, elements]) => camelize(name))

    const gen = new ClusterElementGenerator(ns, cluster);

    file.addImport("cluster/Cluster", "Cluster");
    const complete = ns.expressions("export const Complete = Cluster({", "})")
        .document(cluster, `This cluster definition includes all elements an implementation may support.  For type safety, use \`${cluster.name}.with()\` and a list of supported features.`);
    if (cluster.id != undefined) {
        complete.atom("id", `0x${cluster.id.toString(16)}`);
    }
    complete.atom("name", JSON.stringify(cluster.name));
    complete.atom("revision", JSON.stringify(cluster.revision));

}
