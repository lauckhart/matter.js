/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import type { Behavior } from "../../behavior/Behavior.js";
import type { Part } from "../Part.js";

/**
 * This is the interface used by {@link Agent} and {@link Behavior} to perform internal operations that differ between
 * client and server implementations.
 */
export interface PartOwner {
    /**
     * The parent of the owner.
     */
    readonly owner: PartOwner | undefined;

    /**
     * Access a service component supported by the owner.
     * 
     * This simple form of dependency injection is similar to the public Behavior interface.  External developers should
     * use a Behavior to access corresponding functionality if possible as service APIs will be more volatile.
     * 
     * We use classes as service implementations because they provide both runtime (the constructor) and compile time
     * (the implied TS interface) information.
     */
    serviceFor<T>(type: abstract new (...args: any) => T): T;
}
