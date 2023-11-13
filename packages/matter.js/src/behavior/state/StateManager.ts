/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import type { InvocationContext } from "../InvocationContext.js";

/**
 * Basic functionality required for full functionality of {@link ManagedState}.
 */
export interface StateManager {
    /**
     * Set a state value.  The manager may validate and update external
     * state here.
     */
    setStateValue(name: string, value: any, context: InvocationContext): void;
}
