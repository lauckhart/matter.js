/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { SpecMatter } from "../internal.js";
import { ClusterElement, AttributeElement, DatatypeElement } from "../../../index.js";

SpecMatter.children!.push(ClusterElement({
    id: 0x0504, name: "Channel",
    classification: "application",
    children: [
        AttributeElement({
            id: 0xfffd, name: "ClusterRevision", base: "uint16",
            access: "R V", conformance: "M", constraint: { min: 1 }, value: 1, quality: "F"
        }),

        AttributeElement({
            id: 0xfffc, name: "FeatureMap", base: "map32",
            access: "R V", conformance: "M", value: 0, quality: "F"
        }),

        AttributeElement({
            id: 0x0000, name: "ChannelList", base: "list[ChannelInfoStruct]",
            access: "R V", conformance: "CL", constraint: "none", value: "empty",
            details: "This optional list provides the channels supported.",
            xref: { section: "6.6.3.1", document: "cluster", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0001, name: "Lineup", base: "LineupInfoStruct",
            access: "R V", conformance: "LI", constraint: "desc", value: "",
            details: "This optional field identifies the channel lineup using external data sources.",
            xref: { section: "6.6.3.2", document: "cluster", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0002, name: "CurrentChannel", base: "ChannelInfoStruct",
            access: "R V", conformance: "O", constraint: "desc", value: "null", quality: "X",
            details: "This optional field contains the current channel. When supported but a channel is not currently tuned to (if a content application is in foreground), the value of the field SHALL be null.",
            xref: { section: "6.6.3.3", document: "cluster", version: "1.1" }
        }),

        DatatypeElement({
            id: -1, name: "ChannelInfoStruct", base: "struct",
            details: "This indicates a channel in a channel lineup.",
            xref: { section: "6.6.5.1", document: "cluster", version: "1.1" },
            children: [
                DatatypeElement({
                    id: 0x0000, name: "MajorNumber", base: "uint16",
                    conformance: "M", value: "",
                    details: "This SHALL indicate the channel major number value (for example, using ATSC format). When the channel number is expressed as a string, such as \"13.1\" or \"256\", the major number would be 13 or 256, respectively.",
                    xref: { section: "6.6.5.1.1", document: "cluster", version: "1.1" }
                }),

                DatatypeElement({
                    id: 0x0001, name: "MinorNumber", base: "uint16",
                    conformance: "M", value: "",
                    details: "This SHALL indicate the channel minor number value (for example, using ATSC format). When the channel number is expressed as a string, such as \"13.1\" or \"256\", the minor number would be 1 or 0, respectively.",
                    xref: { section: "6.6.5.1.2", document: "cluster", version: "1.1" }
                }),

                DatatypeElement({
                    id: 0x0002, name: "Name", base: "string",
                    conformance: "O", constraint: "", value: "empty",
                    details: "This SHALL indicate the marketing name for the channel, such as “The CW\" or \"Comedy Central\". This field is optional, but SHOULD be provided when known.",
                    xref: { section: "6.6.5.1.3", document: "cluster", version: "1.1" }
                }),

                DatatypeElement({
                    id: 0x0003, name: "CallSign", base: "string",
                    conformance: "O", constraint: "", value: "empty",
                    details: "This SHALL indicate the call sign of the channel, such as \"PBS\". This field is optional, but SHOULD be provided when known.",
                    xref: { section: "6.6.5.1.4", document: "cluster", version: "1.1" }
                }),

                DatatypeElement({
                    id: 0x0004, name: "AffiliateCallSign", base: "string",
                    conformance: "O", constraint: "", value: "empty",
                    details: "This SHALL indicate the local affiliate call sign, such as \"KCTS\". This field is optional, but SHOULD be provided when known.",
                    xref: { section: "6.6.5.1.5", document: "cluster", version: "1.1" }
                })
            ]
        })
    ]
}));
