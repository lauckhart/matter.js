/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Matter } from "../Matter.js";

Matter.children.push({
    tag: "cluster", id: 0x1046, name: "ClientMonitoring",
    description: "Client Monitoring",
    children: [
        {
            tag: "attribute", id: 0x0000, name: "IdleModeInterval",
            conformance: "M", default: 300, type: "uint32"
        },

        {
            tag: "attribute", id: 0x0001, name: "ActiveModeInterval",
            conformance: "M", default: 300, type: "uint32"
        },

        {
            tag: "attribute", id: 0x0002, name: "ActiveModeThreshold",
            conformance: "M", default: 4000, type: "uint16"
        },

        {
            tag: "attribute", id: 0x0003, name: "ExpectedClients",
            conformance: "M", type: "list",
            children: [
                {
                    tag: "datatype", name: "entry",
                    type: "MonitoringRegistration"
                }
            ]
        },

        {
            tag: "command", id: 0x0000, name: "RegisterClientMonitoring",
            access: "R M", conformance: "M", direction: "request",
            children: [
                {
                    tag: "datatype", name: "ClientNodeId",
                    conformance: "M", type: "node-id"
                },

                {
                    tag: "datatype", name: "ICid",
                    conformance: "M", type: "uint64"
                }
            ]
        },

        {
            tag: "command", id: 0x0001, name: "UnregisterClientMonitoring",
            access: "R M", conformance: "M", direction: "request",
            children: [
                {
                    tag: "datatype", name: "ClientNodeId",
                    conformance: "M", type: "node-id"
                },

                {
                    tag: "datatype", name: "ICid",
                    conformance: "M", type: "uint64"
                }
            ]
        },

        {
            tag: "command", id: 0x0002, name: "StayAwakeRequest",
            access: "R M", conformance: "O", direction: "request"
        },

        {
            tag: "datatype", name: "MonitoringRegistration",
            access: "R F", conformance: "M", type: "struct",
            children: [
                {
                    tag: "datatype", name: "ClientNodeId",
                    conformance: "M", type: "node-id"
                },

                {
                    tag: "datatype", name: "ICid",
                    conformance: "M", type: "uint64"
                }
            ]
        }
    ]
});
