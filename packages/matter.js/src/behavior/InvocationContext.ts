/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { MatterDevice } from "../MatterDevice.js";
import type { Message } from "../codec/MessageCodec.js";
import { Fabric } from "../fabric/Fabric.js";
import { Session } from "../session/Session.js";
import { Behavior } from "./Behavior.js";

/**
 * Provides contextual information when invoking methods and emitting events.
 */
export interface InvocationContext {
    fabric?: Fabric;
    fabricFiltered?: boolean;
    behavior?: Behavior;
    session?: Session<MatterDevice>;
    message?: Message;
}
