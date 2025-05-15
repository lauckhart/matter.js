/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Channel } from "#index.js";

Channel.patch({
    details: "This cluster provides an interface for controlling the current Channel on a device or endpoint." +
        "\n" +
        "This cluster server would be supported on Video Player devices or endpoints that allow Channel " +
        "control such as a Content App. This cluster provides a list of available channels and provides " +
        "commands for absolute and relative channel changes. Some of these commands and/or their responses " +
        "may be large (see Large Message Quality under Data Model section in [MatterCore]), but they do not " +
        "have the Large quality indicator (L) because they can also be transferred over MRP (see Message " +
        "Reliability Protocol in [MatterCore]) in pages that fit within the MRP MTU limit. However, an " +
        "implementation may leverage a transport like TCP that allows large payloads, if available, to " +
        "minimize the number of messages required to transfer the corresponding payload." +
        "\n" +
        "The cluster server for Channel is implemented by an endpoint that controls the current Channel.",

    xref: { document: "cluster", section: "6.6" },

    children: [
        undefined,

        {
            children: [
                { description: "ChannelList" },
                { description: "LineupInfo" },
                { description: "ElectronicGuide" },
                { description: "RecordProgram" }
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

        {
            children: [
                { description: "The program is scheduled for recording." },
                { description: "The program series is scheduled for recording." },
                { description: "The program is recorded and available to be played." }
            ]
        },

        { children: [{ description: "Multi System Operator" }] },

        {
            children: [
                { description: "Command succeeded" },
                { description: "More than one equal match for the ChannelInfoStruct passed in." },
                { description: "No matches for the ChannelInfoStruct passed in." }
            ]
        },

        {
            children: [
                { description: "The channel is sourced from a satellite provider." },
                { description: "The channel is sourced from a cable provider." },
                { description: "The channel is sourced from a terrestrial provider." },
                { description: "The channel is sourced from an OTT provider." }
            ]
        }
    ]
});
