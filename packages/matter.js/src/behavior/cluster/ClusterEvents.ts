/**
 * @license
 * Copyright 2022-2024 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import type { ClusterType } from "../../cluster/ClusterType.js";
import type { TypeFromSchema } from "../../tlv/TlvSchema.js";
import type { Observable } from "../../util/Observable.js";
import type { Behavior } from "../Behavior.js";
import type { ActionContext } from "../context/ActionContext.js";
import type { ClusterOf } from "./ClusterBehaviorUtil.js";

/**
 * Event instance type for ClusterBehaviors.
 */
export type ClusterEvents<C extends ClusterType, B extends Behavior.Type> =
    // Keep observables *not* supplied by the old cluster
    Omit<InstanceType<B["Events"]>, keyof ClusterEvents.Properties<ClusterOf<B>>> &
        // Add observables supplied by the old cluster
        ClusterEvents.Properties<C>;

export namespace ClusterEvents {
    export type Type<C extends ClusterType, B extends Behavior.Type> = {
        new (): ClusterEvents<C, B>;
    };

    /**
     * Properties the cluster contributes to Events.
     */
    export type Properties<C> = AttributeObservables<ClusterType.AttributesOf<C>> &
        EventObservables<ClusterType.EventsOf<C>>;

    export type AttributeObservables<A extends Record<string, ClusterType.Attribute>> = {
        [K in keyof A as string extends K
            ? never
            : K extends string
              ? A[K] extends { optional: true }
                  ? never
                  : `${K}$Change`
              : never]: AttributeObservable<A[K]>;
    } & {
        [K in keyof A as string extends K
            ? never
            : K extends string
              ? A[K] extends { optional: true }
                  ? `${K}$Change`
                  : never
              : never]?: AttributeObservable<A[K]>;
    };

    export type AttributeObservable<A extends ClusterType.Attribute = ClusterType.Attribute> = Observable<
        [value: TypeFromSchema<A["schema"]>, oldValue: TypeFromSchema<A["schema"]>, context: ActionContext]
    >;

    export type EventObservables<E extends Record<string, ClusterType.Event>> = {
        [K in keyof E as string extends K
            ? never
            : K extends string
              ? E[K] extends { optional: true }
                  ? never
                  : K
              : never]: EventObservable<E[K]>;
    } & {
        [K in keyof E as string extends K
            ? never
            : K extends string
              ? E[K] extends { optional: true }
                  ? K
                  : never
              : never]?: EventObservable<E[K]>;
    };

    export type EventObservable<E extends ClusterType.Event = ClusterType.Event> = Observable<
        [payload: TypeFromSchema<E["schema"]>, context: ActionContext]
    >;
}
