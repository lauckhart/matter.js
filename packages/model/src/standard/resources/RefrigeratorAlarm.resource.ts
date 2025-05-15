/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Resource } from "#models/Resource.js";

Resource.add({
    name: "RefrigeratorAlarm", tag: "cluster",
    classification: "application", pics: "REFALM",
    details: "This cluster is a derived cluster of Alarm Base cluster and provides the alarm definition related to " +
        "refrigerator and temperature controlled cabinet devices.",
    xref: "cluster§8.8",

    children: [
        {
            name: "FeatureMap", tag: "attribute",
            xref: "cluster§8.8.4",
            children: [{ name: "RESET", tag: "field", details: "Supports the ability to reset alarms" }]
        },
        { name: "ModifyEnabledAlarms", tag: "command", xref: "cluster§8.8.7" },

        {
            name: "AlarmBitmap", tag: "datatype",
            xref: "cluster§8.8.5.1",
            children: [{
                name: "DoorOpen", tag: "field",
                description: "The cabinet’s door has been open for a vendor defined amount of time."
            }]
        }
    ]
});
