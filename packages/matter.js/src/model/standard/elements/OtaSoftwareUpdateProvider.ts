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
            details: "Upon receipt, this command SHALL trigger an attempt to find an updated Software Image by the OTA " +
                     "Provider to match the OTA Requestor’s constraints provided in the payload fields.",
            xref: { document: "core", section: "11.19.6.5.1" },

            children: [
                { tag: "datatype", name: "VendorId", id: 0x0, type: "vendor-id", conformance: "M" },
                { tag: "datatype", name: "ProductId", id: 0x1, type: "uint16", conformance: "M" },
                { tag: "datatype", name: "SoftwareVersion", id: 0x2, type: "uint32", conformance: "M" },
                {
                    tag: "datatype", name: "ProtocolsSupported", id: 0x3, type: "list", conformance: "M",
                    constraint: "max 8",
                    children: [ { tag: "datatype", name: "entry", type: "DownloadProtocolEnum" } ]
                },
                { tag: "datatype", name: "HardwareVersion", id: 0x4, type: "uint16", conformance: "O" },
                { tag: "datatype", name: "Location", id: 0x5, type: "string", conformance: "O", constraint: "2" },
                { tag: "datatype", name: "RequestorCanConsent", id: 0x6, type: "bool", conformance: "O", default: true },
                {
                    tag: "datatype", name: "MetadataForProvider", id: 0x7, type: "octstr", conformance: "O",
                    constraint: "max 512"
                }
            ]
        },

        {
            tag: "command", name: "QueryImageResponse", id: 0x1, conformance: "M", direction: "response",
            details: "< Previous | Contents | Next >",
            xref: { document: "core", section: "11.19.6.5.10" },

            children: [
                { tag: "datatype", name: "Status", id: 0x0, type: "StatusEnum", conformance: "M" },
                { tag: "datatype", name: "DelayedActionTime", id: 0x1, type: "uint32", conformance: "O" },
                { tag: "datatype", name: "ImageUri", id: 0x2, type: "string", conformance: "O", constraint: "max 256" },
                { tag: "datatype", name: "SoftwareVersion", id: 0x3, type: "uint32", conformance: "O" },
                {
                    tag: "datatype", name: "SoftwareVersionString", id: 0x4, type: "string", conformance: "O",
                    constraint: "1 to 64"
                },
                { tag: "datatype", name: "UpdateToken", id: 0x5, type: "octstr", conformance: "O", constraint: "8 to 32" },
                { tag: "datatype", name: "UserConsentNeeded", id: 0x6, type: "bool", conformance: "O", default: true },
                {
                    tag: "datatype", name: "MetadataForRequestor", id: 0x7, type: "octstr", conformance: "O",
                    constraint: "max 512"
                }
            ]
        },

        {
            tag: "command", name: "ApplyUpdateRequest", id: 0x2, conformance: "M", direction: "request",
            response: "ApplyUpdateResponse",
            details: "< Previous | Contents | Next >",
            xref: { document: "core", section: "11.19.6.5.18" },
            children: [
                { tag: "datatype", name: "UpdateToken", id: 0x0, type: "octstr", conformance: "M", constraint: "8 to 32" },
                { tag: "datatype", name: "NewVersion", id: 0x1, type: "uint32", conformance: "M" }
            ]
        },

        {
            tag: "command", name: "ApplyUpdateResponse", id: 0x3, conformance: "M", direction: "response",
            details: "< Previous | Contents | Next >",
            xref: { document: "core", section: "11.19.6.5.20" },
            children: [
                { tag: "datatype", name: "Action", id: 0x0, type: "ApplyUpdateActionEnum", conformance: "M" },
                { tag: "datatype", name: "DelayedActionTime", id: 0x1, type: "uint32", conformance: "M" }
            ]
        },

        {
            tag: "command", name: "NotifyUpdateApplied", id: 0x4, conformance: "M", direction: "request",
            response: "status",
            details: "< Previous | Contents | Next >",
            xref: { document: "core", section: "11.19.6.5.22" },
            children: [
                { tag: "datatype", name: "UpdateToken", id: 0x0, type: "octstr", conformance: "M", constraint: "8 to 32" },
                { tag: "datatype", name: "SoftwareVersion", id: 0x1, type: "uint32", conformance: "M" }
            ]
        },

        {
            tag: "datatype", name: "StatusEnum", type: "enum8", conformance: "M",
            details: "See Section 11.19.3.2, “Querying the OTA Provider” for the semantics of these values.",
            xref: { document: "core", section: "11.19.6.4.1" },

            children: [
                { tag: "datatype", name: "UpdateAvailable", id: 0x0, conformance: "M" },
                { tag: "datatype", name: "Busy", id: 0x1, conformance: "M" },
                { tag: "datatype", name: "NotAvailable", id: 0x2, conformance: "M" },
                { tag: "datatype", name: "DownloadProtocolNotSupported", id: 0x3, conformance: "M" }
            ]
        },

        {
            tag: "datatype", name: "ApplyUpdateActionEnum", type: "enum8", conformance: "M",
            details: "See Section 11.19.3.6, “Applying a software update” for the semantics of the values. This " +
                     "enumeration is used in the Action field of the ApplyUpdateResponse command. See (Section " +
                     "11.19.6.5.4.1, “Action Field”).",
            xref: { document: "core", section: "11.19.6.4.2" },
            children: [
                { tag: "datatype", name: "Proceed", id: 0x0, conformance: "M" },
                { tag: "datatype", name: "AwaitNextAction", id: 0x1, conformance: "M" },
                { tag: "datatype", name: "Discontinue", id: 0x2, conformance: "M" }
            ]
        },

        {
            tag: "datatype", name: "DownloadProtocolEnum", type: "enum8",
            xref: { document: "core", section: "11.19.6.4.3" },

            children: [
                { tag: "datatype", name: "BdxSynchronous", id: 0x0, conformance: "M" },
                { tag: "datatype", name: "BdxAsynchronous", id: 0x1, conformance: "O" },
                { tag: "datatype", name: "Https", id: 0x2, conformance: "O" },
                { tag: "datatype", name: "VendorSpecific", id: 0x3, conformance: "O" }
            ]
        },

        {
            tag: "datatype", name: "OtaDownloadProtocol", type: "enum8", conformance: "M",

            children: [
                { tag: "datatype", name: "BdxSynchronous", id: 0x0, conformance: "M" },
                { tag: "datatype", name: "BdxAsynchronous", id: 0x1, conformance: "M" },
                { tag: "datatype", name: "Https", id: 0x2, conformance: "M" },
                { tag: "datatype", name: "VendorSpecific", id: 0x3, conformance: "M" }
            ]
        }
    ]
});