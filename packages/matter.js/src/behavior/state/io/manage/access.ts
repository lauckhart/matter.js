/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { AccessLevel } from "../../../../cluster/Cluster.js";
import { Access } from "../../../../model/aspects/index.js";
import { ValueModel } from "../../../../model/models/index.js";
import { Schema } from "../../Schema.js";

const limitCache = new WeakMap<Schema, AccessControl.Limits>;

/**
 * Details access control limits based on schema.
 * 
 * This is core to security.  Explicit singleton, frozen with module privates.
 */
export const AccessControl = Object.freeze({
    /**
     * Obtain full access control information for a schema instance.
     */
    getLimits(schema: Schema) {
        let limits = limitCache.get(schema);

        if (!limits) {
            limitCache.set(schema, limits = computeLimits(schema));
        }

        return limits;
    },

    /**
     * Obtain static limits for a schema instance.
     */
    getStaticLimits(schema: Schema) {
        return this.getLimits(schema).static;
    },

    /**
     * Obtain session limits.
     */
    getSessionLimits(schema: Schema, level: AccessLevel) {
        return this.getLimits(schema).session[level];
    }
});

export namespace AccessControl {
    export interface Map<L> extends Record<string, L> {}

    /**
     * All limits.
     */
    export interface Limits {
        static: StaticLimits;
        session: Record<AccessLevel, SessionLimits>;
    }

    /**
     * Absolute limits.
     */
    export interface StaticLimits {
        readable: boolean;
        writable: boolean;
        fabricScoped: boolean;
        fabricSensitive: boolean;
        timed: boolean;
    }

    /**
     * Limits that vary per session.
     */
    export interface SessionLimits {
        readable: boolean;
        writable: boolean;
    }
}

function computeLimits(schema: Schema) {
    const access = schema.effectiveAccess;
    const quality = (schema instanceof ValueModel ? schema.effectiveQuality : undefined);

    const limits: AccessControl.Limits = {
        static: {
            readable: access.readable,
            writable: access.writable && !quality?.fixed,
            fabricScoped: access.fabric === Access.Fabric.Scoped || access.fabric === Access.Fabric.Sensitive,
            fabricSensitive: access.fabric === Access.Fabric.Sensitive,
            timed: access.timed === true,
        },

        session: {
            [AccessLevel.View]: computeSessionLimits(access, AccessLevel.View),
            [AccessLevel.Operate]: computeSessionLimits(access, AccessLevel.Operate),
            [AccessLevel.Manage]: computeSessionLimits(access, AccessLevel.Manage),
            [AccessLevel.Administer]: computeSessionLimits(access, AccessLevel.Administer),
        }
    }

    return limits;
}

function computeSessionLimits(access: Access, level: AccessLevel) {
    return {
        readable: access.readPriv !== undefined && Access.PrivilegePriority[access.readPriv] <= level,
        writable: access.writePriv !== undefined && Access.PrivilegePriority[access.writePriv] <= level,
    };
}
