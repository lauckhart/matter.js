/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ChipMatter } from "../index.js";
import { ClusterElement, AttributeElement, DatatypeElement, CommandElement } from "../../../index.js";

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
                    name: "Match", base: "string"
                })
            ]
        }),

        CommandElement({
            id: 0x0002, name: "ChangeChannelByNumber",
            direction: "request",
            children: [
                DatatypeElement({
                    name: "MajorNumber", base: "uint16"
                }),

                DatatypeElement({
                    name: "MinorNumber", base: "uint16"
                })
            ]
        }),

        CommandElement({
            id: 0x0003, name: "SkipChannel",
            direction: "request",
            children: [
                DatatypeElement({
                    name: "Count", base: "uint16"
                })
            ]
        }),

        CommandElement({
            id: 0x0001, name: "ChangeChannelResponse",
            conformance: "O", direction: "response",
            children: [
                DatatypeElement({
                    name: "Status", base: "ChannelStatusEnum"
                }),

                DatatypeElement({
                    name: "Data", base: "string",
                    conformance: "O"
                })
            ]
        }),

        DatatypeElement({
            name: "ChannelInfoStruct", base: "struct",
            children: [
                DatatypeElement({
                    name: "MajorNumber", base: "uint16"
                }),

                DatatypeElement({
                    name: "MinorNumber", base: "uint16"
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
            children: [
                DatatypeElement({
                    name: "OperatorName", base: "string"
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
                    name: "LineupInfoType", base: "LineupInfoTypeEnum"
                })
            ]
        }),

        DatatypeElement({
            name: "LineupInfoTypeEnum", base: "enum8",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "Mso"
                })
            ]
        }),

        DatatypeElement({
            name: "ChannelStatusEnum", base: "enum8",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "Success"
                }),

                DatatypeElement({
                    id: 0x0001, name: "MultipleMatches"
                }),

                DatatypeElement({
                    id: 0x0002, name: "NoMatches"
                })
            ]
        }),

        DatatypeElement({
            name: "ChannelFeature", base: "map32",
            children: [
                DatatypeElement({
                    id: 0x0001, name: "ChannelList"
                }),

                DatatypeElement({
                    id: 0x0002, name: "LineupInfo"
                })
            ]
        })
    ]
}));
