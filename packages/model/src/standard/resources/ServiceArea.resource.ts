/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ServiceArea } from "#index.js";

ServiceArea.patch({
    details: "This cluster provides an interface for controlling the areas where a device should operate, for " +
        "reporting the status at each area, and for querying the current area." +
        "\n" +
        "The device may operate at one area at a time, as in the case of a mobile device, such as a robot. " +
        "Other devices may operate at (service) multiple areas simultaneously, as in the case of a sensor " +
        "that can monitor multiple areas. This cluster specification uses the term \"operate\" to describe both " +
        "the operating and servicing actions, regardless of the device type." +
        "\n" +
        "The cluster allows the client to select one or more areas on the server, to indicate where the " +
        "device SHOULD attempt to operate. An area is one of a list of options that may be presented by a " +
        "client for a user choice, or understood by the client, via the semantic data of the area." +
        "\n" +
        "The area semantic data is a combination of semantic tags, indicating one or more of the following: " +
        "the building floor, area type, landmark, and relative position.",

    xref: { document: "cluster", section: "1.17" },

    children: [
        undefined,

        {
            children: [
                { description: "SelectWhileRunning" },
                { description: "ProgressReporting" },
                { description: "Maps" }
            ]
        },

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
        undefined,

        {
            children: [
                {
                    description: "The device has not yet started operating at the given area, or has not finished operating at that area but it is not currently operating at the area"
                },
                { description: "The device is currently operating at the given area" },
                {
                    description: "The device has skipped the given area, before or during operating at it, due to a SkipArea command, due an out of band command (e.g. from the vendor’s application), due to a vendor specific reason, such as a time limit used by the device, or due the device ending operating unsuccessfully"
                },
                { description: "The device has completed operating at the given area" }
            ]
        },

        {
            children: [
                {
                    description: "Attempting to operate in the areas identified by the entries of the NewAreas field is allowed and possible. The SelectedAreas attribute is set to the value of the NewAreas field."
                },
                {
                    description: "The value of at least one of the entries of the NewAreas field doesn’t match any entries in the SupportedAreas attribute."
                },
                { description: "The received request cannot be handled due to the current mode of the device." },
                {
                    description: "The set of values is invalid. For example, areas on different floors, that a robot knows it can’t reach on its own."
                }
            ]
        },

        {
            children: [
                {
                    description: "Skipping the area is allowed and possible, or the device was operating at the last available area and has stopped."
                },
                { description: "The SelectedAreas attribute is empty." },
                {
                    description: "The received request cannot be handled due to the current mode of the device. For example, the CurrentArea attribute is null or the device is not operating."
                },
                { description: "The SkippedArea field doesn’t match an entry in the SupportedAreas list." }
            ]
        }
    ]
});
