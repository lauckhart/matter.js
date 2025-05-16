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
    { name: "Switch", id: 0x3b },
    Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 2 }),

    Attribute(
        { name: "FeatureMap", id: 0xfffc, type: "FeatureMap" },
        Field({ name: "LS", constraint: "0", conformance: "O.a", longName: "LatchingSwitch" }),
        Field({ name: "MS", constraint: "1", conformance: "O.a", longName: "MomentarySwitch" }),
        Field({ name: "MSR", constraint: "2", conformance: "[MS & !AS]", longName: "MomentarySwitchRelease" }),
        Field({ name: "MSL", constraint: "3", conformance: "[MS & (MSR | AS)]", longName: "MomentarySwitchLongPress" }),
        Field({ name: "MSM", constraint: "4", conformance: "AS, [MS & MSR]", longName: "MomentarySwitchMultiPress" }),
        Field({ name: "AS", constraint: "5", conformance: "[MS]", longName: "ActionSwitch" })
    ),

    Attribute({
        name: "NumberOfPositions", id: 0x0, type: "uint8",
        default: 2, constraint: "min 2", conformance: "M", access: "R V", quality: "F"
    }),
    Attribute({
        name: "CurrentPosition", id: 0x1, type: "uint8",
        default: 0, constraint: "max numberOfPositions - 1", conformance: "M", access: "R V", quality: "N"
    }),
    Attribute({
        name: "MultiPressMax", id: 0x2, type: "uint8",
        default: 2, constraint: "min 2", conformance: "MSM", access: "R V", quality: "F"
    }),
    Event(
        { name: "SwitchLatched", id: 0x0, conformance: "LS", access: "V", priority: "info" },
        Field({ name: "NewPosition", id: 0x0, type: "uint8", constraint: "0 to numberOfPositions - 1", conformance: "M" })
    ),
    Event(
        { name: "InitialPress", id: 0x1, conformance: "MS", access: "V", priority: "info" },
        Field({ name: "NewPosition", id: 0x0, type: "uint8", constraint: "0 to numberOfPositions - 1", conformance: "M" })
    ),
    Event(
        { name: "LongPress", id: 0x2, conformance: "MSL", access: "V", priority: "info" },
        Field({ name: "NewPosition", id: 0x0, type: "uint8", constraint: "0 to numberOfPositions - 1", conformance: "M" })
    ),

    Event(
        { name: "ShortRelease", id: 0x3, conformance: "MSR", access: "V", priority: "info" },
        Field({
            name: "PreviousPosition", id: 0x0, type: "uint8",
            constraint: "0 to numberOfPositions - 1", conformance: "M"
        })
    ),

    Event(
        { name: "LongRelease", id: 0x4, conformance: "MSL", access: "V", priority: "info" },
        Field({
            name: "PreviousPosition", id: 0x0, type: "uint8",
            constraint: "0 to numberOfPositions - 1", conformance: "M"
        })
    ),

    Event(
        { name: "MultiPressOngoing", id: 0x5, conformance: "MSM & !AS", access: "V", priority: "info" },
        Field({ name: "NewPosition", id: 0x0, type: "uint8", constraint: "0 to numberOfPositions - 1", conformance: "M" }),
        Field({
            name: "CurrentNumberOfPressesCounted", id: 0x1, type: "uint8",
            constraint: "2 to multiPressMax", conformance: "M"
        })
    ),

    Event(
        { name: "MultiPressComplete", id: 0x6, conformance: "MSM", access: "V", priority: "info" },
        Field({
            name: "PreviousPosition", id: 0x0, type: "uint8",
            constraint: "0 to numberOfPositions - 1", conformance: "M"
        }),
        Field({
            name: "TotalNumberOfPressesCounted", id: 0x1, type: "uint8",
            constraint: "max multiPressMax", conformance: "M"
        })
    )
);

MatterDefinition.children.push(Switch);
