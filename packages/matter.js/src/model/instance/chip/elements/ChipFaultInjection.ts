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
            id: 0x0000, name: "FailAtFault", base: "struct",
            access: { rw: "R", writePrivilege: "M" }, conformance: [ "M" ], direction: "request",
            children: [
                DatatypeElement({
                    name: "Type", base: "FaultType",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "Type", base: "FaultType",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "Id", base: "INT32U",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "Id", base: "INT32U",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "NumCallsToSkip", base: "INT32U",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "NumCallsToSkip", base: "INT32U",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "NumCallsToFail", base: "INT32U",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "NumCallsToFail", base: "INT32U",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "TakeMutex", base: "BOOLEAN",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "TakeMutex", base: "BOOLEAN",
                    access: { rw: "R" }, conformance: [ "M" ]
                })
            ]
        }),

        CommandElement({
            id: 0x0001, name: "FailRandomlyAtFault", base: "struct",
            access: { rw: "R", writePrivilege: "M" }, conformance: [ "M" ], direction: "request",
            children: [
                DatatypeElement({
                    name: "Type", base: "FaultType",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "Type", base: "FaultType",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "Id", base: "INT32U",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "Id", base: "INT32U",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "Percentage", base: "INT8U",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "Percentage", base: "INT8U",
                    access: { rw: "R" }, conformance: [ "M" ]
                })
            ]
        })
    ]
}));
