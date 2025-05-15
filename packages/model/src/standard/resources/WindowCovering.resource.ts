/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { WindowCovering } from "#index.js";

WindowCovering.patch(
    {
        classification: "application", pics: "WNCV",
        details: "The window covering cluster provides an interface for controlling and adjusting automatic window " +
            "coverings such as drapery motors, automatic shades, curtains and blinds.",
        xref: { document: "cluster", section: "5.3" },

        children: [
            undefined,

            {
                xref: { document: "cluster", section: "5.3.4" },

                children: [
                    {
                        description: "Lift",
                        details: "The Lift feature applies to window coverings that lift up and down (e.g. for a roller shade, Up and " +
                            "Down is lift Open and Close) or slide left to right (e.g. for a sliding curtain, Left and Right is " +
                            "lift Open and Close).",
                        xref: { document: "cluster", section: "5.3.4.1" }
                    },

                    {
                        description: "Tilt",
                        details: "The Tilt feature applies to window coverings with vertical or horizontal strips.",
                        xref: { document: "cluster", section: "5.3.4.2" }
                    },
                    { description: "PositionAwareLift", details: "Position aware lift control is supported." },

                    {
                        description: "AbsolutePosition",

                        details: "The percentage attributes shall indicate the position as a percentage between the " +
                            "InstalledOpenLimits and InstalledClosedLimits attributes of the window covering starting at the open " +
                            "(0.00%)." +
                            "\n" +
                            "As a general rule, absolute positioning (in centimeters or tenth of a degrees) SHOULD NOT be " +
                            "supported for new implementations.",

                        xref: { document: "cluster", section: "5.3.4.4" }
                    },

                    { description: "PositionAwareTilt", details: "Position aware tilt control is supported." }
                ]
            },

            {
                details: "This attribute shall identify the type of window covering.",
                xref: { document: "cluster", section: "5.3.6.1" }
            },
            {
                details: "Indicates the maximum possible encoder position possible (Unit cm, centimeters) to position the " +
                    "height of the window covering lift.",
                xref: { document: "cluster", section: "5.3.6.2" }
            },
            {
                details: "Indicates the maximum possible encoder position possible (Unit 0.1°, tenths of a degree) to position " +
                    "the angle of the window covering tilt.",
                xref: { document: "cluster", section: "5.3.6.3" }
            },
            {
                details: "Indicates the actual lift position (Unit cm, centimeters) of the window covering from the fully-open " +
                    "position.",
                xref: { document: "cluster", section: "5.3.6.4" }
            },
            {
                details: "Indicates the actual tilt position (Unit 0.1°, tenths of a degree) of the window covering from the " +
                    "fully-open position.",
                xref: { document: "cluster", section: "5.3.6.5" }
            },
            {
                details: "Indicates the total number of lift/slide actuations applied to the window covering since the device " +
                    "was installed.",
                xref: { document: "cluster", section: "5.3.6.6" }
            },
            {
                details: "Indicates the total number of tilt actuations applied to the window covering since the device was " +
                    "installed.",
                xref: { document: "cluster", section: "5.3.6.7" }
            },

            {
                details: "This attribute specifies the configuration and status information of the window covering." +
                    "\n" +
                    "To change settings, devices shall write to the Mode attribute. The behavior causing the setting or " +
                    "clearing of each bit is vendor specific.",
                xref: { document: "cluster", section: "5.3.6.8" }
            },

            {
                details: "Indicates the actual position as a percentage from 0% to 100% with 1% default step. This attribute " +
                    "is equal to CurrentPositionLiftPercent100ths attribute divided by 100.",
                xref: { document: "cluster", section: "5.3.6.11" }
            },
            {
                details: "Indicates the actual position as a percentage from 0% to 100% with 1% default step. This attribute " +
                    "is equal to CurrentPositionTiltPercent100ths attribute divided by 100.",
                xref: { document: "cluster", section: "5.3.6.12" }
            },
            {
                details: "Indicates the currently ongoing operations and applies to all type of devices.",
                xref: { document: "cluster", section: "5.3.6.15" }
            },
            {
                details: "Indicates the position where the window covering lift will go or is moving to as a percentage (Unit " +
                    "0.01%).",
                xref: { document: "cluster", section: "5.3.6.13" }
            },
            {
                details: "Indicates the position where the window covering tilt will go or is moving to as a percentage (Unit " +
                    "0.01%).",
                xref: { document: "cluster", section: "5.3.6.14" }
            },

            {
                details: "This attribute SHOULD provide more detail about the product type than can be determined from the " +
                    "main category indicated by the Type attribute." +
                    "\n" +
                    "The table below helps to match the EndProductType attribute with the Type attribute.",
                xref: { document: "cluster", section: "5.3.6.16" }
            },

            {
                details: "Indicates the actual position as a percentage with a minimal step of 0.01%. E.g Max 10000 equals " +
                    "100.00%.",
                xref: { document: "cluster", section: "5.3.6.9" }
            },
            {
                details: "Indicates the actual position as a percentage with a minimal step of 0.01%. E.g Max 10000 equals " +
                    "100.00%.",
                xref: { document: "cluster", section: "5.3.6.10" }
            },
            {
                details: "Indicates the open limit for lifting the window covering whether position (in centimeters) is " +
                    "encoded or timed.",
                xref: { document: "cluster", section: "5.3.6.17" }
            },
            {
                details: "Indicates the closed limit for lifting the window covering whether position (in centimeters) is " +
                    "encoded or timed.",
                xref: { document: "cluster", section: "5.3.6.18" }
            },
            {
                details: "Indicates the open limit for tilting the window covering whether position (in tenth of a degree) is " +
                    "encoded or timed.",
                xref: { document: "cluster", section: "5.3.6.19" }
            },
            {
                details: "Indicates the closed limit for tilting the window covering whether position (in tenth of a degree) " +
                    "is encoded or timed.",
                xref: { document: "cluster", section: "5.3.6.20" }
            },
            { xref: { document: "cluster", section: "5.3.6" } },
            { xref: { document: "cluster", section: "5.3.6" } },
            { xref: { document: "cluster", section: "5.3.6" } },

            {
                details: "The Mode attribute allows configuration of the window covering, such as: reversing the motor " +
                    "direction, placing the window covering into calibration mode, placing the motor into maintenance " +
                    "mode, disabling the network, and disabling status LEDs." +
                    "\n" +
                    "In the case a device does not support or implement a specific mode, e.g. the device has a specific " +
                    "installation method and reversal is not relevant or the device does not include a maintenance mode, " +
                    "any write interaction to the Mode attribute, with an unsupported mode bit or any out of bounds bits " +
                    "set, must be ignored and a response containing the status of CONSTRAINT_ERROR will be returned.",

                xref: { document: "cluster", section: "5.3.6.21" }
            },

            { xref: { document: "cluster", section: "5.3.6" } },
            { xref: { document: "cluster", section: "5.3.6" } },

            {
                details: "The SafetyStatus attribute reflects the state of the safety sensors and the common issues preventing " +
                    "movements. By default for nominal operation all flags are cleared (0). A device might support none, " +
                    "one or several bit flags from this attribute (all optional).",
                xref: { document: "cluster", section: "5.3.6.22" }
            },

            {
                details: "Upon receipt of this command, the window covering will adjust its position so the physical " +
                    "lift/slide and tilt is at the maximum open/up position. This will happen as fast as possible. The " +
                    "server attributes shall be updated as follows:" +
                    "\n" +
                    "if the PositionAware feature is supported:" +
                    "\n" +
                    "  • TargetPositionLiftPercent100ths attribute shall be set to 0.00%." +
                    "\n" +
                    "  • TargetPositionTiltPercent100ths attribute shall be set to 0.00%." +
                    "\n" +
                    "The server positioning attributes will follow the movements, once the movement has successfully " +
                    "finished, the server attributes shall be updated as follows:" +
                    "\n" +
                    "if the PositionAware feature is supported:" +
                    "\n" +
                    "  • CurrentPositionLiftPercent100ths attribute shall be 0.00%." +
                    "\n" +
                    "  • CurrentPositionLiftPercentage attribute shall be 0%." +
                    "\n" +
                    "  • CurrentPositionTiltPercent100ths attribute shall be 0.00%." +
                    "\n" +
                    "  • CurrentPositionTiltPercentage attribute shall be 0%. if the AbsolutePosition feature is " +
                    "    supported:" +
                    "\n" +
                    "  • CurrentPositionLift attribute shall be equal to the InstalledOpenLimitLift attribute." +
                    "\n" +
                    "  • CurrentPositionTilt attribute shall be equal to the InstalledOpenLimitTilt attribute.",

                xref: { document: "cluster", section: "5.3.7.1" }
            },

            {
                details: "Upon receipt of this command, the window covering will adjust its position so the physical " +
                    "lift/slide and tilt is at the maximum closed/down position. This will happen as fast as possible. " +
                    "The server attributes supported shall be updated as follows:" +
                    "\n" +
                    "if the PositionAware feature is supported:" +
                    "\n" +
                    "  • TargetPositionLiftPercent100ths attribute shall be set to 100.00%." +
                    "\n" +
                    "  • TargetPositionTiltPercent100ths attribute shall be set to 100.00%." +
                    "\n" +
                    "The server positioning attributes will follow the movements, once the movement has successfully " +
                    "finished, the server attributes shall be updated as follows:" +
                    "\n" +
                    "if the PositionAware feature is supported:" +
                    "\n" +
                    "  • CurrentPositionLiftPercent100ths attribute shall be 100.00%." +
                    "\n" +
                    "  • CurrentPositionLiftPercentage attribute shall be 100%." +
                    "\n" +
                    "  • CurrentPositionTiltPercent100ths attribute shall be 100.00%." +
                    "\n" +
                    "  • CurrentPositionTiltPercentage attribute shall be 100%. if the AbsolutePosition feature is " +
                    "    supported:" +
                    "\n" +
                    "  • CurrentPositionLift attribute shall be equal to the InstalledClosedLimitLift attribute." +
                    "\n" +
                    "  • CurrentPositionTilt attribute shall be equal to the InstalledClosedLimitTilt attribute.",

                xref: { document: "cluster", section: "5.3.7.2" }
            },

            {
                details: "Upon receipt of this command, the window covering will stop any adjusting to the physical tilt and " +
                    "lift/slide that is currently occurring. The server attributes supported shall be updated as follows:" +
                    "\n" +
                    "  • TargetPositionLiftPercent100ths attribute will be set to CurrentPositionLiftPercent100ths " +
                    "    attribute value." +
                    "\n" +
                    "  • TargetPositionTiltPercent100ths attribute will be set to CurrentPositionTiltPercent100ths " +
                    "    attribute value.",

                xref: { document: "cluster", section: "5.3.7.3" }
            },

            {
                xref: { document: "cluster", section: "5.3.7.4" },
                children: [{
                    details: "This field shall specify the requested physical lift/slide position in unit cm (centimeters).",
                    xref: { document: "cluster", section: "5.3.7.4.1" }
                }]
            },

            {
                details: "Upon receipt of this command, the server will adjust the window covering to the lift/slide " +
                    "percentage specified in the payload of this command." +
                    "\n" +
                    "If the command includes LiftPercent100thsValue, then TargetPositionLiftPercent100ths attribute shall " +
                    "be set to LiftPercent100thsValue. Otherwise the TargetPositionLiftPercent100ths attribute shall be " +
                    "set to LiftPercentageValue * 100." +
                    "\n" +
                    "If a client includes LiftPercent100thsValue in the command, the LiftPercentageValue shall be set to " +
                    "LiftPercent100thsValue / 100, so a legacy server which only supports LiftPercentageValue (not " +
                    "LiftPercent100thsValue) has a value to set the target position." +
                    "\n" +
                    "If the server does not support the PositionAware feature, then a zero percentage shall be treated as " +
                    "a UpOrOpen command and a non-zero percentage shall be treated as an DownOrClose command. If the " +
                    "device is only a tilt control device, then the command SHOULD be ignored and a UNSUPPORTED_COMMAND " +
                    "status SHOULD be returned.",

                xref: { document: "cluster", section: "5.3.7.5" }
            },

            {
                xref: { document: "cluster", section: "5.3.7.6" },
                children: [{
                    details: "This field shall specify the requested physical tilt position in unit 0.1° (tenth of a degrees).",
                    xref: { document: "cluster", section: "5.3.7.6.1" }
                }]
            },

            {
                details: "Upon receipt of this command, the server will adjust the window covering to the tilt percentage " +
                    "specified in the payload of this command." +
                    "\n" +
                    "If the command includes TiltPercent100thsValue, then TargetPositionTiltPercent100ths attribute shall " +
                    "be set to TiltPercent100thsValue. Otherwise the TargetPositionTiltPercent100ths attribute shall be " +
                    "set to TiltPercentageValue * 100." +
                    "\n" +
                    "If a client includes TiltPercent100thsValue in the command, the TiltPercentageValue shall be set to " +
                    "TiltPercent100thsValue / 100, so a legacy server which only supports TiltPercentageValue (not " +
                    "TiltPercent100thsValue) has a value to set the target position." +
                    "\n" +
                    "If the server does not support the PositionAware feature, then a zero percentage shall be treated as " +
                    "a UpOrOpen command and a non-zero percentage shall be treated as an DownOrClose command. If the " +
                    "device is only a tilt control device, then the command SHOULD be ignored and a UNSUPPORTED_COMMAND " +
                    "status SHOULD be returned.",

                xref: { document: "cluster", section: "5.3.7.7" }
            },

            {
                xref: { document: "cluster", section: "5.3.5.1" },

                children: [
                    {
                        description: "Device is operational.",
                        details: "This bit shall indicate whether the window covering is operational for regular use:" +
                            "\n" +
                            "  • 0 = Not Operational" +
                            "\n" +
                            "  • 1 = Operational",
                        xref: { document: "cluster", section: "5.3.5.1.1" }
                    },

                    undefined,

                    {
                        description: "The lift movement is reversed.",
                        details: "This bit shall indicate whether the lift movement is reversed:" +
                            "\n" +
                            "  • 0 = Lift movement is normal" +
                            "\n" +
                            "  • 1 = Lift movement is reversed",
                        xref: { document: "cluster", section: "5.3.5.1.2" }
                    },

                    {
                        description: "Supports the PositionAwareLift feature (PA_LF).",
                        details: "This bit shall indicate whether the window covering supports the PositionAwareLift feature:" +
                            "\n" +
                            "  • 0 = Lift control is not position aware" +
                            "\n" +
                            "  • 1 = Lift control is position aware (PA_LF)",
                        xref: { document: "cluster", section: "5.3.5.1.3" }
                    },

                    {
                        description: "Supports the PositionAwareTilt feature (PA_TL).",
                        details: "This bit shall indicate whether the window covering supports the PositionAwareTilt feature:" +
                            "\n" +
                            "  • 0 = Tilt control is not position aware" +
                            "\n" +
                            "  • 1 = Tilt control is position aware (PA_TL)",
                        xref: { document: "cluster", section: "5.3.5.1.4" }
                    },

                    {
                        description: "Uses an encoder for lift.",

                        details: "This bit shall indicate whether a position aware controlled window covering is employing an encoder " +
                            "for positioning the height of the window covering:" +
                            "\n" +
                            "  • 0 = Timer Controlled" +
                            "\n" +
                            "  • 1 = Encoder Controlled",

                        xref: { document: "cluster", section: "5.3.5.1.5" }
                    },

                    {
                        description: "Uses an encoder for tilt.",

                        details: "This bit shall indicate whether a position aware controlled window covering is employing an encoder " +
                            "for tilting the window covering:" +
                            "\n" +
                            "  • 0 = Timer Controlled" +
                            "\n" +
                            "  • 1 = Encoder Controlled",

                        xref: { document: "cluster", section: "5.3.5.1.6" }
                    }
                ]
            },

            {
                xref: { document: "cluster", section: "5.3.5.2" },

                children: [
                    {
                        description: "Reverse the lift direction.",
                        details: "This bit shall control the motor direction:" +
                            "\n" +
                            "  • 0 = Lift movement is normal" +
                            "\n" +
                            "  • 1 = Lift movement is reversed",
                        xref: { document: "cluster", section: "5.3.5.2.1" }
                    },

                    {
                        description: "Perform a calibration.",
                        details: "This bit shall set the window covering into calibration mode:" +
                            "\n" +
                            "  • 0 = Normal mode" +
                            "\n" +
                            "  • 1 = Calibration mode",
                        xref: { document: "cluster", section: "5.3.5.2.2" }
                    },

                    {
                        description: "Freeze all motions for maintenance.",
                        details: "This bit shall set the window covering into maintenance mode:" +
                            "\n" +
                            "  • 0 = Normal mode" +
                            "\n" +
                            "  • 1 = Maintenance mode",
                        xref: { document: "cluster", section: "5.3.5.2.3" }
                    },

                    {
                        description: "Control the LEDs feedback.",
                        details: "This bit shall control feedback LEDs:" +
                            "\n" +
                            "  • 0 = LEDs are off" +
                            "\n" +
                            "  • 1 = LEDs will display feedback",
                        xref: { document: "cluster", section: "5.3.5.2.4" }
                    }
                ]
            },

            {
                details: "The OperationalStatusBitmap is using several internal operational state fields (composed of 2 bits) " +
                    "following this definition:" +
                    "\n" +
                    "  • 00b = Currently not moving" +
                    "\n" +
                    "  • 01b = Currently opening (e.g. moving from closed to open)." +
                    "\n" +
                    "  • 10b = Currently closing (e.g. moving from open to closed)." +
                    "\n" +
                    "  • 11b = Reserved",

                xref: { document: "cluster", section: "5.3.5.3" },

                children: [
                    {
                        description: "Global operational state.",
                        details: "These bits shall indicate in which direction the covering is currently moving or if it has stopped. " +
                            "Global operational state shall always reflect the overall motion of the device.",
                        xref: { document: "cluster", section: "5.3.5.3.1" }
                    },

                    {
                        description: "Lift operational state.",
                        details: "These bits shall indicate in which direction the covering’s lift is currently moving or if it has " +
                            "stopped.",
                        xref: { document: "cluster", section: "5.3.5.3.2" }
                    },

                    {
                        description: "Tilt operational state.",
                        details: "These bits shall indicate in which direction the covering’s tilt is currently moving or if it has " +
                            "stopped.",
                        xref: { document: "cluster", section: "5.3.5.3.3" }
                    }
                ]
            },

            {
                xref: { document: "cluster", section: "5.3.5.4" },

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
                xref: { document: "cluster", section: "5.3.5.5" },

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
                xref: { document: "cluster", section: "5.3.5.6" },

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
            },

            {
                details: "Values for OperationalStatus attribute fields.",
                children: [
                    { details: "Covering is not moving" },
                    { details: "Covering is moving from closed to open" },
                    { details: "Covering is moving from open to closed" }
                ]
            }
        ]
    }
);
