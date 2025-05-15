/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ModeBase } from "#index.js";

ModeBase.patch({
    details: "This cluster provides an interface for controlling a characteristic of a device that can be set to " +
        "one of several predefined values. For example, the light pattern of a disco ball, the mode of a " +
        "massage chair, or the wash cycle of a laundry machine." +
        "\n" +
        "The server allows the client to set a mode on the server. A mode is one of a list of options that " +
        "may be presented by a client for a user choice, or understood by the client, via the mode’s tags." +
        "\n" +
        "A mode tag is either a standard tag within a standard category namespace, or a manufacturer specific " +
        "tag, within the namespace of the vendor ID of the manufacturer." +
        "\n" +
        "Any derived cluster specification based on this cluster shall support the standard mode tag value " +
        "definitions and command status definitions defined in this cluster and may define additional " +
        "standard mode tag values and standard command status values that are supported in the respective " +
        "derived cluster instances." +
        "\n" +
        "Each cluster ID that indicates this specification shall define a distinct purpose for the cluster " +
        "instance. For example: A LightBlinking cluster ID supports blinking modes for a light (and is " +
        "described that way)." +
        "\n" +
        "An anonymous mode shall NOT replace the meaning of a standard mode tag, when one exists, for the " +
        "cluster purpose.",

    xref: { document: "cluster", section: "1.10" },

    children: [
        undefined,
        { children: [{ description: "OnOff" }] },
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
                {
                    description: "Switching to the mode indicated by the NewMode field is allowed and possible. The CurrentMode attribute is set to the value of the NewMode field."
                },
                {
                    description: "The value of the NewMode field doesn’t match any entries in the SupportedModes attribute."
                },
                {
                    description: "Generic failure code, indicating that switching to the mode indicated by the NewMode field is not allowed or not possible."
                },
                { description: "The received request cannot be handled due to the current mode of the device" }
            ]
        }
    ]
});
