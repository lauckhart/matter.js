/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ClusterModel, FeatureSet, ValueModel, Globals, AttributeModel } from "../../../../model/index.js";
import { ValueManager } from "./ValueManager.js";
import { InternalError } from "../../../../common/MatterError.js";
import { ValueValidator } from "../ValueValidator.js";
import { Schema } from "../../Schema.js";
import { AccessController } from "../../../AccessController.js";
import { Val } from "../Val.js";

/**
 * RootManager manages state associated with a specific root schema.  This is
 * generally a {@link ClusterModel} but may also be a struct
 * {@link ValueModel}.
 * 
 * RootManager primarily acts as a factory for {@link ValueManager}s.
 */
export class RootManager {
    #generating = new Set<Schema>();
    #cache = new WeakMap<Schema, ValueManager>();
    #featureMap: ValueModel;
    #supportedFeatures: FeatureSet;
    #members: Set<ValueModel>;
    #root: Schema;

    /**
     * Create factory for the specified root schema.
     * 
     * You can produce an ValueManager for any schema using this factory.
     * However, there are specific customizations controlled by the root
     * schema:
     * 
     * - Change eventing occur for root schema members.  In the case of
     *   cluster schema this means you can monitor for changes on a
     *   per-attribute basis
     * 
     * - If the root schema defines a cluster, the cluster's featureMap and
     *   supportedFeatures affect conformance-based validation
     */
    constructor(root: Schema) {
        this.#root = root;
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

    get root() {
        return this.#root;
    }

    /**
     * Obtain {@link ValueManager} implementation for a specific schema.
     * 
     * @param schema the model describing the record type
     * @param base an optional base class for managed structs
     * @returns the I/O implementation
     */
    get(schema: Schema, base?: new () => Val): ValueManager {
        let manager = this.#cache.get(schema);

        // Implements deferred generation (see comments below).  Proxies to
        // the real generator, installs the generated function, then invokes.
        // Since I/O functions are properties and not methods, we then continue
        // to proxy to the generated function for places where the function is
        // held directly.
        const deferGeneration = (
            name: string,
            generator: (schema: Schema, factory: RootManager, base?: new () => Val) => any
        ) => {
            let generated = false;

            return (
                (...args: any[]): any => {
                    if (!generated) {
                        if (manager === undefined) {
                            throw new InternalError("Deferred I/O generation invoked impossibly early");
                        }

                        (manager as any)[name] = generator(schema, this, base) as any;

                        generated = true;
                    }

                    return (manager as any)[name](...args) as any;
                }
            ) as any;
        }

        if (manager === undefined) {
            if (this.isGenerating(schema)) {
                manager = {
                    owner: this,
                    schema: schema,
                    access: AccessController(schema),
                    validate: deferGeneration("validate", ValueValidator),
                    manage: deferGeneration("manage", ValueManager),
                }
            } else {
                manager = {
                    owner: this,
                    schema: schema,
                    access: AccessController(schema),
                    validate: ValueValidator(schema, this),
                    manage: ValueManager(schema, this, base),
                }
            }

            this.#generating.delete(schema);
            this.#cache.set(schema, manager);
        }

        return manager;
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
