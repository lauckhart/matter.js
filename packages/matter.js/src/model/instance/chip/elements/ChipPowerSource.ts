/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ChipMatter } from "../internal.js";
import { ClusterElement, AttributeElement, EventElement, DatatypeElement } from "../../../index.js";

ChipMatter.children!.push(ClusterElement({
    id: 0x002f, name: "PowerSource",
    description: "Power Source",
    details: "This cluster is used to describe the configuration and capabilities of a physical power source that provides power to the Node.",
    children: [
        AttributeElement({
            id: 0x0000, name: "powerSourceStatus", base: "PowerSourceStatusEnum",
            access: { rw: "R" }, conformance: [ "M" ]
        }),

        AttributeElement({
            id: 0x0001, name: "powerSourceOrder", base: "uint8",
            access: { rw: "R" }, conformance: [ "M" ]
        }),

        AttributeElement({
            id: 0x0002, name: "powerSourceDescription", base: "string",
            access: { rw: "R" }, conformance: [ "M" ]
        }),

        AttributeElement({
            id: 0x0003, name: "powerSourceWiredAssessedInputVoltage", base: "uint32",
            access: { rw: "R" }, conformance: [ "O" ], quality: { nullable: true }
        }),

        AttributeElement({
            id: 0x0004, name: "powerSourceWiredAssessedInputFrequency", base: "uint16",
            access: { rw: "R" }, conformance: [ "O" ], quality: { nullable: true }
        }),

        AttributeElement({
            id: 0x0005, name: "powerSourceWiredCurrentType", base: "WiredCurrentTypeEnum",
            access: { rw: "R" }, conformance: [ "O" ]
        }),

        AttributeElement({
            id: 0x0006, name: "powerSourceWiredAssessedCurrent", base: "uint32",
            access: { rw: "R" }, conformance: [ "O" ], quality: { nullable: true }
        }),

        AttributeElement({
            id: 0x0007, name: "powerSourceWiredNominalVoltage", base: "uint32",
            access: { rw: "R" }, conformance: [ "O" ]
        }),

        AttributeElement({
            id: 0x0008, name: "powerSourceWiredMaximumCurrent", base: "uint32",
            access: { rw: "R" }, conformance: [ "O" ]
        }),

        AttributeElement({
            id: 0x0009, name: "powerSourceWiredPresent", base: "bool",
            access: { rw: "R" }, conformance: [ "O" ]
        }),

        AttributeElement({
            id: 0x000a, name: "powerSourceActiveWiredFaults", base: "list",
            access: { rw: "R" }, conformance: [ "O" ]
        }),

        AttributeElement({
            id: 0x000b, name: "powerSourceBatVoltage", base: "uint32",
            access: { rw: "R" }, conformance: [ "O" ], quality: { nullable: true }
        }),

        AttributeElement({
            id: 0x000c, name: "powerSourceBatPercentRemaining", base: "uint8",
            access: { rw: "R" }, conformance: [ "O" ], quality: { nullable: true }
        }),

        AttributeElement({
            id: 0x000d, name: "powerSourceBatTimeRemaining", base: "uint32",
            access: { rw: "R" }, conformance: [ "O" ], quality: { nullable: true }
        }),

        AttributeElement({
            id: 0x000e, name: "powerSourceBatChargeLevel", base: "BatChargeLevelEnum",
            access: { rw: "R" }, conformance: [ "O" ]
        }),

        AttributeElement({
            id: 0x000f, name: "powerSourceBatReplacementNeeded", base: "bool",
            access: { rw: "R" }, conformance: [ "O" ]
        }),

        AttributeElement({
            id: 0x0010, name: "powerSourceBatReplaceability", base: "BatReplaceabilityEnum",
            access: { rw: "R" }, conformance: [ "O" ]
        }),

        AttributeElement({
            id: 0x0011, name: "powerSourceBatPresent", base: "bool",
            access: { rw: "R" }, conformance: [ "O" ]
        }),

        AttributeElement({
            id: 0x0012, name: "powerSourceActiveBatFaults", base: "list",
            access: { rw: "R" }, conformance: [ "O" ]
        }),

        AttributeElement({
            id: 0x0013, name: "powerSourceBatReplacementDescription", base: "string",
            access: { rw: "R" }, conformance: [ "O" ]
        }),

        AttributeElement({
            id: 0x0014, name: "powerSourceBatCommonDesignation", base: "BatCommonDesignationEnum",
            access: { rw: "R" }, conformance: [ "O" ]
        }),

        AttributeElement({
            id: 0x0015, name: "powerSourceBatAnsiDesignation", base: "string",
            access: { rw: "R" }, conformance: [ "O" ]
        }),

        AttributeElement({
            id: 0x0016, name: "powerSourceBatIecDesignation", base: "string",
            access: { rw: "R" }, conformance: [ "O" ]
        }),

        AttributeElement({
            id: 0x0017, name: "powerSourceBatApprovedChemistry", base: "BatApprovedChemistryEnum",
            access: { rw: "R" }, conformance: [ "O" ]
        }),

        AttributeElement({
            id: 0x0018, name: "powerSourceBatCapacity", base: "uint32",
            access: { rw: "R" }, conformance: [ "O" ]
        }),

        AttributeElement({
            id: 0x0019, name: "powerSourceBatQuantity", base: "uint8",
            access: { rw: "R" }, conformance: [ "O" ]
        }),

        AttributeElement({
            id: 0x001a, name: "powerSourceBatChargeState", base: "BatChargeStateEnum",
            access: { rw: "R" }, conformance: [ "O" ]
        }),

        AttributeElement({
            id: 0x001b, name: "powerSourceBatTimeToFullCharge", base: "uint32",
            access: { rw: "R" }, conformance: [ "O" ], quality: { nullable: true }
        }),

        AttributeElement({
            id: 0x001c, name: "powerSourceBatFunctionalWhileCharging", base: "bool",
            access: { rw: "R" }, conformance: [ "O" ]
        }),

        AttributeElement({
            id: 0x001d, name: "powerSourceBatChargingCurrent", base: "uint32",
            access: { rw: "R" }, conformance: [ "O" ], quality: { nullable: true }
        }),

        AttributeElement({
            id: 0x001e, name: "powerSourceActiveBatChargeFaults", base: "list",
            access: { rw: "R" }, conformance: [ "O" ]
        }),

        EventElement({
            id: 0x0000, name: "WiredFaultChange",
            access: { rw: "R" }, conformance: [ "O" ], priority: "info",
            children: [
                DatatypeElement({
                    name: "current", base: "WiredFaultEnum",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "current", base: "WiredFaultEnum",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "previous", base: "WiredFaultEnum",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "previous", base: "WiredFaultEnum",
                    access: { rw: "R" }, conformance: [ "M" ]
                })
            ]
        }),

        EventElement({
            id: 0x0001, name: "BatFaultChange",
            access: { rw: "R" }, conformance: [ "O" ], priority: "info",
            children: [
                DatatypeElement({
                    name: "current", base: "BatFaultEnum",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "current", base: "BatFaultEnum",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "previous", base: "BatFaultEnum",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "previous", base: "BatFaultEnum",
                    access: { rw: "R" }, conformance: [ "M" ]
                })
            ]
        }),

        EventElement({
            id: 0x0002, name: "BatChargeFaultChange",
            access: { rw: "R" }, conformance: [ "O" ], priority: "info",
            children: [
                DatatypeElement({
                    name: "current", base: "BatChargeFaultEnum",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "current", base: "BatChargeFaultEnum",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "previous", base: "BatChargeFaultEnum",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "previous", base: "BatChargeFaultEnum",
                    access: { rw: "R" }, conformance: [ "M" ]
                })
            ]
        }),

        DatatypeElement({
            name: "PowerSourceFeature", base: "map32",
            access: { rw: "R" }, conformance: [ "M" ],
            children: [
                DatatypeElement({
                    name: "wired",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x1"
                }),

                DatatypeElement({
                    name: "wired",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x1"
                }),

                DatatypeElement({
                    name: "battery",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x2"
                }),

                DatatypeElement({
                    name: "battery",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x2"
                }),

                DatatypeElement({
                    name: "rechargeable",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x4"
                }),

                DatatypeElement({
                    name: "rechargeable",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x4"
                }),

                DatatypeElement({
                    name: "replaceable",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x8"
                }),

                DatatypeElement({
                    name: "replaceable",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x8"
                })
            ]
        }),

        DatatypeElement({
            name: "WiredFaultEnum", base: "enum8",
            access: { rw: "R" }, conformance: [ "M" ],
            children: [
                DatatypeElement({
                    name: "unspecified",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x00"
                }),

                DatatypeElement({
                    name: "unspecified",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x00"
                }),

                DatatypeElement({
                    name: "overVoltage",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x01"
                }),

                DatatypeElement({
                    name: "overVoltage",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x01"
                }),

                DatatypeElement({
                    name: "underVoltage",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x02"
                }),

                DatatypeElement({
                    name: "underVoltage",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x02"
                })
            ]
        }),

        DatatypeElement({
            name: "BatFaultEnum", base: "enum8",
            access: { rw: "R" }, conformance: [ "M" ],
            children: [
                DatatypeElement({
                    name: "unspecified",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x00"
                }),

                DatatypeElement({
                    name: "unspecified",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x00"
                }),

                DatatypeElement({
                    name: "overTemp",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x01"
                }),

                DatatypeElement({
                    name: "overTemp",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x01"
                }),

                DatatypeElement({
                    name: "underTemp",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x02"
                }),

                DatatypeElement({
                    name: "underTemp",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x02"
                })
            ]
        }),

        DatatypeElement({
            name: "BatChargeFaultEnum", base: "enum8",
            access: { rw: "R" }, conformance: [ "M" ],
            children: [
                DatatypeElement({
                    name: "unspecified",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x00"
                }),

                DatatypeElement({
                    name: "unspecified",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x00"
                }),

                DatatypeElement({
                    name: "ambientTooHot",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x01"
                }),

                DatatypeElement({
                    name: "ambientTooHot",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x01"
                }),

                DatatypeElement({
                    name: "ambientTooCold",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x02"
                }),

                DatatypeElement({
                    name: "ambientTooCold",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x02"
                }),

                DatatypeElement({
                    name: "batteryTooHot",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x03"
                }),

                DatatypeElement({
                    name: "batteryTooHot",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x03"
                }),

                DatatypeElement({
                    name: "batteryTooCold",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x04"
                }),

                DatatypeElement({
                    name: "batteryTooCold",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x04"
                }),

                DatatypeElement({
                    name: "batteryAbsent",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x05"
                }),

                DatatypeElement({
                    name: "batteryAbsent",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x05"
                }),

                DatatypeElement({
                    name: "batteryOverVoltage",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x06"
                }),

                DatatypeElement({
                    name: "batteryOverVoltage",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x06"
                }),

                DatatypeElement({
                    name: "batteryUnderVoltage",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x07"
                }),

                DatatypeElement({
                    name: "batteryUnderVoltage",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x07"
                }),

                DatatypeElement({
                    name: "chargerOverVoltage",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x08"
                }),

                DatatypeElement({
                    name: "chargerOverVoltage",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x08"
                }),

                DatatypeElement({
                    name: "chargerUnderVoltage",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x09"
                }),

                DatatypeElement({
                    name: "chargerUnderVoltage",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x09"
                }),

                DatatypeElement({
                    name: "safetyTimeout",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x0A"
                }),

                DatatypeElement({
                    name: "safetyTimeout",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x0A"
                })
            ]
        }),

        DatatypeElement({
            name: "PowerSourceStatusEnum", base: "enum8",
            access: { rw: "R" }, conformance: [ "M" ],
            children: [
                DatatypeElement({
                    name: "unspecified",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x00"
                }),

                DatatypeElement({
                    name: "unspecified",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x00"
                }),

                DatatypeElement({
                    name: "active",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x01"
                }),

                DatatypeElement({
                    name: "active",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x01"
                }),

                DatatypeElement({
                    name: "standby",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x02"
                }),

                DatatypeElement({
                    name: "standby",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x02"
                }),

                DatatypeElement({
                    name: "unavailable",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x03"
                }),

                DatatypeElement({
                    name: "unavailable",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x03"
                })
            ]
        }),

        DatatypeElement({
            name: "WiredCurrentTypeEnum", base: "enum8",
            access: { rw: "R" }, conformance: [ "M" ],
            children: [
                DatatypeElement({
                    name: "ac",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x00"
                }),

                DatatypeElement({
                    name: "ac",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x00"
                }),

                DatatypeElement({
                    name: "dc",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x01"
                }),

                DatatypeElement({
                    name: "dc",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x01"
                })
            ]
        }),

        DatatypeElement({
            name: "BatChargeLevelEnum", base: "enum8",
            access: { rw: "R" }, conformance: [ "M" ],
            children: [
                DatatypeElement({
                    name: "ok",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x00"
                }),

                DatatypeElement({
                    name: "ok",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x00"
                }),

                DatatypeElement({
                    name: "warning",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x01"
                }),

                DatatypeElement({
                    name: "warning",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x01"
                }),

                DatatypeElement({
                    name: "critical",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x02"
                }),

                DatatypeElement({
                    name: "critical",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x02"
                })
            ]
        }),

        DatatypeElement({
            name: "BatReplaceabilityEnum", base: "enum8",
            access: { rw: "R" }, conformance: [ "M" ],
            children: [
                DatatypeElement({
                    name: "unspecified",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x00"
                }),

                DatatypeElement({
                    name: "unspecified",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x00"
                }),

                DatatypeElement({
                    name: "notReplaceable",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x01"
                }),

                DatatypeElement({
                    name: "notReplaceable",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x01"
                }),

                DatatypeElement({
                    name: "userReplaceable",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x02"
                }),

                DatatypeElement({
                    name: "userReplaceable",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x02"
                }),

                DatatypeElement({
                    name: "factoryReplaceable",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x03"
                }),

                DatatypeElement({
                    name: "factoryReplaceable",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x03"
                })
            ]
        }),

        DatatypeElement({
            name: "BatChargeStateEnum", base: "enum8",
            access: { rw: "R" }, conformance: [ "M" ],
            children: [
                DatatypeElement({
                    name: "unknown",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x00"
                }),

                DatatypeElement({
                    name: "unknown",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x00"
                }),

                DatatypeElement({
                    name: "isCharging",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x01"
                }),

                DatatypeElement({
                    name: "isCharging",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x01"
                }),

                DatatypeElement({
                    name: "isAtFullCharge",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x02"
                }),

                DatatypeElement({
                    name: "isAtFullCharge",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x02"
                }),

                DatatypeElement({
                    name: "isNotCharging",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x03"
                }),

                DatatypeElement({
                    name: "isNotCharging",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x03"
                })
            ]
        }),

        DatatypeElement({
            name: "BatCommonDesignationEnum", base: "enum16",
            access: { rw: "R" }, conformance: [ "M" ],
            children: [
                DatatypeElement({
                    name: "unspecified",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0"
                }),

                DatatypeElement({
                    name: "unspecified",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0"
                }),

                DatatypeElement({
                    name: "aaa",
                    access: { rw: "R" }, conformance: [ "M" ], value: "1"
                }),

                DatatypeElement({
                    name: "aaa",
                    access: { rw: "R" }, conformance: [ "M" ], value: "1"
                }),

                DatatypeElement({
                    name: "aa",
                    access: { rw: "R" }, conformance: [ "M" ], value: "2"
                }),

                DatatypeElement({
                    name: "aa",
                    access: { rw: "R" }, conformance: [ "M" ], value: "2"
                }),

                DatatypeElement({
                    name: "c",
                    access: { rw: "R" }, conformance: [ "M" ], value: "3"
                }),

                DatatypeElement({
                    name: "c",
                    access: { rw: "R" }, conformance: [ "M" ], value: "3"
                }),

                DatatypeElement({
                    name: "d",
                    access: { rw: "R" }, conformance: [ "M" ], value: "4"
                }),

                DatatypeElement({
                    name: "d",
                    access: { rw: "R" }, conformance: [ "M" ], value: "4"
                }),

                DatatypeElement({
                    name: "4V5",
                    access: { rw: "R" }, conformance: [ "M" ], value: "5"
                }),

                DatatypeElement({
                    name: "4V5",
                    access: { rw: "R" }, conformance: [ "M" ], value: "5"
                }),

                DatatypeElement({
                    name: "6V0",
                    access: { rw: "R" }, conformance: [ "M" ], value: "6"
                }),

                DatatypeElement({
                    name: "6V0",
                    access: { rw: "R" }, conformance: [ "M" ], value: "6"
                }),

                DatatypeElement({
                    name: "9V0",
                    access: { rw: "R" }, conformance: [ "M" ], value: "7"
                }),

                DatatypeElement({
                    name: "9V0",
                    access: { rw: "R" }, conformance: [ "M" ], value: "7"
                }),

                DatatypeElement({
                    name: "12Aa",
                    access: { rw: "R" }, conformance: [ "M" ], value: "8"
                }),

                DatatypeElement({
                    name: "12Aa",
                    access: { rw: "R" }, conformance: [ "M" ], value: "8"
                }),

                DatatypeElement({
                    name: "aaaa",
                    access: { rw: "R" }, conformance: [ "M" ], value: "9"
                }),

                DatatypeElement({
                    name: "aaaa",
                    access: { rw: "R" }, conformance: [ "M" ], value: "9"
                }),

                DatatypeElement({
                    name: "a",
                    access: { rw: "R" }, conformance: [ "M" ], value: "10"
                }),

                DatatypeElement({
                    name: "a",
                    access: { rw: "R" }, conformance: [ "M" ], value: "10"
                }),

                DatatypeElement({
                    name: "b",
                    access: { rw: "R" }, conformance: [ "M" ], value: "11"
                }),

                DatatypeElement({
                    name: "b",
                    access: { rw: "R" }, conformance: [ "M" ], value: "11"
                }),

                DatatypeElement({
                    name: "f",
                    access: { rw: "R" }, conformance: [ "M" ], value: "12"
                }),

                DatatypeElement({
                    name: "f",
                    access: { rw: "R" }, conformance: [ "M" ], value: "12"
                }),

                DatatypeElement({
                    name: "n",
                    access: { rw: "R" }, conformance: [ "M" ], value: "13"
                }),

                DatatypeElement({
                    name: "n",
                    access: { rw: "R" }, conformance: [ "M" ], value: "13"
                }),

                DatatypeElement({
                    name: "no6",
                    access: { rw: "R" }, conformance: [ "M" ], value: "14"
                }),

                DatatypeElement({
                    name: "no6",
                    access: { rw: "R" }, conformance: [ "M" ], value: "14"
                }),

                DatatypeElement({
                    name: "subC",
                    access: { rw: "R" }, conformance: [ "M" ], value: "15"
                }),

                DatatypeElement({
                    name: "subC",
                    access: { rw: "R" }, conformance: [ "M" ], value: "15"
                }),

                DatatypeElement({
                    name: "a23",
                    access: { rw: "R" }, conformance: [ "M" ], value: "16"
                }),

                DatatypeElement({
                    name: "a23",
                    access: { rw: "R" }, conformance: [ "M" ], value: "16"
                }),

                DatatypeElement({
                    name: "a27",
                    access: { rw: "R" }, conformance: [ "M" ], value: "17"
                }),

                DatatypeElement({
                    name: "a27",
                    access: { rw: "R" }, conformance: [ "M" ], value: "17"
                }),

                DatatypeElement({
                    name: "ba5800",
                    access: { rw: "R" }, conformance: [ "M" ], value: "18"
                }),

                DatatypeElement({
                    name: "ba5800",
                    access: { rw: "R" }, conformance: [ "M" ], value: "18"
                }),

                DatatypeElement({
                    name: "duplex",
                    access: { rw: "R" }, conformance: [ "M" ], value: "19"
                }),

                DatatypeElement({
                    name: "duplex",
                    access: { rw: "R" }, conformance: [ "M" ], value: "19"
                }),

                DatatypeElement({
                    name: "4Sr44",
                    access: { rw: "R" }, conformance: [ "M" ], value: "20"
                }),

                DatatypeElement({
                    name: "4Sr44",
                    access: { rw: "R" }, conformance: [ "M" ], value: "20"
                }),

                DatatypeElement({
                    name: "523",
                    access: { rw: "R" }, conformance: [ "M" ], value: "21"
                }),

                DatatypeElement({
                    name: "523",
                    access: { rw: "R" }, conformance: [ "M" ], value: "21"
                }),

                DatatypeElement({
                    name: "531",
                    access: { rw: "R" }, conformance: [ "M" ], value: "22"
                }),

                DatatypeElement({
                    name: "531",
                    access: { rw: "R" }, conformance: [ "M" ], value: "22"
                }),

                DatatypeElement({
                    name: "15V0",
                    access: { rw: "R" }, conformance: [ "M" ], value: "23"
                }),

                DatatypeElement({
                    name: "15V0",
                    access: { rw: "R" }, conformance: [ "M" ], value: "23"
                }),

                DatatypeElement({
                    name: "22V5",
                    access: { rw: "R" }, conformance: [ "M" ], value: "24"
                }),

                DatatypeElement({
                    name: "22V5",
                    access: { rw: "R" }, conformance: [ "M" ], value: "24"
                }),

                DatatypeElement({
                    name: "30V0",
                    access: { rw: "R" }, conformance: [ "M" ], value: "25"
                }),

                DatatypeElement({
                    name: "30V0",
                    access: { rw: "R" }, conformance: [ "M" ], value: "25"
                }),

                DatatypeElement({
                    name: "45V0",
                    access: { rw: "R" }, conformance: [ "M" ], value: "26"
                }),

                DatatypeElement({
                    name: "45V0",
                    access: { rw: "R" }, conformance: [ "M" ], value: "26"
                }),

                DatatypeElement({
                    name: "67V5",
                    access: { rw: "R" }, conformance: [ "M" ], value: "27"
                }),

                DatatypeElement({
                    name: "67V5",
                    access: { rw: "R" }, conformance: [ "M" ], value: "27"
                }),

                DatatypeElement({
                    name: "j",
                    access: { rw: "R" }, conformance: [ "M" ], value: "28"
                }),

                DatatypeElement({
                    name: "j",
                    access: { rw: "R" }, conformance: [ "M" ], value: "28"
                }),

                DatatypeElement({
                    name: "cr123A",
                    access: { rw: "R" }, conformance: [ "M" ], value: "29"
                }),

                DatatypeElement({
                    name: "cr123A",
                    access: { rw: "R" }, conformance: [ "M" ], value: "29"
                }),

                DatatypeElement({
                    name: "cr2",
                    access: { rw: "R" }, conformance: [ "M" ], value: "30"
                }),

                DatatypeElement({
                    name: "cr2",
                    access: { rw: "R" }, conformance: [ "M" ], value: "30"
                }),

                DatatypeElement({
                    name: "2Cr5",
                    access: { rw: "R" }, conformance: [ "M" ], value: "31"
                }),

                DatatypeElement({
                    name: "2Cr5",
                    access: { rw: "R" }, conformance: [ "M" ], value: "31"
                }),

                DatatypeElement({
                    name: "crP2",
                    access: { rw: "R" }, conformance: [ "M" ], value: "32"
                }),

                DatatypeElement({
                    name: "crP2",
                    access: { rw: "R" }, conformance: [ "M" ], value: "32"
                }),

                DatatypeElement({
                    name: "crV3",
                    access: { rw: "R" }, conformance: [ "M" ], value: "33"
                }),

                DatatypeElement({
                    name: "crV3",
                    access: { rw: "R" }, conformance: [ "M" ], value: "33"
                }),

                DatatypeElement({
                    name: "sr41",
                    access: { rw: "R" }, conformance: [ "M" ], value: "34"
                }),

                DatatypeElement({
                    name: "sr41",
                    access: { rw: "R" }, conformance: [ "M" ], value: "34"
                }),

                DatatypeElement({
                    name: "sr43",
                    access: { rw: "R" }, conformance: [ "M" ], value: "35"
                }),

                DatatypeElement({
                    name: "sr43",
                    access: { rw: "R" }, conformance: [ "M" ], value: "35"
                }),

                DatatypeElement({
                    name: "sr44",
                    access: { rw: "R" }, conformance: [ "M" ], value: "36"
                }),

                DatatypeElement({
                    name: "sr44",
                    access: { rw: "R" }, conformance: [ "M" ], value: "36"
                }),

                DatatypeElement({
                    name: "sr45",
                    access: { rw: "R" }, conformance: [ "M" ], value: "37"
                }),

                DatatypeElement({
                    name: "sr45",
                    access: { rw: "R" }, conformance: [ "M" ], value: "37"
                }),

                DatatypeElement({
                    name: "sr48",
                    access: { rw: "R" }, conformance: [ "M" ], value: "38"
                }),

                DatatypeElement({
                    name: "sr48",
                    access: { rw: "R" }, conformance: [ "M" ], value: "38"
                }),

                DatatypeElement({
                    name: "sr54",
                    access: { rw: "R" }, conformance: [ "M" ], value: "39"
                }),

                DatatypeElement({
                    name: "sr54",
                    access: { rw: "R" }, conformance: [ "M" ], value: "39"
                }),

                DatatypeElement({
                    name: "sr55",
                    access: { rw: "R" }, conformance: [ "M" ], value: "40"
                }),

                DatatypeElement({
                    name: "sr55",
                    access: { rw: "R" }, conformance: [ "M" ], value: "40"
                }),

                DatatypeElement({
                    name: "sr57",
                    access: { rw: "R" }, conformance: [ "M" ], value: "41"
                }),

                DatatypeElement({
                    name: "sr57",
                    access: { rw: "R" }, conformance: [ "M" ], value: "41"
                }),

                DatatypeElement({
                    name: "sr58",
                    access: { rw: "R" }, conformance: [ "M" ], value: "42"
                }),

                DatatypeElement({
                    name: "sr58",
                    access: { rw: "R" }, conformance: [ "M" ], value: "42"
                }),

                DatatypeElement({
                    name: "sr59",
                    access: { rw: "R" }, conformance: [ "M" ], value: "43"
                }),

                DatatypeElement({
                    name: "sr59",
                    access: { rw: "R" }, conformance: [ "M" ], value: "43"
                }),

                DatatypeElement({
                    name: "sr60",
                    access: { rw: "R" }, conformance: [ "M" ], value: "44"
                }),

                DatatypeElement({
                    name: "sr60",
                    access: { rw: "R" }, conformance: [ "M" ], value: "44"
                }),

                DatatypeElement({
                    name: "sr63",
                    access: { rw: "R" }, conformance: [ "M" ], value: "45"
                }),

                DatatypeElement({
                    name: "sr63",
                    access: { rw: "R" }, conformance: [ "M" ], value: "45"
                }),

                DatatypeElement({
                    name: "sr64",
                    access: { rw: "R" }, conformance: [ "M" ], value: "46"
                }),

                DatatypeElement({
                    name: "sr64",
                    access: { rw: "R" }, conformance: [ "M" ], value: "46"
                }),

                DatatypeElement({
                    name: "sr65",
                    access: { rw: "R" }, conformance: [ "M" ], value: "47"
                }),

                DatatypeElement({
                    name: "sr65",
                    access: { rw: "R" }, conformance: [ "M" ], value: "47"
                }),

                DatatypeElement({
                    name: "sr66",
                    access: { rw: "R" }, conformance: [ "M" ], value: "48"
                }),

                DatatypeElement({
                    name: "sr66",
                    access: { rw: "R" }, conformance: [ "M" ], value: "48"
                }),

                DatatypeElement({
                    name: "sr67",
                    access: { rw: "R" }, conformance: [ "M" ], value: "49"
                }),

                DatatypeElement({
                    name: "sr67",
                    access: { rw: "R" }, conformance: [ "M" ], value: "49"
                }),

                DatatypeElement({
                    name: "sr68",
                    access: { rw: "R" }, conformance: [ "M" ], value: "50"
                }),

                DatatypeElement({
                    name: "sr68",
                    access: { rw: "R" }, conformance: [ "M" ], value: "50"
                }),

                DatatypeElement({
                    name: "sr69",
                    access: { rw: "R" }, conformance: [ "M" ], value: "51"
                }),

                DatatypeElement({
                    name: "sr69",
                    access: { rw: "R" }, conformance: [ "M" ], value: "51"
                }),

                DatatypeElement({
                    name: "sr516",
                    access: { rw: "R" }, conformance: [ "M" ], value: "52"
                }),

                DatatypeElement({
                    name: "sr516",
                    access: { rw: "R" }, conformance: [ "M" ], value: "52"
                }),

                DatatypeElement({
                    name: "sr731",
                    access: { rw: "R" }, conformance: [ "M" ], value: "53"
                }),

                DatatypeElement({
                    name: "sr731",
                    access: { rw: "R" }, conformance: [ "M" ], value: "53"
                }),

                DatatypeElement({
                    name: "sr712",
                    access: { rw: "R" }, conformance: [ "M" ], value: "54"
                }),

                DatatypeElement({
                    name: "sr712",
                    access: { rw: "R" }, conformance: [ "M" ], value: "54"
                }),

                DatatypeElement({
                    name: "lr932",
                    access: { rw: "R" }, conformance: [ "M" ], value: "55"
                }),

                DatatypeElement({
                    name: "lr932",
                    access: { rw: "R" }, conformance: [ "M" ], value: "55"
                }),

                DatatypeElement({
                    name: "a5",
                    access: { rw: "R" }, conformance: [ "M" ], value: "56"
                }),

                DatatypeElement({
                    name: "a5",
                    access: { rw: "R" }, conformance: [ "M" ], value: "56"
                }),

                DatatypeElement({
                    name: "a10",
                    access: { rw: "R" }, conformance: [ "M" ], value: "57"
                }),

                DatatypeElement({
                    name: "a10",
                    access: { rw: "R" }, conformance: [ "M" ], value: "57"
                }),

                DatatypeElement({
                    name: "a13",
                    access: { rw: "R" }, conformance: [ "M" ], value: "58"
                }),

                DatatypeElement({
                    name: "a13",
                    access: { rw: "R" }, conformance: [ "M" ], value: "58"
                }),

                DatatypeElement({
                    name: "a312",
                    access: { rw: "R" }, conformance: [ "M" ], value: "59"
                }),

                DatatypeElement({
                    name: "a312",
                    access: { rw: "R" }, conformance: [ "M" ], value: "59"
                }),

                DatatypeElement({
                    name: "a675",
                    access: { rw: "R" }, conformance: [ "M" ], value: "60"
                }),

                DatatypeElement({
                    name: "a675",
                    access: { rw: "R" }, conformance: [ "M" ], value: "60"
                }),

                DatatypeElement({
                    name: "ac41E",
                    access: { rw: "R" }, conformance: [ "M" ], value: "61"
                }),

                DatatypeElement({
                    name: "ac41E",
                    access: { rw: "R" }, conformance: [ "M" ], value: "61"
                }),

                DatatypeElement({
                    name: "10180",
                    access: { rw: "R" }, conformance: [ "M" ], value: "62"
                }),

                DatatypeElement({
                    name: "10180",
                    access: { rw: "R" }, conformance: [ "M" ], value: "62"
                }),

                DatatypeElement({
                    name: "10280",
                    access: { rw: "R" }, conformance: [ "M" ], value: "63"
                }),

                DatatypeElement({
                    name: "10280",
                    access: { rw: "R" }, conformance: [ "M" ], value: "63"
                }),

                DatatypeElement({
                    name: "10440",
                    access: { rw: "R" }, conformance: [ "M" ], value: "64"
                }),

                DatatypeElement({
                    name: "10440",
                    access: { rw: "R" }, conformance: [ "M" ], value: "64"
                }),

                DatatypeElement({
                    name: "14250",
                    access: { rw: "R" }, conformance: [ "M" ], value: "65"
                }),

                DatatypeElement({
                    name: "14250",
                    access: { rw: "R" }, conformance: [ "M" ], value: "65"
                }),

                DatatypeElement({
                    name: "14430",
                    access: { rw: "R" }, conformance: [ "M" ], value: "66"
                }),

                DatatypeElement({
                    name: "14430",
                    access: { rw: "R" }, conformance: [ "M" ], value: "66"
                }),

                DatatypeElement({
                    name: "14500",
                    access: { rw: "R" }, conformance: [ "M" ], value: "67"
                }),

                DatatypeElement({
                    name: "14500",
                    access: { rw: "R" }, conformance: [ "M" ], value: "67"
                }),

                DatatypeElement({
                    name: "14650",
                    access: { rw: "R" }, conformance: [ "M" ], value: "68"
                }),

                DatatypeElement({
                    name: "14650",
                    access: { rw: "R" }, conformance: [ "M" ], value: "68"
                }),

                DatatypeElement({
                    name: "15270",
                    access: { rw: "R" }, conformance: [ "M" ], value: "69"
                }),

                DatatypeElement({
                    name: "15270",
                    access: { rw: "R" }, conformance: [ "M" ], value: "69"
                }),

                DatatypeElement({
                    name: "16340",
                    access: { rw: "R" }, conformance: [ "M" ], value: "70"
                }),

                DatatypeElement({
                    name: "16340",
                    access: { rw: "R" }, conformance: [ "M" ], value: "70"
                }),

                DatatypeElement({
                    name: "rcr123A",
                    access: { rw: "R" }, conformance: [ "M" ], value: "71"
                }),

                DatatypeElement({
                    name: "rcr123A",
                    access: { rw: "R" }, conformance: [ "M" ], value: "71"
                }),

                DatatypeElement({
                    name: "17500",
                    access: { rw: "R" }, conformance: [ "M" ], value: "72"
                }),

                DatatypeElement({
                    name: "17500",
                    access: { rw: "R" }, conformance: [ "M" ], value: "72"
                }),

                DatatypeElement({
                    name: "17670",
                    access: { rw: "R" }, conformance: [ "M" ], value: "73"
                }),

                DatatypeElement({
                    name: "17670",
                    access: { rw: "R" }, conformance: [ "M" ], value: "73"
                }),

                DatatypeElement({
                    name: "18350",
                    access: { rw: "R" }, conformance: [ "M" ], value: "74"
                }),

                DatatypeElement({
                    name: "18350",
                    access: { rw: "R" }, conformance: [ "M" ], value: "74"
                }),

                DatatypeElement({
                    name: "18500",
                    access: { rw: "R" }, conformance: [ "M" ], value: "75"
                }),

                DatatypeElement({
                    name: "18500",
                    access: { rw: "R" }, conformance: [ "M" ], value: "75"
                }),

                DatatypeElement({
                    name: "18650",
                    access: { rw: "R" }, conformance: [ "M" ], value: "76"
                }),

                DatatypeElement({
                    name: "18650",
                    access: { rw: "R" }, conformance: [ "M" ], value: "76"
                }),

                DatatypeElement({
                    name: "19670",
                    access: { rw: "R" }, conformance: [ "M" ], value: "77"
                }),

                DatatypeElement({
                    name: "19670",
                    access: { rw: "R" }, conformance: [ "M" ], value: "77"
                }),

                DatatypeElement({
                    name: "25500",
                    access: { rw: "R" }, conformance: [ "M" ], value: "78"
                }),

                DatatypeElement({
                    name: "25500",
                    access: { rw: "R" }, conformance: [ "M" ], value: "78"
                }),

                DatatypeElement({
                    name: "26650",
                    access: { rw: "R" }, conformance: [ "M" ], value: "79"
                }),

                DatatypeElement({
                    name: "26650",
                    access: { rw: "R" }, conformance: [ "M" ], value: "79"
                }),

                DatatypeElement({
                    name: "32600",
                    access: { rw: "R" }, conformance: [ "M" ], value: "80"
                }),

                DatatypeElement({
                    name: "32600",
                    access: { rw: "R" }, conformance: [ "M" ], value: "80"
                })
            ]
        }),

        DatatypeElement({
            name: "BatApprovedChemistryEnum", base: "enum16",
            access: { rw: "R" }, conformance: [ "M" ],
            children: [
                DatatypeElement({
                    name: "unspecified",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0"
                }),

                DatatypeElement({
                    name: "unspecified",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0"
                }),

                DatatypeElement({
                    name: "alkaline",
                    access: { rw: "R" }, conformance: [ "M" ], value: "1"
                }),

                DatatypeElement({
                    name: "alkaline",
                    access: { rw: "R" }, conformance: [ "M" ], value: "1"
                }),

                DatatypeElement({
                    name: "lithiumCarbonFluoride",
                    access: { rw: "R" }, conformance: [ "M" ], value: "2"
                }),

                DatatypeElement({
                    name: "lithiumCarbonFluoride",
                    access: { rw: "R" }, conformance: [ "M" ], value: "2"
                }),

                DatatypeElement({
                    name: "lithiumChromiumOxide",
                    access: { rw: "R" }, conformance: [ "M" ], value: "3"
                }),

                DatatypeElement({
                    name: "lithiumChromiumOxide",
                    access: { rw: "R" }, conformance: [ "M" ], value: "3"
                }),

                DatatypeElement({
                    name: "lithiumCopperOxide",
                    access: { rw: "R" }, conformance: [ "M" ], value: "4"
                }),

                DatatypeElement({
                    name: "lithiumCopperOxide",
                    access: { rw: "R" }, conformance: [ "M" ], value: "4"
                }),

                DatatypeElement({
                    name: "lithiumIronDisulfide",
                    access: { rw: "R" }, conformance: [ "M" ], value: "5"
                }),

                DatatypeElement({
                    name: "lithiumIronDisulfide",
                    access: { rw: "R" }, conformance: [ "M" ], value: "5"
                }),

                DatatypeElement({
                    name: "lithiumManganeseDioxide",
                    access: { rw: "R" }, conformance: [ "M" ], value: "6"
                }),

                DatatypeElement({
                    name: "lithiumManganeseDioxide",
                    access: { rw: "R" }, conformance: [ "M" ], value: "6"
                }),

                DatatypeElement({
                    name: "lithiumThionylChloride",
                    access: { rw: "R" }, conformance: [ "M" ], value: "7"
                }),

                DatatypeElement({
                    name: "lithiumThionylChloride",
                    access: { rw: "R" }, conformance: [ "M" ], value: "7"
                }),

                DatatypeElement({
                    name: "magnesium",
                    access: { rw: "R" }, conformance: [ "M" ], value: "8"
                }),

                DatatypeElement({
                    name: "magnesium",
                    access: { rw: "R" }, conformance: [ "M" ], value: "8"
                }),

                DatatypeElement({
                    name: "mercuryOxide",
                    access: { rw: "R" }, conformance: [ "M" ], value: "9"
                }),

                DatatypeElement({
                    name: "mercuryOxide",
                    access: { rw: "R" }, conformance: [ "M" ], value: "9"
                }),

                DatatypeElement({
                    name: "nickelOxyhydride",
                    access: { rw: "R" }, conformance: [ "M" ], value: "10"
                }),

                DatatypeElement({
                    name: "nickelOxyhydride",
                    access: { rw: "R" }, conformance: [ "M" ], value: "10"
                }),

                DatatypeElement({
                    name: "silverOxide",
                    access: { rw: "R" }, conformance: [ "M" ], value: "11"
                }),

                DatatypeElement({
                    name: "silverOxide",
                    access: { rw: "R" }, conformance: [ "M" ], value: "11"
                }),

                DatatypeElement({
                    name: "zincAir",
                    access: { rw: "R" }, conformance: [ "M" ], value: "12"
                }),

                DatatypeElement({
                    name: "zincAir",
                    access: { rw: "R" }, conformance: [ "M" ], value: "12"
                }),

                DatatypeElement({
                    name: "zincCarbon",
                    access: { rw: "R" }, conformance: [ "M" ], value: "13"
                }),

                DatatypeElement({
                    name: "zincCarbon",
                    access: { rw: "R" }, conformance: [ "M" ], value: "13"
                }),

                DatatypeElement({
                    name: "zincChloride",
                    access: { rw: "R" }, conformance: [ "M" ], value: "14"
                }),

                DatatypeElement({
                    name: "zincChloride",
                    access: { rw: "R" }, conformance: [ "M" ], value: "14"
                }),

                DatatypeElement({
                    name: "zincManganeseDioxide",
                    access: { rw: "R" }, conformance: [ "M" ], value: "15"
                }),

                DatatypeElement({
                    name: "zincManganeseDioxide",
                    access: { rw: "R" }, conformance: [ "M" ], value: "15"
                }),

                DatatypeElement({
                    name: "leadAcid",
                    access: { rw: "R" }, conformance: [ "M" ], value: "16"
                }),

                DatatypeElement({
                    name: "leadAcid",
                    access: { rw: "R" }, conformance: [ "M" ], value: "16"
                }),

                DatatypeElement({
                    name: "lithiumCobaltOxide",
                    access: { rw: "R" }, conformance: [ "M" ], value: "17"
                }),

                DatatypeElement({
                    name: "lithiumCobaltOxide",
                    access: { rw: "R" }, conformance: [ "M" ], value: "17"
                }),

                DatatypeElement({
                    name: "lithiumIon",
                    access: { rw: "R" }, conformance: [ "M" ], value: "18"
                }),

                DatatypeElement({
                    name: "lithiumIon",
                    access: { rw: "R" }, conformance: [ "M" ], value: "18"
                }),

                DatatypeElement({
                    name: "lithiumIonPolymer",
                    access: { rw: "R" }, conformance: [ "M" ], value: "19"
                }),

                DatatypeElement({
                    name: "lithiumIonPolymer",
                    access: { rw: "R" }, conformance: [ "M" ], value: "19"
                }),

                DatatypeElement({
                    name: "lithiumIronPhosphate",
                    access: { rw: "R" }, conformance: [ "M" ], value: "20"
                }),

                DatatypeElement({
                    name: "lithiumIronPhosphate",
                    access: { rw: "R" }, conformance: [ "M" ], value: "20"
                }),

                DatatypeElement({
                    name: "lithiumSulfur",
                    access: { rw: "R" }, conformance: [ "M" ], value: "21"
                }),

                DatatypeElement({
                    name: "lithiumSulfur",
                    access: { rw: "R" }, conformance: [ "M" ], value: "21"
                }),

                DatatypeElement({
                    name: "lithiumTitanate",
                    access: { rw: "R" }, conformance: [ "M" ], value: "22"
                }),

                DatatypeElement({
                    name: "lithiumTitanate",
                    access: { rw: "R" }, conformance: [ "M" ], value: "22"
                }),

                DatatypeElement({
                    name: "nickelCadmium",
                    access: { rw: "R" }, conformance: [ "M" ], value: "23"
                }),

                DatatypeElement({
                    name: "nickelCadmium",
                    access: { rw: "R" }, conformance: [ "M" ], value: "23"
                }),

                DatatypeElement({
                    name: "nickelHydrogen",
                    access: { rw: "R" }, conformance: [ "M" ], value: "24"
                }),

                DatatypeElement({
                    name: "nickelHydrogen",
                    access: { rw: "R" }, conformance: [ "M" ], value: "24"
                }),

                DatatypeElement({
                    name: "nickelIron",
                    access: { rw: "R" }, conformance: [ "M" ], value: "25"
                }),

                DatatypeElement({
                    name: "nickelIron",
                    access: { rw: "R" }, conformance: [ "M" ], value: "25"
                }),

                DatatypeElement({
                    name: "nickelMetalHydride",
                    access: { rw: "R" }, conformance: [ "M" ], value: "26"
                }),

                DatatypeElement({
                    name: "nickelMetalHydride",
                    access: { rw: "R" }, conformance: [ "M" ], value: "26"
                }),

                DatatypeElement({
                    name: "nickelZinc",
                    access: { rw: "R" }, conformance: [ "M" ], value: "27"
                }),

                DatatypeElement({
                    name: "nickelZinc",
                    access: { rw: "R" }, conformance: [ "M" ], value: "27"
                }),

                DatatypeElement({
                    name: "silverZinc",
                    access: { rw: "R" }, conformance: [ "M" ], value: "28"
                }),

                DatatypeElement({
                    name: "silverZinc",
                    access: { rw: "R" }, conformance: [ "M" ], value: "28"
                }),

                DatatypeElement({
                    name: "sodiumIon",
                    access: { rw: "R" }, conformance: [ "M" ], value: "29"
                }),

                DatatypeElement({
                    name: "sodiumIon",
                    access: { rw: "R" }, conformance: [ "M" ], value: "29"
                }),

                DatatypeElement({
                    name: "sodiumSulfur",
                    access: { rw: "R" }, conformance: [ "M" ], value: "30"
                }),

                DatatypeElement({
                    name: "sodiumSulfur",
                    access: { rw: "R" }, conformance: [ "M" ], value: "30"
                }),

                DatatypeElement({
                    name: "zincBromide",
                    access: { rw: "R" }, conformance: [ "M" ], value: "31"
                }),

                DatatypeElement({
                    name: "zincBromide",
                    access: { rw: "R" }, conformance: [ "M" ], value: "31"
                }),

                DatatypeElement({
                    name: "zincCerium",
                    access: { rw: "R" }, conformance: [ "M" ], value: "32"
                }),

                DatatypeElement({
                    name: "zincCerium",
                    access: { rw: "R" }, conformance: [ "M" ], value: "32"
                })
            ]
        }),

        DatatypeElement({
            name: "WiredFaultChangeType", base: "struct",
            access: { rw: "R" }, conformance: [ "M" ],
            children: [
                DatatypeElement({
                    name: "current", base: "WiredFaultEnum",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "current", base: "WiredFaultEnum",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "previous", base: "WiredFaultEnum",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "previous", base: "WiredFaultEnum",
                    access: { rw: "R" }, conformance: [ "M" ]
                })
            ]
        }),

        DatatypeElement({
            name: "BatFaultChangeType", base: "struct",
            access: { rw: "R" }, conformance: [ "M" ],
            children: [
                DatatypeElement({
                    name: "current", base: "BatFaultEnum",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "current", base: "BatFaultEnum",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "previous", base: "BatFaultEnum",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "previous", base: "BatFaultEnum",
                    access: { rw: "R" }, conformance: [ "M" ]
                })
            ]
        }),

        DatatypeElement({
            name: "BatChargeFaultChangeType", base: "struct",
            access: { rw: "R" }, conformance: [ "M" ],
            children: [
                DatatypeElement({
                    name: "current", base: "BatChargeFaultEnum",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "current", base: "BatChargeFaultEnum",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "previous", base: "BatChargeFaultEnum",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "previous", base: "BatChargeFaultEnum",
                    access: { rw: "R" }, conformance: [ "M" ]
                })
            ]
        })
    ]
}));
