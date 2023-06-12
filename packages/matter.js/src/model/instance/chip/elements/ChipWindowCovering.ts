/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ChipMatter } from "../index.js";
import { ClusterElement, AttributeElement, CommandElement, DatatypeElement } from "../../../index.js";

ChipMatter.children!.push(ClusterElement({
    id: 0x0102, name: "WindowCovering",
    description: "Window Covering",
    details: "Provides an interface for controlling and adjusting automatic window coverings.",
    children: [
        AttributeElement({
            id: 0x0000, name: "WcType", base: "Type",
            access: "R", conformance: "M", default: 0
        }),

        AttributeElement({
            id: 0x0001, name: "WcPhysicalClosedLimitLift", base: "uint16",
            access: "R", conformance: "O", default: 0
        }),

        AttributeElement({
            id: 0x0002, name: "WcPhysicalClosedLimitTilt", base: "uint16",
            access: "R", conformance: "O", default: 0
        }),

        AttributeElement({
            id: 0x0003, name: "WcCurrentPositionLift", base: "uint16",
            access: "R", conformance: "O", quality: "X"
        }),

        AttributeElement({
            id: 0x0004, name: "WcCurrentPositionTilt", base: "uint16",
            access: "R", conformance: "O", quality: "X"
        }),

        AttributeElement({
            id: 0x0005, name: "WcNumberOfActuationsLift", base: "uint16",
            access: "R", conformance: "O", default: 0
        }),

        AttributeElement({
            id: 0x0006, name: "WcNumberOfActuationsTilt", base: "uint16",
            access: "R", conformance: "O", default: 0
        }),

        AttributeElement({
            id: 0x0007, name: "WcConfigStatus", base: "ConfigStatus",
            access: "R", conformance: "M", default: 3
        }),

        AttributeElement({
            id: 0x0008, name: "WcCurrentPositionLiftPercentage", base: "percent",
            access: "R", conformance: "O", quality: "X P"
        }),

        AttributeElement({
            id: 0x0009, name: "WcCurrentPositionTiltPercentage", base: "percent",
            access: "R", conformance: "O", quality: "X P"
        }),

        AttributeElement({
            id: 0x000a, name: "WcOperationalStatus", base: "OperationalStatus",
            access: "R", conformance: "M", default: 0, quality: "P"
        }),

        AttributeElement({
            id: 0x000b, name: "WcTargetPositionLiftPercent100Ths", base: "percent100ths",
            access: "R", conformance: "O", quality: "X P"
        }),

        AttributeElement({
            id: 0x000c, name: "WcTargetPositionTiltPercent100Ths", base: "percent100ths",
            access: "R", conformance: "O", quality: "X P"
        }),

        AttributeElement({
            id: 0x000d, name: "WcEndProductType", base: "EndProductType",
            access: "R", conformance: "M", default: 0
        }),

        AttributeElement({
            id: 0x000e, name: "WcCurrentPositionLiftPercent100Ths", base: "percent100ths",
            access: "R", conformance: "O", quality: "X P"
        }),

        AttributeElement({
            id: 0x000f, name: "WcCurrentPositionTiltPercent100Ths", base: "percent100ths",
            access: "R", conformance: "O", quality: "X P"
        }),

        AttributeElement({
            id: 0x0010, name: "WcInstalledOpenLimitLift", base: "uint16",
            access: "R", conformance: "O", default: 0
        }),

        AttributeElement({
            id: 0x0011, name: "WcInstalledClosedLimitLift", base: "uint16",
            access: "R", conformance: "O", default: 65535
        }),

        AttributeElement({
            id: 0x0012, name: "WcInstalledOpenLimitTilt", base: "uint16",
            access: "R", conformance: "O", default: 0
        }),

        AttributeElement({
            id: 0x0013, name: "WcInstalledClosedLimitTilt", base: "uint16",
            access: "R", conformance: "O", default: 65535
        }),

        AttributeElement({
            id: 0x0017, name: "WcMode", base: "Mode",
            access: "W VM", conformance: "M", default: 0
        }),

        AttributeElement({
            id: 0x001a, name: "WcSafetyStatus", base: "SafetyStatus",
            access: "R", conformance: "O", default: 0, quality: "P"
        }),

        CommandElement({
            id: 0x0000, name: "UpOrOpen",
            access: "R", conformance: "M", direction: "request"
        }),

        CommandElement({
            id: 0x0001, name: "DownOrClose",
            access: "R", conformance: "M", direction: "request"
        }),

        CommandElement({
            id: 0x0002, name: "StopMotion",
            access: "R", conformance: "M", direction: "request"
        }),

        CommandElement({
            id: 0x0004, name: "GoToLiftValue",
            access: "R", conformance: "O", direction: "request",
            children: [
                DatatypeElement({
                    name: "LiftValue", base: "uint16",
                    access: "R", conformance: "M"
                })
            ]
        }),

        CommandElement({
            id: 0x0005, name: "GoToLiftPercentage",
            access: "R", conformance: "O", direction: "request",
            children: [
                DatatypeElement({
                    name: "LiftPercent100ThsValue", base: "percent100ths",
                    access: "R", conformance: "M"
                })
            ]
        }),

        CommandElement({
            id: 0x0007, name: "GoToTiltValue",
            access: "R", conformance: "O", direction: "request",
            children: [
                DatatypeElement({
                    name: "TiltValue", base: "uint16",
                    access: "R", conformance: "M"
                })
            ]
        }),

        CommandElement({
            id: 0x0008, name: "GoToTiltPercentage",
            access: "R", conformance: "O", direction: "request",
            children: [
                DatatypeElement({
                    name: "TiltPercent100ThsValue", base: "percent100ths",
                    access: "R", conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "Type", base: "enum8",
            access: "R", conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "RollerShade",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0001, name: "RollerShade2Motor",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0002, name: "RollerShadeExterior",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0003, name: "RollerShadeExterior2Motor",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0004, name: "Drapery",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0005, name: "Awning",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0006, name: "Shutter",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0007, name: "TiltBlindTiltOnly",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0008, name: "TiltBlindLiftAndTilt",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0009, name: "ProjectorScreen",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x00ff, name: "Unknown",
                    access: "R", conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "EndProductType", base: "enum8",
            access: "R", conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "RollerShade",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0001, name: "RomanShade",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0002, name: "BalloonShade",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0003, name: "WovenWood",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0004, name: "PleatedShade",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0005, name: "CellularShade",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0006, name: "LayeredShade",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0007, name: "LayeredShade2D",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0008, name: "SheerShade",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0009, name: "TiltOnlyInteriorBlind",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x000a, name: "InteriorBlind",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x000b, name: "VerticalBlindStripCurtain",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x000c, name: "InteriorVenetianBlind",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x000d, name: "ExteriorVenetianBlind",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x000e, name: "LateralLeftCurtain",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x000f, name: "LateralRightCurtain",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0010, name: "CentralCurtain",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0011, name: "RollerShutter",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0012, name: "ExteriorVerticalScreen",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0013, name: "AwningTerracePatio",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0014, name: "AwningVerticalScreen",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0015, name: "TiltOnlyPergola",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0016, name: "SwingingShutter",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0017, name: "SlidingShutter",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x00ff, name: "Unknown",
                    access: "R", conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "Mode", base: "map8",
            access: "R", conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0001, name: "MotorDirectionReversed",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0002, name: "CalibrationMode",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0004, name: "MaintenanceMode",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0008, name: "LedFeedback",
                    access: "R", conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "OperationalStatus", base: "map8",
            access: "R", conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0003, name: "Global",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x000c, name: "Lift",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0030, name: "Tilt",
                    access: "R", conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "ConfigStatus", base: "map8",
            access: "R", conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0001, name: "Operational",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0002, name: "OnlineReserved",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0004, name: "LiftMovementReversed",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0008, name: "LiftPositionAware",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0010, name: "TiltPositionAware",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0020, name: "LiftEncoderControlled",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0040, name: "TiltEncoderControlled",
                    access: "R", conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "SafetyStatus", base: "map16",
            access: "R", conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0001, name: "RemoteLockout",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0002, name: "TamperDetection",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0004, name: "FailedCommunication",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0008, name: "PositionFailure",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0010, name: "ThermalProtection",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0020, name: "ObstacleDetected",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0040, name: "Power",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0080, name: "StopInput",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0100, name: "MotorJammed",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0200, name: "HardwareFailure",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0400, name: "ManualOperation",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0800, name: "Protection",
                    access: "R", conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "WindowCoveringFeature", base: "map32",
            access: "R", conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0001, name: "Lift",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0002, name: "Tilt",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0004, name: "PositionAwareLift",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0008, name: "AbsolutePosition",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0010, name: "PositionAwareTilt",
                    access: "R", conformance: "M"
                })
            ]
        })
    ]
}));
