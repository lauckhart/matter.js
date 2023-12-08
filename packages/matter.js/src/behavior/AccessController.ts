/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { AccessLevel } from "../cluster/Cluster.js";
import { FabricIndex } from "../datatype/FabricIndex.js";
import { Access } from "../model/aspects/index.js";
import { Model, ValueModel } from "../model/models/index.js";
import { StatusCode } from "../protocol/interaction/InteractionProtocol.js";
import { ReadError, WriteError } from "./errors.js";
import { Schema } from "./state/Schema.js";

const cache = new WeakMap<Schema, AccessController>();

/**
 * Enforces access control for a specific schema.
 */
export interface AccessController {
    /**
     * Operational access control metadata.
     */
    limits: AccessController.Limits;

    /**
     * Assert read is authorized.
     */
    authorizeRead: AccessController.Assertion;

    /**
     * Determine if read is authorized.
     */
    mayRead: AccessController.Verification;

    /**
     * Assert write is authorized.
     */
    authorizeWrite: AccessController.Assertion;

    /**
     * Determine if write is authorized.
     */
    mayWrite: AccessController.Verification;
}

/**
 * Obtain an enforcer for specific schema.
 * 
 * This is central to security.  Implementation is explicit, all objects are
 * involved are frozen and cache is stored as module-private.
 * 
 * Pure function; returned value is cached.
 */
export function AccessController(schema: Schema) {
    let enforcer = cache.get(schema);
    if (enforcer === undefined) {
        enforcer = enforcerFor(schema);
    }
    return enforcer;
}

export namespace AccessController {
    /**
     * Operational access control metadata for a schema.
     */
    export interface Limits {
        readonly readable: boolean;
        readonly readLevel: AccessLevel;

        readonly writable: boolean;
        readonly writeLevel: AccessLevel;

        readonly fabricScoped: boolean;
        readonly fabricSensitive: boolean;

        readonly timed: boolean;
    }

    /**
     * A function that asserts access control requirements are met.
     */
    export type Assertion = (session: Session, context?: Context) => void;

    /**
     * A function that returns true iff access control requirements are met.
     */
    export type Verification = (session: Session, context?: Context) => boolean;
    
    /**
     * Authorization metadata that varies with session.
     */
    export interface Session {
        /**
         * The access level of the authorized client.
         */
        accessLevel: AccessLevel;
    
        /**
         * The fabric of the authorized client.
         */
        accessingFabric?: FabricIndex;
    
        /**
         * If this is true then access levels are not enforced and all values
         * are read/write.  Datatypes are still enforced.
         * 
         * Tracks "offline" rather than "online" because this makes the safer
         * mode (full enforcement) the default.
         */
        offline?: boolean;

        /**
         * If this is true, fabric-scoped lists are filtered to the accessing
         * fabric.
         */
        fabricFiltered?: boolean;

        /**
         * If this is true a timed transaction is in effect.
         */
        timed?: boolean;
    }

    /**
     * Metadata that varies with data structure position.
     */
    export interface Context {
        /**
         * The fabric that owns the data subtree.  Undefined or
         * {@link FabricIndex.NO_FABRIC} disable fabric enforcement.
         */
        owningFabric?: FabricIndex;
    }
}

Object.freeze(AccessController);

