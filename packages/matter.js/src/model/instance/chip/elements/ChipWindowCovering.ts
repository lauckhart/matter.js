/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ChipMatter } from "../internal.js";
import { ClusterElement, AttributeElement, CommandElement, DatatypeElement } from "../../../index.js";

ChipMatter.children!.push(ClusterElement({
    id: 0x0102, name: "WindowCovering",
    description: "Window Covering",
    details: "Provides an interface for controlling and adjusting automatic window coverings.",
    children: [
        AttributeElement({
            id: 0x0000, name: "WcType", base: "Type",
            access: { rw: "R" }, conformance: [ "M" ]
        }),

        AttributeElement({
            id: 0x0001, name: "WcPhysicalClosedLimitLift", base: "uint16",
            access: { rw: "R" }, conformance: [ "O" ]
        }),

        AttributeElement({
            id: 0x0002, name: "WcPhysicalClosedLimitTilt", base: "uint16",
            access: { rw: "R" }, conformance: [ "O" ]
        }),

        AttributeElement({
            id: 0x0003, name: "WcCurrentPositionLift", base: "uint16",
            access: { rw: "R" }, conformance: [ "O" ], quality: { nullable: true }
        }),

        AttributeElement({
            id: 0x0004, name: "WcCurrentPositionTilt", base: "uint16",
            access: { rw: "R" }, conformance: [ "O" ], quality: { nullable: true }
        }),

        AttributeElement({
            id: 0x0005, name: "WcNumberOfActuationsLift", base: "uint16",
            access: { rw: "R" }, conformance: [ "O" ]
        }),

        AttributeElement({
            id: 0x0006, name: "WcNumberOfActuationsTilt", base: "uint16",
            access: { rw: "R" }, conformance: [ "O" ]
        }),

        AttributeElement({
            id: 0x0007, name: "WcConfigStatus", base: "ConfigStatus",
            access: { rw: "R" }, conformance: [ "M" ]
        }),

        AttributeElement({
            id: 0x0008, name: "WcCurrentPositionLiftPercentage", base: "percent",
            access: { rw: "R" }, conformance: [ "O" ], quality: { nullable: true, reportable: true }
        }),

        AttributeElement({
            id: 0x0009, name: "WcCurrentPositionTiltPercentage", base: "percent",
            access: { rw: "R" }, conformance: [ "O" ], quality: { nullable: true, reportable: true }
        }),

        AttributeElement({
            id: 0x000a, name: "WcOperationalStatus", base: "OperationalStatus",
            access: { rw: "R" }, conformance: [ "M" ], quality: { reportable: true }
        }),

        AttributeElement({
            id: 0x000b, name: "WcTargetPositionLiftPercent100Ths", base: "percent100ths",
            access: { rw: "R" }, conformance: [ "O" ], quality: { nullable: true, reportable: true }
        }),

        AttributeElement({
            id: 0x000c, name: "WcTargetPositionTiltPercent100Ths", base: "percent100ths",
            access: { rw: "R" }, conformance: [ "O" ], quality: { nullable: true, reportable: true }
        }),

        AttributeElement({
            id: 0x000d, name: "WcEndProductType", base: "EndProductType",
            access: { rw: "R" }, conformance: [ "M" ]
        }),

        AttributeElement({
            id: 0x000e, name: "WcCurrentPositionLiftPercent100Ths", base: "percent100ths",
            access: { rw: "R" }, conformance: [ "O" ], quality: { nullable: true, reportable: true }
        }),

        AttributeElement({
            id: 0x000f, name: "WcCurrentPositionTiltPercent100Ths", base: "percent100ths",
            access: { rw: "R" }, conformance: [ "O" ], quality: { nullable: true, reportable: true }
        }),

        AttributeElement({
            id: 0x0010, name: "WcInstalledOpenLimitLift", base: "uint16",
            access: { rw: "R" }, conformance: [ "O" ]
        }),

        AttributeElement({
            id: 0x0011, name: "WcInstalledClosedLimitLift", base: "uint16",
            access: { rw: "R" }, conformance: [ "O" ]
        }),

        AttributeElement({
            id: 0x0012, name: "WcInstalledOpenLimitTilt", base: "uint16",
            access: { rw: "R" }, conformance: [ "O" ]
        }),

        AttributeElement({
            id: 0x0013, name: "WcInstalledClosedLimitTilt", base: "uint16",
            access: { rw: "R" }, conformance: [ "O" ]
        }),

        AttributeElement({
            id: 0x0017, name: "WcMode", base: "Mode",
            access: { rw: "W", readPrivilege: "V", writePrivilege: "M" }, conformance: [ "M" ]
        }),

        AttributeElement({
            id: 0x001a, name: "WcSafetyStatus", base: "SafetyStatus",
            access: { rw: "R" }, conformance: [ "O" ], quality: { reportable: true }
        }),

        CommandElement({
            id: 0x0000, name: "UpOrOpen", base: "struct",
            access: { rw: "R" }, conformance: [ "M" ], direction: "request"
        }),

        CommandElement({
            id: 0x0001, name: "DownOrClose", base: "struct",
            access: { rw: "R" }, conformance: [ "M" ], direction: "request"
        }),

        CommandElement({
            id: 0x0002, name: "StopMotion", base: "struct",
            access: { rw: "R" }, conformance: [ "M" ], direction: "request"
        }),

        CommandElement({
            id: 0x0004, name: "GoToLiftValue", base: "struct",
            access: { rw: "R" }, conformance: [ "O" ], direction: "request",
            children: [
                DatatypeElement({
                    name: "LiftValue", base: "uint16",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "LiftValue", base: "uint16",
                    access: { rw: "R" }, conformance: [ "M" ]
                })
            ]
        }),

        CommandElement({
            id: 0x0005, name: "GoToLiftPercentage", base: "struct",
            access: { rw: "R" }, conformance: [ "O" ], direction: "request",
            children: [
                DatatypeElement({
                    name: "LiftPercent100ThsValue", base: "percent100ths",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "LiftPercent100ThsValue", base: "percent100ths",
                    access: { rw: "R" }, conformance: [ "M" ]
                })
            ]
        }),

        CommandElement({
            id: 0x0007, name: "GoToTiltValue", base: "struct",
            access: { rw: "R" }, conformance: [ "O" ], direction: "request",
            children: [
                DatatypeElement({
                    name: "TiltValue", base: "uint16",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "TiltValue", base: "uint16",
                    access: { rw: "R" }, conformance: [ "M" ]
                })
            ]
        }),

        CommandElement({
            id: 0x0008, name: "GoToTiltPercentage", base: "struct",
            access: { rw: "R" }, conformance: [ "O" ], direction: "request",
            children: [
                DatatypeElement({
                    name: "TiltPercent100ThsValue", base: "percent100ths",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "TiltPercent100ThsValue", base: "percent100ths",
                    access: { rw: "R" }, conformance: [ "M" ]
                })
            ]
        }),

        DatatypeElement({
            name: "Type", base: "enum8",
            access: { rw: "R" }, conformance: [ "M" ],
            children: [
                DatatypeElement({
                    name: "RollerShade", base: "uint8",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "RollerShade", base: "uint8",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "RollerShade2Motor", base: "uint8",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "RollerShade2Motor", base: "uint8",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "RollerShadeExterior", base: "uint8",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "RollerShadeExterior", base: "uint8",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "RollerShadeExterior2Motor", base: "uint8",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "RollerShadeExterior2Motor", base: "uint8",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "Drapery", base: "uint8",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "Drapery", base: "uint8",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "Awning", base: "uint8",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "Awning", base: "uint8",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "Shutter", base: "uint8",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "Shutter", base: "uint8",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "TiltBlindTiltOnly", base: "uint8",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "TiltBlindTiltOnly", base: "uint8",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "TiltBlindLiftAndTilt", base: "uint8",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "TiltBlindLiftAndTilt", base: "uint8",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "ProjectorScreen", base: "uint8",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "ProjectorScreen", base: "uint8",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "Unknown", base: "uint8",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "Unknown", base: "uint8",
                    access: { rw: "R" }, conformance: [ "M" ]
                })
            ]
        }),

        DatatypeElement({
            name: "EndProductType", base: "enum8",
            access: { rw: "R" }, conformance: [ "M" ],
            children: [
                DatatypeElement({
                    name: "RollerShade", base: "uint8",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "RollerShade", base: "uint8",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "RomanShade", base: "uint8",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "RomanShade", base: "uint8",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "BalloonShade", base: "uint8",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "BalloonShade", base: "uint8",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "WovenWood", base: "uint8",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "WovenWood", base: "uint8",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "PleatedShade", base: "uint8",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "PleatedShade", base: "uint8",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "CellularShade", base: "uint8",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "CellularShade", base: "uint8",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "LayeredShade", base: "uint8",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "LayeredShade", base: "uint8",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "LayeredShade2D", base: "uint8",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "LayeredShade2D", base: "uint8",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "SheerShade", base: "uint8",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "SheerShade", base: "uint8",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "TiltOnlyInteriorBlind", base: "uint8",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "TiltOnlyInteriorBlind", base: "uint8",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "InteriorBlind", base: "uint8",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "InteriorBlind", base: "uint8",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "VerticalBlindStripCurtain", base: "uint8",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "VerticalBlindStripCurtain", base: "uint8",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "InteriorVenetianBlind", base: "uint8",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "InteriorVenetianBlind", base: "uint8",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "ExteriorVenetianBlind", base: "uint8",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "ExteriorVenetianBlind", base: "uint8",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "LateralLeftCurtain", base: "uint8",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "LateralLeftCurtain", base: "uint8",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "LateralRightCurtain", base: "uint8",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "LateralRightCurtain", base: "uint8",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "CentralCurtain", base: "uint8",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "CentralCurtain", base: "uint8",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "RollerShutter", base: "uint8",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "RollerShutter", base: "uint8",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "ExteriorVerticalScreen", base: "uint8",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "ExteriorVerticalScreen", base: "uint8",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "AwningTerracePatio", base: "uint8",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "AwningTerracePatio", base: "uint8",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "AwningVerticalScreen", base: "uint8",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "AwningVerticalScreen", base: "uint8",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "TiltOnlyPergola", base: "uint8",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "TiltOnlyPergola", base: "uint8",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "SwingingShutter", base: "uint8",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "SwingingShutter", base: "uint8",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "SlidingShutter", base: "uint8",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "SlidingShutter", base: "uint8",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "Unknown", base: "uint8",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "Unknown", base: "uint8",
                    access: { rw: "R" }, conformance: [ "M" ]
                })
            ]
        }),

        DatatypeElement({
            name: "Mode", base: "map8",
            access: { rw: "R" }, conformance: [ "M" ]
        }),

        DatatypeElement({
            name: "OperationalStatus", base: "map8",
            access: { rw: "R" }, conformance: [ "M" ]
        }),

        DatatypeElement({
            name: "ConfigStatus", base: "map8",
            access: { rw: "R" }, conformance: [ "M" ]
        }),

        DatatypeElement({
            name: "SafetyStatus", base: "map16",
            access: { rw: "R" }, conformance: [ "M" ]
        }),

        DatatypeElement({
            name: "WindowCoveringFeature", base: "map32",
            access: { rw: "R" }, conformance: [ "M" ]
        })
    ]
}));
