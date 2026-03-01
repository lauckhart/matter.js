/**
 * @license
 * Copyright 2022-2026 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Environment, MockWsConnection, Transaction, WebSocketClient } from "@matter/general";
import { RemoteStoreFactory } from "#node/remote/RemoteStoreFactory.js";
import { WebSocketConnection } from "#node/remote/WebSocketConnection.js";
import { Val } from "@matter/protocol";
import { EndpointNumber } from "@matter/types";

const { send, receive } = MockWsConnection;

function mockEnv(pair: MockWsConnection.Pair) {
    const env = new Environment("test");
    const client = new WebSocketClient();
    client.connect = async () => pair.client;
    env.set(WebSocketClient, client);
    return env;
}

/**
 * Close a WebSocketConnection cleanly.  The server writable must close first so the mock pipe unblocks the read loop.
 */
async function closeConnection(connection: WebSocketConnection, pair: MockWsConnection.Pair) {
    await pair.server.writable.close();
    await connection.close();
}

/**
 * Create a mock transaction that supports participant management.
 */
function mockTransaction() {
    const participants = new Map<object, Transaction.Participant>();

    return {
        getParticipant(role: object) {
            return participants.get(role);
        },

        addParticipants(...newParticipants: Transaction.Participant[]) {
            for (const p of newParticipants) {
                if (p.role !== undefined) {
                    participants.set(p.role, p);
                }
            }
        },

        get participants() {
            return participants;
        },
    } as unknown as Transaction;
}

describe("RemoteStoreFactory", () => {
    it("creates stores that send writes over connection", async () => {
        const pair = MockWsConnection();

        const connection = new WebSocketConnection("ws://test", mockEnv(pair));
        await connection.open();

        const factory = RemoteStoreFactory(connection);

        // Create a mock endpoint with the id and number properties needed by the store
        const endpoint = { id: "light", number: EndpointNumber(1) } as any;

        const store = factory(endpoint, "onOff", "name");

        // The store should start with no initial values
        expect(store.initialValues).undefined;

        // Write values through the store — DatasourceCache batches via a transaction participant
        const transaction = mockTransaction();
        await store.set!(transaction, { onOff: true, globalSceneControl: true });

        // Commit the participant to trigger the actual write
        const participant = [...(transaction as any).participants.values()][0] as Transaction.Participant;
        const commitPromise = participant.commit2!();

        // Read the write request from the server side
        const request = await receive(pair.server);
        expect(request.method).equals("write");
        expect(request.target).equals("light/onOff");
        expect(request.value).deep.equals({ onOff: true, globalSceneControl: true });

        // Send ok response
        await send(pair.server, { kind: "ok", id: request.id });

        await commitPromise;

        await closeConnection(connection, pair);
    });

    it("supports externalSet for subscription updates", async () => {
        const pair = MockWsConnection();

        const connection = new WebSocketConnection("ws://test", mockEnv(pair));
        await connection.open();

        const factory = RemoteStoreFactory(connection);
        const endpoint = { id: "light", number: EndpointNumber(1) } as any;
        const store = factory(endpoint, "onOff", "name");

        // Before a listener is installed, externalSet accumulates into initialValues
        await store.externalSet!(new Map<string | number, unknown>([["onOff", false]]) as Val.StructMap);
        expect(store.initialValues).deep.equals({ onOff: false });

        await store.externalSet!(new Map<string | number, unknown>([["globalSceneControl", true]]) as Val.StructMap);
        expect(store.initialValues).deep.equals({ onOff: false, globalSceneControl: true });

        // Install a listener
        const receivedValues = Array<Val.StructMap>();
        store.externalChangeListener = async (values: Val.StructMap) => {
            receivedValues.push(values);
        };

        // Now externalSet should call the listener instead
        await store.externalSet!(new Map<string | number, unknown>([["onOff", true]]) as Val.StructMap);
        expect(receivedValues).length(1);
        expect(receivedValues[0]).deep.equals(new Map<string | number, unknown>([["onOff", true]]));

        await closeConnection(connection, pair);
    });
});
