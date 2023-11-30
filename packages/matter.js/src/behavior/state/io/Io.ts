/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { AccessLevel } from "../../../cluster/Cluster.js";
import { ImplementationError } from "../../../common/MatterError.js";
import { FabricIndex } from "../../../datatype/FabricIndex.js";
import { ClusterModel, ValueModel } from "../../../model/index.js";
import { StatusResponseError } from "../../../protocol/interaction/InteractionMessenger.js";
import { StatusCode } from "../../../protocol/interaction/InteractionProtocol.js";

export interface Io {
    read: Io.Read;
    write: Io.Write;
    validate: Io.Validate;
}

export namespace Io {
    export type Read = (value: Io.Val, options?: Io.ReadOptions) => Io.Val;
    export type Write = (newValue: Io.Val, oldValue: Io.Val, options?: Io.WriteOptions) => Io.Val;
    export type Validate = (value: Io.Val, options?: Io.ValidateOptions) => Io.Val;

    export type Schema = ClusterModel | ValueModel;

    export type Path = number[];

    export type Val = unknown;

    export type Struct = Record<string, Val>;

    export type List = Val[];

    /**
     * Options common to read and write.
     */
    export interface RwOptions {
        path?: Io.Path;
        owningFabric?: FabricIndex;
        accessingFabric?: FabricIndex;
        accessLevel?: AccessLevel;
    }

    /**
     * Options common to read.
     */
    export interface ReadOptions extends RwOptions {
        fabricFiltered?: boolean;
    }

    /**
     * Options common to write.
     */
    export interface WriteOptions extends RwOptions {
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

    export interface Choice {
        count: number;
        target: number;
        orMore: boolean;
    }

    export function assertStruct(item: Val): asserts item is Struct {
        if (typeof item !== "object" || item === null) {
            throw new ImplementationError(`Expected struct value to be an object but was ${typeof item}`);
        }
    }

    export function assertArray(item: Val): asserts item is List {
        if (!Array.isArray(item)) {
            throw new ImplementationError(`Expected list value to be an array but was ${typeof item}`);
        }
    }

    export class DatatypeError extends StatusResponseError {
        constructor(schema: Io.Schema, message: string) {
            super(
                `Error validating ${
                    schema.path
                }: ${
                    message
                }`, StatusCode.InvalidDataType);
        }
    }
}
