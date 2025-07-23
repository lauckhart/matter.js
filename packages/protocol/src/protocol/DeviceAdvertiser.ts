/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { CommissioningMode } from "#advertisement/CommissioningMode.js";
import { NodeDescription } from "#advertisement/NodeDescription.js";
import { InstanceBroadcaster } from "#common/InstanceBroadcaster.js";
import { FabricManager } from "#fabric/FabricManager.js";
import {
    AsyncObservable,
    BasicMultiplex,
    Diagnostic,
    Environment,
    Environmental,
    Logger,
    MatterAggregateError,
    Mutex,
    ObserverGroup,
    Time,
    Timer,
} from "#general";
import { SessionManager } from "#session/SessionManager.js";
import { DEVICE_ANNOUNCEMENT_DURATION_MS, DEVICE_ANNOUNCEMENT_INTERVAL_MS } from "#types";

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
    #broadcasters = new Set<InstanceBroadcaster>();
    #timedOut = AsyncObservable<[]>();
    #observers = new ObserverGroup();
    #interval: Timer;
    #startTime: number | null = null;
    #isClosing = false;
    #commissioningMode = CommissioningMode.NotCommissioning;

    // We synchronize advertisement logic using this mutex
    #mutex = new Mutex(this);

    // We track promises for event emits here because doing so in the mutex could cause deadlock if the observers
    // trigger advertising again
    #emitters = new BasicMultiplex();

    constructor(context: DeviceAdvertiserContext) {
        this.#context = context;

        this.#interval = Time.getPeriodicTimer(
            "Server node announcement",
            DEVICE_ANNOUNCEMENT_INTERVAL_MS,
            this.advertise.bind(this),
        );

        // When a fabric is deleted we exit operational mode and expire announcements
        this.#observers.on(this.#context.fabrics.events.deleted, () => {
            if (this.#context.fabrics.length === 0) {
                // Last fabric got removed, so expire all operational records
                this.#mutex.run(this.#exitOperationalMode.bind(this));
            } else {
                // At least one fabric is still present, so re-announce
                this.advertise(true);
            }
        });

        // When a fabric is added we begin advertising it
        this.#observers.on(this.#context.fabrics.events.added, () => {
            this.startAdvertising();
        });

        // Each time we retry a packet we also send a new announcement
        this.#observers.on(this.#context.sessions.resubmissionStarted, (session?) => {
            logger.debug(`Resubmission started, re-announce node ${session?.nodeId}`);
            this.advertise(true);
        });

        // When a session closes, if the session's fabric still exists but has no active sessions then we begin
        // advertising again so peers will find us
        this.#observers.on(this.#context.sessions.sessions.deleted, session => {
            const currentFabricIndex = session.fabric?.fabricIndex;

            // Verify if the session associated fabric still exists
            const existingSessionFabric =
                currentFabricIndex === undefined
                    ? undefined
                    : this.#context.fabrics.findByIndex(currentFabricIndex)?.fabricIndex;

            // When a session closes, announce existing fabrics again so that controller can detect the device again.
            // When session was closed and no fabric exist anymore then this is triggering a factory reset in upper
            // layer and it would be not good to announce a commissionable device and then reset that again with the
            // factory reset
            if (this.#context.fabrics.length > 0 || session.isPase || !existingSessionFabric) {
                this.startAdvertising();
            }
        });

        // TODO - this may be unnecessary:
        //   If session still exists: This is a no-op because advertise() won't advertise the fabric
        //   If no sessions exist: We will start advertising anyway because of deleted session handler
        this.#observers.on(this.#context.sessions.subscriptionsChanged, (_session, subscription) => {
            if (subscription.isCanceledByPeer) {
                logger.debug(`Subscription canceled by peer, re-announce`);
                this.startAdvertising.bind(this);
            }
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
     * Emitted when the advertising window closes with no response.
     */
    get timedOut() {
        return this.#timedOut;
    }

    async enterCommissioningMode(deviceData: NodeDescription.Commissionable) {
        this.#commissioningMode = deviceData.mode;
        for (const broadcaster of this.#broadcasters) {
            await broadcaster.setCommissionMode(deviceData);
        }
        this.startAdvertising();
    }

    async exitCommissioningMode() {
        this.#commissioningMode = CommissioningMode.NotCommissioning;
        this.#interval.stop();
        this.#startTime = null;
        for (const broadcaster of this.#broadcasters) {
            await broadcaster.expireCommissioningAnnouncement();
        }
    }

    startAdvertising() {
        if (this.#isClosing) {
            return;
        }

        if (this.#interval.isRunning) {
            this.#interval.stop();
        }
        this.#startTime = Time.nowMs();
        this.#interval.start();
        this.advertise();
    }

    advertise(once = false) {
        if (this.#isClosing) {
            return;
        }

        const advertise = async () => {
            if (!once) {
                // Stop announcement if duration is reached
                if (this.#startTime !== null && Time.nowMs() - this.#startTime > DEVICE_ANNOUNCEMENT_DURATION_MS) {
                    logger.debug("Announcement duration reached, stop announcing");
                    this.#emitters.add(this.#timedOut.emit(), "advertisement timeout observer");
                    return;
                }

                if (this.#commissioningMode !== CommissioningMode.NotCommissioning) {
                    // Re-Announce but do not reset Fabrics
                    for (const broadcaster of this.#broadcasters) {
                        await broadcaster.announce();
                    }
                    return;
                }
            }

            const fabrics = this.#context.fabrics;

            if (fabrics.length) {
                let fabricsWithoutSessions = 0;
                for (const fabric of fabrics) {
                    const session = this.#context.sessions.getSessionForNode(fabric.addressOf(fabric.rootNodeId));
                    if (session === undefined || !session.isSecure || session.subscriptions.size === 0) {
                        fabricsWithoutSessions++;
                        logger.debug(
                            "Announcing",
                            Diagnostic.dict({ fabricIndex: fabric.fabricIndex, fabricId: fabric.fabricId }),
                        );
                    }
                }
                for (const broadcaster of this.#broadcasters) {
                    await broadcaster.setFabrics(fabrics.fabrics);
                    if (fabricsWithoutSessions > 0 || this.#commissioningMode !== CommissioningMode.NotCommissioning) {
                        await broadcaster.announce();
                    }
                }
            } else {
                // Expire operational Fabric announcements (if fabric got just deleted)
                await this.#exitOperationalMode();
            }
        };

        this.#mutex.run(advertise);
    }

    async #exitOperationalMode() {
        for (const broadcaster of this.#broadcasters) {
            await broadcaster.expireFabricAnnouncement();
        }
    }

    async close() {
        this.#isClosing = true;
        await this.#emitters;
        await this.#mutex;
        this.#observers.close();
        this.#interval.stop();
        await this.clearBroadcasters();
    }

    hasBroadcaster(broadcaster: InstanceBroadcaster) {
        return this.#broadcasters.has(broadcaster);
    }

    addBroadcaster(broadcaster: InstanceBroadcaster) {
        this.#broadcasters.add(broadcaster);
    }

    async deleteBroadcaster(broadcaster: InstanceBroadcaster) {
        if (this.#broadcasters.delete(broadcaster)) {
            await broadcaster.expireAllAnnouncements();
        }
    }

    async clearBroadcasters() {
        const broadcasters = [...this.#broadcasters];
        const closed = MatterAggregateError.allSettled(
            broadcasters.map(b => b.close()),
            "Error closing broadcasters",
        ).catch(error => logger.error(error));
        this.#broadcasters.clear();
        await closed;
    }
}
