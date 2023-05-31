/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Access, Conformance, Quality } from "../index.js";
import { Constraint } from "./index.js";

/**
 * A type definition with no specialization based on metatype.  Generally only
 * useful as a base type.
 */
export type CommonTypeDefinition = {
    /**
     * This type's ID as defined in the Matter specification.  This
     * semantically defines the type either globally or in the context of its
     * parent.
     */
    code: number,

    /**
     * A short identifier for the type.
     */
    name?: string,

    /**
     * A longer description of the type.
     */
    description?: string,

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
    quality?: Quality.DataField
}
