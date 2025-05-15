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
    EventElement as Event,
    CommandElement as Command,
    DatatypeElement as Datatype
} from "../../elements/index.js";

export const AlarmBase = Cluster(
    { name: "AlarmBase" },
    Attribute({ id: 0xfffd, name: "ClusterRevision", type: "ClusterRevision", default: 1 }),
    Attribute(
        { id: 0xfffc, name: "FeatureMap", type: "FeatureMap" },
        Field({ name: "RESET", constraint: "0", longName: "Reset" })
    ),
    Attribute({ id: 0x0, name: "Mask", type: "AlarmBitmap", access: "R V", conformance: "M", default: 0 }),
    Attribute(
        { id: 0x1, name: "Latch", type: "AlarmBitmap", access: "R V", conformance: "RESET", default: 0, quality: "F" }
    ),
    Attribute({ id: 0x2, name: "State", type: "AlarmBitmap", access: "R V", conformance: "M", default: 0 }),
    Attribute(
        { id: 0x3, name: "Supported", type: "AlarmBitmap", access: "R V", conformance: "M", default: 0, quality: "F" }
    ),

    Event(
        { id: 0x0, name: "Notify", access: "V", priority: "info" },
        Field({ id: 0x0, name: "Active", type: "AlarmBitmap", default: 0 }),
        Field({ id: 0x1, name: "Inactive", type: "AlarmBitmap", default: 0 }),
        Field({ id: 0x2, name: "State", type: "AlarmBitmap", default: 0 }),
        Field({ id: 0x3, name: "Mask", type: "AlarmBitmap", default: 0 })
    ),

    Command(
        { id: 0x0, name: "Reset", access: "O", conformance: "RESET", direction: "request", response: "status" },
        Field({ id: 0x0, name: "Alarms", type: "AlarmBitmap", conformance: "M", default: 0 })
    ),

    Command(
        {
            id: 0x1, name: "ModifyEnabledAlarms",
            access: "O", conformance: "O", direction: "request", response: "status"
        },
        Field({ id: 0x0, name: "Mask", type: "AlarmBitmap", conformance: "M", default: 0 })
    ),

    Datatype({ name: "AlarmBitmap", type: "map32" })
);

MatterDefinition.children.push(AlarmBase);
