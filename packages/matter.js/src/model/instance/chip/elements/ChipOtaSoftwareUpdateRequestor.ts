/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ChipMatter } from "../ChipMatter.js";
import { ClusterElement, AttributeElement, DatatypeElement, CommandElement, EventElement } from "../../../elements/index.js";

ChipMatter.children!.push(ClusterElement({
    id: 0x002a, name: "OtaSoftwareUpdateRequestor",
    description: "OTA Software Update Requestor",
    details: "Provides an interface for downloading and applying OTA software updates",
    children: [
        AttributeElement({
            id: 0x0000, name: "DefaultOtaProviders", base: "list",
            access: "RW", conformance: "M",
            children: [
                DatatypeElement({
                    name: "entry", base: "ProviderLocation"
                })
            ]
        }),

        AttributeElement({
            id: 0x0001, name: "UpdatePossible", base: "bool",
            conformance: "M", default: true
        }),

        AttributeElement({
            id: 0x0002, name: "UpdateState", base: "OtaUpdateStateEnum",
            conformance: "M", default: 0
        }),

        AttributeElement({
            id: 0x0003, name: "UpdateStateProgress", base: "uint8",
            conformance: "M", quality: "X"
        }),

        CommandElement({
            id: 0x0000, name: "AnnounceOtaProvider",
            conformance: "O", direction: "request",
            children: [
                DatatypeElement({
                    name: "ProviderNodeId", base: "node-id",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "VendorId", base: "vendor-id",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "AnnouncementReason", base: "OtaAnnouncementReason",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "MetadataForNode", base: "octstr",
                    conformance: "O"
                }),

                DatatypeElement({
                    name: "Endpoint", base: "endpoint-no",
                    conformance: "M"
                })
            ]
        }),

        EventElement({
            id: 0x0000, name: "StateTransition",
            conformance: "M", priority: "info",
            children: [
                DatatypeElement({
                    name: "PreviousState", base: "OtaUpdateStateEnum",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "NewState", base: "OtaUpdateStateEnum",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "Reason", base: "OtaChangeReasonEnum",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "TargetSoftwareVersion", base: "uint32",
                    conformance: "M", quality: "X"
                })
            ]
        }),

        EventElement({
            id: 0x0001, name: "VersionApplied",
            conformance: "M", priority: "critical",
            children: [
                DatatypeElement({
                    name: "SoftwareVersion", base: "uint32",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "ProductId", base: "uint16",
                    conformance: "M"
                })
            ]
        }),

        EventElement({
            id: 0x0002, name: "DownloadError",
            conformance: "M", priority: "info",
            children: [
                DatatypeElement({
                    name: "SoftwareVersion", base: "uint32",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "BytesDownloaded", base: "uint64",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "ProgressPercent", base: "uint8",
                    conformance: "M", quality: "X"
                }),

                DatatypeElement({
                    name: "PlatformCode", base: "int64",
                    conformance: "M", quality: "X"
                })
            ]
        }),

        DatatypeElement({
            name: "OtaAnnouncementReason", base: "enum8",
            conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "SimpleAnnouncement",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0001, name: "UpdateAvailable",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0002, name: "UrgentUpdateAvailable",
                    conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "OtaUpdateStateEnum", base: "enum8",
            conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "Unknown",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0001, name: "Idle",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0002, name: "Querying",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0003, name: "DelayedOnQuery",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0004, name: "Downloading",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0005, name: "Applying",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0006, name: "DelayedOnApply",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0007, name: "RollingBack",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0008, name: "DelayedOnUserConsent",
                    conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "OtaChangeReasonEnum", base: "enum8",
            conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "Unknown",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0001, name: "Success",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0002, name: "Failure",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0003, name: "TimeOut",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0004, name: "DelayByProvider",
                    conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "ProviderLocation", base: "struct",
            access: "R F", conformance: "M",
            children: [
                DatatypeElement({
                    name: "ProviderNodeId", base: "node-id",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "Endpoint", base: "endpoint-no",
                    conformance: "M"
                })
            ]
        })
    ]
}));
