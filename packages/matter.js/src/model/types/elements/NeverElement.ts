/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { BaseTypeElement, Datatype, MatterElement } from "../../index.js"

/**
 * A placeholder type for use in base type definitions that cannot be
 * instantiated.
 */
export type NeverElement = BaseTypeElement & {
    datatype: Datatype.never,
}

export const Never = {
    type: Element.Type.Datatype,

    code: -1,
    datatype: Datatype.never,
    name: "never",
    description: "Unused placeholder"
};
