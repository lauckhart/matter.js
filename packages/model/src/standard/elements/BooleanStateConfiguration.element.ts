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

export const BooleanStateConfiguration = Cluster(
    { id: 0x80, name: "BooleanStateConfiguration" },
    Attribute({ id: 0xfffd, name: "ClusterRevision", type: "ClusterRevision", default: 1 }),

    Attribute(
        { id: 0xfffc, name: "FeatureMap", type: "FeatureMap" },
        Field({ name: "VIS", conformance: "O", constraint: "0" }),
        Field({ name: "AUD", conformance: "O", constraint: "1" }),
        Field({ name: "SPRS", conformance: "[VIS | AUD]", constraint: "2" }),
        Field({ name: "SENSLVL", conformance: "O", constraint: "3" })
    ),

    Attribute({
        id: 0x0, name: "CurrentSensitivityLevel", type: "uint8",
        access: "RW VO", conformance: "SENSLVL", constraint: "max supportedSensitivityLevels - 1",
        quality: "N"
    }),
    Attribute({
        id: 0x1, name: "SupportedSensitivityLevels", type: "uint8",
        access: "R V", conformance: "SENSLVL", constraint: "2 to 10", quality: "F"
    }),
    Attribute({
        id: 0x2, name: "DefaultSensitivityLevel", type: "uint8",
        access: "R V", conformance: "[SENSLVL]", constraint: "max supportedSensitivityLevels - 1",
        quality: "F"
    }),
    Attribute(
        { id: 0x3, name: "AlarmsActive", type: "AlarmModeBitmap", access: "R V", conformance: "VIS | AUD", default: 0 }
    ),
    Attribute(
        { id: 0x4, name: "AlarmsSuppressed", type: "AlarmModeBitmap", access: "R V", conformance: "SPRS", default: 0 }
    ),
    Attribute({
        id: 0x5, name: "AlarmsEnabled", type: "AlarmModeBitmap",
        access: "R V", conformance: "[VIS | AUD]", quality: "N"
    }),
    Attribute({
        id: 0x6, name: "AlarmsSupported", type: "AlarmModeBitmap",
        access: "R V", conformance: "VIS | AUD", default: 0, quality: "F"
    }),
    Attribute({ id: 0x7, name: "SensorFault", type: "SensorFaultBitmap", access: "R V", conformance: "O", default: 0 }),
    Event(
        { id: 0x0, name: "AlarmsStateChanged", access: "V", conformance: "VIS | AUD", priority: "info" },
        Field({ id: 0x0, name: "AlarmsActive", type: "AlarmModeBitmap", conformance: "M" }),
        Field({ id: 0x1, name: "AlarmsSuppressed", type: "AlarmModeBitmap", conformance: "SPRS" })
    ),
    Event(
        { id: 0x1, name: "SensorFault", access: "V", conformance: "O", priority: "info" },
        Field({ id: 0x0, name: "SensorFault", type: "SensorFaultBitmap", conformance: "M" })
    ),
    Command(
        { id: 0x0, name: "SuppressAlarm", access: "O", conformance: "SPRS", direction: "request", response: "status" },
        Field({ id: 0x0, name: "AlarmsToSuppress", type: "AlarmModeBitmap", conformance: "M" })
    ),

    Command(
        {
            id: 0x1, name: "EnableDisableAlarm",
            access: "O", conformance: "VIS | AUD", direction: "request", response: "status"
        },
        Field({ id: 0x0, name: "AlarmsToEnableDisable", type: "AlarmModeBitmap", conformance: "M" })
    ),

    Datatype(
        { name: "AlarmModeBitmap", type: "map8" },
        Field({ name: "Visual", constraint: "0" }),
        Field({ name: "Audible", constraint: "1" })
    ),
    Datatype({ name: "SensorFaultBitmap", type: "map16" }, Field({ name: "GeneralFault", constraint: "0" }))
);

MatterDefinition.children.push(BooleanStateConfiguration);
