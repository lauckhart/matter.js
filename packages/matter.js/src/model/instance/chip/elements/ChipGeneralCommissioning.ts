/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ChipMatter } from "../ChipMatter.js";
import { ClusterElement, AttributeElement, CommandElement, DatatypeElement } from "../../../elements/index.js";

ChipMatter.children!.push(ClusterElement({
    id: 0x0030, name: "GeneralCommissioning",
    description: "General Commissioning",
    details: "This cluster is used to manage global aspects of the Commissioning flow.",
    children: [
        AttributeElement({
            id: 0x0000, name: "Breadcrumb", type: "uint64",
            access: "RW VA", conformance: "M", default: 0
        }),

        AttributeElement({
            id: 0x0001, name: "BasicCommissioningInfo", type: "BasicCommissioningInfo",
            conformance: "M"
        }),

        AttributeElement({
            id: 0x0002, name: "RegulatoryConfig", type: "RegulatoryLocationType",
            conformance: "M"
        }),

        AttributeElement({
            id: 0x0003, name: "LocationCapability", type: "RegulatoryLocationType",
            conformance: "M"
        }),

        AttributeElement({
            id: 0x0004, name: "SupportsConcurrentConnection", type: "bool",
            conformance: "M", default: true
        }),

        CommandElement({
            id: 0x0000, name: "ArmFailSafe",
            access: "R A", conformance: "M", direction: "request", response: "ArmFailSafeResponse",
            children: [
                DatatypeElement({
                    name: "ExpiryLengthSeconds", type: "uint16",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "Breadcrumb", type: "uint64",
                    conformance: "M"
                })
            ]
        }),

        CommandElement({
            id: 0x0001, name: "ArmFailSafeResponse",
            conformance: "M", direction: "response",
            children: [
                DatatypeElement({
                    name: "ErrorCode", type: "CommissioningError",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "DebugText", type: "string",
                    conformance: "M"
                })
            ]
        }),

        CommandElement({
            id: 0x0002, name: "SetRegulatoryConfig",
            access: "R A", conformance: "M", direction: "request", response: "SetRegulatoryConfigResponse",
            children: [
                DatatypeElement({
                    name: "NewRegulatoryConfig", type: "RegulatoryLocationType",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "CountryCode", type: "string",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "Breadcrumb", type: "uint64",
                    conformance: "M"
                })
            ]
        }),

        CommandElement({
            id: 0x0003, name: "SetRegulatoryConfigResponse",
            conformance: "M", direction: "response",
            children: [
                DatatypeElement({
                    name: "ErrorCode", type: "CommissioningError",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "DebugText", type: "string",
                    conformance: "M"
                })
            ]
        }),

        CommandElement({
            id: 0x0004, name: "CommissioningComplete",
            access: "R F A", conformance: "M", direction: "request", response: "CommissioningCompleteResponse"
        }),

        CommandElement({
            id: 0x0005, name: "CommissioningCompleteResponse",
            conformance: "M", direction: "response",
            children: [
                DatatypeElement({
                    name: "ErrorCode", type: "CommissioningError",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "DebugText", type: "string",
                    conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "CommissioningError", type: "enum8",
            conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "Ok",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0001, name: "ValueOutsideRange",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0002, name: "InvalidAuthentication",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0003, name: "NoFailSafe",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0004, name: "BusyWithOtherAdmin",
                    conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "RegulatoryLocationType", type: "enum8",
            conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "Indoor",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0001, name: "Outdoor",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0002, name: "IndoorOutdoor",
                    conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "BasicCommissioningInfo", type: "struct",
            conformance: "M",
            children: [
                DatatypeElement({
                    name: "FailSafeExpiryLengthSeconds", type: "uint16",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "MaxCumulativeFailsafeSeconds", type: "uint16",
                    conformance: "M"
                })
            ]
        })
    ]
}));
