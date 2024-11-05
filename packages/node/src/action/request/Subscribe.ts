/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { UINT16_MAX } from "#general";
import { MalformedActionError } from "./ActionRequest.js";
import { Read } from "./Read.js";

/**
 * Defines a subscription.
 *
 * The subscription interval fields are optional as matter.js will set them to appropriate defaults based on physical
 * attributes of the target device.  If you are unsure of appropriate values do not set them.
 */
export interface Subscribe extends Omit<Read, "kind"> {
    kind: "subscribe";

    keepSubscriptions: boolean;
    minIntervalFloorSeconds?: number;
    maxIntervalCeilingSeconds?: number;
}

export function Subscribe<const C extends Action.ClusterSpecifier>(definition: Subscribe.Definition<C>): Subscribe {
    const subscribe = Read(definition) as unknown as Subscribe;
    subscribe.kind = "subscribe";

    const { keepSubscriptions, minIntervalFloorSeconds, maxIntervalCeilingSeconds } = definition;
    subscribe.keepSubscriptions = keepSubscriptions ?? true;

    if (minIntervalFloorSeconds !== undefined) {
        if (minIntervalFloorSeconds < 0 || minIntervalFloorSeconds > UINT16_MAX) {
            throw new MalformedActionError(`Minimum interval floor ${minIntervalFloorSeconds} is out of range`);
        }
        subscribe.minIntervalFloorSeconds = minIntervalFloorSeconds;
    }

    if (maxIntervalCeilingSeconds !== undefined) {
        if (maxIntervalCeilingSeconds < 0 || maxIntervalCeilingSeconds > UINT16_MAX) {
            throw new MalformedActionError(`Maximum interval ceiling ${maxIntervalCeilingSeconds} is out of range`);
        }
        subscribe.maxIntervalCeilingSeconds = maxIntervalCeilingSeconds;
    }

    return subscribe;
}

export namespace Subscribe {
    export interface Definition<C extends Action.ClusterSpecifier> extends Read.Definition<C> {
        keepSubscriptions?: boolean;
        minIntervalFloorSeconds?: number;
        maxIntervalCeilingSeconds?: number;
    }
}

// TODO - subscribe DSL extending read DSL
