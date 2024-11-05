/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { AttributeReport, EventReport } from "#types";

export interface ReadResult<Chunk = ReadResult.Chunk> extends AsyncIterator<Chunk> {
    interactionModelRevision: number;
    cancel(): Promise<void>;
}

export namespace ReadResult {
    export type Chunk = AttributeChunk | EventChunk;

    export interface AttributeChunk {
        kind: "attributes";
        attributes: AttributeReport[];
    }

    export interface EventChunk {
        kind: "events";
        events: EventReport[];
    }
}
