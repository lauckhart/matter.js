/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { MatterDevice } from "../MatterDevice.js";
import type { Message } from "../codec/MessageCodec.js";
import { Transaction } from "./state/transaction/Transaction.js";
import { Fabric } from "../fabric/Fabric.js";
import { Session } from "../session/Session.js";
import { AccessLevel } from "../cluster/Cluster.js";

/**
 * Provides contextual information when accessing state, invoking methods and
 * emitting events.
 */
export interface InvocationContext {
    /**
     * Accessing fabric.
     */
    fabric?: Fabric;

    /**
     * Accessing privilege level.
     */
    accessLevel?: AccessLevel;

    /**
     * Should reads of fabric-scoped data be filtered to the accessing fabric?
     */
    fabricFiltered?: boolean;

    /**
     * The session in which invocation occurs.
     */
    session?: Session<MatterDevice>;

    /**
     * The wire message that initiated invocation.
     */
    message?: Message;

    /**
     * A transaction that allows for ACID reads and writes.
     */
    transaction?: Transaction;
}
