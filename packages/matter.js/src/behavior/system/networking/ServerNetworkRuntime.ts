/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { MatterDevice } from "../../../MatterDevice.js";
import { Ble } from "../../../ble/Ble.js";
import { InstanceBroadcaster } from "../../../common/InstanceBroadcaster.js";
import { ImplementationError, InternalError } from "../../../common/MatterError.js";
import { TransportInterface } from "../../../common/TransportInterface.js";
import { FabricIndex } from "../../../datatype/FabricIndex.js";
import { EndpointServer } from "../../../endpoint/EndpointServer.js";
import { MdnsService } from "../../../environment/MdnsService.js";
import { MdnsInstanceBroadcaster } from "../../../mdns/MdnsInstanceBroadcaster.js";
import { Network } from "../../../net/Network.js";
import { UdpInterface } from "../../../net/UdpInterface.js";
import type { ServerNode } from "../../../node/ServerNode.js";
import { TransactionalInteractionServer } from "../../../node/server/TransactionalInteractionServer.js";
import { ServerStore } from "../../../node/server/storage/ServerStore.js";
import { NetworkRuntime } from "./NetworkRuntime.js";

/**
 * Handles network functionality for {@link NodeServer}.
 */
export class ServerNetworkRuntime extends NetworkRuntime {
    #rootServer?: EndpointServer;
    #interactionServer?: TransactionalInteractionServer;
    #matterDevice?: MatterDevice;
    #mdnsBroadcaster?: MdnsInstanceBroadcaster;
    #primaryNetInterface?: UdpInterface;
    #bleBroadcaster?: InstanceBroadcaster;
    #bleTransport?: TransportInterface;
    #commissionedListener?: () => void;

    override get owner() {
        return super.owner as ServerNode;
    }

    /**
     * Access the {@link EndpointServer} for the root endpoint.
     */
    get rootServer() {
        if (!this.#rootServer) {
            this.#rootServer = EndpointServer.forEndpoint(this.owner);
        }
        return this.#rootServer;
    }

    /**
     * Access the MDNS broadcaster for the node.
     */
    get mdnsBroadcaster() {
        if (!this.#mdnsBroadcaster) {
            this.#mdnsBroadcaster = this.owner.env
                .get(MdnsService)
                .createInstanceBroadcaster(this.owner.state.network.operationalPort);
        }
        return this.#mdnsBroadcaster;
    }

    async openAdvertisementWindow() {
        if (!this.#matterDevice) {
            throw new InternalError("Server runtime device instance is missing");
        }

        return this.#matterDevice.startAnnouncement();
    }

    async announceNow() {
        if (!this.#matterDevice) {
            throw new InternalError("Server runtime device instance is missing");
        }

        // TODO - see comment in startAdvertising
        await this.#matterDevice.announce(true);
    }

