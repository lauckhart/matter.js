/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { OperationalState } from "#index.js";

OperationalState.patch({
    details: "This cluster supports remotely monitoring and, where supported, changing the operational state of " +
        "any device where a state machine is a part of the operation." +
        "\n" +
        "This cluster defines common states, scoped to this cluster (e.g. Stopped, Running, Paused, Error). A " +
        "derived cluster specification may define more states scoped to the derivation. Manufacturer specific " +
        "states are supported in this cluster and any derived clusters thereof. When defined in a derived " +
        "instance, such states are scoped to the derivation." +
        "\n" +
        "Actual state transitions are dependent on both the implementation, and the requirements that may " +
        "additionally be imposed by a derived cluster." +
        "\n" +
        "An implementation that supports remotely starting its operation can make use of this cluster’s Start " +
        "command to do so. A device that supports remote pause or stop of its currently selected operation " +
        "can similarly make use of this cluster’s Pause and Stop commands to do so. The ability to remotely " +
        "pause or stop is independent of how the operation was started (for example, an operation started by " +
        "using a manual button press can be stopped by using a Stop command if the device supports remotely " +
        "stopping the operation)." +
        "\n" +
        "Additionally, this cluster provides events for monitoring the operational state of the device.",

    xref: { document: "cluster", section: "1.14" },

    children: [
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
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
                { description: "The device is in an error state" }
            ]
        },

        undefined,

        {
            children: [
                { description: "The device is not in an error state" },
                { description: "The device is unable to start or resume operation" },
                { description: "The device was unable to complete the current operation" },
                { description: "The device cannot process the command in its current state" }
            ]
        }
    ]
});
