/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ChipMatter } from "../index.js";
import { ClusterElement, AttributeElement, DatatypeElement, CommandElement, EventElement } from "../../../index.js";

ChipMatter.children!.push(ClusterElement({
    id: 0x0025, name: "Actions",
    description: "Actions",
    details: "This cluster provides a standardized way for a Node (typically a Bridge, but could be any Node) to expose action information.",
    children: [
        AttributeElement({
            id: 0x0000, name: "ActionList", base: "list",
            access: "R", conformance: "M",
            children: [
                DatatypeElement({
                    name: "entry", base: "ActionStruct"
                })
            ]
        }),

        AttributeElement({
            id: 0x0001, name: "EndpointList", base: "list",
            access: "R", conformance: "M",
            children: [
                DatatypeElement({
                    name: "entry", base: "EndpointListStruct"
                })
            ]
        }),

        AttributeElement({
            id: 0x0002, name: "SetupUrl", base: "string",
            access: "R", conformance: "O"
        }),

        CommandElement({
            id: 0x0000, name: "InstantAction",
            access: "R", conformance: "O", direction: "request",
            children: [
                DatatypeElement({
                    name: "ActionId", base: "uint16",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "InvokeId", base: "uint32",
                    access: "R", conformance: "O"
                })
            ]
        }),

        CommandElement({
            id: 0x0001, name: "InstantActionWithTransition",
            access: "R", conformance: "O", direction: "request",
            children: [
                DatatypeElement({
                    name: "ActionId", base: "uint16",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "InvokeId", base: "uint32",
                    access: "R", conformance: "O"
                }),

                DatatypeElement({
                    name: "TransitionTime", base: "uint16",
                    access: "R", conformance: "M"
                })
            ]
        }),

        CommandElement({
            id: 0x0002, name: "StartAction",
            access: "R", conformance: "O", direction: "request",
            children: [
                DatatypeElement({
                    name: "ActionId", base: "uint16",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "InvokeId", base: "uint32",
                    access: "R", conformance: "O"
                })
            ]
        }),

        CommandElement({
            id: 0x0003, name: "StartActionWithDuration",
            access: "R", conformance: "O", direction: "request",
            children: [
                DatatypeElement({
                    name: "ActionId", base: "uint16",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "InvokeId", base: "uint32",
                    access: "R", conformance: "O"
                }),

                DatatypeElement({
                    name: "Duration", base: "uint32",
                    access: "R", conformance: "M"
                })
            ]
        }),

        CommandElement({
            id: 0x0004, name: "StopAction",
            access: "R", conformance: "O", direction: "request",
            children: [
                DatatypeElement({
                    name: "ActionId", base: "uint16",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "InvokeId", base: "uint32",
                    access: "R", conformance: "O"
                })
            ]
        }),

        CommandElement({
            id: 0x0005, name: "PauseAction",
            access: "R", conformance: "O", direction: "request",
            children: [
                DatatypeElement({
                    name: "ActionId", base: "uint16",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "InvokeId", base: "uint32",
                    access: "R", conformance: "O"
                })
            ]
        }),

        CommandElement({
            id: 0x0006, name: "PauseActionWithDuration",
            access: "R", conformance: "O", direction: "request",
            children: [
                DatatypeElement({
                    name: "ActionId", base: "uint16",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "InvokeId", base: "uint32",
                    access: "R", conformance: "O"
                }),

                DatatypeElement({
                    name: "Duration", base: "uint32",
                    access: "R", conformance: "M"
                })
            ]
        }),

        CommandElement({
            id: 0x0007, name: "ResumeAction",
            access: "R", conformance: "O", direction: "request",
            children: [
                DatatypeElement({
                    name: "ActionId", base: "uint16",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "InvokeId", base: "uint32",
                    access: "R", conformance: "O"
                })
            ]
        }),

        CommandElement({
            id: 0x0008, name: "EnableAction",
            access: "R", conformance: "O", direction: "request",
            children: [
                DatatypeElement({
                    name: "ActionId", base: "uint16",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "InvokeId", base: "uint32",
                    access: "R", conformance: "O"
                })
            ]
        }),

        CommandElement({
            id: 0x0009, name: "EnableActionWithDuration",
            access: "R", conformance: "O", direction: "request",
            children: [
                DatatypeElement({
                    name: "ActionId", base: "uint16",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "InvokeId", base: "uint32",
                    access: "R", conformance: "O"
                }),

                DatatypeElement({
                    name: "Duration", base: "uint32",
                    access: "R", conformance: "M"
                })
            ]
        }),

        CommandElement({
            id: 0x000a, name: "DisableAction",
            access: "R", conformance: "O", direction: "request",
            children: [
                DatatypeElement({
                    name: "ActionId", base: "uint16",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "InvokeId", base: "uint32",
                    access: "R", conformance: "O"
                })
            ]
        }),

        CommandElement({
            id: 0x000b, name: "DisableActionWithDuration",
            access: "R", conformance: "O", direction: "request",
            children: [
                DatatypeElement({
                    name: "ActionId", base: "uint16",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "InvokeId", base: "uint32",
                    access: "R", conformance: "O"
                }),

                DatatypeElement({
                    name: "Duration", base: "uint32",
                    access: "R", conformance: "M"
                })
            ]
        }),

        EventElement({
            id: 0x0000, name: "StateChanged",
            access: "R", conformance: "M", priority: "info",
            children: [
                DatatypeElement({
                    name: "ActionId", base: "uint16",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "InvokeId", base: "uint32",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "NewState", base: "ActionStateEnum",
                    access: "R", conformance: "M"
                })
            ]
        }),

        EventElement({
            id: 0x0001, name: "ActionFailed",
            access: "R", conformance: "M", priority: "info",
            children: [
                DatatypeElement({
                    name: "ActionId", base: "uint16",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "InvokeId", base: "uint32",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "NewState", base: "ActionStateEnum",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "Error", base: "ActionErrorEnum",
                    access: "R", conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "CommandBits", base: "map16",
            access: "R", conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0001, name: "InstantAction",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0002, name: "InstantActionWithTransition",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0004, name: "StartAction",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0008, name: "StartActionWithDuration",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0010, name: "StopAction",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0020, name: "PauseAction",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0040, name: "PauseActionWithDuration",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0080, name: "ResumeAction",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0100, name: "EnableAction",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0200, name: "EnableActionWithDuration",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0400, name: "DisableAction",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0800, name: "DisableActionWithDuration",
                    access: "R", conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "ActionErrorEnum", base: "enum8",
            access: "R", conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "Unknown",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0001, name: "Interrupted",
                    access: "R", conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "ActionStateEnum", base: "enum8",
            access: "R", conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "Inactive",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0001, name: "Active",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0002, name: "Paused",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0003, name: "Disabled",
                    access: "R", conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "ActionTypeEnum", base: "enum8",
            access: "R", conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "Other",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0001, name: "Scene",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0002, name: "Sequence",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0003, name: "Automation",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0004, name: "Exception",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0005, name: "Notification",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0006, name: "Alarm",
                    access: "R", conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "EndpointListTypeEnum", base: "enum8",
            access: "R", conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "Other",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0001, name: "Room",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0002, name: "Zone",
                    access: "R", conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "ActionStruct", base: "struct",
            access: "R", conformance: "M",
            children: [
                DatatypeElement({
                    name: "ActionId", base: "uint16",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "Name", base: "string",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "Type", base: "ActionTypeEnum",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "EndpointListId", base: "uint16",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "SupportedCommands", base: "CommandBits",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "State", base: "ActionStateEnum",
                    access: "R", conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "EndpointListStruct", base: "struct",
            access: "R", conformance: "M",
            children: [
                DatatypeElement({
                    name: "EndpointListId", base: "uint16",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "Name", base: "string",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "Type", base: "EndpointListTypeEnum",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "Endpoints", base: "endpoint-no",
                    access: "R", conformance: "M"
                })
            ]
        })
    ]
}));
