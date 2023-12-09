/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { GeneratedClass } from "../../util/GeneratedClass.js";
import { Val } from "./managed/Val.js";

/**
 * Base state.  We don't use Object directly because state would then inherit
 * all static Object methods.
 */
export const EmptyState = function() { return {} } as unknown as new () => {};

/**
 * DerivedState is a programmatic extension of state.
 */
export interface DerivedState<Base extends DerivedState.Constructor = typeof Object, Extension extends {} = {}> {
    new (): InstanceType<Base> & Extension;
}

/**
 * Extend state with additional values..
 */
export function DerivedState<
    const Base extends DerivedState.Constructor,
    Extension extends {}
>(
    { base, values, name }: DerivedState.Options<Base, Extension>
) {
    const oldDefaults = new base as Val.Struct;

    let newDefaults: undefined | Val.Struct;
    for (const key in values) {
        const value = (values as Val.Struct)[key];
        if (!oldDefaults.hasOwnProperty(key) || oldDefaults[key] !== value) {
            if (!newDefaults) {
                newDefaults = {};
            }
            newDefaults[key] = value;
        }
    }

    if (!newDefaults) {
        return base as unknown as DerivedState<Base, Extension>;
    }

    return GeneratedClass({
        name: name ?? base.name,
        base: base,
        instanceProperties: newDefaults,
    }) as DerivedState<Base, Extension>;
}

export namespace DerivedState {

    export type Constructor = new () => {};

    export interface Options<Base extends Constructor, Values extends {}> {
        base: Base;
        values: Values;
        name?: string;
    }
}
