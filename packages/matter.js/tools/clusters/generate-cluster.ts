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

export function generateCluster(file: ClusterFile, cluster: ClusterModel) {
    logger.info(`${cluster.name} → ${file.name}.ts`);
    
    // Load features
    const features = cluster.features;
    const featureNames = {} as { [code: string]: string };
    features.forEach(f => featureNames[f.name] = camelize(f.description ?? f.name, false));

    // Analyze variance
    const variance = ClusterVariance(cluster);
    const illegal = variance.illegal.map(bitmap => translateBitmap(bitmap, featureNames));

    // Generate the factory function
    generateFactory(file, cluster, variance, featureNames, illegal);

    const ns = file.statements(`export namespace ${file.clusterName} {`, "}");

    // Generate feature enum
    if (features.length) {
        const featureEnum = ns.expressions("export enum Feature {", "}")
            .document({ description: `These are optional features supported by ${file.clusterName}.`, xref: cluster.featureMap.xref });
        for (const f of features) {
            const name = camelize(f.description || f.name);
            featureEnum.atom(`${name} = ${serialize(name)}`)
                .document(f);
        }
    }

    // Generate the conditional type that defines cluster structure
    generateType(ns, variance, featureNames, illegal);

    // Generate metadata
    generateMetadata(ns, cluster);

    // Generate components
    const gen = new ClusterComponentGenerator(ns, cluster);
    for (const component of variance.components) {
        gen.defineComponent(component);
    }

    // Generate the "complete" cluster
    generateExhaustive(ns, cluster, variance);
}

function generateFactory(file: ClusterFile, cluster: ClusterModel, variance: ClusterVariance, featureNames: FeatureNames, illegal: IllegalFeatureCombinations) {
    let factoryFunction;
    if (variance.componentized) {
        factoryFunction = file.types.statements(`export function ${file.clusterName}<T extends ${file.clusterName}.Feature[]>(...features: [ ...T ]) {`, "}")
            .document(
                cluster,
                [
                    `Use this factory function to create a ${cluster.name} cluster supporting a specific set of features.  Include each {@link ${file.clusterName}.Feature} you wish to support.`,
                    `@param features a list of {@link ${file.clusterName}.Feature} to support`,
                    `@returns a ${cluster.name} cluster with specified features enabled`,
                    "@throws {IllegalClusterError} if the feature combination is disallowed by the Matter specification"
                ].join("\n")
            );
    } else {
        factoryFunction = file.types.statements(`export function ${file.clusterName}() {`, "}")
            .document(cluster, `This function creates a ${cluster.name} cluster.`);
    }

    const base = factoryFunction.expressions(`const cluster = {`, "}");
    base.atom(`...${file.clusterName}.Metadata`);
    if (variance.componentized) {
        file.addImport("schema/BitmapSchema", "BitFlags");
        base.atom(`supportedFeatures: BitFlags(${file.clusterName}.Metadata.features, ...features)`);
    }
    base.atom(`...${file.clusterName}.BaseComponent`);

    for (let i = 1; i < variance.components.length; i++) {
        const component = variance.components[i];
        file.addImport("cluster/ClusterFactory", "extendCluster");
        const extension = factoryFunction.expressions(`extendCluster(`, ")");
        extension.atom("cluster");
        extension.atom(`${file.clusterName}.${component.name}Component`);
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

    if (variance.componentized) {
        factoryFunction.atom(`return cluster as unknown as ${file.clusterName}.Type<BitFlags<typeof ${file.clusterName}.Metadata.features, T>>`);
    } else {
        factoryFunction.atom(`return cluster as unknown as ${file.clusterName}.Type`);
    }
}

function generateType(ns: Block, variance: ClusterVariance, featureNames: FeatureNames, illegal: IllegalFeatureCombinations) {
    let factoryType;

    if (variance.componentized) {
        ns.file.addImport("schema/BitmapSchema", "TypeFromPartialBitSchema");
        factoryType = Array<string>(
            "export type Type<T extends TypeFromPartialBitSchema<typeof Metadata.features>> = ",
            "    typeof Metadata",
            "    & { supportedFeatures: T }"
        );
    } else {
        factoryType = Array<string>(
            "export type Type = ",
            "    typeof Metadata"
        )
    }

    for (const component of variance.components) {
        let componentPhrase = `typeof ${component.name}Component`;
        if (component.condition) {
            const test = conditionToBitmaps(component.condition, featureNames).map(serialize).join(" | ");
            componentPhrase = `(T extends ${test} ? ${componentPhrase} : {})`
        }

        factoryType.push(`    & ${componentPhrase}`);
    }

    for (const bitmap of illegal) {
        factoryType.push(`    & (T extends ${serialize(bitmap)} ? never : {})`)
    }

    ns.atom(factoryType.join("\n"));
}

function generateMetadata(ns: Block, cluster: ClusterModel) {
    ns.file.addImport("cluster/ClusterFactory", "ClusterMetadata");
    const metadata = ns.expressions(`export const Metadata = ClusterMetadata({`, `})`)
        .document({ details: `${cluster.name} cluster metadata.`, xref: cluster.xref });
    if (cluster.id !== undefined) {
        metadata.atom("id", `0x${cluster.id.toString(16)}`);
    }
    metadata.atom("name", `${JSON.stringify(cluster.name)}`);
    metadata.atom("revision", `${JSON.stringify(cluster.revision)}`);

    const featureBlock = metadata.expressions("features: {", "}");
    const features = cluster.features;
    if (features.length) {
        ns.file.addImport("schema/BitmapSchema", "BitFlag");
        features.forEach(feature => {
            const name = camelize(feature.description || feature.name, false);
            featureBlock.atom(name, `BitFlag(${feature.effectiveId})`)
                .document(feature);
        });
    }
}

function generateExhaustive(ns: Block, cluster: ClusterModel, variance: ClusterVariance) {
    ns.file.addImport("cluster/Cluster", "Cluster");
    const complete = ns.expressions("export const Complete = Cluster({", "})");

    if (variance.componentized) {
        complete.document(`This cluster supports all ${cluster.name} features.  It may support illegal feature combinations.\n` +
            "If you use this cluster you must manually specify which features are active and ensure the set of active features is legal per the Matter specification.");
    } else {
        complete.document(`This cluster supports all ${cluster.name} features.`);
    }

    complete.atom("...Metadata");

    const elementSources = {} as { [name: string]: string[] };

    for (const component of variance.components) {
        function addElementSource(tag: string) {
            if (component.optional.find(e => e.tag === tag) || component.mandatory.find(e => e.tag === tag)) {
                const pool = elementSources[tag];
                if (pool) {
                    pool.push(component.name);
                } else {
                    elementSources[tag] = [ component.name ];
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
