/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { CommonTypeDefinition, Metatype } from "../index.js";

/**
 * Definition of a sequence of octets of fixed length.
 */
export type OctetTypeDefinition = CommonTypeDefinition & {
    datatype: Metatype.Bytes
}
