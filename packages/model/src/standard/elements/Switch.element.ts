/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterDefinition } from "../MatterDefinition.js";
import {
    ClusterElement as Cluster,
    AttributeElement as Attribute,
    FieldElement as Field,
    EventElement as Event
} from "../../elements/index.js";

export const Switch = Cluster(
    { id: 0x3b, name: "Switch" },
    Attribute({ id: 0xfffd, name: "ClusterRevision", type: "ClusterRevision", default: 2 }),

    Attribute(
        { id: 0xfffc, name: "FeatureMap", type: "FeatureMap" },
        Field({ name: "LS", conformance: "O.a", constraint: "0", longName: "LatchingSwitch" }),
        Field({ name: "MS", conformance: "O.a", constraint: "1", longName: "MomentarySwitch" }),
        Field({ name: "MSR", conformance: "[MS & !AS]", constraint: "2", longName: "MomentarySwitchRelease" }),
        Field({ name: "MSL", conformance: "[MS & (MSR | AS)]", constraint: "3", longName: "MomentarySwitchLongPress" }),
        Field({ name: "MSM", conformance: "AS, [MS & MSR]", constraint: "4", longName: "MomentarySwitchMultiPress" }),
        Field({ name: "AS", conformance: "[MS]", constraint: "5", longName: "ActionSwitch" })
    ),

    Attribute({
        id: 0x0, name: "NumberOfPositions", type: "uint8",
        access: "R V", conformance: "M", constraint: "min 2", default: 2, quality: "F"
    }),
    Attribute({
        id: 0x1, name: "CurrentPosition", type: "uint8",
        access: "R V", conformance: "M", constraint: "max numberOfPositions - 1", default: 0, quality: "N"
    }),
    Attribute({
        id: 0x2, name: "MultiPressMax", type: "uint8",
        access: "R V", conformance: "MSM", constraint: "min 2", default: 2, quality: "F"
    }),
    Event(
        { id: 0x0, name: "SwitchLatched", access: "V", conformance: "LS", priority: "info" },
        Field({ id: 0x0, name: "NewPosition", type: "uint8", conformance: "M", constraint: "0 to numberOfPositions - 1" })
    ),
    Event(
        { id: 0x1, name: "InitialPress", access: "V", conformance: "MS", priority: "info" },
        Field({ id: 0x0, name: "NewPosition", type: "uint8", conformance: "M", constraint: "0 to numberOfPositions - 1" })
    ),
    Event(
        { id: 0x2, name: "LongPress", access: "V", conformance: "MSL", priority: "info" },
        Field({ id: 0x0, name: "NewPosition", type: "uint8", conformance: "M", constraint: "0 to numberOfPositions - 1" })
    ),

    Event(
        { id: 0x3, name: "ShortRelease", access: "V", conformance: "MSR", priority: "info" },
        Field({
            id: 0x0, name: "PreviousPosition", type: "uint8",
            conformance: "M", constraint: "0 to numberOfPositions - 1"
        })
    ),

    Event(
        { id: 0x4, name: "LongRelease", access: "V", conformance: "MSL", priority: "info" },
        Field({
            id: 0x0, name: "PreviousPosition", type: "uint8",
            conformance: "M", constraint: "0 to numberOfPositions - 1"
        })
    ),

    Event(
        { id: 0x5, name: "MultiPressOngoing", access: "V", conformance: "MSM & !AS", priority: "info" },
        Field({ id: 0x0, name: "NewPosition", type: "uint8", conformance: "M", constraint: "0 to numberOfPositions - 1" }),
        Field({
            id: 0x1, name: "CurrentNumberOfPressesCounted", type: "uint8",
            conformance: "M", constraint: "2 to multiPressMax"
        })
    ),

    Event(
        { id: 0x6, name: "MultiPressComplete", access: "V", conformance: "MSM", priority: "info" },
        Field({
            id: 0x0, name: "PreviousPosition", type: "uint8",
            conformance: "M", constraint: "0 to numberOfPositions - 1"
        }),
        Field({
            id: 0x1, name: "TotalNumberOfPressesCounted", type: "uint8",
            conformance: "M", constraint: "max multiPressMax"
        })
    )
);

MatterDefinition.children.push(Switch);
