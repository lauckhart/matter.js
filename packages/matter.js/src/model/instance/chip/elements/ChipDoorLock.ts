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
            quality: "X P"
        }),

        AttributeElement({
            id: 0x0001, name: "LockType", base: "DlLockType"
        }),

        AttributeElement({
            id: 0x0002, name: "ActuatorEnabled", base: "bool"
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
            access: "RW VM", quality: "P"
        }),

        AttributeElement({
            id: 0x0024, name: "SoundVolume", base: "uint8",
            access: "RW VM", conformance: "O", default: 0, quality: "P"
        }),

        AttributeElement({
            id: 0x0025, name: "OperatingMode", base: "OperatingModeEnum",
            access: "RW VM", quality: "P"
        }),

        AttributeElement({
            id: 0x0026, name: "SupportedOperatingModes", base: "DlSupportedOperatingModes",
            default: 65526
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
            direction: "request",
            children: [
                DatatypeElement({
                    name: "PinCode", base: "octstr",
                    conformance: "O"
                })
            ]
        }),

        CommandElement({
            id: 0x0001, name: "UnlockDoor",
            direction: "request",
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
                    name: "Timeout", base: "uint16"
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
                    name: "WeekDayIndex", base: "uint8"
                }),

                DatatypeElement({
                    name: "UserIndex", base: "uint16"
                }),

                DatatypeElement({
                    name: "DaysMask", base: "DaysMaskMap"
                }),

                DatatypeElement({
                    name: "StartHour", base: "uint8"
                }),

                DatatypeElement({
                    name: "StartMinute", base: "uint8"
                }),

                DatatypeElement({
                    name: "EndHour", base: "uint8"
                }),

                DatatypeElement({
                    name: "EndMinute", base: "uint8"
                })
            ]
        }),

        CommandElement({
            id: 0x000c, name: "GetWeekDaySchedule",
            access: "R A", conformance: "O", direction: "request", response: "GetWeekDayScheduleResponse",
            children: [
                DatatypeElement({
                    name: "WeekDayIndex", base: "uint8"
                }),

                DatatypeElement({
                    name: "UserIndex", base: "uint16"
                })
            ]
        }),

        CommandElement({
            id: 0x000c, name: "GetWeekDayScheduleResponse",
            conformance: "O", direction: "response",
            children: [
                DatatypeElement({
                    name: "WeekDayIndex", base: "uint8"
                }),

                DatatypeElement({
                    name: "UserIndex", base: "uint16"
                }),

                DatatypeElement({
                    name: "Status", base: "DlStatus"
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
                    name: "WeekDayIndex", base: "uint8"
                }),

                DatatypeElement({
                    name: "UserIndex", base: "uint16"
                })
            ]
        }),

        CommandElement({
            id: 0x000e, name: "SetYearDaySchedule",
            access: "R A", conformance: "O", direction: "request",
            children: [
                DatatypeElement({
                    name: "YearDayIndex", base: "uint8"
                }),

                DatatypeElement({
                    name: "UserIndex", base: "uint16"
                }),

                DatatypeElement({
                    name: "LocalStartTime", base: "epoch-s"
                }),

                DatatypeElement({
                    name: "LocalEndTime", base: "epoch-s"
                })
            ]
        }),

        CommandElement({
            id: 0x000f, name: "GetYearDaySchedule",
            access: "R A", conformance: "O", direction: "request", response: "GetYearDayScheduleResponse",
            children: [
                DatatypeElement({
                    name: "YearDayIndex", base: "uint8"
                }),

                DatatypeElement({
                    name: "UserIndex", base: "uint16"
                })
            ]
        }),

        CommandElement({
            id: 0x000f, name: "GetYearDayScheduleResponse",
            conformance: "O", direction: "response",
            children: [
                DatatypeElement({
                    name: "YearDayIndex", base: "uint8"
                }),

                DatatypeElement({
                    name: "UserIndex", base: "uint16"
                }),

                DatatypeElement({
                    name: "Status", base: "DlStatus"
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
                    name: "YearDayIndex", base: "uint8"
                }),

                DatatypeElement({
                    name: "UserIndex", base: "uint16"
                })
            ]
        }),

        CommandElement({
            id: 0x0011, name: "SetHolidaySchedule",
            access: "R A", conformance: "O", direction: "request",
            children: [
                DatatypeElement({
                    name: "HolidayIndex", base: "uint8"
                }),

                DatatypeElement({
                    name: "LocalStartTime", base: "epoch-s"
                }),

                DatatypeElement({
                    name: "LocalEndTime", base: "epoch-s"
                }),

                DatatypeElement({
                    name: "OperatingMode", base: "OperatingModeEnum"
                })
            ]
        }),

        CommandElement({
            id: 0x0012, name: "GetHolidaySchedule",
            access: "R A", conformance: "O", direction: "request", response: "GetHolidayScheduleResponse",
            children: [
                DatatypeElement({
                    name: "HolidayIndex", base: "uint8"
                })
            ]
        }),

        CommandElement({
            id: 0x0012, name: "GetHolidayScheduleResponse",
            conformance: "O", direction: "response",
            children: [
                DatatypeElement({
                    name: "HolidayIndex", base: "uint8"
                }),

                DatatypeElement({
                    name: "Status", base: "DlStatus"
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
                    name: "HolidayIndex", base: "uint8"
                })
            ]
        }),

        CommandElement({
            id: 0x001a, name: "SetUser",
            access: "R A", conformance: "O", direction: "request",
            children: [
                DatatypeElement({
                    name: "OperationType", base: "DataOperationTypeEnum"
                }),

                DatatypeElement({
                    name: "UserIndex", base: "uint16"
                }),

                DatatypeElement({
                    name: "UserName", base: "string",
                    quality: "X"
                }),

                DatatypeElement({
                    name: "UserUniqueId", base: "uint32",
                    quality: "X"
                }),

                DatatypeElement({
                    name: "UserStatus", base: "UserStatusEnum",
                    quality: "X"
                }),

                DatatypeElement({
                    name: "UserType", base: "UserTypeEnum",
                    quality: "X"
                }),

                DatatypeElement({
                    name: "CredentialRule", base: "CredentialRuleEnum",
                    quality: "X"
                })
            ]
        }),

        CommandElement({
            id: 0x001b, name: "GetUser",
            access: "R A", conformance: "O", direction: "request", response: "GetUserResponse",
            children: [
                DatatypeElement({
                    name: "UserIndex", base: "uint16"
                })
            ]
        }),

        CommandElement({
            id: 0x001c, name: "GetUserResponse",
            conformance: "O", direction: "response",
            children: [
                DatatypeElement({
                    name: "UserIndex", base: "uint16"
                }),

                DatatypeElement({
                    name: "UserName", base: "string",
                    quality: "X"
                }),

                DatatypeElement({
                    name: "UserUniqueId", base: "uint32",
                    quality: "X"
                }),

                DatatypeElement({
                    name: "UserStatus", base: "UserStatusEnum",
                    quality: "X"
                }),

                DatatypeElement({
                    name: "UserType", base: "UserTypeEnum",
                    quality: "X"
                }),

                DatatypeElement({
                    name: "CredentialRule", base: "CredentialRuleEnum",
                    quality: "X"
                }),

                DatatypeElement({
                    name: "Credentials", base: "CredentialStruct",
                    quality: "X"
                }),

                DatatypeElement({
                    name: "CreatorFabricIndex", base: "fabric-idx",
                    quality: "X"
                }),

                DatatypeElement({
                    name: "LastModifiedFabricIndex", base: "fabric-idx",
                    quality: "X"
                }),

                DatatypeElement({
                    name: "NextUserIndex", base: "uint16",
                    quality: "X"
                })
            ]
        }),

        CommandElement({
            id: 0x001d, name: "ClearUser",
            access: "R A", conformance: "O", direction: "request",
            children: [
                DatatypeElement({
                    name: "UserIndex", base: "uint16"
                })
            ]
        }),

        CommandElement({
            id: 0x0022, name: "SetCredential",
            access: "R A", conformance: "O", direction: "request", response: "SetCredentialResponse",
            children: [
                DatatypeElement({
                    name: "OperationType", base: "DataOperationTypeEnum"
                }),

                DatatypeElement({
                    name: "Credential", base: "CredentialStruct"
                }),

                DatatypeElement({
                    name: "CredentialData", base: "octstr"
                }),

                DatatypeElement({
                    name: "UserIndex", base: "uint16",
                    quality: "X"
                }),

                DatatypeElement({
                    name: "UserStatus", base: "UserStatusEnum",
                    quality: "X"
                }),

                DatatypeElement({
                    name: "UserType", base: "UserTypeEnum",
                    quality: "X"
                })
            ]
        }),

        CommandElement({
            id: 0x0023, name: "SetCredentialResponse",
            conformance: "O", direction: "response",
            children: [
                DatatypeElement({
                    name: "Status", base: "DlStatus"
                }),

                DatatypeElement({
                    name: "UserIndex", base: "uint16",
                    quality: "X"
                }),

                DatatypeElement({
                    name: "NextCredentialIndex", base: "uint16",
                    quality: "X"
                })
            ]
        }),

        CommandElement({
            id: 0x0024, name: "GetCredentialStatus",
            access: "R A", conformance: "O", direction: "request", response: "GetCredentialStatusResponse",
            children: [
                DatatypeElement({
                    name: "Credential", base: "CredentialStruct"
                })
            ]
        }),

        CommandElement({
            id: 0x0025, name: "GetCredentialStatusResponse",
            conformance: "O", direction: "response",
            children: [
                DatatypeElement({
                    name: "CredentialExists", base: "bool"
                }),

                DatatypeElement({
                    name: "UserIndex", base: "uint16",
                    quality: "X"
                }),

                DatatypeElement({
                    name: "CreatorFabricIndex", base: "fabric-idx",
                    quality: "X"
                }),

                DatatypeElement({
                    name: "LastModifiedFabricIndex", base: "fabric-idx",
                    quality: "X"
                }),

                DatatypeElement({
                    name: "NextCredentialIndex", base: "uint16",
                    quality: "X"
                })
            ]
        }),

        CommandElement({
            id: 0x0026, name: "ClearCredential",
            access: "R A", conformance: "O", direction: "request",
            children: [
                DatatypeElement({
                    name: "Credential", base: "CredentialStruct",
                    quality: "X"
                })
            ]
        }),

        EventElement({
            id: 0x0000, name: "DoorLockAlarm",
            priority: "critical",
            children: [
                DatatypeElement({
                    name: "AlarmCode", base: "AlarmCodeEnum"
                })
            ]
        }),

        EventElement({
            id: 0x0001, name: "DoorStateChange",
            conformance: "O", priority: "critical",
            children: [
                DatatypeElement({
                    name: "DoorState", base: "DoorStateEnum"
                })
            ]
        }),

        EventElement({
            id: 0x0002, name: "LockOperation",
            priority: "critical",
            children: [
                DatatypeElement({
                    name: "LockOperationType", base: "LockOperationTypeEnum"
                }),

                DatatypeElement({
                    name: "OperationSource", base: "OperationSourceEnum"
                }),

                DatatypeElement({
                    name: "UserIndex", base: "uint16",
                    quality: "X"
                }),

                DatatypeElement({
                    name: "FabricIndex", base: "fabric-idx",
                    quality: "X"
                }),

                DatatypeElement({
                    name: "SourceNode", base: "node-id",
                    quality: "X"
                }),

                DatatypeElement({
                    name: "Credentials", base: "CredentialStruct",
                    conformance: "O", quality: "X"
                })
            ]
        }),

        EventElement({
            id: 0x0003, name: "LockOperationError",
            priority: "critical",
            children: [
                DatatypeElement({
                    name: "LockOperationType", base: "LockOperationTypeEnum"
                }),

                DatatypeElement({
                    name: "OperationSource", base: "OperationSourceEnum"
                }),

                DatatypeElement({
                    name: "OperationError", base: "OperationErrorEnum"
                }),

                DatatypeElement({
                    name: "UserIndex", base: "uint16",
                    quality: "X"
                }),

                DatatypeElement({
                    name: "FabricIndex", base: "fabric-idx",
                    quality: "X"
                }),

                DatatypeElement({
                    name: "SourceNode", base: "node-id",
                    quality: "X"
                }),

                DatatypeElement({
                    name: "Credentials", base: "CredentialStruct",
                    conformance: "O", quality: "X"
                })
            ]
        }),

        EventElement({
            id: 0x0004, name: "LockUserChange",
            priority: "info",
            children: [
                DatatypeElement({
                    name: "LockDataType", base: "LockDataTypeEnum"
                }),

                DatatypeElement({
                    name: "DataOperationType", base: "DataOperationTypeEnum"
                }),

                DatatypeElement({
                    name: "OperationSource", base: "OperationSourceEnum"
                }),

                DatatypeElement({
                    name: "UserIndex", base: "uint16",
                    quality: "X"
                }),

                DatatypeElement({
                    name: "FabricIndex", base: "fabric-idx",
                    quality: "X"
                }),

                DatatypeElement({
                    name: "SourceNode", base: "node-id",
                    quality: "X"
                }),

                DatatypeElement({
                    name: "DataIndex", base: "uint16",
                    quality: "X"
                })
            ]
        }),

        DatatypeElement({
            name: "AlarmCodeEnum", base: "enum8",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "LockJammed"
                }),

                DatatypeElement({
                    id: 0x0001, name: "LockFactoryReset"
                }),

                DatatypeElement({
                    id: 0x0003, name: "LockRadioPowerCycled"
                }),

                DatatypeElement({
                    id: 0x0004, name: "WrongCodeEntryLimit"
                }),

                DatatypeElement({
                    id: 0x0005, name: "FrontEsceutcheonRemoved"
                }),

                DatatypeElement({
                    id: 0x0006, name: "DoorForcedOpen"
                }),

                DatatypeElement({
                    id: 0x0007, name: "DoorAjar"
                }),

                DatatypeElement({
                    id: 0x0008, name: "ForcedUser"
                })
            ]
        }),

        DatatypeElement({
            name: "CredentialRuleEnum", base: "enum8",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "Single"
                }),

                DatatypeElement({
                    id: 0x0001, name: "Dual"
                }),

                DatatypeElement({
                    id: 0x0002, name: "Tri"
                })
            ]
        }),

        DatatypeElement({
            name: "DlCredentialRuleMask", base: "map8",
            children: [
                DatatypeElement({
                    id: 0x0001, name: "Single"
                }),

                DatatypeElement({
                    id: 0x0002, name: "Dual"
                }),

                DatatypeElement({
                    id: 0x0004, name: "Tri"
                })
            ]
        }),

        DatatypeElement({
            name: "CredentialStruct", base: "struct",
            children: [
                DatatypeElement({
                    name: "CredentialType", base: "CredentialTypeEnum"
                }),

                DatatypeElement({
                    name: "CredentialIndex", base: "uint16"
                })
            ]
        }),

        DatatypeElement({
            name: "CredentialTypeEnum", base: "enum8",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "ProgrammingPin"
                }),

                DatatypeElement({
                    id: 0x0001, name: "Pin"
                }),

                DatatypeElement({
                    id: 0x0002, name: "Rfid"
                }),

                DatatypeElement({
                    id: 0x0003, name: "Fingerprint"
                }),

                DatatypeElement({
                    id: 0x0004, name: "FingerVein"
                }),

                DatatypeElement({
                    id: 0x0005, name: "Face"
                })
            ]
        }),

        DatatypeElement({
            name: "DataOperationTypeEnum", base: "enum8",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "Add"
                }),

                DatatypeElement({
                    id: 0x0001, name: "Clear"
                }),

                DatatypeElement({
                    id: 0x0002, name: "Modify"
                })
            ]
        }),

        DatatypeElement({
            name: "DaysMaskMap", base: "map8",
            children: [
                DatatypeElement({
                    id: 0x0001, name: "Sunday"
                }),

                DatatypeElement({
                    id: 0x0002, name: "Monday"
                }),

                DatatypeElement({
                    id: 0x0004, name: "Tuesday"
                }),

                DatatypeElement({
                    id: 0x0008, name: "Wednesday"
                }),

                DatatypeElement({
                    id: 0x0010, name: "Thursday"
                }),

                DatatypeElement({
                    id: 0x0020, name: "Friday"
                }),

                DatatypeElement({
                    id: 0x0040, name: "Saturday"
                })
            ]
        }),

        DatatypeElement({
            name: "DoorStateEnum", base: "enum8",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "DoorOpen"
                }),

                DatatypeElement({
                    id: 0x0001, name: "DoorClosed"
                }),

                DatatypeElement({
                    id: 0x0002, name: "DoorJammed"
                }),

                DatatypeElement({
                    id: 0x0003, name: "DoorForcedOpen"
                }),

                DatatypeElement({
                    id: 0x0004, name: "DoorUnspecifiedError"
                }),

                DatatypeElement({
                    id: 0x0005, name: "DoorAjar"
                })
            ]
        }),

        DatatypeElement({
            name: "LockDataTypeEnum", base: "enum8",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "Unspecified"
                }),

                DatatypeElement({
                    id: 0x0001, name: "ProgrammingCode"
                }),

                DatatypeElement({
                    id: 0x0002, name: "UserIndex"
                }),

                DatatypeElement({
                    id: 0x0003, name: "WeekDaySchedule"
                }),

                DatatypeElement({
                    id: 0x0004, name: "YearDaySchedule"
                }),

                DatatypeElement({
                    id: 0x0005, name: "HolidaySchedule"
                }),

                DatatypeElement({
                    id: 0x0006, name: "Pin"
                }),

                DatatypeElement({
                    id: 0x0007, name: "Rfid"
                }),

                DatatypeElement({
                    id: 0x0008, name: "Fingerprint"
                }),

                DatatypeElement({
                    id: 0x0009, name: "FingerVein"
                }),

                DatatypeElement({
                    id: 0x000a, name: "Face"
                })
            ]
        }),

        DatatypeElement({
            name: "LockOperationTypeEnum", base: "enum8",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "Lock"
                }),

                DatatypeElement({
                    id: 0x0001, name: "Unlock"
                }),

                DatatypeElement({
                    id: 0x0002, name: "NonAccessUserEvent"
                }),

                DatatypeElement({
                    id: 0x0003, name: "ForcedUserEvent"
                })
            ]
        }),

        DatatypeElement({
            name: "OperationErrorEnum", base: "enum8",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "Unspecified"
                }),

                DatatypeElement({
                    id: 0x0001, name: "InvalidCredential"
                }),

                DatatypeElement({
                    id: 0x0002, name: "DisabledUserDenied"
                }),

                DatatypeElement({
                    id: 0x0003, name: "Restricted"
                }),

                DatatypeElement({
                    id: 0x0004, name: "InsufficientBattery"
                })
            ]
        }),

        DatatypeElement({
            name: "OperatingModeEnum", base: "enum8",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "Normal"
                }),

                DatatypeElement({
                    id: 0x0001, name: "Vacation"
                }),

                DatatypeElement({
                    id: 0x0002, name: "Privacy"
                }),

                DatatypeElement({
                    id: 0x0003, name: "NoRemoteLockUnlock"
                }),

                DatatypeElement({
                    id: 0x0004, name: "Passage"
                })
            ]
        }),

        DatatypeElement({
            name: "OperationSourceEnum", base: "enum8",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "Unspecified"
                }),

                DatatypeElement({
                    id: 0x0001, name: "Manual"
                }),

                DatatypeElement({
                    id: 0x0002, name: "ProprietaryRemote"
                }),

                DatatypeElement({
                    id: 0x0003, name: "Keypad"
                }),

                DatatypeElement({
                    id: 0x0004, name: "Auto"
                }),

                DatatypeElement({
                    id: 0x0005, name: "Button"
                }),

                DatatypeElement({
                    id: 0x0006, name: "Schedule"
                }),

                DatatypeElement({
                    id: 0x0007, name: "Remote"
                }),

                DatatypeElement({
                    id: 0x0008, name: "Rfid"
                }),

                DatatypeElement({
                    id: 0x0009, name: "Biometric"
                })
            ]
        }),

        DatatypeElement({
            name: "UserStatusEnum", base: "enum8",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "Available"
                }),

                DatatypeElement({
                    id: 0x0001, name: "OccupiedEnabled"
                }),

                DatatypeElement({
                    id: 0x0003, name: "OccupiedDisabled"
                })
            ]
        }),

        DatatypeElement({
            name: "UserTypeEnum", base: "enum8",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "UnrestrictedUser"
                }),

                DatatypeElement({
                    id: 0x0001, name: "YearDayScheduleUser"
                }),

                DatatypeElement({
                    id: 0x0002, name: "WeekDayScheduleUser"
                }),

                DatatypeElement({
                    id: 0x0003, name: "ProgrammingUser"
                }),

                DatatypeElement({
                    id: 0x0004, name: "NonAccessUser"
                }),

                DatatypeElement({
                    id: 0x0005, name: "ForcedUser"
                }),

                DatatypeElement({
                    id: 0x0006, name: "DisposableUser"
                }),

                DatatypeElement({
                    id: 0x0007, name: "ExpiringUser"
                }),

                DatatypeElement({
                    id: 0x0008, name: "ScheduleRestrictedUser"
                }),

                DatatypeElement({
                    id: 0x0009, name: "RemoteOnlyUser"
                })
            ]
        }),

        DatatypeElement({
            name: "DlLockState", base: "enum8",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "NotFullyLocked"
                }),

                DatatypeElement({
                    id: 0x0001, name: "Locked"
                }),

                DatatypeElement({
                    id: 0x0002, name: "Unlocked"
                })
            ]
        }),

        DatatypeElement({
            name: "DlLockType", base: "enum8",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "DeadBolt"
                }),

                DatatypeElement({
                    id: 0x0001, name: "Magnetic"
                }),

                DatatypeElement({
                    id: 0x0002, name: "Other"
                }),

                DatatypeElement({
                    id: 0x0003, name: "Mortise"
                }),

                DatatypeElement({
                    id: 0x0004, name: "Rim"
                }),

                DatatypeElement({
                    id: 0x0005, name: "LatchBolt"
                }),

                DatatypeElement({
                    id: 0x0006, name: "CylindricalLock"
                }),

                DatatypeElement({
                    id: 0x0007, name: "TubularLock"
                }),

                DatatypeElement({
                    id: 0x0008, name: "InterconnectedLock"
                }),

                DatatypeElement({
                    id: 0x0009, name: "DeadLatch"
                }),

                DatatypeElement({
                    id: 0x000a, name: "DoorFurniture"
                })
            ]
        }),

        DatatypeElement({
            name: "DlCredentialRulesSupport", base: "map8",
            children: [
                DatatypeElement({
                    id: 0x0001, name: "Single"
                }),

                DatatypeElement({
                    id: 0x0002, name: "Dual"
                }),

                DatatypeElement({
                    id: 0x0004, name: "Tri"
                })
            ]
        }),

        DatatypeElement({
            name: "DlSupportedOperatingModes", base: "map16",
            children: [
                DatatypeElement({
                    id: 0x0001, name: "Normal"
                }),

                DatatypeElement({
                    id: 0x0002, name: "Vacation"
                }),

                DatatypeElement({
                    id: 0x0004, name: "Privacy"
                }),

                DatatypeElement({
                    id: 0x0008, name: "NoRemoteLockUnlock"
                }),

                DatatypeElement({
                    id: 0x0010, name: "Passage"
                })
            ]
        }),

        DatatypeElement({
            name: "DlDefaultConfigurationRegister", base: "map16",
            children: [
                DatatypeElement({
                    id: 0x0001, name: "EnableLocalProgrammingEnabled"
                }),

                DatatypeElement({
                    id: 0x0002, name: "KeypadInterfaceDefaultAccessEnabled"
                }),

                DatatypeElement({
                    id: 0x0004, name: "RemoteInterfaceDefaultAccessIsEnabled"
                }),

                DatatypeElement({
                    id: 0x0020, name: "SoundEnabled"
                }),

                DatatypeElement({
                    id: 0x0040, name: "AutoRelockTimeSet"
                }),

                DatatypeElement({
                    id: 0x0080, name: "LedSettingsSet"
                })
            ]
        }),

        DatatypeElement({
            name: "DlLocalProgrammingFeatures", base: "map8",
            children: [
                DatatypeElement({
                    id: 0x0001, name: "AddUsersCredentialsSchedulesLocally"
                }),

                DatatypeElement({
                    id: 0x0002, name: "ModifyUsersCredentialsSchedulesLocally"
                }),

                DatatypeElement({
                    id: 0x0004, name: "ClearUsersCredentialsSchedulesLocally"
                }),

                DatatypeElement({
                    id: 0x0008, name: "AdjustLockSettingsLocally"
                })
            ]
        }),

        DatatypeElement({
            name: "DlKeypadOperationEventMask", base: "map16",
            children: [
                DatatypeElement({
                    id: 0x0001, name: "Unknown"
                }),

                DatatypeElement({
                    id: 0x0002, name: "Lock"
                }),

                DatatypeElement({
                    id: 0x0004, name: "Unlock"
                }),

                DatatypeElement({
                    id: 0x0008, name: "LockInvalidPin"
                }),

                DatatypeElement({
                    id: 0x0010, name: "LockInvalidSchedule"
                }),

                DatatypeElement({
                    id: 0x0020, name: "UnlockInvalidCode"
                }),

                DatatypeElement({
                    id: 0x0040, name: "UnlockInvalidSchedule"
                }),

                DatatypeElement({
                    id: 0x0080, name: "NonAccessUserOpEvent"
                })
            ]
        }),

        DatatypeElement({
            name: "DlRemoteOperationEventMask", base: "map16",
            children: [
                DatatypeElement({
                    id: 0x0001, name: "Unknown"
                }),

                DatatypeElement({
                    id: 0x0002, name: "Lock"
                }),

                DatatypeElement({
                    id: 0x0004, name: "Unlock"
                }),

                DatatypeElement({
                    id: 0x0008, name: "LockInvalidCode"
                }),

                DatatypeElement({
                    id: 0x0010, name: "LockInvalidSchedule"
                }),

                DatatypeElement({
                    id: 0x0020, name: "UnlockInvalidCode"
                }),

                DatatypeElement({
                    id: 0x0040, name: "UnlockInvalidSchedule"
                })
            ]
        }),

        DatatypeElement({
            name: "DlManualOperationEventMask", base: "map16",
            children: [
                DatatypeElement({
                    id: 0x0001, name: "Unknown"
                }),

                DatatypeElement({
                    id: 0x0002, name: "ThumbturnLock"
                }),

                DatatypeElement({
                    id: 0x0004, name: "ThumbturnUnlock"
                }),

                DatatypeElement({
                    id: 0x0008, name: "OneTouchLock"
                }),

                DatatypeElement({
                    id: 0x0010, name: "KeyLock"
                }),

                DatatypeElement({
                    id: 0x0020, name: "KeyUnlock"
                }),

                DatatypeElement({
                    id: 0x0040, name: "AutoLock"
                }),

                DatatypeElement({
                    id: 0x0080, name: "ScheduleLock"
                }),

                DatatypeElement({
                    id: 0x0100, name: "ScheduleUnlock"
                }),

                DatatypeElement({
                    id: 0x0200, name: "ManualLock"
                }),

                DatatypeElement({
                    id: 0x0400, name: "ManualUnlock"
                })
            ]
        }),

        DatatypeElement({
            name: "DlRfidOperationEventMask", base: "map16",
            children: [
                DatatypeElement({
                    id: 0x0001, name: "Unknown"
                }),

                DatatypeElement({
                    id: 0x0002, name: "Lock"
                }),

                DatatypeElement({
                    id: 0x0004, name: "Unlock"
                }),

                DatatypeElement({
                    id: 0x0008, name: "LockInvalidRfid"
                }),

                DatatypeElement({
                    id: 0x0010, name: "LockInvalidSchedule"
                }),

                DatatypeElement({
                    id: 0x0020, name: "UnlockInvalidRfid"
                }),

                DatatypeElement({
                    id: 0x0040, name: "UnlockInvalidSchedule"
                })
            ]
        }),

        DatatypeElement({
            name: "DlKeypadProgrammingEventMask", base: "map16",
            children: [
                DatatypeElement({
                    id: 0x0001, name: "Unknown"
                }),

                DatatypeElement({
                    id: 0x0002, name: "ProgrammingPinChanged"
                }),

                DatatypeElement({
                    id: 0x0004, name: "PinAdded"
                }),

                DatatypeElement({
                    id: 0x0008, name: "PinCleared"
                }),

                DatatypeElement({
                    id: 0x0010, name: "PinChanged"
                })
            ]
        }),

        DatatypeElement({
            name: "DlRemoteProgrammingEventMask", base: "map16",
            children: [
                DatatypeElement({
                    id: 0x0001, name: "Unknown"
                }),

                DatatypeElement({
                    id: 0x0002, name: "ProgrammingPinChanged"
                }),

                DatatypeElement({
                    id: 0x0004, name: "PinAdded"
                }),

                DatatypeElement({
                    id: 0x0008, name: "PinCleared"
                }),

                DatatypeElement({
                    id: 0x0010, name: "PinChanged"
                }),

                DatatypeElement({
                    id: 0x0020, name: "RfidCodeAdded"
                }),

                DatatypeElement({
                    id: 0x0040, name: "RfidCodeCleared"
                })
            ]
        }),

        DatatypeElement({
            name: "DlRfidProgrammingEventMask", base: "map16",
            children: [
                DatatypeElement({
                    id: 0x0001, name: "Unknown"
                }),

                DatatypeElement({
                    id: 0x0020, name: "RfidCodeAdded"
                }),

                DatatypeElement({
                    id: 0x0040, name: "RfidCodeCleared"
                })
            ]
        }),

        DatatypeElement({
            name: "DlStatus", base: "enum8",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "Success"
                }),

                DatatypeElement({
                    id: 0x0001, name: "Failure"
                }),

                DatatypeElement({
                    id: 0x0002, name: "Duplicate"
                }),

                DatatypeElement({
                    id: 0x0003, name: "Occupied"
                }),

                DatatypeElement({
                    id: 0x0085, name: "InvalidField"
                }),

                DatatypeElement({
                    id: 0x0089, name: "ResourceExhausted"
                }),

                DatatypeElement({
                    id: 0x008b, name: "NotFound"
                })
            ]
        }),

        DatatypeElement({
            name: "DoorLockFeature", base: "map32",
            children: [
                DatatypeElement({
                    id: 0x0001, name: "PinCredential"
                }),

                DatatypeElement({
                    id: 0x0002, name: "RfidCredential"
                }),

                DatatypeElement({
                    id: 0x0004, name: "FingerCredentials"
                }),

                DatatypeElement({
                    id: 0x0008, name: "Logging"
                }),

                DatatypeElement({
                    id: 0x0010, name: "WeekDayAccessSchedules"
                }),

                DatatypeElement({
                    id: 0x0020, name: "DoorPositionSensor"
                }),

                DatatypeElement({
                    id: 0x0040, name: "FaceCredentials"
                }),

                DatatypeElement({
                    id: 0x0080, name: "CredentialsOverTheAirAccess"
                }),

                DatatypeElement({
                    id: 0x0100, name: "User"
                }),

                DatatypeElement({
                    id: 0x0200, name: "Notification"
                }),

                DatatypeElement({
                    id: 0x0400, name: "YearDayAccessSchedules"
                }),

                DatatypeElement({
                    id: 0x0800, name: "HolidaySchedules"
                })
            ]
        }),

        DatatypeElement({
            name: "DoorLockSetPinOrIdStatus", base: "enum8",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "Success"
                }),

                DatatypeElement({
                    id: 0x0001, name: "GeneralFailure"
                }),

                DatatypeElement({
                    id: 0x0002, name: "MemoryFull"
                }),

                DatatypeElement({
                    id: 0x0003, name: "DuplicateCodeError"
                })
            ]
        }),

        DatatypeElement({
            name: "DoorLockOperationEventCode", base: "enum8",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "UnknownOrMfgSpecific"
                }),

                DatatypeElement({
                    id: 0x0001, name: "Lock"
                }),

                DatatypeElement({
                    id: 0x0002, name: "Unlock"
                }),

                DatatypeElement({
                    id: 0x0003, name: "LockInvalidPinOrId"
                }),

                DatatypeElement({
                    id: 0x0004, name: "LockInvalidSchedule"
                }),

                DatatypeElement({
                    id: 0x0005, name: "UnlockInvalidPinOrId"
                }),

                DatatypeElement({
                    id: 0x0006, name: "UnlockInvalidSchedule"
                }),

                DatatypeElement({
                    id: 0x0007, name: "OneTouchLock"
                }),

                DatatypeElement({
                    id: 0x0008, name: "KeyLock"
                }),

                DatatypeElement({
                    id: 0x0009, name: "KeyUnlock"
                }),

                DatatypeElement({
                    id: 0x000a, name: "AutoLock"
                }),

                DatatypeElement({
                    id: 0x000b, name: "ScheduleLock"
                }),

                DatatypeElement({
                    id: 0x000c, name: "ScheduleUnlock"
                }),

                DatatypeElement({
                    id: 0x000d, name: "ManualLock"
                }),

                DatatypeElement({
                    id: 0x000e, name: "ManualUnlock"
                })
            ]
        }),

        DatatypeElement({
            name: "DoorLockProgrammingEventCode", base: "enum8",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "UnknownOrMfgSpecific"
                }),

                DatatypeElement({
                    id: 0x0001, name: "MasterCodeChanged"
                }),

                DatatypeElement({
                    id: 0x0002, name: "PinAdded"
                }),

                DatatypeElement({
                    id: 0x0003, name: "PinDeleted"
                }),

                DatatypeElement({
                    id: 0x0004, name: "PinChanged"
                }),

                DatatypeElement({
                    id: 0x0005, name: "IdAdded"
                }),

                DatatypeElement({
                    id: 0x0006, name: "IdDeleted"
                })
            ]
        }),

        DatatypeElement({
            name: "DoorLockUserStatus", base: "enum8",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "Available"
                }),

                DatatypeElement({
                    id: 0x0001, name: "OccupiedEnabled"
                }),

                DatatypeElement({
                    id: 0x0003, name: "OccupiedDisabled"
                }),

                DatatypeElement({
                    id: 0x00ff, name: "NotSupported"
                })
            ]
        }),

        DatatypeElement({
            name: "DoorLockUserType", base: "enum8",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "Unrestricted"
                }),

                DatatypeElement({
                    id: 0x0001, name: "YearDayScheduleUser"
                }),

                DatatypeElement({
                    id: 0x0002, name: "WeekDayScheduleUser"
                }),

                DatatypeElement({
                    id: 0x0003, name: "MasterUser"
                }),

                DatatypeElement({
                    id: 0x0004, name: "NonAccessUser"
                }),

                DatatypeElement({
                    id: 0x00ff, name: "NotSupported"
                })
            ]
        }),

        DatatypeElement({
            name: "DoorLockDayOfWeek", base: "map8",
            children: [
                DatatypeElement({
                    id: 0x0001, name: "Sunday"
                }),

                DatatypeElement({
                    id: 0x0002, name: "Monday"
                }),

                DatatypeElement({
                    id: 0x0004, name: "Tuesday"
                }),

                DatatypeElement({
                    id: 0x0008, name: "Wednesday"
                }),

                DatatypeElement({
                    id: 0x0010, name: "Thursday"
                }),

                DatatypeElement({
                    id: 0x0020, name: "Friday"
                }),

                DatatypeElement({
                    id: 0x0040, name: "Saturday"
                })
            ]
        })
    ]
}));
