/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import {
    ClusterModel,
    ClusterVariance
} from "../../src/model/index.js";
import { Logger } from "../../src/log/Logger.js";
import { ClusterFile } from "./ClusterFile.js";
import { ClusterComponentGenerator } from "./ClusterComponentGenerator.js";
import { camelize } from "../../src/util/String.js";

const logger = Logger.get("generate-cluster");

export function generateCluster(file: ClusterFile, cluster: ClusterModel) {
    logger.info(`${cluster.name} → ${file.name}.ts`);

    const metadata = file.expressions(`const ${cluster.name}Metadata = ClusterMetadata({`, `})`)
        .document({ details: `Standard ${cluster.name} cluster properties.`, xref: cluster.xref });
    if (cluster.id !== undefined) {
        metadata.atom("id", `0x${cluster.id.toString(16)}`);
    }
    metadata.atom("name", `${JSON.stringify(cluster.name)}`);
    metadata.atom("revision", `${JSON.stringify(cluster.revision)}`);

    const features = cluster.features;
    const allFeatures = Array<string>();
    if (features.length) {
        file.addImport("schema/BitmapSchema", "BitFlag");
        const featureBlock = metadata.expressions("export const featureMap = {", "}");
        features.forEach(feature => {
            const name = feature.description ? camelize(feature.description, false) : feature.name;
            allFeatures.push(name);
            featureBlock.atom(name, `BitFlag(${feature.effectiveId})`)
                .document(feature);
        });
    }

    const variance = ClusterVariance(cluster);
    const gen = new ClusterComponentGenerator(file, cluster);
    for (const component of variance.components) {
        gen.defineComponent(component);
    }

    file.addImport("cluster/ClusterFactory", "ClusterFactory");
    const factory = file.expressions(`const ${file.clusterName} = ClusterFactory(`, ")");

    if (variance.componentized) {
        factory.document(
            `Use ${file.clusterName} to obtain a Cluster instance for a specific feature set.  ` +
            `${file.clusterName} only returns clusters for feature combinations supported by the Matter specification.`
        );
    } else {
        factory.document(`Use ${file.clusterName}() to obtain a Cluster instance.`);
    }

    file.addImport("cluster/ClusterFactory", "BuildCluster");
    for (const c of variance.clusters) {
        const definition = factory.expressions("BuildCluster(", ")");
        definition.atom(`${cluster.name}Metadata`);
        definition.value(c.features.array);
        for (const { name } of c.components) {
            definition.atom(`${name}Component`);
        }
    }
}
