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
            id: 0x0000, name: "PowerSourceStatus", base: "Status",
            access: { rw: "R" }, conformance: [ "M" ]
        }),

        AttributeElement({
            id: 0x0001, name: "PowerSourceOrder", base: "Order",
            access: { rw: "R" }, conformance: [ "M" ]
        }),

        AttributeElement({
            id: 0x0002, name: "PowerSourceDescription", base: "Description",
            access: { rw: "R" }, conformance: [ "M" ]
        }),

        AttributeElement({
            id: 0x0003, name: "PowerSourceWiredAssessedInputVoltage", base: "WiredAssessedInputVoltage",
            access: { rw: "R" }, conformance: [ "O" ], quality: { nullable: true }
        }),

        AttributeElement({
            id: 0x0004, name: "PowerSourceWiredAssessedInputFrequency", base: "WiredAssessedInputFrequency",
            access: { rw: "R" }, conformance: [ "O" ], quality: { nullable: true }
        }),

        AttributeElement({
            id: 0x0005, name: "PowerSourceWiredCurrentType", base: "WiredCurrentType",
            access: { rw: "R" }, conformance: [ "O" ]
        }),

        AttributeElement({
            id: 0x0006, name: "PowerSourceWiredAssessedCurrent", base: "WiredAssessedCurrent",
            access: { rw: "R" }, conformance: [ "O" ], quality: { nullable: true }
        }),

        AttributeElement({
            id: 0x0007, name: "PowerSourceWiredNominalVoltage", base: "WiredNominalVoltage",
            access: { rw: "R" }, conformance: [ "O" ]
        }),

        AttributeElement({
            id: 0x0008, name: "PowerSourceWiredMaximumCurrent", base: "WiredMaximumCurrent",
            access: { rw: "R" }, conformance: [ "O" ]
        }),

        AttributeElement({
            id: 0x0009, name: "PowerSourceWiredPresent", base: "WiredPresent",
            access: { rw: "R" }, conformance: [ "O" ]
        }),

        AttributeElement({
            id: 0x000a, name: "PowerSourceActiveWiredFaults", base: "ActiveWiredFaults",
            access: { rw: "R" }, conformance: [ "O" ]
        }),

        AttributeElement({
            id: 0x000b, name: "PowerSourceBatVoltage", base: "BatVoltage",
            access: { rw: "R" }, conformance: [ "O" ], quality: { nullable: true }
        }),

        AttributeElement({
            id: 0x000c, name: "PowerSourceBatPercentRemaining", base: "BatPercentRemaining",
            access: { rw: "R" }, conformance: [ "O" ], quality: { nullable: true }
        }),

        AttributeElement({
            id: 0x000d, name: "PowerSourceBatTimeRemaining", base: "BatTimeRemaining",
            access: { rw: "R" }, conformance: [ "O" ], quality: { nullable: true }
        }),

        AttributeElement({
            id: 0x000e, name: "PowerSourceBatChargeLevel", base: "BatChargeLevel",
            access: { rw: "R" }, conformance: [ "O" ]
        }),

        AttributeElement({
            id: 0x000f, name: "PowerSourceBatReplacementNeeded", base: "BatReplacementNeeded",
            access: { rw: "R" }, conformance: [ "O" ]
        }),

        AttributeElement({
            id: 0x0010, name: "PowerSourceBatReplaceability", base: "BatReplaceability",
            access: { rw: "R" }, conformance: [ "O" ]
        }),

        AttributeElement({
            id: 0x0011, name: "PowerSourceBatPresent", base: "BatPresent",
            access: { rw: "R" }, conformance: [ "O" ]
        }),

        AttributeElement({
            id: 0x0012, name: "PowerSourceActiveBatFaults", base: "ActiveBatFaults",
            access: { rw: "R" }, conformance: [ "O" ]
        }),

        AttributeElement({
            id: 0x0013, name: "PowerSourceBatReplacementDescription", base: "BatReplacementDescription",
            access: { rw: "R" }, conformance: [ "O" ]
        }),

        AttributeElement({
            id: 0x0014, name: "PowerSourceBatCommonDesignation", base: "BatCommonDesignation",
            access: { rw: "R" }, conformance: [ "O" ]
        }),

        AttributeElement({
            id: 0x0015, name: "PowerSourceBatAnsiDesignation", base: "BatANSIDesignation",
            access: { rw: "R" }, conformance: [ "O" ]
        }),

        AttributeElement({
            id: 0x0016, name: "PowerSourceBatIecDesignation", base: "BatIECDesignation",
            access: { rw: "R" }, conformance: [ "O" ]
        }),

        AttributeElement({
            id: 0x0017, name: "PowerSourceBatApprovedChemistry", base: "BatApprovedChemistry",
            access: { rw: "R" }, conformance: [ "O" ]
        }),

        AttributeElement({
            id: 0x0018, name: "PowerSourceBatCapacity", base: "BatCapacity",
            access: { rw: "R" }, conformance: [ "O" ]
        }),

        AttributeElement({
            id: 0x0019, name: "PowerSourceBatQuantity", base: "BatQuantity",
            access: { rw: "R" }, conformance: [ "O" ]
        }),

        AttributeElement({
            id: 0x001a, name: "PowerSourceBatChargeState", base: "BatChargeState",
            access: { rw: "R" }, conformance: [ "O" ]
        }),

        AttributeElement({
            id: 0x001b, name: "PowerSourceBatTimeToFullCharge", base: "BatTimeToFullCharge",
            access: { rw: "R" }, conformance: [ "O" ], quality: { nullable: true }
        }),

        AttributeElement({
            id: 0x001c, name: "PowerSourceBatFunctionalWhileCharging", base: "BatFunctionalWhileCharging",
            access: { rw: "R" }, conformance: [ "O" ]
        }),

        AttributeElement({
            id: 0x001d, name: "PowerSourceBatChargingCurrent", base: "BatChargingCurrent",
            access: { rw: "R" }, conformance: [ "O" ], quality: { nullable: true }
        }),

        AttributeElement({
            id: 0x001e, name: "PowerSourceActiveBatChargeFaults", base: "ActiveBatChargeFaults",
            access: { rw: "R" }, conformance: [ "O" ]
        }),

        EventElement({
            id: 0x0000, name: "WiredFaultChange", base: "struct",
            access: { rw: "R" }, conformance: [ "O" ], priority: "info",
            children: [
                DatatypeElement({
                    name: "Current", base: "WiredFaultEnum",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "Current", base: "WiredFaultEnum",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "Previous", base: "WiredFaultEnum",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "Previous", base: "WiredFaultEnum",
                    access: { rw: "R" }, conformance: [ "M" ]
                })
            ]
        }),

        EventElement({
            id: 0x0001, name: "BatFaultChange", base: "struct",
            access: { rw: "R" }, conformance: [ "O" ], priority: "info",
            children: [
                DatatypeElement({
                    name: "Current", base: "BatFaultEnum",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "Current", base: "BatFaultEnum",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "Previous", base: "BatFaultEnum",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "Previous", base: "BatFaultEnum",
                    access: { rw: "R" }, conformance: [ "M" ]
                })
            ]
        }),

        EventElement({
            id: 0x0002, name: "BatChargeFaultChange", base: "struct",
            access: { rw: "R" }, conformance: [ "O" ], priority: "info",
            children: [
                DatatypeElement({
                    name: "Current", base: "BatChargeFaultEnum",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "Current", base: "BatChargeFaultEnum",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "Previous", base: "BatChargeFaultEnum",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "Previous", base: "BatChargeFaultEnum",
                    access: { rw: "R" }, conformance: [ "M" ]
                })
            ]
        })
    ]
}))