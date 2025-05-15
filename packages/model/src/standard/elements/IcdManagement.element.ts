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
    CommandElement as Command,
    DatatypeElement as Datatype
} from "../../elements/index.js";

export const IcdManagement = Cluster(
    { id: 0x46, name: "IcdManagement" },
    Attribute({ id: 0xfffd, name: "ClusterRevision", type: "ClusterRevision", default: 3 }),

    Attribute(
        { id: 0xfffc, name: "FeatureMap", type: "FeatureMap" },
        Field({ name: "CIP", conformance: "LITS, O", constraint: "0", description: "CheckInProtocolSupport" }),
        Field({ name: "UAT", conformance: "LITS, O", constraint: "1", description: "UserActiveModeTrigger" }),
        Field({ name: "LITS", conformance: "O", constraint: "2", description: "LongIdleTimeSupport" }),
        Field({ name: "DSLS", conformance: "[LITS]", constraint: "3", description: "DynamicSitLitSupport" })
    ),

    Attribute({
        id: 0x0, name: "IdleModeDuration", type: "uint32",
        access: "R V", conformance: "M", constraint: "1 to 64800", default: 1, quality: "F"
    }),
    Attribute({
        id: 0x1, name: "ActiveModeDuration", type: "uint32",
        access: "R V", conformance: "M", default: 300, quality: "F"
    }),
    Attribute({
        id: 0x2, name: "ActiveModeThreshold", type: "uint16",
        access: "R V", conformance: "M", default: 300, quality: "F"
    }),

    Attribute(
        {
            id: 0x3, name: "RegisteredClients", type: "list",
            access: "R F A", conformance: "CIP", constraint: "desc", default: [], quality: "N"
        },
        Field({ name: "entry", type: "MonitoringRegistrationStruct" })
    ),

    Attribute(
        { id: 0x4, name: "IcdCounter", type: "uint32", access: "R A", conformance: "CIP", default: 0, quality: "N C" }
    ),
    Attribute({
        id: 0x5, name: "ClientsSupportedPerFabric", type: "uint16",
        access: "R V", conformance: "CIP", constraint: "min 1", default: 1, quality: "F"
    }),
    Attribute({
        id: 0x6, name: "UserActiveModeTriggerHint", type: "UserActiveModeTriggerBitmap",
        access: "R V", conformance: "UAT", constraint: "desc", default: 0, quality: "F"
    }),
    Attribute({
        id: 0x7, name: "UserActiveModeTriggerInstruction", type: "string",
        access: "R V", conformance: "desc", constraint: "max 128", quality: "F"
    }),
    Attribute({ id: 0x8, name: "OperatingMode", type: "OperatingModeEnum", access: "R V", conformance: "LITS" }),
    Attribute({
        id: 0x9, name: "MaximumCheckInBackoff", type: "uint32",
        access: "R V", conformance: "CIP", constraint: "idleModeDuration to 64800", default: 1,
        quality: "F"
    }),

    Command(
        {
            id: 0x0, name: "RegisterClient",
            access: "F M", conformance: "CIP", direction: "request", response: "RegisterClientResponse"
        },
        Field({ id: 0x0, name: "CheckInNodeId", type: "node-id", conformance: "M" }),
        Field({ id: 0x1, name: "MonitoredSubject", type: "subject-id", conformance: "M" }),
        Field({ id: 0x2, name: "Key", type: "octstr", conformance: "M", constraint: "16" }),
        Field({ id: 0x3, name: "VerificationKey", type: "octstr", conformance: "O", constraint: "16" }),
        Field({ id: 0x4, name: "ClientType", type: "ClientTypeEnum", conformance: "M" })
    ),

    Command(
        { id: 0x1, name: "RegisterClientResponse", conformance: "CIP", direction: "response" },
        Field({ id: 0x0, name: "IcdCounter", type: "uint32", conformance: "M" })
    ),

    Command(
        {
            id: 0x2, name: "UnregisterClient",
            access: "F M", conformance: "CIP", direction: "request", response: "status"
        },
        Field({ id: 0x0, name: "CheckInNodeId", type: "node-id", conformance: "M" }),
        Field({ id: 0x1, name: "VerificationKey", type: "octstr", conformance: "O", constraint: "16" })
    ),

    Command(
        {
            id: 0x3, name: "StayActiveRequest",
            access: "O", conformance: "LITS, O", direction: "request", response: "StayActiveResponse"
        },
        Field({ id: 0x0, name: "StayActiveDuration", type: "uint32", conformance: "M" })
    ),

    Command(
        { id: 0x4, name: "StayActiveResponse", conformance: "LITS, O", direction: "response" },
        Field({ id: 0x0, name: "PromisedActiveDuration", type: "uint32", conformance: "M", constraint: "desc" })
    ),

    Datatype(
        { name: "UserActiveModeTriggerBitmap", type: "map32" },
        Field({ name: "PowerCycle", constraint: "0" }),
        Field({ name: "SettingsMenu", constraint: "1" }),
        Field({ name: "CustomInstruction", constraint: "2" }),
        Field({ name: "DeviceManual", constraint: "3" }),
        Field({ name: "ActuateSensor", constraint: "4" }),
        Field({ name: "ActuateSensorSeconds", constraint: "5" }),
        Field({ name: "ActuateSensorTimes", constraint: "6" }),
        Field({ name: "ActuateSensorLightsBlink", constraint: "7" }),
        Field({ name: "ResetButton", constraint: "8" }),
        Field({ name: "ResetButtonLightsBlink", constraint: "9" }),
        Field({ name: "ResetButtonSeconds", constraint: "10" }),
        Field({ name: "ResetButtonTimes", constraint: "11" }),
        Field({ name: "SetupButton", constraint: "12" }),
        Field({ name: "SetupButtonSeconds", constraint: "13" }),
        Field({ name: "SetupButtonLightsBlink", constraint: "14" }),
        Field({ name: "SetupButtonTimes", constraint: "15" }),
        Field({ name: "AppDefinedButton", constraint: "16" })
    ),

    Datatype(
        { name: "ClientTypeEnum", type: "enum8" },
        Field({ id: 0x0, name: "Permanent", conformance: "M" }),
        Field({ id: 0x1, name: "Ephemeral", conformance: "M" })
    ),
    Datatype(
        { name: "OperatingModeEnum", type: "enum8" },
        Field({ id: 0x0, name: "Sit", conformance: "M" }),
        Field({ id: 0x1, name: "Lit", conformance: "M" })
    ),

    Datatype(
        { name: "MonitoringRegistrationStruct", type: "struct" },
        Field({ id: 0x1, name: "CheckInNodeId", type: "node-id", access: "S", conformance: "M", quality: "N" }),
        Field({ id: 0x2, name: "MonitoredSubject", type: "subject-id", access: "S", conformance: "M", quality: "N" }),
        Field({ id: 0x3, name: "Key", access: "F", conformance: "D" }),
        Field({
            id: 0x4, name: "ClientType", type: "ClientTypeEnum",
            access: "S", conformance: "M", default: 0, quality: "N"
        }),
        Field({ id: 0xfe, name: "FabricIndex", type: "FabricIndex" })
    )
);

MatterDefinition.children.push(IcdManagement);
