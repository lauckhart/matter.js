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
            default: 0
        }),

        AttributeElement({
            id: 0x0001, name: "WcPhysicalClosedLimitLift", base: "uint16",
            conformance: "O", default: 0
        }),

        AttributeElement({
            id: 0x0002, name: "WcPhysicalClosedLimitTilt", base: "uint16",
            conformance: "O", default: 0
        }),

        AttributeElement({
            id: 0x0003, name: "WcCurrentPositionLift", base: "uint16",
            conformance: "O", quality: "X"
        }),

        AttributeElement({
            id: 0x0004, name: "WcCurrentPositionTilt", base: "uint16",
            conformance: "O", quality: "X"
        }),

        AttributeElement({
            id: 0x0005, name: "WcNumberOfActuationsLift", base: "uint16",
            conformance: "O", default: 0
        }),

        AttributeElement({
            id: 0x0006, name: "WcNumberOfActuationsTilt", base: "uint16",
            conformance: "O", default: 0
        }),

        AttributeElement({
            id: 0x0007, name: "WcConfigStatus", base: "ConfigStatus",
            default: 3
        }),

        AttributeElement({
            id: 0x0008, name: "WcCurrentPositionLiftPercentage", base: "percent",
            conformance: "O", quality: "X P"
        }),

        AttributeElement({
            id: 0x0009, name: "WcCurrentPositionTiltPercentage", base: "percent",
            conformance: "O", quality: "X P"
        }),

        AttributeElement({
            id: 0x000a, name: "WcOperationalStatus", base: "OperationalStatus",
            default: 0, quality: "P"
        }),

        AttributeElement({
            id: 0x000b, name: "WcTargetPositionLiftPercent100Ths", base: "percent100ths",
            conformance: "O", quality: "X P"
        }),

        AttributeElement({
            id: 0x000c, name: "WcTargetPositionTiltPercent100Ths", base: "percent100ths",
            conformance: "O", quality: "X P"
        }),

        AttributeElement({
            id: 0x000d, name: "WcEndProductType", base: "EndProductType",
            default: 0
        }),

        AttributeElement({
            id: 0x000e, name: "WcCurrentPositionLiftPercent100Ths", base: "percent100ths",
            conformance: "O", quality: "X P"
        }),

        AttributeElement({
            id: 0x000f, name: "WcCurrentPositionTiltPercent100Ths", base: "percent100ths",
            conformance: "O", quality: "X P"
        }),

        AttributeElement({
            id: 0x0010, name: "WcInstalledOpenLimitLift", base: "uint16",
            conformance: "O", default: 0
        }),

        AttributeElement({
            id: 0x0011, name: "WcInstalledClosedLimitLift", base: "uint16",
            conformance: "O", default: 65535
        }),

        AttributeElement({
            id: 0x0012, name: "WcInstalledOpenLimitTilt", base: "uint16",
            conformance: "O", default: 0
        }),

        AttributeElement({
            id: 0x0013, name: "WcInstalledClosedLimitTilt", base: "uint16",
            conformance: "O", default: 65535
        }),

        AttributeElement({
            id: 0x0017, name: "WcMode", base: "Mode",
            access: "RW VM", default: 0
        }),

        AttributeElement({
            id: 0x001a, name: "WcSafetyStatus", base: "SafetyStatus",
            conformance: "O", default: 0, quality: "P"
        }),

        CommandElement({
            id: 0x0000, name: "UpOrOpen",
            direction: "request"
        }),

        CommandElement({
            id: 0x0001, name: "DownOrClose",
            direction: "request"
        }),

        CommandElement({
            id: 0x0002, name: "StopMotion",
            direction: "request"
        }),

        CommandElement({
            id: 0x0004, name: "GoToLiftValue",
            conformance: "O", direction: "request",
            children: [
                DatatypeElement({
                    name: "LiftValue", base: "uint16"
                })
            ]
        }),

        CommandElement({
            id: 0x0005, name: "GoToLiftPercentage",
            conformance: "O", direction: "request",
            children: [
                DatatypeElement({
                    name: "LiftPercent100ThsValue", base: "percent100ths"
                })
            ]
        }),

        CommandElement({
            id: 0x0007, name: "GoToTiltValue",
            conformance: "O", direction: "request",
            children: [
                DatatypeElement({
                    name: "TiltValue", base: "uint16"
                })
            ]
        }),

        CommandElement({
            id: 0x0008, name: "GoToTiltPercentage",
            conformance: "O", direction: "request",
            children: [
                DatatypeElement({
                    name: "TiltPercent100ThsValue", base: "percent100ths"
                })
            ]
        }),

        DatatypeElement({
            name: "Type", base: "enum8",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "RollerShade"
                }),

                DatatypeElement({
                    id: 0x0001, name: "RollerShade2Motor"
                }),

                DatatypeElement({
                    id: 0x0002, name: "RollerShadeExterior"
                }),

                DatatypeElement({
                    id: 0x0003, name: "RollerShadeExterior2Motor"
                }),

                DatatypeElement({
                    id: 0x0004, name: "Drapery"
                }),

                DatatypeElement({
                    id: 0x0005, name: "Awning"
                }),

                DatatypeElement({
                    id: 0x0006, name: "Shutter"
                }),

                DatatypeElement({
                    id: 0x0007, name: "TiltBlindTiltOnly"
                }),

                DatatypeElement({
                    id: 0x0008, name: "TiltBlindLiftAndTilt"
                }),

                DatatypeElement({
                    id: 0x0009, name: "ProjectorScreen"
                }),

                DatatypeElement({
                    id: 0x00ff, name: "Unknown"
                })
            ]
        }),

        DatatypeElement({
            name: "EndProductType", base: "enum8",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "RollerShade"
                }),

                DatatypeElement({
                    id: 0x0001, name: "RomanShade"
                }),

                DatatypeElement({
                    id: 0x0002, name: "BalloonShade"
                }),

                DatatypeElement({
                    id: 0x0003, name: "WovenWood"
                }),

                DatatypeElement({
                    id: 0x0004, name: "PleatedShade"
                }),

                DatatypeElement({
                    id: 0x0005, name: "CellularShade"
                }),

                DatatypeElement({
                    id: 0x0006, name: "LayeredShade"
                }),

                DatatypeElement({
                    id: 0x0007, name: "LayeredShade2D"
                }),

                DatatypeElement({
                    id: 0x0008, name: "SheerShade"
                }),

                DatatypeElement({
                    id: 0x0009, name: "TiltOnlyInteriorBlind"
                }),

                DatatypeElement({
                    id: 0x000a, name: "InteriorBlind"
                }),

                DatatypeElement({
                    id: 0x000b, name: "VerticalBlindStripCurtain"
                }),

                DatatypeElement({
                    id: 0x000c, name: "InteriorVenetianBlind"
                }),

                DatatypeElement({
                    id: 0x000d, name: "ExteriorVenetianBlind"
                }),

                DatatypeElement({
                    id: 0x000e, name: "LateralLeftCurtain"
                }),

                DatatypeElement({
                    id: 0x000f, name: "LateralRightCurtain"
                }),

                DatatypeElement({
                    id: 0x0010, name: "CentralCurtain"
                }),

                DatatypeElement({
                    id: 0x0011, name: "RollerShutter"
                }),

                DatatypeElement({
                    id: 0x0012, name: "ExteriorVerticalScreen"
                }),

                DatatypeElement({
                    id: 0x0013, name: "AwningTerracePatio"
                }),

                DatatypeElement({
                    id: 0x0014, name: "AwningVerticalScreen"
                }),

                DatatypeElement({
                    id: 0x0015, name: "TiltOnlyPergola"
                }),

                DatatypeElement({
                    id: 0x0016, name: "SwingingShutter"
                }),

                DatatypeElement({
                    id: 0x0017, name: "SlidingShutter"
                }),

                DatatypeElement({
                    id: 0x00ff, name: "Unknown"
                })
            ]
        }),

        DatatypeElement({
            name: "Mode", base: "map8",
            children: [
                DatatypeElement({
                    id: 0x0001, name: "MotorDirectionReversed"
                }),

                DatatypeElement({
                    id: 0x0002, name: "CalibrationMode"
                }),

                DatatypeElement({
                    id: 0x0004, name: "MaintenanceMode"
                }),

                DatatypeElement({
                    id: 0x0008, name: "LedFeedback"
                })
            ]
        }),

        DatatypeElement({
            name: "OperationalStatus", base: "map8",
            children: [
                DatatypeElement({
                    id: 0x0003, name: "Global"
                }),

                DatatypeElement({
                    id: 0x000c, name: "Lift"
                }),

                DatatypeElement({
                    id: 0x0030, name: "Tilt"
                })
            ]
        }),

        DatatypeElement({
            name: "ConfigStatus", base: "map8",
            children: [
                DatatypeElement({
                    id: 0x0001, name: "Operational"
                }),

                DatatypeElement({
                    id: 0x0002, name: "OnlineReserved"
                }),

                DatatypeElement({
                    id: 0x0004, name: "LiftMovementReversed"
                }),

                DatatypeElement({
                    id: 0x0008, name: "LiftPositionAware"
                }),

                DatatypeElement({
                    id: 0x0010, name: "TiltPositionAware"
                }),

                DatatypeElement({
                    id: 0x0020, name: "LiftEncoderControlled"
                }),

                DatatypeElement({
                    id: 0x0040, name: "TiltEncoderControlled"
                })
            ]
        }),

        DatatypeElement({
            name: "SafetyStatus", base: "map16",
            children: [
                DatatypeElement({
                    id: 0x0001, name: "RemoteLockout"
                }),

                DatatypeElement({
                    id: 0x0002, name: "TamperDetection"
                }),

                DatatypeElement({
                    id: 0x0004, name: "FailedCommunication"
                }),

                DatatypeElement({
                    id: 0x0008, name: "PositionFailure"
                }),

                DatatypeElement({
                    id: 0x0010, name: "ThermalProtection"
                }),

                DatatypeElement({
                    id: 0x0020, name: "ObstacleDetected"
                }),

                DatatypeElement({
                    id: 0x0040, name: "Power"
                }),

                DatatypeElement({
                    id: 0x0080, name: "StopInput"
                }),

                DatatypeElement({
                    id: 0x0100, name: "MotorJammed"
                }),

                DatatypeElement({
                    id: 0x0200, name: "HardwareFailure"
                }),

                DatatypeElement({
                    id: 0x0400, name: "ManualOperation"
                }),

                DatatypeElement({
                    id: 0x0800, name: "Protection"
                })
            ]
        }),

        DatatypeElement({
            name: "WindowCoveringFeature", base: "map32",
            children: [
                DatatypeElement({
                    id: 0x0001, name: "Lift"
                }),

                DatatypeElement({
                    id: 0x0002, name: "Tilt"
                }),

                DatatypeElement({
                    id: 0x0004, name: "PositionAwareLift"
                }),

                DatatypeElement({
                    id: 0x0008, name: "AbsolutePosition"
                }),

                DatatypeElement({
                    id: 0x0010, name: "PositionAwareTilt"
                })
            ]
        })
    ]
}));
