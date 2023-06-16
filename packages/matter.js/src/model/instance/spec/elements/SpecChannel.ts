/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { SpecMatter } from "../SpecMatter.js";
import { ClusterElement, AttributeElement, DatatypeElement, CommandElement } from "../../../elements/index.js";

SpecMatter.children!.push(ClusterElement({
    id: 0x0504, name: "Channel",
    classification: "application",
    children: [
        AttributeElement({
            id: 0xfffd, name: "ClusterRevision", base: "uint16",
            access: "R V", conformance: "M", constraint: "min 1", default: 1, quality: "F"
        }),

        AttributeElement({
            id: 0xfffc, name: "FeatureMap", base: "map32",
            access: "R V", conformance: "M", default: 0, quality: "F",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "CL",
                    description: "Provides list of available channels.",
                    xref: { document: "cluster", section: "6.6.2", version: "1.1" }
                }),

                DatatypeElement({
                    id: 0x0001, name: "LI",
                    description: "Provides lineup info, which is a reference to an external source of lineup information.",
                    xref: { document: "cluster", section: "6.6.2", version: "1.1" }
                })
            ]
        }),

        AttributeElement({
            id: 0x0000, name: "ChannelList", base: "list",
            access: "R V", conformance: "CL", constraint: "None", default: "empty",
            details: "This optional list provides the channels supported",
            xref: { document: "cluster", section: "6.6.3.1", version: "1.1" },
            children: [
                DatatypeElement({
                    name: "entry", base: "ChannelInfoStruct"
                })
            ]
        }),

        AttributeElement({
            id: 0x0001, name: "Lineup", base: "LineupInfoStruct",
            access: "R V", conformance: "LI", constraint: "desc", default: "",
            details: "This optional field identifies the channel lineup using external data " +
                     "sources",
            xref: { document: "cluster", section: "6.6.3.2", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0002, name: "CurrentChannel", base: "ChannelInfoStruct",
            access: "R V", conformance: "O", constraint: "desc", default: undefined, quality: "X",
            details: "This optional field contains the current channel. When supported but a" +
                     " channel is not currently tuned to (if a content application is in " +
                     "foreground), the value of the field SHALL be null",
            xref: { document: "cluster", section: "6.6.3.3", version: "1.1" }
        }),

        CommandElement({
            id: 0x0000, name: "ChangeChannel",
            access: "O", conformance: "CL, LI", direction: "request", response: "ChangeChannelResponse",
            details: "Change the channel to the channel case-insensitive exact matching the " +
                     "value passed as an argument",
            xref: { document: "cluster", section: "6.6.4.1", version: "1.1" }
        }),

        CommandElement({
            id: 0x0001, name: "ChangeChannelResponse",
            conformance: "CL, LI", direction: "response",
            details: "This command SHALL be generated in response to a ChangeChannel command" +
                     ". The data for this command SHALL be as follows",
            xref: { document: "cluster", section: "6.6.4.2", version: "1.1" }
        }),

        CommandElement({
            id: 0x0002, name: "ChangeChannelByNumber",
            access: "O", conformance: "M", direction: "request", response: "status",
            details: "Change the channel to the channel with the given Number in the " +
                     "ChannelList attribute. The data for this command SHALL be as follows",
            xref: { document: "cluster", section: "6.6.4.3", version: "1.1" }
        }),

        CommandElement({
            id: 0x0003, name: "SkipChannel",
            access: "O", conformance: "M", direction: "request", response: "status",
            details: "This command provides channel up and channel down functionality, but " +
                     "allows channel index jumps of size Count",
            xref: { document: "cluster", section: "6.6.4.4", version: "1.1" }
        }),

        DatatypeElement({
            id: -1, name: "ChannelInfoStruct", base: "struct",
            details: "This indicates a channel in a channel lineup",
            xref: { document: "cluster", section: "6.6.5.1", version: "1.1" },
            children: [
                DatatypeElement({
                    id: 0x0000, name: "MajorNumber", base: "uint16",
                    conformance: "M", default: 0,
                    details: "This SHALL indicate the channel major number value (for example, using" +
                             " ATSC format). When the channel number is expressed as a string, such " +
                             "as \"13.1\" or \"256\", the major number would be 13 or 256, respectively",
                    xref: { document: "cluster", section: "6.6.5.1.1", version: "1.1" }
                }),

                DatatypeElement({
                    id: 0x0001, name: "MinorNumber", base: "uint16",
                    conformance: "M", default: 0,
                    details: "This SHALL indicate the channel minor number value (for example, using" +
                             " ATSC format). When the channel number is expressed as a string, such " +
                             "as \"13.1\" or \"256\", the minor number would be 1 or 0, respectively",
                    xref: { document: "cluster", section: "6.6.5.1.2", version: "1.1" }
                }),

                DatatypeElement({
                    id: 0x0002, name: "Name", base: "string",
                    conformance: "O", default: "empty",
                    details: "This SHALL indicate the marketing name for the channel, such as “The " +
                             "CW\" or \"Comedy Central\". This field is optional, but SHOULD be " +
                             "provided when known",
                    xref: { document: "cluster", section: "6.6.5.1.3", version: "1.1" }
                }),

                DatatypeElement({
                    id: 0x0003, name: "CallSign", base: "string",
                    conformance: "O", default: "empty",
                    details: "This SHALL indicate the call sign of the channel, such as \"PBS\". This " +
                             "field is optional, but SHOULD be provided when known",
                    xref: { document: "cluster", section: "6.6.5.1.4", version: "1.1" }
                }),

                DatatypeElement({
                    id: 0x0004, name: "AffiliateCallSign", base: "string",
                    conformance: "O", default: "empty",
                    details: "This SHALL indicate the local affiliate call sign, such as \"KCTS\". " +
                             "This field is optional, but SHOULD be provided when known",
                    xref: { document: "cluster", section: "6.6.5.1.5", version: "1.1" }
                })
            ]
        })
    ]
}));
