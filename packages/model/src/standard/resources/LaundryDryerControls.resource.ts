/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { LaundryDryerControls } from "#index.js";

LaundryDryerControls.patch({
    details: "This cluster provides a way to access options associated with the operation of a laundry dryer " +
        "device type.",
    xref: { document: "cluster", section: "8.9" },

    children: [
        undefined,
        undefined,
        undefined,

        {
            children: [
                { description: "Provides a low dryness level for the selected mode" },
                { description: "Provides the normal level of dryness for the selected mode" },
                { description: "Provides an extra dryness level for the selected mode" },
                { description: "Provides the max dryness level for the selected mode" }
            ]
        }
    ]
});
