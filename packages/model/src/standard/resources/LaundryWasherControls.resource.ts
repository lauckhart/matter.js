/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Resource } from "#models/Resource.js";

Resource.add({
    name: "LaundryWasherControls", tag: "cluster",
    classification: "application", pics: "WASHERCTRL",
    details: "This cluster provides a way to access options associated with the operation of a laundry washer " +
        "device type.",
    xref: "cluster§8.6",

    children: [
        {
            name: "FeatureMap", tag: "attribute",
            xref: "cluster§8.6.4",

            children: [
                {
                    name: "SPIN", tag: "field",
                    details: "This feature indicates multiple spin speeds are supported in at least one supported mode. Note that " +
                        "some modes may not support multiple spin speeds even if this feature is supported.",
                    xref: "cluster§8.6.4.1"
                },

                {
                    name: "RINSE", tag: "field",
                    details: "This feature indicates multiple rinse cycles are supported in at least one supported mode. Note that " +
                        "some modes may not support selection of the number of rinse cycles even if this feature is " +
                        "supported.",
                    xref: "cluster§8.6.4.2"
                }
            ]
        },

        {
            name: "SpinSpeeds", tag: "attribute",
            details: "Indicates the list of spin speeds available to the appliance in the currently selected mode. The " +
                "spin speed values are determined by the manufacturer. At least one spin speed value shall be " +
                "provided in the SpinSpeeds list. The list of spin speeds may change depending on the currently " +
                "selected Laundry Washer mode. For example, Quick mode might have a completely different list of " +
                "SpinSpeeds than Delicates mode.",
            xref: "cluster§8.6.6.1"
        },

        {
            name: "SpinSpeedCurrent", tag: "attribute",

            details: "Indicates the currently selected spin speed. It is the index into the SpinSpeeds list of the " +
                "selected spin speed, as such, this attribute can be an integer between 0 and the number of entries " +
                "in SpinSpeeds - 1. If a value is received that is outside of the defined constraints, a " +
                "CONSTRAINT_ERROR shall be sent as the response. If a value is attempted to be written that doesn’t " +
                "match a valid index (e.g. an index of 5 when the list has 4 values), a CONSTRAINT_ERROR shall be " +
                "sent as the response. If null is written to this attribute, there will be no spin speed for the " +
                "selected cycle. If the value is null, there will be no spin speed on the current mode.",

            xref: "cluster§8.6.6.2"
        },

        {
            name: "NumberOfRinses", tag: "attribute",

            details: "Indicates how many times a rinse cycle shall be performed on a device for the current mode of " +
                "operation. A value of None shall indicate that no rinse cycle will be performed. This value may be " +
                "set by the client to adjust the number of rinses that are performed for" +
                "\n" +
                "the current mode of operation. If the device is not in a compatible state to accept the provided " +
                "value, an INVALID_IN_STATE error shall be sent as the response.",

            xref: "cluster§8.6.6.3"
        },

        {
            name: "SupportedRinses", tag: "attribute",
            details: "Indicates the amount of rinses allowed for a specific mode. Each entry shall indicate a " +
                "NumberOfRinsesEnum value that is possible in the selected mode on the device. The value of this " +
                "attribute may change at runtime based on the currently selected mode. Each entry shall be distinct.",
            xref: "cluster§8.6.6.4"
        },

        {
            name: "NumberOfRinsesEnum", tag: "datatype",
            details: "The NumberOfRinsesEnum provides a representation of the number of rinses that will be performed for " +
                "a selected mode. NumberOfRinsesEnum is derived from enum8. It is up to the device manufacturer to " +
                "determine the mapping between the enum values and the corresponding numbers of rinses.",
            xref: "cluster§8.6.5.1",

            children: [
                { name: "None", tag: "field", description: "This laundry washer mode does not perform rinse cycles" },
                {
                    name: "Normal", tag: "field",
                    description: "This laundry washer mode performs normal rinse cycles determined by the manufacturer"
                },
                { name: "Extra", tag: "field", description: "This laundry washer mode performs an extra rinse cycle" },
                {
                    name: "Max", tag: "field",
                    description: "This laundry washer mode performs the maximum number of rinse cycles determined by the manufacturer"
                }
            ]
        }
    ]
});
