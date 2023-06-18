/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Matter } from "../Matter.js";

Matter.children.push({
    tag: "cluster", id: 0x0025, name: "Actions",
    classification: "application", description: "Actions",
    children: [
        {
            tag: "attribute", id: 0x0000, name: "ActionList",
            access: "R V", conformance: "M", constraint: "max 256", default: "empty", type: "list",
            details: "The ActionList attribute holds the list of actions. Each entry SHALL " +
                     "have an unique ActionID, and its EndpointListID SHALL exist in the " +
                     "EndpointLists attribute",
            xref: { document: "core", section: "9.14.5.1" },
            children: [
                {
                    tag: "datatype", name: "entry",
                    type: "ActionStruct"
                }
            ]
        },

        {
            tag: "attribute", id: 0x0001, name: "EndpointList",
            access: "R V", conformance: "M", constraint: "max 256", default: "empty", type: "list",
            details: "The EndpointLists attribute holds the list of endpoint lists. Each " +
                     "entry SHALL have an unique EndpointListID",
            xref: { document: "core", section: "9.14.5.2" },
            children: [
                {
                    tag: "datatype", name: "entry",
                    type: "EndpointListStruct"
                }
            ]
        },

        {
            tag: "attribute", id: 0x0002, name: "SetupUrl",
            access: "R V", conformance: "O", constraint: "max 512", default: "empty", type: "string",
            details: "The SetupURL attribute (when provided) SHALL indicate a URL; its " +
                     "syntax SHALL follow the syntax as specified in RFC 3986, max. 512 " +
                     "ASCII characters. The location referenced by this URL SHALL provide " +
                     "additional information for the actions provided",
            xref: { document: "core", section: "9.14.5.3" }
        },

        {
            tag: "event", id: 0x0000, name: "StateChanged",
            access: "V", conformance: "M", priority: "info",
            details: "This event SHALL be generated when there is a change in the State of " +
                     "an ActionID during the execution of an action and the most recent " +
                     "command using that ActionID used an InvokeID data field",
            xref: { document: "core", section: "9.14.7.1" },
            children: [
                {
                    tag: "datatype", name: "ActionId",
                    conformance: "M", type: "uint16"
                },

                {
                    tag: "datatype", name: "InvokeId",
                    conformance: "M", type: "uint32"
                },

                {
                    tag: "datatype", name: "NewState",
                    conformance: "M", type: "ActionStateEnum"
                }
            ]
        },

        {
            tag: "event", id: 0x0001, name: "ActionFailed",
            access: "V", conformance: "M", priority: "info",
            details: "This event SHALL be generated when there is some error which prevents " +
                     "the action from its normal planned execution and the most recent " +
                     "command using that ActionID used an InvokeID data field",
            xref: { document: "core", section: "9.14.7.2" },
            children: [
                {
                    tag: "datatype", name: "ActionId",
                    conformance: "M", type: "uint16"
                },

                {
                    tag: "datatype", name: "InvokeId",
                    conformance: "M", type: "uint32"
                },

                {
                    tag: "datatype", name: "NewState",
                    conformance: "M", type: "ActionStateEnum"
                },

                {
                    tag: "datatype", name: "Error",
                    conformance: "M", type: "ActionErrorEnum"
                }
            ]
        },

        {
            tag: "command", id: 0x0000, name: "InstantAction",
            access: "O", conformance: "desc", direction: "request", response: "status",
            details: "This command SHALL have the following data fields",
            xref: { document: "core", section: "9.14.6.1" },
            children: [
                {
                    tag: "datatype", name: "ActionId",
                    conformance: "M", type: "uint16"
                },

                {
                    tag: "datatype", name: "InvokeId",
                    conformance: "O", type: "uint32"
                }
            ]
        },

        {
            tag: "command", id: 0x0001, name: "InstantActionWithTransition",
            access: "O", conformance: "desc", direction: "request", response: "status",
            details: "This command SHALL have the following data fields",
            xref: { document: "core", section: "9.14.6.2" },
            children: [
                {
                    tag: "datatype", name: "ActionId",
                    conformance: "M", type: "uint16"
                },

                {
                    tag: "datatype", name: "InvokeId",
                    conformance: "O", type: "uint32"
                },

                {
                    tag: "datatype", name: "TransitionTime",
                    conformance: "M", type: "uint16"
                }
            ]
        },

        {
            tag: "command", id: 0x0002, name: "StartAction",
            access: "O", conformance: "desc", direction: "request", response: "status",
            details: "This command SHALL have the following data fields",
            xref: { document: "core", section: "9.14.6.3" },
            children: [
                {
                    tag: "datatype", name: "ActionId",
                    conformance: "M", type: "uint16"
                },

                {
                    tag: "datatype", name: "InvokeId",
                    conformance: "O", type: "uint32"
                }
            ]
        },

        {
            tag: "command", id: 0x0003, name: "StartActionWithDuration",
            access: "O", conformance: "desc", direction: "request", response: "status",
            details: "This command SHALL have the following data fields",
            xref: { document: "core", section: "9.14.6.4" },
            children: [
                {
                    tag: "datatype", name: "ActionId",
                    conformance: "M", type: "uint16"
                },

                {
                    tag: "datatype", name: "InvokeId",
                    conformance: "O", type: "uint32"
                },

                {
                    tag: "datatype", name: "Duration",
                    conformance: "M", type: "uint32"
                }
            ]
        },

        {
            tag: "command", id: 0x0004, name: "StopAction",
            access: "O", conformance: "desc", direction: "request", response: "status",
            details: "This command SHALL have the following data fields",
            xref: { document: "core", section: "9.14.6.5" },
            children: [
                {
                    tag: "datatype", name: "ActionId",
                    conformance: "M", type: "uint16"
                },

                {
                    tag: "datatype", name: "InvokeId",
                    conformance: "O", type: "uint32"
                }
            ]
        },

        {
            tag: "command", id: 0x0005, name: "PauseAction",
            access: "O", conformance: "desc", direction: "request", response: "status",
            details: "This command SHALL have the following data fields",
            xref: { document: "core", section: "9.14.6.6" },
            children: [
                {
                    tag: "datatype", name: "ActionId",
                    conformance: "M", type: "uint16"
                },

                {
                    tag: "datatype", name: "InvokeId",
                    conformance: "O", type: "uint32"
                }
            ]
        },

        {
            tag: "command", id: 0x0006, name: "PauseActionWithDuration",
            access: "O", conformance: "desc", direction: "request", response: "status",
            details: "This command SHALL have the following data fields",
            xref: { document: "core", section: "9.14.6.7" },
            children: [
                {
                    tag: "datatype", name: "ActionId",
                    conformance: "M", type: "uint16"
                },

                {
                    tag: "datatype", name: "InvokeId",
                    conformance: "O", type: "uint32"
                },

                {
                    tag: "datatype", name: "Duration",
                    conformance: "M", type: "uint32"
                }
            ]
        },

        {
            tag: "command", id: 0x0007, name: "ResumeAction",
            access: "O", conformance: "desc", direction: "request", response: "status",
            details: "This command SHALL have the following data fields",
            xref: { document: "core", section: "9.14.6.8" },
            children: [
                {
                    tag: "datatype", name: "ActionId",
                    conformance: "M", type: "uint16"
                },

                {
                    tag: "datatype", name: "InvokeId",
                    conformance: "O", type: "uint32"
                }
            ]
        },

        {
            tag: "command", id: 0x0008, name: "EnableAction",
            access: "O", conformance: "desc", direction: "request", response: "status",
            details: "This command SHALL have the following data fields",
            xref: { document: "core", section: "9.14.6.9" },
            children: [
                {
                    tag: "datatype", name: "ActionId",
                    conformance: "M", type: "uint16"
                },

                {
                    tag: "datatype", name: "InvokeId",
                    conformance: "O", type: "uint32"
                }
            ]
        },

        {
            tag: "command", id: 0x0009, name: "EnableActionWithDuration",
            access: "O", conformance: "desc", direction: "request", response: "status",
            details: "This command SHALL have the following data fields",
            xref: { document: "core", section: "9.14.6.10" },
            children: [
                {
                    tag: "datatype", name: "ActionId",
                    conformance: "M", type: "uint16"
                },

                {
                    tag: "datatype", name: "InvokeId",
                    conformance: "O", type: "uint32"
                },

                {
                    tag: "datatype", name: "Duration",
                    conformance: "M", type: "uint32"
                }
            ]
        },

        {
            tag: "command", id: 0x000a, name: "DisableAction",
            access: "O", conformance: "desc", direction: "request", response: "status",
            details: "This command SHALL have the following data fields",
            xref: { document: "core", section: "9.14.6.11" },
            children: [
                {
                    tag: "datatype", name: "ActionId",
                    conformance: "M", type: "uint16"
                },

                {
                    tag: "datatype", name: "InvokeId",
                    conformance: "O", type: "uint32"
                }
            ]
        },

        {
            tag: "command", id: 0x000b, name: "DisableActionWithDuration",
            access: "O", conformance: "desc", direction: "request", response: "status",
            details: "This command SHALL have the following data fields",
            xref: { document: "core", section: "9.14.6.12" },
            children: [
                {
                    tag: "datatype", name: "ActionId",
                    conformance: "M", type: "uint16"
                },

                {
                    tag: "datatype", name: "InvokeId",
                    conformance: "O", type: "uint32"
                },

                {
                    tag: "datatype", name: "Duration",
                    conformance: "M", type: "uint32"
                }
            ]
        },

        {
            tag: "datatype", name: "EndpointListStruct",
            conformance: "M", type: "struct",
            details: "This data type is derived from map16",
            xref: { document: "core", section: "9.14.4.1" },
            children: [
                {
                    tag: "datatype", id: 0x0000, name: "InstantAction",
                    description: "Indicate support for InstantAction command",
                    xref: { document: "core", section: "9.14.4.1" }
                },

                {
                    tag: "datatype", id: 0x0001, name: "Name",
                    conformance: "M", description: "Indicate support for InstantActionWithTransition command", type: "string",
                    xref: { document: "core", section: "9.14.4.1" }
                },

                {
                    tag: "datatype", id: 0x0002, name: "Type",
                    conformance: "M", description: "Indicate support for StartAction command", type: "EndpointListTypeEnum",
                    xref: { document: "core", section: "9.14.4.1" }
                },

                {
                    tag: "datatype", id: 0x0003, name: "Endpoints",
                    conformance: "M", description: "Indicate support for StartActionWithDuration command", type: "endpoint-no",
                    xref: { document: "core", section: "9.14.4.1" }
                },

                {
                    tag: "datatype", id: 0x0004, name: "StopAction",
                    description: "Indicate support for StopAction command",
                    xref: { document: "core", section: "9.14.4.1" }
                },

                {
                    tag: "datatype", id: 0x0005, name: "PauseAction",
                    description: "Indicate support for PauseAction command",
                    xref: { document: "core", section: "9.14.4.1" }
                },

                {
                    tag: "datatype", id: 0x0006, name: "PauseActionWithDuration",
                    description: "Indicate support for PauseActionWithDuration command",
                    xref: { document: "core", section: "9.14.4.1" }
                },

                {
                    tag: "datatype", id: 0x0007, name: "ResumeAction",
                    description: "Indicate support for ResumeAction command",
                    xref: { document: "core", section: "9.14.4.1" }
                },

                {
                    tag: "datatype", id: 0x0008, name: "EnableAction",
                    description: "Indicate support for EnableAction command",
                    xref: { document: "core", section: "9.14.4.1" }
                },

                {
                    tag: "datatype", id: 0x0009, name: "EnableActionWithDuration",
                    description: "Indicate support for EnableActionWithDuration command",
                    xref: { document: "core", section: "9.14.4.1" }
                },

                {
                    tag: "datatype", id: 0x000a, name: "DisableAction",
                    description: "Indicate support for DisableAction command",
                    xref: { document: "core", section: "9.14.4.1" }
                },

                {
                    tag: "datatype", id: 0x000b, name: "DisableActionWithDuration",
                    description: "Indicate support for DisableActionWithDuration command",
                    xref: { document: "core", section: "9.14.4.1" }
                },

                {
                    tag: "datatype", name: "EndpointListId",
                    conformance: "M", type: "uint16"
                }
            ]
        },

        {
            tag: "datatype", name: "ActionErrorEnum",
            conformance: "M", type: "enum8",
            children: [
                {
                    tag: "datatype", id: 0x0000, name: "Unknown",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0001, name: "Interrupted",
                    conformance: "M"
                }
            ]
        },

        {
            tag: "datatype", name: "ActionStateEnum",
            conformance: "M", type: "enum8",
            children: [
                {
                    tag: "datatype", id: 0x0000, name: "Inactive",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0001, name: "Active",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0002, name: "Paused",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0003, name: "Disabled",
                    conformance: "M"
                }
            ]
        },

        {
            tag: "datatype", name: "ActionTypeEnum",
            conformance: "M", type: "enum8",
            children: [
                {
                    tag: "datatype", id: 0x0000, name: "Other",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0001, name: "Scene",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0002, name: "Sequence",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0003, name: "Automation",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0004, name: "Exception",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0005, name: "Notification",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0006, name: "Alarm",
                    conformance: "M"
                }
            ]
        },

        {
            tag: "datatype", name: "EndpointListTypeEnum",
            conformance: "M", type: "enum8",
            children: [
                {
                    tag: "datatype", id: 0x0000, name: "Other",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0001, name: "Room",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0002, name: "Zone",
                    conformance: "M"
                }
            ]
        },

        {
            tag: "datatype", name: "ActionStruct",
            conformance: "M", type: "struct",
            children: [
                {
                    tag: "datatype", name: "ActionId",
                    conformance: "M", type: "uint16"
                },

                {
                    tag: "datatype", name: "Name",
                    conformance: "M", type: "string"
                },

                {
                    tag: "datatype", name: "Type",
                    conformance: "M", type: "ActionTypeEnum"
                },

                {
                    tag: "datatype", name: "EndpointListId",
                    conformance: "M", type: "uint16"
                },

                {
                    tag: "datatype", name: "SupportedCommands",
                    conformance: "M", type: "CommandBits"
                },

                {
                    tag: "datatype", name: "State",
                    conformance: "M", type: "ActionStateEnum"
                }
            ]
        }
    ]
});
