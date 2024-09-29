/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { NodeAddress, NodeAddressMap } from "#common/NodeAddress.js";
import { DiscoveryData } from "#common/Scanner.js";
import { Fabric } from "#fabric/Fabric.js";
import {
    anyPromise,
    ChannelType,
    createPromise,
    Environment,
    Environmental,
    ImplementationError,
    isIPv6,
    Logger,
    NetInterfaceSet,
    NoResponseTimeoutError,
    ServerAddressIp,
    serverAddressToString,
    Time,
    Timer,
} from "#general";
import { InteractionClient } from "#interaction/InteractionClient.js";
import { MdnsScanner } from "#mdns/MdnsScanner.js";
import { CaseClient } from "#session/index.js";
import { SessionManager } from "#session/SessionManager.js";
import { NodeId, SECURE_CHANNEL_PROTOCOL_ID } from "@matter.js/types";
import { ChannelManager, NoChannelError } from "./ChannelManager.js";
import { ControllerDiscovery, DiscoveryError, PairRetransmissionLimitReachedError } from "./ControllerDiscovery.js";
import { ExchangeManager, ExchangeProvider, MessageChannel } from "./ExchangeManager.js";
import { RetransmissionLimitReachedError } from "./MessageExchange.js";
import { DiscoveryOptions, NodeDiscoveryType, NodeFinder } from "./NodeFinder.js";

const logger = Logger.get("NodeFinder");

const RECONNECTION_POLLING_INTERVAL_MS = 600_000; // 10 minutes

/**
 * Interfaces {@link NodeConnector} with other components.
 */
export interface NodeConnectorContext {
    sessions: SessionManager;
    channels: ChannelManager;
    exchanges: ExchangeManager;
    finder: NodeFinder;
    netInterfaces: NetInterfaceSet;
}

interface RunningDiscovery {
    type: NodeDiscoveryType;
    promises?: (() => Promise<MessageChannel>)[];
    timer?: Timer;
}

/**
 * Establishes connections to other Matter nodes.
 */
export class NodeConnector {
    readonly #sessions: SessionManager;
    readonly #channels: ChannelManager;
    readonly #exchanges: ExchangeManager;
    readonly #finder: NodeFinder;
    readonly #netInterfaces: NetInterfaceSet;
    readonly #runningNodeDiscoveries = new NodeAddressMap<RunningDiscovery>();
    readonly #caseClient: CaseClient;

    constructor(context: NodeConnectorContext) {
        const { sessions, channels, exchanges, finder, netInterfaces } = context;

        this.#sessions = sessions;
        this.#channels = channels;
        this.#exchanges = exchanges;
        this.#finder = finder;
        this.#netInterfaces = netInterfaces;
        this.#caseClient = new CaseClient(this.#sessions);
    }

    [Environmental.create](env: Environment) {
        const instance = new NodeConnector({
            sessions: env.get(SessionManager),
            channels: env.get(ChannelManager),
            exchanges: env.get(ExchangeManager),
            finder: env.get(NodeFinder),
            netInterfaces: env.get(NetInterfaceSet),
        });
        env.set(NodeConnector, instance);
        return instance;
    }

    /**
     * Connect to a node for operational (non-commissioning) purposes.
     */
    async connectToPeer(
        fabric: Fabric,
        nodeId: NodeId,
        discoveryOptions: DiscoveryOptions,
    ): Promise<InteractionClient> {
        const { discoveryData } = discoveryOptions;

        const address = fabric.addressOf(nodeId);

        let channel: MessageChannel;
        try {
            channel = this.#channels.getChannel(address);
        } catch (error) {
            NoChannelError.accept(error);

            channel = await this.#resume(address, discoveryOptions);
        }

        return new InteractionClient(
            new ExchangeProvider(this.#exchanges, channel, async () => {
                if (!this.#channels.hasChannel(address)) {
                    throw new RetransmissionLimitReachedError(
                        `Device ${NodeAddress(address)} is currently not reachable.`,
                    );
                }
                await this.#channels.removeAllNodeChannels(address);

                // Try to use first result for one last try before we need to reconnect
                const operationalAddress = this.#finder.knownOperationalAddressFor(address);
                if (operationalAddress === undefined) {
                    logger.info(
                        `Re-discovering device failed (no address found), remove all sessions for ${NodeAddress(address)}`,
                    );
                    // We remove all sessions, this also informs the PairedNode class
                    await this.#sessions.removeAllSessionsForNode(address);
                    throw new RetransmissionLimitReachedError(
                        `No operational address found for ${NodeAddress(address)}`,
                    );
                }
                if (
                    (await this.#reconnectKnownAddress(address, operationalAddress, discoveryData, 2_000)) === undefined
                ) {
                    throw new RetransmissionLimitReachedError(`${NodeAddress(address)} is not reachable.`);
                }
                return this.#channels.getChannel(address);
            }),
            address,
        );
    }

