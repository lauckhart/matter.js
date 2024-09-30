/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { NodeAddress } from "#common/NodeAddress.js";
import { DiscoveryData } from "#common/Scanner.js";
import { MaybePromise, ServerAddressIp } from "@matter.js/general";
import type { PeerSet } from "./PeerSet.js";

/**
 * Operational information for a single peer.
 *
 * For our purposes a "peer" is another node commissioned to a fabric to which we have access.
 */
export interface OperationalPeer {
    /**
     * The logical address of the peer.
     */
    address: NodeAddress;

    /**
     * A physical address the peer may be accessed at, if known.
     */
    operationalAddress?: ServerAddressIp;

    /**
     * Additional information collected while locating the peer.
     */
    discoveryData?: DiscoveryData;
}

/**
 * The interface {@link PeerSet} uses for persisting operational information.
 */
export abstract class PeerStore {
    abstract loadPeers(): MaybePromise<Iterable<OperationalPeer>>;
    abstract updatePeer(peer: OperationalPeer): MaybePromise<void>;
    abstract deletePeer(address: NodeAddress): MaybePromise<void>;
}
