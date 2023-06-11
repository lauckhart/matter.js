/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ChipMatter } from "../internal.js";
import { ClusterElement, AttributeElement, CommandElement, DatatypeElement, EventElement } from "../../../index.js";

ChipMatter.children!.push(ClusterElement({
    id: 0x002a, name: "OtaSoftwareUpdateRequestor",
    description: "OTA Software Update Requestor",
    details: "Provides an interface for downloading and applying OTA software updates",
    children: [
        AttributeElement({
            id: 0x0000, name: "defaultOtaProviders", base: "list",
            access: { rw: "W" }, conformance: [ "M" ]
        }),

        AttributeElement({
            id: 0x0001, name: "updatePossible", base: "bool",
            access: { rw: "R" }, conformance: [ "M" ], value: "true"
        }),

        AttributeElement({
            id: 0x0002, name: "updateState", base: "OtaUpdateStateEnum",
            access: { rw: "R" }, conformance: [ "M" ], value: "Unknown"
        }),

        AttributeElement({
            id: 0x0003, name: "updateStateProgress", base: "uint8",
            access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
        }),

        CommandElement({
            id: 0x0000, name: "AnnounceOtaProvider",
            access: { rw: "R" }, conformance: [ "O" ], direction: "request",
            children: [
                DatatypeElement({
                    name: "providerNodeId", base: "nodeId",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "providerNodeId", base: "nodeId",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "vendorId", base: "vendorId",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "vendorId", base: "vendorId",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "announcementReason", base: "OtaAnnouncementReason",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "announcementReason", base: "OtaAnnouncementReason",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "metadataForNode", base: "octstr",
                    access: { rw: "R" }, conformance: [ "O" ]
                }),

                DatatypeElement({
                    name: "metadataForNode", base: "octstr",
                    access: { rw: "R" }, conformance: [ "O" ]
                }),

                DatatypeElement({
                    name: "endpoint", base: "endpointNo",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "endpoint", base: "endpointNo",
                    access: { rw: "R" }, conformance: [ "M" ]
                })
            ]
        }),

        EventElement({
            id: 0x0000, name: "StateTransition",
            access: { rw: "R" }, conformance: [ "M" ], priority: "info",
            children: [
                DatatypeElement({
                    name: "previousState", base: "OtaUpdateStateEnum",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "previousState", base: "OtaUpdateStateEnum",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "newState", base: "OtaUpdateStateEnum",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "newState", base: "OtaUpdateStateEnum",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "reason", base: "OtaChangeReasonEnum",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "reason", base: "OtaChangeReasonEnum",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "targetSoftwareVersion", base: "uint32",
                    access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
                }),

                DatatypeElement({
                    name: "targetSoftwareVersion", base: "uint32",
                    access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
                })
            ]
        }),

        EventElement({
            id: 0x0001, name: "VersionApplied",
            access: { rw: "R" }, conformance: [ "M" ], priority: "critical",
            children: [
                DatatypeElement({
                    name: "softwareVersion", base: "uint32",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "softwareVersion", base: "uint32",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "productId", base: "uint16",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "productId", base: "uint16",
                    access: { rw: "R" }, conformance: [ "M" ]
                })
            ]
        }),

        EventElement({
            id: 0x0002, name: "DownloadError",
            access: { rw: "R" }, conformance: [ "M" ], priority: "info",
            children: [
                DatatypeElement({
                    name: "softwareVersion", base: "uint32",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "softwareVersion", base: "uint32",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "bytesDownloaded", base: "uint64",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "bytesDownloaded", base: "uint64",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "progressPercent", base: "uint8",
                    access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
                }),

                DatatypeElement({
                    name: "progressPercent", base: "uint8",
                    access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
                }),

                DatatypeElement({
                    name: "platformCode", base: "int64",
                    access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
                }),

                DatatypeElement({
                    name: "platformCode", base: "int64",
                    access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
                })
            ]
        }),

        DatatypeElement({
            name: "OtaAnnouncementReason", base: "enum8",
            access: { rw: "R" }, conformance: [ "M" ],
            children: [
                DatatypeElement({
                    name: "simpleAnnouncement",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x0"
                }),

                DatatypeElement({
                    name: "simpleAnnouncement",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x0"
                }),

                DatatypeElement({
                    name: "updateAvailable",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x1"
                }),

                DatatypeElement({
                    name: "updateAvailable",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x1"
                }),

                DatatypeElement({
                    name: "urgentUpdateAvailable",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x2"
                }),

                DatatypeElement({
                    name: "urgentUpdateAvailable",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x2"
                })
            ]
        }),

        DatatypeElement({
            name: "OtaUpdateStateEnum", base: "enum8",
            access: { rw: "R" }, conformance: [ "M" ],
            children: [
                DatatypeElement({
                    name: "unknown",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x0"
                }),

                DatatypeElement({
                    name: "unknown",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x0"
                }),

                DatatypeElement({
                    name: "idle",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x1"
                }),

                DatatypeElement({
                    name: "idle",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x1"
                }),

                DatatypeElement({
                    name: "querying",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x2"
                }),

                DatatypeElement({
                    name: "querying",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x2"
                }),

                DatatypeElement({
                    name: "delayedOnQuery",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x3"
                }),

                DatatypeElement({
                    name: "delayedOnQuery",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x3"
                }),

                DatatypeElement({
                    name: "downloading",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x4"
                }),

                DatatypeElement({
                    name: "downloading",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x4"
                }),

                DatatypeElement({
                    name: "applying",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x5"
                }),

                DatatypeElement({
                    name: "applying",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x5"
                }),

                DatatypeElement({
                    name: "delayedOnApply",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x6"
                }),

                DatatypeElement({
                    name: "delayedOnApply",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x6"
                }),

                DatatypeElement({
                    name: "rollingBack",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x7"
                }),

                DatatypeElement({
                    name: "rollingBack",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x7"
                }),

                DatatypeElement({
                    name: "delayedOnUserConsent",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x8"
                }),

                DatatypeElement({
                    name: "delayedOnUserConsent",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x8"
                })
            ]
        }),

        DatatypeElement({
            name: "OtaChangeReasonEnum", base: "enum8",
            access: { rw: "R" }, conformance: [ "M" ],
            children: [
                DatatypeElement({
                    name: "unknown",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x0"
                }),

                DatatypeElement({
                    name: "unknown",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x0"
                }),

                DatatypeElement({
                    name: "success",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x1"
                }),

                DatatypeElement({
                    name: "success",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x1"
                }),

                DatatypeElement({
                    name: "failure",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x2"
                }),

                DatatypeElement({
                    name: "failure",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x2"
                }),

                DatatypeElement({
                    name: "timeOut",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x3"
                }),

                DatatypeElement({
                    name: "timeOut",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x3"
                }),

                DatatypeElement({
                    name: "delayByProvider",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x4"
                }),

                DatatypeElement({
                    name: "delayByProvider",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x4"
                })
            ]
        }),

        DatatypeElement({
            name: "ProviderLocation", base: "struct",
            access: { rw: "R", fabric: "F" }, conformance: [ "M" ],
            children: [
                DatatypeElement({
                    name: "providerNodeId", base: "nodeId",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "providerNodeId", base: "nodeId",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "endpoint", base: "endpointNo",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "endpoint", base: "endpointNo",
                    access: { rw: "R" }, conformance: [ "M" ]
                })
            ]
        })
    ]
}));