    /**
     * Resume a device connection and establish a CASE session that was previously paired with the controller. This
     * method will try to connect to the device using the previously used server address (if set). If that fails, the
     * device is discovered again using its operational instance details.
     * It returns the operational MessageChannel on success.
     */
    async #resume(address: NodeAddress, discoveryOptions?: DiscoveryOptions) {
        const operationalAddress = this.#finder.knownOperationalAddressFor(address);

        try {
            return await this.#connectOrDiscoverNode(address, operationalAddress, discoveryOptions);
        } catch (error) {
            if (
                (error instanceof DiscoveryError || error instanceof NoResponseTimeoutError) &&
                this.#finder.isKnown(address)
            ) {
                logger.info(`Resume failed, remove all sessions for ${NodeAddress(address)}`);
                // We remove all sessions, this also informs the PairedNode class
                await this.#sessions.removeAllSessionsForNode(address);
            }
            throw error;
        }
    }

    async #connectOrDiscoverNode(
        address: NodeAddress,
        operationalAddress?: ServerAddressIp,
        discoveryOptions: DiscoveryOptions = {},
    ) {
        address = NodeAddress(address);
        const {
            discoveryType: requestedDiscoveryType = NodeDiscoveryType.FullDiscovery,
            timeoutSeconds,
            discoveryData = this.#knownNodes.get(address)?.discoveryData,
        } = discoveryOptions;
        if (timeoutSeconds !== undefined && requestedDiscoveryType !== NodeDiscoveryType.TimedDiscovery) {
            throw new ImplementationError("Cannot set timeout without timed discovery.");
        }
        if (requestedDiscoveryType === NodeDiscoveryType.RetransmissionDiscovery) {
            throw new ImplementationError("Cannot set retransmission discovery type.");
        }

        const mdnsScanner = this.scanners.scannerFor(ChannelType.UDP) as MdnsScanner | undefined;
        if (!mdnsScanner) {
            throw new ImplementationError("Cannot discover device without mDNS scanner.");
        }

        const existingDiscoveryDetails = this.#runningNodeDiscoveries.get(address) ?? {
            type: NodeDiscoveryType.None,
        };

        // If we currently run another "lower" retransmission type we cancel it
        if (
            existingDiscoveryDetails.type !== NodeDiscoveryType.None &&
            existingDiscoveryDetails.type < requestedDiscoveryType
        ) {
            mdnsScanner.cancelOperationalDeviceDiscovery(this.#sessions.fabricFor(address), address.nodeId);
            this.#runningNodeDiscoveries.delete(address);
            existingDiscoveryDetails.type = NodeDiscoveryType.None;
        }

        const { type: runningDiscoveryType, promises } = existingDiscoveryDetails;

        // If we have a last known address try to reach the device directly when we are not already discovering
        // In worst case parallel cases we do this step twice, but that's ok
        if (
            operationalAddress !== undefined &&
            (runningDiscoveryType === NodeDiscoveryType.None || requestedDiscoveryType === NodeDiscoveryType.None)
        ) {
            const directReconnection = await this.reconnectKnownAddress(address, operationalAddress, discoveryData);
            if (directReconnection !== undefined) {
                return directReconnection;
            }
            if (requestedDiscoveryType === NodeDiscoveryType.None) {
                throw new DiscoveryError(`Node ${address} is not reachable right now.`);
            }
        }

        if (promises !== undefined) {
            if (runningDiscoveryType > requestedDiscoveryType) {
                // We already run a "longer" discovery, so we know it is unreachable for now
                throw new DiscoveryError(`Node ${address} is not reachable right now and discovery already running.`);
            } else {
                // If we are already discovering this node, so we reuse promises
                return await anyPromise(promises);
            }
        }

        const discoveryPromises = new Array<() => Promise<MessageChannel>>();
        let reconnectionPollingTimer: Timer | undefined;

        if (operationalAddress !== undefined) {
            // Additionally to general discovery we also try to poll the formerly known operational address
            if (requestedDiscoveryType === NodeDiscoveryType.FullDiscovery) {
                const { promise, resolver, rejecter } = createPromise<MessageChannel>();

                reconnectionPollingTimer = Time.getPeriodicTimer(
                    "Controller reconnect",
                    RECONNECTION_POLLING_INTERVAL_MS,
                    async () => {
                        try {
                            logger.debug(`Polling for device at ${serverAddressToString(operationalAddress)} ...`);
                            const result = await this.reconnectKnownAddress(address, operationalAddress, discoveryData);
                            if (result !== undefined && reconnectionPollingTimer?.isRunning) {
                                reconnectionPollingTimer?.stop();
                                mdnsScanner.cancelOperationalDeviceDiscovery(
                                    this.#sessions.fabricFor(address),
                                    address.nodeId,
                                );
                                this.#runningNodeDiscoveries.delete(address);
                                resolver(result);
                            }
                        } catch (error) {
                            if (reconnectionPollingTimer?.isRunning) {
                                reconnectionPollingTimer?.stop();
                                mdnsScanner.cancelOperationalDeviceDiscovery(
                                    this.#sessions.fabricFor(address),
                                    address.nodeId,
                                );
                                this.#runningNodeDiscoveries.delete(address);
                                rejecter(error);
                            }
                        }
                    },
                ).start();

                discoveryPromises.push(() => promise);
            }
        }

        discoveryPromises.push(async () => {
            const scanResult = await ControllerDiscovery.discoverOperationalDevice(
                this.#sessions.fabricFor(address),
                address.nodeId,
                mdnsScanner,
                timeoutSeconds,
                timeoutSeconds === undefined,
            );
            const { timer } = this.#runningNodeDiscoveries.get(address) ?? {};
            timer?.stop();
            this.#runningNodeDiscoveries.delete(address);

            const { result } = await ControllerDiscovery.iterateServerAddresses(
                [scanResult],
                NoResponseTimeoutError,
                async () => {
                    const device = mdnsScanner.getDiscoveredOperationalDevice(
                        this.#sessions.fabricFor(address),
                        address.nodeId,
                    );
                    return device !== undefined ? [device] : [];
                },
                async (operationalAddress, device) => {
                    const result = await this.#pair(address, operationalAddress, device);
                    await this.#setOperationalDeviceData(address, operationalAddress, {
                        ...discoveryData,
                        ...device,
                    });
                    return result;
                },
            );

            return result;
        });

        this.#runningNodeDiscoveries.set(peerNodeId, {
            type: requestedDiscoveryType,
            promises: discoveryPromises,
            timer: reconnectionPollingTimer,
        });

        return await anyPromise(discoveryPromises).finally(() => this.#runningNodeDiscoveries.delete(peerNodeId));
    }

    async #reconnectKnownAddress(
        address: NodeAddress,
        operationalAddress: ServerAddressIp,
        discoveryData?: DiscoveryData,
        expectedProcessingTimeMs?: number,
    ): Promise<MessageChannel | undefined> {
        address = NodeAddress(address);

        const { ip, port } = operationalAddress;
        try {
            logger.debug(
                `Resume device connection to configured server at ${ip}:${port}${expectedProcessingTimeMs !== undefined ? ` with expected processing time of ${expectedProcessingTimeMs}ms` : ""} ...`,
            );
            const channel = await this.#pair(address, operationalAddress, discoveryData, expectedProcessingTimeMs);
            await this.#setOperationalDeviceData(address, operationalAddress);
            return channel;
        } catch (error) {
            if (error instanceof NoResponseTimeoutError) {
                logger.debug(
                    `Failed to resume connection to ${address} connection with ${ip}:${port}, discover the node:`,
                    error,
                );
                // We remove all sessions, this also informs the PairedNode class
                await this.#sessions.removeAllSessionsForNode(address);
                return undefined;
            } else {
                throw error;
            }
        }
    }

    /** Pair with an operational device (already commissioned) and establish a CASE session. */
    async #pair(
        address: NodeAddress,
        operationalServerAddress: ServerAddressIp,
        discoveryData?: DiscoveryData,
        expectedProcessingTimeMs?: number,
    ) {
        const { ip, port } = operationalServerAddress;
        // Do CASE pairing
        const isIpv6Address = isIPv6(ip);
        const operationalInterface = this.#netInterfaces.interfaceFor(
            ChannelType.UDP,
            isIpv6Address ? "::" : "0.0.0.0",
        );

        if (operationalInterface === undefined) {
            throw new PairRetransmissionLimitReachedError(
                `IPv${
                    isIpv6Address ? "6" : "4"
                } interface not initialized for port ${port}. Cannot use ${ip} for pairing.`,
            );
        }

        const operationalChannel = await operationalInterface.openChannel(operationalServerAddress);
        const { sessionParameters } = this.#sessions.findResumptionRecordByAddress(address) ?? {};
        const unsecureSession = this.#sessions.createInsecureSession({
            // Use the session parameters from MDNS announcements when available and rest is assumed to be fallbacks
            sessionParameters: {
                idleIntervalMs: discoveryData?.SII ?? sessionParameters?.idleIntervalMs,
                activeIntervalMs: discoveryData?.SAI ?? sessionParameters?.activeIntervalMs,
                activeThresholdMs: discoveryData?.SAT ?? sessionParameters?.activeThresholdMs,
            },
            isInitiator: true,
        });
        const operationalUnsecureMessageExchange = new MessageChannel(operationalChannel, unsecureSession);
        let operationalSecureSession;
        try {
            const exchange = this.#exchanges.initiateExchangeWithChannel(
                operationalUnsecureMessageExchange,
                SECURE_CHANNEL_PROTOCOL_ID,
            );

            try {
                operationalSecureSession = await this.#caseClient.pair(
                    exchange,
                    this.#sessions.fabricFor(address),
                    address.nodeId,
                    expectedProcessingTimeMs,
                );
            } catch (e) {
                await exchange.close();
                throw e;
            }
        } catch (e) {
            NoResponseTimeoutError.accept(e);

            // Convert error
            throw new PairRetransmissionLimitReachedError(e.message);
        }
        await unsecureSession.destroy();
        const channel = new MessageChannel(operationalChannel, operationalSecureSession);
        await this.#channels.setChannel(address, channel);
        return channel;
    }
}
