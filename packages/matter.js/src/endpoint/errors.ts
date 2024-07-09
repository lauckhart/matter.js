/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { CrashedDependenciesError } from "../common/Lifecycle.js";
import { MatterError } from "../common/MatterError.js";
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
export class EndpointBehaviorsError extends CrashedDependenciesError {
    constructor(causes: Iterable<unknown>) {
        super(causes, `Behaviors have errors`);
    }
}

export class EndpointInitializationError extends MatterError {
    constructor(endpoint: Endpoint, cause: unknown) {
        super(`Error initializing ${endpoint}`);
        this.cause = cause;
    }
}
