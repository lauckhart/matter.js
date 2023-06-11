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
            id: 0x0000, name: "idleModeInterval", base: "uint32",
            access: { rw: "R" }, conformance: [ "M" ], value: "0x12C"
        }),

        AttributeElement({
            id: 0x0001, name: "activeModeInterval", base: "uint32",
            access: { rw: "R" }, conformance: [ "M" ], value: "0x12C"
        }),

        AttributeElement({
            id: 0x0002, name: "activeModeThreshold", base: "uint16",
            access: { rw: "R" }, conformance: [ "M" ], value: "0xFA0"
        }),

        AttributeElement({
            id: 0x0003, name: "expectedClients", base: "list",
            access: { rw: "R" }, conformance: [ "M" ]
        }),

        CommandElement({
            id: 0x0000, name: "RegisterClientMonitoring",
            access: { rw: "R", writePriv: "M" }, conformance: [ "M" ], direction: "request",
            children: [
                DatatypeElement({
                    name: "clientNodeId", base: "nodeId",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "clientNodeId", base: "nodeId",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "iCid", base: "uint64",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "iCid", base: "uint64",
                    access: { rw: "R" }, conformance: [ "M" ]
                })
            ]
        }),

        CommandElement({
            id: 0x0001, name: "UnregisterClientMonitoring",
            access: { rw: "R", writePriv: "M" }, conformance: [ "M" ], direction: "request",
            children: [
                DatatypeElement({
                    name: "clientNodeId", base: "nodeId",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "clientNodeId", base: "nodeId",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "iCid", base: "uint64",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "iCid", base: "uint64",
                    access: { rw: "R" }, conformance: [ "M" ]
                })
            ]
        }),

        CommandElement({
            id: 0x0002, name: "StayAwakeRequest",
            access: { rw: "R", writePriv: "M" }, conformance: [ "O" ], direction: "request"
        }),

        DatatypeElement({
            name: "MonitoringRegistration", base: "struct",
            access: { rw: "R", fabric: "F" }, conformance: [ "M" ],
            children: [
                DatatypeElement({
                    name: "clientNodeId", base: "nodeId",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "clientNodeId", base: "nodeId",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "iCid", base: "uint64",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "iCid", base: "uint64",
                    access: { rw: "R" }, conformance: [ "M" ]
                })
            ]
        })
    ]
}));
