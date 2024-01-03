/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Part } from "../../endpoint/Part.js";
import { AsyncConstruction } from "../../util/AsyncConstructable.js";
import { Behavior } from "../Behavior.js";
import { BehaviorBacking } from "../BehaviorBacking.js";
import { InvocationContext } from "../InvocationContext.js";
import { Val } from "../state/managed/Val.js";
import { ClientState } from "./ClientState.js";

export class ClientBehaviorBacking extends BehaviorBacking {
    #construction: AsyncConstruction<BehaviorBacking>;

    get construction() {
        return this.#construction;
    }

    constructor(part: Part, type: Behavior.Type) {
        super(part, type);
        this.#construction = AsyncConstruction(this);
    }

    referenceState(_context: InvocationContext) {
        // TODO - probably "ClientState" should be a ManagedStruct mirroring
        // server state
        return new ClientState(this) as unknown as Val.Struct;
    }
}
