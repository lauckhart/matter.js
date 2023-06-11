/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ChipMatter } from "../internal.js";
import { ClusterElement, CommandElement, DatatypeElement } from "../../../index.js";

ChipMatter.children!.push(ClusterElement({
    id: 0xfff1fc06, name: "FaultInjection",
    description: "Fault Injection",
    details: "The Fault Injection Cluster provide a means for a test harness to configure faults(for example triggering a fault in the system).",
    children: [
        CommandElement({
            id: 0x0000, name: "FailAtFault",
            access: { rw: "R", writePriv: "M" }, conformance: [ "M" ], direction: "request",
            children: [
                DatatypeElement({
                    name: "type", base: "FaultType",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "type", base: "FaultType",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "id", base: "uint32",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "id", base: "uint32",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "numCallsToSkip", base: "uint32",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "numCallsToSkip", base: "uint32",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "numCallsToFail", base: "uint32",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "numCallsToFail", base: "uint32",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "takeMutex", base: "bool",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "takeMutex", base: "bool",
                    access: { rw: "R" }, conformance: [ "M" ]
                })
            ]
        }),

        CommandElement({
            id: 0x0001, name: "FailRandomlyAtFault",
            access: { rw: "R", writePriv: "M" }, conformance: [ "M" ], direction: "request",
            children: [
                DatatypeElement({
                    name: "type", base: "FaultType",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "type", base: "FaultType",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "id", base: "uint32",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "id", base: "uint32",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "percentage", base: "uint8",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "percentage", base: "uint8",
                    access: { rw: "R" }, conformance: [ "M" ]
                })
            ]
        }),

        DatatypeElement({
            name: "FaultType", base: "enum8",
            access: { rw: "R" }, conformance: [ "M" ],
            children: [
                DatatypeElement({
                    name: "unspecified",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x00"
                }),

                DatatypeElement({
                    name: "unspecified",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x00"
                }),

                DatatypeElement({
                    name: "systemFault",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x01"
                }),

                DatatypeElement({
                    name: "systemFault",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x01"
                }),

                DatatypeElement({
                    name: "inetFault",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x02"
                }),

                DatatypeElement({
                    name: "inetFault",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x02"
                }),

                DatatypeElement({
                    name: "chipFault",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x03"
                }),

                DatatypeElement({
                    name: "chipFault",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x03"
                }),

                DatatypeElement({
                    name: "certFault",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x04"
                }),

                DatatypeElement({
                    name: "certFault",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x04"
                })
            ]
        })
    ]
}));
