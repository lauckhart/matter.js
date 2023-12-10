/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ClusterModel, FeatureSet, ValueModel, Globals, AttributeModel, type DatatypeModel } from "../../model/index.js";
import { ValueManager } from "../state/managed/values/ValueManager.js";
import { InternalError } from "../../common/MatterError.js";
import { ValueValidator } from "../state/managed/ValueValidator.js";
import { Schema } from "./Schema.js";
import { AccessControl } from "../AccessControl.js";
import { Val } from "../state/managed/Val.js";

/**
 * OperationalSchema manages a specific root schema used operationally at
 * runtime.
 * 
 * Management function include access control, data validation, data mutation
 * and transactionality.
 * 
 * The operational schema is derived from a logical schema.  The logical schema
 * is generally a {@link ClusterModel} but may also be a
 * {@link DatatypeModel} that defines a struct.
 */
export class OperationalSchema implements ValueManager {
    #generating = new Set<Schema>();
    #cache = new WeakMap<Schema, ValueManager>();
    #featureMap: ValueModel;
    #supportedFeatures: FeatureSet;
    #members: Set<ValueModel>;
    #root: ValueManager;

    /**
     * Create a new operational schema.
     * 
     * You can produce an ValueManager for any schema using this factory.
     * However, there are specific customizations controlled by the root
     * schema:
     * 
     * - Change eventing occur for root schema members.  In the case of
     *   cluster schema this means you can monitor for changes on a
     *   per-attribute basis.
     * 
     * - If the root schema defines a cluster, the cluster's featureMap and
     *   supportedFeatures affect conformance-based validation.
     * 
     * @param root the root schema
     * @param managedBase the base class for managed value instances
     */
    constructor(root: Schema, managedBase?: new () => Val) {
        this.#root = this.#createValueManager(root, managedBase);
        if (root instanceof ClusterModel) {
            this.#featureMap = root.featureMap;
            this.#supportedFeatures = root.supportedFeatures ?? new FeatureSet();
        } else {
            this.#featureMap = new AttributeModel(Globals.FeatureMap);
            this.#supportedFeatures = new FeatureSet();
        }
        this.#members = new Set(root.members);
    }

    get owner() {
        return this.#root.owner;
    }

    get schema() {
        return this.#root.schema;
    }

    get access() {
        return this.#root.access;
    }

    get validate() {
        return this.#root.validate;
    }

    get manage() {
        return this.#root.manage;
    }

    /**
     * Retrieve root schema elements that contribute fields to the data model.
     */
    get members() {
        return this.#members;
    }

    /**
     * All available features defined in the schema.
     */
    get featureMap() {
        return this.#featureMap;
    }

    /**
     * Features supported by this implementation.
     */
    get supportedFeatures() {
        return this.#supportedFeatures;
    }

    /**
     * Obtain {@link ValueManager} implementation for a specific schema.
     * 
     * @param schema the model describing the record type
     * @returns the I/O implementation
     */
    get(schema: Schema): ValueManager {
        if (schema === this.#root.schema) {
            return this;
        }

        let manager = this.#cache.get(schema);
        if (manager === undefined) {
            manager = this.#createValueManager(schema);
            this.#cache.set(schema, manager);
        }

        return manager;
    }

    #createValueManager(schema: Schema, managedBase?: new () => Val) {
        // Implements deferred generation (see comments below).  Proxies to
        // the real generator, installs the generated function, then invokes.
        // Since I/O functions are properties and not methods, we then continue
        // to proxy to the generated function for places where the function is
        // held directly.
        const deferGeneration = (
            name: string,
            generator: (schema: Schema, factory: OperationalSchema, base?: new () => Val) => any
        ) => {
            let generated = false;

            return (
                (...args: any[]): any => {
                    if (!generated) {
                        if (manager === undefined) {
                            throw new InternalError("Deferred I/O generation invoked impossibly early");
                        }

                        (manager as any)[name] = generator(schema, this, managedBase) as any;

                        generated = true;
                    }

                    return (manager as any)[name](...args) as any;
                }
            ) as any;
        }

        let manager: ValueManager;
        if (this.#isGenerating(schema)) {
            manager = {
                owner: this,
                schema: schema,
                access: AccessControl(schema),
                validate: deferGeneration("validate", ValueValidator),
                manage: deferGeneration("manage", ValueManager),
            }
        } else {
            manager = {
                owner: this,
                schema: schema,
                access: AccessControl(schema),
                validate: ValueValidator(schema, this),
                manage: ValueManager(schema, this, managedBase),
            }
        }

        this.#generating.delete(schema);
        this.#cache.set(schema, manager);

        return manager;
    }

    /**
     * If a schema has circular references, code generation may need to defer
     * generation of child functions to avoid infinite loops.
     * 
     * In order to keep generation code simpler we use this method to detect
     * when lazy generation is necessary and install stubs that bootstrap each
     * method.
     */
    #isGenerating(schema: Schema) {
        return this.#generating.has(schema);
    }
}
