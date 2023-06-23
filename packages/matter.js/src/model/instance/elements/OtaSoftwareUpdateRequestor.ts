/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Matter } from "../Matter.js";

Matter.children.push({
    tag: "cluster", name: "OtaSoftwareUpdateRequestor", id: 0x2a, classification: "node",
    description: "OTA Software Update Requestor",
    details: "Provides an interface for downloading and applying OTA software updates",
    xref: { document: "core", section: "11.19.7" },
    children: [
        {
            tag: "attribute", name: "DefaultOtaProviders", id: 0x0, type: "list", access: "RW",
            conformance: "M", constraint: "desc",
            xref: { document: "core", section: "11.19.7.5" },
            children: [
                {
                    tag: "datatype", name: "entry", type: "ProviderLocation"
                }
            ]
        },

        {
            tag: "attribute", name: "UpdatePossible", id: 0x1, type: "bool", access: "R V", conformance: "M",
            default: true,
            xref: { document: "core", section: "11.19.7.5" }
        },

        {
            tag: "attribute", name: "UpdateState", id: 0x2, type: "OtaUpdateStateEnum", access: "R V",
            conformance: "M", default: 0,
            xref: { document: "core", section: "11.19.7.5" }
        },

        {
            tag: "attribute", name: "UpdateStateProgress", id: 0x3, type: "uint8", access: "R V",
            conformance: "M", constraint: "0 to 100", default: null, quality: "X",
            xref: { document: "core", section: "11.19.7.5" }
        },

        {
            tag: "event", name: "StateTransition", id: 0x0, access: "V", conformance: "M", priority: "info",
            xref: { document: "core", section: "11.19.7.7" },
            children: [
                {
                    tag: "datatype", name: "PreviousState", type: "OtaUpdateStateEnum", conformance: "M"
                },

                {
                    tag: "datatype", name: "NewState", type: "OtaUpdateStateEnum", conformance: "M"
                },

                {
                    tag: "datatype", name: "Reason", type: "OtaChangeReasonEnum", conformance: "M"
                },

                {
                    tag: "datatype", name: "TargetSoftwareVersion", type: "uint32", conformance: "M", quality: "X"
                }
            ]
        },

        {
            tag: "event", name: "VersionApplied", id: 0x1, access: "V", conformance: "M", priority: "critical",
            xref: { document: "core", section: "11.19.7.7" },
            children: [
                {
                    tag: "datatype", name: "SoftwareVersion", type: "uint32", conformance: "M"
                },

                {
                    tag: "datatype", name: "ProductId", type: "uint16", conformance: "M"
                }
            ]
        },

        {
            tag: "event", name: "DownloadError", id: 0x2, access: "V", conformance: "M", priority: "info",
            xref: { document: "core", section: "11.19.7.7" },
            children: [
                {
                    tag: "datatype", name: "SoftwareVersion", type: "uint32", conformance: "M"
                },

                {
                    tag: "datatype", name: "BytesDownloaded", type: "uint64", conformance: "M"
                },

                {
                    tag: "datatype", name: "ProgressPercent", type: "uint8", conformance: "M", quality: "X"
                },

                {
                    tag: "datatype", name: "PlatformCode", type: "int64", conformance: "M", quality: "X"
                }
            ]
        },

        {
            tag: "command", name: "AnnounceOtaProvider", id: 0x0, access: "A", conformance: "O",
            direction: "request", response: "status",
            xref: { document: "core", section: "11.19.7.6" },
            children: [
                {
                    tag: "datatype", name: "ProviderNodeId", type: "node-id", conformance: "M"
                },

                {
                    tag: "datatype", name: "VendorId", type: "vendor-id", conformance: "M"
                },

                {
                    tag: "datatype", name: "AnnouncementReason", type: "OtaAnnouncementReason", conformance: "M"
                },

                {
                    tag: "datatype", name: "MetadataForNode", type: "octstr", conformance: "O"
                },

                {
                    tag: "datatype", name: "Endpoint", type: "endpoint-no", conformance: "M"
                }
            ]
        },

        {
            tag: "datatype", name: "ProviderLocation", type: "struct", access: "R F", conformance: "M",
            children: [
                {
                    tag: "datatype", name: "ProviderNodeId", type: "node-id", conformance: "M"
                },

                {
                    tag: "datatype", name: "Endpoint", type: "endpoint-no", conformance: "M"
                }
            ]
        },

        {
            tag: "datatype", name: "OtaUpdateStateEnum", type: "enum8", conformance: "M",
            children: [
                {
                    tag: "datatype", name: "Unknown", id: 0x0, conformance: "M"
                },

                {
                    tag: "datatype", name: "Idle", id: 0x1, conformance: "M"
                },

                {
                    tag: "datatype", name: "Querying", id: 0x2, conformance: "M"
                },

                {
                    tag: "datatype", name: "DelayedOnQuery", id: 0x3, conformance: "M"
                },

                {
                    tag: "datatype", name: "Downloading", id: 0x4, conformance: "M"
                },

                {
                    tag: "datatype", name: "Applying", id: 0x5, conformance: "M"
                },

                {
                    tag: "datatype", name: "DelayedOnApply", id: 0x6, conformance: "M"
                },

                {
                    tag: "datatype", name: "RollingBack", id: 0x7, conformance: "M"
                },

                {
                    tag: "datatype", name: "DelayedOnUserConsent", id: 0x8, conformance: "M"
                }
            ]
        },

        {
            tag: "datatype", name: "OtaAnnouncementReason", type: "enum8", conformance: "M",
            children: [
                {
                    tag: "datatype", name: "SimpleAnnouncement", id: 0x0, conformance: "M"
                },

                {
                    tag: "datatype", name: "UpdateAvailable", id: 0x1, conformance: "M"
                },

                {
                    tag: "datatype", name: "UrgentUpdateAvailable", id: 0x2, conformance: "M"
                }
            ]
        },

        {
            tag: "datatype", name: "OtaChangeReasonEnum", type: "enum8", conformance: "M",
            children: [
                {
                    tag: "datatype", name: "Unknown", id: 0x0, conformance: "M"
                },

                {
                    tag: "datatype", name: "Success", id: 0x1, conformance: "M"
                },

                {
                    tag: "datatype", name: "Failure", id: 0x2, conformance: "M"
                },

                {
                    tag: "datatype", name: "TimeOut", id: 0x3, conformance: "M"
                },

                {
                    tag: "datatype", name: "DelayByProvider", id: 0x4, conformance: "M"
                }
            ]
        }
    ]
});
