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
import { camelize, serialize } from "../../src/util/String.js";
import { FeatureNames, translateBitmap } from "../../src/model/logic/cluster-variance/FeatureBitmap.js";
import { conditionToBitmaps } from "../../src/model/logic/cluster-variance/VarianceCondition.js";
import { IllegalFeatureCombinations } from "../../src/model/logic/cluster-variance/IllegalFeatureCombinations.js";
import { Block } from "../util/TsFile.js";

const logger = Logger.get("generate-cluster");

export function generateCluster(file: ClusterFile) {
    const cluster = file.cluster;
    logger.info(`${cluster.name} → ${file.name}.ts`);

    // Load features
    const features = cluster.features;
    const featureNames = {} as { [code: string]: string };
    features.forEach(f => featureNames[f.name] = camelize(f.description ?? f.name, false));

    // Analyze variance
    const variance = ClusterVariance(cluster);
    const illegal = variance.illegal.map(bitmap => translateBitmap(bitmap, featureNames));

    // Generate feature enum
    if (features.length) {
        const featureEnum = file.expressions(`export enum ${cluster.name}Feature {`, "}")
            .document({ description: `These are optional features supported by ${file.clusterName}.`, xref: cluster.featureMap.xref });
        for (const f of features) {
            const name = camelize(f.description || f.name);
            featureEnum.atom(`${name} = ${serialize(name)}`)
                .document(f);
        }
    }

    // Generate the base component
    let base
    if (cluster.id === undefined) {
        file.addImport("cluster/ClusterFactory", "ClusterComponent");
        base = file.expressions(`export const ${cluster.name}Base = ClusterComponent({`, "})")
            .document(`${cluster.name} is a derived cluster, not to be used directly.  These elements are present in all clusters derived from ${cluster.name}.`);
    } else if (!variance.componentized) {
        file.addImport("cluster/Cluster", "Cluster");
        base = file.expressions(`export const ${file.clusterName} = Cluster({`, "})")
            .document(cluster);
        generateMetadata(base, cluster);
    } else {
        file.addImport("cluster/ClusterFactory", "BaseClusterComponent");
        base = file.expressions(`export const ${cluster.name}Base = BaseClusterComponent({`, "})")
            .document(`These elements and properties are present in all ${cluster.name} clusters.`);
        generateMetadata(base, cluster);
    }
    const gen = new ClusterComponentGenerator(file, cluster);
    gen.populateComponent(variance.base, base);

    // Generate other components
    for (const component of variance.components) {
        gen.defineComponent(component);
    }

    // The rest of this code only applies to derived componentized clusters
    if (cluster.id === undefined || !variance.componentized) {
        return;
    }

    // Create the default cluster instance
    if (variance.requiresFeatures) {
        // The cluster requires some features to be present
        file.addImport("cluster/ClusterFactory", "ExtensionRequiredCluster");
        const instance = file.expressions(`export const ${file.clusterName} = ExtensionRequiredCluster({`, "})")
            .document(
                cluster,
                `Per the Matter specification you cannot use ${file.clusterName} without enabling certain feature combinations.  `
                    + `You must use the ${file.clusterName}.with factory method to obtain a working cluster.`
            );
        generateFactory(instance, variance, featureNames, illegal);
    } else {
        // The cluster has optional features but functions without them
        file.addImport("cluster/ClusterFactory", "ExtensibleCluster");
        const instance = file.expressions(`export const ${file.clusterName} = ExtensibleCluster({`, "})")
            .document(
                cluster,
                `${file.clusterName} supports optional features that you can enable with the ${file.clusterName}.with factory method.`
            );
        instance.atom(`...${cluster.name}Base`);
        generateFactory(instance, variance, featureNames, illegal);
    }

    // Generate the conditional type that defines cluster structure
    generateExtensionType(file, variance, featureNames, illegal);

    // Generate the "complete" cluster
    generateExhaustive(file, variance);
}

function withArticle(what: string) {
    switch (what[0].toLowerCase()) {
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
            return `an ${what}`;

        default:
            return `a ${what}`;
    }
}

