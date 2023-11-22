/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { BehaviorBacking } from "../BehaviorBacking.js";
import { InvocationContext } from "../InvocationContext.js";
import { ClientState } from "./ClientState.js";

export class ClientBehaviorBacking extends BehaviorBacking {
    createState(_context: InvocationContext) {
        return new ClientState(this);
    }
}
