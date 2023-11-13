/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { camelize } from "../../util/String.js";
import { Behavior } from "../Behavior.js";
import { State } from "../state/State.js";
import type { ClusterType } from "../../cluster/ClusterType.js";
import type { ClusterBehavior } from "./ClusterBehavior.js";
import { ValidationError } from "../../common/MatterError.js";
import { EventEmitter, Observable } from "../../util/Observable.js";

/**
 * This is the actual implementation of ClusterBehavior.for().
 */
export function createType<const C extends ClusterType>(cluster: C, base: Behavior.Type) {
    const MyEvents = createBaseEvents([
        ...Object.keys(cluster.events),
        ...Object.keys(cluster.attributes).map(k => `${k}$change`),
    ]);

    const EndpointScope = createDerivedState(cluster, base, false);
    const FabricScope = createDerivedState(cluster, base, true);

    // Create the class
    const id = camelize(cluster.name, false) as Uncapitalize<string>;
    class DerivedBehavior extends base {
        static override get id() {
            return id;
        }

        static get cluster() {
            return cluster;
        }

        static override get EndpointScope() {
            return EndpointScope;
        }

        static override get FabricScope() {
            return FabricScope;
        }

        static override get Events() {
            return MyEvents;
        }

        static for(cluster: ClusterType) {
            return createType(cluster, this);
        }
    }

    // Add default command handlers
    Object.defineProperties(
        DerivedBehavior.prototype,
        Object.fromEntries(
            Object.keys(cluster.commands)
            .map(k => [ k, Behavior.unimplemented])
        )
    );

    // ClusterBehavior.Type must match what we did above
    return DerivedBehavior;
}

/**
 * Utility to omit the generic "string" from a string record.
 * 
 * We need this to enable ClusterBehavior.for on the base class where the
 * element objects otherwise have a generic string key that messes up
 * covariance.
 */
export type Named<O extends Record<string, any>> = {
    [K in string & keyof O as string extends K ? never : K]: O[K]
}

/**
 * The cluster type for a behavior.
 */
export type ClusterOf<B extends Behavior.Type> =
    InstanceType<B> extends { cluster: infer C extends ClusterType }
        ?
            C
        :
            ClusterType.Unknown;

/**
 * Create a new state subclass that inherits relevant default values from a
 * base Behavior.Type and adds new default values from cluster attributes.
 */
function createDerivedState(cluster: ClusterType, base: Behavior.Type, fabricScoped: boolean) {
    const BaseScope = fabricScoped ? base.FabricScope : base.EndpointScope;
    const oldDefaults = new BaseScope as Record<string, any>;
    const descriptors = {} as State.FieldOptions;

    const newAttributes = cluster.attributes;
    const oldAttributes = (base as ClusterBehavior.Type).cluster?.attributes ?? {};

    const defaults = {} as Record<string, any>;
    for (const key in oldDefaults) {
        if (oldAttributes[key] === undefined || newAttributes[key] !== undefined) {
            defaults[key] = oldDefaults[key];
        }
    }

    for (const key in cluster.attributes) {
        const attribute = cluster.attributes[key];
        if (attribute.fabricScoped !== fabricScoped) {
            continue;
        }
        if (defaults[key] === undefined) {
            defaults[key] = attribute.default;
        }
        descriptors[key] = createPropertyDescriptor(attribute, `${base.id}.state.${key}`);
    }

    return State.with(defaults, descriptors);
}

/**
 * Add additional attribute-specific validation.
 */
function createPropertyDescriptor(attribute: ClusterType.Attribute, name: string) {
    const schema = attribute.schema;

    const descriptor = {
        validate(value) {
            try {
                schema.validate(value);
            } catch (e) {
                if (e instanceof ValidationError) {
                    e.message = `Illegal value for property ${name}: ${e.message}`;
                    throw e;
                }
            }
        }
    } as State.FieldConfiguration;

    if (attribute.fixed) {
        descriptor.fixed = true;
    }

    return descriptor;
}

/**
 * Extend events with additional implementations.
 */
function createBaseEvents(names: string[]) {
    class ExtendedEvents extends EventEmitter {
        constructor() {
            super();

            const descriptors = {} as PropertyDescriptorMap;
            for (const name of names) {
                descriptors[name] = {
                    value: Observable(),
                    enumerable: true
                };
            }

            Object.defineProperties(
                this,
                descriptors
            );

            Object.freeze(this);
        }
    }

    return ExtendedEvents;
}
