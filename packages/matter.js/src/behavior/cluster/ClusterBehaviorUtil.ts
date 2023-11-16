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
import { GeneratedClass } from "../../util/GeneratedClass.js";

/**
 * This is the actual implementation of ClusterBehavior.for().  The result
 * must match {@link ClusterBehavior.Type}<C>.
 */
export function createType<const C extends ClusterType>(cluster: C, base: Behavior.Type) {
    return GeneratedClass({
        name: `${cluster.name}Behavior`,

        staticDescriptors: {
            id: {
                value: camelize(cluster.name, false) as Uncapitalize<string>,
                enumerable: true,
            },

            cluster: {
                value: cluster,
                enumerable: true,
            },

            EndpointScope: {
                value: createDerivedState(cluster, base, false),
                enumerable: true
            },

            FabricScope: {
                value: createDerivedState(cluster, base, true),
                enumerable: true,
            },

            Events: {
                value: createBaseEvents(cluster.name, [
                    ...Object.keys(cluster.events),
                    ...Object.keys(cluster.attributes).map(k => `${k}$change`),
                ]),
                enumerable: true,
            },
        },

        instanceProperties: Object.fromEntries(
            Object.keys(cluster.commands)
                .map(k => [ k, Behavior.unimplemented ])
        )
    })
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
    const fields = {} as State.FieldOptions;

    const newAttributes = cluster.attributes;
    const oldAttributes = (base as ClusterBehavior.Type).cluster?.attributes ?? {};

    const defaults = {} as Record<string, any>;
    for (const name in oldDefaults) {
        if (oldAttributes[name] === undefined || newAttributes[name] !== undefined) {
            defaults[name] = oldDefaults[name];
        }
    }

    for (const name in cluster.attributes) {
        const attribute = cluster.attributes[name];

        if (isGlobal(attribute) || attribute.fabricScoped !== fabricScoped) {
            continue;
        }
        if (defaults[name] === undefined) {
            defaults[name] = attribute.default;
        }
        fields[name] = createPropertyDescriptor(attribute, `${camelize(cluster.name, false)}.state.${name}`);
    }

    return State.with(defaults, {
        name: `${cluster.name}${BaseScope.name}`,
        fields,
    });
}

function isGlobal(attribute: ClusterType.Attribute) {
    return attribute.id === 0xfe || (attribute.id >= 0xfff0 && attribute.id <= 0xffff);
}

/**
 * Add additional attribute-specific validation.
 */
function createPropertyDescriptor(attribute: ClusterType.Attribute, name: string) {
if (name === "myCluster.state.clusterRevision") debugger;
    const schema = attribute.schema;
    const descriptor = {} as State.FieldConfiguration;

    // Do not validate global attributes as these are currently managed by
    // ClusterServer
    if (!isGlobal(attribute)) {
        descriptor.validate = (value) => {
            if (value === undefined && !attribute.optional) {
                // Schema validation catches this but generate a more explicit message
                throw new ValidationError(`No value provided for required property ${name}`);
            }

            try {
                schema.validate(value);
            } catch (e) {
                if (e instanceof ValidationError) {
                    e.message = `Illegal value for property ${name}: ${e.message}`;
                    throw e;
                }
            }
        }
    }

    if (attribute.fixed) {
        descriptor.fixed = true;
    }

    return descriptor;
}

/**
 * Extend events with additional implementations.
 */
function createBaseEvents(clusterName: string, names: string[]) {
    return GeneratedClass({
        name: `${clusterName}$Events`,
        base: EventEmitter,

        initialize() {
            for (const name of names) {
                (self as any)[name] = Observable();
            }

            return self;
        }
    });
}
