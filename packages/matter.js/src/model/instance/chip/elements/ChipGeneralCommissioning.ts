/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ChipMatter } from "../index.js";
import { ClusterElement, AttributeElement, CommandElement, DatatypeElement } from "../../../index.js";

ChipMatter.children!.push(ClusterElement({
    id: 0x0030, name: "GeneralCommissioning",
    description: "General Commissioning",
    details: "This cluster is used to manage global aspects of the Commissioning flow.",
    children: [
        AttributeElement({
            id: 0x0000, name: "Breadcrumb", base: "uint64",
            access: "W VA", conformance: "M", default: 0
        }),

        AttributeElement({
            id: 0x0001, name: "BasicCommissioningInfo", base: "BasicCommissioningInfo",
            access: "R", conformance: "M"
        }),

        AttributeElement({
            id: 0x0002, name: "RegulatoryConfig", base: "RegulatoryLocationType",
            access: "R", conformance: "M"
        }),

        AttributeElement({
            id: 0x0003, name: "LocationCapability", base: "RegulatoryLocationType",
            access: "R", conformance: "M"
        }),

        AttributeElement({
            id: 0x0004, name: "SupportsConcurrentConnection", base: "bool",
            access: "R", conformance: "M", default: true
        }),

        CommandElement({
            id: 0x0000, name: "ArmFailSafe",
            access: "R A", conformance: "M", direction: "request", response: "ArmFailSafeResponse",
            children: [
                DatatypeElement({
                    name: "ExpiryLengthSeconds", base: "uint16",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "Breadcrumb", base: "uint64",
                    access: "R", conformance: "M"
                })
            ]
        }),

        CommandElement({
            id: 0x0001, name: "ArmFailSafeResponse",
            access: "R", conformance: "M", direction: "response",
            children: [
                DatatypeElement({
                    name: "ErrorCode", base: "CommissioningError",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "DebugText", base: "string",
                    access: "R", conformance: "M"
                })
            ]
        }),

        CommandElement({
            id: 0x0002, name: "SetRegulatoryConfig",
            access: "R A", conformance: "M", direction: "request", response: "SetRegulatoryConfigResponse",
            children: [
                DatatypeElement({
                    name: "NewRegulatoryConfig", base: "RegulatoryLocationType",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "CountryCode", base: "string",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "Breadcrumb", base: "uint64",
                    access: "R", conformance: "M"
                })
            ]
        }),

        CommandElement({
            id: 0x0003, name: "SetRegulatoryConfigResponse",
            access: "R", conformance: "M", direction: "response",
            children: [
                DatatypeElement({
                    name: "ErrorCode", base: "CommissioningError",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "DebugText", base: "string",
                    access: "R", conformance: "M"
                })
            ]
        }),

        CommandElement({
            id: 0x0004, name: "CommissioningComplete",
            access: "R F A", conformance: "M", direction: "request", response: "CommissioningCompleteResponse"
        }),

        CommandElement({
            id: 0x0005, name: "CommissioningCompleteResponse",
            access: "R", conformance: "M", direction: "response",
            children: [
                DatatypeElement({
                    name: "ErrorCode", base: "CommissioningError",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "DebugText", base: "string",
                    access: "R", conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "CommissioningError", base: "enum8",
            access: "R", conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "Ok",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0001, name: "ValueOutsideRange",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0002, name: "InvalidAuthentication",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0003, name: "NoFailSafe",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0004, name: "BusyWithOtherAdmin",
                    access: "R", conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "RegulatoryLocationType", base: "enum8",
            access: "R", conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "Indoor",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0001, name: "Outdoor",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0002, name: "IndoorOutdoor",
                    access: "R", conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "BasicCommissioningInfo", base: "struct",
            access: "R", conformance: "M",
            children: [
                DatatypeElement({
                    name: "FailSafeExpiryLengthSeconds", base: "uint16",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "MaxCumulativeFailsafeSeconds", base: "uint16",
                    access: "R", conformance: "M"
                })
            ]
        })
    ]
}));
