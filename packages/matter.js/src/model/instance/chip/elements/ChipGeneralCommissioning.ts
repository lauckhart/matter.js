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
            access: "RW VA", default: 0
        }),

        AttributeElement({
            id: 0x0001, name: "BasicCommissioningInfo", base: "BasicCommissioningInfo"
        }),

        AttributeElement({
            id: 0x0002, name: "RegulatoryConfig", base: "RegulatoryLocationType"
        }),

        AttributeElement({
            id: 0x0003, name: "LocationCapability", base: "RegulatoryLocationType"
        }),

        AttributeElement({
            id: 0x0004, name: "SupportsConcurrentConnection", base: "bool",
            default: true
        }),

        CommandElement({
            id: 0x0000, name: "ArmFailSafe",
            access: "R A", direction: "request", response: "ArmFailSafeResponse",
            children: [
                DatatypeElement({
                    name: "ExpiryLengthSeconds", base: "uint16"
                }),

                DatatypeElement({
                    name: "Breadcrumb", base: "uint64"
                })
            ]
        }),

        CommandElement({
            id: 0x0001, name: "ArmFailSafeResponse",
            direction: "response",
            children: [
                DatatypeElement({
                    name: "ErrorCode", base: "CommissioningError"
                }),

                DatatypeElement({
                    name: "DebugText", base: "string"
                })
            ]
        }),

        CommandElement({
            id: 0x0002, name: "SetRegulatoryConfig",
            access: "R A", direction: "request", response: "SetRegulatoryConfigResponse",
            children: [
                DatatypeElement({
                    name: "NewRegulatoryConfig", base: "RegulatoryLocationType"
                }),

                DatatypeElement({
                    name: "CountryCode", base: "string"
                }),

                DatatypeElement({
                    name: "Breadcrumb", base: "uint64"
                })
            ]
        }),

        CommandElement({
            id: 0x0003, name: "SetRegulatoryConfigResponse",
            direction: "response",
            children: [
                DatatypeElement({
                    name: "ErrorCode", base: "CommissioningError"
                }),

                DatatypeElement({
                    name: "DebugText", base: "string"
                })
            ]
        }),

        CommandElement({
            id: 0x0004, name: "CommissioningComplete",
            access: "R F A", direction: "request", response: "CommissioningCompleteResponse"
        }),

        CommandElement({
            id: 0x0005, name: "CommissioningCompleteResponse",
            direction: "response",
            children: [
                DatatypeElement({
                    name: "ErrorCode", base: "CommissioningError"
                }),

                DatatypeElement({
                    name: "DebugText", base: "string"
                })
            ]
        }),

        DatatypeElement({
            name: "CommissioningError", base: "enum8",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "Ok"
                }),

                DatatypeElement({
                    id: 0x0001, name: "ValueOutsideRange"
                }),

                DatatypeElement({
                    id: 0x0002, name: "InvalidAuthentication"
                }),

                DatatypeElement({
                    id: 0x0003, name: "NoFailSafe"
                }),

                DatatypeElement({
                    id: 0x0004, name: "BusyWithOtherAdmin"
                })
            ]
        }),

        DatatypeElement({
            name: "RegulatoryLocationType", base: "enum8",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "Indoor"
                }),

                DatatypeElement({
                    id: 0x0001, name: "Outdoor"
                }),

                DatatypeElement({
                    id: 0x0002, name: "IndoorOutdoor"
                })
            ]
        }),

        DatatypeElement({
            name: "BasicCommissioningInfo", base: "struct",
            children: [
                DatatypeElement({
                    name: "FailSafeExpiryLengthSeconds", base: "uint16"
                }),

                DatatypeElement({
                    name: "MaxCumulativeFailsafeSeconds", base: "uint16"
                })
            ]
        })
    ]
}));
