/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Resource } from "#models/Resource.js";

Resource.add({
    name: "TemperatureControlledCabinet", tag: "deviceType",
    classification: "simple",
    details: "A Temperature Controlled Cabinet only exists composed as part of another device type. It represents " +
        "a single cabinet that is capable of having its temperature controlled. Such a cabinet may be " +
        "chilling or freezing food, for example as part of a refrigerator, freezer, wine chiller, or other " +
        "similar device. Equally, such a cabinet may be warming or heating food, for example as part of an " +
        "oven, range, or similar device.",
    xref: "device§13.4",

    children: [
        { name: "TemperatureControl", tag: "requirement", xref: "device§13.4.4" },
        { name: "TemperatureMeasurement", tag: "requirement", xref: "device§13.4.4" },
        { name: "RefrigeratorAndTemperatureControlledCabinetMode", tag: "requirement", xref: "device§13.4.4" },
        { name: "OvenMode", tag: "requirement", xref: "device§13.4.4" },
        { name: "OvenCavityOperationalState", tag: "requirement", xref: "device§13.4.4" },

        {
            name: "conditions", tag: "field",

            children: [
                {
                    name: "Cooler", tag: "field",
                    description: "The device has cooling functionality.",
                    xref: "device§13.4.3"
                },
                {
                    name: "Heater", tag: "field",
                    description: "The device has heating functionality.",
                    xref: "device§13.4.3"
                }
            ]
        }
    ]
});
