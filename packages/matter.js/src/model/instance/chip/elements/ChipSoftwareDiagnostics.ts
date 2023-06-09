/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ChipMatter } from "../internal.js";
import { ClusterElement, AttributeElement, CommandElement, EventElement, DatatypeElement } from "../../../index.js";

ChipMatter.children!.push(ClusterElement({
    id: 0x0034, name: "SoftwareDiagnostics",
    description: "Software Diagnostics",
    details: "The Software Diagnostics Cluster provides a means to acquire standardized diagnostics metrics that MAY be used by a Node to assist a user or Administrative Node in diagnosing potential problems.",
    children: [
        AttributeElement({
            id: 0x0000, name: "ThreadMetrics", base: "ThreadMetrics",
            access: { rw: "R" }, conformance: [ "O" ]
        }),

        AttributeElement({
            id: 0x0001, name: "CurrentHeapFree", base: "CurrentHeapFree",
            access: { rw: "R" }, conformance: [ "O" ]
        }),

        AttributeElement({
            id: 0x0002, name: "CurrentHeapUsed", base: "CurrentHeapUsed",
            access: { rw: "R" }, conformance: [ "O" ]
        }),

        AttributeElement({
            id: 0x0003, name: "CurrentHeapHighWatermark", base: "CurrentHeapHighWatermark",
            access: { rw: "R" }, conformance: [ "O" ]
        }),

        CommandElement({
            id: 0x0000, name: "ResetWatermarks", base: "struct",
            access: { rw: "R" }, conformance: [ "O" ], direction: "request"
        }),

        EventElement({
            id: 0x0000, name: "SoftwareFault", base: "struct",
            access: { rw: "R" }, conformance: [ "O" ], priority: "info",
            children: [
                DatatypeElement({
                    name: "Id", base: "INT64U",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "Id", base: "INT64U",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "Name", base: "CHAR_STRING",
                    access: { rw: "R" }, conformance: [ "O" ]
                }),

                DatatypeElement({
                    name: "Name", base: "CHAR_STRING",
                    access: { rw: "R" }, conformance: [ "O" ]
                }),

                DatatypeElement({
                    name: "FaultRecording", base: "OCTET_STRING",
                    access: { rw: "R" }, conformance: [ "O" ]
                }),

                DatatypeElement({
                    name: "FaultRecording", base: "OCTET_STRING",
                    access: { rw: "R" }, conformance: [ "O" ]
                })
            ]
        })
    ]
}));
