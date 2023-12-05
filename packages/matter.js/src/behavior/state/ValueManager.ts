/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import type { Schema } from "./Schema.js";
import type { StateManager } from "./StateManager.js";
import { AccessEnforcer } from "../AccessEnforcer.js";
import { Val } from "./Val.js";
import { ValidationContext } from "./validation/context.js";
import { Metatype } from "../../model/definitions/index.js";
import { StructManager } from "./managed/struct.js";
import { ListManager } from "./managed/list.js";
import { PrimitiveManager } from "./managed/primitive.js";

/**
 * State manager implements schema-based management of a specific value.
 * 
 * Management functions include:
 * 
 *   - Access controls
 * 
 *   - Datatype validation
 * 
 *   - Value mutation
 */
export interface ValueManager {
    /**
     * The factory that created this ValueManager.
     */
    factory: StateManager;

    /**
     * The schema that defines this Io's behavior.
     */
    schema: Schema;

    /**
     * Consolidated access control information for the schema.
     */
    access: AccessEnforcer;

    /**
     * Perform validation.
     */
    validate: ValueManager.Validate;

    /**
     * Create a managed instance of a value.
     */
    manage: ValueManager.Manage;
}

/**
 * Obtain a value manager.
 * 
 * Used by {@link StateManager} which acts as a cache.
 */
export function ValueManager(schema: Schema, factory: StateManager): ValueManager.Manage {
    switch (schema.effectiveMetatype) {
        case Metatype.object:
            return StructManager(factory, schema);

        case Metatype.array:
            return ListManager(factory, schema);

        // TODO - for completeness we should either make ByteArray immutable
        // in state or wrap here but meh

        default:
            return PrimitiveManager;
    }
}

export namespace ValueManager {
    export type Validate = (
        value: Val,
        context?: ValidationContext
    ) => void;
    
    export type Manage = (
        reference: Val.Reference,
        session: AccessEnforcer.Session,
        context?: AccessEnforcer.Context
    ) => void;
}
