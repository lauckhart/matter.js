/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterElement } from "../src/model/index.js";

export const ChipMatter: MatterElement = {
    tag: "matter", name: "ChipMatter",
    children: [
        {
            tag: "cluster", id: 0x001f, name: "AccessControl",
            description: "Access Control",
            children: [
                {
                    tag: "attribute", id: 0x0000, name: "Acl",
                    access: "RW A", conformance: "M", type: "list",
                    children: [
                        {
                            tag: "datatype", name: "entry",
                            type: "AccessControlEntryStruct"
                        }
                    ]
                },

                {
                    tag: "attribute", id: 0x0001, name: "Extension",
                    access: "RW A", conformance: "O", type: "list",
                    children: [
                        {
                            tag: "datatype", name: "entry",
                            type: "AccessControlExtensionStruct"
                        }
                    ]
                },

                {
                    tag: "attribute", id: 0x0002, name: "SubjectsPerAccessControlEntry",
                    access: "R V", conformance: "M", type: "uint16"
                },

                {
                    tag: "attribute", id: 0x0003, name: "TargetsPerAccessControlEntry",
                    access: "R V", conformance: "M", type: "uint16"
                },

                {
                    tag: "attribute", id: 0x0004, name: "AccessControlEntriesPerFabric",
                    access: "R V", conformance: "M", type: "uint16"
                },

                {
                    tag: "event", id: 0x0000, name: "AccessControlEntryChanged",
                    access: "R S A", conformance: "M", priority: "info",
                    children: [
                        {
                            tag: "datatype", name: "AdminNodeId",
                            conformance: "M", quality: "X", type: "node-id"
                        },

                        {
                            tag: "datatype", name: "AdminPasscodeId",
                            conformance: "M", quality: "X", type: "uint16"
                        },

                        {
                            tag: "datatype", name: "ChangeType",
                            conformance: "M", type: "ChangeTypeEnum"
                        },

                        {
                            tag: "datatype", name: "LatestValue",
                            conformance: "M", quality: "X", type: "AccessControlEntryStruct"
                        }
                    ]
                },

                {
                    tag: "event", id: 0x0001, name: "AccessControlExtensionChanged",
                    access: "R S A", conformance: "M", priority: "info",
                    children: [
                        {
                            tag: "datatype", name: "AdminNodeId",
                            conformance: "M", quality: "X", type: "node-id"
                        },

                        {
                            tag: "datatype", name: "AdminPasscodeId",
                            conformance: "M", quality: "X", type: "uint16"
                        },

                        {
                            tag: "datatype", name: "ChangeType",
                            conformance: "M", type: "ChangeTypeEnum"
                        },

                        {
                            tag: "datatype", name: "LatestValue",
                            conformance: "M", quality: "X", type: "AccessControlExtensionStruct"
                        }
                    ]
                },

                {
                    tag: "datatype", name: "AccessControlEntryPrivilegeEnum",
                    conformance: "M", type: "enum8",
                    children: [
                        {
                            tag: "datatype", id: 0x0001, name: "View",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0002, name: "ProxyView",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0003, name: "Operate",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0004, name: "Manage",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0005, name: "Administer",
                            conformance: "M"
                        }
                    ]
                },

                {
                    tag: "datatype", name: "AccessControlEntryAuthModeEnum",
                    conformance: "M", type: "enum8",
                    children: [
                        {
                            tag: "datatype", id: 0x0001, name: "Pase",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0002, name: "Case",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0003, name: "Group",
                            conformance: "M"
                        }
                    ]
                },

                {
                    tag: "datatype", name: "ChangeTypeEnum",
                    conformance: "M", type: "enum8",
                    children: [
                        {
                            tag: "datatype", id: 0x0000, name: "Changed",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0001, name: "Added",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0002, name: "Removed",
                            conformance: "M"
                        }
                    ]
                },

                {
                    tag: "datatype", name: "Target",
                    conformance: "M", type: "struct",
                    children: [
                        {
                            tag: "datatype", name: "Cluster",
                            conformance: "M", quality: "X", type: "cluster-id"
                        },

                        {
                            tag: "datatype", name: "Endpoint",
                            conformance: "M", quality: "X", type: "endpoint-no"
                        },

                        {
                            tag: "datatype", name: "DeviceType",
                            conformance: "M", quality: "X", type: "devtype-id"
                        }
                    ]
                },

                {
                    tag: "datatype", name: "AccessControlEntryStruct",
                    access: "R F", conformance: "M", type: "struct",
                    children: [
                        {
                            tag: "datatype", name: "Privilege",
                            access: "R S", conformance: "M", type: "AccessControlEntryPrivilegeEnum"
                        },

                        {
                            tag: "datatype", name: "AuthMode",
                            access: "R S", conformance: "M", type: "AccessControlEntryAuthModeEnum"
                        },

                        {
                            tag: "datatype", name: "Subjects",
                            access: "R S", conformance: "M", quality: "X", type: "uint64"
                        },

                        {
                            tag: "datatype", name: "Targets",
                            access: "R S", conformance: "M", quality: "X", type: "Target"
                        }
                    ]
                },

                {
                    tag: "datatype", name: "AccessControlExtensionStruct",
                    access: "R F", conformance: "M", type: "struct",
                    children: [
                        {
                            tag: "datatype", name: "Data",
                            access: "R S", conformance: "M", type: "octstr"
                        }
                    ]
                }
            ]
        },

        {
            tag: "cluster", id: 0x050e, name: "AccountLogin",
            description: "Account Login",
            children: [
                {
                    tag: "command", id: 0x0000, name: "GetSetupPin",
                    conformance: "M", direction: "request", response: "GetSetupPinResponse",
                    children: [
                        {
                            tag: "datatype", name: "TempAccountIdentifier",
                            conformance: "M", type: "string"
                        }
                    ]
                },

                {
                    tag: "command", id: 0x0002, name: "Login",
                    conformance: "M", direction: "request",
                    children: [
                        {
                            tag: "datatype", name: "TempAccountIdentifier",
                            conformance: "M", type: "string"
                        },

                        {
                            tag: "datatype", name: "SetupPin",
                            conformance: "M", type: "string"
                        }
                    ]
                },

                {
                    tag: "command", id: 0x0003, name: "Logout",
                    conformance: "M", direction: "request"
                },

                {
                    tag: "command", id: 0x0001, name: "GetSetupPinResponse",
                    conformance: "M", direction: "response",
                    children: [
                        {
                            tag: "datatype", name: "SetupPin",
                            conformance: "M", type: "string"
                        }
                    ]
                }
            ]
        },

        {
            tag: "cluster", id: 0x0025, name: "Actions",
            description: "Actions",
            children: [
                {
                    tag: "attribute", id: 0x0000, name: "ActionList",
                    conformance: "M", type: "list",
                    children: [
                        {
                            tag: "datatype", name: "entry",
                            type: "ActionStruct"
                        }
                    ]
                },

                {
                    tag: "attribute", id: 0x0001, name: "EndpointList",
                    conformance: "M", type: "list",
                    children: [
                        {
                            tag: "datatype", name: "entry",
                            type: "EndpointListStruct"
                        }
                    ]
                },

                {
                    tag: "attribute", id: 0x0002, name: "SetupUrl",
                    conformance: "O", type: "string"
                },

                {
                    tag: "command", id: 0x0000, name: "InstantAction",
                    conformance: "O", direction: "request",
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
                    conformance: "O", direction: "request",
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
                    conformance: "O", direction: "request",
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
                    conformance: "O", direction: "request",
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
                    conformance: "O", direction: "request",
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
                    conformance: "O", direction: "request",
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
                    conformance: "O", direction: "request",
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
                    conformance: "O", direction: "request",
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
                    conformance: "O", direction: "request",
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
                    conformance: "O", direction: "request",
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
                    conformance: "O", direction: "request",
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
                    conformance: "O", direction: "request",
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
                    tag: "event", id: 0x0000, name: "StateChanged",
                    conformance: "M", priority: "info",
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
                    conformance: "M", priority: "info",
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
                    tag: "datatype", name: "CommandBits",
                    conformance: "M", type: "map16",
                    children: [
                        {
                            tag: "datatype", id: 0x0001, name: "InstantAction",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0002, name: "InstantActionWithTransition",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0004, name: "StartAction",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0008, name: "StartActionWithDuration",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0010, name: "StopAction",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0020, name: "PauseAction",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0040, name: "PauseActionWithDuration",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0080, name: "ResumeAction",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0100, name: "EnableAction",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0200, name: "EnableActionWithDuration",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0400, name: "DisableAction",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0800, name: "DisableActionWithDuration",
                            conformance: "M"
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
                },

                {
                    tag: "datatype", name: "EndpointListStruct",
                    conformance: "M", type: "struct",
                    children: [
                        {
                            tag: "datatype", name: "EndpointListId",
                            conformance: "M", type: "uint16"
                        },

                        {
                            tag: "datatype", name: "Name",
                            conformance: "M", type: "string"
                        },

                        {
                            tag: "datatype", name: "Type",
                            conformance: "M", type: "EndpointListTypeEnum"
                        },

                        {
                            tag: "datatype", name: "Endpoints",
                            conformance: "M", type: "endpoint-no"
                        }
                    ]
                }
            ]
        },

        {
            tag: "cluster", id: 0x003c, name: "AdministratorCommissioning",
            description: "Administrator Commissioning",
            children: [
                {
                    tag: "attribute", id: 0x0000, name: "WindowStatus",
                    conformance: "M", type: "CommissioningWindowStatusEnum"
                },

                {
                    tag: "attribute", id: 0x0001, name: "AdminFabricIndex",
                    conformance: "M", quality: "X", type: "fabric-idx"
                },

                {
                    tag: "attribute", id: 0x0002, name: "AdminVendorId",
                    conformance: "M", quality: "X", type: "uint16"
                },

                {
                    tag: "command", id: 0x0000, name: "OpenCommissioningWindow",
                    access: "R A", conformance: "M", direction: "request",
                    children: [
                        {
                            tag: "datatype", name: "CommissioningTimeout",
                            conformance: "M", type: "uint16"
                        },

                        {
                            tag: "datatype", name: "PakePasscodeVerifier",
                            conformance: "M", type: "octstr"
                        },

                        {
                            tag: "datatype", name: "Discriminator",
                            conformance: "M", type: "uint16"
                        },

                        {
                            tag: "datatype", name: "Iterations",
                            conformance: "M", type: "uint32"
                        },

                        {
                            tag: "datatype", name: "Salt",
                            conformance: "M", type: "octstr"
                        }
                    ]
                },

                {
                    tag: "command", id: 0x0001, name: "OpenBasicCommissioningWindow",
                    access: "R A", conformance: "O", direction: "request",
                    children: [
                        {
                            tag: "datatype", name: "CommissioningTimeout",
                            conformance: "M", type: "uint16"
                        }
                    ]
                },

                {
                    tag: "command", id: 0x0002, name: "RevokeCommissioning",
                    access: "R A", conformance: "M", direction: "request"
                },

                {
                    tag: "datatype", name: "StatusCode",
                    conformance: "M", type: "enum8",
                    children: [
                        {
                            tag: "datatype", id: 0x0002, name: "Busy",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0003, name: "PakeParameterError",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0004, name: "WindowNotOpen",
                            conformance: "M"
                        }
                    ]
                },

                {
                    tag: "datatype", name: "CommissioningWindowStatusEnum",
                    conformance: "M", type: "enum8",
                    children: [
                        {
                            tag: "datatype", id: 0x0000, name: "WindowNotOpen",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0001, name: "EnhancedWindowOpen",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0002, name: "BasicWindowOpen",
                            conformance: "M"
                        }
                    ]
                }
            ]
        },

        {
            tag: "cluster", id: 0x050d, name: "ApplicationBasic",
            description: "Application Basic",
            children: [
                {
                    tag: "attribute", id: 0x0000, name: "ApplicationVendorName",
                    conformance: "O", default: "", type: "string"
                },

                {
                    tag: "attribute", id: 0x0001, name: "ApplicationVendorId",
                    conformance: "O", default: 0, type: "vendor-id"
                },

                {
                    tag: "attribute", id: 0x0002, name: "ApplicationName",
                    conformance: "M", type: "string"
                },

                {
                    tag: "attribute", id: 0x0003, name: "ApplicationProductId",
                    conformance: "O", default: 0, type: "uint16"
                },

                {
                    tag: "attribute", id: 0x0004, name: "ApplicationApp",
                    conformance: "M", type: "ApplicationStruct"
                },

                {
                    tag: "attribute", id: 0x0005, name: "ApplicationStatus",
                    conformance: "M", default: 1, type: "ApplicationStatusEnum"
                },

                {
                    tag: "attribute", id: 0x0006, name: "ApplicationVersion",
                    conformance: "M", type: "string"
                },

                {
                    tag: "attribute", id: 0x0007, name: "ApplicationAllowedVendorList",
                    conformance: "M", type: "list",
                    children: [
                        {
                            tag: "datatype", name: "entry",
                            type: "vendor-id"
                        }
                    ]
                },

                {
                    tag: "datatype", name: "ApplicationStatusEnum",
                    conformance: "M", type: "enum8",
                    children: [
                        {
                            tag: "datatype", id: 0x0000, name: "Stopped",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0001, name: "ActiveVisibleFocus",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0002, name: "ActiveHidden",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0003, name: "ActiveVisibleNotFocus",
                            conformance: "M"
                        }
                    ]
                }
            ]
        },

        {
            tag: "cluster", id: 0x050c, name: "ApplicationLauncher",
            description: "Application Launcher",
            children: [
                {
                    tag: "attribute", id: 0x0000, name: "ApplicationLauncherList",
                    conformance: "O", quality: "P", type: "list",
                    children: [
                        {
                            tag: "datatype", name: "entry",
                            type: "uint16"
                        }
                    ]
                },

                {
                    tag: "attribute", id: 0x0001, name: "ApplicationLauncherCurrentApp",
                    access: "RW", conformance: "O", default: undefined, quality: "X", type: "ApplicationEpStruct"
                },

                {
                    tag: "command", id: 0x0000, name: "LaunchApp",
                    conformance: "M", direction: "request", response: "LauncherResponse",
                    children: [
                        {
                            tag: "datatype", name: "Application",
                            conformance: "O", type: "ApplicationStruct"
                        },

                        {
                            tag: "datatype", name: "Data",
                            conformance: "O", type: "octstr"
                        }
                    ]
                },

                {
                    tag: "command", id: 0x0001, name: "StopApp",
                    conformance: "M", direction: "request", response: "LauncherResponse",
                    children: [
                        {
                            tag: "datatype", name: "Application",
                            conformance: "O", type: "ApplicationStruct"
                        }
                    ]
                },

                {
                    tag: "command", id: 0x0002, name: "HideApp",
                    conformance: "M", direction: "request", response: "LauncherResponse",
                    children: [
                        {
                            tag: "datatype", name: "Application",
                            conformance: "O", type: "ApplicationStruct"
                        }
                    ]
                },

                {
                    tag: "command", id: 0x0003, name: "LauncherResponse",
                    conformance: "M", direction: "response",
                    children: [
                        {
                            tag: "datatype", name: "Status",
                            conformance: "M", type: "ApplicationLauncherStatusEnum"
                        },

                        {
                            tag: "datatype", name: "Data",
                            conformance: "O", type: "octstr"
                        }
                    ]
                },

                {
                    tag: "datatype", name: "ApplicationEpStruct",
                    conformance: "M", type: "struct",
                    children: [
                        {
                            tag: "datatype", name: "Application",
                            conformance: "M", type: "ApplicationStruct"
                        },

                        {
                            tag: "datatype", name: "Endpoint",
                            conformance: "O", type: "endpoint-no"
                        }
                    ]
                },

                {
                    tag: "datatype", name: "ApplicationStruct",
                    conformance: "M", type: "struct",
                    children: [
                        {
                            tag: "datatype", name: "CatalogVendorId",
                            conformance: "M", type: "uint16"
                        },

                        {
                            tag: "datatype", name: "ApplicationId",
                            conformance: "M", type: "string"
                        }
                    ]
                },

                {
                    tag: "datatype", name: "ApplicationLauncherStatusEnum",
                    conformance: "M", type: "enum8",
                    children: [
                        {
                            tag: "datatype", id: 0x0000, name: "Success",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0001, name: "AppNotAvailable",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0002, name: "SystemBusy",
                            conformance: "M"
                        }
                    ]
                },

                {
                    tag: "datatype", name: "ApplicationLauncherFeature",
                    conformance: "M", type: "map32",
                    children: [
                        {
                            tag: "datatype", id: 0x0001, name: "ApplicationPlatform",
                            conformance: "M"
                        }
                    ]
                }
            ]
        },

        {
            tag: "cluster", id: 0x050b, name: "AudioOutput",
            description: "Audio Output",
            children: [
                {
                    tag: "attribute", id: 0x0000, name: "AudioOutputList",
                    conformance: "M", type: "list",
                    children: [
                        {
                            tag: "datatype", name: "entry",
                            type: "OutputInfoStruct"
                        }
                    ]
                },

                {
                    tag: "attribute", id: 0x0001, name: "AudioOutputCurrentOutput",
                    conformance: "O", default: 0, type: "uint8"
                },

                {
                    tag: "command", id: 0x0000, name: "SelectOutput",
                    conformance: "M", direction: "request",
                    children: [
                        {
                            tag: "datatype", name: "Index",
                            conformance: "M", type: "uint8"
                        }
                    ]
                },

                {
                    tag: "command", id: 0x0001, name: "RenameOutput",
                    conformance: "O", direction: "request",
                    children: [
                        {
                            tag: "datatype", name: "Index",
                            conformance: "M", type: "uint8"
                        },

                        {
                            tag: "datatype", name: "Name",
                            conformance: "M", type: "string"
                        }
                    ]
                },

                {
                    tag: "datatype", name: "OutputInfoStruct",
                    conformance: "M", type: "struct",
                    children: [
                        {
                            tag: "datatype", name: "Index",
                            conformance: "M", type: "uint8"
                        },

                        {
                            tag: "datatype", name: "OutputType",
                            conformance: "M", type: "OutputTypeEnum"
                        },

                        {
                            tag: "datatype", name: "Name",
                            conformance: "M", type: "string"
                        }
                    ]
                },

                {
                    tag: "datatype", name: "OutputTypeEnum",
                    conformance: "M", type: "enum8",
                    children: [
                        {
                            tag: "datatype", id: 0x0000, name: "Hdmi",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0001, name: "Bt",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0002, name: "Optical",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0003, name: "Headphone",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0004, name: "Internal",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0005, name: "Other",
                            conformance: "M"
                        }
                    ]
                },

                {
                    tag: "datatype", name: "AudioOutputFeature",
                    conformance: "M", type: "map32",
                    children: [
                        {
                            tag: "datatype", id: 0x0001, name: "NameUpdates",
                            conformance: "M"
                        }
                    ]
                }
            ]
        },

        {
            tag: "cluster", id: 0x0301, name: "BallastConfiguration",
            description: "Ballast Configuration",
            children: [
                {
                    tag: "attribute", id: 0x0000, name: "PhysicalMinLevel",
                    conformance: "M", default: 1, type: "uint8"
                },

                {
                    tag: "attribute", id: 0x0001, name: "PhysicalMaxLevel",
                    conformance: "M", default: 254, type: "uint8"
                },

                {
                    tag: "attribute", id: 0x0002, name: "BallastStatus",
                    conformance: "O", default: 0, type: "map8"
                },

                {
                    tag: "attribute", id: 0x0010, name: "MinLevel",
                    access: "RW", conformance: "M", default: 1, type: "uint8"
                },

                {
                    tag: "attribute", id: 0x0011, name: "MaxLevel",
                    access: "RW", conformance: "M", default: 254, type: "uint8"
                },

                {
                    tag: "attribute", id: 0x0014, name: "IntrinsicBallastFactor",
                    access: "RW", conformance: "O", quality: "X", type: "uint8"
                },

                {
                    tag: "attribute", id: 0x0015, name: "BallastFactorAdjustment",
                    access: "RW", conformance: "O", default: 255, quality: "X", type: "uint8"
                },

                {
                    tag: "attribute", id: 0x0020, name: "LampQuantity",
                    conformance: "M", type: "uint8"
                },

                {
                    tag: "attribute", id: 0x0030, name: "LampType",
                    access: "RW", conformance: "O", type: "string"
                },

                {
                    tag: "attribute", id: 0x0031, name: "LampManufacturer",
                    access: "RW", conformance: "O", type: "string"
                },

                {
                    tag: "attribute", id: 0x0032, name: "LampRatedHours",
                    access: "RW", conformance: "O", default: 16777215, quality: "X", type: "uint24"
                },

                {
                    tag: "attribute", id: 0x0033, name: "LampBurnHours",
                    access: "RW", conformance: "O", default: 0, quality: "X", type: "uint24"
                },

                {
                    tag: "attribute", id: 0x0034, name: "LampAlarmMode",
                    access: "RW", conformance: "O", default: 0, type: "map8"
                },

                {
                    tag: "attribute", id: 0x0035, name: "LampBurnHoursTripPoint",
                    access: "RW", conformance: "O", default: 16777215, quality: "X", type: "uint24"
                }
            ]
        },

        {
            tag: "cluster", id: 0x0028, name: "BasicInformation",
            description: "Basic Information", singleton: true,
            children: [
                {
                    tag: "attribute", id: 0x0000, name: "DataModelRevision",
                    conformance: "M", type: "uint16"
                },

                {
                    tag: "attribute", id: 0x0001, name: "VendorName",
                    conformance: "M", type: "string"
                },

                {
                    tag: "attribute", id: 0x0002, name: "VendorId",
                    conformance: "M", type: "vendor-id"
                },

                {
                    tag: "attribute", id: 0x0003, name: "ProductName",
                    conformance: "M", type: "string"
                },

                {
                    tag: "attribute", id: 0x0004, name: "ProductId",
                    conformance: "M", type: "uint16"
                },

                {
                    tag: "attribute", id: 0x0005, name: "NodeLabel",
                    access: "RW VM", conformance: "M", default: "", type: "string"
                },

                {
                    tag: "attribute", id: 0x0006, name: "Location",
                    access: "RW VA", conformance: "M", default: "XX", type: "string"
                },

                {
                    tag: "attribute", id: 0x0007, name: "HardwareVersion",
                    conformance: "M", default: 0, type: "uint16"
                },

                {
                    tag: "attribute", id: 0x0008, name: "HardwareVersionString",
                    conformance: "M", type: "string"
                },

                {
                    tag: "attribute", id: 0x0009, name: "SoftwareVersion",
                    conformance: "M", default: 0, type: "uint32"
                },

                {
                    tag: "attribute", id: 0x000a, name: "SoftwareVersionString",
                    conformance: "M", type: "string"
                },

                {
                    tag: "attribute", id: 0x000b, name: "ManufacturingDate",
                    conformance: "O", type: "string"
                },

                {
                    tag: "attribute", id: 0x000c, name: "PartNumber",
                    conformance: "O", type: "string"
                },

                {
                    tag: "attribute", id: 0x000d, name: "ProductUrl",
                    conformance: "O", type: "string"
                },

                {
                    tag: "attribute", id: 0x000e, name: "ProductLabel",
                    conformance: "O", type: "string"
                },

                {
                    tag: "attribute", id: 0x000f, name: "SerialNumber",
                    conformance: "O", type: "string"
                },

                {
                    tag: "attribute", id: 0x0010, name: "LocalConfigDisabled",
                    access: "RW VM", conformance: "O", default: true, type: "bool"
                },

                {
                    tag: "attribute", id: 0x0011, name: "Reachable",
                    conformance: "O", default: true, type: "bool"
                },

                {
                    tag: "attribute", id: 0x0012, name: "UniqueId",
                    conformance: "O", type: "string"
                },

                {
                    tag: "attribute", id: 0x0013, name: "CapabilityMinima",
                    conformance: "M", type: "CapabilityMinimaStruct"
                },

                {
                    tag: "attribute", id: 0x0014, name: "ProductAppearance",
                    conformance: "O", type: "ProductAppearanceStruct"
                },

                {
                    tag: "event", id: 0x0000, name: "StartUp",
                    conformance: "M", priority: "critical",
                    children: [
                        {
                            tag: "datatype", name: "SoftwareVersion",
                            conformance: "M", type: "uint32"
                        }
                    ]
                },

                {
                    tag: "event", id: 0x0001, name: "ShutDown",
                    conformance: "O", priority: "critical"
                },

                {
                    tag: "event", id: 0x0002, name: "Leave",
                    conformance: "O", priority: "info",
                    children: [
                        {
                            tag: "datatype", name: "FabricIndex",
                            conformance: "M", type: "fabric-idx"
                        }
                    ]
                },

                {
                    tag: "event", id: 0x0003, name: "ReachableChanged",
                    conformance: "O", priority: "info",
                    children: [
                        {
                            tag: "datatype", name: "ReachableNewValue",
                            conformance: "M", type: "bool"
                        }
                    ]
                },

                {
                    tag: "datatype", name: "CapabilityMinimaStruct",
                    conformance: "M", type: "struct",
                    children: [
                        {
                            tag: "datatype", name: "CaseSessionsPerFabric",
                            conformance: "M", type: "uint16"
                        },

                        {
                            tag: "datatype", name: "SubscriptionsPerFabric",
                            conformance: "M", type: "uint16"
                        }
                    ]
                },

                {
                    tag: "datatype", name: "ProductFinishEnum",
                    conformance: "M", type: "enum8",
                    children: [
                        {
                            tag: "datatype", id: 0x0000, name: "Other",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0001, name: "Matte",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0002, name: "Satin",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0003, name: "Polished",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0004, name: "Rugged",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0005, name: "Fabric",
                            conformance: "M"
                        }
                    ]
                },

                {
                    tag: "datatype", name: "ColorEnum",
                    conformance: "M", type: "enum8",
                    children: [
                        {
                            tag: "datatype", id: 0x0000, name: "Black",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0001, name: "Navy",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0002, name: "Green",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0003, name: "Teal",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0004, name: "Maroon",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0005, name: "Purple",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0006, name: "Olive",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0007, name: "Gray",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0008, name: "Blue",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0009, name: "Lime",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x000a, name: "Aqua",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x000b, name: "Red",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x000c, name: "Fuchsia",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x000d, name: "Yellow",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x000e, name: "White",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x000f, name: "Nickel",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0010, name: "Chrome",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0011, name: "Brass",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0012, name: "Copper",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0013, name: "Silver",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0014, name: "Gold",
                            conformance: "M"
                        }
                    ]
                },

                {
                    tag: "datatype", name: "ProductAppearanceStruct",
                    conformance: "M", type: "struct",
                    children: [
                        {
                            tag: "datatype", name: "Finish",
                            conformance: "M", type: "ProductFinishEnum"
                        },

                        {
                            tag: "datatype", name: "PrimaryColor",
                            conformance: "M", quality: "X", type: "ColorEnum"
                        }
                    ]
                }
            ]
        },

        {
            tag: "cluster", id: 0x001e, name: "Binding",
            description: "Binding",
            children: [
                {
                    tag: "attribute", id: 0x0000, name: "BindingList",
                    access: "RW", conformance: "M", type: "list",
                    children: [
                        {
                            tag: "datatype", name: "entry",
                            type: "TargetStruct"
                        }
                    ]
                },

                {
                    tag: "datatype", name: "TargetStruct",
                    access: "R F", conformance: "M", type: "struct",
                    children: [
                        {
                            tag: "datatype", name: "Node",
                            conformance: "O", type: "node-id"
                        },

                        {
                            tag: "datatype", name: "Group",
                            conformance: "O", type: "group-id"
                        },

                        {
                            tag: "datatype", name: "Endpoint",
                            conformance: "O", type: "endpoint-no"
                        },

                        {
                            tag: "datatype", name: "Cluster",
                            conformance: "O", type: "cluster-id"
                        }
                    ]
                }
            ]
        },

        {
            tag: "cluster", id: 0x0045, name: "BooleanState",
            description: "Boolean State",
            children: [
                {
                    tag: "attribute", id: 0x0000, name: "StateValue",
                    conformance: "M", quality: "P", type: "bool"
                },

                {
                    tag: "event", id: 0x0000, name: "StateChange",
                    conformance: "M", priority: "info",
                    children: [
                        {
                            tag: "datatype", name: "StateValue",
                            conformance: "M", type: "bool"
                        }
                    ]
                }
            ]
        },

        {
            tag: "cluster", id: 0x0039, name: "BridgedDeviceBasicInformation",
            description: "Bridged Device Basic Information",
            children: [
                {
                    tag: "attribute", id: 0x0001, name: "VendorName",
                    conformance: "O", type: "string"
                },

                {
                    tag: "attribute", id: 0x0002, name: "VendorId",
                    conformance: "O", type: "vendor-id"
                },

                {
                    tag: "attribute", id: 0x0003, name: "ProductName",
                    conformance: "O", type: "string"
                },

                {
                    tag: "attribute", id: 0x0005, name: "NodeLabel",
                    access: "RW", conformance: "O", default: "", type: "string"
                },

                {
                    tag: "attribute", id: 0x0007, name: "HardwareVersion",
                    conformance: "O", default: 0, type: "uint16"
                },

                {
                    tag: "attribute", id: 0x0008, name: "HardwareVersionString",
                    conformance: "O", type: "string"
                },

                {
                    tag: "attribute", id: 0x0009, name: "SoftwareVersion",
                    conformance: "O", default: 0, type: "uint32"
                },

                {
                    tag: "attribute", id: 0x000a, name: "SoftwareVersionString",
                    conformance: "O", type: "string"
                },

                {
                    tag: "attribute", id: 0x000b, name: "ManufacturingDate",
                    conformance: "O", type: "string"
                },

                {
                    tag: "attribute", id: 0x000c, name: "PartNumber",
                    conformance: "O", type: "string"
                },

                {
                    tag: "attribute", id: 0x000d, name: "ProductUrl",
                    conformance: "O", type: "string"
                },

                {
                    tag: "attribute", id: 0x000e, name: "ProductLabel",
                    conformance: "O", type: "string"
                },

                {
                    tag: "attribute", id: 0x000f, name: "SerialNumber",
                    conformance: "O", type: "string"
                },

                {
                    tag: "attribute", id: 0x0011, name: "Reachable",
                    conformance: "M", default: true, type: "bool"
                },

                {
                    tag: "attribute", id: 0x0012, name: "UniqueId",
                    conformance: "O", type: "string"
                },

                {
                    tag: "attribute", id: 0x0014, name: "ProductAppearance",
                    conformance: "O", type: "ProductAppearanceStruct"
                },

                {
                    tag: "event", id: 0x0000, name: "StartUp",
                    conformance: "O", priority: "critical",
                    children: [
                        {
                            tag: "datatype", name: "SoftwareVersion",
                            conformance: "M", type: "uint32"
                        }
                    ]
                },

                {
                    tag: "event", id: 0x0001, name: "ShutDown",
                    conformance: "O", priority: "critical"
                },

                {
                    tag: "event", id: 0x0002, name: "Leave",
                    conformance: "O", priority: "info"
                },

                {
                    tag: "event", id: 0x0003, name: "ReachableChanged",
                    conformance: "M", priority: "info",
                    children: [
                        {
                            tag: "datatype", name: "ReachableNewValue",
                            conformance: "M", type: "bool"
                        }
                    ]
                },

                {
                    tag: "datatype", name: "ProductFinishEnum",
                    conformance: "M", type: "enum8",
                    children: [
                        {
                            tag: "datatype", id: 0x0000, name: "Other",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0001, name: "Matte",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0002, name: "Satin",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0003, name: "Polished",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0004, name: "Rugged",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0005, name: "Fabric",
                            conformance: "M"
                        }
                    ]
                },

                {
                    tag: "datatype", name: "ColorEnum",
                    conformance: "M", type: "enum8",
                    children: [
                        {
                            tag: "datatype", id: 0x0000, name: "Black",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0001, name: "Navy",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0002, name: "Green",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0003, name: "Teal",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0004, name: "Maroon",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0005, name: "Purple",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0006, name: "Olive",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0007, name: "Gray",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0008, name: "Blue",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0009, name: "Lime",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x000a, name: "Aqua",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x000b, name: "Red",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x000c, name: "Fuchsia",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x000d, name: "Yellow",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x000e, name: "White",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x000f, name: "Nickel",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0010, name: "Chrome",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0011, name: "Brass",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0012, name: "Copper",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0013, name: "Silver",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0014, name: "Gold",
                            conformance: "M"
                        }
                    ]
                },

                {
                    tag: "datatype", name: "ProductAppearanceStruct",
                    conformance: "M", type: "struct",
                    children: [
                        {
                            tag: "datatype", name: "Finish",
                            conformance: "M", type: "ProductFinishEnum"
                        },

                        {
                            tag: "datatype", name: "PrimaryColor",
                            conformance: "M", quality: "X", type: "ColorEnum"
                        }
                    ]
                }
            ]
        },

        {
            tag: "cluster", id: 0x0504, name: "Channel",
            description: "Channel",
            children: [
                {
                    tag: "attribute", id: 0x0000, name: "ChannelList",
                    conformance: "O", type: "list",
                    children: [
                        {
                            tag: "datatype", name: "entry",
                            type: "ChannelInfoStruct"
                        }
                    ]
                },

                {
                    tag: "attribute", id: 0x0001, name: "ChannelLineup",
                    conformance: "O", default: undefined, quality: "X", type: "LineupInfoStruct"
                },

                {
                    tag: "attribute", id: 0x0002, name: "ChannelCurrentChannel",
                    conformance: "O", default: undefined, quality: "X", type: "ChannelInfoStruct"
                },

                {
                    tag: "command", id: 0x0000, name: "ChangeChannel",
                    conformance: "O", direction: "request", response: "ChangeChannelResponse",
                    children: [
                        {
                            tag: "datatype", name: "Match",
                            conformance: "M", type: "string"
                        }
                    ]
                },

                {
                    tag: "command", id: 0x0002, name: "ChangeChannelByNumber",
                    conformance: "M", direction: "request",
                    children: [
                        {
                            tag: "datatype", name: "MajorNumber",
                            conformance: "M", type: "uint16"
                        },

                        {
                            tag: "datatype", name: "MinorNumber",
                            conformance: "M", type: "uint16"
                        }
                    ]
                },

                {
                    tag: "command", id: 0x0003, name: "SkipChannel",
                    conformance: "M", direction: "request",
                    children: [
                        {
                            tag: "datatype", name: "Count",
                            conformance: "M", type: "uint16"
                        }
                    ]
                },

                {
                    tag: "command", id: 0x0001, name: "ChangeChannelResponse",
                    conformance: "O", direction: "response",
                    children: [
                        {
                            tag: "datatype", name: "Status",
                            conformance: "M", type: "ChannelStatusEnum"
                        },

                        {
                            tag: "datatype", name: "Data",
                            conformance: "O", type: "string"
                        }
                    ]
                },

                {
                    tag: "datatype", name: "ChannelInfoStruct",
                    conformance: "M", type: "struct",
                    children: [
                        {
                            tag: "datatype", name: "MajorNumber",
                            conformance: "M", type: "uint16"
                        },

                        {
                            tag: "datatype", name: "MinorNumber",
                            conformance: "M", type: "uint16"
                        },

                        {
                            tag: "datatype", name: "Name",
                            conformance: "O", type: "string"
                        },

                        {
                            tag: "datatype", name: "CallSign",
                            conformance: "O", type: "string"
                        },

                        {
                            tag: "datatype", name: "AffiliateCallSign",
                            conformance: "O", type: "string"
                        }
                    ]
                },

                {
                    tag: "datatype", name: "LineupInfoStruct",
                    conformance: "M", type: "struct",
                    children: [
                        {
                            tag: "datatype", name: "OperatorName",
                            conformance: "M", type: "string"
                        },

                        {
                            tag: "datatype", name: "LineupName",
                            conformance: "O", default: "", type: "string"
                        },

                        {
                            tag: "datatype", name: "PostalCode",
                            conformance: "O", default: "", type: "string"
                        },

                        {
                            tag: "datatype", name: "LineupInfoType",
                            conformance: "M", type: "LineupInfoTypeEnum"
                        }
                    ]
                },

                {
                    tag: "datatype", name: "LineupInfoTypeEnum",
                    conformance: "M", type: "enum8",
                    children: [
                        {
                            tag: "datatype", id: 0x0000, name: "Mso",
                            conformance: "M"
                        }
                    ]
                },

                {
                    tag: "datatype", name: "ChannelStatusEnum",
                    conformance: "M", type: "enum8",
                    children: [
                        {
                            tag: "datatype", id: 0x0000, name: "Success",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0001, name: "MultipleMatches",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0002, name: "NoMatches",
                            conformance: "M"
                        }
                    ]
                },

                {
                    tag: "datatype", name: "ChannelFeature",
                    conformance: "M", type: "map32",
                    children: [
                        {
                            tag: "datatype", id: 0x0001, name: "ChannelList",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0002, name: "LineupInfo",
                            conformance: "M"
                        }
                    ]
                }
            ]
        },

        {
            tag: "cluster", id: 0x0029, name: "OtaSoftwareUpdateProvider",
            description: "OTA Software Update Provider",
            children: [
                {
                    tag: "command", id: 0x0000, name: "QueryImage",
                    conformance: "M", direction: "request", response: "QueryImageResponse",
                    children: [
                        {
                            tag: "datatype", name: "VendorId",
                            conformance: "M", type: "vendor-id"
                        },

                        {
                            tag: "datatype", name: "ProductId",
                            conformance: "M", type: "uint16"
                        },

                        {
                            tag: "datatype", name: "SoftwareVersion",
                            conformance: "M", type: "uint32"
                        },

                        {
                            tag: "datatype", name: "ProtocolsSupported",
                            conformance: "M", type: "OtaDownloadProtocol"
                        },

                        {
                            tag: "datatype", name: "HardwareVersion",
                            conformance: "O", type: "uint16"
                        },

                        {
                            tag: "datatype", name: "Location",
                            conformance: "O", type: "string"
                        },

                        {
                            tag: "datatype", name: "RequestorCanConsent",
                            conformance: "O", default: true, type: "bool"
                        },

                        {
                            tag: "datatype", name: "MetadataForProvider",
                            conformance: "O", type: "octstr"
                        }
                    ]
                },

                {
                    tag: "command", id: 0x0001, name: "QueryImageResponse",
                    conformance: "M", direction: "response",
                    children: [
                        {
                            tag: "datatype", name: "Status",
                            conformance: "M", type: "OtaQueryStatus"
                        },

                        {
                            tag: "datatype", name: "DelayedActionTime",
                            conformance: "O", type: "uint32"
                        },

                        {
                            tag: "datatype", name: "ImageUri",
                            conformance: "O", type: "string"
                        },

                        {
                            tag: "datatype", name: "SoftwareVersion",
                            conformance: "O", type: "uint32"
                        },

                        {
                            tag: "datatype", name: "SoftwareVersionString",
                            conformance: "O", type: "string"
                        },

                        {
                            tag: "datatype", name: "UpdateToken",
                            conformance: "O", type: "octstr"
                        },

                        {
                            tag: "datatype", name: "UserConsentNeeded",
                            conformance: "O", default: true, type: "bool"
                        },

                        {
                            tag: "datatype", name: "MetadataForRequestor",
                            conformance: "O", type: "octstr"
                        }
                    ]
                },

                {
                    tag: "command", id: 0x0002, name: "ApplyUpdateRequest",
                    conformance: "M", direction: "request", response: "ApplyUpdateResponse",
                    children: [
                        {
                            tag: "datatype", name: "UpdateToken",
                            conformance: "M", type: "octstr"
                        },

                        {
                            tag: "datatype", name: "NewVersion",
                            conformance: "M", type: "uint32"
                        }
                    ]
                },

                {
                    tag: "command", id: 0x0003, name: "ApplyUpdateResponse",
                    conformance: "M", direction: "response",
                    children: [
                        {
                            tag: "datatype", name: "Action",
                            conformance: "M", type: "OtaApplyUpdateAction"
                        },

                        {
                            tag: "datatype", name: "DelayedActionTime",
                            conformance: "M", type: "uint32"
                        }
                    ]
                },

                {
                    tag: "command", id: 0x0004, name: "NotifyUpdateApplied",
                    conformance: "M", direction: "request",
                    children: [
                        {
                            tag: "datatype", name: "UpdateToken",
                            conformance: "M", type: "octstr"
                        },

                        {
                            tag: "datatype", name: "SoftwareVersion",
                            conformance: "M", type: "uint32"
                        }
                    ]
                },

                {
                    tag: "datatype", name: "OtaQueryStatus",
                    conformance: "M", type: "enum8",
                    children: [
                        {
                            tag: "datatype", id: 0x0000, name: "UpdateAvailable",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0001, name: "Busy",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0002, name: "NotAvailable",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0003, name: "DownloadProtocolNotSupported",
                            conformance: "M"
                        }
                    ]
                },

                {
                    tag: "datatype", name: "OtaApplyUpdateAction",
                    conformance: "M", type: "enum8",
                    children: [
                        {
                            tag: "datatype", id: 0x0000, name: "Proceed",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0001, name: "AwaitNextAction",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0002, name: "Discontinue",
                            conformance: "M"
                        }
                    ]
                },

                {
                    tag: "datatype", name: "OtaDownloadProtocol",
                    conformance: "M", type: "enum8",
                    children: [
                        {
                            tag: "datatype", id: 0x0000, name: "BdxSynchronous",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0001, name: "BdxAsynchronous",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0002, name: "Https",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0003, name: "VendorSpecific",
                            conformance: "M"
                        }
                    ]
                }
            ]
        },

        {
            tag: "cluster", id: 0x002a, name: "OtaSoftwareUpdateRequestor",
            description: "OTA Software Update Requestor",
            children: [
                {
                    tag: "attribute", id: 0x0000, name: "DefaultOtaProviders",
                    access: "RW", conformance: "M", type: "list",
                    children: [
                        {
                            tag: "datatype", name: "entry",
                            type: "ProviderLocation"
                        }
                    ]
                },

                {
                    tag: "attribute", id: 0x0001, name: "UpdatePossible",
                    conformance: "M", default: true, type: "bool"
                },

                {
                    tag: "attribute", id: 0x0002, name: "UpdateState",
                    conformance: "M", default: 0, type: "OtaUpdateStateEnum"
                },

                {
                    tag: "attribute", id: 0x0003, name: "UpdateStateProgress",
                    conformance: "M", quality: "X", type: "uint8"
                },

                {
                    tag: "command", id: 0x0000, name: "AnnounceOtaProvider",
                    conformance: "O", direction: "request",
                    children: [
                        {
                            tag: "datatype", name: "ProviderNodeId",
                            conformance: "M", type: "node-id"
                        },

                        {
                            tag: "datatype", name: "VendorId",
                            conformance: "M", type: "vendor-id"
                        },

                        {
                            tag: "datatype", name: "AnnouncementReason",
                            conformance: "M", type: "OtaAnnouncementReason"
                        },

                        {
                            tag: "datatype", name: "MetadataForNode",
                            conformance: "O", type: "octstr"
                        },

                        {
                            tag: "datatype", name: "Endpoint",
                            conformance: "M", type: "endpoint-no"
                        }
                    ]
                },

                {
                    tag: "event", id: 0x0000, name: "StateTransition",
                    conformance: "M", priority: "info",
                    children: [
                        {
                            tag: "datatype", name: "PreviousState",
                            conformance: "M", type: "OtaUpdateStateEnum"
                        },

                        {
                            tag: "datatype", name: "NewState",
                            conformance: "M", type: "OtaUpdateStateEnum"
                        },

                        {
                            tag: "datatype", name: "Reason",
                            conformance: "M", type: "OtaChangeReasonEnum"
                        },

                        {
                            tag: "datatype", name: "TargetSoftwareVersion",
                            conformance: "M", quality: "X", type: "uint32"
                        }
                    ]
                },

                {
                    tag: "event", id: 0x0001, name: "VersionApplied",
                    conformance: "M", priority: "critical",
                    children: [
                        {
                            tag: "datatype", name: "SoftwareVersion",
                            conformance: "M", type: "uint32"
                        },

                        {
                            tag: "datatype", name: "ProductId",
                            conformance: "M", type: "uint16"
                        }
                    ]
                },

                {
                    tag: "event", id: 0x0002, name: "DownloadError",
                    conformance: "M", priority: "info",
                    children: [
                        {
                            tag: "datatype", name: "SoftwareVersion",
                            conformance: "M", type: "uint32"
                        },

                        {
                            tag: "datatype", name: "BytesDownloaded",
                            conformance: "M", type: "uint64"
                        },

                        {
                            tag: "datatype", name: "ProgressPercent",
                            conformance: "M", quality: "X", type: "uint8"
                        },

                        {
                            tag: "datatype", name: "PlatformCode",
                            conformance: "M", quality: "X", type: "int64"
                        }
                    ]
                },

                {
                    tag: "datatype", name: "OtaAnnouncementReason",
                    conformance: "M", type: "enum8",
                    children: [
                        {
                            tag: "datatype", id: 0x0000, name: "SimpleAnnouncement",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0001, name: "UpdateAvailable",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0002, name: "UrgentUpdateAvailable",
                            conformance: "M"
                        }
                    ]
                },

                {
                    tag: "datatype", name: "OtaUpdateStateEnum",
                    conformance: "M", type: "enum8",
                    children: [
                        {
                            tag: "datatype", id: 0x0000, name: "Unknown",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0001, name: "Idle",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0002, name: "Querying",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0003, name: "DelayedOnQuery",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0004, name: "Downloading",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0005, name: "Applying",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0006, name: "DelayedOnApply",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0007, name: "RollingBack",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0008, name: "DelayedOnUserConsent",
                            conformance: "M"
                        }
                    ]
                },

                {
                    tag: "datatype", name: "OtaChangeReasonEnum",
                    conformance: "M", type: "enum8",
                    children: [
                        {
                            tag: "datatype", id: 0x0000, name: "Unknown",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0001, name: "Success",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0002, name: "Failure",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0003, name: "TimeOut",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0004, name: "DelayByProvider",
                            conformance: "M"
                        }
                    ]
                },

                {
                    tag: "datatype", name: "ProviderLocation",
                    access: "R F", conformance: "M", type: "struct",
                    children: [
                        {
                            tag: "datatype", name: "ProviderNodeId",
                            conformance: "M", type: "node-id"
                        },

                        {
                            tag: "datatype", name: "Endpoint",
                            conformance: "M", type: "endpoint-no"
                        }
                    ]
                }
            ]
        },

        {
            tag: "cluster", id: 0x1046, name: "ClientMonitoring",
            description: "Client Monitoring",
            children: [
                {
                    tag: "attribute", id: 0x0000, name: "IdleModeInterval",
                    conformance: "M", default: 300, type: "uint32"
                },

                {
                    tag: "attribute", id: 0x0001, name: "ActiveModeInterval",
                    conformance: "M", default: 300, type: "uint32"
                },

                {
                    tag: "attribute", id: 0x0002, name: "ActiveModeThreshold",
                    conformance: "M", default: 4000, type: "uint16"
                },

                {
                    tag: "attribute", id: 0x0003, name: "ExpectedClients",
                    conformance: "M", type: "list",
                    children: [
                        {
                            tag: "datatype", name: "entry",
                            type: "MonitoringRegistration"
                        }
                    ]
                },

                {
                    tag: "command", id: 0x0000, name: "RegisterClientMonitoring",
                    access: "R M", conformance: "M", direction: "request",
                    children: [
                        {
                            tag: "datatype", name: "ClientNodeId",
                            conformance: "M", type: "node-id"
                        },

                        {
                            tag: "datatype", name: "ICid",
                            conformance: "M", type: "uint64"
                        }
                    ]
                },

                {
                    tag: "command", id: 0x0001, name: "UnregisterClientMonitoring",
                    access: "R M", conformance: "M", direction: "request",
                    children: [
                        {
                            tag: "datatype", name: "ClientNodeId",
                            conformance: "M", type: "node-id"
                        },

                        {
                            tag: "datatype", name: "ICid",
                            conformance: "M", type: "uint64"
                        }
                    ]
                },

                {
                    tag: "command", id: 0x0002, name: "StayAwakeRequest",
                    access: "R M", conformance: "O", direction: "request"
                },

                {
                    tag: "datatype", name: "MonitoringRegistration",
                    access: "R F", conformance: "M", type: "struct",
                    children: [
                        {
                            tag: "datatype", name: "ClientNodeId",
                            conformance: "M", type: "node-id"
                        },

                        {
                            tag: "datatype", name: "ICid",
                            conformance: "M", type: "uint64"
                        }
                    ]
                }
            ]
        },

        {
            tag: "cluster", id: 0x0300, name: "ColorControl",
            description: "Color Control",
            children: [
                {
                    tag: "attribute", id: 0x0000, name: "ColorControlCurrentHue",
                    conformance: "O", default: 0, quality: "P", type: "uint8"
                },

                {
                    tag: "attribute", id: 0x0001, name: "ColorControlCurrentSaturation",
                    conformance: "O", default: 0, quality: "P", type: "uint8"
                },

                {
                    tag: "attribute", id: 0x0002, name: "ColorControlRemainingTime",
                    conformance: "O", default: 0, type: "uint16"
                },

                {
                    tag: "attribute", id: 0x0003, name: "ColorControlCurrentX",
                    conformance: "O", default: 24939, quality: "P", type: "uint16"
                },

                {
                    tag: "attribute", id: 0x0004, name: "ColorControlCurrentY",
                    conformance: "O", default: 24701, quality: "P", type: "uint16"
                },

                {
                    tag: "attribute", id: 0x0005, name: "ColorControlDriftCompensation",
                    conformance: "O", type: "enum8"
                },

                {
                    tag: "attribute", id: 0x0006, name: "ColorControlCompensationText",
                    conformance: "O", type: "string"
                },

                {
                    tag: "attribute", id: 0x0007, name: "ColorControlColorTemperature",
                    conformance: "O", default: 250, quality: "P", type: "uint16"
                },

                {
                    tag: "attribute", id: 0x0008, name: "ColorControlColorMode",
                    conformance: "M", default: 1, type: "enum8"
                },

                {
                    tag: "attribute", id: 0x000f, name: "ColorControlOptions",
                    access: "RW", conformance: "M", default: 0, type: "map8"
                },

                {
                    tag: "attribute", id: 0x0010, name: "ColorControlNumberOfPrimaries",
                    conformance: "M", quality: "X", type: "uint8"
                },

                {
                    tag: "attribute", id: 0x0011, name: "ColorControlPrimary1X",
                    conformance: "O", type: "uint16"
                },

                {
                    tag: "attribute", id: 0x0012, name: "ColorControlPrimary1Y",
                    conformance: "O", type: "uint16"
                },

                {
                    tag: "attribute", id: 0x0013, name: "ColorControlPrimary1Intensity",
                    conformance: "O", quality: "X", type: "uint8"
                },

                {
                    tag: "attribute", id: 0x0015, name: "ColorControlPrimary2X",
                    conformance: "O", type: "uint16"
                },

                {
                    tag: "attribute", id: 0x0016, name: "ColorControlPrimary2Y",
                    conformance: "O", type: "uint16"
                },

                {
                    tag: "attribute", id: 0x0017, name: "ColorControlPrimary2Intensity",
                    conformance: "O", quality: "X", type: "uint8"
                },

                {
                    tag: "attribute", id: 0x0019, name: "ColorControlPrimary3X",
                    conformance: "O", type: "uint16"
                },

                {
                    tag: "attribute", id: 0x001a, name: "ColorControlPrimary3Y",
                    conformance: "O", type: "uint16"
                },

                {
                    tag: "attribute", id: 0x001b, name: "ColorControlPrimary3Intensity",
                    conformance: "O", quality: "X", type: "uint8"
                },

                {
                    tag: "attribute", id: 0x0020, name: "ColorControlPrimary4X",
                    conformance: "O", type: "uint16"
                },

                {
                    tag: "attribute", id: 0x0021, name: "ColorControlPrimary4Y",
                    conformance: "O", type: "uint16"
                },

                {
                    tag: "attribute", id: 0x0022, name: "ColorControlPrimary4Intensity",
                    conformance: "O", quality: "X", type: "uint8"
                },

                {
                    tag: "attribute", id: 0x0024, name: "ColorControlPrimary5X",
                    conformance: "O", type: "uint16"
                },

                {
                    tag: "attribute", id: 0x0025, name: "ColorControlPrimary5Y",
                    conformance: "O", type: "uint16"
                },

                {
                    tag: "attribute", id: 0x0026, name: "ColorControlPrimary5Intensity",
                    conformance: "O", quality: "X", type: "uint8"
                },

                {
                    tag: "attribute", id: 0x0028, name: "ColorControlPrimary6X",
                    conformance: "O", type: "uint16"
                },

                {
                    tag: "attribute", id: 0x0029, name: "ColorControlPrimary6Y",
                    conformance: "O", type: "uint16"
                },

                {
                    tag: "attribute", id: 0x002a, name: "ColorControlPrimary6Intensity",
                    conformance: "O", quality: "X", type: "uint8"
                },

                {
                    tag: "attribute", id: 0x0030, name: "ColorControlWhitePointX",
                    access: "RW VM", conformance: "O", type: "uint16"
                },

                {
                    tag: "attribute", id: 0x0031, name: "ColorControlWhitePointY",
                    access: "RW VM", conformance: "O", type: "uint16"
                },

                {
                    tag: "attribute", id: 0x0032, name: "ColorControlColorPointRX",
                    access: "RW VM", conformance: "O", type: "uint16"
                },

                {
                    tag: "attribute", id: 0x0033, name: "ColorControlColorPointRY",
                    access: "RW VM", conformance: "O", type: "uint16"
                },

                {
                    tag: "attribute", id: 0x0034, name: "ColorControlColorPointRIntensity",
                    access: "RW VM", conformance: "O", quality: "X", type: "uint8"
                },

                {
                    tag: "attribute", id: 0x0036, name: "ColorControlColorPointGX",
                    access: "RW VM", conformance: "O", type: "uint16"
                },

                {
                    tag: "attribute", id: 0x0037, name: "ColorControlColorPointGY",
                    access: "RW VM", conformance: "O", type: "uint16"
                },

                {
                    tag: "attribute", id: 0x0038, name: "ColorControlColorPointGIntensity",
                    access: "RW VM", conformance: "O", quality: "X", type: "uint8"
                },

                {
                    tag: "attribute", id: 0x003a, name: "ColorControlColorPointBX",
                    access: "RW VM", conformance: "O", type: "uint16"
                },

                {
                    tag: "attribute", id: 0x003b, name: "ColorControlColorPointBY",
                    access: "RW VM", conformance: "O", type: "uint16"
                },

                {
                    tag: "attribute", id: 0x003c, name: "ColorControlColorPointBIntensity",
                    access: "RW VM", conformance: "O", quality: "X", type: "uint8"
                },

                {
                    tag: "attribute", id: 0x400d, name: "ColorControlTemperatureLevelMinMireds",
                    conformance: "O", type: "uint16"
                },

                {
                    tag: "attribute", id: 0x4010, name: "StartUpColorTemperatureMireds",
                    access: "RW VM", conformance: "O", quality: "X", type: "uint16"
                },

                {
                    tag: "command", id: 0x0000, name: "MoveToHue",
                    conformance: "O", direction: "request",
                    children: [
                        {
                            tag: "datatype", name: "Hue",
                            conformance: "M", type: "uint8"
                        },

                        {
                            tag: "datatype", name: "Direction",
                            conformance: "M", type: "HueDirection"
                        },

                        {
                            tag: "datatype", name: "TransitionTime",
                            conformance: "M", type: "uint16"
                        },

                        {
                            tag: "datatype", name: "OptionsMask",
                            conformance: "M", type: "map8"
                        },

                        {
                            tag: "datatype", name: "OptionsOverride",
                            conformance: "M", type: "map8"
                        }
                    ]
                },

                {
                    tag: "command", id: 0x0001, name: "MoveHue",
                    conformance: "O", direction: "request",
                    children: [
                        {
                            tag: "datatype", name: "MoveMode",
                            conformance: "M", type: "HueMoveMode"
                        },

                        {
                            tag: "datatype", name: "Rate",
                            conformance: "M", type: "uint8"
                        },

                        {
                            tag: "datatype", name: "OptionsMask",
                            conformance: "M", type: "map8"
                        },

                        {
                            tag: "datatype", name: "OptionsOverride",
                            conformance: "M", type: "map8"
                        }
                    ]
                },

                {
                    tag: "command", id: 0x0002, name: "StepHue",
                    conformance: "O", direction: "request",
                    children: [
                        {
                            tag: "datatype", name: "StepMode",
                            conformance: "M", type: "HueStepMode"
                        },

                        {
                            tag: "datatype", name: "StepSize",
                            conformance: "M", type: "uint8"
                        },

                        {
                            tag: "datatype", name: "TransitionTime",
                            conformance: "M", type: "uint8"
                        },

                        {
                            tag: "datatype", name: "OptionsMask",
                            conformance: "M", type: "map8"
                        },

                        {
                            tag: "datatype", name: "OptionsOverride",
                            conformance: "M", type: "map8"
                        }
                    ]
                },

                {
                    tag: "command", id: 0x0003, name: "MoveToSaturation",
                    conformance: "O", direction: "request",
                    children: [
                        {
                            tag: "datatype", name: "Saturation",
                            conformance: "M", type: "uint8"
                        },

                        {
                            tag: "datatype", name: "TransitionTime",
                            conformance: "M", type: "uint16"
                        },

                        {
                            tag: "datatype", name: "OptionsMask",
                            conformance: "M", type: "map8"
                        },

                        {
                            tag: "datatype", name: "OptionsOverride",
                            conformance: "M", type: "map8"
                        }
                    ]
                },

                {
                    tag: "command", id: 0x0004, name: "MoveSaturation",
                    conformance: "O", direction: "request",
                    children: [
                        {
                            tag: "datatype", name: "MoveMode",
                            conformance: "M", type: "SaturationMoveMode"
                        },

                        {
                            tag: "datatype", name: "Rate",
                            conformance: "M", type: "uint8"
                        },

                        {
                            tag: "datatype", name: "OptionsMask",
                            conformance: "M", type: "map8"
                        },

                        {
                            tag: "datatype", name: "OptionsOverride",
                            conformance: "M", type: "map8"
                        }
                    ]
                },

                {
                    tag: "command", id: 0x0005, name: "StepSaturation",
                    conformance: "O", direction: "request",
                    children: [
                        {
                            tag: "datatype", name: "StepMode",
                            conformance: "M", type: "SaturationStepMode"
                        },

                        {
                            tag: "datatype", name: "StepSize",
                            conformance: "M", type: "uint8"
                        },

                        {
                            tag: "datatype", name: "TransitionTime",
                            conformance: "M", type: "uint8"
                        },

                        {
                            tag: "datatype", name: "OptionsMask",
                            conformance: "M", type: "map8"
                        },

                        {
                            tag: "datatype", name: "OptionsOverride",
                            conformance: "M", type: "map8"
                        }
                    ]
                },

                {
                    tag: "command", id: 0x0006, name: "MoveToHueAndSaturation",
                    conformance: "O", direction: "request",
                    children: [
                        {
                            tag: "datatype", name: "Hue",
                            conformance: "M", type: "uint8"
                        },

                        {
                            tag: "datatype", name: "Saturation",
                            conformance: "M", type: "uint8"
                        },

                        {
                            tag: "datatype", name: "TransitionTime",
                            conformance: "M", type: "uint16"
                        },

                        {
                            tag: "datatype", name: "OptionsMask",
                            conformance: "M", type: "map8"
                        },

                        {
                            tag: "datatype", name: "OptionsOverride",
                            conformance: "M", type: "map8"
                        }
                    ]
                },

                {
                    tag: "command", id: 0x0007, name: "MoveToColor",
                    conformance: "O", direction: "request",
                    children: [
                        {
                            tag: "datatype", name: "ColorX",
                            conformance: "M", type: "uint16"
                        },

                        {
                            tag: "datatype", name: "ColorY",
                            conformance: "M", type: "uint16"
                        },

                        {
                            tag: "datatype", name: "TransitionTime",
                            conformance: "M", type: "uint16"
                        },

                        {
                            tag: "datatype", name: "OptionsMask",
                            conformance: "M", type: "map8"
                        },

                        {
                            tag: "datatype", name: "OptionsOverride",
                            conformance: "M", type: "map8"
                        }
                    ]
                },

                {
                    tag: "command", id: 0x0008, name: "MoveColor",
                    conformance: "O", direction: "request",
                    children: [
                        {
                            tag: "datatype", name: "RateX",
                            conformance: "M", type: "int16"
                        },

                        {
                            tag: "datatype", name: "RateY",
                            conformance: "M", type: "int16"
                        },

                        {
                            tag: "datatype", name: "OptionsMask",
                            conformance: "M", type: "map8"
                        },

                        {
                            tag: "datatype", name: "OptionsOverride",
                            conformance: "M", type: "map8"
                        }
                    ]
                },

                {
                    tag: "command", id: 0x0009, name: "StepColor",
                    conformance: "O", direction: "request",
                    children: [
                        {
                            tag: "datatype", name: "StepX",
                            conformance: "M", type: "int16"
                        },

                        {
                            tag: "datatype", name: "StepY",
                            conformance: "M", type: "int16"
                        },

                        {
                            tag: "datatype", name: "TransitionTime",
                            conformance: "M", type: "uint16"
                        },

                        {
                            tag: "datatype", name: "OptionsMask",
                            conformance: "M", type: "map8"
                        },

                        {
                            tag: "datatype", name: "OptionsOverride",
                            conformance: "M", type: "map8"
                        }
                    ]
                },

                {
                    tag: "command", id: 0x000a, name: "MoveToColorTemperature",
                    conformance: "O", direction: "request",
                    children: [
                        {
                            tag: "datatype", name: "ColorTemperatureMireds",
                            conformance: "M", type: "uint16"
                        },

                        {
                            tag: "datatype", name: "TransitionTime",
                            conformance: "M", type: "uint16"
                        },

                        {
                            tag: "datatype", name: "OptionsMask",
                            conformance: "M", type: "map8"
                        },

                        {
                            tag: "datatype", name: "OptionsOverride",
                            conformance: "M", type: "map8"
                        }
                    ]
                },

                {
                    tag: "datatype", name: "ColorControlFeature",
                    conformance: "M", type: "map32",
                    children: [
                        {
                            tag: "datatype", id: 0x0001, name: "HueAndSaturation",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0002, name: "EnhancedHue",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0004, name: "ColorLoop",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0008, name: "Xy",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0010, name: "ColorTemperature",
                            conformance: "M"
                        }
                    ]
                },

                {
                    tag: "datatype", name: "HueDirection",
                    conformance: "M", type: "enum8",
                    children: [
                        {
                            tag: "datatype", id: 0x0000, name: "ShortestDistance",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0001, name: "LongestDistance",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0002, name: "Up",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0003, name: "Down",
                            conformance: "M"
                        }
                    ]
                },

                {
                    tag: "datatype", name: "HueMoveMode",
                    conformance: "M", type: "enum8",
                    children: [
                        {
                            tag: "datatype", id: 0x0000, name: "Stop",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0001, name: "Up",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0003, name: "Down",
                            conformance: "M"
                        }
                    ]
                },

                {
                    tag: "datatype", name: "HueStepMode",
                    conformance: "M", type: "enum8",
                    children: [
                        {
                            tag: "datatype", id: 0x0001, name: "Up",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0003, name: "Down",
                            conformance: "M"
                        }
                    ]
                },

                {
                    tag: "datatype", name: "SaturationMoveMode",
                    conformance: "M", type: "enum8",
                    children: [
                        {
                            tag: "datatype", id: 0x0000, name: "Stop",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0001, name: "Up",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0003, name: "Down",
                            conformance: "M"
                        }
                    ]
                },

                {
                    tag: "datatype", name: "SaturationStepMode",
                    conformance: "M", type: "enum8",
                    children: [
                        {
                            tag: "datatype", id: 0x0001, name: "Up",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0003, name: "Down",
                            conformance: "M"
                        }
                    ]
                },

                {
                    tag: "datatype", name: "ColorMode",
                    conformance: "M", type: "enum8",
                    children: [
                        {
                            tag: "datatype", id: 0x0000, name: "CurrentHueAndCurrentSaturation",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0001, name: "CurrentXAndCurrentY",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0002, name: "ColorTemperature",
                            conformance: "M"
                        }
                    ]
                },

                {
                    tag: "datatype", name: "ColorCapabilities",
                    conformance: "M", type: "map16",
                    children: [
                        {
                            tag: "datatype", id: 0x0001, name: "HueSaturationSupported",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0002, name: "EnhancedHueSupported",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0004, name: "ColorLoopSupported",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0008, name: "XyAttributesSupported",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0010, name: "ColorTemperatureSupported",
                            conformance: "M"
                        }
                    ]
                },

                {
                    tag: "datatype", name: "ColorLoopUpdateFlags",
                    conformance: "M", type: "map8",
                    children: [
                        {
                            tag: "datatype", id: 0x0001, name: "UpdateAction",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0002, name: "UpdateDirection",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0004, name: "UpdateTime",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0008, name: "UpdateStartHue",
                            conformance: "M"
                        }
                    ]
                },

                {
                    tag: "datatype", name: "ColorLoopAction",
                    conformance: "M", type: "enum8",
                    children: [
                        {
                            tag: "datatype", id: 0x0000, name: "Deactivate",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0001, name: "ActivateFromColorLoopStartEnhancedHue",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0002, name: "ActivateFromEnhancedCurrentHue",
                            conformance: "M"
                        }
                    ]
                },

                {
                    tag: "datatype", name: "ColorLoopDirection",
                    conformance: "M", type: "enum8",
                    children: [
                        {
                            tag: "datatype", id: 0x0000, name: "DecrementHue",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0001, name: "IncrementHue",
                            conformance: "M"
                        }
                    ]
                }
            ]
        },

        {
            tag: "cluster", id: 0x050a, name: "ContentLauncher",
            description: "Content Launcher",
            children: [
                {
                    tag: "attribute", id: 0x0000, name: "ContentLauncherAcceptHeader",
                    conformance: "O", type: "list",
                    children: [
                        {
                            tag: "datatype", name: "entry",
                            type: "string"
                        }
                    ]
                },

                {
                    tag: "attribute", id: 0x0001, name: "ContentLauncherSupportedStreamingProtocols",
                    access: "RW", conformance: "O", default: 0, type: "map32"
                },

                {
                    tag: "command", id: 0x0000, name: "LaunchContent",
                    conformance: "O", direction: "request", response: "LauncherResponse",
                    children: [
                        {
                            tag: "datatype", name: "Search",
                            conformance: "M", type: "ContentSearchStruct"
                        },

                        {
                            tag: "datatype", name: "AutoPlay",
                            conformance: "M", type: "bool"
                        },

                        {
                            tag: "datatype", name: "Data",
                            conformance: "O", type: "string"
                        }
                    ]
                },

                {
                    tag: "command", id: 0x0001, name: "LaunchUrl",
                    conformance: "O", direction: "request", response: "LauncherResponse",
                    children: [
                        {
                            tag: "datatype", name: "ContentUrl",
                            conformance: "M", type: "string"
                        },

                        {
                            tag: "datatype", name: "DisplayString",
                            conformance: "O", type: "string"
                        },

                        {
                            tag: "datatype", name: "BrandingInformation",
                            conformance: "O", type: "BrandingInformationStruct"
                        }
                    ]
                },

                {
                    tag: "command", id: 0x0002, name: "LauncherResponse",
                    conformance: "O", direction: "response",
                    children: [
                        {
                            tag: "datatype", name: "Status",
                            conformance: "M", type: "ContentLaunchStatusEnum"
                        },

                        {
                            tag: "datatype", name: "Data",
                            conformance: "O", type: "string"
                        }
                    ]
                },

                {
                    tag: "datatype", name: "ContentSearchStruct",
                    conformance: "M", type: "struct",
                    children: [
                        {
                            tag: "datatype", name: "ParameterList",
                            conformance: "M", type: "ParameterStruct"
                        }
                    ]
                },

                {
                    tag: "datatype", name: "AdditionalInfoStruct",
                    conformance: "M", type: "struct",
                    children: [
                        {
                            tag: "datatype", name: "Name",
                            conformance: "M", type: "string"
                        },

                        {
                            tag: "datatype", name: "Value",
                            conformance: "M", type: "string"
                        }
                    ]
                },

                {
                    tag: "datatype", name: "MetricTypeEnum",
                    conformance: "M", type: "enum8",
                    children: [
                        {
                            tag: "datatype", id: 0x0000, name: "Pixels",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0001, name: "Percentage",
                            conformance: "M"
                        }
                    ]
                },

                {
                    tag: "datatype", name: "DimensionStruct",
                    conformance: "M", type: "struct",
                    children: [
                        {
                            tag: "datatype", name: "Width",
                            conformance: "M", type: "double"
                        },

                        {
                            tag: "datatype", name: "Height",
                            conformance: "M", type: "double"
                        },

                        {
                            tag: "datatype", name: "Metric",
                            conformance: "M", type: "MetricTypeEnum"
                        }
                    ]
                },

                {
                    tag: "datatype", name: "StyleInformationStruct",
                    conformance: "M", type: "struct",
                    children: [
                        {
                            tag: "datatype", name: "ImageUrl",
                            conformance: "O", type: "string"
                        },

                        {
                            tag: "datatype", name: "Color",
                            conformance: "O", type: "string"
                        },

                        {
                            tag: "datatype", name: "Size",
                            conformance: "O", type: "DimensionStruct"
                        }
                    ]
                },

                {
                    tag: "datatype", name: "BrandingInformationStruct",
                    conformance: "M", type: "struct",
                    children: [
                        {
                            tag: "datatype", name: "ProviderName",
                            conformance: "M", type: "string"
                        },

                        {
                            tag: "datatype", name: "Background",
                            conformance: "O", type: "StyleInformationStruct"
                        },

                        {
                            tag: "datatype", name: "Logo",
                            conformance: "O", type: "StyleInformationStruct"
                        },

                        {
                            tag: "datatype", name: "ProgressBar",
                            conformance: "O", type: "StyleInformationStruct"
                        },

                        {
                            tag: "datatype", name: "Splash",
                            conformance: "O", type: "StyleInformationStruct"
                        },

                        {
                            tag: "datatype", name: "WaterMark",
                            conformance: "O", type: "StyleInformationStruct"
                        }
                    ]
                },

                {
                    tag: "datatype", name: "ParameterEnum",
                    conformance: "M", type: "enum8",
                    children: [
                        {
                            tag: "datatype", id: 0x0000, name: "Actor",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0001, name: "Channel",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0002, name: "Character",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0003, name: "Director",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0004, name: "Event",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0005, name: "Franchise",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0006, name: "Genre",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0007, name: "League",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0008, name: "Popularity",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0009, name: "Provider",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x000a, name: "Sport",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x000b, name: "SportsTeam",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x000c, name: "Type",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x000d, name: "Video",
                            conformance: "M"
                        }
                    ]
                },

                {
                    tag: "datatype", name: "ContentLaunchStatusEnum",
                    conformance: "M", type: "enum8",
                    children: [
                        {
                            tag: "datatype", id: 0x0000, name: "Success",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0001, name: "UrlNotAvailable",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0002, name: "AuthFailed",
                            conformance: "M"
                        }
                    ]
                },

                {
                    tag: "datatype", name: "ParameterStruct",
                    conformance: "M", type: "struct",
                    children: [
                        {
                            tag: "datatype", name: "Type",
                            conformance: "M", type: "ParameterEnum"
                        },

                        {
                            tag: "datatype", name: "Value",
                            conformance: "M", type: "string"
                        },

                        {
                            tag: "datatype", name: "ExternalIdList",
                            conformance: "O", type: "AdditionalInfoStruct"
                        }
                    ]
                },

                {
                    tag: "datatype", name: "SupportedStreamingProtocol",
                    conformance: "M", type: "map32",
                    children: [
                        {
                            tag: "datatype", id: 0x0001, name: "Dash",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0002, name: "Hls",
                            conformance: "M"
                        }
                    ]
                },

                {
                    tag: "datatype", name: "ContentLauncherFeature",
                    conformance: "M", type: "map32",
                    children: [
                        {
                            tag: "datatype", id: 0x0001, name: "ContentSearch",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0002, name: "UrlPlayback",
                            conformance: "M"
                        }
                    ]
                }
            ]
        },

        {
            tag: "cluster", id: 0x001d, name: "Descriptor",
            description: "Descriptor",
            children: [
                {
                    tag: "attribute", id: 0x0000, name: "DeviceList",
                    conformance: "M", type: "list",
                    children: [
                        {
                            tag: "datatype", name: "entry",
                            type: "DeviceTypeStruct"
                        }
                    ]
                },

                {
                    tag: "attribute", id: 0x0001, name: "ServerList",
                    conformance: "M", type: "list",
                    children: [
                        {
                            tag: "datatype", name: "entry",
                            type: "cluster-id"
                        }
                    ]
                },

                {
                    tag: "attribute", id: 0x0002, name: "ClientList",
                    conformance: "M", type: "list",
                    children: [
                        {
                            tag: "datatype", name: "entry",
                            type: "cluster-id"
                        }
                    ]
                },

                {
                    tag: "attribute", id: 0x0003, name: "PartsList",
                    conformance: "M", type: "list",
                    children: [
                        {
                            tag: "datatype", name: "entry",
                            type: "endpoint-no"
                        }
                    ]
                },

                {
                    tag: "datatype", name: "DeviceTypeStruct",
                    conformance: "M", type: "struct",
                    children: [
                        {
                            tag: "datatype", name: "DeviceType",
                            conformance: "M", type: "devtype-id"
                        },

                        {
                            tag: "datatype", name: "Revision",
                            conformance: "M", type: "uint16"
                        }
                    ]
                }
            ]
        },

        {
            tag: "cluster", id: 0x0032, name: "DiagnosticLogs",
            description: "Diagnostic Logs",
            children: [
                {
                    tag: "command", id: 0x0000, name: "RetrieveLogsRequest",
                    conformance: "M", direction: "request", response: "RetrieveLogsResponse",
                    children: [
                        {
                            tag: "datatype", name: "Intent",
                            conformance: "M", type: "IntentEnum"
                        },

                        {
                            tag: "datatype", name: "RequestedProtocol",
                            conformance: "M", type: "TransferProtocolEnum"
                        },

                        {
                            tag: "datatype", name: "TransferFileDesignator",
                            conformance: "O", type: "string"
                        }
                    ]
                },

                {
                    tag: "command", id: 0x0001, name: "RetrieveLogsResponse",
                    conformance: "M", direction: "response",
                    children: [
                        {
                            tag: "datatype", name: "Status",
                            conformance: "M", type: "StatusEnum"
                        },

                        {
                            tag: "datatype", name: "LogContent",
                            conformance: "M", type: "octstr"
                        },

                        {
                            tag: "datatype", name: "UtcTimeStamp",
                            conformance: "O", type: "epoch-us"
                        },

                        {
                            tag: "datatype", name: "TimeSinceBoot",
                            conformance: "O", type: "systime-us"
                        }
                    ]
                },

                {
                    tag: "datatype", name: "IntentEnum",
                    conformance: "M", type: "enum8",
                    children: [
                        {
                            tag: "datatype", id: 0x0000, name: "EndUserSupport",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0001, name: "NetworkDiag",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0002, name: "CrashLogs",
                            conformance: "M"
                        }
                    ]
                },

                {
                    tag: "datatype", name: "StatusEnum",
                    conformance: "M", type: "enum8",
                    children: [
                        {
                            tag: "datatype", id: 0x0000, name: "Success",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0001, name: "Exhausted",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0002, name: "NoLogs",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0003, name: "Busy",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0004, name: "Denied",
                            conformance: "M"
                        }
                    ]
                },

                {
                    tag: "datatype", name: "TransferProtocolEnum",
                    conformance: "M", type: "enum8",
                    children: [
                        {
                            tag: "datatype", id: 0x0000, name: "ResponsePayload",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0001, name: "Bdx",
                            conformance: "M"
                        }
                    ]
                }
            ]
        },

        {
            tag: "cluster", id: 0x0101, name: "DoorLock",
            description: "Door Lock",
            children: [
                {
                    tag: "attribute", id: 0x0000, name: "LockState",
                    conformance: "M", quality: "X P", type: "DlLockState"
                },

                {
                    tag: "attribute", id: 0x0001, name: "LockType",
                    conformance: "M", type: "DlLockType"
                },

                {
                    tag: "attribute", id: 0x0002, name: "ActuatorEnabled",
                    conformance: "M", type: "bool"
                },

                {
                    tag: "attribute", id: 0x0003, name: "DoorState",
                    conformance: "O", quality: "X P", type: "DoorStateEnum"
                },

                {
                    tag: "attribute", id: 0x0004, name: "DoorOpenEvents",
                    access: "RW VM", conformance: "O", type: "uint32"
                },

                {
                    tag: "attribute", id: 0x0005, name: "DoorClosedEvents",
                    access: "RW VM", conformance: "O", type: "uint32"
                },

                {
                    tag: "attribute", id: 0x0006, name: "OpenPeriod",
                    access: "RW VM", conformance: "O", type: "uint16"
                },

                {
                    tag: "attribute", id: 0x0011, name: "NumTotalUsersSupported",
                    conformance: "O", default: 0, type: "uint16"
                },

                {
                    tag: "attribute", id: 0x0012, name: "NumPinUsersSupported",
                    conformance: "O", default: 0, type: "uint16"
                },

                {
                    tag: "attribute", id: 0x0013, name: "NumRfidUsersSupported",
                    conformance: "O", default: 0, type: "uint16"
                },

                {
                    tag: "attribute", id: 0x0014, name: "NumWeekdaySchedulesSupportedPerUser",
                    conformance: "O", default: 0, type: "uint8"
                },

                {
                    tag: "attribute", id: 0x0015, name: "NumYeardaySchedulesSupportedPerUser",
                    conformance: "O", default: 0, type: "uint8"
                },

                {
                    tag: "attribute", id: 0x0016, name: "NumHolidaySchedulesSupported",
                    conformance: "O", default: 0, type: "uint8"
                },

                {
                    tag: "attribute", id: 0x0017, name: "MaxPinLength",
                    conformance: "O", type: "uint8"
                },

                {
                    tag: "attribute", id: 0x0018, name: "MinPinLength",
                    conformance: "O", type: "uint8"
                },

                {
                    tag: "attribute", id: 0x0019, name: "MaxRfidCodeLength",
                    conformance: "O", type: "uint8"
                },

                {
                    tag: "attribute", id: 0x001a, name: "MinRfidCodeLength",
                    conformance: "O", type: "uint8"
                },

                {
                    tag: "attribute", id: 0x001b, name: "CredentialRulesSupport",
                    conformance: "O", default: 1, type: "DlCredentialRuleMask"
                },

                {
                    tag: "attribute", id: 0x001c, name: "NumCredentialsSupportedPerUser",
                    conformance: "O", default: 0, type: "uint8"
                },

                {
                    tag: "attribute", id: 0x0021, name: "Language",
                    access: "RW VM", conformance: "O", quality: "P", type: "string"
                },

                {
                    tag: "attribute", id: 0x0022, name: "LedSettings",
                    access: "RW VM", conformance: "O", default: 0, quality: "P", type: "uint8"
                },

                {
                    tag: "attribute", id: 0x0023, name: "AutoRelockTime",
                    access: "RW VM", conformance: "M", quality: "P", type: "uint32"
                },

                {
                    tag: "attribute", id: 0x0024, name: "SoundVolume",
                    access: "RW VM", conformance: "O", default: 0, quality: "P", type: "uint8"
                },

                {
                    tag: "attribute", id: 0x0025, name: "OperatingMode",
                    access: "RW VM", conformance: "M", quality: "P", type: "OperatingModeEnum"
                },

                {
                    tag: "attribute", id: 0x0026, name: "SupportedOperatingModes",
                    conformance: "M", default: 65526, type: "DlSupportedOperatingModes"
                },

                {
                    tag: "attribute", id: 0x0027, name: "DefaultConfigurationRegister",
                    conformance: "O", default: 0, quality: "P", type: "DlDefaultConfigurationRegister"
                },

                {
                    tag: "attribute", id: 0x0028, name: "EnableLocalProgramming",
                    access: "RW VA", conformance: "O", default: true, quality: "P", type: "bool"
                },

                {
                    tag: "attribute", id: 0x0029, name: "EnableOneTouchLocking",
                    access: "RW VM", conformance: "O", default: true, quality: "P", type: "bool"
                },

                {
                    tag: "attribute", id: 0x002a, name: "EnableInsideStatusLed",
                    access: "RW VM", conformance: "O", default: true, quality: "P", type: "bool"
                },

                {
                    tag: "attribute", id: 0x002b, name: "EnablePrivacyModeButton",
                    access: "RW VM", conformance: "O", default: true, quality: "P", type: "bool"
                },

                {
                    tag: "attribute", id: 0x002c, name: "LocalProgrammingFeatures",
                    access: "RW VA", conformance: "O", default: 0, quality: "P", type: "DlLocalProgrammingFeatures"
                },

                {
                    tag: "attribute", id: 0x0030, name: "WrongCodeEntryLimit",
                    access: "RW VA", conformance: "O", quality: "P", type: "uint8"
                },

                {
                    tag: "attribute", id: 0x0031, name: "UserCodeTemporaryDisableTime",
                    access: "RW VA", conformance: "O", quality: "P", type: "uint8"
                },

                {
                    tag: "attribute", id: 0x0032, name: "SendPinOverTheAir",
                    access: "RW VA", conformance: "O", default: true, quality: "P", type: "bool"
                },

                {
                    tag: "attribute", id: 0x0033, name: "RequirePinForRemoteOperation",
                    access: "RW VA", conformance: "O", default: true, quality: "P", type: "bool"
                },

                {
                    tag: "attribute", id: 0x0035, name: "ExpiringUserTimeout",
                    access: "RW VA", conformance: "O", quality: "P", type: "uint16"
                },

                {
                    tag: "command", id: 0x0000, name: "LockDoor",
                    conformance: "M", direction: "request",
                    children: [
                        {
                            tag: "datatype", name: "PinCode",
                            conformance: "O", type: "octstr"
                        }
                    ]
                },

                {
                    tag: "command", id: 0x0001, name: "UnlockDoor",
                    conformance: "M", direction: "request",
                    children: [
                        {
                            tag: "datatype", name: "PinCode",
                            conformance: "O", type: "octstr"
                        }
                    ]
                },

                {
                    tag: "command", id: 0x0003, name: "UnlockWithTimeout",
                    conformance: "O", direction: "request",
                    children: [
                        {
                            tag: "datatype", name: "Timeout",
                            conformance: "M", type: "uint16"
                        },

                        {
                            tag: "datatype", name: "PinCode",
                            conformance: "O", type: "octstr"
                        }
                    ]
                },

                {
                    tag: "command", id: 0x000b, name: "SetWeekDaySchedule",
                    access: "R A", conformance: "O", direction: "request",
                    children: [
                        {
                            tag: "datatype", name: "WeekDayIndex",
                            conformance: "M", type: "uint8"
                        },

                        {
                            tag: "datatype", name: "UserIndex",
                            conformance: "M", type: "uint16"
                        },

                        {
                            tag: "datatype", name: "DaysMask",
                            conformance: "M", type: "DaysMaskMap"
                        },

                        {
                            tag: "datatype", name: "StartHour",
                            conformance: "M", type: "uint8"
                        },

                        {
                            tag: "datatype", name: "StartMinute",
                            conformance: "M", type: "uint8"
                        },

                        {
                            tag: "datatype", name: "EndHour",
                            conformance: "M", type: "uint8"
                        },

                        {
                            tag: "datatype", name: "EndMinute",
                            conformance: "M", type: "uint8"
                        }
                    ]
                },

                {
                    tag: "command", id: 0x000c, name: "GetWeekDaySchedule",
                    access: "R A", conformance: "O", direction: "request", response: "GetWeekDayScheduleResponse",
                    children: [
                        {
                            tag: "datatype", name: "WeekDayIndex",
                            conformance: "M", type: "uint8"
                        },

                        {
                            tag: "datatype", name: "UserIndex",
                            conformance: "M", type: "uint16"
                        }
                    ]
                },

                {
                    tag: "command", id: 0x000c, name: "GetWeekDayScheduleResponse",
                    conformance: "O", direction: "response",
                    children: [
                        {
                            tag: "datatype", name: "WeekDayIndex",
                            conformance: "M", type: "uint8"
                        },

                        {
                            tag: "datatype", name: "UserIndex",
                            conformance: "M", type: "uint16"
                        },

                        {
                            tag: "datatype", name: "Status",
                            conformance: "M", type: "DlStatus"
                        },

                        {
                            tag: "datatype", name: "DaysMask",
                            conformance: "O", type: "DaysMaskMap"
                        },

                        {
                            tag: "datatype", name: "StartHour",
                            conformance: "O", type: "uint8"
                        },

                        {
                            tag: "datatype", name: "StartMinute",
                            conformance: "O", type: "uint8"
                        },

                        {
                            tag: "datatype", name: "EndHour",
                            conformance: "O", type: "uint8"
                        },

                        {
                            tag: "datatype", name: "EndMinute",
                            conformance: "O", type: "uint8"
                        }
                    ]
                },

                {
                    tag: "command", id: 0x000d, name: "ClearWeekDaySchedule",
                    access: "R A", conformance: "O", direction: "request",
                    children: [
                        {
                            tag: "datatype", name: "WeekDayIndex",
                            conformance: "M", type: "uint8"
                        },

                        {
                            tag: "datatype", name: "UserIndex",
                            conformance: "M", type: "uint16"
                        }
                    ]
                },

                {
                    tag: "command", id: 0x000e, name: "SetYearDaySchedule",
                    access: "R A", conformance: "O", direction: "request",
                    children: [
                        {
                            tag: "datatype", name: "YearDayIndex",
                            conformance: "M", type: "uint8"
                        },

                        {
                            tag: "datatype", name: "UserIndex",
                            conformance: "M", type: "uint16"
                        },

                        {
                            tag: "datatype", name: "LocalStartTime",
                            conformance: "M", type: "epoch-s"
                        },

                        {
                            tag: "datatype", name: "LocalEndTime",
                            conformance: "M", type: "epoch-s"
                        }
                    ]
                },

                {
                    tag: "command", id: 0x000f, name: "GetYearDaySchedule",
                    access: "R A", conformance: "O", direction: "request", response: "GetYearDayScheduleResponse",
                    children: [
                        {
                            tag: "datatype", name: "YearDayIndex",
                            conformance: "M", type: "uint8"
                        },

                        {
                            tag: "datatype", name: "UserIndex",
                            conformance: "M", type: "uint16"
                        }
                    ]
                },

                {
                    tag: "command", id: 0x000f, name: "GetYearDayScheduleResponse",
                    conformance: "O", direction: "response",
                    children: [
                        {
                            tag: "datatype", name: "YearDayIndex",
                            conformance: "M", type: "uint8"
                        },

                        {
                            tag: "datatype", name: "UserIndex",
                            conformance: "M", type: "uint16"
                        },

                        {
                            tag: "datatype", name: "Status",
                            conformance: "M", type: "DlStatus"
                        },

                        {
                            tag: "datatype", name: "LocalStartTime",
                            conformance: "O", type: "epoch-s"
                        },

                        {
                            tag: "datatype", name: "LocalEndTime",
                            conformance: "O", type: "epoch-s"
                        }
                    ]
                },

                {
                    tag: "command", id: 0x0010, name: "ClearYearDaySchedule",
                    access: "R A", conformance: "O", direction: "request",
                    children: [
                        {
                            tag: "datatype", name: "YearDayIndex",
                            conformance: "M", type: "uint8"
                        },

                        {
                            tag: "datatype", name: "UserIndex",
                            conformance: "M", type: "uint16"
                        }
                    ]
                },

                {
                    tag: "command", id: 0x0011, name: "SetHolidaySchedule",
                    access: "R A", conformance: "O", direction: "request",
                    children: [
                        {
                            tag: "datatype", name: "HolidayIndex",
                            conformance: "M", type: "uint8"
                        },

                        {
                            tag: "datatype", name: "LocalStartTime",
                            conformance: "M", type: "epoch-s"
                        },

                        {
                            tag: "datatype", name: "LocalEndTime",
                            conformance: "M", type: "epoch-s"
                        },

                        {
                            tag: "datatype", name: "OperatingMode",
                            conformance: "M", type: "OperatingModeEnum"
                        }
                    ]
                },

                {
                    tag: "command", id: 0x0012, name: "GetHolidaySchedule",
                    access: "R A", conformance: "O", direction: "request", response: "GetHolidayScheduleResponse",
                    children: [
                        {
                            tag: "datatype", name: "HolidayIndex",
                            conformance: "M", type: "uint8"
                        }
                    ]
                },

                {
                    tag: "command", id: 0x0012, name: "GetHolidayScheduleResponse",
                    conformance: "O", direction: "response",
                    children: [
                        {
                            tag: "datatype", name: "HolidayIndex",
                            conformance: "M", type: "uint8"
                        },

                        {
                            tag: "datatype", name: "Status",
                            conformance: "M", type: "DlStatus"
                        },

                        {
                            tag: "datatype", name: "LocalStartTime",
                            conformance: "O", type: "epoch-s"
                        },

                        {
                            tag: "datatype", name: "LocalEndTime",
                            conformance: "O", type: "epoch-s"
                        },

                        {
                            tag: "datatype", name: "OperatingMode",
                            conformance: "O", type: "OperatingModeEnum"
                        }
                    ]
                },

                {
                    tag: "command", id: 0x0013, name: "ClearHolidaySchedule",
                    access: "R A", conformance: "O", direction: "request",
                    children: [
                        {
                            tag: "datatype", name: "HolidayIndex",
                            conformance: "M", type: "uint8"
                        }
                    ]
                },

                {
                    tag: "command", id: 0x001a, name: "SetUser",
                    access: "R A", conformance: "O", direction: "request",
                    children: [
                        {
                            tag: "datatype", name: "OperationType",
                            conformance: "M", type: "DataOperationTypeEnum"
                        },

                        {
                            tag: "datatype", name: "UserIndex",
                            conformance: "M", type: "uint16"
                        },

                        {
                            tag: "datatype", name: "UserName",
                            conformance: "M", quality: "X", type: "string"
                        },

                        {
                            tag: "datatype", name: "UserUniqueId",
                            conformance: "M", quality: "X", type: "uint32"
                        },

                        {
                            tag: "datatype", name: "UserStatus",
                            conformance: "M", quality: "X", type: "UserStatusEnum"
                        },

                        {
                            tag: "datatype", name: "UserType",
                            conformance: "M", quality: "X", type: "UserTypeEnum"
                        },

                        {
                            tag: "datatype", name: "CredentialRule",
                            conformance: "M", quality: "X", type: "CredentialRuleEnum"
                        }
                    ]
                },

                {
                    tag: "command", id: 0x001b, name: "GetUser",
                    access: "R A", conformance: "O", direction: "request", response: "GetUserResponse",
                    children: [
                        {
                            tag: "datatype", name: "UserIndex",
                            conformance: "M", type: "uint16"
                        }
                    ]
                },

                {
                    tag: "command", id: 0x001c, name: "GetUserResponse",
                    conformance: "O", direction: "response",
                    children: [
                        {
                            tag: "datatype", name: "UserIndex",
                            conformance: "M", type: "uint16"
                        },

                        {
                            tag: "datatype", name: "UserName",
                            conformance: "M", quality: "X", type: "string"
                        },

                        {
                            tag: "datatype", name: "UserUniqueId",
                            conformance: "M", quality: "X", type: "uint32"
                        },

                        {
                            tag: "datatype", name: "UserStatus",
                            conformance: "M", quality: "X", type: "UserStatusEnum"
                        },

                        {
                            tag: "datatype", name: "UserType",
                            conformance: "M", quality: "X", type: "UserTypeEnum"
                        },

                        {
                            tag: "datatype", name: "CredentialRule",
                            conformance: "M", quality: "X", type: "CredentialRuleEnum"
                        },

                        {
                            tag: "datatype", name: "Credentials",
                            conformance: "M", quality: "X", type: "CredentialStruct"
                        },

                        {
                            tag: "datatype", name: "CreatorFabricIndex",
                            conformance: "M", quality: "X", type: "fabric-idx"
                        },

                        {
                            tag: "datatype", name: "LastModifiedFabricIndex",
                            conformance: "M", quality: "X", type: "fabric-idx"
                        },

                        {
                            tag: "datatype", name: "NextUserIndex",
                            conformance: "M", quality: "X", type: "uint16"
                        }
                    ]
                },

                {
                    tag: "command", id: 0x001d, name: "ClearUser",
                    access: "R A", conformance: "O", direction: "request",
                    children: [
                        {
                            tag: "datatype", name: "UserIndex",
                            conformance: "M", type: "uint16"
                        }
                    ]
                },

                {
                    tag: "command", id: 0x0022, name: "SetCredential",
                    access: "R A", conformance: "O", direction: "request", response: "SetCredentialResponse",
                    children: [
                        {
                            tag: "datatype", name: "OperationType",
                            conformance: "M", type: "DataOperationTypeEnum"
                        },

                        {
                            tag: "datatype", name: "Credential",
                            conformance: "M", type: "CredentialStruct"
                        },

                        {
                            tag: "datatype", name: "CredentialData",
                            conformance: "M", type: "octstr"
                        },

                        {
                            tag: "datatype", name: "UserIndex",
                            conformance: "M", quality: "X", type: "uint16"
                        },

                        {
                            tag: "datatype", name: "UserStatus",
                            conformance: "M", quality: "X", type: "UserStatusEnum"
                        },

                        {
                            tag: "datatype", name: "UserType",
                            conformance: "M", quality: "X", type: "UserTypeEnum"
                        }
                    ]
                },

                {
                    tag: "command", id: 0x0023, name: "SetCredentialResponse",
                    conformance: "O", direction: "response",
                    children: [
                        {
                            tag: "datatype", name: "Status",
                            conformance: "M", type: "DlStatus"
                        },

                        {
                            tag: "datatype", name: "UserIndex",
                            conformance: "M", quality: "X", type: "uint16"
                        },

                        {
                            tag: "datatype", name: "NextCredentialIndex",
                            conformance: "M", quality: "X", type: "uint16"
                        }
                    ]
                },

                {
                    tag: "command", id: 0x0024, name: "GetCredentialStatus",
                    access: "R A", conformance: "O", direction: "request", response: "GetCredentialStatusResponse",
                    children: [
                        {
                            tag: "datatype", name: "Credential",
                            conformance: "M", type: "CredentialStruct"
                        }
                    ]
                },

                {
                    tag: "command", id: 0x0025, name: "GetCredentialStatusResponse",
                    conformance: "O", direction: "response",
                    children: [
                        {
                            tag: "datatype", name: "CredentialExists",
                            conformance: "M", type: "bool"
                        },

                        {
                            tag: "datatype", name: "UserIndex",
                            conformance: "M", quality: "X", type: "uint16"
                        },

                        {
                            tag: "datatype", name: "CreatorFabricIndex",
                            conformance: "M", quality: "X", type: "fabric-idx"
                        },

                        {
                            tag: "datatype", name: "LastModifiedFabricIndex",
                            conformance: "M", quality: "X", type: "fabric-idx"
                        },

                        {
                            tag: "datatype", name: "NextCredentialIndex",
                            conformance: "M", quality: "X", type: "uint16"
                        }
                    ]
                },

                {
                    tag: "command", id: 0x0026, name: "ClearCredential",
                    access: "R A", conformance: "O", direction: "request",
                    children: [
                        {
                            tag: "datatype", name: "Credential",
                            conformance: "M", quality: "X", type: "CredentialStruct"
                        }
                    ]
                },

                {
                    tag: "event", id: 0x0000, name: "DoorLockAlarm",
                    conformance: "M", priority: "critical",
                    children: [
                        {
                            tag: "datatype", name: "AlarmCode",
                            conformance: "M", type: "AlarmCodeEnum"
                        }
                    ]
                },

                {
                    tag: "event", id: 0x0001, name: "DoorStateChange",
                    conformance: "O", priority: "critical",
                    children: [
                        {
                            tag: "datatype", name: "DoorState",
                            conformance: "M", type: "DoorStateEnum"
                        }
                    ]
                },

                {
                    tag: "event", id: 0x0002, name: "LockOperation",
                    conformance: "M", priority: "critical",
                    children: [
                        {
                            tag: "datatype", name: "LockOperationType",
                            conformance: "M", type: "LockOperationTypeEnum"
                        },

                        {
                            tag: "datatype", name: "OperationSource",
                            conformance: "M", type: "OperationSourceEnum"
                        },

                        {
                            tag: "datatype", name: "UserIndex",
                            conformance: "M", quality: "X", type: "uint16"
                        },

                        {
                            tag: "datatype", name: "FabricIndex",
                            conformance: "M", quality: "X", type: "fabric-idx"
                        },

                        {
                            tag: "datatype", name: "SourceNode",
                            conformance: "M", quality: "X", type: "node-id"
                        },

                        {
                            tag: "datatype", name: "Credentials",
                            conformance: "O", quality: "X", type: "CredentialStruct"
                        }
                    ]
                },

                {
                    tag: "event", id: 0x0003, name: "LockOperationError",
                    conformance: "M", priority: "critical",
                    children: [
                        {
                            tag: "datatype", name: "LockOperationType",
                            conformance: "M", type: "LockOperationTypeEnum"
                        },

                        {
                            tag: "datatype", name: "OperationSource",
                            conformance: "M", type: "OperationSourceEnum"
                        },

                        {
                            tag: "datatype", name: "OperationError",
                            conformance: "M", type: "OperationErrorEnum"
                        },

                        {
                            tag: "datatype", name: "UserIndex",
                            conformance: "M", quality: "X", type: "uint16"
                        },

                        {
                            tag: "datatype", name: "FabricIndex",
                            conformance: "M", quality: "X", type: "fabric-idx"
                        },

                        {
                            tag: "datatype", name: "SourceNode",
                            conformance: "M", quality: "X", type: "node-id"
                        },

                        {
                            tag: "datatype", name: "Credentials",
                            conformance: "O", quality: "X", type: "CredentialStruct"
                        }
                    ]
                },

                {
                    tag: "event", id: 0x0004, name: "LockUserChange",
                    conformance: "M", priority: "info",
                    children: [
                        {
                            tag: "datatype", name: "LockDataType",
                            conformance: "M", type: "LockDataTypeEnum"
                        },

                        {
                            tag: "datatype", name: "DataOperationType",
                            conformance: "M", type: "DataOperationTypeEnum"
                        },

                        {
                            tag: "datatype", name: "OperationSource",
                            conformance: "M", type: "OperationSourceEnum"
                        },

                        {
                            tag: "datatype", name: "UserIndex",
                            conformance: "M", quality: "X", type: "uint16"
                        },

                        {
                            tag: "datatype", name: "FabricIndex",
                            conformance: "M", quality: "X", type: "fabric-idx"
                        },

                        {
                            tag: "datatype", name: "SourceNode",
                            conformance: "M", quality: "X", type: "node-id"
                        },

                        {
                            tag: "datatype", name: "DataIndex",
                            conformance: "M", quality: "X", type: "uint16"
                        }
                    ]
                },

                {
                    tag: "datatype", name: "AlarmCodeEnum",
                    conformance: "M", type: "enum8",
                    children: [
                        {
                            tag: "datatype", id: 0x0000, name: "LockJammed",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0001, name: "LockFactoryReset",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0003, name: "LockRadioPowerCycled",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0004, name: "WrongCodeEntryLimit",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0005, name: "FrontEsceutcheonRemoved",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0006, name: "DoorForcedOpen",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0007, name: "DoorAjar",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0008, name: "ForcedUser",
                            conformance: "M"
                        }
                    ]
                },

                {
                    tag: "datatype", name: "CredentialRuleEnum",
                    conformance: "M", type: "enum8",
                    children: [
                        {
                            tag: "datatype", id: 0x0000, name: "Single",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0001, name: "Dual",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0002, name: "Tri",
                            conformance: "M"
                        }
                    ]
                },

                {
                    tag: "datatype", name: "DlCredentialRuleMask",
                    conformance: "M", type: "map8",
                    children: [
                        {
                            tag: "datatype", id: 0x0001, name: "Single",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0002, name: "Dual",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0004, name: "Tri",
                            conformance: "M"
                        }
                    ]
                },

                {
                    tag: "datatype", name: "CredentialStruct",
                    conformance: "M", type: "struct",
                    children: [
                        {
                            tag: "datatype", name: "CredentialType",
                            conformance: "M", type: "CredentialTypeEnum"
                        },

                        {
                            tag: "datatype", name: "CredentialIndex",
                            conformance: "M", type: "uint16"
                        }
                    ]
                },

                {
                    tag: "datatype", name: "CredentialTypeEnum",
                    conformance: "M", type: "enum8",
                    children: [
                        {
                            tag: "datatype", id: 0x0000, name: "ProgrammingPin",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0001, name: "Pin",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0002, name: "Rfid",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0003, name: "Fingerprint",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0004, name: "FingerVein",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0005, name: "Face",
                            conformance: "M"
                        }
                    ]
                },

                {
                    tag: "datatype", name: "DataOperationTypeEnum",
                    conformance: "M", type: "enum8",
                    children: [
                        {
                            tag: "datatype", id: 0x0000, name: "Add",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0001, name: "Clear",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0002, name: "Modify",
                            conformance: "M"
                        }
                    ]
                },

                {
                    tag: "datatype", name: "DaysMaskMap",
                    conformance: "M", type: "map8",
                    children: [
                        {
                            tag: "datatype", id: 0x0001, name: "Sunday",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0002, name: "Monday",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0004, name: "Tuesday",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0008, name: "Wednesday",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0010, name: "Thursday",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0020, name: "Friday",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0040, name: "Saturday",
                            conformance: "M"
                        }
                    ]
                },

                {
                    tag: "datatype", name: "DoorStateEnum",
                    conformance: "M", type: "enum8",
                    children: [
                        {
                            tag: "datatype", id: 0x0000, name: "DoorOpen",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0001, name: "DoorClosed",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0002, name: "DoorJammed",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0003, name: "DoorForcedOpen",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0004, name: "DoorUnspecifiedError",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0005, name: "DoorAjar",
                            conformance: "M"
                        }
                    ]
                },

                {
                    tag: "datatype", name: "LockDataTypeEnum",
                    conformance: "M", type: "enum8",
                    children: [
                        {
                            tag: "datatype", id: 0x0000, name: "Unspecified",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0001, name: "ProgrammingCode",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0002, name: "UserIndex",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0003, name: "WeekDaySchedule",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0004, name: "YearDaySchedule",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0005, name: "HolidaySchedule",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0006, name: "Pin",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0007, name: "Rfid",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0008, name: "Fingerprint",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0009, name: "FingerVein",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x000a, name: "Face",
                            conformance: "M"
                        }
                    ]
                },

                {
                    tag: "datatype", name: "LockOperationTypeEnum",
                    conformance: "M", type: "enum8",
                    children: [
                        {
                            tag: "datatype", id: 0x0000, name: "Lock",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0001, name: "Unlock",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0002, name: "NonAccessUserEvent",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0003, name: "ForcedUserEvent",
                            conformance: "M"
                        }
                    ]
                },

                {
                    tag: "datatype", name: "OperationErrorEnum",
                    conformance: "M", type: "enum8",
                    children: [
                        {
                            tag: "datatype", id: 0x0000, name: "Unspecified",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0001, name: "InvalidCredential",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0002, name: "DisabledUserDenied",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0003, name: "Restricted",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0004, name: "InsufficientBattery",
                            conformance: "M"
                        }
                    ]
                },

                {
                    tag: "datatype", name: "OperatingModeEnum",
                    conformance: "M", type: "enum8",
                    children: [
                        {
                            tag: "datatype", id: 0x0000, name: "Normal",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0001, name: "Vacation",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0002, name: "Privacy",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0003, name: "NoRemoteLockUnlock",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0004, name: "Passage",
                            conformance: "M"
                        }
                    ]
                },

                {
                    tag: "datatype", name: "OperationSourceEnum",
                    conformance: "M", type: "enum8",
                    children: [
                        {
                            tag: "datatype", id: 0x0000, name: "Unspecified",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0001, name: "Manual",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0002, name: "ProprietaryRemote",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0003, name: "Keypad",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0004, name: "Auto",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0005, name: "Button",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0006, name: "Schedule",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0007, name: "Remote",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0008, name: "Rfid",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0009, name: "Biometric",
                            conformance: "M"
                        }
                    ]
                },

                {
                    tag: "datatype", name: "UserStatusEnum",
                    conformance: "M", type: "enum8",
                    children: [
                        {
                            tag: "datatype", id: 0x0000, name: "Available",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0001, name: "OccupiedEnabled",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0003, name: "OccupiedDisabled",
                            conformance: "M"
                        }
                    ]
                },

                {
                    tag: "datatype", name: "UserTypeEnum",
                    conformance: "M", type: "enum8",
                    children: [
                        {
                            tag: "datatype", id: 0x0000, name: "UnrestrictedUser",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0001, name: "YearDayScheduleUser",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0002, name: "WeekDayScheduleUser",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0003, name: "ProgrammingUser",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0004, name: "NonAccessUser",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0005, name: "ForcedUser",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0006, name: "DisposableUser",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0007, name: "ExpiringUser",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0008, name: "ScheduleRestrictedUser",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0009, name: "RemoteOnlyUser",
                            conformance: "M"
                        }
                    ]
                },

                {
                    tag: "datatype", name: "DlLockState",
                    conformance: "M", type: "enum8",
                    children: [
                        {
                            tag: "datatype", id: 0x0000, name: "NotFullyLocked",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0001, name: "Locked",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0002, name: "Unlocked",
                            conformance: "M"
                        }
                    ]
                },

                {
                    tag: "datatype", name: "DlLockType",
                    conformance: "M", type: "enum8",
                    children: [
                        {
                            tag: "datatype", id: 0x0000, name: "DeadBolt",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0001, name: "Magnetic",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0002, name: "Other",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0003, name: "Mortise",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0004, name: "Rim",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0005, name: "LatchBolt",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0006, name: "CylindricalLock",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0007, name: "TubularLock",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0008, name: "InterconnectedLock",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0009, name: "DeadLatch",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x000a, name: "DoorFurniture",
                            conformance: "M"
                        }
                    ]
                },

                {
                    tag: "datatype", name: "DlCredentialRulesSupport",
                    conformance: "M", type: "map8",
                    children: [
                        {
                            tag: "datatype", id: 0x0001, name: "Single",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0002, name: "Dual",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0004, name: "Tri",
                            conformance: "M"
                        }
                    ]
                },

                {
                    tag: "datatype", name: "DlSupportedOperatingModes",
                    conformance: "M", type: "map16",
                    children: [
                        {
                            tag: "datatype", id: 0x0001, name: "Normal",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0002, name: "Vacation",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0004, name: "Privacy",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0008, name: "NoRemoteLockUnlock",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0010, name: "Passage",
                            conformance: "M"
                        }
                    ]
                },

                {
                    tag: "datatype", name: "DlDefaultConfigurationRegister",
                    conformance: "M", type: "map16",
                    children: [
                        {
                            tag: "datatype", id: 0x0001, name: "EnableLocalProgrammingEnabled",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0002, name: "KeypadInterfaceDefaultAccessEnabled",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0004, name: "RemoteInterfaceDefaultAccessIsEnabled",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0020, name: "SoundEnabled",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0040, name: "AutoRelockTimeSet",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0080, name: "LedSettingsSet",
                            conformance: "M"
                        }
                    ]
                },

                {
                    tag: "datatype", name: "DlLocalProgrammingFeatures",
                    conformance: "M", type: "map8",
                    children: [
                        {
                            tag: "datatype", id: 0x0001, name: "AddUsersCredentialsSchedulesLocally",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0002, name: "ModifyUsersCredentialsSchedulesLocally",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0004, name: "ClearUsersCredentialsSchedulesLocally",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0008, name: "AdjustLockSettingsLocally",
                            conformance: "M"
                        }
                    ]
                },

                {
                    tag: "datatype", name: "DlKeypadOperationEventMask",
                    conformance: "M", type: "map16",
                    children: [
                        {
                            tag: "datatype", id: 0x0001, name: "Unknown",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0002, name: "Lock",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0004, name: "Unlock",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0008, name: "LockInvalidPin",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0010, name: "LockInvalidSchedule",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0020, name: "UnlockInvalidCode",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0040, name: "UnlockInvalidSchedule",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0080, name: "NonAccessUserOpEvent",
                            conformance: "M"
                        }
                    ]
                },

                {
                    tag: "datatype", name: "DlRemoteOperationEventMask",
                    conformance: "M", type: "map16",
                    children: [
                        {
                            tag: "datatype", id: 0x0001, name: "Unknown",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0002, name: "Lock",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0004, name: "Unlock",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0008, name: "LockInvalidCode",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0010, name: "LockInvalidSchedule",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0020, name: "UnlockInvalidCode",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0040, name: "UnlockInvalidSchedule",
                            conformance: "M"
                        }
                    ]
                },

                {
                    tag: "datatype", name: "DlManualOperationEventMask",
                    conformance: "M", type: "map16",
                    children: [
                        {
                            tag: "datatype", id: 0x0001, name: "Unknown",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0002, name: "ThumbturnLock",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0004, name: "ThumbturnUnlock",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0008, name: "OneTouchLock",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0010, name: "KeyLock",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0020, name: "KeyUnlock",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0040, name: "AutoLock",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0080, name: "ScheduleLock",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0100, name: "ScheduleUnlock",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0200, name: "ManualLock",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0400, name: "ManualUnlock",
                            conformance: "M"
                        }
                    ]
                },

                {
                    tag: "datatype", name: "DlRfidOperationEventMask",
                    conformance: "M", type: "map16",
                    children: [
                        {
                            tag: "datatype", id: 0x0001, name: "Unknown",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0002, name: "Lock",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0004, name: "Unlock",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0008, name: "LockInvalidRfid",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0010, name: "LockInvalidSchedule",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0020, name: "UnlockInvalidRfid",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0040, name: "UnlockInvalidSchedule",
                            conformance: "M"
                        }
                    ]
                },

                {
                    tag: "datatype", name: "DlKeypadProgrammingEventMask",
                    conformance: "M", type: "map16",
                    children: [
                        {
                            tag: "datatype", id: 0x0001, name: "Unknown",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0002, name: "ProgrammingPinChanged",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0004, name: "PinAdded",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0008, name: "PinCleared",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0010, name: "PinChanged",
                            conformance: "M"
                        }
                    ]
                },

                {
                    tag: "datatype", name: "DlRemoteProgrammingEventMask",
                    conformance: "M", type: "map16",
                    children: [
                        {
                            tag: "datatype", id: 0x0001, name: "Unknown",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0002, name: "ProgrammingPinChanged",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0004, name: "PinAdded",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0008, name: "PinCleared",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0010, name: "PinChanged",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0020, name: "RfidCodeAdded",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0040, name: "RfidCodeCleared",
                            conformance: "M"
                        }
                    ]
                },

                {
                    tag: "datatype", name: "DlRfidProgrammingEventMask",
                    conformance: "M", type: "map16",
                    children: [
                        {
                            tag: "datatype", id: 0x0001, name: "Unknown",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0020, name: "RfidCodeAdded",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0040, name: "RfidCodeCleared",
                            conformance: "M"
                        }
                    ]
                },

                {
                    tag: "datatype", name: "DlStatus",
                    conformance: "M", type: "enum8",
                    children: [
                        {
                            tag: "datatype", id: 0x0000, name: "Success",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0001, name: "Failure",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0002, name: "Duplicate",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0003, name: "Occupied",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0085, name: "InvalidField",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0089, name: "ResourceExhausted",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x008b, name: "NotFound",
                            conformance: "M"
                        }
                    ]
                },

                {
                    tag: "datatype", name: "DoorLockFeature",
                    conformance: "M", type: "map32",
                    children: [
                        {
                            tag: "datatype", id: 0x0001, name: "PinCredential",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0002, name: "RfidCredential",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0004, name: "FingerCredentials",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0008, name: "Logging",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0010, name: "WeekDayAccessSchedules",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0020, name: "DoorPositionSensor",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0040, name: "FaceCredentials",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0080, name: "CredentialsOverTheAirAccess",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0100, name: "User",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0200, name: "Notification",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0400, name: "YearDayAccessSchedules",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0800, name: "HolidaySchedules",
                            conformance: "M"
                        }
                    ]
                },

                {
                    tag: "datatype", name: "DoorLockSetPinOrIdStatus",
                    conformance: "M", type: "enum8",
                    children: [
                        {
                            tag: "datatype", id: 0x0000, name: "Success",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0001, name: "GeneralFailure",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0002, name: "MemoryFull",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0003, name: "DuplicateCodeError",
                            conformance: "M"
                        }
                    ]
                },

                {
                    tag: "datatype", name: "DoorLockOperationEventCode",
                    conformance: "M", type: "enum8",
                    children: [
                        {
                            tag: "datatype", id: 0x0000, name: "UnknownOrMfgSpecific",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0001, name: "Lock",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0002, name: "Unlock",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0003, name: "LockInvalidPinOrId",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0004, name: "LockInvalidSchedule",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0005, name: "UnlockInvalidPinOrId",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0006, name: "UnlockInvalidSchedule",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0007, name: "OneTouchLock",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0008, name: "KeyLock",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0009, name: "KeyUnlock",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x000a, name: "AutoLock",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x000b, name: "ScheduleLock",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x000c, name: "ScheduleUnlock",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x000d, name: "ManualLock",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x000e, name: "ManualUnlock",
                            conformance: "M"
                        }
                    ]
                },

                {
                    tag: "datatype", name: "DoorLockProgrammingEventCode",
                    conformance: "M", type: "enum8",
                    children: [
                        {
                            tag: "datatype", id: 0x0000, name: "UnknownOrMfgSpecific",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0001, name: "MasterCodeChanged",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0002, name: "PinAdded",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0003, name: "PinDeleted",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0004, name: "PinChanged",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0005, name: "IdAdded",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0006, name: "IdDeleted",
                            conformance: "M"
                        }
                    ]
                },

                {
                    tag: "datatype", name: "DoorLockUserStatus",
                    conformance: "M", type: "enum8",
                    children: [
                        {
                            tag: "datatype", id: 0x0000, name: "Available",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0001, name: "OccupiedEnabled",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0003, name: "OccupiedDisabled",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x00ff, name: "NotSupported",
                            conformance: "M"
                        }
                    ]
                },

                {
                    tag: "datatype", name: "DoorLockUserType",
                    conformance: "M", type: "enum8",
                    children: [
                        {
                            tag: "datatype", id: 0x0000, name: "Unrestricted",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0001, name: "YearDayScheduleUser",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0002, name: "WeekDayScheduleUser",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0003, name: "MasterUser",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0004, name: "NonAccessUser",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x00ff, name: "NotSupported",
                            conformance: "M"
                        }
                    ]
                },

                {
                    tag: "datatype", name: "DoorLockDayOfWeek",
                    conformance: "M", type: "map8",
                    children: [
                        {
                            tag: "datatype", id: 0x0001, name: "Sunday",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0002, name: "Monday",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0004, name: "Tuesday",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0008, name: "Wednesday",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0010, name: "Thursday",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0020, name: "Friday",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0040, name: "Saturday",
                            conformance: "M"
                        }
                    ]
                }
            ]
        },

        {
            tag: "cluster", id: 0x0037, name: "EthernetNetworkDiagnostics",
            description: "Ethernet Network Diagnostics",
            children: [
                {
                    tag: "attribute", id: 0x0000, name: "PhyRate",
                    conformance: "O", quality: "X", type: "PhyRateEnum"
                },

                {
                    tag: "attribute", id: 0x0001, name: "FullDuplex",
                    conformance: "O", quality: "X", type: "bool"
                },

                {
                    tag: "attribute", id: 0x0002, name: "PacketRxCount",
                    conformance: "O", default: 0, type: "uint64"
                },

                {
                    tag: "attribute", id: 0x0003, name: "PacketTxCount",
                    conformance: "O", default: 0, type: "uint64"
                },

                {
                    tag: "attribute", id: 0x0004, name: "TxErrCount",
                    conformance: "O", default: 0, type: "uint64"
                },

                {
                    tag: "attribute", id: 0x0005, name: "CollisionCount",
                    conformance: "O", default: 0, type: "uint64"
                },

                {
                    tag: "attribute", id: 0x0006, name: "EthernetOverrunCount",
                    conformance: "O", default: 0, type: "uint64"
                },

                {
                    tag: "attribute", id: 0x0007, name: "CarrierDetect",
                    conformance: "O", quality: "X", type: "bool"
                },

                {
                    tag: "attribute", id: 0x0008, name: "TimeSinceReset",
                    conformance: "O", default: 0, type: "uint64"
                },

                {
                    tag: "command", id: 0x0000, name: "ResetCounts",
                    conformance: "M", direction: "request"
                },

                {
                    tag: "datatype", name: "PhyRateEnum",
                    conformance: "M", type: "enum8",
                    children: [
                        {
                            tag: "datatype", id: 0x0000, name: "Rate10M",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0001, name: "Rate100M",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0002, name: "Rate1G",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0003, name: "Rate25G",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0004, name: "Rate5G",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0005, name: "Rate10G",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0006, name: "Rate40G",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0007, name: "Rate100G",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0008, name: "Rate200G",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0009, name: "Rate400G",
                            conformance: "M"
                        }
                    ]
                },

                {
                    tag: "datatype", name: "EthernetNetworkDiagnosticsFeature",
                    conformance: "M", type: "map32",
                    children: [
                        {
                            tag: "datatype", id: 0x0001, name: "PacketCounts",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0002, name: "ErrorCounts",
                            conformance: "M"
                        }
                    ]
                }
            ]
        },

        {
            tag: "cluster", id: 0x0202, name: "FanControl",
            description: "Fan Control",
            children: [
                {
                    tag: "attribute", id: 0x0000, name: "FanMode",
                    access: "RW", conformance: "M", default: 0, type: "FanModeType"
                },

                {
                    tag: "attribute", id: 0x0001, name: "FanModeSequence",
                    access: "RW", conformance: "M", default: 2, type: "FanModeSequenceType"
                },

                {
                    tag: "attribute", id: 0x0002, name: "PercentSetting",
                    access: "RW", conformance: "M", default: 0, quality: "X", type: "uint8"
                },

                {
                    tag: "attribute", id: 0x0003, name: "PercentCurrent",
                    conformance: "M", default: 0, type: "uint8"
                },

                {
                    tag: "attribute", id: 0x0004, name: "SpeedMax",
                    conformance: "O", default: 1, type: "uint8"
                },

                {
                    tag: "attribute", id: 0x0005, name: "SpeedSetting",
                    access: "RW", conformance: "O", default: 0, quality: "X", type: "uint8"
                },

                {
                    tag: "attribute", id: 0x0006, name: "SpeedCurrent",
                    conformance: "O", default: 0, type: "uint8"
                },

                {
                    tag: "attribute", id: 0x0007, name: "RockSupport",
                    conformance: "O", default: 0, type: "map8"
                },

                {
                    tag: "attribute", id: 0x0008, name: "RockSetting",
                    access: "RW", conformance: "O", default: 0, type: "map8"
                },

                {
                    tag: "attribute", id: 0x0009, name: "WindSupport",
                    conformance: "O", default: 0, type: "map8"
                },

                {
                    tag: "attribute", id: 0x000a, name: "WindSetting",
                    access: "RW", conformance: "O", default: 0, type: "map8"
                },

                {
                    tag: "datatype", name: "FanControlFeature",
                    conformance: "M", type: "map32",
                    children: [
                        {
                            tag: "datatype", id: 0x0001, name: "MultiSpeed",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0002, name: "Auto",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0004, name: "Rocking",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0008, name: "Wind",
                            conformance: "M"
                        }
                    ]
                },

                {
                    tag: "datatype", name: "FanModeType",
                    conformance: "M", type: "enum8",
                    children: [
                        {
                            tag: "datatype", id: 0x0000, name: "Off",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0001, name: "Low",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0002, name: "Medium",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0003, name: "High",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0004, name: "On",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0005, name: "Auto",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0006, name: "Smart",
                            conformance: "M"
                        }
                    ]
                },

                {
                    tag: "datatype", name: "FanModeSequenceType",
                    conformance: "M", type: "enum8",
                    children: [
                        {
                            tag: "datatype", id: 0x0000, name: "OffLowMedHigh",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0001, name: "OffLowHigh",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0002, name: "OffLowMedHighAuto",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0003, name: "OffLowHighAuto",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0004, name: "OffOnAuto",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0005, name: "OffOn",
                            conformance: "M"
                        }
                    ]
                },

                {
                    tag: "datatype", name: "RockSupportMask",
                    conformance: "M", type: "map8",
                    children: [
                        {
                            tag: "datatype", id: 0x0001, name: "RockLeftRight",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0002, name: "RockUpDown",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0004, name: "RockRound",
                            conformance: "M"
                        }
                    ]
                },

                {
                    tag: "datatype", name: "WindSupportMask",
                    conformance: "M", type: "map8",
                    children: [
                        {
                            tag: "datatype", id: 0x0001, name: "SleepWind",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0002, name: "NaturalWind",
                            conformance: "M"
                        }
                    ]
                },

                {
                    tag: "datatype", name: "WindSettingMask",
                    conformance: "M", type: "map8",
                    children: [
                        {
                            tag: "datatype", id: 0x0001, name: "SleepWind",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0002, name: "NaturalWind",
                            conformance: "M"
                        }
                    ]
                }
            ]
        },

        {
            tag: "cluster", id: 0xfff1fc06, name: "FaultInjection",
            description: "Fault Injection",
            children: [
                {
                    tag: "command", id: 0x0000, name: "FailAtFault",
                    access: "R M", conformance: "M", direction: "request",
                    children: [
                        {
                            tag: "datatype", name: "Type",
                            conformance: "M", type: "FaultType"
                        },

                        {
                            tag: "datatype", name: "Id",
                            conformance: "M", type: "uint32"
                        },

                        {
                            tag: "datatype", name: "NumCallsToSkip",
                            conformance: "M", type: "uint32"
                        },

                        {
                            tag: "datatype", name: "NumCallsToFail",
                            conformance: "M", type: "uint32"
                        },

                        {
                            tag: "datatype", name: "TakeMutex",
                            conformance: "M", type: "bool"
                        }
                    ]
                },

                {
                    tag: "command", id: 0x0001, name: "FailRandomlyAtFault",
                    access: "R M", conformance: "M", direction: "request",
                    children: [
                        {
                            tag: "datatype", name: "Type",
                            conformance: "M", type: "FaultType"
                        },

                        {
                            tag: "datatype", name: "Id",
                            conformance: "M", type: "uint32"
                        },

                        {
                            tag: "datatype", name: "Percentage",
                            conformance: "M", type: "uint8"
                        }
                    ]
                },

                {
                    tag: "datatype", name: "FaultType",
                    conformance: "M", type: "enum8",
                    children: [
                        {
                            tag: "datatype", id: 0x0000, name: "Unspecified",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0001, name: "SystemFault",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0002, name: "InetFault",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0003, name: "ChipFault",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0004, name: "CertFault",
                            conformance: "M"
                        }
                    ]
                }
            ]
        },

        {
            tag: "cluster", id: 0x0040, name: "FixedLabel",
            description: "Fixed Label",
            children: [
                {
                    tag: "attribute", id: 0x0000, name: "LabelList",
                    conformance: "M", type: "list",
                    children: [
                        {
                            tag: "datatype", name: "entry",
                            type: "LabelStruct"
                        }
                    ]
                },

                {
                    tag: "datatype", name: "LabelStruct",
                    conformance: "M", type: "struct",
                    children: [
                        {
                            tag: "datatype", name: "Label",
                            conformance: "M", type: "string"
                        },

                        {
                            tag: "datatype", name: "Value",
                            conformance: "M", type: "string"
                        }
                    ]
                }
            ]
        },

        {
            tag: "cluster", id: 0x0404, name: "FlowMeasurement",
            description: "Flow Measurement",
            children: [
                {
                    tag: "attribute", id: 0x0000, name: "FlowMeasuredValue",
                    conformance: "M", quality: "X", type: "uint16"
                },

                {
                    tag: "attribute", id: 0x0001, name: "FlowMinMeasuredValue",
                    conformance: "M", quality: "X", type: "uint16"
                },

                {
                    tag: "attribute", id: 0x0002, name: "FlowMaxMeasuredValue",
                    conformance: "M", quality: "X", type: "uint16"
                },

                {
                    tag: "attribute", id: 0x0003, name: "FlowTolerance",
                    conformance: "O", default: 0, type: "uint16"
                }
            ]
        },

        {
            tag: "cluster", id: 0x0030, name: "GeneralCommissioning",
            description: "General Commissioning",
            children: [
                {
                    tag: "attribute", id: 0x0000, name: "Breadcrumb",
                    access: "RW VA", conformance: "M", default: 0, type: "uint64"
                },

                {
                    tag: "attribute", id: 0x0001, name: "BasicCommissioningInfo",
                    conformance: "M", type: "BasicCommissioningInfo"
                },

                {
                    tag: "attribute", id: 0x0002, name: "RegulatoryConfig",
                    conformance: "M", type: "RegulatoryLocationType"
                },

                {
                    tag: "attribute", id: 0x0003, name: "LocationCapability",
                    conformance: "M", type: "RegulatoryLocationType"
                },

                {
                    tag: "attribute", id: 0x0004, name: "SupportsConcurrentConnection",
                    conformance: "M", default: true, type: "bool"
                },

                {
                    tag: "command", id: 0x0000, name: "ArmFailSafe",
                    access: "R A", conformance: "M", direction: "request", response: "ArmFailSafeResponse",
                    children: [
                        {
                            tag: "datatype", name: "ExpiryLengthSeconds",
                            conformance: "M", type: "uint16"
                        },

                        {
                            tag: "datatype", name: "Breadcrumb",
                            conformance: "M", type: "uint64"
                        }
                    ]
                },

                {
                    tag: "command", id: 0x0001, name: "ArmFailSafeResponse",
                    conformance: "M", direction: "response",
                    children: [
                        {
                            tag: "datatype", name: "ErrorCode",
                            conformance: "M", type: "CommissioningError"
                        },

                        {
                            tag: "datatype", name: "DebugText",
                            conformance: "M", type: "string"
                        }
                    ]
                },

                {
                    tag: "command", id: 0x0002, name: "SetRegulatoryConfig",
                    access: "R A", conformance: "M", direction: "request", response: "SetRegulatoryConfigResponse",
                    children: [
                        {
                            tag: "datatype", name: "NewRegulatoryConfig",
                            conformance: "M", type: "RegulatoryLocationType"
                        },

                        {
                            tag: "datatype", name: "CountryCode",
                            conformance: "M", type: "string"
                        },

                        {
                            tag: "datatype", name: "Breadcrumb",
                            conformance: "M", type: "uint64"
                        }
                    ]
                },

                {
                    tag: "command", id: 0x0003, name: "SetRegulatoryConfigResponse",
                    conformance: "M", direction: "response",
                    children: [
                        {
                            tag: "datatype", name: "ErrorCode",
                            conformance: "M", type: "CommissioningError"
                        },

                        {
                            tag: "datatype", name: "DebugText",
                            conformance: "M", type: "string"
                        }
                    ]
                },

                {
                    tag: "command", id: 0x0004, name: "CommissioningComplete",
                    access: "R F A", conformance: "M", direction: "request", response: "CommissioningCompleteResponse"
                },

                {
                    tag: "command", id: 0x0005, name: "CommissioningCompleteResponse",
                    conformance: "M", direction: "response",
                    children: [
                        {
                            tag: "datatype", name: "ErrorCode",
                            conformance: "M", type: "CommissioningError"
                        },

                        {
                            tag: "datatype", name: "DebugText",
                            conformance: "M", type: "string"
                        }
                    ]
                },

                {
                    tag: "datatype", name: "CommissioningError",
                    conformance: "M", type: "enum8",
                    children: [
                        {
                            tag: "datatype", id: 0x0000, name: "Ok",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0001, name: "ValueOutsideRange",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0002, name: "InvalidAuthentication",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0003, name: "NoFailSafe",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0004, name: "BusyWithOtherAdmin",
                            conformance: "M"
                        }
                    ]
                },

                {
                    tag: "datatype", name: "RegulatoryLocationType",
                    conformance: "M", type: "enum8",
                    children: [
                        {
                            tag: "datatype", id: 0x0000, name: "Indoor",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0001, name: "Outdoor",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0002, name: "IndoorOutdoor",
                            conformance: "M"
                        }
                    ]
                },

                {
                    tag: "datatype", name: "BasicCommissioningInfo",
                    conformance: "M", type: "struct",
                    children: [
                        {
                            tag: "datatype", name: "FailSafeExpiryLengthSeconds",
                            conformance: "M", type: "uint16"
                        },

                        {
                            tag: "datatype", name: "MaxCumulativeFailsafeSeconds",
                            conformance: "M", type: "uint16"
                        }
                    ]
                }
            ]
        },

        {
            tag: "cluster", id: 0x0033, name: "GeneralDiagnostics",
            description: "General Diagnostics",
            children: [
                {
                    tag: "attribute", id: 0x0000, name: "NetworkInterfaces",
                    conformance: "M", type: "list",
                    children: [
                        {
                            tag: "datatype", name: "entry",
                            type: "NetworkInterface"
                        }
                    ]
                },

                {
                    tag: "attribute", id: 0x0001, name: "RebootCount",
                    conformance: "M", default: 0, type: "uint16"
                },

                {
                    tag: "attribute", id: 0x0002, name: "UpTime",
                    conformance: "O", default: 0, type: "uint64"
                },

                {
                    tag: "attribute", id: 0x0003, name: "TotalOperationalHours",
                    conformance: "O", default: 0, type: "uint32"
                },

                {
                    tag: "attribute", id: 0x0004, name: "BootReasons",
                    conformance: "O", type: "BootReasonEnum"
                },

                {
                    tag: "attribute", id: 0x0005, name: "ActiveHardwareFaults",
                    conformance: "O", type: "list",
                    children: [
                        {
                            tag: "datatype", name: "entry",
                            type: "HardwareFaultEnum"
                        }
                    ]
                },

                {
                    tag: "attribute", id: 0x0006, name: "ActiveRadioFaults",
                    conformance: "O", type: "list",
                    children: [
                        {
                            tag: "datatype", name: "entry",
                            type: "RadioFaultEnum"
                        }
                    ]
                },

                {
                    tag: "attribute", id: 0x0007, name: "ActiveNetworkFaults",
                    conformance: "O", type: "list",
                    children: [
                        {
                            tag: "datatype", name: "entry",
                            type: "NetworkFaultEnum"
                        }
                    ]
                },

                {
                    tag: "attribute", id: 0x0008, name: "TestEventTriggersEnabled",
                    conformance: "M", type: "bool"
                },

                {
                    tag: "command", id: 0x0000, name: "TestEventTrigger",
                    access: "R M", conformance: "M", direction: "request",
                    children: [
                        {
                            tag: "datatype", name: "EnableKey",
                            conformance: "M", type: "octstr"
                        },

                        {
                            tag: "datatype", name: "EventTrigger",
                            conformance: "M", type: "uint64"
                        }
                    ]
                },

                {
                    tag: "event", id: 0x0000, name: "HardwareFaultChange",
                    conformance: "O", priority: "critical",
                    children: [
                        {
                            tag: "datatype", name: "Current",
                            conformance: "M", type: "HardwareFaultEnum"
                        },

                        {
                            tag: "datatype", name: "Previous",
                            conformance: "M", type: "HardwareFaultEnum"
                        }
                    ]
                },

                {
                    tag: "event", id: 0x0001, name: "RadioFaultChange",
                    conformance: "O", priority: "critical",
                    children: [
                        {
                            tag: "datatype", name: "Current",
                            conformance: "M", type: "RadioFaultEnum"
                        },

                        {
                            tag: "datatype", name: "Previous",
                            conformance: "M", type: "RadioFaultEnum"
                        }
                    ]
                },

                {
                    tag: "event", id: 0x0002, name: "NetworkFaultChange",
                    conformance: "O", priority: "critical",
                    children: [
                        {
                            tag: "datatype", name: "Current",
                            conformance: "M", type: "NetworkFaultEnum"
                        },

                        {
                            tag: "datatype", name: "Previous",
                            conformance: "M", type: "NetworkFaultEnum"
                        }
                    ]
                },

                {
                    tag: "event", id: 0x0003, name: "BootReason",
                    conformance: "M", priority: "critical",
                    children: [
                        {
                            tag: "datatype", name: "BootReason",
                            conformance: "M", type: "BootReasonEnum"
                        }
                    ]
                },

                {
                    tag: "datatype", name: "HardwareFaultEnum",
                    conformance: "M", type: "enum8",
                    children: [
                        {
                            tag: "datatype", id: 0x0000, name: "Unspecified",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0001, name: "Radio",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0002, name: "Sensor",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0003, name: "ResettableOverTemp",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0004, name: "NonResettableOverTemp",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0005, name: "PowerSource",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0006, name: "VisualDisplayFault",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0007, name: "AudioOutputFault",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0008, name: "UserInterfaceFault",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0009, name: "NonVolatileMemoryError",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x000a, name: "TamperDetected",
                            conformance: "M"
                        }
                    ]
                },

                {
                    tag: "datatype", name: "RadioFaultEnum",
                    conformance: "M", type: "enum8",
                    children: [
                        {
                            tag: "datatype", id: 0x0000, name: "Unspecified",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0001, name: "WiFiFault",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0002, name: "CellularFault",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0003, name: "ThreadFault",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0004, name: "NfcFault",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0005, name: "BleFault",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0006, name: "EthernetFault",
                            conformance: "M"
                        }
                    ]
                },

                {
                    tag: "datatype", name: "NetworkFaultEnum",
                    conformance: "M", type: "enum8",
                    children: [
                        {
                            tag: "datatype", id: 0x0000, name: "Unspecified",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0001, name: "HardwareFailure",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0002, name: "NetworkJammed",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0003, name: "ConnectionFailed",
                            conformance: "M"
                        }
                    ]
                },

                {
                    tag: "datatype", name: "BootReasonEnum",
                    conformance: "M", type: "enum8",
                    children: [
                        {
                            tag: "datatype", id: 0x0000, name: "Unspecified",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0001, name: "PowerOnReboot",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0002, name: "BrownOutReset",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0003, name: "SoftwareWatchdogReset",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0004, name: "HardwareWatchdogReset",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0005, name: "SoftwareUpdateCompleted",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0006, name: "SoftwareReset",
                            conformance: "M"
                        }
                    ]
                },

                {
                    tag: "datatype", name: "InterfaceTypeEnum",
                    conformance: "M", type: "enum8",
                    children: [
                        {
                            tag: "datatype", id: 0x0000, name: "Unspecified",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0001, name: "WiFi",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0002, name: "Ethernet",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0003, name: "Cellular",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0004, name: "Thread",
                            conformance: "M"
                        }
                    ]
                },

                {
                    tag: "datatype", name: "NetworkInterface",
                    conformance: "M", type: "struct",
                    children: [
                        {
                            tag: "datatype", name: "Name",
                            conformance: "M", type: "string"
                        },

                        {
                            tag: "datatype", name: "IsOperational",
                            conformance: "M", type: "bool"
                        },

                        {
                            tag: "datatype", name: "OffPremiseServicesReachableIPv4",
                            conformance: "M", quality: "X", type: "bool"
                        },

                        {
                            tag: "datatype", name: "OffPremiseServicesReachableIPv6",
                            conformance: "M", quality: "X", type: "bool"
                        },

                        {
                            tag: "datatype", name: "HardwareAddress",
                            conformance: "M", type: "octstr"
                        },

                        {
                            tag: "datatype", name: "IPv4Addresses",
                            conformance: "M", type: "octstr"
                        },

                        {
                            tag: "datatype", name: "IPv6Addresses",
                            conformance: "M", type: "octstr"
                        },

                        {
                            tag: "datatype", name: "Type",
                            conformance: "M", type: "InterfaceTypeEnum"
                        }
                    ]
                }
            ]
        },

        {
            tag: "cluster", id: 0x003f, name: "GroupKeyManagement",
            description: "Group Key Management",
            children: [
                {
                    tag: "attribute", id: 0x0000, name: "GroupKeyMap",
                    access: "RW VM", conformance: "M", type: "list",
                    children: [
                        {
                            tag: "datatype", name: "entry",
                            type: "GroupKeyMapStruct"
                        }
                    ]
                },

                {
                    tag: "attribute", id: 0x0001, name: "GroupTable",
                    conformance: "M", type: "list",
                    children: [
                        {
                            tag: "datatype", name: "entry",
                            type: "GroupInfoMapStruct"
                        }
                    ]
                },

                {
                    tag: "attribute", id: 0x0002, name: "MaxGroupsPerFabric",
                    conformance: "M", type: "uint16"
                },

                {
                    tag: "attribute", id: 0x0003, name: "MaxGroupKeysPerFabric",
                    conformance: "M", type: "uint16"
                },

                {
                    tag: "command", id: 0x0000, name: "KeySetWrite",
                    access: "R F A", conformance: "M", direction: "request",
                    children: [
                        {
                            tag: "datatype", name: "GroupKeySet",
                            conformance: "M", type: "GroupKeySetStruct"
                        }
                    ]
                },

                {
                    tag: "command", id: 0x0001, name: "KeySetRead",
                    access: "R F A", conformance: "M", direction: "request", response: "KeySetReadResponse",
                    children: [
                        {
                            tag: "datatype", name: "GroupKeySetId",
                            conformance: "M", type: "uint16"
                        }
                    ]
                },

                {
                    tag: "command", id: 0x0002, name: "KeySetReadResponse",
                    conformance: "M", direction: "response",
                    children: [
                        {
                            tag: "datatype", name: "GroupKeySet",
                            conformance: "M", type: "GroupKeySetStruct"
                        }
                    ]
                },

                {
                    tag: "command", id: 0x0003, name: "KeySetRemove",
                    access: "R F A", conformance: "M", direction: "request",
                    children: [
                        {
                            tag: "datatype", name: "GroupKeySetId",
                            conformance: "M", type: "uint16"
                        }
                    ]
                },

                {
                    tag: "command", id: 0x0004, name: "KeySetReadAllIndices",
                    access: "R F A", conformance: "M", direction: "request", response: "KeySetReadAllIndicesResponse",
                    children: [
                        {
                            tag: "datatype", name: "GroupKeySetIDs",
                            conformance: "M", type: "uint16"
                        }
                    ]
                },

                {
                    tag: "command", id: 0x0005, name: "KeySetReadAllIndicesResponse",
                    conformance: "M", direction: "response",
                    children: [
                        {
                            tag: "datatype", name: "GroupKeySetIDs",
                            conformance: "M", type: "uint16"
                        }
                    ]
                },

                {
                    tag: "datatype", name: "GroupKeyMapStruct",
                    access: "R F", conformance: "M", type: "struct",
                    children: [
                        {
                            tag: "datatype", name: "GroupId",
                            conformance: "M", type: "group-id"
                        },

                        {
                            tag: "datatype", name: "GroupKeySetId",
                            conformance: "M", type: "uint16"
                        }
                    ]
                },

                {
                    tag: "datatype", name: "GroupInfoMapStruct",
                    access: "R F", conformance: "M", type: "struct",
                    children: [
                        {
                            tag: "datatype", name: "GroupId",
                            conformance: "M", type: "group-id"
                        },

                        {
                            tag: "datatype", name: "Endpoints",
                            conformance: "M", type: "endpoint-no"
                        },

                        {
                            tag: "datatype", name: "GroupName",
                            conformance: "O", type: "string"
                        }
                    ]
                },

                {
                    tag: "datatype", name: "GroupKeySetStruct",
                    conformance: "M", type: "struct",
                    children: [
                        {
                            tag: "datatype", name: "GroupKeySetId",
                            conformance: "M", type: "uint16"
                        },

                        {
                            tag: "datatype", name: "GroupKeySecurityPolicy",
                            conformance: "M", type: "GroupKeySecurityPolicyEnum"
                        },

                        {
                            tag: "datatype", name: "EpochKey0",
                            conformance: "M", quality: "X", type: "octstr"
                        },

                        {
                            tag: "datatype", name: "EpochStartTime0",
                            conformance: "M", quality: "X", type: "epoch-us"
                        },

                        {
                            tag: "datatype", name: "EpochKey1",
                            conformance: "M", quality: "X", type: "octstr"
                        },

                        {
                            tag: "datatype", name: "EpochStartTime1",
                            conformance: "M", quality: "X", type: "epoch-us"
                        },

                        {
                            tag: "datatype", name: "EpochKey2",
                            conformance: "M", quality: "X", type: "octstr"
                        },

                        {
                            tag: "datatype", name: "EpochStartTime2",
                            conformance: "M", quality: "X", type: "epoch-us"
                        }
                    ]
                },

                {
                    tag: "datatype", name: "GroupKeySecurityPolicyEnum",
                    conformance: "M", type: "enum8",
                    children: [
                        {
                            tag: "datatype", id: 0x0000, name: "TrustFirst",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0001, name: "CacheAndSync",
                            conformance: "M"
                        }
                    ]
                }
            ]
        },

        {
            tag: "cluster", id: 0x0004, name: "Groups",
            description: "Groups",
            children: [
                {
                    tag: "attribute", id: 0x0000, name: "GroupNameSupport",
                    conformance: "M", type: "map8"
                },

                {
                    tag: "command", id: 0x0000, name: "AddGroup",
                    access: "R F M", conformance: "M", direction: "request", response: "AddGroupResponse",
                    children: [
                        {
                            tag: "datatype", name: "GroupId",
                            conformance: "M", type: "group-id"
                        },

                        {
                            tag: "datatype", name: "GroupName",
                            conformance: "M", type: "string"
                        }
                    ]
                },

                {
                    tag: "command", id: 0x0001, name: "ViewGroup",
                    access: "R F", conformance: "M", direction: "request", response: "ViewGroupResponse",
                    children: [
                        {
                            tag: "datatype", name: "GroupId",
                            conformance: "M", type: "group-id"
                        }
                    ]
                },

                {
                    tag: "command", id: 0x0002, name: "GetGroupMembership",
                    access: "R F", conformance: "M", direction: "request", response: "GetGroupMembershipResponse",
                    children: [
                        {
                            tag: "datatype", name: "GroupList",
                            conformance: "M", type: "group-id"
                        }
                    ]
                },

                {
                    tag: "command", id: 0x0003, name: "RemoveGroup",
                    access: "R F M", conformance: "M", direction: "request", response: "RemoveGroupResponse",
                    children: [
                        {
                            tag: "datatype", name: "GroupId",
                            conformance: "M", type: "group-id"
                        }
                    ]
                },

                {
                    tag: "command", id: 0x0004, name: "RemoveAllGroups",
                    access: "R F M", conformance: "M", direction: "request"
                },

                {
                    tag: "command", id: 0x0005, name: "AddGroupIfIdentifying",
                    access: "R F M", conformance: "M", direction: "request",
                    children: [
                        {
                            tag: "datatype", name: "GroupId",
                            conformance: "M", type: "group-id"
                        },

                        {
                            tag: "datatype", name: "GroupName",
                            conformance: "M", type: "string"
                        }
                    ]
                },

                {
                    tag: "command", id: 0x0000, name: "AddGroupResponse",
                    conformance: "M", direction: "response",
                    children: [
                        {
                            tag: "datatype", name: "Status",
                            conformance: "M", type: "enum8"
                        },

                        {
                            tag: "datatype", name: "GroupId",
                            conformance: "M", type: "group-id"
                        }
                    ]
                },

                {
                    tag: "command", id: 0x0001, name: "ViewGroupResponse",
                    conformance: "M", direction: "response",
                    children: [
                        {
                            tag: "datatype", name: "Status",
                            conformance: "M", type: "enum8"
                        },

                        {
                            tag: "datatype", name: "GroupId",
                            conformance: "M", type: "group-id"
                        },

                        {
                            tag: "datatype", name: "GroupName",
                            conformance: "M", type: "string"
                        }
                    ]
                },

                {
                    tag: "command", id: 0x0002, name: "GetGroupMembershipResponse",
                    conformance: "M", direction: "response",
                    children: [
                        {
                            tag: "datatype", name: "Capacity",
                            conformance: "M", quality: "X", type: "uint8"
                        },

                        {
                            tag: "datatype", name: "GroupList",
                            conformance: "M", type: "group-id"
                        }
                    ]
                },

                {
                    tag: "command", id: 0x0003, name: "RemoveGroupResponse",
                    conformance: "M", direction: "response",
                    children: [
                        {
                            tag: "datatype", name: "Status",
                            conformance: "M", type: "enum8"
                        },

                        {
                            tag: "datatype", name: "GroupId",
                            conformance: "M", type: "group-id"
                        }
                    ]
                },

                {
                    tag: "datatype", name: "GroupsFeature",
                    conformance: "M", type: "map32",
                    children: [
                        {
                            tag: "datatype", id: 0x0001, name: "GroupNames",
                            conformance: "M"
                        }
                    ]
                }
            ]
        },

        {
            tag: "cluster", id: 0x0003, name: "Identify",
            description: "Identify",
            children: [
                {
                    tag: "attribute", id: 0x0000, name: "IdentifyTime",
                    access: "RW", conformance: "M", default: 0, type: "uint16"
                },

                {
                    tag: "attribute", id: 0x0001, name: "IdentifyType",
                    conformance: "M", default: 0, type: "enum8"
                },

                {
                    tag: "command", id: 0x0000, name: "Identify",
                    access: "R M", conformance: "M", direction: "request",
                    children: [
                        {
                            tag: "datatype", name: "IdentifyTime",
                            conformance: "M", type: "uint16"
                        }
                    ]
                },

                {
                    tag: "command", id: 0x0040, name: "TriggerEffect",
                    access: "R M", conformance: "O", direction: "request",
                    children: [
                        {
                            tag: "datatype", name: "EffectIdentifier",
                            conformance: "M", type: "IdentifyEffectIdentifier"
                        },

                        {
                            tag: "datatype", name: "EffectVariant",
                            conformance: "M", type: "IdentifyEffectVariant"
                        }
                    ]
                },

                {
                    tag: "datatype", name: "IdentifyIdentifyType",
                    conformance: "M", type: "enum8",
                    children: [
                        {
                            tag: "datatype", id: 0x0000, name: "None",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0001, name: "VisibleLight",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0002, name: "VisibleLed",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0003, name: "AudibleBeep",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0004, name: "Display",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0005, name: "Actuator",
                            conformance: "M"
                        }
                    ]
                },

                {
                    tag: "datatype", name: "IdentifyEffectIdentifier",
                    conformance: "M", type: "enum8",
                    children: [
                        {
                            tag: "datatype", id: 0x0000, name: "Blink",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0001, name: "Breathe",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0002, name: "Okay",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x000b, name: "ChannelChange",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x00fe, name: "FinishEffect",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x00ff, name: "StopEffect",
                            conformance: "M"
                        }
                    ]
                },

                {
                    tag: "datatype", name: "IdentifyEffectVariant",
                    conformance: "M", type: "enum8",
                    children: [
                        {
                            tag: "datatype", id: 0x0000, name: "Default",
                            conformance: "M"
                        }
                    ]
                }
            ]
        },

        {
            tag: "cluster", id: 0x0400, name: "IlluminanceMeasurement",
            description: "Illuminance Measurement",
            children: [
                {
                    tag: "attribute", id: 0x0000, name: "IllumMeasuredValue",
                    conformance: "M", default: 0, quality: "X P", type: "uint16"
                },

                {
                    tag: "attribute", id: 0x0001, name: "IllumMinMeasuredValue",
                    conformance: "M", quality: "X", type: "uint16"
                },

                {
                    tag: "attribute", id: 0x0002, name: "IllumMaxMeasuredValue",
                    conformance: "M", quality: "X", type: "uint16"
                },

                {
                    tag: "attribute", id: 0x0003, name: "IllumTolerance",
                    conformance: "O", type: "uint16"
                },

                {
                    tag: "attribute", id: 0x0004, name: "IllumLightSensorType",
                    conformance: "O", default: 255, quality: "X", type: "enum8"
                },

                {
                    tag: "datatype", name: "LightSensorType",
                    conformance: "M", type: "enum8",
                    children: [
                        {
                            tag: "datatype", id: 0x0000, name: "Photodiode",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0001, name: "Cmos",
                            conformance: "M"
                        }
                    ]
                }
            ]
        },

        {
            tag: "cluster", id: 0x0509, name: "KeypadInput",
            description: "Keypad Input",
            children: [
                {
                    tag: "command", id: 0x0000, name: "SendKey",
                    conformance: "M", direction: "request", response: "SendKeyResponse",
                    children: [
                        {
                            tag: "datatype", name: "KeyCode",
                            conformance: "M", type: "CecKeyCode"
                        }
                    ]
                },

                {
                    tag: "command", id: 0x0001, name: "SendKeyResponse",
                    conformance: "M", direction: "response",
                    children: [
                        {
                            tag: "datatype", name: "Status",
                            conformance: "M", type: "KeypadInputStatusEnum"
                        }
                    ]
                },

                {
                    tag: "datatype", name: "KeypadInputStatusEnum",
                    conformance: "M", type: "enum8",
                    children: [
                        {
                            tag: "datatype", id: 0x0000, name: "Success",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0001, name: "UnsupportedKey",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0002, name: "InvalidKeyInCurrentState",
                            conformance: "M"
                        }
                    ]
                },

                {
                    tag: "datatype", name: "CecKeyCode",
                    conformance: "M", type: "enum8",
                    children: [
                        {
                            tag: "datatype", id: 0x0000, name: "Select",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0001, name: "Up",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0002, name: "Down",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0003, name: "Left",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0004, name: "Right",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0005, name: "RightUp",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0006, name: "RightDown",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0007, name: "LeftUp",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0008, name: "LeftDown",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0009, name: "RootMenu",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x000a, name: "SetupMenu",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x000b, name: "ContentsMenu",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x000c, name: "FavoriteMenu",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x000d, name: "Exit",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0010, name: "MediaTopMenu",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0011, name: "MediaContextSensitiveMenu",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x001d, name: "NumberEntryMode",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x001e, name: "Number11",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x001f, name: "Number12",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0020, name: "Number0OrNumber10",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0021, name: "Numbers1",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0022, name: "Numbers2",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0023, name: "Numbers3",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0024, name: "Numbers4",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0025, name: "Numbers5",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0026, name: "Numbers6",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0027, name: "Numbers7",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0028, name: "Numbers8",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0029, name: "Numbers9",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x002a, name: "Dot",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x002b, name: "Enter",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x002c, name: "Clear",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x002f, name: "NextFavorite",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0030, name: "ChannelUp",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0031, name: "ChannelDown",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0032, name: "PreviousChannel",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0033, name: "SoundSelect",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0034, name: "InputSelect",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0035, name: "DisplayInformation",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0036, name: "Help",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0037, name: "PageUp",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0038, name: "PageDown",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0040, name: "Power",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0041, name: "VolumeUp",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0042, name: "VolumeDown",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0043, name: "Mute",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0044, name: "Play",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0045, name: "Stop",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0046, name: "Pause",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0047, name: "Record",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0048, name: "Rewind",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0049, name: "FastForward",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x004a, name: "Eject",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x004b, name: "Forward",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x004c, name: "Backward",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x004d, name: "StopRecord",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x004e, name: "PauseRecord",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x004f, name: "Reserved",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0050, name: "Angle",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0051, name: "SubPicture",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0052, name: "VideoOnDemand",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0053, name: "ElectronicProgramGuide",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0054, name: "TimerProgramming",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0055, name: "InitialConfiguration",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0056, name: "SelectBroadcastType",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0057, name: "SelectSoundPresentation",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0060, name: "PlayFunction",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0061, name: "PausePlayFunction",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0062, name: "RecordFunction",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0063, name: "PauseRecordFunction",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0064, name: "StopFunction",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0065, name: "MuteFunction",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0066, name: "RestoreVolumeFunction",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0067, name: "TuneFunction",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0068, name: "SelectMediaFunction",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0069, name: "SelectAvInputFunction",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x006a, name: "SelectAudioInputFunction",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x006b, name: "PowerToggleFunction",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x006c, name: "PowerOffFunction",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x006d, name: "PowerOnFunction",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0071, name: "F1Blue",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0072, name: "F2Red",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0073, name: "F3Green",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0074, name: "F4Yellow",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0075, name: "F5",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0076, name: "Data",
                            conformance: "M"
                        }
                    ]
                },

                {
                    tag: "datatype", name: "KeypadInputFeature",
                    conformance: "M", type: "map32",
                    children: [
                        {
                            tag: "datatype", id: 0x0001, name: "NavigationKeyCodes",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0002, name: "LocationKeys",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0004, name: "NumberKeys",
                            conformance: "M"
                        }
                    ]
                }
            ]
        },

        {
            tag: "cluster", id: 0x0008, name: "LevelControl",
            description: "Level Control",
            children: [
                {
                    tag: "attribute", id: 0x0000, name: "CurrentLevel",
                    conformance: "M", default: 0, quality: "X", type: "uint8"
                },

                {
                    tag: "attribute", id: 0x0001, name: "LevelControlRemainingTime",
                    conformance: "O", default: 0, type: "uint16"
                },

                {
                    tag: "attribute", id: 0x0002, name: "MinimumLevel",
                    conformance: "O", default: 0, type: "uint8"
                },

                {
                    tag: "attribute", id: 0x0003, name: "MaximumLevel",
                    conformance: "O", default: 254, type: "uint8"
                },

                {
                    tag: "attribute", id: 0x0004, name: "CurrentFrequency",
                    conformance: "O", default: 0, type: "uint16"
                },

                {
                    tag: "attribute", id: 0x0005, name: "MinFrequency",
                    conformance: "O", default: 0, type: "uint16"
                },

                {
                    tag: "attribute", id: 0x0006, name: "MaxFrequency",
                    conformance: "O", default: 0, type: "uint16"
                },

                {
                    tag: "attribute", id: 0x0010, name: "OnOffTransitionTime",
                    access: "RW", conformance: "O", default: 0, type: "uint16"
                },

                {
                    tag: "attribute", id: 0x0011, name: "OnLevel",
                    access: "RW", conformance: "M", quality: "X", type: "uint8"
                },

                {
                    tag: "attribute", id: 0x0012, name: "OnTransitionTime",
                    access: "RW", conformance: "O", quality: "X", type: "uint16"
                },

                {
                    tag: "attribute", id: 0x0013, name: "OffTransitionTime",
                    access: "RW", conformance: "O", quality: "X", type: "uint16"
                },

                {
                    tag: "attribute", id: 0x0014, name: "DefaultMoveRate",
                    access: "RW", conformance: "O", quality: "X", type: "uint8"
                },

                {
                    tag: "attribute", id: 0x000f, name: "Options",
                    access: "RW", conformance: "M", default: 0, type: "LevelControlOptions"
                },

                {
                    tag: "attribute", id: 0x4000, name: "StartUpCurrentLevel",
                    access: "RW VM", conformance: "O", quality: "X", type: "uint8"
                },

                {
                    tag: "command", id: 0x0000, name: "MoveToLevel",
                    conformance: "M", direction: "request",
                    children: [
                        {
                            tag: "datatype", name: "Level",
                            conformance: "M", type: "uint8"
                        },

                        {
                            tag: "datatype", name: "TransitionTime",
                            conformance: "M", quality: "X", type: "uint16"
                        },

                        {
                            tag: "datatype", name: "OptionsMask",
                            conformance: "M", type: "LevelControlOptions"
                        },

                        {
                            tag: "datatype", name: "OptionsOverride",
                            conformance: "M", type: "LevelControlOptions"
                        }
                    ]
                },

                {
                    tag: "command", id: 0x0001, name: "Move",
                    conformance: "M", direction: "request",
                    children: [
                        {
                            tag: "datatype", name: "MoveMode",
                            conformance: "M", type: "MoveMode"
                        },

                        {
                            tag: "datatype", name: "Rate",
                            conformance: "M", quality: "X", type: "uint8"
                        },

                        {
                            tag: "datatype", name: "OptionsMask",
                            conformance: "M", type: "LevelControlOptions"
                        },

                        {
                            tag: "datatype", name: "OptionsOverride",
                            conformance: "M", type: "LevelControlOptions"
                        }
                    ]
                },

                {
                    tag: "command", id: 0x0002, name: "Step",
                    conformance: "M", direction: "request",
                    children: [
                        {
                            tag: "datatype", name: "StepMode",
                            conformance: "M", type: "StepMode"
                        },

                        {
                            tag: "datatype", name: "StepSize",
                            conformance: "M", type: "uint8"
                        },

                        {
                            tag: "datatype", name: "TransitionTime",
                            conformance: "M", quality: "X", type: "uint16"
                        },

                        {
                            tag: "datatype", name: "OptionsMask",
                            conformance: "M", type: "LevelControlOptions"
                        },

                        {
                            tag: "datatype", name: "OptionsOverride",
                            conformance: "M", type: "LevelControlOptions"
                        }
                    ]
                },

                {
                    tag: "command", id: 0x0003, name: "Stop",
                    conformance: "M", direction: "request",
                    children: [
                        {
                            tag: "datatype", name: "OptionsMask",
                            conformance: "M", type: "LevelControlOptions"
                        },

                        {
                            tag: "datatype", name: "OptionsOverride",
                            conformance: "M", type: "LevelControlOptions"
                        }
                    ]
                },

                {
                    tag: "command", id: 0x0004, name: "MoveToLevelWithOnOff",
                    conformance: "M", direction: "request",
                    children: [
                        {
                            tag: "datatype", name: "Level",
                            conformance: "M", type: "uint8"
                        },

                        {
                            tag: "datatype", name: "TransitionTime",
                            conformance: "M", quality: "X", type: "uint16"
                        },

                        {
                            tag: "datatype", name: "OptionsMask",
                            conformance: "M", type: "LevelControlOptions"
                        },

                        {
                            tag: "datatype", name: "OptionsOverride",
                            conformance: "M", type: "LevelControlOptions"
                        }
                    ]
                },

                {
                    tag: "command", id: 0x0005, name: "MoveWithOnOff",
                    conformance: "M", direction: "request",
                    children: [
                        {
                            tag: "datatype", name: "MoveMode",
                            conformance: "M", type: "MoveMode"
                        },

                        {
                            tag: "datatype", name: "Rate",
                            conformance: "M", quality: "X", type: "uint8"
                        },

                        {
                            tag: "datatype", name: "OptionsMask",
                            conformance: "M", type: "LevelControlOptions"
                        },

                        {
                            tag: "datatype", name: "OptionsOverride",
                            conformance: "M", type: "LevelControlOptions"
                        }
                    ]
                },

                {
                    tag: "command", id: 0x0006, name: "StepWithOnOff",
                    conformance: "M", direction: "request",
                    children: [
                        {
                            tag: "datatype", name: "StepMode",
                            conformance: "M", type: "StepMode"
                        },

                        {
                            tag: "datatype", name: "StepSize",
                            conformance: "M", type: "uint8"
                        },

                        {
                            tag: "datatype", name: "TransitionTime",
                            conformance: "M", quality: "X", type: "uint16"
                        },

                        {
                            tag: "datatype", name: "OptionsMask",
                            conformance: "M", type: "LevelControlOptions"
                        },

                        {
                            tag: "datatype", name: "OptionsOverride",
                            conformance: "M", type: "LevelControlOptions"
                        }
                    ]
                },

                {
                    tag: "command", id: 0x0007, name: "StopWithOnOff",
                    conformance: "M", direction: "request",
                    children: [
                        {
                            tag: "datatype", name: "OptionsMask",
                            conformance: "M", type: "LevelControlOptions"
                        },

                        {
                            tag: "datatype", name: "OptionsOverride",
                            conformance: "M", type: "LevelControlOptions"
                        }
                    ]
                },

                {
                    tag: "command", id: 0x0008, name: "MoveToClosestFrequency",
                    conformance: "O", direction: "request",
                    children: [
                        {
                            tag: "datatype", name: "Frequency",
                            conformance: "M", type: "uint16"
                        }
                    ]
                },

                {
                    tag: "datatype", name: "LevelControlFeature",
                    conformance: "M", type: "map32",
                    children: [
                        {
                            tag: "datatype", id: 0x0001, name: "OnOff",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0002, name: "Lighting",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0004, name: "Frequency",
                            conformance: "M"
                        }
                    ]
                },

                {
                    tag: "datatype", name: "MoveMode",
                    conformance: "M", type: "enum8",
                    children: [
                        {
                            tag: "datatype", id: 0x0000, name: "Up",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0001, name: "Down",
                            conformance: "M"
                        }
                    ]
                },

                {
                    tag: "datatype", name: "StepMode",
                    conformance: "M", type: "enum8",
                    children: [
                        {
                            tag: "datatype", id: 0x0000, name: "Up",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0001, name: "Down",
                            conformance: "M"
                        }
                    ]
                },

                {
                    tag: "datatype", name: "LevelControlOptions",
                    conformance: "M", type: "map8",
                    children: [
                        {
                            tag: "datatype", id: 0x0001, name: "ExecuteIfOff",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0002, name: "CoupleColorTempToLevel",
                            conformance: "M"
                        }
                    ]
                }
            ]
        },

        {
            tag: "cluster", id: 0x002b, name: "LocalizationConfiguration",
            description: "Localization Configuration",
            children: [
                {
                    tag: "attribute", id: 0x0000, name: "ActiveLocale",
                    access: "RW", conformance: "M", type: "string"
                },

                {
                    tag: "attribute", id: 0x0001, name: "SupportedLocales",
                    conformance: "M", type: "list",
                    children: [
                        {
                            tag: "datatype", name: "entry",
                            type: "string"
                        }
                    ]
                }
            ]
        },

        {
            tag: "cluster", id: 0x0508, name: "LowPower",
            description: "Low Power",
            children: [
                {
                    tag: "command", id: 0x0000, name: "Sleep",
                    conformance: "M", direction: "request"
                }
            ]
        },

        {
            tag: "cluster", id: 0x0507, name: "MediaInput",
            description: "Media Input",
            children: [
                {
                    tag: "attribute", id: 0x0000, name: "MediaInputList",
                    conformance: "M", type: "list",
                    children: [
                        {
                            tag: "datatype", name: "entry",
                            type: "InputInfoStruct"
                        }
                    ]
                },

                {
                    tag: "attribute", id: 0x0001, name: "MediaInputCurrentInput",
                    conformance: "M", default: 0, type: "uint8"
                },

                {
                    tag: "command", id: 0x0000, name: "SelectInput",
                    conformance: "M", direction: "request",
                    children: [
                        {
                            tag: "datatype", name: "Index",
                            conformance: "M", type: "uint8"
                        }
                    ]
                },

                {
                    tag: "command", id: 0x0001, name: "ShowInputStatus",
                    conformance: "M", direction: "request"
                },

                {
                    tag: "command", id: 0x0002, name: "HideInputStatus",
                    conformance: "M", direction: "request"
                },

                {
                    tag: "command", id: 0x0003, name: "RenameInput",
                    conformance: "O", direction: "request",
                    children: [
                        {
                            tag: "datatype", name: "Index",
                            conformance: "M", type: "uint8"
                        },

                        {
                            tag: "datatype", name: "Name",
                            conformance: "M", type: "string"
                        }
                    ]
                },

                {
                    tag: "datatype", name: "InputInfoStruct",
                    conformance: "M", type: "struct",
                    children: [
                        {
                            tag: "datatype", name: "Index",
                            conformance: "M", type: "uint8"
                        },

                        {
                            tag: "datatype", name: "InputType",
                            conformance: "M", type: "InputTypeEnum"
                        },

                        {
                            tag: "datatype", name: "Name",
                            conformance: "M", type: "string"
                        },

                        {
                            tag: "datatype", name: "Description",
                            conformance: "M", type: "string"
                        }
                    ]
                },

                {
                    tag: "datatype", name: "InputTypeEnum",
                    conformance: "M", type: "enum8",
                    children: [
                        {
                            tag: "datatype", id: 0x0000, name: "Internal",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0001, name: "Aux",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0002, name: "Coax",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0003, name: "Composite",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0004, name: "Hdmi",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0005, name: "Input",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0006, name: "Line",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0007, name: "Optical",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0008, name: "Video",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0009, name: "Scart",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x000a, name: "Usb",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x000b, name: "Other",
                            conformance: "M"
                        }
                    ]
                },

                {
                    tag: "datatype", name: "MediaInputFeature",
                    conformance: "M", type: "map32",
                    children: [
                        {
                            tag: "datatype", id: 0x0001, name: "NameUpdates",
                            conformance: "M"
                        }
                    ]
                }
            ]
        },

        {
            tag: "cluster", id: 0x0506, name: "MediaPlayback",
            description: "Media Playback",
            children: [
                {
                    tag: "attribute", id: 0x0000, name: "MediaPlaybackState",
                    conformance: "M", default: 0, type: "PlaybackStateEnum"
                },

                {
                    tag: "attribute", id: 0x0001, name: "MediaPlaybackStartTime",
                    conformance: "O", default: 0, quality: "X", type: "epoch-us"
                },

                {
                    tag: "attribute", id: 0x0002, name: "MediaPlaybackDuration",
                    conformance: "O", default: 0, quality: "X", type: "uint64"
                },

                {
                    tag: "attribute", id: 0x0003, name: "MediaPlaybackPlaybackPosition",
                    conformance: "O", quality: "X", type: "PlaybackPositionStruct"
                },

                {
                    tag: "attribute", id: 0x0004, name: "MediaPlaybackPlaybackSpeed",
                    conformance: "O", default: 0, type: "single"
                },

                {
                    tag: "attribute", id: 0x0005, name: "MediaPlaybackPlaybackSeekRangeEnd",
                    conformance: "O", quality: "X", type: "uint64"
                },

                {
                    tag: "attribute", id: 0x0006, name: "MediaPlaybackPlaybackSeekRangeStart",
                    conformance: "O", quality: "X", type: "uint64"
                },

                {
                    tag: "command", id: 0x0000, name: "Play",
                    conformance: "M", direction: "request", response: "PlaybackResponse"
                },

                {
                    tag: "command", id: 0x0001, name: "Pause",
                    conformance: "M", direction: "request", response: "PlaybackResponse"
                },

                {
                    tag: "command", id: 0x0002, name: "Stop",
                    conformance: "M", direction: "request", response: "PlaybackResponse"
                },

                {
                    tag: "command", id: 0x0003, name: "StartOver",
                    conformance: "O", direction: "request", response: "PlaybackResponse"
                },

                {
                    tag: "command", id: 0x0004, name: "Previous",
                    conformance: "O", direction: "request", response: "PlaybackResponse"
                },

                {
                    tag: "command", id: 0x0005, name: "Next",
                    conformance: "O", direction: "request", response: "PlaybackResponse"
                },

                {
                    tag: "command", id: 0x0006, name: "Rewind",
                    conformance: "O", direction: "request", response: "PlaybackResponse"
                },

                {
                    tag: "command", id: 0x0007, name: "FastForward",
                    conformance: "O", direction: "request", response: "PlaybackResponse"
                },

                {
                    tag: "command", id: 0x0008, name: "SkipForward",
                    conformance: "O", direction: "request", response: "PlaybackResponse",
                    children: [
                        {
                            tag: "datatype", name: "DeltaPositionMilliseconds",
                            conformance: "M", type: "uint64"
                        }
                    ]
                },

                {
                    tag: "command", id: 0x0009, name: "SkipBackward",
                    conformance: "O", direction: "request", response: "PlaybackResponse",
                    children: [
                        {
                            tag: "datatype", name: "DeltaPositionMilliseconds",
                            conformance: "M", type: "uint64"
                        }
                    ]
                },

                {
                    tag: "command", id: 0x000b, name: "Seek",
                    conformance: "O", direction: "request", response: "PlaybackResponse",
                    children: [
                        {
                            tag: "datatype", name: "Position",
                            conformance: "M", type: "uint64"
                        }
                    ]
                },

                {
                    tag: "command", id: 0x000a, name: "PlaybackResponse",
                    conformance: "M", direction: "response",
                    children: [
                        {
                            tag: "datatype", name: "Status",
                            conformance: "M", type: "MediaPlaybackStatusEnum"
                        },

                        {
                            tag: "datatype", name: "Data",
                            conformance: "O", type: "string"
                        }
                    ]
                },

                {
                    tag: "datatype", name: "PlaybackPositionStruct",
                    conformance: "M", type: "struct",
                    children: [
                        {
                            tag: "datatype", name: "UpdatedAt",
                            conformance: "M", type: "epoch-us"
                        },

                        {
                            tag: "datatype", name: "Position",
                            conformance: "M", quality: "X", type: "uint64"
                        }
                    ]
                },

                {
                    tag: "datatype", name: "PlaybackStateEnum",
                    conformance: "M", type: "enum8",
                    children: [
                        {
                            tag: "datatype", id: 0x0000, name: "Playing",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0001, name: "Paused",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0002, name: "NotPlaying",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0003, name: "Buffering",
                            conformance: "M"
                        }
                    ]
                },

                {
                    tag: "datatype", name: "MediaPlaybackStatusEnum",
                    conformance: "M", type: "enum8",
                    children: [
                        {
                            tag: "datatype", id: 0x0000, name: "Success",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0001, name: "InvalidStateForCommand",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0002, name: "NotAllowed",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0003, name: "NotActive",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0004, name: "SpeedOutOfRange",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0005, name: "SeekOutOfRange",
                            conformance: "M"
                        }
                    ]
                },

                {
                    tag: "datatype", name: "MediaPlaybackFeature",
                    conformance: "M", type: "map32",
                    children: [
                        {
                            tag: "datatype", id: 0x0001, name: "AdvancedSeek",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0002, name: "VariableSpeed",
                            conformance: "M"
                        }
                    ]
                }
            ]
        },

        {
            tag: "cluster", id: 0x0050, name: "ModeSelect",
            description: "Mode Select",
            children: [
                {
                    tag: "attribute", id: 0x0000, name: "ModeDescription",
                    conformance: "M", type: "string"
                },

                {
                    tag: "attribute", id: 0x0001, name: "StandardNamespace",
                    conformance: "M", quality: "X", type: "enum16"
                },

                {
                    tag: "attribute", id: 0x0002, name: "SupportedModes",
                    conformance: "M", type: "list",
                    children: [
                        {
                            tag: "datatype", name: "entry",
                            type: "ModeOptionStruct"
                        }
                    ]
                },

                {
                    tag: "attribute", id: 0x0003, name: "CurrentMode",
                    conformance: "M", quality: "P", type: "uint8"
                },

                {
                    tag: "attribute", id: 0x0004, name: "StartUpMode",
                    access: "RW", conformance: "O", quality: "X", type: "uint8"
                },

                {
                    tag: "attribute", id: 0x0005, name: "OnMode",
                    access: "RW", conformance: "O", quality: "X", type: "uint8"
                },

                {
                    tag: "command", id: 0x0000, name: "ChangeToMode",
                    conformance: "M", direction: "request",
                    children: [
                        {
                            tag: "datatype", name: "NewMode",
                            conformance: "M", type: "uint8"
                        }
                    ]
                },

                {
                    tag: "datatype", name: "SemanticTagStruct",
                    conformance: "M", type: "struct",
                    children: [
                        {
                            tag: "datatype", name: "MfgCode",
                            conformance: "M", type: "vendor-id"
                        },

                        {
                            tag: "datatype", name: "Value",
                            conformance: "M", type: "enum16"
                        }
                    ]
                },

                {
                    tag: "datatype", name: "ModeOptionStruct",
                    conformance: "M", type: "struct",
                    children: [
                        {
                            tag: "datatype", name: "Label",
                            conformance: "M", type: "string"
                        },

                        {
                            tag: "datatype", name: "Mode",
                            conformance: "M", type: "uint8"
                        },

                        {
                            tag: "datatype", name: "SemanticTags",
                            conformance: "M", type: "SemanticTagStruct"
                        }
                    ]
                },

                {
                    tag: "datatype", name: "ModeSelectFeature",
                    conformance: "M", type: "map32",
                    children: [
                        {
                            tag: "datatype", id: 0x0001, name: "Deponoff",
                            conformance: "M"
                        }
                    ]
                }
            ]
        },

        {
            tag: "cluster", id: 0x0031, name: "NetworkCommissioning",
            description: "Network Commissioning",
            children: [
                {
                    tag: "attribute", id: 0x0000, name: "MaxNetworks",
                    access: "R A", conformance: "M", type: "uint8"
                },

                {
                    tag: "attribute", id: 0x0001, name: "Networks",
                    access: "R A", conformance: "M", type: "list",
                    children: [
                        {
                            tag: "datatype", name: "entry",
                            type: "NetworkInfo"
                        }
                    ]
                },

                {
                    tag: "attribute", id: 0x0002, name: "ScanMaxTimeSeconds",
                    conformance: "O", type: "uint8"
                },

                {
                    tag: "attribute", id: 0x0003, name: "ConnectMaxTimeSeconds",
                    conformance: "O", type: "uint8"
                },

                {
                    tag: "attribute", id: 0x0004, name: "InterfaceEnabled",
                    access: "RW VA", conformance: "M", type: "bool"
                },

                {
                    tag: "attribute", id: 0x0005, name: "LastNetworkingStatus",
                    access: "R A", conformance: "M", quality: "X", type: "NetworkCommissioningStatus"
                },

                {
                    tag: "attribute", id: 0x0006, name: "LastNetworkId",
                    access: "R A", conformance: "M", quality: "X", type: "octstr"
                },

                {
                    tag: "attribute", id: 0x0007, name: "LastConnectErrorValue",
                    access: "R A", conformance: "M", quality: "X", type: "int32"
                },

                {
                    tag: "command", id: 0x0000, name: "ScanNetworks",
                    access: "R A", conformance: "M", direction: "request", response: "ScanNetworksResponse",
                    children: [
                        {
                            tag: "datatype", name: "Ssid",
                            conformance: "O", quality: "X", type: "octstr"
                        },

                        {
                            tag: "datatype", name: "Breadcrumb",
                            conformance: "O", type: "uint64"
                        }
                    ]
                },

                {
                    tag: "command", id: 0x0001, name: "ScanNetworksResponse",
                    conformance: "M", direction: "response",
                    children: [
                        {
                            tag: "datatype", name: "NetworkingStatus",
                            conformance: "M", type: "NetworkCommissioningStatus"
                        },

                        {
                            tag: "datatype", name: "DebugText",
                            conformance: "O", type: "string"
                        },

                        {
                            tag: "datatype", name: "WiFiScanResults",
                            conformance: "O", type: "WiFiInterfaceScanResult"
                        },

                        {
                            tag: "datatype", name: "ThreadScanResults",
                            conformance: "O", type: "ThreadInterfaceScanResult"
                        }
                    ]
                },

                {
                    tag: "command", id: 0x0002, name: "AddOrUpdateWiFiNetwork",
                    access: "R A", conformance: "O", direction: "request", response: "NetworkConfigResponse",
                    children: [
                        {
                            tag: "datatype", name: "Ssid",
                            conformance: "M", type: "octstr"
                        },

                        {
                            tag: "datatype", name: "Credentials",
                            conformance: "M", type: "octstr"
                        },

                        {
                            tag: "datatype", name: "Breadcrumb",
                            conformance: "O", type: "uint64"
                        }
                    ]
                },

                {
                    tag: "command", id: 0x0003, name: "AddOrUpdateThreadNetwork",
                    access: "R A", conformance: "O", direction: "request", response: "NetworkConfigResponse",
                    children: [
                        {
                            tag: "datatype", name: "OperationalDataset",
                            conformance: "M", type: "octstr"
                        },

                        {
                            tag: "datatype", name: "Breadcrumb",
                            conformance: "O", type: "uint64"
                        }
                    ]
                },

                {
                    tag: "command", id: 0x0004, name: "RemoveNetwork",
                    access: "R A", conformance: "M", direction: "request", response: "NetworkConfigResponse",
                    children: [
                        {
                            tag: "datatype", name: "NetworkId",
                            conformance: "M", type: "octstr"
                        },

                        {
                            tag: "datatype", name: "Breadcrumb",
                            conformance: "O", type: "uint64"
                        }
                    ]
                },

                {
                    tag: "command", id: 0x0005, name: "NetworkConfigResponse",
                    conformance: "O", direction: "response",
                    children: [
                        {
                            tag: "datatype", name: "NetworkingStatus",
                            conformance: "M", type: "NetworkCommissioningStatus"
                        },

                        {
                            tag: "datatype", name: "DebugText",
                            conformance: "O", type: "string"
                        },

                        {
                            tag: "datatype", name: "NetworkIndex",
                            conformance: "O", type: "uint8"
                        }
                    ]
                },

                {
                    tag: "command", id: 0x0006, name: "ConnectNetwork",
                    access: "R A", conformance: "M", direction: "request", response: "ConnectNetworkResponse",
                    children: [
                        {
                            tag: "datatype", name: "NetworkId",
                            conformance: "M", type: "octstr"
                        },

                        {
                            tag: "datatype", name: "Breadcrumb",
                            conformance: "O", type: "uint64"
                        }
                    ]
                },

                {
                    tag: "command", id: 0x0007, name: "ConnectNetworkResponse",
                    conformance: "M", direction: "response",
                    children: [
                        {
                            tag: "datatype", name: "NetworkingStatus",
                            conformance: "M", type: "NetworkCommissioningStatus"
                        },

                        {
                            tag: "datatype", name: "DebugText",
                            conformance: "O", type: "string"
                        },

                        {
                            tag: "datatype", name: "ErrorValue",
                            conformance: "M", quality: "X", type: "int32"
                        }
                    ]
                },

                {
                    tag: "command", id: 0x0008, name: "ReorderNetwork",
                    access: "R A", conformance: "M", direction: "request", response: "NetworkConfigResponse",
                    children: [
                        {
                            tag: "datatype", name: "NetworkId",
                            conformance: "M", type: "octstr"
                        },

                        {
                            tag: "datatype", name: "NetworkIndex",
                            conformance: "M", type: "uint8"
                        },

                        {
                            tag: "datatype", name: "Breadcrumb",
                            conformance: "O", type: "uint64"
                        }
                    ]
                },

                {
                    tag: "datatype", name: "NetworkCommissioningStatus",
                    conformance: "M", type: "enum8",
                    children: [
                        {
                            tag: "datatype", id: 0x0000, name: "Success",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0001, name: "OutOfRange",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0002, name: "BoundsExceeded",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0003, name: "NetworkIdNotFound",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0004, name: "DuplicateNetworkId",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0005, name: "NetworkNotFound",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0006, name: "RegulatoryError",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0007, name: "AuthFailure",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0008, name: "UnsupportedSecurity",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0009, name: "OtherConnectionFailure",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x000a, name: "Ipv6Failed",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x000b, name: "IpBindFailed",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x000c, name: "UnknownError",
                            conformance: "M"
                        }
                    ]
                },

                {
                    tag: "datatype", name: "WiFiBand",
                    conformance: "M", type: "enum8",
                    children: [
                        {
                            tag: "datatype", id: 0x0000, name: "2G4",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0001, name: "3G65",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0002, name: "5G",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0003, name: "6G",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0004, name: "60G",
                            conformance: "M"
                        }
                    ]
                },

                {
                    tag: "datatype", name: "WiFiSecurity",
                    conformance: "M", type: "map8",
                    children: [
                        {
                            tag: "datatype", id: 0x0001, name: "Unencrypted",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0002, name: "Wep",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0004, name: "WpaPersonal",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0008, name: "Wpa2Personal",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0010, name: "Wpa3Personal",
                            conformance: "M"
                        }
                    ]
                },

                {
                    tag: "datatype", name: "WiFiInterfaceScanResult",
                    conformance: "M", type: "struct",
                    children: [
                        {
                            tag: "datatype", name: "Security",
                            conformance: "M", type: "WiFiSecurity"
                        },

                        {
                            tag: "datatype", name: "Ssid",
                            conformance: "M", type: "octstr"
                        },

                        {
                            tag: "datatype", name: "Bssid",
                            conformance: "M", type: "octstr"
                        },

                        {
                            tag: "datatype", name: "Channel",
                            conformance: "M", type: "uint16"
                        },

                        {
                            tag: "datatype", name: "WiFiBand",
                            conformance: "M", type: "WiFiBand"
                        },

                        {
                            tag: "datatype", name: "Rssi",
                            conformance: "M", type: "int8"
                        }
                    ]
                },

                {
                    tag: "datatype", name: "ThreadInterfaceScanResult",
                    conformance: "M", type: "struct",
                    children: [
                        {
                            tag: "datatype", name: "PanId",
                            conformance: "M", type: "uint16"
                        },

                        {
                            tag: "datatype", name: "ExtendedPanId",
                            conformance: "M", type: "uint64"
                        },

                        {
                            tag: "datatype", name: "NetworkName",
                            conformance: "M", type: "string"
                        },

                        {
                            tag: "datatype", name: "Channel",
                            conformance: "M", type: "uint16"
                        },

                        {
                            tag: "datatype", name: "Version",
                            conformance: "M", type: "uint8"
                        },

                        {
                            tag: "datatype", name: "ExtendedAddress",
                            conformance: "M", type: "octstr"
                        },

                        {
                            tag: "datatype", name: "Rssi",
                            conformance: "M", type: "int8"
                        },

                        {
                            tag: "datatype", name: "Lqi",
                            conformance: "M", type: "uint8"
                        }
                    ]
                },

                {
                    tag: "datatype", name: "NetworkInfo",
                    conformance: "M", type: "struct",
                    children: [
                        {
                            tag: "datatype", name: "NetworkId",
                            conformance: "M", type: "octstr"
                        },

                        {
                            tag: "datatype", name: "Connected",
                            conformance: "M", type: "bool"
                        }
                    ]
                },

                {
                    tag: "datatype", name: "NetworkCommissioningFeature",
                    conformance: "M", type: "map32",
                    children: [
                        {
                            tag: "datatype", id: 0x0001, name: "WiFiNetworkInterface",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0002, name: "ThreadNetworkInterface",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0004, name: "EthernetNetworkInterface",
                            conformance: "M"
                        }
                    ]
                }
            ]
        },

        {
            tag: "cluster", id: 0x0406, name: "OccupancySensing",
            description: "Occupancy Sensing",
            children: [
                {
                    tag: "attribute", id: 0x0000, name: "Occupancy",
                    conformance: "M", quality: "P", type: "OccupancyBitmap"
                },

                {
                    tag: "attribute", id: 0x0001, name: "OccupancySensorType",
                    conformance: "M", type: "OccupancySensorTypeEnum"
                },

                {
                    tag: "attribute", id: 0x0002, name: "OccupancySensorTypeBitmap",
                    conformance: "M", type: "OccupancySensorTypeBitmap"
                },

                {
                    tag: "attribute", id: 0x0010, name: "PirOccupiedToUnoccupiedDelay",
                    access: "RW VM", conformance: "O", default: 0, type: "uint16"
                },

                {
                    tag: "attribute", id: 0x0011, name: "PirUnoccupiedToOccupiedDelay",
                    access: "RW VM", conformance: "O", default: 0, type: "uint16"
                },

                {
                    tag: "attribute", id: 0x0012, name: "PirUnoccupiedToOccupiedThreshold",
                    access: "RW VM", conformance: "O", default: 1, type: "uint8"
                },

                {
                    tag: "attribute", id: 0x0020, name: "UltrasonicOccupiedToUnoccupiedDelay",
                    access: "RW VM", conformance: "O", default: 0, type: "uint16"
                },

                {
                    tag: "attribute", id: 0x0021, name: "UltrasonicUnoccupiedToOccupiedDelay",
                    access: "RW VM", conformance: "O", default: 0, type: "uint16"
                },

                {
                    tag: "attribute", id: 0x0022, name: "UltrasonicUnoccupiedToOccupiedThreshold",
                    access: "RW VM", conformance: "O", default: 1, type: "uint8"
                },

                {
                    tag: "attribute", id: 0x0030, name: "PhysicalContactOccupiedToUnoccupiedDelay",
                    access: "RW VM", conformance: "O", default: 0, type: "uint16"
                },

                {
                    tag: "attribute", id: 0x0031, name: "PhysicalContactUnoccupiedToOccupiedDelay",
                    access: "RW VM", conformance: "O", default: 0, type: "uint16"
                },

                {
                    tag: "attribute", id: 0x0032, name: "PhysicalContactUnoccupiedToOccupiedThreshold",
                    access: "RW VM", conformance: "O", default: 1, type: "uint8"
                },

                {
                    tag: "datatype", name: "OccupancyBitmap",
                    conformance: "M", type: "map8",
                    children: [
                        {
                            tag: "datatype", id: 0x0001, name: "Occupied",
                            conformance: "M"
                        }
                    ]
                },

                {
                    tag: "datatype", name: "OccupancySensorTypeEnum",
                    conformance: "M", type: "enum8",
                    children: [
                        {
                            tag: "datatype", id: 0x0000, name: "Pir",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0001, name: "Ultrasonic",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0002, name: "PirAndUltrasonic",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0003, name: "PhysicalContact",
                            conformance: "M"
                        }
                    ]
                },

                {
                    tag: "datatype", name: "OccupancySensorTypeBitmap",
                    conformance: "M", type: "map8",
                    children: [
                        {
                            tag: "datatype", id: 0x0001, name: "Pir",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0002, name: "Ultrasonic",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0004, name: "PhysicalContact",
                            conformance: "M"
                        }
                    ]
                }
            ]
        },

        {
            tag: "cluster", id: 0x0006, name: "OnOff",
            description: "On/Off",
            children: [
                {
                    tag: "attribute", id: 0x0000, name: "OnOff",
                    conformance: "M", default: true, quality: "P", type: "bool"
                },

                {
                    tag: "attribute", id: 0x4000, name: "GlobalSceneControl",
                    conformance: "O", default: true, type: "bool"
                },

                {
                    tag: "attribute", id: 0x4001, name: "OnTime",
                    access: "RW", conformance: "O", default: 0, type: "uint16"
                },

                {
                    tag: "attribute", id: 0x4002, name: "OffWaitTime",
                    access: "RW", conformance: "O", default: 0, type: "uint16"
                },

                {
                    tag: "attribute", id: 0x4003, name: "StartUpOnOff",
                    access: "RW VM", conformance: "O", quality: "X", type: "OnOffStartUpOnOff"
                },

                {
                    tag: "command", id: 0x0000, name: "Off",
                    conformance: "M", direction: "request"
                },

                {
                    tag: "command", id: 0x0001, name: "On",
                    conformance: "M", direction: "request"
                },

                {
                    tag: "command", id: 0x0002, name: "Toggle",
                    conformance: "M", direction: "request"
                },

                {
                    tag: "command", id: 0x0040, name: "OffWithEffect",
                    conformance: "O", direction: "request",
                    children: [
                        {
                            tag: "datatype", name: "EffectIdentifier",
                            conformance: "M", type: "OnOffEffectIdentifier"
                        },

                        {
                            tag: "datatype", name: "EffectVariant",
                            conformance: "M", type: "uint8"
                        }
                    ]
                },

                {
                    tag: "command", id: 0x0041, name: "OnWithRecallGlobalScene",
                    conformance: "O", direction: "request"
                },

                {
                    tag: "command", id: 0x0042, name: "OnWithTimedOff",
                    conformance: "O", direction: "request",
                    children: [
                        {
                            tag: "datatype", name: "OnOffControl",
                            conformance: "M", type: "OnOffControl"
                        },

                        {
                            tag: "datatype", name: "OnTime",
                            conformance: "M", type: "uint16"
                        },

                        {
                            tag: "datatype", name: "OffWaitTime",
                            conformance: "M", type: "uint16"
                        }
                    ]
                },

                {
                    tag: "datatype", name: "OnOffStartUpOnOff",
                    conformance: "M", type: "enum8",
                    children: [
                        {
                            tag: "datatype", id: 0x0000, name: "Off",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0001, name: "On",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0002, name: "TogglePreviousOnOff",
                            conformance: "M"
                        }
                    ]
                },

                {
                    tag: "datatype", name: "OnOffEffectIdentifier",
                    conformance: "M", type: "enum8",
                    children: [
                        {
                            tag: "datatype", id: 0x0000, name: "DelayedAllOff",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0001, name: "DyingLight",
                            conformance: "M"
                        }
                    ]
                },

                {
                    tag: "datatype", name: "OnOffDelayedAllOffEffectVariant",
                    conformance: "M", type: "enum8",
                    children: [
                        {
                            tag: "datatype", id: 0x0000, name: "FadeToOffIn0P8Seconds",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0001, name: "NoFade",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0002, name: "50PercentDimDownIn0P8SecondsThenFadeToOffIn12Seconds",
                            conformance: "M"
                        }
                    ]
                },

                {
                    tag: "datatype", name: "OnOffDyingLightEffectVariant",
                    conformance: "M", type: "enum8",
                    children: [
                        {
                            tag: "datatype", id: 0x0000, name: "20PercenterDimUpIn0P5SecondsThenFadeToOffIn1Second",
                            conformance: "M"
                        }
                    ]
                },

                {
                    tag: "datatype", name: "OnOffControl",
                    conformance: "M", type: "map8",
                    children: [
                        {
                            tag: "datatype", id: 0x0001, name: "AcceptOnlyWhenOn",
                            conformance: "M"
                        }
                    ]
                },

                {
                    tag: "datatype", name: "OnOffFeature",
                    conformance: "M", type: "map32",
                    children: [
                        {
                            tag: "datatype", id: 0x0001, name: "Lighting",
                            conformance: "M"
                        }
                    ]
                }
            ]
        },

        {
            tag: "cluster", id: 0x003e, name: "OperationalCredentials",
            description: "Operational Credentials",
            children: [
                {
                    tag: "attribute", id: 0x0000, name: "Nocs",
                    access: "R A", conformance: "M", type: "list",
                    children: [
                        {
                            tag: "datatype", name: "entry",
                            type: "NocStruct"
                        }
                    ]
                },

                {
                    tag: "attribute", id: 0x0001, name: "Fabrics",
                    conformance: "M", type: "list",
                    children: [
                        {
                            tag: "datatype", name: "entry",
                            type: "FabricDescriptorStruct"
                        }
                    ]
                },

                {
                    tag: "attribute", id: 0x0002, name: "SupportedFabrics",
                    conformance: "M", type: "uint8"
                },

                {
                    tag: "attribute", id: 0x0003, name: "CommissionedFabrics",
                    conformance: "M", type: "uint8"
                },

                {
                    tag: "attribute", id: 0x0004, name: "TrustedRootCertificates",
                    conformance: "M", type: "list",
                    children: [
                        {
                            tag: "datatype", name: "entry",
                            type: "octstr"
                        }
                    ]
                },

                {
                    tag: "attribute", id: 0x0005, name: "CurrentFabricIndex",
                    conformance: "M", type: "uint8"
                },

                {
                    tag: "command", id: 0x0000, name: "AttestationRequest",
                    access: "R A", conformance: "M", direction: "request", response: "AttestationResponse",
                    children: [
                        {
                            tag: "datatype", name: "AttestationNonce",
                            conformance: "M", type: "octstr"
                        }
                    ]
                },

                {
                    tag: "command", id: 0x0001, name: "AttestationResponse",
                    conformance: "M", direction: "response",
                    children: [
                        {
                            tag: "datatype", name: "AttestationElements",
                            conformance: "M", type: "octstr"
                        },

                        {
                            tag: "datatype", name: "AttestationSignature",
                            conformance: "M", type: "octstr"
                        }
                    ]
                },

                {
                    tag: "command", id: 0x0002, name: "CertificateChainRequest",
                    access: "R A", conformance: "M", direction: "request", response: "CertificateChainResponse",
                    children: [
                        {
                            tag: "datatype", name: "CertificateType",
                            conformance: "M", type: "CertificateChainTypeEnum"
                        }
                    ]
                },

                {
                    tag: "command", id: 0x0003, name: "CertificateChainResponse",
                    conformance: "M", direction: "response",
                    children: [
                        {
                            tag: "datatype", name: "Certificate",
                            conformance: "M", type: "octstr"
                        }
                    ]
                },

                {
                    tag: "command", id: 0x0004, name: "CsrRequest",
                    access: "R A", conformance: "M", direction: "request", response: "CsrResponse",
                    children: [
                        {
                            tag: "datatype", name: "CsrNonce",
                            conformance: "M", type: "octstr"
                        },

                        {
                            tag: "datatype", name: "IsForUpdateNoc",
                            conformance: "O", type: "bool"
                        }
                    ]
                },

                {
                    tag: "command", id: 0x0005, name: "CsrResponse",
                    conformance: "M", direction: "response",
                    children: [
                        {
                            tag: "datatype", name: "NocsrElements",
                            conformance: "M", type: "octstr"
                        },

                        {
                            tag: "datatype", name: "AttestationSignature",
                            conformance: "M", type: "octstr"
                        }
                    ]
                },

                {
                    tag: "command", id: 0x0006, name: "AddNoc",
                    access: "R A", conformance: "M", direction: "request", response: "NocResponse",
                    children: [
                        {
                            tag: "datatype", name: "NocValue",
                            conformance: "M", type: "octstr"
                        },

                        {
                            tag: "datatype", name: "IcacValue",
                            conformance: "O", type: "octstr"
                        },

                        {
                            tag: "datatype", name: "IpkValue",
                            conformance: "M", type: "octstr"
                        },

                        {
                            tag: "datatype", name: "CaseAdminSubject",
                            conformance: "M", type: "uint64"
                        },

                        {
                            tag: "datatype", name: "AdminVendorId",
                            conformance: "M", type: "vendor-id"
                        }
                    ]
                },

                {
                    tag: "command", id: 0x0007, name: "UpdateNoc",
                    access: "R F A", conformance: "M", direction: "request", response: "NocResponse",
                    children: [
                        {
                            tag: "datatype", name: "NocValue",
                            conformance: "M", type: "octstr"
                        },

                        {
                            tag: "datatype", name: "IcacValue",
                            conformance: "O", type: "octstr"
                        }
                    ]
                },

                {
                    tag: "command", id: 0x0008, name: "NocResponse",
                    conformance: "M", direction: "response",
                    children: [
                        {
                            tag: "datatype", name: "StatusCode",
                            conformance: "M", type: "NodeOperationalCertStatusEnum"
                        },

                        {
                            tag: "datatype", name: "FabricIndex",
                            conformance: "O", type: "fabric-idx"
                        },

                        {
                            tag: "datatype", name: "DebugText",
                            conformance: "O", type: "string"
                        }
                    ]
                },

                {
                    tag: "command", id: 0x0009, name: "UpdateFabricLabel",
                    access: "R F A", conformance: "M", direction: "request", response: "NocResponse",
                    children: [
                        {
                            tag: "datatype", name: "Label",
                            conformance: "M", type: "string"
                        }
                    ]
                },

                {
                    tag: "command", id: 0x000a, name: "RemoveFabric",
                    access: "R A", conformance: "M", direction: "request", response: "NocResponse",
                    children: [
                        {
                            tag: "datatype", name: "FabricIndex",
                            conformance: "M", type: "fabric-idx"
                        }
                    ]
                },

                {
                    tag: "command", id: 0x000b, name: "AddTrustedRootCertificate",
                    access: "R A", conformance: "M", direction: "request",
                    children: [
                        {
                            tag: "datatype", name: "RootCaCertificate",
                            conformance: "M", type: "octstr"
                        }
                    ]
                },

                {
                    tag: "datatype", name: "FabricDescriptorStruct",
                    access: "R F", conformance: "M", type: "struct",
                    children: [
                        {
                            tag: "datatype", name: "RootPublicKey",
                            conformance: "M", type: "octstr"
                        },

                        {
                            tag: "datatype", name: "VendorId",
                            conformance: "M", type: "vendor-id"
                        },

                        {
                            tag: "datatype", name: "FabricId",
                            conformance: "M", type: "fabric-id"
                        },

                        {
                            tag: "datatype", name: "NodeId",
                            conformance: "M", type: "node-id"
                        },

                        {
                            tag: "datatype", name: "Label",
                            conformance: "M", type: "string"
                        }
                    ]
                },

                {
                    tag: "datatype", name: "NodeOperationalCertStatusEnum",
                    conformance: "M", type: "enum8",
                    children: [
                        {
                            tag: "datatype", id: 0x0000, name: "Ok",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0001, name: "InvalidPublicKey",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0002, name: "InvalidNodeOpId",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0003, name: "InvalidNoc",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0004, name: "MissingCsr",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0005, name: "TableFull",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0006, name: "InvalidAdminSubject",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0009, name: "FabricConflict",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x000a, name: "LabelConflict",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x000b, name: "InvalidFabricIndex",
                            conformance: "M"
                        }
                    ]
                },

                {
                    tag: "datatype", name: "NocStruct",
                    access: "R F", conformance: "M", type: "struct",
                    children: [
                        {
                            tag: "datatype", name: "Noc",
                            access: "R S", conformance: "M", type: "octstr"
                        },

                        {
                            tag: "datatype", name: "Icac",
                            access: "R S", conformance: "M", quality: "X", type: "octstr"
                        }
                    ]
                },

                {
                    tag: "datatype", name: "CertificateChainTypeEnum",
                    conformance: "M", type: "enum8",
                    children: [
                        {
                            tag: "datatype", id: 0x0001, name: "DacCertificate",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0002, name: "PaiCertificate",
                            conformance: "M"
                        }
                    ]
                }
            ]
        },

        {
            tag: "cluster", id: 0x002f, name: "PowerSource",
            description: "Power Source",
            children: [
                {
                    tag: "attribute", id: 0x0000, name: "PowerSourceStatus",
                    conformance: "M", type: "PowerSourceStatusEnum"
                },

                {
                    tag: "attribute", id: 0x0001, name: "PowerSourceOrder",
                    conformance: "M", type: "uint8"
                },

                {
                    tag: "attribute", id: 0x0002, name: "PowerSourceDescription",
                    conformance: "M", type: "string"
                },

                {
                    tag: "attribute", id: 0x0003, name: "PowerSourceWiredAssessedInputVoltage",
                    conformance: "O", quality: "X", type: "uint32"
                },

                {
                    tag: "attribute", id: 0x0004, name: "PowerSourceWiredAssessedInputFrequency",
                    conformance: "O", quality: "X", type: "uint16"
                },

                {
                    tag: "attribute", id: 0x0005, name: "PowerSourceWiredCurrentType",
                    conformance: "O", type: "WiredCurrentTypeEnum"
                },

                {
                    tag: "attribute", id: 0x0006, name: "PowerSourceWiredAssessedCurrent",
                    conformance: "O", quality: "X", type: "uint32"
                },

                {
                    tag: "attribute", id: 0x0007, name: "PowerSourceWiredNominalVoltage",
                    conformance: "O", type: "uint32"
                },

                {
                    tag: "attribute", id: 0x0008, name: "PowerSourceWiredMaximumCurrent",
                    conformance: "O", type: "uint32"
                },

                {
                    tag: "attribute", id: 0x0009, name: "PowerSourceWiredPresent",
                    conformance: "O", type: "bool"
                },

                {
                    tag: "attribute", id: 0x000a, name: "PowerSourceActiveWiredFaults",
                    conformance: "O", type: "list",
                    children: [
                        {
                            tag: "datatype", name: "entry",
                            type: "WiredFaultEnum"
                        }
                    ]
                },

                {
                    tag: "attribute", id: 0x000b, name: "PowerSourceBatVoltage",
                    conformance: "O", quality: "X", type: "uint32"
                },

                {
                    tag: "attribute", id: 0x000c, name: "PowerSourceBatPercentRemaining",
                    conformance: "O", quality: "X", type: "uint8"
                },

                {
                    tag: "attribute", id: 0x000d, name: "PowerSourceBatTimeRemaining",
                    conformance: "O", quality: "X", type: "uint32"
                },

                {
                    tag: "attribute", id: 0x000e, name: "PowerSourceBatChargeLevel",
                    conformance: "O", type: "BatChargeLevelEnum"
                },

                {
                    tag: "attribute", id: 0x000f, name: "PowerSourceBatReplacementNeeded",
                    conformance: "O", type: "bool"
                },

                {
                    tag: "attribute", id: 0x0010, name: "PowerSourceBatReplaceability",
                    conformance: "O", type: "BatReplaceabilityEnum"
                },

                {
                    tag: "attribute", id: 0x0011, name: "PowerSourceBatPresent",
                    conformance: "O", type: "bool"
                },

                {
                    tag: "attribute", id: 0x0012, name: "PowerSourceActiveBatFaults",
                    conformance: "O", type: "list",
                    children: [
                        {
                            tag: "datatype", name: "entry",
                            type: "BatFaultEnum"
                        }
                    ]
                },

                {
                    tag: "attribute", id: 0x0013, name: "PowerSourceBatReplacementDescription",
                    conformance: "O", type: "string"
                },

                {
                    tag: "attribute", id: 0x0014, name: "PowerSourceBatCommonDesignation",
                    conformance: "O", type: "BatCommonDesignationEnum"
                },

                {
                    tag: "attribute", id: 0x0015, name: "PowerSourceBatAnsiDesignation",
                    conformance: "O", type: "string"
                },

                {
                    tag: "attribute", id: 0x0016, name: "PowerSourceBatIecDesignation",
                    conformance: "O", type: "string"
                },

                {
                    tag: "attribute", id: 0x0017, name: "PowerSourceBatApprovedChemistry",
                    conformance: "O", type: "BatApprovedChemistryEnum"
                },

                {
                    tag: "attribute", id: 0x0018, name: "PowerSourceBatCapacity",
                    conformance: "O", type: "uint32"
                },

                {
                    tag: "attribute", id: 0x0019, name: "PowerSourceBatQuantity",
                    conformance: "O", type: "uint8"
                },

                {
                    tag: "attribute", id: 0x001a, name: "PowerSourceBatChargeState",
                    conformance: "O", type: "BatChargeStateEnum"
                },

                {
                    tag: "attribute", id: 0x001b, name: "PowerSourceBatTimeToFullCharge",
                    conformance: "O", quality: "X", type: "uint32"
                },

                {
                    tag: "attribute", id: 0x001c, name: "PowerSourceBatFunctionalWhileCharging",
                    conformance: "O", type: "bool"
                },

                {
                    tag: "attribute", id: 0x001d, name: "PowerSourceBatChargingCurrent",
                    conformance: "O", quality: "X", type: "uint32"
                },

                {
                    tag: "attribute", id: 0x001e, name: "PowerSourceActiveBatChargeFaults",
                    conformance: "O", type: "list",
                    children: [
                        {
                            tag: "datatype", name: "entry",
                            type: "BatChargeFaultEnum"
                        }
                    ]
                },

                {
                    tag: "event", id: 0x0000, name: "WiredFaultChange",
                    conformance: "O", priority: "info",
                    children: [
                        {
                            tag: "datatype", name: "Current",
                            conformance: "M", type: "WiredFaultEnum"
                        },

                        {
                            tag: "datatype", name: "Previous",
                            conformance: "M", type: "WiredFaultEnum"
                        }
                    ]
                },

                {
                    tag: "event", id: 0x0001, name: "BatFaultChange",
                    conformance: "O", priority: "info",
                    children: [
                        {
                            tag: "datatype", name: "Current",
                            conformance: "M", type: "BatFaultEnum"
                        },

                        {
                            tag: "datatype", name: "Previous",
                            conformance: "M", type: "BatFaultEnum"
                        }
                    ]
                },

                {
                    tag: "event", id: 0x0002, name: "BatChargeFaultChange",
                    conformance: "O", priority: "info",
                    children: [
                        {
                            tag: "datatype", name: "Current",
                            conformance: "M", type: "BatChargeFaultEnum"
                        },

                        {
                            tag: "datatype", name: "Previous",
                            conformance: "M", type: "BatChargeFaultEnum"
                        }
                    ]
                },

                {
                    tag: "datatype", name: "PowerSourceFeature",
                    conformance: "M", type: "map32",
                    children: [
                        {
                            tag: "datatype", id: 0x0001, name: "Wired",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0002, name: "Battery",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0004, name: "Rechargeable",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0008, name: "Replaceable",
                            conformance: "M"
                        }
                    ]
                },

                {
                    tag: "datatype", name: "WiredFaultEnum",
                    conformance: "M", type: "enum8",
                    children: [
                        {
                            tag: "datatype", id: 0x0000, name: "Unspecified",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0001, name: "OverVoltage",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0002, name: "UnderVoltage",
                            conformance: "M"
                        }
                    ]
                },

                {
                    tag: "datatype", name: "BatFaultEnum",
                    conformance: "M", type: "enum8",
                    children: [
                        {
                            tag: "datatype", id: 0x0000, name: "Unspecified",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0001, name: "OverTemp",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0002, name: "UnderTemp",
                            conformance: "M"
                        }
                    ]
                },

                {
                    tag: "datatype", name: "BatChargeFaultEnum",
                    conformance: "M", type: "enum8",
                    children: [
                        {
                            tag: "datatype", id: 0x0000, name: "Unspecified",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0001, name: "AmbientTooHot",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0002, name: "AmbientTooCold",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0003, name: "BatteryTooHot",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0004, name: "BatteryTooCold",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0005, name: "BatteryAbsent",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0006, name: "BatteryOverVoltage",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0007, name: "BatteryUnderVoltage",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0008, name: "ChargerOverVoltage",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0009, name: "ChargerUnderVoltage",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x000a, name: "SafetyTimeout",
                            conformance: "M"
                        }
                    ]
                },

                {
                    tag: "datatype", name: "PowerSourceStatusEnum",
                    conformance: "M", type: "enum8",
                    children: [
                        {
                            tag: "datatype", id: 0x0000, name: "Unspecified",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0001, name: "Active",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0002, name: "Standby",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0003, name: "Unavailable",
                            conformance: "M"
                        }
                    ]
                },

                {
                    tag: "datatype", name: "WiredCurrentTypeEnum",
                    conformance: "M", type: "enum8",
                    children: [
                        {
                            tag: "datatype", id: 0x0000, name: "Ac",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0001, name: "Dc",
                            conformance: "M"
                        }
                    ]
                },

                {
                    tag: "datatype", name: "BatChargeLevelEnum",
                    conformance: "M", type: "enum8",
                    children: [
                        {
                            tag: "datatype", id: 0x0000, name: "Ok",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0001, name: "Warning",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0002, name: "Critical",
                            conformance: "M"
                        }
                    ]
                },

                {
                    tag: "datatype", name: "BatReplaceabilityEnum",
                    conformance: "M", type: "enum8",
                    children: [
                        {
                            tag: "datatype", id: 0x0000, name: "Unspecified",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0001, name: "NotReplaceable",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0002, name: "UserReplaceable",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0003, name: "FactoryReplaceable",
                            conformance: "M"
                        }
                    ]
                },

                {
                    tag: "datatype", name: "BatChargeStateEnum",
                    conformance: "M", type: "enum8",
                    children: [
                        {
                            tag: "datatype", id: 0x0000, name: "Unknown",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0001, name: "IsCharging",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0002, name: "IsAtFullCharge",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0003, name: "IsNotCharging",
                            conformance: "M"
                        }
                    ]
                },

                {
                    tag: "datatype", name: "BatCommonDesignationEnum",
                    conformance: "M", type: "enum16",
                    children: [
                        {
                            tag: "datatype", id: 0x0000, name: "Unspecified",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0001, name: "Aaa",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0002, name: "Aa",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0003, name: "C",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0004, name: "D",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0005, name: "4V5",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0006, name: "6V0",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0007, name: "9V0",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0008, name: "12Aa",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0009, name: "Aaaa",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x000a, name: "A",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x000b, name: "B",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x000c, name: "F",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x000d, name: "N",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x000e, name: "No6",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x000f, name: "SubC",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0010, name: "A23",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0011, name: "A27",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0012, name: "Ba5800",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0013, name: "Duplex",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0014, name: "4Sr44",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0015, name: "523",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0016, name: "531",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0017, name: "15V0",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0018, name: "22V5",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0019, name: "30V0",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x001a, name: "45V0",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x001b, name: "67V5",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x001c, name: "J",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x001d, name: "Cr123A",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x001e, name: "Cr2",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x001f, name: "2Cr5",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0020, name: "CrP2",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0021, name: "CrV3",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0022, name: "Sr41",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0023, name: "Sr43",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0024, name: "Sr44",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0025, name: "Sr45",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0026, name: "Sr48",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0027, name: "Sr54",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0028, name: "Sr55",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0029, name: "Sr57",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x002a, name: "Sr58",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x002b, name: "Sr59",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x002c, name: "Sr60",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x002d, name: "Sr63",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x002e, name: "Sr64",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x002f, name: "Sr65",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0030, name: "Sr66",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0031, name: "Sr67",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0032, name: "Sr68",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0033, name: "Sr69",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0034, name: "Sr516",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0035, name: "Sr731",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0036, name: "Sr712",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0037, name: "Lr932",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0038, name: "A5",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0039, name: "A10",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x003a, name: "A13",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x003b, name: "A312",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x003c, name: "A675",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x003d, name: "Ac41E",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x003e, name: "10180",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x003f, name: "10280",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0040, name: "10440",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0041, name: "14250",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0042, name: "14430",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0043, name: "14500",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0044, name: "14650",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0045, name: "15270",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0046, name: "16340",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0047, name: "Rcr123A",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0048, name: "17500",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0049, name: "17670",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x004a, name: "18350",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x004b, name: "18500",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x004c, name: "18650",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x004d, name: "19670",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x004e, name: "25500",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x004f, name: "26650",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0050, name: "32600",
                            conformance: "M"
                        }
                    ]
                },

                {
                    tag: "datatype", name: "BatApprovedChemistryEnum",
                    conformance: "M", type: "enum16",
                    children: [
                        {
                            tag: "datatype", id: 0x0000, name: "Unspecified",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0001, name: "Alkaline",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0002, name: "LithiumCarbonFluoride",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0003, name: "LithiumChromiumOxide",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0004, name: "LithiumCopperOxide",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0005, name: "LithiumIronDisulfide",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0006, name: "LithiumManganeseDioxide",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0007, name: "LithiumThionylChloride",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0008, name: "Magnesium",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0009, name: "MercuryOxide",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x000a, name: "NickelOxyhydride",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x000b, name: "SilverOxide",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x000c, name: "ZincAir",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x000d, name: "ZincCarbon",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x000e, name: "ZincChloride",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x000f, name: "ZincManganeseDioxide",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0010, name: "LeadAcid",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0011, name: "LithiumCobaltOxide",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0012, name: "LithiumIon",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0013, name: "LithiumIonPolymer",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0014, name: "LithiumIronPhosphate",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0015, name: "LithiumSulfur",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0016, name: "LithiumTitanate",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0017, name: "NickelCadmium",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0018, name: "NickelHydrogen",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0019, name: "NickelIron",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x001a, name: "NickelMetalHydride",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x001b, name: "NickelZinc",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x001c, name: "SilverZinc",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x001d, name: "SodiumIon",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x001e, name: "SodiumSulfur",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x001f, name: "ZincBromide",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0020, name: "ZincCerium",
                            conformance: "M"
                        }
                    ]
                },

                {
                    tag: "datatype", name: "WiredFaultChangeType",
                    conformance: "M", type: "struct",
                    children: [
                        {
                            tag: "datatype", name: "Current",
                            conformance: "M", type: "WiredFaultEnum"
                        },

                        {
                            tag: "datatype", name: "Previous",
                            conformance: "M", type: "WiredFaultEnum"
                        }
                    ]
                },

                {
                    tag: "datatype", name: "BatFaultChangeType",
                    conformance: "M", type: "struct",
                    children: [
                        {
                            tag: "datatype", name: "Current",
                            conformance: "M", type: "BatFaultEnum"
                        },

                        {
                            tag: "datatype", name: "Previous",
                            conformance: "M", type: "BatFaultEnum"
                        }
                    ]
                },

                {
                    tag: "datatype", name: "BatChargeFaultChangeType",
                    conformance: "M", type: "struct",
                    children: [
                        {
                            tag: "datatype", name: "Current",
                            conformance: "M", type: "BatChargeFaultEnum"
                        },

                        {
                            tag: "datatype", name: "Previous",
                            conformance: "M", type: "BatChargeFaultEnum"
                        }
                    ]
                }
            ]
        },

        {
            tag: "cluster", id: 0x002e, name: "PowerSourceConfiguration",
            description: "Power Source Configuration",
            children: [
                {
                    tag: "attribute", id: 0x0000, name: "Sources",
                    conformance: "M", type: "list",
                    children: [
                        {
                            tag: "datatype", name: "entry",
                            type: "uint8"
                        }
                    ]
                }
            ]
        },

        {
            tag: "cluster", id: 0x0403, name: "PressureMeasurement",
            description: "Pressure Measurement",
            children: [
                {
                    tag: "attribute", id: 0x0000, name: "PressureMeasuredValue",
                    conformance: "M", quality: "X P", type: "int16"
                },

                {
                    tag: "attribute", id: 0x0001, name: "PressureMinMeasuredValue",
                    conformance: "M", quality: "X", type: "int16"
                },

                {
                    tag: "attribute", id: 0x0002, name: "PressureMaxMeasuredValue",
                    conformance: "M", quality: "X", type: "int16"
                },

                {
                    tag: "attribute", id: 0x0003, name: "PressureTolerance",
                    conformance: "O", default: 0, type: "uint16"
                },

                {
                    tag: "attribute", id: 0x0010, name: "PressureScaledValue",
                    conformance: "O", default: 0, quality: "X", type: "int16"
                },

                {
                    tag: "attribute", id: 0x0011, name: "PressureMinScaledValue",
                    conformance: "O", default: 0, quality: "X", type: "int16"
                },

                {
                    tag: "attribute", id: 0x0012, name: "PressureMaxScaledValue",
                    conformance: "O", default: 0, quality: "X", type: "int16"
                },

                {
                    tag: "attribute", id: 0x0013, name: "PressureScaledTolerance",
                    conformance: "O", default: 0, quality: "P", type: "uint16"
                },

                {
                    tag: "attribute", id: 0x0014, name: "PressureScale",
                    conformance: "O", default: 0, type: "int8"
                },

                {
                    tag: "datatype", name: "PressureMeasurementFeature",
                    conformance: "M", type: "map32",
                    children: [
                        {
                            tag: "datatype", id: 0x0001, name: "Extended",
                            conformance: "M"
                        }
                    ]
                }
            ]
        },

        {
            tag: "cluster", id: 0x0042, name: "ProxyConfiguration",
            description: "Proxy Configuration"
        },

        {
            tag: "cluster", id: 0x0043, name: "ProxyDiscovery",
            description: "Proxy Discovery"
        },

        {
            tag: "cluster", id: 0x0044, name: "ProxyValid",
            description: "Proxy Valid"
        },

        {
            tag: "cluster", id: 0x0200, name: "PumpConfigurationAndControl",
            description: "Pump Configuration and Control",
            children: [
                {
                    tag: "attribute", id: 0x0000, name: "MaxPressure",
                    conformance: "M", quality: "X", type: "int16"
                },

                {
                    tag: "attribute", id: 0x0001, name: "MaxSpeed",
                    conformance: "M", quality: "X", type: "uint16"
                },

                {
                    tag: "attribute", id: 0x0002, name: "MaxFlow",
                    conformance: "M", quality: "X", type: "uint16"
                },

                {
                    tag: "attribute", id: 0x0003, name: "MinConstPressure",
                    conformance: "O", quality: "X", type: "int16"
                },

                {
                    tag: "attribute", id: 0x0004, name: "MaxConstPressure",
                    conformance: "O", quality: "X", type: "int16"
                },

                {
                    tag: "attribute", id: 0x0005, name: "MinCompPressure",
                    conformance: "O", quality: "X", type: "int16"
                },

                {
                    tag: "attribute", id: 0x0006, name: "MaxCompPressure",
                    conformance: "O", quality: "X", type: "int16"
                },

                {
                    tag: "attribute", id: 0x0007, name: "MinConstSpeed",
                    conformance: "O", quality: "X", type: "uint16"
                },

                {
                    tag: "attribute", id: 0x0008, name: "MaxConstSpeed",
                    conformance: "O", quality: "X", type: "uint16"
                },

                {
                    tag: "attribute", id: 0x0009, name: "MinConstFlow",
                    conformance: "O", quality: "X", type: "uint16"
                },

                {
                    tag: "attribute", id: 0x000a, name: "MaxConstFlow",
                    conformance: "O", quality: "X", type: "uint16"
                },

                {
                    tag: "attribute", id: 0x000b, name: "MinConstTemp",
                    conformance: "O", quality: "X", type: "int16"
                },

                {
                    tag: "attribute", id: 0x000c, name: "MaxConstTemp",
                    conformance: "O", quality: "X", type: "int16"
                },

                {
                    tag: "attribute", id: 0x0010, name: "PumpStatus",
                    conformance: "O", default: 0, quality: "P", type: "PumpStatusBitmap"
                },

                {
                    tag: "attribute", id: 0x0011, name: "EffectiveOperationMode",
                    conformance: "M", type: "OperationModeEnum"
                },

                {
                    tag: "attribute", id: 0x0012, name: "EffectiveControlMode",
                    conformance: "M", type: "ControlModeEnum"
                },

                {
                    tag: "attribute", id: 0x0013, name: "Capacity",
                    conformance: "M", quality: "X P", type: "int16"
                },

                {
                    tag: "attribute", id: 0x0014, name: "Speed",
                    conformance: "O", quality: "X", type: "uint16"
                },

                {
                    tag: "attribute", id: 0x0015, name: "LifetimeRunningHours",
                    access: "RW VM", conformance: "O", default: 0, quality: "X", type: "uint24"
                },

                {
                    tag: "attribute", id: 0x0016, name: "PumpPower",
                    conformance: "O", quality: "X", type: "uint24"
                },

                {
                    tag: "attribute", id: 0x0017, name: "LifetimeEnergyConsumed",
                    access: "RW VM", conformance: "O", default: 0, quality: "X", type: "uint32"
                },

                {
                    tag: "attribute", id: 0x0020, name: "OperationMode",
                    access: "RW VM", conformance: "M", default: 0, type: "OperationModeEnum"
                },

                {
                    tag: "attribute", id: 0x0021, name: "ControlMode",
                    access: "RW VM", conformance: "O", default: 0, type: "ControlModeEnum"
                },

                {
                    tag: "event", id: 0x0000, name: "SupplyVoltageLow",
                    conformance: "O", priority: "info"
                },

                {
                    tag: "event", id: 0x0001, name: "SupplyVoltageHigh",
                    conformance: "O", priority: "info"
                },

                {
                    tag: "event", id: 0x0002, name: "PowerMissingPhase",
                    conformance: "O", priority: "info"
                },

                {
                    tag: "event", id: 0x0003, name: "SystemPressureLow",
                    conformance: "O", priority: "info"
                },

                {
                    tag: "event", id: 0x0004, name: "SystemPressureHigh",
                    conformance: "O", priority: "info"
                },

                {
                    tag: "event", id: 0x0005, name: "DryRunning",
                    conformance: "O", priority: "critical"
                },

                {
                    tag: "event", id: 0x0006, name: "MotorTemperatureHigh",
                    conformance: "O", priority: "info"
                },

                {
                    tag: "event", id: 0x0007, name: "PumpMotorFatalFailure",
                    conformance: "O", priority: "critical"
                },

                {
                    tag: "event", id: 0x0008, name: "ElectronicTemperatureHigh",
                    conformance: "O", priority: "info"
                },

                {
                    tag: "event", id: 0x0009, name: "PumpBlocked",
                    conformance: "O", priority: "critical"
                },

                {
                    tag: "event", id: 0x000a, name: "SensorFailure",
                    conformance: "O", priority: "info"
                },

                {
                    tag: "event", id: 0x000b, name: "ElectronicNonFatalFailure",
                    conformance: "O", priority: "info"
                },

                {
                    tag: "event", id: 0x000c, name: "ElectronicFatalFailure",
                    conformance: "O", priority: "critical"
                },

                {
                    tag: "event", id: 0x000d, name: "GeneralFault",
                    conformance: "O", priority: "info"
                },

                {
                    tag: "event", id: 0x000e, name: "Leakage",
                    conformance: "O", priority: "info"
                },

                {
                    tag: "event", id: 0x000f, name: "AirDetection",
                    conformance: "O", priority: "info"
                },

                {
                    tag: "event", id: 0x0010, name: "TurbineOperation",
                    conformance: "O", priority: "info"
                },

                {
                    tag: "datatype", name: "PumpStatusBitmap",
                    conformance: "M", type: "map16",
                    children: [
                        {
                            tag: "datatype", id: 0x0001, name: "DeviceFault",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0002, name: "Supplyfault",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0004, name: "SpeedLow",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0008, name: "SpeedHigh",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0010, name: "LocalOverride",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0020, name: "Running",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0040, name: "RemotePressure",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0080, name: "RemoteFlow",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0100, name: "RemoteTemperature",
                            conformance: "M"
                        }
                    ]
                },

                {
                    tag: "datatype", name: "OperationModeEnum",
                    conformance: "M", type: "enum8",
                    children: [
                        {
                            tag: "datatype", id: 0x0000, name: "Normal",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0001, name: "Minimum",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0002, name: "Maximum",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0003, name: "Local",
                            conformance: "M"
                        }
                    ]
                },

                {
                    tag: "datatype", name: "ControlModeEnum",
                    conformance: "M", type: "enum8",
                    children: [
                        {
                            tag: "datatype", id: 0x0000, name: "ConstantSpeed",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0001, name: "ConstantPressure",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0002, name: "ProportionalPressure",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0003, name: "ConstantFlow",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0005, name: "ConstantTemperature",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0007, name: "Automatic",
                            conformance: "M"
                        }
                    ]
                },

                {
                    tag: "datatype", name: "PumpConfigurationAndControlFeature",
                    conformance: "M", type: "map32",
                    children: [
                        {
                            tag: "datatype", id: 0x0001, name: "ConstantPressure",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0002, name: "CompensatedPressure",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0004, name: "ConstantFlow",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0008, name: "ConstantSpeed",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0010, name: "ConstantTemperature",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0020, name: "Automatic",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0040, name: "LocalOperation",
                            conformance: "M"
                        }
                    ]
                }
            ]
        },

        {
            tag: "cluster", id: 0x001c, name: "PulseWidthModulation",
            description: "Pulse Width Modulation"
        },

        {
            tag: "cluster", id: 0x0405, name: "RelativeHumidityMeasurement",
            description: "Relative Humidity Measurement",
            children: [
                {
                    tag: "attribute", id: 0x0000, name: "RelativeHumidityMeasuredValue",
                    conformance: "M", quality: "X P", type: "uint16"
                },

                {
                    tag: "attribute", id: 0x0001, name: "RelativeHumidityMinMeasuredValue",
                    conformance: "M", quality: "X", type: "uint16"
                },

                {
                    tag: "attribute", id: 0x0002, name: "RelativeHumidityMaxMeasuredValue",
                    conformance: "M", quality: "X", type: "uint16"
                },

                {
                    tag: "attribute", id: 0x0003, name: "RelativeHumidityTolerance",
                    conformance: "O", type: "uint16"
                }
            ]
        },

        {
            tag: "cluster", id: 0x0005, name: "Scenes",
            description: "Scenes",
            children: [
                {
                    tag: "attribute", id: 0x0000, name: "SceneCount",
                    conformance: "M", default: 0, type: "uint8"
                },

                {
                    tag: "attribute", id: 0x0001, name: "CurrentScene",
                    conformance: "M", default: 0, type: "uint8"
                },

                {
                    tag: "attribute", id: 0x0002, name: "CurrentGroup",
                    conformance: "M", default: 0, type: "group-id"
                },

                {
                    tag: "attribute", id: 0x0003, name: "SceneValid",
                    conformance: "M", default: true, type: "bool"
                },

                {
                    tag: "attribute", id: 0x0004, name: "SceneNameSupport",
                    conformance: "M", default: 0, type: "map8"
                },

                {
                    tag: "attribute", id: 0x0005, name: "LastConfiguredBy",
                    conformance: "O", quality: "X", type: "node-id"
                },

                {
                    tag: "command", id: 0x0000, name: "AddScene",
                    access: "R F M", conformance: "M", direction: "request", response: "AddSceneResponse",
                    children: [
                        {
                            tag: "datatype", name: "GroupId",
                            conformance: "M", type: "group-id"
                        },

                        {
                            tag: "datatype", name: "SceneId",
                            conformance: "M", type: "uint8"
                        },

                        {
                            tag: "datatype", name: "TransitionTime",
                            conformance: "M", type: "uint16"
                        },

                        {
                            tag: "datatype", name: "SceneName",
                            conformance: "M", type: "string"
                        },

                        {
                            tag: "datatype", name: "ExtensionFieldSets",
                            conformance: "M", type: "ExtensionFieldSet"
                        }
                    ]
                },

                {
                    tag: "command", id: 0x0001, name: "ViewScene",
                    access: "R F", conformance: "M", direction: "request", response: "ViewSceneResponse",
                    children: [
                        {
                            tag: "datatype", name: "GroupId",
                            conformance: "M", type: "group-id"
                        },

                        {
                            tag: "datatype", name: "SceneId",
                            conformance: "M", type: "uint8"
                        }
                    ]
                },

                {
                    tag: "command", id: 0x0002, name: "RemoveScene",
                    access: "R F M", conformance: "M", direction: "request", response: "RemoveSceneResponse",
                    children: [
                        {
                            tag: "datatype", name: "GroupId",
                            conformance: "M", type: "group-id"
                        },

                        {
                            tag: "datatype", name: "SceneId",
                            conformance: "M", type: "uint8"
                        }
                    ]
                },

                {
                    tag: "command", id: 0x0003, name: "RemoveAllScenes",
                    access: "R F M", conformance: "M", direction: "request", response: "RemoveAllScenesResponse",
                    children: [
                        {
                            tag: "datatype", name: "GroupId",
                            conformance: "M", type: "group-id"
                        }
                    ]
                },

                {
                    tag: "command", id: 0x0004, name: "StoreScene",
                    access: "R F M", conformance: "M", direction: "request", response: "StoreSceneResponse",
                    children: [
                        {
                            tag: "datatype", name: "GroupId",
                            conformance: "M", type: "group-id"
                        },

                        {
                            tag: "datatype", name: "SceneId",
                            conformance: "M", type: "uint8"
                        }
                    ]
                },

                {
                    tag: "command", id: 0x0005, name: "RecallScene",
                    access: "R F", conformance: "M", direction: "request",
                    children: [
                        {
                            tag: "datatype", name: "GroupId",
                            conformance: "M", type: "group-id"
                        },

                        {
                            tag: "datatype", name: "SceneId",
                            conformance: "M", type: "uint8"
                        },

                        {
                            tag: "datatype", name: "TransitionTime",
                            conformance: "O", quality: "X", type: "uint16"
                        }
                    ]
                },

                {
                    tag: "command", id: 0x0006, name: "GetSceneMembership",
                    access: "R F", conformance: "M", direction: "request", response: "GetSceneMembershipResponse",
                    children: [
                        {
                            tag: "datatype", name: "GroupId",
                            conformance: "M", type: "group-id"
                        }
                    ]
                },

                {
                    tag: "command", id: 0x0040, name: "EnhancedAddScene",
                    access: "R F", conformance: "O", direction: "request", response: "EnhancedAddSceneResponse",
                    children: [
                        {
                            tag: "datatype", name: "GroupId",
                            conformance: "M", type: "group-id"
                        },

                        {
                            tag: "datatype", name: "SceneId",
                            conformance: "M", type: "uint8"
                        },

                        {
                            tag: "datatype", name: "TransitionTime",
                            conformance: "M", type: "uint16"
                        },

                        {
                            tag: "datatype", name: "SceneName",
                            conformance: "M", type: "string"
                        },

                        {
                            tag: "datatype", name: "ExtensionFieldSets",
                            conformance: "M", type: "ExtensionFieldSet"
                        }
                    ]
                },

                {
                    tag: "command", id: 0x0041, name: "EnhancedViewScene",
                    access: "R F", conformance: "O", direction: "request", response: "EnhancedViewSceneResponse",
                    children: [
                        {
                            tag: "datatype", name: "GroupId",
                            conformance: "M", type: "group-id"
                        },

                        {
                            tag: "datatype", name: "SceneId",
                            conformance: "M", type: "uint8"
                        }
                    ]
                },

                {
                    tag: "command", id: 0x0042, name: "CopyScene",
                    access: "R F", conformance: "O", direction: "request", response: "CopySceneResponse",
                    children: [
                        {
                            tag: "datatype", name: "Mode",
                            conformance: "M", type: "ScenesCopyMode"
                        },

                        {
                            tag: "datatype", name: "GroupIdentifierFrom",
                            conformance: "M", type: "group-id"
                        },

                        {
                            tag: "datatype", name: "SceneIdentifierFrom",
                            conformance: "M", type: "uint8"
                        },

                        {
                            tag: "datatype", name: "GroupIdentifierTo",
                            conformance: "M", type: "group-id"
                        },

                        {
                            tag: "datatype", name: "SceneIdentifierTo",
                            conformance: "M", type: "uint8"
                        }
                    ]
                },

                {
                    tag: "command", id: 0x0000, name: "AddSceneResponse",
                    conformance: "M", direction: "response",
                    children: [
                        {
                            tag: "datatype", name: "Status",
                            conformance: "M", type: "enum8"
                        },

                        {
                            tag: "datatype", name: "GroupId",
                            conformance: "M", type: "group-id"
                        },

                        {
                            tag: "datatype", name: "SceneId",
                            conformance: "M", type: "uint8"
                        }
                    ]
                },

                {
                    tag: "command", id: 0x0001, name: "ViewSceneResponse",
                    conformance: "M", direction: "response",
                    children: [
                        {
                            tag: "datatype", name: "Status",
                            conformance: "M", type: "enum8"
                        },

                        {
                            tag: "datatype", name: "GroupId",
                            conformance: "M", type: "group-id"
                        },

                        {
                            tag: "datatype", name: "SceneId",
                            conformance: "M", type: "uint8"
                        },

                        {
                            tag: "datatype", name: "TransitionTime",
                            conformance: "O", type: "uint16"
                        },

                        {
                            tag: "datatype", name: "SceneName",
                            conformance: "O", type: "string"
                        },

                        {
                            tag: "datatype", name: "ExtensionFieldSets",
                            conformance: "O", type: "ExtensionFieldSet"
                        }
                    ]
                },

                {
                    tag: "command", id: 0x0002, name: "RemoveSceneResponse",
                    conformance: "M", direction: "response",
                    children: [
                        {
                            tag: "datatype", name: "Status",
                            conformance: "M", type: "enum8"
                        },

                        {
                            tag: "datatype", name: "GroupId",
                            conformance: "M", type: "group-id"
                        },

                        {
                            tag: "datatype", name: "SceneId",
                            conformance: "M", type: "uint8"
                        }
                    ]
                },

                {
                    tag: "command", id: 0x0003, name: "RemoveAllScenesResponse",
                    conformance: "M", direction: "response",
                    children: [
                        {
                            tag: "datatype", name: "Status",
                            conformance: "M", type: "enum8"
                        },

                        {
                            tag: "datatype", name: "GroupId",
                            conformance: "M", type: "group-id"
                        }
                    ]
                },

                {
                    tag: "command", id: 0x0004, name: "StoreSceneResponse",
                    conformance: "M", direction: "response",
                    children: [
                        {
                            tag: "datatype", name: "Status",
                            conformance: "M", type: "enum8"
                        },

                        {
                            tag: "datatype", name: "GroupId",
                            conformance: "M", type: "group-id"
                        },

                        {
                            tag: "datatype", name: "SceneId",
                            conformance: "M", type: "uint8"
                        }
                    ]
                },

                {
                    tag: "command", id: 0x0006, name: "GetSceneMembershipResponse",
                    conformance: "M", direction: "response",
                    children: [
                        {
                            tag: "datatype", name: "Status",
                            conformance: "M", type: "enum8"
                        },

                        {
                            tag: "datatype", name: "Capacity",
                            conformance: "M", quality: "X", type: "uint8"
                        },

                        {
                            tag: "datatype", name: "GroupId",
                            conformance: "M", type: "group-id"
                        },

                        {
                            tag: "datatype", name: "SceneList",
                            conformance: "O", type: "uint8"
                        }
                    ]
                },

                {
                    tag: "command", id: 0x0040, name: "EnhancedAddSceneResponse",
                    conformance: "O", direction: "response",
                    children: [
                        {
                            tag: "datatype", name: "Status",
                            conformance: "M", type: "enum8"
                        },

                        {
                            tag: "datatype", name: "GroupId",
                            conformance: "M", type: "group-id"
                        },

                        {
                            tag: "datatype", name: "SceneId",
                            conformance: "M", type: "uint8"
                        }
                    ]
                },

                {
                    tag: "command", id: 0x0041, name: "EnhancedViewSceneResponse",
                    conformance: "O", direction: "response",
                    children: [
                        {
                            tag: "datatype", name: "Status",
                            conformance: "M", type: "enum8"
                        },

                        {
                            tag: "datatype", name: "GroupId",
                            conformance: "M", type: "group-id"
                        },

                        {
                            tag: "datatype", name: "SceneId",
                            conformance: "M", type: "uint8"
                        },

                        {
                            tag: "datatype", name: "TransitionTime",
                            conformance: "O", type: "uint16"
                        },

                        {
                            tag: "datatype", name: "SceneName",
                            conformance: "O", type: "string"
                        },

                        {
                            tag: "datatype", name: "ExtensionFieldSets",
                            conformance: "O", type: "ExtensionFieldSet"
                        }
                    ]
                },

                {
                    tag: "command", id: 0x0042, name: "CopySceneResponse",
                    conformance: "O", direction: "response",
                    children: [
                        {
                            tag: "datatype", name: "Status",
                            conformance: "M", type: "enum8"
                        },

                        {
                            tag: "datatype", name: "GroupIdentifierFrom",
                            conformance: "M", type: "group-id"
                        },

                        {
                            tag: "datatype", name: "SceneIdentifierFrom",
                            conformance: "M", type: "uint8"
                        }
                    ]
                },

                {
                    tag: "datatype", name: "ScenesCopyMode",
                    conformance: "M", type: "map8",
                    children: [
                        {
                            tag: "datatype", id: 0x0001, name: "CopyAllScenes",
                            conformance: "M"
                        }
                    ]
                },

                {
                    tag: "datatype", name: "AttributeValuePair",
                    conformance: "M", type: "struct",
                    children: [
                        {
                            tag: "datatype", name: "AttributeId",
                            conformance: "O", type: "attrib-id"
                        },

                        {
                            tag: "datatype", name: "AttributeValue",
                            conformance: "M", type: "uint8"
                        }
                    ]
                },

                {
                    tag: "datatype", name: "ExtensionFieldSet",
                    conformance: "M", type: "struct",
                    children: [
                        {
                            tag: "datatype", name: "ClusterId",
                            conformance: "M", type: "cluster-id"
                        },

                        {
                            tag: "datatype", name: "AttributeValueList",
                            conformance: "M", type: "AttributeValuePair"
                        }
                    ]
                },

                {
                    tag: "datatype", name: "ScenesFeature",
                    conformance: "M", type: "map32",
                    children: [
                        {
                            tag: "datatype", id: 0x0001, name: "SceneNames",
                            conformance: "M"
                        }
                    ]
                }
            ]
        },

        {
            tag: "cluster", id: 0x0034, name: "SoftwareDiagnostics",
            description: "Software Diagnostics",
            children: [
                {
                    tag: "attribute", id: 0x0000, name: "ThreadMetrics",
                    conformance: "O", type: "list",
                    children: [
                        {
                            tag: "datatype", name: "entry",
                            type: "ThreadMetricsStruct"
                        }
                    ]
                },

                {
                    tag: "attribute", id: 0x0001, name: "CurrentHeapFree",
                    conformance: "O", default: 0, type: "uint64"
                },

                {
                    tag: "attribute", id: 0x0002, name: "CurrentHeapUsed",
                    conformance: "O", default: 0, type: "uint64"
                },

                {
                    tag: "attribute", id: 0x0003, name: "CurrentHeapHighWatermark",
                    conformance: "O", default: 0, type: "uint64"
                },

                {
                    tag: "command", id: 0x0000, name: "ResetWatermarks",
                    conformance: "O", direction: "request"
                },

                {
                    tag: "event", id: 0x0000, name: "SoftwareFault",
                    conformance: "O", priority: "info",
                    children: [
                        {
                            tag: "datatype", name: "Id",
                            conformance: "M", type: "uint64"
                        },

                        {
                            tag: "datatype", name: "Name",
                            conformance: "O", type: "string"
                        },

                        {
                            tag: "datatype", name: "FaultRecording",
                            conformance: "O", type: "octstr"
                        }
                    ]
                },

                {
                    tag: "datatype", name: "ThreadMetricsStruct",
                    conformance: "M", type: "struct",
                    children: [
                        {
                            tag: "datatype", name: "Id",
                            conformance: "M", type: "uint64"
                        },

                        {
                            tag: "datatype", name: "Name",
                            conformance: "O", type: "string"
                        },

                        {
                            tag: "datatype", name: "StackFreeCurrent",
                            conformance: "O", type: "uint32"
                        },

                        {
                            tag: "datatype", name: "StackFreeMinimum",
                            conformance: "O", type: "uint32"
                        },

                        {
                            tag: "datatype", name: "StackSize",
                            conformance: "O", type: "uint32"
                        }
                    ]
                },

                {
                    tag: "datatype", name: "SoftwareDiagnosticsFeature",
                    conformance: "M", type: "map32",
                    children: [
                        {
                            tag: "datatype", id: 0x0001, name: "WaterMarks",
                            conformance: "M"
                        }
                    ]
                }
            ]
        },

        {
            tag: "cluster", id: 0x003b, name: "Switch",
            description: "Switch",
            children: [
                {
                    tag: "attribute", id: 0x0000, name: "NumberOfPositions",
                    conformance: "M", default: 2, type: "uint8"
                },

                {
                    tag: "attribute", id: 0x0001, name: "CurrentPosition",
                    conformance: "M", quality: "P", type: "uint8"
                },

                {
                    tag: "attribute", id: 0x0002, name: "MultiPressMax",
                    conformance: "O", default: 2, type: "uint8"
                },

                {
                    tag: "event", id: 0x0000, name: "SwitchLatched",
                    conformance: "O", priority: "info",
                    children: [
                        {
                            tag: "datatype", name: "NewPosition",
                            conformance: "M", type: "uint8"
                        }
                    ]
                },

                {
                    tag: "event", id: 0x0001, name: "InitialPress",
                    conformance: "O", priority: "info",
                    children: [
                        {
                            tag: "datatype", name: "NewPosition",
                            conformance: "M", type: "uint8"
                        }
                    ]
                },

                {
                    tag: "event", id: 0x0002, name: "LongPress",
                    conformance: "O", priority: "info",
                    children: [
                        {
                            tag: "datatype", name: "NewPosition",
                            conformance: "M", type: "uint8"
                        }
                    ]
                },

                {
                    tag: "event", id: 0x0003, name: "ShortRelease",
                    conformance: "O", priority: "info",
                    children: [
                        {
                            tag: "datatype", name: "PreviousPosition",
                            conformance: "M", type: "uint8"
                        }
                    ]
                },

                {
                    tag: "event", id: 0x0004, name: "LongRelease",
                    conformance: "O", priority: "info",
                    children: [
                        {
                            tag: "datatype", name: "PreviousPosition",
                            conformance: "M", type: "uint8"
                        }
                    ]
                },

                {
                    tag: "event", id: 0x0005, name: "MultiPressOngoing",
                    conformance: "O", priority: "info",
                    children: [
                        {
                            tag: "datatype", name: "NewPosition",
                            conformance: "M", type: "uint8"
                        },

                        {
                            tag: "datatype", name: "CurrentNumberOfPressesCounted",
                            conformance: "M", type: "uint8"
                        }
                    ]
                },

                {
                    tag: "event", id: 0x0006, name: "MultiPressComplete",
                    conformance: "O", priority: "info",
                    children: [
                        {
                            tag: "datatype", name: "PreviousPosition",
                            conformance: "M", type: "uint8"
                        },

                        {
                            tag: "datatype", name: "TotalNumberOfPressesCounted",
                            conformance: "M", type: "uint8"
                        }
                    ]
                },

                {
                    tag: "datatype", name: "SwitchFeature",
                    conformance: "M", type: "map32",
                    children: [
                        {
                            tag: "datatype", id: 0x0001, name: "LatchingSwitch",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0002, name: "MomentarySwitch",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0004, name: "MomentarySwitchRelease",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0008, name: "MomentarySwitchLongPress",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0010, name: "MomentarySwitchMultiPress",
                            conformance: "M"
                        }
                    ]
                }
            ]
        },

        {
            tag: "cluster", id: 0x0505, name: "TargetNavigator",
            description: "Target Navigator",
            children: [
                {
                    tag: "attribute", id: 0x0000, name: "TargetNavigatorList",
                    conformance: "M", type: "list",
                    children: [
                        {
                            tag: "datatype", name: "entry",
                            type: "TargetInfoStruct"
                        }
                    ]
                },

                {
                    tag: "attribute", id: 0x0001, name: "TargetNavigatorCurrentTarget",
                    conformance: "O", default: 0, type: "uint8"
                },

                {
                    tag: "command", id: 0x0000, name: "NavigateTarget",
                    conformance: "M", direction: "request", response: "NavigateTargetResponse",
                    children: [
                        {
                            tag: "datatype", name: "Target",
                            conformance: "M", type: "uint8"
                        },

                        {
                            tag: "datatype", name: "Data",
                            conformance: "O", type: "string"
                        }
                    ]
                },

                {
                    tag: "command", id: 0x0001, name: "NavigateTargetResponse",
                    conformance: "M", direction: "response",
                    children: [
                        {
                            tag: "datatype", name: "Status",
                            conformance: "M", type: "TargetNavigatorStatusEnum"
                        },

                        {
                            tag: "datatype", name: "Data",
                            conformance: "O", type: "string"
                        }
                    ]
                },

                {
                    tag: "datatype", name: "TargetNavigatorStatusEnum",
                    conformance: "M", type: "enum8",
                    children: [
                        {
                            tag: "datatype", id: 0x0000, name: "Success",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0001, name: "TargetNotFound",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0002, name: "NotAllowed",
                            conformance: "M"
                        }
                    ]
                },

                {
                    tag: "datatype", name: "TargetInfoStruct",
                    conformance: "M", type: "struct",
                    children: [
                        {
                            tag: "datatype", name: "Identifier",
                            conformance: "M", type: "uint8"
                        },

                        {
                            tag: "datatype", name: "Name",
                            conformance: "M", type: "string"
                        }
                    ]
                }
            ]
        },

        {
            tag: "cluster", id: 0x0402, name: "TemperatureMeasurement",
            description: "Temperature Measurement",
            children: [
                {
                    tag: "attribute", id: 0x0000, name: "TempMeasuredValue",
                    conformance: "M", quality: "X", type: "int16"
                },

                {
                    tag: "attribute", id: 0x0001, name: "TempMinMeasuredValue",
                    conformance: "M", default: 32768, quality: "X", type: "int16"
                },

                {
                    tag: "attribute", id: 0x0002, name: "TempMaxMeasuredValue",
                    conformance: "M", default: 32768, quality: "X", type: "int16"
                },

                {
                    tag: "attribute", id: 0x0003, name: "TempTolerance",
                    conformance: "O", default: 0, type: "uint16"
                }
            ]
        },

        {
            tag: "cluster", id: 0x0201, name: "Thermostat",
            description: "Thermostat",
            children: [
                {
                    tag: "attribute", id: 0x0000, name: "LocalTemperature",
                    conformance: "M", quality: "X P", type: "int16"
                },

                {
                    tag: "attribute", id: 0x0001, name: "OutdoorTemperature",
                    conformance: "O", quality: "X", type: "int16"
                },

                {
                    tag: "attribute", id: 0x0002, name: "ThermostatOccupancy",
                    conformance: "O", default: 1, type: "map8"
                },

                {
                    tag: "attribute", id: 0x0003, name: "AbsMinHeatSetpointLimit",
                    conformance: "O", default: 700, type: "int16"
                },

                {
                    tag: "attribute", id: 0x0004, name: "AbsMaxHeatSetpointLimit",
                    conformance: "O", default: 3000, type: "int16"
                },

                {
                    tag: "attribute", id: 0x0005, name: "AbsMinCoolSetpointLimit",
                    conformance: "O", default: 1600, type: "int16"
                },

                {
                    tag: "attribute", id: 0x0006, name: "AbsMaxCoolSetpointLimit",
                    conformance: "O", default: 3200, type: "int16"
                },

                {
                    tag: "attribute", id: 0x0007, name: "PiCoolingDemand",
                    conformance: "O", quality: "P", type: "uint8"
                },

                {
                    tag: "attribute", id: 0x0008, name: "PiHeatingDemand",
                    conformance: "O", quality: "P", type: "uint8"
                },

                {
                    tag: "attribute", id: 0x0009, name: "HvacSystemTypeConfiguration",
                    access: "RW VM", conformance: "O", type: "map8"
                },

                {
                    tag: "attribute", id: 0x0010, name: "LocalTemperatureCalibration",
                    access: "RW VM", conformance: "O", default: 0, type: "int8"
                },

                {
                    tag: "attribute", id: 0x0011, name: "OccupiedCoolingSetpoint",
                    access: "RW", conformance: "O", default: 2600, type: "int16"
                },

                {
                    tag: "attribute", id: 0x0012, name: "OccupiedHeatingSetpoint",
                    access: "RW", conformance: "O", default: 2000, type: "int16"
                },

                {
                    tag: "attribute", id: 0x0013, name: "UnoccupiedCoolingSetpoint",
                    access: "RW", conformance: "O", default: 2600, type: "int16"
                },

                {
                    tag: "attribute", id: 0x0014, name: "UnoccupiedHeatingSetpoint",
                    access: "RW", conformance: "O", default: 2000, type: "int16"
                },

                {
                    tag: "attribute", id: 0x0015, name: "MinHeatSetpointLimit",
                    access: "RW VM", conformance: "O", default: 700, type: "int16"
                },

                {
                    tag: "attribute", id: 0x0016, name: "MaxHeatSetpointLimit",
                    access: "RW VM", conformance: "O", default: 3000, type: "int16"
                },

                {
                    tag: "attribute", id: 0x0017, name: "MinCoolSetpointLimit",
                    access: "RW VM", conformance: "O", default: 1600, type: "int16"
                },

                {
                    tag: "attribute", id: 0x0018, name: "MaxCoolSetpointLimit",
                    access: "RW VM", conformance: "O", default: 3200, type: "int16"
                },

                {
                    tag: "attribute", id: 0x0019, name: "MinSetpointDeadBand",
                    access: "RW VM", conformance: "O", default: 25, type: "int8"
                },

                {
                    tag: "attribute", id: 0x001a, name: "RemoteSensing",
                    access: "RW VM", conformance: "O", default: 0, type: "map8"
                },

                {
                    tag: "attribute", id: 0x001b, name: "ControlSequenceOfOperation",
                    access: "RW VM", conformance: "M", default: 4, type: "ThermostatControlSequence"
                },

                {
                    tag: "attribute", id: 0x001c, name: "SystemMode",
                    access: "RW VM", conformance: "M", default: 1, type: "enum8"
                },

                {
                    tag: "attribute", id: 0x001e, name: "ThermostatRunningMode",
                    conformance: "O", type: "enum8"
                },

                {
                    tag: "attribute", id: 0x0020, name: "StartOfWeek",
                    conformance: "O", type: "enum8"
                },

                {
                    tag: "attribute", id: 0x0021, name: "NumberOfWeeklyTransitions",
                    conformance: "O", type: "uint8"
                },

                {
                    tag: "attribute", id: 0x0022, name: "NumberOfDailyTransitions",
                    conformance: "O", type: "uint8"
                },

                {
                    tag: "attribute", id: 0x0023, name: "TemperatureSetpointHold",
                    access: "RW VM", conformance: "O", default: 0, type: "enum8"
                },

                {
                    tag: "attribute", id: 0x0024, name: "TemperatureSetpointHoldDuration",
                    access: "RW VM", conformance: "O", default: 65535, quality: "X", type: "uint16"
                },

                {
                    tag: "attribute", id: 0x0025, name: "ThermostatProgrammingOperationMode",
                    access: "RW VM", conformance: "O", default: 0, type: "map8"
                },

                {
                    tag: "attribute", id: 0x0029, name: "ThermostatRunningState",
                    conformance: "O", type: "map16"
                },

                {
                    tag: "attribute", id: 0x0030, name: "SetpointChangeSource",
                    conformance: "O", type: "enum8"
                },

                {
                    tag: "attribute", id: 0x0031, name: "SetpointChangeAmount",
                    conformance: "O", default: 32768, quality: "X", type: "int16"
                },

                {
                    tag: "attribute", id: 0x0032, name: "SetpointChangeSourceTimestamp",
                    conformance: "O", type: "epoch-s"
                },

                {
                    tag: "attribute", id: 0x0034, name: "OccupiedSetback",
                    access: "RW VM", conformance: "O", quality: "X", type: "uint8"
                },

                {
                    tag: "attribute", id: 0x0035, name: "OccupiedSetbackMin",
                    conformance: "O", quality: "X", type: "uint8"
                },

                {
                    tag: "attribute", id: 0x0036, name: "OccupiedSetbackMax",
                    conformance: "O", quality: "X", type: "uint8"
                },

                {
                    tag: "attribute", id: 0x0037, name: "UnoccupiedSetback",
                    access: "RW VM", conformance: "O", quality: "X", type: "uint8"
                },

                {
                    tag: "attribute", id: 0x0038, name: "UnoccupiedSetbackMin",
                    conformance: "O", quality: "X", type: "uint8"
                },

                {
                    tag: "attribute", id: 0x0039, name: "UnoccupiedSetbackMax",
                    conformance: "O", quality: "X", type: "uint8"
                },

                {
                    tag: "attribute", id: 0x003a, name: "EmergencyHeatDelta",
                    access: "RW VM", conformance: "O", type: "uint8"
                },

                {
                    tag: "attribute", id: 0x0040, name: "AcType",
                    access: "RW VM", conformance: "O", default: 0, type: "enum8"
                },

                {
                    tag: "attribute", id: 0x0041, name: "AcCapacity",
                    access: "RW VM", conformance: "O", default: 0, type: "uint16"
                },

                {
                    tag: "attribute", id: 0x0042, name: "AcRefrigerantType",
                    access: "RW VM", conformance: "O", default: 0, type: "enum8"
                },

                {
                    tag: "attribute", id: 0x0043, name: "AcCompressorType",
                    access: "RW VM", conformance: "O", default: 0, type: "enum8"
                },

                {
                    tag: "attribute", id: 0x0044, name: "AcErrorCode",
                    access: "RW VM", conformance: "O", default: 0, type: "map32"
                },

                {
                    tag: "attribute", id: 0x0045, name: "AcLouverPosition",
                    access: "RW VM", conformance: "O", default: 0, type: "enum8"
                },

                {
                    tag: "attribute", id: 0x0046, name: "AcCoilTemperature",
                    conformance: "O", default: 32768, quality: "X", type: "int16"
                },

                {
                    tag: "attribute", id: 0x0047, name: "AcCapacityFormat",
                    access: "RW VM", conformance: "O", default: 0, type: "enum8"
                },

                {
                    tag: "command", id: 0x0000, name: "SetpointRaiseLower",
                    conformance: "M", direction: "request",
                    children: [
                        {
                            tag: "datatype", name: "Mode",
                            conformance: "M", type: "SetpointAdjustMode"
                        },

                        {
                            tag: "datatype", name: "Amount",
                            conformance: "M", type: "int8"
                        }
                    ]
                },

                {
                    tag: "command", id: 0x0001, name: "SetWeeklySchedule",
                    access: "R M", conformance: "O", direction: "request",
                    children: [
                        {
                            tag: "datatype", name: "NumberOfTransitionsForSequence",
                            conformance: "M", type: "uint8"
                        },

                        {
                            tag: "datatype", name: "DayOfWeekForSequence",
                            conformance: "M", type: "DayOfWeek"
                        },

                        {
                            tag: "datatype", name: "ModeForSequence",
                            conformance: "M", type: "ModeForSequence"
                        },

                        {
                            tag: "datatype", name: "Transitions",
                            conformance: "M", type: "ThermostatScheduleTransition"
                        }
                    ]
                },

                {
                    tag: "command", id: 0x0002, name: "GetWeeklySchedule",
                    conformance: "O", direction: "request", response: "GetWeeklyScheduleResponse",
                    children: [
                        {
                            tag: "datatype", name: "DaysToReturn",
                            conformance: "M", type: "DayOfWeek"
                        },

                        {
                            tag: "datatype", name: "ModeToReturn",
                            conformance: "M", type: "ModeForSequence"
                        }
                    ]
                },

                {
                    tag: "command", id: 0x0003, name: "ClearWeeklySchedule",
                    access: "R M", conformance: "O", direction: "request"
                },

                {
                    tag: "command", id: 0x0000, name: "GetWeeklyScheduleResponse",
                    conformance: "O", direction: "response",
                    children: [
                        {
                            tag: "datatype", name: "NumberOfTransitionsForSequence",
                            conformance: "M", type: "uint8"
                        },

                        {
                            tag: "datatype", name: "DayOfWeekForSequence",
                            conformance: "M", type: "DayOfWeek"
                        },

                        {
                            tag: "datatype", name: "ModeForSequence",
                            conformance: "M", type: "ModeForSequence"
                        },

                        {
                            tag: "datatype", name: "Transitions",
                            conformance: "M", type: "ThermostatScheduleTransition"
                        }
                    ]
                },

                {
                    tag: "datatype", name: "ThermostatFeature",
                    conformance: "M", type: "map32",
                    children: [
                        {
                            tag: "datatype", id: 0x0001, name: "Heating",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0002, name: "Cooling",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0004, name: "Occupancy",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0008, name: "ScheduleConfiguration",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0010, name: "Setback",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0020, name: "AutoMode",
                            conformance: "M"
                        }
                    ]
                },

                {
                    tag: "datatype", name: "DayOfWeek",
                    conformance: "M", type: "map8",
                    children: [
                        {
                            tag: "datatype", id: 0x0001, name: "Sunday",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0002, name: "Monday",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0004, name: "Tuesday",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0008, name: "Wednesday",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0010, name: "Thursday",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0020, name: "Friday",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0040, name: "Saturday",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0080, name: "Away",
                            conformance: "M"
                        }
                    ]
                },

                {
                    tag: "datatype", name: "ModeForSequence",
                    conformance: "M", type: "map8",
                    children: [
                        {
                            tag: "datatype", id: 0x0001, name: "HeatSetpointPresent",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0002, name: "CoolSetpointPresent",
                            conformance: "M"
                        }
                    ]
                },

                {
                    tag: "datatype", name: "ThermostatSystemMode",
                    conformance: "M", type: "enum8",
                    children: [
                        {
                            tag: "datatype", id: 0x0000, name: "Off",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0001, name: "Auto",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0003, name: "Cool",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0004, name: "Heat",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0005, name: "EmergencyHeat",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0006, name: "Precooling",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0007, name: "FanOnly",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0008, name: "Dry",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0009, name: "Sleep",
                            conformance: "M"
                        }
                    ]
                },

                {
                    tag: "datatype", name: "ThermostatRunningMode",
                    conformance: "M", type: "enum8",
                    children: [
                        {
                            tag: "datatype", id: 0x0000, name: "Off",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0003, name: "Cool",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0004, name: "Heat",
                            conformance: "M"
                        }
                    ]
                },

                {
                    tag: "datatype", name: "ThermostatControlSequence",
                    conformance: "M", type: "enum8",
                    children: [
                        {
                            tag: "datatype", id: 0x0000, name: "CoolingOnly",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0001, name: "CoolingWithReheat",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0002, name: "HeatingOnly",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0003, name: "HeatingWithReheat",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0004, name: "CoolingAndHeating",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0005, name: "CoolingAndHeatingWithReheat",
                            conformance: "M"
                        }
                    ]
                },

                {
                    tag: "datatype", name: "SetpointAdjustMode",
                    conformance: "M", type: "enum8",
                    children: [
                        {
                            tag: "datatype", id: 0x0000, name: "Heat",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0001, name: "Cool",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0002, name: "Both",
                            conformance: "M"
                        }
                    ]
                },

                {
                    tag: "datatype", name: "ThermostatScheduleTransition",
                    conformance: "M", type: "struct",
                    children: [
                        {
                            tag: "datatype", name: "TransitionTime",
                            conformance: "M", type: "uint16"
                        },

                        {
                            tag: "datatype", name: "HeatSetpoint",
                            conformance: "M", quality: "X", type: "int16"
                        },

                        {
                            tag: "datatype", name: "CoolSetpoint",
                            conformance: "M", quality: "X", type: "int16"
                        }
                    ]
                }
            ]
        },

        {
            tag: "cluster", id: 0x0204, name: "ThermostatUserInterfaceConfiguration",
            description: "Thermostat User Interface Configuration",
            children: [
                {
                    tag: "attribute", id: 0x0000, name: "TemperatureDisplayMode",
                    access: "RW", conformance: "M", default: 0, type: "enum8"
                },

                {
                    tag: "attribute", id: 0x0001, name: "KeypadLockout",
                    access: "RW VM", conformance: "M", default: 0, type: "enum8"
                },

                {
                    tag: "attribute", id: 0x0002, name: "ScheduleProgrammingVisibility",
                    access: "RW VM", conformance: "O", type: "enum8"
                }
            ]
        },

        {
            tag: "cluster", id: 0x0035, name: "ThreadNetworkDiagnostics",
            description: "Thread Network Diagnostics",
            children: [
                {
                    tag: "attribute", id: 0x0000, name: "Channel",
                    conformance: "M", quality: "X", type: "uint16"
                },

                {
                    tag: "attribute", id: 0x0001, name: "RoutingRole",
                    conformance: "M", quality: "X", type: "RoutingRole"
                },

                {
                    tag: "attribute", id: 0x0002, name: "NetworkName",
                    conformance: "M", default: "", quality: "X", type: "string"
                },

                {
                    tag: "attribute", id: 0x0003, name: "DiagPanId",
                    conformance: "M", default: 0, quality: "X", type: "uint16"
                },

                {
                    tag: "attribute", id: 0x0004, name: "DiagExtendedPanId",
                    conformance: "M", default: 0, quality: "X", type: "uint64"
                },

                {
                    tag: "attribute", id: 0x0005, name: "MeshLocalPrefix",
                    conformance: "M", quality: "X", type: "octstr"
                },

                {
                    tag: "attribute", id: 0x0006, name: "DiagOverrunCount",
                    conformance: "O", default: 0, type: "uint64"
                },

                {
                    tag: "attribute", id: 0x0007, name: "NeighborTable",
                    conformance: "M", type: "list",
                    children: [
                        {
                            tag: "datatype", name: "entry",
                            type: "NeighborTable"
                        }
                    ]
                },

                {
                    tag: "attribute", id: 0x0008, name: "RouteTable",
                    conformance: "M", type: "list",
                    children: [
                        {
                            tag: "datatype", name: "entry",
                            type: "RouteTable"
                        }
                    ]
                },

                {
                    tag: "attribute", id: 0x0009, name: "PartitionId",
                    conformance: "M", quality: "X", type: "uint32"
                },

                {
                    tag: "attribute", id: 0x000a, name: "Weighting",
                    conformance: "M", quality: "X", type: "uint8"
                },

                {
                    tag: "attribute", id: 0x000b, name: "DataVersion",
                    conformance: "M", quality: "X", type: "uint8"
                },

                {
                    tag: "attribute", id: 0x000c, name: "StableDataVersion",
                    conformance: "M", quality: "X", type: "uint8"
                },

                {
                    tag: "attribute", id: 0x000d, name: "LeaderRouterId",
                    conformance: "M", quality: "X", type: "uint8"
                },

                {
                    tag: "attribute", id: 0x000e, name: "DetachedRoleCount",
                    conformance: "O", default: 0, type: "uint16"
                },

                {
                    tag: "attribute", id: 0x000f, name: "ChildRoleCount",
                    conformance: "O", default: 0, type: "uint16"
                },

                {
                    tag: "attribute", id: 0x0010, name: "RouterRoleCount",
                    conformance: "O", default: 0, type: "uint16"
                },

                {
                    tag: "attribute", id: 0x0011, name: "LeaderRoleCount",
                    conformance: "O", default: 0, type: "uint16"
                },

                {
                    tag: "attribute", id: 0x0012, name: "AttachAttemptCount",
                    conformance: "O", default: 0, type: "uint16"
                },

                {
                    tag: "attribute", id: 0x0013, name: "PartitionIdChangeCount",
                    conformance: "O", default: 0, type: "uint16"
                },

                {
                    tag: "attribute", id: 0x0014, name: "BetterPartitionAttachAttemptCount",
                    conformance: "O", default: 0, type: "uint16"
                },

                {
                    tag: "attribute", id: 0x0015, name: "ParentChangeCount",
                    conformance: "O", default: 0, type: "uint16"
                },

                {
                    tag: "attribute", id: 0x0016, name: "TxTotalCount",
                    conformance: "O", default: 0, type: "uint32"
                },

                {
                    tag: "attribute", id: 0x0017, name: "TxUnicastCount",
                    conformance: "O", default: 0, type: "uint32"
                },

                {
                    tag: "attribute", id: 0x0018, name: "TxBroadcastCount",
                    conformance: "O", default: 0, type: "uint32"
                },

                {
                    tag: "attribute", id: 0x0019, name: "TxAckRequestedCount",
                    conformance: "O", default: 0, type: "uint32"
                },

                {
                    tag: "attribute", id: 0x001a, name: "TxAckedCount",
                    conformance: "O", default: 0, type: "uint32"
                },

                {
                    tag: "attribute", id: 0x001b, name: "TxNoAckRequestedCount",
                    conformance: "O", default: 0, type: "uint32"
                },

                {
                    tag: "attribute", id: 0x001c, name: "TxDataCount",
                    conformance: "O", default: 0, type: "uint32"
                },

                {
                    tag: "attribute", id: 0x001d, name: "TxDataPollCount",
                    conformance: "O", default: 0, type: "uint32"
                },

                {
                    tag: "attribute", id: 0x001e, name: "TxBeaconCount",
                    conformance: "O", default: 0, type: "uint32"
                },

                {
                    tag: "attribute", id: 0x001f, name: "TxBeaconRequestCount",
                    conformance: "O", default: 0, type: "uint32"
                },

                {
                    tag: "attribute", id: 0x0020, name: "TxOtherCount",
                    conformance: "O", default: 0, type: "uint32"
                },

                {
                    tag: "attribute", id: 0x0021, name: "TxRetryCount",
                    conformance: "O", default: 0, type: "uint32"
                },

                {
                    tag: "attribute", id: 0x0022, name: "TxDirectMaxRetryExpiryCount",
                    conformance: "O", default: 0, type: "uint32"
                },

                {
                    tag: "attribute", id: 0x0023, name: "TxIndirectMaxRetryExpiryCount",
                    conformance: "O", default: 0, type: "uint32"
                },

                {
                    tag: "attribute", id: 0x0024, name: "TxErrCcaCount",
                    conformance: "O", default: 0, type: "uint32"
                },

                {
                    tag: "attribute", id: 0x0025, name: "TxErrAbortCount",
                    conformance: "O", default: 0, type: "uint32"
                },

                {
                    tag: "attribute", id: 0x0026, name: "TxErrBusyChannelCount",
                    conformance: "O", default: 0, type: "uint32"
                },

                {
                    tag: "attribute", id: 0x0027, name: "RxTotalCount",
                    conformance: "O", default: 0, type: "uint32"
                },

                {
                    tag: "attribute", id: 0x0028, name: "RxUnicastCount",
                    conformance: "O", default: 0, type: "uint32"
                },

                {
                    tag: "attribute", id: 0x0029, name: "RxBroadcastCount",
                    conformance: "O", default: 0, type: "uint32"
                },

                {
                    tag: "attribute", id: 0x002a, name: "RxDataCount",
                    conformance: "O", default: 0, type: "uint32"
                },

                {
                    tag: "attribute", id: 0x002b, name: "RxDataPollCount",
                    conformance: "O", default: 0, type: "uint32"
                },

                {
                    tag: "attribute", id: 0x002c, name: "RxBeaconCount",
                    conformance: "O", default: 0, type: "uint32"
                },

                {
                    tag: "attribute", id: 0x002d, name: "RxBeaconRequestCount",
                    conformance: "O", default: 0, type: "uint32"
                },

                {
                    tag: "attribute", id: 0x002e, name: "RxOtherCount",
                    conformance: "O", default: 0, type: "uint32"
                },

                {
                    tag: "attribute", id: 0x002f, name: "RxAddressFilteredCount",
                    conformance: "O", default: 0, type: "uint32"
                },

                {
                    tag: "attribute", id: 0x0030, name: "RxDestaddrFilteredCount",
                    conformance: "O", default: 0, type: "uint32"
                },

                {
                    tag: "attribute", id: 0x0031, name: "RxDuplicatedCount",
                    conformance: "O", default: 0, type: "uint32"
                },

                {
                    tag: "attribute", id: 0x0032, name: "RxErrNoFrameCount",
                    conformance: "O", default: 0, type: "uint32"
                },

                {
                    tag: "attribute", id: 0x0033, name: "RxErrUnknownNeighborCount",
                    conformance: "O", default: 0, type: "uint32"
                },

                {
                    tag: "attribute", id: 0x0034, name: "RxErrInvalidSrcAddrCount",
                    conformance: "O", default: 0, type: "uint32"
                },

                {
                    tag: "attribute", id: 0x0035, name: "RxErrSecCount",
                    conformance: "O", default: 0, type: "uint32"
                },

                {
                    tag: "attribute", id: 0x0036, name: "RxErrFcsCount",
                    conformance: "O", default: 0, type: "uint32"
                },

                {
                    tag: "attribute", id: 0x0037, name: "RxErrOtherCount",
                    conformance: "O", default: 0, type: "uint32"
                },

                {
                    tag: "attribute", id: 0x0038, name: "ActiveTimestamp",
                    conformance: "O", default: 0, quality: "X", type: "uint64"
                },

                {
                    tag: "attribute", id: 0x0039, name: "PendingTimestamp",
                    conformance: "O", default: 0, quality: "X", type: "uint64"
                },

                {
                    tag: "attribute", id: 0x003a, name: "Delay",
                    conformance: "O", default: 0, quality: "X", type: "uint32"
                },

                {
                    tag: "attribute", id: 0x003b, name: "SecurityPolicy",
                    conformance: "M", quality: "X", type: "SecurityPolicy"
                },

                {
                    tag: "attribute", id: 0x003c, name: "DiagChannelMask",
                    conformance: "M", quality: "X", type: "octstr"
                },

                {
                    tag: "attribute", id: 0x003d, name: "OperationalDatasetComponents",
                    conformance: "M", quality: "X", type: "OperationalDatasetComponents"
                },

                {
                    tag: "attribute", id: 0x003e, name: "ActiveThreadNetworkFaults",
                    conformance: "M", type: "list",
                    children: [
                        {
                            tag: "datatype", name: "entry",
                            type: "NetworkFault"
                        }
                    ]
                },

                {
                    tag: "command", id: 0x0000, name: "ResetCounts",
                    conformance: "O", direction: "request"
                },

                {
                    tag: "event", id: 0x0000, name: "ConnectionStatus",
                    conformance: "O", priority: "info",
                    children: [
                        {
                            tag: "datatype", name: "ConnectionStatus",
                            conformance: "M", type: "ConnectionStatusEnum"
                        }
                    ]
                },

                {
                    tag: "event", id: 0x0001, name: "NetworkFaultChange",
                    conformance: "O", priority: "info",
                    children: [
                        {
                            tag: "datatype", name: "Current",
                            conformance: "M", type: "NetworkFault"
                        },

                        {
                            tag: "datatype", name: "Previous",
                            conformance: "M", type: "NetworkFault"
                        }
                    ]
                },

                {
                    tag: "datatype", name: "NetworkFault",
                    conformance: "M", type: "enum8",
                    children: [
                        {
                            tag: "datatype", id: 0x0000, name: "Unspecified",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0001, name: "LinkDown",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0002, name: "HardwareFailure",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0003, name: "NetworkJammed",
                            conformance: "M"
                        }
                    ]
                },

                {
                    tag: "datatype", name: "RoutingRole",
                    conformance: "M", type: "enum8",
                    children: [
                        {
                            tag: "datatype", id: 0x0000, name: "Unspecified",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0001, name: "Unassigned",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0002, name: "SleepyEndDevice",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0003, name: "EndDevice",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0004, name: "Reed",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0005, name: "Router",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0006, name: "Leader",
                            conformance: "M"
                        }
                    ]
                },

                {
                    tag: "datatype", name: "ConnectionStatusEnum",
                    conformance: "M", type: "enum8",
                    children: [
                        {
                            tag: "datatype", id: 0x0000, name: "Connected",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0001, name: "NotConnected",
                            conformance: "M"
                        }
                    ]
                },

                {
                    tag: "datatype", name: "NeighborTable",
                    conformance: "M", type: "struct",
                    children: [
                        {
                            tag: "datatype", name: "ExtAddress",
                            conformance: "M", type: "uint64"
                        },

                        {
                            tag: "datatype", name: "Age",
                            conformance: "M", type: "uint32"
                        },

                        {
                            tag: "datatype", name: "Rloc16",
                            conformance: "M", type: "uint16"
                        },

                        {
                            tag: "datatype", name: "LinkFrameCounter",
                            conformance: "M", type: "uint32"
                        },

                        {
                            tag: "datatype", name: "MleFrameCounter",
                            conformance: "M", type: "uint32"
                        },

                        {
                            tag: "datatype", name: "Lqi",
                            conformance: "M", type: "uint8"
                        },

                        {
                            tag: "datatype", name: "AverageRssi",
                            conformance: "M", quality: "X", type: "int8"
                        },

                        {
                            tag: "datatype", name: "LastRssi",
                            conformance: "M", quality: "X", type: "int8"
                        },

                        {
                            tag: "datatype", name: "FrameErrorRate",
                            conformance: "M", type: "uint8"
                        },

                        {
                            tag: "datatype", name: "MessageErrorRate",
                            conformance: "M", type: "uint8"
                        },

                        {
                            tag: "datatype", name: "RxOnWhenIdle",
                            conformance: "M", type: "bool"
                        },

                        {
                            tag: "datatype", name: "FullThreadDevice",
                            conformance: "M", type: "bool"
                        },

                        {
                            tag: "datatype", name: "FullNetworkData",
                            conformance: "M", type: "bool"
                        },

                        {
                            tag: "datatype", name: "IsChild",
                            conformance: "M", type: "bool"
                        }
                    ]
                },

                {
                    tag: "datatype", name: "RouteTable",
                    conformance: "M", type: "struct",
                    children: [
                        {
                            tag: "datatype", name: "ExtAddress",
                            conformance: "M", type: "uint64"
                        },

                        {
                            tag: "datatype", name: "Rloc16",
                            conformance: "M", type: "uint16"
                        },

                        {
                            tag: "datatype", name: "RouterId",
                            conformance: "M", type: "uint8"
                        },

                        {
                            tag: "datatype", name: "NextHop",
                            conformance: "M", type: "uint8"
                        },

                        {
                            tag: "datatype", name: "PathCost",
                            conformance: "M", type: "uint8"
                        },

                        {
                            tag: "datatype", name: "LqiIn",
                            conformance: "M", type: "uint8"
                        },

                        {
                            tag: "datatype", name: "LqiOut",
                            conformance: "M", type: "uint8"
                        },

                        {
                            tag: "datatype", name: "Age",
                            conformance: "M", type: "uint8"
                        },

                        {
                            tag: "datatype", name: "Allocated",
                            conformance: "M", type: "bool"
                        },

                        {
                            tag: "datatype", name: "LinkEstablished",
                            conformance: "M", type: "bool"
                        }
                    ]
                },

                {
                    tag: "datatype", name: "SecurityPolicy",
                    conformance: "M", type: "struct",
                    children: [
                        {
                            tag: "datatype", name: "RotationTime",
                            conformance: "M", type: "uint16"
                        },

                        {
                            tag: "datatype", name: "Flags",
                            conformance: "M", type: "uint16"
                        }
                    ]
                },

                {
                    tag: "datatype", name: "OperationalDatasetComponents",
                    conformance: "M", type: "struct",
                    children: [
                        {
                            tag: "datatype", name: "ActiveTimestampPresent",
                            conformance: "M", type: "bool"
                        },

                        {
                            tag: "datatype", name: "PendingTimestampPresent",
                            conformance: "M", type: "bool"
                        },

                        {
                            tag: "datatype", name: "MasterKeyPresent",
                            conformance: "M", type: "bool"
                        },

                        {
                            tag: "datatype", name: "NetworkNamePresent",
                            conformance: "M", type: "bool"
                        },

                        {
                            tag: "datatype", name: "ExtendedPanIdPresent",
                            conformance: "M", type: "bool"
                        },

                        {
                            tag: "datatype", name: "MeshLocalPrefixPresent",
                            conformance: "M", type: "bool"
                        },

                        {
                            tag: "datatype", name: "DelayPresent",
                            conformance: "M", type: "bool"
                        },

                        {
                            tag: "datatype", name: "PanIdPresent",
                            conformance: "M", type: "bool"
                        },

                        {
                            tag: "datatype", name: "ChannelPresent",
                            conformance: "M", type: "bool"
                        },

                        {
                            tag: "datatype", name: "PskcPresent",
                            conformance: "M", type: "bool"
                        },

                        {
                            tag: "datatype", name: "SecurityPolicyPresent",
                            conformance: "M", type: "bool"
                        },

                        {
                            tag: "datatype", name: "ChannelMaskPresent",
                            conformance: "M", type: "bool"
                        }
                    ]
                },

                {
                    tag: "datatype", name: "ThreadNetworkDiagnosticsFeature",
                    conformance: "M", type: "map32",
                    children: [
                        {
                            tag: "datatype", id: 0x0001, name: "PacketCounts",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0002, name: "ErrorCounts",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0004, name: "MleCounts",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0008, name: "MacCounts",
                            conformance: "M"
                        }
                    ]
                }
            ]
        },

        {
            tag: "cluster", id: 0x002c, name: "TimeFormatLocalization",
            description: "Time Format Localization",
            children: [
                {
                    tag: "attribute", id: 0x0000, name: "HourFormat",
                    access: "RW", conformance: "M", type: "HourFormatEnum"
                },

                {
                    tag: "attribute", id: 0x0001, name: "ActiveCalendarType",
                    access: "RW", conformance: "O", type: "CalendarTypeEnum"
                },

                {
                    tag: "attribute", id: 0x0002, name: "SupportedCalendarTypes",
                    conformance: "O", type: "list",
                    children: [
                        {
                            tag: "datatype", name: "entry",
                            type: "CalendarTypeEnum"
                        }
                    ]
                },

                {
                    tag: "datatype", name: "HourFormatEnum",
                    conformance: "M", type: "enum8",
                    children: [
                        {
                            tag: "datatype", id: 0x0000, name: "12Hr",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0001, name: "24Hr",
                            conformance: "M"
                        }
                    ]
                },

                {
                    tag: "datatype", name: "CalendarTypeEnum",
                    conformance: "M", type: "enum8",
                    children: [
                        {
                            tag: "datatype", id: 0x0000, name: "Buddhist",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0001, name: "Chinese",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0002, name: "Coptic",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0003, name: "Ethiopian",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0004, name: "Gregorian",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0005, name: "Hebrew",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0006, name: "Indian",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0007, name: "Islamic",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0008, name: "Japanese",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0009, name: "Korean",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x000a, name: "Persian",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x000b, name: "Taiwanese",
                            conformance: "M"
                        }
                    ]
                }
            ]
        },

        {
            tag: "cluster", id: 0x0038, name: "TimeSynchronization",
            description: "Time Synchronization",
            children: [
                {
                    tag: "attribute", id: 0x0000, name: "UtcTime",
                    conformance: "M", quality: "X", type: "epoch-us"
                },

                {
                    tag: "attribute", id: 0x0001, name: "Granularity",
                    conformance: "M", default: 0, type: "GranularityEnum"
                },

                {
                    tag: "attribute", id: 0x0002, name: "TimeSource",
                    conformance: "O", default: 0, type: "TimeSourceEnum"
                },

                {
                    tag: "attribute", id: 0x0003, name: "TrustedTimeNodeId",
                    access: "RW VA", conformance: "M", quality: "X", type: "node-id"
                },

                {
                    tag: "attribute", id: 0x0004, name: "DefaultNtp",
                    access: "RW VA", conformance: "O", quality: "X", type: "string"
                },

                {
                    tag: "attribute", id: 0x0005, name: "TimeZone",
                    access: "RW VM", conformance: "O", type: "list",
                    children: [
                        {
                            tag: "datatype", name: "entry",
                            type: "TimeZoneStruct"
                        }
                    ]
                },

                {
                    tag: "attribute", id: 0x0006, name: "DstOffset",
                    access: "RW VM", conformance: "O", type: "list",
                    children: [
                        {
                            tag: "datatype", name: "entry",
                            type: "DstOffsetStruct"
                        }
                    ]
                },

                {
                    tag: "attribute", id: 0x0007, name: "LocalTime",
                    conformance: "O", default: 0, quality: "X", type: "epoch-us"
                },

                {
                    tag: "attribute", id: 0x0008, name: "TimeZoneDatabase",
                    conformance: "O", default: true, type: "bool"
                },

                {
                    tag: "attribute", id: 0x0009, name: "NtpServerPort",
                    conformance: "O", quality: "X", type: "uint16"
                },

                {
                    tag: "command", id: 0x0000, name: "SetUtcTime",
                    conformance: "M", direction: "request",
                    children: [
                        {
                            tag: "datatype", name: "UtcTime",
                            conformance: "M", type: "epoch-us"
                        },

                        {
                            tag: "datatype", name: "Granularity",
                            conformance: "M", type: "GranularityEnum"
                        },

                        {
                            tag: "datatype", name: "TimeSource",
                            conformance: "O", type: "TimeSourceEnum"
                        }
                    ]
                },

                {
                    tag: "datatype", name: "GranularityEnum",
                    conformance: "M", type: "enum8",
                    children: [
                        {
                            tag: "datatype", id: 0x0000, name: "NoTimeGranularity",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0001, name: "MinutesGranularity",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0002, name: "SecondsGranularity",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0003, name: "MillisecondsGranularity",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0004, name: "MicrosecondsGranularity",
                            conformance: "M"
                        }
                    ]
                },

                {
                    tag: "datatype", name: "TimeSourceEnum",
                    conformance: "M", type: "enum8",
                    children: [
                        {
                            tag: "datatype", id: 0x0000, name: "None",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0001, name: "Unknown",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0002, name: "Admin",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0003, name: "NodeTimeCluster",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0004, name: "NonFabricSntp",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0005, name: "NonFabricNtp",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0006, name: "FabricSntp",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0007, name: "FabricNtp",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0008, name: "MixedNtp",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0009, name: "NonFabricSntpNts",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x000a, name: "NonFabricNtpNts",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x000b, name: "FabricSntpNts",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x000c, name: "FabricNtpNts",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x000d, name: "MixedNtpNts",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x000e, name: "CloudSource",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x000f, name: "Ptp",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0010, name: "Gnss",
                            conformance: "M"
                        }
                    ]
                },

                {
                    tag: "datatype", name: "TimeZoneStruct",
                    conformance: "M", type: "struct",
                    children: [
                        {
                            tag: "datatype", name: "Offset",
                            conformance: "M", type: "int32"
                        },

                        {
                            tag: "datatype", name: "ValidAt",
                            conformance: "M", type: "epoch-us"
                        },

                        {
                            tag: "datatype", name: "Name",
                            conformance: "O", type: "string"
                        }
                    ]
                },

                {
                    tag: "datatype", name: "DstOffsetStruct",
                    conformance: "M", type: "struct",
                    children: [
                        {
                            tag: "datatype", name: "Offset",
                            conformance: "M", type: "int32"
                        },

                        {
                            tag: "datatype", name: "ValidStarting",
                            conformance: "M", type: "epoch-us"
                        },

                        {
                            tag: "datatype", name: "ValidUntil",
                            conformance: "M", type: "epoch-us"
                        }
                    ]
                }
            ]
        },

        {
            tag: "cluster", id: 0x002d, name: "UnitLocalization",
            description: "Unit Localization",
            children: [
                {
                    tag: "attribute", id: 0x0000, name: "TemperatureUnit",
                    access: "RW", conformance: "O", type: "TempUnitEnum"
                },

                {
                    tag: "datatype", name: "TempUnitEnum",
                    conformance: "M", type: "enum8",
                    children: [
                        {
                            tag: "datatype", id: 0x0000, name: "Fahrenheit",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0001, name: "Celsius",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0002, name: "Kelvin",
                            conformance: "M"
                        }
                    ]
                },

                {
                    tag: "datatype", name: "UnitLocalizationFeature",
                    conformance: "M", type: "map32",
                    children: [
                        {
                            tag: "datatype", id: 0x0001, name: "TemperatureUnit",
                            conformance: "M"
                        }
                    ]
                }
            ]
        },

        {
            tag: "cluster", id: 0x0041, name: "UserLabel",
            description: "User Label",
            children: [
                {
                    tag: "attribute", id: 0x0000, name: "LabelList",
                    access: "RW VM", conformance: "M", type: "list",
                    children: [
                        {
                            tag: "datatype", name: "entry",
                            type: "LabelStruct"
                        }
                    ]
                }
            ]
        },

        {
            tag: "cluster", id: 0x0503, name: "WakeOnLan",
            description: "Wake on LAN",
            children: [
                {
                    tag: "attribute", id: 0x0000, name: "WakeOnLanMacAddress",
                    conformance: "O", type: "string"
                }
            ]
        },

        {
            tag: "cluster", id: 0x0036, name: "WiFiNetworkDiagnostics",
            description: "WiFi Network Diagnostics",
            children: [
                {
                    tag: "attribute", id: 0x0000, name: "Bssid",
                    conformance: "M", quality: "X", type: "octstr"
                },

                {
                    tag: "attribute", id: 0x0001, name: "SecurityType",
                    conformance: "M", quality: "X", type: "SecurityTypeEnum"
                },

                {
                    tag: "attribute", id: 0x0002, name: "WifiVersion",
                    conformance: "M", quality: "X", type: "WiFiVersionEnum"
                },

                {
                    tag: "attribute", id: 0x0003, name: "ChannelNumber",
                    conformance: "M", default: 0, quality: "X", type: "uint16"
                },

                {
                    tag: "attribute", id: 0x0004, name: "Rssi",
                    conformance: "M", quality: "X", type: "int8"
                },

                {
                    tag: "attribute", id: 0x0005, name: "BeaconLostCount",
                    conformance: "O", default: 0, quality: "X", type: "uint32"
                },

                {
                    tag: "attribute", id: 0x0006, name: "BeaconRxCount",
                    conformance: "O", default: 0, quality: "X", type: "uint32"
                },

                {
                    tag: "attribute", id: 0x0007, name: "PacketMulticastRxCount",
                    conformance: "O", default: 0, quality: "X", type: "uint32"
                },

                {
                    tag: "attribute", id: 0x0008, name: "PacketMulticastTxCount",
                    conformance: "O", default: 0, quality: "X", type: "uint32"
                },

                {
                    tag: "attribute", id: 0x0009, name: "PacketUnicastRxCount",
                    conformance: "O", default: 0, quality: "X", type: "uint32"
                },

                {
                    tag: "attribute", id: 0x000a, name: "PacketUnicastTxCount",
                    conformance: "O", default: 0, quality: "X", type: "uint32"
                },

                {
                    tag: "attribute", id: 0x000b, name: "CurrentMaxRate",
                    conformance: "O", default: 0, quality: "X", type: "uint64"
                },

                {
                    tag: "attribute", id: 0x000c, name: "OverrunCount",
                    conformance: "O", default: 0, quality: "X", type: "uint64"
                },

                {
                    tag: "command", id: 0x0000, name: "ResetCounts",
                    conformance: "O", direction: "request"
                },

                {
                    tag: "event", id: 0x0000, name: "Disconnection",
                    conformance: "O", priority: "info",
                    children: [
                        {
                            tag: "datatype", name: "ReasonCode",
                            conformance: "M", type: "uint16"
                        }
                    ]
                },

                {
                    tag: "event", id: 0x0001, name: "AssociationFailure",
                    conformance: "O", priority: "info",
                    children: [
                        {
                            tag: "datatype", name: "AssociationFailure",
                            conformance: "M", type: "AssociationFailureCauseEnum"
                        },

                        {
                            tag: "datatype", name: "Status",
                            conformance: "M", type: "uint16"
                        }
                    ]
                },

                {
                    tag: "event", id: 0x0002, name: "ConnectionStatus",
                    conformance: "O", priority: "info",
                    children: [
                        {
                            tag: "datatype", name: "ConnectionStatus",
                            conformance: "M", type: "ConnectionStatusEnum"
                        }
                    ]
                },

                {
                    tag: "datatype", name: "SecurityTypeEnum",
                    conformance: "M", type: "enum8",
                    children: [
                        {
                            tag: "datatype", id: 0x0000, name: "Unspecified",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0001, name: "None",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0002, name: "Wep",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0003, name: "Wpa",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0004, name: "Wpa2",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0005, name: "Wpa3",
                            conformance: "M"
                        }
                    ]
                },

                {
                    tag: "datatype", name: "WiFiVersionEnum",
                    conformance: "M", type: "enum8",
                    children: [
                        {
                            tag: "datatype", id: 0x0000, name: "A",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0001, name: "B",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0002, name: "G",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0003, name: "N",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0004, name: "Ac",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0005, name: "Ax",
                            conformance: "M"
                        }
                    ]
                },

                {
                    tag: "datatype", name: "AssociationFailureCauseEnum",
                    conformance: "M", type: "enum8",
                    children: [
                        {
                            tag: "datatype", id: 0x0000, name: "Unknown",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0001, name: "AssociationFailed",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0002, name: "AuthenticationFailed",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0003, name: "SsidNotFound",
                            conformance: "M"
                        }
                    ]
                },

                {
                    tag: "datatype", name: "ConnectionStatusEnum",
                    conformance: "M", type: "enum8",
                    children: [
                        {
                            tag: "datatype", id: 0x0000, name: "Connected",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0001, name: "NotConnected",
                            conformance: "M"
                        }
                    ]
                },

                {
                    tag: "datatype", name: "WiFiNetworkDiagnosticsFeature",
                    conformance: "M", type: "map32",
                    children: [
                        {
                            tag: "datatype", id: 0x0001, name: "PacketCounts",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0002, name: "ErrorCounts",
                            conformance: "M"
                        }
                    ]
                }
            ]
        },

        {
            tag: "cluster", id: 0x0102, name: "WindowCovering",
            description: "Window Covering",
            children: [
                {
                    tag: "attribute", id: 0x0000, name: "WcType",
                    conformance: "M", default: 0, type: "Type"
                },

                {
                    tag: "attribute", id: 0x0001, name: "WcPhysicalClosedLimitLift",
                    conformance: "O", default: 0, type: "uint16"
                },

                {
                    tag: "attribute", id: 0x0002, name: "WcPhysicalClosedLimitTilt",
                    conformance: "O", default: 0, type: "uint16"
                },

                {
                    tag: "attribute", id: 0x0003, name: "WcCurrentPositionLift",
                    conformance: "O", quality: "X", type: "uint16"
                },

                {
                    tag: "attribute", id: 0x0004, name: "WcCurrentPositionTilt",
                    conformance: "O", quality: "X", type: "uint16"
                },

                {
                    tag: "attribute", id: 0x0005, name: "WcNumberOfActuationsLift",
                    conformance: "O", default: 0, type: "uint16"
                },

                {
                    tag: "attribute", id: 0x0006, name: "WcNumberOfActuationsTilt",
                    conformance: "O", default: 0, type: "uint16"
                },

                {
                    tag: "attribute", id: 0x0007, name: "WcConfigStatus",
                    conformance: "M", default: 3, type: "ConfigStatus"
                },

                {
                    tag: "attribute", id: 0x0008, name: "WcCurrentPositionLiftPercentage",
                    conformance: "O", quality: "X P", type: "percent"
                },

                {
                    tag: "attribute", id: 0x0009, name: "WcCurrentPositionTiltPercentage",
                    conformance: "O", quality: "X P", type: "percent"
                },

                {
                    tag: "attribute", id: 0x000a, name: "WcOperationalStatus",
                    conformance: "M", default: 0, quality: "P", type: "OperationalStatus"
                },

                {
                    tag: "attribute", id: 0x000b, name: "WcTargetPositionLiftPercent100Ths",
                    conformance: "O", quality: "X P", type: "percent100ths"
                },

                {
                    tag: "attribute", id: 0x000c, name: "WcTargetPositionTiltPercent100Ths",
                    conformance: "O", quality: "X P", type: "percent100ths"
                },

                {
                    tag: "attribute", id: 0x000d, name: "WcEndProductType",
                    conformance: "M", default: 0, type: "EndProductType"
                },

                {
                    tag: "attribute", id: 0x000e, name: "WcCurrentPositionLiftPercent100Ths",
                    conformance: "O", quality: "X P", type: "percent100ths"
                },

                {
                    tag: "attribute", id: 0x000f, name: "WcCurrentPositionTiltPercent100Ths",
                    conformance: "O", quality: "X P", type: "percent100ths"
                },

                {
                    tag: "attribute", id: 0x0010, name: "WcInstalledOpenLimitLift",
                    conformance: "O", default: 0, type: "uint16"
                },

                {
                    tag: "attribute", id: 0x0011, name: "WcInstalledClosedLimitLift",
                    conformance: "O", default: 65535, type: "uint16"
                },

                {
                    tag: "attribute", id: 0x0012, name: "WcInstalledOpenLimitTilt",
                    conformance: "O", default: 0, type: "uint16"
                },

                {
                    tag: "attribute", id: 0x0013, name: "WcInstalledClosedLimitTilt",
                    conformance: "O", default: 65535, type: "uint16"
                },

                {
                    tag: "attribute", id: 0x0017, name: "WcMode",
                    access: "RW VM", conformance: "M", default: 0, type: "Mode"
                },

                {
                    tag: "attribute", id: 0x001a, name: "WcSafetyStatus",
                    conformance: "O", default: 0, quality: "P", type: "SafetyStatus"
                },

                {
                    tag: "command", id: 0x0000, name: "UpOrOpen",
                    conformance: "M", direction: "request"
                },

                {
                    tag: "command", id: 0x0001, name: "DownOrClose",
                    conformance: "M", direction: "request"
                },

                {
                    tag: "command", id: 0x0002, name: "StopMotion",
                    conformance: "M", direction: "request"
                },

                {
                    tag: "command", id: 0x0004, name: "GoToLiftValue",
                    conformance: "O", direction: "request",
                    children: [
                        {
                            tag: "datatype", name: "LiftValue",
                            conformance: "M", type: "uint16"
                        }
                    ]
                },

                {
                    tag: "command", id: 0x0005, name: "GoToLiftPercentage",
                    conformance: "O", direction: "request",
                    children: [
                        {
                            tag: "datatype", name: "LiftPercent100ThsValue",
                            conformance: "M", type: "percent100ths"
                        }
                    ]
                },

                {
                    tag: "command", id: 0x0007, name: "GoToTiltValue",
                    conformance: "O", direction: "request",
                    children: [
                        {
                            tag: "datatype", name: "TiltValue",
                            conformance: "M", type: "uint16"
                        }
                    ]
                },

                {
                    tag: "command", id: 0x0008, name: "GoToTiltPercentage",
                    conformance: "O", direction: "request",
                    children: [
                        {
                            tag: "datatype", name: "TiltPercent100ThsValue",
                            conformance: "M", type: "percent100ths"
                        }
                    ]
                },

                {
                    tag: "datatype", name: "Type",
                    conformance: "M", type: "enum8",
                    children: [
                        {
                            tag: "datatype", id: 0x0000, name: "RollerShade",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0001, name: "RollerShade2Motor",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0002, name: "RollerShadeExterior",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0003, name: "RollerShadeExterior2Motor",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0004, name: "Drapery",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0005, name: "Awning",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0006, name: "Shutter",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0007, name: "TiltBlindTiltOnly",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0008, name: "TiltBlindLiftAndTilt",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0009, name: "ProjectorScreen",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x00ff, name: "Unknown",
                            conformance: "M"
                        }
                    ]
                },

                {
                    tag: "datatype", name: "EndProductType",
                    conformance: "M", type: "enum8",
                    children: [
                        {
                            tag: "datatype", id: 0x0000, name: "RollerShade",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0001, name: "RomanShade",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0002, name: "BalloonShade",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0003, name: "WovenWood",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0004, name: "PleatedShade",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0005, name: "CellularShade",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0006, name: "LayeredShade",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0007, name: "LayeredShade2D",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0008, name: "SheerShade",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0009, name: "TiltOnlyInteriorBlind",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x000a, name: "InteriorBlind",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x000b, name: "VerticalBlindStripCurtain",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x000c, name: "InteriorVenetianBlind",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x000d, name: "ExteriorVenetianBlind",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x000e, name: "LateralLeftCurtain",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x000f, name: "LateralRightCurtain",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0010, name: "CentralCurtain",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0011, name: "RollerShutter",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0012, name: "ExteriorVerticalScreen",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0013, name: "AwningTerracePatio",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0014, name: "AwningVerticalScreen",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0015, name: "TiltOnlyPergola",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0016, name: "SwingingShutter",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0017, name: "SlidingShutter",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x00ff, name: "Unknown",
                            conformance: "M"
                        }
                    ]
                },

                {
                    tag: "datatype", name: "Mode",
                    conformance: "M", type: "map8",
                    children: [
                        {
                            tag: "datatype", id: 0x0001, name: "MotorDirectionReversed",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0002, name: "CalibrationMode",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0004, name: "MaintenanceMode",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0008, name: "LedFeedback",
                            conformance: "M"
                        }
                    ]
                },

                {
                    tag: "datatype", name: "OperationalStatus",
                    conformance: "M", type: "map8",
                    children: [
                        {
                            tag: "datatype", id: 0x0003, name: "Global",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x000c, name: "Lift",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0030, name: "Tilt",
                            conformance: "M"
                        }
                    ]
                },

                {
                    tag: "datatype", name: "ConfigStatus",
                    conformance: "M", type: "map8",
                    children: [
                        {
                            tag: "datatype", id: 0x0001, name: "Operational",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0002, name: "OnlineReserved",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0004, name: "LiftMovementReversed",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0008, name: "LiftPositionAware",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0010, name: "TiltPositionAware",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0020, name: "LiftEncoderControlled",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0040, name: "TiltEncoderControlled",
                            conformance: "M"
                        }
                    ]
                },

                {
                    tag: "datatype", name: "SafetyStatus",
                    conformance: "M", type: "map16",
                    children: [
                        {
                            tag: "datatype", id: 0x0001, name: "RemoteLockout",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0002, name: "TamperDetection",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0004, name: "FailedCommunication",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0008, name: "PositionFailure",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0010, name: "ThermalProtection",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0020, name: "ObstacleDetected",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0040, name: "Power",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0080, name: "StopInput",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0100, name: "MotorJammed",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0200, name: "HardwareFailure",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0400, name: "ManualOperation",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0800, name: "Protection",
                            conformance: "M"
                        }
                    ]
                },

                {
                    tag: "datatype", name: "WindowCoveringFeature",
                    conformance: "M", type: "map32",
                    children: [
                        {
                            tag: "datatype", id: 0x0001, name: "Lift",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0002, name: "Tilt",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0004, name: "PositionAwareLift",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0008, name: "AbsolutePosition",
                            conformance: "M"
                        },

                        {
                            tag: "datatype", id: 0x0010, name: "PositionAwareTilt",
                            conformance: "M"
                        }
                    ]
                }
            ]
        }
    ]
}