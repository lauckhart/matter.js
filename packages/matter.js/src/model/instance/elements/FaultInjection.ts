/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Matter } from "../Matter.js";

Matter.children.push({
    tag: "cluster", id: 0xfff1fc06, name: "FaultInjection",
    description: "Fault Injection",
    children: [
        {
            tag: "command", id: 0x0000, name: "FailAtFault",
            access: "R M", conformance: "M", direction: "request",
            children: [
                {
                    tag: "datatype", name: "Type",
                    conformance: "M", type: "FaultType"
                },

                {
                    tag: "datatype", name: "Id",
                    conformance: "M", type: "uint32"
                },

                {
                    tag: "datatype", name: "NumCallsToSkip",
                    conformance: "M", type: "uint32"
                },

                {
                    tag: "datatype", name: "NumCallsToFail",
                    conformance: "M", type: "uint32"
                },

                {
                    tag: "datatype", name: "TakeMutex",
                    conformance: "M", type: "bool"
                }
            ]
        },

        {
            tag: "command", id: 0x0001, name: "FailRandomlyAtFault",
            access: "R M", conformance: "M", direction: "request",
            children: [
                {
                    tag: "datatype", name: "Type",
                    conformance: "M", type: "FaultType"
                },

                {
                    tag: "datatype", name: "Id",
                    conformance: "M", type: "uint32"
                },

                {
                    tag: "datatype", name: "Percentage",
                    conformance: "M", type: "uint8"
                }
            ]
        },

        {
            tag: "datatype", name: "FaultType",
            conformance: "M", type: "enum8",
            children: [
                {
                    tag: "datatype", id: 0x0000, name: "Unspecified",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0001, name: "SystemFault",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0002, name: "InetFault",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0003, name: "ChipFault",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0004, name: "CertFault",
                    conformance: "M"
                }
            ]
        }
    ]
});
