/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Behavior } from "#behavior/Behavior.js";
import { ImplementationError, ServerAddress } from "#general";
import { ClientNode } from "#node/ClientNode.js";
import { Node } from "#node/Node.js";
import {
    CommissioningMode,
    ControllerCommissioner,
    Fabric,
    FabricAuthority,
    FabricManager,
    PeerAddress,
    PeerCommissioningOptions,
} from "#protocol";
import { DeviceTypeId, NodeId, VendorId } from "#types";

/**
 * Client functionality related to commissioning.
 *
 * Updates node state based on commissioning status and commissions new nodes.
 */
export class CommissioningClient extends Behavior {
    declare state: CommissioningClient.State;

    static override readonly id = "commissioning";
    override initialize() {
        this.reactTo((this.endpoint as Node).lifecycle.partsReady, this.#initializeNode);
    }

    async commission(options: CommissioningClient.CommissioningOptions) {
        const node = this.endpoint as ClientNode;

        if (this.state.peerAddress !== undefined) {
            throw new ImplementationError(`${node} is already commissioned`);
        }

        const fabricAuthority = options.fabricAuthority || this.env.get(FabricAuthority);
        let fabric = options.fabric;
        if (fabric === undefined) {
            if (this.context.fabric === undefined) {
                fabric = await fabricAuthority.defaultFabric();
            } else {
                fabric = node.env.get(FabricManager).for(this.context.fabric);
            }
        }

        if (!fabricAuthority.hasControlOf(fabric)) {
            throw new ImplementationError(
                `Cannot commission ${node} because we do control fabric ${fabric.fabricIndex}`,
            );
        }

        const commissionableDevice = this.state.discoveryAddress;
        if (commissionableDevice === undefined) {
            throw new ImplementationError(`Cannot commission ${node} because the node has not been located`);
        }

        const knownAddress = this.state.operationalAddresses?.find(addr => addr.type === "udp");

        const commissionerOptions: PeerCommissioningOptions = {
            fabric,
            discovery: { commissionableDevice, knownAddress },
            passcode: options.passcode,
        };

        const commissioner = this.endpoint.env.get(ControllerCommissioner);

        const address = await commissioner.commissionWithDiscovery(commissionerOptions);
        this.state.peerAddress = address;

        return node;
    }

    #initializeNode() {
        const endpoint = this.endpoint as ClientNode;
        endpoint.lifecycle.initialized.emit(this.state.peerAddress !== undefined);
    }
}

export namespace CommissioningClient {
    export class State {
        /**
         * Fabric index and node ID for paired peers.  If this is undefined the node is uncommissioned.
         */
        peerAddress?: PeerAddress;

        /**
         * Known network addresses for the device.  If this is undefined the node has not been located on any network
         * interface.
         */
        operationalAddresses?: ServerAddress[];

        /**
         * IP network name.
         */
        hostname?: string;

        /**
         * BLE MAC address.
         */
        bleAddress?: string;

        /**
         * The device's long discriminator.
         */
        discriminator?: number;

        /**
         * The last know commissioning mode of the device.
         */
        commissioningMode?: CommissioningMode;

        /**
         * Vendor.
         */
        vendorId?: VendorId;

        /**
         * Product.
         */
        productId?: number;

        /**
         * Advertised device type.
         */
        deviceType?: DeviceTypeId;

        /**
         * The advertised device name specified by the user.
         */
        deviceName?: string;

        /**
         * An optional manufacturer-specific unique rotating ID for uniquely identifying the device.
         */
        rotatingIdentifier?: string;

        /**
         * A bitmap indicating how to transition the device to commissioning mode from its current state.
         */
        pairingHint?: number;

        /**
         * Textual pairing instructions associated with pairing hint.
         */
        pairingInstructions?: string;

        /**
         * The retransmission interval for idle nodes in milliseconds.
         */
        sessionIdleInterval?: number;

        /**
         * The retransmission interval for active nodes in milliseconds.
         */
        sessionActiveInterval?: number;

        /**
         * The length of the node's active window following network activity.
         */
        sessionActiveThreshold?: number;

        /**
         * TCP support bitmap.
         */
        tcpSupport?: number;

        /**
         * Indicates whether node is ICD with a slow (15 s+) polling interval.
         */
        longIdleTimeOperatingMode?: boolean;
    }

    /**
     * Options that control commissioning.
     */
    export interface CommissioningOptions {
        /**
         * The device's passcode.
         */
        passcode: number;

        /**
         * The ID to assign the node during commissioning.  By default the node receives the next available ID.
         */
        nodeId?: NodeId;

        /**
         * The fabric the joins upon commissioning.  Defaults to the default fabric of the assigned
         * {@link FabricAuthority}.
         */
        fabric?: Fabric;

        /**
         * The authority controlling the commissioning fabric.  Defaults to the {@link FabricAuthority} of the local
         * environment.
         */
        fabricAuthority?: FabricAuthority;

        discoveryCapabilities?: 
    }
}
