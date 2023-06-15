/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ChipMatter } from "../ChipMatter.js";
import { ClusterElement, AttributeElement, DatatypeElement, CommandElement } from "../../../elements/index.js";

ChipMatter.children!.push(ClusterElement({
    id: 0x1046, name: "ClientMonitoring",
    description: "Client Monitoring",
    details: "Client Monitoring allows for ensuring that listed clients meet the required monitoring conditions on the server.",
    children: [
        AttributeElement({
            id: 0x0000, name: "IdleModeInterval", base: "uint32",
            conformance: "M", default: 300
        }),

        AttributeElement({
            id: 0x0001, name: "ActiveModeInterval", base: "uint32",
            conformance: "M", default: 300
        }),

        AttributeElement({
            id: 0x0002, name: "ActiveModeThreshold", base: "uint16",
            conformance: "M", default: 4000
        }),

        AttributeElement({
            id: 0x0003, name: "ExpectedClients", base: "list",
            conformance: "M",
            children: [
                DatatypeElement({
                    name: "entry", base: "MonitoringRegistration"
                })
            ]
        }),

        CommandElement({
            id: 0x0000, name: "RegisterClientMonitoring",
            access: "R M", conformance: "M", direction: "request",
            children: [
                DatatypeElement({
                    name: "ClientNodeId", base: "node-id",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "ICid", base: "uint64",
                    conformance: "M"
                })
            ]
        }),

        CommandElement({
            id: 0x0001, name: "UnregisterClientMonitoring",
            access: "R M", conformance: "M", direction: "request",
            children: [
                DatatypeElement({
                    name: "ClientNodeId", base: "node-id",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "ICid", base: "uint64",
                    conformance: "M"
                })
            ]
        }),

        CommandElement({
            id: 0x0002, name: "StayAwakeRequest",
            access: "R M", conformance: "O", direction: "request"
        }),

        DatatypeElement({
            name: "MonitoringRegistration", base: "struct",
            access: "R F", conformance: "M",
            children: [
                DatatypeElement({
                    name: "ClientNodeId", base: "node-id",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "ICid", base: "uint64",
                    conformance: "M"
                })
            ]
        })
    ]
}));
