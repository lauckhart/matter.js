/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Matter } from "../Matter.js";

Matter.children.push({
    tag: "cluster", name: "Actions", id: 0x25, classification: "application", description: "Actions",
    details: "This cluster provides a standardized way for a Node (typically a Bridge, but could be any Node) to " +
             "expose action information",
    xref: { document: "core", section: "9.14" },
    children: [
        {
            tag: "attribute", name: "ActionList", id: 0x0, type: "list", access: "R V", conformance: "M",
            constraint: "max 256",
            details: "The ActionList attribute holds the list of actions. Each entry SHALL have an unique ActionID, and " +
                     "its EndpointListID SHALL exist in the EndpointLists attribute",
            xref: { document: "core", section: "9.14.5.1" },
            children: [
                {
                    tag: "datatype", name: "entry", type: "ActionStruct"
                }
            ]
        },

        {
            tag: "attribute", name: "EndpointLists", id: 0x1, type: "list", access: "R V", conformance: "M",
            constraint: "max 256",
            details: "The EndpointLists attribute holds the list of endpoint lists. Each entry SHALL have an unique " +
                     "EndpointListID",
            xref: { document: "core", section: "9.14.5.2" },
            children: [
                {
                    tag: "datatype", name: "entry", type: "EndpointListStruct"
                }
            ]
        },

        {
            tag: "attribute", name: "SetupUrl", id: 0x2, type: "string", access: "R V", conformance: "O",
            constraint: "max 512", default: "empty",
            details: "The SetupURL attribute (when provided) SHALL indicate a URL; its syntax SHALL follow the syntax as " +
                     "specified in RFC 3986, max. 512 ASCII characters. The location referenced by this URL SHALL provide " +
                     "additional information for the actions provided",
            xref: { document: "core", section: "9.14.5.3" }
        },

        {
            tag: "event", name: "StateChanged", id: 0x0, access: "V", conformance: "M", priority: "info",
            details: "This event SHALL be generated when there is a change in the State of an ActionID during the " +
                     "execution of an action and the most recent command using that ActionID used an InvokeID data field",
            xref: { document: "core", section: "9.14.7.1" },
            children: [
                {
                    tag: "datatype", name: "ActionId", id: 0x0, type: "uint16", conformance: "M",
                    xref: { document: "core", section: "9.14.7.1" }
                },

                {
                    tag: "datatype", name: "InvokeId", id: 0x1, type: "uint32", conformance: "M",
                    xref: { document: "core", section: "9.14.7.1" }
                },

                {
                    tag: "datatype", name: "NewState", id: 0x2, type: "ActionStateEnum", conformance: "M",
                    xref: { document: "core", section: "9.14.7.1" }
                }
            ]
        },

        {
            tag: "event", name: "ActionFailed", id: 0x1, access: "V", conformance: "M", priority: "info",
            details: "This event SHALL be generated when there is some error which prevents the action from its normal " +
                     "planned execution and the most recent command using that ActionID used an InvokeID data field",
            xref: { document: "core", section: "9.14.7.2" },
            children: [
                {
                    tag: "datatype", name: "ActionId", id: 0x0, type: "uint16", conformance: "M",
                    xref: { document: "core", section: "9.14.7.2" }
                },

                {
                    tag: "datatype", name: "InvokeId", id: 0x1, type: "uint32", conformance: "M",
                    xref: { document: "core", section: "9.14.7.2" }
                },

                {
                    tag: "datatype", name: "NewState", id: 0x2, type: "ActionStateEnum", conformance: "M",
                    xref: { document: "core", section: "9.14.7.2" }
                },

                {
                    tag: "datatype", name: "Error", id: 0x3, type: "ActionErrorEnum", conformance: "M",
                    xref: { document: "core", section: "9.14.7.2" }
                }
            ]
        },

        {
            tag: "command", name: "InstantAction", id: 0x0, access: "O", conformance: "desc",
            direction: "request", response: "status",
            details: "This command SHALL have the following data fields",
            xref: { document: "core", section: "9.14.6.1" },
            children: [
                {
                    tag: "datatype", name: "ActionId", id: 0x0, type: "uint16", conformance: "M",
                    xref: { document: "core", section: "9.14.6.1" }
                },

                {
                    tag: "datatype", name: "InvokeId", id: 0x1, type: "uint32", conformance: "O",
                    xref: { document: "core", section: "9.14.6.1" }
                }
            ]
        },

        {
            tag: "command", name: "InstantActionWithTransition", id: 0x1, access: "O", conformance: "desc",
            direction: "request", response: "status",
            details: "This command SHALL have the following data fields",
            xref: { document: "core", section: "9.14.6.2" },
            children: [
                {
                    tag: "datatype", name: "ActionId", id: 0x0, type: "uint16", conformance: "M",
                    xref: { document: "core", section: "9.14.6.2" }
                },

                {
                    tag: "datatype", name: "InvokeId", id: 0x1, type: "uint32", conformance: "O",
                    xref: { document: "core", section: "9.14.6.2" }
                },

                {
                    tag: "datatype", name: "TransitionTime", id: 0x2, type: "uint16", conformance: "M",
                    xref: { document: "core", section: "9.14.6.2" }
                }
            ]
        },

        {
            tag: "command", name: "StartAction", id: 0x2, access: "O", conformance: "desc",
            direction: "request", response: "status",
            details: "This command SHALL have the following data fields",
            xref: { document: "core", section: "9.14.6.3" },
            children: [
                {
                    tag: "datatype", name: "ActionId", id: 0x0, type: "uint16", conformance: "M",
                    xref: { document: "core", section: "9.14.6.3" }
                },

                {
                    tag: "datatype", name: "InvokeId", id: 0x1, type: "uint32", conformance: "O",
                    xref: { document: "core", section: "9.14.6.3" }
                }
            ]
        },

        {
            tag: "command", name: "StartActionWithDuration", id: 0x3, access: "O", conformance: "desc",
            direction: "request", response: "status",
            details: "This command SHALL have the following data fields",
            xref: { document: "core", section: "9.14.6.4" },
            children: [
                {
                    tag: "datatype", name: "ActionId", id: 0x0, type: "uint16", conformance: "M",
                    xref: { document: "core", section: "9.14.6.4" }
                },

                {
                    tag: "datatype", name: "InvokeId", id: 0x1, type: "uint32", conformance: "O",
                    xref: { document: "core", section: "9.14.6.4" }
                },

                {
                    tag: "datatype", name: "Duration", id: 0x2, type: "uint32", conformance: "M",
                    xref: { document: "core", section: "9.14.6.4" }
                }
            ]
        },

        {
            tag: "command", name: "StopAction", id: 0x4, access: "O", conformance: "desc", direction: "request",
            response: "status",
            details: "This command SHALL have the following data fields",
            xref: { document: "core", section: "9.14.6.5" },
            children: [
                {
                    tag: "datatype", name: "ActionId", id: 0x0, type: "uint16", conformance: "M",
                    xref: { document: "core", section: "9.14.6.5" }
                },

                {
                    tag: "datatype", name: "InvokeId", id: 0x1, type: "uint32", conformance: "O",
                    xref: { document: "core", section: "9.14.6.5" }
                }
            ]
        },

        {
            tag: "command", name: "PauseAction", id: 0x5, access: "O", conformance: "desc",
            direction: "request", response: "status",
            details: "This command SHALL have the following data fields",
            xref: { document: "core", section: "9.14.6.6" },
            children: [
                {
                    tag: "datatype", name: "ActionId", id: 0x0, type: "uint16", conformance: "M",
                    xref: { document: "core", section: "9.14.6.6" }
                },

                {
                    tag: "datatype", name: "InvokeId", id: 0x1, type: "uint32", conformance: "O",
                    xref: { document: "core", section: "9.14.6.6" }
                }
            ]
        },

        {
            tag: "command", name: "PauseActionWithDuration", id: 0x6, access: "O", conformance: "desc",
            direction: "request", response: "status",
            details: "This command SHALL have the following data fields",
            xref: { document: "core", section: "9.14.6.7" },
            children: [
                {
                    tag: "datatype", name: "ActionId", id: 0x0, type: "uint16", conformance: "M",
                    xref: { document: "core", section: "9.14.6.7" }
                },

                {
                    tag: "datatype", name: "InvokeId", id: 0x1, type: "uint32", conformance: "O",
                    xref: { document: "core", section: "9.14.6.7" }
                },

                {
                    tag: "datatype", name: "Duration", id: 0x2, type: "uint32", conformance: "M",
                    xref: { document: "core", section: "9.14.6.7" }
                }
            ]
        },

        {
            tag: "command", name: "ResumeAction", id: 0x7, access: "O", conformance: "desc",
            direction: "request", response: "status",
            details: "This command SHALL have the following data fields",
            xref: { document: "core", section: "9.14.6.8" },
            children: [
                {
                    tag: "datatype", name: "ActionId", id: 0x0, type: "uint16", conformance: "M",
                    xref: { document: "core", section: "9.14.6.8" }
                },

                {
                    tag: "datatype", name: "InvokeId", id: 0x1, type: "uint32", conformance: "O",
                    xref: { document: "core", section: "9.14.6.8" }
                }
            ]
        },

        {
            tag: "command", name: "EnableAction", id: 0x8, access: "O", conformance: "desc",
            direction: "request", response: "status",
            details: "This command SHALL have the following data fields",
            xref: { document: "core", section: "9.14.6.9" },
            children: [
                {
                    tag: "datatype", name: "ActionId", id: 0x0, type: "uint16", conformance: "M",
                    xref: { document: "core", section: "9.14.6.9" }
                },

                {
                    tag: "datatype", name: "InvokeId", id: 0x1, type: "uint32", conformance: "O",
                    xref: { document: "core", section: "9.14.6.9" }
                }
            ]
        },

        {
            tag: "command", name: "EnableActionWithDuration", id: 0x9, access: "O", conformance: "desc",
            direction: "request", response: "status",
            details: "This command SHALL have the following data fields",
            xref: { document: "core", section: "9.14.6.10" },
            children: [
                {
                    tag: "datatype", name: "ActionId", id: 0x0, type: "uint16", conformance: "M",
                    xref: { document: "core", section: "9.14.6.10" }
                },

                {
                    tag: "datatype", name: "InvokeId", id: 0x1, type: "uint32", conformance: "O",
                    xref: { document: "core", section: "9.14.6.10" }
                },

                {
                    tag: "datatype", name: "Duration", id: 0x2, type: "uint32", conformance: "M",
                    xref: { document: "core", section: "9.14.6.10" }
                }
            ]
        },

        {
            tag: "command", name: "DisableAction", id: 0xa, access: "O", conformance: "desc",
            direction: "request", response: "status",
            details: "This command SHALL have the following data fields",
            xref: { document: "core", section: "9.14.6.11" },
            children: [
                {
                    tag: "datatype", name: "ActionId", id: 0x0, type: "uint16", conformance: "M",
                    xref: { document: "core", section: "9.14.6.11" }
                },

                {
                    tag: "datatype", name: "InvokeId", id: 0x1, type: "uint32", conformance: "O",
                    xref: { document: "core", section: "9.14.6.11" }
                }
            ]
        },

        {
            tag: "command", name: "DisableActionWithDuration", id: 0xb, access: "O", conformance: "desc",
            direction: "request", response: "status",
            details: "This command SHALL have the following data fields",
            xref: { document: "core", section: "9.14.6.12" },
            children: [
                {
                    tag: "datatype", name: "ActionId", id: 0x0, type: "uint16", conformance: "M",
                    xref: { document: "core", section: "9.14.6.12" }
                },

                {
                    tag: "datatype", name: "InvokeId", id: 0x1, type: "uint32", conformance: "O",
                    xref: { document: "core", section: "9.14.6.12" }
                },

                {
                    tag: "datatype", name: "Duration", id: 0x2, type: "uint32", conformance: "M",
                    xref: { document: "core", section: "9.14.6.12" }
                }
            ]
        },

        {
            tag: "datatype", name: "CommandBits", type: "map16", conformance: "M",
            details: "This data type is derived from map16",
            xref: { document: "core", section: "9.14.4.1" },
            children: [
                {
                    tag: "datatype", name: "InstantAction", id: 0x0,
                    description: "Indicate support for InstantAction command",
                    xref: { document: "core", section: "9.14.4.1" }
                },

                {
                    tag: "datatype", name: "InstantActionWithTransition", id: 0x1, conformance: "M",
                    description: "Indicate support for InstantActionWithTransition command",
                    xref: { document: "core", section: "9.14.4.1" }
                },

                {
                    tag: "datatype", name: "StartAction", id: 0x2, conformance: "M",
                    description: "Indicate support for StartAction command",
                    xref: { document: "core", section: "9.14.4.1" }
                },

                {
                    tag: "datatype", name: "StartActionWithDuration", id: 0x3,
                    description: "Indicate support for StartActionWithDuration command",
                    xref: { document: "core", section: "9.14.4.1" }
                },

                {
                    tag: "datatype", name: "StopAction", id: 0x10, conformance: "M",
                    description: "Indicate support for StopAction command",
                    xref: { document: "core", section: "9.14.4.1" }
                },

                {
                    tag: "datatype", name: "PauseAction", id: 0x20, conformance: "M",
                    description: "Indicate support for PauseAction command",
                    xref: { document: "core", section: "9.14.4.1" }
                },

                {
                    tag: "datatype", name: "PauseActionWithDuration", id: 0x40, conformance: "M",
                    description: "Indicate support for PauseActionWithDuration command",
                    xref: { document: "core", section: "9.14.4.1" }
                },

                {
                    tag: "datatype", name: "ResumeAction", id: 0x80, conformance: "M",
                    description: "Indicate support for ResumeAction command",
                    xref: { document: "core", section: "9.14.4.1" }
                },

                {
                    tag: "datatype", name: "EnableAction", id: 0x100, conformance: "M",
                    description: "Indicate support for EnableAction command",
                    xref: { document: "core", section: "9.14.4.1" }
                },

                {
                    tag: "datatype", name: "EnableActionWithDuration", id: 0x200, conformance: "M",
                    description: "Indicate support for EnableActionWithDuration command",
                    xref: { document: "core", section: "9.14.4.1" }
                },

                {
                    tag: "datatype", name: "DisableAction", id: 0x400, conformance: "M",
                    description: "Indicate support for DisableAction command",
                    xref: { document: "core", section: "9.14.4.1" }
                },

                {
                    tag: "datatype", name: "DisableActionWithDuration", id: 0x800, conformance: "M",
                    description: "Indicate support for DisableActionWithDuration command",
                    xref: { document: "core", section: "9.14.4.1" }
                }
            ]
        },

        {
            tag: "datatype", name: "ActionTypeEnum", type: "enum8", conformance: "M",
            details: "This data type is derived from enum8",
            xref: { document: "core", section: "9.14.4.2" },
            children: [
                {
                    tag: "datatype", name: "Other", id: 0x0, conformance: "M",
                    xref: { document: "core", section: "9.14.4.2" }
                },

                {
                    tag: "datatype", name: "Scene", id: 0x1, conformance: "M",
                    xref: { document: "core", section: "9.14.4.2" }
                },

                {
                    tag: "datatype", name: "Sequence", id: 0x2, conformance: "M",
                    xref: { document: "core", section: "9.14.4.2" }
                },

                {
                    tag: "datatype", name: "Automation", id: 0x3, conformance: "M",
                    xref: { document: "core", section: "9.14.4.2" }
                },

                {
                    tag: "datatype", name: "Exception", id: 0x4, conformance: "M",
                    xref: { document: "core", section: "9.14.4.2" }
                },

                {
                    tag: "datatype", name: "Notification", id: 0x5, conformance: "M",
                    xref: { document: "core", section: "9.14.4.2" }
                },

                {
                    tag: "datatype", name: "Alarm", id: 0x6, conformance: "M",
                    xref: { document: "core", section: "9.14.4.2" }
                }
            ]
        },

        {
            tag: "datatype", name: "ActionStateEnum", type: "enum8", conformance: "M",
            details: "This data type is derived from enum8",
            xref: { document: "core", section: "9.14.4.3" },
            children: [
                {
                    tag: "datatype", name: "Inactive", id: 0x0, conformance: "M",
                    xref: { document: "core", section: "9.14.4.3" }
                },

                {
                    tag: "datatype", name: "Active", id: 0x1, conformance: "M",
                    xref: { document: "core", section: "9.14.4.3" }
                },

                {
                    tag: "datatype", name: "Paused", id: 0x2, conformance: "M",
                    xref: { document: "core", section: "9.14.4.3" }
                },

                {
                    tag: "datatype", name: "Disabled", id: 0x3, conformance: "M",
                    xref: { document: "core", section: "9.14.4.3" }
                }
            ]
        },

        {
            tag: "datatype", name: "ActionErrorEnum", type: "enum8", conformance: "M",
            details: "This data type is derived from enum8",
            xref: { document: "core", section: "9.14.4.4" },
            children: [
                {
                    tag: "datatype", name: "Unknown", id: 0x0, conformance: "M",
                    xref: { document: "core", section: "9.14.4.4" }
                },

                {
                    tag: "datatype", name: "Interrupted", id: 0x1, conformance: "M",
                    xref: { document: "core", section: "9.14.4.4" }
                }
            ]
        },

        {
            tag: "datatype", name: "EndpointListTypeEnum", type: "enum8", conformance: "M",
            details: "This data type is derived from enum8 and has its values listed below",
            xref: { document: "core", section: "9.14.4.5" },
            children: [
                {
                    tag: "datatype", name: "Other", id: 0x0, conformance: "M",
                    xref: { document: "core", section: "9.14.4.5" }
                },

                {
                    tag: "datatype", name: "Room", id: 0x1, conformance: "M",
                    xref: { document: "core", section: "9.14.4.5" }
                },

                {
                    tag: "datatype", name: "Zone", id: 0x2, conformance: "M",
                    xref: { document: "core", section: "9.14.4.5" }
                }
            ]
        },

        {
            tag: "datatype", name: "ActionStruct", type: "struct", conformance: "M",
            details: "This data type holds the details of a single action, and contains the data fields below",
            xref: { document: "core", section: "9.14.4.6" },
            children: [
                {
                    tag: "datatype", name: "ActionId", id: 0x0, type: "uint16", conformance: "M",
                    xref: { document: "core", section: "9.14.4.6" }
                },

                {
                    tag: "datatype", name: "Name", id: 0x1, type: "string", conformance: "M", constraint: "max 32[128]",
                    xref: { document: "core", section: "9.14.4.6" }
                },

                {
                    tag: "datatype", name: "Type", id: 0x2, type: "ActionTypeEnum", conformance: "M",
                    xref: { document: "core", section: "9.14.4.6" }
                },

                {
                    tag: "datatype", name: "EndpointListId", id: 0x3, type: "uint16", conformance: "M",
                    xref: { document: "core", section: "9.14.4.6" }
                },

                {
                    tag: "datatype", name: "SupportedCommands", id: 0x4, type: "CommandBits", conformance: "M",
                    constraint: "0",
                    xref: { document: "core", section: "9.14.4.6" }
                },

                {
                    tag: "datatype", name: "State", id: 0x5, type: "ActionStateEnum", conformance: "M",
                    xref: { document: "core", section: "9.14.4.6" }
                }
            ]
        },

        {
            tag: "datatype", name: "EndpointListStruct", type: "struct", conformance: "M",
            details: "This data type holds the details of a single endpoint list, which relates to a set of endpoints that" +
                     " have some logical relation, and contains the data fields below",
            xref: { document: "core", section: "9.14.4.7" },
            children: [
                {
                    tag: "datatype", name: "EndpointListId", id: 0x0, type: "uint16", conformance: "M",
                    xref: { document: "core", section: "9.14.4.7" }
                },

                {
                    tag: "datatype", name: "Name", id: 0x1, type: "string", conformance: "M", constraint: "max 32[128]",
                    xref: { document: "core", section: "9.14.4.7" }
                },

                {
                    tag: "datatype", name: "Type", id: 0x2, type: "EndpointListTypeEnum", conformance: "M",
                    xref: { document: "core", section: "9.14.4.7" }
                },

                {
                    tag: "datatype", name: "Endpoints", id: 0x3, type: "list", conformance: "M", constraint: "max 256",
                    xref: { document: "core", section: "9.14.4.7" },
                    children: [
                        {
                            tag: "datatype", name: "entry", type: "endpoint-no"
                        }
                    ]
                }
            ]
        }
    ]
});
