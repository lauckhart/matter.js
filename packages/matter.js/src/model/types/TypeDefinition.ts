/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import {
    BoolTypeDefinition,
    IntTypeDefinition,
    FloatTypeDefinition,
    OctetTypeDefinition,
    EnumTypeDefinition,
    ObjectTypeDefinition,
    ArrayTypeDefinition,
    NeverTypeDefinition
} from "./index.js";

/**
 * Definition of a type as defined by the Matter specification.
 */
export type TypeDefinition
    = BoolTypeDefinition
    | IntTypeDefinition
    | FloatTypeDefinition
    | OctetTypeDefinition
    | EnumTypeDefinition
    | ObjectTypeDefinition
    | ArrayTypeDefinition
    | NeverTypeDefinition;
