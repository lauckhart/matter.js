/**
 * @license
 * Copyright 2022-2026 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Duration, Transaction } from "#general";
import { Invoke } from "./request/Invoke.js";
import { Read } from "./request/Read.js";
import { Subscribe } from "./request/Subscribe.js";
import { Write } from "./request/Write.js";
import { InvokeResult } from "./response/InvokeResult.js";
import { ReadResult } from "./response/ReadResult.js";
import { SubscribeResult } from "./response/SubscribeResult.js";
import { WriteResult } from "./response/WriteResult.js";
import { AccessControl } from "./server/AccessControl.js";

export type InteractionSession = AccessControl.Session & {
    /**
     * The transaction for the interaction.
     *
     * If this is undefined the interaction executes in a new, independent transaction that commits automatically.
     */
    transaction?: Transaction;

    /**
     * Aborts the interaction if supported by the underlying implementation.
     */
    abort?: AbortSignal;

    /**
     * Timeout on connection.
     *
     * This limits the amount of time matter.js will wait for a new connection to the underlying node when performing
     * remote interactions.  This timeout is from the time of first connection attempt; if matter.js is already
     * attempting to establish a connection this may result in a timeout sooner than the supplied duration.
     *
     * The purpose of this timeout is to allow user-facing interactions to fail more quickly when the peer is known to
     * be unresponsive.
     *
     * Use {@link abort} with a timed {@link AbortSignal} to limit total interaction time.
     */
    connectionTimeout?: Duration;
};

/**
 * Objects implementing this interface can participate in Matter interactions.
 */
export interface Interactable<SessionT = InteractionSession> {
    /**
     * Perform a Matter read interaction.
     */
    read(request: Read, session?: SessionT): ReadResult;

    /**
     * Perform a Matter subscribe interaction.
     */
    subscribe(request: Subscribe, session?: SessionT): SubscribeResult;

    /**
     * Perform a Matter write interaction.
     */
    write<T extends Write>(request: T, session?: SessionT): WriteResult<T>;

    /**
     * Perform a Matter invoke interaction.
     */
    invoke(request: Invoke, session?: SessionT): InvokeResult;
}
