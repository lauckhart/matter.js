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
import { TlvOfModel } from "../tlv/TlvOfModel.js";
import { TlvSchema } from "../tlv/TlvSchema.js";

export namespace ClusterNamespace {
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
