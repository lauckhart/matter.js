/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ChipMatter } from "../internal.js";
import { ClusterElement, AttributeElement, CommandElement, DatatypeElement } from "../../../index.js";

ChipMatter.children!.push(ClusterElement({
    id: 0x0030, name: "GeneralCommissioning",
    description: "General Commissioning",
    details: "This cluster is used to manage global aspects of the Commissioning flow.",
    children: [
        AttributeElement({
            id: 0x0000, name: "breadcrumb", base: "uint64",
            access: { rw: "W", readPriv: "V", writePriv: "A" }, conformance: [ "M" ], value: "0x0000000000000000"
        }),

        AttributeElement({
            id: 0x0001, name: "basicCommissioningInfo", base: "BasicCommissioningInfo",
            access: { rw: "R" }, conformance: [ "M" ]
        }),

        AttributeElement({
            id: 0x0002, name: "regulatoryConfig", base: "RegulatoryLocationType",
            access: { rw: "R" }, conformance: [ "M" ]
        }),

        AttributeElement({
            id: 0x0003, name: "locationCapability", base: "RegulatoryLocationType",
            access: { rw: "R" }, conformance: [ "M" ]
        }),

        AttributeElement({
            id: 0x0004, name: "supportsConcurrentConnection", base: "bool",
            access: { rw: "R" }, conformance: [ "M" ], value: "1"
        }),

        CommandElement({
            id: 0x0000, name: "ArmFailSafe",
            access: { rw: "R", writePriv: "A" }, conformance: [ "M" ], direction: "request", response: "ArmFailSafeResponse",
            children: [
                DatatypeElement({
                    name: "expiryLengthSeconds", base: "uint16",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "expiryLengthSeconds", base: "uint16",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "breadcrumb", base: "uint64",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "breadcrumb", base: "uint64",
                    access: { rw: "R" }, conformance: [ "M" ]
                })
            ]
        }),

        CommandElement({
            id: 0x0001, name: "ArmFailSafeResponse",
            access: { rw: "R" }, conformance: [ "M" ], direction: "response",
            children: [
                DatatypeElement({
                    name: "errorCode", base: "CommissioningError",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "errorCode", base: "CommissioningError",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "debugText", base: "string",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "debugText", base: "string",
                    access: { rw: "R" }, conformance: [ "M" ]
                })
            ]
        }),

        CommandElement({
            id: 0x0002, name: "SetRegulatoryConfig",
            access: { rw: "R", writePriv: "A" }, conformance: [ "M" ], direction: "request", response: "SetRegulatoryConfigResponse",
            children: [
                DatatypeElement({
                    name: "newRegulatoryConfig", base: "RegulatoryLocationType",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "newRegulatoryConfig", base: "RegulatoryLocationType",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "countryCode", base: "string",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "countryCode", base: "string",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "breadcrumb", base: "uint64",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "breadcrumb", base: "uint64",
                    access: { rw: "R" }, conformance: [ "M" ]
                })
            ]
        }),

        CommandElement({
            id: 0x0003, name: "SetRegulatoryConfigResponse",
            access: { rw: "R" }, conformance: [ "M" ], direction: "response",
            children: [
                DatatypeElement({
                    name: "errorCode", base: "CommissioningError",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "errorCode", base: "CommissioningError",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "debugText", base: "string",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "debugText", base: "string",
                    access: { rw: "R" }, conformance: [ "M" ]
                })
            ]
        }),

        CommandElement({
            id: 0x0004, name: "CommissioningComplete",
            access: { rw: "R", fabric: "F", writePriv: "A" }, conformance: [ "M" ], direction: "request", response: "CommissioningCompleteResponse"
        }),

        CommandElement({
            id: 0x0005, name: "CommissioningCompleteResponse",
            access: { rw: "R" }, conformance: [ "M" ], direction: "response",
            children: [
                DatatypeElement({
                    name: "errorCode", base: "CommissioningError",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "errorCode", base: "CommissioningError",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "debugText", base: "string",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "debugText", base: "string",
                    access: { rw: "R" }, conformance: [ "M" ]
                })
            ]
        }),

        DatatypeElement({
            name: "CommissioningError", base: "enum8",
            access: { rw: "R" }, conformance: [ "M" ],
            children: [
                DatatypeElement({
                    name: "ok",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x0"
                }),

                DatatypeElement({
                    name: "ok",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x0"
                }),

                DatatypeElement({
                    name: "valueOutsideRange",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x1"
                }),

                DatatypeElement({
                    name: "valueOutsideRange",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x1"
                }),

                DatatypeElement({
                    name: "invalidAuthentication",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x2"
                }),

                DatatypeElement({
                    name: "invalidAuthentication",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x2"
                }),

                DatatypeElement({
                    name: "noFailSafe",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x3"
                }),

                DatatypeElement({
                    name: "noFailSafe",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x3"
                }),

                DatatypeElement({
                    name: "busyWithOtherAdmin",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x4"
                }),

                DatatypeElement({
                    name: "busyWithOtherAdmin",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x4"
                })
            ]
        }),

        DatatypeElement({
            name: "RegulatoryLocationType", base: "enum8",
            access: { rw: "R" }, conformance: [ "M" ],
            children: [
                DatatypeElement({
                    name: "indoor",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x0"
                }),

                DatatypeElement({
                    name: "indoor",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x0"
                }),

                DatatypeElement({
                    name: "outdoor",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x1"
                }),

                DatatypeElement({
                    name: "outdoor",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x1"
                }),

                DatatypeElement({
                    name: "indoorOutdoor",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x2"
                }),

                DatatypeElement({
                    name: "indoorOutdoor",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x2"
                })
            ]
        }),

        DatatypeElement({
            name: "BasicCommissioningInfo", base: "struct",
            access: { rw: "R" }, conformance: [ "M" ],
            children: [
                DatatypeElement({
                    name: "failSafeExpiryLengthSeconds", base: "uint16",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "failSafeExpiryLengthSeconds", base: "uint16",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "maxCumulativeFailsafeSeconds", base: "uint16",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "maxCumulativeFailsafeSeconds", base: "uint16",
                    access: { rw: "R" }, conformance: [ "M" ]
                })
            ]
        })
    ]
}));
