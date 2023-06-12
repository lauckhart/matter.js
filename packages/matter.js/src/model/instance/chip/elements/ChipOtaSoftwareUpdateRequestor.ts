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
            access: "RW",
            children: [
                DatatypeElement({
                    name: "entry", base: "ProviderLocation"
                })
            ]
        }),

        AttributeElement({
            id: 0x0001, name: "UpdatePossible", base: "bool",
            default: true
        }),

        AttributeElement({
            id: 0x0002, name: "UpdateState", base: "OtaUpdateStateEnum",
            default: 0
        }),

        AttributeElement({
            id: 0x0003, name: "UpdateStateProgress", base: "uint8",
            quality: "X"
        }),

        CommandElement({
            id: 0x0000, name: "AnnounceOtaProvider",
            conformance: "O", direction: "request",
            children: [
                DatatypeElement({
                    name: "ProviderNodeId", base: "node-id"
                }),

                DatatypeElement({
                    name: "VendorId", base: "vendor-id"
                }),

                DatatypeElement({
                    name: "AnnouncementReason", base: "OtaAnnouncementReason"
                }),

                DatatypeElement({
                    name: "MetadataForNode", base: "octstr",
                    conformance: "O"
                }),

                DatatypeElement({
                    name: "Endpoint", base: "endpoint-no"
                })
            ]
        }),

        EventElement({
            id: 0x0000, name: "StateTransition",
            priority: "info",
            children: [
                DatatypeElement({
                    name: "PreviousState", base: "OtaUpdateStateEnum"
                }),

                DatatypeElement({
                    name: "NewState", base: "OtaUpdateStateEnum"
                }),

                DatatypeElement({
                    name: "Reason", base: "OtaChangeReasonEnum"
                }),

                DatatypeElement({
                    name: "TargetSoftwareVersion", base: "uint32",
                    quality: "X"
                })
            ]
        }),

        EventElement({
            id: 0x0001, name: "VersionApplied",
            priority: "critical",
            children: [
                DatatypeElement({
                    name: "SoftwareVersion", base: "uint32"
                }),

                DatatypeElement({
                    name: "ProductId", base: "uint16"
                })
            ]
        }),

        EventElement({
            id: 0x0002, name: "DownloadError",
            priority: "info",
            children: [
                DatatypeElement({
                    name: "SoftwareVersion", base: "uint32"
                }),

                DatatypeElement({
                    name: "BytesDownloaded", base: "uint64"
                }),

                DatatypeElement({
                    name: "ProgressPercent", base: "uint8",
                    quality: "X"
                }),

                DatatypeElement({
                    name: "PlatformCode", base: "int64",
                    quality: "X"
                })
            ]
        }),

        DatatypeElement({
            name: "OtaAnnouncementReason", base: "enum8",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "SimpleAnnouncement"
                }),

                DatatypeElement({
                    id: 0x0001, name: "UpdateAvailable"
                }),

                DatatypeElement({
                    id: 0x0002, name: "UrgentUpdateAvailable"
                })
            ]
        }),

        DatatypeElement({
            name: "OtaUpdateStateEnum", base: "enum8",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "Unknown"
                }),

                DatatypeElement({
                    id: 0x0001, name: "Idle"
                }),

                DatatypeElement({
                    id: 0x0002, name: "Querying"
                }),

                DatatypeElement({
                    id: 0x0003, name: "DelayedOnQuery"
                }),

                DatatypeElement({
                    id: 0x0004, name: "Downloading"
                }),

                DatatypeElement({
                    id: 0x0005, name: "Applying"
                }),

                DatatypeElement({
                    id: 0x0006, name: "DelayedOnApply"
                }),

                DatatypeElement({
                    id: 0x0007, name: "RollingBack"
                }),

                DatatypeElement({
                    id: 0x0008, name: "DelayedOnUserConsent"
                })
            ]
        }),

        DatatypeElement({
            name: "OtaChangeReasonEnum", base: "enum8",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "Unknown"
                }),

                DatatypeElement({
                    id: 0x0001, name: "Success"
                }),

                DatatypeElement({
                    id: 0x0002, name: "Failure"
                }),

                DatatypeElement({
                    id: 0x0003, name: "TimeOut"
                }),

                DatatypeElement({
                    id: 0x0004, name: "DelayByProvider"
                })
            ]
        }),

        DatatypeElement({
            name: "ProviderLocation", base: "struct",
            access: "R F",
            children: [
                DatatypeElement({
                    name: "ProviderNodeId", base: "node-id"
                }),

                DatatypeElement({
                    name: "Endpoint", base: "endpoint-no"
                })
            ]
        })
    ]
}));
