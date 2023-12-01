/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { InvocationContext } from "../../InvocationContext.js";
import { Io } from "../io/Io.js";

/**
 * We must use a proxy to properly encapsulate array data.
 * 
 * This is ideal from a security and data quality perspective but not from a
 * performance perspective.
 * 
 * This can be worked around by replacing an entire array rather than just a
 * single field.  If that is insufficient we may need some type of batch
 * interface or provide a means for accessing the internal array directly.
 */
export function ManagedList(list: unknown[], io: Io, context: InvocationContext) {
    let target = list;

    return new Proxy(list, {
        get(_target, property, receiver) {
            if (typeof property === "string" && property.match(/^[0-9]+/)) {
                return io.read(target, { path: [ property ] });
            }
            return Reflect.get(target, property, receiver);
        },

        set(_target, property, newValue, receiver) {
            if (typeof property === "string" && property.match(/^[0-9]+/)) {
                if (target === list) {
                    target = [ ...list ];
                    return true;
                }
            }
            return Reflect.set(target, property, newValue, receiver);
        }
    });
}
