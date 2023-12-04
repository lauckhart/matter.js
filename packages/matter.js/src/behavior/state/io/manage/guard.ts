/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { AccessLevel } from "../../../../cluster/Cluster.js";
import { Access } from "../../../../model/aspects/index.js";
import { ValueModel } from "../../../../model/models/index.js";
import { Schema } from "../../Schema.js";

/**
 * Details access control limits based on schema.
 * 
 * Feels like a bad time to be fancy, code is very explicit.
 */
export class AccessControl {
    #limitCache = new WeakMap<Schema, AccessControl.Limits>();

    getLimits(schema: Schema) {
        let limits = this.#limitCache.get(schema);

        if (!limits) {
            this.#limitCache.set(schema, limits = this.#computeLimits(schema));
        }

        return limits;
    }

    getStaticLimits(schema: Schema) {
        return this.getLimits(schema).static;
    }

    getSessionLimits(schema: Schema, level: AccessLevel) {
        return this.getLimits(schema).session[level] ?? {};
    }

    #computeLimits(schema: Schema) {
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
                [AccessLevel.View]: this.#computeSessionLimits(access, AccessLevel.View),
                [AccessLevel.Operate]: this.#computeSessionLimits(access, AccessLevel.Operate),
                [AccessLevel.Manage]: this.#computeSessionLimits(access, AccessLevel.Manage),
                [AccessLevel.Administer]: this.#computeSessionLimits(access, AccessLevel.Administer),
            }
        }

        return limits;
    }

    #computeSessionLimits(access: Access, level: AccessLevel) {
        return {
            readable: access.readPriv !== undefined && Access.PrivilegePriority[access.readPriv] <= level,
            writable: access.writePriv !== undefined && Access.PrivilegePriority[access.writePriv] <= level,
        };
    }
}

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
