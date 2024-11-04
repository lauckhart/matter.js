/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ReadAction } from "./ReadAction.js";

/**
 * Subscribes to attribute and event updates.
 *
 * @see {@link MatterSpecification.v11.Core} § 8.5.2
 */
export type SubscribeAction = ReadAction & {
    keepSubscriptions?: boolean;
    minIntervalFloorSeconds?: number;
    maxIntervalCeilingSeconds?: number;
};
