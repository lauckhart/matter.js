/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { AttributeModel, ClusterModel, ElementTag, FeatureSet, Matter, ValueModel } from "../../../model/index.js";
import { IoWriter } from "./IoWriter.js";
import { Io } from "./Io.js";
import { IoReader } from "./IoReader.js";
import { InternalError } from "../../../common/MatterError.js";
import { ClusterType } from "../../../cluster/ClusterType.js";

/**
 * We cache factories based on the schema and active features.
 */
const factoryCache = new WeakMap<ClusterModel, Map<string, IoFactory>>();

/**
 * IoFactory manages I/O implementations.
 */
export class IoFactory {
    #generating = new Set<ValueModel | ClusterModel>();
    #cache = new WeakMap<ValueModel | ClusterModel, Io>();
    #featureMap: ValueModel;
    #supportedFeatures: FeatureSet;
    #attributes: AttributeModel[];

    private constructor(featureMap: ValueModel, supportedFeatures: FeatureSet, attributes: AttributeModel[]) {
        this.#featureMap = featureMap;
        this.#supportedFeatures = supportedFeatures;
        this.#attributes = attributes;
    }

    get featureMap() {
        return this.#featureMap;
    }

    get supportedFeatures() {
        return this.#supportedFeatures;
    }

    get attributes() {
        return this.#attributes;
    }

    /**
     * Create a new I/O factory.
     */
    static create(config: IoFactory.Configuration) {
        let schema = config.schema;
        const cluster = config.cluster;

        if (schema === undefined) {
            if (cluster === undefined) {
                throw new InternalError("Io requires a cluster or schema for configuration");
            }

            for (const child of Matter.children) {
                if (child.tag === ElementTag.Cluster && child.id === cluster.id) {
                    schema = new ClusterModel(child);
                    break;
                }
            }

            if (schema === undefined) {
                throw new InternalError(`Cannot locate schema for cluster ${cluster.id}, please supply manually`);
            }
        }

        const supportedFeatures =
            config.supportedFeatures
            ?? (cluster && new FeatureSet(Object.keys(cluster.features)))
            ?? new FeatureSet();
        const featureKey = supportedFeatures.array.join(" ");

        let cachedForCluster = factoryCache.get(schema);
        if (cachedForCluster) {
            const factory = cachedForCluster.get(featureKey);
            if (factory) {
                return factory;
            }
        }
    
        const featureMap = config.featureMap ?? schema.featureMap;

        let attributes = schema.all(AttributeModel);
        if (cluster) {
            const supportedAttributeIds = new Set(Object.values(cluster.attributes).map(a => a.id as number));
            attributes = attributes.filter(a => a.id !== undefined && supportedAttributeIds.has(a.id));
        }

        const factory = new IoFactory(featureMap, supportedFeatures, attributes);
        if (!cachedForCluster) {
            cachedForCluster = new Map;
            factoryCache.set(schema, cachedForCluster);
        }
        cachedForCluster.set(featureKey, factory);

        return factory;
    }

    /**
     * Obtain an I/O implementation for a specific schema.
     * 
     * @param schema the model describing the record type
     * @returns the I/O implementation
     */
    get(schema: ClusterModel | ValueModel): Io {
        let io = this.#cache.get(schema);
        if (io === undefined) {
            if (this.isGenerating(schema)) {
                throw new InternalError(`Recursive structure generation requires lazy loading of ${schema.name}`);
            }
            this.#generating.add(schema);
            io = {
                read: IoReader(schema, this),
                write: IoWriter(schema, this),
            }
            this.#generating.delete(schema);
            this.#cache.set(schema, io);
        }
        return io;
    }

    isGenerating(schema: ClusterModel | ValueModel) {
        return this.#generating.has(schema);
    }
}

export namespace IoFactory {
    export interface Configuration {
        cluster?: ClusterType;
        featureMap?: ValueModel;
        supportedFeatures?: FeatureSet;
        schema?: ClusterModel;
    }
}
