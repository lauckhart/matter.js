/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { OtaSoftwareUpdateRequestor } from "#index.js";

OtaSoftwareUpdateRequestor.patch({
    xref: { document: "core", section: "11.20.7" },

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

        {
            children: [
                { description: "An OTA Provider is announcing its presence." },
                {
                    description: "An OTA Provider is announcing, either to a single Node or to a group of Nodes, that a new Software Image MAY be available."
                },
                {
                    description: "An OTA Provider is announcing, either to a single Node or to a group of Nodes, that a new Software Image MAY be available, which contains an update that needs to be applied urgently."
                }
            ]
        },

        {
            children: [
                { description: "Current state is not yet determined." },
                { description: "Indicate a Node not yet in the process of software update." },
                { description: "Indicate a Node in the process of querying an OTA Provider." },
                { description: "Indicate a Node waiting after a Busy response." },
                { description: "Indicate a Node currently in the process of downloading a software update." },
                { description: "Indicate a Node currently in the process of verifying and applying a software update." },
                { description: "Indicate a Node waiting caused by AwaitNextAction response." },
                { description: "Indicate a Node in the process of recovering to a previous version." },
                { description: "Indicate a Node is capable of user consent." }
            ]
        },

        {
            children: [
                { description: "The reason for a state change is unknown." },
                { description: "The reason for a state change is the success of a prior operation." },
                { description: "The reason for a state change is the failure of a prior operation." },
                { description: "The reason for a state change is a time-out." },
                { description: "The reason for a state change is a request by the OTA Provider to wait." }
            ]
        }
    ]
});
