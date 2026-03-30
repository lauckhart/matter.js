/**
 * @license
 * Copyright 2022-2026 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Behavior } from "#behavior/Behavior.js";
import { BasicInformationBehavior } from "#behaviors/basic-information";
import { Node } from "#node/Node.js";
import type { ServerNode } from "#node/ServerNode.js";
import { IdentityService } from "#node/server/IdentityService.js";
import {
    ConnectionlessTransportSet,
    Crypto,
    DnsRecordType,
    ImplementationError,
    Logger,
    Seconds,
    SharedEnvironmentServices,
} from "@matter/general";
import { method, response, string } from "@matter/model";
import {
    Ble,
    ClientSubscriptions,
    CommissionableDeviceIdentifiers,
    Fabric,
    FabricAuthority,
    FabricAuthorityConfiguration,
    FabricManager,
    MdnsClient,
    MdnsScannerTargetCriteria,
    MdnsService,
    PeerAddress,
    PeerSet,
    Scanner,
    ScannerSet,
    getFabricQname,
} from "@matter/protocol";
import { CaseAuthenticatedTag, FabricId, FabricIndex, NodeId, VendorId } from "@matter/types";
import { CommissioningServer } from "../commissioning/CommissioningServer.js";
import { NetworkServer } from "../network/NetworkServer.js";
import { ControllerCommands } from "./ControllerCommands.js";
import { ActiveDiscoveries } from "./discovery/ActiveDiscoveries.js";
import { CommissioningDiscovery } from "./discovery/CommissioningDiscovery.js";
import { ContinuousDiscovery } from "./discovery/ContinuousDiscovery.js";
import type { Discovery } from "./discovery/Discovery.js";

const logger = Logger.get("ControllerBehavior");

/**
 * Node controller functionality.
 *
 * For our purposes, a "controller" is a node that supports commissioning of remote devices.
 *
 * This class initializes components required for controller usage and tracks active discoveries.  Discovery logic
 * resides in {@link Discovery} and commissioning logic in {@link CommissioningClient}.
 */
export class ControllerBehavior extends Behavior {
    static override readonly id = "controller";

    declare internal: ControllerBehavior.Internal;
    declare readonly state: ControllerBehavior.State;

