/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import {
    ChannelType,
    Immutable,
    ImplementationError,
    InternalError,
    Logger,
    NetInterfaceSet,
    NotImplementedError,
} from "#general";
import { ClientNode } from "#node/ClientNode.js";
import { ExchangeManager, ExchangeProvider, MessageExchange, Session } from "#protocol";
import { INTERACTION_PROTOCOL_ID } from "#types";
import { CommissioningClient } from "../commissioning/CommissioningClient.js";

const logger = Logger.get("ClientExchangeProvider");

export class ClientExchangeProvider extends ExchangeProvider {
    #owner: ClientNode;
    #exchanges: ExchangeManager;
    #commissioning: Immutable<CommissioningClient.State>;
    #connected?: Promise<boolean>;

    constructor(owner: ClientNode) {
        const exchanges = owner.env.get(ExchangeManager);

        super(exchanges);

        this.#owner = owner;
        this.#exchanges = exchanges;
        this.#commissioning = owner.state.commissioning;
    }

    override async initiateExchange(): Promise<MessageExchange> {
        if (!this.#exchanges.channels.hasChannel(this.#address)) {
            await this.reconnectChannel();
        }
        return this.#exchanges.initiateExchange(this.#address, INTERACTION_PROTOCOL_ID);
    }

    override reconnectChannel(): Promise<boolean> {
        if (this.#connected) {
            return this.#connected;
        }

        const rediscover = this.#commissioning.addresses === undefined || this.#commissioning.offlineAt !== undefined;
        if (rediscover) {
            // TODO
            throw new NotImplementedError("Rediscovery not implemented");
        }

        this.#connected = this.#connect();

        return this.#connected;
    }

    async #connect(): Promise<boolean> {
        const addresses = this.#commissioning.addresses;
        if (addresses === undefined) {
            throw new InternalError(`Connection attempt to ${this.#owner} without operational address`);
        }

        const netInterfaces = this.#owner.env.get(NetInterfaceSet);
        for (const address of addresses) {
            if (address.type !== ChannelType.UDP) {
                continue;
            }

            const intf = netInterfaces.interfaceFor(ChannelType.UDP, address.ip);
            if (intf === undefined) {
                logger.warn(`No network interface for ${this.#owner} address ${address.ip}`);
                continue;
            }

            const channel = intf.openChannel(address);
        }
    }

    override get session(): Session {
        return this.#exchanges.channels.getChannel(this.#address).session;
    }

    override get channelType(): ChannelType {
        return this.#exchanges.channels.getChannel(this.#address).channel.type;
    }

    get #address() {
        const address = this.#commissioning.peerAddress;
        if (address === undefined) {
            throw new ImplementationError(`${this.#owner} is uncommissioned`);
        }
        return address;
    }
}
