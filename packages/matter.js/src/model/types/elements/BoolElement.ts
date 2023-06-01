/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Datatype, BaseTypeElement } from "../index.js";

/**
 * Definition of a type detailing a non-composite base type.
 */
export type BoolElement = BaseTypeElement & {
    datatype: Datatype.bool,
    default?: boolean
};
