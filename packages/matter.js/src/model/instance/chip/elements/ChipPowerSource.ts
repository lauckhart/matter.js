/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ChipMatter } from "../ChipMatter.js";
import { ClusterElement, AttributeElement, DatatypeElement, EventElement } from "../../../elements/index.js";

ChipMatter.children!.push(ClusterElement({
    id: 0x002f, name: "PowerSource",
    description: "Power Source",
    details: "This cluster is used to describe the configuration and capabilities of a physical power source that provides power to the Node.",
    children: [
        AttributeElement({
            id: 0x0000, name: "PowerSourceStatus", type: "PowerSourceStatusEnum",
            conformance: "M"
        }),

        AttributeElement({
            id: 0x0001, name: "PowerSourceOrder", type: "uint8",
            conformance: "M"
        }),

        AttributeElement({
            id: 0x0002, name: "PowerSourceDescription", type: "string",
            conformance: "M"
        }),

        AttributeElement({
            id: 0x0003, name: "PowerSourceWiredAssessedInputVoltage", type: "uint32",
            conformance: "O", quality: "X"
        }),

        AttributeElement({
            id: 0x0004, name: "PowerSourceWiredAssessedInputFrequency", type: "uint16",
            conformance: "O", quality: "X"
        }),

        AttributeElement({
            id: 0x0005, name: "PowerSourceWiredCurrentType", type: "WiredCurrentTypeEnum",
            conformance: "O"
        }),

        AttributeElement({
            id: 0x0006, name: "PowerSourceWiredAssessedCurrent", type: "uint32",
            conformance: "O", quality: "X"
        }),

        AttributeElement({
            id: 0x0007, name: "PowerSourceWiredNominalVoltage", type: "uint32",
            conformance: "O"
        }),

        AttributeElement({
            id: 0x0008, name: "PowerSourceWiredMaximumCurrent", type: "uint32",
            conformance: "O"
        }),

        AttributeElement({
            id: 0x0009, name: "PowerSourceWiredPresent", type: "bool",
            conformance: "O"
        }),

        AttributeElement({
            id: 0x000a, name: "PowerSourceActiveWiredFaults", type: "list",
            conformance: "O",
            children: [
                DatatypeElement({
                    name: "entry", type: "WiredFaultEnum"
                })
            ]
        }),

        AttributeElement({
            id: 0x000b, name: "PowerSourceBatVoltage", type: "uint32",
            conformance: "O", quality: "X"
        }),

        AttributeElement({
            id: 0x000c, name: "PowerSourceBatPercentRemaining", type: "uint8",
            conformance: "O", quality: "X"
        }),

        AttributeElement({
            id: 0x000d, name: "PowerSourceBatTimeRemaining", type: "uint32",
            conformance: "O", quality: "X"
        }),

        AttributeElement({
            id: 0x000e, name: "PowerSourceBatChargeLevel", type: "BatChargeLevelEnum",
            conformance: "O"
        }),

        AttributeElement({
            id: 0x000f, name: "PowerSourceBatReplacementNeeded", type: "bool",
            conformance: "O"
        }),

        AttributeElement({
            id: 0x0010, name: "PowerSourceBatReplaceability", type: "BatReplaceabilityEnum",
            conformance: "O"
        }),

        AttributeElement({
            id: 0x0011, name: "PowerSourceBatPresent", type: "bool",
            conformance: "O"
        }),

        AttributeElement({
            id: 0x0012, name: "PowerSourceActiveBatFaults", type: "list",
            conformance: "O",
            children: [
                DatatypeElement({
                    name: "entry", type: "BatFaultEnum"
                })
            ]
        }),

        AttributeElement({
            id: 0x0013, name: "PowerSourceBatReplacementDescription", type: "string",
            conformance: "O"
        }),

        AttributeElement({
            id: 0x0014, name: "PowerSourceBatCommonDesignation", type: "BatCommonDesignationEnum",
            conformance: "O"
        }),

        AttributeElement({
            id: 0x0015, name: "PowerSourceBatAnsiDesignation", type: "string",
            conformance: "O"
        }),

        AttributeElement({
            id: 0x0016, name: "PowerSourceBatIecDesignation", type: "string",
            conformance: "O"
        }),

        AttributeElement({
            id: 0x0017, name: "PowerSourceBatApprovedChemistry", type: "BatApprovedChemistryEnum",
            conformance: "O"
        }),

        AttributeElement({
            id: 0x0018, name: "PowerSourceBatCapacity", type: "uint32",
            conformance: "O"
        }),

        AttributeElement({
            id: 0x0019, name: "PowerSourceBatQuantity", type: "uint8",
            conformance: "O"
        }),

        AttributeElement({
            id: 0x001a, name: "PowerSourceBatChargeState", type: "BatChargeStateEnum",
            conformance: "O"
        }),

        AttributeElement({
            id: 0x001b, name: "PowerSourceBatTimeToFullCharge", type: "uint32",
            conformance: "O", quality: "X"
        }),

        AttributeElement({
            id: 0x001c, name: "PowerSourceBatFunctionalWhileCharging", type: "bool",
            conformance: "O"
        }),

        AttributeElement({
            id: 0x001d, name: "PowerSourceBatChargingCurrent", type: "uint32",
            conformance: "O", quality: "X"
        }),

        AttributeElement({
            id: 0x001e, name: "PowerSourceActiveBatChargeFaults", type: "list",
            conformance: "O",
            children: [
                DatatypeElement({
                    name: "entry", type: "BatChargeFaultEnum"
                })
            ]
        }),

        EventElement({
            id: 0x0000, name: "WiredFaultChange",
            conformance: "O", priority: "info",
            children: [
                DatatypeElement({
                    name: "Current", type: "WiredFaultEnum",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "Previous", type: "WiredFaultEnum",
                    conformance: "M"
                })
            ]
        }),

        EventElement({
            id: 0x0001, name: "BatFaultChange",
            conformance: "O", priority: "info",
            children: [
                DatatypeElement({
                    name: "Current", type: "BatFaultEnum",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "Previous", type: "BatFaultEnum",
                    conformance: "M"
                })
            ]
        }),

        EventElement({
            id: 0x0002, name: "BatChargeFaultChange",
            conformance: "O", priority: "info",
            children: [
                DatatypeElement({
                    name: "Current", type: "BatChargeFaultEnum",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "Previous", type: "BatChargeFaultEnum",
                    conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "PowerSourceFeature", type: "map32",
            conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0001, name: "Wired",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0002, name: "Battery",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0004, name: "Rechargeable",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0008, name: "Replaceable",
                    conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "WiredFaultEnum", type: "enum8",
            conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "Unspecified",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0001, name: "OverVoltage",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0002, name: "UnderVoltage",
                    conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "BatFaultEnum", type: "enum8",
            conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "Unspecified",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0001, name: "OverTemp",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0002, name: "UnderTemp",
                    conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "BatChargeFaultEnum", type: "enum8",
            conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "Unspecified",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0001, name: "AmbientTooHot",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0002, name: "AmbientTooCold",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0003, name: "BatteryTooHot",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0004, name: "BatteryTooCold",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0005, name: "BatteryAbsent",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0006, name: "BatteryOverVoltage",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0007, name: "BatteryUnderVoltage",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0008, name: "ChargerOverVoltage",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0009, name: "ChargerUnderVoltage",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x000a, name: "SafetyTimeout",
                    conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "PowerSourceStatusEnum", type: "enum8",
            conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "Unspecified",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0001, name: "Active",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0002, name: "Standby",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0003, name: "Unavailable",
                    conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "WiredCurrentTypeEnum", type: "enum8",
            conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "Ac",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0001, name: "Dc",
                    conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "BatChargeLevelEnum", type: "enum8",
            conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "Ok",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0001, name: "Warning",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0002, name: "Critical",
                    conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "BatReplaceabilityEnum", type: "enum8",
            conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "Unspecified",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0001, name: "NotReplaceable",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0002, name: "UserReplaceable",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0003, name: "FactoryReplaceable",
                    conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "BatChargeStateEnum", type: "enum8",
            conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "Unknown",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0001, name: "IsCharging",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0002, name: "IsAtFullCharge",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0003, name: "IsNotCharging",
                    conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "BatCommonDesignationEnum", type: "enum16",
            conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "Unspecified",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0001, name: "Aaa",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0002, name: "Aa",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0003, name: "C",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0004, name: "D",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0005, name: "4V5",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0006, name: "6V0",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0007, name: "9V0",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0008, name: "12Aa",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0009, name: "Aaaa",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x000a, name: "A",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x000b, name: "B",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x000c, name: "F",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x000d, name: "N",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x000e, name: "No6",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x000f, name: "SubC",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0010, name: "A23",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0011, name: "A27",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0012, name: "Ba5800",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0013, name: "Duplex",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0014, name: "4Sr44",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0015, name: "523",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0016, name: "531",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0017, name: "15V0",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0018, name: "22V5",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0019, name: "30V0",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x001a, name: "45V0",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x001b, name: "67V5",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x001c, name: "J",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x001d, name: "Cr123A",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x001e, name: "Cr2",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x001f, name: "2Cr5",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0020, name: "CrP2",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0021, name: "CrV3",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0022, name: "Sr41",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0023, name: "Sr43",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0024, name: "Sr44",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0025, name: "Sr45",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0026, name: "Sr48",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0027, name: "Sr54",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0028, name: "Sr55",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0029, name: "Sr57",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x002a, name: "Sr58",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x002b, name: "Sr59",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x002c, name: "Sr60",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x002d, name: "Sr63",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x002e, name: "Sr64",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x002f, name: "Sr65",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0030, name: "Sr66",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0031, name: "Sr67",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0032, name: "Sr68",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0033, name: "Sr69",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0034, name: "Sr516",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0035, name: "Sr731",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0036, name: "Sr712",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0037, name: "Lr932",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0038, name: "A5",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0039, name: "A10",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x003a, name: "A13",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x003b, name: "A312",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x003c, name: "A675",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x003d, name: "Ac41E",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x003e, name: "10180",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x003f, name: "10280",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0040, name: "10440",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0041, name: "14250",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0042, name: "14430",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0043, name: "14500",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0044, name: "14650",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0045, name: "15270",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0046, name: "16340",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0047, name: "Rcr123A",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0048, name: "17500",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0049, name: "17670",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x004a, name: "18350",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x004b, name: "18500",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x004c, name: "18650",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x004d, name: "19670",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x004e, name: "25500",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x004f, name: "26650",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0050, name: "32600",
                    conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "BatApprovedChemistryEnum", type: "enum16",
            conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "Unspecified",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0001, name: "Alkaline",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0002, name: "LithiumCarbonFluoride",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0003, name: "LithiumChromiumOxide",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0004, name: "LithiumCopperOxide",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0005, name: "LithiumIronDisulfide",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0006, name: "LithiumManganeseDioxide",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0007, name: "LithiumThionylChloride",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0008, name: "Magnesium",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0009, name: "MercuryOxide",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x000a, name: "NickelOxyhydride",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x000b, name: "SilverOxide",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x000c, name: "ZincAir",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x000d, name: "ZincCarbon",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x000e, name: "ZincChloride",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x000f, name: "ZincManganeseDioxide",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0010, name: "LeadAcid",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0011, name: "LithiumCobaltOxide",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0012, name: "LithiumIon",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0013, name: "LithiumIonPolymer",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0014, name: "LithiumIronPhosphate",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0015, name: "LithiumSulfur",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0016, name: "LithiumTitanate",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0017, name: "NickelCadmium",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0018, name: "NickelHydrogen",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0019, name: "NickelIron",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x001a, name: "NickelMetalHydride",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x001b, name: "NickelZinc",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x001c, name: "SilverZinc",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x001d, name: "SodiumIon",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x001e, name: "SodiumSulfur",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x001f, name: "ZincBromide",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0020, name: "ZincCerium",
                    conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "WiredFaultChangeType", type: "struct",
            conformance: "M",
            children: [
                DatatypeElement({
                    name: "Current", type: "WiredFaultEnum",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "Previous", type: "WiredFaultEnum",
                    conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "BatFaultChangeType", type: "struct",
            conformance: "M",
            children: [
                DatatypeElement({
                    name: "Current", type: "BatFaultEnum",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "Previous", type: "BatFaultEnum",
                    conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "BatChargeFaultChangeType", type: "struct",
            conformance: "M",
            children: [
                DatatypeElement({
                    name: "Current", type: "BatChargeFaultEnum",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "Previous", type: "BatChargeFaultEnum",
                    conformance: "M"
                })
            ]
        })
    ]
}));
