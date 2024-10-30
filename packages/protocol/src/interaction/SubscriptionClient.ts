/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { MessageExchange } from "#protocol/MessageExchange.js";
import { ProtocolHandler } from "#protocol/ProtocolHandler.js";
import { Environment, Environmental, Logger, MaybePromise, Timer } from "@matter/general";
import { INTERACTION_PROTOCOL_ID } from "@matter/types";
import { DataReport, IncomingInteractionClientMessenger } from "./InteractionMessenger.js";

const logger = Logger.get("SubscriptionClient");

/**
 * A simple protocol handler that handles exchanges starting with data reports.  These must map to a subscription or the
 * exchange is invalid.
 */
export class SubscriptionClient implements ProtocolHandler {
    private readonly subscriptionListeners = new Map<number, (dataReport: DataReport) => MaybePromise<void>>();
    private readonly subscriptionUpdateTimers = new Map<number, Timer>();

    constructor() {}

    static [Environmental.create](env: Environment) {
        const client = new SubscriptionClient();
        env.set(SubscriptionClient, client);
        return client;
    }

    readonly id = INTERACTION_PROTOCOL_ID;

    registerSubscriptionListener(subscriptionId: number, listener: (dataReport: DataReport) => MaybePromise<void>) {
        this.subscriptionListeners.set(subscriptionId, listener);
    }

    removeSubscriptionListener(subscriptionId: number) {
        this.subscriptionListeners.delete(subscriptionId);
    }

    registerSubscriptionUpdateTimer(subscriptionId: number, timer: Timer) {
        this.subscriptionUpdateTimers.set(subscriptionId, timer);
    }

    removeSubscriptionUpdateTimer(subscriptionId: number) {
        this.subscriptionUpdateTimers.get(subscriptionId)?.stop();
        this.subscriptionUpdateTimers.delete(subscriptionId);
    }

    async onNewExchange(exchange: MessageExchange) {
        const messenger = new IncomingInteractionClientMessenger(exchange);

        let dataReport: DataReport;
        try {
            // TODO Adjust this to getting packages as callback when received to handle error cases and checks outside
            dataReport = await messenger.readDataReports([...this.subscriptionListeners.keys()]);
        } finally {
            messenger.close().catch(error => logger.info("Error closing client messenger", error));
        }
        const subscriptionId = dataReport.subscriptionId as number; // this is checked in the messenger already because we hand over allowed list

        const listener = this.subscriptionListeners.get(subscriptionId);
        const timer = this.subscriptionUpdateTimers.get(subscriptionId);

        if (timer !== undefined) {
            timer.stop().start(); // Restart timer because we received data
        }

        await listener?.(dataReport);
    }

    async close() {
        this.subscriptionListeners.clear();
        this.subscriptionUpdateTimers.forEach(timer => timer.stop());
        this.subscriptionUpdateTimers.clear();
    }
}
