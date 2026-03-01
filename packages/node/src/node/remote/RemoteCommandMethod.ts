/**
 * @license
 * Copyright 2022-2026 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import type { Behavior } from "#behavior/Behavior.js";
import type { RemoteRequest } from "#behavior/system/remote/api/RemoteRequest.js";
import { decamelize } from "@matter/general";
import { WebSocketConnection } from "./WebSocketConnection.js";

/**
 * Create the command method for a remote behavior accessed via WebSocket.
 *
 * Commands are invoked by sending a request to the target path:
 *   `ep<N>/<behaviorId>/<commandName>`
 */
export function RemoteCommandMethod(name: string) {
    const wireName = decamelize(name);

    const temp = {
        async [name](this: Behavior, fields?: {}) {
            const connection = this.env.get(WebSocketConnection);
            const behaviorId = this.type.id;
            const target = `${this.endpoint.number}/${behaviorId}/${wireName}`;

            const response = await connection.request({
                method: "invoke",
                target,
                parameters: fields,
            } as RemoteRequest.Invoke);

            if (response.kind === "error") {
                throw new Error(response.message);
            }

            if (response.kind === "value") {
                return response.value;
            }
        },
    };

    return temp[name];
}
