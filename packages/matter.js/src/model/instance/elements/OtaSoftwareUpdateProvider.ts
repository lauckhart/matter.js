/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Matter } from "../Matter.js";

Matter.children.push({
    tag: "cluster", id: 0x0029, name: "OtaSoftwareUpdateProvider",
    classification: "node", description: "OTA Software Update Provider",
    children: [
        {
            tag: "command", id: 0x0000, name: "QueryImage",
            conformance: "M", direction: "request", response: "QueryImageResponse",
            xref: { document: "core", section: "11.19.6.5" },
            children: [
                {
                    tag: "datatype", name: "VendorId",
                    conformance: "M", type: "vendor-id"
                },

                {
                    tag: "datatype", name: "ProductId",
                    conformance: "M", type: "uint16"
                },

                {
                    tag: "datatype", name: "SoftwareVersion",
                    conformance: "M", type: "uint32"
                },

                {
                    tag: "datatype", name: "ProtocolsSupported",
                    conformance: "M", type: "OtaDownloadProtocol"
                },

                {
                    tag: "datatype", name: "HardwareVersion",
                    conformance: "O", type: "uint16"
                },

                {
                    tag: "datatype", name: "Location",
                    conformance: "O", type: "string"
                },

                {
                    tag: "datatype", name: "RequestorCanConsent",
                    conformance: "O", default: true, type: "bool"
                },

                {
                    tag: "datatype", name: "MetadataForProvider",
                    conformance: "O", type: "octstr"
                }
            ]
        },

        {
            tag: "command", id: 0x0001, name: "QueryImageResponse",
            conformance: "M", direction: "response",
            xref: { document: "core", section: "11.19.6.5" },
            children: [
                {
                    tag: "datatype", name: "Status",
                    conformance: "M", type: "OtaQueryStatus"
                },

                {
                    tag: "datatype", name: "DelayedActionTime",
                    conformance: "O", type: "uint32"
                },

                {
                    tag: "datatype", name: "ImageUri",
                    conformance: "O", type: "string"
                },

                {
                    tag: "datatype", name: "SoftwareVersion",
                    conformance: "O", type: "uint32"
                },

                {
                    tag: "datatype", name: "SoftwareVersionString",
                    conformance: "O", type: "string"
                },

                {
                    tag: "datatype", name: "UpdateToken",
                    conformance: "O", type: "octstr"
                },

                {
                    tag: "datatype", name: "UserConsentNeeded",
                    conformance: "O", default: true, type: "bool"
                },

                {
                    tag: "datatype", name: "MetadataForRequestor",
                    conformance: "O", type: "octstr"
                }
            ]
        },

        {
            tag: "command", id: 0x0002, name: "ApplyUpdateRequest",
            conformance: "M", direction: "request", response: "ApplyUpdateResponse",
            xref: { document: "core", section: "11.19.6.5" },
            children: [
                {
                    tag: "datatype", name: "UpdateToken",
                    conformance: "M", type: "octstr"
                },

                {
                    tag: "datatype", name: "NewVersion",
                    conformance: "M", type: "uint32"
                }
            ]
        },

        {
            tag: "command", id: 0x0003, name: "ApplyUpdateResponse",
            conformance: "M", direction: "response",
            xref: { document: "core", section: "11.19.6.5" },
            children: [
                {
                    tag: "datatype", name: "Action",
                    conformance: "M", type: "OtaApplyUpdateAction"
                },

                {
                    tag: "datatype", name: "DelayedActionTime",
                    conformance: "M", type: "uint32"
                }
            ]
        },

        {
            tag: "command", id: 0x0004, name: "NotifyUpdateApplied",
            conformance: "M", direction: "request", response: "status",
            xref: { document: "core", section: "11.19.6.5" },
            children: [
                {
                    tag: "datatype", name: "UpdateToken",
                    conformance: "M", type: "octstr"
                },

                {
                    tag: "datatype", name: "SoftwareVersion",
                    conformance: "M", type: "uint32"
                }
            ]
        },

        {
            tag: "datatype", name: "OtaQueryStatus",
            conformance: "M", type: "enum8",
            children: [
                {
                    tag: "datatype", id: 0x0000, name: "UpdateAvailable",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0001, name: "Busy",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0002, name: "NotAvailable",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0003, name: "DownloadProtocolNotSupported",
                    conformance: "M"
                }
            ]
        },

        {
            tag: "datatype", name: "OtaApplyUpdateAction",
            conformance: "M", type: "enum8",
            children: [
                {
                    tag: "datatype", id: 0x0000, name: "Proceed",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0001, name: "AwaitNextAction",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0002, name: "Discontinue",
                    conformance: "M"
                }
            ]
        },

        {
            tag: "datatype", name: "OtaDownloadProtocol",
            conformance: "M", type: "enum8",
            children: [
                {
                    tag: "datatype", id: 0x0000, name: "BdxSynchronous",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0001, name: "BdxAsynchronous",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0002, name: "Https",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0003, name: "VendorSpecific",
                    conformance: "M"
                }
            ]
        }
    ]
});
