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
            id: 0x0000, name: "Breadcrumb", base: "Breadcrumb",
            access: { rw: "W", readPrivilege: "V", writePrivilege: "A" }, conformance: [ "M" ]
        }),

        AttributeElement({
            id: 0x0001, name: "BasicCommissioningInfo", base: "BasicCommissioningInfo",
            access: { rw: "R" }, conformance: [ "M" ]
        }),

        AttributeElement({
            id: 0x0002, name: "RegulatoryConfig", base: "RegulatoryConfig",
            access: { rw: "R" }, conformance: [ "M" ]
        }),

        AttributeElement({
            id: 0x0003, name: "LocationCapability", base: "LocationCapability",
            access: { rw: "R" }, conformance: [ "M" ]
        }),

        AttributeElement({
            id: 0x0004, name: "SupportsConcurrentConnection", base: "SupportsConcurrentConnection",
            access: { rw: "R" }, conformance: [ "M" ]
        }),

        CommandElement({
            id: 0x0000, name: "ArmFailSafe", base: "struct",
            access: { rw: "R", writePrivilege: "A" }, conformance: [ "M" ], direction: "request", response: "ArmFailSafeResponse",
            children: [
                DatatypeElement({
                    name: "ExpiryLengthSeconds", base: "INT16U",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "ExpiryLengthSeconds", base: "INT16U",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "Breadcrumb", base: "INT64U",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "Breadcrumb", base: "INT64U",
                    access: { rw: "R" }, conformance: [ "M" ]
                })
            ]
        }),

        CommandElement({
            id: 0x0001, name: "ArmFailSafeResponse", base: "struct",
            access: { rw: "R" }, conformance: [ "M" ], direction: "response",
            children: [
                DatatypeElement({
                    name: "ErrorCode", base: "CommissioningError",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "ErrorCode", base: "CommissioningError",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "DebugText", base: "CHAR_STRING",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "DebugText", base: "CHAR_STRING",
                    access: { rw: "R" }, conformance: [ "M" ]
                })
            ]
        }),

        CommandElement({
            id: 0x0002, name: "SetRegulatoryConfig", base: "struct",
            access: { rw: "R", writePrivilege: "A" }, conformance: [ "M" ], direction: "request", response: "SetRegulatoryConfigResponse",
            children: [
                DatatypeElement({
                    name: "NewRegulatoryConfig", base: "RegulatoryLocationType",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "NewRegulatoryConfig", base: "RegulatoryLocationType",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "CountryCode", base: "CHAR_STRING",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "CountryCode", base: "CHAR_STRING",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "Breadcrumb", base: "INT64U",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "Breadcrumb", base: "INT64U",
                    access: { rw: "R" }, conformance: [ "M" ]
                })
            ]
        }),

        CommandElement({
            id: 0x0003, name: "SetRegulatoryConfigResponse", base: "struct",
            access: { rw: "R" }, conformance: [ "M" ], direction: "response",
            children: [
                DatatypeElement({
                    name: "ErrorCode", base: "CommissioningError",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "ErrorCode", base: "CommissioningError",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "DebugText", base: "CHAR_STRING",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "DebugText", base: "CHAR_STRING",
                    access: { rw: "R" }, conformance: [ "M" ]
                })
            ]
        }),

        CommandElement({
            id: 0x0004, name: "CommissioningComplete", base: "struct",
            access: { rw: "R", fabric: "F", writePrivilege: "A" }, conformance: [ "M" ], direction: "request", response: "CommissioningCompleteResponse"
        }),

        CommandElement({
            id: 0x0005, name: "CommissioningCompleteResponse", base: "struct",
            access: { rw: "R" }, conformance: [ "M" ], direction: "response",
            children: [
                DatatypeElement({
                    name: "ErrorCode", base: "CommissioningError",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "ErrorCode", base: "CommissioningError",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "DebugText", base: "CHAR_STRING",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "DebugText", base: "CHAR_STRING",
                    access: { rw: "R" }, conformance: [ "M" ]
                })
            ]
        })
    ]
}))