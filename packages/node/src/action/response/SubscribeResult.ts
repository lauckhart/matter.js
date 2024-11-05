/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { SubscribeResponse } from "#types";
import { ReadResult } from "./ReadResult.js";

export interface SubscribeResult extends ReadResult<SubscribeResult.Chunk> {}

export namespace SubscribeResult {
    export type Chunk = ReadResult.Chunk | SubscriptionChunk;

    export interface SubscriptionChunk extends SubscribeResponse {
        kind: "subscription";
    }
}
