/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ChipMatter } from "../index.js";
import { ClusterElement, AttributeElement, DatatypeElement, EventElement } from "../../../index.js";

ChipMatter.children!.push(ClusterElement({
    id: 0x002f, name: "PowerSource",
    description: "Power Source",
    details: "This cluster is used to describe the configuration and capabilities of a physical power source that provides power to the Node.",
    children: [
        AttributeElement({
            id: 0x0000, name: "PowerSourceStatus", base: "PowerSourceStatusEnum",
            access: "R", conformance: "M"
        }),

        AttributeElement({
            id: 0x0001, name: "PowerSourceOrder", base: "uint8",
            access: "R", conformance: "M"
        }),

        AttributeElement({
            id: 0x0002, name: "PowerSourceDescription", base: "string",
            access: "R", conformance: "M"
        }),

        AttributeElement({
            id: 0x0003, name: "PowerSourceWiredAssessedInputVoltage", base: "uint32",
            access: "R", conformance: "O", quality: "X"
        }),

        AttributeElement({
            id: 0x0004, name: "PowerSourceWiredAssessedInputFrequency", base: "uint16",
            access: "R", conformance: "O", quality: "X"
        }),

        AttributeElement({
            id: 0x0005, name: "PowerSourceWiredCurrentType", base: "WiredCurrentTypeEnum",
            access: "R", conformance: "O"
        }),

        AttributeElement({
            id: 0x0006, name: "PowerSourceWiredAssessedCurrent", base: "uint32",
            access: "R", conformance: "O", quality: "X"
        }),

        AttributeElement({
            id: 0x0007, name: "PowerSourceWiredNominalVoltage", base: "uint32",
            access: "R", conformance: "O"
        }),

        AttributeElement({
            id: 0x0008, name: "PowerSourceWiredMaximumCurrent", base: "uint32",
            access: "R", conformance: "O"
        }),

        AttributeElement({
            id: 0x0009, name: "PowerSourceWiredPresent", base: "bool",
            access: "R", conformance: "O"
        }),

        AttributeElement({
            id: 0x000a, name: "PowerSourceActiveWiredFaults", base: "list",
            access: "R", conformance: "O",
            children: [
                DatatypeElement({
                    name: "entry", base: "WiredFaultEnum"
                })
            ]
        }),

        AttributeElement({
            id: 0x000b, name: "PowerSourceBatVoltage", base: "uint32",
            access: "R", conformance: "O", quality: "X"
        }),

        AttributeElement({
            id: 0x000c, name: "PowerSourceBatPercentRemaining", base: "uint8",
            access: "R", conformance: "O", quality: "X"
        }),

        AttributeElement({
            id: 0x000d, name: "PowerSourceBatTimeRemaining", base: "uint32",
            access: "R", conformance: "O", quality: "X"
        }),

        AttributeElement({
            id: 0x000e, name: "PowerSourceBatChargeLevel", base: "BatChargeLevelEnum",
            access: "R", conformance: "O"
        }),

        AttributeElement({
            id: 0x000f, name: "PowerSourceBatReplacementNeeded", base: "bool",
            access: "R", conformance: "O"
        }),

        AttributeElement({
            id: 0x0010, name: "PowerSourceBatReplaceability", base: "BatReplaceabilityEnum",
            access: "R", conformance: "O"
        }),

        AttributeElement({
            id: 0x0011, name: "PowerSourceBatPresent", base: "bool",
            access: "R", conformance: "O"
        }),

        AttributeElement({
            id: 0x0012, name: "PowerSourceActiveBatFaults", base: "list",
            access: "R", conformance: "O",
            children: [
                DatatypeElement({
                    name: "entry", base: "BatFaultEnum"
                })
            ]
        }),

        AttributeElement({
            id: 0x0013, name: "PowerSourceBatReplacementDescription", base: "string",
            access: "R", conformance: "O"
        }),

        AttributeElement({
            id: 0x0014, name: "PowerSourceBatCommonDesignation", base: "BatCommonDesignationEnum",
            access: "R", conformance: "O"
        }),

        AttributeElement({
            id: 0x0015, name: "PowerSourceBatAnsiDesignation", base: "string",
            access: "R", conformance: "O"
        }),

        AttributeElement({
            id: 0x0016, name: "PowerSourceBatIecDesignation", base: "string",
            access: "R", conformance: "O"
        }),

        AttributeElement({
            id: 0x0017, name: "PowerSourceBatApprovedChemistry", base: "BatApprovedChemistryEnum",
            access: "R", conformance: "O"
        }),

        AttributeElement({
            id: 0x0018, name: "PowerSourceBatCapacity", base: "uint32",
            access: "R", conformance: "O"
        }),

        AttributeElement({
            id: 0x0019, name: "PowerSourceBatQuantity", base: "uint8",
            access: "R", conformance: "O"
        }),

        AttributeElement({
            id: 0x001a, name: "PowerSourceBatChargeState", base: "BatChargeStateEnum",
            access: "R", conformance: "O"
        }),

        AttributeElement({
            id: 0x001b, name: "PowerSourceBatTimeToFullCharge", base: "uint32",
            access: "R", conformance: "O", quality: "X"
        }),

        AttributeElement({
            id: 0x001c, name: "PowerSourceBatFunctionalWhileCharging", base: "bool",
            access: "R", conformance: "O"
        }),

        AttributeElement({
            id: 0x001d, name: "PowerSourceBatChargingCurrent", base: "uint32",
            access: "R", conformance: "O", quality: "X"
        }),

        AttributeElement({
            id: 0x001e, name: "PowerSourceActiveBatChargeFaults", base: "list",
            access: "R", conformance: "O",
            children: [
                DatatypeElement({
                    name: "entry", base: "BatChargeFaultEnum"
                })
            ]
        }),

        EventElement({
            id: 0x0000, name: "WiredFaultChange",
            access: "R", conformance: "O", priority: "info",
            children: [
                DatatypeElement({
                    name: "Current", base: "WiredFaultEnum",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "Previous", base: "WiredFaultEnum",
                    access: "R", conformance: "M"
                })
            ]
        }),

        EventElement({
            id: 0x0001, name: "BatFaultChange",
            access: "R", conformance: "O", priority: "info",
            children: [
                DatatypeElement({
                    name: "Current", base: "BatFaultEnum",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "Previous", base: "BatFaultEnum",
                    access: "R", conformance: "M"
                })
            ]
        }),

        EventElement({
            id: 0x0002, name: "BatChargeFaultChange",
            access: "R", conformance: "O", priority: "info",
            children: [
                DatatypeElement({
                    name: "Current", base: "BatChargeFaultEnum",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "Previous", base: "BatChargeFaultEnum",
                    access: "R", conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "PowerSourceFeature", base: "map32",
            access: "R", conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0001, name: "Wired",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0002, name: "Battery",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0004, name: "Rechargeable",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0008, name: "Replaceable",
                    access: "R", conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "WiredFaultEnum", base: "enum8",
            access: "R", conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "Unspecified",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0001, name: "OverVoltage",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0002, name: "UnderVoltage",
                    access: "R", conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "BatFaultEnum", base: "enum8",
            access: "R", conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "Unspecified",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0001, name: "OverTemp",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0002, name: "UnderTemp",
                    access: "R", conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "BatChargeFaultEnum", base: "enum8",
            access: "R", conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "Unspecified",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0001, name: "AmbientTooHot",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0002, name: "AmbientTooCold",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0003, name: "BatteryTooHot",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0004, name: "BatteryTooCold",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0005, name: "BatteryAbsent",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0006, name: "BatteryOverVoltage",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0007, name: "BatteryUnderVoltage",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0008, name: "ChargerOverVoltage",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0009, name: "ChargerUnderVoltage",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x000a, name: "SafetyTimeout",
                    access: "R", conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "PowerSourceStatusEnum", base: "enum8",
            access: "R", conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "Unspecified",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0001, name: "Active",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0002, name: "Standby",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0003, name: "Unavailable",
                    access: "R", conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "WiredCurrentTypeEnum", base: "enum8",
            access: "R", conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "Ac",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0001, name: "Dc",
                    access: "R", conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "BatChargeLevelEnum", base: "enum8",
            access: "R", conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "Ok",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0001, name: "Warning",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0002, name: "Critical",
                    access: "R", conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "BatReplaceabilityEnum", base: "enum8",
            access: "R", conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "Unspecified",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0001, name: "NotReplaceable",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0002, name: "UserReplaceable",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0003, name: "FactoryReplaceable",
                    access: "R", conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "BatChargeStateEnum", base: "enum8",
            access: "R", conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "Unknown",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0001, name: "IsCharging",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0002, name: "IsAtFullCharge",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0003, name: "IsNotCharging",
                    access: "R", conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "BatCommonDesignationEnum", base: "enum16",
            access: "R", conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "Unspecified",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0001, name: "Aaa",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0002, name: "Aa",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0003, name: "C",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0004, name: "D",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0005, name: "4V5",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0006, name: "6V0",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0007, name: "9V0",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0008, name: "12Aa",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0009, name: "Aaaa",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x000a, name: "A",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x000b, name: "B",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x000c, name: "F",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x000d, name: "N",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x000e, name: "No6",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x000f, name: "SubC",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0010, name: "A23",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0011, name: "A27",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0012, name: "Ba5800",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0013, name: "Duplex",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0014, name: "4Sr44",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0015, name: "523",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0016, name: "531",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0017, name: "15V0",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0018, name: "22V5",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0019, name: "30V0",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x001a, name: "45V0",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x001b, name: "67V5",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x001c, name: "J",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x001d, name: "Cr123A",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x001e, name: "Cr2",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x001f, name: "2Cr5",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0020, name: "CrP2",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0021, name: "CrV3",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0022, name: "Sr41",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0023, name: "Sr43",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0024, name: "Sr44",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0025, name: "Sr45",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0026, name: "Sr48",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0027, name: "Sr54",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0028, name: "Sr55",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0029, name: "Sr57",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x002a, name: "Sr58",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x002b, name: "Sr59",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x002c, name: "Sr60",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x002d, name: "Sr63",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x002e, name: "Sr64",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x002f, name: "Sr65",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0030, name: "Sr66",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0031, name: "Sr67",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0032, name: "Sr68",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0033, name: "Sr69",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0034, name: "Sr516",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0035, name: "Sr731",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0036, name: "Sr712",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0037, name: "Lr932",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0038, name: "A5",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0039, name: "A10",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x003a, name: "A13",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x003b, name: "A312",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x003c, name: "A675",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x003d, name: "Ac41E",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x003e, name: "10180",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x003f, name: "10280",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0040, name: "10440",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0041, name: "14250",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0042, name: "14430",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0043, name: "14500",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0044, name: "14650",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0045, name: "15270",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0046, name: "16340",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0047, name: "Rcr123A",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0048, name: "17500",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0049, name: "17670",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x004a, name: "18350",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x004b, name: "18500",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x004c, name: "18650",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x004d, name: "19670",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x004e, name: "25500",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x004f, name: "26650",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0050, name: "32600",
                    access: "R", conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "BatApprovedChemistryEnum", base: "enum16",
            access: "R", conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "Unspecified",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0001, name: "Alkaline",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0002, name: "LithiumCarbonFluoride",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0003, name: "LithiumChromiumOxide",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0004, name: "LithiumCopperOxide",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0005, name: "LithiumIronDisulfide",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0006, name: "LithiumManganeseDioxide",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0007, name: "LithiumThionylChloride",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0008, name: "Magnesium",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0009, name: "MercuryOxide",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x000a, name: "NickelOxyhydride",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x000b, name: "SilverOxide",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x000c, name: "ZincAir",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x000d, name: "ZincCarbon",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x000e, name: "ZincChloride",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x000f, name: "ZincManganeseDioxide",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0010, name: "LeadAcid",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0011, name: "LithiumCobaltOxide",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0012, name: "LithiumIon",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0013, name: "LithiumIonPolymer",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0014, name: "LithiumIronPhosphate",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0015, name: "LithiumSulfur",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0016, name: "LithiumTitanate",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0017, name: "NickelCadmium",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0018, name: "NickelHydrogen",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0019, name: "NickelIron",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x001a, name: "NickelMetalHydride",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x001b, name: "NickelZinc",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x001c, name: "SilverZinc",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x001d, name: "SodiumIon",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x001e, name: "SodiumSulfur",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x001f, name: "ZincBromide",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0020, name: "ZincCerium",
                    access: "R", conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "WiredFaultChangeType", base: "struct",
            access: "R", conformance: "M",
            children: [
                DatatypeElement({
                    name: "Current", base: "WiredFaultEnum",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "Previous", base: "WiredFaultEnum",
                    access: "R", conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "BatFaultChangeType", base: "struct",
            access: "R", conformance: "M",
            children: [
                DatatypeElement({
                    name: "Current", base: "BatFaultEnum",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "Previous", base: "BatFaultEnum",
                    access: "R", conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "BatChargeFaultChangeType", base: "struct",
            access: "R", conformance: "M",
            children: [
                DatatypeElement({
                    name: "Current", base: "BatChargeFaultEnum",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "Previous", base: "BatChargeFaultEnum",
                    access: "R", conformance: "M"
                })
            ]
        })
    ]
}));
