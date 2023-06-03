/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

export namespace Constraint {
    /**
     * A fixed numeric value or sequence length.
     */
    export type Value = number;

    /**
     * A (possibly unbounded) range of valid values or sequence lengths.
     */
    export type Range = { min?: number, max?: number };

    /**
     * A constraint on a numerical value or sequence length.
     */
    export type Numerical = Value | Range;

    /**
     * A limit to the number of Unicode code points in a string.
     */
    export type Chars = { bytes: Numerical, chars: Numerical };

    /**
     * A limit on both a list and its entry type.
     */
    export type List = { list: Numerical, entry: Constraint };

    /**
     * All non-union constraints.
     */
    export type Atom = Numerical | Chars | List;

    /**
     * A sequence of constraints, any one of which may be true to validate the
     * entire union.
     */
    export type Union = Atom[];
}

/**
 * Defines constraints per the Matter specification.
 * 
 * Formally a constraint is not considered a quality by the specification.
 * It is handled similarly to qualities, though, so we place it in the
 * qualities package.
 */
export type Constraint = Constraint.Atom | Constraint.Union;

// TODO - for completeness, should parse constraints