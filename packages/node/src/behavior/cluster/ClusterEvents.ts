/**
 * @license
 * Copyright 2022-2026 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import type { OfflineEvent, OnlineEvent } from "#behavior/Events.js";
import type { Endpoint } from "#endpoint/Endpoint.js";
import type { AttributeModel, EventModel } from "@matter/model";
import type { ClusterNamespace, ClusterType, TypeFromSchema } from "@matter/types";
import type { Behavior } from "../Behavior.js";
import type { ActionContext } from "../context/ActionContext.js";
import type { ClusterOf } from "./cluster-behavior-utils.js";

/**
 * Event instance type for ClusterBehaviors.
 */
export type ClusterEvents<
    ClusterT extends ClusterType,
    BaseT extends Behavior.Type,
    N extends ClusterNamespace = ClusterNamespace,
> =
    // Keep observables *not* supplied by the old cluster
    Omit<InstanceType<BaseT["Events"]>, keyof ClusterEvents.Properties<ClusterOf<BaseT>>> &
        // Add observables supplied by the new cluster
        ClusterEvents.Properties<ClusterT, N>;

export namespace ClusterEvents {
    export interface Type<
        C extends ClusterType,
        B extends Behavior.Type,
        N extends ClusterNamespace = ClusterNamespace,
    > {
        new (endpoint?: Endpoint, behavior?: Behavior.Type): ClusterEvents<C, B, N>;
    }

    export interface PromiseHandler {
        (promise: Promise<unknown>): void;
    }

    /**
     * Properties the cluster contributes to Events.
     */
    export type Properties<C, N extends ClusterNamespace = ClusterNamespace> = ChangingObservables<
        ClusterType.AttributesOf<C>
    > &
        ChangedObservables<ClusterType.AttributesOf<C>> &
        (EventsComponentsOf<N> extends [] ? EventObservables<ClusterType.EventsOf<C>> : NsEventObservables<N>);

    export type ChangingObservables<A extends Record<string, ClusterType.Attribute>> = {
        [K in keyof A as string extends K
            ? never
            : K extends string
              ? A[K] extends { optional: true }
                  ? never
                  : `${K}$Changing`
              : never]: ChangingObservable<A[K]>;
    } & {
        [K in keyof A as string extends K
            ? never
            : K extends string
              ? A[K] extends { optional: true }
                  ? `${K}$Changing`
                  : never
              : never]?: ChangingObservable<A[K]>;
    };

    export type ChangedObservables<A extends Record<string, ClusterType.Attribute>> = {
        [K in keyof A as string extends K
            ? never
            : K extends string
              ? A[K] extends { optional: true }
                  ? never
                  : `${K}$Changed`
              : never]: ChangedObservable<A[K]>;
    } & {
        [K in keyof A as string extends K
            ? never
            : K extends string
              ? A[K] extends { optional: true }
                  ? `${K}$Changed`
                  : never
              : never]?: ChangedObservable<A[K]>;
    };

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

    /**
     * API for events triggered prior to attribute change.
     */
    export interface ChangingObservable<A extends ClusterType.Attribute = ClusterType.Attribute> extends OfflineEvent<
        [value: TypeFromSchema<A["schema"]>, oldValue: TypeFromSchema<A["schema"]>, context: ActionContext],
        AttributeModel
    > {}

    /**
     * API for events triggered after attribute change.
     */
    export interface ChangedObservable<A extends ClusterType.Attribute = ClusterType.Attribute> extends OnlineEvent<
        [value: TypeFromSchema<A["schema"]>, oldValue: TypeFromSchema<A["schema"]>, context: ActionContext | undefined],
        AttributeModel
    > {}

    /**
     * API for events triggered for Matter events.
     */
    export interface EventObservable<E extends ClusterType.Event = ClusterType.Event> extends OnlineEvent<
        [payload: TypeFromSchema<E["schema"]>, context: ActionContext],
        EventModel
    > {}

    // --- Namespace-based event observable types ---

    /**
     * Extract Events.Components tuple from namespace.
     */
    export type EventsComponentsOf<N extends ClusterNamespace> = N extends {
        Events: { Components: infer C extends ClusterNamespace.ElementComponent[] };
    }
        ? C
        : [];

    /**
     * Collect mandatory event keys from applicable components.
     */
    type MandatoryEventKeys<CA extends ClusterNamespace.ElementComponent[], S> = CA extends [
        infer C extends ClusterNamespace.ElementComponent,
        ...infer R extends ClusterNamespace.ElementComponent[],
    ]
        ?
              | (S extends C["flags"] ? (C extends { mandatory: infer M extends string } ? M : never) : never)
              | MandatoryEventKeys<R, S>
        : never;

    /**
     * All event keys across all components.
     */
    type AllEventKeys<CA extends ClusterNamespace.ElementComponent[]> = CA extends [
        infer C extends ClusterNamespace.ElementComponent,
        ...infer R extends ClusterNamespace.ElementComponent[],
    ]
        ?
              | (C extends { mandatory: infer M extends string } ? M : never)
              | (C extends { optional: infer O extends string } ? O : never)
              | AllEventKeys<R>
        : never;

    /**
     * Optional = all keys minus mandatory.
     */
    type OptionalEventKeys<CA extends ClusterNamespace.ElementComponent[], S> = Exclude<
        AllEventKeys<CA>,
        MandatoryEventKeys<CA, S>
    >;

    /**
     * Wrap payload type as event observable.
     */
    type NsEventObservable<T> = OnlineEvent<[payload: T, context: ActionContext], EventModel>;

    /**
     * Extract keys marked as enabled on the namespace (e.g. via `enable()` or `alter()`).
     */
    type EnabledKeys<N> = N extends { Events: { Enabled: infer K extends string } } ? K : never;

    /**
     * Produce event observables from namespace.  Events are mandatory if they match active feature flags in
     * Components OR if they were marked enabled on the namespace (e.g. via `enable()` or `alter()`).
     */
    type NsEventObservables<N extends ClusterNamespace> = N extends { Events: infer E }
        ? {
              [K in (
                  | MandatoryEventKeys<EventsComponentsOf<N>, ClusterNamespace.SupportedFeaturesOf<N>>
                  | EnabledKeys<N>
              ) &
                  keyof E]: NsEventObservable<E[K]>;
          } & {
              [K in Exclude<
                  OptionalEventKeys<EventsComponentsOf<N>, ClusterNamespace.SupportedFeaturesOf<N>>,
                  EnabledKeys<N>
              > &
                  keyof E]?: NsEventObservable<E[K]>;
          }
        : {};
}
