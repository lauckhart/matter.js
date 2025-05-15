/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { PumpConfigurationAndControl } from "#index.js";

PumpConfigurationAndControl.patch({
    details: "The Pump Configuration and Control cluster provides an interface for the setup and control of pump " +
        "devices, and the automatic reporting of pump status information. Note that control of pump speed is " +
        "not included – speed is controlled by the On/Off and Level Control clusters." +
        "\n" +
        "### Pump controller Pump" +
        "\n" +
        "C Pump configuration and control S C Level control S" +
        "\n" +
        "C On/Off S" +
        "\n" +
        "C = Client S = Server" +
        "\n" +
        "Note: Device names are examples for illustration purposes only" +
        "\n" +
        "Figure 14. Typical Usage of Pump Configuration and Control Cluster",

    xref: { document: "cluster", section: "4.2" },

    children: [
        undefined,

        {
            children: [
                { description: "ConstantPressure" },
                { description: "CompensatedPressure" },
                { description: "ConstantFlow" },
                { description: "ConstantSpeed" },
                { description: "ConstantTemperature" },
                { description: "Automatic" },
                { description: "LocalOperation" }
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
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,

        {
            children: [
                { description: "A fault related to the system or pump device is detected." },
                { description: "A fault related to the supply to the pump is detected." },
                { description: "Setpoint is too low to achieve." },
                { description: "Setpoint is too high to achieve." },
                {
                    description: "Device control is overridden by hardware, such as an external STOP button or via a local HMI."
                },
                { description: "Pump is currently running" },
                { description: "A remote pressure sensor is used as the sensor for the regulation of the pump." },
                { description: "A remote flow sensor is used as the sensor for the regulation of the pump." },
                { description: "A remote temperature sensor is used as the sensor for the regulation of the pump." }
            ]
        },

        {
            children: [
                {
                    description: "The pump is controlled by a setpoint, as defined by a connected remote sensor or by the ControlMode attribute."
                },
                {
                    description: "This value sets the pump to run at the minimum possible speed it can without being stopped."
                },
                { description: "This value sets the pump to run at its maximum possible speed." },
                {
                    description: "This value sets the pump to run with the local settings of the pump, regardless of what these are."
                }
            ]
        },

        {
            children: [
                { description: "The pump is running at a constant speed." },
                {
                    description: "The pump will regulate its speed to maintain a constant differential pressure over its flanges."
                },
                {
                    description: "The pump will regulate its speed to maintain a constant differential pressure over its flanges."
                },
                { description: "The pump will regulate its speed to maintain a constant flow through the pump." },
                { description: "The pump will regulate its speed to maintain a constant temperature." },
                {
                    description: "The operation of the pump is automatically optimized to provide the most suitable performance with respect to comfort and energy savings."
                }
            ]
        }
    ]
});
