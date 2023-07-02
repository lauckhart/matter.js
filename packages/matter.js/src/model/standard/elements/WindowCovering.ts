/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Matter } from "../Matter.js";

Matter.children.push({
    tag: "cluster", name: "WindowCovering", id: 0x102, classification: "application",
    description: "Window Covering",
    details: "Provides an interface for controlling and adjusting automatic window coverings.",
    xref: { document: "cluster", section: "5.3" },

    children: [
        {
            tag: "attribute", name: "FeatureMap", id: 0xfffc, type: "FeatureMap",
            xref: { document: "cluster", section: "5.3.4" },

            children: [
                {
                    tag: "datatype", name: "LF", id: 0x0, conformance: "O.a+", description: "Lift",
                    details: "Lift Control and behavior for lifting/sliding window coverings"
                },
                {
                    tag: "datatype", name: "TL", id: 0x1, conformance: "O.a+", description: "Tilt",
                    details: "Tilt Control and behavior for tilting window coverings"
                },
                {
                    tag: "datatype", name: "PA_LF", id: 0x2, conformance: "[LF]", description: "PositionAwareLift",
                    details: "Position Aware lift control is supported."
                },
                {
                    tag: "datatype", name: "ABS", id: 0x3, conformance: "O", description: "AbsolutePosition",
                    details: "Absolute positioning is supported."
                },
                {
                    tag: "datatype", name: "PA_TL", id: 0x4, conformance: "[TL]", description: "PositionAwareTilt",
                    details: "Position Aware tilt control is supported."
                }
            ]
        },

        {
            tag: "attribute", name: "Type", id: 0x0, type: "enum8", access: "R V", conformance: "M",
            constraint: "desc", quality: "F",
            details: "The Type attribute identifies the type of window covering being controlled by this endpoint and " +
                     "SHALL be set to one of the non-reserved values in the table below.",
            xref: { document: "cluster", section: "5.3.5.1" },

            children: [
                { tag: "datatype", name: "Rollershade", id: 0x0, conformance: "M" },
                { tag: "datatype", name: "Rollershade2Motor", id: 0x1, conformance: "M" },
                { tag: "datatype", name: "RollershadeExterior", id: 0x2, conformance: "M" },
                { tag: "datatype", name: "RollershadeExterior2Motor", id: 0x3, conformance: "M" },
                { tag: "datatype", name: "Drapery", id: 0x4, conformance: "M" },
                { tag: "datatype", name: "Awning", id: 0x5, conformance: "M" },
                { tag: "datatype", name: "Shutter", id: 0x6, conformance: "M" },
                { tag: "datatype", name: "TiltBlindTiltOnly", id: 0x7, conformance: "M" },
                { tag: "datatype", name: "TiltBlindLift", id: 0x8, conformance: "M" },
                { tag: "datatype", name: "ProjectorScreen", id: 0x9, conformance: "M" },
                { tag: "datatype", name: "Unknown", id: 0xff, conformance: "M" }
            ]
        },

        {
            tag: "attribute", name: "PhysicalClosedLimitLift", id: 0x1, type: "uint16", access: "R V",
            conformance: "[LF & PA_LF]", quality: "F",
            details: "The PhysicalClosedLimitLift attribute identifies the maximum possible encoder position possible (in " +
                     "centimeters) to position the height of the window covering Lift.",
            xref: { document: "cluster", section: "5.3.5.2" }
        },

        {
            tag: "attribute", name: "PhysicalClosedLimitTilt", id: 0x2, type: "uint16", access: "R V",
            conformance: "[TL & PA_TL]", quality: "F",
            details: "The PhysicalClosedLimitTilt attribute identifies the maximum possible encoder position possible " +
                     "(tenth of a degrees) to position the angle of the window covering Tilt.",
            xref: { document: "cluster", section: "5.3.5.3" }
        },

        {
            tag: "attribute", name: "CurrentPositionLift", id: 0x3, type: "uint16", access: "R V",
            conformance: "[LF & PA_LF]", constraint: "InstalledOpenLimitLift to InstalledClosedLimitLift",
            default: null, quality: "X N",
            details: "The CurrentPositionLift attribute identifies the actual Lift position (in centimeters) of the " +
                     "window covering from the fully-open position.",
            xref: { document: "cluster", section: "5.3.5.4" }
        },

        {
            tag: "attribute", name: "CurrentPositionTilt", id: 0x4, type: "uint16", access: "R V",
            conformance: "[TL & PA_TL]", constraint: "InstalledOpenLimitTilt to InstalledClosedLimitTilt",
            default: null, quality: "X N",
            details: "The CurrentPositionTilt attribute identifies the actual Tilt position (in tenth of an degree) of " +
                     "the window covering from the fully-open position.",
            xref: { document: "cluster", section: "5.3.5.5" }
        },

        {
            tag: "attribute", name: "NumberOfActuationsLift", id: 0x5, type: "uint16", access: "R V",
            conformance: "[LF]", quality: "N",
            details: "The NumberOfActuationsLift attribute identifies the total number of lift/slide actuations applied " +
                     "to the Window Covering since the device was installed.",
            xref: { document: "cluster", section: "5.3.5.6" }
        },

        {
            tag: "attribute", name: "NumberOfActuationsTilt", id: 0x6, type: "uint16", access: "R V",
            conformance: "[TL]", quality: "N",
            details: "The NumberOfActuationsTilt attribute identifies the total number of tilt actuations applied to the " +
                     "Window Covering since the device was installed.",
            xref: { document: "cluster", section: "5.3.5.7" }
        },

        {
            tag: "attribute", name: "ConfigStatus", id: 0x7, type: "map8", access: "R V", conformance: "M",
            constraint: "desc", default: { type: "flags", flags: [ "Operational", "OnlineReserved" ] },
            quality: "N",
            details: "The ConfigStatus attribute makes configuration and status information available. To change " +
                     "settings, devices SHALL write to the Mode attribute of the Window Covering Settings Attribute Set. " +
                     "The behavior causing the setting or clearing of each bit is vendor specific. See table below for " +
                     "details on each bit.",
            xref: { document: "cluster", section: "5.3.5.8" },

            children: [
                { tag: "datatype", name: "Operational", id: 0x1, conformance: "M" },
                { tag: "datatype", name: "OnlineReserved", id: 0x2, conformance: "M" },
                { tag: "datatype", name: "LiftMovementReversed", id: 0x4, conformance: "M" },
                { tag: "datatype", name: "LiftPositionAware", id: 0x8, conformance: "M" },
                { tag: "datatype", name: "TiltPositionAware", id: 0x10, conformance: "M" },
                { tag: "datatype", name: "LiftEncoderControlled", id: 0x20, conformance: "M" },
                { tag: "datatype", name: "TiltEncoderControlled", id: 0x40, conformance: "M" }
            ]
        },

        {
            tag: "attribute", name: "CurrentPositionLiftPercentage", id: 0x8, type: "percent", access: "R V",
            conformance: "[LF & PA_LF]", constraint: "0 to 100", default: null, quality: "X N S P",
            details: "The CurrentPositionLiftPercentage attribute identifies the actual position as a percentage from 0% " +
                     "to 100% with 1% default step. This attribute is equal to CurrentPositionLiftPercent100ths attribute " +
                     "divided by 100.",
            xref: { document: "cluster", section: "5.3.5.11" }
        },

        {
            tag: "attribute", name: "CurrentPositionTiltPercentage", id: 0x9, type: "percent", access: "R V",
            conformance: "[TL & PA_TL]", constraint: "0 to 100", default: null, quality: "X N S P",
            details: "The CurrentPositionTiltPercentage attribute identifies the actual position as a percentage from 0% " +
                     "to 100% with 1% default step. This attribute is equal to CurrentPositionTiltPercent100ths attribute " +
                     "divided by 100.",
            xref: { document: "cluster", section: "5.3.5.12" }
        },

        {
            tag: "attribute", name: "OperationalStatus", id: 0xa, type: "map8", access: "R V", conformance: "M",
            quality: "P",
            details: "The OperationalStatus attribute keeps track of currently ongoing operations and applies to all type " +
                     "of devices. See below for details about the meaning of individual bits.",
            xref: { document: "cluster", section: "5.3.5.15" },
            children: [
                { tag: "datatype", name: "Global", id: 0x3, conformance: "M" },
                { tag: "datatype", name: "Lift", id: 0xc, conformance: "M" },
                { tag: "datatype", name: "Tilt", id: 0x30, conformance: "M" }
            ]
        },

        {
            tag: "attribute", name: "TargetPositionLiftPercent100Ths", id: 0xb, type: "percent100ths",
            access: "R V", conformance: "LF & PA_LF", constraint: "0 to 10000", default: null, quality: "X S P",
            details: "The TargetPositionLiftPercent100ths attribute identifies the position where the Window Covering " +
                     "Lift will go or is moving to as a percentage.",
            xref: { document: "cluster", section: "5.3.5.13" }
        },

        {
            tag: "attribute", name: "TargetPositionTiltPercent100Ths", id: 0xc, type: "percent100ths",
            access: "R V", conformance: "TL & PA_TL", constraint: "0 to 10000", default: null, quality: "X S P",
            details: "The TargetPositionTiltPercent100ths attribute identifies the position where the Window Covering " +
                     "Tilt will go or is moving to as a percentage.",
            xref: { document: "cluster", section: "5.3.5.14" }
        },

        {
            tag: "attribute", name: "EndProductType", id: 0xd, type: "enum8", access: "R V", conformance: "M",
            constraint: "desc", quality: "F",
            details: "The EndProductType attribute identifies the product type in complement of the main category " +
                     "indicated by the Type attribute. The window covering SHALL set this value to one of the values in " +
                     "the table below.",
            xref: { document: "cluster", section: "5.3.5.16" },

            children: [
                { tag: "datatype", name: "RollerShade", id: 0x0, conformance: "M" },
                { tag: "datatype", name: "RomanShade", id: 0x1, conformance: "M" },
                { tag: "datatype", name: "BalloonShade", id: 0x2, conformance: "M" },
                { tag: "datatype", name: "WovenWood", id: 0x3, conformance: "M" },
                { tag: "datatype", name: "PleatedShade", id: 0x4, conformance: "M" },
                { tag: "datatype", name: "CellularShade", id: 0x5, conformance: "M" },
                { tag: "datatype", name: "LayeredShade", id: 0x6, conformance: "M" },
                { tag: "datatype", name: "LayeredShade2D", id: 0x7, conformance: "M" },
                { tag: "datatype", name: "SheerShade", id: 0x8, conformance: "M" },
                { tag: "datatype", name: "TiltOnlyInteriorBlind", id: 0x9, conformance: "M" },
                { tag: "datatype", name: "InteriorBlind", id: 0xa, conformance: "M" },
                { tag: "datatype", name: "VerticalBlindStripCurtain", id: 0xb, conformance: "M" },
                { tag: "datatype", name: "InteriorVenetianBlind", id: 0xc, conformance: "M" },
                { tag: "datatype", name: "ExteriorVenetianBlind", id: 0xd, conformance: "M" },
                { tag: "datatype", name: "LateralLeftCurtain", id: 0xe, conformance: "M" },
                { tag: "datatype", name: "LateralRightCurtain", id: 0xf, conformance: "M" },
                { tag: "datatype", name: "CentralCurtain", id: 0x10, conformance: "M" },
                { tag: "datatype", name: "RollerShutter", id: 0x11, conformance: "M" },
                { tag: "datatype", name: "ExteriorVerticalScreen", id: 0x12, conformance: "M" },
                { tag: "datatype", name: "AwningTerrace", id: 0x13, conformance: "M" },
                { tag: "datatype", name: "AwningVerticalScreen", id: 0x14, conformance: "M" },
                { tag: "datatype", name: "TiltOnlyPergola", id: 0x15, conformance: "M" },
                { tag: "datatype", name: "SwingingShutter", id: 0x16, conformance: "M" },
                { tag: "datatype", name: "SlidingShutter", id: 0x17, conformance: "M" },
                { tag: "datatype", name: "Unknown", id: 0xff, conformance: "M" }
            ]
        },

        {
            tag: "attribute", name: "CurrentPositionLiftPercent100Ths", id: 0xe, type: "percent100ths",
            access: "R V", conformance: "LF & PA_LF", constraint: "0 to 10000", default: null, quality: "X N P",
            details: "The CurrentPositionLiftPercent100ths attribute identifies the actual position as a percentage with " +
                     "a minimal step of 0.01%. E.g Max 10000 equals 100.00%.",
            xref: { document: "cluster", section: "5.3.5.9" }
        },

        {
            tag: "attribute", name: "CurrentPositionTiltPercent100Ths", id: 0xf, type: "percent100ths",
            access: "R V", conformance: "TL & PA_TL", constraint: "0 to 10000", default: null, quality: "X N P",
            details: "The CurrentPositionTiltPercent100ths attribute identifies the actual position as a percentage with " +
                     "a minimal step of 0.01%. E.g Max 10000 equals 100.00%.",
            xref: { document: "cluster", section: "5.3.5.10" }
        },

        {
            tag: "attribute", name: "InstalledOpenLimitLift", id: 0x10, type: "uint16", access: "R V",
            conformance: "LF & PA_LF", constraint: "0 to 65534", quality: "N",
            details: "The InstalledOpenLimitLift attribute identifies the Open Limit for Lifting the Window Covering " +
                     "whether position (in centimeters) is encoded or timed.",
            xref: { document: "cluster", section: "5.3.5.17" }
        },

        {
            tag: "attribute", name: "InstalledClosedLimitLift", id: 0x11, type: "uint16", access: "R V",
            conformance: "LF & PA_LF", constraint: "0 to 65534", quality: "N",
            details: "The InstalledClosedLimitLift attribute identifies the Closed Limit for Lifting the Window Covering " +
                     "whether position (in centimeters) is encoded or timed.",
            xref: { document: "cluster", section: "5.3.5.18" }
        },

        {
            tag: "attribute", name: "InstalledOpenLimitTilt", id: 0x12, type: "uint16", access: "R V",
            conformance: "TL & PA_TL", constraint: "0 to 65534", quality: "N",
            details: "The InstalledOpenLimitTilt attribute identifies the Open Limit for Tilting the Window Covering " +
                     "whether position (in tenth of a degree) is encoded or timed.",
            xref: { document: "cluster", section: "5.3.5.19" }
        },

        {
            tag: "attribute", name: "InstalledClosedLimitTilt", id: 0x13, type: "uint16", access: "R V",
            conformance: "TL & PA_TL", constraint: "0 to 65534", quality: "N",
            details: "The InstalledClosedLimitTilt attribute identifies the Closed Limit for Tilting the Window Covering " +
                     "whether position (in tenth of a degree) is encoded or timed.",
            xref: { document: "cluster", section: "5.3.5.20" }
        },

        {
            tag: "attribute", name: "VelocityLift", id: 0x14, conformance: "D",
            xref: { document: "cluster", section: "5.3.5" }
        },
        {
            tag: "attribute", name: "AccelerationTimeLift", id: 0x15, conformance: "D",
            xref: { document: "cluster", section: "5.3.5" }
        },
        {
            tag: "attribute", name: "DecelerationTimeLift", id: 0x16, conformance: "D",
            xref: { document: "cluster", section: "5.3.5" }
        },

        {
            tag: "attribute", name: "Mode", id: 0x17, type: "map8", access: "RW VM", conformance: "M",
            quality: "N",
            details: "The Mode attribute allows configuration of the Window Covering, such as: reversing the motor " +
                     "direction, placing the Window Covering into calibration mode, placing the motor into maintenance " +
                     "mode, disabling the network, and disabling status LEDs. See below for details.",
            xref: { document: "cluster", section: "5.3.5.21" },

            children: [
                { tag: "datatype", name: "MotorDirectionReversed", id: 0x1, conformance: "M" },
                { tag: "datatype", name: "CalibrationMode", id: 0x2, conformance: "M" },
                { tag: "datatype", name: "MaintenanceMode", id: 0x4, conformance: "M" },
                { tag: "datatype", name: "LedFeedback", id: 0x8, conformance: "M" }
            ]
        },

        {
            tag: "attribute", name: "IntermediateSetpointsLift", id: 0x18, conformance: "D",
            xref: { document: "cluster", section: "5.3.5" }
        },
        {
            tag: "attribute", name: "IntermediateSetpointsTilt", id: 0x19, conformance: "D",
            xref: { document: "cluster", section: "5.3.5" }
        },

        {
            tag: "attribute", name: "SafetyStatus", id: 0x1a, type: "map16", access: "R V", conformance: "O",
            constraint: "desc", quality: "P",
            details: "The SafetyStatus attribute reflects the state of the safety sensors and the common issues " +
                     "preventing movements. By default for nominal operation all flags are cleared (0). A device might " +
                     "support none, one or several bit flags from this attribute (all optional). See below for details " +
                     "about the meaning of individual bits.",
            xref: { document: "cluster", section: "5.3.5.22" },

            children: [
                {
                    tag: "datatype", name: "TamperDetection", id: 0x1, conformance: "M",
                    description: "Tampering detected on sensors or any other safety equipment. Ex: a device has been forcedly moved without its actuator(s)."
                },
                {
                    tag: "datatype", name: "FailedCommunication", id: 0x2, conformance: "M",
                    description: "Communication failure to sensors or other safety equipment."
                },
                {
                    tag: "datatype", name: "PositionFailure", id: 0x3,
                    description: "Device has failed to reach the desired position. e.g. with Position Aware device, time expired before TargetPosition is reached."
                },
                {
                    tag: "datatype", name: "ThermalProtection", id: 0x10, conformance: "M",
                    description: "Motor(s) and/or electric circuit thermal protection activated."
                },
                {
                    tag: "datatype", name: "ObstacleDetected", id: 0x20, conformance: "M",
                    description: "An obstacle is preventing actuator movement."
                },
                {
                    tag: "datatype", name: "Power", id: 0x40, conformance: "M",
                    description: "Device has power related issue or limitation e.g. device is running w/ the help of a backup battery or power might not be fully available at the moment."
                },
                {
                    tag: "datatype", name: "StopInput", id: 0x80, conformance: "M",
                    description: "Local safety sensor (not a direct obstacle) is preventing movements (e.g. Safety EU Standard EN60335)."
                },
                {
                    tag: "datatype", name: "MotorJammed", id: 0x100, conformance: "M",
                    description: "Mechanical problem related to the motor(s) detected."
                },
                {
                    tag: "datatype", name: "HardwareFailure", id: 0x200, conformance: "M",
                    description: "PCB, fuse and other electrics problems."
                },
                {
                    tag: "datatype", name: "ManualOperation", id: 0x400, conformance: "M",
                    description: "Actuator is manually operated and is preventing actuator movement (e.g. actuator is disengaged/decoupled)."
                },
                {
                    tag: "datatype", name: "Protection", id: 0x800, conformance: "M",
                    description: "Protection is activated."
                }
            ]
        },

        {
            tag: "command", name: "UpOrOpen", id: 0x0, access: "O", conformance: "M", direction: "request",
            response: "status",
            details: "Upon receipt of this command, the Window Covering will adjust its position so the physical " +
                     "lift/slide and tilt is at the maximum open/up position. This will happen as fast as possible. The " +
                     "server attributes SHALL be updated as follows:",
            xref: { document: "cluster", section: "5.3.6.1" }
        },

        {
            tag: "command", name: "DownOrClose", id: 0x1, access: "O", conformance: "M", direction: "request",
            response: "status",
            details: "Upon receipt of this command, the Window Covering will adjust its position so the physical " +
                     "lift/slide and tilt is at the maximum closed/down position. This will happen as fast as possible. " +
                     "The server attributes supported SHALL be updated as follows:",
            xref: { document: "cluster", section: "5.3.6.2" }
        },

        {
            tag: "command", name: "StopMotion", id: 0x2, access: "O", conformance: "M", direction: "request",
            response: "status",
            details: "Upon receipt of this command, the Window Covering will stop any adjusting to the physical tilt and " +
                     "lift/slide that is currently occurring. The server attributes supported SHALL be updated as follows:",
            xref: { document: "cluster", section: "5.3.6.3" }
        },

        {
            tag: "command", name: "GoToLiftValue", id: 0x4, access: "O", conformance: "[LF & ABS]",
            direction: "request", response: "status",
            details: "The GoToLiftValue command SHALL have the following data fields:",
            xref: { document: "cluster", section: "5.3.6.4" },
            children: [
                { tag: "datatype", name: "LiftValue", id: 0x0, type: "uint16", conformance: "M", constraint: "desc" }
            ]
        },

        {
            tag: "command", name: "GoToLiftPercentage", id: 0x5, access: "O", conformance: "LF & PA_LF, [LF]",
            direction: "request", response: "status",
            details: "The GoToLiftPercentage command SHALL have the following data fields:",
            xref: { document: "cluster", section: "5.3.6.5" },

            children: [
                {
                    tag: "datatype", name: "LiftPercentageValue", id: 0x0, type: "percent", conformance: "O.a",
                    constraint: "desc"
                },
                {
                    tag: "datatype", name: "LiftPercent100ThsValue", id: 0x1, type: "percent100ths", conformance: "O.a",
                    constraint: "desc"
                }
            ]
        },

        {
            tag: "command", name: "GoToTiltValue", id: 0x7, access: "O", conformance: "[TL & ABS]",
            direction: "request", response: "status",
            details: "The GoToTiltValue command SHALL have the following data fields:",
            xref: { document: "cluster", section: "5.3.6.6" },
            children: [
                { tag: "datatype", name: "TiltValue", id: 0x0, type: "uint16", conformance: "M", constraint: "desc" }
            ]
        },

        {
            tag: "command", name: "GoToTiltPercentage", id: 0x8, access: "O", conformance: "TL & PA_TL, [TL]",
            direction: "request", response: "status",
            details: "The GoToTiltPercentage command SHALL have the following data fields:",
            xref: { document: "cluster", section: "5.3.6.7" },

            children: [
                {
                    tag: "datatype", name: "TiltPercentageValue", id: 0x0, type: "percent", conformance: "O.a",
                    constraint: "desc"
                },
                {
                    tag: "datatype", name: "TiltPercent100ThsValue", id: 0x1, type: "percent100ths", conformance: "O.a",
                    constraint: "desc"
                }
            ]
        }
    ]
});