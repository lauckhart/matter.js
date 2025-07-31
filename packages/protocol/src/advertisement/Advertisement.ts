/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { asError, CancelablePromise, CanceledError, Diagnostic, Logger, MatterAggregateError, Time } from "#general";
import { PRIVATE_COMMISSIONING_TIMEOUT_S } from "#types";
import type { Advertiser } from "./Advertiser.js";
import { ServiceDescription } from "./ServiceDescription.js";

const logger = Logger.get("Advertisement");

/**
 * An advertisement for a discrete service.
 */
export abstract class Advertisement<T extends ServiceDescription = ServiceDescription> extends CancelablePromise<void> {
    /**
     * The service advertised.
     *
     * This is a unique ID associated with the advertisement.
     */
    service: string;

    /**
     * The information advertised.
     */
    description: T;

    /**
     * The {@link Advertiser} that owns this advertisement.
     */
    advertiser: Advertiser;

    /**
     * Configuration options.
     */
    options: Advertisement.Options;

    #resolve: () => void;
    #reject: (cause: unknown) => void;

    #sleep?: CancelablePromise;
    #cancelReason?: Error;
    #startedAt = Time.nowMs();

    constructor(advertiser: Advertiser, service: string, description: T, options?: Advertisement.Options) {
        let resolve: () => void, reject: (cause: unknown) => void;
        super((res, rej) => {
            resolve = res;
            reject = rej;
        });

        this.options = options ?? {};

        this.#resolve = resolve!;
        this.#reject = (cause: unknown) => {
            if (cause instanceof CanceledError) {
                resolve();
            } else {
                reject!(cause);
            }
        };

        this.service = service;
        this.advertiser = advertiser;
        this.description = description;
    }

    /**
     * Begin advertising.
     */
    start() {
        this.#run().then(this.#resolve, this.#reject);
    }

    /**
     * Implement advertising.
     */
    protected abstract run(): Promise<void>;

    /**
     * Enter cancelable sleep.
     *
     * Throws {@link CanceledError} if interrupted.  If thrown from {@link run} this will result in the promise
     * resolving.
     */
    protected sleep(name: string, intervalMs: number) {
        this.abortIfCanceled();

        const sleep = Time.sleep(name, intervalMs).finally(() => {
            if (this.#sleep === sleep) {
                this.#sleep = undefined;
            }
        });

        this.#sleep = sleep;
        return sleep;
    }

    protected abortIfCanceled() {
        if (this.#cancelReason) {
            throw this.#cancelReason;
        }
    }

    protected override onCancel(reason: unknown) {
        if (this.#cancelReason) {
            return;
        }
        this.#cancelReason = asError(reason);

        if (this.#sleep) {
            this.#sleep.cancel(reason);
        }
    }

    isCommissioning(): this is
        | Advertisement<ServiceDescription.Commissionable>
        | Advertisement<ServiceDescription.Commissioner> {
        return ServiceDescription.isCommissioning(this.description);
    }

    isOperational(): this is Advertisement<ServiceDescription.Operational> {
        return ServiceDescription.isOperational(this.description);
    }

    /**
     * Indicates that broadcasts should omit private details.
     */
    protected get isPrivacyMasked() {
        // Private broadcast configured explicitly
        if (this.options.omitPrivateDetails) {
            return true;
        }

        // Extended announcement
        if (Time.nowMs() - this.#startedAt < PRIVATE_COMMISSIONING_TIMEOUT_S * 1000) {
            return true;
        }

        return false;
    }

    /**
     * Cancel a set of advertisements.
     */
    static cancelAll(ads: Iterable<Advertisement>) {
        for (const ad of ads) {
            ad.cancel();
        }
    }

    /**
     * Cancel a set of advertisements and wait for them to complete.
     */
    static async closeAll(ads: Iterable<Advertisement>) {
        this.cancelAll(ads);
        await MatterAggregateError.allSettled(ads);
    }

    async #run() {
        // There may only be a single commissionable advertisement per advertiser
        if (this.description.kind === "commissionable") {
            const toClose = [...this.advertiser.advertisements].filter(
                other => other.description.kind === "commissionable" && other !== this,
            );
            if (toClose.length) {
                await Advertisement.closeAll(toClose);
            }
        }

        logger.info("Advertising", Diagnostic.strong(this.service));

        try {
            await this.run();
        } finally {
            logger.debug("Done advertising", Diagnostic.strong(this.service));
        }
    }
}

export namespace Advertisement {
    export interface Options {
        /**
         * Set this to omit optional details from broadcasts that may affect privacy.
         *
         * Per core spec 5.4.2.3.1, the device always omits vendor ID, product ID and extended data during extended
         * announcement.  Set this value to omit this fields unconditionally.
         */
        omitPrivateDetails?: boolean;
    }
}
