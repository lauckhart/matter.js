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
    { name: "BooleanStateConfiguration", id: 0x80 },
    Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 1 }),

    Attribute(
        { name: "FeatureMap", id: 0xfffc, type: "FeatureMap" },
        Field({ name: "VIS", constraint: "0", conformance: "O", longName: "Visual" }),
        Field({ name: "AUD", constraint: "1", conformance: "O", longName: "Audible" }),
        Field({ name: "SPRS", constraint: "2", conformance: "[VIS | AUD]", longName: "AlarmSuppress" }),
        Field({ name: "SENSLVL", constraint: "3", conformance: "O", longName: "SensitivityLevel" })
    ),

    Attribute({
        name: "CurrentSensitivityLevel", id: 0x0, type: "uint8",
        constraint: "max supportedSensitivityLevels - 1", conformance: "SENSLVL", access: "RW VO",
        quality: "N"
    }),
    Attribute({
        name: "SupportedSensitivityLevels", id: 0x1, type: "uint8",
        constraint: "2 to 10", conformance: "SENSLVL", access: "R V", quality: "F"
    }),
    Attribute({
        name: "DefaultSensitivityLevel", id: 0x2, type: "uint8",
        constraint: "max supportedSensitivityLevels - 1", conformance: "[SENSLVL]", access: "R V",
        quality: "F"
    }),
    Attribute(
        { name: "AlarmsActive", id: 0x3, type: "AlarmModeBitmap", default: 0, conformance: "VIS | AUD", access: "R V" }
    ),
    Attribute(
        { name: "AlarmsSuppressed", id: 0x4, type: "AlarmModeBitmap", default: 0, conformance: "SPRS", access: "R V" }
    ),
    Attribute({
        name: "AlarmsEnabled", id: 0x5, type: "AlarmModeBitmap",
        conformance: "[VIS | AUD]", access: "R V", quality: "N"
    }),
    Attribute({
        name: "AlarmsSupported", id: 0x6, type: "AlarmModeBitmap",
        default: 0, conformance: "VIS | AUD", access: "R V", quality: "F"
    }),
    Attribute({ name: "SensorFault", id: 0x7, type: "SensorFaultBitmap", default: 0, conformance: "O", access: "R V" }),
    Event(
        { name: "AlarmsStateChanged", id: 0x0, conformance: "VIS | AUD", access: "V", priority: "info" },
        Field({ name: "AlarmsActive", id: 0x0, type: "AlarmModeBitmap", conformance: "M" }),
        Field({ name: "AlarmsSuppressed", id: 0x1, type: "AlarmModeBitmap", conformance: "SPRS" })
    ),
    Event(
        { name: "SensorFault", id: 0x1, conformance: "O", access: "V", priority: "info" },
        Field({ name: "SensorFault", id: 0x0, type: "SensorFaultBitmap", conformance: "M" })
    ),
    Command(
        { name: "SuppressAlarm", id: 0x0, conformance: "SPRS", access: "O", direction: "request", response: "status" },
        Field({ name: "AlarmsToSuppress", id: 0x0, type: "AlarmModeBitmap", conformance: "M" })
    ),

    Command(
        {
            name: "EnableDisableAlarm", id: 0x1,
            conformance: "VIS | AUD", access: "O", direction: "request", response: "status"
        },
        Field({ name: "AlarmsToEnableDisable", id: 0x0, type: "AlarmModeBitmap", conformance: "M" })
    ),

    Datatype(
        { name: "AlarmModeBitmap", type: "map8" },
        Field({ name: "Visual", constraint: "0" }),
        Field({ name: "Audible", constraint: "1" })
    ),
    Datatype({ name: "SensorFaultBitmap", type: "map16" }, Field({ name: "GeneralFault", constraint: "0" }))
);

MatterDefinition.children.push(BooleanStateConfiguration);
