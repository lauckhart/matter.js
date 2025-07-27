/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Advertisement } from "./Advertisement.js";
import { ServiceDescription } from "./ServiceDescription.js";

/**
 * A component that provides {@link Advertisement} instances.
 */
export interface Advertiser {
    /**
     * Begin advertising.
     *
     * Returns undefined if the advertiser does not support this type of advertisement.
     */
    advertise(description: ServiceDescription): Advertisement | undefined;

    /**
     * Destroy the instance.
     */
    close(): Promise<void>;
}
