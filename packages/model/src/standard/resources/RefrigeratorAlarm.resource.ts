/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { RefrigeratorAlarm } from "#index.js";

RefrigeratorAlarm.patch({
    details: "This cluster is a derived cluster of Alarm Base cluster and provides the alarm definition related to " +
        "refrigerator and temperature controlled cabinet devices.",
    xref: { document: "cluster", section: "8.8" },

    children: [
        undefined,
        { children: [{ description: "Reset" }] },
        undefined,
        { children: [{ description: "The cabinet’s door has been open for a vendor defined amount of time." }] }
    ]
});