    override async initialize() {
        if (this.state.adminFabricLabel === undefined || this.state.adminFabricLabel === "") {
            throw new ImplementationError("adminFabricLabel must be set for ControllerBehavior");
        }

        const node = Node.forEndpoint(this.endpoint);

        // Configure discovery transports
        if (this.state.ip === undefined) {
            this.state.ip = true;
        }
        if (this.state.ip !== false) {
            this.internal.services = this.env.asDependent();
            this.env.get(ScannerSet).add((await this.internal.services.load(MdnsService)).client);
        }

        if (this.state.ble === undefined) {
            this.state.ble = (await this.agent.load(NetworkServer)).state.ble;
        }
        if (this.state.ble !== false) {
            try {
                this.env.get(ScannerSet).add(this.env.get(Ble).scanner);
            } catch (error) {
                logger.error("Disabling BLE due to initialization error:", error);
                this.state.ble = false;
            }
        }

        // Ensure the fabric authority is fully initialized
        await this.env.load(FabricAuthority);

        // "Automatic" controller mode - disable commissioning if node is not otherwise configured as a commissionable
        // device
        const commissioning = this.agent.get(CommissioningServer);
        if (commissioning.state.enabled === undefined) {
            const totalFabrics = this.env.get(FabricManager).length;
            const controlledFabrics = this.env.get(FabricAuthority).fabrics.length;
            if (controlledFabrics === totalFabrics) {
                commissioning.state.enabled = false;
            }
        }

        this.reactTo(node.lifecycle.online, this.#nodeOnline);
        if (node.lifecycle.isOnline) {
            await this.#nodeOnline();
        }
        this.reactTo(node.lifecycle.goingOffline, this.#nodeGoingOffline);

        // Mark addresses in use (or not) based on known peers
        const identity = this.env.get(IdentityService);
        const peers = this.env.get(PeerSet);
        this.reactTo(peers.added, peer => identity.reservePeerAddress(peer.address));
        this.reactTo(peers.deleted, peer => identity.releasePeerAddress(peer.address));
    }

    /**
     * Discover and commission a device in one shot.
     *
     * Returns the local node ID (e.g. "node0") of the newly commissioned node.
     */
    @method(ControllerCommands.CommissionRequest)
    @response(string)
    async commission(request: ControllerCommands.CommissionRequest): Promise<string> {
        if (request.passcode === undefined && request.pairingCode === undefined) {
            throw new ImplementationError("Either passcode or pairingCode is required");
        }

        const node = Node.forEndpoint(this.endpoint) as ServerNode;

        const options: CommissioningDiscovery.Options = {
            ...(request.passcode !== undefined
                ? { passcode: request.passcode }
                : { pairingCode: request.pairingCode! }),
            ...(request.discriminator !== undefined && { discriminator: request.discriminator }),
            ...(request.timeout !== undefined && { timeout: Seconds(request.timeout) }),
            ...(request.id !== undefined && { id: request.id }),
            abort: this.context.abort,
        };

        const clientNode = await new CommissioningDiscovery(node, options);
        return clientNode.id;
    }

    /**
     * Remove a commissioned node from the fabric, communicating with the device.
     */
    @method(ControllerCommands.NodeRequest)
    async decommission(request: ControllerCommands.NodeRequest): Promise<void> {
        const node = Node.forEndpoint(this.endpoint) as ServerNode;
        const clientNode = node.peers.get(request.id);
        if (clientNode === undefined) {
            throw new ImplementationError(`Node "${request.id}" not found`);
        }
        await clientNode.decommission();
    }

    /**
     * Force-remove a node locally without talking to the device.
     */
    @method(ControllerCommands.NodeRequest)
    async delete(request: ControllerCommands.NodeRequest): Promise<void> {
        const node = Node.forEndpoint(this.endpoint) as ServerNode;
        const clientNode = node.peers.get(request.id);
        if (clientNode === undefined) {
            throw new ImplementationError(`Node "${request.id}" not found`);
        }
        await clientNode.delete();
    }

    /**
     * Start indefinite discovery; clients detect results by watching peers.
     *
     * Calling again replaces previous discovery (stops old, starts new).
     */
    @method(ControllerCommands.DiscoverRequest)
    async discover(request?: ControllerCommands.DiscoverRequest): Promise<void> {
        const node = Node.forEndpoint(this.endpoint) as ServerNode;

        // Stop any existing discovery
        this.internal.activeDiscovery?.stop();
        this.internal.activeDiscovery = undefined;

        // Build the filter identifier
        let identifier: CommissionableDeviceIdentifiers = {};
        if (request) {
            if (request.instanceId !== undefined) {
                identifier = { instanceId: request.instanceId };
            } else if (request.longDiscriminator !== undefined) {
                identifier = { longDiscriminator: request.longDiscriminator };
            } else if (request.shortDiscriminator !== undefined) {
                identifier = { shortDiscriminator: request.shortDiscriminator };
            } else if (request.vendorId !== undefined) {
                identifier = {
                    vendorId: VendorId(request.vendorId),
                    ...(request.productId !== undefined && { productId: request.productId }),
                };
            } else if (request.deviceType !== undefined) {
                identifier = { deviceType: request.deviceType };
            } else if (request.productId !== undefined) {
                identifier = { productId: request.productId };
            }
        }

        const options: Discovery.Options = {
            ...identifier,
            ...(request?.timeout !== undefined && { timeout: Seconds(request.timeout) }),
        };

        const discovery = new ContinuousDiscovery(node, options);
        this.internal.activeDiscovery = discovery;

        // Clean up the reference when discovery settles
        discovery.then(
            () => {
                if (this.internal.activeDiscovery === discovery) {
                    this.internal.activeDiscovery = undefined;
                }
            },
            () => {
                if (this.internal.activeDiscovery === discovery) {
                    this.internal.activeDiscovery = undefined;
                }
            },
        );

        // If we have an abort signal, wire it to stop discovery
        const abort = this.context.abort;
        if (abort) {
            if (abort.aborted) {
                discovery.stop();
            } else {
                abort.addEventListener("abort", () => discovery.stop(), { once: true });
            }
        }
    }

    /**
     * Stop active discovery.
     */
    @method()
    async stopDiscovery(): Promise<void> {
        this.internal.activeDiscovery?.stop();
        this.internal.activeDiscovery = undefined;
    }

    /**
     * Allocate a new node address in the given fabric.
     */
    async allocatePeerAddress(fabricIndex: FabricIndex, nodeId?: NodeId) {
        const identity = this.env.get(IdentityService);
        let address: PeerAddress | undefined;

        try {
            // Allocate address in a separate transaction we can commit as soon as it's reserved
            return await this.endpoint.act(async function (agent) {
                const controller = agent.get(ControllerBehavior);

                // Lock early to act as semaphor for address assignment
                await agent.context.transaction.addResources(controller);
                await agent.context.transaction.begin();

                const useSequentialIds = controller.state.nodeIdAssignment !== "random";
                let nextNodeId: NodeId = controller.state.nextNodeId ?? NodeId(1);

                while (nodeId === undefined) {
                    if (useSequentialIds) {
                        nodeId = nextNodeId;
                        nextNodeId++;
                    } else {
                        nodeId = NodeId.randomOperationalNodeId(controller.env.get(Crypto));
                    }
                    if (identity.peerAddressInUse({ fabricIndex, nodeId })) {
                        nodeId = undefined;
                    }
                }

                address = PeerAddress({ fabricIndex, nodeId });

                // Reserve prior to commit.  We then release below if commit fails
                identity.reservePeerAddress(address);

                if (useSequentialIds) {
                    controller.state.nextNodeId = nextNodeId;
                }

                return address;
            });
        } catch (e) {
            // If there's an error but we have an address, ensure it's not allocated
            if (address) {
                identity.releasePeerAddress(address);
            }

            throw e;
        }
    }

    override async [Symbol.asyncDispose]() {
        this.internal.activeDiscovery?.stop();
        this.internal.activeDiscovery = undefined;
        await this.env.close(ActiveDiscoveries);
        this.env.delete(FabricAuthority);
        this.env.delete(ScannerSet);
        await this.internal.services?.close();
    }

    get fabricAuthorityConfig(): FabricAuthorityConfiguration {
        const biState = this.endpoint.stateOf(BasicInformationBehavior);
        return {
            adminVendorId: biState.vendorId,
            ...this.state,
        };
    }

    async #nodeOnline() {
        // Configure network connections
        const netTransports = this.env.get(ConnectionlessTransportSet);
        if (this.state.ble) {
            // no try-catch needed because we already added the scanner in initialize()
            netTransports.add(this.env.get(Ble).centralInterface);
        }

        // Add each pre-existing fabric to discovery criteria and update fabric label if needed
        const authority = this.env.get(FabricAuthority);
        for (const fabric of authority.fabrics) {
            if (fabric.label !== this.state.adminFabricLabel) {
                await fabric.setLabel(this.state.adminFabricLabel);
            }
            this.#enableScanningForFabric(fabric);
        }
        this.reactTo(authority.fabricAdded, this.#enableScanningForFabric);

        // Configure each MDNS scanner with criteria
        const scanners = this.env.get(ScannerSet);
        for (const scanner of scanners) {
            this.#enableScanningForScanner(scanner);
        }
        this.reactTo(scanners.added, this.#enableScanningForScanner);
    }

    async #nodeGoingOffline() {
        await this.env.close(ClientSubscriptions);

        // Configure each MDNS scanner with criteria
        const scanners = this.env.get(ScannerSet);
        for (const scanner of scanners) {
            if (scanner instanceof MdnsClient) {
                scanner.targetCriteriaProviders.delete(this.internal.mdnsTargetCriteria);
            }
        }

        const netTransports = this.env.get(ConnectionlessTransportSet);
        if (this.state.ble) {
            netTransports.delete(this.env.get(Ble).centralInterface);
        }
    }

    #enableScanningForFabric(fabric: Fabric) {
        // Send a one-time wildcard query via DnssdNames so existing operational nodes on this fabric respond and
        // populate IpService for known peers
        if (this.internal.services) {
            const names = this.env.get(MdnsService).names;
            names.solicitor.solicit({
                name: names.get(getFabricQname(fabric.globalId)),
                recordTypes: [DnsRecordType.PTR],
            });
        }
    }

    #enableScanningForScanner(scanner: Scanner) {
        if (!(scanner instanceof MdnsClient)) {
            return;
        }
        scanner.targetCriteriaProviders.add(this.internal.mdnsTargetCriteria);
    }
}

