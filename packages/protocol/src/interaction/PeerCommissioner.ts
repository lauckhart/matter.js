/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { RootCertificateManager } from "#certificate/RootCertificateManager.js";
import { GeneralCommissioning } from "#clusters/general-commissioning";
import { NodeAddress } from "#common/NodeAddress.js";
import { CommissionableDevice, CommissionableDeviceIdentifiers, DiscoveryData, ScannerSet } from "#common/Scanner.js";
import { Fabric } from "#fabric/Fabric.js";
import {
    Channel,
    ChannelType,
    Environment,
    Environmental,
    isIPv6,
    Logger,
    NetInterfaceSet,
    NoResponseTimeoutError,
    ServerAddress,
} from "#general";
import { MdnsScanner } from "#mdns/MdnsScanner.js";
import { ControllerCommissioner, ControllerCommissioningOptions } from "#protocol/ControllerCommissioner.js";
import { ControllerDiscovery, PairRetransmissionLimitReachedError } from "#protocol/ControllerDiscovery.js";
import { ExchangeManager, ExchangeProvider, MessageChannel } from "#protocol/ExchangeManager.js";
import { RetransmissionLimitReachedError } from "#protocol/MessageExchange.js";
import { PaseClient } from "#session/index.js";
import { SessionManager } from "#session/SessionManager.js";
import { DiscoveryCapabilitiesBitmap, NodeId, SECURE_CHANNEL_PROTOCOL_ID, TypeFromPartialBitSchema } from "#types";
import { InteractionClient } from "./InteractionClient.js";
import { NodeDiscoveryType, PeerSet } from "./PeerSet.js";

const logger = Logger.get("PeerCommissioner");

/**
 * Options needed to commission a new node
 */
export type PeerCommissioningOptions = {
    /** The fabric into which to commission. */
    fabric: Fabric;

    /** Commission related options. */
    commissioning?: Partial<ControllerCommissioningOptions>;

    /** Discovery related options. */
    discovery: (
        | {
              /**
               * Device identifiers (Short or Long Discriminator, Product/Vendor-Ids, Device-type or a pre-discovered
               * instance Id, or "nothing" to discover all commissionable matter devices) to use for discovery.
               * If the property commissionableDevice is provided this property is ignored.
               */
              identifierData: CommissionableDeviceIdentifiers;
          }
        | {
              /**
               * Commissionable device object returned by a discovery run.
               * If this property is provided then identifierData and knownAddress are ignored.
               */
              commissionableDevice: CommissionableDevice;
          }
    ) & {
        /**
         * Discovery capabilities to use for discovery. These are included in the QR code normally and defined if BLE
         * is supported for initial commissioning.
         */
        discoveryCapabilities?: TypeFromPartialBitSchema<typeof DiscoveryCapabilitiesBitmap>;

        /**
         * Known address of the device to use for discovery. if this is set this will be tried first before discovering
         * the device.
         */
        knownAddress?: ServerAddress;

        /** Timeout in seconds for the discovery process. Default: 30 seconds */
        timeoutSeconds?: number;
    };

    /** Passcode to use for commissioning. */
    passcode: number;
};

/**
 * Interfaces {@link PeerCommissioner} with other components.
 */
export interface PeerCommissionerContext {
    peers: PeerSet;
    scanners: ScannerSet;
    netInterfaces: NetInterfaceSet;
    sessions: SessionManager;
    exchanges: ExchangeManager;
    certificates: RootCertificateManager;
}

/**
 * Commissions other nodes onto a fabric.
 */
export class PeerCommissioner {
    #context: PeerCommissionerContext;
    #paseClient: PaseClient;

    constructor(context: PeerCommissionerContext) {
        this.#context = context;
        this.#paseClient = new PaseClient(context.sessions);
    }

    [Environmental.create](env: Environment) {
        const instance = new PeerCommissioner({
            peers: env.get(PeerSet),
            scanners: env.get(ScannerSet),
            netInterfaces: env.get(NetInterfaceSet),
            sessions: env.get(SessionManager),
            exchanges: env.get(ExchangeManager),
            certificates: env.get(RootCertificateManager),
        });
        env.set(PeerCommissioner, instance);
        return instance;
    }

