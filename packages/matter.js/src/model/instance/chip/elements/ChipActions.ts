/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ChipMatter } from "../ChipMatter.js";
import { ClusterElement, AttributeElement, DatatypeElement, CommandElement, EventElement } from "../../../elements/index.js";

ChipMatter.children!.push(ClusterElement({
    id: 0x0025, name: "Actions",
    description: "Actions",
    details: "This cluster provides a standardized way for a Node (typically a Bridge, but could be any Node) to expose action information.",
    children: [
        AttributeElement({
            id: 0x0000, name: "ActionList", base: "list",
            conformance: "M",
            children: [
                DatatypeElement({
                    name: "entry", base: "ActionStruct"
                })
            ]
        }),

        AttributeElement({
            id: 0x0001, name: "EndpointList", base: "list",
            conformance: "M",
            children: [
                DatatypeElement({
                    name: "entry", base: "EndpointListStruct"
                })
            ]
        }),

        AttributeElement({
            id: 0x0002, name: "SetupUrl", base: "string",
            conformance: "O"
        }),

        CommandElement({
            id: 0x0000, name: "InstantAction",
            conformance: "O", direction: "request",
            children: [
                DatatypeElement({
                    name: "ActionId", base: "uint16",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "InvokeId", base: "uint32",
                    conformance: "O"
                })
            ]
        }),

        CommandElement({
            id: 0x0001, name: "InstantActionWithTransition",
            conformance: "O", direction: "request",
            children: [
                DatatypeElement({
                    name: "ActionId", base: "uint16",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "InvokeId", base: "uint32",
                    conformance: "O"
                }),

                DatatypeElement({
                    name: "TransitionTime", base: "uint16",
                    conformance: "M"
                })
            ]
        }),

        CommandElement({
            id: 0x0002, name: "StartAction",
            conformance: "O", direction: "request",
            children: [
                DatatypeElement({
                    name: "ActionId", base: "uint16",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "InvokeId", base: "uint32",
                    conformance: "O"
                })
            ]
        }),

        CommandElement({
            id: 0x0003, name: "StartActionWithDuration",
            conformance: "O", direction: "request",
            children: [
                DatatypeElement({
                    name: "ActionId", base: "uint16",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "InvokeId", base: "uint32",
                    conformance: "O"
                }),

                DatatypeElement({
                    name: "Duration", base: "uint32",
                    conformance: "M"
                })
            ]
        }),

        CommandElement({
            id: 0x0004, name: "StopAction",
            conformance: "O", direction: "request",
            children: [
                DatatypeElement({
                    name: "ActionId", base: "uint16",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "InvokeId", base: "uint32",
                    conformance: "O"
                })
            ]
        }),

        CommandElement({
            id: 0x0005, name: "PauseAction",
            conformance: "O", direction: "request",
            children: [
                DatatypeElement({
                    name: "ActionId", base: "uint16",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "InvokeId", base: "uint32",
                    conformance: "O"
                })
            ]
        }),

        CommandElement({
            id: 0x0006, name: "PauseActionWithDuration",
            conformance: "O", direction: "request",
            children: [
                DatatypeElement({
                    name: "ActionId", base: "uint16",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "InvokeId", base: "uint32",
                    conformance: "O"
                }),

                DatatypeElement({
                    name: "Duration", base: "uint32",
                    conformance: "M"
                })
            ]
        }),

        CommandElement({
            id: 0x0007, name: "ResumeAction",
            conformance: "O", direction: "request",
            children: [
                DatatypeElement({
                    name: "ActionId", base: "uint16",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "InvokeId", base: "uint32",
                    conformance: "O"
                })
            ]
        }),

        CommandElement({
            id: 0x0008, name: "EnableAction",
            conformance: "O", direction: "request",
            children: [
                DatatypeElement({
                    name: "ActionId", base: "uint16",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "InvokeId", base: "uint32",
                    conformance: "O"
                })
            ]
        }),

        CommandElement({
            id: 0x0009, name: "EnableActionWithDuration",
            conformance: "O", direction: "request",
            children: [
                DatatypeElement({
                    name: "ActionId", base: "uint16",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "InvokeId", base: "uint32",
                    conformance: "O"
                }),

                DatatypeElement({
                    name: "Duration", base: "uint32",
                    conformance: "M"
                })
            ]
        }),

        CommandElement({
            id: 0x000a, name: "DisableAction",
            conformance: "O", direction: "request",
            children: [
                DatatypeElement({
                    name: "ActionId", base: "uint16",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "InvokeId", base: "uint32",
                    conformance: "O"
                })
            ]
        }),

        CommandElement({
            id: 0x000b, name: "DisableActionWithDuration",
            conformance: "O", direction: "request",
            children: [
                DatatypeElement({
                    name: "ActionId", base: "uint16",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "InvokeId", base: "uint32",
                    conformance: "O"
                }),

                DatatypeElement({
                    name: "Duration", base: "uint32",
                    conformance: "M"
                })
            ]
        }),

        EventElement({
            id: 0x0000, name: "StateChanged",
            conformance: "M", priority: "info",
            children: [
                DatatypeElement({
                    name: "ActionId", base: "uint16",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "InvokeId", base: "uint32",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "NewState", base: "ActionStateEnum",
                    conformance: "M"
                })
            ]
        }),

        EventElement({
            id: 0x0001, name: "ActionFailed",
            conformance: "M", priority: "info",
            children: [
                DatatypeElement({
                    name: "ActionId", base: "uint16",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "InvokeId", base: "uint32",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "NewState", base: "ActionStateEnum",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "Error", base: "ActionErrorEnum",
                    conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "CommandBits", base: "map16",
            conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0001, name: "InstantAction",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0002, name: "InstantActionWithTransition",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0004, name: "StartAction",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0008, name: "StartActionWithDuration",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0010, name: "StopAction",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0020, name: "PauseAction",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0040, name: "PauseActionWithDuration",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0080, name: "ResumeAction",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0100, name: "EnableAction",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0200, name: "EnableActionWithDuration",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0400, name: "DisableAction",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0800, name: "DisableActionWithDuration",
                    conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "ActionErrorEnum", base: "enum8",
            conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "Unknown",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0001, name: "Interrupted",
                    conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "ActionStateEnum", base: "enum8",
            conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "Inactive",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0001, name: "Active",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0002, name: "Paused",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0003, name: "Disabled",
                    conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "ActionTypeEnum", base: "enum8",
            conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "Other",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0001, name: "Scene",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0002, name: "Sequence",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0003, name: "Automation",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0004, name: "Exception",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0005, name: "Notification",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0006, name: "Alarm",
                    conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "EndpointListTypeEnum", base: "enum8",
            conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "Other",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0001, name: "Room",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0002, name: "Zone",
                    conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "ActionStruct", base: "struct",
            conformance: "M",
            children: [
                DatatypeElement({
                    name: "ActionId", base: "uint16",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "Name", base: "string",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "Type", base: "ActionTypeEnum",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "EndpointListId", base: "uint16",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "SupportedCommands", base: "CommandBits",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "State", base: "ActionStateEnum",
                    conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "EndpointListStruct", base: "struct",
            conformance: "M",
            children: [
                DatatypeElement({
                    name: "EndpointListId", base: "uint16",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "Name", base: "string",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "Type", base: "EndpointListTypeEnum",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "Endpoints", base: "endpoint-no",
                    conformance: "M"
                })
            ]
        })
    ]
}));