export namespace ControllerBehavior {
    export class Internal {
        /**
         * MDNS scanner criteria for each controlled fabric (keyed by operational ID).
         */
        mdnsTargetCriteria: MdnsScannerTargetCriteria = {
            commissionable: true,
        };

        services?: SharedEnvironmentServices;

        activeDiscovery?: ContinuousDiscovery;
    }

    export class State {
        /**
         * Set to false to disable scanning on BLE.
         *
         * By default the controller scans via BLE if BLE is available.
         */
        ble?: boolean = undefined;

        /**
         * Set to false to disable scanning on IP networks.
         *
         * By default the controller always scans on IP networks.
         */
        ip?: boolean = undefined;

        /**
         * Node ID assignment strategy.
         */
        nodeIdAssignment: "sequential" | "random" = "sequential";

        /**
         * Next assigned ID when {@link nodeIdAssignment} is "sequential".
         *
         * matter.js increments this value automatically after allocating a new node ID.  This means that the
         * "sequential" strategy does not reuse IDs from decommissioned nodes.
         *
         * If there is a conflict with an existing ID, matter.js increments this value until it identifies a free ID.
         */
        nextNodeId?: NodeId;

        /**
         * Contains the label of the admin fabric which is set for all commissioned devices
         */
        adminFabricLabel = "matter.js";

        /**
         * Contains the FabricId of the admin fabric when a defined number needs to be used because special Certificates
         * are used.
         * If not provided, a random FabricId will be generated.
         */
        adminFabricId?: FabricId = undefined;

        /**
         * Contains the NodeId of the admin node when a defined number needs to be used because special Certificates
         * are used.
         * If not provided, a random NodeId will be generated.
         */
        adminNodeId?: NodeId = undefined;

        /**
         * Case Authenticated Tags to be used to commission and connect to devices.
         */
        caseAuthenticatedTags?: CaseAuthenticatedTag[] = undefined;
    }
}
