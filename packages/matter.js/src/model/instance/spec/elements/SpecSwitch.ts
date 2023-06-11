/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { SpecMatter } from "../internal.js";
import { ClusterElement, AttributeElement } from "../../../index.js";

SpecMatter.children!.push(ClusterElement({
    id: 0x003b, name: "Switch",
    classification: "application",
    children: [
        AttributeElement({
            id: 0xfffd, name: "ClusterRevision", base: "uint16",
            access: "R V", conformance: "M", constraint: { min: 1 }, value: 1, quality: "F"
        }),

        AttributeElement({
            id: 0xfffc, name: "FeatureMap", base: "map32",
            access: "R V", conformance: "M", value: 0, quality: "F"
        }),

        AttributeElement({
            id: 0x0000, name: "NumberOfPositions", base: "uint8",
            access: "R", conformance: "M", constraint: "2 to max", value: "2", quality: "F",
            details: "This attribute SHALL indicate the maximum number of positions the switch has. Any kind of switch has a minimum of 2 positions. Also see Section 1.11.10, “NumberOfPositions > 2” for the case NumberOfPositions>2.",
            xref: { section: "1.11.5.1", document: "cluster", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0001, name: "CurrentPosition", base: "uint8",
            access: "R", conformance: "M", constraint: "0 to NumberOfPositions-1", value: "0", quality: "N",
            details: "This attribute SHALL indicate the position of the switch. The valid range is zero to NumberOfPositions-1. CurrentPosition value 0 SHALL be assigned to the default position of the switch: for example the \"open\" state of a rocker switch, or the \"idle\" state of a push button switch.",
            xref: { section: "1.11.5.2", document: "cluster", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0002, name: "MultiPressMax", base: "uint8",
            access: "R", conformance: "MSM", constraint: "2 to max", value: "2", quality: "F",
            details: "This attribute SHALL indicate how many consecutive presses can be detected and reported by a momentary switch which supports multi-press (e.g. it will report the value 3 if it can detect single press, double press and triple press, but not quad press and beyond).",
            xref: { section: "1.11.5.3", document: "cluster", version: "1.1" }
        })
    ]
}));
