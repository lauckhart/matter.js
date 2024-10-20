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
    DiscoveryAndCommissioningOptions,
    DiscoveryData,
    Fabric,
    FabricAuthority,
    FabricManager,
    PeerAddress,
    SessionParameters,
} from "#protocol";
import { DeviceTypeId, DiscoveryCapabilitiesBitmap, NodeId, TypeFromPartialBitSchema, VendorId } from "#types";

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

        const commissionerOptions: DiscoveryAndCommissioningOptions = {
            fabric,
            discovery: { commissionableDevice, knownAddress },
            passcode: options.passcode,
        };

        const commissioner = this.endpoint.env.get(ControllerCommissioner);

        const address = await commissioner.commissionWithDiscovery(commissionerOptions);
        this.state.peerAddress = address;

        return node;
    }

    get discoveryData(): DiscoveryData {
        const result: DiscoveryData = {};

        const {
            vendorId,
            productId,
            deviceType,
            deviceName,
            rotatingIdentifier,
            pairingHint,
            pairingInstructions,
            sessionParameters,
            tcpSupport,
            longIdleTimeOperatingMode,
        } = this.state;

        if (vendorId !== undefined) {
            if (productId !== undefined) {
                result.VP = `${vendorId}+${productId}`;
            } else {
                result.VP = vendorId.toString();
            }
        }

        if (deviceType !== undefined) {
            result.DT = deviceType;
        }

        if (deviceName !== undefined) {
            result.DN = deviceName;
        }

        if (rotatingIdentifier !== undefined) {
            result.RI = rotatingIdentifier;
        }

        if (pairingHint !== undefined) {
            result.PH = pairingHint;
        }

        if (pairingInstructions !== undefined) {
            result.PI = pairingInstructions;
        }

        if (sessionParameters !== undefined) {
            const { idleIntervalMs, activeIntervalMs, activeThresholdMs } = sessionParameters;

            if (idleIntervalMs !== undefined) {
                result.SII = idleIntervalMs;
            }

            if (activeIntervalMs !== undefined) {
                result.SAI = activeIntervalMs;
            }

            if (activeThresholdMs !== undefined) {
                result.SAT = activeThresholdMs;
            }
        }

        if (tcpSupport !== undefined) {
            result.T = tcpSupport;
        }

        if (longIdleTimeOperatingMode !== undefined) {
            result.ICD = 1;
        }

        return result;
    }

    set discoveryData(data: DiscoveryData) {
        const { VP, DT, DN, RI, PH, PI, SII, SAI, SAT, T, ICD } = data;

        if (VP !== undefined) {
            const [vendor, product] = VP.split("+").map(Number.parseInt);

            this.state.vendorId = Number.isNaN(vendor) ? undefined : VendorId(vendor);
            this.state.productId = Number.isNaN(product) ? undefined : VendorId(vendor);
        }

        let sessionParameters: Partial<SessionParameters> | undefined;
        if (SII !== undefined) {
            (sessionParameters ??= {}).idleIntervalMs = SII;
        }
        if (SAI !== undefined) {
            (sessionParameters ??= {}).activeIntervalMs = SAI;
        }
        if (SAT !== undefined) {
            (sessionParameters ??= {}).activeThresholdMs = SAT;
        }
        this.state.sessionParameters = sessionParameters;

        this.state.deviceType = DT === undefined ? undefined : DeviceTypeId(DT);
        this.state.deviceName = DN;
        this.state.rotatingIdentifier = RI;
        this.state.pairingHint = PH;
        this.state.pairingInstructions = PI;
        this.state.tcpSupport = T;
        this.state.longIdleTimeOperatingMode = ICD === undefined ? undefined : ICD === 1;
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
         * The peer's session parameters.
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
}
