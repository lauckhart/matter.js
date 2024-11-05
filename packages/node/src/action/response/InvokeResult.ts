/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { CommandData } from "#types";

export interface InvokeResult extends Iterable<InvokeResult.Chunk> {
    interactionModelRevision: number;
    cancel(): Promise<void>;
}

export namespace InvokeResult {
    export type Chunk = CommandData[];
}
