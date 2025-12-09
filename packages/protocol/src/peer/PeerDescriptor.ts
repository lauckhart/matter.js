/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { DiscoveryData } from "#common/Scanner.js";
import { isDeepEqual, ServerAddressUdp } from "#general";
import type { PeerDataStore } from "#peer/PeerAddressStore.js";
import { BasicInformation } from "@matter/types/clusters/basic-information";
import { PeerAddress } from "./PeerAddress.js";

/**
 * Operational information for a single peer.
 *
 * For our purposes a "peer" is another node commissioned to a fabric to which we have access.
 */
export interface PeerDescriptor {
    /**
     * The logical address of the peer.
     */
    readonly address: PeerAddress;

    /**
     * A physical address the peer may be accessed at, if known.
     */
    operationalAddress?: ServerAddressUdp;

    /**
     * Additional information collected while locating the peer.
     */
    discoveryData?: DiscoveryData;

    /**
     * Operational limits to sessions, exchanges and subscriptions.
     */
    readonly limits: PeerDescriptor.Limits;

    /**
     * The data store for the peer.
     *
     * @deprecated
     */
    dataStore?: PeerDataStore;
}

export namespace PeerDescriptor {
    export interface Limits extends BasicInformation.CapabilityMinima {
        exchangesPerPeer: number;
        exchangesPerSession: number;
    }
}

export class ObservablePeerDescriptor implements PeerDescriptor {
    #address: PeerAddress;
    #descriptor: PeerDescriptor;
    #onChange: () => void;

    constructor(descriptor: PeerDescriptor, onChange: () => void) {
        this.#address = PeerAddress(descriptor.address);
        this.#descriptor = descriptor;
        this.#onChange = onChange;
    }

    get address() {
        return this.#address;
    }

    get operationalAddress() {
        return this.#descriptor.operationalAddress;
    }

    set operationalAddress(value: ServerAddressUdp | undefined) {
        if (isDeepEqual(this.operationalAddress, value)) {
            return;
        }

        this.#descriptor.operationalAddress = value;
        this.#onChange();
    }

    get discoveryData() {
        return this.#descriptor.discoveryData;
    }

    set discoveryData(value: DiscoveryData | undefined) {
        if (isDeepEqual(this.discoveryData, value)) {
            return;
        }

        this.#descriptor.discoveryData = { ...this.discoveryData, ...value };
        this.#onChange();
    }

    get limits() {
        return this.#descriptor.limits;
    }

    get dataStore() {
        return this.#descriptor.dataStore;
    }
}
