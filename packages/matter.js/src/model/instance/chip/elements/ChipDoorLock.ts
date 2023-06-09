/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ChipMatter } from "../internal.js";
import { ClusterElement, AttributeElement, CommandElement, DatatypeElement, EventElement } from "../../../index.js";

ChipMatter.children!.push(ClusterElement({
    id: 0x0101, name: "DoorLock",
    description: "Door Lock",
    details: "An interface to a generic way to secure a door",
    children: [
        AttributeElement({
            id: 0x0000, name: "LockState", base: "LockState",
            access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true, reportable: true }
        }),

        AttributeElement({
            id: 0x0001, name: "LockType", base: "LockType",
            access: { rw: "R" }, conformance: [ "M" ]
        }),

        AttributeElement({
            id: 0x0002, name: "ActuatorEnabled", base: "ActuatorEnabled",
            access: { rw: "R" }, conformance: [ "M" ]
        }),

        AttributeElement({
            id: 0x0003, name: "DoorState", base: "DoorState",
            access: { rw: "R" }, conformance: [ "O" ], quality: { nullable: true, reportable: true }
        }),

        AttributeElement({
            id: 0x0004, name: "DoorOpenEvents", base: "DoorOpenEvents",
            access: { rw: "W", readPrivilege: "V", writePrivilege: "M" }, conformance: [ "O" ]
        }),

        AttributeElement({
            id: 0x0005, name: "DoorClosedEvents", base: "DoorClosedEvents",
            access: { rw: "W", readPrivilege: "V", writePrivilege: "M" }, conformance: [ "O" ]
        }),

        AttributeElement({
            id: 0x0006, name: "OpenPeriod", base: "OpenPeriod",
            access: { rw: "W", readPrivilege: "V", writePrivilege: "M" }, conformance: [ "O" ]
        }),

        AttributeElement({
            id: 0x0011, name: "NumTotalUsersSupported", base: "NumberOfTotalUsersSupported",
            access: { rw: "R" }, conformance: [ "O" ]
        }),

        AttributeElement({
            id: 0x0012, name: "NumPinUsersSupported", base: "NumberOfPINUsersSupported",
            access: { rw: "R" }, conformance: [ "O" ]
        }),

        AttributeElement({
            id: 0x0013, name: "NumRfidUsersSupported", base: "NumberOfRFIDUsersSupported",
            access: { rw: "R" }, conformance: [ "O" ]
        }),

        AttributeElement({
            id: 0x0014, name: "NumWeekdaySchedulesSupportedPerUser", base: "NumberOfWeekDaySchedulesSupportedPerUser",
            access: { rw: "R" }, conformance: [ "O" ]
        }),

        AttributeElement({
            id: 0x0015, name: "NumYeardaySchedulesSupportedPerUser", base: "NumberOfYearDaySchedulesSupportedPerUser",
            access: { rw: "R" }, conformance: [ "O" ]
        }),

        AttributeElement({
            id: 0x0016, name: "NumHolidaySchedulesSupported", base: "NumberOfHolidaySchedulesSupported",
            access: { rw: "R" }, conformance: [ "O" ]
        }),

        AttributeElement({
            id: 0x0017, name: "MaxPinLength", base: "MaxPINCodeLength",
            access: { rw: "R" }, conformance: [ "O" ]
        }),

        AttributeElement({
            id: 0x0018, name: "MinPinLength", base: "MinPINCodeLength",
            access: { rw: "R" }, conformance: [ "O" ]
        }),

        AttributeElement({
            id: 0x0019, name: "MaxRfidCodeLength", base: "MaxRFIDCodeLength",
            access: { rw: "R" }, conformance: [ "O" ]
        }),

        AttributeElement({
            id: 0x001a, name: "MinRfidCodeLength", base: "MinRFIDCodeLength",
            access: { rw: "R" }, conformance: [ "O" ]
        }),

        AttributeElement({
            id: 0x001b, name: "CredentialRulesSupport", base: "CredentialRulesSupport",
            access: { rw: "R" }, conformance: [ "O" ]
        }),

        AttributeElement({
            id: 0x001c, name: "NumCredentialsSupportedPerUser", base: "NumberOfCredentialsSupportedPerUser",
            access: { rw: "R" }, conformance: [ "O" ]
        }),

        AttributeElement({
            id: 0x0021, name: "Language", base: "Language",
            access: { rw: "W", readPrivilege: "V", writePrivilege: "M" }, conformance: [ "O" ], quality: { reportable: true }
        }),

        AttributeElement({
            id: 0x0022, name: "LedSettings", base: "LEDSettings",
            access: { rw: "W", readPrivilege: "V", writePrivilege: "M" }, conformance: [ "O" ], quality: { reportable: true }
        }),

        AttributeElement({
            id: 0x0023, name: "AutoRelockTime", base: "AutoRelockTime",
            access: { rw: "W", readPrivilege: "V", writePrivilege: "M" }, conformance: [ "M" ], quality: { reportable: true }
        }),

        AttributeElement({
            id: 0x0024, name: "SoundVolume", base: "SoundVolume",
            access: { rw: "W", readPrivilege: "V", writePrivilege: "M" }, conformance: [ "O" ], quality: { reportable: true }
        }),

        AttributeElement({
            id: 0x0025, name: "OperatingMode", base: "OperatingMode",
            access: { rw: "W", readPrivilege: "V", writePrivilege: "M" }, conformance: [ "M" ], quality: { reportable: true }
        }),

        AttributeElement({
            id: 0x0026, name: "SupportedOperatingModes", base: "SupportedOperatingModes",
            access: { rw: "R" }, conformance: [ "M" ]
        }),

        AttributeElement({
            id: 0x0027, name: "DefaultConfigurationRegister", base: "DefaultConfigurationRegister",
            access: { rw: "R" }, conformance: [ "O" ], quality: { reportable: true }
        }),

        AttributeElement({
            id: 0x0028, name: "EnableLocalProgramming", base: "EnableLocalProgramming",
            access: { rw: "W", readPrivilege: "V", writePrivilege: "A" }, conformance: [ "O" ], quality: { reportable: true }
        }),

        AttributeElement({
            id: 0x0029, name: "EnableOneTouchLocking", base: "EnableOneTouchLocking",
            access: { rw: "W", readPrivilege: "V", writePrivilege: "M" }, conformance: [ "O" ], quality: { reportable: true }
        }),

        AttributeElement({
            id: 0x002a, name: "EnableInsideStatusLed", base: "EnableInsideStatusLED",
            access: { rw: "W", readPrivilege: "V", writePrivilege: "M" }, conformance: [ "O" ], quality: { reportable: true }
        }),

        AttributeElement({
            id: 0x002b, name: "EnablePrivacyModeButton", base: "EnablePrivacyModeButton",
            access: { rw: "W", readPrivilege: "V", writePrivilege: "M" }, conformance: [ "O" ], quality: { reportable: true }
        }),

        AttributeElement({
            id: 0x002c, name: "LocalProgrammingFeatures", base: "LocalProgrammingFeatures",
            access: { rw: "W", readPrivilege: "V", writePrivilege: "A" }, conformance: [ "O" ], quality: { reportable: true }
        }),

        AttributeElement({
            id: 0x0030, name: "WrongCodeEntryLimit", base: "WrongCodeEntryLimit",
            access: { rw: "W", readPrivilege: "V", writePrivilege: "A" }, conformance: [ "O" ], quality: { reportable: true }
        }),

        AttributeElement({
            id: 0x0031, name: "UserCodeTemporaryDisableTime", base: "UserCodeTemporaryDisableTime",
            access: { rw: "W", readPrivilege: "V", writePrivilege: "A" }, conformance: [ "O" ], quality: { reportable: true }
        }),

        AttributeElement({
            id: 0x0032, name: "SendPinOverTheAir", base: "SendPINOverTheAir",
            access: { rw: "W", readPrivilege: "V", writePrivilege: "A" }, conformance: [ "O" ], quality: { reportable: true }
        }),

        AttributeElement({
            id: 0x0033, name: "RequirePinForRemoteOperation", base: "RequirePINforRemoteOperation",
            access: { rw: "W", readPrivilege: "V", writePrivilege: "A" }, conformance: [ "O" ], quality: { reportable: true }
        }),

        AttributeElement({
            id: 0x0035, name: "ExpiringUserTimeout", base: "ExpiringUserTimeout",
            access: { rw: "W", readPrivilege: "V", writePrivilege: "A" }, conformance: [ "O" ], quality: { reportable: true }
        }),

        CommandElement({
            id: 0x0000, name: "LockDoor", base: "struct",
            access: { rw: "R" }, conformance: [ "M" ], direction: "request",
            children: [
                DatatypeElement({
                    name: "PinCode", base: "OCTET_STRING",
                    access: { rw: "R" }, conformance: [ "O" ]
                }),

                DatatypeElement({
                    name: "PinCode", base: "OCTET_STRING",
                    access: { rw: "R" }, conformance: [ "O" ]
                })
            ]
        }),

        CommandElement({
            id: 0x0001, name: "UnlockDoor", base: "struct",
            access: { rw: "R" }, conformance: [ "M" ], direction: "request",
            children: [
                DatatypeElement({
                    name: "PinCode", base: "OCTET_STRING",
                    access: { rw: "R" }, conformance: [ "O" ]
                }),

                DatatypeElement({
                    name: "PinCode", base: "OCTET_STRING",
                    access: { rw: "R" }, conformance: [ "O" ]
                })
            ]
        }),

        CommandElement({
            id: 0x0003, name: "UnlockWithTimeout", base: "struct",
            access: { rw: "R" }, conformance: [ "O" ], direction: "request",
            children: [
                DatatypeElement({
                    name: "Timeout", base: "INT16U",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "Timeout", base: "INT16U",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "PinCode", base: "OCTET_STRING",
                    access: { rw: "R" }, conformance: [ "O" ]
                }),

                DatatypeElement({
                    name: "PinCode", base: "OCTET_STRING",
                    access: { rw: "R" }, conformance: [ "O" ]
                })
            ]
        }),

        CommandElement({
            id: 0x000b, name: "SetWeekDaySchedule", base: "struct",
            access: { rw: "R", writePrivilege: "A" }, conformance: [ "O" ], direction: "request",
            children: [
                DatatypeElement({
                    name: "WeekDayIndex", base: "INT8U",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "WeekDayIndex", base: "INT8U",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "UserIndex", base: "INT16U",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "UserIndex", base: "INT16U",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "DaysMask", base: "DaysMaskMap",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "DaysMask", base: "DaysMaskMap",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "StartHour", base: "INT8U",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "StartHour", base: "INT8U",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "StartMinute", base: "INT8U",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "StartMinute", base: "INT8U",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "EndHour", base: "INT8U",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "EndHour", base: "INT8U",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "EndMinute", base: "INT8U",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "EndMinute", base: "INT8U",
                    access: { rw: "R" }, conformance: [ "M" ]
                })
            ]
        }),

        CommandElement({
            id: 0x000c, name: "GetWeekDaySchedule", base: "struct",
            access: { rw: "R", writePrivilege: "A" }, conformance: [ "O" ], direction: "request", response: "GetWeekDayScheduleResponse",
            children: [
                DatatypeElement({
                    name: "WeekDayIndex", base: "INT8U",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "WeekDayIndex", base: "INT8U",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "UserIndex", base: "INT16U",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "UserIndex", base: "INT16U",
                    access: { rw: "R" }, conformance: [ "M" ]
                })
            ]
        }),

        CommandElement({
            id: 0x000c, name: "GetWeekDayScheduleResponse", base: "struct",
            access: { rw: "R" }, conformance: [ "O" ], direction: "response",
            children: [
                DatatypeElement({
                    name: "WeekDayIndex", base: "INT8U",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "WeekDayIndex", base: "INT8U",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "UserIndex", base: "INT16U",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "UserIndex", base: "INT16U",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "Status", base: "DlStatus",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "Status", base: "DlStatus",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "DaysMask", base: "DaysMaskMap",
                    access: { rw: "R" }, conformance: [ "O" ]
                }),

                DatatypeElement({
                    name: "DaysMask", base: "DaysMaskMap",
                    access: { rw: "R" }, conformance: [ "O" ]
                }),

                DatatypeElement({
                    name: "StartHour", base: "INT8U",
                    access: { rw: "R" }, conformance: [ "O" ]
                }),

                DatatypeElement({
                    name: "StartHour", base: "INT8U",
                    access: { rw: "R" }, conformance: [ "O" ]
                }),

                DatatypeElement({
                    name: "StartMinute", base: "INT8U",
                    access: { rw: "R" }, conformance: [ "O" ]
                }),

                DatatypeElement({
                    name: "StartMinute", base: "INT8U",
                    access: { rw: "R" }, conformance: [ "O" ]
                }),

                DatatypeElement({
                    name: "EndHour", base: "INT8U",
                    access: { rw: "R" }, conformance: [ "O" ]
                }),

                DatatypeElement({
                    name: "EndHour", base: "INT8U",
                    access: { rw: "R" }, conformance: [ "O" ]
                }),

                DatatypeElement({
                    name: "EndMinute", base: "INT8U",
                    access: { rw: "R" }, conformance: [ "O" ]
                }),

                DatatypeElement({
                    name: "EndMinute", base: "INT8U",
                    access: { rw: "R" }, conformance: [ "O" ]
                })
            ]
        }),

        CommandElement({
            id: 0x000d, name: "ClearWeekDaySchedule", base: "struct",
            access: { rw: "R", writePrivilege: "A" }, conformance: [ "O" ], direction: "request",
            children: [
                DatatypeElement({
                    name: "WeekDayIndex", base: "INT8U",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "WeekDayIndex", base: "INT8U",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "UserIndex", base: "INT16U",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "UserIndex", base: "INT16U",
                    access: { rw: "R" }, conformance: [ "M" ]
                })
            ]
        }),

        CommandElement({
            id: 0x000e, name: "SetYearDaySchedule", base: "struct",
            access: { rw: "R", writePrivilege: "A" }, conformance: [ "O" ], direction: "request",
            children: [
                DatatypeElement({
                    name: "YearDayIndex", base: "INT8U",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "YearDayIndex", base: "INT8U",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "UserIndex", base: "INT16U",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "UserIndex", base: "INT16U",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "LocalStartTime", base: "epoch_s",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "LocalStartTime", base: "epoch_s",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "LocalEndTime", base: "epoch_s",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "LocalEndTime", base: "epoch_s",
                    access: { rw: "R" }, conformance: [ "M" ]
                })
            ]
        }),

        CommandElement({
            id: 0x000f, name: "GetYearDaySchedule", base: "struct",
            access: { rw: "R", writePrivilege: "A" }, conformance: [ "O" ], direction: "request", response: "GetYearDayScheduleResponse",
            children: [
                DatatypeElement({
                    name: "YearDayIndex", base: "INT8U",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "YearDayIndex", base: "INT8U",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "UserIndex", base: "INT16U",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "UserIndex", base: "INT16U",
                    access: { rw: "R" }, conformance: [ "M" ]
                })
            ]
        }),

        CommandElement({
            id: 0x000f, name: "GetYearDayScheduleResponse", base: "struct",
            access: { rw: "R" }, conformance: [ "O" ], direction: "response",
            children: [
                DatatypeElement({
                    name: "YearDayIndex", base: "INT8U",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "YearDayIndex", base: "INT8U",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "UserIndex", base: "INT16U",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "UserIndex", base: "INT16U",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "Status", base: "DlStatus",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "Status", base: "DlStatus",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "LocalStartTime", base: "epoch_s",
                    access: { rw: "R" }, conformance: [ "O" ]
                }),

                DatatypeElement({
                    name: "LocalStartTime", base: "epoch_s",
                    access: { rw: "R" }, conformance: [ "O" ]
                }),

                DatatypeElement({
                    name: "LocalEndTime", base: "epoch_s",
                    access: { rw: "R" }, conformance: [ "O" ]
                }),

                DatatypeElement({
                    name: "LocalEndTime", base: "epoch_s",
                    access: { rw: "R" }, conformance: [ "O" ]
                })
            ]
        }),

        CommandElement({
            id: 0x0010, name: "ClearYearDaySchedule", base: "struct",
            access: { rw: "R", writePrivilege: "A" }, conformance: [ "O" ], direction: "request",
            children: [
                DatatypeElement({
                    name: "YearDayIndex", base: "INT8U",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "YearDayIndex", base: "INT8U",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "UserIndex", base: "INT16U",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "UserIndex", base: "INT16U",
                    access: { rw: "R" }, conformance: [ "M" ]
                })
            ]
        }),

        CommandElement({
            id: 0x0011, name: "SetHolidaySchedule", base: "struct",
            access: { rw: "R", writePrivilege: "A" }, conformance: [ "O" ], direction: "request",
            children: [
                DatatypeElement({
                    name: "HolidayIndex", base: "INT8U",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "HolidayIndex", base: "INT8U",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "LocalStartTime", base: "epoch_s",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "LocalStartTime", base: "epoch_s",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "LocalEndTime", base: "epoch_s",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "LocalEndTime", base: "epoch_s",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "OperatingMode", base: "OperatingModeEnum",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "OperatingMode", base: "OperatingModeEnum",
                    access: { rw: "R" }, conformance: [ "M" ]
                })
            ]
        }),

        CommandElement({
            id: 0x0012, name: "GetHolidaySchedule", base: "struct",
            access: { rw: "R", writePrivilege: "A" }, conformance: [ "O" ], direction: "request", response: "GetHolidayScheduleResponse",
            children: [
                DatatypeElement({
                    name: "HolidayIndex", base: "INT8U",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "HolidayIndex", base: "INT8U",
                    access: { rw: "R" }, conformance: [ "M" ]
                })
            ]
        }),

        CommandElement({
            id: 0x0012, name: "GetHolidayScheduleResponse", base: "struct",
            access: { rw: "R" }, conformance: [ "O" ], direction: "response",
            children: [
                DatatypeElement({
                    name: "HolidayIndex", base: "INT8U",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "HolidayIndex", base: "INT8U",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "Status", base: "DlStatus",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "Status", base: "DlStatus",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "LocalStartTime", base: "epoch_s",
                    access: { rw: "R" }, conformance: [ "O" ]
                }),

                DatatypeElement({
                    name: "LocalStartTime", base: "epoch_s",
                    access: { rw: "R" }, conformance: [ "O" ]
                }),

                DatatypeElement({
                    name: "LocalEndTime", base: "epoch_s",
                    access: { rw: "R" }, conformance: [ "O" ]
                }),

                DatatypeElement({
                    name: "LocalEndTime", base: "epoch_s",
                    access: { rw: "R" }, conformance: [ "O" ]
                }),

                DatatypeElement({
                    name: "OperatingMode", base: "OperatingModeEnum",
                    access: { rw: "R" }, conformance: [ "O" ]
                }),

                DatatypeElement({
                    name: "OperatingMode", base: "OperatingModeEnum",
                    access: { rw: "R" }, conformance: [ "O" ]
                })
            ]
        }),

        CommandElement({
            id: 0x0013, name: "ClearHolidaySchedule", base: "struct",
            access: { rw: "R", writePrivilege: "A" }, conformance: [ "O" ], direction: "request",
            children: [
                DatatypeElement({
                    name: "HolidayIndex", base: "INT8U",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "HolidayIndex", base: "INT8U",
                    access: { rw: "R" }, conformance: [ "M" ]
                })
            ]
        }),

        CommandElement({
            id: 0x001a, name: "SetUser", base: "struct",
            access: { rw: "R", writePrivilege: "A" }, conformance: [ "O" ], direction: "request",
            children: [
                DatatypeElement({
                    name: "OperationType", base: "DataOperationTypeEnum",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "OperationType", base: "DataOperationTypeEnum",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "UserIndex", base: "INT16U",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "UserIndex", base: "INT16U",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "UserName", base: "CHAR_STRING",
                    access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
                }),

                DatatypeElement({
                    name: "UserName", base: "CHAR_STRING",
                    access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
                }),

                DatatypeElement({
                    name: "UserUniqueId", base: "INT32U",
                    access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
                }),

                DatatypeElement({
                    name: "UserUniqueId", base: "INT32U",
                    access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
                }),

                DatatypeElement({
                    name: "UserStatus", base: "UserStatusEnum",
                    access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
                }),

                DatatypeElement({
                    name: "UserStatus", base: "UserStatusEnum",
                    access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
                }),

                DatatypeElement({
                    name: "UserType", base: "UserTypeEnum",
                    access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
                }),

                DatatypeElement({
                    name: "UserType", base: "UserTypeEnum",
                    access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
                }),

                DatatypeElement({
                    name: "CredentialRule", base: "CredentialRuleEnum",
                    access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
                }),

                DatatypeElement({
                    name: "CredentialRule", base: "CredentialRuleEnum",
                    access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
                })
            ]
        }),

        CommandElement({
            id: 0x001b, name: "GetUser", base: "struct",
            access: { rw: "R", writePrivilege: "A" }, conformance: [ "O" ], direction: "request", response: "GetUserResponse",
            children: [
                DatatypeElement({
                    name: "UserIndex", base: "INT16U",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "UserIndex", base: "INT16U",
                    access: { rw: "R" }, conformance: [ "M" ]
                })
            ]
        }),

        CommandElement({
            id: 0x001c, name: "GetUserResponse", base: "struct",
            access: { rw: "R" }, conformance: [ "O" ], direction: "response",
            children: [
                DatatypeElement({
                    name: "UserIndex", base: "INT16U",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "UserIndex", base: "INT16U",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "UserName", base: "CHAR_STRING",
                    access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
                }),

                DatatypeElement({
                    name: "UserName", base: "CHAR_STRING",
                    access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
                }),

                DatatypeElement({
                    name: "UserUniqueId", base: "INT32U",
                    access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
                }),

                DatatypeElement({
                    name: "UserUniqueId", base: "INT32U",
                    access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
                }),

                DatatypeElement({
                    name: "UserStatus", base: "UserStatusEnum",
                    access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
                }),

                DatatypeElement({
                    name: "UserStatus", base: "UserStatusEnum",
                    access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
                }),

                DatatypeElement({
                    name: "UserType", base: "UserTypeEnum",
                    access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
                }),

                DatatypeElement({
                    name: "UserType", base: "UserTypeEnum",
                    access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
                }),

                DatatypeElement({
                    name: "CredentialRule", base: "CredentialRuleEnum",
                    access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
                }),

                DatatypeElement({
                    name: "CredentialRule", base: "CredentialRuleEnum",
                    access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
                }),

                DatatypeElement({
                    name: "Credentials", base: "CredentialStruct",
                    access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
                }),

                DatatypeElement({
                    name: "Credentials", base: "CredentialStruct",
                    access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
                }),

                DatatypeElement({
                    name: "CreatorFabricIndex", base: "fabric_idx",
                    access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
                }),

                DatatypeElement({
                    name: "CreatorFabricIndex", base: "fabric_idx",
                    access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
                }),

                DatatypeElement({
                    name: "LastModifiedFabricIndex", base: "fabric_idx",
                    access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
                }),

                DatatypeElement({
                    name: "LastModifiedFabricIndex", base: "fabric_idx",
                    access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
                }),

                DatatypeElement({
                    name: "NextUserIndex", base: "INT16U",
                    access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
                }),

                DatatypeElement({
                    name: "NextUserIndex", base: "INT16U",
                    access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
                })
            ]
        }),

        CommandElement({
            id: 0x001d, name: "ClearUser", base: "struct",
            access: { rw: "R", writePrivilege: "A" }, conformance: [ "O" ], direction: "request",
            children: [
                DatatypeElement({
                    name: "UserIndex", base: "INT16U",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "UserIndex", base: "INT16U",
                    access: { rw: "R" }, conformance: [ "M" ]
                })
            ]
        }),

        CommandElement({
            id: 0x0022, name: "SetCredential", base: "struct",
            access: { rw: "R", writePrivilege: "A" }, conformance: [ "O" ], direction: "request", response: "SetCredentialResponse",
            children: [
                DatatypeElement({
                    name: "OperationType", base: "DataOperationTypeEnum",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "OperationType", base: "DataOperationTypeEnum",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "Credential", base: "CredentialStruct",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "Credential", base: "CredentialStruct",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "CredentialData", base: "LONG_OCTET_STRING",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "CredentialData", base: "LONG_OCTET_STRING",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "UserIndex", base: "INT16U",
                    access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
                }),

                DatatypeElement({
                    name: "UserIndex", base: "INT16U",
                    access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
                }),

                DatatypeElement({
                    name: "UserStatus", base: "UserStatusEnum",
                    access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
                }),

                DatatypeElement({
                    name: "UserStatus", base: "UserStatusEnum",
                    access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
                }),

                DatatypeElement({
                    name: "UserType", base: "UserTypeEnum",
                    access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
                }),

                DatatypeElement({
                    name: "UserType", base: "UserTypeEnum",
                    access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
                })
            ]
        }),

        CommandElement({
            id: 0x0023, name: "SetCredentialResponse", base: "struct",
            access: { rw: "R" }, conformance: [ "O" ], direction: "response",
            children: [
                DatatypeElement({
                    name: "Status", base: "DlStatus",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "Status", base: "DlStatus",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "UserIndex", base: "INT16U",
                    access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
                }),

                DatatypeElement({
                    name: "UserIndex", base: "INT16U",
                    access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
                }),

                DatatypeElement({
                    name: "NextCredentialIndex", base: "INT16U",
                    access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
                }),

                DatatypeElement({
                    name: "NextCredentialIndex", base: "INT16U",
                    access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
                })
            ]
        }),

        CommandElement({
            id: 0x0024, name: "GetCredentialStatus", base: "struct",
            access: { rw: "R", writePrivilege: "A" }, conformance: [ "O" ], direction: "request", response: "GetCredentialStatusResponse",
            children: [
                DatatypeElement({
                    name: "Credential", base: "CredentialStruct",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "Credential", base: "CredentialStruct",
                    access: { rw: "R" }, conformance: [ "M" ]
                })
            ]
        }),

        CommandElement({
            id: 0x0025, name: "GetCredentialStatusResponse", base: "struct",
            access: { rw: "R" }, conformance: [ "O" ], direction: "response",
            children: [
                DatatypeElement({
                    name: "CredentialExists", base: "boolean",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "CredentialExists", base: "boolean",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "UserIndex", base: "INT16U",
                    access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
                }),

                DatatypeElement({
                    name: "UserIndex", base: "INT16U",
                    access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
                }),

                DatatypeElement({
                    name: "CreatorFabricIndex", base: "fabric_idx",
                    access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
                }),

                DatatypeElement({
                    name: "CreatorFabricIndex", base: "fabric_idx",
                    access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
                }),

                DatatypeElement({
                    name: "LastModifiedFabricIndex", base: "fabric_idx",
                    access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
                }),

                DatatypeElement({
                    name: "LastModifiedFabricIndex", base: "fabric_idx",
                    access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
                }),

                DatatypeElement({
                    name: "NextCredentialIndex", base: "INT16U",
                    access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
                }),

                DatatypeElement({
                    name: "NextCredentialIndex", base: "INT16U",
                    access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
                })
            ]
        }),

        CommandElement({
            id: 0x0026, name: "ClearCredential", base: "struct",
            access: { rw: "R", writePrivilege: "A" }, conformance: [ "O" ], direction: "request",
            children: [
                DatatypeElement({
                    name: "Credential", base: "CredentialStruct",
                    access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
                }),

                DatatypeElement({
                    name: "Credential", base: "CredentialStruct",
                    access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
                })
            ]
        }),

        EventElement({
            id: 0x0000, name: "DoorLockAlarm", base: "struct",
            access: { rw: "R" }, conformance: [ "M" ], priority: "critical",
            children: [
                DatatypeElement({
                    name: "AlarmCode", base: "AlarmCodeEnum",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "AlarmCode", base: "AlarmCodeEnum",
                    access: { rw: "R" }, conformance: [ "M" ]
                })
            ]
        }),

        EventElement({
            id: 0x0001, name: "DoorStateChange", base: "struct",
            access: { rw: "R" }, conformance: [ "O" ], priority: "critical",
            children: [
                DatatypeElement({
                    name: "DoorState", base: "DoorStateEnum",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "DoorState", base: "DoorStateEnum",
                    access: { rw: "R" }, conformance: [ "M" ]
                })
            ]
        }),

        EventElement({
            id: 0x0002, name: "LockOperation", base: "struct",
            access: { rw: "R" }, conformance: [ "M" ], priority: "critical",
            children: [
                DatatypeElement({
                    name: "LockOperationType", base: "LockOperationTypeEnum",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "LockOperationType", base: "LockOperationTypeEnum",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "OperationSource", base: "OperationSourceEnum",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "OperationSource", base: "OperationSourceEnum",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "UserIndex", base: "INT16U",
                    access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
                }),

                DatatypeElement({
                    name: "UserIndex", base: "INT16U",
                    access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
                }),

                DatatypeElement({
                    name: "FabricIndex", base: "fabric_idx",
                    access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
                }),

                DatatypeElement({
                    name: "FabricIndex", base: "fabric_idx",
                    access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
                }),

                DatatypeElement({
                    name: "SourceNode", base: "NODE_ID",
                    access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
                }),

                DatatypeElement({
                    name: "SourceNode", base: "NODE_ID",
                    access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
                }),

                DatatypeElement({
                    name: "Credentials", base: "CredentialStruct",
                    access: { rw: "R" }, conformance: [ "O" ], quality: { nullable: true }
                }),

                DatatypeElement({
                    name: "Credentials", base: "CredentialStruct",
                    access: { rw: "R" }, conformance: [ "O" ], quality: { nullable: true }
                })
            ]
        }),

        EventElement({
            id: 0x0003, name: "LockOperationError", base: "struct",
            access: { rw: "R" }, conformance: [ "M" ], priority: "critical",
            children: [
                DatatypeElement({
                    name: "LockOperationType", base: "LockOperationTypeEnum",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "LockOperationType", base: "LockOperationTypeEnum",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "OperationSource", base: "OperationSourceEnum",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "OperationSource", base: "OperationSourceEnum",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "OperationError", base: "OperationErrorEnum",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "OperationError", base: "OperationErrorEnum",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "UserIndex", base: "INT16U",
                    access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
                }),

                DatatypeElement({
                    name: "UserIndex", base: "INT16U",
                    access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
                }),

                DatatypeElement({
                    name: "FabricIndex", base: "fabric_idx",
                    access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
                }),

                DatatypeElement({
                    name: "FabricIndex", base: "fabric_idx",
                    access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
                }),

                DatatypeElement({
                    name: "SourceNode", base: "NODE_ID",
                    access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
                }),

                DatatypeElement({
                    name: "SourceNode", base: "NODE_ID",
                    access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
                }),

                DatatypeElement({
                    name: "Credentials", base: "CredentialStruct",
                    access: { rw: "R" }, conformance: [ "O" ], quality: { nullable: true }
                }),

                DatatypeElement({
                    name: "Credentials", base: "CredentialStruct",
                    access: { rw: "R" }, conformance: [ "O" ], quality: { nullable: true }
                })
            ]
        }),

        EventElement({
            id: 0x0004, name: "LockUserChange", base: "struct",
            access: { rw: "R" }, conformance: [ "M" ], priority: "info",
            children: [
                DatatypeElement({
                    name: "LockDataType", base: "LockDataTypeEnum",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "LockDataType", base: "LockDataTypeEnum",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "DataOperationType", base: "DataOperationTypeEnum",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "DataOperationType", base: "DataOperationTypeEnum",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "OperationSource", base: "OperationSourceEnum",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "OperationSource", base: "OperationSourceEnum",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "UserIndex", base: "INT16U",
                    access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
                }),

                DatatypeElement({
                    name: "UserIndex", base: "INT16U",
                    access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
                }),

                DatatypeElement({
                    name: "FabricIndex", base: "fabric_idx",
                    access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
                }),

                DatatypeElement({
                    name: "FabricIndex", base: "fabric_idx",
                    access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
                }),

                DatatypeElement({
                    name: "SourceNode", base: "NODE_ID",
                    access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
                }),

                DatatypeElement({
                    name: "SourceNode", base: "NODE_ID",
                    access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
                }),

                DatatypeElement({
                    name: "DataIndex", base: "INT16U",
                    access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
                }),

                DatatypeElement({
                    name: "DataIndex", base: "INT16U",
                    access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
                })
            ]
        })
    ]
}))