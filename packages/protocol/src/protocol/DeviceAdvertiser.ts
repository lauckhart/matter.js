/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Advertisement } from "#advertisement/Advertisement.js";
import { Advertiser } from "#advertisement/Advertiser.js";
import { ServiceDescription } from "#advertisement/ServiceDescription.js";
import { Fabric } from "#fabric/Fabric.js";
import { FabricManager } from "#fabric/FabricManager.js";
import { Environment, Environmental, MatterAggregateError, ObserverGroup } from "#general";
import { SessionManager } from "#session/SessionManager.js";

/**
 * Interfaces the {@link DeviceAdvertiser} with other components.
 */
export interface DeviceAdvertiserContext {
    fabrics: FabricManager;
    sessions: SessionManager;
}

/**
 * Advertises a node for commissioning (if uncommissioned) or operationally (if commissioned).
 */
export class DeviceAdvertiser {
    #context: DeviceAdvertiserContext;
    #advertisers = new Set<Advertiser>();
    #observers = new ObserverGroup();
    #isOperational = false;
    #isClosing = false;
    #commissioningService?: ServiceDescription;

    constructor(context: DeviceAdvertiserContext) {
        this.#context = context;

        // When a fabric is deleted, cancel any active advertisement
        this.#observers.on(this.#context.fabrics.events.deleted, fabric => {
            Advertisement.cancelAll(this.#advertisements(ad => ad.isOperational() && ad.description.fabric === fabric));
        });

        // When a fabric is added, begin advertising automatically if in operational mode
        this.#observers.on(this.#context.fabrics.events.added, fabric => {
            if (!this.#isOperational) {
                return;
            }

            this.#advertiseFabric(fabric);
        });

        // Each time we retry a packet we also send a new announcement
        this.#observers.on(this.#context.sessions.resubmissionStarted, (_session?) => {
            // TODO - one-off ad doesn't seem too useful but if we're going to start advertising then need a way to
            // stop advertising once exchange receives an ACK
            // logger.debug(`Resubmission started, re-announce node ${session?.nodeId}`);
            // this.advertise(true);
        });

        // Handle session closure
        this.#observers.on(this.#context.sessions.sessions.deleted, session => {
            const fabricIndex = session.fabric?.fabricIndex;
            const fabric = fabricIndex ? this.#context.fabrics.findByIndex(fabricIndex) : undefined;

            // If this was an operational connection, readvertise if we're no longer connected to the peer
            if (fabric) {
                if (fabric.hasSessionForPeer(session.peerNodeId)) {
                    return;
                }

                this.#advertiseFabric(fabric);

                return;
            }

            // If we're in commissioning mode, resume advertising for commissioning
            this.#startCommissioningAdvertisement();
        });
    }

    toString() {
        return "DeviceAdvertiser";
    }

    static [Environmental.create](env: Environment) {
        const instance = new DeviceAdvertiser({
            fabrics: env.get(FabricManager),
            sessions: env.get(SessionManager),
        });
        env.set(DeviceAdvertiser, instance);
        return instance;
    }

    /**
     * Advertise the device as commissionable.
     */
    enterCommissioningMode(description: ServiceDescription.Commissionable) {
        this.#commissioningService = description;
        this.#startCommissioningAdvertisement();
    }

    /**
     * Begin automatic broadcast for commissioning if in commissionable mode.
     */
    #startCommissioningAdvertisement() {
        if (this.#commissioningService === undefined) {
            return;
        }
        this.#advertise(this.#commissioningService);
    }

    /**
     * Cease advertising the device as commissionable.
     */
    exitCommissioningMode() {
        if (!this.#commissioningService) {
            return;
        }

        this.#commissioningService = undefined;
        return Advertisement.closeAll(this.#advertisements(ad => ad.isCommissioning()));
    }

    /**
     * Advertise the device as operational.
     */
    enterOperationalMode() {
        if (this.#isOperational) {
            return;
        }

        this.#isOperational = true;

        this.#startOperationalAdvertisement();
    }

    /**
     * Begin automatic broadcast for fabrics if in operational mode.
     */
    #startOperationalAdvertisement() {
        if (!this.#isOperational) {
            return;
        }

        const fabricsAdvertised = new Set(
            this.#advertisements(ad => ad.isOperational()).map(
                ad => (ad as Advertisement<ServiceDescription.Operational>).description.fabric,
            ),
        );

        for (const fabric of this.#context.fabrics) {
            if (!fabricsAdvertised.has(fabric)) {
                this.#advertise(ServiceDescription.Operational({ fabric }));
            }
        }
    }

    /**
     * Cease advertising the device as operational.
     */
    exitOperationalMode() {
        if (!this.#isOperational) {
            return;
        }

        this.#isOperational = false;

        Advertisement.cancelAll(this.#advertisements(ad => ad.isOperational()));
    }

    /**
     * Reset automatic advertisement.
     *
     * This is useful when there is a network change.
     */
    restartAdvertisement() {
        this.#startCommissioningAdvertisement();
        this.#startOperationalAdvertisement();
    }

    async close() {
        this.#isClosing = true;
        this.#observers.close();
        await this.clearAdvertisers();
    }

    hasAdvertiser(advertiser: Advertiser) {
        return this.#advertisers.has(advertiser);
    }

    addAdvertiser(advertiser: Advertiser) {
        this.#advertisers.add(advertiser);
    }

    async deleteAdvertiser(advertiser: Advertiser) {
        this.#advertisers.delete(advertiser);
        await advertiser.close();
    }

    async clearAdvertisers() {
        const advertisers = [...this.#advertisers];
        this.#advertisers.clear();
        await MatterAggregateError.allSettled(advertisers.map(advertiser => advertiser.close()));
    }

    #advertiseFabric(fabric: Fabric) {
        if (this.#isClosing) {
            return;
        }

        nextAdvertiser: for (const advertiser of this.#advertisers) {
            // Skip fabrics that are already advertising.  This prevents redundant advertisement on startup
            for (const ad of advertiser.advertisements) {
                if (ad.isOperational() && ad.description.fabric === fabric) {
                    continue nextAdvertiser;
                }
            }

            advertiser.advertise(ServiceDescription.Operational({ fabric }));
        }
    }

    #advertise(description: ServiceDescription) {
        if (this.#isClosing) {
            return;
        }

        for (const advertiser of this.#advertisers) {
            advertiser.advertise(description);
        }
    }

    #advertisements(predicate?: (ad: Advertisement) => boolean) {
        return [...this.#advertisers].flatMap(advertiser =>
            predicate ? advertiser.filter(predicate) : [...advertiser.advertisements],
        );
    }
}
