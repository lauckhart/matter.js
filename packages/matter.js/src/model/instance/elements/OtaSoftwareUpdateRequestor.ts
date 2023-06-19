/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Matter } from "../Matter.js";

Matter.children.push({
    tag: "cluster", id: 0x002a, name: "OtaSoftwareUpdateRequestor",
    classification: "node", description: "OTA Software Update Requestor",
    children: [
        {
            tag: "attribute", id: 0x0000, name: "DefaultOtaProviders",
            access: "RW", conformance: "M", constraint: "desc", default: [], type: "list",
            xref: { document: "core", section: "11.19.7.5" },
            children: [
                {
                    tag: "datatype", name: "entry",
                    type: "ProviderLocationStruct"
                }
            ]
        },

        {
            tag: "attribute", id: 0x0001, name: "UpdatePossible",
            access: "R V", conformance: "M", default: true, type: "bool",
            xref: { document: "core", section: "11.19.7.5" }
        },

        {
            tag: "attribute", id: 0x0002, name: "UpdateState",
            access: "R V", conformance: "M", default: 0, type: "UpdateStateEnum",
            xref: { document: "core", section: "11.19.7.5" }
        },

        {
            tag: "attribute", id: 0x0003, name: "UpdateStateProgress",
            access: "R V", conformance: "M", constraint: "0 to 100", default: undefined, quality: "X", type: "uint8",
            xref: { document: "core", section: "11.19.7.5" }
        },

        {
            tag: "event", id: 0x0000, name: "StateTransition",
            access: "V", conformance: "M", priority: "info",
            xref: { document: "core", section: "11.19.7.7" },
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
            access: "V", conformance: "M", priority: "critical",
            xref: { document: "core", section: "11.19.7.7" },
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
            access: "V", conformance: "M", priority: "info",
            xref: { document: "core", section: "11.19.7.7" },
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
            tag: "command", id: 0x0000, name: "AnnounceOtaProvider",
            access: "A", conformance: "O", direction: "request", response: "status",
            xref: { document: "core", section: "11.19.7.6" },
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
});
