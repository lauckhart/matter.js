/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import type { Behavior } from "../../behavior/Behavior.js";
import type { BehaviorBacking } from "../../behavior/BehaviorBacking.js";
import type { Part } from "../Part.js";

/**
 * This is the interface used by {@link EndpointAgent} and {@link Behavior} to
 * perform internal operations that differ between client and server
 * implementations.
 */
export interface PartOwner {
    /**
     * Initialize a behavior.
     * 
     * @param part the {@link Part} the behavior belongs to
     * @param type the {@link Behavior} type
     * @returns a new {@link BehaviorBacking}
     */
    initializeBehavior(part: Part, behavior: Behavior.Type): BehaviorBacking;

    /**
     * An owned part has been destroyed.
     */
    partDestroyed(part: Part): void;
}
