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
    CommissionableDevice,
    CommissionableDeviceIdentifiers,
    ControllerCommissioner,
    DiscoveryData,
    Fabric,
    FabricAuthority,
    FabricManager,
    PeerAddress,
    PeerCommissioningOptions,
} from "#protocol";
import { NodeId } from "#types";

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

        const address = await commissioner.commission(commissionerOptions);
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
        peerAddress?: PeerAddress;
        operationalAddresses?: ServerAddress[];
        discoveryAddress?: CommissionableDevice;
        discoveryPayload?: DiscoveryData;
        discoveryFilters?: CommissionableDeviceIdentifiers[];
    }

    export interface CommissioningOptions {
        passcode: number;
        nodeId?: NodeId;
        fabricAuthority?: FabricAuthority;
        fabric?: Fabric;
    }
}
