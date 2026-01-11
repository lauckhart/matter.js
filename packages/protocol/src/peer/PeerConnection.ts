/**
 * @license
 * Copyright 2022-2026 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import {
    Abort,
    asError,
    BasicMultiplex,
    Bytes,
    Channel,
    Diagnostic,
    Duration,
    Heap,
    Lifetime,
    Logger,
    Millis,
    Minutes,
    NetworkError,
    Seconds,
    ServerAddress,
    ServerAddressUdp,
    Time,
    Timestamp,
} from "#general";
import { RetransmissionLimitReachedError } from "#protocol/errors.js";
import { ExchangeManager } from "#protocol/ExchangeManager.js";
import { ChannelStatusResponseError } from "#securechannel/SecureChannelMessenger.js";
import { CaseClient } from "#session/case/CaseClient.js";
import { NodeSession } from "#session/NodeSession.js";
import { SessionManager } from "#session/SessionManager.js";
import { SECURE_CHANNEL_PROTOCOL_ID, SecureChannelStatusCode } from "#types";
import { ServerAddressSet } from "../../../general/src/net/ServerAddressSet.js";
import type { Peer } from "./Peer.js";

/**
 * Delay following a low-level network error.
 *
 * We use this when we could not contact the peer.
 *
 * Note that this includes MRP timeouts *except* for initial contact; in that case we continue MRP retransmission until
 * response or abort.
 */
const NETWORK_ERROR_DELAY = Seconds(30);

/**
 * Delay following report of general error from peer.
 *
 * We use this when we have successfully contacted a peer but could not negotiate a new session.
 */
const PEER_ERROR_DELAY = Seconds(60);

/**
 * Delay for an unhandled exception.
 *
 * Any error that occurs here should be considered internal or should use one of above delays instead.
 */
const UNHANDLED_ERROR_DELAY = Seconds(120);

const logger = Logger.get("PeerConnection");

/**
 * Establishes a CASE session with a peer.
 *
 * Returns a session or undefined if aborted.
 *
 * Logic is as follows:
 *
 * - The last address we connected to is considered a "fallback" address
 *
 * - Other "discovered" addresses may be known via DNS-SD discovery
 *
 * - Discovery occurs via {@link Peer#service}; this is active if there are no discovered or connectable addresses and
 *   passive if there are discovered addresses
 *
 * - If there is a fallback address but no discovered addresses, either because discovery has not completed or because
 *   all discovered addresses have expired, we attempt to connect to the fallback address
 *
 * - If there are no discovered addresses, we trigger active solicitation of new addresses
 *
 * - If there are discovered addresses, attempts to connect to each discovered address in order of priority as defined
 *   by {@link ServerAddressSet.compareDesirability}, with a configurable delay between attempts
 *
 * - The connection to the fallback address aborts if the fallback address is not discovered
 *
 * - Attempts continue until the address expires or connects successfully
 *
 * - We configure MRP to run indefinitely for each attempt with a configurable max delay between messages
 *
 * - Starting a new attempt does not cancel previously running attempts; we thus rely on the MRP retransmission window
 *   to ensure we are sending a reasonable number of packets
 *
 * - Once a session is established, any outstanding attempts abort and the function returns
 *
 * - We use various hardcoded timeouts (see above) in response to exceptions during connection attempts.  The idea is to
 *   recover from transient errors without being too aggressive
 */
