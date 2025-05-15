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

export const SmokeCoAlarm = Cluster(
    { id: 0x5c, name: "SmokeCoAlarm" },
    Attribute({ id: 0xfffd, name: "ClusterRevision", type: "ClusterRevision", default: 1 }),
    Attribute(
        { id: 0xfffc, name: "FeatureMap", type: "FeatureMap" },
        Field({ name: "SMOKE", conformance: "O.a+", constraint: "0", longName: "SmokeAlarm" }),
        Field({ name: "CO", conformance: "O.a+", constraint: "1", longName: "CoAlarm" })
    ),
    Attribute(
        { id: 0x0, name: "ExpressedState", type: "ExpressedStateEnum", access: "R V", conformance: "M", quality: "N" }
    ),
    Attribute({ id: 0x1, name: "SmokeState", type: "AlarmStateEnum", access: "R V", conformance: "SMOKE", quality: "N" }),
    Attribute({ id: 0x2, name: "CoState", type: "AlarmStateEnum", access: "R V", conformance: "CO", quality: "N" }),
    Attribute({ id: 0x3, name: "BatteryAlert", type: "AlarmStateEnum", access: "R V", conformance: "M", quality: "N" }),
    Attribute({ id: 0x4, name: "DeviceMuted", type: "MuteStateEnum", access: "R V", conformance: "O", quality: "N" }),
    Attribute({ id: 0x5, name: "TestInProgress", type: "bool", access: "R V", conformance: "M" }),
    Attribute({ id: 0x6, name: "HardwareFaultAlert", type: "bool", access: "R V", conformance: "M", quality: "N" }),
    Attribute(
        { id: 0x7, name: "EndOfServiceAlert", type: "EndOfServiceEnum", access: "R V", conformance: "M", quality: "N" }
    ),
    Attribute({ id: 0x8, name: "InterconnectSmokeAlarm", type: "AlarmStateEnum", access: "R V", conformance: "O" }),
    Attribute({ id: 0x9, name: "InterconnectCoAlarm", type: "AlarmStateEnum", access: "R V", conformance: "O" }),
    Attribute(
        { id: 0xa, name: "ContaminationState", type: "ContaminationStateEnum", access: "R V", conformance: "[SMOKE]" }
    ),
    Attribute({ id: 0xb, name: "SmokeSensitivityLevel", type: "SensitivityEnum", access: "RW VM", conformance: "[SMOKE]" }),
    Attribute({ id: 0xc, name: "ExpiryDate", type: "epoch-s", access: "R V", conformance: "O", quality: "F" }),
    Event(
        { id: 0x0, name: "SmokeAlarm", access: "V", conformance: "SMOKE", priority: "critical" },
        Field({ id: 0x0, name: "AlarmSeverityLevel", type: "AlarmStateEnum", conformance: "M" })
    ),
    Event(
        { id: 0x1, name: "CoAlarm", access: "V", conformance: "CO", priority: "critical" },
        Field({ id: 0x0, name: "AlarmSeverityLevel", type: "AlarmStateEnum", conformance: "M" })
    ),
    Event(
        { id: 0x2, name: "LowBattery", access: "V", conformance: "M", priority: "info" },
        Field({ id: 0x0, name: "AlarmSeverityLevel", type: "AlarmStateEnum", conformance: "M" })
    ),
    Event({ id: 0x3, name: "HardwareFault", access: "V", conformance: "M", priority: "info" }),
    Event({ id: 0x4, name: "EndOfService", access: "V", conformance: "M", priority: "info" }),
    Event({ id: 0x5, name: "SelfTestComplete", access: "V", conformance: "M", priority: "info" }),
    Event({ id: 0x6, name: "AlarmMuted", access: "V", conformance: "O", priority: "info" }),
    Event({ id: 0x7, name: "MuteEnded", access: "V", conformance: "O", priority: "info" }),
    Event(
        { id: 0x8, name: "InterconnectSmokeAlarm", access: "V", conformance: "[SMOKE]", priority: "critical" },
        Field({ id: 0x0, name: "AlarmSeverityLevel", type: "AlarmStateEnum", conformance: "M" })
    ),
    Event(
        { id: 0x9, name: "InterconnectCoAlarm", access: "V", conformance: "[CO]", priority: "critical" },
        Field({ id: 0x0, name: "AlarmSeverityLevel", type: "AlarmStateEnum", conformance: "M" })
    ),
    Event({ id: 0xa, name: "AllClear", access: "V", conformance: "M", priority: "info" }),
    Command({ id: 0x0, name: "SelfTestRequest", access: "O", conformance: "O", direction: "request", response: "status" }),

    Datatype(
        { name: "AlarmStateEnum", type: "enum8" },
        Field({ id: 0x0, name: "Normal", conformance: "M" }),
        Field({ id: 0x1, name: "Warning", conformance: "O" }),
        Field({ id: 0x2, name: "Critical", conformance: "M" })
    ),

    Datatype(
        { name: "SensitivityEnum", type: "enum8" },
        Field({ id: 0x0, name: "High", conformance: "O" }),
        Field({ id: 0x1, name: "Standard", conformance: "M" }),
        Field({ id: 0x2, name: "Low", conformance: "O" })
    ),

    Datatype(
        { name: "ExpressedStateEnum", type: "enum8" },
        Field({ id: 0x0, name: "Normal", conformance: "M" }),
        Field({ id: 0x1, name: "SmokeAlarm", conformance: "SMOKE" }),
        Field({ id: 0x2, name: "CoAlarm", conformance: "CO" }),
        Field({ id: 0x3, name: "BatteryAlert", conformance: "M" }),
        Field({ id: 0x4, name: "Testing", conformance: "M" }),
        Field({ id: 0x5, name: "HardwareFault", conformance: "M" }),
        Field({ id: 0x6, name: "EndOfService", conformance: "M" }),
        Field({ id: 0x7, name: "InterconnectSmoke", conformance: "O" }),
        Field({ id: 0x8, name: "InterconnectCo", conformance: "O" })
    ),

    Datatype(
        { name: "MuteStateEnum", type: "enum8" },
        Field({ id: 0x0, name: "NotMuted", conformance: "M" }),
        Field({ id: 0x1, name: "Muted", conformance: "M" })
    ),
    Datatype(
        { name: "EndOfServiceEnum", type: "enum8" },
        Field({ id: 0x0, name: "Normal", conformance: "M" }),
        Field({ id: 0x1, name: "Expired", conformance: "M" })
    ),

    Datatype(
        { name: "ContaminationStateEnum", type: "enum8" },
        Field({ id: 0x0, name: "Normal", conformance: "M" }),
        Field({ id: 0x1, name: "Low", conformance: "O" }),
        Field({ id: 0x2, name: "Warning", conformance: "O" }),
        Field({ id: 0x3, name: "Critical", conformance: "M" })
    )
);

MatterDefinition.children.push(SmokeCoAlarm);
