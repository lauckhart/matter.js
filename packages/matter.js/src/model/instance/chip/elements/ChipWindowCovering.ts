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
            id: 0x0000, name: "wcType", base: "Type",
            access: { rw: "R" }, conformance: [ "M" ], value: "0x00"
        }),

        AttributeElement({
            id: 0x0001, name: "wcPhysicalClosedLimitLift", base: "uint16",
            access: { rw: "R" }, conformance: [ "O" ], value: "0x0000"
        }),

        AttributeElement({
            id: 0x0002, name: "wcPhysicalClosedLimitTilt", base: "uint16",
            access: { rw: "R" }, conformance: [ "O" ], value: "0x0000"
        }),

        AttributeElement({
            id: 0x0003, name: "wcCurrentPositionLift", base: "uint16",
            access: { rw: "R" }, conformance: [ "O" ], quality: { nullable: true }
        }),

        AttributeElement({
            id: 0x0004, name: "wcCurrentPositionTilt", base: "uint16",
            access: { rw: "R" }, conformance: [ "O" ], quality: { nullable: true }
        }),

        AttributeElement({
            id: 0x0005, name: "wcNumberOfActuationsLift", base: "uint16",
            access: { rw: "R" }, conformance: [ "O" ], value: "0x0000"
        }),

        AttributeElement({
            id: 0x0006, name: "wcNumberOfActuationsTilt", base: "uint16",
            access: { rw: "R" }, conformance: [ "O" ], value: "0x0000"
        }),

        AttributeElement({
            id: 0x0007, name: "wcConfigStatus", base: "ConfigStatus",
            access: { rw: "R" }, conformance: [ "M" ], value: "0x03"
        }),

        AttributeElement({
            id: 0x0008, name: "wcCurrentPositionLiftPercentage", base: "percent",
            access: { rw: "R" }, conformance: [ "O" ], quality: { nullable: true, reportable: true }
        }),

        AttributeElement({
            id: 0x0009, name: "wcCurrentPositionTiltPercentage", base: "percent",
            access: { rw: "R" }, conformance: [ "O" ], quality: { nullable: true, reportable: true }
        }),

        AttributeElement({
            id: 0x000a, name: "wcOperationalStatus", base: "OperationalStatus",
            access: { rw: "R" }, conformance: [ "M" ], quality: { reportable: true }, value: "0x00"
        }),

        AttributeElement({
            id: 0x000b, name: "wcTargetPositionLiftPercent100Ths", base: "percent100ths",
            access: { rw: "R" }, conformance: [ "O" ], quality: { nullable: true, reportable: true }
        }),

        AttributeElement({
            id: 0x000c, name: "wcTargetPositionTiltPercent100Ths", base: "percent100ths",
            access: { rw: "R" }, conformance: [ "O" ], quality: { nullable: true, reportable: true }
        }),

        AttributeElement({
            id: 0x000d, name: "wcEndProductType", base: "EndProductType",
            access: { rw: "R" }, conformance: [ "M" ], value: "0x00"
        }),

        AttributeElement({
            id: 0x000e, name: "wcCurrentPositionLiftPercent100Ths", base: "percent100ths",
            access: { rw: "R" }, conformance: [ "O" ], quality: { nullable: true, reportable: true }
        }),

        AttributeElement({
            id: 0x000f, name: "wcCurrentPositionTiltPercent100Ths", base: "percent100ths",
            access: { rw: "R" }, conformance: [ "O" ], quality: { nullable: true, reportable: true }
        }),

        AttributeElement({
            id: 0x0010, name: "wcInstalledOpenLimitLift", base: "uint16",
            access: { rw: "R" }, conformance: [ "O" ], value: "0x0000"
        }),

        AttributeElement({
            id: 0x0011, name: "wcInstalledClosedLimitLift", base: "uint16",
            access: { rw: "R" }, conformance: [ "O" ], value: "0xFFFF"
        }),

        AttributeElement({
            id: 0x0012, name: "wcInstalledOpenLimitTilt", base: "uint16",
            access: { rw: "R" }, conformance: [ "O" ], value: "0x0000"
        }),

        AttributeElement({
            id: 0x0013, name: "wcInstalledClosedLimitTilt", base: "uint16",
            access: { rw: "R" }, conformance: [ "O" ], value: "0xFFFF"
        }),

        AttributeElement({
            id: 0x0017, name: "wcMode", base: "Mode",
            access: { rw: "W", readPriv: "V", writePriv: "M" }, conformance: [ "M" ], value: "0x00"
        }),

        AttributeElement({
            id: 0x001a, name: "wcSafetyStatus", base: "SafetyStatus",
            access: { rw: "R" }, conformance: [ "O" ], quality: { reportable: true }, value: "0x0000"
        }),

        CommandElement({
            id: 0x0000, name: "UpOrOpen",
            access: { rw: "R" }, conformance: [ "M" ], direction: "request"
        }),

        CommandElement({
            id: 0x0001, name: "DownOrClose",
            access: { rw: "R" }, conformance: [ "M" ], direction: "request"
        }),

        CommandElement({
            id: 0x0002, name: "StopMotion",
            access: { rw: "R" }, conformance: [ "M" ], direction: "request"
        }),

        CommandElement({
            id: 0x0004, name: "GoToLiftValue",
            access: { rw: "R" }, conformance: [ "O" ], direction: "request",
            children: [
                DatatypeElement({
                    name: "liftValue", base: "uint16",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "liftValue", base: "uint16",
                    access: { rw: "R" }, conformance: [ "M" ]
                })
            ]
        }),

        CommandElement({
            id: 0x0005, name: "GoToLiftPercentage",
            access: { rw: "R" }, conformance: [ "O" ], direction: "request",
            children: [
                DatatypeElement({
                    name: "liftPercent100ThsValue", base: "percent100ths",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "liftPercent100ThsValue", base: "percent100ths",
                    access: { rw: "R" }, conformance: [ "M" ]
                })
            ]
        }),

        CommandElement({
            id: 0x0007, name: "GoToTiltValue",
            access: { rw: "R" }, conformance: [ "O" ], direction: "request",
            children: [
                DatatypeElement({
                    name: "tiltValue", base: "uint16",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "tiltValue", base: "uint16",
                    access: { rw: "R" }, conformance: [ "M" ]
                })
            ]
        }),

        CommandElement({
            id: 0x0008, name: "GoToTiltPercentage",
            access: { rw: "R" }, conformance: [ "O" ], direction: "request",
            children: [
                DatatypeElement({
                    name: "tiltPercent100ThsValue", base: "percent100ths",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "tiltPercent100ThsValue", base: "percent100ths",
                    access: { rw: "R" }, conformance: [ "M" ]
                })
            ]
        }),

        DatatypeElement({
            name: "Type", base: "enum8",
            access: { rw: "R" }, conformance: [ "M" ],
            children: [
                DatatypeElement({
                    name: "rollerShade",
                    access: { rw: "R" }, conformance: [ "M" ], value: "00"
                }),

                DatatypeElement({
                    name: "rollerShade",
                    access: { rw: "R" }, conformance: [ "M" ], value: "00"
                }),

                DatatypeElement({
                    name: "rollerShade2Motor",
                    access: { rw: "R" }, conformance: [ "M" ], value: "01"
                }),

                DatatypeElement({
                    name: "rollerShade2Motor",
                    access: { rw: "R" }, conformance: [ "M" ], value: "01"
                }),

                DatatypeElement({
                    name: "rollerShadeExterior",
                    access: { rw: "R" }, conformance: [ "M" ], value: "02"
                }),

                DatatypeElement({
                    name: "rollerShadeExterior",
                    access: { rw: "R" }, conformance: [ "M" ], value: "02"
                }),

                DatatypeElement({
                    name: "rollerShadeExterior2Motor",
                    access: { rw: "R" }, conformance: [ "M" ], value: "03"
                }),

                DatatypeElement({
                    name: "rollerShadeExterior2Motor",
                    access: { rw: "R" }, conformance: [ "M" ], value: "03"
                }),

                DatatypeElement({
                    name: "drapery",
                    access: { rw: "R" }, conformance: [ "M" ], value: "04"
                }),

                DatatypeElement({
                    name: "drapery",
                    access: { rw: "R" }, conformance: [ "M" ], value: "04"
                }),

                DatatypeElement({
                    name: "awning",
                    access: { rw: "R" }, conformance: [ "M" ], value: "05"
                }),

                DatatypeElement({
                    name: "awning",
                    access: { rw: "R" }, conformance: [ "M" ], value: "05"
                }),

                DatatypeElement({
                    name: "shutter",
                    access: { rw: "R" }, conformance: [ "M" ], value: "06"
                }),

                DatatypeElement({
                    name: "shutter",
                    access: { rw: "R" }, conformance: [ "M" ], value: "06"
                }),

                DatatypeElement({
                    name: "tiltBlindTiltOnly",
                    access: { rw: "R" }, conformance: [ "M" ], value: "07"
                }),

                DatatypeElement({
                    name: "tiltBlindTiltOnly",
                    access: { rw: "R" }, conformance: [ "M" ], value: "07"
                }),

                DatatypeElement({
                    name: "tiltBlindLiftAndTilt",
                    access: { rw: "R" }, conformance: [ "M" ], value: "08"
                }),

                DatatypeElement({
                    name: "tiltBlindLiftAndTilt",
                    access: { rw: "R" }, conformance: [ "M" ], value: "08"
                }),

                DatatypeElement({
                    name: "projectorScreen",
                    access: { rw: "R" }, conformance: [ "M" ], value: "09"
                }),

                DatatypeElement({
                    name: "projectorScreen",
                    access: { rw: "R" }, conformance: [ "M" ], value: "09"
                }),

                DatatypeElement({
                    name: "unknown",
                    access: { rw: "R" }, conformance: [ "M" ], value: "255"
                }),

                DatatypeElement({
                    name: "unknown",
                    access: { rw: "R" }, conformance: [ "M" ], value: "255"
                })
            ]
        }),

        DatatypeElement({
            name: "EndProductType", base: "enum8",
            access: { rw: "R" }, conformance: [ "M" ],
            children: [
                DatatypeElement({
                    name: "rollerShade",
                    access: { rw: "R" }, conformance: [ "M" ], value: "00"
                }),

                DatatypeElement({
                    name: "rollerShade",
                    access: { rw: "R" }, conformance: [ "M" ], value: "00"
                }),

                DatatypeElement({
                    name: "romanShade",
                    access: { rw: "R" }, conformance: [ "M" ], value: "01"
                }),

                DatatypeElement({
                    name: "romanShade",
                    access: { rw: "R" }, conformance: [ "M" ], value: "01"
                }),

                DatatypeElement({
                    name: "balloonShade",
                    access: { rw: "R" }, conformance: [ "M" ], value: "02"
                }),

                DatatypeElement({
                    name: "balloonShade",
                    access: { rw: "R" }, conformance: [ "M" ], value: "02"
                }),

                DatatypeElement({
                    name: "wovenWood",
                    access: { rw: "R" }, conformance: [ "M" ], value: "03"
                }),

                DatatypeElement({
                    name: "wovenWood",
                    access: { rw: "R" }, conformance: [ "M" ], value: "03"
                }),

                DatatypeElement({
                    name: "pleatedShade",
                    access: { rw: "R" }, conformance: [ "M" ], value: "04"
                }),

                DatatypeElement({
                    name: "pleatedShade",
                    access: { rw: "R" }, conformance: [ "M" ], value: "04"
                }),

                DatatypeElement({
                    name: "cellularShade",
                    access: { rw: "R" }, conformance: [ "M" ], value: "05"
                }),

                DatatypeElement({
                    name: "cellularShade",
                    access: { rw: "R" }, conformance: [ "M" ], value: "05"
                }),

                DatatypeElement({
                    name: "layeredShade",
                    access: { rw: "R" }, conformance: [ "M" ], value: "06"
                }),

                DatatypeElement({
                    name: "layeredShade",
                    access: { rw: "R" }, conformance: [ "M" ], value: "06"
                }),

                DatatypeElement({
                    name: "layeredShade2D",
                    access: { rw: "R" }, conformance: [ "M" ], value: "07"
                }),

                DatatypeElement({
                    name: "layeredShade2D",
                    access: { rw: "R" }, conformance: [ "M" ], value: "07"
                }),

                DatatypeElement({
                    name: "sheerShade",
                    access: { rw: "R" }, conformance: [ "M" ], value: "08"
                }),

                DatatypeElement({
                    name: "sheerShade",
                    access: { rw: "R" }, conformance: [ "M" ], value: "08"
                }),

                DatatypeElement({
                    name: "tiltOnlyInteriorBlind",
                    access: { rw: "R" }, conformance: [ "M" ], value: "09"
                }),

                DatatypeElement({
                    name: "tiltOnlyInteriorBlind",
                    access: { rw: "R" }, conformance: [ "M" ], value: "09"
                }),

                DatatypeElement({
                    name: "interiorBlind",
                    access: { rw: "R" }, conformance: [ "M" ], value: "10"
                }),

                DatatypeElement({
                    name: "interiorBlind",
                    access: { rw: "R" }, conformance: [ "M" ], value: "10"
                }),

                DatatypeElement({
                    name: "verticalBlindStripCurtain",
                    access: { rw: "R" }, conformance: [ "M" ], value: "11"
                }),

                DatatypeElement({
                    name: "verticalBlindStripCurtain",
                    access: { rw: "R" }, conformance: [ "M" ], value: "11"
                }),

                DatatypeElement({
                    name: "interiorVenetianBlind",
                    access: { rw: "R" }, conformance: [ "M" ], value: "12"
                }),

                DatatypeElement({
                    name: "interiorVenetianBlind",
                    access: { rw: "R" }, conformance: [ "M" ], value: "12"
                }),

                DatatypeElement({
                    name: "exteriorVenetianBlind",
                    access: { rw: "R" }, conformance: [ "M" ], value: "13"
                }),

                DatatypeElement({
                    name: "exteriorVenetianBlind",
                    access: { rw: "R" }, conformance: [ "M" ], value: "13"
                }),

                DatatypeElement({
                    name: "lateralLeftCurtain",
                    access: { rw: "R" }, conformance: [ "M" ], value: "14"
                }),

                DatatypeElement({
                    name: "lateralLeftCurtain",
                    access: { rw: "R" }, conformance: [ "M" ], value: "14"
                }),

                DatatypeElement({
                    name: "lateralRightCurtain",
                    access: { rw: "R" }, conformance: [ "M" ], value: "15"
                }),

                DatatypeElement({
                    name: "lateralRightCurtain",
                    access: { rw: "R" }, conformance: [ "M" ], value: "15"
                }),

                DatatypeElement({
                    name: "centralCurtain",
                    access: { rw: "R" }, conformance: [ "M" ], value: "16"
                }),

                DatatypeElement({
                    name: "centralCurtain",
                    access: { rw: "R" }, conformance: [ "M" ], value: "16"
                }),

                DatatypeElement({
                    name: "rollerShutter",
                    access: { rw: "R" }, conformance: [ "M" ], value: "17"
                }),

                DatatypeElement({
                    name: "rollerShutter",
                    access: { rw: "R" }, conformance: [ "M" ], value: "17"
                }),

                DatatypeElement({
                    name: "exteriorVerticalScreen",
                    access: { rw: "R" }, conformance: [ "M" ], value: "18"
                }),

                DatatypeElement({
                    name: "exteriorVerticalScreen",
                    access: { rw: "R" }, conformance: [ "M" ], value: "18"
                }),

                DatatypeElement({
                    name: "awningTerracePatio",
                    access: { rw: "R" }, conformance: [ "M" ], value: "19"
                }),

                DatatypeElement({
                    name: "awningTerracePatio",
                    access: { rw: "R" }, conformance: [ "M" ], value: "19"
                }),

                DatatypeElement({
                    name: "awningVerticalScreen",
                    access: { rw: "R" }, conformance: [ "M" ], value: "20"
                }),

                DatatypeElement({
                    name: "awningVerticalScreen",
                    access: { rw: "R" }, conformance: [ "M" ], value: "20"
                }),

                DatatypeElement({
                    name: "tiltOnlyPergola",
                    access: { rw: "R" }, conformance: [ "M" ], value: "21"
                }),

                DatatypeElement({
                    name: "tiltOnlyPergola",
                    access: { rw: "R" }, conformance: [ "M" ], value: "21"
                }),

                DatatypeElement({
                    name: "swingingShutter",
                    access: { rw: "R" }, conformance: [ "M" ], value: "22"
                }),

                DatatypeElement({
                    name: "swingingShutter",
                    access: { rw: "R" }, conformance: [ "M" ], value: "22"
                }),

                DatatypeElement({
                    name: "slidingShutter",
                    access: { rw: "R" }, conformance: [ "M" ], value: "23"
                }),

                DatatypeElement({
                    name: "slidingShutter",
                    access: { rw: "R" }, conformance: [ "M" ], value: "23"
                }),

                DatatypeElement({
                    name: "unknown",
                    access: { rw: "R" }, conformance: [ "M" ], value: "255"
                }),

                DatatypeElement({
                    name: "unknown",
                    access: { rw: "R" }, conformance: [ "M" ], value: "255"
                })
            ]
        }),

        DatatypeElement({
            name: "Mode", base: "map8",
            access: { rw: "R" }, conformance: [ "M" ],
            children: [
                DatatypeElement({
                    name: "motorDirectionReversed",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x01"
                }),

                DatatypeElement({
                    name: "motorDirectionReversed",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x01"
                }),

                DatatypeElement({
                    name: "calibrationMode",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x02"
                }),

                DatatypeElement({
                    name: "calibrationMode",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x02"
                }),

                DatatypeElement({
                    name: "maintenanceMode",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x04"
                }),

                DatatypeElement({
                    name: "maintenanceMode",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x04"
                }),

                DatatypeElement({
                    name: "ledFeedback",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x08"
                }),

                DatatypeElement({
                    name: "ledFeedback",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x08"
                })
            ]
        }),

        DatatypeElement({
            name: "OperationalStatus", base: "map8",
            access: { rw: "R" }, conformance: [ "M" ],
            children: [
                DatatypeElement({
                    name: "global",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x03"
                }),

                DatatypeElement({
                    name: "global",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x03"
                }),

                DatatypeElement({
                    name: "lift",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x0C"
                }),

                DatatypeElement({
                    name: "lift",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x0C"
                }),

                DatatypeElement({
                    name: "tilt",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x30"
                }),

                DatatypeElement({
                    name: "tilt",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x30"
                })
            ]
        }),

        DatatypeElement({
            name: "ConfigStatus", base: "map8",
            access: { rw: "R" }, conformance: [ "M" ],
            children: [
                DatatypeElement({
                    name: "operational",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x01"
                }),

                DatatypeElement({
                    name: "operational",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x01"
                }),

                DatatypeElement({
                    name: "onlineReserved",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x02"
                }),

                DatatypeElement({
                    name: "onlineReserved",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x02"
                }),

                DatatypeElement({
                    name: "liftMovementReversed",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x04"
                }),

                DatatypeElement({
                    name: "liftMovementReversed",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x04"
                }),

                DatatypeElement({
                    name: "liftPositionAware",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x08"
                }),

                DatatypeElement({
                    name: "liftPositionAware",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x08"
                }),

                DatatypeElement({
                    name: "tiltPositionAware",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x10"
                }),

                DatatypeElement({
                    name: "tiltPositionAware",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x10"
                }),

                DatatypeElement({
                    name: "liftEncoderControlled",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x20"
                }),

                DatatypeElement({
                    name: "liftEncoderControlled",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x20"
                }),

                DatatypeElement({
                    name: "tiltEncoderControlled",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x40"
                }),

                DatatypeElement({
                    name: "tiltEncoderControlled",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x40"
                })
            ]
        }),

        DatatypeElement({
            name: "SafetyStatus", base: "map16",
            access: { rw: "R" }, conformance: [ "M" ],
            children: [
                DatatypeElement({
                    name: "remoteLockout",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x0001"
                }),

                DatatypeElement({
                    name: "remoteLockout",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x0001"
                }),

                DatatypeElement({
                    name: "tamperDetection",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x0002"
                }),

                DatatypeElement({
                    name: "tamperDetection",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x0002"
                }),

                DatatypeElement({
                    name: "failedCommunication",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x0004"
                }),

                DatatypeElement({
                    name: "failedCommunication",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x0004"
                }),

                DatatypeElement({
                    name: "positionFailure",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x0008"
                }),

                DatatypeElement({
                    name: "positionFailure",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x0008"
                }),

                DatatypeElement({
                    name: "thermalProtection",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x0010"
                }),

                DatatypeElement({
                    name: "thermalProtection",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x0010"
                }),

                DatatypeElement({
                    name: "obstacleDetected",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x0020"
                }),

                DatatypeElement({
                    name: "obstacleDetected",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x0020"
                }),

                DatatypeElement({
                    name: "power",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x0040"
                }),

                DatatypeElement({
                    name: "power",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x0040"
                }),

                DatatypeElement({
                    name: "stopInput",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x0080"
                }),

                DatatypeElement({
                    name: "stopInput",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x0080"
                }),

                DatatypeElement({
                    name: "motorJammed",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x0100"
                }),

                DatatypeElement({
                    name: "motorJammed",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x0100"
                }),

                DatatypeElement({
                    name: "hardwareFailure",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x0200"
                }),

                DatatypeElement({
                    name: "hardwareFailure",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x0200"
                }),

                DatatypeElement({
                    name: "manualOperation",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x0400"
                }),

                DatatypeElement({
                    name: "manualOperation",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x0400"
                }),

                DatatypeElement({
                    name: "protection",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x0800"
                }),

                DatatypeElement({
                    name: "protection",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x0800"
                })
            ]
        }),

        DatatypeElement({
            name: "WindowCoveringFeature", base: "map32",
            access: { rw: "R" }, conformance: [ "M" ],
            children: [
                DatatypeElement({
                    name: "lift",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x01"
                }),

                DatatypeElement({
                    name: "lift",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x01"
                }),

                DatatypeElement({
                    name: "tilt",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x02"
                }),

                DatatypeElement({
                    name: "tilt",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x02"
                }),

                DatatypeElement({
                    name: "positionAwareLift",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x04"
                }),

                DatatypeElement({
                    name: "positionAwareLift",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x04"
                }),

                DatatypeElement({
                    name: "absolutePosition",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x08"
                }),

                DatatypeElement({
                    name: "absolutePosition",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x08"
                }),

                DatatypeElement({
                    name: "positionAwareTilt",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x10"
                }),

                DatatypeElement({
                    name: "positionAwareTilt",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x10"
                })
            ]
        })
    ]
}));
