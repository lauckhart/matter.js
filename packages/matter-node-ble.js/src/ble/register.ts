/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Ble } from "@project-chip/matter.js/ble";
import { Environment } from "@project-chip/matter.js/environment";
import { BleNode } from "./BleNode.js";

class Provider extends Ble.Provider {
    get(address?: string | number) {
        if (typeof address === "string") {
            if (address.indexOf(":") !== -1) {
                address = Number.parseInt(address.replace(/[^0-9a-f]/gi, ""), 16);
            } else {
                address = Number.parseInt(address);
            }
        }
        return new BleNode({ hciId: address });
    }
}

Environment.default.set(Ble.Provider, new Provider());
