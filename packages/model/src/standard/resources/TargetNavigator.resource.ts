/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { TargetNavigator } from "#index.js";

TargetNavigator.patch({
    classification: "application", pics: "TGTNAV",

    details: "This cluster provides an interface for UX navigation within a set of targets on a device or " +
        "endpoint." +
        "\n" +
        "This cluster would be supported on Video Player devices or devices with navigable user interfaces. " +
        "This cluster would also be supported on endpoints with navigable user interfaces such as a Content " +
        "App. It supports listing a set of navigation targets, tracking and changing the current target." +
        "\n" +
        "The cluster server for Target Navigator is implemented by endpoints on a device that support UX " +
        "navigation." +
        "\n" +
        "When this cluster is implemented for a Content App endpoint, the Video Player device containing the " +
        "endpoint shall launch the Content App when a client invokes the NavigateTarget command.",

    xref: { document: "cluster", section: "6.11" },

    children: [
        undefined,

        {
            details: "Indicates a list of targets that can be navigated to within the experience presented to the user by " +
                "the Endpoint (Video Player or Content App). The list shall NOT contain any entries with the same " +
                "Identifier in the TargetInfoStruct object.",
            xref: { document: "cluster", section: "6.11.5.1" }
        },

        {
            details: "Indicates the Identifier for the target which is currently in foreground on the corresponding " +
                "Endpoint (Video Player or Content App), or 0xFF to indicate that no target is in the foreground." +
                "\n" +
                "When not 0xFF, the CurrentTarget shall be an Identifier value contained within one of the " +
                "TargetInfoStruct objects in the TargetList attribute.",
            xref: { document: "cluster", section: "6.11.5.2" }
        },

        {
            details: "This event shall be generated when there is a change in either the active target or the list of " +
                "available targets or both.",
            xref: { document: "cluster", section: "6.11.7.1" }
        },

        {
            details: "Upon receipt, this shall navigation the UX to the target identified.",
            xref: { document: "cluster", section: "6.11.6.1" },

            children: [
                {
                    details: "This field shall indicate the Identifier for the target for UX navigation. The Target shall be an " +
                        "Identifier value contained within one of the TargetInfoStruct objects in the TargetList attribute.",
                    xref: { document: "cluster", section: "6.11.6.1.1" }
                },
                {
                    details: "This field shall indicate Optional app-specific data.",
                    xref: { document: "cluster", section: "6.11.6.1.2" }
                }
            ]
        },

        {
            details: "This command shall be generated in response to NavigateTarget command.",
            xref: { document: "cluster", section: "6.11.6.2" },

            children: [
                {
                    details: "This field shall indicate the of the command.",
                    xref: { document: "cluster", section: "6.11.6.2.1" }
                },
                {
                    details: "This field shall indicate Optional app-specific data.",
                    xref: { document: "cluster", section: "6.11.6.2.2" }
                }
            ]
        },

        {
            xref: { document: "cluster", section: "6.11.4.1" },
            children: [
                { description: "Command succeeded" },
                { description: "Requested target was not found in the TargetList" },
                { description: "Target request is not allowed in current state." }
            ]
        },

        {
            details: "This indicates an object describing the navigable target.",
            xref: { document: "cluster", section: "6.11.4.2" },

            children: [
                {
                    details: "This field shall contain an unique id within the TargetList.",
                    xref: { document: "cluster", section: "6.11.4.2.1" }
                },
                {
                    details: "This field shall contain a name string for the TargetInfoStruct.",
                    xref: { document: "cluster", section: "6.11.4.2.2" }
                }
            ]
        }
    ]
});
