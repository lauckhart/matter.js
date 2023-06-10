/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ChipMatter } from "../internal.js";
import { ClusterElement, AttributeElement, CommandElement, DatatypeElement } from "../../../index.js";

ChipMatter.children!.push(ClusterElement({
    id: 0x1046, name: "ClientMonitoring",
    description: "Client Monitoring",
    details: "Client Monitoring allows for ensuring that listed clients meet the required monitoring conditions on the server.",
    children: [
        AttributeElement({
            id: 0x0000, name: "IdleModeInterval", base: "uint32",
            access: { rw: "R" }, conformance: [ "M" ]
        }),

        AttributeElement({
            id: 0x0001, name: "ActiveModeInterval", base: "uint32",
            access: { rw: "R" }, conformance: [ "M" ]
        }),

        AttributeElement({
            id: 0x0002, name: "ActiveModeThreshold", base: "uint16",
            access: { rw: "R" }, conformance: [ "M" ]
        }),

        AttributeElement({
            id: 0x0003, name: "ExpectedClients", base: "list",
            access: { rw: "R" }, conformance: [ "M" ]
        }),

        CommandElement({
            id: 0x0000, name: "RegisterClientMonitoring", base: "struct",
            access: { rw: "R", writePrivilege: "M" }, conformance: [ "M" ], direction: "request",
            children: [
                DatatypeElement({
                    name: "ClientNodeId", base: "nodeId",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "ClientNodeId", base: "nodeId",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "ICid", base: "uint64",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "ICid", base: "uint64",
                    access: { rw: "R" }, conformance: [ "M" ]
                })
            ]
        }),

        CommandElement({
            id: 0x0001, name: "UnregisterClientMonitoring", base: "struct",
            access: { rw: "R", writePrivilege: "M" }, conformance: [ "M" ], direction: "request",
            children: [
                DatatypeElement({
                    name: "ClientNodeId", base: "nodeId",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "ClientNodeId", base: "nodeId",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "ICid", base: "uint64",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "ICid", base: "uint64",
                    access: { rw: "R" }, conformance: [ "M" ]
                })
            ]
        }),

        CommandElement({
            id: 0x0002, name: "StayAwakeRequest", base: "struct",
            access: { rw: "R", writePrivilege: "M" }, conformance: [ "O" ], direction: "request"
        }),

        DatatypeElement({
            name: "MonitoringRegistration", base: "struct",
            access: { rw: "R", fabric: "F" }, conformance: [ "M" ],
            children: [
                DatatypeElement({
                    name: "ClientNodeId", base: "nodeId",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "ClientNodeId", base: "nodeId",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "ICid", base: "uint64",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "ICid", base: "uint64",
                    access: { rw: "R" }, conformance: [ "M" ]
                })
            ]
        })
    ]
}));
