/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Behavior } from "#behavior/Behavior.js";
import { BehaviorBacking } from "#behavior/internal/BehaviorBacking.js";
import { ClientBehaviorBacking } from "#behavior/internal/ClientBehaviorBacking.js";
import { Endpoint } from "#endpoint/Endpoint.js";
import { EndpointInitializer } from "#endpoint/properties/EndpointInitializer.js";

export class ClientEndpointInitializer extends EndpointInitializer {
    override createBacking(endpoint: Endpoint, behavior: Behavior.Type): BehaviorBacking {
        return new ClientBehaviorBacking(endpoint, behavior);
    }
}
