/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Matter } from "../Matter.js";

Matter.children.push({
    tag: "cluster", id: 0x0102, name: "WindowCovering",
    classification: "application", description: "Window Covering",
    children: [
        {
            tag: "attribute", id: 0x0000, name: "Type",
            access: "R V", conformance: "M", constraint: "desc", default: undefined, quality: "F", type: "enum8",
            details: "The Type attribute identifies the type of window covering being " +
                     "controlled by this endpoint and SHALL be set to one of the non-" +
                     "reserved values in the table below",
            xref: { document: "cluster", section: "5.3.5.1" }
        },

        {
            tag: "attribute", id: 0x0001, name: "PhysicalClosedLimitLift",
            access: "R V", conformance: "[LF & P, A_LF & ABS]", default: undefined, quality: "F", type: "uint16",
            details: "The PhysicalClosedLimitLift attribute identifies the maximum possible " +
                     "encoder position possible (in centimeters) to position the height of " +
                     "the window covering Lift",
            xref: { document: "cluster", section: "5.3.5.2" }
        },

        {
            tag: "attribute", id: 0x0002, name: "PhysicalClosedLimitTilt",
            access: "R V", conformance: "[TL & P, A_TL & ABS]", default: undefined, quality: "F", type: "uint16",
            details: "The PhysicalClosedLimitTilt attribute identifies the maximum possible " +
                     "encoder position possible (tenth of a degrees) to position the angle " +
                     "of the window covering Tilt",
            xref: { document: "cluster", section: "5.3.5.3" }
        },

        {
            tag: "attribute", id: 0x0003, name: "CurrentPositionLift1",
            access: "R V", conformance: "[LF & P, A_LF & ABS]", constraint: "InstalledOpenLimitLift to InstalledClosedLimitLift", default: undefined, quality: "X N", type: "uint16",
            xref: { document: "cluster", section: "5.3.5" }
        },

        {
            tag: "attribute", id: 0x0004, name: "CurrentPositionTilt1",
            access: "R V", conformance: "[TL & P, A_TL & ABS]", constraint: "InstalledOpenLimitTilt to InstalledClosedLimitTilt", default: undefined, quality: "X N", type: "uint16",
            xref: { document: "cluster", section: "5.3.5" }
        },

        {
            tag: "attribute", id: 0x0005, name: "NumberOfActuationsLift",
            access: "R V", conformance: "[LF]", default: undefined, quality: "N", type: "uint16",
            details: "The NumberOfActuationsLift attribute identifies the total number of " +
                     "lift/slide actuations applied to the Window Covering since the device " +
                     "was installed",
            xref: { document: "cluster", section: "5.3.5.6" }
        },

        {
            tag: "attribute", id: 0x0006, name: "NumberOfActuationsTilt",
            access: "R V", conformance: "[TL]", default: undefined, quality: "N", type: "uint16",
            details: "The NumberOfActuationsTilt attribute identifies the total number of " +
                     "tilt actuations applied to the Window Covering since the device was " +
                     "installed",
            xref: { document: "cluster", section: "5.3.5.7" }
        },

        {
            tag: "attribute", id: 0x0007, name: "ConfigStatus",
            access: "R V", conformance: "M", constraint: "desc", default: 3, quality: "N", type: "map8",
            details: "The ConfigStatus attribute makes configuration and status information " +
                     "available. To change settings, devices SHALL write to the Mode " +
                     "attribute of the Window Covering Settings Attribute Set. The behavior " +
                     "causing the setting or clearing of each bit is vendor specific. See " +
                     "table below for details on each bit",
            xref: { document: "cluster", section: "5.3.5.8" }
        },

        {
            tag: "attribute", id: 0x0008, name: "CurrentPositionLiftPercentage1",
            access: "R V", conformance: "[LF & P, A_LF]", constraint: "0 to 100", default: undefined, quality: "X N S P", type: "percent",
            xref: { document: "cluster", section: "5.3.5" }
        },

        {
            tag: "attribute", id: 0x0009, name: "CurrentPositionTiltPercentage1",
            access: "R V", conformance: "[TL & P, A_TL]", constraint: "0 to 100", default: undefined, quality: "X N S P", type: "percent",
            xref: { document: "cluster", section: "5.3.5" }
        },

        {
            tag: "attribute", id: 0x000a, name: "OperationalStatus",
            access: "R V", conformance: "M", default: undefined, quality: "P", type: "map8",
            details: "The OperationalStatus attribute keeps track of currently ongoing " +
                     "operations and applies to all type of devices. See below for details " +
                     "about the meaning of individual bits",
            xref: { document: "cluster", section: "5.3.5.15" }
        },

        {
            tag: "attribute", id: 0x000b, name: "TargetPositionLiftPercent100Ths2",
            access: "R V", conformance: "LF & P, A_LF", constraint: "0 to 10000", default: undefined, quality: "X S P", type: "percent100ths",
            xref: { document: "cluster", section: "5.3.5" }
        },

        {
            tag: "attribute", id: 0x000c, name: "TargetPositionTiltPercent100Ths2",
            access: "R V", conformance: "TL & P, A_TL", constraint: "0 to 10000", default: undefined, quality: "X S P", type: "percent100ths",
            xref: { document: "cluster", section: "5.3.5" }
        },

        {
            tag: "attribute", id: 0x000d, name: "EndProductType",
            access: "R V", conformance: "M", constraint: "desc", default: undefined, quality: "F", type: "enum8",
            details: "The EndProductType attribute identifies the product type in complement" +
                     " of the main category indicated by the Type attribute. The window " +
                     "covering SHALL set this value to one of the values in the table below",
            xref: { document: "cluster", section: "5.3.5.16" }
        },

        {
            tag: "attribute", id: 0x000e, name: "CurrentPositionLiftPercent100Ths1",
            access: "R V", conformance: "LF & P, A_LF", constraint: "0 to 10000", default: undefined, quality: "X N P", type: "percent100ths",
            xref: { document: "cluster", section: "5.3.5" }
        },

        {
            tag: "attribute", id: 0x000f, name: "CurrentPositionTiltPercent100Ths1",
            access: "R V", conformance: "TL & P, A_TL", constraint: "0 to 10000", default: undefined, quality: "X N P", type: "percent100ths",
            xref: { document: "cluster", section: "5.3.5" }
        },

        {
            tag: "attribute", id: 0x0010, name: "InstalledOpenLimitLift",
            access: "R V", conformance: "LF & P, A_LF & ABS", constraint: "0 to 65534", default: undefined, quality: "N", type: "uint16",
            details: "The InstalledOpenLimitLift attribute identifies the Open Limit for " +
                     "Lifting the Window Covering whether position (in centimeters) is " +
                     "encoded or timed",
            xref: { document: "cluster", section: "5.3.5.17" }
        },

        {
            tag: "attribute", id: 0x0011, name: "InstalledClosedLimitLift",
            access: "R V", conformance: "LF & P, A_LF & ABS", constraint: "0 to 65534", default: 65535, quality: "N", type: "uint16",
            details: "The InstalledClosedLimitLift attribute identifies the Closed Limit for" +
                     " Lifting the Window Covering whether position (in centimeters) is " +
                     "encoded or timed",
            xref: { document: "cluster", section: "5.3.5.18" }
        },

        {
            tag: "attribute", id: 0x0012, name: "InstalledOpenLimitTilt",
            access: "R V", conformance: "TL & P, A_TL & ABS", constraint: "0 to 65534", default: undefined, quality: "N", type: "uint16",
            details: "The InstalledOpenLimitTilt attribute identifies the Open Limit for " +
                     "Tilting the Window Covering whether position (in tenth of a degree) is" +
                     " encoded or timed",
            xref: { document: "cluster", section: "5.3.5.19" }
        },

        {
            tag: "attribute", id: 0x0013, name: "InstalledClosedLimitTilt",
            access: "R V", conformance: "TL & P, A_TL & ABS", constraint: "0 to 65534", default: 65535, quality: "N", type: "uint16",
            details: "The InstalledClosedLimitTilt attribute identifies the Closed Limit for" +
                     " Tilting the Window Covering whether position (in tenth of a degree) " +
                     "is encoded or timed",
            xref: { document: "cluster", section: "5.3.5.20" }
        },

        {
            tag: "attribute", id: 0x0017, name: "Mode",
            access: "RW VM", conformance: "M", default: undefined, quality: "N", type: "map8",
            details: "The Mode attribute allows configuration of the Window Covering, such " +
                     "as: reversing the motor direction, placing the Window Covering into " +
                     "calibration mode, placing the motor into maintenance mode, disabling " +
                     "the network, and disabling status LEDs. See below for details",
            xref: { document: "cluster", section: "5.3.5.21" }
        },

        {
            tag: "attribute", id: 0x001a, name: "SafetyStatus",
            access: "R V", conformance: "O", constraint: "desc", default: undefined, quality: "P", type: "map16",
            details: "The SafetyStatus attribute reflects the state of the safety sensors " +
                     "and the common issues preventing movements. By default for nominal " +
                     "operation all flags are cleared (0). A device might support none, one " +
                     "or several bit flags from this attribute (all optional). See below for" +
                     " details about the meaning of individual bits",
            xref: { document: "cluster", section: "5.3.5.22" }
        },

        {
            tag: "attribute", id: 0x0000, name: "WcType",
            conformance: "M", default: undefined, type: "Type"
        },

        {
            tag: "command", id: 0x0000, name: "UpOrOpen",
            access: "O", conformance: "M", direction: "request", response: "status",
            details: "Upon receipt of this command, the Window Covering will adjust its " +
                     "position so the physical lift/slide and tilt is at the maximum open/up" +
                     " position. This will happen as fast as possible. The server attributes" +
                     " SHALL be updated as follows",
            xref: { document: "cluster", section: "5.3.6.1" }
        },

        {
            tag: "command", id: 0x0001, name: "DownOrClose",
            access: "O", conformance: "M", direction: "request", response: "status",
            details: "Upon receipt of this command, the Window Covering will adjust its " +
                     "position so the physical lift/slide and tilt is at the maximum closed/" +
                     "down position. This will happen as fast as possible. The server " +
                     "attributes supported SHALL be updated as follows",
            xref: { document: "cluster", section: "5.3.6.2" }
        },

        {
            tag: "command", id: 0x0002, name: "StopMotion",
            access: "O", conformance: "M", direction: "request", response: "status",
            details: "Upon receipt of this command, the Window Covering will stop any " +
                     "adjusting to the physical tilt and lift/slide that is currently " +
                     "occurring. The server attributes supported SHALL be updated as follows",
            xref: { document: "cluster", section: "5.3.6.3" }
        },

        {
            tag: "command", id: 0x0004, name: "GoToLiftValue",
            access: "O", conformance: "[LF & ABS]", direction: "request", response: "status",
            details: "The GoToLiftValue command SHALL have the following data fields",
            xref: { document: "cluster", section: "5.3.6.4" },
            children: [
                {
                    tag: "datatype", name: "LiftValue",
                    conformance: "M", type: "uint16"
                }
            ]
        },

        {
            tag: "command", id: 0x0005, name: "GoToLiftPercentage",
            access: "O", conformance: "LF & P, A_LF, [LF]", direction: "request", response: "status",
            details: "The GoToLiftPercentage command SHALL have the following data fields",
            xref: { document: "cluster", section: "5.3.6.5" },
            children: [
                {
                    tag: "datatype", name: "LiftPercent100ThsValue",
                    conformance: "M", type: "percent100ths"
                }
            ]
        },

        {
            tag: "command", id: 0x0007, name: "GoToTiltValue",
            access: "O", conformance: "[TL & ABS]", direction: "request", response: "status",
            details: "The GoToTiltValue command SHALL have the following data fields",
            xref: { document: "cluster", section: "5.3.6.6" },
            children: [
                {
                    tag: "datatype", name: "TiltValue",
                    conformance: "M", type: "uint16"
                }
            ]
        },

        {
            tag: "command", id: 0x0008, name: "GoToTiltPercentage",
            access: "O", conformance: "TL & P, A_TL, [TL]", direction: "request", response: "status",
            details: "The GoToTiltPercentage command SHALL have the following data fields",
            xref: { document: "cluster", section: "5.3.6.7" },
            children: [
                {
                    tag: "datatype", name: "TiltPercent100ThsValue",
                    conformance: "M", type: "percent100ths"
                }
            ]
        },

        {
            tag: "datatype", name: "Type",
            conformance: "M", type: "enum8",
            children: [
                {
                    tag: "datatype", id: 0x0000, name: "RollerShade",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0001, name: "RollerShade2Motor",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0002, name: "RollerShadeExterior",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0003, name: "RollerShadeExterior2Motor",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0004, name: "Drapery",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0005, name: "Awning",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0006, name: "Shutter",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0007, name: "TiltBlindTiltOnly",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0008, name: "TiltBlindLiftAndTilt",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0009, name: "ProjectorScreen",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x00ff, name: "Unknown",
                    conformance: "M"
                }
            ]
        },

        {
            tag: "datatype", name: "EndProductType",
            conformance: "M", type: "enum8",
            children: [
                {
                    tag: "datatype", id: 0x0000, name: "RollerShade",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0001, name: "RomanShade",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0002, name: "BalloonShade",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0003, name: "WovenWood",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0004, name: "PleatedShade",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0005, name: "CellularShade",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0006, name: "LayeredShade",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0007, name: "LayeredShade2D",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0008, name: "SheerShade",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0009, name: "TiltOnlyInteriorBlind",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x000a, name: "InteriorBlind",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x000b, name: "VerticalBlindStripCurtain",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x000c, name: "InteriorVenetianBlind",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x000d, name: "ExteriorVenetianBlind",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x000e, name: "LateralLeftCurtain",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x000f, name: "LateralRightCurtain",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0010, name: "CentralCurtain",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0011, name: "RollerShutter",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0012, name: "ExteriorVerticalScreen",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0013, name: "AwningTerracePatio",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0014, name: "AwningVerticalScreen",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0015, name: "TiltOnlyPergola",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0016, name: "SwingingShutter",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0017, name: "SlidingShutter",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x00ff, name: "Unknown",
                    conformance: "M"
                }
            ]
        },

        {
            tag: "datatype", name: "Mode",
            conformance: "M", type: "map8",
            children: [
                {
                    tag: "datatype", id: 0x0001, name: "MotorDirectionReversed",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0002, name: "CalibrationMode",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0004, name: "MaintenanceMode",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0008, name: "LedFeedback",
                    conformance: "M"
                }
            ]
        },

        {
            tag: "datatype", name: "OperationalStatus",
            conformance: "M", type: "map8",
            children: [
                {
                    tag: "datatype", id: 0x0003, name: "Global",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x000c, name: "Lift",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0030, name: "Tilt",
                    conformance: "M"
                }
            ]
        },

        {
            tag: "datatype", name: "ConfigStatus",
            conformance: "M", type: "map8",
            children: [
                {
                    tag: "datatype", id: 0x0001, name: "Operational",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0002, name: "OnlineReserved",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0004, name: "LiftMovementReversed",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0008, name: "LiftPositionAware",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0010, name: "TiltPositionAware",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0020, name: "LiftEncoderControlled",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0040, name: "TiltEncoderControlled",
                    conformance: "M"
                }
            ]
        },

        {
            tag: "datatype", name: "SafetyStatus",
            conformance: "M", type: "map16",
            children: [
                {
                    tag: "datatype", id: 0x0001, name: "RemoteLockout",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0002, name: "TamperDetection",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0004, name: "FailedCommunication",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0008, name: "PositionFailure",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0010, name: "ThermalProtection",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0020, name: "ObstacleDetected",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0040, name: "Power",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0080, name: "StopInput",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0100, name: "MotorJammed",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0200, name: "HardwareFailure",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0400, name: "ManualOperation",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0800, name: "Protection",
                    conformance: "M"
                }
            ]
        },

        {
            tag: "datatype", name: "WindowCoveringFeature",
            conformance: "M", type: "map32",
            children: [
                {
                    tag: "datatype", id: 0x0001, name: "Lift",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0002, name: "Tilt",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0004, name: "PositionAwareLift",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0008, name: "AbsolutePosition",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0010, name: "PositionAwareTilt",
                    conformance: "M"
                }
            ]
        }
    ]
});
