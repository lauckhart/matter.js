/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { AccessLevel } from "../../../cluster/Cluster.js";
import { ImplementationError } from "../../../common/MatterError.js";
import { FabricIndex } from "../../../datatype/FabricIndex.js";

export interface Io {
    read: (value: Io.Item, options?: Io.ReadOptions) => Io.Item;
    write: (oldValue: Io.Item, newValue: Io.Item, options?: Io.WriteOptions) => Io.Item;
}

export namespace Io {
    export type Path = number[];

    export type Item = unknown;

    export type Struct = Record<string, Item>;

    export type List = Item[];

    export interface RwOptions {
        path?: Io.Path;
        owningFabric?: FabricIndex;
        accessingFabric?: FabricIndex;
        accessLevel?: AccessLevel;
    }

    export interface ReadOptions extends RwOptions {
        fabricFiltered?: boolean;
    }

    export interface WriteOptions extends RwOptions {
        timed?: boolean;
    }

    export function isNullish(item: Item) {
        return item === undefined || item === null;
    }

    export function assertStruct(item: Item): asserts item is Struct {
        if (typeof item !== "object" || item === null) {
            throw new ImplementationError(`Expected struct value to be an object but was ${typeof item}`);
        }
    }

    export function assertArray(item: Item): asserts item is List {
        if (!Array.isArray(item)) {
            throw new ImplementationError(`Expected list value to be an array but was ${typeof item}`);
        }
    }
}
