/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import type { Invoke } from "#action/request/Invoke.js";
import type { CommandData } from "#types";
import { CancelablePromise } from "@matter/general";
import type { StreamingResult } from "./StreamingResult.js";

export type InvokeResult<T extends Invoke> = T extends { suppressResponse: true }
    ? CancelablePromise<void>
    : StreamingResult<InvokeResult.Chunk>;

export namespace InvokeResult {
    export interface Chunk extends StreamingResult.Chunk {
        kind: string;
        responses: CommandData[];
    }
}
