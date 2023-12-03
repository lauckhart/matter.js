/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ClusterModel, FeatureSet, ValueModel, Globals, AttributeModel } from "../../../model/index.js";
import { IoWriter } from "./rw/writer.js";
import { Io } from "./Io.js";
import { IoReader } from "./rw/reader.js";
import { InternalError } from "../../../common/MatterError.js";
import { IoValidator } from "./IoValidator.js";
import { Schema } from "../Schema.js";
import { IoManager } from "./manage/manage.js";

/**
 * IoFactory manages I/O implementations.
 */
export class IoFactory {
    #generating = new Set<Schema>();
    #cache = new WeakMap<Schema, Io>();
    #featureMap: ValueModel;
    #supportedFeatures: FeatureSet;
    #members: Set<ValueModel>;

    /**
     * Create an I/O factory for the specified root schema.
     * 
     * You can produce an I/O for any schema using this factory.  However,
     * there are specific customizations controlled by the root schema:
     * 
     * - Change eventing occur for root schema members.  In the case of
     *   cluster schema this means you can monitor for changes on a
     *   per-attribute basis
     * 
     * - If the root schema defines a cluster, the cluster's featureMap and
     *   supportedFeatures affect conformance-based validation
     */
    private constructor(root: Schema) {
        if (root instanceof ClusterModel) {
            this.#featureMap = root.featureMap;
            this.#supportedFeatures = root.supportedFeatures ?? new FeatureSet();
        } else {
            this.#featureMap = new AttributeModel(Globals.FeatureMap);
            this.#supportedFeatures = new FeatureSet();
        }
        this.#members = new Set(root.members);
    }

    get featureMap() {
        return this.#featureMap;
    }

    get supportedFeatures() {
        return this.#supportedFeatures;
    }

    get members() {
        return this.#members;
    }

    /**
     * Obtain an I/O implementation for a specific schema.
     * 
     * @param schema the model describing the record type
     * @returns the I/O implementation
     */
    get(schema: Schema): Io {
        let io = this.#cache.get(schema);

        // Implements deferred generation (see comments below).  Proxies to
        // the real generator, installs the generated function, then invokes.
        // Since I/O functions are properties and not methods, we then continue
        // to proxy to the generated function for places where the function is
        // held directly.
        const deferGeneration = (
            name: string,
            generator: (schema: Schema, factory: IoFactory) => any
        ) => {
            let generated = false;

            return (
                (...args: any[]): any => {
                    if (!generated) {
                        if (io === undefined) {
                            throw new InternalError("Deferred I/O generation invoked impossibly early");
                        }

                        (io as any)[name] = generator(schema, this) as any;

                        generated = true;
                    }

                    return (io as any)[name](...args) as any;
                }
            ) as any;
        }

        if (io === undefined) {
            if (this.isGenerating(schema)) {
                io = {
                    factory: this,
                    schema: schema,
                    read: deferGeneration("read", IoReader),
                    write: deferGeneration("write", IoWriter),
                    validate: deferGeneration("validate", IoValidator),
                    manage: deferGeneration("manage", IoManager),
                }
            } else {
                io = {
                    factory: this,
                    schema: schema,
                    read: IoReader(schema, this),
                    write: IoWriter(schema, this),
                    validate: IoValidator(schema, this),
                    manage: IoManager(schema, this),
                }
            }

            this.#generating.delete(schema);
            this.#cache.set(schema, io);
        }

        return io;
    }

    /**
     * If a schema has circular references, I/O generation may need to defer
     * generation of a child I/O functions to avoid infinite loops.
     * 
     * Lazy generation is not the default because it pushes some errors later
     * in the setup cycle.  I/O generation uses this method to determine
     * whether lazy generation is necessary.
     * 
     * In order to keep generation code simpler we detect when lazy generation
     * is required and install proxies for the get methods
     */
    private isGenerating(schema: Schema) {
        return this.#generating.has(schema);
    }
}
