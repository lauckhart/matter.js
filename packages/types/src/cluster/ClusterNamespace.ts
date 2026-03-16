/**
 * @license
 * Copyright 2022-2026 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { camelize } from "@matter/general";
import { ClusterModel, GLOBAL_IDS } from "@matter/model";
import type { AttributeId } from "../datatype/AttributeId.js";
import type { CommandId } from "../datatype/CommandId.js";
import type { EventId } from "../datatype/EventId.js";
import type { BitSchema, TypeFromPartialBitSchema } from "../schema/BitmapSchema.js";
import { TlvOfModel } from "../tlv/TlvOfModel.js";
import { TlvSchema } from "../tlv/TlvSchema.js";

/**
 * Describes the shape of a generated cluster namespace for use as a type constraint.
 *
 * Generated cluster namespaces in `@matter/types` export a `Commands` sub-namespace with a `Components` tuple that
 * maps feature flags to method interfaces.  This interface describes that shape so behavior infrastructure can extract
 * the correct command methods for a given feature selection.
 */
export interface ClusterNamespace {
    Attributes?: {};
    Commands?: {};
    Events?: {};
    Features?: {};
}

export namespace ClusterNamespace {
    export interface Component<F extends BitSchema = {}> {
        flags: TypeFromPartialBitSchema<F>;
        methods: {};
    }

    export interface ElementComponent<F extends BitSchema = {}> {
        flags: TypeFromPartialBitSchema<F>;
        mandatory?: string;
        optional?: string;
    }

    export interface Attribute<T = any> {
        id: AttributeId;
        name: string;
        tlv: TlvSchema<T>;
    }

    export interface Command<T = any> {
        id: CommandId;
        name: string;
        tlv: TlvSchema<T>;
    }

    export interface Event<T = any> {
        id: EventId;
        name: string;
        tlv: TlvSchema<T>;
    }

    export interface Feature {
        id: number;
        name: string;
    }

    export type Attributes<A> = { [K in keyof A]: Attribute<A[K]> };
    export type Commands<C> = { [K in keyof C]: Command<C[K]> };
    export type Events<E> = { [K in keyof E]: Event<E[K]> };
    export type Features<F extends string> = { [K in F]: Feature };

    /**
     * Set supported feature flags on a namespace, replacing any previous selection.
     *
     * Uses Omit+& (not bare &) so that chained `.with()` calls replace rather than intersect, matching the
     * runtime behavior of {@link ClusterComposer.WithFeatures}.
     */
    export type WithSupportedFeatures<N extends ClusterNamespace, S> = Omit<N, "SupportedFeatures"> & {
        SupportedFeatures: S;
    };

    /**
     * Extract supported feature flags from a namespace, defaulting to {}.
     */
    export type SupportedFeaturesOf<N> = N extends { SupportedFeatures: infer S } ? S : {};

    /**
     * Derive the feature flags object type from a namespace's Features string union.
     */
    export type FeaturesOf<N> = N extends { Features: infer F extends string }
        ? { [K in Uncapitalize<F>]: boolean }
        : Record<string, boolean>;

    /**
     * Augment a namespace with attribute keys forced mandatory (e.g. via `enable()` or `alter()`).
     */
    export type WithEnabledAttributes<N extends ClusterNamespace, K extends string> = N & {
        Attributes: { Enabled: K };
    };

    /**
     * Extract attribute key names from ElementFlags (used by `enable()`).
     */
    export type EnabledAttributeKeysOf<F> = F extends { attributes: infer A } ? keyof A & string : never;

    /**
     * Extract attribute key names made mandatory by Alterations (used by `alter()`).
     */
    export type AlteredMandatoryAttributeKeysOf<A> = A extends { attributes: infer E }
        ? { [K in keyof E & string]: E[K] extends { optional: false } ? K : never }[keyof E & string]
        : never;

    /**
     * Augment a namespace with event keys forced mandatory (e.g. via `enable()`).
     */
    export type WithEnabledEvents<N extends ClusterNamespace, K extends string> = N & { Events: { Enabled: K } };

    /**
     * Extract event key names from ElementFlags (used by `enable()`).
     * Input shape: `{ events?: { eventName: true } }`
     */
    export type EnabledEventKeysOf<F> = F extends { events: infer E } ? keyof E & string : never;

    /**
     * Extract event key names made mandatory by Alterations (used by `alter()`).
     * Input shape: `{ events?: { eventName: { optional: false } } }`
     */
    export type AlteredMandatoryEventKeysOf<A> = A extends { events: infer E }
        ? { [K in keyof E & string]: E[K] extends { optional: false } ? K : never }[keyof E & string]
        : never;

    /**
     * Install lazy getters on a cluster namespace object.  Each property is computed on first access via
     * {@link Object.defineProperty}, then replaced with the computed value.
     */
    export function define(ns: object, model: ClusterModel): void {
        const lazy = (name: string, factory: () => unknown) => {
            Object.defineProperty(ns, name, {
                get() {
                    const value = factory();
                    Object.defineProperty(ns, name, { value, enumerable: true, configurable: true });
                    return value;
                },
                enumerable: true,
                configurable: true,
            });
        };

        lazy("attributes", () => attributes(model));
        lazy("commands", () => commands(model));
        lazy("events", () => events(model));
        lazy("features", () => features(model));
    }

    /**
     * Create a typed map of cluster attributes from a {@link ClusterModel}.
     */
    export function attributes(model: ClusterModel) {
        const result: Record<string, { id: number; name: string; tlv: TlvSchema<any> }> = {};
        for (const attribute of model.attributes) {
            if (GLOBAL_IDS.has(attribute.id) || attribute.isDisallowed || attribute.effectiveMetatype === undefined) {
                continue;
            }
            const key = camelize(attribute.name);
            result[key] = {
                id: attribute.id,
                name: key,
                tlv: TlvOfModel(attribute),
            };
        }
        return result;
    }

    /**
     * Create a typed map of cluster commands from a {@link ClusterModel}.
     */
    export function commands(model: ClusterModel) {
        const result: Record<string, { id: number; name: string; tlv: TlvSchema<any> }> = {};
        for (const command of model.commands) {
            if (!command.isRequest || command.isDisallowed) {
                continue;
            }
            const key = camelize(command.name);
            result[key] = {
                id: command.id,
                name: key,
                tlv: TlvOfModel(command),
            };
        }
        return result;
    }

    /**
     * Create a typed map of cluster events from a {@link ClusterModel}.
     */
    export function events(model: ClusterModel) {
        const result: Record<string, { id: number; name: string; tlv: TlvSchema<any> }> = {};
        for (const event of model.events) {
            if (event.isDisallowed) {
                continue;
            }
            const key = camelize(event.name);
            result[key] = {
                id: event.id,
                name: key,
                tlv: TlvOfModel(event),
            };
        }
        return result;
    }

    /**
     * Create a typed map of cluster features from a {@link ClusterModel}.
     */
    export function features(model: ClusterModel) {
        const result: Record<string, { id: number; name: string }> = {};
        for (const feature of model.features) {
            const key = camelize(feature.title ?? feature.name);
            if (typeof feature.constraint.value === "number") {
                result[key] = {
                    id: feature.constraint.value,
                    name: key,
                };
            }
        }
        return result;
    }
}
