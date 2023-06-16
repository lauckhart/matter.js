/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ChipMatter } from "../ChipMatter.js";
import { ClusterElement, CommandElement, DatatypeElement } from "../../../elements/index.js";

ChipMatter.children!.push(ClusterElement({
    id: 0x0029, name: "OtaSoftwareUpdateProvider",
    description: "OTA Software Update Provider",
    details: "Provides an interface for providing OTA software updates",
    children: [
        CommandElement({
            id: 0x0000, name: "QueryImage",
            conformance: "M", direction: "request", response: "QueryImageResponse",
            children: [
                DatatypeElement({
                    name: "VendorId", type: "vendor-id",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "ProductId", type: "uint16",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "SoftwareVersion", type: "uint32",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "ProtocolsSupported", type: "OtaDownloadProtocol",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "HardwareVersion", type: "uint16",
                    conformance: "O"
                }),

                DatatypeElement({
                    name: "Location", type: "string",
                    conformance: "O"
                }),

                DatatypeElement({
                    name: "RequestorCanConsent", type: "bool",
                    conformance: "O", default: true
                }),

                DatatypeElement({
                    name: "MetadataForProvider", type: "octstr",
                    conformance: "O"
                })
            ]
        }),

        CommandElement({
            id: 0x0001, name: "QueryImageResponse",
            conformance: "M", direction: "response",
            children: [
                DatatypeElement({
                    name: "Status", type: "OtaQueryStatus",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "DelayedActionTime", type: "uint32",
                    conformance: "O"
                }),

                DatatypeElement({
                    name: "ImageUri", type: "string",
                    conformance: "O"
                }),

                DatatypeElement({
                    name: "SoftwareVersion", type: "uint32",
                    conformance: "O"
                }),

                DatatypeElement({
                    name: "SoftwareVersionString", type: "string",
                    conformance: "O"
                }),

                DatatypeElement({
                    name: "UpdateToken", type: "octstr",
                    conformance: "O"
                }),

                DatatypeElement({
                    name: "UserConsentNeeded", type: "bool",
                    conformance: "O", default: true
                }),

                DatatypeElement({
                    name: "MetadataForRequestor", type: "octstr",
                    conformance: "O"
                })
            ]
        }),

        CommandElement({
            id: 0x0002, name: "ApplyUpdateRequest",
            conformance: "M", direction: "request", response: "ApplyUpdateResponse",
            children: [
                DatatypeElement({
                    name: "UpdateToken", type: "octstr",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "NewVersion", type: "uint32",
                    conformance: "M"
                })
            ]
        }),

        CommandElement({
            id: 0x0003, name: "ApplyUpdateResponse",
            conformance: "M", direction: "response",
            children: [
                DatatypeElement({
                    name: "Action", type: "OtaApplyUpdateAction",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "DelayedActionTime", type: "uint32",
                    conformance: "M"
                })
            ]
        }),

        CommandElement({
            id: 0x0004, name: "NotifyUpdateApplied",
            conformance: "M", direction: "request",
            children: [
                DatatypeElement({
                    name: "UpdateToken", type: "octstr",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "SoftwareVersion", type: "uint32",
                    conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "OtaQueryStatus", type: "enum8",
            conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "UpdateAvailable",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0001, name: "Busy",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0002, name: "NotAvailable",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0003, name: "DownloadProtocolNotSupported",
                    conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "OtaApplyUpdateAction", type: "enum8",
            conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "Proceed",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0001, name: "AwaitNextAction",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0002, name: "Discontinue",
                    conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "OtaDownloadProtocol", type: "enum8",
            conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "BdxSynchronous",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0001, name: "BdxAsynchronous",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0002, name: "Https",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0003, name: "VendorSpecific",
                    conformance: "M"
                })
            ]
        })
    ]
}));
