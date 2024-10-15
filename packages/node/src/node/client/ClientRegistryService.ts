/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import type { ClientNode } from "#node/ClientNode.js";

/**
 * Connects a client node with its owner.
 */
export abstract class ClientRegistryService {
    abstract add(node: ClientNode): void;
    abstract delete(node: ClientNode): void;
}
