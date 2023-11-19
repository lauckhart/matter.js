/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Behavior } from "../../behavior/Behavior.js";
import { State } from "../../behavior/state/State.js";
import { SupportedBehaviors } from "../part/SupportedBehaviors.js";
import { EndpointType } from "./EndpointType.js";

/**
 * A MutableEndpoint is an EndpointType with factory functions that make it
 * convenient to reconfigure the endpoint.
 */
export interface MutableEndpoint extends EndpointType {
    /**
     * Access default state values.
     */
    defaults: State;

    /**
     * Define an endpoint like this one with different defaults.  Only
     * updates values present in the input object.
     */
    set(defaults: {}): MutableEndpoint;

    /**
     * Define an endpoint like this one with additional and/or replacement
     * server behaviors.
     */
    with(...behaviors: SupportedBehaviors.List): MutableEndpoint;
}

/**
 * Define a new type of endpoint with factory functions.
 */
export function MutableEndpoint<const T extends EndpointType.Options>(options: T) {
    const type = EndpointType(options);
    let defaults: undefined | Record<string, object>;

    return {
        ...type,

        get defaults() {
            if (!defaults) {
                defaults = {} as Record<string, object>;

                for (const name in type.behaviors) {
                    defaults[name] = (type.behaviors[name] as Behavior.Type).defaults;
                }
            }

            return defaults as SupportedBehaviors.StateOf<typeof type.behaviors>;
        },

        set<This extends MutableEndpoint>(this: This, defaults: Record<string, Record<string, any>>) {
            const newBehaviors = Array<Behavior.Type>();

            for (const name in this.behaviors) {
                const updates = (defaults as any)[name];
                const behavior = (this.behaviors as SupportedBehaviors)[name];
                if (updates) {
                    newBehaviors.push(behavior.set(updates));
                }
            }
    
            return this.with(...newBehaviors) as unknown as This;
        },

        with<This extends MutableEndpoint, const B extends SupportedBehaviors.List>(this: This, ...behaviors: B) {
            return MutableEndpoint({
                ...options,
                behaviors: SupportedBehaviors.extend(this.behaviors, behaviors)
            }) as unknown as MutableEndpoint.With<This, B>;
        }
    }
}

export namespace MutableEndpoint {
    export type With<E extends MutableEndpoint, B extends SupportedBehaviors.List> =
        & Omit<E, "behaviors">
        & {
            behaviors: SupportedBehaviors.With<
                E["behaviors"] extends infer EB extends SupportedBehaviors ? EB : {},
                B
            >
        };
}
