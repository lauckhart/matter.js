/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Matter } from "../Matter.js";

Matter.children.push({
    tag: "cluster", name: "BarrierControl", id: 0x103, description: "Barrier Control",
    details: "This cluster provides control of a barrier (garage door",
    children: [
        {
            tag: "attribute", name: "BarrierMovingState", id: 0x1, type: "enum8", conformance: "M"
        },

        {
            tag: "attribute", name: "BarrierSafetyStatus", id: 0x2, type: "map16", conformance: "M"
        },

        {
            tag: "attribute", name: "BarrierCapabilities", id: 0x3, type: "map8", conformance: "M"
        },

        {
            tag: "attribute", name: "BarrierOpenEvents", id: 0x4, type: "uint16", access: "RW",
            conformance: "O"
        },

        {
            tag: "attribute", name: "BarrierCloseEvents", id: 0x5, type: "uint16", access: "RW",
            conformance: "O"
        },

        {
            tag: "attribute", name: "BarrierCommandOpenEvents", id: 0x6, type: "uint16", access: "RW",
            conformance: "O"
        },

        {
            tag: "attribute", name: "BarrierCommandCloseEvents", id: 0x7, type: "uint16", access: "RW",
            conformance: "O"
        },

        {
            tag: "attribute", name: "BarrierOpenPeriod", id: 0x8, type: "uint16", access: "RW",
            conformance: "O"
        },

        {
            tag: "attribute", name: "BarrierClosePeriod", id: 0x9, type: "uint16", access: "RW",
            conformance: "O"
        },

        {
            tag: "attribute", name: "BarrierPosition", id: 0xa, type: "uint8", conformance: "M"
        },

        {
            tag: "command", name: "BarrierControlGoToPercent", id: 0x0, conformance: "M", direction: "request",
            children: [
                {
                    tag: "datatype", name: "PercentOpen", type: "uint8", conformance: "M"
                }
            ]
        },

        {
            tag: "command", name: "BarrierControlStop", id: 0x1, conformance: "M", direction: "request"
        }
    ]
});
