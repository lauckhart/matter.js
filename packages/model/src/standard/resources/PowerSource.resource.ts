/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { PowerSource } from "#index.js";

PowerSource.patch({
    details: "This cluster is used to describe the configuration and capabilities of a physical power source that " +
        "provides power to one or more endpoints on a node. In case the node has multiple power sources, each " +
        "shall be described by its own cluster instance. Each instance of this cluster may be associated with " +
        "one or more endpoints or the entire node.",
    xref: { document: "core", section: "11.7" },

    children: [
        undefined,

        {
            children: [
                { description: "Wired" },
                { description: "Battery" },
                { description: "Rechargeable" },
                { description: "Replaceable" }
            ]
        },

        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,

        {
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
            children: [
                { description: "Indicate the source status is not specified" },
                { description: "Indicate the source is available and currently supplying power" },
                { description: "Indicate the source is available, but is not currently supplying power" },
                { description: "Indicate the source is not currently available to supply power" }
            ]
        },

        { children: [{ description: "Indicates AC current" }, { description: "Indicates DC current" }] },

        {
            children: [
                { description: "Charge level is nominal" },
                { description: "Charge level is low, intervention may soon be required." },
                { description: "Charge level is critical, immediate intervention is required" }
            ]
        },

        {
            children: [
                { description: "The replaceability is unspecified or unknown." },
                { description: "The battery is not replaceable." },
                { description: "The battery is replaceable by the user or customer." },
                { description: "The battery is replaceable by an authorized factory technician." }
            ]
        },

        {
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
            children: [
                { description: "Unable to determine the charging state" },
                { description: "The battery is charging" },
                { description: "The battery is at full charge" },
                { description: "The battery is not charging" }
            ]
        }
    ]
});
