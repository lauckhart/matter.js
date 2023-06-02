/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { MatterElement, Access, Conformance, Quality, Constraint } from "../index.js";

/**
 * A type definition with no specialization based on metatype.  Generally only
 * useful as a base type.
 */
export type BaseTypeElement = MatterElement & {
    type: Element.Type.Datatype,

    /**
     * Limits on values.
     */
    constraint?: Constraint,

    /**
     * Optionality control.
     */
    conformance?: Conformance.Definition,

    /**
     * Authorization limits.
     */
    access?: Access.Definition,

    /**
     * Qualities defined by the Matter specification as "other qualities".
     */
    quality?: Quality.DataField,

    /**
     * Default value for the element.
     */
    default?: any
}
