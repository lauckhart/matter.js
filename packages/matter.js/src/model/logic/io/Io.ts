/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { AccessLevel } from "../../../cluster/Cluster.js";
import { FabricIndex } from "../../../datatype/FabricIndex.js";

export interface Io {
    read: (value: Io.Item, path: Io.Path, auth?: Io.Authorization) => Io.Item;
    write: (value: Io.Item, path: Io.Path, input: any, auth?: Io.Authorization) => Io.Item;
}

export namespace Io {
    export type Path = undefined | (string | number)[];

    export type Item = any;

    export interface Authorization {
        owningFabric?: FabricIndex;
        accessingFabric?: FabricIndex;
        accessLevel?: AccessLevel;
        fabricFiltered?: boolean;
    }
}
