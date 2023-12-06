/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Val } from "./Val.js";

type Container = Record<string | number, Val>;

/**
 * ManagedReference manages a reference to a container property of another
 * reference.
 * 
 * The ManagedReference detects when the value changes and clones the container
 * if it is the original copy.
 * 
 * This serves the following purposes:
 * 
 *   - We can change properties in a container (an array or object) without
 *     modifying the original container
 * 
 *   - When nested, this effect bubbles so we make copies at all levels in the
 *     hierarchy as necessary
 * 
 *   - Preserves metadata regarding the state of the value
 * 
 * Change detection happens automatically if the value is replaced.  If a
 * subvalue is replaced, the logic replacing the subvalue must update "changed"
 * manually before replacing the subvalue.  For managed structures this is
 * handled by a separate ManagedReference.
 * 
 * @param parent a reference to the container we reference
 * @param index the key we reference
 * 
 * @returns a reference to the property
 */
export function ManagedReference(
    parent: Val.Reference<Val.Collection>,
    index: string | number,
    assertWriteOk: (value: Val) => void,
    clone: (container: Val) => Val,
) {
    const original = (parent.value as Container)[index];
    let value = original;

    const reference = {
        owner: parent,

        get value() {
            // Authorization is unnecessary here because the reference would
            // not exist if access is unauthorized
            return value;
        },

        set value(newValue: Val) {
            if (value === newValue) {
                return;
            }

            // Authorization and validation
            assertWriteOk(newValue);

            if (value === original) {
                this.change();
            }

            value = (parent.value as Container)[index] = newValue;
        },

        get original() {
            return original;
        },

        change() {
            if (value === original) {
                parent.change();
                const newValue = clone(value);
                (parent.value as Container)[index] = newValue;
                replaceValue(newValue);
            }
        },

        refresh() {
            replaceValue((parent.value as Container)[index]);
        }
    } as Val.Reference;
    
    return reference;

    function replaceValue(newValue: Val) {
        value = newValue;

        const subrefs = reference.subreferences;
        if (subrefs) {
            for (const key in subrefs) {
                subrefs[key].refresh();
            }
        }
    }
}
