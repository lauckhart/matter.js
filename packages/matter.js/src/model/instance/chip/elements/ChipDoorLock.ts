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
            id: 0x0000, name: "lockState", base: "DlLockState",
            access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true, reportable: true }
        }),

        AttributeElement({
            id: 0x0001, name: "lockType", base: "DlLockType",
            access: { rw: "R" }, conformance: [ "M" ]
        }),

        AttributeElement({
            id: 0x0002, name: "actuatorEnabled", base: "bool",
            access: { rw: "R" }, conformance: [ "M" ]
        }),

        AttributeElement({
            id: 0x0003, name: "doorState", base: "DoorStateEnum",
            access: { rw: "R" }, conformance: [ "O" ], quality: { nullable: true, reportable: true }
        }),

        AttributeElement({
            id: 0x0004, name: "doorOpenEvents", base: "uint32",
            access: { rw: "W", readPriv: "V", writePriv: "M" }, conformance: [ "O" ]
        }),

        AttributeElement({
            id: 0x0005, name: "doorClosedEvents", base: "uint32",
            access: { rw: "W", readPriv: "V", writePriv: "M" }, conformance: [ "O" ]
        }),

        AttributeElement({
            id: 0x0006, name: "openPeriod", base: "uint16",
            access: { rw: "W", readPriv: "V", writePriv: "M" }, conformance: [ "O" ]
        }),

        AttributeElement({
            id: 0x0011, name: "numTotalUsersSupported", base: "uint16",
            access: { rw: "R" }, conformance: [ "O" ], value: "0"
        }),

        AttributeElement({
            id: 0x0012, name: "numPinUsersSupported", base: "uint16",
            access: { rw: "R" }, conformance: [ "O" ], value: "0"
        }),

        AttributeElement({
            id: 0x0013, name: "numRfidUsersSupported", base: "uint16",
            access: { rw: "R" }, conformance: [ "O" ], value: "0"
        }),

        AttributeElement({
            id: 0x0014, name: "numWeekdaySchedulesSupportedPerUser", base: "uint8",
            access: { rw: "R" }, conformance: [ "O" ], value: "0"
        }),

        AttributeElement({
            id: 0x0015, name: "numYeardaySchedulesSupportedPerUser", base: "uint8",
            access: { rw: "R" }, conformance: [ "O" ], value: "0"
        }),

        AttributeElement({
            id: 0x0016, name: "numHolidaySchedulesSupported", base: "uint8",
            access: { rw: "R" }, conformance: [ "O" ], value: "0"
        }),

        AttributeElement({
            id: 0x0017, name: "maxPinLength", base: "uint8",
            access: { rw: "R" }, conformance: [ "O" ]
        }),

        AttributeElement({
            id: 0x0018, name: "minPinLength", base: "uint8",
            access: { rw: "R" }, conformance: [ "O" ]
        }),

        AttributeElement({
            id: 0x0019, name: "maxRfidCodeLength", base: "uint8",
            access: { rw: "R" }, conformance: [ "O" ]
        }),

        AttributeElement({
            id: 0x001a, name: "minRfidCodeLength", base: "uint8",
            access: { rw: "R" }, conformance: [ "O" ]
        }),

        AttributeElement({
            id: 0x001b, name: "credentialRulesSupport", base: "DlCredentialRuleMask",
            access: { rw: "R" }, conformance: [ "O" ], value: "1"
        }),

        AttributeElement({
            id: 0x001c, name: "numCredentialsSupportedPerUser", base: "uint8",
            access: { rw: "R" }, conformance: [ "O" ], value: "0"
        }),

        AttributeElement({
            id: 0x0021, name: "language", base: "string",
            access: { rw: "W", readPriv: "V", writePriv: "M" }, conformance: [ "O" ], quality: { reportable: true }
        }),

        AttributeElement({
            id: 0x0022, name: "ledSettings", base: "uint8",
            access: { rw: "W", readPriv: "V", writePriv: "M" }, conformance: [ "O" ], quality: { reportable: true }, value: "0"
        }),

        AttributeElement({
            id: 0x0023, name: "autoRelockTime", base: "uint32",
            access: { rw: "W", readPriv: "V", writePriv: "M" }, conformance: [ "M" ], quality: { reportable: true }
        }),

        AttributeElement({
            id: 0x0024, name: "soundVolume", base: "uint8",
            access: { rw: "W", readPriv: "V", writePriv: "M" }, conformance: [ "O" ], quality: { reportable: true }, value: "0"
        }),

        AttributeElement({
            id: 0x0025, name: "operatingMode", base: "OperatingModeEnum",
            access: { rw: "W", readPriv: "V", writePriv: "M" }, conformance: [ "M" ], quality: { reportable: true }
        }),

        AttributeElement({
            id: 0x0026, name: "supportedOperatingModes", base: "DlSupportedOperatingModes",
            access: { rw: "R" }, conformance: [ "M" ], value: "0xFFF6"
        }),

        AttributeElement({
            id: 0x0027, name: "defaultConfigurationRegister", base: "DlDefaultConfigurationRegister",
            access: { rw: "R" }, conformance: [ "O" ], quality: { reportable: true }, value: "0"
        }),

        AttributeElement({
            id: 0x0028, name: "enableLocalProgramming", base: "bool",
            access: { rw: "W", readPriv: "V", writePriv: "A" }, conformance: [ "O" ], quality: { reportable: true }, value: "1"
        }),

        AttributeElement({
            id: 0x0029, name: "enableOneTouchLocking", base: "bool",
            access: { rw: "W", readPriv: "V", writePriv: "M" }, conformance: [ "O" ], quality: { reportable: true }, value: "0"
        }),

        AttributeElement({
            id: 0x002a, name: "enableInsideStatusLed", base: "bool",
            access: { rw: "W", readPriv: "V", writePriv: "M" }, conformance: [ "O" ], quality: { reportable: true }, value: "0"
        }),

        AttributeElement({
            id: 0x002b, name: "enablePrivacyModeButton", base: "bool",
            access: { rw: "W", readPriv: "V", writePriv: "M" }, conformance: [ "O" ], quality: { reportable: true }, value: "0"
        }),

        AttributeElement({
            id: 0x002c, name: "localProgrammingFeatures", base: "DlLocalProgrammingFeatures",
            access: { rw: "W", readPriv: "V", writePriv: "A" }, conformance: [ "O" ], quality: { reportable: true }, value: "0"
        }),

        AttributeElement({
            id: 0x0030, name: "wrongCodeEntryLimit", base: "uint8",
            access: { rw: "W", readPriv: "V", writePriv: "A" }, conformance: [ "O" ], quality: { reportable: true }
        }),

        AttributeElement({
            id: 0x0031, name: "userCodeTemporaryDisableTime", base: "uint8",
            access: { rw: "W", readPriv: "V", writePriv: "A" }, conformance: [ "O" ], quality: { reportable: true }
        }),

        AttributeElement({
            id: 0x0032, name: "sendPinOverTheAir", base: "bool",
            access: { rw: "W", readPriv: "V", writePriv: "A" }, conformance: [ "O" ], quality: { reportable: true }, value: "0"
        }),

        AttributeElement({
            id: 0x0033, name: "requirePinForRemoteOperation", base: "bool",
            access: { rw: "W", readPriv: "V", writePriv: "A" }, conformance: [ "O" ], quality: { reportable: true }, value: "0"
        }),

        AttributeElement({
            id: 0x0035, name: "expiringUserTimeout", base: "uint16",
            access: { rw: "W", readPriv: "V", writePriv: "A" }, conformance: [ "O" ], quality: { reportable: true }
        }),

        CommandElement({
            id: 0x0000, name: "LockDoor",
            access: { rw: "R" }, conformance: [ "M" ], direction: "request",
            children: [
                DatatypeElement({
                    name: "pinCode", base: "octstr",
                    access: { rw: "R" }, conformance: [ "O" ]
                }),

                DatatypeElement({
                    name: "pinCode", base: "octstr",
                    access: { rw: "R" }, conformance: [ "O" ]
                })
            ]
        }),

        CommandElement({
            id: 0x0001, name: "UnlockDoor",
            access: { rw: "R" }, conformance: [ "M" ], direction: "request",
            children: [
                DatatypeElement({
                    name: "pinCode", base: "octstr",
                    access: { rw: "R" }, conformance: [ "O" ]
                }),

                DatatypeElement({
                    name: "pinCode", base: "octstr",
                    access: { rw: "R" }, conformance: [ "O" ]
                })
            ]
        }),

        CommandElement({
            id: 0x0003, name: "UnlockWithTimeout",
            access: { rw: "R" }, conformance: [ "O" ], direction: "request",
            children: [
                DatatypeElement({
                    name: "timeout", base: "uint16",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "timeout", base: "uint16",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "pinCode", base: "octstr",
                    access: { rw: "R" }, conformance: [ "O" ]
                }),

                DatatypeElement({
                    name: "pinCode", base: "octstr",
                    access: { rw: "R" }, conformance: [ "O" ]
                })
            ]
        }),

        CommandElement({
            id: 0x000b, name: "SetWeekDaySchedule",
            access: { rw: "R", writePriv: "A" }, conformance: [ "O" ], direction: "request",
            children: [
                DatatypeElement({
                    name: "weekDayIndex", base: "uint8",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "weekDayIndex", base: "uint8",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "userIndex", base: "uint16",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "userIndex", base: "uint16",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "daysMask", base: "DaysMaskMap",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "daysMask", base: "DaysMaskMap",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "startHour", base: "uint8",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "startHour", base: "uint8",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "startMinute", base: "uint8",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "startMinute", base: "uint8",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "endHour", base: "uint8",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "endHour", base: "uint8",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "endMinute", base: "uint8",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "endMinute", base: "uint8",
                    access: { rw: "R" }, conformance: [ "M" ]
                })
            ]
        }),

        CommandElement({
            id: 0x000c, name: "GetWeekDaySchedule",
            access: { rw: "R", writePriv: "A" }, conformance: [ "O" ], direction: "request", response: "GetWeekDayScheduleResponse",
            children: [
                DatatypeElement({
                    name: "weekDayIndex", base: "uint8",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "weekDayIndex", base: "uint8",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "userIndex", base: "uint16",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "userIndex", base: "uint16",
                    access: { rw: "R" }, conformance: [ "M" ]
                })
            ]
        }),

        CommandElement({
            id: 0x000c, name: "GetWeekDayScheduleResponse",
            access: { rw: "R" }, conformance: [ "O" ], direction: "response",
            children: [
                DatatypeElement({
                    name: "weekDayIndex", base: "uint8",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "weekDayIndex", base: "uint8",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "userIndex", base: "uint16",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "userIndex", base: "uint16",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "status", base: "DlStatus",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "status", base: "DlStatus",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "daysMask", base: "DaysMaskMap",
                    access: { rw: "R" }, conformance: [ "O" ]
                }),

                DatatypeElement({
                    name: "daysMask", base: "DaysMaskMap",
                    access: { rw: "R" }, conformance: [ "O" ]
                }),

                DatatypeElement({
                    name: "startHour", base: "uint8",
                    access: { rw: "R" }, conformance: [ "O" ]
                }),

                DatatypeElement({
                    name: "startHour", base: "uint8",
                    access: { rw: "R" }, conformance: [ "O" ]
                }),

                DatatypeElement({
                    name: "startMinute", base: "uint8",
                    access: { rw: "R" }, conformance: [ "O" ]
                }),

                DatatypeElement({
                    name: "startMinute", base: "uint8",
                    access: { rw: "R" }, conformance: [ "O" ]
                }),

                DatatypeElement({
                    name: "endHour", base: "uint8",
                    access: { rw: "R" }, conformance: [ "O" ]
                }),

                DatatypeElement({
                    name: "endHour", base: "uint8",
                    access: { rw: "R" }, conformance: [ "O" ]
                }),

                DatatypeElement({
                    name: "endMinute", base: "uint8",
                    access: { rw: "R" }, conformance: [ "O" ]
                }),

                DatatypeElement({
                    name: "endMinute", base: "uint8",
                    access: { rw: "R" }, conformance: [ "O" ]
                })
            ]
        }),

        CommandElement({
            id: 0x000d, name: "ClearWeekDaySchedule",
            access: { rw: "R", writePriv: "A" }, conformance: [ "O" ], direction: "request",
            children: [
                DatatypeElement({
                    name: "weekDayIndex", base: "uint8",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "weekDayIndex", base: "uint8",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "userIndex", base: "uint16",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "userIndex", base: "uint16",
                    access: { rw: "R" }, conformance: [ "M" ]
                })
            ]
        }),

        CommandElement({
            id: 0x000e, name: "SetYearDaySchedule",
            access: { rw: "R", writePriv: "A" }, conformance: [ "O" ], direction: "request",
            children: [
                DatatypeElement({
                    name: "yearDayIndex", base: "uint8",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "yearDayIndex", base: "uint8",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "userIndex", base: "uint16",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "userIndex", base: "uint16",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "localStartTime", base: "epochS",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "localStartTime", base: "epochS",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "localEndTime", base: "epochS",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "localEndTime", base: "epochS",
                    access: { rw: "R" }, conformance: [ "M" ]
                })
            ]
        }),

        CommandElement({
            id: 0x000f, name: "GetYearDaySchedule",
            access: { rw: "R", writePriv: "A" }, conformance: [ "O" ], direction: "request", response: "GetYearDayScheduleResponse",
            children: [
                DatatypeElement({
                    name: "yearDayIndex", base: "uint8",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "yearDayIndex", base: "uint8",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "userIndex", base: "uint16",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "userIndex", base: "uint16",
                    access: { rw: "R" }, conformance: [ "M" ]
                })
            ]
        }),

        CommandElement({
            id: 0x000f, name: "GetYearDayScheduleResponse",
            access: { rw: "R" }, conformance: [ "O" ], direction: "response",
            children: [
                DatatypeElement({
                    name: "yearDayIndex", base: "uint8",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "yearDayIndex", base: "uint8",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "userIndex", base: "uint16",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "userIndex", base: "uint16",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "status", base: "DlStatus",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "status", base: "DlStatus",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "localStartTime", base: "epochS",
                    access: { rw: "R" }, conformance: [ "O" ]
                }),

                DatatypeElement({
                    name: "localStartTime", base: "epochS",
                    access: { rw: "R" }, conformance: [ "O" ]
                }),

                DatatypeElement({
                    name: "localEndTime", base: "epochS",
                    access: { rw: "R" }, conformance: [ "O" ]
                }),

                DatatypeElement({
                    name: "localEndTime", base: "epochS",
                    access: { rw: "R" }, conformance: [ "O" ]
                })
            ]
        }),

        CommandElement({
            id: 0x0010, name: "ClearYearDaySchedule",
            access: { rw: "R", writePriv: "A" }, conformance: [ "O" ], direction: "request",
            children: [
                DatatypeElement({
                    name: "yearDayIndex", base: "uint8",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "yearDayIndex", base: "uint8",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "userIndex", base: "uint16",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "userIndex", base: "uint16",
                    access: { rw: "R" }, conformance: [ "M" ]
                })
            ]
        }),

        CommandElement({
            id: 0x0011, name: "SetHolidaySchedule",
            access: { rw: "R", writePriv: "A" }, conformance: [ "O" ], direction: "request",
            children: [
                DatatypeElement({
                    name: "holidayIndex", base: "uint8",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "holidayIndex", base: "uint8",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "localStartTime", base: "epochS",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "localStartTime", base: "epochS",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "localEndTime", base: "epochS",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "localEndTime", base: "epochS",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "operatingMode", base: "OperatingModeEnum",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "operatingMode", base: "OperatingModeEnum",
                    access: { rw: "R" }, conformance: [ "M" ]
                })
            ]
        }),

        CommandElement({
            id: 0x0012, name: "GetHolidaySchedule",
            access: { rw: "R", writePriv: "A" }, conformance: [ "O" ], direction: "request", response: "GetHolidayScheduleResponse",
            children: [
                DatatypeElement({
                    name: "holidayIndex", base: "uint8",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "holidayIndex", base: "uint8",
                    access: { rw: "R" }, conformance: [ "M" ]
                })
            ]
        }),

        CommandElement({
            id: 0x0012, name: "GetHolidayScheduleResponse",
            access: { rw: "R" }, conformance: [ "O" ], direction: "response",
            children: [
                DatatypeElement({
                    name: "holidayIndex", base: "uint8",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "holidayIndex", base: "uint8",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "status", base: "DlStatus",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "status", base: "DlStatus",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "localStartTime", base: "epochS",
                    access: { rw: "R" }, conformance: [ "O" ]
                }),

                DatatypeElement({
                    name: "localStartTime", base: "epochS",
                    access: { rw: "R" }, conformance: [ "O" ]
                }),

                DatatypeElement({
                    name: "localEndTime", base: "epochS",
                    access: { rw: "R" }, conformance: [ "O" ]
                }),

                DatatypeElement({
                    name: "localEndTime", base: "epochS",
                    access: { rw: "R" }, conformance: [ "O" ]
                }),

                DatatypeElement({
                    name: "operatingMode", base: "OperatingModeEnum",
                    access: { rw: "R" }, conformance: [ "O" ]
                }),

                DatatypeElement({
                    name: "operatingMode", base: "OperatingModeEnum",
                    access: { rw: "R" }, conformance: [ "O" ]
                })
            ]
        }),

        CommandElement({
            id: 0x0013, name: "ClearHolidaySchedule",
            access: { rw: "R", writePriv: "A" }, conformance: [ "O" ], direction: "request",
            children: [
                DatatypeElement({
                    name: "holidayIndex", base: "uint8",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "holidayIndex", base: "uint8",
                    access: { rw: "R" }, conformance: [ "M" ]
                })
            ]
        }),

        CommandElement({
            id: 0x001a, name: "SetUser",
            access: { rw: "R", writePriv: "A" }, conformance: [ "O" ], direction: "request",
            children: [
                DatatypeElement({
                    name: "operationType", base: "DataOperationTypeEnum",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "operationType", base: "DataOperationTypeEnum",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "userIndex", base: "uint16",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "userIndex", base: "uint16",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "userName", base: "string",
                    access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
                }),

                DatatypeElement({
                    name: "userName", base: "string",
                    access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
                }),

                DatatypeElement({
                    name: "userUniqueId", base: "uint32",
                    access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
                }),

                DatatypeElement({
                    name: "userUniqueId", base: "uint32",
                    access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
                }),

                DatatypeElement({
                    name: "userStatus", base: "UserStatusEnum",
                    access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
                }),

                DatatypeElement({
                    name: "userStatus", base: "UserStatusEnum",
                    access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
                }),

                DatatypeElement({
                    name: "userType", base: "UserTypeEnum",
                    access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
                }),

                DatatypeElement({
                    name: "userType", base: "UserTypeEnum",
                    access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
                }),

                DatatypeElement({
                    name: "credentialRule", base: "CredentialRuleEnum",
                    access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
                }),

                DatatypeElement({
                    name: "credentialRule", base: "CredentialRuleEnum",
                    access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
                })
            ]
        }),

        CommandElement({
            id: 0x001b, name: "GetUser",
            access: { rw: "R", writePriv: "A" }, conformance: [ "O" ], direction: "request", response: "GetUserResponse",
            children: [
                DatatypeElement({
                    name: "userIndex", base: "uint16",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "userIndex", base: "uint16",
                    access: { rw: "R" }, conformance: [ "M" ]
                })
            ]
        }),

        CommandElement({
            id: 0x001c, name: "GetUserResponse",
            access: { rw: "R" }, conformance: [ "O" ], direction: "response",
            children: [
                DatatypeElement({
                    name: "userIndex", base: "uint16",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "userIndex", base: "uint16",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "userName", base: "string",
                    access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
                }),

                DatatypeElement({
                    name: "userName", base: "string",
                    access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
                }),

                DatatypeElement({
                    name: "userUniqueId", base: "uint32",
                    access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
                }),

                DatatypeElement({
                    name: "userUniqueId", base: "uint32",
                    access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
                }),

                DatatypeElement({
                    name: "userStatus", base: "UserStatusEnum",
                    access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
                }),

                DatatypeElement({
                    name: "userStatus", base: "UserStatusEnum",
                    access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
                }),

                DatatypeElement({
                    name: "userType", base: "UserTypeEnum",
                    access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
                }),

                DatatypeElement({
                    name: "userType", base: "UserTypeEnum",
                    access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
                }),

                DatatypeElement({
                    name: "credentialRule", base: "CredentialRuleEnum",
                    access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
                }),

                DatatypeElement({
                    name: "credentialRule", base: "CredentialRuleEnum",
                    access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
                }),

                DatatypeElement({
                    name: "credentials", base: "CredentialStruct",
                    access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
                }),

                DatatypeElement({
                    name: "credentials", base: "CredentialStruct",
                    access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
                }),

                DatatypeElement({
                    name: "creatorFabricIndex", base: "fabricIdx",
                    access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
                }),

                DatatypeElement({
                    name: "creatorFabricIndex", base: "fabricIdx",
                    access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
                }),

                DatatypeElement({
                    name: "lastModifiedFabricIndex", base: "fabricIdx",
                    access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
                }),

                DatatypeElement({
                    name: "lastModifiedFabricIndex", base: "fabricIdx",
                    access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
                }),

                DatatypeElement({
                    name: "nextUserIndex", base: "uint16",
                    access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
                }),

                DatatypeElement({
                    name: "nextUserIndex", base: "uint16",
                    access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
                })
            ]
        }),

        CommandElement({
            id: 0x001d, name: "ClearUser",
            access: { rw: "R", writePriv: "A" }, conformance: [ "O" ], direction: "request",
            children: [
                DatatypeElement({
                    name: "userIndex", base: "uint16",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "userIndex", base: "uint16",
                    access: { rw: "R" }, conformance: [ "M" ]
                })
            ]
        }),

        CommandElement({
            id: 0x0022, name: "SetCredential",
            access: { rw: "R", writePriv: "A" }, conformance: [ "O" ], direction: "request", response: "SetCredentialResponse",
            children: [
                DatatypeElement({
                    name: "operationType", base: "DataOperationTypeEnum",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "operationType", base: "DataOperationTypeEnum",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "credential", base: "CredentialStruct",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "credential", base: "CredentialStruct",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "credentialData", base: "octstr",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "credentialData", base: "octstr",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "userIndex", base: "uint16",
                    access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
                }),

                DatatypeElement({
                    name: "userIndex", base: "uint16",
                    access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
                }),

                DatatypeElement({
                    name: "userStatus", base: "UserStatusEnum",
                    access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
                }),

                DatatypeElement({
                    name: "userStatus", base: "UserStatusEnum",
                    access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
                }),

                DatatypeElement({
                    name: "userType", base: "UserTypeEnum",
                    access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
                }),

                DatatypeElement({
                    name: "userType", base: "UserTypeEnum",
                    access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
                })
            ]
        }),

        CommandElement({
            id: 0x0023, name: "SetCredentialResponse",
            access: { rw: "R" }, conformance: [ "O" ], direction: "response",
            children: [
                DatatypeElement({
                    name: "status", base: "DlStatus",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "status", base: "DlStatus",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "userIndex", base: "uint16",
                    access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
                }),

                DatatypeElement({
                    name: "userIndex", base: "uint16",
                    access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
                }),

                DatatypeElement({
                    name: "nextCredentialIndex", base: "uint16",
                    access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
                }),

                DatatypeElement({
                    name: "nextCredentialIndex", base: "uint16",
                    access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
                })
            ]
        }),

        CommandElement({
            id: 0x0024, name: "GetCredentialStatus",
            access: { rw: "R", writePriv: "A" }, conformance: [ "O" ], direction: "request", response: "GetCredentialStatusResponse",
            children: [
                DatatypeElement({
                    name: "credential", base: "CredentialStruct",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "credential", base: "CredentialStruct",
                    access: { rw: "R" }, conformance: [ "M" ]
                })
            ]
        }),

        CommandElement({
            id: 0x0025, name: "GetCredentialStatusResponse",
            access: { rw: "R" }, conformance: [ "O" ], direction: "response",
            children: [
                DatatypeElement({
                    name: "credentialExists", base: "bool",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "credentialExists", base: "bool",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "userIndex", base: "uint16",
                    access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
                }),

                DatatypeElement({
                    name: "userIndex", base: "uint16",
                    access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
                }),

                DatatypeElement({
                    name: "creatorFabricIndex", base: "fabricIdx",
                    access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
                }),

                DatatypeElement({
                    name: "creatorFabricIndex", base: "fabricIdx",
                    access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
                }),

                DatatypeElement({
                    name: "lastModifiedFabricIndex", base: "fabricIdx",
                    access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
                }),

                DatatypeElement({
                    name: "lastModifiedFabricIndex", base: "fabricIdx",
                    access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
                }),

                DatatypeElement({
                    name: "nextCredentialIndex", base: "uint16",
                    access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
                }),

                DatatypeElement({
                    name: "nextCredentialIndex", base: "uint16",
                    access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
                })
            ]
        }),

        CommandElement({
            id: 0x0026, name: "ClearCredential",
            access: { rw: "R", writePriv: "A" }, conformance: [ "O" ], direction: "request",
            children: [
                DatatypeElement({
                    name: "credential", base: "CredentialStruct",
                    access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
                }),

                DatatypeElement({
                    name: "credential", base: "CredentialStruct",
                    access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
                })
            ]
        }),

        EventElement({
            id: 0x0000, name: "DoorLockAlarm",
            access: { rw: "R" }, conformance: [ "M" ], priority: "critical",
            children: [
                DatatypeElement({
                    name: "alarmCode", base: "AlarmCodeEnum",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "alarmCode", base: "AlarmCodeEnum",
                    access: { rw: "R" }, conformance: [ "M" ]
                })
            ]
        }),

        EventElement({
            id: 0x0001, name: "DoorStateChange",
            access: { rw: "R" }, conformance: [ "O" ], priority: "critical",
            children: [
                DatatypeElement({
                    name: "doorState", base: "DoorStateEnum",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "doorState", base: "DoorStateEnum",
                    access: { rw: "R" }, conformance: [ "M" ]
                })
            ]
        }),

        EventElement({
            id: 0x0002, name: "LockOperation",
            access: { rw: "R" }, conformance: [ "M" ], priority: "critical",
            children: [
                DatatypeElement({
                    name: "lockOperationType", base: "LockOperationTypeEnum",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "lockOperationType", base: "LockOperationTypeEnum",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "operationSource", base: "OperationSourceEnum",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "operationSource", base: "OperationSourceEnum",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "userIndex", base: "uint16",
                    access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
                }),

                DatatypeElement({
                    name: "userIndex", base: "uint16",
                    access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
                }),

                DatatypeElement({
                    name: "fabricIndex", base: "fabricIdx",
                    access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
                }),

                DatatypeElement({
                    name: "fabricIndex", base: "fabricIdx",
                    access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
                }),

                DatatypeElement({
                    name: "sourceNode", base: "nodeId",
                    access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
                }),

                DatatypeElement({
                    name: "sourceNode", base: "nodeId",
                    access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
                }),

                DatatypeElement({
                    name: "credentials", base: "CredentialStruct",
                    access: { rw: "R" }, conformance: [ "O" ], quality: { nullable: true }
                }),

                DatatypeElement({
                    name: "credentials", base: "CredentialStruct",
                    access: { rw: "R" }, conformance: [ "O" ], quality: { nullable: true }
                })
            ]
        }),

        EventElement({
            id: 0x0003, name: "LockOperationError",
            access: { rw: "R" }, conformance: [ "M" ], priority: "critical",
            children: [
                DatatypeElement({
                    name: "lockOperationType", base: "LockOperationTypeEnum",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "lockOperationType", base: "LockOperationTypeEnum",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "operationSource", base: "OperationSourceEnum",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "operationSource", base: "OperationSourceEnum",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "operationError", base: "OperationErrorEnum",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "operationError", base: "OperationErrorEnum",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "userIndex", base: "uint16",
                    access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
                }),

                DatatypeElement({
                    name: "userIndex", base: "uint16",
                    access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
                }),

                DatatypeElement({
                    name: "fabricIndex", base: "fabricIdx",
                    access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
                }),

                DatatypeElement({
                    name: "fabricIndex", base: "fabricIdx",
                    access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
                }),

                DatatypeElement({
                    name: "sourceNode", base: "nodeId",
                    access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
                }),

                DatatypeElement({
                    name: "sourceNode", base: "nodeId",
                    access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
                }),

                DatatypeElement({
                    name: "credentials", base: "CredentialStruct",
                    access: { rw: "R" }, conformance: [ "O" ], quality: { nullable: true }
                }),

                DatatypeElement({
                    name: "credentials", base: "CredentialStruct",
                    access: { rw: "R" }, conformance: [ "O" ], quality: { nullable: true }
                })
            ]
        }),

        EventElement({
            id: 0x0004, name: "LockUserChange",
            access: { rw: "R" }, conformance: [ "M" ], priority: "info",
            children: [
                DatatypeElement({
                    name: "lockDataType", base: "LockDataTypeEnum",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "lockDataType", base: "LockDataTypeEnum",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "dataOperationType", base: "DataOperationTypeEnum",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "dataOperationType", base: "DataOperationTypeEnum",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "operationSource", base: "OperationSourceEnum",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "operationSource", base: "OperationSourceEnum",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "userIndex", base: "uint16",
                    access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
                }),

                DatatypeElement({
                    name: "userIndex", base: "uint16",
                    access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
                }),

                DatatypeElement({
                    name: "fabricIndex", base: "fabricIdx",
                    access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
                }),

                DatatypeElement({
                    name: "fabricIndex", base: "fabricIdx",
                    access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
                }),

                DatatypeElement({
                    name: "sourceNode", base: "nodeId",
                    access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
                }),

                DatatypeElement({
                    name: "sourceNode", base: "nodeId",
                    access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
                }),

                DatatypeElement({
                    name: "dataIndex", base: "uint16",
                    access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
                }),

                DatatypeElement({
                    name: "dataIndex", base: "uint16",
                    access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
                })
            ]
        }),

        DatatypeElement({
            name: "AlarmCodeEnum", base: "enum8",
            access: { rw: "R" }, conformance: [ "M" ],
            children: [
                DatatypeElement({
                    name: "lockJammed",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0"
                }),

                DatatypeElement({
                    name: "lockJammed",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0"
                }),

                DatatypeElement({
                    name: "lockFactoryReset",
                    access: { rw: "R" }, conformance: [ "M" ], value: "1"
                }),

                DatatypeElement({
                    name: "lockFactoryReset",
                    access: { rw: "R" }, conformance: [ "M" ], value: "1"
                }),

                DatatypeElement({
                    name: "lockRadioPowerCycled",
                    access: { rw: "R" }, conformance: [ "M" ], value: "3"
                }),

                DatatypeElement({
                    name: "lockRadioPowerCycled",
                    access: { rw: "R" }, conformance: [ "M" ], value: "3"
                }),

                DatatypeElement({
                    name: "wrongCodeEntryLimit",
                    access: { rw: "R" }, conformance: [ "M" ], value: "4"
                }),

                DatatypeElement({
                    name: "wrongCodeEntryLimit",
                    access: { rw: "R" }, conformance: [ "M" ], value: "4"
                }),

                DatatypeElement({
                    name: "frontEsceutcheonRemoved",
                    access: { rw: "R" }, conformance: [ "M" ], value: "5"
                }),

                DatatypeElement({
                    name: "frontEsceutcheonRemoved",
                    access: { rw: "R" }, conformance: [ "M" ], value: "5"
                }),

                DatatypeElement({
                    name: "doorForcedOpen",
                    access: { rw: "R" }, conformance: [ "M" ], value: "6"
                }),

                DatatypeElement({
                    name: "doorForcedOpen",
                    access: { rw: "R" }, conformance: [ "M" ], value: "6"
                }),

                DatatypeElement({
                    name: "doorAjar",
                    access: { rw: "R" }, conformance: [ "M" ], value: "7"
                }),

                DatatypeElement({
                    name: "doorAjar",
                    access: { rw: "R" }, conformance: [ "M" ], value: "7"
                }),

                DatatypeElement({
                    name: "forcedUser",
                    access: { rw: "R" }, conformance: [ "M" ], value: "8"
                }),

                DatatypeElement({
                    name: "forcedUser",
                    access: { rw: "R" }, conformance: [ "M" ], value: "8"
                })
            ]
        }),

        DatatypeElement({
            name: "CredentialRuleEnum", base: "enum8",
            access: { rw: "R" }, conformance: [ "M" ],
            children: [
                DatatypeElement({
                    name: "single",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0"
                }),

                DatatypeElement({
                    name: "single",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0"
                }),

                DatatypeElement({
                    name: "dual",
                    access: { rw: "R" }, conformance: [ "M" ], value: "1"
                }),

                DatatypeElement({
                    name: "dual",
                    access: { rw: "R" }, conformance: [ "M" ], value: "1"
                }),

                DatatypeElement({
                    name: "tri",
                    access: { rw: "R" }, conformance: [ "M" ], value: "2"
                }),

                DatatypeElement({
                    name: "tri",
                    access: { rw: "R" }, conformance: [ "M" ], value: "2"
                })
            ]
        }),

        DatatypeElement({
            name: "DlCredentialRuleMask", base: "map8",
            access: { rw: "R" }, conformance: [ "M" ],
            children: [
                DatatypeElement({
                    name: "single",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x01"
                }),

                DatatypeElement({
                    name: "single",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x01"
                }),

                DatatypeElement({
                    name: "dual",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x02"
                }),

                DatatypeElement({
                    name: "dual",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x02"
                }),

                DatatypeElement({
                    name: "tri",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x04"
                }),

                DatatypeElement({
                    name: "tri",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x04"
                })
            ]
        }),

        DatatypeElement({
            name: "CredentialStruct", base: "struct",
            access: { rw: "R" }, conformance: [ "M" ],
            children: [
                DatatypeElement({
                    name: "credentialType", base: "CredentialTypeEnum",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "credentialType", base: "CredentialTypeEnum",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "credentialIndex", base: "uint16",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "credentialIndex", base: "uint16",
                    access: { rw: "R" }, conformance: [ "M" ]
                })
            ]
        }),

        DatatypeElement({
            name: "CredentialTypeEnum", base: "enum8",
            access: { rw: "R" }, conformance: [ "M" ],
            children: [
                DatatypeElement({
                    name: "programmingPin",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0"
                }),

                DatatypeElement({
                    name: "programmingPin",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0"
                }),

                DatatypeElement({
                    name: "pin",
                    access: { rw: "R" }, conformance: [ "M" ], value: "1"
                }),

                DatatypeElement({
                    name: "pin",
                    access: { rw: "R" }, conformance: [ "M" ], value: "1"
                }),

                DatatypeElement({
                    name: "rfid",
                    access: { rw: "R" }, conformance: [ "M" ], value: "2"
                }),

                DatatypeElement({
                    name: "rfid",
                    access: { rw: "R" }, conformance: [ "M" ], value: "2"
                }),

                DatatypeElement({
                    name: "fingerprint",
                    access: { rw: "R" }, conformance: [ "M" ], value: "3"
                }),

                DatatypeElement({
                    name: "fingerprint",
                    access: { rw: "R" }, conformance: [ "M" ], value: "3"
                }),

                DatatypeElement({
                    name: "fingerVein",
                    access: { rw: "R" }, conformance: [ "M" ], value: "4"
                }),

                DatatypeElement({
                    name: "fingerVein",
                    access: { rw: "R" }, conformance: [ "M" ], value: "4"
                }),

                DatatypeElement({
                    name: "face",
                    access: { rw: "R" }, conformance: [ "M" ], value: "5"
                }),

                DatatypeElement({
                    name: "face",
                    access: { rw: "R" }, conformance: [ "M" ], value: "5"
                })
            ]
        }),

        DatatypeElement({
            name: "DataOperationTypeEnum", base: "enum8",
            access: { rw: "R" }, conformance: [ "M" ],
            children: [
                DatatypeElement({
                    name: "add",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0"
                }),

                DatatypeElement({
                    name: "add",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0"
                }),

                DatatypeElement({
                    name: "clear",
                    access: { rw: "R" }, conformance: [ "M" ], value: "1"
                }),

                DatatypeElement({
                    name: "clear",
                    access: { rw: "R" }, conformance: [ "M" ], value: "1"
                }),

                DatatypeElement({
                    name: "modify",
                    access: { rw: "R" }, conformance: [ "M" ], value: "2"
                }),

                DatatypeElement({
                    name: "modify",
                    access: { rw: "R" }, conformance: [ "M" ], value: "2"
                })
            ]
        }),

        DatatypeElement({
            name: "DaysMaskMap", base: "map8",
            access: { rw: "R" }, conformance: [ "M" ],
            children: [
                DatatypeElement({
                    name: "sunday",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x01"
                }),

                DatatypeElement({
                    name: "sunday",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x01"
                }),

                DatatypeElement({
                    name: "monday",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x02"
                }),

                DatatypeElement({
                    name: "monday",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x02"
                }),

                DatatypeElement({
                    name: "tuesday",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x04"
                }),

                DatatypeElement({
                    name: "tuesday",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x04"
                }),

                DatatypeElement({
                    name: "wednesday",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x08"
                }),

                DatatypeElement({
                    name: "wednesday",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x08"
                }),

                DatatypeElement({
                    name: "thursday",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x10"
                }),

                DatatypeElement({
                    name: "thursday",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x10"
                }),

                DatatypeElement({
                    name: "friday",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x20"
                }),

                DatatypeElement({
                    name: "friday",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x20"
                }),

                DatatypeElement({
                    name: "saturday",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x40"
                }),

                DatatypeElement({
                    name: "saturday",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x40"
                })
            ]
        }),

        DatatypeElement({
            name: "DoorStateEnum", base: "enum8",
            access: { rw: "R" }, conformance: [ "M" ],
            children: [
                DatatypeElement({
                    name: "doorOpen",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0"
                }),

                DatatypeElement({
                    name: "doorOpen",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0"
                }),

                DatatypeElement({
                    name: "doorClosed",
                    access: { rw: "R" }, conformance: [ "M" ], value: "1"
                }),

                DatatypeElement({
                    name: "doorClosed",
                    access: { rw: "R" }, conformance: [ "M" ], value: "1"
                }),

                DatatypeElement({
                    name: "doorJammed",
                    access: { rw: "R" }, conformance: [ "M" ], value: "2"
                }),

                DatatypeElement({
                    name: "doorJammed",
                    access: { rw: "R" }, conformance: [ "M" ], value: "2"
                }),

                DatatypeElement({
                    name: "doorForcedOpen",
                    access: { rw: "R" }, conformance: [ "M" ], value: "3"
                }),

                DatatypeElement({
                    name: "doorForcedOpen",
                    access: { rw: "R" }, conformance: [ "M" ], value: "3"
                }),

                DatatypeElement({
                    name: "doorUnspecifiedError",
                    access: { rw: "R" }, conformance: [ "M" ], value: "4"
                }),

                DatatypeElement({
                    name: "doorUnspecifiedError",
                    access: { rw: "R" }, conformance: [ "M" ], value: "4"
                }),

                DatatypeElement({
                    name: "doorAjar",
                    access: { rw: "R" }, conformance: [ "M" ], value: "5"
                }),

                DatatypeElement({
                    name: "doorAjar",
                    access: { rw: "R" }, conformance: [ "M" ], value: "5"
                })
            ]
        }),

        DatatypeElement({
            name: "LockDataTypeEnum", base: "enum8",
            access: { rw: "R" }, conformance: [ "M" ],
            children: [
                DatatypeElement({
                    name: "unspecified",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0"
                }),

                DatatypeElement({
                    name: "unspecified",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0"
                }),

                DatatypeElement({
                    name: "programmingCode",
                    access: { rw: "R" }, conformance: [ "M" ], value: "1"
                }),

                DatatypeElement({
                    name: "programmingCode",
                    access: { rw: "R" }, conformance: [ "M" ], value: "1"
                }),

                DatatypeElement({
                    name: "userIndex",
                    access: { rw: "R" }, conformance: [ "M" ], value: "2"
                }),

                DatatypeElement({
                    name: "userIndex",
                    access: { rw: "R" }, conformance: [ "M" ], value: "2"
                }),

                DatatypeElement({
                    name: "weekDaySchedule",
                    access: { rw: "R" }, conformance: [ "M" ], value: "3"
                }),

                DatatypeElement({
                    name: "weekDaySchedule",
                    access: { rw: "R" }, conformance: [ "M" ], value: "3"
                }),

                DatatypeElement({
                    name: "yearDaySchedule",
                    access: { rw: "R" }, conformance: [ "M" ], value: "4"
                }),

                DatatypeElement({
                    name: "yearDaySchedule",
                    access: { rw: "R" }, conformance: [ "M" ], value: "4"
                }),

                DatatypeElement({
                    name: "holidaySchedule",
                    access: { rw: "R" }, conformance: [ "M" ], value: "5"
                }),

                DatatypeElement({
                    name: "holidaySchedule",
                    access: { rw: "R" }, conformance: [ "M" ], value: "5"
                }),

                DatatypeElement({
                    name: "pin",
                    access: { rw: "R" }, conformance: [ "M" ], value: "6"
                }),

                DatatypeElement({
                    name: "pin",
                    access: { rw: "R" }, conformance: [ "M" ], value: "6"
                }),

                DatatypeElement({
                    name: "rfid",
                    access: { rw: "R" }, conformance: [ "M" ], value: "7"
                }),

                DatatypeElement({
                    name: "rfid",
                    access: { rw: "R" }, conformance: [ "M" ], value: "7"
                }),

                DatatypeElement({
                    name: "fingerprint",
                    access: { rw: "R" }, conformance: [ "M" ], value: "8"
                }),

                DatatypeElement({
                    name: "fingerprint",
                    access: { rw: "R" }, conformance: [ "M" ], value: "8"
                }),

                DatatypeElement({
                    name: "fingerVein",
                    access: { rw: "R" }, conformance: [ "M" ], value: "9"
                }),

                DatatypeElement({
                    name: "fingerVein",
                    access: { rw: "R" }, conformance: [ "M" ], value: "9"
                }),

                DatatypeElement({
                    name: "face",
                    access: { rw: "R" }, conformance: [ "M" ], value: "10"
                }),

                DatatypeElement({
                    name: "face",
                    access: { rw: "R" }, conformance: [ "M" ], value: "10"
                })
            ]
        }),

        DatatypeElement({
            name: "LockOperationTypeEnum", base: "enum8",
            access: { rw: "R" }, conformance: [ "M" ],
            children: [
                DatatypeElement({
                    name: "lock",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0"
                }),

                DatatypeElement({
                    name: "lock",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0"
                }),

                DatatypeElement({
                    name: "unlock",
                    access: { rw: "R" }, conformance: [ "M" ], value: "1"
                }),

                DatatypeElement({
                    name: "unlock",
                    access: { rw: "R" }, conformance: [ "M" ], value: "1"
                }),

                DatatypeElement({
                    name: "nonAccessUserEvent",
                    access: { rw: "R" }, conformance: [ "M" ], value: "2"
                }),

                DatatypeElement({
                    name: "nonAccessUserEvent",
                    access: { rw: "R" }, conformance: [ "M" ], value: "2"
                }),

                DatatypeElement({
                    name: "forcedUserEvent",
                    access: { rw: "R" }, conformance: [ "M" ], value: "3"
                }),

                DatatypeElement({
                    name: "forcedUserEvent",
                    access: { rw: "R" }, conformance: [ "M" ], value: "3"
                })
            ]
        }),

        DatatypeElement({
            name: "OperationErrorEnum", base: "enum8",
            access: { rw: "R" }, conformance: [ "M" ],
            children: [
                DatatypeElement({
                    name: "unspecified",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0"
                }),

                DatatypeElement({
                    name: "unspecified",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0"
                }),

                DatatypeElement({
                    name: "invalidCredential",
                    access: { rw: "R" }, conformance: [ "M" ], value: "1"
                }),

                DatatypeElement({
                    name: "invalidCredential",
                    access: { rw: "R" }, conformance: [ "M" ], value: "1"
                }),

                DatatypeElement({
                    name: "disabledUserDenied",
                    access: { rw: "R" }, conformance: [ "M" ], value: "2"
                }),

                DatatypeElement({
                    name: "disabledUserDenied",
                    access: { rw: "R" }, conformance: [ "M" ], value: "2"
                }),

                DatatypeElement({
                    name: "restricted",
                    access: { rw: "R" }, conformance: [ "M" ], value: "3"
                }),

                DatatypeElement({
                    name: "restricted",
                    access: { rw: "R" }, conformance: [ "M" ], value: "3"
                }),

                DatatypeElement({
                    name: "insufficientBattery",
                    access: { rw: "R" }, conformance: [ "M" ], value: "4"
                }),

                DatatypeElement({
                    name: "insufficientBattery",
                    access: { rw: "R" }, conformance: [ "M" ], value: "4"
                })
            ]
        }),

        DatatypeElement({
            name: "OperatingModeEnum", base: "enum8",
            access: { rw: "R" }, conformance: [ "M" ],
            children: [
                DatatypeElement({
                    name: "normal",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0"
                }),

                DatatypeElement({
                    name: "normal",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0"
                }),

                DatatypeElement({
                    name: "vacation",
                    access: { rw: "R" }, conformance: [ "M" ], value: "1"
                }),

                DatatypeElement({
                    name: "vacation",
                    access: { rw: "R" }, conformance: [ "M" ], value: "1"
                }),

                DatatypeElement({
                    name: "privacy",
                    access: { rw: "R" }, conformance: [ "M" ], value: "2"
                }),

                DatatypeElement({
                    name: "privacy",
                    access: { rw: "R" }, conformance: [ "M" ], value: "2"
                }),

                DatatypeElement({
                    name: "noRemoteLockUnlock",
                    access: { rw: "R" }, conformance: [ "M" ], value: "3"
                }),

                DatatypeElement({
                    name: "noRemoteLockUnlock",
                    access: { rw: "R" }, conformance: [ "M" ], value: "3"
                }),

                DatatypeElement({
                    name: "passage",
                    access: { rw: "R" }, conformance: [ "M" ], value: "4"
                }),

                DatatypeElement({
                    name: "passage",
                    access: { rw: "R" }, conformance: [ "M" ], value: "4"
                })
            ]
        }),

        DatatypeElement({
            name: "OperationSourceEnum", base: "enum8",
            access: { rw: "R" }, conformance: [ "M" ],
            children: [
                DatatypeElement({
                    name: "unspecified",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0"
                }),

                DatatypeElement({
                    name: "unspecified",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0"
                }),

                DatatypeElement({
                    name: "manual",
                    access: { rw: "R" }, conformance: [ "M" ], value: "1"
                }),

                DatatypeElement({
                    name: "manual",
                    access: { rw: "R" }, conformance: [ "M" ], value: "1"
                }),

                DatatypeElement({
                    name: "proprietaryRemote",
                    access: { rw: "R" }, conformance: [ "M" ], value: "2"
                }),

                DatatypeElement({
                    name: "proprietaryRemote",
                    access: { rw: "R" }, conformance: [ "M" ], value: "2"
                }),

                DatatypeElement({
                    name: "keypad",
                    access: { rw: "R" }, conformance: [ "M" ], value: "3"
                }),

                DatatypeElement({
                    name: "keypad",
                    access: { rw: "R" }, conformance: [ "M" ], value: "3"
                }),

                DatatypeElement({
                    name: "auto",
                    access: { rw: "R" }, conformance: [ "M" ], value: "4"
                }),

                DatatypeElement({
                    name: "auto",
                    access: { rw: "R" }, conformance: [ "M" ], value: "4"
                }),

                DatatypeElement({
                    name: "button",
                    access: { rw: "R" }, conformance: [ "M" ], value: "5"
                }),

                DatatypeElement({
                    name: "button",
                    access: { rw: "R" }, conformance: [ "M" ], value: "5"
                }),

                DatatypeElement({
                    name: "schedule",
                    access: { rw: "R" }, conformance: [ "M" ], value: "6"
                }),

                DatatypeElement({
                    name: "schedule",
                    access: { rw: "R" }, conformance: [ "M" ], value: "6"
                }),

                DatatypeElement({
                    name: "remote",
                    access: { rw: "R" }, conformance: [ "M" ], value: "7"
                }),

                DatatypeElement({
                    name: "remote",
                    access: { rw: "R" }, conformance: [ "M" ], value: "7"
                }),

                DatatypeElement({
                    name: "rfid",
                    access: { rw: "R" }, conformance: [ "M" ], value: "8"
                }),

                DatatypeElement({
                    name: "rfid",
                    access: { rw: "R" }, conformance: [ "M" ], value: "8"
                }),

                DatatypeElement({
                    name: "biometric",
                    access: { rw: "R" }, conformance: [ "M" ], value: "9"
                }),

                DatatypeElement({
                    name: "biometric",
                    access: { rw: "R" }, conformance: [ "M" ], value: "9"
                })
            ]
        }),

        DatatypeElement({
            name: "UserStatusEnum", base: "enum8",
            access: { rw: "R" }, conformance: [ "M" ],
            children: [
                DatatypeElement({
                    name: "available",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0"
                }),

                DatatypeElement({
                    name: "available",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0"
                }),

                DatatypeElement({
                    name: "occupiedEnabled",
                    access: { rw: "R" }, conformance: [ "M" ], value: "1"
                }),

                DatatypeElement({
                    name: "occupiedEnabled",
                    access: { rw: "R" }, conformance: [ "M" ], value: "1"
                }),

                DatatypeElement({
                    name: "occupiedDisabled",
                    access: { rw: "R" }, conformance: [ "M" ], value: "3"
                }),

                DatatypeElement({
                    name: "occupiedDisabled",
                    access: { rw: "R" }, conformance: [ "M" ], value: "3"
                })
            ]
        }),

        DatatypeElement({
            name: "UserTypeEnum", base: "enum8",
            access: { rw: "R" }, conformance: [ "M" ],
            children: [
                DatatypeElement({
                    name: "unrestrictedUser",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0"
                }),

                DatatypeElement({
                    name: "unrestrictedUser",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0"
                }),

                DatatypeElement({
                    name: "yearDayScheduleUser",
                    access: { rw: "R" }, conformance: [ "M" ], value: "1"
                }),

                DatatypeElement({
                    name: "yearDayScheduleUser",
                    access: { rw: "R" }, conformance: [ "M" ], value: "1"
                }),

                DatatypeElement({
                    name: "weekDayScheduleUser",
                    access: { rw: "R" }, conformance: [ "M" ], value: "2"
                }),

                DatatypeElement({
                    name: "weekDayScheduleUser",
                    access: { rw: "R" }, conformance: [ "M" ], value: "2"
                }),

                DatatypeElement({
                    name: "programmingUser",
                    access: { rw: "R" }, conformance: [ "M" ], value: "3"
                }),

                DatatypeElement({
                    name: "programmingUser",
                    access: { rw: "R" }, conformance: [ "M" ], value: "3"
                }),

                DatatypeElement({
                    name: "nonAccessUser",
                    access: { rw: "R" }, conformance: [ "M" ], value: "4"
                }),

                DatatypeElement({
                    name: "nonAccessUser",
                    access: { rw: "R" }, conformance: [ "M" ], value: "4"
                }),

                DatatypeElement({
                    name: "forcedUser",
                    access: { rw: "R" }, conformance: [ "M" ], value: "5"
                }),

                DatatypeElement({
                    name: "forcedUser",
                    access: { rw: "R" }, conformance: [ "M" ], value: "5"
                }),

                DatatypeElement({
                    name: "disposableUser",
                    access: { rw: "R" }, conformance: [ "M" ], value: "6"
                }),

                DatatypeElement({
                    name: "disposableUser",
                    access: { rw: "R" }, conformance: [ "M" ], value: "6"
                }),

                DatatypeElement({
                    name: "expiringUser",
                    access: { rw: "R" }, conformance: [ "M" ], value: "7"
                }),

                DatatypeElement({
                    name: "expiringUser",
                    access: { rw: "R" }, conformance: [ "M" ], value: "7"
                }),

                DatatypeElement({
                    name: "scheduleRestrictedUser",
                    access: { rw: "R" }, conformance: [ "M" ], value: "8"
                }),

                DatatypeElement({
                    name: "scheduleRestrictedUser",
                    access: { rw: "R" }, conformance: [ "M" ], value: "8"
                }),

                DatatypeElement({
                    name: "remoteOnlyUser",
                    access: { rw: "R" }, conformance: [ "M" ], value: "9"
                }),

                DatatypeElement({
                    name: "remoteOnlyUser",
                    access: { rw: "R" }, conformance: [ "M" ], value: "9"
                })
            ]
        }),

        DatatypeElement({
            name: "DlLockState", base: "enum8",
            access: { rw: "R" }, conformance: [ "M" ],
            children: [
                DatatypeElement({
                    name: "notFullyLocked",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0"
                }),

                DatatypeElement({
                    name: "notFullyLocked",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0"
                }),

                DatatypeElement({
                    name: "locked",
                    access: { rw: "R" }, conformance: [ "M" ], value: "1"
                }),

                DatatypeElement({
                    name: "locked",
                    access: { rw: "R" }, conformance: [ "M" ], value: "1"
                }),

                DatatypeElement({
                    name: "unlocked",
                    access: { rw: "R" }, conformance: [ "M" ], value: "2"
                }),

                DatatypeElement({
                    name: "unlocked",
                    access: { rw: "R" }, conformance: [ "M" ], value: "2"
                })
            ]
        }),

        DatatypeElement({
            name: "DlLockType", base: "enum8",
            access: { rw: "R" }, conformance: [ "M" ],
            children: [
                DatatypeElement({
                    name: "deadBolt",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0"
                }),

                DatatypeElement({
                    name: "deadBolt",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0"
                }),

                DatatypeElement({
                    name: "magnetic",
                    access: { rw: "R" }, conformance: [ "M" ], value: "1"
                }),

                DatatypeElement({
                    name: "magnetic",
                    access: { rw: "R" }, conformance: [ "M" ], value: "1"
                }),

                DatatypeElement({
                    name: "other",
                    access: { rw: "R" }, conformance: [ "M" ], value: "2"
                }),

                DatatypeElement({
                    name: "other",
                    access: { rw: "R" }, conformance: [ "M" ], value: "2"
                }),

                DatatypeElement({
                    name: "mortise",
                    access: { rw: "R" }, conformance: [ "M" ], value: "3"
                }),

                DatatypeElement({
                    name: "mortise",
                    access: { rw: "R" }, conformance: [ "M" ], value: "3"
                }),

                DatatypeElement({
                    name: "rim",
                    access: { rw: "R" }, conformance: [ "M" ], value: "4"
                }),

                DatatypeElement({
                    name: "rim",
                    access: { rw: "R" }, conformance: [ "M" ], value: "4"
                }),

                DatatypeElement({
                    name: "latchBolt",
                    access: { rw: "R" }, conformance: [ "M" ], value: "5"
                }),

                DatatypeElement({
                    name: "latchBolt",
                    access: { rw: "R" }, conformance: [ "M" ], value: "5"
                }),

                DatatypeElement({
                    name: "cylindricalLock",
                    access: { rw: "R" }, conformance: [ "M" ], value: "6"
                }),

                DatatypeElement({
                    name: "cylindricalLock",
                    access: { rw: "R" }, conformance: [ "M" ], value: "6"
                }),

                DatatypeElement({
                    name: "tubularLock",
                    access: { rw: "R" }, conformance: [ "M" ], value: "7"
                }),

                DatatypeElement({
                    name: "tubularLock",
                    access: { rw: "R" }, conformance: [ "M" ], value: "7"
                }),

                DatatypeElement({
                    name: "interconnectedLock",
                    access: { rw: "R" }, conformance: [ "M" ], value: "8"
                }),

                DatatypeElement({
                    name: "interconnectedLock",
                    access: { rw: "R" }, conformance: [ "M" ], value: "8"
                }),

                DatatypeElement({
                    name: "deadLatch",
                    access: { rw: "R" }, conformance: [ "M" ], value: "9"
                }),

                DatatypeElement({
                    name: "deadLatch",
                    access: { rw: "R" }, conformance: [ "M" ], value: "9"
                }),

                DatatypeElement({
                    name: "doorFurniture",
                    access: { rw: "R" }, conformance: [ "M" ], value: "10"
                }),

                DatatypeElement({
                    name: "doorFurniture",
                    access: { rw: "R" }, conformance: [ "M" ], value: "10"
                })
            ]
        }),

        DatatypeElement({
            name: "DlCredentialRulesSupport", base: "map8",
            access: { rw: "R" }, conformance: [ "M" ],
            children: [
                DatatypeElement({
                    name: "single",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x01"
                }),

                DatatypeElement({
                    name: "single",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x01"
                }),

                DatatypeElement({
                    name: "dual",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x02"
                }),

                DatatypeElement({
                    name: "dual",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x02"
                }),

                DatatypeElement({
                    name: "tri",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x04"
                }),

                DatatypeElement({
                    name: "tri",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x04"
                })
            ]
        }),

        DatatypeElement({
            name: "DlSupportedOperatingModes", base: "map16",
            access: { rw: "R" }, conformance: [ "M" ],
            children: [
                DatatypeElement({
                    name: "normal",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x01"
                }),

                DatatypeElement({
                    name: "normal",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x01"
                }),

                DatatypeElement({
                    name: "vacation",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x02"
                }),

                DatatypeElement({
                    name: "vacation",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x02"
                }),

                DatatypeElement({
                    name: "privacy",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x04"
                }),

                DatatypeElement({
                    name: "privacy",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x04"
                }),

                DatatypeElement({
                    name: "noRemoteLockUnlock",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x08"
                }),

                DatatypeElement({
                    name: "noRemoteLockUnlock",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x08"
                }),

                DatatypeElement({
                    name: "passage",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x10"
                }),

                DatatypeElement({
                    name: "passage",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x10"
                })
            ]
        }),

        DatatypeElement({
            name: "DlDefaultConfigurationRegister", base: "map16",
            access: { rw: "R" }, conformance: [ "M" ],
            children: [
                DatatypeElement({
                    name: "enableLocalProgrammingEnabled",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x01"
                }),

                DatatypeElement({
                    name: "enableLocalProgrammingEnabled",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x01"
                }),

                DatatypeElement({
                    name: "keypadInterfaceDefaultAccessEnabled",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x02"
                }),

                DatatypeElement({
                    name: "keypadInterfaceDefaultAccessEnabled",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x02"
                }),

                DatatypeElement({
                    name: "remoteInterfaceDefaultAccessIsEnabled",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x04"
                }),

                DatatypeElement({
                    name: "remoteInterfaceDefaultAccessIsEnabled",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x04"
                }),

                DatatypeElement({
                    name: "soundEnabled",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x20"
                }),

                DatatypeElement({
                    name: "soundEnabled",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x20"
                }),

                DatatypeElement({
                    name: "autoRelockTimeSet",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x40"
                }),

                DatatypeElement({
                    name: "autoRelockTimeSet",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x40"
                }),

                DatatypeElement({
                    name: "ledSettingsSet",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x80"
                }),

                DatatypeElement({
                    name: "ledSettingsSet",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x80"
                })
            ]
        }),

        DatatypeElement({
            name: "DlLocalProgrammingFeatures", base: "map8",
            access: { rw: "R" }, conformance: [ "M" ],
            children: [
                DatatypeElement({
                    name: "addUsersCredentialsSchedulesLocally",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x01"
                }),

                DatatypeElement({
                    name: "addUsersCredentialsSchedulesLocally",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x01"
                }),

                DatatypeElement({
                    name: "modifyUsersCredentialsSchedulesLocally",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x02"
                }),

                DatatypeElement({
                    name: "modifyUsersCredentialsSchedulesLocally",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x02"
                }),

                DatatypeElement({
                    name: "clearUsersCredentialsSchedulesLocally",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x04"
                }),

                DatatypeElement({
                    name: "clearUsersCredentialsSchedulesLocally",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x04"
                }),

                DatatypeElement({
                    name: "adjustLockSettingsLocally",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x08"
                }),

                DatatypeElement({
                    name: "adjustLockSettingsLocally",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x08"
                })
            ]
        }),

        DatatypeElement({
            name: "DlKeypadOperationEventMask", base: "map16",
            access: { rw: "R" }, conformance: [ "M" ],
            children: [
                DatatypeElement({
                    name: "unknown",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x01"
                }),

                DatatypeElement({
                    name: "unknown",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x01"
                }),

                DatatypeElement({
                    name: "lock",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x02"
                }),

                DatatypeElement({
                    name: "lock",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x02"
                }),

                DatatypeElement({
                    name: "unlock",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x04"
                }),

                DatatypeElement({
                    name: "unlock",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x04"
                }),

                DatatypeElement({
                    name: "lockInvalidPin",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x08"
                }),

                DatatypeElement({
                    name: "lockInvalidPin",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x08"
                }),

                DatatypeElement({
                    name: "lockInvalidSchedule",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x10"
                }),

                DatatypeElement({
                    name: "lockInvalidSchedule",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x10"
                }),

                DatatypeElement({
                    name: "unlockInvalidCode",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x20"
                }),

                DatatypeElement({
                    name: "unlockInvalidCode",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x20"
                }),

                DatatypeElement({
                    name: "unlockInvalidSchedule",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x40"
                }),

                DatatypeElement({
                    name: "unlockInvalidSchedule",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x40"
                }),

                DatatypeElement({
                    name: "nonAccessUserOpEvent",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x80"
                }),

                DatatypeElement({
                    name: "nonAccessUserOpEvent",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x80"
                })
            ]
        }),

        DatatypeElement({
            name: "DlRemoteOperationEventMask", base: "map16",
            access: { rw: "R" }, conformance: [ "M" ],
            children: [
                DatatypeElement({
                    name: "unknown",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x01"
                }),

                DatatypeElement({
                    name: "unknown",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x01"
                }),

                DatatypeElement({
                    name: "lock",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x02"
                }),

                DatatypeElement({
                    name: "lock",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x02"
                }),

                DatatypeElement({
                    name: "unlock",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x04"
                }),

                DatatypeElement({
                    name: "unlock",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x04"
                }),

                DatatypeElement({
                    name: "lockInvalidCode",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x08"
                }),

                DatatypeElement({
                    name: "lockInvalidCode",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x08"
                }),

                DatatypeElement({
                    name: "lockInvalidSchedule",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x10"
                }),

                DatatypeElement({
                    name: "lockInvalidSchedule",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x10"
                }),

                DatatypeElement({
                    name: "unlockInvalidCode",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x20"
                }),

                DatatypeElement({
                    name: "unlockInvalidCode",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x20"
                }),

                DatatypeElement({
                    name: "unlockInvalidSchedule",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x40"
                }),

                DatatypeElement({
                    name: "unlockInvalidSchedule",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x40"
                })
            ]
        }),

        DatatypeElement({
            name: "DlManualOperationEventMask", base: "map16",
            access: { rw: "R" }, conformance: [ "M" ],
            children: [
                DatatypeElement({
                    name: "unknown",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x001"
                }),

                DatatypeElement({
                    name: "unknown",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x001"
                }),

                DatatypeElement({
                    name: "thumbturnLock",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x002"
                }),

                DatatypeElement({
                    name: "thumbturnLock",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x002"
                }),

                DatatypeElement({
                    name: "thumbturnUnlock",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x004"
                }),

                DatatypeElement({
                    name: "thumbturnUnlock",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x004"
                }),

                DatatypeElement({
                    name: "oneTouchLock",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x008"
                }),

                DatatypeElement({
                    name: "oneTouchLock",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x008"
                }),

                DatatypeElement({
                    name: "keyLock",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x010"
                }),

                DatatypeElement({
                    name: "keyLock",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x010"
                }),

                DatatypeElement({
                    name: "keyUnlock",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x020"
                }),

                DatatypeElement({
                    name: "keyUnlock",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x020"
                }),

                DatatypeElement({
                    name: "autoLock",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x040"
                }),

                DatatypeElement({
                    name: "autoLock",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x040"
                }),

                DatatypeElement({
                    name: "scheduleLock",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x080"
                }),

                DatatypeElement({
                    name: "scheduleLock",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x080"
                }),

                DatatypeElement({
                    name: "scheduleUnlock",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x100"
                }),

                DatatypeElement({
                    name: "scheduleUnlock",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x100"
                }),

                DatatypeElement({
                    name: "manualLock",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x200"
                }),

                DatatypeElement({
                    name: "manualLock",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x200"
                }),

                DatatypeElement({
                    name: "manualUnlock",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x400"
                }),

                DatatypeElement({
                    name: "manualUnlock",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x400"
                })
            ]
        }),

        DatatypeElement({
            name: "DlRfidOperationEventMask", base: "map16",
            access: { rw: "R" }, conformance: [ "M" ],
            children: [
                DatatypeElement({
                    name: "unknown",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x01"
                }),

                DatatypeElement({
                    name: "unknown",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x01"
                }),

                DatatypeElement({
                    name: "lock",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x02"
                }),

                DatatypeElement({
                    name: "lock",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x02"
                }),

                DatatypeElement({
                    name: "unlock",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x04"
                }),

                DatatypeElement({
                    name: "unlock",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x04"
                }),

                DatatypeElement({
                    name: "lockInvalidRfid",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x08"
                }),

                DatatypeElement({
                    name: "lockInvalidRfid",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x08"
                }),

                DatatypeElement({
                    name: "lockInvalidSchedule",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x10"
                }),

                DatatypeElement({
                    name: "lockInvalidSchedule",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x10"
                }),

                DatatypeElement({
                    name: "unlockInvalidRfid",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x20"
                }),

                DatatypeElement({
                    name: "unlockInvalidRfid",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x20"
                }),

                DatatypeElement({
                    name: "unlockInvalidSchedule",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x40"
                }),

                DatatypeElement({
                    name: "unlockInvalidSchedule",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x40"
                })
            ]
        }),

        DatatypeElement({
            name: "DlKeypadProgrammingEventMask", base: "map16",
            access: { rw: "R" }, conformance: [ "M" ],
            children: [
                DatatypeElement({
                    name: "unknown",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x01"
                }),

                DatatypeElement({
                    name: "unknown",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x01"
                }),

                DatatypeElement({
                    name: "programmingPinChanged",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x02"
                }),

                DatatypeElement({
                    name: "programmingPinChanged",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x02"
                }),

                DatatypeElement({
                    name: "pinAdded",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x04"
                }),

                DatatypeElement({
                    name: "pinAdded",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x04"
                }),

                DatatypeElement({
                    name: "pinCleared",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x08"
                }),

                DatatypeElement({
                    name: "pinCleared",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x08"
                }),

                DatatypeElement({
                    name: "pinChanged",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x10"
                }),

                DatatypeElement({
                    name: "pinChanged",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x10"
                })
            ]
        }),

        DatatypeElement({
            name: "DlRemoteProgrammingEventMask", base: "map16",
            access: { rw: "R" }, conformance: [ "M" ],
            children: [
                DatatypeElement({
                    name: "unknown",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x01"
                }),

                DatatypeElement({
                    name: "unknown",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x01"
                }),

                DatatypeElement({
                    name: "programmingPinChanged",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x02"
                }),

                DatatypeElement({
                    name: "programmingPinChanged",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x02"
                }),

                DatatypeElement({
                    name: "pinAdded",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x04"
                }),

                DatatypeElement({
                    name: "pinAdded",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x04"
                }),

                DatatypeElement({
                    name: "pinCleared",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x08"
                }),

                DatatypeElement({
                    name: "pinCleared",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x08"
                }),

                DatatypeElement({
                    name: "pinChanged",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x10"
                }),

                DatatypeElement({
                    name: "pinChanged",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x10"
                }),

                DatatypeElement({
                    name: "rfidCodeAdded",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x20"
                }),

                DatatypeElement({
                    name: "rfidCodeAdded",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x20"
                }),

                DatatypeElement({
                    name: "rfidCodeCleared",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x40"
                }),

                DatatypeElement({
                    name: "rfidCodeCleared",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x40"
                })
            ]
        }),

        DatatypeElement({
            name: "DlRfidProgrammingEventMask", base: "map16",
            access: { rw: "R" }, conformance: [ "M" ],
            children: [
                DatatypeElement({
                    name: "unknown",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x01"
                }),

                DatatypeElement({
                    name: "unknown",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x01"
                }),

                DatatypeElement({
                    name: "rfidCodeAdded",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x20"
                }),

                DatatypeElement({
                    name: "rfidCodeAdded",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x20"
                }),

                DatatypeElement({
                    name: "rfidCodeCleared",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x40"
                }),

                DatatypeElement({
                    name: "rfidCodeCleared",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x40"
                })
            ]
        }),

        DatatypeElement({
            name: "DlStatus", base: "enum8",
            access: { rw: "R" }, conformance: [ "M" ],
            children: [
                DatatypeElement({
                    name: "success",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x00"
                }),

                DatatypeElement({
                    name: "success",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x00"
                }),

                DatatypeElement({
                    name: "failure",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x01"
                }),

                DatatypeElement({
                    name: "failure",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x01"
                }),

                DatatypeElement({
                    name: "duplicate",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x02"
                }),

                DatatypeElement({
                    name: "duplicate",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x02"
                }),

                DatatypeElement({
                    name: "occupied",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x03"
                }),

                DatatypeElement({
                    name: "occupied",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x03"
                }),

                DatatypeElement({
                    name: "invalidField",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x85"
                }),

                DatatypeElement({
                    name: "invalidField",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x85"
                }),

                DatatypeElement({
                    name: "resourceExhausted",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x89"
                }),

                DatatypeElement({
                    name: "resourceExhausted",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x89"
                }),

                DatatypeElement({
                    name: "notFound",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x8B"
                }),

                DatatypeElement({
                    name: "notFound",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x8B"
                })
            ]
        }),

        DatatypeElement({
            name: "DoorLockFeature", base: "map32",
            access: { rw: "R" }, conformance: [ "M" ],
            children: [
                DatatypeElement({
                    name: "pinCredential",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x01"
                }),

                DatatypeElement({
                    name: "pinCredential",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x01"
                }),

                DatatypeElement({
                    name: "rfidCredential",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x02"
                }),

                DatatypeElement({
                    name: "rfidCredential",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x02"
                }),

                DatatypeElement({
                    name: "fingerCredentials",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x04"
                }),

                DatatypeElement({
                    name: "fingerCredentials",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x04"
                }),

                DatatypeElement({
                    name: "logging",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x08"
                }),

                DatatypeElement({
                    name: "logging",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x08"
                }),

                DatatypeElement({
                    name: "weekDayAccessSchedules",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x10"
                }),

                DatatypeElement({
                    name: "weekDayAccessSchedules",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x10"
                }),

                DatatypeElement({
                    name: "doorPositionSensor",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x20"
                }),

                DatatypeElement({
                    name: "doorPositionSensor",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x20"
                }),

                DatatypeElement({
                    name: "faceCredentials",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x40"
                }),

                DatatypeElement({
                    name: "faceCredentials",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x40"
                }),

                DatatypeElement({
                    name: "credentialsOverTheAirAccess",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x80"
                }),

                DatatypeElement({
                    name: "credentialsOverTheAirAccess",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x80"
                }),

                DatatypeElement({
                    name: "user",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x100"
                }),

                DatatypeElement({
                    name: "user",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x100"
                }),

                DatatypeElement({
                    name: "notification",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x200"
                }),

                DatatypeElement({
                    name: "notification",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x200"
                }),

                DatatypeElement({
                    name: "yearDayAccessSchedules",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x400"
                }),

                DatatypeElement({
                    name: "yearDayAccessSchedules",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x400"
                }),

                DatatypeElement({
                    name: "holidaySchedules",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x800"
                }),

                DatatypeElement({
                    name: "holidaySchedules",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x800"
                })
            ]
        }),

        DatatypeElement({
            name: "DoorLockSetPinOrIdStatus", base: "enum8",
            access: { rw: "R" }, conformance: [ "M" ],
            children: [
                DatatypeElement({
                    name: "success",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x00"
                }),

                DatatypeElement({
                    name: "success",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x00"
                }),

                DatatypeElement({
                    name: "generalFailure",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x01"
                }),

                DatatypeElement({
                    name: "generalFailure",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x01"
                }),

                DatatypeElement({
                    name: "memoryFull",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x02"
                }),

                DatatypeElement({
                    name: "memoryFull",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x02"
                }),

                DatatypeElement({
                    name: "duplicateCodeError",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x03"
                }),

                DatatypeElement({
                    name: "duplicateCodeError",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x03"
                })
            ]
        }),

        DatatypeElement({
            name: "DoorLockOperationEventCode", base: "enum8",
            access: { rw: "R" }, conformance: [ "M" ],
            children: [
                DatatypeElement({
                    name: "unknownOrMfgSpecific",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x00"
                }),

                DatatypeElement({
                    name: "unknownOrMfgSpecific",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x00"
                }),

                DatatypeElement({
                    name: "lock",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x01"
                }),

                DatatypeElement({
                    name: "lock",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x01"
                }),

                DatatypeElement({
                    name: "unlock",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x02"
                }),

                DatatypeElement({
                    name: "unlock",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x02"
                }),

                DatatypeElement({
                    name: "lockInvalidPinOrId",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x03"
                }),

                DatatypeElement({
                    name: "lockInvalidPinOrId",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x03"
                }),

                DatatypeElement({
                    name: "lockInvalidSchedule",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x04"
                }),

                DatatypeElement({
                    name: "lockInvalidSchedule",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x04"
                }),

                DatatypeElement({
                    name: "unlockInvalidPinOrId",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x05"
                }),

                DatatypeElement({
                    name: "unlockInvalidPinOrId",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x05"
                }),

                DatatypeElement({
                    name: "unlockInvalidSchedule",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x06"
                }),

                DatatypeElement({
                    name: "unlockInvalidSchedule",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x06"
                }),

                DatatypeElement({
                    name: "oneTouchLock",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x07"
                }),

                DatatypeElement({
                    name: "oneTouchLock",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x07"
                }),

                DatatypeElement({
                    name: "keyLock",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x08"
                }),

                DatatypeElement({
                    name: "keyLock",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x08"
                }),

                DatatypeElement({
                    name: "keyUnlock",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x09"
                }),

                DatatypeElement({
                    name: "keyUnlock",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x09"
                }),

                DatatypeElement({
                    name: "autoLock",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x0A"
                }),

                DatatypeElement({
                    name: "autoLock",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x0A"
                }),

                DatatypeElement({
                    name: "scheduleLock",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x0B"
                }),

                DatatypeElement({
                    name: "scheduleLock",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x0B"
                }),

                DatatypeElement({
                    name: "scheduleUnlock",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x0C"
                }),

                DatatypeElement({
                    name: "scheduleUnlock",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x0C"
                }),

                DatatypeElement({
                    name: "manualLock",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x0D"
                }),

                DatatypeElement({
                    name: "manualLock",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x0D"
                }),

                DatatypeElement({
                    name: "manualUnlock",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x0E"
                }),

                DatatypeElement({
                    name: "manualUnlock",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x0E"
                })
            ]
        }),

        DatatypeElement({
            name: "DoorLockProgrammingEventCode", base: "enum8",
            access: { rw: "R" }, conformance: [ "M" ],
            children: [
                DatatypeElement({
                    name: "unknownOrMfgSpecific",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x00"
                }),

                DatatypeElement({
                    name: "unknownOrMfgSpecific",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x00"
                }),

                DatatypeElement({
                    name: "masterCodeChanged",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x01"
                }),

                DatatypeElement({
                    name: "masterCodeChanged",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x01"
                }),

                DatatypeElement({
                    name: "pinAdded",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x02"
                }),

                DatatypeElement({
                    name: "pinAdded",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x02"
                }),

                DatatypeElement({
                    name: "pinDeleted",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x03"
                }),

                DatatypeElement({
                    name: "pinDeleted",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x03"
                }),

                DatatypeElement({
                    name: "pinChanged",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x04"
                }),

                DatatypeElement({
                    name: "pinChanged",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x04"
                }),

                DatatypeElement({
                    name: "idAdded",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x05"
                }),

                DatatypeElement({
                    name: "idAdded",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x05"
                }),

                DatatypeElement({
                    name: "idDeleted",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x06"
                }),

                DatatypeElement({
                    name: "idDeleted",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x06"
                })
            ]
        }),

        DatatypeElement({
            name: "DoorLockUserStatus", base: "enum8",
            access: { rw: "R" }, conformance: [ "M" ],
            children: [
                DatatypeElement({
                    name: "available",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x00"
                }),

                DatatypeElement({
                    name: "available",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x00"
                }),

                DatatypeElement({
                    name: "occupiedEnabled",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x01"
                }),

                DatatypeElement({
                    name: "occupiedEnabled",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x01"
                }),

                DatatypeElement({
                    name: "occupiedDisabled",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x03"
                }),

                DatatypeElement({
                    name: "occupiedDisabled",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x03"
                }),

                DatatypeElement({
                    name: "notSupported",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0xFF"
                }),

                DatatypeElement({
                    name: "notSupported",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0xFF"
                })
            ]
        }),

        DatatypeElement({
            name: "DoorLockUserType", base: "enum8",
            access: { rw: "R" }, conformance: [ "M" ],
            children: [
                DatatypeElement({
                    name: "unrestricted",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x00"
                }),

                DatatypeElement({
                    name: "unrestricted",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x00"
                }),

                DatatypeElement({
                    name: "yearDayScheduleUser",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x01"
                }),

                DatatypeElement({
                    name: "yearDayScheduleUser",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x01"
                }),

                DatatypeElement({
                    name: "weekDayScheduleUser",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x02"
                }),

                DatatypeElement({
                    name: "weekDayScheduleUser",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x02"
                }),

                DatatypeElement({
                    name: "masterUser",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x03"
                }),

                DatatypeElement({
                    name: "masterUser",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x03"
                }),

                DatatypeElement({
                    name: "nonAccessUser",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x04"
                }),

                DatatypeElement({
                    name: "nonAccessUser",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x04"
                }),

                DatatypeElement({
                    name: "notSupported",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0xFF"
                }),

                DatatypeElement({
                    name: "notSupported",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0xFF"
                })
            ]
        }),

        DatatypeElement({
            name: "DoorLockDayOfWeek", base: "map8",
            access: { rw: "R" }, conformance: [ "M" ],
            children: [
                DatatypeElement({
                    name: "sunday",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x01"
                }),

                DatatypeElement({
                    name: "sunday",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x01"
                }),

                DatatypeElement({
                    name: "monday",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x02"
                }),

                DatatypeElement({
                    name: "monday",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x02"
                }),

                DatatypeElement({
                    name: "tuesday",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x04"
                }),

                DatatypeElement({
                    name: "tuesday",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x04"
                }),

                DatatypeElement({
                    name: "wednesday",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x08"
                }),

                DatatypeElement({
                    name: "wednesday",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x08"
                }),

                DatatypeElement({
                    name: "thursday",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x10"
                }),

                DatatypeElement({
                    name: "thursday",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x10"
                }),

                DatatypeElement({
                    name: "friday",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x20"
                }),

                DatatypeElement({
                    name: "friday",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x20"
                }),

                DatatypeElement({
                    name: "saturday",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x40"
                }),

                DatatypeElement({
                    name: "saturday",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x40"
                })
            ]
        })
    ]
}));
