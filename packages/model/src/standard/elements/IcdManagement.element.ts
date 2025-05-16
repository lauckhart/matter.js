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
    { name: "IcdManagement", id: 0x46 },
    Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 3 }),

    Attribute(
        { name: "FeatureMap", id: 0xfffc, type: "FeatureMap" },
        Field({ name: "CIP", constraint: "0", conformance: "LITS, O", longName: "CheckInProtocolSupport" }),
        Field({ name: "UAT", constraint: "1", conformance: "LITS, O", longName: "UserActiveModeTrigger" }),
        Field({ name: "LITS", constraint: "2", conformance: "O", longName: "LongIdleTimeSupport" }),
        Field({ name: "DSLS", constraint: "3", conformance: "[LITS]", longName: "DynamicSitLitSupport" })
    ),

    Attribute({
        name: "IdleModeDuration", id: 0x0, type: "uint32",
        default: 1, constraint: "1 to 64800", conformance: "M", access: "R V", quality: "F"
    }),
    Attribute({
        name: "ActiveModeDuration", id: 0x1, type: "uint32",
        default: 300, conformance: "M", access: "R V", quality: "F"
    }),
    Attribute({
        name: "ActiveModeThreshold", id: 0x2, type: "uint16",
        default: 300, conformance: "M", access: "R V", quality: "F"
    }),

    Attribute(
        {
            name: "RegisteredClients", id: 0x3, type: "list",
            default: [], constraint: "desc", conformance: "CIP", access: "R F A", quality: "N"
        },
        Field({ name: "entry", type: "MonitoringRegistrationStruct" })
    ),

    Attribute(
        { name: "IcdCounter", id: 0x4, type: "uint32", default: 0, conformance: "CIP", access: "R A", quality: "N C" }
    ),
    Attribute({
        name: "ClientsSupportedPerFabric", id: 0x5, type: "uint16",
        default: 1, constraint: "min 1", conformance: "CIP", access: "R V", quality: "F"
    }),
    Attribute({
        name: "UserActiveModeTriggerHint", id: 0x6, type: "UserActiveModeTriggerBitmap",
        default: 0, constraint: "desc", conformance: "UAT", access: "R V", quality: "F"
    }),
    Attribute({
        name: "UserActiveModeTriggerInstruction", id: 0x7, type: "string",
        constraint: "max 128", conformance: "desc", access: "R V", quality: "F"
    }),
    Attribute({ name: "OperatingMode", id: 0x8, type: "OperatingModeEnum", conformance: "LITS", access: "R V" }),
    Attribute({
        name: "MaximumCheckInBackoff", id: 0x9, type: "uint32",
        default: 1, constraint: "idleModeDuration to 64800", conformance: "CIP", access: "R V",
        quality: "F"
    }),

    Command(
        {
            name: "RegisterClient", id: 0x0,
            conformance: "CIP", access: "F M", direction: "request", response: "RegisterClientResponse"
        },
        Field({ name: "CheckInNodeId", id: 0x0, type: "node-id", conformance: "M" }),
        Field({ name: "MonitoredSubject", id: 0x1, type: "subject-id", conformance: "M" }),
        Field({ name: "Key", id: 0x2, type: "octstr", constraint: "16", conformance: "M" }),
        Field({ name: "VerificationKey", id: 0x3, type: "octstr", constraint: "16", conformance: "O" }),
        Field({ name: "ClientType", id: 0x4, type: "ClientTypeEnum", conformance: "M" })
    ),

    Command(
        { name: "RegisterClientResponse", id: 0x1, conformance: "CIP", direction: "response" },
        Field({ name: "IcdCounter", id: 0x0, type: "uint32", conformance: "M" })
    ),

    Command(
        {
            name: "UnregisterClient", id: 0x2,
            conformance: "CIP", access: "F M", direction: "request", response: "status"
        },
        Field({ name: "CheckInNodeId", id: 0x0, type: "node-id", conformance: "M" }),
        Field({ name: "VerificationKey", id: 0x1, type: "octstr", constraint: "16", conformance: "O" })
    ),

    Command(
        {
            name: "StayActiveRequest", id: 0x3,
            conformance: "LITS, O", access: "O", direction: "request", response: "StayActiveResponse"
        },
        Field({ name: "StayActiveDuration", id: 0x0, type: "uint32", conformance: "M" })
    ),

    Command(
        { name: "StayActiveResponse", id: 0x4, conformance: "LITS, O", direction: "response" },
        Field({ name: "PromisedActiveDuration", id: 0x0, type: "uint32", constraint: "desc", conformance: "M" })
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
        Field({ name: "Permanent", id: 0x0, conformance: "M" }),
        Field({ name: "Ephemeral", id: 0x1, conformance: "M" })
    ),
    Datatype(
        { name: "OperatingModeEnum", type: "enum8" },
        Field({ name: "Sit", id: 0x0, conformance: "M" }),
        Field({ name: "Lit", id: 0x1, conformance: "M" })
    ),

    Datatype(
        { name: "MonitoringRegistrationStruct", type: "struct" },
        Field({ name: "CheckInNodeId", id: 0x1, type: "node-id", conformance: "M", access: "S", quality: "N" }),
        Field({ name: "MonitoredSubject", id: 0x2, type: "subject-id", conformance: "M", access: "S", quality: "N" }),
        Field({ name: "Key", id: 0x3, conformance: "D", access: "F" }),
        Field({
            name: "ClientType", id: 0x4, type: "ClientTypeEnum",
            default: 0, conformance: "M", access: "S", quality: "N"
        }),
        Field({ name: "FabricIndex", id: 0xfe, type: "FabricIndex" })
    )
);

MatterDefinition.children.push(IcdManagement);
