/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { TemperatureControlledCabinetDt } from "#index.js";

TemperatureControlledCabinetDt.patch({
    details: "A Temperature Controlled Cabinet only exists composed as part of another device type. It represents " +
        "a single cabinet that is capable of having its temperature controlled. Such a cabinet may be " +
        "chilling or freezing food, for example as part of a refrigerator, freezer, wine chiller, or other " +
        "similar device. Equally, such a cabinet may be warming or heating food, for example as part of an " +
        "oven, range, or similar device.",
    xref: { document: "device", section: "13.4" },

    children: [
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,

        {
            children: [
                { description: "The device has cooling functionality." },
                { description: "The device has heating functionality." }
            ]
        }
    ]
});
