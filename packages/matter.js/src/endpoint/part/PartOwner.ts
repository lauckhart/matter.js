/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import type { Behavior } from "../../behavior/Behavior.js";
import type { BehaviorBacking } from "../../behavior/BehaviorBacking.js";
import type { Part } from "../Part.js";
import { TransactionCoordinator } from "../../behavior/state/transaction/Coordinator.js";

/**
 * This is the interface used by {@link Agent} and {@link Behavior} to
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
     * Obtain an owner of a particular type from the owner hierarchy.
     */
    getAncestor<T>(type: new (...args: any[]) => T): T;

    /**
     * The coordinator for transactions.
     */
    readonly transactionCoordinator: TransactionCoordinator;
}
