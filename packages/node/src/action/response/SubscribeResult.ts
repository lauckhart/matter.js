/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { SubscribeResponse } from "#types";
import { ReadResult } from "./ReadResult.js";
import { StreamingResult } from "./StreamingResult.js";

export interface SubscribeResult extends StreamingResult<SubscribeResult.Chunk> {}

export namespace SubscribeResult {
    export type Chunk = ReadResult.Chunk | SubscriptionChunk;

    export interface SubscriptionChunk extends StreamingResult.Chunk, SubscribeResponse {
        kind: "subscription";
    }
}
