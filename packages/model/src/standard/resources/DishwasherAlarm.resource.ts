/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Resource } from "#models/Resource.js";

Resource.add({
    name: "DishwasherAlarm", tag: "cluster",
    classification: "application", pics: "DISHALM",
    details: "This cluster is a derived cluster of the Alarm Base cluster and provides the alarm definition " +
        "related to dishwasher devices.",
    xref: "cluster§8.4",

    children: [{
        name: "AlarmBitmap", tag: "datatype",
        xref: "cluster§8.4.4.1",

        children: [
            { name: "InflowError", tag: "field", description: "Water inflow is abnormal" },
            { name: "DrainError", tag: "field", description: "Water draining is abnormal" },
            { name: "DoorError", tag: "field", description: "Door or door lock is abnormal" },
            { name: "TempTooLow", tag: "field", description: "Unable to reach normal temperature" },
            { name: "TempTooHigh", tag: "field", description: "Temperature is too high" },
            { name: "WaterLevelError", tag: "field", description: "Water level is abnormal" }
        ]
    }]
});
