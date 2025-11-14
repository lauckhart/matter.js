/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { DiscoveryData } from "#common/Scanner.js";
import { MdnsClient } from "#mdns/MdnsClient.js";
import { MessageChannel } from "#protocol/MessageChannel.js";
import { NoChannelError } from "#session/NodeSession.js";
import { Session } from "#session/Session.js";
import { Logger, ServerAddressUdp } from "@matter/general";
import { PeerAddress } from "./PeerAddress.js";
import type { PeerContext } from "./PeerContext.js";
import type { PeerDescriptor } from "./PeerDescriptor.js";
import { NodeDiscoveryType } from "./PeerSet.js";

const logger = new Logger("Peer");

// TODO - factor away
export interface RunningDiscovery {
    type: NodeDiscoveryType;
    promises?: (() => Promise<MessageChannel>)[];
    stopTimerFunc?: (() => void) | undefined;
    mdnsClient?: MdnsClient;
}

// TODO - factor away
export interface RunningReconnection {
    promise: Promise<MessageChannel>;
    rejecter: (reason?: any) => void;
}

/**
 * A node on a fabric we share.
 */
export class Peer {
    readonly #descriptor: PeerDescriptor;
    readonly #context: PeerContext;
    readonly #sessions = new Array<MessageChannel>();

    // TODO - manage internally
    discovery?: RunningDiscovery;
    reconnection?: RunningReconnection;

    constructor(descriptor: PeerDescriptor, context: PeerContext) {
        descriptor.address = PeerAddress(descriptor.address);
        this.#descriptor = descriptor;
        this.#context = context;
    }

    get address() {
        return this.#descriptor.address;
    }

    get fabric() {
        return this.#context.sessions.fabricFor(this.address);
    }

    get nodeId() {
        return this.address.nodeId;
    }

    get descriptor() {
        return this.#descriptor;
    }

    get isGroup() {
        return PeerAddress.isGroup(this.address);
    }

    toString() {
        return this.address.toString();
    }

    // TODO - manage internally
    async addSession(session: MessageChannel) {
        session.closeCallback = async () => this.closeSession(session.session);
        this.#sessions.push(session);
        if (this.#sessions.length > this.#context.sessions.caseSessionsPerFabricAndNode) {
            const oldest = this.#findLeastActiveSession();

            // Should not happen
            if (!oldest) {
                return;
            }

            const { session: oldSession } = oldest;

            // Should always happen
            if (session.session.id !== oldSession.id) {
                await oldSession.destroy(false, false);
            }

            logger.info(`Close oldest session ${oldSession.id} for ${this.address}`);

            await oldest.close();
        }
    }

    get hasChannel() {
        return !!this.#sessions.filter(channel => !channel.closed && !channel.session.closingAfterExchangeFinished)
            .length;
    }

    getSession(session?: Session) {
        let results = this.#sessions;
        if (session !== undefined) {
            results = results.filter(channel => channel.session.id === session.id);
        }
        results = results.filter(channel => !channel.closed && !channel.session.closingAfterExchangeFinished);
        if (results.length === 0)
            throw new NoChannelError(
                `Can't find a channel to ${this.address}${session !== undefined ? ` session ${session.id}` : ""}`,
            );
        return results[results.length - 1]; // Return the latest added channel (or the one belonging to the session requested)
    }

    async closeAllSessions() {
        for (const session of this.#sessions) {
            await session.close();
        }
    }

    async closeSession(session: Session) {
        const channelEntryIndex = this.#sessions.findIndex(channel => channel.session.id === session.id);
        if (channelEntryIndex === -1) {
            // Seems already removed
            return;
        }
        const channel = this.#sessions.splice(channelEntryIndex, 1)[0];
        if (channel === undefined) {
            return;
        }
        await channel.close();
    }

    async updateDescriptor(operationalServerAddress?: ServerAddressUdp, discoveryData?: DiscoveryData) {
        if (operationalServerAddress) {
            this.#descriptor.operationalAddress = operationalServerAddress;
        }

        if (discoveryData) {
            this.#descriptor.discoveryData = {
                ...this.#descriptor.discoveryData,
                ...discoveryData,
            };
        }
        await this.#context.store.updatePeer(this.#descriptor);

        // If we got a new channel and have a running discovery we can end it
        if (this.#descriptor.operationalAddress !== undefined && this.discovery) {
            logger.info(`Found ${this.address} during discovery, cancel discovery`);
            // We are currently discovering this node, so we need to update the discovery data
            const { mdnsClient: mdnsScanner } = this.discovery;

            // This ends discovery and triggers the promises
            mdnsScanner?.cancelOperationalDeviceDiscovery(this.fabric, this.address.nodeId, true);
        }
    }

    #findLeastActiveSession() {
        let oldest;
        for (const channel of this.#sessions) {
            if (!oldest || channel.session.timestamp < oldest.session.timestamp) {
                oldest = channel;
            }
        }
        return oldest;
    }
}
