/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { IcdManagement } from "#index.js";

IcdManagement.patch({
    details: "ICD Management Cluster enables configuration of the ICD’s behavior and ensuring that listed clients " +
        "can be notified when an intermittently connected device, ICD, is available for communication." +
        "\n" +
        "The cluster implements the requirements of the Check-In Protocol that enables the ICD Check-In use " +
        "case.",
    xref: { document: "core", section: "9.17" },

    children: [
        undefined,

        {
            children: [
                { description: "CheckInProtocolSupport" },
                { description: "UserActiveModeTrigger" },
                { description: "LongIdleTimeSupport" },
                { description: "DynamicSitLitSupport" }
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

        {
            children: [
                { description: "Power Cycle to transition the device to ActiveMode" },
                { description: "Settings menu on the device informs how to transition the device to ActiveMode" },
                { description: "Custom Instruction on how to transition the device to ActiveMode" },
                { description: "Device Manual informs how to transition the device to ActiveMode" },
                { description: "Actuate Sensor to transition the device to ActiveMode" },
                { description: "Actuate Sensor for N seconds to transition the device to ActiveMode" },
                { description: "Actuate Sensor N times to transition the device to ActiveMode" },
                { description: "Actuate Sensor until light blinks to transition the device to ActiveMode" },
                { description: "Press Reset Button to transition the device to ActiveMode" },
                { description: "Press Reset Button until light blinks to transition the device to ActiveMode" },
                { description: "Press Reset Button for N seconds to transition the device to ActiveMode" },
                { description: "Press Reset Button N times to transition the device to ActiveMode" },
                { description: "Press Setup Button to transition the device to ActiveMode" },
                { description: "Press Setup Button for N seconds to transition the device to ActiveMode" },
                { description: "Press Setup Button until light blinks to transition the device to ActiveMode" },
                { description: "Press Setup Button N times to transition the device to ActiveMode" },
                { description: "Press the N Button to transition the device to ActiveMode" }
            ]
        },

        {
            children: [
                { description: "The client is typically resident, always-on, fixed infrastructure in the home." },
                {
                    description: "The client is mobile or non-resident or not always-on and may not always be available in the home."
                }
            ]
        },

        {
            children: [
                { description: "ICD is operating as a Short Idle Time ICD." },
                { description: "ICD is operating as a Long Idle Time ICD." }
            ]
        }
    ]
});
