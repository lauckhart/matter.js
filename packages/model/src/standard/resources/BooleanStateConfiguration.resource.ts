/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { BooleanStateConfiguration } from "#index.js";

BooleanStateConfiguration.patch({
    details: "This cluster is used to configure a boolean sensor, including optional state change alarm features " +
        "and configuration of the sensitivity level associated with the sensor.",
    xref: { document: "cluster", section: "1.8" },

    children: [
        undefined,

        {
            children: [
                { description: "Visual" },
                { description: "Audible" },
                { description: "AlarmSuppress" },
                { description: "SensitivityLevel" }
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
        { children: [{ description: "Visual alarming" }, { description: "Audible alarming" }] },
        { children: [{ description: "Unspecified fault detected" }] }
    ]
});
