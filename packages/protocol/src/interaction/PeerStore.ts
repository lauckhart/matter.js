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
 */
export interface OperationalPeer {
    address: NodeAddress;
    operationalAddress?: ServerAddressIp;
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
