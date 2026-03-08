/**
 * @license
 * Copyright 2022-2026 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { field, int64, uint32 } from "@matter/model";

/**
 * Definitions for the Logs management interface.
 */
export namespace Logs {
    /**
     * Request parameters for log queries.
     */
    export class QueryRequest {
        /**
         * Return only the last N lines.
         */
        @field(uint32)
        tail?: number;

        /**
         * Show logs since this timestamp (epoch ms).
         */
        @field(int64)
        since?: number;

        /**
         * Show logs until this timestamp (epoch ms).
         */
        @field(int64)
        until?: number;
    }
}
