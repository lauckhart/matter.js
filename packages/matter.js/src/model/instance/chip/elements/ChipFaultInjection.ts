/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ChipMatter } from "../index.js";
import { ClusterElement, CommandElement, DatatypeElement } from "../../../index.js";

ChipMatter.children!.push(ClusterElement({
    id: 0xfff1fc06, name: "FaultInjection",
    description: "Fault Injection",
    details: "The Fault Injection Cluster provide a means for a test harness to configure faults(for example triggering a fault in the system).",
    children: [
        CommandElement({
            id: 0x0000, name: "FailAtFault",
            access: "R M", direction: "request",
            children: [
                DatatypeElement({
                    name: "Type", base: "FaultType"
                }),

                DatatypeElement({
                    name: "Id", base: "uint32"
                }),

                DatatypeElement({
                    name: "NumCallsToSkip", base: "uint32"
                }),

                DatatypeElement({
                    name: "NumCallsToFail", base: "uint32"
                }),

                DatatypeElement({
                    name: "TakeMutex", base: "bool"
                })
            ]
        }),

        CommandElement({
            id: 0x0001, name: "FailRandomlyAtFault",
            access: "R M", direction: "request",
            children: [
                DatatypeElement({
                    name: "Type", base: "FaultType"
                }),

                DatatypeElement({
                    name: "Id", base: "uint32"
                }),

                DatatypeElement({
                    name: "Percentage", base: "uint8"
                })
            ]
        }),

        DatatypeElement({
            name: "FaultType", base: "enum8",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "Unspecified"
                }),

                DatatypeElement({
                    id: 0x0001, name: "SystemFault"
                }),

                DatatypeElement({
                    id: 0x0002, name: "InetFault"
                }),

                DatatypeElement({
                    id: 0x0003, name: "ChipFault"
                }),

                DatatypeElement({
                    id: 0x0004, name: "CertFault"
                })
            ]
        })
    ]
}));
