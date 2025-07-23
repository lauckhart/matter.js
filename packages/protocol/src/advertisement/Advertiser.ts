/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Advertisement } from "./Advertisement.js";
import type { NodeDescription } from "./NodeDescription.js";

/**
 * A component that provides {@link Advertisement} instances.
 */
export interface Advertiser {
    /**
     * Create a commissionable {@link Advertisement} for a node.
     */
    createCommissionableAdvertisement(description: NodeDescription.Commissionable): Advertisement;

    /**
     * Create an operational {@link Advertisement} for a fabric.
     *
     * Returns undefined if the advertiser does not support operational advertisement.
     */
    createOperationalAdvertisement(description: NodeDescription.Operational): Advertisement | undefined;

    /**
     * Create a commissionable {@link Advertisement} for a UDC (user-directed commissioning) service.
     *
     * Returns undefined if the advertiser does not support commissioner advertisement.
     */
    createCommissionerAdvertisement(description: NodeDescription.Commissioner): Advertisement | undefined;

    /**
     * Destroy the instance.
     */
    close(): Promise<void>;
}
