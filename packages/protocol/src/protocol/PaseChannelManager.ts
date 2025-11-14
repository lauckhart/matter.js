/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Bytes, Channel, Environment, Environmental } from "#general";
import { MessageChannel } from "#protocol/MessageChannel.js";
import { NoChannelError, NodeSession } from "#session/NodeSession.js";
import { Session } from "#session/Session.js";

export class PaseChannelManager {
    readonly #paseChannels = new Map<Session, MessageChannel>();

    static [Environmental.create](env: Environment) {
        const instance = new PaseChannelManager();
        env.set(PaseChannelManager, instance);
        return instance;
    }

    /**
     * Returns the last established session for a Fabric and Node
     */
    getChannelForSession(session: Session) {
        if (NodeSession.is(session) && !session.isPase) {
            const fabric = session.fabric;
            const nodeId = session.peerNodeId;
            if (fabric === undefined) {
                return this.#paseChannels.get(session);
            }
            return this.getChannel(fabric.addressOf(nodeId), session);
        }
        return this.#paseChannels.get(session);
    }

    private getOrCreateAsPaseChannel(byteArrayChannel: Channel<Bytes>, session: Session) {
        const msgChannel = new MessageChannel(
            byteArrayChannel,
            session,
            async () => void this.#paseChannels.delete(session),
        );
        this.#paseChannels.set(session, msgChannel);
        if (session.isSecure) {
            // For Insecure sessions we usually reuse channels, so do not close them
            session.destroyed.on(() => msgChannel.close());
        }
        return msgChannel;
    }

    async getOrCreateChannel(byteArrayChannel: Channel<Bytes>, session: Session) {
        if (!NodeSession.is(session)) {
            return this.getOrCreateAsPaseChannel(byteArrayChannel, session);
        }
        const fabric = session.fabric;
        const nodeId = session.peerNodeId;
        if (fabric === undefined) {
            return this.getOrCreateAsPaseChannel(byteArrayChannel, session);
        }

        // Try to get
        const address = fabric.addressOf(nodeId);
        try {
            return this.getChannel(address, session);
        } catch (e) {
            NoChannelError.accept(e);
        }

        // Need to create
        const msgChannel = new MessageChannel(byteArrayChannel, session, async () =>
            this.removeChannel(address, session),
        );
        await this.setChannel(address, msgChannel);
        session.destroyed.on(() => msgChannel.close());
        return msgChannel;
    }
}
