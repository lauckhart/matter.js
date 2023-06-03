/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Access, BaseElement, Conformance, Constraint } from "../../index.js";

/**
 * A type definition with no specialization based on metatype.  Generally only
 * useful as a base type.
 */
export type BaseTypeElement = BaseElement & {
    /**
     * Limits on values.
     */
    constraint?: Constraint,

    /**
     * Default value for the element.
     */
    default?: any,

    /**
     * Derived datatypes as defined by the Matter Specification must specify
     * the name of the base type.
     */
    base?: string,

    /**
     * Optionality control.
     */
    conformance?: Conformance.Definition,

    /**
     * Authorization limits.
     */
    access?: Access.Definition
}
