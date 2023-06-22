/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Matter } from "../Matter.js";

Matter.children.push({
    tag: "cluster", name: "OtaSoftwareUpdateProvider", id: 0x29, classification: "node",
    description: "OTA Software Update Provider",
    details: "Provides an interface for providing OTA software updates",
    xref: { document: "core", section: "11.19.6" },
    children: [
        {
            tag: "command", name: "QueryImage", id: 0x0, conformance: "M", direction: "request",
            response: "QueryImageResponse",
            xref: { document: "core", section: "11.19.6.5" },
            children: [
                {
                    tag: "datatype", name: "VendorId", type: "vendor-id", conformance: "M"
                },

                {
                    tag: "datatype", name: "ProductId", type: "uint16", conformance: "M"
                },

                {
                    tag: "datatype", name: "SoftwareVersion", type: "uint32", conformance: "M"
                },

                {
                    tag: "datatype", name: "ProtocolsSupported", type: "OtaDownloadProtocol", conformance: "M"
                },

                {
                    tag: "datatype", name: "HardwareVersion", type: "uint16", conformance: "O"
                },

                {
                    tag: "datatype", name: "Location", type: "string", conformance: "O"
                },

                {
                    tag: "datatype", name: "RequestorCanConsent", type: "bool", conformance: "O", default: true
                },

                {
                    tag: "datatype", name: "MetadataForProvider", type: "octstr", conformance: "O"
                }
            ]
        },

        {
            tag: "command", name: "QueryImageResponse", id: 0x1, conformance: "M", direction: "response",
            xref: { document: "core", section: "11.19.6.5" },
            children: [
                {
                    tag: "datatype", name: "Status", type: "OtaQueryStatus", conformance: "M"
                },

                {
                    tag: "datatype", name: "DelayedActionTime", type: "uint32", conformance: "O"
                },

                {
                    tag: "datatype", name: "ImageUri", type: "string", conformance: "O"
                },

                {
                    tag: "datatype", name: "SoftwareVersion", type: "uint32", conformance: "O"
                },

                {
                    tag: "datatype", name: "SoftwareVersionString", type: "string", conformance: "O"
                },

                {
                    tag: "datatype", name: "UpdateToken", type: "octstr", conformance: "O"
                },

                {
                    tag: "datatype", name: "UserConsentNeeded", type: "bool", conformance: "O", default: true
                },

                {
                    tag: "datatype", name: "MetadataForRequestor", type: "octstr", conformance: "O"
                }
            ]
        },

        {
            tag: "command", name: "ApplyUpdateRequest", id: 0x2, conformance: "M", direction: "request",
            response: "ApplyUpdateResponse",
            xref: { document: "core", section: "11.19.6.5" },
            children: [
                {
                    tag: "datatype", name: "UpdateToken", type: "octstr", conformance: "M"
                },

                {
                    tag: "datatype", name: "NewVersion", type: "uint32", conformance: "M"
                }
            ]
        },

        {
            tag: "command", name: "ApplyUpdateResponse", id: 0x3, conformance: "M", direction: "response",
            xref: { document: "core", section: "11.19.6.5" },
            children: [
                {
                    tag: "datatype", name: "Action", type: "OtaApplyUpdateAction", conformance: "M"
                },

                {
                    tag: "datatype", name: "DelayedActionTime", type: "uint32", conformance: "M"
                }
            ]
        },

        {
            tag: "command", name: "NotifyUpdateApplied", id: 0x4, conformance: "M", direction: "request",
            response: "status",
            xref: { document: "core", section: "11.19.6.5" },
            children: [
                {
                    tag: "datatype", name: "UpdateToken", type: "octstr", conformance: "M"
                },

                {
                    tag: "datatype", name: "SoftwareVersion", type: "uint32", conformance: "M"
                }
            ]
        },

        {
            tag: "datatype", name: "OtaDownloadProtocol", type: "enum8", conformance: "M",
            children: [
                {
                    tag: "datatype", name: "BdxSynchronous", id: 0x0, conformance: "M"
                },

                {
                    tag: "datatype", name: "BdxAsynchronous", id: 0x1, conformance: "M"
                },

                {
                    tag: "datatype", name: "Https", id: 0x2, conformance: "M"
                },

                {
                    tag: "datatype", name: "VendorSpecific", id: 0x3, conformance: "M"
                }
            ]
        },

        {
            tag: "datatype", name: "OtaQueryStatus", type: "enum8", conformance: "M",
            children: [
                {
                    tag: "datatype", name: "UpdateAvailable", id: 0x0, conformance: "M"
                },

                {
                    tag: "datatype", name: "Busy", id: 0x1, conformance: "M"
                },

                {
                    tag: "datatype", name: "NotAvailable", id: 0x2, conformance: "M"
                },

                {
                    tag: "datatype", name: "DownloadProtocolNotSupported", id: 0x3, conformance: "M"
                }
            ]
        },

        {
            tag: "datatype", name: "OtaApplyUpdateAction", type: "enum8", conformance: "M",
            children: [
                {
                    tag: "datatype", name: "Proceed", id: 0x0, conformance: "M"
                },

                {
                    tag: "datatype", name: "AwaitNextAction", id: 0x1, conformance: "M"
                },

                {
                    tag: "datatype", name: "Discontinue", id: 0x2, conformance: "M"
                }
            ]
        }
    ]
});
