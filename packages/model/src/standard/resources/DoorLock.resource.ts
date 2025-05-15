/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { DoorLock } from "#index.js";

DoorLock.patch({
    details: "The door lock cluster provides an interface to a generic way to secure a door. The physical object " +
        "that provides the locking functionality is abstracted from the cluster. The cluster has a small list " +
        "of mandatory attributes and functions and a list of optional features." +
        "\n" +
        "Figure 16. Typical Usage of the Door Lock Cluster",
    xref: { document: "cluster", section: "5.2" },

    children: [
        undefined,

        {
            children: [
                { description: "PinCredential" },
                { description: "RfidCredential" },
                { description: "FingerCredentials" },
                { description: "WeekDayAccessSchedules" },
                { description: "DoorPositionSensor" },
                { description: "FaceCredentials" },
                { description: "CredentialOverTheAirAccess" },
                { description: "User" },
                { description: "YearDayAccessSchedules" },
                { description: "HolidaySchedules" },
                { description: "Unbolting" },
                { description: "AliroProvisioning" },
                { description: "AliroBleuwb" }
            ]
        },

        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,

        {
            children: [
                { description: "Schedule is applied on Sunday" },
                { description: "Schedule is applied on Monday" },
                { description: "Schedule is applied on Tuesday" },
                { description: "Schedule is applied on Wednesday" },
                { description: "Schedule is applied on Thursday" },
                { description: "Schedule is applied on Friday" },
                { description: "Schedule is applied on Saturday" }
            ]
        },

        {
            children: [
                { description: "Only one credential is required for lock operation" },
                { description: "Any two credentials are required for lock operation" },
                { description: "Any three credentials are required for lock operation" }
            ]
        },

        {
            description: "For the OperatingModesBitmap, a bit SET indicates that the operating mode IS NOT supported. A bit CLEAR indicates that the operating mode IS supported. This is the inverse of most bitmaps in this specification, and it is RECOMMENDED that clients carefully take this into consideration.",

            children: [
                { description: "Normal operation mode is NOT supported" },
                { description: "Vacation operation mode is NOT supported" },
                { description: "Privacy operation mode is NOT supported" },
                { description: "No remote lock and unlock operation mode is NOT supported" },
                { description: "Passage operation mode is NOT supported" },
                { description: "This needs always be set because this bitmap is inverse.!" }
            ]
        },

        {
            children: [
                { description: "The state of local programming functionality" },
                { description: "The state of the keypad interface" },
                { description: "The state of the remote interface" },
                { description: "Sound volume is set to Silent value" },
                { description: "Auto relock time it set to 0" },
                { description: "LEDs is disabled" }
            ]
        },

        {
            children: [
                { description: "The state of the ability to add users, credentials or schedules on the device" },
                { description: "The state of the ability to modify users, credentials or schedules on the device" },
                { description: "The state of the ability to clear users, credentials or schedules on the device" },
                { description: "The state of the ability to adjust settings on the device" }
            ]
        },

        {
            children: [
                { description: "Locking Mechanism Jammed" },
                { description: "Lock Reset to Factory Defaults" },
                { description: "RF Module Power Cycled" },
                { description: "Tamper Alarm - wrong code entry limit" },
                { description: "Tamper Alarm - front escutcheon removed from main" },
                { description: "Forced Door Open under Door Locked Condition" }
            ]
        },

        {
            children: [
                { description: "Locking Mechanism Jammed" },
                { description: "Lock Reset to Factory Defaults" },
                { description: "Lock Radio Power Cycled" },
                { description: "Tamper Alarm - wrong code entry limit" },
                { description: "Tamper Alarm - front escutcheon removed from main" },
                { description: "Forced Door Open under Door Locked Condition" },
                { description: "Door ajar" },
                { description: "Force User SOS alarm" }
            ]
        },

        {
            children: [
                { description: "Only one credential is required for lock operation" },
                { description: "Any two credentials are required for lock operation" },
                { description: "Any three credentials are required for lock operation" }
            ]
        },

        {
            children: [
                { description: "Programming PIN code credential type" },
                { description: "PIN code credential type" },
                { description: "RFID identifier credential type" },
                { description: "Fingerprint identifier credential type" },
                { description: "Finger vein identifier credential type" },
                { description: "Face identifier credential type" },
                { description: "A Credential Issuer public key as defined in [Aliro]" },
                {
                    description: "An Endpoint public key as defined in [Aliro] which can be evicted if space is needed for another endpoint key"
                },
                {
                    description: "An Endpoint public key as defined in [Aliro] which cannot be evicted if space is needed for another endpoint key"
                }
            ]
        },

        {
            children: [
                { description: "Data is being added or was added" },
                { description: "Data is being cleared or was cleared" },
                { description: "Data is being modified or was modified" }
            ]
        },

        {
            children: [
                { description: "Door state is open" },
                { description: "Door state is closed" },
                { description: "Door state is jammed" },
                { description: "Door state is currently forced open" },
                { description: "Door state is invalid for unspecified reason" },
                { description: "Door state is ajar" }
            ]
        },

        {
            children: [
                { description: "Unspecified or manufacturer specific lock user data added, cleared, or modified." },
                { description: "Lock programming PIN code was added, cleared, or modified." },
                { description: "Lock user index was added, cleared, or modified." },
                { description: "Lock user week day schedule was added, cleared, or modified." },
                { description: "Lock user year day schedule was added, cleared, or modified." },
                { description: "Lock holiday schedule was added, cleared, or modified." },
                { description: "Lock user PIN code was added, cleared, or modified." },
                { description: "Lock user RFID code was added, cleared, or modified." },
                { description: "Lock user fingerprint was added, cleared, or modified." },
                { description: "Lock user finger-vein information was added, cleared, or modified." },
                { description: "Lock user face information was added, cleared, or modified." },
                { description: "An Aliro credential issuer key credential was added, cleared, or modified." },
                {
                    description: "An Aliro endpoint key credential which can be evicted credential was added, cleared, or modified."
                },
                {
                    description: "An Aliro endpoint key credential which cannot be evicted was added, cleared, or modified."
                }
            ]
        },

        {
            children: [
                { description: "Lock operation" },
                { description: "Unlock operation" },
                { description: "Triggered by keypad entry for user with User Type set to Non Access User" },
                { description: "Triggered by using a user with UserType set to Forced User" },
                { description: "Unlatch operation" }
            ]
        },

        {
            children: [
                { description: "Lock/unlock error caused by unknown or unspecified source" },
                { description: "Lock/unlock error caused by invalid PIN, RFID, fingerprint or other credential" },
                { description: "Lock/unlock error caused by disabled USER or credential" },
                { description: "Lock/unlock error caused by schedule restriction" },
                { description: "Lock/unlock error caused by insufficient battery power left to safely actuate the lock" }
            ]
        },

        undefined,

        {
            children: [
                { description: "Lock/unlock operation came from unspecified source" },
                { description: "Lock/unlock operation came from manual operation (key, thumbturn, handle, etc)." },
                { description: "Lock/unlock operation came from proprietary remote source (e.g. vendor app/cloud)" },
                { description: "Lock/unlock operation came from keypad" },
                { description: "Lock/unlock operation came from lock automatically (e.g. relock timer)" },
                { description: "Lock/unlock operation came from lock button (e.g. one touch or button)" },
                { description: "Lock/unlock operation came from lock due to a schedule" },
                { description: "Lock/unlock operation came from remote node" },
                { description: "Lock/unlock operation came from RFID card" },
                { description: "Lock/unlock operation came from biometric source (e.g. face, fingerprint/fingervein)" },
                {
                    description: "Lock/unlock operation came from an interaction defined in [Aliro], or user change operation was a step-up credential provisioning as defined in [Aliro]"
                }
            ]
        },

        {
            children: [
                { description: "The user ID is available" },
                { description: "The user ID is occupied and enabled" },
                { description: "The user ID is occupied and disabled" }
            ]
        },

        {
            children: [
                { description: "The user ID type is unrestricted" },
                { description: "The user ID type is schedule" },
                { description: "The user ID type is schedule" },
                { description: "The user ID type is programming" },
                { description: "The user ID type is non access" },
                { description: "The user ID type is forced" },
                { description: "The user ID type is disposable" },
                { description: "The user ID type is expiring" },
                { description: "The user ID type is schedule restricted" },
                { description: "The user ID type is remote only" }
            ]
        },

        {
            children: [
                { description: "Lock state is not fully locked" },
                { description: "Lock state is fully locked" },
                { description: "Lock state is fully unlocked" },
                { description: "Lock state is fully unlocked and the latch is pulled" }
            ]
        },

        {
            children: [
                { description: "Physical lock type is dead bolt" },
                { description: "Physical lock type is magnetic" },
                { description: "Physical lock type is other" },
                { description: "Physical lock type is mortise" },
                { description: "Physical lock type is rim" },
                { description: "Physical lock type is latch bolt" },
                { description: "Physical lock type is cylindrical lock" },
                { description: "Physical lock type is tubular lock" },
                { description: "Physical lock type is interconnected lock" },
                { description: "Physical lock type is dead latch" },
                { description: "Physical lock type is door furniture" },
                { description: "Physical lock type is euro cylinder" }
            ]
        },

        {
            children: [
                { description: "Never use LED for signalization" },
                { description: "Use LED signalization except for access allowed events" },
                { description: "Use LED signalization for all events" }
            ]
        },

        {
            children: [
                { description: "Silent Mode" },
                { description: "Low Volume" },
                { description: "High Volume" },
                { description: "Medium Volume" }
            ]
        },

        {
            children: [
                { description: "Event type is operation" },
                { description: "Event type is programming" },
                { description: "Event type is alarm" }
            ]
        },

        undefined,

        {
            children: [
                { description: "Entry would cause a duplicate credential/ID." },
                { description: "Entry would replace an occupied slot." }
            ]
        }
    ]
});
