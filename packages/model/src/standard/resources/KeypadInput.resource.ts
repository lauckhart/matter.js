/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { KeypadInput } from "#index.js";

KeypadInput.patch({
    details: "This cluster provides an interface for key code based input and control on a device like a Video " +
        "Player or an endpoint like a Content App. This may include text or action commands such as UP, DOWN, " +
        "and SELECT." +
        "\n" +
        "This cluster would be supported on Video Player devices as well as devices that support remote " +
        "control input from a keypad or remote. This cluster provides the list of supported keypad inputs and " +
        "provides a command for sending them." +
        "\n" +
        "The cluster server for Keypad Input is implemented by a device that can receive keypad input, such " +
        "as a Video Player, or an endpoint that can receive keypad input, such as a Content App." +
        "\n" +
        "The key codes used are those defined in the HDMI CEC specification (see HDMI)." +
        "\n" +
        "Devices may understand a subset of these key codes. Feature flags are used to indicate a specific " +
        "subset that is supported. Device may support additional codes beyond what is indicated in feature " +
        "flags.",

    xref: { document: "cluster", section: "6.8" },

    children: [
        undefined,

        {
            children: [
                { description: "NavigationKeyCodes" },
                { description: "LocationKeys" },
                { description: "NumberKeys" }
            ]
        },

        undefined,
        undefined,

        {
            children: [
                { description: "Succeeded" },
                { description: "Key code is not supported." },
                { description: "Requested key code is invalid in the context of the responder’s current state." }
            ]
        }
    ]
});
