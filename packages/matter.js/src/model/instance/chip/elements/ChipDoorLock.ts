/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ChipMatter } from "../index.js";
import { ClusterElement, AttributeElement, CommandElement, DatatypeElement, EventElement } from "../../../index.js";

ChipMatter.children!.push(ClusterElement({
    id: 0x0101, name: "DoorLock",
    description: "Door Lock",
    details: "An interface to a generic way to secure a door",
    children: [
        AttributeElement({
            id: 0x0000, name: "LockState", base: "DlLockState",
            access: "R", conformance: "M", quality: "X P"
        }),

        AttributeElement({
            id: 0x0001, name: "LockType", base: "DlLockType",
            access: "R", conformance: "M"
        }),

        AttributeElement({
            id: 0x0002, name: "ActuatorEnabled", base: "bool",
            access: "R", conformance: "M"
        }),

        AttributeElement({
            id: 0x0003, name: "DoorState", base: "DoorStateEnum",
            access: "R", conformance: "O", quality: "X P"
        }),

        AttributeElement({
            id: 0x0004, name: "DoorOpenEvents", base: "uint32",
            access: "W VM", conformance: "O"
        }),

        AttributeElement({
            id: 0x0005, name: "DoorClosedEvents", base: "uint32",
            access: "W VM", conformance: "O"
        }),

        AttributeElement({
            id: 0x0006, name: "OpenPeriod", base: "uint16",
            access: "W VM", conformance: "O"
        }),

        AttributeElement({
            id: 0x0011, name: "NumTotalUsersSupported", base: "uint16",
            access: "R", conformance: "O", default: 0
        }),

        AttributeElement({
            id: 0x0012, name: "NumPinUsersSupported", base: "uint16",
            access: "R", conformance: "O", default: 0
        }),

        AttributeElement({
            id: 0x0013, name: "NumRfidUsersSupported", base: "uint16",
            access: "R", conformance: "O", default: 0
        }),

        AttributeElement({
            id: 0x0014, name: "NumWeekdaySchedulesSupportedPerUser", base: "uint8",
            access: "R", conformance: "O", default: 0
        }),

        AttributeElement({
            id: 0x0015, name: "NumYeardaySchedulesSupportedPerUser", base: "uint8",
            access: "R", conformance: "O", default: 0
        }),

        AttributeElement({
            id: 0x0016, name: "NumHolidaySchedulesSupported", base: "uint8",
            access: "R", conformance: "O", default: 0
        }),

        AttributeElement({
            id: 0x0017, name: "MaxPinLength", base: "uint8",
            access: "R", conformance: "O"
        }),

        AttributeElement({
            id: 0x0018, name: "MinPinLength", base: "uint8",
            access: "R", conformance: "O"
        }),

        AttributeElement({
            id: 0x0019, name: "MaxRfidCodeLength", base: "uint8",
            access: "R", conformance: "O"
        }),

        AttributeElement({
            id: 0x001a, name: "MinRfidCodeLength", base: "uint8",
            access: "R", conformance: "O"
        }),

        AttributeElement({
            id: 0x001b, name: "CredentialRulesSupport", base: "DlCredentialRuleMask",
            access: "R", conformance: "O", default: 1
        }),

        AttributeElement({
            id: 0x001c, name: "NumCredentialsSupportedPerUser", base: "uint8",
            access: "R", conformance: "O", default: 0
        }),

        AttributeElement({
            id: 0x0021, name: "Language", base: "string",
            access: "W VM", conformance: "O", quality: "P"
        }),

        AttributeElement({
            id: 0x0022, name: "LedSettings", base: "uint8",
            access: "W VM", conformance: "O", default: 0, quality: "P"
        }),

        AttributeElement({
            id: 0x0023, name: "AutoRelockTime", base: "uint32",
            access: "W VM", conformance: "M", quality: "P"
        }),

        AttributeElement({
            id: 0x0024, name: "SoundVolume", base: "uint8",
            access: "W VM", conformance: "O", default: 0, quality: "P"
        }),

        AttributeElement({
            id: 0x0025, name: "OperatingMode", base: "OperatingModeEnum",
            access: "W VM", conformance: "M", quality: "P"
        }),

        AttributeElement({
            id: 0x0026, name: "SupportedOperatingModes", base: "DlSupportedOperatingModes",
            access: "R", conformance: "M", default: 65526
        }),

        AttributeElement({
            id: 0x0027, name: "DefaultConfigurationRegister", base: "DlDefaultConfigurationRegister",
            access: "R", conformance: "O", default: 0, quality: "P"
        }),

        AttributeElement({
            id: 0x0028, name: "EnableLocalProgramming", base: "bool",
            access: "W VA", conformance: "O", default: true, quality: "P"
        }),

        AttributeElement({
            id: 0x0029, name: "EnableOneTouchLocking", base: "bool",
            access: "W VM", conformance: "O", default: true, quality: "P"
        }),

        AttributeElement({
            id: 0x002a, name: "EnableInsideStatusLed", base: "bool",
            access: "W VM", conformance: "O", default: true, quality: "P"
        }),

        AttributeElement({
            id: 0x002b, name: "EnablePrivacyModeButton", base: "bool",
            access: "W VM", conformance: "O", default: true, quality: "P"
        }),

        AttributeElement({
            id: 0x002c, name: "LocalProgrammingFeatures", base: "DlLocalProgrammingFeatures",
            access: "W VA", conformance: "O", default: 0, quality: "P"
        }),

        AttributeElement({
            id: 0x0030, name: "WrongCodeEntryLimit", base: "uint8",
            access: "W VA", conformance: "O", quality: "P"
        }),

        AttributeElement({
            id: 0x0031, name: "UserCodeTemporaryDisableTime", base: "uint8",
            access: "W VA", conformance: "O", quality: "P"
        }),

        AttributeElement({
            id: 0x0032, name: "SendPinOverTheAir", base: "bool",
            access: "W VA", conformance: "O", default: true, quality: "P"
        }),

        AttributeElement({
            id: 0x0033, name: "RequirePinForRemoteOperation", base: "bool",
            access: "W VA", conformance: "O", default: true, quality: "P"
        }),

        AttributeElement({
            id: 0x0035, name: "ExpiringUserTimeout", base: "uint16",
            access: "W VA", conformance: "O", quality: "P"
        }),

        CommandElement({
            id: 0x0000, name: "LockDoor",
            access: "R", conformance: "M", direction: "request",
            children: [
                DatatypeElement({
                    name: "PinCode", base: "octstr",
                    access: "R", conformance: "O"
                })
            ]
        }),

        CommandElement({
            id: 0x0001, name: "UnlockDoor",
            access: "R", conformance: "M", direction: "request",
            children: [
                DatatypeElement({
                    name: "PinCode", base: "octstr",
                    access: "R", conformance: "O"
                })
            ]
        }),

        CommandElement({
            id: 0x0003, name: "UnlockWithTimeout",
            access: "R", conformance: "O", direction: "request",
            children: [
                DatatypeElement({
                    name: "Timeout", base: "uint16",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "PinCode", base: "octstr",
                    access: "R", conformance: "O"
                })
            ]
        }),

        CommandElement({
            id: 0x000b, name: "SetWeekDaySchedule",
            access: "R A", conformance: "O", direction: "request",
            children: [
                DatatypeElement({
                    name: "WeekDayIndex", base: "uint8",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "UserIndex", base: "uint16",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "DaysMask", base: "DaysMaskMap",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "StartHour", base: "uint8",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "StartMinute", base: "uint8",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "EndHour", base: "uint8",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "EndMinute", base: "uint8",
                    access: "R", conformance: "M"
                })
            ]
        }),

        CommandElement({
            id: 0x000c, name: "GetWeekDaySchedule",
            access: "R A", conformance: "O", direction: "request", response: "GetWeekDayScheduleResponse",
            children: [
                DatatypeElement({
                    name: "WeekDayIndex", base: "uint8",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "UserIndex", base: "uint16",
                    access: "R", conformance: "M"
                })
            ]
        }),

        CommandElement({
            id: 0x000c, name: "GetWeekDayScheduleResponse",
            access: "R", conformance: "O", direction: "response",
            children: [
                DatatypeElement({
                    name: "WeekDayIndex", base: "uint8",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "UserIndex", base: "uint16",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "Status", base: "DlStatus",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "DaysMask", base: "DaysMaskMap",
                    access: "R", conformance: "O"
                }),

                DatatypeElement({
                    name: "StartHour", base: "uint8",
                    access: "R", conformance: "O"
                }),

                DatatypeElement({
                    name: "StartMinute", base: "uint8",
                    access: "R", conformance: "O"
                }),

                DatatypeElement({
                    name: "EndHour", base: "uint8",
                    access: "R", conformance: "O"
                }),

                DatatypeElement({
                    name: "EndMinute", base: "uint8",
                    access: "R", conformance: "O"
                })
            ]
        }),

        CommandElement({
            id: 0x000d, name: "ClearWeekDaySchedule",
            access: "R A", conformance: "O", direction: "request",
            children: [
                DatatypeElement({
                    name: "WeekDayIndex", base: "uint8",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "UserIndex", base: "uint16",
                    access: "R", conformance: "M"
                })
            ]
        }),

        CommandElement({
            id: 0x000e, name: "SetYearDaySchedule",
            access: "R A", conformance: "O", direction: "request",
            children: [
                DatatypeElement({
                    name: "YearDayIndex", base: "uint8",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "UserIndex", base: "uint16",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "LocalStartTime", base: "epoch-s",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "LocalEndTime", base: "epoch-s",
                    access: "R", conformance: "M"
                })
            ]
        }),

        CommandElement({
            id: 0x000f, name: "GetYearDaySchedule",
            access: "R A", conformance: "O", direction: "request", response: "GetYearDayScheduleResponse",
            children: [
                DatatypeElement({
                    name: "YearDayIndex", base: "uint8",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "UserIndex", base: "uint16",
                    access: "R", conformance: "M"
                })
            ]
        }),

        CommandElement({
            id: 0x000f, name: "GetYearDayScheduleResponse",
            access: "R", conformance: "O", direction: "response",
            children: [
                DatatypeElement({
                    name: "YearDayIndex", base: "uint8",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "UserIndex", base: "uint16",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "Status", base: "DlStatus",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "LocalStartTime", base: "epoch-s",
                    access: "R", conformance: "O"
                }),

                DatatypeElement({
                    name: "LocalEndTime", base: "epoch-s",
                    access: "R", conformance: "O"
                })
            ]
        }),

        CommandElement({
            id: 0x0010, name: "ClearYearDaySchedule",
            access: "R A", conformance: "O", direction: "request",
            children: [
                DatatypeElement({
                    name: "YearDayIndex", base: "uint8",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "UserIndex", base: "uint16",
                    access: "R", conformance: "M"
                })
            ]
        }),

        CommandElement({
            id: 0x0011, name: "SetHolidaySchedule",
            access: "R A", conformance: "O", direction: "request",
            children: [
                DatatypeElement({
                    name: "HolidayIndex", base: "uint8",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "LocalStartTime", base: "epoch-s",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "LocalEndTime", base: "epoch-s",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "OperatingMode", base: "OperatingModeEnum",
                    access: "R", conformance: "M"
                })
            ]
        }),

        CommandElement({
            id: 0x0012, name: "GetHolidaySchedule",
            access: "R A", conformance: "O", direction: "request", response: "GetHolidayScheduleResponse",
            children: [
                DatatypeElement({
                    name: "HolidayIndex", base: "uint8",
                    access: "R", conformance: "M"
                })
            ]
        }),

        CommandElement({
            id: 0x0012, name: "GetHolidayScheduleResponse",
            access: "R", conformance: "O", direction: "response",
            children: [
                DatatypeElement({
                    name: "HolidayIndex", base: "uint8",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "Status", base: "DlStatus",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "LocalStartTime", base: "epoch-s",
                    access: "R", conformance: "O"
                }),

                DatatypeElement({
                    name: "LocalEndTime", base: "epoch-s",
                    access: "R", conformance: "O"
                }),

                DatatypeElement({
                    name: "OperatingMode", base: "OperatingModeEnum",
                    access: "R", conformance: "O"
                })
            ]
        }),

        CommandElement({
            id: 0x0013, name: "ClearHolidaySchedule",
            access: "R A", conformance: "O", direction: "request",
            children: [
                DatatypeElement({
                    name: "HolidayIndex", base: "uint8",
                    access: "R", conformance: "M"
                })
            ]
        }),

        CommandElement({
            id: 0x001a, name: "SetUser",
            access: "R A", conformance: "O", direction: "request",
            children: [
                DatatypeElement({
                    name: "OperationType", base: "DataOperationTypeEnum",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "UserIndex", base: "uint16",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "UserName", base: "string",
                    access: "R", conformance: "M", quality: "X"
                }),

                DatatypeElement({
                    name: "UserUniqueId", base: "uint32",
                    access: "R", conformance: "M", quality: "X"
                }),

                DatatypeElement({
                    name: "UserStatus", base: "UserStatusEnum",
                    access: "R", conformance: "M", quality: "X"
                }),

                DatatypeElement({
                    name: "UserType", base: "UserTypeEnum",
                    access: "R", conformance: "M", quality: "X"
                }),

                DatatypeElement({
                    name: "CredentialRule", base: "CredentialRuleEnum",
                    access: "R", conformance: "M", quality: "X"
                })
            ]
        }),

        CommandElement({
            id: 0x001b, name: "GetUser",
            access: "R A", conformance: "O", direction: "request", response: "GetUserResponse",
            children: [
                DatatypeElement({
                    name: "UserIndex", base: "uint16",
                    access: "R", conformance: "M"
                })
            ]
        }),

        CommandElement({
            id: 0x001c, name: "GetUserResponse",
            access: "R", conformance: "O", direction: "response",
            children: [
                DatatypeElement({
                    name: "UserIndex", base: "uint16",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "UserName", base: "string",
                    access: "R", conformance: "M", quality: "X"
                }),

                DatatypeElement({
                    name: "UserUniqueId", base: "uint32",
                    access: "R", conformance: "M", quality: "X"
                }),

                DatatypeElement({
                    name: "UserStatus", base: "UserStatusEnum",
                    access: "R", conformance: "M", quality: "X"
                }),

                DatatypeElement({
                    name: "UserType", base: "UserTypeEnum",
                    access: "R", conformance: "M", quality: "X"
                }),

                DatatypeElement({
                    name: "CredentialRule", base: "CredentialRuleEnum",
                    access: "R", conformance: "M", quality: "X"
                }),

                DatatypeElement({
                    name: "Credentials", base: "CredentialStruct",
                    access: "R", conformance: "M", quality: "X"
                }),

                DatatypeElement({
                    name: "CreatorFabricIndex", base: "fabric-idx",
                    access: "R", conformance: "M", quality: "X"
                }),

                DatatypeElement({
                    name: "LastModifiedFabricIndex", base: "fabric-idx",
                    access: "R", conformance: "M", quality: "X"
                }),

                DatatypeElement({
                    name: "NextUserIndex", base: "uint16",
                    access: "R", conformance: "M", quality: "X"
                })
            ]
        }),

        CommandElement({
            id: 0x001d, name: "ClearUser",
            access: "R A", conformance: "O", direction: "request",
            children: [
                DatatypeElement({
                    name: "UserIndex", base: "uint16",
                    access: "R", conformance: "M"
                })
            ]
        }),

        CommandElement({
            id: 0x0022, name: "SetCredential",
            access: "R A", conformance: "O", direction: "request", response: "SetCredentialResponse",
            children: [
                DatatypeElement({
                    name: "OperationType", base: "DataOperationTypeEnum",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "Credential", base: "CredentialStruct",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "CredentialData", base: "octstr",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "UserIndex", base: "uint16",
                    access: "R", conformance: "M", quality: "X"
                }),

                DatatypeElement({
                    name: "UserStatus", base: "UserStatusEnum",
                    access: "R", conformance: "M", quality: "X"
                }),

                DatatypeElement({
                    name: "UserType", base: "UserTypeEnum",
                    access: "R", conformance: "M", quality: "X"
                })
            ]
        }),

        CommandElement({
            id: 0x0023, name: "SetCredentialResponse",
            access: "R", conformance: "O", direction: "response",
            children: [
                DatatypeElement({
                    name: "Status", base: "DlStatus",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "UserIndex", base: "uint16",
                    access: "R", conformance: "M", quality: "X"
                }),

                DatatypeElement({
                    name: "NextCredentialIndex", base: "uint16",
                    access: "R", conformance: "M", quality: "X"
                })
            ]
        }),

        CommandElement({
            id: 0x0024, name: "GetCredentialStatus",
            access: "R A", conformance: "O", direction: "request", response: "GetCredentialStatusResponse",
            children: [
                DatatypeElement({
                    name: "Credential", base: "CredentialStruct",
                    access: "R", conformance: "M"
                })
            ]
        }),

        CommandElement({
            id: 0x0025, name: "GetCredentialStatusResponse",
            access: "R", conformance: "O", direction: "response",
            children: [
                DatatypeElement({
                    name: "CredentialExists", base: "bool",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "UserIndex", base: "uint16",
                    access: "R", conformance: "M", quality: "X"
                }),

                DatatypeElement({
                    name: "CreatorFabricIndex", base: "fabric-idx",
                    access: "R", conformance: "M", quality: "X"
                }),

                DatatypeElement({
                    name: "LastModifiedFabricIndex", base: "fabric-idx",
                    access: "R", conformance: "M", quality: "X"
                }),

                DatatypeElement({
                    name: "NextCredentialIndex", base: "uint16",
                    access: "R", conformance: "M", quality: "X"
                })
            ]
        }),

        CommandElement({
            id: 0x0026, name: "ClearCredential",
            access: "R A", conformance: "O", direction: "request",
            children: [
                DatatypeElement({
                    name: "Credential", base: "CredentialStruct",
                    access: "R", conformance: "M", quality: "X"
                })
            ]
        }),

        EventElement({
            id: 0x0000, name: "DoorLockAlarm",
            access: "R", conformance: "M", priority: "critical",
            children: [
                DatatypeElement({
                    name: "AlarmCode", base: "AlarmCodeEnum",
                    access: "R", conformance: "M"
                })
            ]
        }),

        EventElement({
            id: 0x0001, name: "DoorStateChange",
            access: "R", conformance: "O", priority: "critical",
            children: [
                DatatypeElement({
                    name: "DoorState", base: "DoorStateEnum",
                    access: "R", conformance: "M"
                })
            ]
        }),

        EventElement({
            id: 0x0002, name: "LockOperation",
            access: "R", conformance: "M", priority: "critical",
            children: [
                DatatypeElement({
                    name: "LockOperationType", base: "LockOperationTypeEnum",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "OperationSource", base: "OperationSourceEnum",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "UserIndex", base: "uint16",
                    access: "R", conformance: "M", quality: "X"
                }),

                DatatypeElement({
                    name: "FabricIndex", base: "fabric-idx",
                    access: "R", conformance: "M", quality: "X"
                }),

                DatatypeElement({
                    name: "SourceNode", base: "node-id",
                    access: "R", conformance: "M", quality: "X"
                }),

                DatatypeElement({
                    name: "Credentials", base: "CredentialStruct",
                    access: "R", conformance: "O", quality: "X"
                })
            ]
        }),

        EventElement({
            id: 0x0003, name: "LockOperationError",
            access: "R", conformance: "M", priority: "critical",
            children: [
                DatatypeElement({
                    name: "LockOperationType", base: "LockOperationTypeEnum",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "OperationSource", base: "OperationSourceEnum",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "OperationError", base: "OperationErrorEnum",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "UserIndex", base: "uint16",
                    access: "R", conformance: "M", quality: "X"
                }),

                DatatypeElement({
                    name: "FabricIndex", base: "fabric-idx",
                    access: "R", conformance: "M", quality: "X"
                }),

                DatatypeElement({
                    name: "SourceNode", base: "node-id",
                    access: "R", conformance: "M", quality: "X"
                }),

                DatatypeElement({
                    name: "Credentials", base: "CredentialStruct",
                    access: "R", conformance: "O", quality: "X"
                })
            ]
        }),

        EventElement({
            id: 0x0004, name: "LockUserChange",
            access: "R", conformance: "M", priority: "info",
            children: [
                DatatypeElement({
                    name: "LockDataType", base: "LockDataTypeEnum",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "DataOperationType", base: "DataOperationTypeEnum",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "OperationSource", base: "OperationSourceEnum",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "UserIndex", base: "uint16",
                    access: "R", conformance: "M", quality: "X"
                }),

                DatatypeElement({
                    name: "FabricIndex", base: "fabric-idx",
                    access: "R", conformance: "M", quality: "X"
                }),

                DatatypeElement({
                    name: "SourceNode", base: "node-id",
                    access: "R", conformance: "M", quality: "X"
                }),

                DatatypeElement({
                    name: "DataIndex", base: "uint16",
                    access: "R", conformance: "M", quality: "X"
                })
            ]
        }),

        DatatypeElement({
            name: "AlarmCodeEnum", base: "enum8",
            access: "R", conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "LockJammed",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0001, name: "LockFactoryReset",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0003, name: "LockRadioPowerCycled",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0004, name: "WrongCodeEntryLimit",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0005, name: "FrontEsceutcheonRemoved",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0006, name: "DoorForcedOpen",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0007, name: "DoorAjar",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0008, name: "ForcedUser",
                    access: "R", conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "CredentialRuleEnum", base: "enum8",
            access: "R", conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "Single",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0001, name: "Dual",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0002, name: "Tri",
                    access: "R", conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "DlCredentialRuleMask", base: "map8",
            access: "R", conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0001, name: "Single",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0002, name: "Dual",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0004, name: "Tri",
                    access: "R", conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "CredentialStruct", base: "struct",
            access: "R", conformance: "M",
            children: [
                DatatypeElement({
                    name: "CredentialType", base: "CredentialTypeEnum",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "CredentialIndex", base: "uint16",
                    access: "R", conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "CredentialTypeEnum", base: "enum8",
            access: "R", conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "ProgrammingPin",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0001, name: "Pin",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0002, name: "Rfid",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0003, name: "Fingerprint",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0004, name: "FingerVein",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0005, name: "Face",
                    access: "R", conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "DataOperationTypeEnum", base: "enum8",
            access: "R", conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "Add",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0001, name: "Clear",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0002, name: "Modify",
                    access: "R", conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "DaysMaskMap", base: "map8",
            access: "R", conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0001, name: "Sunday",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0002, name: "Monday",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0004, name: "Tuesday",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0008, name: "Wednesday",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0010, name: "Thursday",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0020, name: "Friday",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0040, name: "Saturday",
                    access: "R", conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "DoorStateEnum", base: "enum8",
            access: "R", conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "DoorOpen",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0001, name: "DoorClosed",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0002, name: "DoorJammed",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0003, name: "DoorForcedOpen",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0004, name: "DoorUnspecifiedError",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0005, name: "DoorAjar",
                    access: "R", conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "LockDataTypeEnum", base: "enum8",
            access: "R", conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "Unspecified",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0001, name: "ProgrammingCode",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0002, name: "UserIndex",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0003, name: "WeekDaySchedule",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0004, name: "YearDaySchedule",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0005, name: "HolidaySchedule",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0006, name: "Pin",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0007, name: "Rfid",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0008, name: "Fingerprint",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0009, name: "FingerVein",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x000a, name: "Face",
                    access: "R", conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "LockOperationTypeEnum", base: "enum8",
            access: "R", conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "Lock",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0001, name: "Unlock",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0002, name: "NonAccessUserEvent",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0003, name: "ForcedUserEvent",
                    access: "R", conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "OperationErrorEnum", base: "enum8",
            access: "R", conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "Unspecified",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0001, name: "InvalidCredential",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0002, name: "DisabledUserDenied",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0003, name: "Restricted",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0004, name: "InsufficientBattery",
                    access: "R", conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "OperatingModeEnum", base: "enum8",
            access: "R", conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "Normal",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0001, name: "Vacation",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0002, name: "Privacy",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0003, name: "NoRemoteLockUnlock",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0004, name: "Passage",
                    access: "R", conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "OperationSourceEnum", base: "enum8",
            access: "R", conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "Unspecified",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0001, name: "Manual",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0002, name: "ProprietaryRemote",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0003, name: "Keypad",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0004, name: "Auto",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0005, name: "Button",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0006, name: "Schedule",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0007, name: "Remote",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0008, name: "Rfid",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0009, name: "Biometric",
                    access: "R", conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "UserStatusEnum", base: "enum8",
            access: "R", conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "Available",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0001, name: "OccupiedEnabled",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0003, name: "OccupiedDisabled",
                    access: "R", conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "UserTypeEnum", base: "enum8",
            access: "R", conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "UnrestrictedUser",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0001, name: "YearDayScheduleUser",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0002, name: "WeekDayScheduleUser",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0003, name: "ProgrammingUser",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0004, name: "NonAccessUser",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0005, name: "ForcedUser",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0006, name: "DisposableUser",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0007, name: "ExpiringUser",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0008, name: "ScheduleRestrictedUser",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0009, name: "RemoteOnlyUser",
                    access: "R", conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "DlLockState", base: "enum8",
            access: "R", conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "NotFullyLocked",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0001, name: "Locked",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0002, name: "Unlocked",
                    access: "R", conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "DlLockType", base: "enum8",
            access: "R", conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "DeadBolt",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0001, name: "Magnetic",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0002, name: "Other",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0003, name: "Mortise",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0004, name: "Rim",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0005, name: "LatchBolt",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0006, name: "CylindricalLock",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0007, name: "TubularLock",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0008, name: "InterconnectedLock",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0009, name: "DeadLatch",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x000a, name: "DoorFurniture",
                    access: "R", conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "DlCredentialRulesSupport", base: "map8",
            access: "R", conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0001, name: "Single",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0002, name: "Dual",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0004, name: "Tri",
                    access: "R", conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "DlSupportedOperatingModes", base: "map16",
            access: "R", conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0001, name: "Normal",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0002, name: "Vacation",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0004, name: "Privacy",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0008, name: "NoRemoteLockUnlock",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0010, name: "Passage",
                    access: "R", conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "DlDefaultConfigurationRegister", base: "map16",
            access: "R", conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0001, name: "EnableLocalProgrammingEnabled",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0002, name: "KeypadInterfaceDefaultAccessEnabled",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0004, name: "RemoteInterfaceDefaultAccessIsEnabled",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0020, name: "SoundEnabled",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0040, name: "AutoRelockTimeSet",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0080, name: "LedSettingsSet",
                    access: "R", conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "DlLocalProgrammingFeatures", base: "map8",
            access: "R", conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0001, name: "AddUsersCredentialsSchedulesLocally",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0002, name: "ModifyUsersCredentialsSchedulesLocally",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0004, name: "ClearUsersCredentialsSchedulesLocally",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0008, name: "AdjustLockSettingsLocally",
                    access: "R", conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "DlKeypadOperationEventMask", base: "map16",
            access: "R", conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0001, name: "Unknown",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0002, name: "Lock",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0004, name: "Unlock",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0008, name: "LockInvalidPin",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0010, name: "LockInvalidSchedule",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0020, name: "UnlockInvalidCode",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0040, name: "UnlockInvalidSchedule",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0080, name: "NonAccessUserOpEvent",
                    access: "R", conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "DlRemoteOperationEventMask", base: "map16",
            access: "R", conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0001, name: "Unknown",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0002, name: "Lock",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0004, name: "Unlock",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0008, name: "LockInvalidCode",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0010, name: "LockInvalidSchedule",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0020, name: "UnlockInvalidCode",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0040, name: "UnlockInvalidSchedule",
                    access: "R", conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "DlManualOperationEventMask", base: "map16",
            access: "R", conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0001, name: "Unknown",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0002, name: "ThumbturnLock",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0004, name: "ThumbturnUnlock",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0008, name: "OneTouchLock",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0010, name: "KeyLock",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0020, name: "KeyUnlock",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0040, name: "AutoLock",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0080, name: "ScheduleLock",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0100, name: "ScheduleUnlock",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0200, name: "ManualLock",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0400, name: "ManualUnlock",
                    access: "R", conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "DlRfidOperationEventMask", base: "map16",
            access: "R", conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0001, name: "Unknown",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0002, name: "Lock",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0004, name: "Unlock",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0008, name: "LockInvalidRfid",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0010, name: "LockInvalidSchedule",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0020, name: "UnlockInvalidRfid",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0040, name: "UnlockInvalidSchedule",
                    access: "R", conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "DlKeypadProgrammingEventMask", base: "map16",
            access: "R", conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0001, name: "Unknown",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0002, name: "ProgrammingPinChanged",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0004, name: "PinAdded",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0008, name: "PinCleared",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0010, name: "PinChanged",
                    access: "R", conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "DlRemoteProgrammingEventMask", base: "map16",
            access: "R", conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0001, name: "Unknown",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0002, name: "ProgrammingPinChanged",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0004, name: "PinAdded",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0008, name: "PinCleared",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0010, name: "PinChanged",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0020, name: "RfidCodeAdded",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0040, name: "RfidCodeCleared",
                    access: "R", conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "DlRfidProgrammingEventMask", base: "map16",
            access: "R", conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0001, name: "Unknown",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0020, name: "RfidCodeAdded",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0040, name: "RfidCodeCleared",
                    access: "R", conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "DlStatus", base: "enum8",
            access: "R", conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "Success",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0001, name: "Failure",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0002, name: "Duplicate",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0003, name: "Occupied",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0085, name: "InvalidField",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0089, name: "ResourceExhausted",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x008b, name: "NotFound",
                    access: "R", conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "DoorLockFeature", base: "map32",
            access: "R", conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0001, name: "PinCredential",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0002, name: "RfidCredential",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0004, name: "FingerCredentials",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0008, name: "Logging",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0010, name: "WeekDayAccessSchedules",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0020, name: "DoorPositionSensor",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0040, name: "FaceCredentials",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0080, name: "CredentialsOverTheAirAccess",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0100, name: "User",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0200, name: "Notification",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0400, name: "YearDayAccessSchedules",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0800, name: "HolidaySchedules",
                    access: "R", conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "DoorLockSetPinOrIdStatus", base: "enum8",
            access: "R", conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "Success",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0001, name: "GeneralFailure",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0002, name: "MemoryFull",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0003, name: "DuplicateCodeError",
                    access: "R", conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "DoorLockOperationEventCode", base: "enum8",
            access: "R", conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "UnknownOrMfgSpecific",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0001, name: "Lock",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0002, name: "Unlock",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0003, name: "LockInvalidPinOrId",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0004, name: "LockInvalidSchedule",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0005, name: "UnlockInvalidPinOrId",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0006, name: "UnlockInvalidSchedule",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0007, name: "OneTouchLock",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0008, name: "KeyLock",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0009, name: "KeyUnlock",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x000a, name: "AutoLock",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x000b, name: "ScheduleLock",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x000c, name: "ScheduleUnlock",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x000d, name: "ManualLock",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x000e, name: "ManualUnlock",
                    access: "R", conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "DoorLockProgrammingEventCode", base: "enum8",
            access: "R", conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "UnknownOrMfgSpecific",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0001, name: "MasterCodeChanged",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0002, name: "PinAdded",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0003, name: "PinDeleted",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0004, name: "PinChanged",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0005, name: "IdAdded",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0006, name: "IdDeleted",
                    access: "R", conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "DoorLockUserStatus", base: "enum8",
            access: "R", conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "Available",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0001, name: "OccupiedEnabled",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0003, name: "OccupiedDisabled",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x00ff, name: "NotSupported",
                    access: "R", conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "DoorLockUserType", base: "enum8",
            access: "R", conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "Unrestricted",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0001, name: "YearDayScheduleUser",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0002, name: "WeekDayScheduleUser",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0003, name: "MasterUser",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0004, name: "NonAccessUser",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x00ff, name: "NotSupported",
                    access: "R", conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "DoorLockDayOfWeek", base: "map8",
            access: "R", conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0001, name: "Sunday",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0002, name: "Monday",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0004, name: "Tuesday",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0008, name: "Wednesday",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0010, name: "Thursday",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0020, name: "Friday",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0040, name: "Saturday",
                    access: "R", conformance: "M"
                })
            ]
        })
    ]
}));
