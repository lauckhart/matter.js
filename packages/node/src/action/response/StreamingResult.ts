/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { CancelableAsyncIterator } from "#general";

/**
 * matter.js uses this for any interaction returning multiple chunks.
 */
export interface StreamingResult<T extends StreamingResult.Chunk> extends CancelableAsyncIterator<T> {}

export namespace StreamingResult {
    export interface Chunk {
        interactionModelRevision: number;
    }
}
