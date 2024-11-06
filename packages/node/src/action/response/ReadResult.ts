/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { AttributeReport, EventReport } from "#types";
import { StreamingResult } from "./StreamingResult.js";

export interface ReadResult<Chunk = ReadResult.Chunk> extends StreamingResult<ReadResult.Chunk> {}

export namespace ReadResult {
    export type Chunk = AttributeChunk | EventChunk;

    export interface AttributeChunk extends StreamingResult.Chunk {
        kind: "attributes";
        attributes: AttributeReport[];
    }

    export interface EventChunk extends StreamingResult.Chunk {
        kind: "events";
        events: EventReport[];
    }
}
