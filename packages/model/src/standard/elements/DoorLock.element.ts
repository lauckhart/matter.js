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
    { id: 0x101, name: "DoorLock" },
    Attribute({ id: 0xfffd, name: "ClusterRevision", type: "ClusterRevision", default: 8 }),

    Attribute(
        { id: 0xfffc, name: "FeatureMap", type: "FeatureMap" },
        Field({ name: "PIN", conformance: "O", constraint: "0", description: "PinCredential" }),
        Field({ name: "RID", conformance: "O", constraint: "1", description: "RfidCredential" }),
        Field({ name: "FGP", conformance: "P, O", constraint: "2", description: "FingerCredentials" }),
        Field({ name: "WDSCH", conformance: "O", constraint: "4", description: "WeekDayAccessSchedules" }),
        Field({ name: "DPS", conformance: "O", constraint: "5", description: "DoorPositionSensor" }),
        Field({ name: "FACE", conformance: "P, O", constraint: "6", description: "FaceCredentials" }),
        Field({ name: "COTA", conformance: "O", constraint: "7", description: "CredentialOverTheAirAccess" }),
        Field({ name: "USR", conformance: "ALIRO, [PIN | RID | FGP | FACE]", constraint: "8", description: "User" }),
        Field({ name: "YDSCH", conformance: "O", constraint: "10", description: "YearDayAccessSchedules" }),
        Field({ name: "HDSCH", conformance: "O", constraint: "11", description: "HolidaySchedules" }),
        Field({ name: "UBOLT", conformance: "O", constraint: "12", description: "Unbolting" }),
        Field({ name: "ALIRO", conformance: "O", constraint: "13", description: "AliroProvisioning" }),
        Field({ name: "ALBU", conformance: "[ALIRO]", constraint: "14", description: "AliroBleuwb" })
    ),

    Attribute({
        id: 0x0, name: "LockState", type: "LockStateEnum",
        access: "R V", conformance: "M", constraint: "desc", quality: "X P"
    }),
    Attribute({ id: 0x1, name: "LockType", type: "LockTypeEnum", access: "R V", conformance: "M", constraint: "desc" }),
    Attribute({ id: 0x2, name: "ActuatorEnabled", type: "bool", access: "R V", conformance: "M" }),
    Attribute({
        id: 0x3, name: "DoorState", type: "DoorStateEnum",
        access: "R V", conformance: "DPS", constraint: "desc", quality: "X P"
    }),
    Attribute({ id: 0x4, name: "DoorOpenEvents", type: "uint32", access: "RW VM", conformance: "[DPS]" }),
    Attribute({ id: 0x5, name: "DoorClosedEvents", type: "uint32", access: "RW VM", conformance: "[DPS]" }),
    Attribute({ id: 0x6, name: "OpenPeriod", type: "uint16", access: "RW VM", conformance: "[DPS]" }),
    Attribute({
        id: 0x11, name: "NumberOfTotalUsersSupported", type: "uint16",
        access: "R V", conformance: "USR", default: 0, quality: "F"
    }),
    Attribute({
        id: 0x12, name: "NumberOfPinUsersSupported", type: "uint16",
        access: "R V", conformance: "PIN", default: 0, quality: "F"
    }),
    Attribute({
        id: 0x13, name: "NumberOfRfidUsersSupported", type: "uint16",
        access: "R V", conformance: "RID", default: 0, quality: "F"
    }),
    Attribute({
        id: 0x14, name: "NumberOfWeekDaySchedulesSupportedPerUser", type: "uint8",
        access: "R V", conformance: "WDSCH", constraint: "max 253", default: 0, quality: "F"
    }),
    Attribute({
        id: 0x15, name: "NumberOfYearDaySchedulesSupportedPerUser", type: "uint8",
        access: "R V", conformance: "YDSCH", constraint: "max 253", default: 0, quality: "F"
    }),
    Attribute({
        id: 0x16, name: "NumberOfHolidaySchedulesSupported", type: "uint8",
        access: "R V", conformance: "HDSCH", constraint: "max 253", default: 0, quality: "F"
    }),
    Attribute({ id: 0x17, name: "MaxPinCodeLength", type: "uint8", access: "R V", conformance: "PIN", quality: "F" }),
    Attribute({ id: 0x18, name: "MinPinCodeLength", type: "uint8", access: "R V", conformance: "PIN", quality: "F" }),
    Attribute({ id: 0x19, name: "MaxRfidCodeLength", type: "uint8", access: "R V", conformance: "RID", quality: "F" }),
    Attribute({ id: 0x1a, name: "MinRfidCodeLength", type: "uint8", access: "R V", conformance: "RID", quality: "F" }),
    Attribute({
        id: 0x1b, name: "CredentialRulesSupport", type: "CredentialRulesBitmap",
        access: "R V", conformance: "USR", default: 1, quality: "F"
    }),
    Attribute({
        id: 0x1c, name: "NumberOfCredentialsSupportedPerUser", type: "uint8",
        access: "R V", conformance: "USR", default: 0, quality: "F"
    }),
    Attribute({
        id: 0x21, name: "Language", type: "string",
        access: "R[W] VM", conformance: "O", constraint: "max 3", quality: "P"
    }),
    Attribute({
        id: 0x22, name: "LedSettings", type: "LEDSettingEnum",
        access: "R[W] VM", conformance: "O", default: 0, quality: "P"
    }),
    Attribute({ id: 0x23, name: "AutoRelockTime", type: "uint32", access: "R[W] VM", conformance: "O", quality: "P" }),
    Attribute({
        id: 0x24, name: "SoundVolume", type: "SoundVolumeEnum",
        access: "R[W] VM", conformance: "O", default: 0, quality: "P"
    }),
    Attribute({
        id: 0x25, name: "OperatingMode", type: "OperatingModeEnum",
        access: "R[W] VM", conformance: "M", constraint: "desc", default: 0, quality: "P"
    }),
    Attribute({
        id: 0x26, name: "SupportedOperatingModes", type: "OperatingModesBitmap",
        access: "R V", conformance: "M", default: 65526, quality: "F"
    }),
    Attribute({
        id: 0x27, name: "DefaultConfigurationRegister", type: "ConfigurationRegisterBitmap",
        access: "R V", conformance: "O", default: 0, quality: "P"
    }),
    Attribute({
        id: 0x28, name: "EnableLocalProgramming", type: "bool",
        access: "R[W] VA", conformance: "O", default: true, quality: "P"
    }),
    Attribute({
        id: 0x29, name: "EnableOneTouchLocking", type: "bool",
        access: "RW VM", conformance: "O", default: true, quality: "P"
    }),
    Attribute({
        id: 0x2a, name: "EnableInsideStatusLed", type: "bool",
        access: "RW VM", conformance: "O", default: true, quality: "P"
    }),
    Attribute({
        id: 0x2b, name: "EnablePrivacyModeButton", type: "bool",
        access: "RW VM", conformance: "O", default: true, quality: "P"
    }),
    Attribute({
        id: 0x2c, name: "LocalProgrammingFeatures", type: "LocalProgrammingFeaturesBitmap",
        access: "R[W] VA", conformance: "O", default: 0, quality: "P"
    }),
    Attribute({
        id: 0x30, name: "WrongCodeEntryLimit", type: "uint8",
        access: "R[W] VA", conformance: "PIN | RID", constraint: "1 to 255", quality: "P"
    }),
    Attribute({
        id: 0x31, name: "UserCodeTemporaryDisableTime", type: "uint8",
        access: "R[W] VA", conformance: "PIN | RID", constraint: "1 to 255", quality: "P"
    }),
    Attribute({
        id: 0x32, name: "SendPinOverTheAir", type: "bool",
        access: "R[W] VA", conformance: "[!USR & PIN]", default: true, quality: "P"
    }),
    Attribute({ id: 0x33, name: "RequirePinForRemoteOperation", type: "bool", access: "R[W] VA", default: true, quality: "P" }),
    Attribute({ id: 0x34, name: "SecurityLevel", access: "R V", conformance: "D", default: "0" }),
    Attribute({
        id: 0x35, name: "ExpiringUserTimeout", type: "uint16",
        access: "R[W] VA", conformance: "[USR]", constraint: "1 to 2880", quality: "P"
    }),
    Attribute({
        id: 0x40, name: "AlarmMask", type: "AlarmMaskBitmap",
        access: "RW VA", conformance: "O", default: 65535, quality: "P"
    }),
    Attribute({
        id: 0x80, name: "AliroReaderVerificationKey", type: "octstr",
        access: "R A", conformance: "ALIRO", constraint: "65", default: null, quality: "X"
    }),
    Attribute({
        id: 0x81, name: "AliroReaderGroupIdentifier", type: "octstr",
        access: "R A", conformance: "ALIRO", constraint: "16", default: null, quality: "X"
    }),
    Attribute({
        id: 0x82, name: "AliroReaderGroupSubIdentifier", type: "octstr",
        access: "R A", conformance: "ALIRO", constraint: "16", quality: "F"
    }),

    Attribute(
        {
            id: 0x83, name: "AliroExpeditedTransactionSupportedProtocolVersions", type: "list",
            access: "R A", conformance: "ALIRO", constraint: "max 16[2]", default: [], quality: "F"
        },
        Field({ name: "entry", type: "octstr" })
    ),

    Attribute({
        id: 0x84, name: "AliroGroupResolvingKey", type: "octstr",
        access: "R A", conformance: "ALBU", constraint: "16", default: null, quality: "X"
    }),

    Attribute(
        {
            id: 0x85, name: "AliroSupportedBleuwbProtocolVersions", type: "list",
            access: "R A", conformance: "ALBU", constraint: "max 16[2]", default: [], quality: "F"
        },
        Field({ name: "entry", type: "octstr" })
    ),

    Attribute({
        id: 0x86, name: "AliroBleAdvertisingVersion", type: "uint8",
        access: "R A", conformance: "ALBU", default: 0, quality: "F"
    }),
    Attribute({
        id: 0x87, name: "NumberOfAliroCredentialIssuerKeysSupported", type: "uint16",
        access: "R V", conformance: "ALIRO", default: 0, quality: "F"
    }),
    Attribute({
        id: 0x88, name: "NumberOfAliroEndpointKeysSupported", type: "uint16",
        access: "R V", conformance: "ALIRO", default: 0, quality: "F"
    }),
    Event(
        { id: 0x0, name: "DoorLockAlarm", access: "V", conformance: "M", priority: "critical" },
        Field({ id: 0x0, name: "AlarmCode", type: "AlarmCodeEnum", conformance: "M" })
    ),
    Event(
        { id: 0x1, name: "DoorStateChange", access: "V", conformance: "DPS", priority: "critical" },
        Field({ id: 0x0, name: "DoorState", type: "DoorStateEnum", conformance: "M" })
    ),

    Event(
        { id: 0x2, name: "LockOperation", access: "V", conformance: "M", priority: "critical" },
        Field({ id: 0x0, name: "LockOperationType", type: "LockOperationTypeEnum", conformance: "M" }),
        Field({ id: 0x1, name: "OperationSource", type: "OperationSourceEnum", conformance: "M" }),
        Field({ id: 0x2, name: "UserIndex", type: "uint16", conformance: "M", quality: "X" }),
        Field({ id: 0x3, name: "FabricIndex", type: "fabric-idx", conformance: "M", quality: "X" }),
        Field({ id: 0x4, name: "SourceNode", type: "node-id", conformance: "M", quality: "X" }),

        Field(
            {
                id: 0x5, name: "Credentials", type: "list",
                conformance: "[USR]", constraint: "1 to numberOfCredentialsSupportedPerUser", quality: "X"
            },
            Field({ name: "entry", type: "CredentialStruct" })
        )
    ),

    Event(
        { id: 0x3, name: "LockOperationError", access: "V", conformance: "M", priority: "critical" },
        Field({ id: 0x0, name: "LockOperationType", type: "LockOperationTypeEnum", conformance: "M" }),
        Field({ id: 0x1, name: "OperationSource", type: "OperationSourceEnum", conformance: "M" }),
        Field({ id: 0x2, name: "OperationError", type: "OperationErrorEnum", conformance: "M" }),
        Field({ id: 0x3, name: "UserIndex", type: "uint16", conformance: "M", quality: "X" }),
        Field({ id: 0x4, name: "FabricIndex", type: "fabric-idx", conformance: "M", quality: "X" }),
        Field({ id: 0x5, name: "SourceNode", type: "node-id", conformance: "M", quality: "X" }),

        Field(
            {
                id: 0x6, name: "Credentials", type: "list",
                conformance: "[USR]", constraint: "1 to numberOfCredentialsSupportedPerUser", quality: "X"
            },
            Field({ name: "entry", type: "CredentialStruct" })
        )
    ),

    Event(
        { id: 0x4, name: "LockUserChange", access: "V", conformance: "USR", priority: "info" },
        Field({ id: 0x0, name: "LockDataType", type: "LockDataTypeEnum", conformance: "M" }),
        Field({ id: 0x1, name: "DataOperationType", type: "DataOperationTypeEnum", conformance: "M" }),
        Field({
            id: 0x2, name: "OperationSource", type: "OperationSourceEnum",
            conformance: "M", constraint: "aliro, unspecified, keypad, remote"
        }),
        Field({ id: 0x3, name: "UserIndex", type: "uint16", conformance: "M", quality: "X" }),
        Field({ id: 0x4, name: "FabricIndex", type: "fabric-idx", conformance: "M", quality: "X" }),
        Field({ id: 0x5, name: "SourceNode", type: "node-id", conformance: "M", quality: "X" }),
        Field({ id: 0x6, name: "DataIndex", type: "uint16", conformance: "M", quality: "X" })
    ),

    Command(
        { id: 0x0, name: "LockDoor", access: "O T", conformance: "M", direction: "request", response: "status" },
        Field({ id: 0x0, name: "PinCode", type: "octstr", conformance: "[COTA & PIN]" })
    ),
    Command(
        { id: 0x1, name: "UnlockDoor", access: "O T", conformance: "M", direction: "request", response: "status" },
        Field({ id: 0x0, name: "PinCode", type: "octstr", conformance: "[COTA & PIN]" })
    ),
    Command({ id: 0x2, name: "Toggle", access: "O T", conformance: "X", direction: "request", response: "status" }),

    Command(
        {
            id: 0x3, name: "UnlockWithTimeout",
            access: "O T", conformance: "O", direction: "request", response: "status"
        },
        Field({ id: 0x0, name: "Timeout", type: "uint16", conformance: "M" }),
        Field({ id: 0x1, name: "PinCode", type: "octstr", conformance: "[COTA & PIN]" })
    ),

    Command(
        {
            id: 0x5, name: "SetPinCode",
            access: "A T", conformance: "!USR & PIN", direction: "request", response: "status"
        },
        Field({ id: 0x0, name: "UserId", type: "uint16", conformance: "M", constraint: "desc" }),
        Field({
            id: 0x1, name: "UserStatus", type: "UserStatusEnum",
            conformance: "M", constraint: "desc", default: 1, quality: "X"
        }),
        Field({ id: 0x2, name: "UserType", type: "UserTypeEnum", conformance: "M", default: 0, quality: "X" }),
        Field({ id: 0x3, name: "Pin", type: "octstr", conformance: "M" })
    ),

    Command(
        {
            id: 0x6, name: "GetPinCode",
            access: "A", conformance: "!USR & PIN", direction: "request", response: "GetPinCodeResponse"
        },
        Field({ id: 0x0, name: "UserId", type: "uint16", conformance: "M", constraint: "desc" })
    ),

    Command(
        { id: 0x6, name: "GetPinCodeResponse", conformance: "!USR & PIN", direction: "response" },
        Field({ id: 0x0, name: "UserId", type: "uint16", conformance: "M", constraint: "desc" }),
        Field({
            id: 0x1, name: "UserStatus", type: "UserStatusEnum",
            conformance: "M", constraint: "desc", default: 0, quality: "X"
        }),
        Field({ id: 0x2, name: "UserType", type: "UserTypeEnum", conformance: "M", constraint: "desc", quality: "X" }),
        Field({ id: 0x3, name: "PinCode", type: "octstr", conformance: "M", quality: "X" })
    ),

    Command(
        {
            id: 0x7, name: "ClearPinCode",
            access: "A T", conformance: "!USR & PIN", direction: "request", response: "status"
        },
        Field({
            id: 0x0, name: "PinSlotIndex", type: "uint16",
            conformance: "M", constraint: "1 to numberOfPinUsersSupported, 65534"
        })
    ),

    Command({
        id: 0x8, name: "ClearAllPinCodes",
        access: "A T", conformance: "!USR & PIN", direction: "request", response: "status"
    }),

    Command(
        {
            id: 0x9, name: "SetUserStatus",
            access: "A", conformance: "!USR & (PIN | RID | FGP)", direction: "request", response: "status"
        },
        Field({ id: 0x0, name: "UserId", type: "uint16", conformance: "M", constraint: "desc" }),
        Field({ id: 0x1, name: "UserStatus", type: "UserStatusEnum", conformance: "M", constraint: "desc" })
    ),

    Command(
        {
            id: 0xa, name: "GetUserStatus",
            access: "A", conformance: "!USR & (PIN | RID | FGP)", direction: "request",
            response: "GetUserStatusResponse"
        },
        Field({ id: 0x0, name: "UserId", type: "uint16", conformance: "M", constraint: "desc" })
    ),

    Command(
        { id: 0xa, name: "GetUserStatusResponse", conformance: "!USR", direction: "response" },
        Field({ id: 0x0, name: "UserId", type: "uint16", conformance: "M", constraint: "desc" }),
        Field({ id: 0x1, name: "UserStatus", type: "UserStatusEnum", conformance: "M" })
    ),

    Command(
        {
            id: 0xb, name: "SetWeekDaySchedule",
            access: "A", conformance: "WDSCH", direction: "request", response: "status"
        },
        Field({
            id: 0x0, name: "WeekDayIndex", type: "uint8",
            conformance: "M", constraint: "1 to numberOfWeekDaySchedulesSupportedPerUser"
        }),
        Field({
            id: 0x1, name: "UserIndex", type: "uint16",
            conformance: "M", constraint: "1 to numberOfTotalUsersSupported"
        }),
        Field({ id: 0x2, name: "DaysMask", type: "DaysMaskBitmap", conformance: "M" }),
        Field({ id: 0x3, name: "StartHour", type: "uint8", conformance: "M", constraint: "max 23" }),
        Field({ id: 0x4, name: "StartMinute", type: "uint8", conformance: "M", constraint: "max 59" }),
        Field({ id: 0x5, name: "EndHour", type: "uint8", conformance: "M", constraint: "max 23" }),
        Field({ id: 0x6, name: "EndMinute", type: "uint8", conformance: "M", constraint: "max 59" })
    ),

    Command(
        {
            id: 0xc, name: "GetWeekDaySchedule",
            access: "A", conformance: "WDSCH", direction: "request", response: "GetWeekDayScheduleResponse"
        },
        Field({
            id: 0x0, name: "WeekDayIndex", type: "uint8",
            conformance: "M", constraint: "1 to numberOfWeekDaySchedulesSupportedPerUser"
        }),
        Field({
            id: 0x1, name: "UserIndex", type: "uint16",
            conformance: "M", constraint: "1 to numberOfTotalUsersSupported"
        })
    ),

    Command(
        { id: 0xc, name: "GetWeekDayScheduleResponse", conformance: "WDSCH", direction: "response" },
        Field({
            id: 0x0, name: "WeekDayIndex", type: "uint8",
            conformance: "M", constraint: "1 to numberOfWeekDaySchedulesSupportedPerUser"
        }),
        Field({
            id: 0x1, name: "UserIndex", type: "uint16",
            conformance: "M", constraint: "1 to numberOfTotalUsersSupported"
        }),
        Field({ id: 0x2, name: "Status", type: "status", conformance: "M", constraint: "desc", default: 0 }),
        Field({ id: 0x3, name: "DaysMask", type: "DaysMaskBitmap", conformance: "O" }),
        Field({ id: 0x4, name: "StartHour", type: "uint8", conformance: "O", constraint: "max 23" }),
        Field({ id: 0x5, name: "StartMinute", type: "uint8", conformance: "O", constraint: "max 59" }),
        Field({ id: 0x6, name: "EndHour", type: "uint8", conformance: "O", constraint: "max 23" }),
        Field({ id: 0x7, name: "EndMinute", type: "uint8", conformance: "O", constraint: "max 59" })
    ),

    Command(
        {
            id: 0xd, name: "ClearWeekDaySchedule",
            access: "A", conformance: "WDSCH", direction: "request", response: "status"
        },
        Field({
            id: 0x0, name: "WeekDayIndex", type: "uint8",
            conformance: "M", constraint: "1 to numberOfWeekDaySchedulesSupportedPerUser, 254"
        }),
        Field({
            id: 0x1, name: "UserIndex", type: "uint16",
            conformance: "M", constraint: "1 to numberOfTotalUsersSupported"
        })
    ),

    Command(
        {
            id: 0xe, name: "SetYearDaySchedule",
            access: "A", conformance: "YDSCH", direction: "request", response: "status"
        },
        Field({
            id: 0x0, name: "YearDayIndex", type: "uint8",
            conformance: "M", constraint: "1 to numberOfYearDaySchedulesSupportedPerUser"
        }),
        Field({
            id: 0x1, name: "UserIndex", type: "uint16",
            conformance: "M", constraint: "1 to numberOfTotalUsersSupported"
        }),
        Field({ id: 0x2, name: "LocalStartTime", type: "epoch-s", conformance: "M" }),
        Field({ id: 0x3, name: "LocalEndTime", type: "epoch-s", conformance: "M" })
    ),

    Command(
        {
            id: 0xf, name: "GetYearDaySchedule",
            access: "A", conformance: "YDSCH", direction: "request", response: "GetYearDayScheduleResponse"
        },
        Field({
            id: 0x0, name: "YearDayIndex", type: "uint8",
            conformance: "M", constraint: "1 to numberOfYearDaySchedulesSupportedPerUser"
        }),
        Field({
            id: 0x1, name: "UserIndex", type: "uint16",
            conformance: "M", constraint: "1 to numberOfTotalUsersSupported"
        })
    ),

    Command(
        { id: 0xf, name: "GetYearDayScheduleResponse", direction: "response" },
        Field({
            id: 0x0, name: "YearDayIndex", type: "uint8",
            conformance: "M", constraint: "1 to numberOfYearDaySchedulesSupportedPerUser"
        }),
        Field({
            id: 0x1, name: "UserIndex", type: "uint16",
            conformance: "M", constraint: "1 to numberOfTotalUsersSupported"
        }),
        Field({ id: 0x2, name: "Status", type: "status", constraint: "desc", default: 0 }),
        Field({ id: 0x3, name: "LocalStartTime", type: "epoch-s" }),
        Field({ id: 0x4, name: "LocalEndTime", type: "epoch-s" })
    ),

    Command(
        {
            id: 0x10, name: "ClearYearDaySchedule",
            access: "A", conformance: "YDSCH", direction: "request", response: "status"
        },
        Field({
            id: 0x0, name: "YearDayIndex", type: "uint8",
            conformance: "M", constraint: "1 to numberOfYearDaySchedulesSupportedPerUser, 254"
        }),
        Field({
            id: 0x1, name: "UserIndex", type: "uint16",
            conformance: "M", constraint: "1 to numberOfTotalUsersSupported"
        })
    ),

    Command(
        {
            id: 0x11, name: "SetHolidaySchedule",
            access: "A", conformance: "HDSCH", direction: "request", response: "status"
        },
        Field({
            id: 0x0, name: "HolidayIndex", type: "uint8",
            conformance: "M", constraint: "1 to numberOfHolidaySchedulesSupported"
        }),
        Field({ id: 0x1, name: "LocalStartTime", type: "epoch-s", conformance: "M" }),
        Field({ id: 0x2, name: "LocalEndTime", type: "epoch-s", conformance: "M" }),
        Field({ id: 0x3, name: "OperatingMode", type: "OperatingModeEnum", conformance: "M" })
    ),

    Command(
        {
            id: 0x12, name: "GetHolidaySchedule",
            access: "A", conformance: "HDSCH", direction: "request", response: "GetHolidayScheduleResponse"
        },
        Field({
            id: 0x0, name: "HolidayIndex", type: "uint8",
            conformance: "M", constraint: "1 to numberOfHolidaySchedulesSupported"
        })
    ),

    Command(
        { id: 0x12, name: "GetHolidayScheduleResponse", conformance: "HDSCH", direction: "response" },
        Field({
            id: 0x0, name: "HolidayIndex", type: "uint8",
            conformance: "M", constraint: "1 to numberOfHolidaySchedulesSupported"
        }),
        Field({ id: 0x1, name: "Status", type: "status", conformance: "M", constraint: "desc", default: 0 }),
        Field({ id: 0x2, name: "LocalStartTime", type: "epoch-s", conformance: "O", quality: "X" }),
        Field({ id: 0x3, name: "LocalEndTime", type: "epoch-s", conformance: "O", quality: "X" }),
        Field({ id: 0x4, name: "OperatingMode", type: "OperatingModeEnum", conformance: "O", quality: "X" })
    ),

    Command(
        {
            id: 0x13, name: "ClearHolidaySchedule",
            access: "A", conformance: "HDSCH", direction: "request", response: "status"
        },
        Field({
            id: 0x0, name: "HolidayIndex", type: "uint8",
            conformance: "M", constraint: "1 to numberOfHolidaySchedulesSupported, 254"
        })
    ),

    Command(
        {
            id: 0x14, name: "SetUserType",
            access: "A", conformance: "!USR & (PIN | RID | FGP)", direction: "request", response: "status"
        },
        Field({ id: 0x0, name: "UserId", type: "uint16", conformance: "M", constraint: "desc" }),
        Field({ id: 0x1, name: "UserType", type: "UserTypeEnum", conformance: "M" })
    ),

    Command(
        {
            id: 0x15, name: "GetUserType",
            access: "A", conformance: "!USR & (PIN | RID | FGP)", direction: "request",
            response: "GetUserTypeResponse"
        },
        Field({ id: 0x0, name: "UserId", type: "uint16", conformance: "M", constraint: "desc" })
    ),

    Command(
        { id: 0x15, name: "GetUserTypeResponse", conformance: "!USR", direction: "response" },
        Field({ id: 0x0, name: "UserId", type: "uint16", conformance: "M", constraint: "desc" }),
        Field({ id: 0x1, name: "UserType", type: "UserTypeEnum", conformance: "M" })
    ),

    Command(
        {
            id: 0x16, name: "SetRfidCode",
            access: "A T", conformance: "!USR & RID", direction: "request", response: "status"
        },
        Field({ id: 0x0, name: "UserId", type: "uint16", conformance: "M", constraint: "desc" }),
        Field({
            id: 0x1, name: "UserStatus", type: "UserStatusEnum",
            conformance: "M", constraint: "desc", default: 1, quality: "X"
        }),
        Field({
            id: 0x2, name: "UserType", type: "UserTypeEnum",
            conformance: "M", constraint: "desc", default: 0, quality: "X"
        }),
        Field({ id: 0x3, name: "RfidCode", type: "octstr", conformance: "M" })
    ),

    Command(
        {
            id: 0x17, name: "GetRfidCode",
            access: "A", conformance: "!USR & RID", direction: "request", response: "GetRfidCodeResponse"
        },
        Field({ id: 0x0, name: "UserId", type: "uint16", conformance: "M", constraint: "desc" })
    ),

    Command(
        { id: 0x17, name: "GetRfidCodeResponse", conformance: "!USR & RID", direction: "response" },
        Field({ id: 0x0, name: "UserId", type: "uint16", conformance: "M", constraint: "desc" }),
        Field({
            id: 0x1, name: "UserStatus", type: "UserStatusEnum",
            conformance: "M", constraint: "desc", default: 0, quality: "X"
        }),
        Field({ id: 0x2, name: "UserType", type: "UserTypeEnum", conformance: "M", constraint: "desc", quality: "X" }),
        Field({ id: 0x3, name: "RfidCode", type: "octstr", conformance: "M", quality: "X" })
    ),

    Command(
        {
            id: 0x18, name: "ClearRfidCode",
            access: "A T", conformance: "!USR & RID", direction: "request", response: "status"
        },
        Field({
            id: 0x0, name: "RfidSlotIndex", type: "uint16",
            conformance: "M", constraint: "1 to numberOfRfidUsersSupported, 65534"
        })
    ),

    Command({
        id: 0x19, name: "ClearAllRfidCodes",
        access: "A T", conformance: "!USR & RID", direction: "request", response: "status"
    }),

    Command(
        { id: 0x1a, name: "SetUser", access: "A T", conformance: "USR", direction: "request", response: "status" },
        Field({ id: 0x0, name: "OperationType", type: "DataOperationTypeEnum", conformance: "M", constraint: "add, modify" }),
        Field({
            id: 0x1, name: "UserIndex", type: "uint16",
            conformance: "M", constraint: "1 to numberOfTotalUsersSupported"
        }),
        Field({ id: 0x2, name: "UserName", type: "string", conformance: "M", constraint: "max 10", quality: "X" }),
        Field({ id: 0x3, name: "UserUniqueId", type: "uint32", conformance: "M", default: 4294967295, quality: "X" }),
        Field({
            id: 0x4, name: "UserStatus", type: "UserStatusEnum",
            conformance: "M", constraint: "occupiedEnabled, occupiedDisabled", default: 1, quality: "X"
        }),

        Field({
            id: 0x5, name: "UserType", type: "UserTypeEnum",
            conformance: "M",
            constraint: "unrestrictedUser, nonAccessUser, forcedUser, disposableUser, expiringUser, scheduleRestrictedUser, remoteOnlyUser",
            default: 0, quality: "X"
        }),

        Field({ id: 0x6, name: "CredentialRule", type: "CredentialRuleEnum", conformance: "M", default: 0, quality: "X" })
    ),

    Command(
        {
            id: 0x1b, name: "GetUser",
            access: "A", conformance: "USR", direction: "request", response: "GetUserResponse"
        },
        Field({
            id: 0x0, name: "UserIndex", type: "uint16",
            conformance: "M", constraint: "1 to numberOfTotalUsersSupported"
        })
    ),

    Command(
        { id: 0x1c, name: "GetUserResponse", conformance: "USR", direction: "response" },
        Field({
            id: 0x0, name: "UserIndex", type: "uint16",
            conformance: "M", constraint: "1 to numberOfTotalUsersSupported"
        }),
        Field({ id: 0x1, name: "UserName", type: "string", conformance: "M", constraint: "max 10", quality: "X" }),
        Field({ id: 0x2, name: "UserUniqueId", type: "uint32", conformance: "M", default: 0, quality: "X" }),
        Field({ id: 0x3, name: "UserStatus", type: "UserStatusEnum", conformance: "M", default: 0, quality: "X" }),
        Field({ id: 0x4, name: "UserType", type: "UserTypeEnum", conformance: "M", default: 0, quality: "X" }),
        Field({
            id: 0x5, name: "CredentialRule", type: "CredentialRuleEnum",
            conformance: "M", constraint: "desc", default: 0, quality: "X"
        }),

        Field(
            {
                id: 0x6, name: "Credentials", type: "list",
                conformance: "M", constraint: "0 to numberOfCredentialsSupportedPerUser", quality: "X"
            },
            Field({ name: "entry", type: "CredentialStruct" })
        ),

        Field({ id: 0x7, name: "CreatorFabricIndex", type: "fabric-idx", conformance: "M", quality: "X" }),
        Field({ id: 0x8, name: "LastModifiedFabricIndex", type: "fabric-idx", conformance: "M", quality: "X" }),
        Field({
            id: 0x9, name: "NextUserIndex", type: "uint16",
            conformance: "M", constraint: "1 to numberOfTotalUsersSupported", quality: "X"
        })
    ),

    Command(
        { id: 0x1d, name: "ClearUser", access: "A T", conformance: "USR", direction: "request", response: "status" },
        Field({
            id: 0x0, name: "UserIndex", type: "uint16",
            conformance: "M", constraint: "1 to numberOfTotalUsersSupported, 65534"
        })
    ),

    Command(
        {
            id: 0x22, name: "SetCredential",
            access: "A T", conformance: "USR", direction: "request", response: "SetCredentialResponse"
        },
        Field({ id: 0x0, name: "OperationType", type: "DataOperationTypeEnum", conformance: "M", constraint: "add, modify" }),
        Field({ id: 0x1, name: "Credential", type: "CredentialStruct", conformance: "M" }),
        Field({ id: 0x2, name: "CredentialData", type: "octstr", conformance: "M", constraint: "desc" }),
        Field({
            id: 0x3, name: "UserIndex", type: "uint16",
            conformance: "M", constraint: "1 to numberOfTotalUsersSupported", quality: "X"
        }),
        Field({
            id: 0x4, name: "UserStatus", type: "UserStatusEnum",
            conformance: "M", constraint: "occupiedEnabled, occupiedDisabled", default: 1, quality: "X"
        }),

        Field({
            id: 0x5, name: "UserType", type: "UserTypeEnum",
            conformance: "M",
            constraint: "unrestrictedUser, programmingUser, nonAccessUser, forcedUser, disposableUser, expiringUser, remoteOnlyUser",
            default: 0, quality: "X"
        })
    ),

    Command(
        { id: 0x23, name: "SetCredentialResponse", conformance: "USR", direction: "response" },
        Field({ id: 0x0, name: "Status", type: "status", conformance: "M", constraint: "desc" }),
        Field({
            id: 0x1, name: "UserIndex", type: "uint16",
            conformance: "M", constraint: "1 to numberOfTotalUsersSupported", default: 0, quality: "X"
        }),
        Field({ id: 0x2, name: "NextCredentialIndex", type: "uint16", conformance: "O", constraint: "desc", quality: "X" })
    ),

    Command(
        {
            id: 0x24, name: "GetCredentialStatus",
            access: "A", conformance: "USR", direction: "request", response: "GetCredentialStatusResponse"
        },
        Field({ id: 0x0, name: "Credential", type: "CredentialStruct", conformance: "M" })
    ),

    Command(
        { id: 0x25, name: "GetCredentialStatusResponse", conformance: "USR", direction: "response" },
        Field({ id: 0x0, name: "CredentialExists", type: "bool", conformance: "M" }),
        Field({
            id: 0x1, name: "UserIndex", type: "uint16",
            conformance: "M", constraint: "1 to numberOfTotalUsersSupported", quality: "X"
        }),
        Field({ id: 0x2, name: "CreatorFabricIndex", type: "fabric-idx", conformance: "M", quality: "X" }),
        Field({ id: 0x3, name: "LastModifiedFabricIndex", type: "fabric-idx", conformance: "M", quality: "X" }),
        Field({ id: 0x4, name: "NextCredentialIndex", type: "uint16", conformance: "O", constraint: "desc", quality: "X" }),
        Field({ id: 0x5, name: "CredentialData", type: "octstr", conformance: "[ALIRO]", constraint: "desc", quality: "X" })
    ),

    Command(
        {
            id: 0x26, name: "ClearCredential",
            access: "A T", conformance: "USR", direction: "request", response: "status"
        },
        Field({ id: 0x0, name: "Credential", type: "CredentialStruct", conformance: "M", constraint: "desc", quality: "X" })
    ),

    Command(
        { id: 0x27, name: "UnboltDoor", access: "O T", conformance: "UBOLT", direction: "request", response: "status" },
        Field({ id: 0x0, name: "PinCode", type: "octstr", conformance: "[COTA & PIN]" })
    ),

    Command(
        {
            id: 0x28, name: "SetAliroReaderConfig",
            access: "A T", conformance: "ALIRO", direction: "request", response: "status"
        },
        Field({ id: 0x0, name: "SigningKey", type: "octstr", conformance: "M", constraint: "32" }),
        Field({ id: 0x1, name: "VerificationKey", type: "octstr", conformance: "M", constraint: "65" }),
        Field({ id: 0x2, name: "GroupIdentifier", type: "octstr", conformance: "M", constraint: "16" }),
        Field({ id: 0x3, name: "GroupResolvingKey", type: "octstr", conformance: "ALBU", constraint: "16" })
    ),

    Command({
        id: 0x29, name: "ClearAliroReaderConfig",
        access: "A T", conformance: "ALIRO", direction: "request", response: "status"
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
        Field({ name: "AlwaysSet", conformance: "M", constraint: "5 to 15" })
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
        Field({ id: 0x0, name: "LockJammed", conformance: "M" }),
        Field({ id: 0x1, name: "LockFactoryReset", conformance: "O" }),
        Field({ id: 0x3, name: "LockRadioPowerCycled", conformance: "O" }),
        Field({ id: 0x4, name: "WrongCodeEntryLimit", conformance: "[USR]" }),
        Field({ id: 0x5, name: "FrontEsceutcheonRemoved", conformance: "O" }),
        Field({ id: 0x6, name: "DoorForcedOpen", conformance: "[DPS]" }),
        Field({ id: 0x7, name: "DoorAjar", conformance: "[DPS]" }),
        Field({ id: 0x8, name: "ForcedUser", conformance: "[USR]" })
    ),

    Datatype(
        { name: "CredentialRuleEnum", type: "enum8" },
        Field({ id: 0x0, name: "Single", conformance: "USR" }),
        Field({ id: 0x1, name: "Dual", conformance: "[USR]" }),
        Field({ id: 0x2, name: "Tri", conformance: "[USR]" })
    ),

    Datatype(
        { name: "CredentialTypeEnum", type: "enum8" },
        Field({ id: 0x0, name: "ProgrammingPin", conformance: "O" }),
        Field({ id: 0x1, name: "Pin", conformance: "PIN" }),
        Field({ id: 0x2, name: "Rfid", conformance: "RID" }),
        Field({ id: 0x3, name: "Fingerprint", conformance: "FGP" }),
        Field({ id: 0x4, name: "FingerVein", conformance: "FGP" }),
        Field({ id: 0x5, name: "Face", conformance: "FACE" }),
        Field({ id: 0x6, name: "AliroCredentialIssuerKey", conformance: "ALIRO" }),
        Field({ id: 0x7, name: "AliroEvictableEndpointKey", conformance: "ALIRO" }),
        Field({ id: 0x8, name: "AliroNonEvictableEndpointKey", conformance: "ALIRO" })
    ),

    Datatype(
        { name: "DataOperationTypeEnum", type: "enum8" },
        Field({ id: 0x0, name: "Add", conformance: "M" }),
        Field({ id: 0x1, name: "Clear", conformance: "M" }),
        Field({ id: 0x2, name: "Modify", conformance: "M" })
    ),

    Datatype(
        { name: "DoorStateEnum", type: "enum8" },
        Field({ id: 0x0, name: "DoorOpen", conformance: "DPS" }),
        Field({ id: 0x1, name: "DoorClosed", conformance: "DPS" }),
        Field({ id: 0x2, name: "DoorJammed", conformance: "[DPS]" }),
        Field({ id: 0x3, name: "DoorForcedOpen", conformance: "[DPS]" }),
        Field({ id: 0x4, name: "DoorUnspecifiedError", conformance: "[DPS]" }),
        Field({ id: 0x5, name: "DoorAjar", conformance: "[DPS]" })
    ),

    Datatype(
        { name: "LockDataTypeEnum", type: "enum8" },
        Field({ id: 0x0, name: "Unspecified", conformance: "O" }),
        Field({ id: 0x1, name: "ProgrammingCode", conformance: "O" }),
        Field({ id: 0x2, name: "UserIndex", conformance: "M" }),
        Field({ id: 0x3, name: "WeekDaySchedule", conformance: "WDSCH" }),
        Field({ id: 0x4, name: "YearDaySchedule", conformance: "YDSCH" }),
        Field({ id: 0x5, name: "HolidaySchedule", conformance: "HDSCH" }),
        Field({ id: 0x6, name: "Pin", conformance: "PIN" }),
        Field({ id: 0x7, name: "Rfid", conformance: "RID" }),
        Field({ id: 0x8, name: "Fingerprint", conformance: "FGP" }),
        Field({ id: 0x9, name: "FingerVein", conformance: "FGP" }),
        Field({ id: 0xa, name: "Face", conformance: "FACE" }),
        Field({ id: 0xb, name: "AliroCredentialIssuerKey", conformance: "ALIRO" }),
        Field({ id: 0xc, name: "AliroEvictableEndpointKey", conformance: "ALIRO" }),
        Field({ id: 0xd, name: "AliroNonEvictableEndpointKey", conformance: "ALIRO" })
    ),

    Datatype(
        { name: "LockOperationTypeEnum", type: "enum8" },
        Field({ id: 0x0, name: "Lock", conformance: "M" }),
        Field({ id: 0x1, name: "Unlock", conformance: "M" }),
        Field({ id: 0x2, name: "NonAccessUserEvent", conformance: "O" }),
        Field({ id: 0x3, name: "ForcedUserEvent", conformance: "O" }),
        Field({ id: 0x4, name: "Unlatch", conformance: "M" })
    ),

    Datatype(
        { name: "OperationErrorEnum", type: "enum8" },
        Field({ id: 0x0, name: "Unspecified", conformance: "O" }),
        Field({ id: 0x1, name: "InvalidCredential", conformance: "USR" }),
        Field({ id: 0x2, name: "DisabledUserDenied", conformance: "M" }),
        Field({ id: 0x3, name: "Restricted", conformance: "WDSCH | YDSCH" }),
        Field({ id: 0x4, name: "InsufficientBattery", conformance: "O" })
    ),

    Datatype(
        { name: "OperatingModeEnum", type: "enum8" },
        Field({ id: 0x0, name: "Normal", conformance: "M" }),
        Field({ id: 0x1, name: "Vacation", conformance: "O" }),
        Field({ id: 0x2, name: "Privacy", conformance: "O" }),
        Field({ id: 0x3, name: "NoRemoteLockUnlock", conformance: "M" }),
        Field({ id: 0x4, name: "Passage", conformance: "O" })
    ),

    Datatype(
        { name: "OperationSourceEnum", type: "enum8" },
        Field({ id: 0x0, name: "Unspecified", conformance: "O" }),
        Field({ id: 0x1, name: "Manual", conformance: "O" }),
        Field({ id: 0x2, name: "ProprietaryRemote", conformance: "O" }),
        Field({ id: 0x3, name: "Keypad", conformance: "O" }),
        Field({ id: 0x4, name: "Auto", conformance: "O" }),
        Field({ id: 0x5, name: "Button", conformance: "O" }),
        Field({ id: 0x6, name: "Schedule", conformance: "HDSCH" }),
        Field({ id: 0x7, name: "Remote", conformance: "M" }),
        Field({ id: 0x8, name: "Rfid", conformance: "RID" }),
        Field({ id: 0x9, name: "Biometric", conformance: "[USR]" }),
        Field({ id: 0xa, name: "Aliro", conformance: "ALIRO" })
    ),

    Datatype(
        { name: "UserStatusEnum", type: "enum8" },
        Field({ id: 0x0, name: "Available", conformance: "M" }),
        Field({ id: 0x1, name: "OccupiedEnabled", conformance: "M" }),
        Field({ id: 0x3, name: "OccupiedDisabled", conformance: "O" })
    ),

    Datatype(
        { name: "UserTypeEnum", type: "enum8" },
        Field({ id: 0x0, name: "UnrestrictedUser", conformance: "M" }),
        Field({ id: 0x1, name: "YearDayScheduleUser", conformance: "O" }),
        Field({ id: 0x2, name: "WeekDayScheduleUser", conformance: "O" }),
        Field({ id: 0x3, name: "ProgrammingUser", conformance: "O" }),
        Field({ id: 0x4, name: "NonAccessUser", conformance: "O" }),
        Field({ id: 0x5, name: "ForcedUser", conformance: "[USR]" }),
        Field({ id: 0x6, name: "DisposableUser", conformance: "[USR]" }),
        Field({ id: 0x7, name: "ExpiringUser", conformance: "[USR]" }),
        Field({ id: 0x8, name: "ScheduleRestrictedUser", conformance: "WDSCH | YDSCH" }),
        Field({ id: 0x9, name: "RemoteOnlyUser", conformance: "USR & COTA & PIN" })
    ),

    Datatype(
        { name: "LockStateEnum", type: "enum8" },
        Field({ id: 0x0, name: "NotFullyLocked", conformance: "M" }),
        Field({ id: 0x1, name: "Locked", conformance: "M" }),
        Field({ id: 0x2, name: "Unlocked", conformance: "M" }),
        Field({ id: 0x3, name: "Unlatched", conformance: "O" })
    ),

    Datatype(
        { name: "LockTypeEnum", type: "enum8" },
        Field({ id: 0x0, name: "DeadBolt", conformance: "M" }),
        Field({ id: 0x1, name: "Magnetic", conformance: "M" }),
        Field({ id: 0x2, name: "Other", conformance: "M" }),
        Field({ id: 0x3, name: "Mortise", conformance: "M" }),
        Field({ id: 0x4, name: "Rim", conformance: "M" }),
        Field({ id: 0x5, name: "LatchBolt", conformance: "M" }),
        Field({ id: 0x6, name: "CylindricalLock", conformance: "M" }),
        Field({ id: 0x7, name: "TubularLock", conformance: "M" }),
        Field({ id: 0x8, name: "InterconnectedLock", conformance: "M" }),
        Field({ id: 0x9, name: "DeadLatch", conformance: "M" }),
        Field({ id: 0xa, name: "DoorFurniture", conformance: "M" }),
        Field({ id: 0xb, name: "Eurocylinder", conformance: "M" })
    ),

    Datatype(
        { name: "LEDSettingEnum", type: "enum8" },
        Field({ id: 0x0, name: "NoLedSignal", conformance: "M" }),
        Field({ id: 0x1, name: "NoLedSignalAccessAllowed", conformance: "M" }),
        Field({ id: 0x2, name: "LedSignalAll", conformance: "M" })
    ),

    Datatype(
        { name: "SoundVolumeEnum", type: "enum8" },
        Field({ id: 0x0, name: "Silent", conformance: "M" }),
        Field({ id: 0x1, name: "Low", conformance: "M" }),
        Field({ id: 0x2, name: "High", conformance: "M" }),
        Field({ id: 0x3, name: "Medium", conformance: "M" })
    ),

    Datatype(
        { name: "EventTypeEnum", type: "enum8" },
        Field({ id: 0x0, name: "Operation", conformance: "M" }),
        Field({ id: 0x1, name: "Programming", conformance: "M" }),
        Field({ id: 0x2, name: "Alarm", conformance: "M" })
    ),

    Datatype(
        { name: "CredentialStruct", type: "struct" },
        Field({ id: 0x0, name: "CredentialType", type: "CredentialTypeEnum", conformance: "M" }),
        Field({ id: 0x1, name: "CredentialIndex", type: "uint16", conformance: "M", default: 0 })
    ),
    Datatype(
        { name: "StatusCodeEnum", type: "enum8" },
        Field({ id: 0x2, name: "Duplicate", conformance: "M" }),
        Field({ id: 0x3, name: "Occupied", conformance: "M" })
    )
);

MatterDefinition.children.push(DoorLock);
