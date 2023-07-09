/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Matter } from "../Matter.js";

Matter.children.push({
    tag: "cluster", name: "OtaSoftwareUpdateRequestor", id: 0x2a, classification: "node",
    description: "OTA Software Update Requestor",
    details: "Provides an interface for downloading and applying OTA software updates",
    xref: { document: "core", section: "11.19.7" },

    children: [
        {
            tag: "attribute", name: "DefaultOtaProviders", id: 0x0, type: "list", access: "RW F VA",
            conformance: "M", constraint: "desc", default: [],
            details: "This field is a list of ProviderLocationStruct whose entries SHALL be set by Administrators, either " +
                     "during Commissioning or at a later time, to set the Provider Location for the default OTA Provider " +
                     "Node to use for software updates on a given Fabric.",
            xref: { document: "core", section: "11.19.7.5.1" },
            children: [ { tag: "datatype", name: "entry", type: "ProviderLocationStruct" } ]
        },

        {
            tag: "attribute", name: "UpdatePossible", id: 0x1, type: "bool", access: "R V", conformance: "M",
            default: true,
            details: "This field SHALL be set to True if the OTA Requestor is currently able to be updated. Otherwise, it " +
                     "SHALL be set to False in case of any condition preventing update being possible, such as " +
                     "insufficient capacity of an internal battery. This field is merely informational for diagnostics " +
                     "purposes and SHALL NOT affect the responses provided by an OTA Provider to an OTA Requestor.",
            xref: { document: "core", section: "11.19.7.5.2" }
        },

        {
            tag: "attribute", name: "UpdateState", id: 0x2, type: "UpdateStateEnum", access: "R V",
            conformance: "M", default: 0,
            details: "This field SHALL reflect the current state of the OTA Requestor with regards to obtaining software " +
                     "updates. See Section 11.19.7.4.2, “UpdateStateEnum” for possible values.",
            xref: { document: "core", section: "11.19.7.5.3" }
        },

        {
            tag: "attribute", name: "UpdateStateProgress", id: 0x3, type: "uint8", access: "R V",
            conformance: "M", constraint: "0 to 100", default: null, quality: "X",
            details: "This field SHALL reflect the percentage value of progress, relative to the current UpdateState, if " +
                     "applicable to the state.",
            xref: { document: "core", section: "11.19.7.5.4" }
        },

        {
            tag: "event", name: "StateTransition", id: 0x0, access: "V", conformance: "M", priority: "info",
            details: "This event SHALL be generated when a change of the UpdateState attribute occurs due to an OTA " +
                     "Requestor moving through the states necessary to query for updates.",
            xref: { document: "core", section: "11.19.7.7.1" },

            children: [
                { tag: "datatype", name: "PreviousState", id: 0x0, type: "UpdateStateEnum", conformance: "M", default: 0 },
                { tag: "datatype", name: "NewState", id: 0x1, type: "UpdateStateEnum", conformance: "M" },
                { tag: "datatype", name: "Reason", id: 0x2, type: "ChangeReasonEnum", conformance: "M" },
                {
                    tag: "datatype", name: "TargetSoftwareVersion", id: 0x3, type: "uint32", conformance: "M",
                    default: null, quality: "X"
                }
            ]
        },

        {
            tag: "event", name: "VersionApplied", id: 0x1, access: "V", conformance: "M", priority: "critical",
            details: "This event SHALL be generated whenever a new version starts executing after being applied due to a " +
                     "software update. This event SHOULD be generated even if a software update was done using means " +
                     "outside of this cluster.",
            xref: { document: "core", section: "11.19.7.7.6" },
            children: [
                { tag: "datatype", name: "SoftwareVersion", id: 0x0, type: "uint32", conformance: "M" },
                { tag: "datatype", name: "ProductId", id: 0x1, type: "uint16", conformance: "M" }
            ]
        },

        {
            tag: "event", name: "DownloadError", id: 0x2, access: "V", conformance: "M", priority: "info",
            details: "This event SHALL be generated whenever an error occurs during OTA Requestor download operation.",
            xref: { document: "core", section: "11.19.7.7.9" },

            children: [
                { tag: "datatype", name: "SoftwareVersion", id: 0x0, type: "uint32", conformance: "M" },
                { tag: "datatype", name: "BytesDownloaded", id: 0x1, type: "uint64", conformance: "M" },
                {
                    tag: "datatype", name: "ProgressPercent", id: 0x2, type: "uint8", conformance: "M",
                    constraint: "0 to 100", default: null, quality: "X"
                },
                {
                    tag: "datatype", name: "PlatformCode", id: 0x3, type: "int64", conformance: "M", default: null,
                    quality: "X"
                }
            ]
        },

        {
            tag: "command", name: "AnnounceOtaProvider", id: 0x0, access: "A", conformance: "O",
            direction: "request", response: "status",
            details: "This command MAY be invoked by Administrators to announce the presence of a particular OTA Provider.",
            xref: { document: "core", section: "11.19.7.6.1" },

            children: [
                { tag: "datatype", name: "ProviderNodeId", id: 0x0, type: "node-id", access: "F", conformance: "M" },
                { tag: "datatype", name: "VendorId", id: 0x1, type: "vendor-id", access: "F", conformance: "M" },
                {
                    tag: "datatype", name: "AnnouncementReason", id: 0x2, type: "AnnouncementReasonEnum", access: "F",
                    conformance: "M"
                },
                {
                    tag: "datatype", name: "MetadataForNode", id: 0x3, type: "octstr", access: "F", conformance: "O",
                    constraint: "max 512"
                },
                { tag: "datatype", name: "Endpoint", id: 0x4, type: "endpoint-no", access: "F", conformance: "M" }
            ]
        },

        {
            tag: "datatype", name: "AnnouncementReasonEnum", type: "enum8", conformance: "M",
            xref: { document: "core", section: "11.19.7.4.1" },
            children: [
                { tag: "datatype", name: "SimpleAnnouncement", id: 0x0, conformance: "M" },
                { tag: "datatype", name: "UpdateAvailable", id: 0x1, conformance: "M" },
                { tag: "datatype", name: "UrgentUpdateAvailable", id: 0x2, conformance: "M" }
            ]
        },

        {
            tag: "datatype", name: "UpdateStateEnum", type: "enum8", conformance: "M",
            xref: { document: "core", section: "11.19.7.4.5" },

            children: [
                { tag: "datatype", name: "Unknown", id: 0x0, conformance: "M" },
                { tag: "datatype", name: "Idle", id: 0x1, conformance: "M" },
                { tag: "datatype", name: "Querying", id: 0x2, conformance: "M" },
                { tag: "datatype", name: "DelayedOnQuery", id: 0x3, conformance: "M" },
                { tag: "datatype", name: "Downloading", id: 0x4, conformance: "M" },
                { tag: "datatype", name: "Applying", id: 0x5, conformance: "M" },
                { tag: "datatype", name: "DelayedOnApply", id: 0x6, conformance: "M" },
                { tag: "datatype", name: "RollingBack", id: 0x7, conformance: "M" },
                { tag: "datatype", name: "DelayedOnUserConsent", id: 0x8, conformance: "M" }
            ]
        },

        {
            tag: "datatype", name: "ChangeReasonEnum", type: "enum8", conformance: "M",
            xref: { document: "core", section: "11.19.7.4.15" },

            children: [
                { tag: "datatype", name: "Unknown", id: 0x0, conformance: "M" },
                { tag: "datatype", name: "Success", id: 0x1, conformance: "M" },
                { tag: "datatype", name: "Failure", id: 0x2, conformance: "M" },
                { tag: "datatype", name: "TimeOut", id: 0x3, conformance: "M" },
                { tag: "datatype", name: "DelayByProvider", id: 0x4, conformance: "O" }
            ]
        },

        {
            tag: "datatype", name: "ProviderLocationStruct", type: "struct", access: "R F", conformance: "M",
            details: "This structure encodes a fabric-scoped location of an OTA provider on a given fabric.",
            xref: { document: "core", section: "11.19.7.4.20" },
            children: [
                { tag: "datatype", name: "ProviderNodeId", id: 0x1, type: "node-id", access: "F", conformance: "M" },
                { tag: "datatype", name: "Endpoint", id: 0x2, type: "endpoint-no", access: "F", conformance: "M" }
            ]
        }
    ]
});
