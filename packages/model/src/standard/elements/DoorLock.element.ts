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
    EventElement as Event,
    CommandElement as Command,
    DatatypeElement as Datatype
} from "../../elements/index.js";

export const DoorLock = Cluster(
    { name: "DoorLock", id: 0x101 },
    Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 8 }),

    Attribute(
        { name: "FeatureMap", id: 0xfffc, type: "FeatureMap" },
        Field({ name: "PIN", constraint: "0", conformance: "O", longName: "PinCredential" }),
        Field({ name: "RID", constraint: "1", conformance: "O", longName: "RfidCredential" }),
        Field({ name: "FGP", constraint: "2", conformance: "P, O", longName: "FingerCredentials" }),
        Field({ name: "WDSCH", constraint: "4", conformance: "O", longName: "WeekDayAccessSchedules" }),
        Field({ name: "DPS", constraint: "5", conformance: "O", longName: "DoorPositionSensor" }),
        Field({ name: "FACE", constraint: "6", conformance: "P, O", longName: "FaceCredentials" }),
        Field({ name: "COTA", constraint: "7", conformance: "O", longName: "CredentialOverTheAirAccess" }),
        Field({ name: "USR", constraint: "8", conformance: "ALIRO, [PIN | RID | FGP | FACE]", longName: "User" }),
        Field({ name: "YDSCH", constraint: "10", conformance: "O", longName: "YearDayAccessSchedules" }),
        Field({ name: "HDSCH", constraint: "11", conformance: "O", longName: "HolidaySchedules" }),
        Field({ name: "UBOLT", constraint: "12", conformance: "O", longName: "Unbolting" }),
        Field({ name: "ALIRO", constraint: "13", conformance: "O", longName: "AliroProvisioning" }),
        Field({ name: "ALBU", constraint: "14", conformance: "[ALIRO]", longName: "AliroBleuwb" })
    ),

    Attribute({
        name: "LockState", id: 0x0, type: "LockStateEnum",
        constraint: "desc", conformance: "M", access: "R V", quality: "X P"
    }),
    Attribute({ name: "LockType", id: 0x1, type: "LockTypeEnum", constraint: "desc", conformance: "M", access: "R V" }),
    Attribute({ name: "ActuatorEnabled", id: 0x2, type: "bool", conformance: "M", access: "R V" }),
    Attribute({
        name: "DoorState", id: 0x3, type: "DoorStateEnum",
        constraint: "desc", conformance: "DPS", access: "R V", quality: "X P"
    }),
    Attribute({ name: "DoorOpenEvents", id: 0x4, type: "uint32", conformance: "[DPS]", access: "RW VM" }),
    Attribute({ name: "DoorClosedEvents", id: 0x5, type: "uint32", conformance: "[DPS]", access: "RW VM" }),
    Attribute({ name: "OpenPeriod", id: 0x6, type: "uint16", conformance: "[DPS]", access: "RW VM" }),
    Attribute({
        name: "NumberOfTotalUsersSupported", id: 0x11, type: "uint16",
        default: 0, conformance: "USR", access: "R V", quality: "F"
    }),
    Attribute({
        name: "NumberOfPinUsersSupported", id: 0x12, type: "uint16",
        default: 0, conformance: "PIN", access: "R V", quality: "F"
    }),
    Attribute({
        name: "NumberOfRfidUsersSupported", id: 0x13, type: "uint16",
        default: 0, conformance: "RID", access: "R V", quality: "F"
    }),
    Attribute({
        name: "NumberOfWeekDaySchedulesSupportedPerUser", id: 0x14, type: "uint8",
        default: 0, constraint: "max 253", conformance: "WDSCH", access: "R V", quality: "F"
    }),
    Attribute({
        name: "NumberOfYearDaySchedulesSupportedPerUser", id: 0x15, type: "uint8",
        default: 0, constraint: "max 253", conformance: "YDSCH", access: "R V", quality: "F"
    }),
    Attribute({
        name: "NumberOfHolidaySchedulesSupported", id: 0x16, type: "uint8",
        default: 0, constraint: "max 253", conformance: "HDSCH", access: "R V", quality: "F"
    }),
    Attribute({ name: "MaxPinCodeLength", id: 0x17, type: "uint8", conformance: "PIN", access: "R V", quality: "F" }),
    Attribute({ name: "MinPinCodeLength", id: 0x18, type: "uint8", conformance: "PIN", access: "R V", quality: "F" }),
    Attribute({ name: "MaxRfidCodeLength", id: 0x19, type: "uint8", conformance: "RID", access: "R V", quality: "F" }),
    Attribute({ name: "MinRfidCodeLength", id: 0x1a, type: "uint8", conformance: "RID", access: "R V", quality: "F" }),
    Attribute({
        name: "CredentialRulesSupport", id: 0x1b, type: "CredentialRulesBitmap",
        default: 1, conformance: "USR", access: "R V", quality: "F"
    }),
    Attribute({
        name: "NumberOfCredentialsSupportedPerUser", id: 0x1c, type: "uint8",
        default: 0, conformance: "USR", access: "R V", quality: "F"
    }),
    Attribute({
        name: "Language", id: 0x21, type: "string",
        constraint: "max 3", conformance: "O", access: "R[W] VM", quality: "P"
    }),
    Attribute({
        name: "LedSettings", id: 0x22, type: "LEDSettingEnum",
        default: 0, conformance: "O", access: "R[W] VM", quality: "P"
    }),
    Attribute({ name: "AutoRelockTime", id: 0x23, type: "uint32", conformance: "O", access: "R[W] VM", quality: "P" }),
    Attribute({
        name: "SoundVolume", id: 0x24, type: "SoundVolumeEnum",
        default: 0, conformance: "O", access: "R[W] VM", quality: "P"
    }),
    Attribute({
        name: "OperatingMode", id: 0x25, type: "OperatingModeEnum",
        default: 0, constraint: "desc", conformance: "M", access: "R[W] VM", quality: "P"
    }),
    Attribute({
        name: "SupportedOperatingModes", id: 0x26, type: "OperatingModesBitmap",
        default: 65526, conformance: "M", access: "R V", quality: "F"
    }),
    Attribute({
        name: "DefaultConfigurationRegister", id: 0x27, type: "ConfigurationRegisterBitmap",
        default: 0, conformance: "O", access: "R V", quality: "P"
    }),
    Attribute({
        name: "EnableLocalProgramming", id: 0x28, type: "bool",
        default: true, conformance: "O", access: "R[W] VA", quality: "P"
    }),
    Attribute({
        name: "EnableOneTouchLocking", id: 0x29, type: "bool",
        default: true, conformance: "O", access: "RW VM", quality: "P"
    }),
    Attribute({
        name: "EnableInsideStatusLed", id: 0x2a, type: "bool",
        default: true, conformance: "O", access: "RW VM", quality: "P"
    }),
    Attribute({
        name: "EnablePrivacyModeButton", id: 0x2b, type: "bool",
        default: true, conformance: "O", access: "RW VM", quality: "P"
    }),
    Attribute({
        name: "LocalProgrammingFeatures", id: 0x2c, type: "LocalProgrammingFeaturesBitmap",
        default: 0, conformance: "O", access: "R[W] VA", quality: "P"
    }),
    Attribute({
        name: "WrongCodeEntryLimit", id: 0x30, type: "uint8",
        constraint: "1 to 255", conformance: "PIN | RID", access: "R[W] VA", quality: "P"
    }),
    Attribute({
        name: "UserCodeTemporaryDisableTime", id: 0x31, type: "uint8",
        constraint: "1 to 255", conformance: "PIN | RID", access: "R[W] VA", quality: "P"
    }),
    Attribute({
        name: "SendPinOverTheAir", id: 0x32, type: "bool",
        default: true, conformance: "[!USR & PIN]", access: "R[W] VA", quality: "P"
    }),
    Attribute({ name: "RequirePinForRemoteOperation", id: 0x33, type: "bool", default: true, access: "R[W] VA", quality: "P" }),
    Attribute({ name: "SecurityLevel", id: 0x34, default: "0", conformance: "D", access: "R V" }),
    Attribute({
        name: "ExpiringUserTimeout", id: 0x35, type: "uint16",
        constraint: "1 to 2880", conformance: "[USR]", access: "R[W] VA", quality: "P"
    }),
    Attribute({
        name: "AlarmMask", id: 0x40, type: "AlarmMaskBitmap",
        default: 65535, conformance: "O", access: "RW VA", quality: "P"
    }),
    Attribute({
        name: "AliroReaderVerificationKey", id: 0x80, type: "octstr",
        default: null, constraint: "65", conformance: "ALIRO", access: "R A", quality: "X"
    }),
    Attribute({
        name: "AliroReaderGroupIdentifier", id: 0x81, type: "octstr",
        default: null, constraint: "16", conformance: "ALIRO", access: "R A", quality: "X"
    }),
    Attribute({
        name: "AliroReaderGroupSubIdentifier", id: 0x82, type: "octstr",
        constraint: "16", conformance: "ALIRO", access: "R A", quality: "F"
    }),

    Attribute(
        {
            name: "AliroExpeditedTransactionSupportedProtocolVersions", id: 0x83, type: "list",
            default: [], constraint: "max 16[2]", conformance: "ALIRO", access: "R A", quality: "F"
        },
        Field({ name: "entry", type: "octstr" })
    ),

    Attribute({
        name: "AliroGroupResolvingKey", id: 0x84, type: "octstr",
        default: null, constraint: "16", conformance: "ALBU", access: "R A", quality: "X"
    }),

    Attribute(
        {
            name: "AliroSupportedBleuwbProtocolVersions", id: 0x85, type: "list",
            default: [], constraint: "max 16[2]", conformance: "ALBU", access: "R A", quality: "F"
        },
        Field({ name: "entry", type: "octstr" })
    ),

    Attribute({
        name: "AliroBleAdvertisingVersion", id: 0x86, type: "uint8",
        default: 0, conformance: "ALBU", access: "R A", quality: "F"
    }),
    Attribute({
        name: "NumberOfAliroCredentialIssuerKeysSupported", id: 0x87, type: "uint16",
        default: 0, conformance: "ALIRO", access: "R V", quality: "F"
    }),
    Attribute({
        name: "NumberOfAliroEndpointKeysSupported", id: 0x88, type: "uint16",
        default: 0, conformance: "ALIRO", access: "R V", quality: "F"
    }),
    Event(
        { name: "DoorLockAlarm", id: 0x0, conformance: "M", access: "V", priority: "critical" },
        Field({ name: "AlarmCode", id: 0x0, type: "AlarmCodeEnum", conformance: "M" })
    ),
    Event(
        { name: "DoorStateChange", id: 0x1, conformance: "DPS", access: "V", priority: "critical" },
        Field({ name: "DoorState", id: 0x0, type: "DoorStateEnum", conformance: "M" })
    ),

    Event(
        { name: "LockOperation", id: 0x2, conformance: "M", access: "V", priority: "critical" },
        Field({ name: "LockOperationType", id: 0x0, type: "LockOperationTypeEnum", conformance: "M" }),
        Field({ name: "OperationSource", id: 0x1, type: "OperationSourceEnum", conformance: "M" }),
        Field({ name: "UserIndex", id: 0x2, type: "uint16", conformance: "M", quality: "X" }),
        Field({ name: "FabricIndex", id: 0x3, type: "fabric-idx", conformance: "M", quality: "X" }),
        Field({ name: "SourceNode", id: 0x4, type: "node-id", conformance: "M", quality: "X" }),

        Field(
            {
                name: "Credentials", id: 0x5, type: "list",
                constraint: "1 to numberOfCredentialsSupportedPerUser", conformance: "[USR]", quality: "X"
            },
            Field({ name: "entry", type: "CredentialStruct" })
        )
    ),

    Event(
        { name: "LockOperationError", id: 0x3, conformance: "M", access: "V", priority: "critical" },
        Field({ name: "LockOperationType", id: 0x0, type: "LockOperationTypeEnum", conformance: "M" }),
        Field({ name: "OperationSource", id: 0x1, type: "OperationSourceEnum", conformance: "M" }),
        Field({ name: "OperationError", id: 0x2, type: "OperationErrorEnum", conformance: "M" }),
        Field({ name: "UserIndex", id: 0x3, type: "uint16", conformance: "M", quality: "X" }),
        Field({ name: "FabricIndex", id: 0x4, type: "fabric-idx", conformance: "M", quality: "X" }),
        Field({ name: "SourceNode", id: 0x5, type: "node-id", conformance: "M", quality: "X" }),

        Field(
            {
                name: "Credentials", id: 0x6, type: "list",
                constraint: "1 to numberOfCredentialsSupportedPerUser", conformance: "[USR]", quality: "X"
            },
            Field({ name: "entry", type: "CredentialStruct" })
        )
    ),

    Event(
        { name: "LockUserChange", id: 0x4, conformance: "USR", access: "V", priority: "info" },
        Field({ name: "LockDataType", id: 0x0, type: "LockDataTypeEnum", conformance: "M" }),
        Field({ name: "DataOperationType", id: 0x1, type: "DataOperationTypeEnum", conformance: "M" }),
        Field({
            name: "OperationSource", id: 0x2, type: "OperationSourceEnum",
            constraint: "aliro, unspecified, keypad, remote", conformance: "M"
        }),
        Field({ name: "UserIndex", id: 0x3, type: "uint16", conformance: "M", quality: "X" }),
        Field({ name: "FabricIndex", id: 0x4, type: "fabric-idx", conformance: "M", quality: "X" }),
        Field({ name: "SourceNode", id: 0x5, type: "node-id", conformance: "M", quality: "X" }),
        Field({ name: "DataIndex", id: 0x6, type: "uint16", conformance: "M", quality: "X" })
    ),

    Command(
        { name: "LockDoor", id: 0x0, conformance: "M", access: "O T", direction: "request", response: "status" },
        Field({ name: "PinCode", id: 0x0, type: "octstr", conformance: "[COTA & PIN]" })
    ),
    Command(
        { name: "UnlockDoor", id: 0x1, conformance: "M", access: "O T", direction: "request", response: "status" },
        Field({ name: "PinCode", id: 0x0, type: "octstr", conformance: "[COTA & PIN]" })
    ),
    Command({ name: "Toggle", id: 0x2, conformance: "X", access: "O T", direction: "request", response: "status" }),

    Command(
        {
            name: "UnlockWithTimeout", id: 0x3,
            conformance: "O", access: "O T", direction: "request", response: "status"
        },
        Field({ name: "Timeout", id: 0x0, type: "uint16", conformance: "M" }),
        Field({ name: "PinCode", id: 0x1, type: "octstr", conformance: "[COTA & PIN]" })
    ),

    Command(
        {
            name: "SetPinCode", id: 0x5,
            conformance: "!USR & PIN", access: "A T", direction: "request", response: "status"
        },
        Field({ name: "UserId", id: 0x0, type: "uint16", constraint: "desc", conformance: "M" }),
        Field({
            name: "UserStatus", id: 0x1, type: "UserStatusEnum",
            default: 1, constraint: "desc", conformance: "M", quality: "X"
        }),
        Field({ name: "UserType", id: 0x2, type: "UserTypeEnum", default: 0, conformance: "M", quality: "X" }),
        Field({ name: "Pin", id: 0x3, type: "octstr", conformance: "M" })
    ),

    Command(
        {
            name: "GetPinCode", id: 0x6,
            conformance: "!USR & PIN", access: "A", direction: "request", response: "GetPinCodeResponse"
        },
        Field({ name: "UserId", id: 0x0, type: "uint16", constraint: "desc", conformance: "M" })
    ),

    Command(
        { name: "GetPinCodeResponse", id: 0x6, conformance: "!USR & PIN", direction: "response" },
        Field({ name: "UserId", id: 0x0, type: "uint16", constraint: "desc", conformance: "M" }),
        Field({
            name: "UserStatus", id: 0x1, type: "UserStatusEnum",
            default: 0, constraint: "desc", conformance: "M", quality: "X"
        }),
        Field({ name: "UserType", id: 0x2, type: "UserTypeEnum", constraint: "desc", conformance: "M", quality: "X" }),
        Field({ name: "PinCode", id: 0x3, type: "octstr", conformance: "M", quality: "X" })
    ),

    Command(
        {
            name: "ClearPinCode", id: 0x7,
            conformance: "!USR & PIN", access: "A T", direction: "request", response: "status"
        },
        Field({
            name: "PinSlotIndex", id: 0x0, type: "uint16",
            constraint: "1 to numberOfPinUsersSupported, 65534", conformance: "M"
        })
    ),

    Command({
        name: "ClearAllPinCodes", id: 0x8,
        conformance: "!USR & PIN", access: "A T", direction: "request", response: "status"
    }),

    Command(
        {
            name: "SetUserStatus", id: 0x9,
            conformance: "!USR & (PIN | RID | FGP)", access: "A", direction: "request", response: "status"
        },
        Field({ name: "UserId", id: 0x0, type: "uint16", constraint: "desc", conformance: "M" }),
        Field({ name: "UserStatus", id: 0x1, type: "UserStatusEnum", constraint: "desc", conformance: "M" })
    ),

    Command(
        {
            name: "GetUserStatus", id: 0xa,
            conformance: "!USR & (PIN | RID | FGP)", access: "A", direction: "request",
            response: "GetUserStatusResponse"
        },
        Field({ name: "UserId", id: 0x0, type: "uint16", constraint: "desc", conformance: "M" })
    ),

    Command(
        { name: "GetUserStatusResponse", id: 0xa, conformance: "!USR", direction: "response" },
        Field({ name: "UserId", id: 0x0, type: "uint16", constraint: "desc", conformance: "M" }),
        Field({ name: "UserStatus", id: 0x1, type: "UserStatusEnum", conformance: "M" })
    ),

    Command(
        {
            name: "SetWeekDaySchedule", id: 0xb,
            conformance: "WDSCH", access: "A", direction: "request", response: "status"
        },
        Field({
            name: "WeekDayIndex", id: 0x0, type: "uint8",
            constraint: "1 to numberOfWeekDaySchedulesSupportedPerUser", conformance: "M"
        }),
        Field({
            name: "UserIndex", id: 0x1, type: "uint16",
            constraint: "1 to numberOfTotalUsersSupported", conformance: "M"
        }),
        Field({ name: "DaysMask", id: 0x2, type: "DaysMaskBitmap", conformance: "M" }),
        Field({ name: "StartHour", id: 0x3, type: "uint8", constraint: "max 23", conformance: "M" }),
        Field({ name: "StartMinute", id: 0x4, type: "uint8", constraint: "max 59", conformance: "M" }),
        Field({ name: "EndHour", id: 0x5, type: "uint8", constraint: "max 23", conformance: "M" }),
        Field({ name: "EndMinute", id: 0x6, type: "uint8", constraint: "max 59", conformance: "M" })
    ),

    Command(
        {
            name: "GetWeekDaySchedule", id: 0xc,
            conformance: "WDSCH", access: "A", direction: "request", response: "GetWeekDayScheduleResponse"
        },
        Field({
            name: "WeekDayIndex", id: 0x0, type: "uint8",
            constraint: "1 to numberOfWeekDaySchedulesSupportedPerUser", conformance: "M"
        }),
        Field({
            name: "UserIndex", id: 0x1, type: "uint16",
            constraint: "1 to numberOfTotalUsersSupported", conformance: "M"
        })
    ),

    Command(
        { name: "GetWeekDayScheduleResponse", id: 0xc, conformance: "WDSCH", direction: "response" },
        Field({
            name: "WeekDayIndex", id: 0x0, type: "uint8",
            constraint: "1 to numberOfWeekDaySchedulesSupportedPerUser", conformance: "M"
        }),
        Field({
            name: "UserIndex", id: 0x1, type: "uint16",
            constraint: "1 to numberOfTotalUsersSupported", conformance: "M"
        }),
        Field({ name: "Status", id: 0x2, type: "status", default: 0, constraint: "desc", conformance: "M" }),
        Field({ name: "DaysMask", id: 0x3, type: "DaysMaskBitmap", conformance: "O" }),
        Field({ name: "StartHour", id: 0x4, type: "uint8", constraint: "max 23", conformance: "O" }),
        Field({ name: "StartMinute", id: 0x5, type: "uint8", constraint: "max 59", conformance: "O" }),
        Field({ name: "EndHour", id: 0x6, type: "uint8", constraint: "max 23", conformance: "O" }),
        Field({ name: "EndMinute", id: 0x7, type: "uint8", constraint: "max 59", conformance: "O" })
    ),

    Command(
        {
            name: "ClearWeekDaySchedule", id: 0xd,
            conformance: "WDSCH", access: "A", direction: "request", response: "status"
        },
        Field({
            name: "WeekDayIndex", id: 0x0, type: "uint8",
            constraint: "1 to numberOfWeekDaySchedulesSupportedPerUser, 254", conformance: "M"
        }),
        Field({
            name: "UserIndex", id: 0x1, type: "uint16",
            constraint: "1 to numberOfTotalUsersSupported", conformance: "M"
        })
    ),

    Command(
        {
            name: "SetYearDaySchedule", id: 0xe,
            conformance: "YDSCH", access: "A", direction: "request", response: "status"
        },
        Field({
            name: "YearDayIndex", id: 0x0, type: "uint8",
            constraint: "1 to numberOfYearDaySchedulesSupportedPerUser", conformance: "M"
        }),
        Field({
            name: "UserIndex", id: 0x1, type: "uint16",
            constraint: "1 to numberOfTotalUsersSupported", conformance: "M"
        }),
        Field({ name: "LocalStartTime", id: 0x2, type: "epoch-s", conformance: "M" }),
        Field({ name: "LocalEndTime", id: 0x3, type: "epoch-s", conformance: "M" })
    ),

    Command(
        {
            name: "GetYearDaySchedule", id: 0xf,
            conformance: "YDSCH", access: "A", direction: "request", response: "GetYearDayScheduleResponse"
        },
        Field({
            name: "YearDayIndex", id: 0x0, type: "uint8",
            constraint: "1 to numberOfYearDaySchedulesSupportedPerUser", conformance: "M"
        }),
        Field({
            name: "UserIndex", id: 0x1, type: "uint16",
            constraint: "1 to numberOfTotalUsersSupported", conformance: "M"
        })
    ),

    Command(
        { name: "GetYearDayScheduleResponse", id: 0xf, direction: "response" },
        Field({
            name: "YearDayIndex", id: 0x0, type: "uint8",
            constraint: "1 to numberOfYearDaySchedulesSupportedPerUser", conformance: "M"
        }),
        Field({
            name: "UserIndex", id: 0x1, type: "uint16",
            constraint: "1 to numberOfTotalUsersSupported", conformance: "M"
        }),
        Field({ name: "Status", id: 0x2, type: "status", default: 0, constraint: "desc" }),
        Field({ name: "LocalStartTime", id: 0x3, type: "epoch-s" }),
        Field({ name: "LocalEndTime", id: 0x4, type: "epoch-s" })
    ),

    Command(
        {
            name: "ClearYearDaySchedule", id: 0x10,
            conformance: "YDSCH", access: "A", direction: "request", response: "status"
        },
        Field({
            name: "YearDayIndex", id: 0x0, type: "uint8",
            constraint: "1 to numberOfYearDaySchedulesSupportedPerUser, 254", conformance: "M"
        }),
        Field({
            name: "UserIndex", id: 0x1, type: "uint16",
            constraint: "1 to numberOfTotalUsersSupported", conformance: "M"
        })
    ),

    Command(
        {
            name: "SetHolidaySchedule", id: 0x11,
            conformance: "HDSCH", access: "A", direction: "request", response: "status"
        },
        Field({
            name: "HolidayIndex", id: 0x0, type: "uint8",
            constraint: "1 to numberOfHolidaySchedulesSupported", conformance: "M"
        }),
        Field({ name: "LocalStartTime", id: 0x1, type: "epoch-s", conformance: "M" }),
        Field({ name: "LocalEndTime", id: 0x2, type: "epoch-s", conformance: "M" }),
        Field({ name: "OperatingMode", id: 0x3, type: "OperatingModeEnum", conformance: "M" })
    ),

    Command(
        {
            name: "GetHolidaySchedule", id: 0x12,
            conformance: "HDSCH", access: "A", direction: "request", response: "GetHolidayScheduleResponse"
        },
        Field({
            name: "HolidayIndex", id: 0x0, type: "uint8",
            constraint: "1 to numberOfHolidaySchedulesSupported", conformance: "M"
        })
    ),

    Command(
        { name: "GetHolidayScheduleResponse", id: 0x12, conformance: "HDSCH", direction: "response" },
        Field({
            name: "HolidayIndex", id: 0x0, type: "uint8",
            constraint: "1 to numberOfHolidaySchedulesSupported", conformance: "M"
        }),
        Field({ name: "Status", id: 0x1, type: "status", default: 0, constraint: "desc", conformance: "M" }),
        Field({ name: "LocalStartTime", id: 0x2, type: "epoch-s", conformance: "O", quality: "X" }),
        Field({ name: "LocalEndTime", id: 0x3, type: "epoch-s", conformance: "O", quality: "X" }),
        Field({ name: "OperatingMode", id: 0x4, type: "OperatingModeEnum", conformance: "O", quality: "X" })
    ),

    Command(
        {
            name: "ClearHolidaySchedule", id: 0x13,
            conformance: "HDSCH", access: "A", direction: "request", response: "status"
        },
        Field({
            name: "HolidayIndex", id: 0x0, type: "uint8",
            constraint: "1 to numberOfHolidaySchedulesSupported, 254", conformance: "M"
        })
    ),

    Command(
        {
            name: "SetUserType", id: 0x14,
            conformance: "!USR & (PIN | RID | FGP)", access: "A", direction: "request", response: "status"
        },
        Field({ name: "UserId", id: 0x0, type: "uint16", constraint: "desc", conformance: "M" }),
        Field({ name: "UserType", id: 0x1, type: "UserTypeEnum", conformance: "M" })
    ),

    Command(
        {
            name: "GetUserType", id: 0x15,
            conformance: "!USR & (PIN | RID | FGP)", access: "A", direction: "request",
            response: "GetUserTypeResponse"
        },
        Field({ name: "UserId", id: 0x0, type: "uint16", constraint: "desc", conformance: "M" })
    ),

    Command(
        { name: "GetUserTypeResponse", id: 0x15, conformance: "!USR", direction: "response" },
        Field({ name: "UserId", id: 0x0, type: "uint16", constraint: "desc", conformance: "M" }),
        Field({ name: "UserType", id: 0x1, type: "UserTypeEnum", conformance: "M" })
    ),

    Command(
        {
            name: "SetRfidCode", id: 0x16,
            conformance: "!USR & RID", access: "A T", direction: "request", response: "status"
        },
        Field({ name: "UserId", id: 0x0, type: "uint16", constraint: "desc", conformance: "M" }),
        Field({
            name: "UserStatus", id: 0x1, type: "UserStatusEnum",
            default: 1, constraint: "desc", conformance: "M", quality: "X"
        }),
        Field({
            name: "UserType", id: 0x2, type: "UserTypeEnum",
            default: 0, constraint: "desc", conformance: "M", quality: "X"
        }),
        Field({ name: "RfidCode", id: 0x3, type: "octstr", conformance: "M" })
    ),

    Command(
        {
            name: "GetRfidCode", id: 0x17,
            conformance: "!USR & RID", access: "A", direction: "request", response: "GetRfidCodeResponse"
        },
        Field({ name: "UserId", id: 0x0, type: "uint16", constraint: "desc", conformance: "M" })
    ),

    Command(
        { name: "GetRfidCodeResponse", id: 0x17, conformance: "!USR & RID", direction: "response" },
        Field({ name: "UserId", id: 0x0, type: "uint16", constraint: "desc", conformance: "M" }),
        Field({
            name: "UserStatus", id: 0x1, type: "UserStatusEnum",
            default: 0, constraint: "desc", conformance: "M", quality: "X"
        }),
        Field({ name: "UserType", id: 0x2, type: "UserTypeEnum", constraint: "desc", conformance: "M", quality: "X" }),
        Field({ name: "RfidCode", id: 0x3, type: "octstr", conformance: "M", quality: "X" })
    ),

    Command(
        {
            name: "ClearRfidCode", id: 0x18,
            conformance: "!USR & RID", access: "A T", direction: "request", response: "status"
        },
        Field({
            name: "RfidSlotIndex", id: 0x0, type: "uint16",
            constraint: "1 to numberOfRfidUsersSupported, 65534", conformance: "M"
        })
    ),

    Command({
        name: "ClearAllRfidCodes", id: 0x19,
        conformance: "!USR & RID", access: "A T", direction: "request", response: "status"
    }),

    Command(
        { name: "SetUser", id: 0x1a, conformance: "USR", access: "A T", direction: "request", response: "status" },
        Field({ name: "OperationType", id: 0x0, type: "DataOperationTypeEnum", constraint: "add, modify", conformance: "M" }),
        Field({
            name: "UserIndex", id: 0x1, type: "uint16",
            constraint: "1 to numberOfTotalUsersSupported", conformance: "M"
        }),
        Field({ name: "UserName", id: 0x2, type: "string", constraint: "max 10", conformance: "M", quality: "X" }),
        Field({ name: "UserUniqueId", id: 0x3, type: "uint32", default: 4294967295, conformance: "M", quality: "X" }),
        Field({
            name: "UserStatus", id: 0x4, type: "UserStatusEnum",
            default: 1, constraint: "occupiedEnabled, occupiedDisabled", conformance: "M", quality: "X"
        }),

        Field({
            name: "UserType", id: 0x5, type: "UserTypeEnum",
            default: 0,
            constraint: "unrestrictedUser, nonAccessUser, forcedUser, disposableUser, expiringUser, scheduleRestrictedUser, remoteOnlyUser",
            conformance: "M", quality: "X"
        }),

        Field({ name: "CredentialRule", id: 0x6, type: "CredentialRuleEnum", default: 0, conformance: "M", quality: "X" })
    ),

    Command(
        {
            name: "GetUser", id: 0x1b,
            conformance: "USR", access: "A", direction: "request", response: "GetUserResponse"
        },
        Field({
            name: "UserIndex", id: 0x0, type: "uint16",
            constraint: "1 to numberOfTotalUsersSupported", conformance: "M"
        })
    ),

    Command(
        { name: "GetUserResponse", id: 0x1c, conformance: "USR", direction: "response" },
        Field({
            name: "UserIndex", id: 0x0, type: "uint16",
            constraint: "1 to numberOfTotalUsersSupported", conformance: "M"
        }),
        Field({ name: "UserName", id: 0x1, type: "string", constraint: "max 10", conformance: "M", quality: "X" }),
        Field({ name: "UserUniqueId", id: 0x2, type: "uint32", default: 0, conformance: "M", quality: "X" }),
        Field({ name: "UserStatus", id: 0x3, type: "UserStatusEnum", default: 0, conformance: "M", quality: "X" }),
        Field({ name: "UserType", id: 0x4, type: "UserTypeEnum", default: 0, conformance: "M", quality: "X" }),
        Field({
            name: "CredentialRule", id: 0x5, type: "CredentialRuleEnum",
            default: 0, constraint: "desc", conformance: "M", quality: "X"
        }),

        Field(
            {
                name: "Credentials", id: 0x6, type: "list",
                constraint: "0 to numberOfCredentialsSupportedPerUser", conformance: "M", quality: "X"
            },
            Field({ name: "entry", type: "CredentialStruct" })
        ),

        Field({ name: "CreatorFabricIndex", id: 0x7, type: "fabric-idx", conformance: "M", quality: "X" }),
        Field({ name: "LastModifiedFabricIndex", id: 0x8, type: "fabric-idx", conformance: "M", quality: "X" }),
        Field({
            name: "NextUserIndex", id: 0x9, type: "uint16",
            constraint: "1 to numberOfTotalUsersSupported", conformance: "M", quality: "X"
        })
    ),

    Command(
        { name: "ClearUser", id: 0x1d, conformance: "USR", access: "A T", direction: "request", response: "status" },
        Field({
            name: "UserIndex", id: 0x0, type: "uint16",
            constraint: "1 to numberOfTotalUsersSupported, 65534", conformance: "M"
        })
    ),

    Command(
        {
            name: "SetCredential", id: 0x22,
            conformance: "USR", access: "A T", direction: "request", response: "SetCredentialResponse"
        },
        Field({ name: "OperationType", id: 0x0, type: "DataOperationTypeEnum", constraint: "add, modify", conformance: "M" }),
        Field({ name: "Credential", id: 0x1, type: "CredentialStruct", conformance: "M" }),
        Field({ name: "CredentialData", id: 0x2, type: "octstr", constraint: "desc", conformance: "M" }),
        Field({
            name: "UserIndex", id: 0x3, type: "uint16",
            constraint: "1 to numberOfTotalUsersSupported", conformance: "M", quality: "X"
        }),
        Field({
            name: "UserStatus", id: 0x4, type: "UserStatusEnum",
            default: 1, constraint: "occupiedEnabled, occupiedDisabled", conformance: "M", quality: "X"
        }),

        Field({
            name: "UserType", id: 0x5, type: "UserTypeEnum",
            default: 0,
            constraint: "unrestrictedUser, programmingUser, nonAccessUser, forcedUser, disposableUser, expiringUser, remoteOnlyUser",
            conformance: "M", quality: "X"
        })
    ),

    Command(
        { name: "SetCredentialResponse", id: 0x23, conformance: "USR", direction: "response" },
        Field({ name: "Status", id: 0x0, type: "status", constraint: "desc", conformance: "M" }),
        Field({
            name: "UserIndex", id: 0x1, type: "uint16",
            default: 0, constraint: "1 to numberOfTotalUsersSupported", conformance: "M", quality: "X"
        }),
        Field({ name: "NextCredentialIndex", id: 0x2, type: "uint16", constraint: "desc", conformance: "O", quality: "X" })
    ),

    Command(
        {
            name: "GetCredentialStatus", id: 0x24,
            conformance: "USR", access: "A", direction: "request", response: "GetCredentialStatusResponse"
        },
        Field({ name: "Credential", id: 0x0, type: "CredentialStruct", conformance: "M" })
    ),

    Command(
        { name: "GetCredentialStatusResponse", id: 0x25, conformance: "USR", direction: "response" },
        Field({ name: "CredentialExists", id: 0x0, type: "bool", conformance: "M" }),
        Field({
            name: "UserIndex", id: 0x1, type: "uint16",
            constraint: "1 to numberOfTotalUsersSupported", conformance: "M", quality: "X"
        }),
        Field({ name: "CreatorFabricIndex", id: 0x2, type: "fabric-idx", conformance: "M", quality: "X" }),
        Field({ name: "LastModifiedFabricIndex", id: 0x3, type: "fabric-idx", conformance: "M", quality: "X" }),
        Field({ name: "NextCredentialIndex", id: 0x4, type: "uint16", constraint: "desc", conformance: "O", quality: "X" }),
        Field({ name: "CredentialData", id: 0x5, type: "octstr", constraint: "desc", conformance: "[ALIRO]", quality: "X" })
    ),

    Command(
        {
            name: "ClearCredential", id: 0x26,
            conformance: "USR", access: "A T", direction: "request", response: "status"
        },
        Field({ name: "Credential", id: 0x0, type: "CredentialStruct", constraint: "desc", conformance: "M", quality: "X" })
    ),

    Command(
        { name: "UnboltDoor", id: 0x27, conformance: "UBOLT", access: "O T", direction: "request", response: "status" },
        Field({ name: "PinCode", id: 0x0, type: "octstr", conformance: "[COTA & PIN]" })
    ),

    Command(
        {
            name: "SetAliroReaderConfig", id: 0x28,
            conformance: "ALIRO", access: "A T", direction: "request", response: "status"
        },
        Field({ name: "SigningKey", id: 0x0, type: "octstr", constraint: "32", conformance: "M" }),
        Field({ name: "VerificationKey", id: 0x1, type: "octstr", constraint: "65", conformance: "M" }),
        Field({ name: "GroupIdentifier", id: 0x2, type: "octstr", constraint: "16", conformance: "M" }),
        Field({ name: "GroupResolvingKey", id: 0x3, type: "octstr", constraint: "16", conformance: "ALBU" })
    ),

    Command({
        name: "ClearAliroReaderConfig", id: 0x29,
        conformance: "ALIRO", access: "A T", direction: "request", response: "status"
    }),

    Datatype(
        { name: "DaysMaskBitmap", type: "map8" },
        Field({ name: "Sunday", constraint: "0" }),
        Field({ name: "Monday", constraint: "1" }),
        Field({ name: "Tuesday", constraint: "2" }),
        Field({ name: "Wednesday", constraint: "3" }),
        Field({ name: "Thursday", constraint: "4" }),
        Field({ name: "Friday", constraint: "5" }),
        Field({ name: "Saturday", constraint: "6" })
    ),

    Datatype(
        { name: "CredentialRulesBitmap", type: "map8" },
        Field({ name: "Single", constraint: "0" }),
        Field({ name: "Dual", constraint: "1" }),
        Field({ name: "Tri", constraint: "2" })
    ),

    Datatype(
        { name: "OperatingModesBitmap", type: "map16" },
        Field({ name: "Normal", constraint: "0" }),
        Field({ name: "Vacation", constraint: "1" }),
        Field({ name: "Privacy", constraint: "2" }),
        Field({ name: "NoRemoteLockUnlock", constraint: "3" }),
        Field({ name: "Passage", constraint: "4" }),
        Field({ name: "AlwaysSet", constraint: "5 to 15", conformance: "M" })
    ),

    Datatype(
        { name: "ConfigurationRegisterBitmap", type: "map16" },
        Field({ name: "LocalProgramming", constraint: "0" }),
        Field({ name: "KeypadInterface", constraint: "1" }),
        Field({ name: "RemoteInterface", constraint: "2" }),
        Field({ name: "SoundVolume", constraint: "5" }),
        Field({ name: "AutoRelockTime", constraint: "6" }),
        Field({ name: "LedSettings", constraint: "7" })
    ),

    Datatype(
        { name: "LocalProgrammingFeaturesBitmap", type: "map8" },
        Field({ name: "AddUsersCredentialsSchedules", constraint: "0" }),
        Field({ name: "ModifyUsersCredentialsSchedules", constraint: "1" }),
        Field({ name: "ClearUsersCredentialsSchedules", constraint: "2" }),
        Field({ name: "AdjustSettings", constraint: "3" })
    ),

    Datatype(
        { name: "AlarmMaskBitmap", type: "map16" },
        Field({ name: "LockJammed", constraint: "0" }),
        Field({ name: "LockFactoryReset", constraint: "1" }),
        Field({ name: "LockRadioPowerCycled", constraint: "3" }),
        Field({ name: "WrongCodeEntryLimit", constraint: "4" }),
        Field({ name: "FrontEscutcheonRemoved", constraint: "5" }),
        Field({ name: "DoorForcedOpen", constraint: "6" })
    ),

    Datatype(
        { name: "AlarmCodeEnum", type: "enum8" },
        Field({ name: "LockJammed", id: 0x0, conformance: "M" }),
        Field({ name: "LockFactoryReset", id: 0x1, conformance: "O" }),
        Field({ name: "LockRadioPowerCycled", id: 0x3, conformance: "O" }),
        Field({ name: "WrongCodeEntryLimit", id: 0x4, conformance: "[USR]" }),
        Field({ name: "FrontEsceutcheonRemoved", id: 0x5, conformance: "O" }),
        Field({ name: "DoorForcedOpen", id: 0x6, conformance: "[DPS]" }),
        Field({ name: "DoorAjar", id: 0x7, conformance: "[DPS]" }),
        Field({ name: "ForcedUser", id: 0x8, conformance: "[USR]" })
    ),

    Datatype(
        { name: "CredentialRuleEnum", type: "enum8" },
        Field({ name: "Single", id: 0x0, conformance: "USR" }),
        Field({ name: "Dual", id: 0x1, conformance: "[USR]" }),
        Field({ name: "Tri", id: 0x2, conformance: "[USR]" })
    ),

    Datatype(
        { name: "CredentialTypeEnum", type: "enum8" },
        Field({ name: "ProgrammingPin", id: 0x0, conformance: "O" }),
        Field({ name: "Pin", id: 0x1, conformance: "PIN" }),
        Field({ name: "Rfid", id: 0x2, conformance: "RID" }),
        Field({ name: "Fingerprint", id: 0x3, conformance: "FGP" }),
        Field({ name: "FingerVein", id: 0x4, conformance: "FGP" }),
        Field({ name: "Face", id: 0x5, conformance: "FACE" }),
        Field({ name: "AliroCredentialIssuerKey", id: 0x6, conformance: "ALIRO" }),
        Field({ name: "AliroEvictableEndpointKey", id: 0x7, conformance: "ALIRO" }),
        Field({ name: "AliroNonEvictableEndpointKey", id: 0x8, conformance: "ALIRO" })
    ),

    Datatype(
        { name: "DataOperationTypeEnum", type: "enum8" },
        Field({ name: "Add", id: 0x0, conformance: "M" }),
        Field({ name: "Clear", id: 0x1, conformance: "M" }),
        Field({ name: "Modify", id: 0x2, conformance: "M" })
    ),

    Datatype(
        { name: "DoorStateEnum", type: "enum8" },
        Field({ name: "DoorOpen", id: 0x0, conformance: "DPS" }),
        Field({ name: "DoorClosed", id: 0x1, conformance: "DPS" }),
        Field({ name: "DoorJammed", id: 0x2, conformance: "[DPS]" }),
        Field({ name: "DoorForcedOpen", id: 0x3, conformance: "[DPS]" }),
        Field({ name: "DoorUnspecifiedError", id: 0x4, conformance: "[DPS]" }),
        Field({ name: "DoorAjar", id: 0x5, conformance: "[DPS]" })
    ),

    Datatype(
        { name: "LockDataTypeEnum", type: "enum8" },
        Field({ name: "Unspecified", id: 0x0, conformance: "O" }),
        Field({ name: "ProgrammingCode", id: 0x1, conformance: "O" }),
        Field({ name: "UserIndex", id: 0x2, conformance: "M" }),
        Field({ name: "WeekDaySchedule", id: 0x3, conformance: "WDSCH" }),
        Field({ name: "YearDaySchedule", id: 0x4, conformance: "YDSCH" }),
        Field({ name: "HolidaySchedule", id: 0x5, conformance: "HDSCH" }),
        Field({ name: "Pin", id: 0x6, conformance: "PIN" }),
        Field({ name: "Rfid", id: 0x7, conformance: "RID" }),
        Field({ name: "Fingerprint", id: 0x8, conformance: "FGP" }),
        Field({ name: "FingerVein", id: 0x9, conformance: "FGP" }),
        Field({ name: "Face", id: 0xa, conformance: "FACE" }),
        Field({ name: "AliroCredentialIssuerKey", id: 0xb, conformance: "ALIRO" }),
        Field({ name: "AliroEvictableEndpointKey", id: 0xc, conformance: "ALIRO" }),
        Field({ name: "AliroNonEvictableEndpointKey", id: 0xd, conformance: "ALIRO" })
    ),

    Datatype(
        { name: "LockOperationTypeEnum", type: "enum8" },
        Field({ name: "Lock", id: 0x0, conformance: "M" }),
        Field({ name: "Unlock", id: 0x1, conformance: "M" }),
        Field({ name: "NonAccessUserEvent", id: 0x2, conformance: "O" }),
        Field({ name: "ForcedUserEvent", id: 0x3, conformance: "O" }),
        Field({ name: "Unlatch", id: 0x4, conformance: "M" })
    ),

    Datatype(
        { name: "OperationErrorEnum", type: "enum8" },
        Field({ name: "Unspecified", id: 0x0, conformance: "O" }),
        Field({ name: "InvalidCredential", id: 0x1, conformance: "USR" }),
        Field({ name: "DisabledUserDenied", id: 0x2, conformance: "M" }),
        Field({ name: "Restricted", id: 0x3, conformance: "WDSCH | YDSCH" }),
        Field({ name: "InsufficientBattery", id: 0x4, conformance: "O" })
    ),

    Datatype(
        { name: "OperatingModeEnum", type: "enum8" },
        Field({ name: "Normal", id: 0x0, conformance: "M" }),
        Field({ name: "Vacation", id: 0x1, conformance: "O" }),
        Field({ name: "Privacy", id: 0x2, conformance: "O" }),
        Field({ name: "NoRemoteLockUnlock", id: 0x3, conformance: "M" }),
        Field({ name: "Passage", id: 0x4, conformance: "O" })
    ),

    Datatype(
        { name: "OperationSourceEnum", type: "enum8" },
        Field({ name: "Unspecified", id: 0x0, conformance: "O" }),
        Field({ name: "Manual", id: 0x1, conformance: "O" }),
        Field({ name: "ProprietaryRemote", id: 0x2, conformance: "O" }),
        Field({ name: "Keypad", id: 0x3, conformance: "O" }),
        Field({ name: "Auto", id: 0x4, conformance: "O" }),
        Field({ name: "Button", id: 0x5, conformance: "O" }),
        Field({ name: "Schedule", id: 0x6, conformance: "HDSCH" }),
        Field({ name: "Remote", id: 0x7, conformance: "M" }),
        Field({ name: "Rfid", id: 0x8, conformance: "RID" }),
        Field({ name: "Biometric", id: 0x9, conformance: "[USR]" }),
        Field({ name: "Aliro", id: 0xa, conformance: "ALIRO" })
    ),

    Datatype(
        { name: "UserStatusEnum", type: "enum8" },
        Field({ name: "Available", id: 0x0, conformance: "M" }),
        Field({ name: "OccupiedEnabled", id: 0x1, conformance: "M" }),
        Field({ name: "OccupiedDisabled", id: 0x3, conformance: "O" })
    ),

    Datatype(
        { name: "UserTypeEnum", type: "enum8" },
        Field({ name: "UnrestrictedUser", id: 0x0, conformance: "M" }),
        Field({ name: "YearDayScheduleUser", id: 0x1, conformance: "O" }),
        Field({ name: "WeekDayScheduleUser", id: 0x2, conformance: "O" }),
        Field({ name: "ProgrammingUser", id: 0x3, conformance: "O" }),
        Field({ name: "NonAccessUser", id: 0x4, conformance: "O" }),
        Field({ name: "ForcedUser", id: 0x5, conformance: "[USR]" }),
        Field({ name: "DisposableUser", id: 0x6, conformance: "[USR]" }),
        Field({ name: "ExpiringUser", id: 0x7, conformance: "[USR]" }),
        Field({ name: "ScheduleRestrictedUser", id: 0x8, conformance: "WDSCH | YDSCH" }),
        Field({ name: "RemoteOnlyUser", id: 0x9, conformance: "USR & COTA & PIN" })
    ),

    Datatype(
        { name: "LockStateEnum", type: "enum8" },
        Field({ name: "NotFullyLocked", id: 0x0, conformance: "M" }),
        Field({ name: "Locked", id: 0x1, conformance: "M" }),
        Field({ name: "Unlocked", id: 0x2, conformance: "M" }),
        Field({ name: "Unlatched", id: 0x3, conformance: "O" })
    ),

    Datatype(
        { name: "LockTypeEnum", type: "enum8" },
        Field({ name: "DeadBolt", id: 0x0, conformance: "M" }),
        Field({ name: "Magnetic", id: 0x1, conformance: "M" }),
        Field({ name: "Other", id: 0x2, conformance: "M" }),
        Field({ name: "Mortise", id: 0x3, conformance: "M" }),
        Field({ name: "Rim", id: 0x4, conformance: "M" }),
        Field({ name: "LatchBolt", id: 0x5, conformance: "M" }),
        Field({ name: "CylindricalLock", id: 0x6, conformance: "M" }),
        Field({ name: "TubularLock", id: 0x7, conformance: "M" }),
        Field({ name: "InterconnectedLock", id: 0x8, conformance: "M" }),
        Field({ name: "DeadLatch", id: 0x9, conformance: "M" }),
        Field({ name: "DoorFurniture", id: 0xa, conformance: "M" }),
        Field({ name: "Eurocylinder", id: 0xb, conformance: "M" })
    ),

    Datatype(
        { name: "LEDSettingEnum", type: "enum8" },
        Field({ name: "NoLedSignal", id: 0x0, conformance: "M" }),
        Field({ name: "NoLedSignalAccessAllowed", id: 0x1, conformance: "M" }),
        Field({ name: "LedSignalAll", id: 0x2, conformance: "M" })
    ),

    Datatype(
        { name: "SoundVolumeEnum", type: "enum8" },
        Field({ name: "Silent", id: 0x0, conformance: "M" }),
        Field({ name: "Low", id: 0x1, conformance: "M" }),
        Field({ name: "High", id: 0x2, conformance: "M" }),
        Field({ name: "Medium", id: 0x3, conformance: "M" })
    ),

    Datatype(
        { name: "EventTypeEnum", type: "enum8" },
        Field({ name: "Operation", id: 0x0, conformance: "M" }),
        Field({ name: "Programming", id: 0x1, conformance: "M" }),
        Field({ name: "Alarm", id: 0x2, conformance: "M" })
    ),

    Datatype(
        { name: "CredentialStruct", type: "struct" },
        Field({ name: "CredentialType", id: 0x0, type: "CredentialTypeEnum", conformance: "M" }),
        Field({ name: "CredentialIndex", id: 0x1, type: "uint16", default: 0, conformance: "M" })
    ),
    Datatype(
        { name: "StatusCodeEnum", type: "enum8" },
        Field({ name: "Duplicate", id: 0x2, conformance: "M" }),
        Field({ name: "Occupied", id: 0x3, conformance: "M" })
    )
);

MatterDefinition.children.push(DoorLock);
