/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import type { AccessLevel } from "../../../cluster/Cluster.js";
import type { FabricIndex } from "../../../datatype/FabricIndex.js";
import type { PropertyModel } from "../../../model/index.js";
import type { Schema } from "../Schema.js";
import type { IoFactory } from "./IoFactory.js";

/**
 * An Io implements schema-based I/O operations to state.  This includes
 * read, write and validation.
 * 
 * Note this API performs I/O against the in-memory structure.  It does not
 * involve disk I/O or any other type of persistence.
 */
export interface Io {
    /**
     * The factory that created this Io.
     */
    factory: IoFactory;

    /**
     * The schema that defines this Io's behavior.
     */
    schema: Schema;

    /**
     * Perform a read.
     */
    read: Io.Read;

    /**
     * Perform a write.
     */
    write: Io.Write;

    /**
     * Perform validation.
     */
    validate: Io.Validate;

    /**
     * Create a managed instance.
     */
    manage: Io.Manage;
}

export namespace Io {
    export type Read = (
        value: Val,
        options?: ReadOptions,
        context?: ValueContext
    ) => Io.Val;

    export type Write = (
        newValue: Val,
        oldValue: Val,
        options?: WriteOptions,
        context?: ValueContext
    ) => Val;

    export type Validate = (
        value: Val,
        context?: ValidationContext
    ) => void;
    
    export type Manage = (
        reference: ValueReference,
        options?: Options,
        context?: ValueContext
    ) => void;

    export type Path = (string | number)[];

    export type Val = unknown;

    export type Struct = Record<string, Val>;

    export type List = Val[];

    export type Container = Struct | List;

    /**
     * Options common to read and write.
     */
    export interface RwOptions {
        /**
         * An optional path used for reading or writing sub-values.
         * 
         * This allows for efficient access to a nested value without
         * processing irrelevant subpaths.
         */
        path?: Io.Path;

        /**
         * The fabric of the authorized client.
         */
        accessingFabric?: FabricIndex;

        /**
         * The access level of the authorized client.
         */
        accessLevel?: AccessLevel;

        /**
         * If this is true then access levels are not enforced and all values
         * are read/write.  Datatypes are still enforced.
         * 
         * Tracks "offline" rather than "online" because this makes the safer
         * mode (full enforcement) the default if the value is omitted.
         */
        offline?: boolean;
    }

    /**
     * Options common to read.
     */
    export interface ReadOptions extends RwOptions {
        /**
         * If this is true, fabric-scoped lists are filtered to the accessing
         * fabric.
         */
        fabricFiltered?: boolean;
    }

    /**
     * Options common to write.
     */
    export interface WriteOptions extends RwOptions {
        /**
         * If this is true a timed transaction is in effect.
         */
        timed?: boolean;
    }

    /**
     * All I/O options.
     */
    export interface Options extends ReadOptions, WriteOptions {}

    /**
     * Details about a value's position in the data model.
     * 
     * Options and context are similar but options vary with the session and
     * context varies with values and position in the model.
     */
    export interface ValueContext {
        /**
         * The fabric that owns the value.
         */
        owningFabric?: FabricIndex;
    }

    /**
     * Contextual information tracked during validation.
     */
    export interface ValidationContext {
        /**
         * To validate conformance and constraints we require access to sibling
         * values.  They are passed here when validating a record.
         */
        siblings?: Struct;

        /**
         * Choice conformance requires context from the parent object.  This
         * context is passed here.
         */
        choices?: Record<string, Choice>;
    }

    /**
     * Details a conformance choice.  Used during conformance validation.
     */
    export interface Choice {
        count: number;
        target: number;
        orMore: boolean;
    }

    /**
     * A ValueReference offers a simple mechanism for referring to properties
     * by reference.
     */
    export interface ValueReference<T extends Val = Val> {
        /**
         * The current value of the referenced property.
         */
        value: T;

        /**
         * The original value of the referenced property.
         */
        readonly original: T;

        /**
         * Has the value changed?
         */
        changed: boolean;
    }
}
