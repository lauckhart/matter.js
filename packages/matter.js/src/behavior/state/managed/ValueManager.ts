/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import type { Schema } from "../Schema.js";
import type { StateManager } from "./StateManager.js";
import { AccessEnforcer } from "../../AccessEnforcer.js";
import { Val } from "./Val.js";
import { ValidationContext } from "../validation/context.js";
import { Metatype } from "../../../model/definitions/index.js";
import { StructManager } from "./StructManager.js";
import { ListManager } from "./ListManager.js";
import { PrimitiveManager } from "./PrimitiveManager.js";

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
     * The state manager that owns this ValueManager.
     */
    owner: StateManager;

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
export function ValueManager(schema: Schema, owner: StateManager, base?: new () => Val): ValueManager.Manage {
    switch (schema.effectiveMetatype) {
        case Metatype.object:
            return StructManager(owner, schema, base);

        case Metatype.array:
            return ListManager(owner, schema);

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
    ) => Val;
}
