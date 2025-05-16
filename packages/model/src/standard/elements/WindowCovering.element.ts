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
    { name: "WindowCovering", id: 0x102 },
    Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 5 }),

    Attribute(
        { name: "FeatureMap", id: 0xfffc, type: "FeatureMap" },
        Field({ name: "LF", constraint: "0", conformance: "O.a+", longName: "Lift" }),
        Field({ name: "TL", constraint: "1", conformance: "O.a+", longName: "Tilt" }),
        Field({ name: "PA_LF", constraint: "2", conformance: "[LF]", longName: "PositionAwareLift" }),
        Field({ name: "ABS", constraint: "3", conformance: "O", longName: "AbsolutePosition" }),
        Field({ name: "PA_TL", constraint: "4", conformance: "[TL]", longName: "PositionAwareTilt" })
    ),

    Attribute({
        name: "Type", id: 0x0, type: "TypeEnum",
        default: 0, constraint: "desc", conformance: "M", access: "R V", quality: "F"
    }),
    Attribute({
        name: "PhysicalClosedLimitLift", id: 0x1, type: "uint16",
        default: 0, conformance: "[LF & PA_LF & ABS]", access: "R V", quality: "F"
    }),
    Attribute({
        name: "PhysicalClosedLimitTilt", id: 0x2, type: "uint16",
        default: 0, conformance: "[TL & PA_TL & ABS]", access: "R V", quality: "F"
    }),
    Attribute({
        name: "CurrentPositionLift", id: 0x3, type: "uint16",
        default: null, constraint: "installedOpenLimitLift to installedClosedLimitLift",
        conformance: "[LF & PA_LF & ABS]", access: "R V", quality: "X N"
    }),
    Attribute({
        name: "CurrentPositionTilt", id: 0x4, type: "uint16",
        default: null, constraint: "installedOpenLimitTilt to installedClosedLimitTilt",
        conformance: "[TL & PA_TL & ABS]", access: "R V", quality: "X N"
    }),
    Attribute({
        name: "NumberOfActuationsLift", id: 0x5, type: "uint16",
        default: 0, conformance: "[LF]", access: "R V", quality: "N"
    }),
    Attribute({
        name: "NumberOfActuationsTilt", id: 0x6, type: "uint16",
        default: 0, conformance: "[TL]", access: "R V", quality: "N"
    }),
    Attribute({
        name: "ConfigStatus", id: 0x7, type: "ConfigStatusBitmap",
        constraint: "desc", conformance: "M", access: "R V", quality: "N"
    }),
    Attribute({
        name: "CurrentPositionLiftPercentage", id: 0x8, type: "percent",
        default: null, conformance: "[LF & PA_LF]", access: "R V", quality: "X N P"
    }),
    Attribute({
        name: "CurrentPositionTiltPercentage", id: 0x9, type: "percent",
        default: null, conformance: "[TL & PA_TL]", access: "R V", quality: "X N P"
    }),
    Attribute({
        name: "OperationalStatus", id: 0xa, type: "OperationalStatusBitmap",
        default: 0, conformance: "M", access: "R V", quality: "P"
    }),
    Attribute({
        name: "TargetPositionLiftPercent100ths", id: 0xb, type: "percent100ths",
        default: null, conformance: "LF & PA_LF", access: "R V", quality: "X P"
    }),
    Attribute({
        name: "TargetPositionTiltPercent100ths", id: 0xc, type: "percent100ths",
        default: null, conformance: "TL & PA_TL", access: "R V", quality: "X P"
    }),
    Attribute({
        name: "EndProductType", id: 0xd, type: "EndProductTypeEnum",
        default: 0, constraint: "desc", conformance: "M", access: "R V", quality: "F"
    }),
    Attribute({
        name: "CurrentPositionLiftPercent100ths", id: 0xe, type: "percent100ths",
        default: null, constraint: "max 10000", conformance: "LF & PA_LF", access: "R V", quality: "X N P"
    }),
    Attribute({
        name: "CurrentPositionTiltPercent100ths", id: 0xf, type: "percent100ths",
        default: null, constraint: "max 10000", conformance: "TL & PA_TL", access: "R V", quality: "X N P"
    }),
    Attribute({
        name: "InstalledOpenLimitLift", id: 0x10, type: "uint16",
        default: 0, constraint: "max 65534", conformance: "LF & PA_LF & ABS", access: "R V", quality: "N"
    }),
    Attribute({
        name: "InstalledClosedLimitLift", id: 0x11, type: "uint16",
        default: 65534, constraint: "max 65534", conformance: "LF & PA_LF & ABS", access: "R V",
        quality: "N"
    }),
    Attribute({
        name: "InstalledOpenLimitTilt", id: 0x12, type: "uint16",
        default: 0, constraint: "max 65534", conformance: "TL & PA_TL & ABS", access: "R V", quality: "N"
    }),
    Attribute({
        name: "InstalledClosedLimitTilt", id: 0x13, type: "uint16",
        default: 65534, constraint: "max 65534", conformance: "TL & PA_TL & ABS", access: "R V",
        quality: "N"
    }),
    Attribute({ name: "VelocityLift", id: 0x14, conformance: "D" }),
    Attribute({ name: "AccelerationTimeLift", id: 0x15, conformance: "D" }),
    Attribute({ name: "DecelerationTimeLift", id: 0x16, conformance: "D" }),
    Attribute({ name: "Mode", id: 0x17, type: "ModeBitmap", default: 0, conformance: "M", access: "RW VM", quality: "N" }),
    Attribute({ name: "IntermediateSetpointsLift", id: 0x18, conformance: "D" }),
    Attribute({ name: "IntermediateSetpointsTilt", id: 0x19, conformance: "D" }),
    Attribute({
        name: "SafetyStatus", id: 0x1a, type: "SafetyStatusBitmap",
        default: 0, constraint: "desc", conformance: "O", access: "R V", quality: "P"
    }),
    Command({ name: "UpOrOpen", id: 0x0, conformance: "M", access: "O", direction: "request", response: "status" }),
    Command({ name: "DownOrClose", id: 0x1, conformance: "M", access: "O", direction: "request", response: "status" }),
    Command({ name: "StopMotion", id: 0x2, conformance: "M", access: "O", direction: "request", response: "status" }),

    Command(
        { name: "GoToLiftValue", id: 0x4, access: "O", direction: "request", response: "status" },
        Field({
            name: "LiftValue", id: 0x0, type: "uint16",
            constraint: "installedOpenLimitLift to installedClosedLimitLift", conformance: "M"
        })
    ),

    Command(
        { name: "GoToLiftPercentage", id: 0x5, access: "O", direction: "request", response: "status" },
        Field({ name: "LiftPercent100thsValue", id: 0x0, type: "percent100ths", constraint: "desc", conformance: "M" }),
        Field({ name: "Ignored", id: 0x1, conformance: "X" })
    ),

    Command(
        { name: "GoToTiltValue", id: 0x7, access: "O", direction: "request", response: "status" },
        Field({
            name: "TiltValue", id: 0x0, type: "uint16",
            constraint: "installedOpenLimitTilt to installedClosedLimitTilt", conformance: "M"
        })
    ),

    Command(
        { name: "GoToTiltPercentage", id: 0x8, access: "O", direction: "request", response: "status" },
        Field({ name: "TiltPercent100thsValue", id: 0x0, type: "percent100ths", constraint: "desc", conformance: "M" }),
        Field({ name: "Ignored", id: 0x1, conformance: "X" })
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
        Field({ name: "Rollershade", id: 0x0, conformance: "LF & !TL" }),
        Field({ name: "Rollershade2Motor", id: 0x1, conformance: "LF & !TL" }),
        Field({ name: "RollershadeExterior", id: 0x2, conformance: "LF & !TL" }),
        Field({ name: "RollershadeExterior2Motor", id: 0x3, conformance: "LF & !TL" }),
        Field({ name: "Drapery", id: 0x4, conformance: "LF & !TL" }),
        Field({ name: "Awning", id: 0x5, conformance: "LF & !TL" }),
        Field({ name: "Shutter", id: 0x6, conformance: "LF | TL" }),
        Field({ name: "TiltBlindTiltOnly", id: 0x7, conformance: "!LF & TL" }),
        Field({ name: "TiltBlindLift", id: 0x8, conformance: "LF & TL" }),
        Field({ name: "ProjectorScreen", id: 0x9, conformance: "LF & !TL" }),
        Field({ name: "Unknown", id: 0xff, conformance: "O" })
    ),

    Datatype(
        { name: "EndProductTypeEnum", type: "enum8" },
        Field({ name: "RollerShade", id: 0x0, conformance: "LF" }),
        Field({ name: "RomanShade", id: 0x1, conformance: "LF" }),
        Field({ name: "BalloonShade", id: 0x2, conformance: "LF" }),
        Field({ name: "WovenWood", id: 0x3, conformance: "LF" }),
        Field({ name: "PleatedShade", id: 0x4, conformance: "LF" }),
        Field({ name: "CellularShade", id: 0x5, conformance: "LF" }),
        Field({ name: "LayeredShade", id: 0x6, conformance: "LF" }),
        Field({ name: "LayeredShade2D", id: 0x7, conformance: "LF" }),
        Field({ name: "SheerShade", id: 0x8, conformance: "LF & TL" }),
        Field({ name: "TiltOnlyInteriorBlind", id: 0x9, conformance: "TL" }),
        Field({ name: "InteriorBlind", id: 0xa, conformance: "LF & TL" }),
        Field({ name: "VerticalBlindStripCurtain", id: 0xb, conformance: "LF & TL" }),
        Field({ name: "InteriorVenetianBlind", id: 0xc, conformance: "LF & TL" }),
        Field({ name: "ExteriorVenetianBlind", id: 0xd, conformance: "LF & TL" }),
        Field({ name: "LateralLeftCurtain", id: 0xe, conformance: "LF" }),
        Field({ name: "LateralRightCurtain", id: 0xf, conformance: "LF" }),
        Field({ name: "CentralCurtain", id: 0x10, conformance: "LF" }),
        Field({ name: "RollerShutter", id: 0x11, conformance: "LF" }),
        Field({ name: "ExteriorVerticalScreen", id: 0x12, conformance: "LF" }),
        Field({ name: "AwningTerracePatio", id: 0x13, conformance: "LF" }),
        Field({ name: "AwningVerticalScreen", id: 0x14, conformance: "LF" }),
        Field({ name: "TiltOnlyPergola", id: 0x15, conformance: "LF | TL" }),
        Field({ name: "SwingingShutter", id: 0x16, conformance: "LF | TL" }),
        Field({ name: "SlidingShutter", id: 0x17, conformance: "LF | TL" }),
        Field({ name: "Unknown", id: 0xff, conformance: "O" })
    ),

    Datatype(
        { name: "MovementStatus", type: "enum8" },
        Field({ name: "Stopped", id: 0x0 }),
        Field({ name: "Opening", id: 0x1 }),
        Field({ name: "Closing", id: 0x2 })
    )
);

MatterDefinition.children.push(WindowCovering);
