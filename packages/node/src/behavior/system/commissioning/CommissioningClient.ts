/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Behavior } from "#behavior/Behavior.js";
import { ImplementationError, NotImplementedError, ServerAddress } from "#general";
import { DatatypeModel, FieldElement } from "#model";
import { ClientNode } from "#node/ClientNode.js";
import { Node } from "#node/Node.js";
import {
    CommissionableDevice,
    CommissioningMode,
    ControllerCommissioner,
    DiscoveryData,
    Fabric,
    FabricAuthority,
    FabricManager,
    LocatedNodeCommissioningOptions,
    OperationalDevice,
    PeerAddress,
    SessionParameters,
} from "#protocol";
import { DeviceTypeId, DiscoveryCapabilitiesBitmap, NodeId, TypeFromPartialBitSchema, VendorId } from "#types";
import { RemoteDescriptor } from "./RemoteDescriptor.js";

/**
 * Client functionality related to commissioning.
 *
 * Updates node state based on commissioning status and commissions new nodes.
 */
export class CommissioningClient extends Behavior {
    declare state: CommissioningClient.State;

    static override readonly id = "commissioning";
    override initialize({ descriptor }: { descriptor?: CommissioningClient.NodeDescriptor }) {
        this.descriptor = descriptor;
        this.reactTo((this.endpoint as Node).lifecycle.partsReady, this.#initializeNode);
    }

    async commission(options: CommissioningClient.CommissioningOptions) {
        const node = this.endpoint as ClientNode;

        if (this.state.peerAddress !== undefined) {
            throw new ImplementationError(`${node} is already commissioned`);
        }

        const fabricAuthority = options.fabricAuthority || this.env.get(FabricAuthority);
        let { fabric } = options;
        if (fabric === undefined) {
            if (this.context.fabric === undefined) {
                fabric = await fabricAuthority.defaultFabric();
            } else {
                fabric = node.env.get(FabricManager).for(this.context.fabric);
            }
        }
        const { nodeId, passcode } = options;

        if (!fabricAuthority.hasControlOf(fabric)) {
            throw new ImplementationError(
                `Cannot commission ${node} because we do control fabric ${fabric.fabricIndex}`,
            );
        }

        const addresses = this.state.addresses;
        if (!addresses?.length) {
            throw new ImplementationError(`Cannot commission ${node} because the node has not been located`);
        }

        const commissioner = this.endpoint.env.get(ControllerCommissioner);

        const commissioningOptions: LocatedNodeCommissioningOptions = {
            addresses,
            fabric,
            nodeId,
            passcode,
            discoveryData: this.descriptor,
        };

        if (this.performCaseCommissioning !== CommissioningClient.prototype.performCaseCommissioning) {
            commissioningOptions.performCaseCommissioning = this.performCaseCommissioning.bind(this);
        }

        const address = await commissioner.commission(commissioningOptions);
        this.state.peerAddress = address;

        return node;
    }

    /**
     * Override to implement CASE commissioning yourself.
     */
    protected async performCaseCommissioning(_address: PeerAddress, _discoveryData?: DiscoveryData) {
        throw new NotImplementedError();
    }

    get descriptor() {
        return RemoteDescriptor.fromState(this.state);
    }

    set descriptor(descriptor: CommissioningClient.NodeDescriptor | undefined) {
        RemoteDescriptor.toState(descriptor, this.state);
    }

    #initializeNode() {
        const endpoint = this.endpoint as ClientNode;
        endpoint.lifecycle.initialized.emit(this.state.peerAddress !== undefined);
    }

    /**
     * Define logical schema to enable runtime validation and make fields persistent.
     */
    static override readonly schema = new DatatypeModel({
        name: "CommissioningState",
        type: "struct",

        children: [
            FieldElement({
                name: "peerAddress",
                type: "struct",
                quality: "N",
                children: [
                    FieldElement({ name: "fabricIndex", type: "fabric-id" }),
                    FieldElement({ name: "nodeId", type: "node-id" }),
                ],
            }),
            FieldElement({
                name: "addresses",
                type: "array",
                quality: "N",
                children: [
                    FieldElement({
                        name: "entry",
                        type: "struct",
                        children: [
                            FieldElement({ name: "type", type: "string" }),
                            FieldElement({ name: "ip", type: "string" }),
                            FieldElement({ name: "port", type: "uint16" }),
                            FieldElement({ name: "peripheralAddress", type: "string" }),
                        ],
                    }),
                ],
            }),
            FieldElement({ name: "hostname", type: "string", quality: "N" }),
            FieldElement({ name: "bleAddress", type: "string", quality: "N" }),
            FieldElement({ name: "discriminator", type: "uint16", quality: "N" }),
            FieldElement({ name: "commissioningMode", type: "uint8", quality: "N" }),
            FieldElement({ name: "vendorId", type: "vendor-id", quality: "N" }),
            FieldElement({ name: "productId", type: "uint16", quality: "N" }),
            FieldElement({ name: "deviceType", type: "uint16", quality: "N" }),
            FieldElement({ name: "deviceName", type: "string", quality: "N" }),
            FieldElement({ name: "rotatingIdentifier", type: "string", quality: "N" }),
            FieldElement({ name: "pairingHint", type: "string", quality: "N" }),
            FieldElement({ name: "pairingInstructions", type: "string", quality: "N" }),
            FieldElement({
                name: "sessionParameters",
                type: "struct",
                quality: "N",
                children: [
                    FieldElement({ name: "idleIntervalMs", type: "uint32", constraint: "max 3600000" }),
                    FieldElement({ name: "activeIntervalMs", type: "uint32", constraint: "max 3600000" }),
                    FieldElement({ name: "activeThresholdMs", type: "uint16" }),
                ],
            }),
            FieldElement({ name: "tcpSupport", type: "uint8", quality: "N" }),
            FieldElement({ name: "longIdleOperatingMode", type: "boolean", quality: "N" }),
        ],
    });
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
        addresses?: ServerAddress[];

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
         * The remote node's session parameters.
         */
        sessionParameters?: Partial<SessionParameters>;

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

        /**
         * Discovery capabilities to use for discovery. These are included in the QR code normally and defined if BLE
         * is supported for initial commissioning.
         */
        discoveryCapabilities?: TypeFromPartialBitSchema<typeof DiscoveryCapabilitiesBitmap>;
    }

    /**
     * Device descriptor used by lower-level components.
     */
    export type NodeDescriptor = Partial<OperationalDevice | CommissionableDevice>;
}
