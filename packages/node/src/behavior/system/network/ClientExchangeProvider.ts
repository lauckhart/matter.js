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
    NoResponseTimeoutError,
    NotImplementedError,
    Time,
} from "#general";
import { ClientNode } from "#node/ClientNode.js";
import {
    CaseClient,
    ChannelManager,
    ExchangeManager,
    ExchangeProvider,
    MessageChannel,
    MessageExchange,
    Session,
    SessionManager,
} from "#protocol";
import { INTERACTION_PROTOCOL_ID, SECURE_CHANNEL_PROTOCOL_ID } from "#types";
import { CommissioningClient } from "../commissioning/CommissioningClient.js";

const logger = Logger.get("ClientExchangeProvider");

export class ClientExchangeProvider extends ExchangeProvider {
    #owner: ClientNode;
    #interfaces: NetInterfaceSet;
    #exchanges: ExchangeManager;
    #sessions: SessionManager;
    #channels: ChannelManager;
    #caseClient: CaseClient;
    #commissioning: Immutable<CommissioningClient.State>;
    #connected?: Promise<boolean>;

    constructor(owner: ClientNode) {
        const exchanges = owner.env.get(ExchangeManager);

        super(exchanges);

        this.#owner = owner;
        this.#interfaces = owner.env.get(NetInterfaceSet);
        this.#exchanges = exchanges;
        this.#sessions = owner.env.get(SessionManager);
        this.#channels = owner.env.get(ChannelManager);
        this.#caseClient = new CaseClient(this.#sessions);
        this.#commissioning = owner.state.commissioning;
    }

    override async initiateExchange(): Promise<MessageExchange> {
        if (!this.#exchanges.channels.hasChannel(this.#peerAddress)) {
            await this.reconnectChannel();
        }
        return this.#exchanges.initiateExchange(this.#peerAddress, INTERACTION_PROTOCOL_ID);
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

        const peerAddress = this.#peerAddress;
        for (const address of addresses) {
            if (address.type !== ChannelType.UDP) {
                continue;
            }

            const intf = this.#interfaces.interfaceFor(ChannelType.UDP, address.ip);
            if (intf === undefined) {
                logger.warn(`No network interface for ${this.#owner} address ${address.ip}`);
                continue;
            }

            const channel = await intf.openChannel(address);
            const { sessionParameters } = this.#sessions.findResumptionRecordByAddress(peerAddress) ?? {};
            const insecureSession = this.#sessions.createInsecureSession({
                sessionParameters: { ...sessionParameters, ...this.#commissioning.sessionParameters },
                isInitiator: true,
            });

            const insecureMessageChannel = new MessageChannel(channel, insecureSession);
            try {
                const exchange = this.#exchanges.initiateExchangeWithChannel(
                    insecureMessageChannel,
                    SECURE_CHANNEL_PROTOCOL_ID,
                );

                try {
                    const { session } = await this.#caseClient.pair(
                        exchange,
                        this.#sessions.fabricFor(peerAddress),
                        peerAddress.nodeId,
                        // TODO - expected processing time
                    );

                    // TODO - clear some portion of state if case client did not resume as indicated by return value
                    // from this.#caseClient.pair?
                    const messageChannel = new MessageChannel(channel, session);
                    await this.#channels.setChannel(peerAddress, messageChannel);

                    if (this.#commissioning.onlineAt === undefined) {
                        await this.#owner.setStateOf(CommissioningClient, { onlineAt: Time.nowMs() });
                    }

                    return true;
                } catch (e) {
                    await exchange.close();

                    // Do not close channel; it's now owned by ChannelManager even if it throws

                    throw e;
                }
            } catch (e) {
                NoResponseTimeoutError.accept(e);

                logger.warn(`Timeout connecting to ${this.#owner} at ${address.ip}:${address.port}`);
            } finally {
                await insecureSession.destroy();
            }
        }

        if (this.#commissioning.offlineAt === undefined) {
            await this.#owner.setStateOf(CommissioningClient, { offlineAt: Time.nowMs() });
        }

        throw new NoResponseTimeoutError(`Timeout connecting to ${this.#owner} on all known addresses`);
    }

    override get session(): Session {
        return this.#exchanges.channels.getChannel(this.#peerAddress).session;
    }

    override get channelType(): ChannelType {
        return this.#exchanges.channels.getChannel(this.#peerAddress).channel.type;
    }

    get #peerAddress() {
        const address = this.#commissioning.peerAddress;
        if (address === undefined) {
            throw new ImplementationError(`${this.#owner} is uncommissioned`);
        }
        return address;
    }
}
