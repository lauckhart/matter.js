/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ChipMatter } from "../ChipMatter.js";
import { ClusterElement, AttributeElement, CommandElement, DatatypeElement } from "../../../elements/index.js";

ChipMatter.children!.push(ClusterElement({
    id: 0x0102, name: "WindowCovering",
    description: "Window Covering",
    details: "Provides an interface for controlling and adjusting automatic window coverings.",
    children: [
        AttributeElement({
            id: 0x0000, name: "WcType", base: "Type",
            conformance: "M", default: 0
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
            conformance: "M", default: 3
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
            conformance: "M", default: 0, quality: "P"
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
            conformance: "M", default: 0
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
            access: "RW VM", conformance: "M", default: 0
        }),

        AttributeElement({
            id: 0x001a, name: "WcSafetyStatus", base: "SafetyStatus",
            conformance: "O", default: 0, quality: "P"
        }),

        CommandElement({
            id: 0x0000, name: "UpOrOpen",
            conformance: "M", direction: "request"
        }),

        CommandElement({
            id: 0x0001, name: "DownOrClose",
            conformance: "M", direction: "request"
        }),

        CommandElement({
            id: 0x0002, name: "StopMotion",
            conformance: "M", direction: "request"
        }),

        CommandElement({
            id: 0x0004, name: "GoToLiftValue",
            conformance: "O", direction: "request",
            children: [
                DatatypeElement({
                    name: "LiftValue", base: "uint16",
                    conformance: "M"
                })
            ]
        }),

        CommandElement({
            id: 0x0005, name: "GoToLiftPercentage",
            conformance: "O", direction: "request",
            children: [
                DatatypeElement({
                    name: "LiftPercent100ThsValue", base: "percent100ths",
                    conformance: "M"
                })
            ]
        }),

        CommandElement({
            id: 0x0007, name: "GoToTiltValue",
            conformance: "O", direction: "request",
            children: [
                DatatypeElement({
                    name: "TiltValue", base: "uint16",
                    conformance: "M"
                })
            ]
        }),

        CommandElement({
            id: 0x0008, name: "GoToTiltPercentage",
            conformance: "O", direction: "request",
            children: [
                DatatypeElement({
                    name: "TiltPercent100ThsValue", base: "percent100ths",
                    conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "Type", base: "enum8",
            conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "RollerShade",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0001, name: "RollerShade2Motor",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0002, name: "RollerShadeExterior",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0003, name: "RollerShadeExterior2Motor",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0004, name: "Drapery",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0005, name: "Awning",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0006, name: "Shutter",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0007, name: "TiltBlindTiltOnly",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0008, name: "TiltBlindLiftAndTilt",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0009, name: "ProjectorScreen",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x00ff, name: "Unknown",
                    conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "EndProductType", base: "enum8",
            conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "RollerShade",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0001, name: "RomanShade",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0002, name: "BalloonShade",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0003, name: "WovenWood",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0004, name: "PleatedShade",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0005, name: "CellularShade",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0006, name: "LayeredShade",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0007, name: "LayeredShade2D",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0008, name: "SheerShade",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0009, name: "TiltOnlyInteriorBlind",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x000a, name: "InteriorBlind",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x000b, name: "VerticalBlindStripCurtain",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x000c, name: "InteriorVenetianBlind",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x000d, name: "ExteriorVenetianBlind",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x000e, name: "LateralLeftCurtain",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x000f, name: "LateralRightCurtain",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0010, name: "CentralCurtain",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0011, name: "RollerShutter",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0012, name: "ExteriorVerticalScreen",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0013, name: "AwningTerracePatio",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0014, name: "AwningVerticalScreen",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0015, name: "TiltOnlyPergola",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0016, name: "SwingingShutter",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0017, name: "SlidingShutter",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x00ff, name: "Unknown",
                    conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "Mode", base: "map8",
            conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0001, name: "MotorDirectionReversed",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0002, name: "CalibrationMode",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0004, name: "MaintenanceMode",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0008, name: "LedFeedback",
                    conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "OperationalStatus", base: "map8",
            conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0003, name: "Global",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x000c, name: "Lift",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0030, name: "Tilt",
                    conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "ConfigStatus", base: "map8",
            conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0001, name: "Operational",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0002, name: "OnlineReserved",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0004, name: "LiftMovementReversed",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0008, name: "LiftPositionAware",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0010, name: "TiltPositionAware",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0020, name: "LiftEncoderControlled",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0040, name: "TiltEncoderControlled",
                    conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "SafetyStatus", base: "map16",
            conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0001, name: "RemoteLockout",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0002, name: "TamperDetection",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0004, name: "FailedCommunication",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0008, name: "PositionFailure",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0010, name: "ThermalProtection",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0020, name: "ObstacleDetected",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0040, name: "Power",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0080, name: "StopInput",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0100, name: "MotorJammed",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0200, name: "HardwareFailure",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0400, name: "ManualOperation",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0800, name: "Protection",
                    conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "WindowCoveringFeature", base: "map32",
            conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0001, name: "Lift",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0002, name: "Tilt",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0004, name: "PositionAwareLift",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0008, name: "AbsolutePosition",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0010, name: "PositionAwareTilt",
                    conformance: "M"
                })
            ]
        })
    ]
}));
