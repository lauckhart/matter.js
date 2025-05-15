/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Resource } from "#models/Resource.js";

Resource.add({
    name: "LaundryDryerControls", tag: "cluster",
    classification: "application", pics: "DRYERCTRL",
    details: "This cluster provides a way to access options associated with the operation of a laundry dryer " +
        "device type.",
    xref: "cluster§8.9",

    children: [
        {
            name: "SupportedDrynessLevels", tag: "attribute",
            details: "Indicates the list of supported dryness levels available to the appliance in the currently selected " +
                "mode. The dryness level values are determined by the manufacturer. At least one dryness level value " +
                "shall be provided in the SupportedDrynessLevels list. The list of dryness levels may change " +
                "depending on the currently-selected Laundry Dryer mode.",
            xref: "cluster§8.9.5.1"
        },

        {
            name: "SelectedDrynessLevel", tag: "attribute",

            details: "Indicates the currently-selected dryness level and it shall be the index into the " +
                "SupportedDrynessLevels list of the selected dryness level." +
                "\n" +
                "If an attempt is made to write this attribute with a value other than null or a value contained in " +
                "SupportedDrynessLevels, a CONSTRAINT_ERROR response shall be sent as the response. If an attempt is " +
                "made to write this attribute while the device is not in a state that supports modifying the dryness " +
                "level, an INVALID_IN_STATE error shall be sent as the response. A value of null shall indicate that " +
                "there will be no dryness level setting for the current mode.",

            xref: "cluster§8.9.5.2"
        },

        {
            name: "DrynessLevelEnum", tag: "datatype",
            details: "This enum provides a representation of the level of dryness that will be used while drying in a " +
                "selected mode." +
                "\n" +
                "It is up to the device manufacturer to determine the mapping between the enum values and the " +
                "corresponding temperature level.",
            xref: "cluster§8.9.4.1",

            children: [
                { name: "Low", tag: "field", description: "Provides a low dryness level for the selected mode" },
                {
                    name: "Normal", tag: "field",
                    description: "Provides the normal level of dryness for the selected mode"
                },
                { name: "Extra", tag: "field", description: "Provides an extra dryness level for the selected mode" },
                { name: "Max", tag: "field", description: "Provides the max dryness level for the selected mode" }
            ]
        }
    ]
});
