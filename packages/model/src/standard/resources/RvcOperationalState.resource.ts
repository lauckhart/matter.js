/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { RvcOperationalState } from "#index.js";

RvcOperationalState.patch({
    details: "This cluster is derived from the Operational State cluster and provides an interface for monitoring " +
        "the operational state of a robotic vacuum cleaner.",
    xref: { document: "cluster", section: "7.4" },

    children: [
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,

        {
            children: [
                { description: "The device is stopped" },
                { description: "The device is operating" },
                { description: "The device is paused during an operation" },
                { description: "The device is in an error state" },
                { description: "The device is en route to the charging dock" },
                { description: "The device is charging" },
                { description: "The device is on the dock, not charging" }
            ]
        },

        {
            children: [
                { description: "The device is not in an error state" },
                { description: "The device is unable to start or resume operation" },
                { description: "The device was unable to complete the current operation" },
                { description: "The device cannot process the command in its current state" },
                { description: "The device has failed to find or reach the charging dock" },
                { description: "The device is stuck and requires manual intervention" },
                { description: "The device has detected that its dust bin is missing" },
                { description: "The device has detected that its dust bin is full" },
                { description: "The device has detected that its water tank is empty" },
                { description: "The device has detected that its water tank is missing" },
                { description: "The device has detected that its water tank lid is open" },
                { description: "The device has detected that its cleaning pad is missing" }
            ]
        }
    ]
});
