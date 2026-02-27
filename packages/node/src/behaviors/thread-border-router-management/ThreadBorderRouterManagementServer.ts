/**
 * @license
 * Copyright 2022-2026 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { GeneralCommissioningBehavior } from "#behaviors/general-commissioning";
import { ThreadBorderRouterManagement } from "#clusters/thread-border-router-management";
import { Bytes, MaybePromise } from "#general";
import { StatusCode, StatusResponseError } from "#types";
import { ThreadBorderRouterManagementBehavior } from "./ThreadBorderRouterManagementBehavior.js";

const ThreadBorderRouterManagementBase = ThreadBorderRouterManagementBehavior.with("PanChange");

/**
 * Server implementation of {@link ThreadBorderRouterManagementBehavior}.
 *
 * This base class provides Matter spec validation for commands and delegates to protected methods that backends
 * override. See {@link OtbrServer} for a concrete OTBR-backed implementation.
 */
export class ThreadBorderRouterManagementServer extends ThreadBorderRouterManagementBase {
    override getActiveDatasetRequest(): MaybePromise<ThreadBorderRouterManagement.DatasetResponse> {
        return this.#wrapDatasetResponse(this.readActiveDataset());
    }

    override getPendingDatasetRequest(): MaybePromise<ThreadBorderRouterManagement.DatasetResponse> {
        return this.#wrapDatasetResponse(this.readPendingDataset());
    }

    override async setActiveDatasetRequest({
        activeDataset,
        breadcrumb,
    }: ThreadBorderRouterManagement.SetActiveDatasetRequest): Promise<void> {
        // Matter spec §10.3.6.4: only allowed when there is no active dataset already
        if (this.state.activeDatasetTimestamp !== null) {
            throw new StatusResponseError(
                "Cannot set active dataset when one is already configured",
                StatusCode.Failure,
            );
        }

        await this.writeActiveDataset(activeDataset);

        if (breadcrumb !== undefined) {
            const gc = this.agent.get(GeneralCommissioningBehavior);
            gc.state.breadcrumb = breadcrumb;
        }

        this.requestSync();
    }

    override async setPendingDatasetRequest({
        pendingDataset,
    }: ThreadBorderRouterManagement.SetPendingDatasetRequest): Promise<void> {
        await this.writePendingDataset(pendingDataset);
        this.requestSync();
    }

    /**
     * Read the active operational dataset as raw Thread TLV bytes.  Override in subclasses.
     */
    protected readActiveDataset(): MaybePromise<Bytes> {
        throw new StatusResponseError("Not implemented", StatusCode.Failure);
    }

    /**
     * Write the active operational dataset from raw Thread TLV bytes.  Override in subclasses.
     */
    protected writeActiveDataset(_dataset: Bytes): MaybePromise<void> {
        throw new StatusResponseError("Not implemented", StatusCode.Failure);
    }

    /**
     * Read the pending operational dataset as raw Thread TLV bytes.  Override in subclasses.
     */
    protected readPendingDataset(): MaybePromise<Bytes> {
        throw new StatusResponseError("Not implemented", StatusCode.Failure);
    }

    /**
     * Write the pending operational dataset from raw Thread TLV bytes.  Override in subclasses.
     */
    protected writePendingDataset(_dataset: Bytes): MaybePromise<void> {
        throw new StatusResponseError("Not implemented", StatusCode.Failure);
    }

    /**
     * Sync cluster attributes from the backend.  Override in subclasses to poll hardware state.
     */
    protected syncAttributes(): MaybePromise<void> {}

    /**
     * Request an asynchronous attribute sync.  Override in subclasses to wake a background worker.
     */
    protected requestSync(): void {}

    async #wrapDatasetResponse(result: MaybePromise<Bytes>): Promise<ThreadBorderRouterManagement.DatasetResponse> {
        const dataset = await result;
        return { dataset };
    }
}
