/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { TemperatureControl } from "#index.js";

TemperatureControl.patch({
    details: "This cluster provides an interface to the setpoint temperature on devices such as washers, " +
        "refrigerators, and water heaters. The setpoint temperature is the temperature to which a device " +
        "using this cluster would attempt to control to. This cluster does not provide access to the actual " +
        "or physical temperature associated with any device using this cluster. Access to the physical " +
        "temperature associated with a device using this cluster would be provided by other clusters as part " +
        "of that devices device type definition." +
        "\n" +
        "The values and constraints of the attributes communicated to clients SHOULD match the controls on " +
        "any physical interface on a device implementing this server. For example, the value of the Step " +
        "attribute SHOULD match the incremental value by which the temperature setpoint can be changed on the " +
        "physical device.",

    xref: { document: "cluster", section: "8.2" },

    children: [
        undefined,

        {
            children: [
                { description: "TemperatureNumber" },
                { description: "TemperatureLevel" },
                { description: "TemperatureStep" }
            ]
        }
    ]
});
