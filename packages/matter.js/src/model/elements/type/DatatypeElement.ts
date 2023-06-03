/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import {
    BoolElement,
    IntElement,
    FloatElement,
    OctetElement,
    EnumElement,
    StructElement,
    ListElement
} from "../../index.js";

/**
 * Definition of a type as defined by the Matter specification.
 */
export type DatatypeElement
    = BoolElement
    | IntElement
    | FloatElement
    | OctetElement
    | EnumElement
    | StructElement
    | ListElement;
