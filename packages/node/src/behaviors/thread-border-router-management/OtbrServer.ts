/**
 * @license
 * Copyright 2022-2026 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Abort, Bytes, Logger, MaybePromise, Seconds } from "#general";
import { OtbrClient } from "#protocol";
import { ThreadBorderRouterManagementServer } from "./ThreadBorderRouterManagementServer.js";

const logger = Logger.get("OtbrServer");

/**
 * OTBR-backed server implementation of the Thread Border Router Management cluster.
 *
 * Connects to an OpenThread Border Router's REST API to manage Thread datasets and periodically polls for state
 * changes.  A background worker loop handles all syncing — commands never block on or fail due to sync errors.
 */
export class OtbrServer extends ThreadBorderRouterManagementServer {
    declare protected internal: OtbrServer.Internal;
    declare state: OtbrServer.State;

    override initialize(): MaybePromise {
        const { host, port, pollInterval } = this.state;
        this.internal.client = new OtbrClient({ host, port });

        if (!this.internal.abort) {
            this.internal.abort = new Abort();
            this.internal.pollInterval = pollInterval;
            this.internal.doSync = this.asyncCallback(this.#doSync, { lock: true });
            this.internal.worker = syncLoop(this.internal);
        }
    }

    override async [Symbol.asyncDispose]() {
        this.internal.abort?.abort("OtbrServer disposed");
        await this.internal.worker;
        this.internal.abort = undefined;
        this.internal.worker = undefined;
        await super[Symbol.asyncDispose]?.();
    }

    protected override requestSync(): void {
        // Wake the worker's sleep early so it syncs now
        this.internal.wake?.();
    }

    protected override readActiveDataset(): Promise<Bytes> {
        return this.internal.client!.getActiveDataset();
    }

    protected override writeActiveDataset(dataset: Bytes): Promise<void> {
        return this.internal.client!.setActiveDataset(dataset);
    }

    protected override readPendingDataset(): Promise<Bytes> {
        return this.internal.client!.getPendingDataset();
    }

    protected override writePendingDataset(dataset: Bytes): Promise<void> {
        return this.internal.client!.setPendingDataset(dataset);
    }

    protected override async syncAttributes(): Promise<void> {
        const client = this.internal.client!;

        const [state, borderAgentId, activeDataset, pendingDataset, networkName] = await Promise.all([
            client.getState(),
            client.getBorderAgentId(),
            client.getActiveDatasetJson(),
            client.getPendingDatasetJson(),
            client.getNetworkName(),
        ]);

        this.state.interfaceEnabled = state !== "disabled";
        this.state.borderAgentId = borderAgentId;
        this.state.activeDatasetTimestamp = activeDataset?.activeTimestamp?.seconds ?? null;
        this.state.pendingDatasetTimestamp = pendingDataset?.pendingTimestamp?.seconds ?? null;

        if (networkName) {
            this.state.borderRouterName = networkName;
        }
    }

    /**
     * Target of the stored callback.  Runs inside a proper behavior activation with lock.
     */
    #doSync() {
        return this.syncAttributes();
    }
}

async function syncLoop(internal: OtbrServer.Internal) {
    while (!internal.abort?.aborted) {
        // Perform the sync via callback so the behavior is properly activated with lock
        try {
            await internal.doSync!();
        } catch (error) {
            logger.warn("OTBR sync failed:", error);
        }

        // Sleep until poll interval elapses, abort signal fires (shutdown), or requestSync() wakes us.  We use a
        // fresh Abort as a child of the main one so requestSync() can wake just the sleep without permanently
        // aborting the loop
        const sleepAbort = Abort.subtask(internal.abort);
        internal.wake = () => sleepAbort.abort("wake");
        await Abort.sleep("OTBR poll", sleepAbort, Seconds(internal.pollInterval));
        sleepAbort.close();
        internal.wake = undefined;
    }
}

export namespace OtbrServer {
    export class Internal {
        client?: OtbrClient;
        abort?: Abort;
        wake?: () => void;
        doSync?: () => MaybePromise<void> | undefined;
        worker?: Promise<void>;
        pollInterval = 30;
    }

    export class State extends ThreadBorderRouterManagementServer.State {
        /**
         * OTBR REST API host.
         */
        host = "localhost";

        /**
         * OTBR REST API port.
         */
        port = 8081;

        /**
         * Seconds between OTBR attribute sync polls.
         */
        pollInterval = 30;

        /**
         * Thread version (4 = Thread 1.3.0).  OTBR doesn't expose this via REST; override as needed.
         */
        override threadVersion = 4;
    }
}
