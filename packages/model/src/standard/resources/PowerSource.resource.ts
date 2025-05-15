/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { PowerSource } from "#index.js";

PowerSource.patch({
    classification: "node", pics: "PS",
    details: "This cluster is used to describe the configuration and capabilities of a physical power source that " +
        "provides power to one or more endpoints on a node. In case the node has multiple power sources, each " +
        "shall be described by its own cluster instance. Each instance of this cluster may be associated with " +
        "one or more endpoints or the entire node.",
    xref: "core§11.7",

    children: [
        undefined,

        {
            xref: "core§11.7.4",

            children: [
                { description: "Wired", details: "A wired power source" },
                { description: "Battery", details: "A battery power source" },
                { description: "Rechargeable", details: "A rechargeable battery power source" },
                { description: "Replaceable", details: "A replaceable battery power source" }
            ]
        },

        {
            details: "Indicates the participation of this power source in providing power to the Node as specified in " +
                "PowerSourceStatusEnum.",
            xref: "core§11.7.7.1"
        },

        {
            details: "Indicates the relative preference with which the Node will select this source to provide power. A " +
                "source with a lower order shall be selected by the Node to provide power before any other source " +
                "with a higher order, if the lower order source is available (see Status)." +
                "\n" +
                "Note, Order is read-only and therefore NOT intended to allow clients control over power source " +
                "selection.",

            xref: "core§11.7.7.2"
        },

        {
            details: "This attribute shall provide a user-facing description of this source, used to distinguish it from " +
                "other power sources, e.g. \"DC Power\", \"Primary Battery\" or \"Battery back-up\". This attribute shall " +
                "NOT be used to convey information such as battery form factor, or chemistry.",
            xref: "core§11.7.7.3"
        },

        {
            details: "Indicates the assessed RMS or DC voltage currently provided by the hard-wired source, in mV " +
                "(millivolts). A value of NULL shall indicate the Node is currently unable to assess the value. If " +
                "the wired source is not connected, but the Node is still able to assess a value, then the assessed " +
                "value may be reported.",
            xref: "core§11.7.7.4"
        },

        {
            details: "Indicates the assessed frequency of the voltage, currently provided by the hard-wired source, in Hz. " +
                "A value of NULL shall indicate the Node is currently unable to assess the value. If the wired source " +
                "is not connected, but the Node is still able to assess a value, then the assessed value may be " +
                "reported.",
            xref: "core§11.7.7.5"
        },

        {
            details: "Indicates the type of current the Node expects to be provided by the hard- wired source as specified " +
                "in WiredCurrentTypeEnum.",
            xref: "core§11.7.7.6"
        },

        {
            details: "Indicates the assessed instantaneous current draw of the Node on the hard- wired source, in mA " +
                "(milliamps). A value of NULL shall indicate the Node is currently unable to assess the value. If the " +
                "wired source is not connected, but the Node is still able to assess a value, then the assessed value " +
                "may be reported.",
            xref: "core§11.7.7.7"
        },

        {
            details: "Indicates the nominal voltage, printed as part of the Node’s regulatory compliance label in mV " +
                "(millivolts), expected to be provided by the hard-wired source.",
            xref: "core§11.7.7.8"
        },
        {
            details: "Indicates the maximum current, printed as part of the Node’s regulatory compliance label in mA " +
                "(milliamps), expected to be provided by the hard-wired source.",
            xref: "core§11.7.7.9"
        },
        {
            details: "Indicates if the Node detects that the hard-wired power source is properly connected.",
            xref: "core§11.7.7.10"
        },

        {
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
            details: "Indicates the currently measured output voltage of the battery in mV (millivolts). A value of NULL " +
                "shall indicate the Node is currently unable to assess the value.",
            xref: "core§11.7.7.12"
        },

        {
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
            details: "Indicates a coarse ranking of the charge level of the battery, used to indicate when intervention is " +
                "required as specified in BatChargeLevelEnum.",
            xref: "core§11.7.7.15"
        },

        {
            details: "Indicates if the battery needs to be replaced. Replacement may be simple routine maintenance, such " +
                "as with a single use, non-rechargeable cell. Replacement, however, may also indicate end of life, or " +
                "serious fault with a rechargeable or even non-replaceable cell.",
            xref: "core§11.7.7.16"
        },

        {
            details: "Indicates the replaceability of the battery as specified in BatReplaceabilityEnum.",
            xref: "core§11.7.7.17"
        },
        {
            details: "Indicates whether the Node detects that the batteries are properly installed.",
            xref: "core§11.7.7.18"
        },

        {
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
            details: "This attribute shall provide a user-facing description of this battery, which SHOULD contain " +
                "information required to identify a replacement, such as form factor, chemistry or preferred " +
                "manufacturer.",
            xref: "core§11.7.7.20"
        },

        {
            details: "Indicates the ID of the common or colloquial designation of the battery, as specified in " +
                "BatCommonDesignationEnum.",
            xref: "core§11.7.7.21"
        },
        {
            details: "Indicates the string representing the ANSI designation for the battery as specified in ANSI C18.",
            xref: "core§11.7.7.22"
        },
        {
            details: "Indicates the string representing the IEC designation for the battery as specified in IEC 60086.",
            xref: "core§11.7.7.23"
        },
        {
            details: "Indicates the ID of the preferred chemistry of the battery source as specified in " +
                "BatApprovedChemistryEnum.",
            xref: "core§11.7.7.24"
        },
        {
            details: "Indicates the preferred minimum charge capacity rating in mAh of individual, user- or " +
                "factory-serviceable battery cells or packs in the battery source.",
            xref: "core§11.7.7.25"
        },
        {
            details: "Indicates the quantity of individual, user- or factory-serviceable battery cells or packs in the " +
                "battery source.",
            xref: "core§11.7.7.26"
        },
        {
            details: "Indicates the current state of the battery source with respect to charging as specified in " +
                "BatChargeStateEnum.",
            xref: "core§11.7.7.27"
        },

        {
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
            details: "Indicates whether the Node can remain operational while the battery source is charging.",
            xref: "core§11.7.7.29"
        },
        {
            details: "Indicates assessed current in mA (milliamps) presently supplied to charge the battery source. A " +
                "value of NULL shall indicate the Node is currently unable to assess the value.",
            xref: "core§11.7.7.30"
        },

        {
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
            details: "The WiredFaultChange Event shall be generated when the set of wired faults currently detected by the " +
                "Node on this wired power source changes. This event shall correspond to a change in value of " +
                "ActiveWiredFaults.",
            xref: "core§11.7.8.1",

            children: [
                {
                    details: "This field shall represent the set of faults currently detected, as per ActiveWiredFaults.",
                    xref: "core§11.7.8.1.1"
                },
                {
                    details: "This field shall represent the set of faults detected prior to this change event, as per " +
                        "ActiveWiredFaults.",
                    xref: "core§11.7.8.1.2"
                }
            ]
        },

        {
            details: "The BatFaultChange Event shall be generated when the set of battery faults currently detected by the " +
                "Node on this battery power source changes. This event shall correspond to a change in value of " +
                "ActiveBatFaults.",
            xref: "core§11.7.8.2",

            children: [
                {
                    details: "This field shall represent the set of faults currently detected, as per ActiveBatFaults.",
                    xref: "core§11.7.8.2.1"
                },
                {
                    details: "This field shall represent the set of faults detected prior to this change event, as per " +
                        "ActiveBatFaults.",
                    xref: "core§11.7.8.2.2"
                }
            ]
        },

        {
            details: "The BatChargeFaultChange Event shall be generated when the set of charge faults currently detected " +
                "by the Node on this battery power source changes. This event shall correspond to a change in value " +
                "of ActiveBatChargeFaults.",
            xref: "core§11.7.8.3",

            children: [
                {
                    details: "This field shall represent the set of faults currently detected, as per ActiveBatChargeFaults.",
                    xref: "core§11.7.8.3.1"
                },
                {
                    details: "This field shall represent the set of faults detected prior to this change event, as per " +
                        "ActiveBatChargeFaults.",
                    xref: "core§11.7.8.3.2"
                }
            ]
        },

        {
            xref: "core§11.7.6.1",

            children: [
                { description: "The Node detects an unspecified fault on this wired power source." },
                {
                    description: "The Node detects the supplied voltage is above maximum supported value for this wired power source."
                },
                {
                    description: "The Node detects the supplied voltage is below maximum supported value for this wired power source."
                }
            ]
        },

        {
            xref: "core§11.7.6.2",

            children: [
                { description: "The Node detects an unspecified fault on this battery power source." },
                {
                    description: "The Node detects the temperature of this battery power source is above ideal operating conditions."
                },
                {
                    description: "The Node detects the temperature of this battery power source is below ideal operating conditions."
                }
            ]
        },

        {
            xref: "core§11.7.6.3",

            children: [
                { description: "The Node detects an unspecified fault on this battery source." },
                {
                    description: "The Node detects the ambient temperature is above the nominal range for this battery source."
                },
                {
                    description: "The Node detects the ambient temperature is below the nominal range for this battery source."
                },
                { description: "The Node detects the temperature of this battery source is above the nominal range." },
                { description: "The Node detects the temperature of this battery source is below the nominal range." },
                { description: "The Node detects this battery source is not present." },
                { description: "The Node detects this battery source is over voltage." },
                { description: "The Node detects this battery source is under voltage." },
                { description: "The Node detects the charger for this battery source is over voltage." },
                { description: "The Node detects the charger for this battery source is under voltage." },
                { description: "The Node detects a charging safety timeout for this battery source." }
            ]
        },

        {
            xref: "core§11.7.6.4",

            children: [
                { description: "Indicate the source status is not specified" },
                { description: "Indicate the source is available and currently supplying power" },
                { description: "Indicate the source is available, but is not currently supplying power" },
                { description: "Indicate the source is not currently available to supply power" }
            ]
        },

        {
            xref: "core§11.7.6.5",
            children: [{ description: "Indicates AC current" }, { description: "Indicates DC current" }]
        },

        {
            xref: "core§11.7.6.6",
            children: [
                { description: "Charge level is nominal" },
                { description: "Charge level is low, intervention may soon be required." },
                { description: "Charge level is critical, immediate intervention is required" }
            ]
        },

        {
            xref: "core§11.7.6.7",

            children: [
                { description: "The replaceability is unspecified or unknown." },
                { description: "The battery is not replaceable." },
                { description: "The battery is replaceable by the user or customer." },
                { description: "The battery is replaceable by an authorized factory technician." }
            ]
        },

        {
            xref: "core§11.7.6.8",

            children: [
                { description: "Common type is unknown or unspecified" },
                { description: "Common type is as specified" },
                { description: "Common type is as specified" },
                { description: "Common type is as specified" },
                { description: "Common type is as specified" },
                { description: "Common type is as specified" },
                { description: "Common type is as specified" },
                { description: "Common type is as specified" },
                { description: "Common type is as specified" },
                { description: "Common type is as specified" },
                { description: "Common type is as specified" },
                { description: "Common type is as specified" },
                { description: "Common type is as specified" },
                { description: "Common type is as specified" },
                { description: "Common type is as specified" },
                { description: "Common type is as specified" },
                { description: "Common type is as specified" },
                { description: "Common type is as specified" },
                { description: "Common type is as specified" },
                { description: "Common type is as specified" },
                { description: "Common type is as specified" },
                { description: "Common type is as specified" },
                { description: "Common type is as specified" },
                { description: "Common type is as specified" },
                { description: "Common type is as specified" },
                { description: "Common type is as specified" },
                { description: "Common type is as specified" },
                { description: "Common type is as specified" },
                { description: "Common type is as specified" },
                { description: "Common type is as specified" },
                { description: "Common type is as specified" },
                { description: "Common type is as specified" },
                { description: "Common type is as specified" },
                { description: "Common type is as specified" },
                { description: "Common type is as specified" },
                { description: "Common type is as specified" },
                { description: "Common type is as specified" },
                { description: "Common type is as specified" },
                { description: "Common type is as specified" },
                { description: "Common type is as specified" },
                { description: "Common type is as specified" },
                { description: "Common type is as specified" },
                { description: "Common type is as specified" },
                { description: "Common type is as specified" },
                { description: "Common type is as specified" },
                { description: "Common type is as specified" },
                { description: "Common type is as specified" },
                { description: "Common type is as specified" },
                { description: "Common type is as specified" },
                { description: "Common type is as specified" },
                { description: "Common type is as specified" },
                { description: "Common type is as specified" },
                { description: "Common type is as specified" },
                { description: "Common type is as specified" },
                { description: "Common type is as specified" },
                { description: "Common type is as specified" },
                { description: "Common type is as specified" },
                { description: "Common type is as specified" },
                { description: "Common type is as specified" },
                { description: "Common type is as specified" },
                { description: "Common type is as specified" },
                { description: "Common type is as specified" },
                { description: "Common type is as specified" },
                { description: "Common type is as specified" },
                { description: "Common type is as specified" },
                { description: "Common type is as specified" },
                { description: "Common type is as specified" },
                { description: "Common type is as specified" },
                { description: "Common type is as specified" },
                { description: "Common type is as specified" },
                { description: "Common type is as specified" },
                { description: "Common type is as specified" },
                { description: "Common type is as specified" },
                { description: "Common type is as specified" },
                { description: "Common type is as specified" },
                { description: "Common type is as specified" },
                { description: "Common type is as specified" },
                { description: "Common type is as specified" },
                { description: "Common type is as specified" },
                { description: "Common type is as specified" },
                { description: "Common type is as specified" }
            ]
        },

        {
            xref: "core§11.7.6.9",

            children: [
                { description: "Cell chemistry is unspecified or unknown" },
                { description: "Cell chemistry is alkaline" },
                { description: "Cell chemistry is lithium carbon fluoride" },
                { description: "Cell chemistry is lithium chromium oxide" },
                { description: "Cell chemistry is lithium copper oxide" },
                { description: "Cell chemistry is lithium iron disulfide" },
                { description: "Cell chemistry is lithium manganese dioxide" },
                { description: "Cell chemistry is lithium thionyl chloride" },
                { description: "Cell chemistry is magnesium" },
                { description: "Cell chemistry is mercury oxide" },
                { description: "Cell chemistry is nickel oxyhydride" },
                { description: "Cell chemistry is silver oxide" },
                { description: "Cell chemistry is zinc air" },
                { description: "Cell chemistry is zinc carbon" },
                { description: "Cell chemistry is zinc chloride" },
                { description: "Cell chemistry is zinc manganese dioxide" },
                { description: "Cell chemistry is lead acid" },
                { description: "Cell chemistry is lithium cobalt oxide" },
                { description: "Cell chemistry is lithium ion" },
                { description: "Cell chemistry is lithium ion polymer" },
                { description: "Cell chemistry is lithium iron phosphate" },
                { description: "Cell chemistry is lithium sulfur" },
                { description: "Cell chemistry is lithium titanate" },
                { description: "Cell chemistry is nickel cadmium" },
                { description: "Cell chemistry is nickel hydrogen" },
                { description: "Cell chemistry is nickel iron" },
                { description: "Cell chemistry is nickel metal hydride" },
                { description: "Cell chemistry is nickel zinc" },
                { description: "Cell chemistry is silver zinc" },
                { description: "Cell chemistry is sodium ion" },
                { description: "Cell chemistry is sodium sulfur" },
                { description: "Cell chemistry is zinc bromide" },
                { description: "Cell chemistry is zinc cerium" }
            ]
        },

        {
            xref: "core§11.7.6.10",

            children: [
                { description: "Unable to determine the charging state" },
                { description: "The battery is charging" },
                { description: "The battery is at full charge" },
                { description: "The battery is not charging" }
            ]
        }
    ]
});
