/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Matter } from "../Matter.js";

Matter.children.push({
    tag: "cluster", name: "GeneralCommissioning", id: 0x30, classification: "node",
    description: "General Commissioning",
    details: "This cluster is used to manage global aspects of the Commissioning flow.",
    xref: { document: "core", section: "11.9" },

    children: [
        {
            tag: "attribute", name: "Breadcrumb", id: 0x0, type: "uint64", access: "RW VA", conformance: "M",
            details: "This attribute allows for the storage of a client-provided small payload which Administrators and " +
                     "Commissioners MAY write and then subsequently read, to keep track of their own progress. This MAY " +
                     "be used by the Commissioner to avoid repeating already-executed actions upon re-establishing a " +
                     "commissioning link after an error.",
            xref: { document: "core", section: "11.9.5.1" }
        },

        {
            tag: "attribute", name: "BasicCommissioningInfo", id: 0x1, type: "BasicCommissioningInfo",
            access: "R V", conformance: "M", constraint: "desc", quality: "F",
            details: "This attribute SHALL describe critical parameters needed at the beginning of commissioning flow. " +
                     "See BasicCommissioningInfo for more information.",
            xref: { document: "core", section: "11.9.5.2" }
        },

        {
            tag: "attribute", name: "RegulatoryConfig", id: 0x2, type: "RegulatoryLocationTypeEnum",
            access: "R V", conformance: "M", default: { reference: "LocationCapability" },
            details: "This attribute SHALL indicate the regulatory configuration for the product.",
            xref: { document: "core", section: "11.9.5.3" }
        },

        {
            tag: "attribute", name: "LocationCapability", id: 0x3, type: "RegulatoryLocationTypeEnum",
            access: "R V", conformance: "M", default: 2, quality: "F",
            details: "LocationCapability is statically set by the manufacturer and indicates if this Node needs to be " +
                     "told an exact RegulatoryLocation. For example a Node which is \"Indoor Only\" would not be certified " +
                     "for outdoor use at all, and thus there is no need for a commissioner to set or ask the user about " +
                     "whether the device will be used inside or outside. However a device which states its capability is " +
                     "\"Indoor/Outdoor\" means it would like clarification if possible.",
            xref: { document: "core", section: "11.9.5.4" }
        },

        {
            tag: "attribute", name: "SupportsConcurrentConnection", id: 0x4, type: "bool", access: "R V",
            conformance: "M", default: true, quality: "F",
            details: "This attribute SHALL indicate whether this device supports \"concurrent connection flow\" " +
                     "commissioning mode (see Section 5.5, “Commissioning Flows”). If false, the device only supports " +
                     "\"non-concurrent connection flow\" mode.",
            xref: { document: "core", section: "11.9.5.5" }
        },

        {
            tag: "command", name: "ArmFailSafe", id: 0x0, access: "R A", conformance: "M", direction: "request",
            response: "ArmFailSafeResponse",
            details: "The arguments for this command are as follows:",
            xref: { document: "core", section: "11.9.6.2" },

            children: [
                {
                    tag: "datatype", name: "ExpiryLengthSeconds", id: 0x0, type: "uint16", conformance: "M",
                    default: 900
                },
                { tag: "datatype", name: "Breadcrumb", id: 0x1, type: "uint64", conformance: "M" }
            ]
        },

        {
            tag: "command", name: "ArmFailSafeResponse", id: 0x1, conformance: "M", direction: "response",
            details: "ErrorCode Field",
            xref: { document: "core", section: "11.9.6.3" },

            children: [
                { tag: "datatype", name: "ErrorCode", id: 0x0, type: "CommissioningErrorEnum", conformance: "M" },
                {
                    tag: "datatype", name: "DebugText", id: 0x1, type: "string", conformance: "M",
                    constraint: "max 128", default: ""
                }
            ]
        },

        {
            tag: "command", name: "SetRegulatoryConfig", id: 0x2, access: "R A", conformance: "M",
            direction: "request", response: "SetRegulatoryConfigResponse",
            details: "This SHALL add or update the regulatory configuration in the RegulatoryConfig Attribute to the " +
                     "value provided in the NewRegulatoryConfig field.",
            xref: { document: "core", section: "11.9.6.4" },

            children: [
                {
                    tag: "datatype", name: "NewRegulatoryConfig", id: 0x0, type: "RegulatoryLocationTypeEnum",
                    conformance: "M"
                },
                { tag: "datatype", name: "CountryCode", id: 0x1, type: "string", conformance: "M", constraint: "2" },
                { tag: "datatype", name: "Breadcrumb", id: 0x2, type: "uint64", conformance: "M" }
            ]
        },

        {
            tag: "command", name: "SetRegulatoryConfigResponse", id: 0x3, conformance: "M",
            direction: "response",
            details: "The data for this command is as follows:",
            xref: { document: "core", section: "11.9.6.5" },
            children: [
                { tag: "datatype", name: "ErrorCode", id: 0x0, type: "CommissioningErrorEnum", conformance: "M" },
                { tag: "datatype", name: "DebugText", id: 0x1, type: "string", conformance: "M", default: "" }
            ]
        },

        {
            tag: "command", name: "CommissioningComplete", id: 0x4, access: "R F A", conformance: "M",
            direction: "request", response: "CommissioningCompleteResponse",
            details: "This command has no data.",
            xref: { document: "core", section: "11.9.6.6" }
        },

        {
            tag: "command", name: "CommissioningCompleteResponse", id: 0x5, conformance: "M",
            direction: "response",
            details: "The data for this command is as follows:",
            xref: { document: "core", section: "11.9.6.7" },
            children: [
                { tag: "datatype", name: "ErrorCode", id: 0x0, type: "CommissioningErrorEnum", conformance: "M" },
                { tag: "datatype", name: "DebugText", id: 0x1, type: "string", conformance: "M", default: "" }
            ]
        },

        {
            tag: "datatype", name: "CommissioningErrorEnum", type: "enum8",
            details: "This data type is derived from enum8.",
            xref: { document: "core", section: "11.9.4.1" },

            children: [
                { tag: "datatype", name: "Ok", id: 0x0, conformance: "M" },
                { tag: "datatype", name: "ValueOutsideRange", id: 0x1, conformance: "M" },
                { tag: "datatype", name: "InvalidAuthentication", id: 0x2, conformance: "M" },
                { tag: "datatype", name: "NoFailSafe", id: 0x3, conformance: "M" },
                { tag: "datatype", name: "BusyWithOtherAdmin", id: 0x4, conformance: "M" }
            ]
        },

        {
            tag: "datatype", name: "RegulatoryLocationTypeEnum", type: "enum8",
            details: "This data type is derived from enum8.",
            xref: { document: "core", section: "11.9.4.2" },
            children: [
                { tag: "datatype", name: "Indoor", id: 0x0, conformance: "M" },
                { tag: "datatype", name: "Outdoor", id: 0x1, conformance: "M" },
                { tag: "datatype", name: "IndoorOutdoor", id: 0x2, conformance: "M" }
            ]
        },

        {
            tag: "datatype", name: "BasicCommissioningInfo", type: "struct", conformance: "M",
            details: "This structure provides some constant values that MAY be of use to all commissioners.",
            xref: { document: "core", section: "11.9.4.3" },

            children: [
                { tag: "datatype", name: "FailSafeExpiryLengthSeconds", id: 0x0, type: "uint16", conformance: "M" },
                {
                    tag: "datatype", name: "MaxCumulativeFailsafeSeconds", id: 0x1, type: "uint16", conformance: "M",
                    constraint: "desc"
                }
            ]
        },

        {
            tag: "datatype", name: "RegulatoryLocationType", type: "enum8", conformance: "M",
            children: [
                { tag: "datatype", name: "Indoor", id: 0x0, conformance: "M" },
                { tag: "datatype", name: "Outdoor", id: 0x1, conformance: "M" },
                { tag: "datatype", name: "IndoorOutdoor", id: 0x2, conformance: "M" }
            ]
        },

        {
            tag: "datatype", name: "CommissioningError", type: "enum8", conformance: "M",

            children: [
                { tag: "datatype", name: "Ok", id: 0x0, conformance: "M" },
                { tag: "datatype", name: "ValueOutsideRange", id: 0x1, conformance: "M" },
                { tag: "datatype", name: "InvalidAuthentication", id: 0x2, conformance: "M" },
                { tag: "datatype", name: "NoFailSafe", id: 0x3, conformance: "M" },
                { tag: "datatype", name: "BusyWithOtherAdmin", id: 0x4, conformance: "M" }
            ]
        }
    ]
});