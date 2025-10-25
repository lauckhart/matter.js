/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Interactable } from "#action/Interactable.js";
import { Subscribe } from "#action/request/Subscribe.js";
import type { ActiveSubscription } from "#action/response/SubscribeResult.js";
import {
    Abort,
    AbortError,
    asError,
    Diagnostic,
    Duration,
    Entropy,
    Hours,
    Logger,
    RetrySchedule,
    Seconds,
    TimeoutError,
} from "#general";
import { Specification } from "#model";
import { PeerAddress } from "#peer/PeerAddress.js";

const logger = Logger.get("ClientSubscription");

/**
 * An {@link ActiveSubscription} that remains active regardless of the state of the peer.
 *
 * This class performs retries in response to connection errors and timeouts.  The underlying Matter subscription and
 * thus {@link ActiveSubscription#subscriptionId} may change if the peer goes offline or experiences transient errors.
 */
export class SustainedSubscription implements ActiveSubscription {
    #request: Subscribe;
    #abort: AbortController;
    #entropy: Entropy;
    #peer?: PeerAddress;
    #subscription?: ActiveSubscription;
    #interaction: Interactable;
    #finished: Promise<void>;
    #retries: RetrySchedule;

    constructor({ interaction, request, peer, entropy, abort, retry }: SustainedSubscription.Configuration) {
        this.#interaction = interaction;
        this.#request = request;
        this.#entropy = entropy;
        this.#abort = Abort.subtask(abort);
        this.#peer = PeerAddress(peer);
        this.#retries = new RetrySchedule(
            this.#entropy,
            RetrySchedule.Configuration(SustainedSubscription.DefaultRetrySchedule, retry),
        );
        this.#finished = this.#run();
    }

    async #run() {
        const updated = this.#request.updated?.bind(this.#request);

        while (true) {
            // Create request and promise that will inform us when the underlying subscription closes but otherwise
            // respond to the original
            const request = { ...this.#request, updated };
            if (this.#request.updated) {
                request.updated = this.#request.updated.bind(request);
            }
            const closed = new Promise<AbortError | TimeoutError>(resolve => {
                request.closed = reason => resolve(reason);
            });

            // Subscribe
            for (const retry of this.#retries) {
                try {
                    this.#subscription = await this.#interaction.subscribe(request, {
                        abort: this.#abort.signal,
                    });
                } catch (e) {
                    if (this.#abort.signal.aborted) {
                        return;
                    }

                    logger.error(
                        `Failed to establish subscription to ${this.#peerStr}, retry in ${Duration.format(retry)}:`,
                        Diagnostic.errorMessage(asError(e)),
                    );
                }
            }

            // Wait for the subscription to close
            const closeReason = await closed;

            // If aborted then we're done
            if (this.#abort.signal.aborted) {
                break;
            }

            // If we aren't aborted then we are here due to error which currently can only be a timeout
            logger.error(
                `Retrying subscription to ${this.#peerStr} due to error:`,
                Diagnostic.errorMessage(asError(closeReason)),
            );
        }

        this.#request?.closed?.(new AbortError());
    }

    get interactionModelRevision() {
        return this.#subscription?.interactionModelRevision ?? Specification.INTERACTION_MODEL_REVISION;
    }

    get maxInterval() {
        return this.#subscription?.maxInterval ?? Hours.one;
    }

    get subscriptionId() {
        return this.#subscription?.subscriptionId ?? SustainedSubscription.NO_SUBSCRIPTION;
    }

    /**
     * Terminate the subscription.
     *
     * You must use {@link finish} to ensure proper cleanup.
     */
    close(): void {
        this.#abort.abort();
    }

    async finish() {
        this.close();
        await this.#finished;
    }

    get #peerStr() {
        return this.#peer ? this.#peer.toString() : "(unknown peer)";
    }
}

export namespace SustainedSubscription {
    /**
     * Configuration for {@link SustainedSubscription}.
     */
    export interface Configuration {
        /**
         * The interactable used for underlying subscription.
         */
        interaction: Interactable;

        /**
         * The subscription configuration.
         */
        request: Subscribe;

        /**
         * Address of the peer used when logging errors.
         */
        peer?: PeerAddress;

        /**
         * Used to randomize backoff.
         */
        entropy: Entropy;

        /**
         * If defined we abort when this signal aborts.
         */
        abort?: Abort.Signal;

        /**
         * The schedule we use for retrying subscription connections.
         *
         * We handle reconnection separately at the exchange level.  This retry schedule only applies to establishing a
         * subscription once we have an active exchange.  Exchange reconnection is handled by lower-level components.
         */
        retry?: RetrySchedule.Configuration;
    }

    export const NO_SUBSCRIPTION = -1;

    export const DefaultRetrySchedule: RetrySchedule.Configuration = {
        // Protocol-level level happens at the exchange level and is faster; this is an application-level retry.  Retry
        // more slowly so we do not hammer devices that are experiencing transient errors
        initialInterval: Seconds(15),

        // Similarly, we have an exchange.  If a device repeatedly fails to establish a subscription, give it plenty of
        // time to recover.  It's even possible our subscription attempt is invalid for some reason, in which case we
        // an aggressive interval would be particularly bad form
        maximumInterval: Hours(1),

        // No timeout; we run until aborted
        timeout: undefined,

        backoffFactor: 2,

        jitterFactor: 0.25,
    };
}