    /**
     * The IPv6 {@link UdpInterface}.  We create this interface independently of the server so the OS can select a port
     * before we are fully online.
     */
    protected async getPrimaryNetInterface() {
        if (this.#primaryNetInterface === undefined) {
            const port = this.owner.state.network.port;
            this.#primaryNetInterface = await UdpInterface.create(
                this.owner.env.get(Network),
                "udp6",
                port ? port : undefined,
                this.owner.state.network.listeningAddressIpv6,
            );

            await this.owner.set({ network: { operationalPort: this.#primaryNetInterface.port } });
        }
        return this.#primaryNetInterface;
    }

    /**
     * A BLE broadcaster.
     */
    protected get bleBroadcaster() {
        if (this.#bleBroadcaster === undefined) {
            const bleData = this.owner.state.commissioning.additionalBleAdvertisementData;
            this.#bleBroadcaster = Ble.get().getBleBroadcaster(bleData);
        }
        return this.#bleBroadcaster;
    }

    /**
     * A BLE transport.
     */
    protected get bleTransport() {
        if (this.#bleTransport === undefined) {
            this.#bleTransport = Ble.get().getBlePeripheralInterface();
        }
        return this.#bleTransport;
    }

    /**
     * Add transports to the {@link MatterDevice}.
     */
    protected async addTransports(device: MatterDevice) {
        device.addTransportInterface(await this.getPrimaryNetInterface());

        const netconf = this.owner.state.network;

        if (netconf.ipv4) {
            device.addTransportInterface(
                await UdpInterface.create(
                    this.owner.env.get(Network),
                    "udp4",
                    netconf.port,
                    netconf.listeningAddressIpv4,
                ),
            );
        }

        if (netconf.ble) {
            device.addTransportInterface(this.bleTransport);
        }
    }

    /**
     * Add broadcasters to the {@link MatterDevice}.
     */
    protected async addBroadcasters(device: MatterDevice) {
        const isCommissioned = !!this.#commissionedFabrics;

        let discoveryCapabilities = this.owner.state.network.discoveryCapabilities;

        if (isCommissioned) {
            // Already commissioned, only broadcast on network
            discoveryCapabilities = { onIpNetwork: true };
        }

        if (discoveryCapabilities.onIpNetwork) {
            device.addBroadcaster(this.mdnsBroadcaster);
        }

        if (discoveryCapabilities.ble) {
            device.addBroadcaster(this.bleBroadcaster);
        }
    }

    /**
     * On commission we turn off bluetooth and join the IP network if we haven't already.
     *
     * On decommission we're destroyed so don't need to handle that case.
     */
    enterCommissionedMode() {
        const mdnsBroadcaster = this.mdnsBroadcaster;
        if (!this.#matterDevice?.hasBroadcaster(mdnsBroadcaster)) {
            this.#matterDevice?.addBroadcaster(mdnsBroadcaster);
        }

        if (this.#bleBroadcaster) {
            this.owner.env.runtime.addWorker(this.#matterDevice?.deleteBroadcaster(this.#bleBroadcaster));
            this.#bleBroadcaster = undefined;
        }

        if (this.#bleTransport) {
            this.owner.env.runtime.addWorker(this.#matterDevice?.deleteTransportInterface(this.#bleTransport));
            this.#bleTransport = undefined;
        }
    }

    /**
     * Expose the internal InteractionServer for testing.
     */
    get interactionServer() {
        if (this.#interactionServer === undefined) {
            throw new ImplementationError("Interaction server is not available yet");
        }
        return this.#interactionServer;
    }

    get #commissionedFabrics() {
        return this.owner.state.operationalCredentials.commissionedFabrics;
    }

    override get operationalPort() {
        return this.#primaryNetInterface?.port ?? 0;
    }

    protected override async start() {
        const mdnsScanner = (await this.owner.env.load(MdnsService)).scanner;

        this.#interactionServer = new TransactionalInteractionServer(this.owner);

        const { sessionStorage, fabricStorage } = this.owner.env.get(ServerStore);

        this.#matterDevice = new MatterDevice(
            sessionStorage,
            fabricStorage,
            () => ({
                ...this.owner.state.commissioning,
                productDescription: this.owner.state.productDescription,
                ble: !!this.owner.state.network.ble,
            }),
            () => {
                if (this.#matterDevice?.fabricManager.getFabrics().length) {
                    this.enterCommissionedMode();
                }
            },
            (_fabricIndex: FabricIndex) => {
                // TODO - this is "sessionChangeCallback" - add root behavior for accessing sessions
            },
        )
            .addProtocolHandler(this.#interactionServer)
            .addScanner(mdnsScanner);

        // MatterDevice is the interface to a broad array of functionality that other modules require access to
        this.owner.env.set(MatterDevice, this.#matterDevice);

        await this.addTransports(this.#matterDevice);
        await this.addBroadcasters(this.#matterDevice);

        await this.owner.set({ network: { operationalPort: this.operationalPort } });
        if (this.owner.state.network.openAdvertisementWindowOnStartup) {
            await this.openAdvertisementWindow();
        }

        this.owner.lifecycle.commissioned.on((this.#commissionedListener = () => this.enterCommissionedMode()));
    }

    protected override async stop() {
        if (this.#matterDevice) {
            this.owner.env.delete(MatterDevice);

            await this.#matterDevice.stop();

            this.#matterDevice = undefined;
            this.#primaryNetInterface = undefined;
        }

        if (this.#primaryNetInterface) {
            // If we created the net interface but not the device we need to dispose ourselves
            await this.#primaryNetInterface.close();
            this.#primaryNetInterface = undefined;
        }

        await this.#interactionServer?.[Symbol.asyncDispose]();
        this.#interactionServer = undefined;

        await this.#rootServer?.[Symbol.asyncDispose]();
        this.#rootServer = undefined;

        if (this.#commissionedListener) {
            this.owner.lifecycle.commissioned.off(this.#commissionedListener);
        }
    }
}