export async function PeerConnection(
    peer: Peer,
    context: PeerConnection.Context,
    options?: CaseClient.PairOptions,
): Promise<NodeSession | undefined> {
    const via = Diagnostic.via(peer.address.toString());

    const abort = new Abort(options);
    using lifetime = (peer.lifetime ?? Lifetime.process).join("connecting");

    // Configuration
    const { maxInitialRetryInterval, nextAddressInterval } = { ...PeerConnection.defaultIntervals, ...options };

    // DNS-SD name of peer service
    const service = peer.service;

    // Active connection attempts, keyed by address
    const attempts = new Map<ServerAddressUdp, Attempt>();

    // The result
    let session: NodeSession | undefined;

    // Outstanding promises
    const workers = new BasicMultiplex();

    // Address set used for interning
    const addresses = ServerAddressSet<ServerAddressUdp>();

    // Addresses we will attempt to connect to in priority order
    const pendingAddresses = new Heap<ServerAddressUdp>(
        ServerAddressSet.compareDesirability,
        addresses.add.bind(addresses),
    );

    // When the service is undiscovered, we attempt to connect to the last-known good address and store it here
    let attemptingFallback: ServerAddressUdp | undefined;

    // Time of last attempt initiation, used to delay next initiation
    let lastAttemptAt: undefined | Timestamp;

    // Start the attempt scheduler
    workers.add(scheduleAttempts());

    // Enqueue "fallback" address if service is undiscovered
    maybeAttemptFallback();

    // Manage connection attempts until connected or aborted
    for await (const { kind, address } of service.addressChanges({ abort })) {
        switch (kind) {
            case "add":
                addAddress(address);
                break;

            case "delete":
                deleteAddress(address);
                break;
        }
    }

    abort();

    await workers;

    return session;

    /**
     * Initiate connection attempts as we discover new addresses until aborted.
     */
    async function scheduleAttempts() {
        while (true) {
            // Wait for an address if none are available
            if (!pendingAddresses.size) {
                await abort.race(pendingAddresses.added);
            }
            if (abort.aborted) {
                return;
            }

            // Delay if within the delay window of last initiation attempt
            if (lastAttemptAt !== undefined) {
                const timeSinceLastAttempt = Timestamp.delta(lastAttemptAt);
                const delayInterval = Millis(nextAddressInterval - timeSinceLastAttempt);
                if (delayInterval > 0) {
                    const changed = await abort.race<ServerAddressUdp | void>(
                        Time.sleep("connection delay", delayInterval),
                        pendingAddresses.added,
                        pendingAddresses.deleted,
                    );
                    if (abort.aborted) {
                        return;
                    }

                    // If there was an address change then restart the loop
                    if (changed !== undefined) {
                        continue;
                    }
                }
            }

            // Start next address
            const address = pendingAddresses.shift();
            if (address) {
                initiateAttempt(address);
            }
        }
    }

    /**
     * Enqueue an address if not already attempting.
     */
    function addAddress(address: ServerAddressUdp) {
        address = addresses.add(address);

        // Skip if we're already attempting connection to this address
        if (attempts.has(address)) {
            if (attemptingFallback && ServerAddress.isEqual(attemptingFallback, address)) {
                // The "fallback" is now a "real" address
                attemptingFallback = undefined;
            }

            return;
        }

        pendingAddresses.add(address);
    }

    /**
     * Attempt connection to fallback address if no other attempts are active
     */
    function maybeAttemptFallback() {
        if (attempts.size || pendingAddresses.size || service.addresses.size) {
            return;
        }

        attemptingFallback = peer.descriptor.operationalAddress;
        if (attemptingFallback) {
            pendingAddresses.add(attemptingFallback);
        }
    }

    /**
     * Begin connection attempt to specific address.  Continues until aborted.
     */
    function initiateAttempt(address: ServerAddressUdp) {
        address = addresses.add(address);
        const attemptAbort = new Abort({ abort });

        // Skip if we're already attempting connection to this address
        if (attempts.has(address)) {
            return;
        }

        lastAttemptAt = Time.nowMs;

        const finished = connect(address, attemptAbort).finally(() => {
            if (attempts.get(address)?.finished === finished) {
                attempts.delete(address);
                maybeAttemptFallback();
            }
        });

        attempts.set(address, { abort: attemptAbort, finished });

        workers.add(finished);
    }

    /**
     * End connection attempt.
     */
    function deleteAddress(address: ServerAddressUdp) {
        address = addresses.add(address);
        const attempt = attempts.get(address);

        if (attempt) {
            attempt.abort();
            attempts.delete(address);
        }

        pendingAddresses.delete(address);
    }

    /**
     * Perform connection to specific address until successful.
     */
    async function connect(address: ServerAddressUdp, abort: Abort) {
        using connecting = lifetime.join("connecting");
        connecting.details.address = ServerAddress.urlFor(address);

        // If this is not the fallback address but we're still attempting to connect to the fallback, it means that
        // we've discovered addresses that do not include the fallback; terminate the fallback attempt
        if (attemptingFallback && address !== attemptingFallback) {
            deleteAddress(attemptingFallback);
            attemptingFallback = undefined;
        }

        while (true) {
            try {
                await attemptOnce(address, abort);
            } catch (e) {
                await handleConnectionError(asError(e), abort);
            }
        }
    }

    /**
     * Make a single attempt to connect to a specific address, throwing on error.
     */
    async function attemptOnce(address: ServerAddressUdp, abort: Abort) {
        const socket = await context.openSocket(address, abort);
        if (socket === undefined) {
            return;
        }

        const unsecuredSession = context.sessions.createUnsecuredSession({
            channel: socket,
            sessionParameters: peer.sessionParameters,
            isInitiator: true,
        });

        const exchange = context.exchanges.initiateExchangeForSession(unsecuredSession, SECURE_CHANNEL_PROTOCOL_ID);
        const caseClient = new CaseClient(context.sessions);

        const fabric = context.sessions.fabricFor(peer.address);
        const { session } = await caseClient.pair(exchange, fabric, peer.address.nodeId, {
            ...options,
            abort,
            maxInitialRetransmissions: Infinity,
            maxInitialRetransmissionTime: maxInitialRetryInterval,
        });

        return session;
    }

    /**
     * Log error information and pause before next retry.
     */
    async function handleConnectionError(e: Error, abort: Abort) {
        let delay: undefined | Duration;
        if (e instanceof NetworkError || e instanceof RetransmissionLimitReachedError) {
            logger.error(
                via,
                `Network error (retry in ${Duration.format(NETWORK_ERROR_DELAY)}):`,
                Diagnostic.errorMessage(e),
            );
            delay = NETWORK_ERROR_DELAY;
        } else if (e instanceof ChannelStatusResponseError) {
            if (
                e.protocolStatusCode === SecureChannelStatusCode.NoSharedTrustRoots &&
                (await context.sessions.deleteResumptionRecord(peer.address))
            ) {
                logger.error(
                    via,
                    "Authorization rejected by peer on session resumption; clearing resumption data and retrying",
                );
            } else {
                logger.error(
                    via,
                    `Peer error (retry in ${Duration.format(PEER_ERROR_DELAY)}):`,
                    Diagnostic.errorMessage(e),
                );
                delay = PEER_ERROR_DELAY;
            }
        } else {
            logger.error(via, `Unhandled connection error (retry in ${Duration.format(UNHANDLED_ERROR_DELAY)}):`, e);
        }

        if (abort.aborted) {
            return;
        }

        if (delay) {
            await Abort.sleep("peer connection retry", abort, delay);
            if (abort.aborted) {
                return;
            }
        }
    }
}

export namespace PeerConnection {
    export interface Context {
        sessions: SessionManager;
        exchanges: ExchangeManager;

        /**
         * Open byte channel to a specific address.
         */
        openSocket(address: ServerAddressUdp, abort: AbortSignal): Promise<Channel<Bytes> | void>;

        /**
         * The longest time between retries.
         *
         * This is the longest period between packets between MRP retries when we attempt initial contact.
         */
        maxInitialRetryInterval?: Duration;

        /**
         * Wait time before trying the next address.
         *
         * We run addresses in parallel but delay the time between the initial attempt for each address by this amount.
         */
        nextAddressInterval?: Duration;
    }

    // TODO - tune these
    export const defaultIntervals = {
        maxInitialRetryInterval: Minutes(2),
        nextAddressInterval: Seconds(5),
    };
}

interface Attempt {
    abort: Abort;
    finished: Promise<void>;
}
