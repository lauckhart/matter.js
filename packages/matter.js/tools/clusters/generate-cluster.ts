/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import {
    ClusterModel,
    ClusterVariance,
    VarianceCondition
} from "../../src/model/index.js";
import { Logger } from "../../src/log/Logger.js";
import { ClusterFile } from "./ClusterFile.js";
import { ClusterComponentGenerator } from "./ClusterComponentGenerator.js";
import { camelize, serialize } from "../../src/util/String.js";

const logger = Logger.get("generate-cluster");

export function generateCluster(file: ClusterFile, cluster: ClusterModel) {
    logger.info(`${cluster.name} → ${file.name}.ts`);

    file.addImport("cluster/ClusterFactory", "ClusterMetadata");
    const metadata = file.expressions(`export const ${cluster.name}Metadata = ClusterMetadata({`, `})`)
        .document({ details: `Standard ${cluster.name} cluster properties.`, xref: cluster.xref });
    if (cluster.id !== undefined) {
        metadata.atom("id", `0x${cluster.id.toString(16)}`);
    }
    metadata.atom("name", `${JSON.stringify(cluster.name)}`);
    metadata.atom("revision", `${JSON.stringify(cluster.revision)}`);

    const features = cluster.features;
    const allFeatures = Array<string>();
    const featureNames = {} as { [code: string]: string };
    if (features.length) {
        file.addImport("schema/BitmapSchema", "BitFlag");
        const featureBlock = metadata.expressions("features: {", "}");
        features.forEach(feature => {
            const name = feature.description ? camelize(feature.description, false) : feature.name;
            allFeatures.push(name);
            featureBlock.atom(name, `BitFlag(${feature.effectiveId})`)
                .document(feature);
            featureNames[feature.name] = name;
        });
    }

    const variance = ClusterVariance(cluster);
    const gen = new ClusterComponentGenerator(file, cluster);
    for (const component of variance.components) {
        gen.defineComponent(component);
    }

    // Generate the conditional type that defines cluster structure
    file.addImport("schema/BitmapSchema", "TypeFromPartialBitSchema");
    const factoryType = Array<string>(
        `export type ${file.clusterName}<T extends TypeFromPartialBitSchema<typeof ${cluster.name}Metadata.features>> = `,
        `    typeof ${cluster.name}Metadata`,
        `    & { supportedFeatures: T }`
    );
    for (let i = 0; i < variance.components.length; i++) {
        const component = variance.components[i];
        let componentPhrase = `typeof ${component.name}Component`;
        if (component.condition) {
            const test = bitmapsFor(component.condition, featureNames).map(serialize).join(" | ");
            componentPhrase = `(T extends ${test} ? ${componentPhrase} : {})`
        }

        factoryType.push(`    & ${componentPhrase}`);
    }
    file.atom(factoryType.join("\n"));
    file.blank();

    // Generate the function that builds the cluster
    file.addImport("schema/BitmapSchema", "BitFlags");
    const factoryFunction = file.statements(`export function ${file.clusterName}<T extends (keyof typeof ${cluster.name}Metadata.features)[]>(...features: [ ...T ]) {`, "}");
    const base = factoryFunction.expressions(`const cluster = {`, "}");
    base.atom(`...${cluster.name}Metadata`);
    base.atom(`supportedFeatures: BitFlags(${cluster.name}Metadata.features, ...features)`);
    base.atom(`...BaseComponent`);
    for (let i = 1; i < variance.components.length; i++) {
        const component = variance.components[i];
        file.addImport("cluster/ClusterFactory", "extendCluster");
        const extension = factoryFunction.expressions(`extendCluster(`, ")");
        extension.atom("cluster");
        extension.atom(`${component.name}Component`);
        if (component.condition) {
            const bitmaps = bitmapsFor(component.condition, featureNames);
            for (const bitmap of bitmaps) {
                extension.value(bitmap);
            }
        }
    }
    factoryFunction.blank();
    factoryFunction.atom(`return cluster as unknown as ${file.clusterName}<BitFlags<typeof ${cluster.name}Metadata.features, T>>`);
}

function bitmapsFor(condition: VarianceCondition, featureNames: { [name: string]: string }) {
    const bitmap = {} as { [name: string]: boolean };
    if (condition.allOf) {
        for (const name of condition.allOf) {
            bitmap[name] = true;
        }
    }
    if (condition.not) {
        bitmap[condition.not] = false;
    }

    const bitmaps = Array<typeof bitmap>();
    if (condition.anyOf) {
        for (const name of condition.anyOf) {
            bitmaps.push({ ...bitmap, [name]: true });
        }
    } else {
        bitmaps.push(bitmap);
    }

    return bitmaps.map(bitmap => {
        return Object.fromEntries(Object.entries(bitmap).map(([k, v]) => [ featureNames[k], v ]));
    });
}
