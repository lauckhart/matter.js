/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Matter } from "../Matter.js";
import { ClusterElement, AttributeElement, DatatypeElement, EventElement, CommandElement } from "../../index.js";

Matter.children.push(ClusterElement({
    id: 0x0101, name: "DoorLock",
    classification: "application",
    children: [
        AttributeElement({
            id: 0xfffd, name: "ClusterRevision", base: "uint16",
            access: "R V", conformance: "M", constraint: { min: 1 }, default: 6, quality: "F"
        }),

        AttributeElement({
            id: 0xfffc, name: "FeatureMap", base: "map32",
            access: "R V", conformance: "M", default: 0, quality: "F",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "PIN",
                    description: "Lock supports PIN credentials (via keypad, or over- the-air)",
                    xref: { section: "5.2.2", document: "cluster", version: "1.1" }
                }),

                DatatypeElement({
                    id: 0x0001, name: "RID",
                    description: "Lock supports RFID credentials",
                    xref: { section: "5.2.2", document: "cluster", version: "1.1" }
                }),

                DatatypeElement({
                    id: 0x0002, name: "FGP",
                    description: "Lock supports finger related credentials (fingerprint, finger vein)",
                    xref: { section: "5.2.2", document: "cluster", version: "1.1" }
                }),

                DatatypeElement({
                    id: 0x0003, name: "LOG",
                    description: "Lock supports local/on-lock logging when Events are not supported",
                    xref: { section: "5.2.2", document: "cluster", version: "1.1" }
                }),

                DatatypeElement({
                    id: 0x0004, name: "WDSCH",
                    description: "Lock supports week day user access schedules",
                    xref: { section: "5.2.2", document: "cluster", version: "1.1" }
                }),

                DatatypeElement({
                    id: 0x0005, name: "DPS",
                    description: "Lock supports a door position sensor that indicates door’s state",
                    xref: { section: "5.2.2", document: "cluster", version: "1.1" }
                }),

                DatatypeElement({
                    id: 0x0006, name: "FACE",
                    description: "Lock supports face related credentials (face, iris, retina)",
                    xref: { section: "5.2.2", document: "cluster", version: "1.1" }
                }),

                DatatypeElement({
                    id: 0x0007, name: "COTA",
                    description: "PIN codes over- the-air supported for lock/unlock operations",
                    xref: { section: "5.2.2", document: "cluster", version: "1.1" }
                }),

                DatatypeElement({
                    id: 0x0008, name: "USR",
                    description: "Lock supports the user commands and database",
                    xref: { section: "5.2.2", document: "cluster", version: "1.1" }
                }),

                DatatypeElement({
                    id: 0x0009, name: "NOT",
                    description: "Operation and Programming Notifications",
                    xref: { section: "5.2.2", document: "cluster", version: "1.1" }
                }),

                DatatypeElement({
                    id: 0x000a, name: "YDSCH",
                    description: "Lock supports year day user access schedules",
                    xref: { section: "5.2.2", document: "cluster", version: "1.1" }
                }),

                DatatypeElement({
                    id: 0x000b, name: "HDSCH",
                    description: "Lock supports holiday schedules",
                    xref: { section: "5.2.2", document: "cluster", version: "1.1" }
                })
            ]
        }),

        AttributeElement({
            id: 0x0000, name: "LockState", base: "enum8",
            access: "R V", conformance: "M", constraint: "desc", default: 0, quality: "X P S",
            details: "This attribute has the following possible values:",
            xref: { section: "5.2.3.1", document: "cluster", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0001, name: "LockType", base: "enum8",
            access: "R V", conformance: "M", constraint: "desc", default: 0,
            details: "The LockType attribute is indicated by an enumeration:",
            xref: { section: "5.2.3.2", document: "cluster", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0002, name: "ActuatorEnabled", base: "bool",
            access: "R V", conformance: "M", default: {},
            details: "The ActuatorEnabled attribute indicates if the lock is currently able to (Enabled) or not able to (Disabled) process remote Lock, Unlock, or Unlock with Timeout commands.",
            xref: { section: "5.2.3.3", document: "cluster", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0003, name: "DoorState", base: "enum8",
            access: "R V", conformance: "DPS", constraint: "desc", default: 0, quality: "X P",
            details: "The current door state as defined in DoorStateEnum.",
            xref: { section: "5.2.3.4", document: "cluster", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0004, name: "DoorOpenEvents", base: "uint32",
            access: "RW VM", conformance: "[DPS]", default: 0,
            details: "This attribute holds the number of door open events that have occurred since it was last zeroed.",
            xref: { section: "5.2.3.5", document: "cluster", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0005, name: "DoorClosedEvents", base: "uint32",
            access: "RW VM", conformance: "[DPS]", default: 0,
            details: "This attribute holds the number of door closed events that have occurred since it was last zeroed.",
            xref: { section: "5.2.3.6", document: "cluster", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0006, name: "OpenPeriod", base: "uint16",
            access: "RW VM", conformance: "[DPS]", default: 0,
            details: "This attribute holds the number of minutes the door has been open since the last time it transitioned from closed to open.",
            xref: { section: "5.2.3.7", document: "cluster", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0010, name: "NumberOfLogRecordsSupported", base: "uint16",
            access: "R V", conformance: "LOG", default: 0, quality: "F",
            details: "The number of available log records.",
            xref: { section: "5.2.3.8", document: "cluster", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0011, name: "NumberOfTotalUsersSupported", base: "uint16",
            access: "R V", conformance: "USR", default: 0, quality: "F",
            details: "Number of total users supported by the lock.",
            xref: { section: "5.2.3.9", document: "cluster", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0012, name: "NumberOfPinUsersSupported", base: "uint16",
            access: "R V", conformance: "PIN", default: 0, quality: "F",
            details: "The number of PIN users supported.",
            xref: { section: "5.2.3.10", document: "cluster", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0013, name: "NumberOfRfidUsersSupported", base: "uint16",
            access: "R V", conformance: "RID", default: 0, quality: "F",
            details: "The number of RFID users supported.",
            xref: { section: "5.2.3.11", document: "cluster", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0014, name: "NumberOfWeekDaySchedulesSupportedPerUser", base: "uint8",
            access: "R V", conformance: "WDSCH", default: 0, quality: "F",
            details: "The number of configurable week day schedule supported per user.",
            xref: { section: "5.2.3.12", document: "cluster", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0015, name: "NumberOfYearDaySchedulesSupportedPerUser", base: "uint8",
            access: "R V", conformance: "YDSCH", default: 0, quality: "F",
            details: "The number of configurable year day schedule supported per user.",
            xref: { section: "5.2.3.13", document: "cluster", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0016, name: "NumberOfHolidaySchedulesSupported", base: "uint8",
            access: "R V", conformance: "HDSCH", default: 0, quality: "F",
            details: "The number of holiday schedules supported for the entire door lock device.",
            xref: { section: "5.2.3.14", document: "cluster", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0017, name: "MaxPinCodeLength", base: "uint8",
            access: "R V", conformance: "PIN", default: NaN, quality: "F",
            details: "An 8 bit value indicates the maximum length in bytes of a PIN Code on this device.",
            xref: { section: "5.2.3.15", document: "cluster", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0018, name: "MinPinCodeLength", base: "uint8",
            access: "R V", conformance: "PIN", default: NaN, quality: "F",
            details: "An 8 bit value indicates the minimum length in bytes of a PIN Code on this device.",
            xref: { section: "5.2.3.16", document: "cluster", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0019, name: "MaxRfidCodeLength", base: "uint8",
            access: "R V", conformance: "RID", default: NaN, quality: "F",
            details: "An 8 bit value indicates the maximum length in bytes of a RFID Code on this device. The value depends on the RFID code range specified by the manufacturer, if media anti-collision identifiers (UID) are used as RFID code, a value of 20 (equals 10 Byte ISO 14443A UID) is recommended.",
            xref: { section: "5.2.3.17", document: "cluster", version: "1.1" }
        }),

        AttributeElement({
            id: 0x001a, name: "MinRfidCodeLength", base: "uint8",
            access: "R V", conformance: "RID", default: NaN, quality: "F",
            details: "An 8 bit value indicates the minimum length in bytes of a RFID Code on this device. The value depends on the RFID code range specified by the manufacturer, if media anti-collision identifiers (UID) are used as RFID code, a value of 8 (equals 4 Byte ISO 14443A UID) is recommended.",
            xref: { section: "5.2.3.18", document: "cluster", version: "1.1" }
        }),

        AttributeElement({
            id: 0x001b, name: "CredentialRulesSupport", base: "map8",
            access: "R V", conformance: "USR", default: 1, quality: "F",
            details: "This bitmap contains a bit for every value of CredentialRuleEnum supported on this device.",
            xref: { section: "5.2.3.19", document: "cluster", version: "1.1" }
        }),

        AttributeElement({
            id: 0x001c, name: "NumberOfCredentialsSupportedPerUser", base: "uint8",
            access: "R V", conformance: "USR", default: 0, quality: "F",
            details: "The number of credentials that could be assigned for each user.",
            xref: { section: "5.2.3.20", document: "cluster", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0020, name: "EnableLogging", base: "bool",
            access: "R[W] VA", conformance: "LOG", default: {}, quality: "P",
            details: "Enable/disable event logging. When event logging is enabled, all event messages are stored on the lock for retrieval. Logging events can be but not limited to Tamper Alarm, Lock, Unlock, AutoRelock, User Code Added, User Code Cleared, Schedule Added, and Schedule Cleared. For a full detail of all the possible alarms and events, please refer to the full list in the Alarm and Event Masks Attribute Set.",
            xref: { section: "5.2.3.21", document: "cluster", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0021, name: "Language", base: "string",
            access: "R[W] VM", conformance: "O", constraint: "max 3", default: "MS", quality: "P",
            details: "Modifies the language for the on-screen or audible user interface using a 2-byte language code from ISO-639-1.",
            xref: { section: "5.2.3.22", document: "cluster", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0022, name: "LedSettings", base: "uint8",
            access: "R[W] VM", conformance: "O", constraint: "desc", default: 0, quality: "P",
            details: "The settings for the LED support three different modes, shown below:",
            xref: { section: "5.2.3.25", document: "cluster", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0023, name: "AutoRelockTime", base: "uint32",
            access: "R[W] VM", conformance: "O", default: NaN, quality: "P",
            details: "The number of seconds to wait after unlocking a lock before it automatically locks again. 0=disabled. If set, unlock operations from any source will be timed. For one time unlock with timeout use the specific command.",
            xref: { section: "5.2.3.26", document: "cluster", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0024, name: "SoundVolume", base: "uint8",
            access: "R[W] VM", conformance: "O", constraint: "desc", default: 0, quality: "P",
            details: "The sound volume on a door lock has four possible settings: silent, low, high and medium volumes, shown below:",
            xref: { section: "5.2.3.27", document: "cluster", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0025, name: "OperatingMode", base: "enum8",
            access: "R[W] VM", conformance: "M", constraint: "desc", default: 0, quality: "P",
            details: "The current operating mode of the lock (see OperatingModeEnum).",
            xref: { section: "5.2.3.23", document: "cluster", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0026, name: "SupportedOperatingModes", base: "map16",
            access: "R V", conformance: "M", default: 65526, quality: "F",
            details: "This bitmap contains all operating bits of the Operating Mode Attribute supported by the lock. All operating modes NOT supported by a lock SHALL be set to one. The value of the OperatingMode enumeration defines the related bit to be set, as shown below:",
            xref: { section: "5.2.3.24", document: "cluster", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0027, name: "DefaultConfigurationRegister", base: "map16",
            access: "R V", conformance: "O", default: 0, quality: "P",
            details: "This attribute represents the default configurations as they are physically set on the device (example: hardware dip switch setting, etc…) and represents the default setting for some of the attributes within this cluster (for example: LED, Auto Lock, Sound Volume, and Operating Mode attributes).",
            xref: { section: "5.2.3.28", document: "cluster", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0028, name: "EnableLocalProgramming", base: "bool",
            access: "R[W] VA", conformance: "O", default: {}, quality: "P",
            details: "Enable/disable local programming on the door lock of certain features (see LocalProgrammingFeatures attribute). If this value is set to TRUE then local programming is enabled on the door lock for all features. If it is set to FALSE then local programming is disabled on the door lock for those features whose bit is set to 0 in the LocalProgrammingFeatures attribute. Local programming SHALL be enabled by default.",
            xref: { section: "5.2.3.29", document: "cluster", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0029, name: "EnableOneTouchLocking", base: "bool",
            access: "RW VM", conformance: "O", default: {}, quality: "P",
            details: "Enable/disable the ability to lock the door lock with a single touch on the door lock.",
            xref: { section: "5.2.3.30", document: "cluster", version: "1.1" }
        }),

        AttributeElement({
            id: 0x002a, name: "EnableInsideStatusLed", base: "bool",
            access: "RW VM", conformance: "O", default: {}, quality: "P",
            details: "Enable/disable an inside LED that allows the user to see at a glance if the door is locked.",
            xref: { section: "5.2.3.31", document: "cluster", version: "1.1" }
        }),

        AttributeElement({
            id: 0x002b, name: "EnablePrivacyModeButton", base: "bool",
            access: "RW VM", conformance: "O", default: {}, quality: "P",
            details: "Enable/disable a button inside the door that is used to put the lock into privacy mode. When the lock is in privacy mode it cannot be manipulated from the outside.",
            xref: { section: "5.2.3.32", document: "cluster", version: "1.1" }
        }),

        AttributeElement({
            id: 0x002c, name: "LocalProgrammingFeatures", base: "map8",
            access: "R[W] VA", conformance: "O", default: 0, quality: "P",
            details: "The local programming features that will be disabled when EnableLocalProgramming attribute is set to False. If a door lock doesn’t support disabling one aspect of local programming it SHALL return CONSTRAINT_ERROR during a write operation of this attribute. If the EnableLocalProgramming attribute is set to True then all local programming features SHALL be enabled regardless of the bits set to 0 in this attribute.",
            xref: { section: "5.2.3.33", document: "cluster", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0030, name: "WrongCodeEntryLimit", base: "uint8",
            access: "R[W] VA", conformance: "PIN | RID", constraint: "1 to 255", default: NaN, quality: "P",
            details: "The number of incorrect Pin codes or RFID presentment attempts a user is allowed to enter before the lock will enter a lockout state. The value of this attribute is compared to all failing forms of credential presentation, including Pin codes used in an Unlock Command when RequirePINforRemoteOperation is set to true. Valid range is 1-255 incorrect attempts. The lockout state will be for the duration of UserCodeTemporaryDisableTime. If the attribute accepts writes and an attempt to write the value 0 is made, the device SHALL respond with CONSTRAINT_ERROR.",
            xref: { section: "5.2.3.34", document: "cluster", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0031, name: "UserCodeTemporaryDisableTime", base: "uint8",
            access: "R[W] VA", conformance: "PIN | RID", constraint: "1 to 255", default: NaN, quality: "P",
            details: "The number of seconds that the lock shuts down following wrong code entry. Valid range is 1-255 seconds. Device can shut down to lock user out for specified amount of time. (Makes it difficult to try and guess a PIN for the device.) If the attribute accepts writes and an attempt to write the attribute to 0 is made, the device SHALL respond with CONSTRAINT_ERROR.",
            xref: { section: "5.2.3.35", document: "cluster", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0032, name: "SendPinOverTheAir", base: "bool",
            access: "R[W] VA", conformance: "[PIN]", default: {}, quality: "P",
            details: "Boolean set to True if it is ok for the door lock server to send PINs over the air. This attribute determines the behavior of the server’s TX operation. If it is false, then it is not ok for the device to send PIN in any messages over the air.",
            xref: { section: "5.2.3.36", document: "cluster", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0033, name: "RequirePiNforRemoteOperation", base: "bool",
            access: "R[W] VA", conformance: "COTA & PIN", default: {}, quality: "P",
            details: "Boolean set to True if the door lock server requires that an optional PINs be included in the payload of remote lock operation events like Lock, Unlock, Unlock with Timeout and Toggle in order to function.",
            xref: { section: "5.2.3.37", document: "cluster", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0035, name: "ExpiringUserTimeout", base: "uint16",
            access: "R[W] VA", conformance: "[USR]", constraint: "1 to 2880", default: NaN, quality: "P",
            details: "Number of minutes a PIN, RFID, Fingerprint, or other credential associated with a user of type ExpiringUser SHALL remain valid after its first use before expiring. When the credential expires the UserStatus for the corresponding user record SHALL be set to OccupiedDisabled.",
            xref: { section: "5.2.3.38", document: "cluster", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0040, name: "AlarmMask", base: "map16",
            access: "RW VA", conformance: "O", default: 65535, quality: "P",
            details: "This attribute is only supported if the Alarms cluster is on the same endpoint. The alarm mask is used to turn on/off alarms for particular functions. Alarms for an alarm group are enabled if the associated alarm mask bit is set. Each bit represents a group of alarms. Entire alarm groups can be turned on or off by setting or clearing the associated bit in the alarm mask.",
            xref: { section: "5.2.3.39", document: "cluster", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0041, name: "KeypadOperationEventMask", base: "map16",
            access: "RW VA", conformance: "[NOT & PIN]", default: 65535, quality: "P",
            details: "Event mask used to turn on and off the transmission of keypad operation events. This mask DOES NOT apply to the storing of events in the event log. This mask only applies to the Operation Event Notification Command.",
            xref: { section: "5.2.3.40", document: "cluster", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0042, name: "RemoteOperationEventMask", base: "map16",
            access: "RW VA", conformance: "[NOT]", default: 65535, quality: "P",
            details: "Event mask used to turn on and off the transmission of remote operation events. This mask DOES NOT apply to the storing of events in the event log. This mask only applies to the Operation Event",
            xref: { section: "5.2.3.41", document: "cluster", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0043, name: "ManualOperationEventMask", base: "map16",
            access: "RW VA", conformance: "[NOT]", default: 65535, quality: "P",
            details: "Event mask used to turn on and off manual operation events. This mask DOES NOT apply to the storing of events in the event log. This mask only applies to the Operation Event Notification Command.",
            xref: { section: "5.2.3.42", document: "cluster", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0044, name: "RfidOperationEventMask", base: "map16",
            access: "RW VA", conformance: "[NOT & RID]", default: 65535, quality: "P",
            details: "Event mask used to turn on and off RFID operation events. This mask DOES NOT apply to the storing of events in the event log. This mask only applies to the Operation Event Notification Command.",
            xref: { section: "5.2.3.43", document: "cluster", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0045, name: "KeypadProgrammingEventMask", base: "map16",
            access: "RW VA", conformance: "[NOT & PIN]", default: 65535, quality: "P",
            details: "Event mask used to turn on and off keypad programming events. This mask DOES NOT apply to the storing of events in the event log. This mask only applies to the Programming Event Notification Command.",
            xref: { section: "5.2.3.44", document: "cluster", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0046, name: "RemoteProgrammingEventMask", base: "map16",
            access: "RW VA", conformance: "[NOT]", default: 65535, quality: "P",
            details: "Event mask used to turn on and off remote programming events. This mask DOES NOT apply to the storing of events in the event log. This mask only applies to the Programming Event Notification Command.",
            xref: { section: "5.2.3.45", document: "cluster", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0047, name: "RfidProgrammingEventMask", base: "map16",
            access: "RW VA", conformance: "[NOT & RID]", default: 65535, quality: "P",
            details: "Event mask used to turn on and off RFID programming events. This mask DOES NOT apply to the storing of events in the event log. This mask only applies to the Programming Event Notification Command.",
            xref: { section: "5.2.3.46", document: "cluster", version: "1.1" }
        }),

        EventElement({
            id: 0x0000, name: "DoorLockAlarm",
            access: "V", conformance: "M", priority: "critical",
            details: "The door lock cluster provides several alarms which can be sent when there is a critical state on the door lock. The alarms available for the door lock cluster are listed in the AlarmCodeEnum section below.",
            xref: { section: "5.2.5.1", document: "cluster", version: "1.1" }
        }),

        EventElement({
            id: 0x0001, name: "DoorStateChange",
            access: "V", conformance: "DPS", priority: "critical",
            details: "The door lock server sends out a DoorStateChange event when the door lock door state changes. The data of this event SHALL contain the following information:",
            xref: { section: "5.2.5.2", document: "cluster", version: "1.1" }
        }),

        EventElement({
            id: 0x0002, name: "LockOperation",
            access: "V", conformance: "M", priority: "critical",
            details: "The door lock server sends out a LockOperation event when the event is triggered by the various lock operation sources.",
            xref: { section: "5.2.5.3", document: "cluster", version: "1.1" }
        }),

        EventElement({
            id: 0x0003, name: "LockOperationError",
            access: "V", conformance: "M", priority: "critical",
            details: "The door lock server sends out a LockOperationError event when a lock operation fails for various reasons.",
            xref: { section: "5.2.5.4", document: "cluster", version: "1.1" }
        }),

        EventElement({
            id: 0x0004, name: "LockUserChange",
            access: "V", conformance: "USR", priority: "info",
            details: "The door lock server sends out a LockUserChange event when a lock user, schedule, or credential change has occurred.",
            xref: { section: "5.2.5.5", document: "cluster", version: "1.1" }
        }),

        CommandElement({
            id: 0x0000, name: "LockDoor",
            access: "T O", conformance: "M", direction: "request", response: "status",
            xref: { section: "5.2.4", document: "cluster", version: "1.1" }
        }),

        CommandElement({
            id: 0x0001, name: "UnlockDoor",
            access: "T O", conformance: "M", direction: "request", response: "status",
            xref: { section: "5.2.4", document: "cluster", version: "1.1" }
        }),

        CommandElement({
            id: 0x0002, name: "Toggle",
            access: "T O", conformance: "X", direction: "request", response: "status",
            xref: { section: "5.2.4", document: "cluster", version: "1.1" }
        }),

        CommandElement({
            id: 0x0003, name: "UnlockwithTimeout",
            access: "T O", conformance: "O", direction: "request", response: "status",
            xref: { section: "5.2.4", document: "cluster", version: "1.1" }
        }),

        CommandElement({
            id: 0x0004, name: "GetLogRecord",
            access: "M", conformance: "LOG", direction: "request", response: "GetLogRecordResponse",
            xref: { section: "5.2.4", document: "cluster", version: "1.1" }
        }),

        CommandElement({
            id: 0x0004, name: "GetLogRecordResponse",
            conformance: "LOG", direction: "response",
            xref: { section: "5.2.4", document: "cluster", version: "1.1" }
        }),

        CommandElement({
            id: 0x0005, name: "SetPinCode",
            access: "T A", conformance: "!USR & PIN", direction: "request", response: "status",
            xref: { section: "5.2.4", document: "cluster", version: "1.1" }
        }),

        CommandElement({
            id: 0x0006, name: "GetPinCode",
            access: "A", conformance: "!USR & PIN", direction: "request", response: "GetPinCodeResponse",
            xref: { section: "5.2.4", document: "cluster", version: "1.1" }
        }),

        CommandElement({
            id: 0x0006, name: "GetPinCodeResponse",
            conformance: "!USR & PIN", direction: "response",
            xref: { section: "5.2.4", document: "cluster", version: "1.1" }
        }),

        CommandElement({
            id: 0x0007, name: "ClearPinCode",
            access: "T A", conformance: "!USR & PIN", direction: "request", response: "status",
            xref: { section: "5.2.4", document: "cluster", version: "1.1" }
        }),

        CommandElement({
            id: 0x0008, name: "ClearAllPinCodes",
            access: "T A", conformance: "!USR & PIN", direction: "request", response: "status",
            xref: { section: "5.2.4", document: "cluster", version: "1.1" }
        }),

        CommandElement({
            id: 0x0009, name: "SetUserStatus",
            access: "A", conformance: "!USR & (PIN | RID | FGP)", direction: "request", response: "status",
            xref: { section: "5.2.4", document: "cluster", version: "1.1" }
        }),

        CommandElement({
            id: 0x000a, name: "GetUserStatus",
            access: "A", conformance: "!USR & (PIN | RID | FGP)", direction: "request", response: "GetUserStatusResponse",
            xref: { section: "5.2.4", document: "cluster", version: "1.1" }
        }),

        CommandElement({
            id: 0x000a, name: "GetUserStatusResponse",
            conformance: "!USR", direction: "response",
            xref: { section: "5.2.4", document: "cluster", version: "1.1" }
        }),

        CommandElement({
            id: 0x000b, name: "SetWeekDaySchedule",
            access: "A", conformance: "WDSCH", direction: "request", response: "status",
            xref: { section: "5.2.4", document: "cluster", version: "1.1" }
        }),

        CommandElement({
            id: 0x000c, name: "GetWeekDaySchedule",
            access: "A", conformance: "WDSCH", direction: "request", response: "GetWeekDayScheduleResponse",
            xref: { section: "5.2.4", document: "cluster", version: "1.1" }
        }),

        CommandElement({
            id: 0x000c, name: "GetWeekDayScheduleResponse",
            conformance: "WDSCH", direction: "response",
            xref: { section: "5.2.4", document: "cluster", version: "1.1" }
        }),

        CommandElement({
            id: 0x000d, name: "ClearWeekDaySchedule",
            access: "A", conformance: "WDSCH", direction: "request", response: "status",
            xref: { section: "5.2.4", document: "cluster", version: "1.1" }
        }),

        CommandElement({
            id: 0x000e, name: "SetYearDaySchedule",
            access: "A", conformance: "YDSCH", direction: "request", response: "status",
            xref: { section: "5.2.4", document: "cluster", version: "1.1" }
        }),

        CommandElement({
            id: 0x000f, name: "GetYearDaySchedule",
            access: "A", conformance: "YDSCH", direction: "request", response: "GetYearDayScheduleResponse",
            xref: { section: "5.2.4", document: "cluster", version: "1.1" }
        }),

        CommandElement({
            id: 0x000f, name: "GetYearDayScheduleResponse",
            conformance: "YDSCH", direction: "response",
            xref: { section: "5.2.4", document: "cluster", version: "1.1" }
        }),

        CommandElement({
            id: 0x0010, name: "ClearYearDaySchedule",
            access: "A", conformance: "YDSCH", direction: "request", response: "status",
            xref: { section: "5.2.4", document: "cluster", version: "1.1" }
        }),

        CommandElement({
            id: 0x0011, name: "SetHolidaySchedule",
            access: "A", conformance: "HDSCH", direction: "request", response: "status",
            xref: { section: "5.2.4", document: "cluster", version: "1.1" }
        }),

        CommandElement({
            id: 0x0012, name: "GetHolidaySchedule",
            access: "A", conformance: "HDSCH", direction: "request", response: "GetHolidayScheduleResponse",
            xref: { section: "5.2.4", document: "cluster", version: "1.1" }
        }),

        CommandElement({
            id: 0x0012, name: "GetHolidayScheduleResponse",
            conformance: "HDSCH", direction: "response",
            xref: { section: "5.2.4", document: "cluster", version: "1.1" }
        }),

        CommandElement({
            id: 0x0013, name: "ClearHolidaySchedule",
            access: "A", conformance: "HDSCH", direction: "request", response: "status",
            xref: { section: "5.2.4", document: "cluster", version: "1.1" }
        }),

        CommandElement({
            id: 0x0014, name: "SetUserType",
            access: "A", conformance: "!USR & (PIN | RID | FGP)", direction: "request", response: "status",
            xref: { section: "5.2.4", document: "cluster", version: "1.1" }
        }),

        CommandElement({
            id: 0x0015, name: "GetUserType",
            access: "A", conformance: "!USR & (PIN | RID | FGP)", direction: "request", response: "GetUserTypeResponse",
            xref: { section: "5.2.4", document: "cluster", version: "1.1" }
        }),

        CommandElement({
            id: 0x0015, name: "GetUserTypeResponse",
            conformance: "!USR", direction: "response",
            xref: { section: "5.2.4", document: "cluster", version: "1.1" }
        }),

        CommandElement({
            id: 0x0016, name: "SetRfidCode",
            access: "T A", conformance: "!USR & RID", direction: "request", response: "status",
            xref: { section: "5.2.4", document: "cluster", version: "1.1" }
        }),

        CommandElement({
            id: 0x0017, name: "GetRfidCode",
            access: "A", conformance: "!USR & RID", direction: "request", response: "GetRfidCodeResponse",
            xref: { section: "5.2.4", document: "cluster", version: "1.1" }
        }),

        CommandElement({
            id: 0x0017, name: "GetRfidCodeResponse",
            conformance: "!USR & RID", direction: "response",
            xref: { section: "5.2.4", document: "cluster", version: "1.1" }
        }),

        CommandElement({
            id: 0x0018, name: "ClearRfidCode",
            access: "T A", conformance: "!USR & RID", direction: "request", response: "status",
            xref: { section: "5.2.4", document: "cluster", version: "1.1" }
        }),

        CommandElement({
            id: 0x0019, name: "ClearAllRfidCodes",
            access: "T A", conformance: "!USR & RID", direction: "request", response: "status",
            xref: { section: "5.2.4", document: "cluster", version: "1.1" }
        }),

        CommandElement({
            id: 0x001a, name: "SetUser",
            access: "T A", conformance: "USR", direction: "request", response: "status",
            xref: { section: "5.2.4", document: "cluster", version: "1.1" }
        }),

        CommandElement({
            id: 0x001b, name: "GetUser",
            access: "A", conformance: "USR", direction: "request", response: "GetUserResponse",
            xref: { section: "5.2.4", document: "cluster", version: "1.1" }
        }),

        CommandElement({
            id: 0x001c, name: "GetUserResponse",
            conformance: "USR", direction: "response",
            xref: { section: "5.2.4", document: "cluster", version: "1.1" }
        }),

        CommandElement({
            id: 0x001d, name: "ClearUser",
            access: "T A", conformance: "USR", direction: "request", response: "status",
            xref: { section: "5.2.4", document: "cluster", version: "1.1" }
        }),

        CommandElement({
            id: 0x0020, name: "OperatingEventNotification",
            conformance: "[NOT]", direction: "response",
            xref: { section: "5.2.4", document: "cluster", version: "1.1" }
        }),

        CommandElement({
            id: 0x0021, name: "ProgrammingEventNotification",
            conformance: "[NOT]", direction: "response",
            xref: { section: "5.2.4", document: "cluster", version: "1.1" }
        }),

        CommandElement({
            id: 0x0022, name: "SetCredential",
            access: "T A", conformance: "USR", direction: "request", response: "SetCredentialResponse",
            xref: { section: "5.2.4", document: "cluster", version: "1.1" }
        }),

        CommandElement({
            id: 0x0023, name: "SetCredentialResponse",
            conformance: "USR", direction: "response",
            xref: { section: "5.2.4", document: "cluster", version: "1.1" }
        }),

        CommandElement({
            id: 0x0024, name: "GetCredentialStatus",
            access: "A", conformance: "USR", direction: "request", response: "GetCredentialStatusResponse",
            xref: { section: "5.2.4", document: "cluster", version: "1.1" }
        }),

        CommandElement({
            id: 0x0025, name: "GetCredentialStatusResponse",
            conformance: "USR", direction: "response",
            xref: { section: "5.2.4", document: "cluster", version: "1.1" }
        }),

        CommandElement({
            id: 0x0026, name: "ClearCredential",
            access: "T A", conformance: "USR", direction: "request", response: "status",
            xref: { section: "5.2.4", document: "cluster", version: "1.1" }
        }),

        DatatypeElement({
            id: -1, name: "AlarmCodeEnum", base: "enum8.",
            details: "The Alarm Code enum SHALL indicate the alarm type. The data type of the Alarm Code enum is derived from enum8.",
            xref: { section: "5.2.6.1", document: "cluster", version: "1.1" },
            children: [
                DatatypeElement({
                    id: 0x0000, name: "LockJammed",
                    conformance: "M", description: "Locking Mechanism Jammed",
                    xref: { section: "5.2.6.1", document: "cluster", version: "1.1" }
                }),

                DatatypeElement({
                    id: 0x0001, name: "LockFactoryReset",
                    conformance: "O", description: "Lock Reset to Factory Defaults",
                    xref: { section: "5.2.6.1", document: "cluster", version: "1.1" }
                }),

                DatatypeElement({
                    id: 0x0003, name: "LockRadioPowerCycled",
                    conformance: "O", description: "Lock Radio Power Cycled",
                    xref: { section: "5.2.6.1", document: "cluster", version: "1.1" }
                }),

                DatatypeElement({
                    id: 0x0004, name: "WrongCodeEntryLimit",
                    conformance: "[USR]", description: "Tamper Alarm - wrong code entry limit",
                    xref: { section: "5.2.6.1", document: "cluster", version: "1.1" }
                }),

                DatatypeElement({
                    id: 0x0005, name: "FrontEsceutcheonRemoved",
                    conformance: "O", description: "Tamper Alarm - front escutcheon removed from main",
                    xref: { section: "5.2.6.1", document: "cluster", version: "1.1" }
                }),

                DatatypeElement({
                    id: 0x0006, name: "DoorForcedOpen",
                    conformance: "[DPS]", description: "Forced Door Open under Door Locked Condition",
                    xref: { section: "5.2.6.1", document: "cluster", version: "1.1" }
                }),

                DatatypeElement({
                    id: 0x0007, name: "DoorAjar",
                    conformance: "[DPS]", description: "Door ajar",
                    xref: { section: "5.2.6.1", document: "cluster", version: "1.1" }
                }),

                DatatypeElement({
                    id: 0x0008, name: "ForcedUser",
                    conformance: "[USR]", description: "Force User SOS alarm",
                    details: "User has ability to open lock but a ForcedUser LockOperationType and ForcedUser silent alarm will be emitted to allow a notified Node to alert emergency services or contacts on the user account when used.",
                    xref: { section: "5.2.6.16.6", document: "cluster", version: "1.1" }
                })
            ]
        })
    ]
}))
