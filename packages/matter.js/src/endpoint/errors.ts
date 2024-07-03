/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { MatterAggregateError, MatterError } from "../common/MatterError.js";
import { type Endpoint } from "./Endpoint.js";

/**
 * Thrown when an error occurs during initialization of a behavior.
 */
export class BehaviorInitializationError extends MatterError {
    constructor(message: string, cause?: unknown) {
        super(message);
        this.cause = cause;
    }
}

/**
 * Thrown when an error occurs initializing the behaviors of an endpoint.
 */
export class EndpointBehaviorsError extends MatterAggregateError {
    constructor(causes: Error[]) {
        super(causes, `Behaviors have errors`);
    }
}

export class EndpointInitializationError extends MatterError {
    constructor(endpoint: Endpoint, cause: unknown) {
        super(`Error initializing ${endpoint}`);
        this.cause = cause;
    }
}