function enforcerFor(schema: Schema): AccessController {
    const limits = limitsFor(schema);

    let mayRead: AccessController.Verification = (session) => {
        if (session.offline) {
            return true;
        }

        if (session.accessLevel >= limits.readLevel) {
            return true;
        }

        return false;
    }

    let mayWrite: AccessController.Verification = (session) => {
        if (session.offline) {
            return true;
        }

        if (session.accessLevel >= limits.writeLevel) {
            return true;
        }

        return false;
    }

    let authorizeRead: AccessController.Assertion = (session) => {
        if (session.offline) {
            return;
        }

        if (session.accessLevel >= limits.readLevel) {
            return;
        }

        throw new ReadError(schema, "Permission denied");
    }

    let authorizeWrite: AccessController.Assertion = (session) => {
        if (session.offline) {
            return;
        }

        if (session.accessLevel >= limits.readLevel) {
            return;
        }

        throw new WriteError(schema, "Permission denied");
    }

    if (limits.timed) {
        const wrappedAuthorizeWrite = authorizeWrite;
        const wrappedMayWrite = mayWrite;

        authorizeWrite = (session, context) => {
            if (!session.offline && !session.timed) {
                throw new WriteError(
                    schema,
                    "Permission denied because interaction is not timed",
                    StatusCode.NeedsTimedInteraction
                );
            }
            wrappedAuthorizeWrite?.(session, context);
        }

        mayWrite = (session, context) => {
            if (!session.offline && !session.timed) {
                return false;
            }

            return wrappedMayWrite(session, context);
        }
    }

    if (limits.fabricSensitive) {
        const wrappedAuthorizeRead = authorizeRead;
        const wrappedMayRead = mayRead;
        const wrappedAuthorizeWrite = authorizeWrite;
        const wrappedMayWrite = mayWrite;

        authorizeRead = (session, context) => {
            if (session.offline) {
                return;
            }

            if (session.accessingFabric === undefined) {
                throw new ReadError(
                    schema,
                    "Permission denied: No accessing fabric"
                )
            }

            if (context?.owningFabric && context.owningFabric !== session.accessingFabric) {
                throw new WriteError(
                    schema,
                    "Permission denied: Owning/accessing fabric mismatch"
                )
            }

            wrappedAuthorizeRead(session, context);
        }

        mayRead = (session, context) => {
            if (session.offline) {
                return true;
            }

            if (session.accessingFabric === undefined) {
                return false;
            }

            if (context?.owningFabric && context.owningFabric !== session.accessingFabric) {
                throw false;
            }

            return wrappedMayRead(session, context);
        }

        authorizeWrite = (session, context) => {
            if (session.offline) {
                return;
            }

            if (session.accessingFabric === undefined) {
                throw new WriteError(
                    schema,
                    "Permission denied: No accessing fabric"
                )
            }

            if (context?.owningFabric && context.owningFabric !== session.accessingFabric) {
                throw new WriteError(
                    schema,
                    "Permission denied: Owning/accessing fabric mismatch"
                )
            }

            wrappedAuthorizeWrite(session, context);
        }

        mayWrite = (session, context) => {
            if (session.offline) {
                return true;
            }

            if (session.accessingFabric === undefined) {
                return false;
            }

            if (context?.owningFabric && context.owningFabric !== session.accessingFabric) {
                return false;
            }

            return wrappedMayWrite(session, context);
        }
    }

    if (!limits.readable) {
        authorizeRead = (session) => {
            if (session.offline) {
                return;
            }

            throw new ReadError(
                schema,
                "Permission defined: Value is write-only"
            )
        }

        mayRead = (session) => {
            return !!session.offline;
        }
    }

    if (!limits.writable) {
        authorizeWrite = (session) => { 
            if (session.offline) {
                return;
            }
            throw new WriteError(
                schema,
                "Permission defined: Value is read-only"
            )
        }

        mayWrite = (session) => {
            return !!session.offline;
        }
    }

    return Object.freeze({
        limits,
        authorizeRead,
        mayRead,
        authorizeWrite,
        mayWrite,
    });
}

function limitsFor(schema: Schema) {
    const access = schema.effectiveAccess;
    const quality = (schema instanceof ValueModel ? schema.effectiveQuality : undefined);

    // Special handling for fixed values - we treat any property owned by a
    // fixed value as also read-only
    let fixed = quality?.fixed;
    for (let s: Model | undefined = schema.parent; !fixed && s instanceof ValueModel; s = s.parent) {
        if (s.effectiveQuality.fixed) {
            fixed = true;
        }
    }

    const limits: AccessController.Limits = Object.freeze({
        readable: access.readable,
        writable: access.writable && !fixed,
        fabricScoped: access.fabric === Access.Fabric.Scoped || access.fabric === Access.Fabric.Sensitive,
        fabricSensitive: access.fabric === Access.Fabric.Sensitive,
        timed: access.timed === true,

        // Official Matter defaults are View for read and Operate for write.
        // However, the schema's effective access should already have these
        // defaults.  Here we just adopt administer as a safe fallback access
        // level.
        readLevel: access.readPriv === undefined
            ? AccessLevel.Administer
            : Access.PrivilegeLevel[access.readPriv],
        writeLevel: access.writePriv === undefined
            ? AccessLevel.Administer
            : Access.PrivilegeLevel[access.writePriv],
    });

    return limits;
}
