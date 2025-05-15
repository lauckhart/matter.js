/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Resource } from "#models/Resource.js";

Resource.add({
    name: "TargetNavigator", tag: "cluster",
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

    xref: "cluster§6.11",

    children: [
        {
            name: "TargetList", tag: "attribute",
            details: "Indicates a list of targets that can be navigated to within the experience presented to the user by " +
                "the Endpoint (Video Player or Content App). The list shall NOT contain any entries with the same " +
                "Identifier in the TargetInfoStruct object.",
            xref: "cluster§6.11.5.1"
        },

        {
            name: "CurrentTarget", tag: "attribute",
            details: "Indicates the Identifier for the target which is currently in foreground on the corresponding " +
                "Endpoint (Video Player or Content App), or 0xFF to indicate that no target is in the foreground." +
                "\n" +
                "When not 0xFF, the CurrentTarget shall be an Identifier value contained within one of the " +
                "TargetInfoStruct objects in the TargetList attribute.",
            xref: "cluster§6.11.5.2"
        },

        {
            name: "TargetUpdated", tag: "event",
            details: "This event shall be generated when there is a change in either the active target or the list of " +
                "available targets or both.",
            xref: "cluster§6.11.7.1"
        },

        {
            name: "NavigateTarget", tag: "command",
            details: "Upon receipt, this shall navigation the UX to the target identified.",
            xref: "cluster§6.11.6.1",

            children: [
                {
                    name: "Target", tag: "field",
                    details: "This field shall indicate the Identifier for the target for UX navigation. The Target shall be an " +
                        "Identifier value contained within one of the TargetInfoStruct objects in the TargetList attribute.",
                    xref: "cluster§6.11.6.1.1"
                },

                {
                    name: "Data", tag: "field",
                    details: "This field shall indicate Optional app-specific data.",
                    xref: "cluster§6.11.6.1.2"
                }
            ]
        },

        {
            name: "NavigateTargetResponse", tag: "command",
            details: "This command shall be generated in response to NavigateTarget command.",
            xref: "cluster§6.11.6.2",

            children: [
                {
                    name: "Status", tag: "field",
                    details: "This field shall indicate the of the command.",
                    xref: "cluster§6.11.6.2.1"
                },
                {
                    name: "Data", tag: "field",
                    details: "This field shall indicate Optional app-specific data.",
                    xref: "cluster§6.11.6.2.2"
                }
            ]
        },

        {
            name: "StatusEnum", tag: "datatype",
            xref: "cluster§6.11.4.1",

            children: [
                { name: "Success", tag: "field", description: "Command succeeded" },
                {
                    name: "TargetNotFound", tag: "field",
                    description: "Requested target was not found in the TargetList"
                },
                { name: "NotAllowed", tag: "field", description: "Target request is not allowed in current state." }
            ]
        },

        {
            name: "TargetInfoStruct", tag: "datatype",
            details: "This indicates an object describing the navigable target.",
            xref: "cluster§6.11.4.2",

            children: [
                {
                    name: "Identifier", tag: "field",
                    details: "This field shall contain an unique id within the TargetList.",
                    xref: "cluster§6.11.4.2.1"
                },
                {
                    name: "Name", tag: "field",
                    details: "This field shall contain a name string for the TargetInfoStruct.",
                    xref: "cluster§6.11.4.2.2"
                }
            ]
        }
    ]
});
