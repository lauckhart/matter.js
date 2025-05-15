/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterDefinition } from "../MatterDefinition.js";
import {
    ClusterElement as Cluster,
    AttributeElement as Attribute,
    FieldElement as Field,
    CommandElement as Command,
    DatatypeElement as Datatype
} from "../../elements/index.js";

export const WindowCovering = Cluster(
    { id: 0x102, name: "WindowCovering" },
    Attribute({ id: 0xfffd, name: "ClusterRevision", type: "ClusterRevision", default: 5 }),

    Attribute(
        { id: 0xfffc, name: "FeatureMap", type: "FeatureMap" },
        Field({ name: "LF", conformance: "O.a+", constraint: "0" }),
        Field({ name: "TL", conformance: "O.a+", constraint: "1" }),
        Field({ name: "PA_LF", conformance: "[LF]", constraint: "2" }),
        Field({ name: "ABS", conformance: "O", constraint: "3" }),
        Field({ name: "PA_TL", conformance: "[TL]", constraint: "4" })
    ),

    Attribute({
        id: 0x0, name: "Type", type: "TypeEnum",
        access: "R V", conformance: "M", constraint: "all", default: 0, quality: "F"
    }),
    Attribute({
        id: 0x1, name: "PhysicalClosedLimitLift", type: "uint16",
        access: "R V", conformance: "[LF & PA_LF & ABS]", default: 0, quality: "F"
    }),
    Attribute({
        id: 0x2, name: "PhysicalClosedLimitTilt", type: "uint16",
        access: "R V", conformance: "[TL & PA_TL & ABS]", default: 0, quality: "F"
    }),
    Attribute({
        id: 0x3, name: "CurrentPositionLift", type: "uint16",
        access: "R V", conformance: "[LF & PA_LF & ABS]",
        constraint: "installedOpenLimitLift to installedClosedLimitLift", default: null, quality: "X N"
    }),
    Attribute({
        id: 0x4, name: "CurrentPositionTilt", type: "uint16",
        access: "R V", conformance: "[TL & PA_TL & ABS]",
        constraint: "installedOpenLimitTilt to installedClosedLimitTilt", default: null, quality: "X N"
    }),
    Attribute({
        id: 0x5, name: "NumberOfActuationsLift", type: "uint16",
        access: "R V", conformance: "[LF]", default: 0, quality: "N"
    }),
    Attribute({
        id: 0x6, name: "NumberOfActuationsTilt", type: "uint16",
        access: "R V", conformance: "[TL]", default: 0, quality: "N"
    }),
    Attribute({
        id: 0x7, name: "ConfigStatus", type: "ConfigStatusBitmap",
        access: "R V", conformance: "M", constraint: "all", quality: "N"
    }),
    Attribute({
        id: 0x8, name: "CurrentPositionLiftPercentage", type: "percent",
        access: "R V", conformance: "[LF & PA_LF]", default: null, quality: "X N P"
    }),
    Attribute({
        id: 0x9, name: "CurrentPositionTiltPercentage", type: "percent",
        access: "R V", conformance: "[TL & PA_TL]", default: null, quality: "X N P"
    }),
    Attribute({
        id: 0xa, name: "OperationalStatus", type: "OperationalStatusBitmap",
        access: "R V", conformance: "M", default: 0, quality: "P"
    }),
    Attribute({
        id: 0xb, name: "TargetPositionLiftPercent100ths", type: "percent100ths",
        access: "R V", conformance: "LF & PA_LF", default: null, quality: "X P"
    }),
    Attribute({
        id: 0xc, name: "TargetPositionTiltPercent100ths", type: "percent100ths",
        access: "R V", conformance: "TL & PA_TL", default: null, quality: "X P"
    }),
    Attribute({
        id: 0xd, name: "EndProductType", type: "EndProductTypeEnum",
        access: "R V", conformance: "M", constraint: "all", default: 0, quality: "F"
    }),
    Attribute({
        id: 0xe, name: "CurrentPositionLiftPercent100ths", type: "percent100ths",
        access: "R V", conformance: "LF & PA_LF", constraint: "max 10000", default: null, quality: "X N P"
    }),
    Attribute({
        id: 0xf, name: "CurrentPositionTiltPercent100ths", type: "percent100ths",
        access: "R V", conformance: "TL & PA_TL", constraint: "max 10000", default: null, quality: "X N P"
    }),
    Attribute({
        id: 0x10, name: "InstalledOpenLimitLift", type: "uint16",
        access: "R V", conformance: "LF & PA_LF & ABS", constraint: "max 65534", default: 0, quality: "N"
    }),
    Attribute({
        id: 0x11, name: "InstalledClosedLimitLift", type: "uint16",
        access: "R V", conformance: "LF & PA_LF & ABS", constraint: "max 65534", default: 65534,
        quality: "N"
    }),
    Attribute({
        id: 0x12, name: "InstalledOpenLimitTilt", type: "uint16",
        access: "R V", conformance: "TL & PA_TL & ABS", constraint: "max 65534", default: 0, quality: "N"
    }),
    Attribute({
        id: 0x13, name: "InstalledClosedLimitTilt", type: "uint16",
        access: "R V", conformance: "TL & PA_TL & ABS", constraint: "max 65534", default: 65534,
        quality: "N"
    }),
    Attribute({ id: 0x14, name: "VelocityLift", conformance: "D" }),
    Attribute({ id: 0x15, name: "AccelerationTimeLift", conformance: "D" }),
    Attribute({ id: 0x16, name: "DecelerationTimeLift", conformance: "D" }),
    Attribute({ id: 0x17, name: "Mode", type: "ModeBitmap", access: "RW VM", conformance: "M", default: 0, quality: "N" }),
    Attribute({ id: 0x18, name: "IntermediateSetpointsLift", conformance: "D" }),
    Attribute({ id: 0x19, name: "IntermediateSetpointsTilt", conformance: "D" }),
    Attribute({
        id: 0x1a, name: "SafetyStatus", type: "SafetyStatusBitmap",
        access: "R V", conformance: "O", constraint: "all", default: 0, quality: "P"
    }),
    Command({ id: 0x0, name: "UpOrOpen", access: "O", conformance: "M", direction: "request", response: "status" }),
    Command({ id: 0x1, name: "DownOrClose", access: "O", conformance: "M", direction: "request", response: "status" }),
    Command({ id: 0x2, name: "StopMotion", access: "O", conformance: "M", direction: "request", response: "status" }),

    Command(
        { id: 0x4, name: "GoToLiftValue", access: "O", direction: "request", response: "status" },
        Field({
            id: 0x0, name: "LiftValue", type: "uint16",
            conformance: "M", constraint: "installedOpenLimitLift to installedClosedLimitLift"
        })
    ),

    Command(
        { id: 0x5, name: "GoToLiftPercentage", access: "O", direction: "request", response: "status" },
        Field({ id: 0x0, name: "LiftPercent100thsValue", type: "percent100ths", conformance: "M" }),
        Field({ id: 0x1, name: "Ignored", conformance: "X" })
    ),

    Command(
        { id: 0x7, name: "GoToTiltValue", access: "O", direction: "request", response: "status" },
        Field({
            id: 0x0, name: "TiltValue", type: "uint16",
            conformance: "M", constraint: "installedOpenLimitTilt to installedClosedLimitTilt"
        })
    ),

    Command(
        { id: 0x8, name: "GoToTiltPercentage", access: "O", direction: "request", response: "status" },
        Field({ id: 0x0, name: "TiltPercent100thsValue", type: "percent100ths", conformance: "M" }),
        Field({ id: 0x1, name: "Ignored", conformance: "X" })
    ),

    Datatype(
        { name: "ConfigStatusBitmap", type: "map8" },
        Field({ name: "Operational", constraint: "0" }),
        Field({ name: "OnlineReserved", constraint: "1" }),
        Field({ name: "LiftMovementReversed", constraint: "2" }),
        Field({ name: "LiftPositionAware", constraint: "3" }),
        Field({ name: "TiltPositionAware", constraint: "4" }),
        Field({ name: "LiftEncoderControlled", constraint: "5" }),
        Field({ name: "TiltEncoderControlled", constraint: "6" })
    ),

    Datatype(
        { name: "ModeBitmap", type: "map8" },
        Field({ name: "MotorDirectionReversed", constraint: "0" }),
        Field({ name: "CalibrationMode", constraint: "1" }),
        Field({ name: "MaintenanceMode", constraint: "2" }),
        Field({ name: "LedFeedback", constraint: "3" })
    ),

    Datatype(
        { name: "OperationalStatusBitmap", type: "map8" },
        Field({ name: "Global", type: "MovementStatus", constraint: "0 to 1" }),
        Field({ name: "Lift", type: "MovementStatus", constraint: "2 to 3" }),
        Field({ name: "Tilt", type: "MovementStatus", constraint: "4 to 5" })
    ),

    Datatype(
        { name: "SafetyStatusBitmap", type: "map16" },
        Field({ name: "RemoteLockout", constraint: "0" }),
        Field({ name: "TamperDetection", constraint: "1" }),
        Field({ name: "FailedCommunication", constraint: "2" }),
        Field({ name: "PositionFailure", constraint: "3" }),
        Field({ name: "ThermalProtection", constraint: "4" }),
        Field({ name: "ObstacleDetected", constraint: "5" }),
        Field({ name: "Power", constraint: "6" }),
        Field({ name: "StopInput", constraint: "7" }),
        Field({ name: "MotorJammed", constraint: "8" }),
        Field({ name: "HardwareFailure", constraint: "9" }),
        Field({ name: "ManualOperation", constraint: "10" }),
        Field({ name: "Protection", constraint: "11" })
    ),

    Datatype(
        { name: "TypeEnum", type: "enum8" },
        Field({ id: 0x0, name: "Rollershade", conformance: "LF & !TL" }),
        Field({ id: 0x1, name: "Rollershade2Motor", conformance: "LF & !TL" }),
        Field({ id: 0x2, name: "RollershadeExterior", conformance: "LF & !TL" }),
        Field({ id: 0x3, name: "RollershadeExterior2Motor", conformance: "LF & !TL" }),
        Field({ id: 0x4, name: "Drapery", conformance: "LF & !TL" }),
        Field({ id: 0x5, name: "Awning", conformance: "LF & !TL" }),
        Field({ id: 0x6, name: "Shutter", conformance: "LF | TL" }),
        Field({ id: 0x7, name: "TiltBlindTiltOnly", conformance: "!LF & TL" }),
        Field({ id: 0x8, name: "TiltBlindLift", conformance: "LF & TL" }),
        Field({ id: 0x9, name: "ProjectorScreen", conformance: "LF & !TL" }),
        Field({ id: 0xff, name: "Unknown", conformance: "O" })
    ),

    Datatype(
        { name: "EndProductTypeEnum", type: "enum8" },
        Field({ id: 0x0, name: "RollerShade", conformance: "LF" }),
        Field({ id: 0x1, name: "RomanShade", conformance: "LF" }),
        Field({ id: 0x2, name: "BalloonShade", conformance: "LF" }),
        Field({ id: 0x3, name: "WovenWood", conformance: "LF" }),
        Field({ id: 0x4, name: "PleatedShade", conformance: "LF" }),
        Field({ id: 0x5, name: "CellularShade", conformance: "LF" }),
        Field({ id: 0x6, name: "LayeredShade", conformance: "LF" }),
        Field({ id: 0x7, name: "LayeredShade2D", conformance: "LF" }),
        Field({ id: 0x8, name: "SheerShade", conformance: "LF & TL" }),
        Field({ id: 0x9, name: "TiltOnlyInteriorBlind", conformance: "TL" }),
        Field({ id: 0xa, name: "InteriorBlind", conformance: "LF & TL" }),
        Field({ id: 0xb, name: "VerticalBlindStripCurtain", conformance: "LF & TL" }),
        Field({ id: 0xc, name: "InteriorVenetianBlind", conformance: "LF & TL" }),
        Field({ id: 0xd, name: "ExteriorVenetianBlind", conformance: "LF & TL" }),
        Field({ id: 0xe, name: "LateralLeftCurtain", conformance: "LF" }),
        Field({ id: 0xf, name: "LateralRightCurtain", conformance: "LF" }),
        Field({ id: 0x10, name: "CentralCurtain", conformance: "LF" }),
        Field({ id: 0x11, name: "RollerShutter", conformance: "LF" }),
        Field({ id: 0x12, name: "ExteriorVerticalScreen", conformance: "LF" }),
        Field({ id: 0x13, name: "AwningTerracePatio", conformance: "LF" }),
        Field({ id: 0x14, name: "AwningVerticalScreen", conformance: "LF" }),
        Field({ id: 0x15, name: "TiltOnlyPergola", conformance: "LF | TL" }),
        Field({ id: 0x16, name: "SwingingShutter", conformance: "LF | TL" }),
        Field({ id: 0x17, name: "SlidingShutter", conformance: "LF | TL" }),
        Field({ id: 0xff, name: "Unknown", conformance: "O" })
    ),

    Datatype(
        { name: "MovementStatus", type: "enum8" },
        Field({ id: 0x0, name: "Stopped" }),
        Field({ id: 0x1, name: "Opening" }),
        Field({ id: 0x2, name: "Closing" })
    )
);

MatterDefinition.children.push(WindowCovering);
