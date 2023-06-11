/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ChipMatter } from "../internal.js";
import { ClusterElement, AttributeElement, CommandElement, DatatypeElement, EventElement } from "../../../index.js";

ChipMatter.children!.push(ClusterElement({
    id: 0x0025, name: "Actions",
    description: "Actions",
    details: "This cluster provides a standardized way for a Node (typically a Bridge, but could be any Node) to expose action information.",
    children: [
        AttributeElement({
            id: 0x0000, name: "actionList", base: "list",
            access: { rw: "R" }, conformance: [ "M" ]
        }),

        AttributeElement({
            id: 0x0001, name: "endpointList", base: "list",
            access: { rw: "R" }, conformance: [ "M" ]
        }),

        AttributeElement({
            id: 0x0002, name: "setupUrl", base: "string",
            access: { rw: "R" }, conformance: [ "O" ]
        }),

        CommandElement({
            id: 0x0000, name: "InstantAction",
            access: { rw: "R" }, conformance: [ "O" ], direction: "request",
            children: [
                DatatypeElement({
                    name: "actionId", base: "uint16",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "actionId", base: "uint16",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "invokeId", base: "uint32",
                    access: { rw: "R" }, conformance: [ "O" ]
                }),

                DatatypeElement({
                    name: "invokeId", base: "uint32",
                    access: { rw: "R" }, conformance: [ "O" ]
                })
            ]
        }),

        CommandElement({
            id: 0x0001, name: "InstantActionWithTransition",
            access: { rw: "R" }, conformance: [ "O" ], direction: "request",
            children: [
                DatatypeElement({
                    name: "actionId", base: "uint16",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "actionId", base: "uint16",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "invokeId", base: "uint32",
                    access: { rw: "R" }, conformance: [ "O" ]
                }),

                DatatypeElement({
                    name: "invokeId", base: "uint32",
                    access: { rw: "R" }, conformance: [ "O" ]
                }),

                DatatypeElement({
                    name: "transitionTime", base: "uint16",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "transitionTime", base: "uint16",
                    access: { rw: "R" }, conformance: [ "M" ]
                })
            ]
        }),

        CommandElement({
            id: 0x0002, name: "StartAction",
            access: { rw: "R" }, conformance: [ "O" ], direction: "request",
            children: [
                DatatypeElement({
                    name: "actionId", base: "uint16",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "actionId", base: "uint16",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "invokeId", base: "uint32",
                    access: { rw: "R" }, conformance: [ "O" ]
                }),

                DatatypeElement({
                    name: "invokeId", base: "uint32",
                    access: { rw: "R" }, conformance: [ "O" ]
                })
            ]
        }),

        CommandElement({
            id: 0x0003, name: "StartActionWithDuration",
            access: { rw: "R" }, conformance: [ "O" ], direction: "request",
            children: [
                DatatypeElement({
                    name: "actionId", base: "uint16",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "actionId", base: "uint16",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "invokeId", base: "uint32",
                    access: { rw: "R" }, conformance: [ "O" ]
                }),

                DatatypeElement({
                    name: "invokeId", base: "uint32",
                    access: { rw: "R" }, conformance: [ "O" ]
                }),

                DatatypeElement({
                    name: "duration", base: "uint32",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "duration", base: "uint32",
                    access: { rw: "R" }, conformance: [ "M" ]
                })
            ]
        }),

        CommandElement({
            id: 0x0004, name: "StopAction",
            access: { rw: "R" }, conformance: [ "O" ], direction: "request",
            children: [
                DatatypeElement({
                    name: "actionId", base: "uint16",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "actionId", base: "uint16",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "invokeId", base: "uint32",
                    access: { rw: "R" }, conformance: [ "O" ]
                }),

                DatatypeElement({
                    name: "invokeId", base: "uint32",
                    access: { rw: "R" }, conformance: [ "O" ]
                })
            ]
        }),

        CommandElement({
            id: 0x0005, name: "PauseAction",
            access: { rw: "R" }, conformance: [ "O" ], direction: "request",
            children: [
                DatatypeElement({
                    name: "actionId", base: "uint16",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "actionId", base: "uint16",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "invokeId", base: "uint32",
                    access: { rw: "R" }, conformance: [ "O" ]
                }),

                DatatypeElement({
                    name: "invokeId", base: "uint32",
                    access: { rw: "R" }, conformance: [ "O" ]
                })
            ]
        }),

        CommandElement({
            id: 0x0006, name: "PauseActionWithDuration",
            access: { rw: "R" }, conformance: [ "O" ], direction: "request",
            children: [
                DatatypeElement({
                    name: "actionId", base: "uint16",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "actionId", base: "uint16",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "invokeId", base: "uint32",
                    access: { rw: "R" }, conformance: [ "O" ]
                }),

                DatatypeElement({
                    name: "invokeId", base: "uint32",
                    access: { rw: "R" }, conformance: [ "O" ]
                }),

                DatatypeElement({
                    name: "duration", base: "uint32",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "duration", base: "uint32",
                    access: { rw: "R" }, conformance: [ "M" ]
                })
            ]
        }),

        CommandElement({
            id: 0x0007, name: "ResumeAction",
            access: { rw: "R" }, conformance: [ "O" ], direction: "request",
            children: [
                DatatypeElement({
                    name: "actionId", base: "uint16",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "actionId", base: "uint16",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "invokeId", base: "uint32",
                    access: { rw: "R" }, conformance: [ "O" ]
                }),

                DatatypeElement({
                    name: "invokeId", base: "uint32",
                    access: { rw: "R" }, conformance: [ "O" ]
                })
            ]
        }),

        CommandElement({
            id: 0x0008, name: "EnableAction",
            access: { rw: "R" }, conformance: [ "O" ], direction: "request",
            children: [
                DatatypeElement({
                    name: "actionId", base: "uint16",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "actionId", base: "uint16",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "invokeId", base: "uint32",
                    access: { rw: "R" }, conformance: [ "O" ]
                }),

                DatatypeElement({
                    name: "invokeId", base: "uint32",
                    access: { rw: "R" }, conformance: [ "O" ]
                })
            ]
        }),

        CommandElement({
            id: 0x0009, name: "EnableActionWithDuration",
            access: { rw: "R" }, conformance: [ "O" ], direction: "request",
            children: [
                DatatypeElement({
                    name: "actionId", base: "uint16",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "actionId", base: "uint16",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "invokeId", base: "uint32",
                    access: { rw: "R" }, conformance: [ "O" ]
                }),

                DatatypeElement({
                    name: "invokeId", base: "uint32",
                    access: { rw: "R" }, conformance: [ "O" ]
                }),

                DatatypeElement({
                    name: "duration", base: "uint32",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "duration", base: "uint32",
                    access: { rw: "R" }, conformance: [ "M" ]
                })
            ]
        }),

        CommandElement({
            id: 0x000a, name: "DisableAction",
            access: { rw: "R" }, conformance: [ "O" ], direction: "request",
            children: [
                DatatypeElement({
                    name: "actionId", base: "uint16",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "actionId", base: "uint16",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "invokeId", base: "uint32",
                    access: { rw: "R" }, conformance: [ "O" ]
                }),

                DatatypeElement({
                    name: "invokeId", base: "uint32",
                    access: { rw: "R" }, conformance: [ "O" ]
                })
            ]
        }),

        CommandElement({
            id: 0x000b, name: "DisableActionWithDuration",
            access: { rw: "R" }, conformance: [ "O" ], direction: "request",
            children: [
                DatatypeElement({
                    name: "actionId", base: "uint16",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "actionId", base: "uint16",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "invokeId", base: "uint32",
                    access: { rw: "R" }, conformance: [ "O" ]
                }),

                DatatypeElement({
                    name: "invokeId", base: "uint32",
                    access: { rw: "R" }, conformance: [ "O" ]
                }),

                DatatypeElement({
                    name: "duration", base: "uint32",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "duration", base: "uint32",
                    access: { rw: "R" }, conformance: [ "M" ]
                })
            ]
        }),

        EventElement({
            id: 0x0000, name: "StateChanged",
            access: { rw: "R" }, conformance: [ "M" ], priority: "info",
            children: [
                DatatypeElement({
                    name: "actionId", base: "uint16",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "actionId", base: "uint16",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "invokeId", base: "uint32",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "invokeId", base: "uint32",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "newState", base: "ActionStateEnum",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "newState", base: "ActionStateEnum",
                    access: { rw: "R" }, conformance: [ "M" ]
                })
            ]
        }),

        EventElement({
            id: 0x0001, name: "ActionFailed",
            access: { rw: "R" }, conformance: [ "M" ], priority: "info",
            children: [
                DatatypeElement({
                    name: "actionId", base: "uint16",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "actionId", base: "uint16",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "invokeId", base: "uint32",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "invokeId", base: "uint32",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "newState", base: "ActionStateEnum",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "newState", base: "ActionStateEnum",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "error", base: "ActionErrorEnum",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "error", base: "ActionErrorEnum",
                    access: { rw: "R" }, conformance: [ "M" ]
                })
            ]
        }),

        DatatypeElement({
            name: "CommandBits", base: "map16",
            access: { rw: "R" }, conformance: [ "M" ],
            children: [
                DatatypeElement({
                    name: "instantAction",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x0001"
                }),

                DatatypeElement({
                    name: "instantAction",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x0001"
                }),

                DatatypeElement({
                    name: "instantActionWithTransition",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x0002"
                }),

                DatatypeElement({
                    name: "instantActionWithTransition",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x0002"
                }),

                DatatypeElement({
                    name: "startAction",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x0004"
                }),

                DatatypeElement({
                    name: "startAction",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x0004"
                }),

                DatatypeElement({
                    name: "startActionWithDuration",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x0008"
                }),

                DatatypeElement({
                    name: "startActionWithDuration",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x0008"
                }),

                DatatypeElement({
                    name: "stopAction",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x0010"
                }),

                DatatypeElement({
                    name: "stopAction",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x0010"
                }),

                DatatypeElement({
                    name: "pauseAction",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x0020"
                }),

                DatatypeElement({
                    name: "pauseAction",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x0020"
                }),

                DatatypeElement({
                    name: "pauseActionWithDuration",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x0040"
                }),

                DatatypeElement({
                    name: "pauseActionWithDuration",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x0040"
                }),

                DatatypeElement({
                    name: "resumeAction",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x0080"
                }),

                DatatypeElement({
                    name: "resumeAction",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x0080"
                }),

                DatatypeElement({
                    name: "enableAction",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x0100"
                }),

                DatatypeElement({
                    name: "enableAction",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x0100"
                }),

                DatatypeElement({
                    name: "enableActionWithDuration",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x0200"
                }),

                DatatypeElement({
                    name: "enableActionWithDuration",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x0200"
                }),

                DatatypeElement({
                    name: "disableAction",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x0400"
                }),

                DatatypeElement({
                    name: "disableAction",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x0400"
                }),

                DatatypeElement({
                    name: "disableActionWithDuration",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x0800"
                }),

                DatatypeElement({
                    name: "disableActionWithDuration",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x0800"
                })
            ]
        }),

        DatatypeElement({
            name: "ActionErrorEnum", base: "enum8",
            access: { rw: "R" }, conformance: [ "M" ],
            children: [
                DatatypeElement({
                    name: "unknown",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0"
                }),

                DatatypeElement({
                    name: "unknown",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0"
                }),

                DatatypeElement({
                    name: "interrupted",
                    access: { rw: "R" }, conformance: [ "M" ], value: "1"
                }),

                DatatypeElement({
                    name: "interrupted",
                    access: { rw: "R" }, conformance: [ "M" ], value: "1"
                })
            ]
        }),

        DatatypeElement({
            name: "ActionStateEnum", base: "enum8",
            access: { rw: "R" }, conformance: [ "M" ],
            children: [
                DatatypeElement({
                    name: "inactive",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0"
                }),

                DatatypeElement({
                    name: "inactive",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0"
                }),

                DatatypeElement({
                    name: "active",
                    access: { rw: "R" }, conformance: [ "M" ], value: "1"
                }),

                DatatypeElement({
                    name: "active",
                    access: { rw: "R" }, conformance: [ "M" ], value: "1"
                }),

                DatatypeElement({
                    name: "paused",
                    access: { rw: "R" }, conformance: [ "M" ], value: "2"
                }),

                DatatypeElement({
                    name: "paused",
                    access: { rw: "R" }, conformance: [ "M" ], value: "2"
                }),

                DatatypeElement({
                    name: "disabled",
                    access: { rw: "R" }, conformance: [ "M" ], value: "3"
                }),

                DatatypeElement({
                    name: "disabled",
                    access: { rw: "R" }, conformance: [ "M" ], value: "3"
                })
            ]
        }),

        DatatypeElement({
            name: "ActionTypeEnum", base: "enum8",
            access: { rw: "R" }, conformance: [ "M" ],
            children: [
                DatatypeElement({
                    name: "other",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0"
                }),

                DatatypeElement({
                    name: "other",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0"
                }),

                DatatypeElement({
                    name: "scene",
                    access: { rw: "R" }, conformance: [ "M" ], value: "1"
                }),

                DatatypeElement({
                    name: "scene",
                    access: { rw: "R" }, conformance: [ "M" ], value: "1"
                }),

                DatatypeElement({
                    name: "sequence",
                    access: { rw: "R" }, conformance: [ "M" ], value: "2"
                }),

                DatatypeElement({
                    name: "sequence",
                    access: { rw: "R" }, conformance: [ "M" ], value: "2"
                }),

                DatatypeElement({
                    name: "automation",
                    access: { rw: "R" }, conformance: [ "M" ], value: "3"
                }),

                DatatypeElement({
                    name: "automation",
                    access: { rw: "R" }, conformance: [ "M" ], value: "3"
                }),

                DatatypeElement({
                    name: "exception",
                    access: { rw: "R" }, conformance: [ "M" ], value: "4"
                }),

                DatatypeElement({
                    name: "exception",
                    access: { rw: "R" }, conformance: [ "M" ], value: "4"
                }),

                DatatypeElement({
                    name: "notification",
                    access: { rw: "R" }, conformance: [ "M" ], value: "5"
                }),

                DatatypeElement({
                    name: "notification",
                    access: { rw: "R" }, conformance: [ "M" ], value: "5"
                }),

                DatatypeElement({
                    name: "alarm",
                    access: { rw: "R" }, conformance: [ "M" ], value: "6"
                }),

                DatatypeElement({
                    name: "alarm",
                    access: { rw: "R" }, conformance: [ "M" ], value: "6"
                })
            ]
        }),

        DatatypeElement({
            name: "EndpointListTypeEnum", base: "enum8",
            access: { rw: "R" }, conformance: [ "M" ],
            children: [
                DatatypeElement({
                    name: "other",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0"
                }),

                DatatypeElement({
                    name: "other",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0"
                }),

                DatatypeElement({
                    name: "room",
                    access: { rw: "R" }, conformance: [ "M" ], value: "1"
                }),

                DatatypeElement({
                    name: "room",
                    access: { rw: "R" }, conformance: [ "M" ], value: "1"
                }),

                DatatypeElement({
                    name: "zone",
                    access: { rw: "R" }, conformance: [ "M" ], value: "2"
                }),

                DatatypeElement({
                    name: "zone",
                    access: { rw: "R" }, conformance: [ "M" ], value: "2"
                })
            ]
        }),

        DatatypeElement({
            name: "ActionStruct", base: "struct",
            access: { rw: "R" }, conformance: [ "M" ],
            children: [
                DatatypeElement({
                    name: "actionId", base: "uint16",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "actionId", base: "uint16",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "name", base: "string",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "name", base: "string",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "type", base: "ActionTypeEnum",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "type", base: "ActionTypeEnum",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "endpointListId", base: "uint16",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "endpointListId", base: "uint16",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "supportedCommands", base: "CommandBits",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "supportedCommands", base: "CommandBits",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "state", base: "ActionStateEnum",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "state", base: "ActionStateEnum",
                    access: { rw: "R" }, conformance: [ "M" ]
                })
            ]
        }),

        DatatypeElement({
            name: "EndpointListStruct", base: "struct",
            access: { rw: "R" }, conformance: [ "M" ],
            children: [
                DatatypeElement({
                    name: "endpointListId", base: "uint16",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "endpointListId", base: "uint16",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "name", base: "string",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "name", base: "string",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "type", base: "EndpointListTypeEnum",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "type", base: "EndpointListTypeEnum",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "endpoints", base: "endpointNo",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "endpoints", base: "endpointNo",
                    access: { rw: "R" }, conformance: [ "M" ]
                })
            ]
        })
    ]
}));
