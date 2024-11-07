/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ActionContext } from "./context/ActionContext.js";
import { Invoke } from "./request/Invoke.js";
import { Read } from "./request/Read.js";
import { Subscribe } from "./request/Subscribe.js";
import { Write } from "./request/Write.js";
import { InvokeResult } from "./response/InvokeResult.js";
import { ReadResult } from "./response/ReadResult.js";
import { SubscribeResult } from "./response/SubscribeResult.js";
import { WriteResult } from "./response/WriteResult.js";

/**
 * Objects implementing this interface can participate in Matter interactions.
 */
export interface Interactable {
    /**
     * Perform a Matter read interaction.
     */
    read(request: Read, context?: ActionContext): ReadResult;

    /**
     * Perform a Matter subscribe interaction.
     */
    subscribe(request: Subscribe, context?: ActionContext): SubscribeResult;

    /**
     * Perform a Matter write interaction.
     */
    write<T extends Write>(request: T, context?: ActionContext): WriteResult<T>;

    /**
     * Perform a Matter invoke interaction.
     */
    invoke<T extends Invoke>(request: T, context?: ActionContext): InvokeResult<T>;
}
