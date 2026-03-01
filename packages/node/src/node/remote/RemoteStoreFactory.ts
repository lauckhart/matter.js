/**
 * @license
 * Copyright 2022-2026 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import type { RemoteRequest } from "#behavior/system/remote/api/RemoteRequest.js";
import type { Endpoint } from "#endpoint/Endpoint.js";
import { Logger } from "@matter/general";
import type { ClientStructure } from "#node/client/ClientStructure.js";
import { DatasourceCache } from "#storage/client/DatasourceCache.js";
import type { RemoteWriter } from "#storage/client/RemoteWriter.js";
import type { EndpointNumber } from "@matter/types";
import type { WebSocketConnection } from "./WebSocketConnection.js";

const logger = Logger.get("RemoteStoreFactory");

/**
 * Creates a {@link ClientStructure.StoreFactory} that backs behavior state with {@link DatasourceCache} instances.
 *
 * Reads return cached values; writes are sent over WebSocket.
 */
export function RemoteStoreFactory(connection: WebSocketConnection): ClientStructure.StoreFactory {
    const endpointIds = new Map<EndpointNumber, string>();

    const writer: RemoteWriter = async request => {
        for (const { number, behaviorId, values } of request) {
            const endpointId = endpointIds.get(number) ?? String(number);
            const target = `${endpointId}/${behaviorId}`;
            try {
                const response = await connection.request({
                    method: "write",
                    target,
                    value: values,
                } as RemoteRequest.Write);
                if (response.kind === "error") {
                    throw new Error(response.message);
                }
            } catch (e) {
                logger.error(`Error writing to remote ${target}:`, e);
                throw e;
            }
        }
    };

    return (endpoint: Endpoint, behaviorId: string): DatasourceCache => {
        endpointIds.set(endpoint.number, endpoint.id);

        return DatasourceCache({
            writer,
            endpointNumber: endpoint.number,
            behaviorId,
        });
    };
}
