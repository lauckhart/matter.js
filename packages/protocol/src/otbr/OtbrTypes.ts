/**
 * @license
 * Copyright 2022-2026 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { MatterError } from "@matter/general";

/**
 * Base class for all OTBR-related errors.
 */
export class OtbrError extends MatterError {}

/**
 * Error thrown when an OTBR REST API request fails.
 */
export class OtbrResponseError extends OtbrError {
    constructor(
        readonly statusCode: number,
        readonly body: string,
        options?: ErrorOptions,
    ) {
        super(`OTBR request failed with status ${statusCode}: ${body}`, options);
    }
}

/**
 * Thread node states as reported by the OTBR REST API.
 */
export type OtbrNodeState = "disabled" | "detached" | "child" | "router" | "leader";

/**
 * Timestamp fields used in OTBR dataset JSON responses.
 */
export interface OtbrDatasetTimestamp {
    seconds: number;
    ticks: number;
    authoritative: boolean;
}

/**
 * JSON representation of an active operational dataset from the OTBR REST API.
 */
export interface OtbrActiveDataset {
    activeTimestamp: OtbrDatasetTimestamp;
    networkKey: string;
    networkName: string;
    extPanId: string;
    panId: string;
    channel: number;
    meshLocalPrefix: string;
    securityPolicy: {
        rotationTime: number;
        flags: number;
    };
    pskc: string;
    channelMask: number;
}

/**
 * JSON representation of a pending operational dataset from the OTBR REST API.
 */
export interface OtbrPendingDataset extends OtbrActiveDataset {
    pendingTimestamp: OtbrDatasetTimestamp;
    delay: number;
}
