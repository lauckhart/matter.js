/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { AccessLevel } from "../../../cluster/Cluster.js";
import { FabricIndex } from "../../../datatype/FabricIndex.js";

export interface Io {
    read: (value: Io.Item, options?: Io.ReadOptions) => Io.Item;
    write: (value: Io.Item, input: any, options?: Io.WriteOptions) => Io.Item;
}

export namespace Io {
    export type Path = number[];

    export type Item = any;

    export enum ListOp {
        Replace = "replace",
        Add = "add",
        Delete = "delete",
        Modify = "modify",
    }

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
        listOp?: Io.ListOp;
        timed?: boolean;
    }
}
