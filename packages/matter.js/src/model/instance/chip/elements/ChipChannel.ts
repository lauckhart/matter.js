/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ChipMatter } from "../ChipMatter.js";
import { ClusterElement, AttributeElement, DatatypeElement, CommandElement } from "../../../elements/index.js";

ChipMatter.children!.push(ClusterElement({
    id: 0x0504, name: "Channel",
    description: "Channel",
    details: "This cluster provides an interface for controlling the current Channel on a device.",
    children: [
        AttributeElement({
            id: 0x0000, name: "ChannelList", base: "list",
            conformance: "O",
            children: [
                DatatypeElement({
                    name: "entry", base: "ChannelInfoStruct"
                })
            ]
        }),

        AttributeElement({
            id: 0x0001, name: "ChannelLineup", base: "LineupInfoStruct",
            conformance: "O", default: undefined, quality: "X"
        }),

        AttributeElement({
            id: 0x0002, name: "ChannelCurrentChannel", base: "ChannelInfoStruct",
            conformance: "O", default: undefined, quality: "X"
        }),

        CommandElement({
            id: 0x0000, name: "ChangeChannel",
            conformance: "O", direction: "request", response: "ChangeChannelResponse",
            children: [
                DatatypeElement({
                    name: "Match", base: "string",
                    conformance: "M"
                })
            ]
        }),

        CommandElement({
            id: 0x0002, name: "ChangeChannelByNumber",
            conformance: "M", direction: "request",
            children: [
                DatatypeElement({
                    name: "MajorNumber", base: "uint16",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "MinorNumber", base: "uint16",
                    conformance: "M"
                })
            ]
        }),

        CommandElement({
            id: 0x0003, name: "SkipChannel",
            conformance: "M", direction: "request",
            children: [
                DatatypeElement({
                    name: "Count", base: "uint16",
                    conformance: "M"
                })
            ]
        }),

        CommandElement({
            id: 0x0001, name: "ChangeChannelResponse",
            conformance: "O", direction: "response",
            children: [
                DatatypeElement({
                    name: "Status", base: "ChannelStatusEnum",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "Data", base: "string",
                    conformance: "O"
                })
            ]
        }),

        DatatypeElement({
            name: "ChannelInfoStruct", base: "struct",
            conformance: "M",
            children: [
                DatatypeElement({
                    name: "MajorNumber", base: "uint16",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "MinorNumber", base: "uint16",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "Name", base: "string",
                    conformance: "O"
                }),

                DatatypeElement({
                    name: "CallSign", base: "string",
                    conformance: "O"
                }),

                DatatypeElement({
                    name: "AffiliateCallSign", base: "string",
                    conformance: "O"
                })
            ]
        }),

        DatatypeElement({
            name: "LineupInfoStruct", base: "struct",
            conformance: "M",
            children: [
                DatatypeElement({
                    name: "OperatorName", base: "string",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "LineupName", base: "string",
                    conformance: "O", default: ""
                }),

                DatatypeElement({
                    name: "PostalCode", base: "string",
                    conformance: "O", default: ""
                }),

                DatatypeElement({
                    name: "LineupInfoType", base: "LineupInfoTypeEnum",
                    conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "LineupInfoTypeEnum", base: "enum8",
            conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "Mso",
                    conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "ChannelStatusEnum", base: "enum8",
            conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "Success",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0001, name: "MultipleMatches",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0002, name: "NoMatches",
                    conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "ChannelFeature", base: "map32",
            conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0001, name: "ChannelList",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0002, name: "LineupInfo",
                    conformance: "M"
                })
            ]
        })
    ]
}));
