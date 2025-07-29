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
import { Diagnostic, Environment, Environmental, Logger, ObserverGroup } from "#general";
import { SessionManager } from "#session/SessionManager.js";

const logger = Logger.get("DeviceAdvertiser");

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
    #advertisements = new Set<Advertisement>();
    #observers = new ObserverGroup();
    #isOperational = false;
    #isClosing = false;
    #commissioningService?: ServiceDescription;

    constructor(context: DeviceAdvertiserContext) {
        this.#context = context;

        // When a fabric is deleted, cancel any active advertisement
        this.#observers.on(this.#context.fabrics.events.deleted, fabric => {
            Advertisement.cancelAll(
                [...this.#advertisements].filter(ad => ad.isOperational() && ad.description.fabric === fabric),
            );
            for (const ad of this.#advertisements) {
                if (ad.description.kind !== "operational") {
                    continue;
                }
                if (ad.description.fabric !== fabric) {
                    continue;
                }
                ad.cancel();
            }
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
            this.#advertiseCommissioning();
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

    enterCommissioningMode(description: ServiceDescription.Commissionable) {
        this.#commissioningService = description;
        this.#advertiseCommissioning();
    }

    exitCommissioningMode() {
        this.#commissioningService = undefined;
        for (const ad of this.#advertisements) {
            if (ad.isCommissioning()) {
                ad.cancel();
            }
        }
    }

    enterOperationalMode() {
        const fabricsAdvertised = new Set(
            [...this.#advertisements]
                .map(ad => ad.isOperational() && ad.description.fabric)
                .filter(fabric => fabric) as Fabric[],
        );

        for (const fabric of this.#context.fabrics) {
            if (!fabricsAdvertised.has(fabric)) {
                this.#advertise({ kind: "operational", fabric });
            }
        }
    }

    exitOperationalMode() {
        this.#isOperational = false;

        for (const ad of this.#advertisements) {
            if (ad.isOperational()) {
                ad.cancel();
            }
        }
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
        await Advertisement.closeAll([...this.#advertisements].filter(ad => ad.advertiser === advertiser));
    }

    async clearAdvertisers() {
        this.#advertisers.clear();
        await Advertisement.closeAll([...this.#advertisements]);
    }

    #advertiseFabric(fabric: Fabric) {
        this.#advertise({ kind: "operational", fabric });
    }

    #advertiseCommissioning() {
        if (this.#commissioningService === undefined) {
            return;
        }
        this.#advertise(this.#commissioningService);
    }

    #advertise(description: ServiceDescription) {
        if (this.#isClosing) {
            return;
        }

        for (const advertiser of this.#advertisers) {
            const ad = advertiser.advertise(description);

            if (ad === undefined) {
                continue;
            }

            ad.catch(reason => {
                logger.error("Error in advertiser", Diagnostic.strong(ad.service), reason);
            });

            this.#advertisements.add(ad);
        }
    }
}
