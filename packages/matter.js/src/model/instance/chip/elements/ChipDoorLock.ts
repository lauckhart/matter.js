/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ChipMatter } from "../ChipMatter.js";
import { ClusterElement, AttributeElement, CommandElement, DatatypeElement, EventElement } from "../../../elements/index.js";

ChipMatter.children!.push(ClusterElement({
    id: 0x0101, name: "DoorLock",
    description: "Door Lock",
    details: "An interface to a generic way to secure a door",
    children: [
        AttributeElement({
            id: 0x0000, name: "LockState", base: "DlLockState",
            conformance: "M", quality: "X P"
        }),

        AttributeElement({
            id: 0x0001, name: "LockType", base: "DlLockType",
            conformance: "M"
        }),

        AttributeElement({
            id: 0x0002, name: "ActuatorEnabled", base: "bool",
            conformance: "M"
        }),

        AttributeElement({
            id: 0x0003, name: "DoorState", base: "DoorStateEnum",
            conformance: "O", quality: "X P"
        }),

        AttributeElement({
            id: 0x0004, name: "DoorOpenEvents", base: "uint32",
            access: "RW VM", conformance: "O"
        }),

        AttributeElement({
            id: 0x0005, name: "DoorClosedEvents", base: "uint32",
            access: "RW VM", conformance: "O"
        }),

        AttributeElement({
            id: 0x0006, name: "OpenPeriod", base: "uint16",
            access: "RW VM", conformance: "O"
        }),

        AttributeElement({
            id: 0x0011, name: "NumTotalUsersSupported", base: "uint16",
            conformance: "O", default: 0
        }),

        AttributeElement({
            id: 0x0012, name: "NumPinUsersSupported", base: "uint16",
            conformance: "O", default: 0
        }),

        AttributeElement({
            id: 0x0013, name: "NumRfidUsersSupported", base: "uint16",
            conformance: "O", default: 0
        }),

        AttributeElement({
            id: 0x0014, name: "NumWeekdaySchedulesSupportedPerUser", base: "uint8",
            conformance: "O", default: 0
        }),

        AttributeElement({
            id: 0x0015, name: "NumYeardaySchedulesSupportedPerUser", base: "uint8",
            conformance: "O", default: 0
        }),

        AttributeElement({
            id: 0x0016, name: "NumHolidaySchedulesSupported", base: "uint8",
            conformance: "O", default: 0
        }),

        AttributeElement({
            id: 0x0017, name: "MaxPinLength", base: "uint8",
            conformance: "O"
        }),

        AttributeElement({
            id: 0x0018, name: "MinPinLength", base: "uint8",
            conformance: "O"
        }),

        AttributeElement({
            id: 0x0019, name: "MaxRfidCodeLength", base: "uint8",
            conformance: "O"
        }),

        AttributeElement({
            id: 0x001a, name: "MinRfidCodeLength", base: "uint8",
            conformance: "O"
        }),

        AttributeElement({
            id: 0x001b, name: "CredentialRulesSupport", base: "DlCredentialRuleMask",
            conformance: "O", default: 1
        }),

        AttributeElement({
            id: 0x001c, name: "NumCredentialsSupportedPerUser", base: "uint8",
            conformance: "O", default: 0
        }),

        AttributeElement({
            id: 0x0021, name: "Language", base: "string",
            access: "RW VM", conformance: "O", quality: "P"
        }),

        AttributeElement({
            id: 0x0022, name: "LedSettings", base: "uint8",
            access: "RW VM", conformance: "O", default: 0, quality: "P"
        }),

        AttributeElement({
            id: 0x0023, name: "AutoRelockTime", base: "uint32",
            access: "RW VM", conformance: "M", quality: "P"
        }),

        AttributeElement({
            id: 0x0024, name: "SoundVolume", base: "uint8",
            access: "RW VM", conformance: "O", default: 0, quality: "P"
        }),

        AttributeElement({
            id: 0x0025, name: "OperatingMode", base: "OperatingModeEnum",
            access: "RW VM", conformance: "M", quality: "P"
        }),

        AttributeElement({
            id: 0x0026, name: "SupportedOperatingModes", base: "DlSupportedOperatingModes",
            conformance: "M", default: 65526
        }),

        AttributeElement({
            id: 0x0027, name: "DefaultConfigurationRegister", base: "DlDefaultConfigurationRegister",
            conformance: "O", default: 0, quality: "P"
        }),

        AttributeElement({
            id: 0x0028, name: "EnableLocalProgramming", base: "bool",
            access: "RW VA", conformance: "O", default: true, quality: "P"
        }),

        AttributeElement({
            id: 0x0029, name: "EnableOneTouchLocking", base: "bool",
            access: "RW VM", conformance: "O", default: true, quality: "P"
        }),

        AttributeElement({
            id: 0x002a, name: "EnableInsideStatusLed", base: "bool",
            access: "RW VM", conformance: "O", default: true, quality: "P"
        }),

        AttributeElement({
            id: 0x002b, name: "EnablePrivacyModeButton", base: "bool",
            access: "RW VM", conformance: "O", default: true, quality: "P"
        }),

        AttributeElement({
            id: 0x002c, name: "LocalProgrammingFeatures", base: "DlLocalProgrammingFeatures",
            access: "RW VA", conformance: "O", default: 0, quality: "P"
        }),

        AttributeElement({
            id: 0x0030, name: "WrongCodeEntryLimit", base: "uint8",
            access: "RW VA", conformance: "O", quality: "P"
        }),

        AttributeElement({
            id: 0x0031, name: "UserCodeTemporaryDisableTime", base: "uint8",
            access: "RW VA", conformance: "O", quality: "P"
        }),

        AttributeElement({
            id: 0x0032, name: "SendPinOverTheAir", base: "bool",
            access: "RW VA", conformance: "O", default: true, quality: "P"
        }),

        AttributeElement({
            id: 0x0033, name: "RequirePinForRemoteOperation", base: "bool",
            access: "RW VA", conformance: "O", default: true, quality: "P"
        }),

        AttributeElement({
            id: 0x0035, name: "ExpiringUserTimeout", base: "uint16",
            access: "RW VA", conformance: "O", quality: "P"
        }),

        CommandElement({
            id: 0x0000, name: "LockDoor",
            conformance: "M", direction: "request",
            children: [
                DatatypeElement({
                    name: "PinCode", base: "octstr",
                    conformance: "O"
                })
            ]
        }),

        CommandElement({
            id: 0x0001, name: "UnlockDoor",
            conformance: "M", direction: "request",
            children: [
                DatatypeElement({
                    name: "PinCode", base: "octstr",
                    conformance: "O"
                })
            ]
        }),

        CommandElement({
            id: 0x0003, name: "UnlockWithTimeout",
            conformance: "O", direction: "request",
            children: [
                DatatypeElement({
                    name: "Timeout", base: "uint16",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "PinCode", base: "octstr",
                    conformance: "O"
                })
            ]
        }),

        CommandElement({
            id: 0x000b, name: "SetWeekDaySchedule",
            access: "R A", conformance: "O", direction: "request",
            children: [
                DatatypeElement({
                    name: "WeekDayIndex", base: "uint8",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "UserIndex", base: "uint16",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "DaysMask", base: "DaysMaskMap",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "StartHour", base: "uint8",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "StartMinute", base: "uint8",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "EndHour", base: "uint8",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "EndMinute", base: "uint8",
                    conformance: "M"
                })
            ]
        }),

        CommandElement({
            id: 0x000c, name: "GetWeekDaySchedule",
            access: "R A", conformance: "O", direction: "request", response: "GetWeekDayScheduleResponse",
            children: [
                DatatypeElement({
                    name: "WeekDayIndex", base: "uint8",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "UserIndex", base: "uint16",
                    conformance: "M"
                })
            ]
        }),

        CommandElement({
            id: 0x000c, name: "GetWeekDayScheduleResponse",
            conformance: "O", direction: "response",
            children: [
                DatatypeElement({
                    name: "WeekDayIndex", base: "uint8",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "UserIndex", base: "uint16",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "Status", base: "DlStatus",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "DaysMask", base: "DaysMaskMap",
                    conformance: "O"
                }),

                DatatypeElement({
                    name: "StartHour", base: "uint8",
                    conformance: "O"
                }),

                DatatypeElement({
                    name: "StartMinute", base: "uint8",
                    conformance: "O"
                }),

                DatatypeElement({
                    name: "EndHour", base: "uint8",
                    conformance: "O"
                }),

                DatatypeElement({
                    name: "EndMinute", base: "uint8",
                    conformance: "O"
                })
            ]
        }),

        CommandElement({
            id: 0x000d, name: "ClearWeekDaySchedule",
            access: "R A", conformance: "O", direction: "request",
            children: [
                DatatypeElement({
                    name: "WeekDayIndex", base: "uint8",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "UserIndex", base: "uint16",
                    conformance: "M"
                })
            ]
        }),

        CommandElement({
            id: 0x000e, name: "SetYearDaySchedule",
            access: "R A", conformance: "O", direction: "request",
            children: [
                DatatypeElement({
                    name: "YearDayIndex", base: "uint8",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "UserIndex", base: "uint16",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "LocalStartTime", base: "epoch-s",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "LocalEndTime", base: "epoch-s",
                    conformance: "M"
                })
            ]
        }),

        CommandElement({
            id: 0x000f, name: "GetYearDaySchedule",
            access: "R A", conformance: "O", direction: "request", response: "GetYearDayScheduleResponse",
            children: [
                DatatypeElement({
                    name: "YearDayIndex", base: "uint8",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "UserIndex", base: "uint16",
                    conformance: "M"
                })
            ]
        }),

        CommandElement({
            id: 0x000f, name: "GetYearDayScheduleResponse",
            conformance: "O", direction: "response",
            children: [
                DatatypeElement({
                    name: "YearDayIndex", base: "uint8",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "UserIndex", base: "uint16",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "Status", base: "DlStatus",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "LocalStartTime", base: "epoch-s",
                    conformance: "O"
                }),

                DatatypeElement({
                    name: "LocalEndTime", base: "epoch-s",
                    conformance: "O"
                })
            ]
        }),

        CommandElement({
            id: 0x0010, name: "ClearYearDaySchedule",
            access: "R A", conformance: "O", direction: "request",
            children: [
                DatatypeElement({
                    name: "YearDayIndex", base: "uint8",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "UserIndex", base: "uint16",
                    conformance: "M"
                })
            ]
        }),

        CommandElement({
            id: 0x0011, name: "SetHolidaySchedule",
            access: "R A", conformance: "O", direction: "request",
            children: [
                DatatypeElement({
                    name: "HolidayIndex", base: "uint8",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "LocalStartTime", base: "epoch-s",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "LocalEndTime", base: "epoch-s",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "OperatingMode", base: "OperatingModeEnum",
                    conformance: "M"
                })
            ]
        }),

        CommandElement({
            id: 0x0012, name: "GetHolidaySchedule",
            access: "R A", conformance: "O", direction: "request", response: "GetHolidayScheduleResponse",
            children: [
                DatatypeElement({
                    name: "HolidayIndex", base: "uint8",
                    conformance: "M"
                })
            ]
        }),

        CommandElement({
            id: 0x0012, name: "GetHolidayScheduleResponse",
            conformance: "O", direction: "response",
            children: [
                DatatypeElement({
                    name: "HolidayIndex", base: "uint8",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "Status", base: "DlStatus",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "LocalStartTime", base: "epoch-s",
                    conformance: "O"
                }),

                DatatypeElement({
                    name: "LocalEndTime", base: "epoch-s",
                    conformance: "O"
                }),

                DatatypeElement({
                    name: "OperatingMode", base: "OperatingModeEnum",
                    conformance: "O"
                })
            ]
        }),

        CommandElement({
            id: 0x0013, name: "ClearHolidaySchedule",
            access: "R A", conformance: "O", direction: "request",
            children: [
                DatatypeElement({
                    name: "HolidayIndex", base: "uint8",
                    conformance: "M"
                })
            ]
        }),

        CommandElement({
            id: 0x001a, name: "SetUser",
            access: "R A", conformance: "O", direction: "request",
            children: [
                DatatypeElement({
                    name: "OperationType", base: "DataOperationTypeEnum",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "UserIndex", base: "uint16",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "UserName", base: "string",
                    conformance: "M", quality: "X"
                }),

                DatatypeElement({
                    name: "UserUniqueId", base: "uint32",
                    conformance: "M", quality: "X"
                }),

                DatatypeElement({
                    name: "UserStatus", base: "UserStatusEnum",
                    conformance: "M", quality: "X"
                }),

                DatatypeElement({
                    name: "UserType", base: "UserTypeEnum",
                    conformance: "M", quality: "X"
                }),

                DatatypeElement({
                    name: "CredentialRule", base: "CredentialRuleEnum",
                    conformance: "M", quality: "X"
                })
            ]
        }),

        CommandElement({
            id: 0x001b, name: "GetUser",
            access: "R A", conformance: "O", direction: "request", response: "GetUserResponse",
            children: [
                DatatypeElement({
                    name: "UserIndex", base: "uint16",
                    conformance: "M"
                })
            ]
        }),

        CommandElement({
            id: 0x001c, name: "GetUserResponse",
            conformance: "O", direction: "response",
            children: [
                DatatypeElement({
                    name: "UserIndex", base: "uint16",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "UserName", base: "string",
                    conformance: "M", quality: "X"
                }),

                DatatypeElement({
                    name: "UserUniqueId", base: "uint32",
                    conformance: "M", quality: "X"
                }),

                DatatypeElement({
                    name: "UserStatus", base: "UserStatusEnum",
                    conformance: "M", quality: "X"
                }),

                DatatypeElement({
                    name: "UserType", base: "UserTypeEnum",
                    conformance: "M", quality: "X"
                }),

                DatatypeElement({
                    name: "CredentialRule", base: "CredentialRuleEnum",
                    conformance: "M", quality: "X"
                }),

                DatatypeElement({
                    name: "Credentials", base: "CredentialStruct",
                    conformance: "M", quality: "X"
                }),

                DatatypeElement({
                    name: "CreatorFabricIndex", base: "fabric-idx",
                    conformance: "M", quality: "X"
                }),

                DatatypeElement({
                    name: "LastModifiedFabricIndex", base: "fabric-idx",
                    conformance: "M", quality: "X"
                }),

                DatatypeElement({
                    name: "NextUserIndex", base: "uint16",
                    conformance: "M", quality: "X"
                })
            ]
        }),

        CommandElement({
            id: 0x001d, name: "ClearUser",
            access: "R A", conformance: "O", direction: "request",
            children: [
                DatatypeElement({
                    name: "UserIndex", base: "uint16",
                    conformance: "M"
                })
            ]
        }),

        CommandElement({
            id: 0x0022, name: "SetCredential",
            access: "R A", conformance: "O", direction: "request", response: "SetCredentialResponse",
            children: [
                DatatypeElement({
                    name: "OperationType", base: "DataOperationTypeEnum",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "Credential", base: "CredentialStruct",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "CredentialData", base: "octstr",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "UserIndex", base: "uint16",
                    conformance: "M", quality: "X"
                }),

                DatatypeElement({
                    name: "UserStatus", base: "UserStatusEnum",
                    conformance: "M", quality: "X"
                }),

                DatatypeElement({
                    name: "UserType", base: "UserTypeEnum",
                    conformance: "M", quality: "X"
                })
            ]
        }),

        CommandElement({
            id: 0x0023, name: "SetCredentialResponse",
            conformance: "O", direction: "response",
            children: [
                DatatypeElement({
                    name: "Status", base: "DlStatus",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "UserIndex", base: "uint16",
                    conformance: "M", quality: "X"
                }),

                DatatypeElement({
                    name: "NextCredentialIndex", base: "uint16",
                    conformance: "M", quality: "X"
                })
            ]
        }),

        CommandElement({
            id: 0x0024, name: "GetCredentialStatus",
            access: "R A", conformance: "O", direction: "request", response: "GetCredentialStatusResponse",
            children: [
                DatatypeElement({
                    name: "Credential", base: "CredentialStruct",
                    conformance: "M"
                })
            ]
        }),

        CommandElement({
            id: 0x0025, name: "GetCredentialStatusResponse",
            conformance: "O", direction: "response",
            children: [
                DatatypeElement({
                    name: "CredentialExists", base: "bool",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "UserIndex", base: "uint16",
                    conformance: "M", quality: "X"
                }),

                DatatypeElement({
                    name: "CreatorFabricIndex", base: "fabric-idx",
                    conformance: "M", quality: "X"
                }),

                DatatypeElement({
                    name: "LastModifiedFabricIndex", base: "fabric-idx",
                    conformance: "M", quality: "X"
                }),

                DatatypeElement({
                    name: "NextCredentialIndex", base: "uint16",
                    conformance: "M", quality: "X"
                })
            ]
        }),

        CommandElement({
            id: 0x0026, name: "ClearCredential",
            access: "R A", conformance: "O", direction: "request",
            children: [
                DatatypeElement({
                    name: "Credential", base: "CredentialStruct",
                    conformance: "M", quality: "X"
                })
            ]
        }),

        EventElement({
            id: 0x0000, name: "DoorLockAlarm",
            conformance: "M", priority: "critical",
            children: [
                DatatypeElement({
                    name: "AlarmCode", base: "AlarmCodeEnum",
                    conformance: "M"
                })
            ]
        }),

        EventElement({
            id: 0x0001, name: "DoorStateChange",
            conformance: "O", priority: "critical",
            children: [
                DatatypeElement({
                    name: "DoorState", base: "DoorStateEnum",
                    conformance: "M"
                })
            ]
        }),

        EventElement({
            id: 0x0002, name: "LockOperation",
            conformance: "M", priority: "critical",
            children: [
                DatatypeElement({
                    name: "LockOperationType", base: "LockOperationTypeEnum",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "OperationSource", base: "OperationSourceEnum",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "UserIndex", base: "uint16",
                    conformance: "M", quality: "X"
                }),

                DatatypeElement({
                    name: "FabricIndex", base: "fabric-idx",
                    conformance: "M", quality: "X"
                }),

                DatatypeElement({
                    name: "SourceNode", base: "node-id",
                    conformance: "M", quality: "X"
                }),

                DatatypeElement({
                    name: "Credentials", base: "CredentialStruct",
                    conformance: "O", quality: "X"
                })
            ]
        }),

        EventElement({
            id: 0x0003, name: "LockOperationError",
            conformance: "M", priority: "critical",
            children: [
                DatatypeElement({
                    name: "LockOperationType", base: "LockOperationTypeEnum",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "OperationSource", base: "OperationSourceEnum",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "OperationError", base: "OperationErrorEnum",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "UserIndex", base: "uint16",
                    conformance: "M", quality: "X"
                }),

                DatatypeElement({
                    name: "FabricIndex", base: "fabric-idx",
                    conformance: "M", quality: "X"
                }),

                DatatypeElement({
                    name: "SourceNode", base: "node-id",
                    conformance: "M", quality: "X"
                }),

                DatatypeElement({
                    name: "Credentials", base: "CredentialStruct",
                    conformance: "O", quality: "X"
                })
            ]
        }),

        EventElement({
            id: 0x0004, name: "LockUserChange",
            conformance: "M", priority: "info",
            children: [
                DatatypeElement({
                    name: "LockDataType", base: "LockDataTypeEnum",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "DataOperationType", base: "DataOperationTypeEnum",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "OperationSource", base: "OperationSourceEnum",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "UserIndex", base: "uint16",
                    conformance: "M", quality: "X"
                }),

                DatatypeElement({
                    name: "FabricIndex", base: "fabric-idx",
                    conformance: "M", quality: "X"
                }),

                DatatypeElement({
                    name: "SourceNode", base: "node-id",
                    conformance: "M", quality: "X"
                }),

                DatatypeElement({
                    name: "DataIndex", base: "uint16",
                    conformance: "M", quality: "X"
                })
            ]
        }),

        DatatypeElement({
            name: "AlarmCodeEnum", base: "enum8",
            conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "LockJammed",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0001, name: "LockFactoryReset",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0003, name: "LockRadioPowerCycled",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0004, name: "WrongCodeEntryLimit",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0005, name: "FrontEsceutcheonRemoved",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0006, name: "DoorForcedOpen",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0007, name: "DoorAjar",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0008, name: "ForcedUser",
                    conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "CredentialRuleEnum", base: "enum8",
            conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "Single",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0001, name: "Dual",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0002, name: "Tri",
                    conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "DlCredentialRuleMask", base: "map8",
            conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0001, name: "Single",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0002, name: "Dual",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0004, name: "Tri",
                    conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "CredentialStruct", base: "struct",
            conformance: "M",
            children: [
                DatatypeElement({
                    name: "CredentialType", base: "CredentialTypeEnum",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "CredentialIndex", base: "uint16",
                    conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "CredentialTypeEnum", base: "enum8",
            conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "ProgrammingPin",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0001, name: "Pin",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0002, name: "Rfid",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0003, name: "Fingerprint",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0004, name: "FingerVein",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0005, name: "Face",
                    conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "DataOperationTypeEnum", base: "enum8",
            conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "Add",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0001, name: "Clear",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0002, name: "Modify",
                    conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "DaysMaskMap", base: "map8",
            conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0001, name: "Sunday",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0002, name: "Monday",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0004, name: "Tuesday",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0008, name: "Wednesday",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0010, name: "Thursday",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0020, name: "Friday",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0040, name: "Saturday",
                    conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "DoorStateEnum", base: "enum8",
            conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "DoorOpen",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0001, name: "DoorClosed",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0002, name: "DoorJammed",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0003, name: "DoorForcedOpen",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0004, name: "DoorUnspecifiedError",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0005, name: "DoorAjar",
                    conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "LockDataTypeEnum", base: "enum8",
            conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "Unspecified",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0001, name: "ProgrammingCode",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0002, name: "UserIndex",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0003, name: "WeekDaySchedule",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0004, name: "YearDaySchedule",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0005, name: "HolidaySchedule",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0006, name: "Pin",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0007, name: "Rfid",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0008, name: "Fingerprint",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0009, name: "FingerVein",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x000a, name: "Face",
                    conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "LockOperationTypeEnum", base: "enum8",
            conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "Lock",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0001, name: "Unlock",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0002, name: "NonAccessUserEvent",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0003, name: "ForcedUserEvent",
                    conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "OperationErrorEnum", base: "enum8",
            conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "Unspecified",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0001, name: "InvalidCredential",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0002, name: "DisabledUserDenied",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0003, name: "Restricted",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0004, name: "InsufficientBattery",
                    conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "OperatingModeEnum", base: "enum8",
            conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "Normal",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0001, name: "Vacation",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0002, name: "Privacy",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0003, name: "NoRemoteLockUnlock",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0004, name: "Passage",
                    conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "OperationSourceEnum", base: "enum8",
            conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "Unspecified",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0001, name: "Manual",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0002, name: "ProprietaryRemote",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0003, name: "Keypad",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0004, name: "Auto",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0005, name: "Button",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0006, name: "Schedule",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0007, name: "Remote",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0008, name: "Rfid",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0009, name: "Biometric",
                    conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "UserStatusEnum", base: "enum8",
            conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "Available",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0001, name: "OccupiedEnabled",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0003, name: "OccupiedDisabled",
                    conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "UserTypeEnum", base: "enum8",
            conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "UnrestrictedUser",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0001, name: "YearDayScheduleUser",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0002, name: "WeekDayScheduleUser",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0003, name: "ProgrammingUser",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0004, name: "NonAccessUser",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0005, name: "ForcedUser",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0006, name: "DisposableUser",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0007, name: "ExpiringUser",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0008, name: "ScheduleRestrictedUser",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0009, name: "RemoteOnlyUser",
                    conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "DlLockState", base: "enum8",
            conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "NotFullyLocked",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0001, name: "Locked",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0002, name: "Unlocked",
                    conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "DlLockType", base: "enum8",
            conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "DeadBolt",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0001, name: "Magnetic",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0002, name: "Other",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0003, name: "Mortise",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0004, name: "Rim",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0005, name: "LatchBolt",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0006, name: "CylindricalLock",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0007, name: "TubularLock",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0008, name: "InterconnectedLock",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0009, name: "DeadLatch",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x000a, name: "DoorFurniture",
                    conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "DlCredentialRulesSupport", base: "map8",
            conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0001, name: "Single",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0002, name: "Dual",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0004, name: "Tri",
                    conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "DlSupportedOperatingModes", base: "map16",
            conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0001, name: "Normal",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0002, name: "Vacation",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0004, name: "Privacy",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0008, name: "NoRemoteLockUnlock",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0010, name: "Passage",
                    conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "DlDefaultConfigurationRegister", base: "map16",
            conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0001, name: "EnableLocalProgrammingEnabled",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0002, name: "KeypadInterfaceDefaultAccessEnabled",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0004, name: "RemoteInterfaceDefaultAccessIsEnabled",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0020, name: "SoundEnabled",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0040, name: "AutoRelockTimeSet",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0080, name: "LedSettingsSet",
                    conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "DlLocalProgrammingFeatures", base: "map8",
            conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0001, name: "AddUsersCredentialsSchedulesLocally",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0002, name: "ModifyUsersCredentialsSchedulesLocally",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0004, name: "ClearUsersCredentialsSchedulesLocally",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0008, name: "AdjustLockSettingsLocally",
                    conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "DlKeypadOperationEventMask", base: "map16",
            conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0001, name: "Unknown",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0002, name: "Lock",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0004, name: "Unlock",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0008, name: "LockInvalidPin",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0010, name: "LockInvalidSchedule",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0020, name: "UnlockInvalidCode",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0040, name: "UnlockInvalidSchedule",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0080, name: "NonAccessUserOpEvent",
                    conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "DlRemoteOperationEventMask", base: "map16",
            conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0001, name: "Unknown",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0002, name: "Lock",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0004, name: "Unlock",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0008, name: "LockInvalidCode",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0010, name: "LockInvalidSchedule",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0020, name: "UnlockInvalidCode",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0040, name: "UnlockInvalidSchedule",
                    conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "DlManualOperationEventMask", base: "map16",
            conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0001, name: "Unknown",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0002, name: "ThumbturnLock",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0004, name: "ThumbturnUnlock",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0008, name: "OneTouchLock",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0010, name: "KeyLock",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0020, name: "KeyUnlock",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0040, name: "AutoLock",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0080, name: "ScheduleLock",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0100, name: "ScheduleUnlock",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0200, name: "ManualLock",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0400, name: "ManualUnlock",
                    conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "DlRfidOperationEventMask", base: "map16",
            conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0001, name: "Unknown",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0002, name: "Lock",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0004, name: "Unlock",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0008, name: "LockInvalidRfid",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0010, name: "LockInvalidSchedule",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0020, name: "UnlockInvalidRfid",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0040, name: "UnlockInvalidSchedule",
                    conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "DlKeypadProgrammingEventMask", base: "map16",
            conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0001, name: "Unknown",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0002, name: "ProgrammingPinChanged",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0004, name: "PinAdded",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0008, name: "PinCleared",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0010, name: "PinChanged",
                    conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "DlRemoteProgrammingEventMask", base: "map16",
            conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0001, name: "Unknown",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0002, name: "ProgrammingPinChanged",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0004, name: "PinAdded",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0008, name: "PinCleared",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0010, name: "PinChanged",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0020, name: "RfidCodeAdded",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0040, name: "RfidCodeCleared",
                    conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "DlRfidProgrammingEventMask", base: "map16",
            conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0001, name: "Unknown",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0020, name: "RfidCodeAdded",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0040, name: "RfidCodeCleared",
                    conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "DlStatus", base: "enum8",
            conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "Success",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0001, name: "Failure",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0002, name: "Duplicate",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0003, name: "Occupied",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0085, name: "InvalidField",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0089, name: "ResourceExhausted",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x008b, name: "NotFound",
                    conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "DoorLockFeature", base: "map32",
            conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0001, name: "PinCredential",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0002, name: "RfidCredential",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0004, name: "FingerCredentials",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0008, name: "Logging",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0010, name: "WeekDayAccessSchedules",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0020, name: "DoorPositionSensor",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0040, name: "FaceCredentials",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0080, name: "CredentialsOverTheAirAccess",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0100, name: "User",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0200, name: "Notification",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0400, name: "YearDayAccessSchedules",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0800, name: "HolidaySchedules",
                    conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "DoorLockSetPinOrIdStatus", base: "enum8",
            conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "Success",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0001, name: "GeneralFailure",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0002, name: "MemoryFull",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0003, name: "DuplicateCodeError",
                    conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "DoorLockOperationEventCode", base: "enum8",
            conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "UnknownOrMfgSpecific",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0001, name: "Lock",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0002, name: "Unlock",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0003, name: "LockInvalidPinOrId",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0004, name: "LockInvalidSchedule",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0005, name: "UnlockInvalidPinOrId",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0006, name: "UnlockInvalidSchedule",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0007, name: "OneTouchLock",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0008, name: "KeyLock",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0009, name: "KeyUnlock",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x000a, name: "AutoLock",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x000b, name: "ScheduleLock",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x000c, name: "ScheduleUnlock",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x000d, name: "ManualLock",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x000e, name: "ManualUnlock",
                    conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "DoorLockProgrammingEventCode", base: "enum8",
            conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "UnknownOrMfgSpecific",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0001, name: "MasterCodeChanged",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0002, name: "PinAdded",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0003, name: "PinDeleted",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0004, name: "PinChanged",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0005, name: "IdAdded",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0006, name: "IdDeleted",
                    conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "DoorLockUserStatus", base: "enum8",
            conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "Available",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0001, name: "OccupiedEnabled",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0003, name: "OccupiedDisabled",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x00ff, name: "NotSupported",
                    conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "DoorLockUserType", base: "enum8",
            conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "Unrestricted",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0001, name: "YearDayScheduleUser",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0002, name: "WeekDayScheduleUser",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0003, name: "MasterUser",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0004, name: "NonAccessUser",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x00ff, name: "NotSupported",
                    conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "DoorLockDayOfWeek", base: "map8",
            conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0001, name: "Sunday",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0002, name: "Monday",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0004, name: "Tuesday",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0008, name: "Wednesday",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0010, name: "Thursday",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0020, name: "Friday",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0040, name: "Saturday",
                    conformance: "M"
                })
            ]
        })
    ]
}));
