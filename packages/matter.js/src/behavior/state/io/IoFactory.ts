/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ClusterModel, ElementTag, FeatureSet, Matter, ValueModel, Globals, AttributeModel } from "../../../model/index.js";
import { IoWriter } from "./rw/writer.js";
import { Io } from "./Io.js";
import { IoReader } from "./rw/reader.js";
import { InternalError } from "../../../common/MatterError.js";
import { ClusterType } from "../../../cluster/ClusterType.js";
import { IoValidator } from "./IoValidator.js";
import { Schema } from "../Schema.js";
import { IoManager } from "./manage/manage.js";

/**
 * We cache factories based on the schema and active features.
 */
const factoryCache = new WeakMap<Schema, Map<string, IoFactory>>();

/**
 * IoFactory manages I/O implementations.
 */
export class IoFactory {
    #generating = new Set<Schema>();
    #cache = new WeakMap<Schema, Io>();
    #featureMap: ValueModel;
    #supportedFeatures: FeatureSet;
    #fields: ValueModel[];

    private constructor(featureMap: ValueModel, supportedFeatures: FeatureSet, fields: ValueModel[]) {
        this.#featureMap = featureMap;
        this.#supportedFeatures = supportedFeatures;
        this.#fields = fields;
    }

    get featureMap() {
        return this.#featureMap;
    }

    get supportedFeatures() {
        return this.#supportedFeatures;
    }

    get attributes() {
        return this.#fields;
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
    
        let featureMap = config.featureMap;
        if (featureMap === undefined) {
            if (schema instanceof ClusterModel) {
                featureMap = schema.featureMap;
            } else {
                featureMap = new AttributeModel(Globals.FeatureMap);
            }
        }

        let attributes = schema.all(ValueModel);
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
    get(schema: Schema): Io {
        let io = this.#cache.get(schema);
        if (io === undefined) {
            if (this.isGenerating(schema)) {
                throw new InternalError(`Recursive structure generation requires lazy loading of ${schema.name}`);
            }

            this.#generating.add(schema);

            io = {
                factory: this,
                schema: schema,
                read: IoReader(schema, this),
                write: IoWriter(schema, this),
                validate: IoValidator(schema, this),
                manage: IoManager(schema, this),
            }
            
            this.#generating.delete(schema);
            this.#cache.set(schema, io);
        }
        return io;
    }

    isGenerating(schema: Schema) {
        return this.#generating.has(schema);
    }
}

export namespace IoFactory {
    export interface Configuration {
        cluster?: ClusterType;
        featureMap?: ValueModel;
        supportedFeatures?: FeatureSet;
        schema?: Schema;
    }
}