    async commission(options: PeerCommissioningOptions): Promise<NodeAddress> {
        const {
            commissioning,
            discovery: { timeoutSeconds = 30 },
            passcode,
        } = options;

        const commissioningOptions = {
            regulatoryLocation: GeneralCommissioning.RegulatoryLocationType.Outdoor, // Set to the most restrictive if relevant
            regulatoryCountryCode: "XX",
            ...commissioning,
        };

        const commissionableDevice =
            "commissionableDevice" in options.discovery ? options.discovery.commissionableDevice : undefined;
        let {
            discovery: { discoveryCapabilities = {}, knownAddress },
        } = options;
        let identifierData = "identifierData" in options.discovery ? options.discovery.identifierData : {};

        if (
            this.#context.scanners.hasScannerFor(ChannelType.UDP) &&
            this.#context.netInterfaces.hasInterfaceFor(ChannelType.UDP, "::") !== undefined
        ) {
            discoveryCapabilities.onIpNetwork = true; // We always discover on network as defined by specs
        }
        if (commissionableDevice !== undefined) {
            let { addresses } = commissionableDevice;
            if (discoveryCapabilities.ble === true) {
                discoveryCapabilities = { onIpNetwork: true, ble: addresses.some(address => address.type === "ble") };
            } else if (discoveryCapabilities.onIpNetwork === true) {
                // do not use BLE if not specified, even if existing
                addresses = addresses.filter(address => address.type !== "ble");
            }
            addresses.sort(a => (a.type === "udp" ? -1 : 1)); // Sort addresses to use UDP first
            knownAddress = addresses[0];
            if ("instanceId" in commissionableDevice && commissionableDevice.instanceId !== undefined) {
                // it is an UDP discovery
                identifierData = { instanceId: commissionableDevice.instanceId as string };
            } else {
                identifierData = { longDiscriminator: commissionableDevice.D };
            }
        }

        const scannersToUse = this.#context.scanners.select(discoveryCapabilities);

        logger.info(
            `Commissioning device with identifier ${Logger.toJSON(identifierData)} and ${
                scannersToUse.length
            } scanners and knownAddress ${Logger.toJSON(knownAddress)}`,
        );

        // If we have a known address we try this first before we discover the device
        let paseSecureChannel: MessageChannel | undefined;
        let discoveryData: DiscoveryData | undefined;

        // If we have a last known address, try this first
        if (knownAddress !== undefined) {
            try {
                paseSecureChannel = await this.#initializePaseSecureChannel(knownAddress, passcode);
            } catch (error) {
                NoResponseTimeoutError.accept(error);
            }
        }
        if (paseSecureChannel === undefined) {
            const discoveredDevices = await ControllerDiscovery.discoverDeviceAddressesByIdentifier(
                scannersToUse,
                identifierData,
                timeoutSeconds,
            );

            const { result } = await ControllerDiscovery.iterateServerAddresses(
                discoveredDevices,
                NoResponseTimeoutError,
                async () =>
                    scannersToUse.flatMap(scanner => scanner.getDiscoveredCommissionableDevices(identifierData)),
                async (address, device) => {
                    const channel = await this.#initializePaseSecureChannel(address, passcode, device);
                    discoveryData = device;
                    return channel;
                },
            );

            // Pairing was successful, so store the address and assign the established secure channel
            paseSecureChannel = result;
        }

        return await this.#commissionDiscoveredNode(
            options.fabric,
            paseSecureChannel,
            commissioningOptions,
            discoveryData,
        );
    }

    /**
     * Method to start commission process with a PASE pairing.
     * If this not successful and throws an RetransmissionLimitReachedError the address is invalid or the passcode
     * is wrong.
     */
    async #initializePaseSecureChannel(
        address: ServerAddress,
        passcode: number,
        device?: CommissionableDevice,
    ): Promise<MessageChannel> {
        let paseChannel: Channel<Uint8Array>;
        if (device !== undefined) {
            logger.info(`Commissioning device`, MdnsScanner.discoveryDataDiagnostics(device));
        }
        if (address.type === "udp") {
            const { ip } = address;

            const isIpv6Address = isIPv6(ip);
            const paseInterface = this.#context.netInterfaces.interfaceFor(
                ChannelType.UDP,
                isIpv6Address ? "::" : "0.0.0.0",
            );
            if (paseInterface === undefined) {
                // mainly IPv6 address when IPv4 is disabled
                throw new PairRetransmissionLimitReachedError(
                    `IPv${isIpv6Address ? "6" : "4"} interface not initialized. Cannot use ${ip} for commissioning.`,
                );
            }
            paseChannel = await paseInterface.openChannel(address);
        } else {
            const ble = this.#context.netInterfaces.interfaceFor(ChannelType.BLE);
            if (!ble) {
                throw new PairRetransmissionLimitReachedError(
                    `BLE interface not initialized. Cannot use ${address.peripheralAddress} for commissioning.`,
                );
            }
            // TODO Have a Timeout mechanism here for connections
            paseChannel = await ble.openChannel(address);
        }

        // Do PASE paring
        const unsecureSession = this.#context.sessions.createInsecureSession({
            // Use the session parameters from MDNS announcements when available and rest is assumed to be fallbacks
            sessionParameters: {
                idleIntervalMs: device?.SII,
                activeIntervalMs: device?.SAI,
                activeThresholdMs: device?.SAT,
            },
            isInitiator: true,
        });
        const paseUnsecureMessageChannel = new MessageChannel(paseChannel, unsecureSession);
        const paseExchange = this.#context.exchanges.initiateExchangeWithChannel(
            paseUnsecureMessageChannel,
            SECURE_CHANNEL_PROTOCOL_ID,
        );

        let paseSecureSession;
        try {
            paseSecureSession = await this.#paseClient.pair(
                this.#context.sessions.sessionParameters,
                paseExchange,
                passcode,
            );
        } catch (e) {
            // Close the exchange and rethrow
            await paseExchange.close();
            throw e;
        }

        await unsecureSession.destroy();
        return new MessageChannel(paseChannel, paseSecureSession);
    }

    /**
     * Method to commission a device with a PASE secure channel. It returns the NodeId of the commissioned device on
     * success.
     */
    async #commissionDiscoveredNode(
        fabric: Fabric,
        paseSecureMessageChannel: MessageChannel,
        commissioningOptions: ControllerCommissioningOptions,
        discoveryData?: DiscoveryData,
        completeCommissioningCallback?: (peerNodeId: NodeId, discoveryData?: DiscoveryData) => Promise<boolean>,
    ): Promise<NodeAddress> {
        // TODO: Create the fabric only when needed before commissioning (to do when refactoring MatterController away)
        // TODO also move certificateManager and other parts into that class to get rid of them here
        // TODO Depending on the Error type during commissioning we can do a retry ...
        /*
            Whenever the Fail-Safe timer is armed, Commissioners and Administrators SHALL NOT consider any cluster
            operation to have timed-out before waiting at least 30 seconds for a valid response from the cluster server.
            Some commands and attributes with complex side-effects MAY require longer and have specific timing requirements
            stated in their respective cluster specification.

            In concurrent connection commissioning flow, the failure of any of the steps 2 through 10 SHALL result in the
            Commissioner and Commissionee returning to step 2 (device discovery and commissioning channel establishment) and
            repeating each step. The failure of any of the steps 11 through 15 in concurrent connection commissioning flow
            SHALL result in the Commissioner and Commissionee returning to step 11 (configuration of operational network
            information). In the case of failure of any of the steps 11 through 15 in concurrent connection commissioning
            flow, the Commissioner and Commissionee SHALL reuse the existing PASE-derived encryption keys over the
            commissioning channel and all steps up to and including step 10 are considered to have been successfully
            completed.
            In non-concurrent connection commissioning flow, the failure of any of the steps 2 through 15 SHALL result in
            the Commissioner and Commissionee returning to step 2 (device discovery and commissioning channel establishment)
            and repeating each step.

            Commissioners that need to restart from step 2 MAY immediately expire the fail-safe by invoking the ArmFailSafe
            command with an ExpiryLengthSeconds field set to 0. Otherwise, Commissioners will need to wait until the current
            fail-safe timer has expired for the Commissionee to begin accepting PASE again.
            In both concurrent connection commissioning flow and non-concurrent connection commissioning flow, the
            Commissionee SHALL exit Commissioning Mode after 20 failed attempts.
         */

        const address = fabric.addressOf(commissioningOptions.nodeId ?? NodeId.randomOperationalNodeId());
        const commissioningManager = new ControllerCommissioner(
            // Use the created secure session to do the commissioning
            new InteractionClient(new ExchangeProvider(this.#context.exchanges, paseSecureMessageChannel), address),
            this.#context.certificates,
            fabric,
            commissioningOptions,
            async () => {
                // TODO Right now we always close after step 12 because we do not check for commissioning flow requirements
                /*
                    In concurrent connection commissioning flow the commissioning channel SHALL terminate after
                    successful step 15 (CommissioningComplete command invocation). In non-concurrent connection
                    commissioning flow the commissioning channel SHALL terminate after successful step 12 (trigger
                    joining of operational network at Commissionee). The PASE-derived encryption keys SHALL be deleted
                    when commissioning channel terminates. The PASE session SHALL be terminated by both Commissioner and
                    Commissionee once the CommissioningComplete command is received by the Commissionee.
                 */
                await paseSecureMessageChannel.close(); // We reconnect using Case, so close PASE connection

                if (completeCommissioningCallback !== undefined) {
                    if (!(await completeCommissioningCallback(address.nodeId, discoveryData))) {
                        throw new RetransmissionLimitReachedError("Device could not be discovered");
                    }
                    throw new CommissioningSuccessfullyFinished();
                }

                // Look for the device broadcast over MDNS and do CASE pairing
                return await this.#context.peers.connect(address, {
                    discoveryType: NodeDiscoveryType.TimedDiscovery,
                    timeoutSeconds: 120,
                    discoveryData,
                }); // Wait maximum 120s to find the operational device for commissioning process
            },
        );

        try {
            await commissioningManager.executeCommissioning();
        } catch (error) {
            // We might have added data for an operational address that we need to cleanup
            await this.#context.peers.delete(address);
            throw error;
        }

        return address;
    }
}
