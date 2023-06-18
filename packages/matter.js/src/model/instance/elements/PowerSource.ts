/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Matter } from "../Matter.js";

Matter.children.push({
    tag: "cluster", id: 0x002f, name: "PowerSource",
    classification: "node", description: "Power Source",
    children: [
        {
            tag: "attribute", id: 0x0000, name: "Status",
            access: "R V", conformance: "M", constraint: "desc", default: 0, type: "PowerSourceStatusEnum",
            details: "This attribute SHALL indicate the participation of this power source " +
                     "in providing power to the Node as specified in PowerSourceStatusEnum",
            xref: { document: "core", section: "11.7.6.1" }
        },

        {
            tag: "attribute", id: 0x0001, name: "PowerSourceOrder",
            access: "R V", conformance: "M", default: 0, quality: "N", type: "uint8",
            details: "This attribute SHALL indicate the relative preference with which the " +
                     "Node will select this source to provide power. A source with a lower " +
                     "order SHALL be selected by the Node to provide power before any other " +
                     "source with a higher order, if the lower order source is available (" +
                     "see Status",
            xref: { document: "core", section: "11.7.6.2" }
        },

        {
            tag: "attribute", id: 0x0002, name: "PowerSourceDescription",
            access: "R V", conformance: "M", constraint: "max 60", default: "", quality: "F", type: "string",
            details: "This attribute SHALL provide a user-facing description of this source" +
                     ", used to distinguish it from other power sources, e.g. \"DC Power\", \"" +
                     "Primary Battery\" or \"Battery back-up\". This attribute SHALL NOT be " +
                     "used to convey information such as battery form factor, or chemistry",
            xref: { document: "core", section: "11.7.6.3" }
        },

        {
            tag: "attribute", id: 0x0003, name: "PowerSourceWiredAssessedInputVoltage",
            access: "R V", conformance: "[WIRED]", default: 0, quality: "X C", type: "uint32",
            details: "This attribute SHALL indicate the assessed RMS or DC voltage currently" +
                     " provided by the hard-wired source, in mV (millivolts). A value of " +
                     "NULL SHALL indicate the Node is currently unable to assess the value. " +
                     "If the wired source is not connected, but the Node is still able to " +
                     "assess a value, then the assessed value MAY be reported",
            xref: { document: "core", section: "11.7.6.4" }
        },

        {
            tag: "attribute", id: 0x0004, name: "PowerSourceWiredAssessedInputFrequency",
            access: "R V", conformance: "[WIRED]", default: 0, quality: "X C", type: "uint16",
            details: "This attribute SHALL indicate the assessed frequency of the voltage, " +
                     "currently provided by the hard-wired source, in Hz. A value of NULL " +
                     "SHALL indicate the Node is currently unable to assess the value. If " +
                     "the wired source is not connected, but the Node is still able to " +
                     "assess a value, then the assessed value MAY be reported",
            xref: { document: "core", section: "11.7.6.5" }
        },

        {
            tag: "attribute", id: 0x0005, name: "PowerSourceWiredCurrentType",
            access: "R V", conformance: "WIRED", constraint: "desc", default: 0, quality: "F", type: "WiredCurrentTypeEnum",
            details: "This attribute SHALL indicate the type of current the Node expects to " +
                     "be provided by the hard- wired source as specified in " +
                     "WiredCurrentTypeEnum",
            xref: { document: "core", section: "11.7.6.6" }
        },

        {
            tag: "attribute", id: 0x0006, name: "PowerSourceWiredAssessedCurrent",
            access: "R V", conformance: "[WIRED]", default: 0, quality: "X C", type: "uint32",
            details: "This attribute SHALL indicate the assessed instantaneous current draw " +
                     "of the Node on the hard- wired source, in mA (milliamps). A value of " +
                     "NULL SHALL indicate the Node is currently unable to assess the value. " +
                     "If the wired source is not connected, but the Node is still able to " +
                     "assess a value, then the assessed value MAY be reported",
            xref: { document: "core", section: "11.7.6.7" }
        },

        {
            tag: "attribute", id: 0x0007, name: "PowerSourceWiredNominalVoltage",
            access: "R V", conformance: "[WIRED]", default: 0, quality: "F", type: "uint32",
            details: "This attribute SHALL indicate the nominal voltage, printed as part of " +
                     "the Node’s regulatory compliance label in mV (millivolts), expected to" +
                     " be provided by the hard-wired source",
            xref: { document: "core", section: "11.7.6.8" }
        },

        {
            tag: "attribute", id: 0x0008, name: "PowerSourceWiredMaximumCurrent",
            access: "R V", conformance: "[WIRED]", default: 0, quality: "F", type: "uint32",
            details: "This attribute SHALL indicate the maximum current, printed as part of " +
                     "the Node’s regulatory compliance label in mA (milliamps), expected to " +
                     "be provided by the hard-wired source",
            xref: { document: "core", section: "11.7.6.9" }
        },

        {
            tag: "attribute", id: 0x0009, name: "PowerSourceWiredPresent",
            access: "R V", conformance: "[WIRED]", default: false, type: "bool",
            details: "This attribute SHALL indicate if the Node detects that the hard-wired " +
                     "power source is properly connected",
            xref: { document: "core", section: "11.7.6.10" }
        },

        {
            tag: "attribute", id: 0x000a, name: "PowerSourceActiveWiredFaults",
            access: "R V", conformance: "[WIRED]", default: "", type: "list",
            details: "This attribute SHALL indicate the set of wired faults currently " +
                     "detected by the Node on this power source. This set is represented as " +
                     "a list of WiredFaultEnum. When the Node detects a fault has been " +
                     "raised, the appropriate WiredFaultEnum value SHALL be added to this " +
                     "list, provided it is not already present. This list SHALL NOT contain " +
                     "more than one instance of a specific WiredFaultEnum value. When the " +
                     "Node detects all conditions contributing to a fault have been cleared" +
                     ", the corresponding WiredFaultEnum value SHALL be removed from this " +
                     "list. An empty list SHALL indicate there are currently no active " +
                     "faults. The order of this list SHOULD have no significance. Clients " +
                     "interested in monitoring changes in active faults MAY subscribe to " +
                     "this attribute, or they MAY subscribe to WiredFaultChange",
            xref: { document: "core", section: "11.7.6.11" },
            children: [
                {
                    tag: "datatype", name: "entry",
                    type: "WiredFaultEnum"
                }
            ]
        },

        {
            tag: "attribute", id: 0x000b, name: "PowerSourceBatVoltage",
            access: "R V", conformance: "[BAT]", default: 0, quality: "X C", type: "uint32",
            details: "This attribute SHALL indicate the currently measured output voltage of" +
                     " the battery in mV (millivolts). A value of NULL SHALL indicate the " +
                     "Node is currently unable to assess the value",
            xref: { document: "core", section: "11.7.6.12" }
        },

        {
            tag: "attribute", id: 0x000c, name: "PowerSourceBatPercentRemaining",
            access: "R V", conformance: "[BAT]", constraint: "0 to 200", default: 0, quality: "X C", type: "uint8",
            details: "This attribute SHALL indicate the estimated percentage of battery " +
                     "charge remaining until the battery will no longer be able to provide " +
                     "power to the Node. Values are expressed in half percent units, ranging" +
                     " from 0 to 200. E.g. a value of 48 is equivalent to 24%. A value of " +
                     "NULL SHALL indicate the Node is currently unable to assess the value",
            xref: { document: "core", section: "11.7.6.13" }
        },

        {
            tag: "attribute", id: 0x000d, name: "PowerSourceBatTimeRemaining",
            access: "R V", conformance: "[BAT]", default: 0, quality: "X C", type: "uint32",
            details: "This attribute SHALL indicate the estimated time in seconds before the" +
                     " battery will no longer be able to provide power to the Node. A value " +
                     "of NULL SHALL indicate the Node is currently unable to assess the " +
                     "value",
            xref: { document: "core", section: "11.7.6.14" }
        },

        {
            tag: "attribute", id: 0x000e, name: "PowerSourceBatChargeLevel",
            access: "R V", conformance: "BAT", constraint: "desc", default: 0, type: "BatChargeLevelEnum",
            details: "This attribute SHALL indicate a coarse ranking of the charge level of " +
                     "the battery, used to indicate when intervention is required as " +
                     "specified in BatChargeLevelEnum",
            xref: { document: "core", section: "11.7.6.15" }
        },

        {
            tag: "attribute", id: 0x000f, name: "PowerSourceBatReplacementNeeded",
            access: "R V", conformance: "BAT", default: false, type: "bool",
            details: "This attribute SHALL indicate if the battery needs to be replaced. " +
                     "Replacement MAY be simple routine maintenance, such as with a single " +
                     "use, non-rechargeable cell. Replacement, however, MAY also indicate " +
                     "end of life, or serious fault with a rechargeable or even non-" +
                     "replaceable cell",
            xref: { document: "core", section: "11.7.6.16" }
        },

        {
            tag: "attribute", id: 0x0010, name: "PowerSourceBatReplaceability",
            access: "R V", conformance: "BAT", default: 0, quality: "F", type: "BatReplaceabilityEnum",
            details: "This attribute SHALL indicate the replaceability of the battery as " +
                     "specified in BatReplaceabilityEnum",
            xref: { document: "core", section: "11.7.6.17" }
        },

        {
            tag: "attribute", id: 0x0011, name: "PowerSourceBatPresent",
            access: "R V", conformance: "[BAT]", default: false, type: "bool",
            details: "This attribute SHALL indicate whether the Node detects that the " +
                     "batteries are properly installed",
            xref: { document: "core", section: "11.7.6.18" }
        },

        {
            tag: "attribute", id: 0x0012, name: "PowerSourceActiveBatFaults",
            access: "R V", conformance: "[BAT]", default: "", type: "list",
            details: "This attribute SHALL indicate the set of battery faults currently " +
                     "detected by the Node on this power source. This set is represented as " +
                     "a list of BatFaultEnum. When the Node detects a fault has been raised" +
                     ", the appropriate BatFaultEnum value SHALL be added to this list, " +
                     "provided it is not already present. This list SHALL NOT contain more " +
                     "than one instance of a specific BatFaultEnum value. When the Node " +
                     "detects all conditions contributing to a fault have been cleared, the " +
                     "corresponding BatFaultEnum value SHALL be removed from this list. An " +
                     "empty list SHALL indicate there are currently no active faults. The " +
                     "order of this list SHOULD have no significance. Clients interested in " +
                     "monitoring changes in active faults MAY subscribe to this attribute, " +
                     "or they MAY subscribe to Section 11.7.7.2, “BatFaultChange Event",
            xref: { document: "core", section: "11.7.6.19" },
            children: [
                {
                    tag: "datatype", name: "entry",
                    type: "BatFaultEnum"
                }
            ]
        },

        {
            tag: "attribute", id: 0x0013, name: "PowerSourceBatReplacementDescription",
            access: "R V", conformance: "REPLC", constraint: "max 60", default: "", quality: "F", type: "string",
            details: "This attribute SHALL provide a user-facing description of this battery" +
                     ", which SHOULD contain information required to identify a replacement" +
                     ", such as form factor, chemistry or preferred manufacturer",
            xref: { document: "core", section: "11.7.6.20" }
        },

        {
            tag: "attribute", id: 0x0014, name: "PowerSourceBatCommonDesignation",
            access: "R V", conformance: "[REPLC]", constraint: "desc", default: 0, quality: "F", type: "BatCommonDesignationEnum",
            details: "This attribute SHALL indicate the ID of the common or colloquial " +
                     "designation of the battery, as specified in BatCommonDesignationEnum",
            xref: { document: "core", section: "11.7.6.21" }
        },

        {
            tag: "attribute", id: 0x0015, name: "PowerSourceBatAnsiDesignation",
            access: "R V", conformance: "[REPLC]", constraint: "max 20", default: "", quality: "F", type: "string",
            details: "This attribute SHALL indicate the string representing the ANSI " +
                     "designation for the battery as specified in ANSI C18",
            xref: { document: "core", section: "11.7.6.22" }
        },

        {
            tag: "attribute", id: 0x0016, name: "PowerSourceBatIecDesignation",
            access: "R V", conformance: "[REPLC]", constraint: "max 20", default: "", quality: "F", type: "string",
            details: "This attribute SHALL indicate the string representing the IEC " +
                     "designation for the battery as specified in IEC 60086",
            xref: { document: "core", section: "11.7.6.23" }
        },

        {
            tag: "attribute", id: 0x0017, name: "PowerSourceBatApprovedChemistry",
            access: "R V", conformance: "[REPLC]", constraint: "desc", default: 0, quality: "F", type: "BatApprovedChemistryEnum",
            details: "This attribute SHALL indicate the ID of the preferred chemistry of the" +
                     " battery source as specified in BatApprovedChemistryEnum",
            xref: { document: "core", section: "11.7.6.24" }
        },

        {
            tag: "attribute", id: 0x0018, name: "PowerSourceBatCapacity",
            access: "R V", conformance: "[REPLC]", default: 0, quality: "F", type: "uint32",
            details: "This attribute SHALL indicate the preferred minimum charge capacity " +
                     "rating in mAh of individual, user- or factory-serviceable battery " +
                     "cells or packs in the battery source",
            xref: { document: "core", section: "11.7.6.25" }
        },

        {
            tag: "attribute", id: 0x0019, name: "PowerSourceBatQuantity",
            access: "R V", conformance: "REPLC", default: 0, quality: "F", type: "uint8",
            details: "This attribute SHALL indicate the quantity of individual, user- or " +
                     "factory-serviceable battery cells or packs in the battery source",
            xref: { document: "core", section: "11.7.6.26" }
        },

        {
            tag: "attribute", id: 0x001a, name: "PowerSourceBatChargeState",
            access: "R V", conformance: "RECHG", constraint: "desc", default: 0, type: "BatChargeStateEnum",
            details: "This attribute SHALL indicate the current state of the battery source " +
                     "with respect to charging as specified in BatChargeStateEnum",
            xref: { document: "core", section: "11.7.6.27" }
        },

        {
            tag: "attribute", id: 0x001b, name: "PowerSourceBatTimeToFullCharge",
            access: "R V", conformance: "[RECHG]", default: 0, quality: "X C", type: "uint32",
            details: "This attribute SHALL indicate the estimated time in seconds before the" +
                     " battery source will be at full charge. A value of NULL SHALL indicate" +
                     " the Node is currently unable to assess the value",
            xref: { document: "core", section: "11.7.6.28" }
        },

        {
            tag: "attribute", id: 0x001c, name: "PowerSourceBatFunctionalWhileCharging",
            access: "R V", conformance: "RECHG", default: false, type: "bool",
            details: "This attribute SHALL indicate whether the Node can remain operational " +
                     "while the battery source is charging",
            xref: { document: "core", section: "11.7.6.29" }
        },

        {
            tag: "attribute", id: 0x001d, name: "PowerSourceBatChargingCurrent",
            access: "R V", conformance: "[RECHG]", default: 0, quality: "X C", type: "uint32",
            details: "This attribute SHALL indicate assessed current in mA (milliamps) " +
                     "presently supplied to charge the battery source. A value of NULL SHALL" +
                     " indicate the Node is currently unable to assess the value",
            xref: { document: "core", section: "11.7.6.30" }
        },

        {
            tag: "attribute", id: 0x001e, name: "PowerSourceActiveBatChargeFaults",
            access: "R V", conformance: "[RECHG]", default: "", type: "list",
            details: "This attribute SHALL indicate the set of charge faults currently " +
                     "detected by the Node on this power source. This set is represented as " +
                     "a list of BatChargeFaultEnum. When the Node detects a fault has been " +
                     "raised, the appropriate BatChargeFaultEnum value SHALL be added to " +
                     "this list, provided it is not already present. This list SHALL NOT " +
                     "contain more than one instance of a specific BatChargeFaultEnum value" +
                     ". When the Node detects all conditions contributing to a fault have " +
                     "been cleared, the corresponding BatChargeFaultEnum value SHALL be " +
                     "removed from this list. An empty list SHALL indicate there are " +
                     "currently no active faults. The order of this list SHOULD have no " +
                     "significance. Clients interested in monitoring changes in active " +
                     "faults MAY subscribe to this attribute, or they MAY subscribe to the " +
                     "BatFaultChange event",
            xref: { document: "core", section: "11.7.6.31" },
            children: [
                {
                    tag: "datatype", name: "entry",
                    type: "BatChargeFaultEnum"
                }
            ]
        },

        {
            tag: "attribute", id: 0x0000, name: "PowerSourceStatus",
            conformance: "M", type: "PowerSourceStatusEnum"
        },

        {
            tag: "event", id: 0x0000, name: "WiredFaultChange",
            access: "V", conformance: "[WIRED]", priority: "info",
            details: "The WiredFaultChange Event SHALL be generated when the set of wired " +
                     "faults currently detected by the Node on this wired power source " +
                     "changes. This event SHALL correspond to a change in value of " +
                     "ActiveWiredFaults",
            xref: { document: "core", section: "11.7.7.1" },
            children: [
                {
                    tag: "datatype", name: "Current",
                    conformance: "M", type: "WiredFaultEnum"
                },

                {
                    tag: "datatype", name: "Previous",
                    conformance: "M", type: "WiredFaultEnum"
                }
            ]
        },

        {
            tag: "event", id: 0x0001, name: "BatFaultChange",
            access: "V", conformance: "[BAT]", priority: "info",
            details: "The BatFaultChange Event SHALL be generated when the set of battery " +
                     "faults currently detected by the Node on this battery power source " +
                     "changes. This event SHALL correspond to a change in value of " +
                     "ActiveBatFaults",
            xref: { document: "core", section: "11.7.7.2" },
            children: [
                {
                    tag: "datatype", name: "Current",
                    conformance: "M", type: "BatFaultEnum"
                },

                {
                    tag: "datatype", name: "Previous",
                    conformance: "M", type: "BatFaultEnum"
                }
            ]
        },

        {
            tag: "event", id: 0x0002, name: "BatChargeFaultChange",
            access: "V", conformance: "[RECHG]", priority: "info",
            details: "The BatChargeFaultChange Event SHALL be generated when the set of " +
                     "charge faults currently",
            xref: { document: "core", section: "11.7.7.3" },
            children: [
                {
                    tag: "datatype", name: "Current",
                    conformance: "M", type: "BatChargeFaultEnum"
                },

                {
                    tag: "datatype", name: "Previous",
                    conformance: "M", type: "BatChargeFaultEnum"
                }
            ]
        },

        {
            tag: "datatype", name: "BatChargeFaultChangeType",
            conformance: "M", type: "struct",
            details: "This data type is derived from enum8",
            xref: { document: "core", section: "11.7.5.1" },
            children: [
                {
                    tag: "datatype", id: 0x0000, name: "Unspecified",
                    conformance: "M",
                    xref: { document: "core", section: "11.7.5.1" }
                },

                {
                    tag: "datatype", id: 0x0001, name: "Previous",
                    conformance: "M", type: "BatChargeFaultEnum",
                    xref: { document: "core", section: "11.7.5.1" }
                },

                {
                    tag: "datatype", id: 0x0002, name: "UnderVoltage",
                    conformance: "M",
                    xref: { document: "core", section: "11.7.5.1" }
                },

                {
                    tag: "datatype", name: "Current",
                    conformance: "M", type: "BatChargeFaultEnum"
                }
            ]
        },

        {
            tag: "datatype", name: "PowerSourceFeature",
            conformance: "M", type: "map32",
            children: [
                {
                    tag: "datatype", id: 0x0001, name: "Wired",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0002, name: "Battery",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0004, name: "Rechargeable",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0008, name: "Replaceable",
                    conformance: "M"
                }
            ]
        },

        {
            tag: "datatype", name: "BatFaultEnum",
            conformance: "M", type: "enum8",
            children: [
                {
                    tag: "datatype", id: 0x0000, name: "Unspecified",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0001, name: "OverTemp",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0002, name: "UnderTemp",
                    conformance: "M"
                }
            ]
        },

        {
            tag: "datatype", name: "BatChargeFaultEnum",
            conformance: "M", type: "enum8",
            children: [
                {
                    tag: "datatype", id: 0x0000, name: "Unspecified",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0001, name: "AmbientTooHot",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0002, name: "AmbientTooCold",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0003, name: "BatteryTooHot",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0004, name: "BatteryTooCold",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0005, name: "BatteryAbsent",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0006, name: "BatteryOverVoltage",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0007, name: "BatteryUnderVoltage",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0008, name: "ChargerOverVoltage",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0009, name: "ChargerUnderVoltage",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x000a, name: "SafetyTimeout",
                    conformance: "M"
                }
            ]
        },

        {
            tag: "datatype", name: "PowerSourceStatusEnum",
            conformance: "M", type: "enum8",
            children: [
                {
                    tag: "datatype", id: 0x0000, name: "Unspecified",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0001, name: "Active",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0002, name: "Standby",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0003, name: "Unavailable",
                    conformance: "M"
                }
            ]
        },

        {
            tag: "datatype", name: "WiredCurrentTypeEnum",
            conformance: "M", type: "enum8",
            children: [
                {
                    tag: "datatype", id: 0x0000, name: "Ac",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0001, name: "Dc",
                    conformance: "M"
                }
            ]
        },

        {
            tag: "datatype", name: "BatChargeLevelEnum",
            conformance: "M", type: "enum8",
            children: [
                {
                    tag: "datatype", id: 0x0000, name: "Ok",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0001, name: "Warning",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0002, name: "Critical",
                    conformance: "M"
                }
            ]
        },

        {
            tag: "datatype", name: "BatReplaceabilityEnum",
            conformance: "M", type: "enum8",
            children: [
                {
                    tag: "datatype", id: 0x0000, name: "Unspecified",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0001, name: "NotReplaceable",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0002, name: "UserReplaceable",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0003, name: "FactoryReplaceable",
                    conformance: "M"
                }
            ]
        },

        {
            tag: "datatype", name: "BatChargeStateEnum",
            conformance: "M", type: "enum8",
            children: [
                {
                    tag: "datatype", id: 0x0000, name: "Unknown",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0001, name: "IsCharging",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0002, name: "IsAtFullCharge",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0003, name: "IsNotCharging",
                    conformance: "M"
                }
            ]
        },

        {
            tag: "datatype", name: "BatCommonDesignationEnum",
            conformance: "M", type: "enum16",
            children: [
                {
                    tag: "datatype", id: 0x0000, name: "Unspecified",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0001, name: "Aaa",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0002, name: "Aa",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0003, name: "C",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0004, name: "D",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0005, name: "4V5",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0006, name: "6V0",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0007, name: "9V0",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0008, name: "12Aa",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0009, name: "Aaaa",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x000a, name: "A",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x000b, name: "B",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x000c, name: "F",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x000d, name: "N",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x000e, name: "No6",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x000f, name: "SubC",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0010, name: "A23",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0011, name: "A27",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0012, name: "Ba5800",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0013, name: "Duplex",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0014, name: "4Sr44",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0015, name: "523",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0016, name: "531",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0017, name: "15V0",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0018, name: "22V5",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0019, name: "30V0",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x001a, name: "45V0",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x001b, name: "67V5",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x001c, name: "J",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x001d, name: "Cr123A",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x001e, name: "Cr2",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x001f, name: "2Cr5",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0020, name: "CrP2",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0021, name: "CrV3",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0022, name: "Sr41",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0023, name: "Sr43",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0024, name: "Sr44",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0025, name: "Sr45",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0026, name: "Sr48",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0027, name: "Sr54",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0028, name: "Sr55",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0029, name: "Sr57",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x002a, name: "Sr58",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x002b, name: "Sr59",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x002c, name: "Sr60",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x002d, name: "Sr63",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x002e, name: "Sr64",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x002f, name: "Sr65",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0030, name: "Sr66",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0031, name: "Sr67",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0032, name: "Sr68",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0033, name: "Sr69",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0034, name: "Sr516",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0035, name: "Sr731",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0036, name: "Sr712",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0037, name: "Lr932",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0038, name: "A5",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0039, name: "A10",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x003a, name: "A13",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x003b, name: "A312",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x003c, name: "A675",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x003d, name: "Ac41E",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x003e, name: "10180",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x003f, name: "10280",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0040, name: "10440",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0041, name: "14250",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0042, name: "14430",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0043, name: "14500",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0044, name: "14650",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0045, name: "15270",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0046, name: "16340",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0047, name: "Rcr123A",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0048, name: "17500",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0049, name: "17670",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x004a, name: "18350",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x004b, name: "18500",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x004c, name: "18650",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x004d, name: "19670",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x004e, name: "25500",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x004f, name: "26650",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0050, name: "32600",
                    conformance: "M"
                }
            ]
        },

        {
            tag: "datatype", name: "BatApprovedChemistryEnum",
            conformance: "M", type: "enum16",
            children: [
                {
                    tag: "datatype", id: 0x0000, name: "Unspecified",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0001, name: "Alkaline",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0002, name: "LithiumCarbonFluoride",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0003, name: "LithiumChromiumOxide",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0004, name: "LithiumCopperOxide",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0005, name: "LithiumIronDisulfide",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0006, name: "LithiumManganeseDioxide",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0007, name: "LithiumThionylChloride",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0008, name: "Magnesium",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0009, name: "MercuryOxide",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x000a, name: "NickelOxyhydride",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x000b, name: "SilverOxide",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x000c, name: "ZincAir",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x000d, name: "ZincCarbon",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x000e, name: "ZincChloride",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x000f, name: "ZincManganeseDioxide",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0010, name: "LeadAcid",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0011, name: "LithiumCobaltOxide",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0012, name: "LithiumIon",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0013, name: "LithiumIonPolymer",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0014, name: "LithiumIronPhosphate",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0015, name: "LithiumSulfur",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0016, name: "LithiumTitanate",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0017, name: "NickelCadmium",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0018, name: "NickelHydrogen",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0019, name: "NickelIron",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x001a, name: "NickelMetalHydride",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x001b, name: "NickelZinc",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x001c, name: "SilverZinc",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x001d, name: "SodiumIon",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x001e, name: "SodiumSulfur",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x001f, name: "ZincBromide",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0020, name: "ZincCerium",
                    conformance: "M"
                }
            ]
        },

        {
            tag: "datatype", name: "WiredFaultChangeType",
            conformance: "M", type: "struct",
            children: [
                {
                    tag: "datatype", name: "Current",
                    conformance: "M", type: "WiredFaultEnum"
                },

                {
                    tag: "datatype", name: "Previous",
                    conformance: "M", type: "WiredFaultEnum"
                }
            ]
        },

        {
            tag: "datatype", name: "BatFaultChangeType",
            conformance: "M", type: "struct",
            children: [
                {
                    tag: "datatype", name: "Current",
                    conformance: "M", type: "BatFaultEnum"
                },

                {
                    tag: "datatype", name: "Previous",
                    conformance: "M", type: "BatFaultEnum"
                }
            ]
        }
    ]
});
