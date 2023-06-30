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

    if (cluster.id != undefined) {
        file.definitions.atom(`export const id = ${cluster.id}`);
    }
    file.definitions.atom(`export const name = ${JSON.stringify(cluster.name)}`);
    file.definitions.atom(`export const revision = ${JSON.stringify(cluster.revision)}`);

    const features = cluster.features;
    const allFeatures = Array<string>();
    if (features.length) {
        file.addImport("schema/BitmapSchema", "BitFlag");
        const featureBlock = file.definitions.expressions("export const featureMap = {", "}");
        features.forEach(feature => {
            allFeatures.push(feature.name);
            featureBlock.atom(feature.name, `BitFlag(${feature.effectiveId})`)
                .document(feature);
        });
    }

    const variance = ClusterVariance(cluster);

    const elementSets = {} as { [name: string]: ElementVariance };
    elementSets.Base = variance;
    for (const name in variance.features) {
        elementSets[name] = variance.features[name];
    }
    variance.featureSets.forEach(featureSet => {
        elementSets[new Array(...featureSet.flags).join("")] = featureSet;
    })

    const gen = new ClusterElementGenerator(file, cluster);
    for (const name in elementSets) {
        gen.defineElements(name, elementSets[name]);
    }

    if (cluster.id == undefined) {
        // Following generation logic does not apply to base clusters
        return;
    }

    file.addImport("cluster/ClusterBuilder", "BuildCluster");

    const complete = file.definitions.expressions("export const Complete = BuildCluster({", "})");
    complete.atom("id");
    complete.atom("name");
    complete.atom("revision");
    if (features.length) {
        complete.atom("features", "featureMap");
        const completeFeatures = complete.expressions("supportedFeatures: {", "}");
        for (const f of allFeatures) {
            completeFeatures.atom(f, "true");
        }
    }
    const completeElements = complete.expressions("elements: [", "]");
    for (const e of Object.keys(elementSets)) {
        completeElements.atom(e);
    }
}
