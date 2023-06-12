/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ChipMatter } from "../index.js";
import { ClusterElement, CommandElement, DatatypeElement } from "../../../index.js";

ChipMatter.children!.push(ClusterElement({
    id: 0x0029, name: "OtaSoftwareUpdateProvider",
    description: "OTA Software Update Provider",
    details: "Provides an interface for providing OTA software updates",
    children: [
        CommandElement({
            id: 0x0000, name: "QueryImage",
            access: "R", conformance: "M", direction: "request", response: "QueryImageResponse",
            children: [
                DatatypeElement({
                    name: "VendorId", base: "vendor-id",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "ProductId", base: "uint16",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "SoftwareVersion", base: "uint32",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "ProtocolsSupported", base: "OtaDownloadProtocol",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "HardwareVersion", base: "uint16",
                    access: "R", conformance: "O"
                }),

                DatatypeElement({
                    name: "Location", base: "string",
                    access: "R", conformance: "O"
                }),

                DatatypeElement({
                    name: "RequestorCanConsent", base: "bool",
                    access: "R", conformance: "O", default: true
                }),

                DatatypeElement({
                    name: "MetadataForProvider", base: "octstr",
                    access: "R", conformance: "O"
                })
            ]
        }),

        CommandElement({
            id: 0x0001, name: "QueryImageResponse",
            access: "R", conformance: "M", direction: "response",
            children: [
                DatatypeElement({
                    name: "Status", base: "OtaQueryStatus",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "DelayedActionTime", base: "uint32",
                    access: "R", conformance: "O"
                }),

                DatatypeElement({
                    name: "ImageUri", base: "string",
                    access: "R", conformance: "O"
                }),

                DatatypeElement({
                    name: "SoftwareVersion", base: "uint32",
                    access: "R", conformance: "O"
                }),

                DatatypeElement({
                    name: "SoftwareVersionString", base: "string",
                    access: "R", conformance: "O"
                }),

                DatatypeElement({
                    name: "UpdateToken", base: "octstr",
                    access: "R", conformance: "O"
                }),

                DatatypeElement({
                    name: "UserConsentNeeded", base: "bool",
                    access: "R", conformance: "O", default: true
                }),

                DatatypeElement({
                    name: "MetadataForRequestor", base: "octstr",
                    access: "R", conformance: "O"
                })
            ]
        }),

        CommandElement({
            id: 0x0002, name: "ApplyUpdateRequest",
            access: "R", conformance: "M", direction: "request", response: "ApplyUpdateResponse",
            children: [
                DatatypeElement({
                    name: "UpdateToken", base: "octstr",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "NewVersion", base: "uint32",
                    access: "R", conformance: "M"
                })
            ]
        }),

        CommandElement({
            id: 0x0003, name: "ApplyUpdateResponse",
            access: "R", conformance: "M", direction: "response",
            children: [
                DatatypeElement({
                    name: "Action", base: "OtaApplyUpdateAction",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "DelayedActionTime", base: "uint32",
                    access: "R", conformance: "M"
                })
            ]
        }),

        CommandElement({
            id: 0x0004, name: "NotifyUpdateApplied",
            access: "R", conformance: "M", direction: "request",
            children: [
                DatatypeElement({
                    name: "UpdateToken", base: "octstr",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "SoftwareVersion", base: "uint32",
                    access: "R", conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "OtaQueryStatus", base: "enum8",
            access: "R", conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "UpdateAvailable",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0001, name: "Busy",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0002, name: "NotAvailable",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0003, name: "DownloadProtocolNotSupported",
                    access: "R", conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "OtaApplyUpdateAction", base: "enum8",
            access: "R", conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "Proceed",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0001, name: "AwaitNextAction",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0002, name: "Discontinue",
                    access: "R", conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "OtaDownloadProtocol", base: "enum8",
            access: "R", conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "BdxSynchronous",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0001, name: "BdxAsynchronous",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0002, name: "Https",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0003, name: "VendorSpecific",
                    access: "R", conformance: "M"
                })
            ]
        })
    ]
}));
