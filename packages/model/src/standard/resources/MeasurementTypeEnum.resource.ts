/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Resource } from "#models/Resource.js";

Resource.add({
    name: "MeasurementTypeEnum", tag: "datatype",
    xref: "cluster§2.1.4.2",

    children: [
        { name: "Voltage", tag: "field", description: "Voltage in millivolts (mV)" },
        { name: "ActiveCurrent", tag: "field", description: "Active current in milliamps (mA)" },
        { name: "ReactiveCurrent", tag: "field", description: "Reactive current in milliamps (mA)" },
        { name: "ApparentCurrent", tag: "field", description: "Apparent current in milliamps (mA)" },
        { name: "ActivePower", tag: "field", description: "Active power in milliwatts (mW)" },
        { name: "ReactivePower", tag: "field", description: "Reactive power in millivolt-amps reactive (mVAR)" },
        { name: "ApparentPower", tag: "field", description: "Apparent power in millivolt-amps (mVA)" },
        { name: "RmsVoltage", tag: "field", description: "Root mean squared voltage in millivolts (mV)" },
        { name: "RmsCurrent", tag: "field", description: "Root mean squared current in milliamps (mA)" },
        { name: "RmsPower", tag: "field", description: "Root mean squared power in milliwatts (mW)" },
        { name: "Frequency", tag: "field", description: "AC frequency in millihertz (mHz)" },
        { name: "PowerFactor", tag: "field", description: "Power Factor ratio in+/- 1/100ths of a percent." },
        { name: "NeutralCurrent", tag: "field", description: "AC neutral current in milliamps (mA)" },
        { name: "ElectricalEnergy", tag: "field", description: "Electrical energy in milliwatt-hours (mWh)" }
    ]
});
