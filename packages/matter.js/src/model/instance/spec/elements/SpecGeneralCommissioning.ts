/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { SpecMatter } from "../index.js";
import { ClusterElement, AttributeElement, CommandElement, DatatypeElement } from "../../../index.js";

SpecMatter.children!.push(ClusterElement({
    id: 0x0030, name: "GeneralCommissioning",
    classification: "node",
    children: [
        AttributeElement({
            id: 0xfffd, name: "ClusterRevision", base: "uint16",
            access: "R V", constraint: "min 1", default: 1, quality: "F"
        }),

        AttributeElement({
            id: 0xfffc, name: "FeatureMap", base: "map32",
            access: "R V", default: 0, quality: "F"
        }),

        AttributeElement({
            id: 0x0000, name: "Breadcrumb", base: "uint64",
            access: "RW VA", default: 0,
            details: "This attribute allows for the storage of a client-provided small payload which Administrators and Commissioners MAY write and then subsequently read, to keep track of their own progress. This MAY be used by the Commissioner to avoid repeating already-executed actions upon re-establishing a commissioning link after an error.",
            xref: { document: "core", section: "11.9.5.1", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0001, name: "BasicCommissioningInfo", base: "BasicCommissioningInfo",
            access: "R V", constraint: "desc", default: "", quality: "F",
            details: "This attribute SHALL describe critical parameters needed at the beginning of commissioning flow. See BasicCommissioningInfo for more information.",
            xref: { document: "core", section: "11.9.5.2", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0002, name: "RegulatoryConfig", base: "RegulatoryLocationTypeEnum",
            access: "R V", default: "LocationCapability",
            details: "This attribute SHALL indicate the regulatory configuration for the product.",
            xref: { document: "core", section: "11.9.5.3", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0003, name: "LocationCapability", base: "RegulatoryLocationTypeEnum",
            access: "R V", default: "IndoorOutdoor", quality: "F",
            details: "LocationCapability is statically set by the manufacturer and indicates if this Node needs to be told an exact RegulatoryLocation. For example a Node which is \"Indoor Only\" would not be certified for outdoor use at all, and thus there is no need for a commissioner to set or ask the user about whether the device will be used inside or outside. However a device which states its capability is \"Indoor/Outdoor\" means it would like clarification if possible.",
            xref: { document: "core", section: "11.9.5.4", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0004, name: "SupportsConcurrentConnection", base: "bool",
            access: "R V", default: true, quality: "F",
            details: "This attribute SHALL indicate whether this device supports \"concurrent connection flow\" commissioning mode (see Section 5.5, “Commissioning Flows”). If false, the device only supports \"non-concurrent connection flow\" mode.",
            xref: { document: "core", section: "11.9.5.5", version: "1.1" }
        }),

        CommandElement({
            id: 0x0000, name: "ArmFailSafe",
            access: "A", direction: "request", response: "ArmFailSafeResponse",
            xref: { document: "core", section: "11.9.6.1", version: "1.1" }
        }),

        CommandElement({
            id: 0x0001, name: "ArmFailSafeResponse",
            direction: "response",
            xref: { document: "core", section: "11.9.6.1", version: "1.1" }
        }),

        CommandElement({
            id: 0x0002, name: "SetRegulatoryConfig",
            access: "A", direction: "request", response: "SetRegulatoryConfigResponse",
            xref: { document: "core", section: "11.9.6.1", version: "1.1" }
        }),

        CommandElement({
            id: 0x0003, name: "SetRegulatoryConfigResponse",
            direction: "response",
            xref: { document: "core", section: "11.9.6.1", version: "1.1" }
        }),

        CommandElement({
            id: 0x0004, name: "CommissioningComplete",
            access: "F A", direction: "request", response: "CommissioningCompleteResponse",
            xref: { document: "core", section: "11.9.6.1", version: "1.1" }
        }),

        CommandElement({
            id: 0x0005, name: "CommissioningCompleteResponse",
            direction: "response",
            xref: { document: "core", section: "11.9.6.1", version: "1.1" }
        }),

        DatatypeElement({
            id: -1, name: "CommissioningErrorEnum", base: "enum8",
            details: "This data type is derived from enum8.",
            xref: { document: "core", section: "11.9.4.1", version: "1.1" },
            children: [
                DatatypeElement({
                    id: 0x0000, name: "Ok",
                    xref: { document: "core", section: "11.9.4.1", version: "1.1" }
                }),

                DatatypeElement({
                    id: 0x0001, name: "ValueOutsideRange",
                    xref: { document: "core", section: "11.9.4.1", version: "1.1" }
                }),

                DatatypeElement({
                    id: 0x0002, name: "InvalidAuthentication",
                    xref: { document: "core", section: "11.9.4.1", version: "1.1" }
                }),

                DatatypeElement({
                    id: 0x0003, name: "NoFailSafe",
                    xref: { document: "core", section: "11.9.4.1", version: "1.1" }
                }),

                DatatypeElement({
                    id: 0x0004, name: "BusyWithOtherAdmin",
                    xref: { document: "core", section: "11.9.4.1", version: "1.1" }
                })
            ]
        })
    ]
}));
