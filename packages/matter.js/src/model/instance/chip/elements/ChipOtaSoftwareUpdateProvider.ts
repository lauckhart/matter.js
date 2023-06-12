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
            direction: "request", response: "QueryImageResponse",
            children: [
                DatatypeElement({
                    name: "VendorId", base: "vendor-id"
                }),

                DatatypeElement({
                    name: "ProductId", base: "uint16"
                }),

                DatatypeElement({
                    name: "SoftwareVersion", base: "uint32"
                }),

                DatatypeElement({
                    name: "ProtocolsSupported", base: "OtaDownloadProtocol"
                }),

                DatatypeElement({
                    name: "HardwareVersion", base: "uint16",
                    conformance: "O"
                }),

                DatatypeElement({
                    name: "Location", base: "string",
                    conformance: "O"
                }),

                DatatypeElement({
                    name: "RequestorCanConsent", base: "bool",
                    conformance: "O", default: true
                }),

                DatatypeElement({
                    name: "MetadataForProvider", base: "octstr",
                    conformance: "O"
                })
            ]
        }),

        CommandElement({
            id: 0x0001, name: "QueryImageResponse",
            direction: "response",
            children: [
                DatatypeElement({
                    name: "Status", base: "OtaQueryStatus"
                }),

                DatatypeElement({
                    name: "DelayedActionTime", base: "uint32",
                    conformance: "O"
                }),

                DatatypeElement({
                    name: "ImageUri", base: "string",
                    conformance: "O"
                }),

                DatatypeElement({
                    name: "SoftwareVersion", base: "uint32",
                    conformance: "O"
                }),

                DatatypeElement({
                    name: "SoftwareVersionString", base: "string",
                    conformance: "O"
                }),

                DatatypeElement({
                    name: "UpdateToken", base: "octstr",
                    conformance: "O"
                }),

                DatatypeElement({
                    name: "UserConsentNeeded", base: "bool",
                    conformance: "O", default: true
                }),

                DatatypeElement({
                    name: "MetadataForRequestor", base: "octstr",
                    conformance: "O"
                })
            ]
        }),

        CommandElement({
            id: 0x0002, name: "ApplyUpdateRequest",
            direction: "request", response: "ApplyUpdateResponse",
            children: [
                DatatypeElement({
                    name: "UpdateToken", base: "octstr"
                }),

                DatatypeElement({
                    name: "NewVersion", base: "uint32"
                })
            ]
        }),

        CommandElement({
            id: 0x0003, name: "ApplyUpdateResponse",
            direction: "response",
            children: [
                DatatypeElement({
                    name: "Action", base: "OtaApplyUpdateAction"
                }),

                DatatypeElement({
                    name: "DelayedActionTime", base: "uint32"
                })
            ]
        }),

        CommandElement({
            id: 0x0004, name: "NotifyUpdateApplied",
            direction: "request",
            children: [
                DatatypeElement({
                    name: "UpdateToken", base: "octstr"
                }),

                DatatypeElement({
                    name: "SoftwareVersion", base: "uint32"
                })
            ]
        }),

        DatatypeElement({
            name: "OtaQueryStatus", base: "enum8",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "UpdateAvailable"
                }),

                DatatypeElement({
                    id: 0x0001, name: "Busy"
                }),

                DatatypeElement({
                    id: 0x0002, name: "NotAvailable"
                }),

                DatatypeElement({
                    id: 0x0003, name: "DownloadProtocolNotSupported"
                })
            ]
        }),

        DatatypeElement({
            name: "OtaApplyUpdateAction", base: "enum8",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "Proceed"
                }),

                DatatypeElement({
                    id: 0x0001, name: "AwaitNextAction"
                }),

                DatatypeElement({
                    id: 0x0002, name: "Discontinue"
                })
            ]
        }),

        DatatypeElement({
            name: "OtaDownloadProtocol", base: "enum8",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "BdxSynchronous"
                }),

                DatatypeElement({
                    id: 0x0001, name: "BdxAsynchronous"
                }),

                DatatypeElement({
                    id: 0x0002, name: "Https"
                }),

                DatatypeElement({
                    id: 0x0003, name: "VendorSpecific"
                })
            ]
        })
    ]
}));