function generateFactory(base: Block, variance: ClusterVariance, featureNames: FeatureNames, illegal: IllegalFeatureCombinations) {
    const file = base.file as ClusterFile;
    let factoryFunction;
    factoryFunction = base.statements(`factory: <T extends \`\${${file.cluster.name}Feature}\`[]>(...features: [...T]) => {`, "}")
        .document(
            [
                `Use this factory method to create ${withArticle(file.cluster.name)} cluster with support for optional features.  Include each {@link ${file.cluster.name}Feature} you wish to support.`,
                `@param features the optional features to support`,
                `@returns ${withArticle(file.cluster.name)} cluster with specified features enabled`,
                "@throws {IllegalClusterError} if the feature combination is disallowed by the Matter specification"
            ].join("\n")
        );

    file.addImport("cluster/ClusterFactory", "validateFeatureSelection");
    factoryFunction.atom(`validateFeatureSelection(features, ${file.cluster.name}Feature)`);

    const cluster = factoryFunction.expressions(`const cluster = Cluster({`, "})");
    cluster.atom(`...${file.cluster.name}Base`);
    file.addImport("schema/BitmapSchema", "BitFlags");
    cluster.atom(`supportedFeatures: BitFlags(${file.cluster.name}Base.features, ...features)`);

    for (let i = 1; i < variance.components.length; i++) {
        const component = variance.components[i];
        file.addImport("cluster/ClusterFactory", "extendCluster");
        const extension = factoryFunction.expressions(`extendCluster(`, ")");
        extension.atom("cluster");
        extension.atom(`${component.name}Component`);
        if (component.condition) {
            const bitmaps = conditionToBitmaps(component.condition, featureNames);
            for (const bitmap of bitmaps) {
                extension.value(bitmap);
            }
        }
    }

    if (illegal.length) {
        file.addImport("cluster/ClusterFactory", "preventCluster");

        const prevent = factoryFunction.expressions("preventCluster(", ")");
        prevent.atom("cluster");
        illegal.forEach(bitmap => prevent.value(bitmap));
    }

    factoryFunction.atom(`return cluster as unknown as ${file.cluster.name}Extension<BitFlags<typeof ${file.cluster.name}Base.features, T>>`);
}

function generateExtensionType(file: ClusterFile, variance: ClusterVariance, featureNames: FeatureNames, illegal: IllegalFeatureCombinations) {
    let factoryType;

    file.addImport("cluster/ClusterFactory", "ClusterForBaseCluster");
    file.addImport("schema/BitmapSchema", "TypeFromPartialBitSchema");
    factoryType = Array<string>(
        `export type ${file.cluster.name}Extension<SF extends TypeFromPartialBitSchema<typeof ${file.cluster.name}Base.features>> =`,
        `    ClusterForBaseCluster<typeof ${file.cluster.name}Base, SF>`,
        `    & { supportedFeatures: SF }`
    );

    for (const component of variance.components) {
        let componentPhrase = `typeof ${component.name}Component`;
        if (component.condition) {
            const test = conditionToBitmaps(component.condition, featureNames).map(serialize).join(" | ");
            componentPhrase = `(SF extends ${test} ? ${componentPhrase} : {})`
        }

        factoryType.push(`    & ${componentPhrase}`);
    }

    for (const bitmap of illegal) {
        factoryType.push(`    & (SF extends ${serialize(bitmap)} ? never : {})`)
    }

    file.atom(factoryType.join("\n"));
}

function generateMetadata(base: Block, cluster: ClusterModel) {
    if (cluster.id === undefined) {
        return;
    }

    base.atom("id", `0x${cluster.id.toString(16)}`);
    base.atom("name", `${JSON.stringify(cluster.name)}`);
    base.atom("revision", `${JSON.stringify(cluster.revision)}`);

    const featureBlock = base.expressions("features: {", "}");
    const features = cluster.features;
    if (features.length) {
        base.file.addImport("schema/BitmapSchema", "BitFlag");
        features.forEach(feature => {
            const name = camelize(feature.description || feature.name, false);
            featureBlock.atom(name, `BitFlag(${feature.effectiveId})`)
                .document(feature);
        });
    }
}

function generateExhaustive(file: ClusterFile, variance: ClusterVariance) {
    file.addImport("cluster/Cluster", "Cluster");
    const complete = file.expressions(`export const ${file.cluster.name}Complete = Cluster({`, "})");

    complete.document(`This cluster supports all ${file.cluster.name} features.  It may support illegal feature combinations.\n` +
        "If you use this cluster you must manually specify which features are active and ensure the set of active features is legal per the Matter specification.");

    complete.atom(`...${file.clusterName}`);

    const elementSources = {} as { [name: string]: string[] };

    for (const component of variance.components) {
        function addElementSource(tag: string) {
            if (component.optional.find(e => e.tag === tag) || component.mandatory.find(e => e.tag === tag)) {
                const pool = elementSources[tag];
                if (pool) {
                    pool.push(component.name);
                } else {
                    elementSources[tag] = [component.name];
                }
            }
        }

        addElementSource("attribute");
        addElementSource("command");
        addElementSource("event");
    }

    for (const tag in elementSources) {
        const elements = complete.expressions(`${tag}s: {`, "}");
        for (const source of elementSources[tag]) {
            elements.atom(`...${source}Component.${tag}s`);
        }
    }
}
