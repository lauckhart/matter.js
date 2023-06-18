/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Matter } from "../Matter.js";

Matter.children.push({
    tag: "cluster", id: 0x0504, name: "Channel",
    classification: "application", description: "Channel",
    children: [
        {
            tag: "attribute", id: 0x0000, name: "ChannelList",
            access: "R V", conformance: "CL", constraint: "None", default: "empty", type: "list",
            details: "This optional list provides the channels supported",
            xref: { document: "cluster", section: "6.6.3.1" },
            children: [
                {
                    tag: "datatype", name: "entry",
                    type: "ChannelInfoStruct"
                }
            ]
        },

        {
            tag: "attribute", id: 0x0001, name: "ChannelLineup",
            access: "R V", conformance: "LI", constraint: "desc", default: "", quality: "X", type: "LineupInfoStruct",
            details: "This optional field identifies the channel lineup using external data " +
                     "sources",
            xref: { document: "cluster", section: "6.6.3.2" }
        },

        {
            tag: "attribute", id: 0x0002, name: "ChannelCurrentChannel",
            access: "R V", conformance: "O", constraint: "desc", quality: "X", type: "ChannelInfoStruct",
            details: "This optional field contains the current channel. When supported but a" +
                     " channel is not currently tuned to (if a content application is in " +
                     "foreground), the value of the field SHALL be null",
            xref: { document: "cluster", section: "6.6.3.3" }
        },

        {
            tag: "command", id: 0x0000, name: "ChangeChannel",
            access: "O", conformance: "CL, LI", direction: "request", response: "ChangeChannelResponse",
            details: "Change the channel to the channel case-insensitive exact matching the " +
                     "value passed as an argument",
            xref: { document: "cluster", section: "6.6.4.1" },
            children: [
                {
                    tag: "datatype", name: "Match",
                    conformance: "M", type: "string"
                }
            ]
        },

        {
            tag: "command", id: 0x0001, name: "ChangeChannelResponse",
            conformance: "CL, LI", direction: "response",
            details: "This command SHALL be generated in response to a ChangeChannel command" +
                     ". The data for this command SHALL be as follows",
            xref: { document: "cluster", section: "6.6.4.2" },
            children: [
                {
                    tag: "datatype", name: "Status",
                    conformance: "M", type: "ChannelStatusEnum"
                },

                {
                    tag: "datatype", name: "Data",
                    conformance: "O", type: "string"
                }
            ]
        },

        {
            tag: "command", id: 0x0002, name: "ChangeChannelByNumber",
            access: "O", conformance: "M", direction: "request", response: "status",
            details: "Change the channel to the channel with the given Number in the " +
                     "ChannelList attribute. The data for this command SHALL be as follows",
            xref: { document: "cluster", section: "6.6.4.3" },
            children: [
                {
                    tag: "datatype", name: "MajorNumber",
                    conformance: "M", type: "uint16"
                },

                {
                    tag: "datatype", name: "MinorNumber",
                    conformance: "M", type: "uint16"
                }
            ]
        },

        {
            tag: "command", id: 0x0003, name: "SkipChannel",
            access: "O", conformance: "M", direction: "request", response: "status",
            details: "This command provides channel up and channel down functionality, but " +
                     "allows channel index jumps of size Count",
            xref: { document: "cluster", section: "6.6.4.4" },
            children: [
                {
                    tag: "datatype", name: "Count",
                    conformance: "M", type: "uint16"
                }
            ]
        },

        {
            tag: "datatype", name: "ChannelFeature",
            conformance: "M", type: "map32",
            details: "This indicates a channel in a channel lineup",
            xref: { document: "cluster", section: "6.6.5.1" },
            children: [
                {
                    tag: "datatype", id: 0x0000, name: "MajorNumber",
                    conformance: "M", default: 0, type: "uint16",
                    details: "This SHALL indicate the channel major number value (for example, using" +
                             " ATSC format). When the channel number is expressed as a string, such " +
                             "as \"13.1\" or \"256\", the major number would be 13 or 256, respectively",
                    xref: { document: "cluster", section: "6.6.5.1.1" }
                },

                {
                    tag: "datatype", id: 0x0001, name: "ChannelList",
                    conformance: "M", default: 0, type: "uint16",
                    details: "This SHALL indicate the channel minor number value (for example, using" +
                             " ATSC format). When the channel number is expressed as a string, such " +
                             "as \"13.1\" or \"256\", the minor number would be 1 or 0, respectively",
                    xref: { document: "cluster", section: "6.6.5.1.2" }
                },

                {
                    tag: "datatype", id: 0x0002, name: "LineupInfo",
                    conformance: "O", default: "empty", type: "string",
                    details: "This SHALL indicate the marketing name for the channel, such as “The " +
                             "CW\" or \"Comedy Central\". This field is optional, but SHOULD be " +
                             "provided when known",
                    xref: { document: "cluster", section: "6.6.5.1.3" }
                },

                {
                    tag: "datatype", id: 0x0003, name: "CallSign",
                    conformance: "O", default: "empty", type: "string",
                    details: "This SHALL indicate the call sign of the channel, such as \"PBS\". This " +
                             "field is optional, but SHOULD be provided when known",
                    xref: { document: "cluster", section: "6.6.5.1.4" }
                },

                {
                    tag: "datatype", id: 0x0004, name: "AffiliateCallSign",
                    conformance: "O", default: "empty", type: "string",
                    details: "This SHALL indicate the local affiliate call sign, such as \"KCTS\". " +
                             "This field is optional, but SHOULD be provided when known",
                    xref: { document: "cluster", section: "6.6.5.1.5" }
                }
            ]
        },

        {
            tag: "datatype", name: "LineupInfoStruct",
            conformance: "M", type: "struct",
            children: [
                {
                    tag: "datatype", name: "OperatorName",
                    conformance: "M", type: "string"
                },

                {
                    tag: "datatype", name: "LineupName",
                    conformance: "O", default: "", type: "string"
                },

                {
                    tag: "datatype", name: "PostalCode",
                    conformance: "O", default: "", type: "string"
                },

                {
                    tag: "datatype", name: "LineupInfoType",
                    conformance: "M", type: "LineupInfoTypeEnum"
                }
            ]
        },

        {
            tag: "datatype", name: "LineupInfoTypeEnum",
            conformance: "M", type: "enum8",
            children: [
                {
                    tag: "datatype", id: 0x0000, name: "Mso",
                    conformance: "M"
                }
            ]
        },

        {
            tag: "datatype", name: "ChannelStatusEnum",
            conformance: "M", type: "enum8",
            children: [
                {
                    tag: "datatype", id: 0x0000, name: "Success",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0001, name: "MultipleMatches",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0002, name: "NoMatches",
                    conformance: "M"
                }
            ]
        }
    ]
});
