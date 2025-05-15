/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { DishwasherAlarm } from "#index.js";

DishwasherAlarm.patch({
    classification: "application", pics: "DISHALM",
    details: "This cluster is a derived cluster of the Alarm Base cluster and provides the alarm definition " +
        "related to dishwasher devices.",
    xref: "cluster§8.4",

    children: [
        undefined,

        {
            xref: "cluster§8.4.4.1",

            children: [
                { description: "Water inflow is abnormal" },
                { description: "Water draining is abnormal" },
                { description: "Door or door lock is abnormal" },
                { description: "Unable to reach normal temperature" },
                { description: "Temperature is too high" },
                { description: "Water level is abnormal" }
            ]
        }
    ]
});
