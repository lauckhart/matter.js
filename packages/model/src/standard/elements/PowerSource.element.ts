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
    DatatypeElement as Datatype
} from "../../elements/index.js";

export const PowerSource = Cluster(
    { id: 0x2f, name: "PowerSource" },
    Attribute({ id: 0xfffd, name: "ClusterRevision", type: "ClusterRevision", default: 3 }),

    Attribute(
        { id: 0xfffc, name: "FeatureMap", type: "FeatureMap" },
        Field({ name: "WIRED", conformance: "O.a", constraint: "0", description: "Wired" }),
        Field({ name: "BAT", conformance: "O.a", constraint: "1", description: "Battery" }),
        Field({ name: "RECHG", conformance: "[BAT]", constraint: "2", description: "Rechargeable" }),
        Field({ name: "REPLC", conformance: "[BAT]", constraint: "3", description: "Replaceable" })
    ),

    Attribute(
        { id: 0x0, name: "Status", type: "PowerSourceStatusEnum", access: "R V", conformance: "M", constraint: "desc" }
    ),
    Attribute({ id: 0x1, name: "Order", type: "uint8", access: "R V", conformance: "M", quality: "N" }),
    Attribute({
        id: 0x2, name: "Description", type: "string",
        access: "R V", conformance: "M", constraint: "max 60", quality: "F"
    }),
    Attribute({
        id: 0x3, name: "WiredAssessedInputVoltage", type: "uint32",
        access: "R V", conformance: "[WIRED]", quality: "X C"
    }),
    Attribute({
        id: 0x4, name: "WiredAssessedInputFrequency", type: "uint16",
        access: "R V", conformance: "[WIRED]", quality: "X C"
    }),
    Attribute({
        id: 0x5, name: "WiredCurrentType", type: "WiredCurrentTypeEnum",
        access: "R V", conformance: "WIRED", constraint: "desc", quality: "F"
    }),
    Attribute({ id: 0x6, name: "WiredAssessedCurrent", type: "uint32", access: "R V", conformance: "[WIRED]", quality: "X C" }),
    Attribute(
        { id: 0x7, name: "WiredNominalVoltage", type: "uint32", access: "R V", conformance: "[WIRED]", quality: "F" }
    ),
    Attribute(
        { id: 0x8, name: "WiredMaximumCurrent", type: "uint32", access: "R V", conformance: "[WIRED]", quality: "F" }
    ),
    Attribute({ id: 0x9, name: "WiredPresent", type: "bool", access: "R V", conformance: "[WIRED]" }),

    Attribute(
        {
            id: 0xa, name: "ActiveWiredFaults", type: "list",
            access: "R V", conformance: "[WIRED]", constraint: "max 8"
        },
        Field({ name: "entry", type: "WiredFaultEnum" })
    ),

    Attribute({ id: 0xb, name: "BatVoltage", type: "uint32", access: "R V", conformance: "[BAT]", quality: "X C" }),
    Attribute({
        id: 0xc, name: "BatPercentRemaining", type: "uint8",
        access: "R V", conformance: "[BAT]", constraint: "max 200", quality: "X Q"
    }),
    Attribute({ id: 0xd, name: "BatTimeRemaining", type: "uint32", access: "R V", conformance: "[BAT]", quality: "X Q" }),
    Attribute({
        id: 0xe, name: "BatChargeLevel", type: "BatChargeLevelEnum",
        access: "R V", conformance: "BAT", constraint: "desc"
    }),
    Attribute({ id: 0xf, name: "BatReplacementNeeded", type: "bool", access: "R V", conformance: "BAT" }),
    Attribute({
        id: 0x10, name: "BatReplaceability", type: "BatReplaceabilityEnum",
        access: "R V", conformance: "BAT", quality: "F"
    }),
    Attribute({ id: 0x11, name: "BatPresent", type: "bool", access: "R V", conformance: "[BAT]" }),
    Attribute(
        { id: 0x12, name: "ActiveBatFaults", type: "list", access: "R V", conformance: "[BAT]", constraint: "max 8" },
        Field({ name: "entry", type: "BatFaultEnum" })
    ),
    Attribute({
        id: 0x13, name: "BatReplacementDescription", type: "string",
        access: "R V", conformance: "REPLC", constraint: "max 60", quality: "F"
    }),
    Attribute({
        id: 0x14, name: "BatCommonDesignation", type: "BatCommonDesignationEnum",
        access: "R V", conformance: "[REPLC]", constraint: "desc", quality: "F"
    }),
    Attribute({
        id: 0x15, name: "BatAnsiDesignation", type: "string",
        access: "R V", conformance: "[REPLC]", constraint: "max 20", quality: "F"
    }),
    Attribute({
        id: 0x16, name: "BatIecDesignation", type: "string",
        access: "R V", conformance: "[REPLC]", constraint: "max 20", quality: "F"
    }),
    Attribute({
        id: 0x17, name: "BatApprovedChemistry", type: "BatApprovedChemistryEnum",
        access: "R V", conformance: "[REPLC]", constraint: "desc", quality: "F"
    }),
    Attribute(
        { id: 0x18, name: "BatCapacity", type: "uint32", access: "R V", conformance: "[REPLC | RECHG]", quality: "F" }
    ),
    Attribute({ id: 0x19, name: "BatQuantity", type: "uint8", access: "R V", conformance: "REPLC", quality: "F" }),
    Attribute({
        id: 0x1a, name: "BatChargeState", type: "BatChargeStateEnum",
        access: "R V", conformance: "RECHG", constraint: "desc"
    }),
    Attribute({ id: 0x1b, name: "BatTimeToFullCharge", type: "uint32", access: "R V", conformance: "[RECHG]", quality: "X Q" }),
    Attribute({ id: 0x1c, name: "BatFunctionalWhileCharging", type: "bool", access: "R V", conformance: "RECHG" }),
    Attribute(
        { id: 0x1d, name: "BatChargingCurrent", type: "uint32", access: "R V", conformance: "[RECHG]", quality: "X C" }
    ),

    Attribute(
        {
            id: 0x1e, name: "ActiveBatChargeFaults", type: "list",
            access: "R V", conformance: "[RECHG]", constraint: "max 16"
        },
        Field({ name: "entry", type: "BatChargeFaultEnum" })
    ),

    Attribute(
        { id: 0x1f, name: "EndpointList", type: "list", access: "R V", conformance: "M" },
        Field({ name: "entry", type: "endpoint-no" })
    ),

    Event(
        { id: 0x0, name: "WiredFaultChange", access: "V", conformance: "[WIRED]", priority: "info" },
        Field(
            { id: 0x0, name: "Current", type: "list", conformance: "M", constraint: "max 8", default: [] },
            Field({ name: "entry", type: "WiredFaultEnum" })
        ),
        Field(
            { id: 0x1, name: "Previous", type: "list", conformance: "M", constraint: "max 8", default: [] },
            Field({ name: "entry", type: "WiredFaultEnum" })
        )
    ),

    Event(
        { id: 0x1, name: "BatFaultChange", access: "V", conformance: "[BAT]", priority: "info" },
        Field(
            { id: 0x0, name: "Current", type: "list", conformance: "M", constraint: "max 8", default: [] },
            Field({ name: "entry", type: "BatFaultEnum" })
        ),
        Field(
            { id: 0x1, name: "Previous", type: "list", conformance: "M", constraint: "max 8", default: [] },
            Field({ name: "entry", type: "BatFaultEnum" })
        )
    ),

    Event(
        { id: 0x2, name: "BatChargeFaultChange", access: "V", conformance: "[RECHG]", priority: "info" },
        Field(
            { id: 0x0, name: "Current", type: "list", conformance: "M", constraint: "max 16", default: [] },
            Field({ name: "entry", type: "BatChargeFaultEnum" })
        ),
        Field(
            { id: 0x1, name: "Previous", type: "list", conformance: "M", constraint: "max 16", default: [] },
            Field({ name: "entry", type: "BatChargeFaultEnum" })
        )
    ),

    Datatype(
        { name: "WiredFaultEnum", type: "enum8" },
        Field({ id: 0x0, name: "Unspecified", conformance: "M" }),
        Field({ id: 0x1, name: "OverVoltage", conformance: "M" }),
        Field({ id: 0x2, name: "UnderVoltage", conformance: "M" })
    ),

    Datatype(
        { name: "BatFaultEnum", type: "enum8" },
        Field({ id: 0x0, name: "Unspecified", conformance: "M" }),
        Field({ id: 0x1, name: "OverTemp", conformance: "M" }),
        Field({ id: 0x2, name: "UnderTemp", conformance: "M" })
    ),

    Datatype(
        { name: "BatChargeFaultEnum", type: "enum8" },
        Field({ id: 0x0, name: "Unspecified", conformance: "M" }),
        Field({ id: 0x1, name: "AmbientTooHot", conformance: "M" }),
        Field({ id: 0x2, name: "AmbientTooCold", conformance: "M" }),
        Field({ id: 0x3, name: "BatteryTooHot", conformance: "M" }),
        Field({ id: 0x4, name: "BatteryTooCold", conformance: "M" }),
        Field({ id: 0x5, name: "BatteryAbsent", conformance: "M" }),
        Field({ id: 0x6, name: "BatteryOverVoltage", conformance: "M" }),
        Field({ id: 0x7, name: "BatteryUnderVoltage", conformance: "M" }),
        Field({ id: 0x8, name: "ChargerOverVoltage", conformance: "M" }),
        Field({ id: 0x9, name: "ChargerUnderVoltage", conformance: "M" }),
        Field({ id: 0xa, name: "SafetyTimeout", conformance: "M" })
    ),

    Datatype(
        { name: "PowerSourceStatusEnum", type: "enum8" },
        Field({ id: 0x0, name: "Unspecified", conformance: "M" }),
        Field({ id: 0x1, name: "Active", conformance: "M" }),
        Field({ id: 0x2, name: "Standby", conformance: "M" }),
        Field({ id: 0x3, name: "Unavailable", conformance: "M" })
    ),

    Datatype(
        { name: "WiredCurrentTypeEnum", type: "enum8" },
        Field({ id: 0x0, name: "Ac", conformance: "M" }),
        Field({ id: 0x1, name: "Dc", conformance: "M" })
    ),

    Datatype(
        { name: "BatChargeLevelEnum", type: "enum8" },
        Field({ id: 0x0, name: "Ok", conformance: "M" }),
        Field({ id: 0x1, name: "Warning", conformance: "M" }),
        Field({ id: 0x2, name: "Critical", conformance: "M" })
    ),

    Datatype(
        { name: "BatReplaceabilityEnum", type: "enum8" },
        Field({ id: 0x0, name: "Unspecified", conformance: "M" }),
        Field({ id: 0x1, name: "NotReplaceable", conformance: "M" }),
        Field({ id: 0x2, name: "UserReplaceable", conformance: "M" }),
        Field({ id: 0x3, name: "FactoryReplaceable", conformance: "M" })
    ),

    Datatype(
        { name: "BatCommonDesignationEnum", type: "enum16" },
        Field({ id: 0x0, name: "Unspecified", conformance: "M" }),
        Field({ id: 0x1, name: "Aaa", conformance: "M" }),
        Field({ id: 0x2, name: "Aa", conformance: "M" }),
        Field({ id: 0x3, name: "C", conformance: "M" }),
        Field({ id: 0x4, name: "D", conformance: "M" }),
        Field({ id: 0x5, name: "4V5", conformance: "M" }),
        Field({ id: 0x6, name: "6V0", conformance: "M" }),
        Field({ id: 0x7, name: "9V0", conformance: "M" }),
        Field({ id: 0x8, name: "12Aa", conformance: "M" }),
        Field({ id: 0x9, name: "Aaaa", conformance: "M" }),
        Field({ id: 0xa, name: "A", conformance: "M" }),
        Field({ id: 0xb, name: "B", conformance: "M" }),
        Field({ id: 0xc, name: "F", conformance: "M" }),
        Field({ id: 0xd, name: "N", conformance: "M" }),
        Field({ id: 0xe, name: "No6", conformance: "M" }),
        Field({ id: 0xf, name: "SubC", conformance: "M" }),
        Field({ id: 0x10, name: "A23", conformance: "M" }),
        Field({ id: 0x11, name: "A27", conformance: "M" }),
        Field({ id: 0x12, name: "Ba5800", conformance: "M" }),
        Field({ id: 0x13, name: "Duplex", conformance: "M" }),
        Field({ id: 0x14, name: "4Sr44", conformance: "M" }),
        Field({ id: 0x15, name: "523", conformance: "M" }),
        Field({ id: 0x16, name: "531", conformance: "M" }),
        Field({ id: 0x17, name: "15V0", conformance: "M" }),
        Field({ id: 0x18, name: "22V5", conformance: "M" }),
        Field({ id: 0x19, name: "30V0", conformance: "M" }),
        Field({ id: 0x1a, name: "45V0", conformance: "M" }),
        Field({ id: 0x1b, name: "67V5", conformance: "M" }),
        Field({ id: 0x1c, name: "J", conformance: "M" }),
        Field({ id: 0x1d, name: "Cr123A", conformance: "M" }),
        Field({ id: 0x1e, name: "Cr2", conformance: "M" }),
        Field({ id: 0x1f, name: "2Cr5", conformance: "M" }),
        Field({ id: 0x20, name: "CrP2", conformance: "M" }),
        Field({ id: 0x21, name: "CrV3", conformance: "M" }),
        Field({ id: 0x22, name: "Sr41", conformance: "M" }),
        Field({ id: 0x23, name: "Sr43", conformance: "M" }),
        Field({ id: 0x24, name: "Sr44", conformance: "M" }),
        Field({ id: 0x25, name: "Sr45", conformance: "M" }),
        Field({ id: 0x26, name: "Sr48", conformance: "M" }),
        Field({ id: 0x27, name: "Sr54", conformance: "M" }),
        Field({ id: 0x28, name: "Sr55", conformance: "M" }),
        Field({ id: 0x29, name: "Sr57", conformance: "M" }),
        Field({ id: 0x2a, name: "Sr58", conformance: "M" }),
        Field({ id: 0x2b, name: "Sr59", conformance: "M" }),
        Field({ id: 0x2c, name: "Sr60", conformance: "M" }),
        Field({ id: 0x2d, name: "Sr63", conformance: "M" }),
        Field({ id: 0x2e, name: "Sr64", conformance: "M" }),
        Field({ id: 0x2f, name: "Sr65", conformance: "M" }),
        Field({ id: 0x30, name: "Sr66", conformance: "M" }),
        Field({ id: 0x31, name: "Sr67", conformance: "M" }),
        Field({ id: 0x32, name: "Sr68", conformance: "M" }),
        Field({ id: 0x33, name: "Sr69", conformance: "M" }),
        Field({ id: 0x34, name: "Sr516", conformance: "M" }),
        Field({ id: 0x35, name: "Sr731", conformance: "M" }),
        Field({ id: 0x36, name: "Sr712", conformance: "M" }),
        Field({ id: 0x37, name: "Lr932", conformance: "M" }),
        Field({ id: 0x38, name: "A5", conformance: "M" }),
        Field({ id: 0x39, name: "A10", conformance: "M" }),
        Field({ id: 0x3a, name: "A13", conformance: "M" }),
        Field({ id: 0x3b, name: "A312", conformance: "M" }),
        Field({ id: 0x3c, name: "A675", conformance: "M" }),
        Field({ id: 0x3d, name: "Ac41E", conformance: "M" }),
        Field({ id: 0x3e, name: "10180", conformance: "M" }),
        Field({ id: 0x3f, name: "10280", conformance: "M" }),
        Field({ id: 0x40, name: "10440", conformance: "M" }),
        Field({ id: 0x41, name: "14250", conformance: "M" }),
        Field({ id: 0x42, name: "14430", conformance: "M" }),
        Field({ id: 0x43, name: "14500", conformance: "M" }),
        Field({ id: 0x44, name: "14650", conformance: "M" }),
        Field({ id: 0x45, name: "15270", conformance: "M" }),
        Field({ id: 0x46, name: "16340", conformance: "M" }),
        Field({ id: 0x47, name: "Rcr123A", conformance: "M" }),
        Field({ id: 0x48, name: "17500", conformance: "M" }),
        Field({ id: 0x49, name: "17670", conformance: "M" }),
        Field({ id: 0x4a, name: "18350", conformance: "M" }),
        Field({ id: 0x4b, name: "18500", conformance: "M" }),
        Field({ id: 0x4c, name: "18650", conformance: "M" }),
        Field({ id: 0x4d, name: "19670", conformance: "M" }),
        Field({ id: 0x4e, name: "25500", conformance: "M" }),
        Field({ id: 0x4f, name: "26650", conformance: "M" }),
        Field({ id: 0x50, name: "32600", conformance: "M" })
    ),

    Datatype(
        { name: "BatApprovedChemistryEnum", type: "enum16" },
        Field({ id: 0x0, name: "Unspecified", conformance: "M" }),
        Field({ id: 0x1, name: "Alkaline", conformance: "M" }),
        Field({ id: 0x2, name: "LithiumCarbonFluoride", conformance: "M" }),
        Field({ id: 0x3, name: "LithiumChromiumOxide", conformance: "M" }),
        Field({ id: 0x4, name: "LithiumCopperOxide", conformance: "M" }),
        Field({ id: 0x5, name: "LithiumIronDisulfide", conformance: "M" }),
        Field({ id: 0x6, name: "LithiumManganeseDioxide", conformance: "M" }),
        Field({ id: 0x7, name: "LithiumThionylChloride", conformance: "M" }),
        Field({ id: 0x8, name: "Magnesium", conformance: "M" }),
        Field({ id: 0x9, name: "MercuryOxide", conformance: "M" }),
        Field({ id: 0xa, name: "NickelOxyhydride", conformance: "M" }),
        Field({ id: 0xb, name: "SilverOxide", conformance: "M" }),
        Field({ id: 0xc, name: "ZincAir", conformance: "M" }),
        Field({ id: 0xd, name: "ZincCarbon", conformance: "M" }),
        Field({ id: 0xe, name: "ZincChloride", conformance: "M" }),
        Field({ id: 0xf, name: "ZincManganeseDioxide", conformance: "M" }),
        Field({ id: 0x10, name: "LeadAcid", conformance: "M" }),
        Field({ id: 0x11, name: "LithiumCobaltOxide", conformance: "M" }),
        Field({ id: 0x12, name: "LithiumIon", conformance: "M" }),
        Field({ id: 0x13, name: "LithiumIonPolymer", conformance: "M" }),
        Field({ id: 0x14, name: "LithiumIronPhosphate", conformance: "M" }),
        Field({ id: 0x15, name: "LithiumSulfur", conformance: "M" }),
        Field({ id: 0x16, name: "LithiumTitanate", conformance: "M" }),
        Field({ id: 0x17, name: "NickelCadmium", conformance: "M" }),
        Field({ id: 0x18, name: "NickelHydrogen", conformance: "M" }),
        Field({ id: 0x19, name: "NickelIron", conformance: "M" }),
        Field({ id: 0x1a, name: "NickelMetalHydride", conformance: "M" }),
        Field({ id: 0x1b, name: "NickelZinc", conformance: "M" }),
        Field({ id: 0x1c, name: "SilverZinc", conformance: "M" }),
        Field({ id: 0x1d, name: "SodiumIon", conformance: "M" }),
        Field({ id: 0x1e, name: "SodiumSulfur", conformance: "M" }),
        Field({ id: 0x1f, name: "ZincBromide", conformance: "M" }),
        Field({ id: 0x20, name: "ZincCerium", conformance: "M" })
    ),

    Datatype(
        { name: "BatChargeStateEnum", type: "enum8" },
        Field({ id: 0x0, name: "Unknown", conformance: "M" }),
        Field({ id: 0x1, name: "IsCharging", conformance: "M" }),
        Field({ id: 0x2, name: "IsAtFullCharge", conformance: "M" }),
        Field({ id: 0x3, name: "IsNotCharging", conformance: "M" })
    )
);

MatterDefinition.children.push(PowerSource);
