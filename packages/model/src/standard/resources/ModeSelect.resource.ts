/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ModeSelect } from "#index.js";

ModeSelect.patch({
    details: "This cluster provides an interface for controlling a characteristic of a device that can be set to " +
        "one of several predefined values. For example, the light pattern of a disco ball, the mode of a " +
        "massage chair, or the wash cycle of a laundry machine." +
        "\n" +
        "The server allows the client to set a mode on the server. A mode is one of a list of options that " +
        "may be presented by a client for a user choice, or understood by the client, via the semantic tags " +
        "on the" +
        "\n" +
        "mode." +
        "\n" +
        "A semantic tag is either a standard tag within a standard category namespace, or a manufacturer " +
        "specific tag, within the namespace of the vendor ID of the manufacturer. If there is no semantic " +
        "tag, the mode is anonymous, and the selection is made by the user solely based on the Label string." +
        "\n" +
        "Each cluster ID that indicates this specification shall define a distinct purpose for the cluster " +
        "instance. For example: A LightBlinking cluster ID supports blinking modes for a light (and is " +
        "described that way)." +
        "\n" +
        "An anonymous mode shall support the derived cluster purpose. A manufacturer specific semantic tag " +
        "shall support the derived cluster purpose. An anonymous mode shall NOT replace the meaning of a " +
        "standard semantic tag, when one exists, for the cluster purpose.",

    xref: { document: "cluster", section: "1.9" },
    children: [undefined, { children: [{ description: "OnOff" }] }]
});
