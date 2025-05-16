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
    Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 1 }),
    Attribute(
        { name: "FeatureMap", id: 0xfffc, type: "FeatureMap" },
        Field({ name: "RESET", constraint: "0", longName: "Reset" })
    ),
    Attribute({ name: "Mask", id: 0x0, type: "AlarmBitmap", default: 0, conformance: "M", access: "R V" }),
    Attribute(
        { name: "Latch", id: 0x1, type: "AlarmBitmap", default: 0, conformance: "RESET", access: "R V", quality: "F" }
    ),
    Attribute({ name: "State", id: 0x2, type: "AlarmBitmap", default: 0, conformance: "M", access: "R V" }),
    Attribute(
        { name: "Supported", id: 0x3, type: "AlarmBitmap", default: 0, conformance: "M", access: "R V", quality: "F" }
    ),

    Event(
        { name: "Notify", id: 0x0, access: "V", priority: "info" },
        Field({ name: "Active", id: 0x0, type: "AlarmBitmap", default: 0 }),
        Field({ name: "Inactive", id: 0x1, type: "AlarmBitmap", default: 0 }),
        Field({ name: "State", id: 0x2, type: "AlarmBitmap", default: 0 }),
        Field({ name: "Mask", id: 0x3, type: "AlarmBitmap", default: 0 })
    ),

    Command(
        { name: "Reset", id: 0x0, conformance: "RESET", access: "O", direction: "request", response: "status" },
        Field({ name: "Alarms", id: 0x0, type: "AlarmBitmap", default: 0, conformance: "M" })
    ),

    Command(
        {
            name: "ModifyEnabledAlarms", id: 0x1,
            conformance: "O", access: "O", direction: "request", response: "status"
        },
        Field({ name: "Mask", id: 0x0, type: "AlarmBitmap", default: 0, conformance: "M" })
    ),

    Datatype({ name: "AlarmBitmap", type: "map32" })
);

MatterDefinition.children.push(AlarmBase);
