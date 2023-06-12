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
            children: [
                DatatypeElement({
                    name: "entry", base: "ActionStruct"
                })
            ]
        }),

        AttributeElement({
            id: 0x0001, name: "EndpointList", base: "list",
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
                    name: "ActionId", base: "uint16"
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
                    name: "ActionId", base: "uint16"
                }),

                DatatypeElement({
                    name: "InvokeId", base: "uint32",
                    conformance: "O"
                }),

                DatatypeElement({
                    name: "TransitionTime", base: "uint16"
                })
            ]
        }),

        CommandElement({
            id: 0x0002, name: "StartAction",
            conformance: "O", direction: "request",
            children: [
                DatatypeElement({
                    name: "ActionId", base: "uint16"
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
                    name: "ActionId", base: "uint16"
                }),

                DatatypeElement({
                    name: "InvokeId", base: "uint32",
                    conformance: "O"
                }),

                DatatypeElement({
                    name: "Duration", base: "uint32"
                })
            ]
        }),

        CommandElement({
            id: 0x0004, name: "StopAction",
            conformance: "O", direction: "request",
            children: [
                DatatypeElement({
                    name: "ActionId", base: "uint16"
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
                    name: "ActionId", base: "uint16"
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
                    name: "ActionId", base: "uint16"
                }),

                DatatypeElement({
                    name: "InvokeId", base: "uint32",
                    conformance: "O"
                }),

                DatatypeElement({
                    name: "Duration", base: "uint32"
                })
            ]
        }),

        CommandElement({
            id: 0x0007, name: "ResumeAction",
            conformance: "O", direction: "request",
            children: [
                DatatypeElement({
                    name: "ActionId", base: "uint16"
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
                    name: "ActionId", base: "uint16"
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
                    name: "ActionId", base: "uint16"
                }),

                DatatypeElement({
                    name: "InvokeId", base: "uint32",
                    conformance: "O"
                }),

                DatatypeElement({
                    name: "Duration", base: "uint32"
                })
            ]
        }),

        CommandElement({
            id: 0x000a, name: "DisableAction",
            conformance: "O", direction: "request",
            children: [
                DatatypeElement({
                    name: "ActionId", base: "uint16"
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
                    name: "ActionId", base: "uint16"
                }),

                DatatypeElement({
                    name: "InvokeId", base: "uint32",
                    conformance: "O"
                }),

                DatatypeElement({
                    name: "Duration", base: "uint32"
                })
            ]
        }),

        EventElement({
            id: 0x0000, name: "StateChanged",
            priority: "info",
            children: [
                DatatypeElement({
                    name: "ActionId", base: "uint16"
                }),

                DatatypeElement({
                    name: "InvokeId", base: "uint32"
                }),

                DatatypeElement({
                    name: "NewState", base: "ActionStateEnum"
                })
            ]
        }),

        EventElement({
            id: 0x0001, name: "ActionFailed",
            priority: "info",
            children: [
                DatatypeElement({
                    name: "ActionId", base: "uint16"
                }),

                DatatypeElement({
                    name: "InvokeId", base: "uint32"
                }),

                DatatypeElement({
                    name: "NewState", base: "ActionStateEnum"
                }),

                DatatypeElement({
                    name: "Error", base: "ActionErrorEnum"
                })
            ]
        }),

        DatatypeElement({
            name: "CommandBits", base: "map16",
            children: [
                DatatypeElement({
                    id: 0x0001, name: "InstantAction"
                }),

                DatatypeElement({
                    id: 0x0002, name: "InstantActionWithTransition"
                }),

                DatatypeElement({
                    id: 0x0004, name: "StartAction"
                }),

                DatatypeElement({
                    id: 0x0008, name: "StartActionWithDuration"
                }),

                DatatypeElement({
                    id: 0x0010, name: "StopAction"
                }),

                DatatypeElement({
                    id: 0x0020, name: "PauseAction"
                }),

                DatatypeElement({
                    id: 0x0040, name: "PauseActionWithDuration"
                }),

                DatatypeElement({
                    id: 0x0080, name: "ResumeAction"
                }),

                DatatypeElement({
                    id: 0x0100, name: "EnableAction"
                }),

                DatatypeElement({
                    id: 0x0200, name: "EnableActionWithDuration"
                }),

                DatatypeElement({
                    id: 0x0400, name: "DisableAction"
                }),

                DatatypeElement({
                    id: 0x0800, name: "DisableActionWithDuration"
                })
            ]
        }),

        DatatypeElement({
            name: "ActionErrorEnum", base: "enum8",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "Unknown"
                }),

                DatatypeElement({
                    id: 0x0001, name: "Interrupted"
                })
            ]
        }),

        DatatypeElement({
            name: "ActionStateEnum", base: "enum8",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "Inactive"
                }),

                DatatypeElement({
                    id: 0x0001, name: "Active"
                }),

                DatatypeElement({
                    id: 0x0002, name: "Paused"
                }),

                DatatypeElement({
                    id: 0x0003, name: "Disabled"
                })
            ]
        }),

        DatatypeElement({
            name: "ActionTypeEnum", base: "enum8",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "Other"
                }),

                DatatypeElement({
                    id: 0x0001, name: "Scene"
                }),

                DatatypeElement({
                    id: 0x0002, name: "Sequence"
                }),

                DatatypeElement({
                    id: 0x0003, name: "Automation"
                }),

                DatatypeElement({
                    id: 0x0004, name: "Exception"
                }),

                DatatypeElement({
                    id: 0x0005, name: "Notification"
                }),

                DatatypeElement({
                    id: 0x0006, name: "Alarm"
                })
            ]
        }),

        DatatypeElement({
            name: "EndpointListTypeEnum", base: "enum8",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "Other"
                }),

                DatatypeElement({
                    id: 0x0001, name: "Room"
                }),

                DatatypeElement({
                    id: 0x0002, name: "Zone"
                })
            ]
        }),

        DatatypeElement({
            name: "ActionStruct", base: "struct",
            children: [
                DatatypeElement({
                    name: "ActionId", base: "uint16"
                }),

                DatatypeElement({
                    name: "Name", base: "string"
                }),

                DatatypeElement({
                    name: "Type", base: "ActionTypeEnum"
                }),

                DatatypeElement({
                    name: "EndpointListId", base: "uint16"
                }),

                DatatypeElement({
                    name: "SupportedCommands", base: "CommandBits"
                }),

                DatatypeElement({
                    name: "State", base: "ActionStateEnum"
                })
            ]
        }),

        DatatypeElement({
            name: "EndpointListStruct", base: "struct",
            children: [
                DatatypeElement({
                    name: "EndpointListId", base: "uint16"
                }),

                DatatypeElement({
                    name: "Name", base: "string"
                }),

                DatatypeElement({
                    name: "Type", base: "EndpointListTypeEnum"
                }),

                DatatypeElement({
                    name: "Endpoints", base: "endpoint-no"
                })
            ]
        })
    ]
}));
