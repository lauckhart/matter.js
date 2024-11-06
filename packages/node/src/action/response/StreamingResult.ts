/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * matter.js uses this for any interaction returning multiple chunks.
 */
export interface StreamingResult<T extends StreamingResult.Chunk> extends AsyncIterator<T> {
    /**
     * Terminate the stream.  Only necessary if the stream is not fully consumed.
     */
    close(): Promise<void>;
}

export namespace StreamingResult {
    export interface Chunk {
        interactionModelRevision: number;
    }
}
