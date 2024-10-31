/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ChannelType } from "#general";
import { ExchangeManager, ExchangeProvider, MessageExchange, PeerAddress, Session } from "#protocol";
import { INTERACTION_PROTOCOL_ID } from "#types";

export class ClientExchangeProvider extends ExchangeProvider {
    #address: PeerAddress;
    #exchanges: ExchangeManager;

    constructor(address: PeerAddress, exchanges: ExchangeManager) {
        super(exchanges);
        this.#address = address;
        this.#exchanges = exchanges;
    }

    override async initiateExchange(): Promise<MessageExchange> {
        if (!this.#exchanges.channels.hasChannel(this.#address)) {
            await this.reconnectChannel();
        }
        return this.#exchanges.initiateExchange(this.#address, INTERACTION_PROTOCOL_ID);
    }

    override reconnectChannel(): Promise<boolean> {
        // TODO
        return Promise.resolve(false);
    }

    override get session(): Session {
        return this.#exchanges.channels.getChannel(this.#address).session;
    }

    override get channelType(): ChannelType {
        return this.#exchanges.channels.getChannel(this.#address).channel.type;
    }
}
