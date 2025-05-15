/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { RefrigeratorAlarm } from "#index.js";

RefrigeratorAlarm.patch({
    classification: "application", pics: "REFALM",
    details: "This cluster is a derived cluster of Alarm Base cluster and provides the alarm definition related to " +
        "refrigerator and temperature controlled cabinet devices.",
    xref: { document: "cluster", section: "8.8" },

    children: [
        undefined,
        {
            xref: { document: "cluster", section: "8.8.4" },
            children: [{ description: "Reset", details: "Supports the ability to reset alarms" }]
        },
        { xref: { document: "cluster", section: "8.8.7" } },
        {
            xref: { document: "cluster", section: "8.8.5.1" },
            children: [{ description: "The cabinet’s door has been open for a vendor defined amount of time." }]
        }
    ]
});
