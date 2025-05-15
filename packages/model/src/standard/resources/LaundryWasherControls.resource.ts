/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { LaundryWasherControls } from "#index.js";

LaundryWasherControls.patch({
    details: "This cluster provides a way to access options associated with the operation of a laundry washer " +
        "device type.",
    xref: { document: "cluster", section: "8.6" },

    children: [
        undefined,
        { children: [{ description: "Spin" }, { description: "Rinse" }] },
        undefined,
        undefined,
        undefined,
        undefined,

        {
            children: [
                { description: "This laundry washer mode does not perform rinse cycles" },
                { description: "This laundry washer mode performs normal rinse cycles determined by the manufacturer" },
                { description: "This laundry washer mode performs an extra rinse cycle" },
                {
                    description: "This laundry washer mode performs the maximum number of rinse cycles determined by the manufacturer"
                }
            ]
        }
    ]
});
