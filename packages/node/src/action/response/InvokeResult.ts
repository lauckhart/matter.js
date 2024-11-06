/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { CommandData } from "#types";
import { StreamingResult } from "./StreamingResult.js";

export interface InvokeResult extends StreamingResult<InvokeResult.Chunk> {}

export namespace InvokeResult {
    export interface Chunk extends StreamingResult.Chunk {
        kind: string;
        responses: CommandData[];
    }
}
