/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ServiceDescription } from "../advertisement/ServiceDescription.js";
import { Fabric } from "../fabric/Fabric.js";

/** Interface for classes that allow to announce one Matter instance. */
export interface InstanceBroadcaster {
    /** Set a commissionable mode and details to announce a commissionable device. */
    setCommissionMode(deviceData: ServiceDescription.Commissionable): Promise<void>;

    /**
     * Set operational details to Announce an operational device which is already commissioned.
     * Use expireCommissioningAnnouncements = true when Fabrics are changed after a n commissioning process.
     */
    setFabrics(fabrics: Fabric[], expireCommissioningAnnouncements?: boolean): Promise<void>;

    /** Set commissioner details to announce a commissioner service for User directed commissioning (UDC). */
    setCommissionerInfo(commissionerData: ServiceDescription.Commissioner): Promise<void>;

    /** Send out announcements for this instance. */
    announce(): Promise<void>;

    /** Expire the announcement for this operative instance. */
    expireFabricAnnouncement(): Promise<void>;

    /** Expire the announcement for this commissioning instance. */
    expireCommissioningAnnouncement(): Promise<void>;

    /** Expire all announcements. */
    expireAllAnnouncements(): Promise<void>;

    /** Destroy the instance */
    close(): Promise<void>;
}
