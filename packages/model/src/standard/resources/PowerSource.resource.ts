/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Resource } from "#models/Resource.js";

Resource.add({
    name: "PowerSource", tag: "cluster",
    classification: "node", pics: "PS",
    details: "This cluster is used to describe the configuration and capabilities of a physical power source that " +
        "provides power to one or more endpoints on a node. In case the node has multiple power sources, each " +
        "shall be described by its own cluster instance. Each instance of this cluster may be associated with " +
        "one or more endpoints or the entire node.",
    xref: "core§11.7",

    children: [
        {
            name: "FeatureMap", tag: "attribute",
            xref: "core§11.7.4",

            children: [
                { name: "WIRED", tag: "field", details: "A wired power source" },
                { name: "BAT", tag: "field", details: "A battery power source" },
                { name: "RECHG", tag: "field", details: "A rechargeable battery power source" },
                { name: "REPLC", tag: "field", details: "A replaceable battery power source" }
            ]
        },

        {
            name: "Status", tag: "attribute",
            details: "Indicates the participation of this power source in providing power to the Node as specified in " +
                "PowerSourceStatusEnum.",
            xref: "core§11.7.7.1"
        },

        {
            name: "Order", tag: "attribute",

            details: "Indicates the relative preference with which the Node will select this source to provide power. A " +
                "source with a lower order shall be selected by the Node to provide power before any other source " +
                "with a higher order, if the lower order source is available (see Status)." +
                "\n" +
                "Note, Order is read-only and therefore NOT intended to allow clients control over power source " +
                "selection.",

            xref: "core§11.7.7.2"
        },

        {
            name: "Description", tag: "attribute",
            details: "This attribute shall provide a user-facing description of this source, used to distinguish it from " +
                "other power sources, e.g. \"DC Power\", \"Primary Battery\" or \"Battery back-up\". This attribute shall " +
                "NOT be used to convey information such as battery form factor, or chemistry.",
            xref: "core§11.7.7.3"
        },

        {
            name: "WiredAssessedInputVoltage", tag: "attribute",
            details: "Indicates the assessed RMS or DC voltage currently provided by the hard-wired source, in mV " +
                "(millivolts). A value of NULL shall indicate the Node is currently unable to assess the value. If " +
                "the wired source is not connected, but the Node is still able to assess a value, then the assessed " +
                "value may be reported.",
            xref: "core§11.7.7.4"
        },

        {
            name: "WiredAssessedInputFrequency", tag: "attribute",
            details: "Indicates the assessed frequency of the voltage, currently provided by the hard-wired source, in Hz. " +
                "A value of NULL shall indicate the Node is currently unable to assess the value. If the wired source " +
                "is not connected, but the Node is still able to assess a value, then the assessed value may be " +
                "reported.",
            xref: "core§11.7.7.5"
        },

        {
            name: "WiredCurrentType", tag: "attribute",
            details: "Indicates the type of current the Node expects to be provided by the hard- wired source as specified " +
                "in WiredCurrentTypeEnum.",
            xref: "core§11.7.7.6"
        },

        {
            name: "WiredAssessedCurrent", tag: "attribute",
            details: "Indicates the assessed instantaneous current draw of the Node on the hard- wired source, in mA " +
                "(milliamps). A value of NULL shall indicate the Node is currently unable to assess the value. If the " +
                "wired source is not connected, but the Node is still able to assess a value, then the assessed value " +
                "may be reported.",
            xref: "core§11.7.7.7"
        },

        {
            name: "WiredNominalVoltage", tag: "attribute",
            details: "Indicates the nominal voltage, printed as part of the Node’s regulatory compliance label in mV " +
                "(millivolts), expected to be provided by the hard-wired source.",
            xref: "core§11.7.7.8"
        },

        {
            name: "WiredMaximumCurrent", tag: "attribute",
            details: "Indicates the maximum current, printed as part of the Node’s regulatory compliance label in mA " +
                "(milliamps), expected to be provided by the hard-wired source.",
            xref: "core§11.7.7.9"
        },

        {
            name: "WiredPresent", tag: "attribute",
            details: "Indicates if the Node detects that the hard-wired power source is properly connected.",
            xref: "core§11.7.7.10"
        },

        {
            name: "ActiveWiredFaults", tag: "attribute",

            details: "Indicates the set of wired faults currently detected by the Node on this power source. This set is " +
                "represented as a list of WiredFaultEnum. When the Node detects a fault has been raised, the " +
                "appropriate WiredFaultEnum value shall be added to this list, provided it is not already present. " +
                "This list shall NOT contain more than one instance of a specific WiredFaultEnum value. When the Node " +
                "detects all conditions contributing to a fault have been cleared, the corresponding WiredFaultEnum " +
                "value shall be removed from this list. An empty list shall indicate there are currently no active " +
                "faults. The order of this list SHOULD have no significance. Clients interested in monitoring changes " +
                "in active faults may subscribe to this attribute, or they may subscribe to WiredFaultChange.",

            xref: "core§11.7.7.11"
        },

        {
            name: "BatVoltage", tag: "attribute",
            details: "Indicates the currently measured output voltage of the battery in mV (millivolts). A value of NULL " +
                "shall indicate the Node is currently unable to assess the value.",
            xref: "core§11.7.7.12"
        },

        {
            name: "BatPercentRemaining", tag: "attribute",

            details: "Indicates the estimated percentage of battery charge remaining until the battery will no longer be " +
                "able to provide power to the Node. Values are expressed in half percent units, ranging from 0 to " +
                "200. E.g. a value of 48 is equivalent to 24%. A value of NULL shall indicate the Node is currently " +
                "unable to assess the value." +
                "\n" +
                "Changes to this attribute shall only be marked as reportable in the following cases:" +
                "\n" +
                "  • At most once every 10 seconds, or" +
                "\n" +
                "  • When it changes from null to any other value and vice versa." +
                "\n" +
                "Since reporting consumes power, devices SHOULD be careful not to over-report.",

            xref: "core§11.7.7.13"
        },

        {
            name: "BatTimeRemaining", tag: "attribute",

            details: "Indicates the estimated time in seconds before the battery will no longer be able to provide power " +
                "to the Node. A value of NULL shall indicate the Node is currently unable to assess the value." +
                "\n" +
                "Changes to this attribute shall only be marked as reportable in the following cases:" +
                "\n" +
                "  • At most once every 10 seconds, or" +
                "\n" +
                "  • When it changes from null to any other value and vice versa." +
                "\n" +
                "Since reporting consumes power, devices SHOULD be careful not to over-report.",

            xref: "core§11.7.7.14"
        },

        {
            name: "BatChargeLevel", tag: "attribute",
            details: "Indicates a coarse ranking of the charge level of the battery, used to indicate when intervention is " +
                "required as specified in BatChargeLevelEnum.",
            xref: "core§11.7.7.15"
        },

        {
            name: "BatReplacementNeeded", tag: "attribute",
            details: "Indicates if the battery needs to be replaced. Replacement may be simple routine maintenance, such " +
                "as with a single use, non-rechargeable cell. Replacement, however, may also indicate end of life, or " +
                "serious fault with a rechargeable or even non-replaceable cell.",
            xref: "core§11.7.7.16"
        },

        {
            name: "BatReplaceability", tag: "attribute",
            details: "Indicates the replaceability of the battery as specified in BatReplaceabilityEnum.",
            xref: "core§11.7.7.17"
        },
        {
            name: "BatPresent", tag: "attribute",
            details: "Indicates whether the Node detects that the batteries are properly installed.",
            xref: "core§11.7.7.18"
        },

        {
            name: "ActiveBatFaults", tag: "attribute",

            details: "Indicates the set of battery faults currently detected by the Node on this power source. This set is " +
                "represented as a list of BatFaultEnum. When the Node detects a fault has been raised, the " +
                "appropriate BatFaultEnum value shall be added to this list, provided it is not already present. This " +
                "list shall NOT contain more than one instance of a specific BatFaultEnum value. When the Node " +
                "detects all conditions contributing to a fault have been cleared, the corresponding BatFaultEnum " +
                "value shall be removed from this list. An empty list shall indicate there are currently no active " +
                "faults. The order of this list SHOULD have no significance. Clients interested in monitoring changes " +
                "in active faults may subscribe to this attribute, or they may subscribe to Bat" +
                "\n" +
                "FaultChange.",

            xref: "core§11.7.7.19"
        },

        {
            name: "BatReplacementDescription", tag: "attribute",
            details: "This attribute shall provide a user-facing description of this battery, which SHOULD contain " +
                "information required to identify a replacement, such as form factor, chemistry or preferred " +
                "manufacturer.",
            xref: "core§11.7.7.20"
        },

        {
            name: "BatCommonDesignation", tag: "attribute",
            details: "Indicates the ID of the common or colloquial designation of the battery, as specified in " +
                "BatCommonDesignationEnum.",
            xref: "core§11.7.7.21"
        },

        {
            name: "BatAnsiDesignation", tag: "attribute",
            details: "Indicates the string representing the ANSI designation for the battery as specified in ANSI C18.",
            xref: "core§11.7.7.22"
        },
        {
            name: "BatIecDesignation", tag: "attribute",
            details: "Indicates the string representing the IEC designation for the battery as specified in IEC 60086.",
            xref: "core§11.7.7.23"
        },

        {
            name: "BatApprovedChemistry", tag: "attribute",
            details: "Indicates the ID of the preferred chemistry of the battery source as specified in " +
                "BatApprovedChemistryEnum.",
            xref: "core§11.7.7.24"
        },

        {
            name: "BatCapacity", tag: "attribute",
            details: "Indicates the preferred minimum charge capacity rating in mAh of individual, user- or " +
                "factory-serviceable battery cells or packs in the battery source.",
            xref: "core§11.7.7.25"
        },

        {
            name: "BatQuantity", tag: "attribute",
            details: "Indicates the quantity of individual, user- or factory-serviceable battery cells or packs in the " +
                "battery source.",
            xref: "core§11.7.7.26"
        },

        {
            name: "BatChargeState", tag: "attribute",
            details: "Indicates the current state of the battery source with respect to charging as specified in " +
                "BatChargeStateEnum.",
            xref: "core§11.7.7.27"
        },

        {
            name: "BatTimeToFullCharge", tag: "attribute",

            details: "Indicates the estimated time in seconds before the battery source will be at full charge. A value of " +
                "NULL shall indicate the Node is currently unable to assess the value." +
                "\n" +
                "Changes to this attribute shall only be marked as reportable in the following cases:" +
                "\n" +
                "  • At most once every 10 seconds, or" +
                "\n" +
                "  • When it changes from null to any other value and vice versa." +
                "\n" +
                "Since reporting consumes power, devices SHOULD be careful not to over-report.",

            xref: "core§11.7.7.28"
        },

        {
            name: "BatFunctionalWhileCharging", tag: "attribute",
            details: "Indicates whether the Node can remain operational while the battery source is charging.",
            xref: "core§11.7.7.29"
        },

        {
            name: "BatChargingCurrent", tag: "attribute",
            details: "Indicates assessed current in mA (milliamps) presently supplied to charge the battery source. A " +
                "value of NULL shall indicate the Node is currently unable to assess the value.",
            xref: "core§11.7.7.30"
        },

        {
            name: "ActiveBatChargeFaults", tag: "attribute",

            details: "Indicates the set of charge faults currently detected by the Node on this power source. This set is " +
                "represented as a list of BatChargeFaultEnum. When the Node detects a fault has been raised, the " +
                "appropriate BatChargeFaultEnum value shall be added to this list, provided it is not already " +
                "present. This list shall NOT contain more than one instance of a specific BatChargeFaultEnum value. " +
                "When the Node detects all conditions contributing to a fault have been cleared, the corresponding " +
                "BatChargeFaultEnum value shall be removed from this list. An empty list shall indicate there are " +
                "currently no active faults. The order of this list SHOULD have no significance. Clients interested " +
                "in monitoring changes in active faults may subscribe to this attribute, or they may subscribe to the " +
                "BatFaultChange event.",

            xref: "core§11.7.7.31"
        },

        {
            name: "EndpointList", tag: "attribute",

            details: "Indicates a list of endpoints that are powered by the source defined by this cluster. Multiple " +
                "instances of this cluster may list the same endpoint, because it is possible for power for an " +
                "endpoint to come from multiple sources. In that case the Order attribute indicates their priority." +
                "\n" +
                "For each power source on a node, there shall only be one instance of this cluster." +
                "\n" +
                "A cluster instance with an empty list shall indicate that the power source is for the entire node, " +
                "which includes all endpoints." +
                "\n" +
                "A cluster instance with a non-empty list shall include the endpoint, upon which the cluster instance " +
                "resides." +
                "\n" +
                "The above rules allow that some endpoints can have an unknown power source, and therefore would not " +
                "be indicated by any instance of this cluster." +
                "\n" +
                "Empty list examples" +
                "\n" +
                "Typically, there is one power source for the node. Also common is mains power for the node with " +
                "battery backup power for the node. In both these common cases, for each cluster instance described, " +
                "the list is empty." +
                "\n" +
                "Populated list example" +
                "\n" +
                "A node has a mains power source with Order as 0 (zero), but some application endpoints (not all) " +
                "have a battery back up source with Order as 1, which means this list is empty for the Power Source " +
                "cluster associated with the mains power, because it indicates the entire node, but the Power Source " +
                "cluster instance associated with the battery backup would list the endpoints that have a battery " +
                "backup.",

            xref: "core§11.7.7.32"
        },

        {
            name: "WiredFaultChange", tag: "event",
            details: "The WiredFaultChange Event shall be generated when the set of wired faults currently detected by the " +
                "Node on this wired power source changes. This event shall correspond to a change in value of " +
                "ActiveWiredFaults.",
            xref: "core§11.7.8.1",

            children: [
                {
                    name: "Current", tag: "field",
                    details: "This field shall represent the set of faults currently detected, as per ActiveWiredFaults.",
                    xref: "core§11.7.8.1.1"
                },

                {
                    name: "Previous", tag: "field",
                    details: "This field shall represent the set of faults detected prior to this change event, as per " +
                        "ActiveWiredFaults.",
                    xref: "core§11.7.8.1.2"
                }
            ]
        },

        {
            name: "BatFaultChange", tag: "event",
            details: "The BatFaultChange Event shall be generated when the set of battery faults currently detected by the " +
                "Node on this battery power source changes. This event shall correspond to a change in value of " +
                "ActiveBatFaults.",
            xref: "core§11.7.8.2",

            children: [
                {
                    name: "Current", tag: "field",
                    details: "This field shall represent the set of faults currently detected, as per ActiveBatFaults.",
                    xref: "core§11.7.8.2.1"
                },

                {
                    name: "Previous", tag: "field",
                    details: "This field shall represent the set of faults detected prior to this change event, as per " +
                        "ActiveBatFaults.",
                    xref: "core§11.7.8.2.2"
                }
            ]
        },

        {
            name: "BatChargeFaultChange", tag: "event",
            details: "The BatChargeFaultChange Event shall be generated when the set of charge faults currently detected " +
                "by the Node on this battery power source changes. This event shall correspond to a change in value " +
                "of ActiveBatChargeFaults.",
            xref: "core§11.7.8.3",

            children: [
                {
                    name: "Current", tag: "field",
                    details: "This field shall represent the set of faults currently detected, as per ActiveBatChargeFaults.",
                    xref: "core§11.7.8.3.1"
                },

                {
                    name: "Previous", tag: "field",
                    details: "This field shall represent the set of faults detected prior to this change event, as per " +
                        "ActiveBatChargeFaults.",
                    xref: "core§11.7.8.3.2"
                }
            ]
        },

        {
            name: "WiredFaultEnum", tag: "datatype",
            xref: "core§11.7.6.1",

            children: [
                {
                    name: "Unspecified", tag: "field",
                    description: "The Node detects an unspecified fault on this wired power source."
                },
                {
                    name: "OverVoltage", tag: "field",
                    description: "The Node detects the supplied voltage is above maximum supported value for this wired power source."
                },
                {
                    name: "UnderVoltage", tag: "field",
                    description: "The Node detects the supplied voltage is below maximum supported value for this wired power source."
                }
            ]
        },

        {
            name: "BatFaultEnum", tag: "datatype",
            xref: "core§11.7.6.2",

            children: [
                {
                    name: "Unspecified", tag: "field",
                    description: "The Node detects an unspecified fault on this battery power source."
                },
                {
                    name: "OverTemp", tag: "field",
                    description: "The Node detects the temperature of this battery power source is above ideal operating conditions."
                },
                {
                    name: "UnderTemp", tag: "field",
                    description: "The Node detects the temperature of this battery power source is below ideal operating conditions."
                }
            ]
        },

        {
            name: "BatChargeFaultEnum", tag: "datatype",
            xref: "core§11.7.6.3",

            children: [
                {
                    name: "Unspecified", tag: "field",
                    description: "The Node detects an unspecified fault on this battery source."
                },
                {
                    name: "AmbientTooHot", tag: "field",
                    description: "The Node detects the ambient temperature is above the nominal range for this battery source."
                },
                {
                    name: "AmbientTooCold", tag: "field",
                    description: "The Node detects the ambient temperature is below the nominal range for this battery source."
                },
                {
                    name: "BatteryTooHot", tag: "field",
                    description: "The Node detects the temperature of this battery source is above the nominal range."
                },
                {
                    name: "BatteryTooCold", tag: "field",
                    description: "The Node detects the temperature of this battery source is below the nominal range."
                },
                {
                    name: "BatteryAbsent", tag: "field",
                    description: "The Node detects this battery source is not present."
                },
                {
                    name: "BatteryOverVoltage", tag: "field",
                    description: "The Node detects this battery source is over voltage."
                },
                {
                    name: "BatteryUnderVoltage", tag: "field",
                    description: "The Node detects this battery source is under voltage."
                },
                {
                    name: "ChargerOverVoltage", tag: "field",
                    description: "The Node detects the charger for this battery source is over voltage."
                },
                {
                    name: "ChargerUnderVoltage", tag: "field",
                    description: "The Node detects the charger for this battery source is under voltage."
                },
                {
                    name: "SafetyTimeout", tag: "field",
                    description: "The Node detects a charging safety timeout for this battery source."
                }
            ]
        },

        {
            name: "PowerSourceStatusEnum", tag: "datatype",
            xref: "core§11.7.6.4",

            children: [
                { name: "Unspecified", tag: "field", description: "Indicate the source status is not specified" },
                {
                    name: "Active", tag: "field",
                    description: "Indicate the source is available and currently supplying power"
                },
                {
                    name: "Standby", tag: "field",
                    description: "Indicate the source is available, but is not currently supplying power"
                },
                {
                    name: "Unavailable", tag: "field",
                    description: "Indicate the source is not currently available to supply power"
                }
            ]
        },

        {
            name: "WiredCurrentTypeEnum", tag: "datatype",
            xref: "core§11.7.6.5",
            children: [
                { name: "Ac", tag: "field", description: "Indicates AC current" },
                { name: "Dc", tag: "field", description: "Indicates DC current" }
            ]
        },

        {
            name: "BatChargeLevelEnum", tag: "datatype",
            xref: "core§11.7.6.6",

            children: [
                { name: "Ok", tag: "field", description: "Charge level is nominal" },
                {
                    name: "Warning", tag: "field",
                    description: "Charge level is low, intervention may soon be required."
                },
                {
                    name: "Critical", tag: "field",
                    description: "Charge level is critical, immediate intervention is required"
                }
            ]
        },

        {
            name: "BatReplaceabilityEnum", tag: "datatype",
            xref: "core§11.7.6.7",

            children: [
                { name: "Unspecified", tag: "field", description: "The replaceability is unspecified or unknown." },
                { name: "NotReplaceable", tag: "field", description: "The battery is not replaceable." },
                {
                    name: "UserReplaceable", tag: "field",
                    description: "The battery is replaceable by the user or customer."
                },
                {
                    name: "FactoryReplaceable", tag: "field",
                    description: "The battery is replaceable by an authorized factory technician."
                }
            ]
        },

        {
            name: "BatCommonDesignationEnum", tag: "datatype",
            xref: "core§11.7.6.8",

            children: [
                { name: "Unspecified", tag: "field", description: "Common type is unknown or unspecified" },
                { name: "Aaa", tag: "field", description: "Common type is as specified" },
                { name: "Aa", tag: "field", description: "Common type is as specified" },
                { name: "4V5", tag: "field", description: "Common type is as specified" },
                { name: "6V0", tag: "field", description: "Common type is as specified" },
                { name: "9V0", tag: "field", description: "Common type is as specified" },
                { name: "12Aa", tag: "field", description: "Common type is as specified" },
                { name: "Aaaa", tag: "field", description: "Common type is as specified" },
                { name: "No6", tag: "field", description: "Common type is as specified" },
                { name: "SubC", tag: "field", description: "Common type is as specified" },
                { name: "A23", tag: "field", description: "Common type is as specified" },
                { name: "A27", tag: "field", description: "Common type is as specified" },
                { name: "Ba5800", tag: "field", description: "Common type is as specified" },
                { name: "Duplex", tag: "field", description: "Common type is as specified" },
                { name: "4Sr44", tag: "field", description: "Common type is as specified" },
                { name: "523", tag: "field", description: "Common type is as specified" },
                { name: "531", tag: "field", description: "Common type is as specified" },
                { name: "15V0", tag: "field", description: "Common type is as specified" },
                { name: "22V5", tag: "field", description: "Common type is as specified" },
                { name: "30V0", tag: "field", description: "Common type is as specified" },
                { name: "45V0", tag: "field", description: "Common type is as specified" },
                { name: "67V5", tag: "field", description: "Common type is as specified" },
                { name: "Cr123A", tag: "field", description: "Common type is as specified" },
                { name: "Cr2", tag: "field", description: "Common type is as specified" },
                { name: "2Cr5", tag: "field", description: "Common type is as specified" },
                { name: "CrP2", tag: "field", description: "Common type is as specified" },
                { name: "CrV3", tag: "field", description: "Common type is as specified" },
                { name: "Sr41", tag: "field", description: "Common type is as specified" },
                { name: "Sr43", tag: "field", description: "Common type is as specified" },
                { name: "Sr44", tag: "field", description: "Common type is as specified" },
                { name: "Sr45", tag: "field", description: "Common type is as specified" },
                { name: "Sr48", tag: "field", description: "Common type is as specified" },
                { name: "Sr54", tag: "field", description: "Common type is as specified" },
                { name: "Sr55", tag: "field", description: "Common type is as specified" },
                { name: "Sr57", tag: "field", description: "Common type is as specified" },
                { name: "Sr58", tag: "field", description: "Common type is as specified" },
                { name: "Sr59", tag: "field", description: "Common type is as specified" },
                { name: "Sr60", tag: "field", description: "Common type is as specified" },
                { name: "Sr63", tag: "field", description: "Common type is as specified" },
                { name: "Sr64", tag: "field", description: "Common type is as specified" },
                { name: "Sr65", tag: "field", description: "Common type is as specified" },
                { name: "Sr66", tag: "field", description: "Common type is as specified" },
                { name: "Sr67", tag: "field", description: "Common type is as specified" },
                { name: "Sr68", tag: "field", description: "Common type is as specified" },
                { name: "Sr69", tag: "field", description: "Common type is as specified" },
                { name: "Sr516", tag: "field", description: "Common type is as specified" },
                { name: "Sr731", tag: "field", description: "Common type is as specified" },
                { name: "Sr712", tag: "field", description: "Common type is as specified" },
                { name: "Lr932", tag: "field", description: "Common type is as specified" },
                { name: "A5", tag: "field", description: "Common type is as specified" },
                { name: "A10", tag: "field", description: "Common type is as specified" },
                { name: "A13", tag: "field", description: "Common type is as specified" },
                { name: "A312", tag: "field", description: "Common type is as specified" },
                { name: "A675", tag: "field", description: "Common type is as specified" },
                { name: "Ac41E", tag: "field", description: "Common type is as specified" },
                { name: "10180", tag: "field", description: "Common type is as specified" },
                { name: "10280", tag: "field", description: "Common type is as specified" },
                { name: "10440", tag: "field", description: "Common type is as specified" },
                { name: "14250", tag: "field", description: "Common type is as specified" },
                { name: "14430", tag: "field", description: "Common type is as specified" },
                { name: "14500", tag: "field", description: "Common type is as specified" },
                { name: "14650", tag: "field", description: "Common type is as specified" },
                { name: "15270", tag: "field", description: "Common type is as specified" },
                { name: "16340", tag: "field", description: "Common type is as specified" },
                { name: "Rcr123A", tag: "field", description: "Common type is as specified" },
                { name: "17500", tag: "field", description: "Common type is as specified" },
                { name: "17670", tag: "field", description: "Common type is as specified" },
                { name: "18350", tag: "field", description: "Common type is as specified" },
                { name: "18500", tag: "field", description: "Common type is as specified" },
                { name: "18650", tag: "field", description: "Common type is as specified" },
                { name: "19670", tag: "field", description: "Common type is as specified" },
                { name: "25500", tag: "field", description: "Common type is as specified" },
                { name: "26650", tag: "field", description: "Common type is as specified" },
                { name: "32600", tag: "field", description: "Common type is as specified" }
            ]
        },

        {
            name: "BatApprovedChemistryEnum", tag: "datatype",
            xref: "core§11.7.6.9",

            children: [
                { name: "Unspecified", tag: "field", description: "Cell chemistry is unspecified or unknown" },
                { name: "Alkaline", tag: "field", description: "Cell chemistry is alkaline" },
                {
                    name: "LithiumCarbonFluoride", tag: "field",
                    description: "Cell chemistry is lithium carbon fluoride"
                },
                { name: "LithiumChromiumOxide", tag: "field", description: "Cell chemistry is lithium chromium oxide" },
                { name: "LithiumCopperOxide", tag: "field", description: "Cell chemistry is lithium copper oxide" },
                { name: "LithiumIronDisulfide", tag: "field", description: "Cell chemistry is lithium iron disulfide" },
                {
                    name: "LithiumManganeseDioxide", tag: "field",
                    description: "Cell chemistry is lithium manganese dioxide"
                },
                {
                    name: "LithiumThionylChloride", tag: "field",
                    description: "Cell chemistry is lithium thionyl chloride"
                },
                { name: "Magnesium", tag: "field", description: "Cell chemistry is magnesium" },
                { name: "MercuryOxide", tag: "field", description: "Cell chemistry is mercury oxide" },
                { name: "NickelOxyhydride", tag: "field", description: "Cell chemistry is nickel oxyhydride" },
                { name: "SilverOxide", tag: "field", description: "Cell chemistry is silver oxide" },
                { name: "ZincAir", tag: "field", description: "Cell chemistry is zinc air" },
                { name: "ZincCarbon", tag: "field", description: "Cell chemistry is zinc carbon" },
                { name: "ZincChloride", tag: "field", description: "Cell chemistry is zinc chloride" },
                { name: "ZincManganeseDioxide", tag: "field", description: "Cell chemistry is zinc manganese dioxide" },
                { name: "LeadAcid", tag: "field", description: "Cell chemistry is lead acid" },
                { name: "LithiumCobaltOxide", tag: "field", description: "Cell chemistry is lithium cobalt oxide" },
                { name: "LithiumIon", tag: "field", description: "Cell chemistry is lithium ion" },
                { name: "LithiumIonPolymer", tag: "field", description: "Cell chemistry is lithium ion polymer" },
                { name: "LithiumIronPhosphate", tag: "field", description: "Cell chemistry is lithium iron phosphate" },
                { name: "LithiumSulfur", tag: "field", description: "Cell chemistry is lithium sulfur" },
                { name: "LithiumTitanate", tag: "field", description: "Cell chemistry is lithium titanate" },
                { name: "NickelCadmium", tag: "field", description: "Cell chemistry is nickel cadmium" },
                { name: "NickelHydrogen", tag: "field", description: "Cell chemistry is nickel hydrogen" },
                { name: "NickelIron", tag: "field", description: "Cell chemistry is nickel iron" },
                { name: "NickelMetalHydride", tag: "field", description: "Cell chemistry is nickel metal hydride" },
                { name: "NickelZinc", tag: "field", description: "Cell chemistry is nickel zinc" },
                { name: "SilverZinc", tag: "field", description: "Cell chemistry is silver zinc" },
                { name: "SodiumIon", tag: "field", description: "Cell chemistry is sodium ion" },
                { name: "SodiumSulfur", tag: "field", description: "Cell chemistry is sodium sulfur" },
                { name: "ZincBromide", tag: "field", description: "Cell chemistry is zinc bromide" },
                { name: "ZincCerium", tag: "field", description: "Cell chemistry is zinc cerium" }
            ]
        },

        {
            name: "BatChargeStateEnum", tag: "datatype",
            xref: "core§11.7.6.10",

            children: [
                { name: "Unknown", tag: "field", description: "Unable to determine the charging state" },
                { name: "IsCharging", tag: "field", description: "The battery is charging" },
                { name: "IsAtFullCharge", tag: "field", description: "The battery is at full charge" },
                { name: "IsNotCharging", tag: "field", description: "The battery is not charging" }
            ]
        }
    ]
});
