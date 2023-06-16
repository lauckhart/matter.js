/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { SpecMatter } from "../SpecMatter.js";
import { ClusterElement, AttributeElement, DatatypeElement, EventElement, CommandElement } from "../../../elements/index.js";

SpecMatter.children!.push(ClusterElement({
    id: 0x0025, name: "Actions",
    classification: "application",
    children: [
        AttributeElement({
            id: 0xfffd, name: "ClusterRevision", base: "uint16",
            access: "R V", conformance: "M", constraint: "min 1", default: 1, quality: "F"
        }),

        AttributeElement({
            id: 0xfffc, name: "FeatureMap", base: "map32",
            access: "R V", conformance: "M", default: 0, quality: "F"
        }),

        AttributeElement({
            id: 0x0000, name: "ActionList", base: "list",
            access: "R V", conformance: "M", constraint: "max 256", default: "empty",
            details: "The ActionList attribute holds the list of actions. Each entry SHALL " +
                     "have an unique ActionID, and its EndpointListID SHALL exist in the " +
                     "EndpointLists attribute",
            xref: { document: "core", section: "9.14.5.1", version: "1.1" },
            children: [
                DatatypeElement({
                    name: "entry", base: "ActionStruct"
                })
            ]
        }),

        AttributeElement({
            id: 0x0001, name: "EndpointLists", base: "list",
            access: "R V", conformance: "M", constraint: "max 256", default: "empty",
            details: "The EndpointLists attribute holds the list of endpoint lists. Each " +
                     "entry SHALL have an unique EndpointListID",
            xref: { document: "core", section: "9.14.5.2", version: "1.1" },
            children: [
                DatatypeElement({
                    name: "entry", base: "EndpointListStruct"
                })
            ]
        }),

        AttributeElement({
            id: 0x0002, name: "SetupUrl", base: "string",
            access: "R V", conformance: "O", constraint: "max 512", default: "empty",
            details: "The SetupURL attribute (when provided) SHALL indicate a URL; its " +
                     "syntax SHALL follow the syntax as specified in RFC 3986, max. 512 " +
                     "ASCII characters. The location referenced by this URL SHALL provide " +
                     "additional information for the actions provided",
            xref: { document: "core", section: "9.14.5.3", version: "1.1" }
        }),

        EventElement({
            id: 0x0000, name: "StateChanged",
            access: "V", conformance: "M", priority: "info",
            details: "This event SHALL be generated when there is a change in the State of " +
                     "an ActionID during the execution of an action and the most recent " +
                     "command using that ActionID used an InvokeID data field",
            xref: { document: "core", section: "9.14.7.1", version: "1.1" }
        }),

        EventElement({
            id: 0x0001, name: "ActionFailed",
            access: "V", conformance: "M", priority: "info",
            details: "This event SHALL be generated when there is some error which prevents " +
                     "the action from its normal planned execution and the most recent " +
                     "command using that ActionID used an InvokeID data field",
            xref: { document: "core", section: "9.14.7.2", version: "1.1" }
        }),

        CommandElement({
            id: 0x0000, name: "InstantAction",
            access: "O", conformance: "desc", direction: "request", response: "status",
            details: "This command SHALL have the following data fields",
            xref: { document: "core", section: "9.14.6.1", version: "1.1" }
        }),

        CommandElement({
            id: 0x0001, name: "InstantActionWithTransition",
            access: "O", conformance: "desc", direction: "request", response: "status",
            details: "This command SHALL have the following data fields",
            xref: { document: "core", section: "9.14.6.2", version: "1.1" }
        }),

        CommandElement({
            id: 0x0002, name: "StartAction",
            access: "O", conformance: "desc", direction: "request", response: "status",
            details: "This command SHALL have the following data fields",
            xref: { document: "core", section: "9.14.6.3", version: "1.1" }
        }),

        CommandElement({
            id: 0x0003, name: "StartActionWithDuration",
            access: "O", conformance: "desc", direction: "request", response: "status",
            details: "This command SHALL have the following data fields",
            xref: { document: "core", section: "9.14.6.4", version: "1.1" }
        }),

        CommandElement({
            id: 0x0004, name: "StopAction",
            access: "O", conformance: "desc", direction: "request", response: "status",
            details: "This command SHALL have the following data fields",
            xref: { document: "core", section: "9.14.6.5", version: "1.1" }
        }),

        CommandElement({
            id: 0x0005, name: "PauseAction",
            access: "O", conformance: "desc", direction: "request", response: "status",
            details: "This command SHALL have the following data fields",
            xref: { document: "core", section: "9.14.6.6", version: "1.1" }
        }),

        CommandElement({
            id: 0x0006, name: "PauseActionWithDuration",
            access: "O", conformance: "desc", direction: "request", response: "status",
            details: "This command SHALL have the following data fields",
            xref: { document: "core", section: "9.14.6.7", version: "1.1" }
        }),

        CommandElement({
            id: 0x0007, name: "ResumeAction",
            access: "O", conformance: "desc", direction: "request", response: "status",
            details: "This command SHALL have the following data fields",
            xref: { document: "core", section: "9.14.6.8", version: "1.1" }
        }),

        CommandElement({
            id: 0x0008, name: "EnableAction",
            access: "O", conformance: "desc", direction: "request", response: "status",
            details: "This command SHALL have the following data fields",
            xref: { document: "core", section: "9.14.6.9", version: "1.1" }
        }),

        CommandElement({
            id: 0x0009, name: "EnableActionWithDuration",
            access: "O", conformance: "desc", direction: "request", response: "status",
            details: "This command SHALL have the following data fields",
            xref: { document: "core", section: "9.14.6.10", version: "1.1" }
        }),

        CommandElement({
            id: 0x000a, name: "DisableAction",
            access: "O", conformance: "desc", direction: "request", response: "status",
            details: "This command SHALL have the following data fields",
            xref: { document: "core", section: "9.14.6.11", version: "1.1" }
        }),

        CommandElement({
            id: 0x000b, name: "DisableActionWithDuration",
            access: "O", conformance: "desc", direction: "request", response: "status",
            details: "This command SHALL have the following data fields",
            xref: { document: "core", section: "9.14.6.12", version: "1.1" }
        }),

        DatatypeElement({
            id: -1, name: "CommandBits", base: "map16",
            details: "This data type is derived from map16",
            xref: { document: "core", section: "9.14.4.1", version: "1.1" },
            children: [
                DatatypeElement({
                    id: 0x0000, name: "InstantAction",
                    description: "Indicate support for InstantAction command",
                    xref: { document: "core", section: "9.14.4.1", version: "1.1" }
                }),

                DatatypeElement({
                    id: 0x0001, name: "InstantActionWithTransition",
                    description: "Indicate support for InstantActionWithTransition command",
                    xref: { document: "core", section: "9.14.4.1", version: "1.1" }
                }),

                DatatypeElement({
                    id: 0x0002, name: "StartAction",
                    description: "Indicate support for StartAction command",
                    xref: { document: "core", section: "9.14.4.1", version: "1.1" }
                }),

                DatatypeElement({
                    id: 0x0003, name: "StartActionWithDuration",
                    description: "Indicate support for StartActionWithDuration command",
                    xref: { document: "core", section: "9.14.4.1", version: "1.1" }
                }),

                DatatypeElement({
                    id: 0x0004, name: "StopAction",
                    description: "Indicate support for StopAction command",
                    xref: { document: "core", section: "9.14.4.1", version: "1.1" }
                }),

                DatatypeElement({
                    id: 0x0005, name: "PauseAction",
                    description: "Indicate support for PauseAction command",
                    xref: { document: "core", section: "9.14.4.1", version: "1.1" }
                }),

                DatatypeElement({
                    id: 0x0006, name: "PauseActionWithDuration",
                    description: "Indicate support for PauseActionWithDuration command",
                    xref: { document: "core", section: "9.14.4.1", version: "1.1" }
                }),

                DatatypeElement({
                    id: 0x0007, name: "ResumeAction",
                    description: "Indicate support for ResumeAction command",
                    xref: { document: "core", section: "9.14.4.1", version: "1.1" }
                }),

                DatatypeElement({
                    id: 0x0008, name: "EnableAction",
                    description: "Indicate support for EnableAction command",
                    xref: { document: "core", section: "9.14.4.1", version: "1.1" }
                }),

                DatatypeElement({
                    id: 0x0009, name: "EnableActionWithDuration",
                    description: "Indicate support for EnableActionWithDuration command",
                    xref: { document: "core", section: "9.14.4.1", version: "1.1" }
                }),

                DatatypeElement({
                    id: 0x000a, name: "DisableAction",
                    description: "Indicate support for DisableAction command",
                    xref: { document: "core", section: "9.14.4.1", version: "1.1" }
                }),

                DatatypeElement({
                    id: 0x000b, name: "DisableActionWithDuration",
                    description: "Indicate support for DisableActionWithDuration command",
                    xref: { document: "core", section: "9.14.4.1", version: "1.1" }
                })
            ]
        })
    ]
}));
