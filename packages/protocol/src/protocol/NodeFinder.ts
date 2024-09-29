/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { NodeAddress, NodeAddressMap } from "#common/NodeAddress.js";
import { DiscoveryData, ScannerSet } from "#common/Scanner.js";
import { FabricManager } from "#fabric/FabricManager.js";
import { MdnsScanner } from "#mdns/MdnsScanner.js";
import { ChannelType, Environment, Environmental, ServerAddressIp, SupportedStorageTypes } from "@matter.js/general";

/**
 * Interfaces {@link NodeFinder} with other components.
 */
export interface NodeFinderContext {
    fabrics: FabricManager;
    scanners: ScannerSet;
}

/**
 * Types of discovery that may be performed when connecting operationally.
 */
export enum NodeDiscoveryType {
    /** No discovery is done, in calls means that only known addresses are tried. */
    None = 0,

    /** Retransmission discovery means that we ignore known addresses and start a query for 5s. */
    RetransmissionDiscovery = 1,

    /** Timed discovery means that the device is discovered for a defined timeframe, including known addresses. */
    TimedDiscovery = 2,

    /** Full discovery means that the device is discovered until it is found, excluding known addresses. */
    FullDiscovery = 3,
}

/**
 * Configuration for discovering when establishing a peer connection.
 */
export interface DiscoveryOptions {
    discoveryType?: NodeDiscoveryType;
    timeoutSeconds?: number;
    discoveryData?: DiscoveryData;
}

export interface KnownNodeDetails {
    operationalAddress?: ServerAddressIp;
    discoveryData?: DiscoveryData;
    basicInformationData?: Record<string, SupportedStorageTypes>;
}

/**
 * Performs discovery of other nodes.
 */
export class NodeFinder {
    readonly #fabrics: FabricManager;
    readonly #scanners: ScannerSet;
    readonly #knownNodes = new NodeAddressMap<KnownNodeDetails>();

    constructor(context: NodeFinderContext) {
        const { fabrics, scanners } = context;

        this.#fabrics = fabrics;
        this.#scanners = scanners;
    }

    [Environmental.create](env: Environment) {
        const instance = new NodeFinder({
            fabrics: env.get(FabricManager),
            scanners: env.get(ScannerSet),
        });
        env.set(NodeFinder, instance);
        return instance;
    }

    /**
     * The scanners this NodeFinder supports.  Scanners may be added or removed at any time.
     */
    get scanners() {
        return this.#scanners;
    }

    /**
     * Determine if we have located a particular address.
     */
    isKnown(address: NodeAddress) {
        return this.#knownNodes.has(address);
    }

    /**
     * Obtain an operational address for a logical address from cache.
     */
    knownOperationalAddressFor(address: NodeAddress) {
        const mdnsScanner = this.#scanners.scannerFor(ChannelType.UDP) as MdnsScanner | undefined;
        const discoveredAddresses = mdnsScanner?.getDiscoveredOperationalDevice(
            this.#fabrics.for(address),
            address.nodeId,
        );
        const lastKnownAddress = this.#getLastOperationalAddress(address);

        if (
            lastKnownAddress !== undefined &&
            discoveredAddresses !== undefined &&
            discoveredAddresses.addresses.some(
                ({ ip, port }) => ip === lastKnownAddress.ip && port === lastKnownAddress.port,
            )
        ) {
            // We found the same address, so assume somehow cached response because we just tried to connect,
            // and it failed, so clear list
            discoveredAddresses.addresses.length = 0;
        }

        // Try to use first result for one last try before we need to reconnect
        return discoveredAddresses?.addresses[0];
    }

    async #setOperationalDeviceData(
        address: NodeAddress,
        operationalServerAddress: ServerAddressIp,
        discoveryData?: DiscoveryData,
    ) {
        const nodeDetails = this.#knownNodes.get(address) ?? {};
        nodeDetails.operationalAddress = operationalServerAddress;
        if (discoveryData !== undefined) {
            nodeDetails.discoveryData = {
                ...nodeDetails.discoveryData,
                ...discoveryData,
            };
        }
        this.#knownNodes.set(address, nodeDetails);
        await this.storeCommissionedNodes();
    }

    #getLastOperationalAddress(address: NodeAddress) {
        return this.#knownNodes.get(address)?.operationalAddress;
    }
}
