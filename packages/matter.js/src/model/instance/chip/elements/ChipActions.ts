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
            id: 0x0000, name: "ActionList", type: "list",
            conformance: "M",
            children: [
                DatatypeElement({
                    name: "entry", type: "ActionStruct"
                })
            ]
        }),

        AttributeElement({
            id: 0x0001, name: "EndpointList", type: "list",
            conformance: "M",
            children: [
                DatatypeElement({
                    name: "entry", type: "EndpointListStruct"
                })
            ]
        }),

        AttributeElement({
            id: 0x0002, name: "SetupUrl", type: "string",
            conformance: "O"
        }),

        CommandElement({
            id: 0x0000, name: "InstantAction",
            conformance: "O", direction: "request",
            children: [
                DatatypeElement({
                    name: "ActionId", type: "uint16",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "InvokeId", type: "uint32",
                    conformance: "O"
                })
            ]
        }),

        CommandElement({
            id: 0x0001, name: "InstantActionWithTransition",
            conformance: "O", direction: "request",
            children: [
                DatatypeElement({
                    name: "ActionId", type: "uint16",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "InvokeId", type: "uint32",
                    conformance: "O"
                }),

                DatatypeElement({
                    name: "TransitionTime", type: "uint16",
                    conformance: "M"
                })
            ]
        }),

        CommandElement({
            id: 0x0002, name: "StartAction",
            conformance: "O", direction: "request",
            children: [
                DatatypeElement({
                    name: "ActionId", type: "uint16",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "InvokeId", type: "uint32",
                    conformance: "O"
                })
            ]
        }),

        CommandElement({
            id: 0x0003, name: "StartActionWithDuration",
            conformance: "O", direction: "request",
            children: [
                DatatypeElement({
                    name: "ActionId", type: "uint16",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "InvokeId", type: "uint32",
                    conformance: "O"
                }),

                DatatypeElement({
                    name: "Duration", type: "uint32",
                    conformance: "M"
                })
            ]
        }),

        CommandElement({
            id: 0x0004, name: "StopAction",
            conformance: "O", direction: "request",
            children: [
                DatatypeElement({
                    name: "ActionId", type: "uint16",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "InvokeId", type: "uint32",
                    conformance: "O"
                })
            ]
        }),

        CommandElement({
            id: 0x0005, name: "PauseAction",
            conformance: "O", direction: "request",
            children: [
                DatatypeElement({
                    name: "ActionId", type: "uint16",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "InvokeId", type: "uint32",
                    conformance: "O"
                })
            ]
        }),

        CommandElement({
            id: 0x0006, name: "PauseActionWithDuration",
            conformance: "O", direction: "request",
            children: [
                DatatypeElement({
                    name: "ActionId", type: "uint16",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "InvokeId", type: "uint32",
                    conformance: "O"
                }),

                DatatypeElement({
                    name: "Duration", type: "uint32",
                    conformance: "M"
                })
            ]
        }),

        CommandElement({
            id: 0x0007, name: "ResumeAction",
            conformance: "O", direction: "request",
            children: [
                DatatypeElement({
                    name: "ActionId", type: "uint16",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "InvokeId", type: "uint32",
                    conformance: "O"
                })
            ]
        }),

        CommandElement({
            id: 0x0008, name: "EnableAction",
            conformance: "O", direction: "request",
            children: [
                DatatypeElement({
                    name: "ActionId", type: "uint16",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "InvokeId", type: "uint32",
                    conformance: "O"
                })
            ]
        }),

        CommandElement({
            id: 0x0009, name: "EnableActionWithDuration",
            conformance: "O", direction: "request",
            children: [
                DatatypeElement({
                    name: "ActionId", type: "uint16",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "InvokeId", type: "uint32",
                    conformance: "O"
                }),

                DatatypeElement({
                    name: "Duration", type: "uint32",
                    conformance: "M"
                })
            ]
        }),

        CommandElement({
            id: 0x000a, name: "DisableAction",
            conformance: "O", direction: "request",
            children: [
                DatatypeElement({
                    name: "ActionId", type: "uint16",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "InvokeId", type: "uint32",
                    conformance: "O"
                })
            ]
        }),

        CommandElement({
            id: 0x000b, name: "DisableActionWithDuration",
            conformance: "O", direction: "request",
            children: [
                DatatypeElement({
                    name: "ActionId", type: "uint16",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "InvokeId", type: "uint32",
                    conformance: "O"
                }),

                DatatypeElement({
                    name: "Duration", type: "uint32",
                    conformance: "M"
                })
            ]
        }),

        EventElement({
            id: 0x0000, name: "StateChanged",
            conformance: "M", priority: "info",
            children: [
                DatatypeElement({
                    name: "ActionId", type: "uint16",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "InvokeId", type: "uint32",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "NewState", type: "ActionStateEnum",
                    conformance: "M"
                })
            ]
        }),

        EventElement({
            id: 0x0001, name: "ActionFailed",
            conformance: "M", priority: "info",
            children: [
                DatatypeElement({
                    name: "ActionId", type: "uint16",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "InvokeId", type: "uint32",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "NewState", type: "ActionStateEnum",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "Error", type: "ActionErrorEnum",
                    conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "CommandBits", type: "map16",
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
            name: "ActionErrorEnum", type: "enum8",
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
            name: "ActionStateEnum", type: "enum8",
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
            name: "ActionTypeEnum", type: "enum8",
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
            name: "EndpointListTypeEnum", type: "enum8",
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
            name: "ActionStruct", type: "struct",
            conformance: "M",
            children: [
                DatatypeElement({
                    name: "ActionId", type: "uint16",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "Name", type: "string",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "Type", type: "ActionTypeEnum",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "EndpointListId", type: "uint16",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "SupportedCommands", type: "CommandBits",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "State", type: "ActionStateEnum",
                    conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "EndpointListStruct", type: "struct",
            conformance: "M",
            children: [
                DatatypeElement({
                    name: "EndpointListId", type: "uint16",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "Name", type: "string",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "Type", type: "EndpointListTypeEnum",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "Endpoints", type: "endpoint-no",
                    conformance: "M"
                })
            ]
        })
    ]
}));
