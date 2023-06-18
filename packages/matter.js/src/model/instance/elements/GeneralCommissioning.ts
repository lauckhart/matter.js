/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Matter } from "../Matter.js";

Matter.children.push({
    tag: "cluster", id: 0x0030, name: "GeneralCommissioning",
    classification: "node", description: "General Commissioning",
    children: [
        {
            tag: "attribute", id: 0x0000, name: "Breadcrumb",
            access: "RW VA", conformance: "M", default: 0, type: "uint64",
            details: "This attribute allows for the storage of a client-provided small " +
                     "payload which Administrators and Commissioners MAY write and then " +
                     "subsequently read, to keep track of their own progress. This MAY be " +
                     "used by the Commissioner to avoid repeating already-executed actions " +
                     "upon re-establishing a commissioning link after an error",
            xref: { document: "core", section: "11.9.5.1" }
        },

        {
            tag: "attribute", id: 0x0001, name: "BasicCommissioningInfo",
            access: "R V", conformance: "M", constraint: "desc", default: "", quality: "F", type: "BasicCommissioningInfo",
            details: "This attribute SHALL describe critical parameters needed at the " +
                     "beginning of commissioning flow. See BasicCommissioningInfo for more " +
                     "information",
            xref: { document: "core", section: "11.9.5.2" }
        },

        {
            tag: "attribute", id: 0x0002, name: "RegulatoryConfig",
            access: "R V", conformance: "M", default: "LocationCapability", type: "RegulatoryLocationType",
            details: "This attribute SHALL indicate the regulatory configuration for the " +
                     "product",
            xref: { document: "core", section: "11.9.5.3" }
        },

        {
            tag: "attribute", id: 0x0003, name: "LocationCapability",
            access: "R V", conformance: "M", default: 2, quality: "F", type: "RegulatoryLocationType",
            details: "LocationCapability is statically set by the manufacturer and indicates" +
                     " if this Node needs to be told an exact RegulatoryLocation. For " +
                     "example a Node which is \"Indoor Only\" would not be certified for " +
                     "outdoor use at all, and thus there is no need for a commissioner to " +
                     "set or ask the user about whether the device will be used inside or " +
                     "outside. However a device which states its capability is \"Indoor/" +
                     "Outdoor\" means it would like clarification if possible",
            xref: { document: "core", section: "11.9.5.4" }
        },

        {
            tag: "attribute", id: 0x0004, name: "SupportsConcurrentConnection",
            access: "R V", conformance: "M", default: true, quality: "F", type: "bool",
            details: "This attribute SHALL indicate whether this device supports \"concurrent" +
                     " connection flow\" commissioning mode (see Section 5.5, “Commissioning " +
                     "Flows”). If false, the device only supports \"non-concurrent connection" +
                     " flow\" mode",
            xref: { document: "core", section: "11.9.5.5" }
        },

        {
            tag: "command", id: 0x0000, name: "ArmFailSafe",
            access: "R A", conformance: "M", direction: "request", response: "ArmFailSafeResponse",
            xref: { document: "core", section: "11.9.6.1" },
            children: [
                {
                    tag: "datatype", name: "ExpiryLengthSeconds",
                    conformance: "M", type: "uint16"
                },

                {
                    tag: "datatype", name: "Breadcrumb",
                    conformance: "M", type: "uint64"
                }
            ]
        },

        {
            tag: "command", id: 0x0001, name: "ArmFailSafeResponse",
            conformance: "M", direction: "response",
            xref: { document: "core", section: "11.9.6.1" },
            children: [
                {
                    tag: "datatype", name: "ErrorCode",
                    conformance: "M", type: "CommissioningError"
                },

                {
                    tag: "datatype", name: "DebugText",
                    conformance: "M", type: "string"
                }
            ]
        },

        {
            tag: "command", id: 0x0002, name: "SetRegulatoryConfig",
            access: "R A", conformance: "M", direction: "request", response: "SetRegulatoryConfigResponse",
            xref: { document: "core", section: "11.9.6.1" },
            children: [
                {
                    tag: "datatype", name: "NewRegulatoryConfig",
                    conformance: "M", type: "RegulatoryLocationType"
                },

                {
                    tag: "datatype", name: "CountryCode",
                    conformance: "M", type: "string"
                },

                {
                    tag: "datatype", name: "Breadcrumb",
                    conformance: "M", type: "uint64"
                }
            ]
        },

        {
            tag: "command", id: 0x0003, name: "SetRegulatoryConfigResponse",
            conformance: "M", direction: "response",
            xref: { document: "core", section: "11.9.6.1" },
            children: [
                {
                    tag: "datatype", name: "ErrorCode",
                    conformance: "M", type: "CommissioningError"
                },

                {
                    tag: "datatype", name: "DebugText",
                    conformance: "M", type: "string"
                }
            ]
        },

        {
            tag: "command", id: 0x0004, name: "CommissioningComplete",
            access: "R F A", conformance: "M", direction: "request", response: "CommissioningCompleteResponse",
            xref: { document: "core", section: "11.9.6.1" }
        },

        {
            tag: "command", id: 0x0005, name: "CommissioningCompleteResponse",
            conformance: "M", direction: "response",
            xref: { document: "core", section: "11.9.6.1" },
            children: [
                {
                    tag: "datatype", name: "ErrorCode",
                    conformance: "M", type: "CommissioningError"
                },

                {
                    tag: "datatype", name: "DebugText",
                    conformance: "M", type: "string"
                }
            ]
        },

        {
            tag: "datatype", name: "BasicCommissioningInfo",
            conformance: "M", type: "struct",
            details: "This data type is derived from enum8",
            xref: { document: "core", section: "11.9.4.1" },
            children: [
                {
                    tag: "datatype", id: 0x0000, name: "Ok",
                    conformance: "M",
                    xref: { document: "core", section: "11.9.4.1" }
                },

                {
                    tag: "datatype", id: 0x0001, name: "MaxCumulativeFailsafeSeconds",
                    conformance: "M", type: "uint16",
                    xref: { document: "core", section: "11.9.4.1" }
                },

                {
                    tag: "datatype", id: 0x0002, name: "InvalidAuthentication",
                    conformance: "M",
                    xref: { document: "core", section: "11.9.4.1" }
                },

                {
                    tag: "datatype", id: 0x0003, name: "NoFailSafe",
                    conformance: "M",
                    xref: { document: "core", section: "11.9.4.1" }
                },

                {
                    tag: "datatype", id: 0x0004, name: "BusyWithOtherAdmin",
                    conformance: "M",
                    xref: { document: "core", section: "11.9.4.1" }
                },

                {
                    tag: "datatype", name: "FailSafeExpiryLengthSeconds",
                    conformance: "M", type: "uint16"
                }
            ]
        },

        {
            tag: "datatype", name: "CommissioningError",
            conformance: "M", type: "enum8",
            children: [
                {
                    tag: "datatype", id: 0x0000, name: "Ok",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0001, name: "ValueOutsideRange",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0002, name: "InvalidAuthentication",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0003, name: "NoFailSafe",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0004, name: "BusyWithOtherAdmin",
                    conformance: "M"
                }
            ]
        },

        {
            tag: "datatype", name: "RegulatoryLocationType",
            conformance: "M", type: "enum8",
            children: [
                {
                    tag: "datatype", id: 0x0000, name: "Indoor",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0001, name: "Outdoor",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0002, name: "IndoorOutdoor",
                    conformance: "M"
                }
            ]
        }
    ]
});
