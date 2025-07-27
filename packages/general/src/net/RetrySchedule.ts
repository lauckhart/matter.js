/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Crypto } from "#crypto/Crypto.js";

/**
 * An iterable of retry values based on a scheduling configuration.
 */
export class RetrySchedule {
    #crypto: Crypto;
    readonly config: RetrySchedule.Configuration;

    constructor(crypto: Crypto, config: RetrySchedule.Configuration) {
        this.#crypto = crypto;
        this.config = config;
    }

    /**
     * Yields intervals.
     *
     * Will yield indefinitely until canceled unless {@link config} specifies a timeout.
     */
    *[Symbol.iterator]() {
        const { initialInterval, timeout, jitterFactor, backoffFactor, maximumInterval } = this.config;

        let baseInterval = initialInterval;
        let timeSoFar = 0;

        while (timeSoFar < baseInterval) {
            const maxJitter = jitterFactor * baseInterval;
            const jitter = (2 * maxJitter * this.#crypto.randomUint32) / Math.pow(2, 32) - maxJitter;
            let interval = baseInterval + jitter;

            if (timeout !== undefined && timeSoFar + interval > timeout) {
                interval = timeout - timeSoFar;
            }
            if (maximumInterval !== undefined && interval > maximumInterval) {
                interval = maximumInterval;
            }

            yield interval;
            timeSoFar += interval;

            baseInterval *= backoffFactor;
        }
    }
}

export namespace RetrySchedule {
    /**
     * Configuration parameters for retry schedule.
     *
     * All intervals are in milliseconds.
     */
    export interface Configuration {
        /**
         * Overall timeout in seconds.
         */
        timeout?: number;

        /**
         * Interval between first request and final interval.
         */
        initialInterval: number;

        /**
         * Multiplier for subsequent retries.
         */
        backoffFactor: number;

        /**
         * Maximum interval between retries (excluding jitter).
         */
        maximumInterval?: number;

        /**
         * Multiplier for retry jitter.
         */
        jitterFactor: number;
    }

    /**
     * Create a full configuration with defaults.
     */
    export function Configuration(defaults: Configuration, options?: Options) {
        return {
            ...defaults,
            ...options,
        };
    }

    export interface Options extends Partial<Configuration> {}
}
