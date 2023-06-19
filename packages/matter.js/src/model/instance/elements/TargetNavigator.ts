/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Matter } from "../Matter.js";

Matter.children.push({
    tag: "cluster", id: 0x0505, name: "TargetNavigator",
    classification: "application", description: "Target Navigator",
    children: [
        {
            tag: "attribute", id: 0x0000, name: "TargetList",
            access: "R V", conformance: "M", default: undefined, type: "list",
            details: "The TargetList attribute SHALL represent a list of targets that can be" +
                     " navigated to within the experience presented to the user by the " +
                     "Endpoint (Video Player or Content App). The list SHALL not contain any" +
                     " entries with the same Identifier in the TargetInfoStruct object",
            xref: { document: "cluster", section: "6.11.3.1" },
            children: [
                {
                    tag: "datatype", name: "entry",
                    type: "TargetInfoStruct"
                }
            ]
        },

        {
            tag: "attribute", id: 0x0001, name: "CurrentTarget",
            access: "R V", conformance: "O", constraint: "desc", default: undefined, quality: "X", type: "uint8",
            details: "The CurrentTarget attribute SHALL represent the Identifier for the " +
                     "target which is currently in foreground on the corresponding Endpoint" +
                     " (Video Player or Content App), or null to indicate that no target is " +
                     "in the foreground",
            xref: { document: "cluster", section: "6.11.3.2" }
        },

        {
            tag: "attribute", id: 0x0000, name: "TargetNavigatorList",
            conformance: "M", type: "list",
            children: [
                {
                    tag: "datatype", name: "entry",
                    type: "TargetInfoStruct"
                }
            ]
        },

        {
            tag: "command", id: 0x0000, name: "NavigateTarget",
            access: "O", conformance: "M", direction: "request", response: "NavigateTargetResponse",
            details: "Upon receipt, this SHALL navigation the UX to the target identified",
            xref: { document: "cluster", section: "6.11.4.1" },
            children: [
                {
                    tag: "datatype", name: "Target",
                    conformance: "M", type: "uint8"
                },

                {
                    tag: "datatype", name: "Data",
                    conformance: "O", type: "string"
                }
            ]
        },

        {
            tag: "command", id: 0x0001, name: "NavigateTargetResponse",
            conformance: "M", direction: "response",
            details: "This command SHALL be generated in response to NavigateTarget command",
            xref: { document: "cluster", section: "6.11.4.2" },
            children: [
                {
                    tag: "datatype", name: "Status",
                    conformance: "M", type: "TargetNavigatorStatusEnum"
                },

                {
                    tag: "datatype", name: "Data",
                    conformance: "O", type: "string"
                }
            ]
        },

        {
            tag: "datatype", name: "TargetInfoStruct",
            conformance: "M", type: "struct",
            details: "This indicates an object describing the navigable target",
            xref: { document: "cluster", section: "6.11.5.1" },
            children: [
                {
                    tag: "datatype", id: 0x0000, name: "Identifier",
                    conformance: "M", default: undefined, type: "uint8",
                    details: "An unique id within the TargetList",
                    xref: { document: "cluster", section: "6.11.5.1.1" }
                },

                {
                    tag: "datatype", id: 0x0001, name: "Name",
                    conformance: "M", default: "", type: "string",
                    details: "A name string for the TargetInfoStruct",
                    xref: { document: "cluster", section: "6.11.5.1.2" }
                }
            ]
        },

        {
            tag: "datatype", name: "TargetNavigatorStatusEnum",
            conformance: "M", type: "enum8",
            children: [
                {
                    tag: "datatype", id: 0x0000, name: "Success",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0001, name: "TargetNotFound",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0002, name: "NotAllowed",
                    conformance: "M"
                }
            ]
        }
    ]
});
