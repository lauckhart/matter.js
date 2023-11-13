/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { State } from "../state/State.js";
import { ClientBehaviorBacking } from "./ClientBehaviorBacking.js";

export class ClientState extends State {
    #backing: ClientBehaviorBacking;

    constructor(backing: ClientBehaviorBacking) {
        super();
        this.#backing = backing;

        // TODO
        this.#backing
    }
}
