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
             "expose action information.",
    xref: { document: "core", section: "9.14" },

    children: [
        {
            tag: "attribute", name: "ActionList", id: 0x0, type: "list", access: "R V", conformance: "M",
            constraint: "max 256", default: [],
            details: "The ActionList attribute holds the list of actions. Each entry SHALL have an unique ActionID, and " +
                     "its EndpointListID SHALL exist in the EndpointLists attribute.",
            xref: { document: "core", section: "9.14.5.1" },
            children: [ { tag: "datatype", name: "entry", type: "ActionStruct" } ]
        },

        {
            tag: "attribute", name: "EndpointLists", id: 0x1, type: "list", access: "R V", conformance: "M",
            constraint: "max 256", default: [],
            details: "The EndpointLists attribute holds the list of endpoint lists. Each entry SHALL have an unique " +
                     "EndpointListID.",
            xref: { document: "core", section: "9.14.5.2" },
            children: [ { tag: "datatype", name: "entry", type: "EndpointListStruct" } ]
        },

        {
            tag: "attribute", name: "SetupUrl", id: 0x2, type: "string", access: "R V", conformance: "O",
            constraint: "max 512", default: "empty",
            details: "The SetupURL attribute (when provided) SHALL indicate a URL; its syntax SHALL follow the syntax as " +
                     "specified in RFC 3986, max. 512 ASCII characters. The location referenced by this URL SHALL provide " +
                     "additional information for the actions provided:",
            xref: { document: "core", section: "9.14.5.3" }
        },

        {
            tag: "event", name: "StateChanged", id: 0x0, access: "V", conformance: "M", priority: "info",
            details: "This event SHALL be generated when there is a change in the State of an ActionID during the " +
                     "execution of an action and the most recent command using that ActionID used an InvokeID data field.",
            xref: { document: "core", section: "9.14.7.1" },

            children: [
                { tag: "datatype", name: "ActionId", id: 0x0, type: "uint16", conformance: "M" },

                {
                    tag: "datatype", name: "InvokeId", id: 0x1, type: "uint32", conformance: "M",
                    details: "This field SHALL be set to the InvokeID which was provided to the most recent command referencing " +
                             "this ActionID.",
                    xref: { document: "core", section: "9.14.7.1.1" }
                },

                {
                    tag: "datatype", name: "NewState", id: 0x2, type: "ActionStateEnum", conformance: "M",
                    details: "This field SHALL be set to state that the action has changed to.",
                    xref: { document: "core", section: "9.14.7.1.2" }
                }
            ]
        },

        {
            tag: "event", name: "ActionFailed", id: 0x1, access: "V", conformance: "M", priority: "info",
            details: "This event SHALL be generated when there is some error which prevents the action from its normal " +
                     "planned execution and the most recent command using that ActionID used an InvokeID data field.",
            xref: { document: "core", section: "9.14.7.2" },

            children: [
                { tag: "datatype", name: "ActionId", id: 0x0, type: "uint16", conformance: "M" },
                { tag: "datatype", name: "InvokeId", id: 0x1, type: "uint32", conformance: "M" },
                { tag: "datatype", name: "NewState", id: 0x2, type: "ActionStateEnum", conformance: "M" },
                {
                    tag: "datatype", name: "Error", id: 0x3, type: "ActionErrorEnum", conformance: "M",
                    details: "This field SHALL be set to indicate the reason for non-successful progress of the action.",
                    xref: { document: "core", section: "9.14.7.2.1" }
                }
            ]
        },

        {
            tag: "command", name: "InstantAction", id: 0x0, access: "O", conformance: "desc",
            direction: "request", response: "status",
            details: "This command SHALL have the following data fields:",
            xref: { document: "core", section: "9.14.6.1" },
            children: [
                { tag: "datatype", name: "ActionId", id: 0x0, type: "uint16", conformance: "M" },
                { tag: "datatype", name: "InvokeId", id: 0x1, type: "uint32", conformance: "O" }
            ]
        },

        {
            tag: "command", name: "InstantActionWithTransition", id: 0x1, access: "O", conformance: "desc",
            direction: "request", response: "status",
            details: "This command SHALL have the following data fields:",
            xref: { document: "core", section: "9.14.6.2" },

            children: [
                { tag: "datatype", name: "ActionId", id: 0x0, type: "uint16", conformance: "M" },
                { tag: "datatype", name: "InvokeId", id: 0x1, type: "uint32", conformance: "O" },
                {
                    tag: "datatype", name: "TransitionTime", id: 0x2, type: "uint16", conformance: "M",
                    details: "This field SHALL indicate the transition time in 1/10th of seconds.",
                    xref: { document: "core", section: "9.14.6.2.1" }
                }
            ]
        },

        {
            tag: "command", name: "StartAction", id: 0x2, access: "O", conformance: "desc",
            direction: "request", response: "status",
            details: "This command SHALL have the following data fields:",
            xref: { document: "core", section: "9.14.6.3" },
            children: [
                { tag: "datatype", name: "ActionId", id: 0x0, type: "uint16", conformance: "M" },
                { tag: "datatype", name: "InvokeId", id: 0x1, type: "uint32", conformance: "O" }
            ]
        },

        {
            tag: "command", name: "StartActionWithDuration", id: 0x3, access: "O", conformance: "desc",
            direction: "request", response: "status",
            details: "This command SHALL have the following data fields:",
            xref: { document: "core", section: "9.14.6.4" },

            children: [
                { tag: "datatype", name: "ActionId", id: 0x0, type: "uint16", conformance: "M" },
                { tag: "datatype", name: "InvokeId", id: 0x1, type: "uint32", conformance: "O" },
                {
                    tag: "datatype", name: "Duration", id: 0x2, type: "uint32", conformance: "M",
                    details: "This field SHALL indicate the requested duration in seconds.",
                    xref: { document: "core", section: "9.14.6.4.1" }
                }
            ]
        },

        {
            tag: "command", name: "StopAction", id: 0x4, access: "O", conformance: "desc", direction: "request",
            response: "status",
            details: "This command SHALL have the following data fields:",
            xref: { document: "core", section: "9.14.6.5" },
            children: [
                { tag: "datatype", name: "ActionId", id: 0x0, type: "uint16", conformance: "M" },
                { tag: "datatype", name: "InvokeId", id: 0x1, type: "uint32", conformance: "O" }
            ]
        },

        {
            tag: "command", name: "PauseAction", id: 0x5, access: "O", conformance: "desc",
            direction: "request", response: "status",
            details: "This command SHALL have the following data fields:",
            xref: { document: "core", section: "9.14.6.6" },
            children: [
                { tag: "datatype", name: "ActionId", id: 0x0, type: "uint16", conformance: "M" },
                { tag: "datatype", name: "InvokeId", id: 0x1, type: "uint32", conformance: "O" }
            ]
        },

        {
            tag: "command", name: "PauseActionWithDuration", id: 0x6, access: "O", conformance: "desc",
            direction: "request", response: "status",
            details: "This command SHALL have the following data fields:",
            xref: { document: "core", section: "9.14.6.7" },
            children: [
                { tag: "datatype", name: "ActionId", id: 0x0, type: "uint16", conformance: "M" },
                { tag: "datatype", name: "InvokeId", id: 0x1, type: "uint32", conformance: "O" },
                { tag: "datatype", name: "Duration", id: 0x2, type: "uint32", conformance: "M" }
            ]
        },

        {
            tag: "command", name: "ResumeAction", id: 0x7, access: "O", conformance: "desc",
            direction: "request", response: "status",
            details: "This command SHALL have the following data fields:",
            xref: { document: "core", section: "9.14.6.8" },
            children: [
                { tag: "datatype", name: "ActionId", id: 0x0, type: "uint16", conformance: "M" },
                { tag: "datatype", name: "InvokeId", id: 0x1, type: "uint32", conformance: "O" }
            ]
        },

        {
            tag: "command", name: "EnableAction", id: 0x8, access: "O", conformance: "desc",
            direction: "request", response: "status",
            details: "This command SHALL have the following data fields:",
            xref: { document: "core", section: "9.14.6.9" },
            children: [
                { tag: "datatype", name: "ActionId", id: 0x0, type: "uint16", conformance: "M" },
                { tag: "datatype", name: "InvokeId", id: 0x1, type: "uint32", conformance: "O" }
            ]
        },

        {
            tag: "command", name: "EnableActionWithDuration", id: 0x9, access: "O", conformance: "desc",
            direction: "request", response: "status",
            details: "This command SHALL have the following data fields:",
            xref: { document: "core", section: "9.14.6.10" },
            children: [
                { tag: "datatype", name: "ActionId", id: 0x0, type: "uint16", conformance: "M" },
                { tag: "datatype", name: "InvokeId", id: 0x1, type: "uint32", conformance: "O" },
                { tag: "datatype", name: "Duration", id: 0x2, type: "uint32", conformance: "M" }
            ]
        },

        {
            tag: "command", name: "DisableAction", id: 0xa, access: "O", conformance: "desc",
            direction: "request", response: "status",
            details: "This command SHALL have the following data fields:",
            xref: { document: "core", section: "9.14.6.11" },
            children: [
                { tag: "datatype", name: "ActionId", id: 0x0, type: "uint16", conformance: "M" },
                { tag: "datatype", name: "InvokeId", id: 0x1, type: "uint32", conformance: "O" }
            ]
        },

        {
            tag: "command", name: "DisableActionWithDuration", id: 0xb, access: "O", conformance: "desc",
            direction: "request", response: "status",
            details: "This command SHALL have the following data fields:",
            xref: { document: "core", section: "9.14.6.12" },
            children: [
                { tag: "datatype", name: "ActionId", id: 0x0, type: "uint16", conformance: "M" },
                { tag: "datatype", name: "InvokeId", id: 0x1, type: "uint32", conformance: "O" },
                { tag: "datatype", name: "Duration", id: 0x2, type: "uint32", conformance: "M" }
            ]
        },

        {
            tag: "datatype", name: "CommandBits", type: "map16", conformance: "M",
            xref: { document: "core", section: "9.14.4.1" },

            children: [
                {
                    tag: "datatype", name: "InstantActionWithTransition", id: 0x1, conformance: "M",
                    description: "Indicate support for InstantActionWithTransition command"
                },
                {
                    tag: "datatype", name: "StartAction", id: 0x2, conformance: "M",
                    description: "Indicate support for StartAction command"
                },
                {
                    tag: "datatype", name: "StartActionWithDuration", id: 0x3,
                    description: "Indicate support for StartActionWithDuration command"
                },
                {
                    tag: "datatype", name: "StopAction", id: 0x10, conformance: "M",
                    description: "Indicate support for StopAction command"
                },
                {
                    tag: "datatype", name: "PauseAction", id: 0x20, conformance: "M",
                    description: "Indicate support for PauseAction command"
                },
                {
                    tag: "datatype", name: "PauseActionWithDuration", id: 0x40, conformance: "M",
                    description: "Indicate support for PauseActionWithDuration command"
                },
                {
                    tag: "datatype", name: "ResumeAction", id: 0x80, conformance: "M",
                    description: "Indicate support for ResumeAction command"
                },
                {
                    tag: "datatype", name: "EnableAction", id: 0x100, conformance: "M",
                    description: "Indicate support for EnableAction command"
                },
                {
                    tag: "datatype", name: "EnableActionWithDuration", id: 0x200, conformance: "M",
                    description: "Indicate support for EnableActionWithDuration command"
                },
                {
                    tag: "datatype", name: "DisableAction", id: 0x400, conformance: "M",
                    description: "Indicate support for DisableAction command"
                },
                {
                    tag: "datatype", name: "DisableActionWithDuration", id: 0x800, conformance: "M",
                    description: "Indicate support for DisableActionWithDuration command"
                }
            ]
        },

        {
            tag: "datatype", name: "ActionTypeEnum", type: "enum8", conformance: "M",
            xref: { document: "core", section: "9.14.4.2" },

            children: [
                { tag: "datatype", name: "Other", id: 0x0, conformance: "M" },

                {
                    tag: "datatype", name: "Scene", id: 0x1, conformance: "M",
                    details: "Can be used to set a static state of the associated endpoints (typically using InstantAction or " +
                             "InstantActionWithTransition), or to bring these endpoints into a more dynamic state (typically " +
                             "using StartAction), where the endpoints would e.g. gradually cycle through certain colors for a " +
                             "pleasing effect. A voice controller could use \"set\" (to map to InstantAction) or \"play\" (to map to " +
                             "StartAction) to trig",
                    xref: { document: "core", section: "9.14.4.2.1" }
                },

                {
                    tag: "datatype", name: "Sequence", id: 0x2, conformance: "M",
                    details: "Indicates an action which involves a sequence of events/states of the associated endpoints, such as " +
                             "a wake-up experience.",
                    xref: { document: "core", section: "9.14.4.2.2" }
                },

                {
                    tag: "datatype", name: "Automation", id: 0x3, conformance: "M",
                    details: "Indications an automation (e.g. a motion sensor controlling lights, an alarm system) which can be",
                    xref: { document: "core", section: "9.14.4.2.3" }
                },

                {
                    tag: "datatype", name: "Exception", id: 0x4, conformance: "M",
                    details: "Indicates some action which the server will execute when a certain condition (which normally does " +
                             "not happen) is not met.",
                    xref: { document: "core", section: "9.14.4.2.4" }
                },

                {
                    tag: "datatype", name: "Notification", id: 0x5, conformance: "M",
                    details: "Indicates an action that can be triggered (e.g. by InstantAction) to notify the user.",
                    xref: { document: "core", section: "9.14.4.2.5" }
                },

                {
                    tag: "datatype", name: "Alarm", id: 0x6, conformance: "M",
                    details: "Similar to Notification but with a higher priority (and might override other endpoint states which " +
                             "Type=Notification would not override).",
                    xref: { document: "core", section: "9.14.4.2.6" }
                }
            ]
        },

        {
            tag: "datatype", name: "ActionStateEnum", type: "enum8", conformance: "M",
            xref: { document: "core", section: "9.14.4.3" },

            children: [
                { tag: "datatype", name: "Inactive", id: 0x0, conformance: "M" },
                { tag: "datatype", name: "Active", id: 0x1, conformance: "M" },
                { tag: "datatype", name: "Paused", id: 0x2, conformance: "M" },
                { tag: "datatype", name: "Disabled", id: 0x3, conformance: "M" }
            ]
        },

        {
            tag: "datatype", name: "ActionErrorEnum", type: "enum8", conformance: "M",
            xref: { document: "core", section: "9.14.4.4" },
            children: [
                { tag: "datatype", name: "Unknown", id: 0x0, conformance: "M" },
                { tag: "datatype", name: "Interrupted", id: 0x1, conformance: "M" }
            ]
        },

        {
            tag: "datatype", name: "EndpointListTypeEnum", type: "enum8", conformance: "M",
            xref: { document: "core", section: "9.14.4.5" },

            children: [
                {
                    tag: "datatype", name: "Other", id: 0x0, conformance: "M",
                    details: "This value is provided for the case of an endpoint list which is tied specifically to this action " +
                             "i.e. not independently created by the user. For Type=Other the Name MAY be empty. A Matter " +
                             "controller would typically not use this for anything else than just to know which endpoints would " +
                             "be affected by the action.",
                    xref: { document: "core", section: "9.14.4.5.1" }
                },

                {
                    tag: "datatype", name: "Room", id: 0x1, conformance: "M",
                    details: "Is used for the situation where an endpoint can only be part of one such rooms (e.g. physical " +
                             "mapping). Using these exposed logical groups, a Matter controller who has a similar grouping " +
                             "concept can use it to place each endpoint (bridged device) in the right room automatically, without " +
                             "user having to redo that setup for each device in each system - both at first contact and upon " +
                             "later updates to the endpoints (e.g. user adds a bridged device or creates a new room).",
                    xref: { document: "core", section: "9.14.4.5.2" }
                },

                {
                    tag: "datatype", name: "Zone", id: 0x2, conformance: "M",
                    details: "Is a more general concept where an endpoint can be part of multiple zones, e.g. a light in the " +
                             "living",
                    xref: { document: "core", section: "9.14.4.5.3" }
                }
            ]
        },

        {
            tag: "datatype", name: "ActionStruct", type: "struct", conformance: "M",
            details: "This data type holds the details of a single action, and contains the data fields below.",
            xref: { document: "core", section: "9.14.4.6" },

            children: [
                {
                    tag: "datatype", name: "ActionId", id: 0x0, type: "uint16", conformance: "M",
                    details: "This field SHALL provide an unique identifier used to identify an action.",
                    xref: { document: "core", section: "9.14.4.6.1" }
                },

                {
                    tag: "datatype", name: "Name", id: 0x1, type: "string", conformance: "M", constraint: "max 32[128]",
                    details: "This field SHALL indicate the name (as assigned by the user or automatically by the server) " +
                             "associated with this action. This can be used for identifying the action to the user by the client. " +
                             "Example: \"my colorful scene\".",
                    xref: { document: "core", section: "9.14.4.6.2" }
                },

                {
                    tag: "datatype", name: "Type", id: 0x2, type: "ActionTypeEnum", conformance: "M",
                    details: "This field SHALL indicate the type of action. The value of Type of an action, along with its " +
                             "SupportedCommands can be used by the client in its UX or logic to determine how to present or use " +
                             "such action. See ActionTypeEnum for details and examples.",
                    xref: { document: "core", section: "9.14.4.6.3" }
                },

                {
                    tag: "datatype", name: "EndpointListId", id: 0x3, type: "uint16", conformance: "M",
                    details: "This field SHALL provide a reference to the associated endpoint list, which specifies the endpoints " +
                             "on this Node which will be impacted by this ActionID.",
                    xref: { document: "core", section: "9.14.4.6.4" }
                },

                {
                    tag: "datatype", name: "SupportedCommands", id: 0x4, type: "CommandBits", conformance: "M",
                    constraint: "0",
                    details: "This field is a bitmap which SHALL be used to indicate which of the cluster’s commands are sup",
                    xref: { document: "core", section: "9.14.4.6.5" }
                },

                {
                    tag: "datatype", name: "State", id: 0x5, type: "ActionStateEnum", conformance: "M",
                    details: "This field SHALL indicate the current state of this action.",
                    xref: { document: "core", section: "9.14.4.6.6" }
                }
            ]
        },

        {
            tag: "datatype", name: "EndpointListStruct", type: "struct", conformance: "M",
            details: "This data type holds the details of a single endpoint list, which relates to a set of endpoints " +
                     "that have some logical relation, and contains the data fields below.",
            xref: { document: "core", section: "9.14.4.7" },

            children: [
                { tag: "datatype", name: "EndpointListId", id: 0x0, type: "uint16", conformance: "M" },
                { tag: "datatype", name: "Name", id: 0x1, type: "string", conformance: "M", constraint: "max 32[128]" },
                { tag: "datatype", name: "Type", id: 0x2, type: "EndpointListTypeEnum", conformance: "M" },

                {
                    tag: "datatype", name: "Endpoints", id: 0x3, type: "list", conformance: "M", constraint: "max 256",
                    details: "This field SHALL provide a list of endpoint numbers.",
                    xref: { document: "core", section: "9.14.4.7.1" },
                    children: [ { tag: "datatype", name: "entry", type: "endpoint-no" } ]
                }
            ]
        }
    ]
});
