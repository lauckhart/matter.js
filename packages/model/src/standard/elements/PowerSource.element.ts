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
    { name: "PowerSource", id: 0x2f },
    Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 3 }),

    Attribute(
        { name: "FeatureMap", id: 0xfffc, type: "FeatureMap" },
        Field({ name: "WIRED", constraint: "0", conformance: "O.a", longName: "Wired" }),
        Field({ name: "BAT", constraint: "1", conformance: "O.a", longName: "Battery" }),
        Field({ name: "RECHG", constraint: "2", conformance: "[BAT]", longName: "Rechargeable" }),
        Field({ name: "REPLC", constraint: "3", conformance: "[BAT]", longName: "Replaceable" })
    ),

    Attribute(
        { name: "Status", id: 0x0, type: "PowerSourceStatusEnum", constraint: "desc", conformance: "M", access: "R V" }
    ),
    Attribute({ name: "Order", id: 0x1, type: "uint8", conformance: "M", access: "R V", quality: "N" }),
    Attribute({
        name: "Description", id: 0x2, type: "string",
        constraint: "max 60", conformance: "M", access: "R V", quality: "F"
    }),
    Attribute({
        name: "WiredAssessedInputVoltage", id: 0x3, type: "uint32",
        conformance: "[WIRED]", access: "R V", quality: "X C"
    }),
    Attribute({
        name: "WiredAssessedInputFrequency", id: 0x4, type: "uint16",
        conformance: "[WIRED]", access: "R V", quality: "X C"
    }),
    Attribute({
        name: "WiredCurrentType", id: 0x5, type: "WiredCurrentTypeEnum",
        constraint: "desc", conformance: "WIRED", access: "R V", quality: "F"
    }),
    Attribute({ name: "WiredAssessedCurrent", id: 0x6, type: "uint32", conformance: "[WIRED]", access: "R V", quality: "X C" }),
    Attribute(
        { name: "WiredNominalVoltage", id: 0x7, type: "uint32", conformance: "[WIRED]", access: "R V", quality: "F" }
    ),
    Attribute(
        { name: "WiredMaximumCurrent", id: 0x8, type: "uint32", conformance: "[WIRED]", access: "R V", quality: "F" }
    ),
    Attribute({ name: "WiredPresent", id: 0x9, type: "bool", conformance: "[WIRED]", access: "R V" }),

    Attribute(
        {
            name: "ActiveWiredFaults", id: 0xa, type: "list",
            constraint: "max 8", conformance: "[WIRED]", access: "R V"
        },
        Field({ name: "entry", type: "WiredFaultEnum" })
    ),

    Attribute({ name: "BatVoltage", id: 0xb, type: "uint32", conformance: "[BAT]", access: "R V", quality: "X C" }),
    Attribute({
        name: "BatPercentRemaining", id: 0xc, type: "uint8",
        constraint: "max 200", conformance: "[BAT]", access: "R V", quality: "X Q"
    }),
    Attribute({ name: "BatTimeRemaining", id: 0xd, type: "uint32", conformance: "[BAT]", access: "R V", quality: "X Q" }),
    Attribute({
        name: "BatChargeLevel", id: 0xe, type: "BatChargeLevelEnum",
        constraint: "desc", conformance: "BAT", access: "R V"
    }),
    Attribute({ name: "BatReplacementNeeded", id: 0xf, type: "bool", conformance: "BAT", access: "R V" }),
    Attribute({
        name: "BatReplaceability", id: 0x10, type: "BatReplaceabilityEnum",
        conformance: "BAT", access: "R V", quality: "F"
    }),
    Attribute({ name: "BatPresent", id: 0x11, type: "bool", conformance: "[BAT]", access: "R V" }),
    Attribute(
        { name: "ActiveBatFaults", id: 0x12, type: "list", constraint: "max 8", conformance: "[BAT]", access: "R V" },
        Field({ name: "entry", type: "BatFaultEnum" })
    ),
    Attribute({
        name: "BatReplacementDescription", id: 0x13, type: "string",
        constraint: "max 60", conformance: "REPLC", access: "R V", quality: "F"
    }),
    Attribute({
        name: "BatCommonDesignation", id: 0x14, type: "BatCommonDesignationEnum",
        constraint: "desc", conformance: "[REPLC]", access: "R V", quality: "F"
    }),
    Attribute({
        name: "BatAnsiDesignation", id: 0x15, type: "string",
        constraint: "max 20", conformance: "[REPLC]", access: "R V", quality: "F"
    }),
    Attribute({
        name: "BatIecDesignation", id: 0x16, type: "string",
        constraint: "max 20", conformance: "[REPLC]", access: "R V", quality: "F"
    }),
    Attribute({
        name: "BatApprovedChemistry", id: 0x17, type: "BatApprovedChemistryEnum",
        constraint: "desc", conformance: "[REPLC]", access: "R V", quality: "F"
    }),
    Attribute(
        { name: "BatCapacity", id: 0x18, type: "uint32", conformance: "[REPLC | RECHG]", access: "R V", quality: "F" }
    ),
    Attribute({ name: "BatQuantity", id: 0x19, type: "uint8", conformance: "REPLC", access: "R V", quality: "F" }),
    Attribute({
        name: "BatChargeState", id: 0x1a, type: "BatChargeStateEnum",
        constraint: "desc", conformance: "RECHG", access: "R V"
    }),
    Attribute({ name: "BatTimeToFullCharge", id: 0x1b, type: "uint32", conformance: "[RECHG]", access: "R V", quality: "X Q" }),
    Attribute({ name: "BatFunctionalWhileCharging", id: 0x1c, type: "bool", conformance: "RECHG", access: "R V" }),
    Attribute(
        { name: "BatChargingCurrent", id: 0x1d, type: "uint32", conformance: "[RECHG]", access: "R V", quality: "X C" }
    ),

    Attribute(
        {
            name: "ActiveBatChargeFaults", id: 0x1e, type: "list",
            constraint: "max 16", conformance: "[RECHG]", access: "R V"
        },
        Field({ name: "entry", type: "BatChargeFaultEnum" })
    ),

    Attribute(
        { name: "EndpointList", id: 0x1f, type: "list", conformance: "M", access: "R V" },
        Field({ name: "entry", type: "endpoint-no" })
    ),

    Event(
        { name: "WiredFaultChange", id: 0x0, conformance: "[WIRED]", access: "V", priority: "info" },
        Field(
            { name: "Current", id: 0x0, type: "list", default: [], constraint: "max 8", conformance: "M" },
            Field({ name: "entry", type: "WiredFaultEnum" })
        ),
        Field(
            { name: "Previous", id: 0x1, type: "list", default: [], constraint: "max 8", conformance: "M" },
            Field({ name: "entry", type: "WiredFaultEnum" })
        )
    ),

    Event(
        { name: "BatFaultChange", id: 0x1, conformance: "[BAT]", access: "V", priority: "info" },
        Field(
            { name: "Current", id: 0x0, type: "list", default: [], constraint: "max 8", conformance: "M" },
            Field({ name: "entry", type: "BatFaultEnum" })
        ),
        Field(
            { name: "Previous", id: 0x1, type: "list", default: [], constraint: "max 8", conformance: "M" },
            Field({ name: "entry", type: "BatFaultEnum" })
        )
    ),

    Event(
        { name: "BatChargeFaultChange", id: 0x2, conformance: "[RECHG]", access: "V", priority: "info" },
        Field(
            { name: "Current", id: 0x0, type: "list", default: [], constraint: "max 16", conformance: "M" },
            Field({ name: "entry", type: "BatChargeFaultEnum" })
        ),
        Field(
            { name: "Previous", id: 0x1, type: "list", default: [], constraint: "max 16", conformance: "M" },
            Field({ name: "entry", type: "BatChargeFaultEnum" })
        )
    ),

    Datatype(
        { name: "WiredFaultEnum", type: "enum8" },
        Field({ name: "Unspecified", id: 0x0, conformance: "M" }),
        Field({ name: "OverVoltage", id: 0x1, conformance: "M" }),
        Field({ name: "UnderVoltage", id: 0x2, conformance: "M" })
    ),

    Datatype(
        { name: "BatFaultEnum", type: "enum8" },
        Field({ name: "Unspecified", id: 0x0, conformance: "M" }),
        Field({ name: "OverTemp", id: 0x1, conformance: "M" }),
        Field({ name: "UnderTemp", id: 0x2, conformance: "M" })
    ),

    Datatype(
        { name: "BatChargeFaultEnum", type: "enum8" },
        Field({ name: "Unspecified", id: 0x0, conformance: "M" }),
        Field({ name: "AmbientTooHot", id: 0x1, conformance: "M" }),
        Field({ name: "AmbientTooCold", id: 0x2, conformance: "M" }),
        Field({ name: "BatteryTooHot", id: 0x3, conformance: "M" }),
        Field({ name: "BatteryTooCold", id: 0x4, conformance: "M" }),
        Field({ name: "BatteryAbsent", id: 0x5, conformance: "M" }),
        Field({ name: "BatteryOverVoltage", id: 0x6, conformance: "M" }),
        Field({ name: "BatteryUnderVoltage", id: 0x7, conformance: "M" }),
        Field({ name: "ChargerOverVoltage", id: 0x8, conformance: "M" }),
        Field({ name: "ChargerUnderVoltage", id: 0x9, conformance: "M" }),
        Field({ name: "SafetyTimeout", id: 0xa, conformance: "M" })
    ),

    Datatype(
        { name: "PowerSourceStatusEnum", type: "enum8" },
        Field({ name: "Unspecified", id: 0x0, conformance: "M" }),
        Field({ name: "Active", id: 0x1, conformance: "M" }),
        Field({ name: "Standby", id: 0x2, conformance: "M" }),
        Field({ name: "Unavailable", id: 0x3, conformance: "M" })
    ),

    Datatype(
        { name: "WiredCurrentTypeEnum", type: "enum8" },
        Field({ name: "Ac", id: 0x0, conformance: "M" }),
        Field({ name: "Dc", id: 0x1, conformance: "M" })
    ),

    Datatype(
        { name: "BatChargeLevelEnum", type: "enum8" },
        Field({ name: "Ok", id: 0x0, conformance: "M" }),
        Field({ name: "Warning", id: 0x1, conformance: "M" }),
        Field({ name: "Critical", id: 0x2, conformance: "M" })
    ),

    Datatype(
        { name: "BatReplaceabilityEnum", type: "enum8" },
        Field({ name: "Unspecified", id: 0x0, conformance: "M" }),
        Field({ name: "NotReplaceable", id: 0x1, conformance: "M" }),
        Field({ name: "UserReplaceable", id: 0x2, conformance: "M" }),
        Field({ name: "FactoryReplaceable", id: 0x3, conformance: "M" })
    ),

    Datatype(
        { name: "BatCommonDesignationEnum", type: "enum16" },
        Field({ name: "Unspecified", id: 0x0, conformance: "M" }),
        Field({ name: "Aaa", id: 0x1, conformance: "M" }),
        Field({ name: "Aa", id: 0x2, conformance: "M" }),
        Field({ name: "C", id: 0x3, conformance: "M", longName: "Common type is as specified" }),
        Field({ name: "D", id: 0x4, conformance: "M", longName: "Common type is as specified" }),
        Field({ name: "4V5", id: 0x5, conformance: "M" }),
        Field({ name: "6V0", id: 0x6, conformance: "M" }),
        Field({ name: "9V0", id: 0x7, conformance: "M" }),
        Field({ name: "12Aa", id: 0x8, conformance: "M" }),
        Field({ name: "Aaaa", id: 0x9, conformance: "M" }),
        Field({ name: "A", id: 0xa, conformance: "M", longName: "Common type is as specified" }),
        Field({ name: "B", id: 0xb, conformance: "M", longName: "Common type is as specified" }),
        Field({ name: "F", id: 0xc, conformance: "M", longName: "Common type is as specified" }),
        Field({ name: "N", id: 0xd, conformance: "M", longName: "Common type is as specified" }),
        Field({ name: "No6", id: 0xe, conformance: "M" }),
        Field({ name: "SubC", id: 0xf, conformance: "M" }),
        Field({ name: "A23", id: 0x10, conformance: "M" }),
        Field({ name: "A27", id: 0x11, conformance: "M" }),
        Field({ name: "Ba5800", id: 0x12, conformance: "M" }),
        Field({ name: "Duplex", id: 0x13, conformance: "M" }),
        Field({ name: "4Sr44", id: 0x14, conformance: "M" }),
        Field({ name: "523", id: 0x15, conformance: "M" }),
        Field({ name: "531", id: 0x16, conformance: "M" }),
        Field({ name: "15V0", id: 0x17, conformance: "M" }),
        Field({ name: "22V5", id: 0x18, conformance: "M" }),
        Field({ name: "30V0", id: 0x19, conformance: "M" }),
        Field({ name: "45V0", id: 0x1a, conformance: "M" }),
        Field({ name: "67V5", id: 0x1b, conformance: "M" }),
        Field({ name: "J", id: 0x1c, conformance: "M", longName: "Common type is as specified" }),
        Field({ name: "Cr123A", id: 0x1d, conformance: "M" }),
        Field({ name: "Cr2", id: 0x1e, conformance: "M" }),
        Field({ name: "2Cr5", id: 0x1f, conformance: "M" }),
        Field({ name: "CrP2", id: 0x20, conformance: "M" }),
        Field({ name: "CrV3", id: 0x21, conformance: "M" }),
        Field({ name: "Sr41", id: 0x22, conformance: "M" }),
        Field({ name: "Sr43", id: 0x23, conformance: "M" }),
        Field({ name: "Sr44", id: 0x24, conformance: "M" }),
        Field({ name: "Sr45", id: 0x25, conformance: "M" }),
        Field({ name: "Sr48", id: 0x26, conformance: "M" }),
        Field({ name: "Sr54", id: 0x27, conformance: "M" }),
        Field({ name: "Sr55", id: 0x28, conformance: "M" }),
        Field({ name: "Sr57", id: 0x29, conformance: "M" }),
        Field({ name: "Sr58", id: 0x2a, conformance: "M" }),
        Field({ name: "Sr59", id: 0x2b, conformance: "M" }),
        Field({ name: "Sr60", id: 0x2c, conformance: "M" }),
        Field({ name: "Sr63", id: 0x2d, conformance: "M" }),
        Field({ name: "Sr64", id: 0x2e, conformance: "M" }),
        Field({ name: "Sr65", id: 0x2f, conformance: "M" }),
        Field({ name: "Sr66", id: 0x30, conformance: "M" }),
        Field({ name: "Sr67", id: 0x31, conformance: "M" }),
        Field({ name: "Sr68", id: 0x32, conformance: "M" }),
        Field({ name: "Sr69", id: 0x33, conformance: "M" }),
        Field({ name: "Sr516", id: 0x34, conformance: "M" }),
        Field({ name: "Sr731", id: 0x35, conformance: "M" }),
        Field({ name: "Sr712", id: 0x36, conformance: "M" }),
        Field({ name: "Lr932", id: 0x37, conformance: "M" }),
        Field({ name: "A5", id: 0x38, conformance: "M" }),
        Field({ name: "A10", id: 0x39, conformance: "M" }),
        Field({ name: "A13", id: 0x3a, conformance: "M" }),
        Field({ name: "A312", id: 0x3b, conformance: "M" }),
        Field({ name: "A675", id: 0x3c, conformance: "M" }),
        Field({ name: "Ac41E", id: 0x3d, conformance: "M" }),
        Field({ name: "10180", id: 0x3e, conformance: "M" }),
        Field({ name: "10280", id: 0x3f, conformance: "M" }),
        Field({ name: "10440", id: 0x40, conformance: "M" }),
        Field({ name: "14250", id: 0x41, conformance: "M" }),
        Field({ name: "14430", id: 0x42, conformance: "M" }),
        Field({ name: "14500", id: 0x43, conformance: "M" }),
        Field({ name: "14650", id: 0x44, conformance: "M" }),
        Field({ name: "15270", id: 0x45, conformance: "M" }),
        Field({ name: "16340", id: 0x46, conformance: "M" }),
        Field({ name: "Rcr123A", id: 0x47, conformance: "M" }),
        Field({ name: "17500", id: 0x48, conformance: "M" }),
        Field({ name: "17670", id: 0x49, conformance: "M" }),
        Field({ name: "18350", id: 0x4a, conformance: "M" }),
        Field({ name: "18500", id: 0x4b, conformance: "M" }),
        Field({ name: "18650", id: 0x4c, conformance: "M" }),
        Field({ name: "19670", id: 0x4d, conformance: "M" }),
        Field({ name: "25500", id: 0x4e, conformance: "M" }),
        Field({ name: "26650", id: 0x4f, conformance: "M" }),
        Field({ name: "32600", id: 0x50, conformance: "M" })
    ),

    Datatype(
        { name: "BatApprovedChemistryEnum", type: "enum16" },
        Field({ name: "Unspecified", id: 0x0, conformance: "M" }),
        Field({ name: "Alkaline", id: 0x1, conformance: "M" }),
        Field({ name: "LithiumCarbonFluoride", id: 0x2, conformance: "M" }),
        Field({ name: "LithiumChromiumOxide", id: 0x3, conformance: "M" }),
        Field({ name: "LithiumCopperOxide", id: 0x4, conformance: "M" }),
        Field({ name: "LithiumIronDisulfide", id: 0x5, conformance: "M" }),
        Field({ name: "LithiumManganeseDioxide", id: 0x6, conformance: "M" }),
        Field({ name: "LithiumThionylChloride", id: 0x7, conformance: "M" }),
        Field({ name: "Magnesium", id: 0x8, conformance: "M" }),
        Field({ name: "MercuryOxide", id: 0x9, conformance: "M" }),
        Field({ name: "NickelOxyhydride", id: 0xa, conformance: "M" }),
        Field({ name: "SilverOxide", id: 0xb, conformance: "M" }),
        Field({ name: "ZincAir", id: 0xc, conformance: "M" }),
        Field({ name: "ZincCarbon", id: 0xd, conformance: "M" }),
        Field({ name: "ZincChloride", id: 0xe, conformance: "M" }),
        Field({ name: "ZincManganeseDioxide", id: 0xf, conformance: "M" }),
        Field({ name: "LeadAcid", id: 0x10, conformance: "M" }),
        Field({ name: "LithiumCobaltOxide", id: 0x11, conformance: "M" }),
        Field({ name: "LithiumIon", id: 0x12, conformance: "M" }),
        Field({ name: "LithiumIonPolymer", id: 0x13, conformance: "M" }),
        Field({ name: "LithiumIronPhosphate", id: 0x14, conformance: "M" }),
        Field({ name: "LithiumSulfur", id: 0x15, conformance: "M" }),
        Field({ name: "LithiumTitanate", id: 0x16, conformance: "M" }),
        Field({ name: "NickelCadmium", id: 0x17, conformance: "M" }),
        Field({ name: "NickelHydrogen", id: 0x18, conformance: "M" }),
        Field({ name: "NickelIron", id: 0x19, conformance: "M" }),
        Field({ name: "NickelMetalHydride", id: 0x1a, conformance: "M" }),
        Field({ name: "NickelZinc", id: 0x1b, conformance: "M" }),
        Field({ name: "SilverZinc", id: 0x1c, conformance: "M" }),
        Field({ name: "SodiumIon", id: 0x1d, conformance: "M" }),
        Field({ name: "SodiumSulfur", id: 0x1e, conformance: "M" }),
        Field({ name: "ZincBromide", id: 0x1f, conformance: "M" }),
        Field({ name: "ZincCerium", id: 0x20, conformance: "M" })
    ),

    Datatype(
        { name: "BatChargeStateEnum", type: "enum8" },
        Field({ name: "Unknown", id: 0x0, conformance: "M" }),
        Field({ name: "IsCharging", id: 0x1, conformance: "M" }),
        Field({ name: "IsAtFullCharge", id: 0x2, conformance: "M" }),
        Field({ name: "IsNotCharging", id: 0x3, conformance: "M" })
    )
);

MatterDefinition.children.push(PowerSource);
