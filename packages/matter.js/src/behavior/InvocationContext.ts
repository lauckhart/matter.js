/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import type { Message } from "../codec/MessageCodec.js";
import { Session } from "../session/Session.js";
import { MatterDevice } from "../MatterDevice.js";
import { Fabric } from "../fabric/Fabric.js";
import { Behavior } from "./Behavior.js";

/**
 * Provides contextual information when invoking methods and emitting events.
 */
export interface InvocationContext {
    behavior?: Behavior;
    fabric?: Fabric;
    session?: Session<MatterDevice>;
    message?: Message;
}
