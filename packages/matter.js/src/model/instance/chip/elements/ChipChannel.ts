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
            id: 0x0000, name: "ChannelList", type: "list",
            conformance: "O",
            children: [
                DatatypeElement({
                    name: "entry", type: "ChannelInfoStruct"
                })
            ]
        }),

        AttributeElement({
            id: 0x0001, name: "ChannelLineup", type: "LineupInfoStruct",
            conformance: "O", default: undefined, quality: "X"
        }),

        AttributeElement({
            id: 0x0002, name: "ChannelCurrentChannel", type: "ChannelInfoStruct",
            conformance: "O", default: undefined, quality: "X"
        }),

        CommandElement({
            id: 0x0000, name: "ChangeChannel",
            conformance: "O", direction: "request", response: "ChangeChannelResponse",
            children: [
                DatatypeElement({
                    name: "Match", type: "string",
                    conformance: "M"
                })
            ]
        }),

        CommandElement({
            id: 0x0002, name: "ChangeChannelByNumber",
            conformance: "M", direction: "request",
            children: [
                DatatypeElement({
                    name: "MajorNumber", type: "uint16",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "MinorNumber", type: "uint16",
                    conformance: "M"
                })
            ]
        }),

        CommandElement({
            id: 0x0003, name: "SkipChannel",
            conformance: "M", direction: "request",
            children: [
                DatatypeElement({
                    name: "Count", type: "uint16",
                    conformance: "M"
                })
            ]
        }),

        CommandElement({
            id: 0x0001, name: "ChangeChannelResponse",
            conformance: "O", direction: "response",
            children: [
                DatatypeElement({
                    name: "Status", type: "ChannelStatusEnum",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "Data", type: "string",
                    conformance: "O"
                })
            ]
        }),

        DatatypeElement({
            name: "ChannelInfoStruct", type: "struct",
            conformance: "M",
            children: [
                DatatypeElement({
                    name: "MajorNumber", type: "uint16",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "MinorNumber", type: "uint16",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "Name", type: "string",
                    conformance: "O"
                }),

                DatatypeElement({
                    name: "CallSign", type: "string",
                    conformance: "O"
                }),

                DatatypeElement({
                    name: "AffiliateCallSign", type: "string",
                    conformance: "O"
                })
            ]
        }),

        DatatypeElement({
            name: "LineupInfoStruct", type: "struct",
            conformance: "M",
            children: [
                DatatypeElement({
                    name: "OperatorName", type: "string",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "LineupName", type: "string",
                    conformance: "O", default: ""
                }),

                DatatypeElement({
                    name: "PostalCode", type: "string",
                    conformance: "O", default: ""
                }),

                DatatypeElement({
                    name: "LineupInfoType", type: "LineupInfoTypeEnum",
                    conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "LineupInfoTypeEnum", type: "enum8",
            conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "Mso",
                    conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "ChannelStatusEnum", type: "enum8",
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
            name: "ChannelFeature", type: "map32",
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
