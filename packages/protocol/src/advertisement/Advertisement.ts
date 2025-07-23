/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * An advertisement for a discrete service.
 */
export interface Advertisement {
    /**
     * The service advertised.
     *
     * This is a unique ID associated with the advertisement.
     */
    service: string;

    /**
     * A node may advertise a commissionable node or a specific operational fabric.
     */
    kind: "commissionable" | "operational";

    /**
     * Broadcast the advertisement.
     */
    broadcast(): Promise<void>;

    /**
     * Broadcast expiration records.
     */
    close(): Promise<void>;
}
