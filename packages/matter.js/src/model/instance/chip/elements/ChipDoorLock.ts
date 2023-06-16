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
            id: 0x0000, name: "LockState", type: "DlLockState",
            conformance: "M", quality: "X P"
        }),

        AttributeElement({
            id: 0x0001, name: "LockType", type: "DlLockType",
            conformance: "M"
        }),

        AttributeElement({
            id: 0x0002, name: "ActuatorEnabled", type: "bool",
            conformance: "M"
        }),

        AttributeElement({
            id: 0x0003, name: "DoorState", type: "DoorStateEnum",
            conformance: "O", quality: "X P"
        }),

        AttributeElement({
            id: 0x0004, name: "DoorOpenEvents", type: "uint32",
            access: "RW VM", conformance: "O"
        }),

        AttributeElement({
            id: 0x0005, name: "DoorClosedEvents", type: "uint32",
            access: "RW VM", conformance: "O"
        }),

        AttributeElement({
            id: 0x0006, name: "OpenPeriod", type: "uint16",
            access: "RW VM", conformance: "O"
        }),

        AttributeElement({
            id: 0x0011, name: "NumTotalUsersSupported", type: "uint16",
            conformance: "O", default: 0
        }),

        AttributeElement({
            id: 0x0012, name: "NumPinUsersSupported", type: "uint16",
            conformance: "O", default: 0
        }),

        AttributeElement({
            id: 0x0013, name: "NumRfidUsersSupported", type: "uint16",
            conformance: "O", default: 0
        }),

        AttributeElement({
            id: 0x0014, name: "NumWeekdaySchedulesSupportedPerUser", type: "uint8",
            conformance: "O", default: 0
        }),

        AttributeElement({
            id: 0x0015, name: "NumYeardaySchedulesSupportedPerUser", type: "uint8",
            conformance: "O", default: 0
        }),

        AttributeElement({
            id: 0x0016, name: "NumHolidaySchedulesSupported", type: "uint8",
            conformance: "O", default: 0
        }),

        AttributeElement({
            id: 0x0017, name: "MaxPinLength", type: "uint8",
            conformance: "O"
        }),

        AttributeElement({
            id: 0x0018, name: "MinPinLength", type: "uint8",
            conformance: "O"
        }),

        AttributeElement({
            id: 0x0019, name: "MaxRfidCodeLength", type: "uint8",
            conformance: "O"
        }),

        AttributeElement({
            id: 0x001a, name: "MinRfidCodeLength", type: "uint8",
            conformance: "O"
        }),

        AttributeElement({
            id: 0x001b, name: "CredentialRulesSupport", type: "DlCredentialRuleMask",
            conformance: "O", default: 1
        }),

        AttributeElement({
            id: 0x001c, name: "NumCredentialsSupportedPerUser", type: "uint8",
            conformance: "O", default: 0
        }),

        AttributeElement({
            id: 0x0021, name: "Language", type: "string",
            access: "RW VM", conformance: "O", quality: "P"
        }),

        AttributeElement({
            id: 0x0022, name: "LedSettings", type: "uint8",
            access: "RW VM", conformance: "O", default: 0, quality: "P"
        }),

        AttributeElement({
            id: 0x0023, name: "AutoRelockTime", type: "uint32",
            access: "RW VM", conformance: "M", quality: "P"
        }),

        AttributeElement({
            id: 0x0024, name: "SoundVolume", type: "uint8",
            access: "RW VM", conformance: "O", default: 0, quality: "P"
        }),

        AttributeElement({
            id: 0x0025, name: "OperatingMode", type: "OperatingModeEnum",
            access: "RW VM", conformance: "M", quality: "P"
        }),

        AttributeElement({
            id: 0x0026, name: "SupportedOperatingModes", type: "DlSupportedOperatingModes",
            conformance: "M", default: 65526
        }),

        AttributeElement({
            id: 0x0027, name: "DefaultConfigurationRegister", type: "DlDefaultConfigurationRegister",
            conformance: "O", default: 0, quality: "P"
        }),

        AttributeElement({
            id: 0x0028, name: "EnableLocalProgramming", type: "bool",
            access: "RW VA", conformance: "O", default: true, quality: "P"
        }),

        AttributeElement({
            id: 0x0029, name: "EnableOneTouchLocking", type: "bool",
            access: "RW VM", conformance: "O", default: true, quality: "P"
        }),

        AttributeElement({
            id: 0x002a, name: "EnableInsideStatusLed", type: "bool",
            access: "RW VM", conformance: "O", default: true, quality: "P"
        }),

        AttributeElement({
            id: 0x002b, name: "EnablePrivacyModeButton", type: "bool",
            access: "RW VM", conformance: "O", default: true, quality: "P"
        }),

        AttributeElement({
            id: 0x002c, name: "LocalProgrammingFeatures", type: "DlLocalProgrammingFeatures",
            access: "RW VA", conformance: "O", default: 0, quality: "P"
        }),

        AttributeElement({
            id: 0x0030, name: "WrongCodeEntryLimit", type: "uint8",
            access: "RW VA", conformance: "O", quality: "P"
        }),

        AttributeElement({
            id: 0x0031, name: "UserCodeTemporaryDisableTime", type: "uint8",
            access: "RW VA", conformance: "O", quality: "P"
        }),

        AttributeElement({
            id: 0x0032, name: "SendPinOverTheAir", type: "bool",
            access: "RW VA", conformance: "O", default: true, quality: "P"
        }),

        AttributeElement({
            id: 0x0033, name: "RequirePinForRemoteOperation", type: "bool",
            access: "RW VA", conformance: "O", default: true, quality: "P"
        }),

        AttributeElement({
            id: 0x0035, name: "ExpiringUserTimeout", type: "uint16",
            access: "RW VA", conformance: "O", quality: "P"
        }),

        CommandElement({
            id: 0x0000, name: "LockDoor",
            conformance: "M", direction: "request",
            children: [
                DatatypeElement({
                    name: "PinCode", type: "octstr",
                    conformance: "O"
                })
            ]
        }),

        CommandElement({
            id: 0x0001, name: "UnlockDoor",
            conformance: "M", direction: "request",
            children: [
                DatatypeElement({
                    name: "PinCode", type: "octstr",
                    conformance: "O"
                })
            ]
        }),

        CommandElement({
            id: 0x0003, name: "UnlockWithTimeout",
            conformance: "O", direction: "request",
            children: [
                DatatypeElement({
                    name: "Timeout", type: "uint16",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "PinCode", type: "octstr",
                    conformance: "O"
                })
            ]
        }),

        CommandElement({
            id: 0x000b, name: "SetWeekDaySchedule",
            access: "R A", conformance: "O", direction: "request",
            children: [
                DatatypeElement({
                    name: "WeekDayIndex", type: "uint8",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "UserIndex", type: "uint16",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "DaysMask", type: "DaysMaskMap",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "StartHour", type: "uint8",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "StartMinute", type: "uint8",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "EndHour", type: "uint8",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "EndMinute", type: "uint8",
                    conformance: "M"
                })
            ]
        }),

        CommandElement({
            id: 0x000c, name: "GetWeekDaySchedule",
            access: "R A", conformance: "O", direction: "request", response: "GetWeekDayScheduleResponse",
            children: [
                DatatypeElement({
                    name: "WeekDayIndex", type: "uint8",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "UserIndex", type: "uint16",
                    conformance: "M"
                })
            ]
        }),

        CommandElement({
            id: 0x000c, name: "GetWeekDayScheduleResponse",
            conformance: "O", direction: "response",
            children: [
                DatatypeElement({
                    name: "WeekDayIndex", type: "uint8",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "UserIndex", type: "uint16",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "Status", type: "DlStatus",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "DaysMask", type: "DaysMaskMap",
                    conformance: "O"
                }),

                DatatypeElement({
                    name: "StartHour", type: "uint8",
                    conformance: "O"
                }),

                DatatypeElement({
                    name: "StartMinute", type: "uint8",
                    conformance: "O"
                }),

                DatatypeElement({
                    name: "EndHour", type: "uint8",
                    conformance: "O"
                }),

                DatatypeElement({
                    name: "EndMinute", type: "uint8",
                    conformance: "O"
                })
            ]
        }),

        CommandElement({
            id: 0x000d, name: "ClearWeekDaySchedule",
            access: "R A", conformance: "O", direction: "request",
            children: [
                DatatypeElement({
                    name: "WeekDayIndex", type: "uint8",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "UserIndex", type: "uint16",
                    conformance: "M"
                })
            ]
        }),

        CommandElement({
            id: 0x000e, name: "SetYearDaySchedule",
            access: "R A", conformance: "O", direction: "request",
            children: [
                DatatypeElement({
                    name: "YearDayIndex", type: "uint8",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "UserIndex", type: "uint16",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "LocalStartTime", type: "epoch-s",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "LocalEndTime", type: "epoch-s",
                    conformance: "M"
                })
            ]
        }),

        CommandElement({
            id: 0x000f, name: "GetYearDaySchedule",
            access: "R A", conformance: "O", direction: "request", response: "GetYearDayScheduleResponse",
            children: [
                DatatypeElement({
                    name: "YearDayIndex", type: "uint8",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "UserIndex", type: "uint16",
                    conformance: "M"
                })
            ]
        }),

        CommandElement({
            id: 0x000f, name: "GetYearDayScheduleResponse",
            conformance: "O", direction: "response",
            children: [
                DatatypeElement({
                    name: "YearDayIndex", type: "uint8",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "UserIndex", type: "uint16",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "Status", type: "DlStatus",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "LocalStartTime", type: "epoch-s",
                    conformance: "O"
                }),

                DatatypeElement({
                    name: "LocalEndTime", type: "epoch-s",
                    conformance: "O"
                })
            ]
        }),

        CommandElement({
            id: 0x0010, name: "ClearYearDaySchedule",
            access: "R A", conformance: "O", direction: "request",
            children: [
                DatatypeElement({
                    name: "YearDayIndex", type: "uint8",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "UserIndex", type: "uint16",
                    conformance: "M"
                })
            ]
        }),

        CommandElement({
            id: 0x0011, name: "SetHolidaySchedule",
            access: "R A", conformance: "O", direction: "request",
            children: [
                DatatypeElement({
                    name: "HolidayIndex", type: "uint8",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "LocalStartTime", type: "epoch-s",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "LocalEndTime", type: "epoch-s",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "OperatingMode", type: "OperatingModeEnum",
                    conformance: "M"
                })
            ]
        }),

        CommandElement({
            id: 0x0012, name: "GetHolidaySchedule",
            access: "R A", conformance: "O", direction: "request", response: "GetHolidayScheduleResponse",
            children: [
                DatatypeElement({
                    name: "HolidayIndex", type: "uint8",
                    conformance: "M"
                })
            ]
        }),

        CommandElement({
            id: 0x0012, name: "GetHolidayScheduleResponse",
            conformance: "O", direction: "response",
            children: [
                DatatypeElement({
                    name: "HolidayIndex", type: "uint8",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "Status", type: "DlStatus",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "LocalStartTime", type: "epoch-s",
                    conformance: "O"
                }),

                DatatypeElement({
                    name: "LocalEndTime", type: "epoch-s",
                    conformance: "O"
                }),

                DatatypeElement({
                    name: "OperatingMode", type: "OperatingModeEnum",
                    conformance: "O"
                })
            ]
        }),

        CommandElement({
            id: 0x0013, name: "ClearHolidaySchedule",
            access: "R A", conformance: "O", direction: "request",
            children: [
                DatatypeElement({
                    name: "HolidayIndex", type: "uint8",
                    conformance: "M"
                })
            ]
        }),

        CommandElement({
            id: 0x001a, name: "SetUser",
            access: "R A", conformance: "O", direction: "request",
            children: [
                DatatypeElement({
                    name: "OperationType", type: "DataOperationTypeEnum",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "UserIndex", type: "uint16",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "UserName", type: "string",
                    conformance: "M", quality: "X"
                }),

                DatatypeElement({
                    name: "UserUniqueId", type: "uint32",
                    conformance: "M", quality: "X"
                }),

                DatatypeElement({
                    name: "UserStatus", type: "UserStatusEnum",
                    conformance: "M", quality: "X"
                }),

                DatatypeElement({
                    name: "UserType", type: "UserTypeEnum",
                    conformance: "M", quality: "X"
                }),

                DatatypeElement({
                    name: "CredentialRule", type: "CredentialRuleEnum",
                    conformance: "M", quality: "X"
                })
            ]
        }),

        CommandElement({
            id: 0x001b, name: "GetUser",
            access: "R A", conformance: "O", direction: "request", response: "GetUserResponse",
            children: [
                DatatypeElement({
                    name: "UserIndex", type: "uint16",
                    conformance: "M"
                })
            ]
        }),

        CommandElement({
            id: 0x001c, name: "GetUserResponse",
            conformance: "O", direction: "response",
            children: [
                DatatypeElement({
                    name: "UserIndex", type: "uint16",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "UserName", type: "string",
                    conformance: "M", quality: "X"
                }),

                DatatypeElement({
                    name: "UserUniqueId", type: "uint32",
                    conformance: "M", quality: "X"
                }),

                DatatypeElement({
                    name: "UserStatus", type: "UserStatusEnum",
                    conformance: "M", quality: "X"
                }),

                DatatypeElement({
                    name: "UserType", type: "UserTypeEnum",
                    conformance: "M", quality: "X"
                }),

                DatatypeElement({
                    name: "CredentialRule", type: "CredentialRuleEnum",
                    conformance: "M", quality: "X"
                }),

                DatatypeElement({
                    name: "Credentials", type: "CredentialStruct",
                    conformance: "M", quality: "X"
                }),

                DatatypeElement({
                    name: "CreatorFabricIndex", type: "fabric-idx",
                    conformance: "M", quality: "X"
                }),

                DatatypeElement({
                    name: "LastModifiedFabricIndex", type: "fabric-idx",
                    conformance: "M", quality: "X"
                }),

                DatatypeElement({
                    name: "NextUserIndex", type: "uint16",
                    conformance: "M", quality: "X"
                })
            ]
        }),

        CommandElement({
            id: 0x001d, name: "ClearUser",
            access: "R A", conformance: "O", direction: "request",
            children: [
                DatatypeElement({
                    name: "UserIndex", type: "uint16",
                    conformance: "M"
                })
            ]
        }),

        CommandElement({
            id: 0x0022, name: "SetCredential",
            access: "R A", conformance: "O", direction: "request", response: "SetCredentialResponse",
            children: [
                DatatypeElement({
                    name: "OperationType", type: "DataOperationTypeEnum",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "Credential", type: "CredentialStruct",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "CredentialData", type: "octstr",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "UserIndex", type: "uint16",
                    conformance: "M", quality: "X"
                }),

                DatatypeElement({
                    name: "UserStatus", type: "UserStatusEnum",
                    conformance: "M", quality: "X"
                }),

                DatatypeElement({
                    name: "UserType", type: "UserTypeEnum",
                    conformance: "M", quality: "X"
                })
            ]
        }),

        CommandElement({
            id: 0x0023, name: "SetCredentialResponse",
            conformance: "O", direction: "response",
            children: [
                DatatypeElement({
                    name: "Status", type: "DlStatus",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "UserIndex", type: "uint16",
                    conformance: "M", quality: "X"
                }),

                DatatypeElement({
                    name: "NextCredentialIndex", type: "uint16",
                    conformance: "M", quality: "X"
                })
            ]
        }),

        CommandElement({
            id: 0x0024, name: "GetCredentialStatus",
            access: "R A", conformance: "O", direction: "request", response: "GetCredentialStatusResponse",
            children: [
                DatatypeElement({
                    name: "Credential", type: "CredentialStruct",
                    conformance: "M"
                })
            ]
        }),

        CommandElement({
            id: 0x0025, name: "GetCredentialStatusResponse",
            conformance: "O", direction: "response",
            children: [
                DatatypeElement({
                    name: "CredentialExists", type: "bool",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "UserIndex", type: "uint16",
                    conformance: "M", quality: "X"
                }),

                DatatypeElement({
                    name: "CreatorFabricIndex", type: "fabric-idx",
                    conformance: "M", quality: "X"
                }),

                DatatypeElement({
                    name: "LastModifiedFabricIndex", type: "fabric-idx",
                    conformance: "M", quality: "X"
                }),

                DatatypeElement({
                    name: "NextCredentialIndex", type: "uint16",
                    conformance: "M", quality: "X"
                })
            ]
        }),

        CommandElement({
            id: 0x0026, name: "ClearCredential",
            access: "R A", conformance: "O", direction: "request",
            children: [
                DatatypeElement({
                    name: "Credential", type: "CredentialStruct",
                    conformance: "M", quality: "X"
                })
            ]
        }),

        EventElement({
            id: 0x0000, name: "DoorLockAlarm",
            conformance: "M", priority: "critical",
            children: [
                DatatypeElement({
                    name: "AlarmCode", type: "AlarmCodeEnum",
                    conformance: "M"
                })
            ]
        }),

        EventElement({
            id: 0x0001, name: "DoorStateChange",
            conformance: "O", priority: "critical",
            children: [
                DatatypeElement({
                    name: "DoorState", type: "DoorStateEnum",
                    conformance: "M"
                })
            ]
        }),

        EventElement({
            id: 0x0002, name: "LockOperation",
            conformance: "M", priority: "critical",
            children: [
                DatatypeElement({
                    name: "LockOperationType", type: "LockOperationTypeEnum",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "OperationSource", type: "OperationSourceEnum",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "UserIndex", type: "uint16",
                    conformance: "M", quality: "X"
                }),

                DatatypeElement({
                    name: "FabricIndex", type: "fabric-idx",
                    conformance: "M", quality: "X"
                }),

                DatatypeElement({
                    name: "SourceNode", type: "node-id",
                    conformance: "M", quality: "X"
                }),

                DatatypeElement({
                    name: "Credentials", type: "CredentialStruct",
                    conformance: "O", quality: "X"
                })
            ]
        }),

        EventElement({
            id: 0x0003, name: "LockOperationError",
            conformance: "M", priority: "critical",
            children: [
                DatatypeElement({
                    name: "LockOperationType", type: "LockOperationTypeEnum",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "OperationSource", type: "OperationSourceEnum",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "OperationError", type: "OperationErrorEnum",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "UserIndex", type: "uint16",
                    conformance: "M", quality: "X"
                }),

                DatatypeElement({
                    name: "FabricIndex", type: "fabric-idx",
                    conformance: "M", quality: "X"
                }),

                DatatypeElement({
                    name: "SourceNode", type: "node-id",
                    conformance: "M", quality: "X"
                }),

                DatatypeElement({
                    name: "Credentials", type: "CredentialStruct",
                    conformance: "O", quality: "X"
                })
            ]
        }),

        EventElement({
            id: 0x0004, name: "LockUserChange",
            conformance: "M", priority: "info",
            children: [
                DatatypeElement({
                    name: "LockDataType", type: "LockDataTypeEnum",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "DataOperationType", type: "DataOperationTypeEnum",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "OperationSource", type: "OperationSourceEnum",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "UserIndex", type: "uint16",
                    conformance: "M", quality: "X"
                }),

                DatatypeElement({
                    name: "FabricIndex", type: "fabric-idx",
                    conformance: "M", quality: "X"
                }),

                DatatypeElement({
                    name: "SourceNode", type: "node-id",
                    conformance: "M", quality: "X"
                }),

                DatatypeElement({
                    name: "DataIndex", type: "uint16",
                    conformance: "M", quality: "X"
                })
            ]
        }),

        DatatypeElement({
            name: "AlarmCodeEnum", type: "enum8",
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
            name: "CredentialRuleEnum", type: "enum8",
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
            name: "DlCredentialRuleMask", type: "map8",
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
            name: "CredentialStruct", type: "struct",
            conformance: "M",
            children: [
                DatatypeElement({
                    name: "CredentialType", type: "CredentialTypeEnum",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "CredentialIndex", type: "uint16",
                    conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "CredentialTypeEnum", type: "enum8",
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
            name: "DataOperationTypeEnum", type: "enum8",
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
            name: "DaysMaskMap", type: "map8",
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
            name: "DoorStateEnum", type: "enum8",
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
            name: "LockDataTypeEnum", type: "enum8",
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
            name: "LockOperationTypeEnum", type: "enum8",
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
            name: "OperationErrorEnum", type: "enum8",
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
            name: "OperatingModeEnum", type: "enum8",
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
            name: "OperationSourceEnum", type: "enum8",
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
            name: "UserStatusEnum", type: "enum8",
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
            name: "UserTypeEnum", type: "enum8",
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
            name: "DlLockState", type: "enum8",
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
            name: "DlLockType", type: "enum8",
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
            name: "DlCredentialRulesSupport", type: "map8",
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
            name: "DlSupportedOperatingModes", type: "map16",
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
            name: "DlDefaultConfigurationRegister", type: "map16",
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
            name: "DlLocalProgrammingFeatures", type: "map8",
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
            name: "DlKeypadOperationEventMask", type: "map16",
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
            name: "DlRemoteOperationEventMask", type: "map16",
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
            name: "DlManualOperationEventMask", type: "map16",
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
            name: "DlRfidOperationEventMask", type: "map16",
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
            name: "DlKeypadProgrammingEventMask", type: "map16",
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
            name: "DlRemoteProgrammingEventMask", type: "map16",
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
            name: "DlRfidProgrammingEventMask", type: "map16",
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
            name: "DlStatus", type: "enum8",
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
            name: "DoorLockFeature", type: "map32",
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
            name: "DoorLockSetPinOrIdStatus", type: "enum8",
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
            name: "DoorLockOperationEventCode", type: "enum8",
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
            name: "DoorLockProgrammingEventCode", type: "enum8",
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
            name: "DoorLockUserStatus", type: "enum8",
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
            name: "DoorLockUserType", type: "enum8",
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
            name: "DoorLockDayOfWeek", type: "map8",
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
