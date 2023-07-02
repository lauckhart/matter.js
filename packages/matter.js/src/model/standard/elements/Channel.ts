/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Matter } from "../Matter.js";

Matter.children.push({
    tag: "cluster", name: "Channel", id: 0x504, classification: "application", description: "Channel",
    details: "This cluster provides an interface for controlling the current Channel on a device.",
    xref: { document: "cluster", section: "6.6" },

    children: [
        {
            tag: "attribute", name: "FeatureMap", id: 0xfffc, type: "FeatureMap",
            xref: { document: "cluster", section: "6.6.2" },

            children: [
                {
                    tag: "datatype", name: "CL", id: 0x0, description: "ChannelList",
                    details: "Provides list of available channels."
                },
                {
                    tag: "datatype", name: "LI", id: 0x1, description: "LineupInfo",
                    details: "Provides lineup info, which is a reference to an external source of lineup information."
                }
            ]
        },

        {
            tag: "attribute", name: "ChannelList", id: 0x0, type: "list", access: "R V", conformance: "CL",
            constraint: "None",
            details: "This optional list provides the channels supported.",
            xref: { document: "cluster", section: "6.6.3.1" },
            children: [ { tag: "datatype", name: "entry", type: "ChannelInfoStruct" } ]
        },

        {
            tag: "attribute", name: "Lineup", id: 0x1, type: "LineupInfoStruct", access: "R V",
            conformance: "LI", constraint: "desc", default: null, quality: "X",
            details: "This optional field identifies the channel lineup using external data sources.",
            xref: { document: "cluster", section: "6.6.3.2" }
        },

        {
            tag: "attribute", name: "CurrentChannel", id: 0x2, type: "ChannelInfoStruct", access: "R V",
            conformance: "O", constraint: "desc", default: null, quality: "X",
            details: "This optional field contains the current channel. When supported but a channel is not currently " +
                     "tuned to (if a content application is in foreground), the value of the field SHALL be null.",
            xref: { document: "cluster", section: "6.6.3.3" }
        },

        {
            tag: "command", name: "ChangeChannel", id: 0x0, access: "O", conformance: "CL | LI",
            direction: "request", response: "ChangeChannelResponse",
            details: "Change the channel to the channel case-insensitive exact matching the value passed as an argument.",
            xref: { document: "cluster", section: "6.6.4.1" },
            children: [ {
                tag: "datatype", name: "Match", id: 0x0, type: "string", conformance: "M",
                details: "This SHALL contain a user-input string to match in order to identify the target channel.",
                xref: { document: "cluster", section: "6.6.4.1.1" }
            } ]
        },

        {
            tag: "command", name: "ChangeChannelResponse", id: 0x1, conformance: "CL | LI",
            direction: "response",
            details: "This command SHALL be generated in response to a ChangeChannel command. The data for this command " +
                     "SHALL be as follows:",
            xref: { document: "cluster", section: "6.6.4.2" },

            children: [
                {
                    tag: "datatype", name: "Status", id: 0x0, type: "StatusEnum", conformance: "M", constraint: "desc",
                    details: "This SHALL indicate the status of the command which resulted in this response.",
                    xref: { document: "cluster", section: "6.6.4.2.1" }
                },
                {
                    tag: "datatype", name: "Data", id: 0x1, type: "octstr", conformance: "O",
                    details: "This SHALL indicate Optional app-specific data.",
                    xref: { document: "cluster", section: "6.6.4.2.2" }
                }
            ]
        },

        {
            tag: "command", name: "ChangeChannelByNumber", id: 0x2, access: "O", conformance: "M",
            direction: "request", response: "status",
            details: "Change the channel to the channel with the given Number in the ChannelList attribute. The data for " +
                     "this command SHALL be as follows:",
            xref: { document: "cluster", section: "6.6.4.3" },

            children: [
                {
                    tag: "datatype", name: "MajorNumber", id: 0x0, type: "uint16", conformance: "M",
                    details: "This SHALL indicate the channel major number value (ATSC format) to which the channel should change.",
                    xref: { document: "cluster", section: "6.6.4.3.1" }
                },
                {
                    tag: "datatype", name: "MinorNumber", id: 0x1, type: "uint16", conformance: "M",
                    details: "This SHALL indicate the channel minor number value (ATSC format) to which the channel should change.",
                    xref: { document: "cluster", section: "6.6.4.3.2" }
                }
            ]
        },

        {
            tag: "command", name: "SkipChannel", id: 0x3, access: "O", conformance: "M", direction: "request",
            response: "status",
            details: "This command provides channel up and channel down functionality, but allows channel index jumps of " +
                     "size Count.",
            xref: { document: "cluster", section: "6.6.4.4" },

            children: [ {
                tag: "datatype", name: "Count", id: 0x0, type: "int16", conformance: "M",
                details: "This SHALL indicate the number of steps to increase (Count is positive) or decrease (Count is " +
                         "negative) the current channel.",
                xref: { document: "cluster", section: "6.6.4.4.1" }
            } ]
        },

        {
            tag: "datatype", name: "ChannelInfoStruct", type: "struct", conformance: "M",
            details: "This indicates a channel in a channel lineup.",
            xref: { document: "cluster", section: "6.6.5.1" },

            children: [
                {
                    tag: "datatype", name: "MajorNumber", id: 0x0, type: "uint16", conformance: "M",
                    details: "This SHALL indicate the channel major number value (for example, using ATSC format). When the " +
                             "channel number is expressed as a string, such as \"13.1\" or \"256\", the major number would be 13 or " +
                             "256, respectively.",
                    xref: { document: "cluster", section: "6.6.5.1.1" }
                },

                {
                    tag: "datatype", name: "MinorNumber", id: 0x1, type: "uint16", conformance: "M",
                    details: "This SHALL indicate the channel minor number value (for example, using ATSC format). When the " +
                             "channel number is expressed as a string, such as \"13.1\" or \"256\", the minor number would be 1 or 0, " +
                             "respectively.",
                    xref: { document: "cluster", section: "6.6.5.1.2" }
                },

                {
                    tag: "datatype", name: "Name", id: 0x2, type: "string", conformance: "O", default: "empty",
                    details: "This SHALL indicate the marketing name for the channel, such as “The CW\" or \"Comedy Central\". This " +
                             "field is optional, but SHOULD be provided when known.",
                    xref: { document: "cluster", section: "6.6.5.1.3" }
                },

                {
                    tag: "datatype", name: "CallSign", id: 0x3, type: "string", conformance: "O", default: "empty",
                    details: "This SHALL indicate the call sign of the channel, such as \"PBS\". This field is optional, but SHOULD " +
                             "be provided when known.",
                    xref: { document: "cluster", section: "6.6.5.1.4" }
                },

                {
                    tag: "datatype", name: "AffiliateCallSign", id: 0x4, type: "string", conformance: "O",
                    default: "empty",
                    details: "This SHALL indicate the local affiliate call sign, such as \"KCTS\". This field is optional, but " +
                             "SHOULD be provided when known.",
                    xref: { document: "cluster", section: "6.6.5.1.5" }
                }
            ]
        },

        {
            tag: "datatype", name: "LineupInfoStruct", type: "struct", conformance: "M",
            details: "The Lineup Info allows references to external lineup sources like Gracenote. The combination of " +
                     "OperatorName, LineupName, and PostalCode MUST uniquely identify a lineup.",
            xref: { document: "cluster", section: "6.6.5.2" },

            children: [
                {
                    tag: "datatype", name: "OperatorName", id: 0x0, type: "string", conformance: "M",
                    details: "This SHALL indicate the name of the operator, for example “Comcast”.",
                    xref: { document: "cluster", section: "6.6.5.2.1" }
                },
                { tag: "datatype", name: "LineupName", id: 0x1, type: "string", conformance: "O", default: "" },
                { tag: "datatype", name: "PostalCode", id: 0x2, type: "string", conformance: "O", default: "" },

                {
                    tag: "datatype", name: "LineupInfoType", id: 0x3, type: "LineupInfoTypeEnum", conformance: "M",
                    constraint: "desc",
                    details: "This SHALL indicate the type of lineup. This field is optional, but SHOULD be provided when known.",
                    xref: { document: "cluster", section: "6.6.5.2.4" }
                }
            ]
        },

        {
            tag: "datatype", name: "LineupInfoTypeEnum", type: "enum8", conformance: "M",
            xref: { document: "cluster", section: "6.6.5.3" },
            children: [ { tag: "datatype", name: "Mso", id: 0x0, conformance: "M", description: "MultiSystemOperator" } ]
        },

        {
            tag: "datatype", name: "StatusEnum", type: "enum8", conformance: "M",
            xref: { document: "cluster", section: "6.6.5.4" },

            children: [
                { tag: "datatype", name: "Success", id: 0x0, conformance: "M", description: "Command succeeded" },
                {
                    tag: "datatype", name: "MultipleMatches", id: 0x1, conformance: "M",
                    description: "More than one equal match for the ChannelInfoStruct passed in."
                },
                {
                    tag: "datatype", name: "NoMatches", id: 0x2, conformance: "M",
                    description: "No matches for the ChannelInfoStruct passed in."
                }
            ]
        }
    ]
});