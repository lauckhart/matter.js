/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { WindowCovering } from "#index.js";

WindowCovering.patch({
    details: "The window covering cluster provides an interface for controlling and adjusting automatic window " +
        "coverings such as drapery motors, automatic shades, curtains and blinds.",
    xref: { document: "cluster", section: "5.3" },

    children: [
        undefined,

        {
            children: [
                { description: "Lift" },
                { description: "Tilt" },
                { description: "PositionAwareLift" },
                { description: "AbsolutePosition" },
                { description: "PositionAwareTilt" }
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

        {
            children: [
                { description: "Device is operational." },
                undefined,
                { description: "The lift movement is reversed." },
                { description: "Supports the PositionAwareLift feature (PA_LF)." },
                { description: "Supports the PositionAwareTilt feature (PA_TL)." },
                { description: "Uses an encoder for lift." },
                { description: "Uses an encoder for tilt." }
            ]
        },

        {
            children: [
                { description: "Reverse the lift direction." },
                { description: "Perform a calibration." },
                { description: "Freeze all motions for maintenance." },
                { description: "Control the LEDs feedback." }
            ]
        },

        {
            children: [
                { description: "Global operational state." },
                { description: "Lift operational state." },
                { description: "Tilt operational state." }
            ]
        },

        {
            children: [
                {
                    description: "Movement commands are ignored (locked out). e.g. not granted authorization, outside some time/date range."
                },
                {
                    description: "Tampering detected on sensors or any other safety equipment. Ex: a device has been forcedly moved without its actuator(s)."
                },
                { description: "Communication failure to sensors or other safety equipment." },
                {
                    description: "Device has failed to reach the desired position. e.g. with position aware device, time expired before TargetPosition is reached."
                },
                { description: "Motor(s) and/or electric circuit thermal protection activated." },
                { description: "An obstacle is preventing actuator movement." },
                {
                    description: "Device has power related issue or limitation e.g. device is running w/ the help of a backup battery or power might not be fully available at the moment."
                },
                {
                    description: "Local safety sensor (not a direct obstacle) is preventing movements (e.g. Safety EU Standard EN60335)."
                },
                { description: "Mechanical problem related to the motor(s) detected." },
                { description: "PCB, fuse and other electrics problems." },
                {
                    description: "Actuator is manually operated and is preventing actuator movement (e.g. actuator is disengaged/decoupled)."
                },
                { description: "Protection is activated." }
            ]
        },

        {
            children: [
                { description: "RollerShade" },
                { description: "RollerShade - 2 Motor" },
                { description: "RollerShade - Exterior" },
                { description: "RollerShade - Exterior - 2 Motor" },
                { description: "Drapery (curtain)" },
                { description: "Awning" },
                { description: "Shutter" },
                { description: "Tilt Blind - Tilt Only" },
                { description: "Tilt Blind - Lift & Tilt" },
                { description: "Projector Screen" },
                { description: "Unknown" }
            ]
        },

        {
            children: [
                { description: "Simple Roller Shade" },
                { description: "Roman Shade" },
                { description: "Balloon Shade" },
                { description: "Woven Wood" },
                { description: "Pleated Shade" },
                { description: "Cellular Shade" },
                { description: "Layered Shade" },
                { description: "Layered Shade 2D" },
                { description: "Sheer Shade" },
                { description: "Tilt Only Interior Blind" },
                { description: "Interior Blind" },
                { description: "Vertical Blind, Strip Curtain" },
                { description: "Interior Venetian Blind" },
                { description: "Exterior Venetian Blind" },
                { description: "Lateral Left Curtain" },
                { description: "Lateral Right Curtain" },
                { description: "Central Curtain" },
                { description: "Roller Shutter" },
                { description: "Exterior Vertical Screen" },
                { description: "Awning Terrace (Patio)" },
                { description: "Awning Vertical Screen" },
                { description: "Tilt Only Pergola" },
                { description: "Swinging Shutter" },
                { description: "Sliding Shutter" },
                { description: "Unknown" }
            ]
        }
    ]
});
