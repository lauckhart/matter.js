/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { GeneralCommissioning } from "#index.js";

GeneralCommissioning.patch({
    details: "This cluster is used to manage basic commissioning lifecycle." +
        "\n" +
        "This cluster also represents responsibilities related to commissioning that don’t well fit other " +
        "commissioning clusters, like Section 11.9, “Network Commissioning Cluster”. It also hosts " +
        "functionalities those other clusters may depend on.",
    xref: { document: "core", section: "11.10" },

    children: [
        undefined,
        { children: [{ description: "TermsAndConditions" }] },
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
                { description: "No error" },
                {
                    description: "Attempting to set regulatory configuration to a region or indoor/outdoor mode for which the server does not have proper configuration."
                },
                { description: "Executed CommissioningComplete outside CASE session." },
                { description: "Executed CommissioningComplete when there was no active Fail-Safe context." },
                {
                    description: "Attempting to arm fail- safe or execute CommissioningComplete from a fabric different than the one associated with the current fail- safe context."
                },
                { description: "One or more required TC features from the Enhanced Setup Flow were not accepted." },
                { description: "No acknowledgements from the user for the TC features were received." },
                {
                    description: "The version of the TC features acknowledged by the user did not meet the minimum required version."
                }
            ]
        },

        {
            children: [
                { description: "Indoor only" },
                { description: "Outdoor only" },
                { description: "Indoor/Outdoor" }
            ]
        }
    ]
});
