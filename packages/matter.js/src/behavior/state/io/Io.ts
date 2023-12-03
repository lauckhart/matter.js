/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import type { AccessLevel } from "../../../cluster/Cluster.js";
import type { FabricIndex } from "../../../datatype/FabricIndex.js";
import { AttributeModel } from "../../../model/index.js";
import { StatusResponseError } from "../../../protocol/interaction/InteractionMessenger.js";
import { StatusCode } from "../../../protocol/interaction/InteractionProtocol.js";
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
        value: Io.Val,
        options?: Io.ReadOptions,
        context?: ValueContext
    ) => Io.Val;

    export type Write = (
        newValue: Io.Val,
        oldValue: Io.Val,
        options?: Io.WriteOptions,
        context?: ValueContext
    ) => Io.Val;

    export type Validate = (
        value: Io.Val,
        options?: Io.ValidateOptions
    ) => void;
    
    export type Manage = (
        value: Io.Val,
        owner: ValueOwner,
        context?: ValueContext
    ) => void;

    export type Path = (string | number)[];

    export type Val = unknown;

    export type Struct = Record<string, Val>;

    export type List = Val[];

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
         * are read/write.
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
     * Validation options.
     */
    export interface ValidateOptions {
        /**
         * To validate and conformance and constraints we require access to
         * sibling values.  They are passed here when validating a record.
         */
        siblings?: Struct;

        /**
         * Choice conformance requires context from the parent object.  This
         * context is passed here.
         */
        choices?: Record<string, Choice>;
    }

    /**
     * Details about a value's position in the data model.
     * 
     * Options and context are similar but options vary with the session and
     * context varies with the data model.
     */
    export interface ValueContext {
        /**
         * The attribute the value is part of.
         */
        attribute?: AttributeModel;

        /**
         * The fabric that owns the value.
         */
        owningFabric?: FabricIndex;
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
     * This error is thrown when datatypes are invalid.
     */
    export class DatatypeError extends StatusResponseError {
        constructor(message: string) {
            super(message, StatusCode.InvalidDataType);
        }
    }

    /**
     * Contextual information used by Io.Manage implementations.
     */
    export interface ValueOwner {
        /**
         * Begin a transaction.
         * 
         * @returns true if transactions are supported
         */
        beginTransaction(): boolean;

        /**
         * Change notification.
         */
        changed(attribute: AttributeModel): void;

        /**
         * Read access controls.
         */
        readOptions?: ReadOptions;

        /**
         * Write access controls.
         */
        writeOptions?: WriteOptions;
    }
}
