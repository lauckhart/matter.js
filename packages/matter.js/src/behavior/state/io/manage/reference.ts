/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Io } from "../Io.js";

type Container = Record<string | number, Io.Val>;

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
 * @param parent a reference to the container we reference
 * @param index the key we reference
 * 
 * @returns a reference to the property
 */
export function ManagedReference(
    parent: Io.ValueReference<Io.Container>,
    index: string | number,
    clone: (container: Io.Val) => Io.Val
) {
    let changed = false;
    const original = (parent.value as Container)[index]

    return {
        get value() {
            return (parent.value as Container)[index];
        },

        set value(value: Io.Val) {
            if ((parent.value as Container)[index] === value) {
                return;
            }

            if (!changed) {
                this.changed = true;

                changed = true;
            }

            (parent.value as Container)[index] = value;
        },

        get original() {
            return original;
        },

        get changed() {
            return changed;
        },

        set changed(value: boolean) {
            // Ignore anything other than transition to changed
            if (value !== changed || !value) {
                return;
            }

            changed = true;
            parent.changed = true;
            (parent.value as Container)[index] = clone((parent.value as Container)[index]);
        },
    } as Io.ValueReference;
}
