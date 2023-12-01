/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { MatterDevice } from "../MatterDevice.js";
import type { Message } from "../codec/MessageCodec.js";
import { Transaction } from "../endpoint/transaction/Transaction.js";
import { Fabric } from "../fabric/Fabric.js";
import { Session } from "../session/Session.js";
import { Behavior } from "./Behavior.js";

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
     * Should reads of fabric-scoped data be filtered to the accessing fabric?
     */
    fabricFiltered?: boolean;

    /**
     * The behavior via which invocation occurs.
     */
    behavior?: Behavior;

    /**
     * The session in which invocation occurs.
     */
    session?: Session<MatterDevice>;

    /**
     * The wire message that initiated invocation.
     */
    message?: Message;

    /**
     * A transaction the allows for ACID writes.
     */
    transaction?: Transaction;
}
