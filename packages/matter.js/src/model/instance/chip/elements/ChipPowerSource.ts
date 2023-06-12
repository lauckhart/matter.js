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
            id: 0x0000, name: "PowerSourceStatus", base: "PowerSourceStatusEnum"
        }),

        AttributeElement({
            id: 0x0001, name: "PowerSourceOrder", base: "uint8"
        }),

        AttributeElement({
            id: 0x0002, name: "PowerSourceDescription", base: "string"
        }),

        AttributeElement({
            id: 0x0003, name: "PowerSourceWiredAssessedInputVoltage", base: "uint32",
            conformance: "O", quality: "X"
        }),

        AttributeElement({
            id: 0x0004, name: "PowerSourceWiredAssessedInputFrequency", base: "uint16",
            conformance: "O", quality: "X"
        }),

        AttributeElement({
            id: 0x0005, name: "PowerSourceWiredCurrentType", base: "WiredCurrentTypeEnum",
            conformance: "O"
        }),

        AttributeElement({
            id: 0x0006, name: "PowerSourceWiredAssessedCurrent", base: "uint32",
            conformance: "O", quality: "X"
        }),

        AttributeElement({
            id: 0x0007, name: "PowerSourceWiredNominalVoltage", base: "uint32",
            conformance: "O"
        }),

        AttributeElement({
            id: 0x0008, name: "PowerSourceWiredMaximumCurrent", base: "uint32",
            conformance: "O"
        }),

        AttributeElement({
            id: 0x0009, name: "PowerSourceWiredPresent", base: "bool",
            conformance: "O"
        }),

        AttributeElement({
            id: 0x000a, name: "PowerSourceActiveWiredFaults", base: "list",
            conformance: "O",
            children: [
                DatatypeElement({
                    name: "entry", base: "WiredFaultEnum"
                })
            ]
        }),

        AttributeElement({
            id: 0x000b, name: "PowerSourceBatVoltage", base: "uint32",
            conformance: "O", quality: "X"
        }),

        AttributeElement({
            id: 0x000c, name: "PowerSourceBatPercentRemaining", base: "uint8",
            conformance: "O", quality: "X"
        }),

        AttributeElement({
            id: 0x000d, name: "PowerSourceBatTimeRemaining", base: "uint32",
            conformance: "O", quality: "X"
        }),

        AttributeElement({
            id: 0x000e, name: "PowerSourceBatChargeLevel", base: "BatChargeLevelEnum",
            conformance: "O"
        }),

        AttributeElement({
            id: 0x000f, name: "PowerSourceBatReplacementNeeded", base: "bool",
            conformance: "O"
        }),

        AttributeElement({
            id: 0x0010, name: "PowerSourceBatReplaceability", base: "BatReplaceabilityEnum",
            conformance: "O"
        }),

        AttributeElement({
            id: 0x0011, name: "PowerSourceBatPresent", base: "bool",
            conformance: "O"
        }),

        AttributeElement({
            id: 0x0012, name: "PowerSourceActiveBatFaults", base: "list",
            conformance: "O",
            children: [
                DatatypeElement({
                    name: "entry", base: "BatFaultEnum"
                })
            ]
        }),

        AttributeElement({
            id: 0x0013, name: "PowerSourceBatReplacementDescription", base: "string",
            conformance: "O"
        }),

        AttributeElement({
            id: 0x0014, name: "PowerSourceBatCommonDesignation", base: "BatCommonDesignationEnum",
            conformance: "O"
        }),

        AttributeElement({
            id: 0x0015, name: "PowerSourceBatAnsiDesignation", base: "string",
            conformance: "O"
        }),

        AttributeElement({
            id: 0x0016, name: "PowerSourceBatIecDesignation", base: "string",
            conformance: "O"
        }),

        AttributeElement({
            id: 0x0017, name: "PowerSourceBatApprovedChemistry", base: "BatApprovedChemistryEnum",
            conformance: "O"
        }),

        AttributeElement({
            id: 0x0018, name: "PowerSourceBatCapacity", base: "uint32",
            conformance: "O"
        }),

        AttributeElement({
            id: 0x0019, name: "PowerSourceBatQuantity", base: "uint8",
            conformance: "O"
        }),

        AttributeElement({
            id: 0x001a, name: "PowerSourceBatChargeState", base: "BatChargeStateEnum",
            conformance: "O"
        }),

        AttributeElement({
            id: 0x001b, name: "PowerSourceBatTimeToFullCharge", base: "uint32",
            conformance: "O", quality: "X"
        }),

        AttributeElement({
            id: 0x001c, name: "PowerSourceBatFunctionalWhileCharging", base: "bool",
            conformance: "O"
        }),

        AttributeElement({
            id: 0x001d, name: "PowerSourceBatChargingCurrent", base: "uint32",
            conformance: "O", quality: "X"
        }),

        AttributeElement({
            id: 0x001e, name: "PowerSourceActiveBatChargeFaults", base: "list",
            conformance: "O",
            children: [
                DatatypeElement({
                    name: "entry", base: "BatChargeFaultEnum"
                })
            ]
        }),

        EventElement({
            id: 0x0000, name: "WiredFaultChange",
            conformance: "O", priority: "info",
            children: [
                DatatypeElement({
                    name: "Current", base: "WiredFaultEnum"
                }),

                DatatypeElement({
                    name: "Previous", base: "WiredFaultEnum"
                })
            ]
        }),

        EventElement({
            id: 0x0001, name: "BatFaultChange",
            conformance: "O", priority: "info",
            children: [
                DatatypeElement({
                    name: "Current", base: "BatFaultEnum"
                }),

                DatatypeElement({
                    name: "Previous", base: "BatFaultEnum"
                })
            ]
        }),

        EventElement({
            id: 0x0002, name: "BatChargeFaultChange",
            conformance: "O", priority: "info",
            children: [
                DatatypeElement({
                    name: "Current", base: "BatChargeFaultEnum"
                }),

                DatatypeElement({
                    name: "Previous", base: "BatChargeFaultEnum"
                })
            ]
        }),

        DatatypeElement({
            name: "PowerSourceFeature", base: "map32",
            children: [
                DatatypeElement({
                    id: 0x0001, name: "Wired"
                }),

                DatatypeElement({
                    id: 0x0002, name: "Battery"
                }),

                DatatypeElement({
                    id: 0x0004, name: "Rechargeable"
                }),

                DatatypeElement({
                    id: 0x0008, name: "Replaceable"
                })
            ]
        }),

        DatatypeElement({
            name: "WiredFaultEnum", base: "enum8",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "Unspecified"
                }),

                DatatypeElement({
                    id: 0x0001, name: "OverVoltage"
                }),

                DatatypeElement({
                    id: 0x0002, name: "UnderVoltage"
                })
            ]
        }),

        DatatypeElement({
            name: "BatFaultEnum", base: "enum8",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "Unspecified"
                }),

                DatatypeElement({
                    id: 0x0001, name: "OverTemp"
                }),

                DatatypeElement({
                    id: 0x0002, name: "UnderTemp"
                })
            ]
        }),

        DatatypeElement({
            name: "BatChargeFaultEnum", base: "enum8",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "Unspecified"
                }),

                DatatypeElement({
                    id: 0x0001, name: "AmbientTooHot"
                }),

                DatatypeElement({
                    id: 0x0002, name: "AmbientTooCold"
                }),

                DatatypeElement({
                    id: 0x0003, name: "BatteryTooHot"
                }),

                DatatypeElement({
                    id: 0x0004, name: "BatteryTooCold"
                }),

                DatatypeElement({
                    id: 0x0005, name: "BatteryAbsent"
                }),

                DatatypeElement({
                    id: 0x0006, name: "BatteryOverVoltage"
                }),

                DatatypeElement({
                    id: 0x0007, name: "BatteryUnderVoltage"
                }),

                DatatypeElement({
                    id: 0x0008, name: "ChargerOverVoltage"
                }),

                DatatypeElement({
                    id: 0x0009, name: "ChargerUnderVoltage"
                }),

                DatatypeElement({
                    id: 0x000a, name: "SafetyTimeout"
                })
            ]
        }),

        DatatypeElement({
            name: "PowerSourceStatusEnum", base: "enum8",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "Unspecified"
                }),

                DatatypeElement({
                    id: 0x0001, name: "Active"
                }),

                DatatypeElement({
                    id: 0x0002, name: "Standby"
                }),

                DatatypeElement({
                    id: 0x0003, name: "Unavailable"
                })
            ]
        }),

        DatatypeElement({
            name: "WiredCurrentTypeEnum", base: "enum8",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "Ac"
                }),

                DatatypeElement({
                    id: 0x0001, name: "Dc"
                })
            ]
        }),

        DatatypeElement({
            name: "BatChargeLevelEnum", base: "enum8",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "Ok"
                }),

                DatatypeElement({
                    id: 0x0001, name: "Warning"
                }),

                DatatypeElement({
                    id: 0x0002, name: "Critical"
                })
            ]
        }),

        DatatypeElement({
            name: "BatReplaceabilityEnum", base: "enum8",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "Unspecified"
                }),

                DatatypeElement({
                    id: 0x0001, name: "NotReplaceable"
                }),

                DatatypeElement({
                    id: 0x0002, name: "UserReplaceable"
                }),

                DatatypeElement({
                    id: 0x0003, name: "FactoryReplaceable"
                })
            ]
        }),

        DatatypeElement({
            name: "BatChargeStateEnum", base: "enum8",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "Unknown"
                }),

                DatatypeElement({
                    id: 0x0001, name: "IsCharging"
                }),

                DatatypeElement({
                    id: 0x0002, name: "IsAtFullCharge"
                }),

                DatatypeElement({
                    id: 0x0003, name: "IsNotCharging"
                })
            ]
        }),

        DatatypeElement({
            name: "BatCommonDesignationEnum", base: "enum16",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "Unspecified"
                }),

                DatatypeElement({
                    id: 0x0001, name: "Aaa"
                }),

                DatatypeElement({
                    id: 0x0002, name: "Aa"
                }),

                DatatypeElement({
                    id: 0x0003, name: "C"
                }),

                DatatypeElement({
                    id: 0x0004, name: "D"
                }),

                DatatypeElement({
                    id: 0x0005, name: "4V5"
                }),

                DatatypeElement({
                    id: 0x0006, name: "6V0"
                }),

                DatatypeElement({
                    id: 0x0007, name: "9V0"
                }),

                DatatypeElement({
                    id: 0x0008, name: "12Aa"
                }),

                DatatypeElement({
                    id: 0x0009, name: "Aaaa"
                }),

                DatatypeElement({
                    id: 0x000a, name: "A"
                }),

                DatatypeElement({
                    id: 0x000b, name: "B"
                }),

                DatatypeElement({
                    id: 0x000c, name: "F"
                }),

                DatatypeElement({
                    id: 0x000d, name: "N"
                }),

                DatatypeElement({
                    id: 0x000e, name: "No6"
                }),

                DatatypeElement({
                    id: 0x000f, name: "SubC"
                }),

                DatatypeElement({
                    id: 0x0010, name: "A23"
                }),

                DatatypeElement({
                    id: 0x0011, name: "A27"
                }),

                DatatypeElement({
                    id: 0x0012, name: "Ba5800"
                }),

                DatatypeElement({
                    id: 0x0013, name: "Duplex"
                }),

                DatatypeElement({
                    id: 0x0014, name: "4Sr44"
                }),

                DatatypeElement({
                    id: 0x0015, name: "523"
                }),

                DatatypeElement({
                    id: 0x0016, name: "531"
                }),

                DatatypeElement({
                    id: 0x0017, name: "15V0"
                }),

                DatatypeElement({
                    id: 0x0018, name: "22V5"
                }),

                DatatypeElement({
                    id: 0x0019, name: "30V0"
                }),

                DatatypeElement({
                    id: 0x001a, name: "45V0"
                }),

                DatatypeElement({
                    id: 0x001b, name: "67V5"
                }),

                DatatypeElement({
                    id: 0x001c, name: "J"
                }),

                DatatypeElement({
                    id: 0x001d, name: "Cr123A"
                }),

                DatatypeElement({
                    id: 0x001e, name: "Cr2"
                }),

                DatatypeElement({
                    id: 0x001f, name: "2Cr5"
                }),

                DatatypeElement({
                    id: 0x0020, name: "CrP2"
                }),

                DatatypeElement({
                    id: 0x0021, name: "CrV3"
                }),

                DatatypeElement({
                    id: 0x0022, name: "Sr41"
                }),

                DatatypeElement({
                    id: 0x0023, name: "Sr43"
                }),

                DatatypeElement({
                    id: 0x0024, name: "Sr44"
                }),

                DatatypeElement({
                    id: 0x0025, name: "Sr45"
                }),

                DatatypeElement({
                    id: 0x0026, name: "Sr48"
                }),

                DatatypeElement({
                    id: 0x0027, name: "Sr54"
                }),

                DatatypeElement({
                    id: 0x0028, name: "Sr55"
                }),

                DatatypeElement({
                    id: 0x0029, name: "Sr57"
                }),

                DatatypeElement({
                    id: 0x002a, name: "Sr58"
                }),

                DatatypeElement({
                    id: 0x002b, name: "Sr59"
                }),

                DatatypeElement({
                    id: 0x002c, name: "Sr60"
                }),

                DatatypeElement({
                    id: 0x002d, name: "Sr63"
                }),

                DatatypeElement({
                    id: 0x002e, name: "Sr64"
                }),

                DatatypeElement({
                    id: 0x002f, name: "Sr65"
                }),

                DatatypeElement({
                    id: 0x0030, name: "Sr66"
                }),

                DatatypeElement({
                    id: 0x0031, name: "Sr67"
                }),

                DatatypeElement({
                    id: 0x0032, name: "Sr68"
                }),

                DatatypeElement({
                    id: 0x0033, name: "Sr69"
                }),

                DatatypeElement({
                    id: 0x0034, name: "Sr516"
                }),

                DatatypeElement({
                    id: 0x0035, name: "Sr731"
                }),

                DatatypeElement({
                    id: 0x0036, name: "Sr712"
                }),

                DatatypeElement({
                    id: 0x0037, name: "Lr932"
                }),

                DatatypeElement({
                    id: 0x0038, name: "A5"
                }),

                DatatypeElement({
                    id: 0x0039, name: "A10"
                }),

                DatatypeElement({
                    id: 0x003a, name: "A13"
                }),

                DatatypeElement({
                    id: 0x003b, name: "A312"
                }),

                DatatypeElement({
                    id: 0x003c, name: "A675"
                }),

                DatatypeElement({
                    id: 0x003d, name: "Ac41E"
                }),

                DatatypeElement({
                    id: 0x003e, name: "10180"
                }),

                DatatypeElement({
                    id: 0x003f, name: "10280"
                }),

                DatatypeElement({
                    id: 0x0040, name: "10440"
                }),

                DatatypeElement({
                    id: 0x0041, name: "14250"
                }),

                DatatypeElement({
                    id: 0x0042, name: "14430"
                }),

                DatatypeElement({
                    id: 0x0043, name: "14500"
                }),

                DatatypeElement({
                    id: 0x0044, name: "14650"
                }),

                DatatypeElement({
                    id: 0x0045, name: "15270"
                }),

                DatatypeElement({
                    id: 0x0046, name: "16340"
                }),

                DatatypeElement({
                    id: 0x0047, name: "Rcr123A"
                }),

                DatatypeElement({
                    id: 0x0048, name: "17500"
                }),

                DatatypeElement({
                    id: 0x0049, name: "17670"
                }),

                DatatypeElement({
                    id: 0x004a, name: "18350"
                }),

                DatatypeElement({
                    id: 0x004b, name: "18500"
                }),

                DatatypeElement({
                    id: 0x004c, name: "18650"
                }),

                DatatypeElement({
                    id: 0x004d, name: "19670"
                }),

                DatatypeElement({
                    id: 0x004e, name: "25500"
                }),

                DatatypeElement({
                    id: 0x004f, name: "26650"
                }),

                DatatypeElement({
                    id: 0x0050, name: "32600"
                })
            ]
        }),

        DatatypeElement({
            name: "BatApprovedChemistryEnum", base: "enum16",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "Unspecified"
                }),

                DatatypeElement({
                    id: 0x0001, name: "Alkaline"
                }),

                DatatypeElement({
                    id: 0x0002, name: "LithiumCarbonFluoride"
                }),

                DatatypeElement({
                    id: 0x0003, name: "LithiumChromiumOxide"
                }),

                DatatypeElement({
                    id: 0x0004, name: "LithiumCopperOxide"
                }),

                DatatypeElement({
                    id: 0x0005, name: "LithiumIronDisulfide"
                }),

                DatatypeElement({
                    id: 0x0006, name: "LithiumManganeseDioxide"
                }),

                DatatypeElement({
                    id: 0x0007, name: "LithiumThionylChloride"
                }),

                DatatypeElement({
                    id: 0x0008, name: "Magnesium"
                }),

                DatatypeElement({
                    id: 0x0009, name: "MercuryOxide"
                }),

                DatatypeElement({
                    id: 0x000a, name: "NickelOxyhydride"
                }),

                DatatypeElement({
                    id: 0x000b, name: "SilverOxide"
                }),

                DatatypeElement({
                    id: 0x000c, name: "ZincAir"
                }),

                DatatypeElement({
                    id: 0x000d, name: "ZincCarbon"
                }),

                DatatypeElement({
                    id: 0x000e, name: "ZincChloride"
                }),

                DatatypeElement({
                    id: 0x000f, name: "ZincManganeseDioxide"
                }),

                DatatypeElement({
                    id: 0x0010, name: "LeadAcid"
                }),

                DatatypeElement({
                    id: 0x0011, name: "LithiumCobaltOxide"
                }),

                DatatypeElement({
                    id: 0x0012, name: "LithiumIon"
                }),

                DatatypeElement({
                    id: 0x0013, name: "LithiumIonPolymer"
                }),

                DatatypeElement({
                    id: 0x0014, name: "LithiumIronPhosphate"
                }),

                DatatypeElement({
                    id: 0x0015, name: "LithiumSulfur"
                }),

                DatatypeElement({
                    id: 0x0016, name: "LithiumTitanate"
                }),

                DatatypeElement({
                    id: 0x0017, name: "NickelCadmium"
                }),

                DatatypeElement({
                    id: 0x0018, name: "NickelHydrogen"
                }),

                DatatypeElement({
                    id: 0x0019, name: "NickelIron"
                }),

                DatatypeElement({
                    id: 0x001a, name: "NickelMetalHydride"
                }),

                DatatypeElement({
                    id: 0x001b, name: "NickelZinc"
                }),

                DatatypeElement({
                    id: 0x001c, name: "SilverZinc"
                }),

                DatatypeElement({
                    id: 0x001d, name: "SodiumIon"
                }),

                DatatypeElement({
                    id: 0x001e, name: "SodiumSulfur"
                }),

                DatatypeElement({
                    id: 0x001f, name: "ZincBromide"
                }),

                DatatypeElement({
                    id: 0x0020, name: "ZincCerium"
                })
            ]
        }),

        DatatypeElement({
            name: "WiredFaultChangeType", base: "struct",
            children: [
                DatatypeElement({
                    name: "Current", base: "WiredFaultEnum"
                }),

                DatatypeElement({
                    name: "Previous", base: "WiredFaultEnum"
                })
            ]
        }),

        DatatypeElement({
            name: "BatFaultChangeType", base: "struct",
            children: [
                DatatypeElement({
                    name: "Current", base: "BatFaultEnum"
                }),

                DatatypeElement({
                    name: "Previous", base: "BatFaultEnum"
                })
            ]
        }),

        DatatypeElement({
            name: "BatChargeFaultChangeType", base: "struct",
            children: [
                DatatypeElement({
                    name: "Current", base: "BatChargeFaultEnum"
                }),

                DatatypeElement({
                    name: "Previous", base: "BatChargeFaultEnum"
                })
            ]
        })
    ]
}));
