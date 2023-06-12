/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ChipMatter } from "../index.js";
import { ClusterElement, AttributeElement, DatatypeElement, CommandElement, EventElement } from "../../../index.js";

ChipMatter.children!.push(ClusterElement({
    id: 0x002a, name: "OtaSoftwareUpdateRequestor",
    description: "OTA Software Update Requestor",
    details: "Provides an interface for downloading and applying OTA software updates",
    children: [
        AttributeElement({
            id: 0x0000, name: "DefaultOtaProviders", base: "list",
            access: "W", conformance: "M",
            children: [
                DatatypeElement({
                    name: "entry", base: "ProviderLocation"
                })
            ]
        }),

        AttributeElement({
            id: 0x0001, name: "UpdatePossible", base: "bool",
            access: "R", conformance: "M", default: true
        }),

        AttributeElement({
            id: 0x0002, name: "UpdateState", base: "OtaUpdateStateEnum",
            access: "R", conformance: "M", default: 0
        }),

        AttributeElement({
            id: 0x0003, name: "UpdateStateProgress", base: "uint8",
            access: "R", conformance: "M", quality: "X"
        }),

        CommandElement({
            id: 0x0000, name: "AnnounceOtaProvider",
            access: "R", conformance: "O", direction: "request",
            children: [
                DatatypeElement({
                    name: "ProviderNodeId", base: "node-id",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "VendorId", base: "vendor-id",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "AnnouncementReason", base: "OtaAnnouncementReason",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "MetadataForNode", base: "octstr",
                    access: "R", conformance: "O"
                }),

                DatatypeElement({
                    name: "Endpoint", base: "endpoint-no",
                    access: "R", conformance: "M"
                })
            ]
        }),

        EventElement({
            id: 0x0000, name: "StateTransition",
            access: "R", conformance: "M", priority: "info",
            children: [
                DatatypeElement({
                    name: "PreviousState", base: "OtaUpdateStateEnum",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "NewState", base: "OtaUpdateStateEnum",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "Reason", base: "OtaChangeReasonEnum",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "TargetSoftwareVersion", base: "uint32",
                    access: "R", conformance: "M", quality: "X"
                })
            ]
        }),

        EventElement({
            id: 0x0001, name: "VersionApplied",
            access: "R", conformance: "M", priority: "critical",
            children: [
                DatatypeElement({
                    name: "SoftwareVersion", base: "uint32",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "ProductId", base: "uint16",
                    access: "R", conformance: "M"
                })
            ]
        }),

        EventElement({
            id: 0x0002, name: "DownloadError",
            access: "R", conformance: "M", priority: "info",
            children: [
                DatatypeElement({
                    name: "SoftwareVersion", base: "uint32",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "BytesDownloaded", base: "uint64",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "ProgressPercent", base: "uint8",
                    access: "R", conformance: "M", quality: "X"
                }),

                DatatypeElement({
                    name: "PlatformCode", base: "int64",
                    access: "R", conformance: "M", quality: "X"
                })
            ]
        }),

        DatatypeElement({
            name: "OtaAnnouncementReason", base: "enum8",
            access: "R", conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "SimpleAnnouncement",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0001, name: "UpdateAvailable",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0002, name: "UrgentUpdateAvailable",
                    access: "R", conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "OtaUpdateStateEnum", base: "enum8",
            access: "R", conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "Unknown",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0001, name: "Idle",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0002, name: "Querying",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0003, name: "DelayedOnQuery",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0004, name: "Downloading",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0005, name: "Applying",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0006, name: "DelayedOnApply",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0007, name: "RollingBack",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0008, name: "DelayedOnUserConsent",
                    access: "R", conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "OtaChangeReasonEnum", base: "enum8",
            access: "R", conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "Unknown",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0001, name: "Success",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0002, name: "Failure",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0003, name: "TimeOut",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0004, name: "DelayByProvider",
                    access: "R", conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "ProviderLocation", base: "struct",
            access: "R F", conformance: "M",
            children: [
                DatatypeElement({
                    name: "ProviderNodeId", base: "node-id",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "Endpoint", base: "endpoint-no",
                    access: "R", conformance: "M"
                })
            ]
        })
    ]
}));
