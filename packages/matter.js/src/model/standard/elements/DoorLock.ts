/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Matter } from "../Matter.js";

Matter.children.push({
    tag: "cluster", name: "DoorLock", id: 0x101, classification: "application",
    description: "Door Lock",
    details: "An interface to a generic way to secure a door",
    xref: { document: "cluster", section: "5.2" },

    children: [
        {
            tag: "attribute", name: "FeatureMap", id: 0xfffc, type: "FeatureMap",
            xref: { document: "cluster", section: "5.2.2" },

            children: [
                {
                    tag: "datatype", name: "PIN", id: 0x0, conformance: "O", description: "PinCredential",
                    details: "Lock supports PIN credentials (via keypad, or over- the-air)"
                },
                {
                    tag: "datatype", name: "RID", id: 0x1, conformance: "O", description: "RfidCredential",
                    details: "Lock supports RFID credentials"
                },
                {
                    tag: "datatype", name: "FGP", id: 0x2, conformance: "P, O", description: "FingerCredentials",
                    details: "Lock supports finger related credentials (fingerprint, finger vein)"
                },
                {
                    tag: "datatype", name: "LOG", id: 0x3, conformance: "O", description: "Logging",
                    details: "Lock supports local/on-lock logging when Events are not supported"
                },
                {
                    tag: "datatype", name: "WDSCH", id: 0x4, conformance: "O", description: "WeekDayAccessSchedules",
                    details: "Lock supports week day user access schedules"
                },
                {
                    tag: "datatype", name: "DPS", id: 0x5, conformance: "O", description: "DoorPositionSensor",
                    details: "Lock supports a door position sensor that indicates door’s state"
                },
                {
                    tag: "datatype", name: "FACE", id: 0x6, conformance: "P, O", description: "FaceCredentials",
                    details: "Lock supports face related credentials (face, iris, retina)"
                },
                {
                    tag: "datatype", name: "COTA", id: 0x7, conformance: "O", description: "CredentialOverTheAirAccess",
                    details: "PIN codes over- the-air supported for lock/unlock operations"
                },
                {
                    tag: "datatype", name: "USR", id: 0x8, conformance: "[PIN | RID]", description: "User",
                    details: "Lock supports the user commands and database"
                },
                {
                    tag: "datatype", name: "NOT", id: 0x9, conformance: "O", description: "Notification",
                    details: "Operation and Programming Notifications"
                },
                {
                    tag: "datatype", name: "YDSCH", id: 0xa, conformance: "O", description: "YearDayAccessSchedules",
                    details: "Lock supports year day user access schedules"
                },
                {
                    tag: "datatype", name: "HDSCH", id: 0xb, conformance: "O", description: "HolidaySchedules",
                    details: "Lock supports holiday schedules"
                }
            ]
        },

        {
            tag: "attribute", name: "LockState", id: 0x0, type: "enum8", access: "R V", conformance: "M",
            constraint: "desc", quality: "X S P",
            details: "This attribute has the following possible values:",
            xref: { document: "cluster", section: "5.2.3.1" },

            children: [
                {
                    tag: "datatype", name: "NotFullyLocked", id: 0x0, conformance: "M",
                    description: "Lock state is not fully locked"
                },
                {
                    tag: "datatype", name: "Locked", id: 0x1, conformance: "M",
                    description: "Lock state is fully locked"
                },
                {
                    tag: "datatype", name: "Unlocked", id: 0x2, conformance: "M",
                    description: "Lock state is fully unlocked"
                }
            ]
        },

        {
            tag: "attribute", name: "LockType", id: 0x1, type: "enum8", access: "R V", conformance: "M",
            constraint: "desc",
            details: "The LockType attribute is indicated by an enumeration:",
            xref: { document: "cluster", section: "5.2.3.2" },

            children: [
                {
                    tag: "datatype", name: "Deadbolt", id: 0x0, conformance: "M",
                    description: "Physical lock type is dead bolt"
                },
                {
                    tag: "datatype", name: "Magnetic", id: 0x1, conformance: "M",
                    description: "Physical lock type is magnetic"
                },
                {
                    tag: "datatype", name: "Other", id: 0x2, conformance: "M",
                    description: "Physical lock type is other"
                },
                {
                    tag: "datatype", name: "Mortise", id: 0x3, conformance: "M",
                    description: "Physical lock type is mortise"
                },
                { tag: "datatype", name: "Rim", id: 0x4, conformance: "M", description: "Physical lock type is rim" },
                {
                    tag: "datatype", name: "LatchBolt", id: 0x5, conformance: "M",
                    description: "Physical lock type is latch bolt"
                },
                {
                    tag: "datatype", name: "CylindricalLock", id: 0x6, conformance: "M",
                    description: "Physical lock type is cylindrical lock"
                },
                {
                    tag: "datatype", name: "TubularLock", id: 0x7, conformance: "M",
                    description: "Physical lock type is tubular lock"
                },
                {
                    tag: "datatype", name: "InterconnectedLock", id: 0x8, conformance: "M",
                    description: "Physical lock type is interconnected lock"
                },
                {
                    tag: "datatype", name: "DeadLatch", id: 0x9, conformance: "M",
                    description: "Physical lock type is dead latch"
                },
                {
                    tag: "datatype", name: "DoorFurniture", id: 0xa, conformance: "M",
                    description: "Physical lock type is door furniture"
                }
            ]
        },

        {
            tag: "attribute", name: "ActuatorEnabled", id: 0x2, type: "bool", access: "R V", conformance: "M",
            details: "The ActuatorEnabled attribute indicates if the lock is currently able to (Enabled) or not able to " +
                     "(Disabled) process remote Lock, Unlock, or Unlock with Timeout commands.",
            xref: { document: "cluster", section: "5.2.3.3" }
        },

        {
            tag: "attribute", name: "DoorState", id: 0x3, type: "enum8", access: "R V", conformance: "DPS",
            constraint: "desc", quality: "X P",
            details: "The current door state as defined in DoorStateEnum.",
            xref: { document: "cluster", section: "5.2.3.4" }
        },

        {
            tag: "attribute", name: "DoorOpenEvents", id: 0x4, type: "uint32", access: "RW VM",
            conformance: "[DPS]",
            details: "This attribute holds the number of door open events that have occurred since it was last zeroed.",
            xref: { document: "cluster", section: "5.2.3.5" }
        },

        {
            tag: "attribute", name: "DoorClosedEvents", id: 0x5, type: "uint32", access: "RW VM",
            conformance: "[DPS]",
            details: "This attribute holds the number of door closed events that have occurred since it was last zeroed.",
            xref: { document: "cluster", section: "5.2.3.6" }
        },

        {
            tag: "attribute", name: "OpenPeriod", id: 0x6, type: "uint16", access: "RW VM",
            conformance: "[DPS]",
            details: "This attribute holds the number of minutes the door has been open since the last time it " +
                     "transitioned from closed to open.",
            xref: { document: "cluster", section: "5.2.3.7" }
        },

        {
            tag: "attribute", name: "NumberOfLogRecordsSupported", id: 0x10, type: "uint16", access: "R V",
            conformance: "LOG", quality: "F",
            details: "The number of available log records.",
            xref: { document: "cluster", section: "5.2.3.8" }
        },

        {
            tag: "attribute", name: "NumberOfTotalUsersSupported", id: 0x11, type: "uint16", access: "R V",
            conformance: "USR", quality: "F",
            details: "Number of total users supported by the lock.",
            xref: { document: "cluster", section: "5.2.3.9" }
        },

        {
            tag: "attribute", name: "NumberOfPinUsersSupported", id: 0x12, type: "uint16", access: "R V",
            conformance: "PIN", quality: "F",
            details: "The number of PIN users supported.",
            xref: { document: "cluster", section: "5.2.3.10" }
        },

        {
            tag: "attribute", name: "NumberOfRfidUsersSupported", id: 0x13, type: "uint16", access: "R V",
            conformance: "RID", quality: "F",
            details: "The number of RFID users supported.",
            xref: { document: "cluster", section: "5.2.3.11" }
        },

        {
            tag: "attribute", name: "NumberOfWeekDaySchedulesSupportedPerUser", id: 0x14, type: "uint8",
            access: "R V", conformance: "WDSCH", quality: "F",
            details: "The number of configurable week day schedule supported per user.",
            xref: { document: "cluster", section: "5.2.3.12" }
        },

        {
            tag: "attribute", name: "NumberOfYearDaySchedulesSupportedPerUser", id: 0x15, type: "uint8",
            access: "R V", conformance: "YDSCH", quality: "F",
            details: "The number of configurable year day schedule supported per user.",
            xref: { document: "cluster", section: "5.2.3.13" }
        },

        {
            tag: "attribute", name: "NumberOfHolidaySchedulesSupported", id: 0x16, type: "uint8", access: "R V",
            conformance: "HDSCH", quality: "F",
            details: "The number of holiday schedules supported for the entire door lock device.",
            xref: { document: "cluster", section: "5.2.3.14" }
        },

        {
            tag: "attribute", name: "MaxPinCodeLength", id: 0x17, type: "uint8", access: "R V",
            conformance: "PIN", quality: "F",
            details: "An 8 bit value indicates the maximum length in bytes of a PIN Code on this device.",
            xref: { document: "cluster", section: "5.2.3.15" }
        },

        {
            tag: "attribute", name: "MinPinCodeLength", id: 0x18, type: "uint8", access: "R V",
            conformance: "PIN", quality: "F",
            details: "An 8 bit value indicates the minimum length in bytes of a PIN Code on this device.",
            xref: { document: "cluster", section: "5.2.3.16" }
        },

        {
            tag: "attribute", name: "MaxRfidCodeLength", id: 0x19, type: "uint8", access: "R V",
            conformance: "RID", quality: "F",
            details: "An 8 bit value indicates the maximum length in bytes of a RFID Code on this device. The value " +
                     "depends on the RFID code range specified by the manufacturer, if media anti-collision identifiers " +
                     "(UID) are used as RFID code, a value of 20 (equals 10 Byte ISO 14443A UID) is recommended.",
            xref: { document: "cluster", section: "5.2.3.17" }
        },

        {
            tag: "attribute", name: "MinRfidCodeLength", id: 0x1a, type: "uint8", access: "R V",
            conformance: "RID", quality: "F",
            details: "An 8 bit value indicates the minimum length in bytes of a RFID Code on this device. The value " +
                     "depends on the RFID code range specified by the manufacturer, if media anti-collision identifiers " +
                     "(UID) are used as RFID code, a value of 8 (equals 4 Byte ISO 14443A UID) is recommended.",
            xref: { document: "cluster", section: "5.2.3.18" }
        },

        {
            tag: "attribute", name: "CredentialRulesSupport", id: 0x1b, type: "map8", access: "R V",
            conformance: "USR", default: 1, quality: "F",
            details: "This bitmap contains a bit for every value of CredentialRuleEnum supported on this device.",
            xref: { document: "cluster", section: "5.2.3.19" },
            children: [
                { tag: "datatype", name: "Single", id: 0x0 },
                { tag: "datatype", name: "Dual", id: 0x1, conformance: "M" },
                { tag: "datatype", name: "Tri", id: 0x4, conformance: "M" }
            ]
        },

        {
            tag: "attribute", name: "NumberOfCredentialsSupportedPerUser", id: 0x1c, type: "uint8",
            access: "R V", conformance: "USR", quality: "F",
            details: "The number of credentials that could be assigned for each user.",
            xref: { document: "cluster", section: "5.2.3.20" }
        },

        {
            tag: "attribute", name: "EnableLogging", id: 0x20, type: "bool", access: "R[W] VA",
            conformance: "LOG", default: true, quality: "P",
            details: "Enable/disable event logging. When event logging is enabled, all event messages are stored on the " +
                     "lock for retrieval. Logging events can be but not limited to Tamper Alarm, Lock, Unlock, " +
                     "AutoRelock, User Code Added, User Code Cleared, Schedule Added, and Schedule Cleared. For a full " +
                     "detail of all the possible alarms and events, please refer to the full list in the Alarm and Event " +
                     "Masks Attribute Set.",
            xref: { document: "cluster", section: "5.2.3.21" }
        },

        {
            tag: "attribute", name: "Language", id: 0x21, type: "string", access: "RW VM", conformance: "O",
            constraint: "max 3", quality: "P",
            details: "Modifies the language for the on-screen or audible user interface using a 2-byte language code from " +
                     "ISO-639-1.",
            xref: { document: "cluster", section: "5.2.3.22" }
        },

        {
            tag: "attribute", name: "LedSettings", id: 0x22, type: "uint8", access: "RW VM", conformance: "O",
            constraint: "desc", quality: "P",
            details: "The settings for the LED support three different modes, shown below:",
            xref: { document: "cluster", section: "5.2.3.25" }
        },

        {
            tag: "attribute", name: "AutoRelockTime", id: 0x23, type: "uint32", access: "RW VM",
            conformance: "O", quality: "P",
            details: "The number of seconds to wait after unlocking a lock before it automatically locks again. " +
                     "0=disabled. If set, unlock operations from any source will be timed. For one time unlock with " +
                     "timeout use the specific command.",
            xref: { document: "cluster", section: "5.2.3.26" }
        },

        {
            tag: "attribute", name: "SoundVolume", id: 0x24, type: "uint8", access: "RW VM", conformance: "O",
            constraint: "desc", quality: "P",
            details: "The sound volume on a door lock has four possible settings: silent, low, high and medium volumes, " +
                     "shown below:",
            xref: { document: "cluster", section: "5.2.3.27" }
        },

        {
            tag: "attribute", name: "OperatingMode", id: 0x25, type: "enum8", access: "RW VM", conformance: "M",
            constraint: "desc", quality: "P",
            details: "The current operating mode of the lock (see OperatingModeEnum).",
            xref: { document: "cluster", section: "5.2.3.23" }
        },

        {
            tag: "attribute", name: "SupportedOperatingModes", id: 0x26, type: "map16", access: "R V",
            conformance: "M", default: 65526, quality: "F",
            details: "This bitmap contains all operating bits of the Operating Mode Attribute supported by the lock. All " +
                     "operating modes NOT supported by a lock SHALL be set to one. The value of the OperatingMode " +
                     "enumeration defines the related bit to be set, as shown below:",
            xref: { document: "cluster", section: "5.2.3.24" },

            children: [
                { tag: "datatype", name: "Vacation", id: 0x1, conformance: "M" },
                { tag: "datatype", name: "Privacy", id: 0x2, conformance: "M" },
                { tag: "datatype", name: "NoRemoteLockUnlock", id: 0x8, conformance: "M" },
                { tag: "datatype", name: "Passage", id: 0x10, conformance: "M" }
            ]
        },

        {
            tag: "attribute", name: "DefaultConfigurationRegister", id: 0x27, type: "map16", access: "R V",
            conformance: "O", quality: "P",
            details: "This attribute represents the default configurations as they are physically set on the device " +
                     "(example: hardware dip switch setting, etc…) and represents the default setting for some of the " +
                     "attributes within this cluster (for example: LED, Auto Lock, Sound Volume, and Operating Mode " +
                     "attributes).",
            xref: { document: "cluster", section: "5.2.3.28" },

            children: [
                { tag: "datatype", name: "EnableLocalProgrammingEnabled", id: 0x1, conformance: "M" },
                { tag: "datatype", name: "KeypadInterfaceDefaultAccessEnabled", id: 0x2, conformance: "M" },
                { tag: "datatype", name: "RemoteInterfaceDefaultAccessIsEnabled", id: 0x4, conformance: "M" },
                { tag: "datatype", name: "SoundEnabled", id: 0x20, conformance: "M" },
                { tag: "datatype", name: "AutoRelockTimeSet", id: 0x40, conformance: "M" },
                { tag: "datatype", name: "LedSettingsSet", id: 0x80, conformance: "M" }
            ]
        },

        {
            tag: "attribute", name: "EnableLocalProgramming", id: 0x28, type: "bool", access: "RW VA",
            conformance: "O", default: true, quality: "P",
            details: "Enable/disable local programming on the door lock of certain features (see LocalProgrammingFeatures " +
                     "attribute). If this value is set to TRUE then local programming is enabled on the door lock for all " +
                     "features. If it is set to FALSE then local programming is disabled on the door lock for those " +
                     "features whose bit is set to 0 in the LocalProgrammingFeatures attribute. Local programming SHALL " +
                     "be enabled by default.",
            xref: { document: "cluster", section: "5.2.3.29" }
        },

        {
            tag: "attribute", name: "EnableOneTouchLocking", id: 0x29, type: "bool", access: "RW VM",
            conformance: "O", default: true, quality: "P",
            details: "Enable/disable the ability to lock the door lock with a single touch on the door lock.",
            xref: { document: "cluster", section: "5.2.3.30" }
        },

        {
            tag: "attribute", name: "EnableInsideStatusLed", id: 0x2a, type: "bool", access: "RW VM",
            conformance: "O", default: true, quality: "P",
            details: "Enable/disable an inside LED that allows the user to see at a glance if the door is locked.",
            xref: { document: "cluster", section: "5.2.3.31" }
        },

        {
            tag: "attribute", name: "EnablePrivacyModeButton", id: 0x2b, type: "bool", access: "RW VM",
            conformance: "O", default: true, quality: "P",
            details: "Enable/disable a button inside the door that is used to put the lock into privacy mode. When the " +
                     "lock is in privacy mode it cannot be manipulated from the outside.",
            xref: { document: "cluster", section: "5.2.3.32" }
        },

        {
            tag: "attribute", name: "LocalProgrammingFeatures", id: 0x2c, type: "map8", access: "RW VA",
            conformance: "O", quality: "P",
            details: "The local programming features that will be disabled when EnableLocalProgramming attribute is set " +
                     "to False. If a door lock doesn’t support disabling one aspect of local programming it SHALL return " +
                     "CONSTRAINT_ERROR during a write operation of this attribute. If the EnableLocalProgramming " +
                     "attribute is set to True then all local programming features SHALL be enabled regardless of the " +
                     "bits set to 0 in this attribute.",
            xref: { document: "cluster", section: "5.2.3.33" },

            children: [
                { tag: "datatype", name: "AddUsersCredentialsSchedulesLocally", id: 0x1, conformance: "M" },
                { tag: "datatype", name: "ModifyUsersCredentialsSchedulesLocally", id: 0x2, conformance: "M" },
                { tag: "datatype", name: "ClearUsersCredentialsSchedulesLocally", id: 0x4, conformance: "M" },
                { tag: "datatype", name: "AdjustLockSettingsLocally", id: 0x8, conformance: "M" }
            ]
        },

        {
            tag: "attribute", name: "WrongCodeEntryLimit", id: 0x30, type: "uint8", access: "RW VA",
            conformance: "PIN | RID", constraint: "1 to 255", quality: "P",

            details: "The number of incorrect Pin codes or RFID presentment attempts a user is allowed to enter before " +
                     "the lock will enter a lockout state. The value of this attribute is compared to all failing forms " +
                     "of credential presentation, including Pin codes used in an Unlock Command when " +
                     "RequirePINforRemoteOperation is set to true. Valid range is 1-255 incorrect attempts. The lockout " +
                     "state will be for the duration of UserCodeTemporaryDisableTime. If the attribute accepts writes and " +
                     "an attempt to write the value 0 is made, the device SHALL respond with CONSTRAINT_ERROR.",

            xref: { document: "cluster", section: "5.2.3.34" }
        },

        {
            tag: "attribute", name: "UserCodeTemporaryDisableTime", id: 0x31, type: "uint8", access: "RW VA",
            conformance: "PIN | RID", constraint: "1 to 255", quality: "P",
            details: "The number of seconds that the lock shuts down following wrong code entry. Valid range is 1-255 " +
                     "seconds. Device can shut down to lock user out for specified amount of time. (Makes it difficult to " +
                     "try and guess a PIN for the device.) If the attribute accepts writes and an attempt to write the " +
                     "attribute to 0 is made, the device SHALL respond with CONSTRAINT_ERROR.",
            xref: { document: "cluster", section: "5.2.3.35" }
        },

        {
            tag: "attribute", name: "SendPinOverTheAir", id: 0x32, type: "bool", access: "RW VA",
            conformance: "[PIN]", default: true, quality: "P",
            details: "Boolean set to True if it is ok for the door lock server to send PINs over the air. This attribute " +
                     "determines the behavior of the server’s TX operation. If it is false, then it is not ok for the " +
                     "device to send PIN in any messages over the air.",
            xref: { document: "cluster", section: "5.2.3.36" }
        },

        {
            tag: "attribute", name: "RequirePiNforRemoteOperation", id: 0x33, type: "bool", access: "RW VA",
            conformance: "COTA & PIN", default: true, quality: "P",
            details: "Boolean set to True if the door lock server requires that an optional PINs be included in the " +
                     "payload of remote lock operation events like Lock, Unlock, Unlock with Timeout and Toggle in order " +
                     "to function.",
            xref: { document: "cluster", section: "5.2.3.37" }
        },

        {
            tag: "attribute", name: "SecurityLevel", id: 0x34, conformance: "D", default: "0",
            xref: { document: "cluster", section: "5.2.3" }
        },

        {
            tag: "attribute", name: "ExpiringUserTimeout", id: 0x35, type: "uint16", access: "RW VA",
            conformance: "[USR]", constraint: "1 to 2880", quality: "P",
            details: "Number of minutes a PIN, RFID, Fingerprint, or other credential associated with a user of type " +
                     "ExpiringUser SHALL remain valid after its first use before expiring. When the credential expires " +
                     "the UserStatus for the corresponding user record SHALL be set to OccupiedDisabled.",
            xref: { document: "cluster", section: "5.2.3.38" }
        },

        {
            tag: "attribute", name: "AlarmMask", id: 0x40, type: "map16", access: "RW VA", conformance: "O",
            default: 65535, quality: "P",
            details: "This attribute is only supported if the Alarms cluster is on the same endpoint. The alarm mask is " +
                     "used to turn on/off alarms for particular functions. Alarms for an alarm group are enabled if the " +
                     "associated alarm mask bit is set. Each bit represents a group of alarms. Entire alarm groups can be " +
                     "turned on or off by setting or clearing the associated bit in the alarm mask.",
            xref: { document: "cluster", section: "5.2.3.39" },

            children: [
                { tag: "datatype", name: "LockingMechanismJammed", id: 0x0 },
                { tag: "datatype", name: "LockResetToFactoryDefaults", id: 0x1 },
                { tag: "datatype", name: "Reserved", id: 0x2 },
                { tag: "datatype", name: "RfModulePowerCycled", id: 0x3 },
                { tag: "datatype", name: "TamperAlarmWrongCodeEntryLimit", id: 0x4 },
                { tag: "datatype", name: "TamperAlarmFrontEscutcheonRemovedFromMain", id: 0x5 },
                { tag: "datatype", name: "ForcedDoorOpenUnderDoorLockedCondition", id: 0x6 }
            ]
        },

        {
            tag: "attribute", name: "KeypadOperationEventMask", id: 0x41, type: "map16", access: "RW VA",
            conformance: "[NOT & PIN]", default: 65535, quality: "P",
            details: "Event mask used to turn on and off the transmission of keypad operation events. This mask DOES NOT " +
                     "apply to the storing of events in the event log. This mask only applies to the Operation Event " +
                     "Notification Command.",
            xref: { document: "cluster", section: "5.2.3.40" },

            children: [
                { tag: "datatype", name: "UnknownOrManufacturerSpecificKeypadOperationEvent", id: 0x0 },
                { tag: "datatype", name: "LockSourceKeypad", id: 0x1 },
                { tag: "datatype", name: "UnlockSourceKeypad", id: 0x2 },
                { tag: "datatype", name: "LockSourceKeypadErrorInvalidPin", id: 0x3 },
                { tag: "datatype", name: "LockSourceKeypadErrorInvalidSchedule", id: 0x4 },
                { tag: "datatype", name: "UnlockSourceKeypadErrorInvalidCode", id: 0x5 },
                { tag: "datatype", name: "UnlockSourceKeypadErrorInvalidSchedule", id: 0x6 },
                { tag: "datatype", name: "NonAccessUserOperationEventSourceKeypad", id: 0xf }
            ]
        },

        {
            tag: "attribute", name: "RemoteOperationEventMask", id: 0x42, type: "map16", access: "RW VA",
            conformance: "[NOT]", default: 65535, quality: "P",
            details: "Event mask used to turn on and off the transmission of remote operation events. This mask DOES NOT " +
                     "apply to the storing of events in the event log. This mask only applies to the Operation Event",
            xref: { document: "cluster", section: "5.2.3.41" },

            children: [
                { tag: "datatype", name: "UnknownOrManufacturerSpecificRemoteOperationEvent", id: 0x0 },
                { tag: "datatype", name: "LockSourceRemote", id: 0x1 },
                { tag: "datatype", name: "UnlockSourceRemote", id: 0x2 },
                { tag: "datatype", name: "LockSourceRemoteErrorInvalidCode", id: 0x3 },
                { tag: "datatype", name: "LockSourceRemoteErrorInvalidSchedule", id: 0x4 },
                { tag: "datatype", name: "UnlockSourceRemoteErrorInvalidCode", id: 0x5 },
                { tag: "datatype", name: "UnlockSourceRemoteErrorInvalidSchedule", id: 0x6 }
            ]
        },

        {
            tag: "attribute", name: "ManualOperationEventMask", id: 0x43, type: "map16", access: "RW VA",
            conformance: "[NOT]", default: 65535, quality: "P",
            details: "Event mask used to turn on and off manual operation events. This mask DOES NOT apply to the storing " +
                     "of events in the event log. This mask only applies to the Operation Event Notification Command.",
            xref: { document: "cluster", section: "5.2.3.42" },

            children: [
                { tag: "datatype", name: "UnknownOrManufacturerSpecificManualOperationEvent", id: 0x0 },
                { tag: "datatype", name: "ThumbturnLock", id: 0x1 },
                { tag: "datatype", name: "ThumbturnUnlock", id: 0x2 },
                { tag: "datatype", name: "OneTouchLock", id: 0x7 },
                { tag: "datatype", name: "KeyLock", id: 0x8 },
                { tag: "datatype", name: "KeyUnlock", id: 0x9 },
                { tag: "datatype", name: "AutoLock", id: 0xa },
                { tag: "datatype", name: "ScheduleLock", id: 0xb },
                { tag: "datatype", name: "ScheduleUnlock", id: 0xc },
                { tag: "datatype", name: "ManualLock", id: 0xd },
                { tag: "datatype", name: "ManualUnlock", id: 0xe }
            ]
        },

        {
            tag: "attribute", name: "RfidOperationEventMask", id: 0x44, type: "map16", access: "RW VA",
            conformance: "[NOT & RID]", default: 65535, quality: "P",
            details: "Event mask used to turn on and off RFID operation events. This mask DOES NOT apply to the storing " +
                     "of events in the event log. This mask only applies to the Operation Event Notification Command.",
            xref: { document: "cluster", section: "5.2.3.43" },

            children: [
                { tag: "datatype", name: "UnknownOrManufacturerSpecificKeypadOperationEvent", id: 0x0 },
                { tag: "datatype", name: "LockSourceRfid", id: 0x1 },
                { tag: "datatype", name: "UnlockSourceRfid", id: 0x2 },
                { tag: "datatype", name: "LockSourceRfidErrorInvalidRfidId", id: 0x3 },
                { tag: "datatype", name: "LockSourceRfidErrorInvalidSchedule", id: 0x4 },
                { tag: "datatype", name: "UnlockSourceRfidErrorInvalidRfidId", id: 0x5 },
                { tag: "datatype", name: "UnlockSourceRfidErrorInvalidSchedule", id: 0x6 }
            ]
        },

        {
            tag: "attribute", name: "KeypadProgrammingEventMask", id: 0x45, type: "map16", access: "RW VA",
            conformance: "[NOT & PIN]", default: 65535, quality: "P",
            details: "Event mask used to turn on and off keypad programming events. This mask DOES NOT apply to the " +
                     "storing of events in the event log. This mask only applies to the Programming Event Notification " +
                     "Command.",
            xref: { document: "cluster", section: "5.2.3.44" },

            children: [
                { tag: "datatype", name: "UnknownOrManufacturerSpecificKeypadProgrammingEvent", id: 0x0 },
                { tag: "datatype", name: "ProgrammingPinCodeChangedSourceKeypad", id: 0x1 },
                { tag: "datatype", name: "PinAddedSourceKeypad", id: 0x2 },
                { tag: "datatype", name: "PinClearedSourceKeypad", id: 0x3 },
                { tag: "datatype", name: "PinChangedSourceKeypad", id: 0x4 }
            ]
        },

        {
            tag: "attribute", name: "RemoteProgrammingEventMask", id: 0x46, type: "map16", access: "RW VA",
            conformance: "[NOT]", default: 65535, quality: "P",
            details: "Event mask used to turn on and off remote programming events. This mask DOES NOT apply to the " +
                     "storing of events in the event log. This mask only applies to the Programming Event Notification " +
                     "Command.",
            xref: { document: "cluster", section: "5.2.3.45" },

            children: [
                { tag: "datatype", name: "UnknownOrManufacturerSpecificRemoteProgrammingEvent", id: 0x0 },
                { tag: "datatype", name: "PinAddedSourceRemote", id: 0x2 },
                { tag: "datatype", name: "PinClearedSourceRemote", id: 0x3 },
                { tag: "datatype", name: "PinChangedSourceRemote", id: 0x4 },
                { tag: "datatype", name: "RfidCodeAddedSourceRemote", id: 0x5 },
                { tag: "datatype", name: "RfidCodeClearedSourceRemote", id: 0x6 }
            ]
        },

        {
            tag: "attribute", name: "RfidPro", id: 0x47, type: "map16", access: "RW VA",
            conformance: "[NOT & RID]", default: 65535, quality: "P",
            xref: { document: "cluster", section: "5.2.3" }
        },

        {
            tag: "event", name: "DoorLockAlarm", id: 0x0, access: "V", conformance: "M", priority: "critical",
            details: "The door lock cluster provides several alarms which can be sent when there is a critical state on " +
                     "the door lock. The alarms available for the door lock cluster are listed in the AlarmCodeEnum " +
                     "section below.",
            xref: { document: "cluster", section: "5.2.5.1" },

            children: [
                {
                    tag: "datatype", name: "AlarmCode", id: 0x0, type: "AlarmCodeEnum", conformance: "M",
                    details: "The alarm code of the event that has happened.",
                    xref: { document: "cluster", section: "5.2.5.1.1" }
                }
            ]
        },

        {
            tag: "event", name: "DoorStateChange", id: 0x1, access: "V", conformance: "DPS",
            priority: "critical",
            details: "The door lock server sends out a DoorStateChange event when the door lock door state changes. The " +
                     "data of this event SHALL contain the following information:",
            xref: { document: "cluster", section: "5.2.5.2" },

            children: [
                {
                    tag: "datatype", name: "DoorState", id: 0x0, type: "DoorStateEnum", conformance: "M",
                    details: "The new door state for this door event.",
                    xref: { document: "cluster", section: "5.2.5.2.1" }
                }
            ]
        },

        {
            tag: "event", name: "LockOperation", id: 0x2, access: "V", conformance: "M", priority: "critical",
            details: "The door lock server sends out a LockOperation event when the event is triggered by the various " +
                     "lock operation sources.",
            xref: { document: "cluster", section: "5.2.5.3" },

            children: [
                {
                    tag: "datatype", name: "LockOperationType", id: 0x0, type: "LockOperationTypeEnum",
                    conformance: "M",
                    details: "The type of the lock operation that was performed.",
                    xref: { document: "cluster", section: "5.2.5.3.1" }
                },

                {
                    tag: "datatype", name: "OperationSource", id: 0x1, type: "OperationSourceEnum", conformance: "M",
                    details: "The source of the lock operation that was performed.",
                    xref: { document: "cluster", section: "5.2.5.3.2" }
                },

                {
                    tag: "datatype", name: "UserIndex", id: 0x2, type: "uint16", conformance: "M", quality: "X",
                    details: "The lock UserIndex who performed the lock operation. This SHALL be null if there is no user index " +
                             "that can be determined for the given operation source. This SHALL NOT be null if a user index can " +
                             "be determined. In particular, this SHALL NOT be null if the operation was associated with a valid " +
                             "credential.",
                    xref: { document: "cluster", section: "5.2.5.3.3" }
                },

                {
                    tag: "datatype", name: "FabricIndex", id: 0x3, type: "fabric-idx", conformance: "M", quality: "X",
                    details: "The fabric index of the fabric that performed the lock operation. This SHALL be null if there is no " +
                             "fabric that can be determined for the given operation source. This SHALL NOT be null if the " +
                             "operation source is \"Remote\".",
                    xref: { document: "cluster", section: "5.2.5.3.4" }
                },

                {
                    tag: "datatype", name: "SourceNode", id: 0x4, type: "node-id", conformance: "M", quality: "X",
                    details: "The Node ID of the node that performed the lock operation. This SHALL be null if there is no Node " +
                             "associated with the given operation source. This SHALL NOT be null if the operation source is " +
                             "\"Remote\".",
                    xref: { document: "cluster", section: "5.2.5.3.5" }
                },

                {
                    tag: "datatype", name: "Credentials", id: 0x5, type: "list", conformance: "[USR]",
                    constraint: "1 to NumberOfCredentialsSupportedPerUser", quality: "X",
                    details: "The list of credentials used in performing the lock operation. This SHALL be null if no credentials " +
                             "were involved.",
                    xref: { document: "cluster", section: "5.2.5.3.6" },
                    children: [ { tag: "datatype", name: "entry", type: "CredentialStruct" } ]
                }
            ]
        },

        {
            tag: "event", name: "LockOperationError", id: 0x3, access: "V", conformance: "M",
            priority: "critical",
            details: "The door lock server sends out a LockOperationError event when a lock operation fails for various " +
                     "reasons.",
            xref: { document: "cluster", section: "5.2.5.4" },

            children: [
                {
                    tag: "datatype", name: "LockOperationType", id: 0x0, type: "LockOperationTypeEnum",
                    conformance: "M",
                    details: "The type of the lock operation that was performed.",
                    xref: { document: "cluster", section: "5.2.5.4.1" }
                },

                {
                    tag: "datatype", name: "OperationSource", id: 0x1, type: "OperationSourceEnum", conformance: "M",
                    details: "The source of the lock operation that was performed.",
                    xref: { document: "cluster", section: "5.2.5.4.2" }
                },
                {
                    tag: "datatype", name: "OperationError", id: 0x2, type: "OperationErrorEnum", conformance: "M",
                    details: "The lock operation error triggered when the operation was performed.",
                    xref: { document: "cluster", section: "5.2.5.4.3" }
                },

                {
                    tag: "datatype", name: "UserIndex", id: 0x3, type: "uint16", conformance: "M", quality: "X",
                    details: "The lock UserIndex who performed the lock operation. This SHALL be null if there is no user id that " +
                             "can be determined for the given operation source.",
                    xref: { document: "cluster", section: "5.2.5.4.4" }
                },

                {
                    tag: "datatype", name: "FabricIndex", id: 0x4, type: "fabric-idx", conformance: "M", quality: "X",
                    details: "The fabric index of the fabric that performed the lock operation. This SHALL be null if there is no " +
                             "fabric that can be determined for the given operation source. This SHALL NOT be null if the " +
                             "operation source is \"Remote\".",
                    xref: { document: "cluster", section: "5.2.5.4.5" }
                },

                {
                    tag: "datatype", name: "SourceNode", id: 0x5, type: "node-id", conformance: "M", quality: "X",
                    details: "The Node ID of the node that performed the lock operation. This SHALL be null if there is no Node " +
                             "associated with the given operation source. This SHALL NOT be null if the operation source is",
                    xref: { document: "cluster", section: "5.2.5.4.6" }
                },

                {
                    tag: "datatype", name: "Credentials", id: 0x6, type: "list", conformance: "[USR]",
                    constraint: "1 to NumberOfCredentialsSupportedPerUser", quality: "X",
                    details: "The list of credentials used in performing the lock operation. This SHALL be null if no credentials " +
                             "were involved.",
                    xref: { document: "cluster", section: "5.2.5.4.7" },
                    children: [ { tag: "datatype", name: "entry", type: "CredentialStruct" } ]
                }
            ]
        },

        {
            tag: "event", name: "LockUserChange", id: 0x4, access: "V", conformance: "USR", priority: "info",
            details: "The door lock server sends out a LockUserChange event when a lock user, schedule, or credential " +
                     "change has occurred.",
            xref: { document: "cluster", section: "5.2.5.5" },

            children: [
                {
                    tag: "datatype", name: "LockDataType", id: 0x0, type: "LockDataTypeEnum", conformance: "M",
                    details: "The lock data type that was changed.",
                    xref: { document: "cluster", section: "5.2.5.5.1" }
                },

                {
                    tag: "datatype", name: "DataOperationType", id: 0x1, type: "DataOperationTypeEnum",
                    conformance: "M",
                    details: "The data operation performed on the lock data type changed.",
                    xref: { document: "cluster", section: "5.2.5.5.2" }
                },

                {
                    tag: "datatype", name: "OperationSource", id: 0x2, type: "OperationSourceEnum", conformance: "M",
                    constraint: "Unspecified, Keypad, Remote",
                    details: "The source of the user data change.",
                    xref: { document: "cluster", section: "5.2.5.5.3" }
                },

                {
                    tag: "datatype", name: "UserIndex", id: 0x3, type: "uint16", conformance: "M", quality: "X",
                    details: "The lock UserIndex associated with the change (if any). This SHALL be null if there is no specific " +
                             "user associated with the data operation. This SHALL be 0xFFFE if all users are affected (e.g. Clear " +
                             "Users).",
                    xref: { document: "cluster", section: "5.2.5.5.4" }
                },

                {
                    tag: "datatype", name: "FabricIndex", id: 0x4, type: "fabric-idx", conformance: "M", quality: "X",
                    details: "The fabric index of the fabric that performed the change (if any). This SHALL be null if there is " +
                             "no fabric that can be determined to have caused the change. This SHALL NOT be null if the operation " +
                             "source is \"Remote\".",
                    xref: { document: "cluster", section: "5.2.5.5.5" }
                },

                {
                    tag: "datatype", name: "SourceNode", id: 0x5, type: "node-id", conformance: "M", quality: "X",
                    details: "The Node ID that that performed the change (if any). The Node ID of the node that performed the " +
                             "change. This SHALL be null if there was no Node involved in the change. This SHALL NOT be null if " +
                             "the operation source is \"Remote\".",
                    xref: { document: "cluster", section: "5.2.5.5.6" }
                },

                {
                    tag: "datatype", name: "DataIndex", id: 0x6, type: "uint16", conformance: "M", quality: "X",
                    details: "This is the index of the specific item that was changed (e.g. schedule, PIN, RFID, etc.) in the " +
                             "list of items identified by LockDataType. This SHALL be null if the LockDataType does not " +
                             "correspond to a list that can be indexed into (e.g. ProgrammingUser). This SHALL be 0xFFFE if all " +
                             "indices are affected (e.g. Clear PIN Code, Clear RFID Code, Clear Week Day Schedule, Clear Year Day " +
                             "Schedule, etc.).",
                    xref: { document: "cluster", section: "5.2.5.5.7" }
                }
            ]
        },

        {
            tag: "command", name: "LockDoor", id: 0x0, access: "O T", conformance: "M", direction: "request",
            response: "status",
            xref: { document: "cluster", section: "5.2.4" },
            children: [ { tag: "datatype", name: "PinCode", type: "octstr", conformance: "O" } ]
        },

        {
            tag: "command", name: "UnlockDoor", id: 0x1, access: "O T", conformance: "M", direction: "request",
            response: "status",
            xref: { document: "cluster", section: "5.2.4" },
            children: [ { tag: "datatype", name: "PinCode", type: "octstr", conformance: "O" } ]
        },

        {
            tag: "command", name: "Toggle", id: 0x2, access: "O T", conformance: "X", direction: "request",
            response: "status",
            xref: { document: "cluster", section: "5.2.4" }
        },

        {
            tag: "command", name: "UnlockWithTimeout", id: 0x3, access: "O T", conformance: "O",
            direction: "request", response: "status",
            xref: { document: "cluster", section: "5.2.4" },
            children: [
                { tag: "datatype", name: "Timeout", type: "uint16", conformance: "M" },
                { tag: "datatype", name: "PinCode", type: "octstr", conformance: "O" }
            ]
        },

        {
            tag: "command", name: "GetLogRecord", id: 0x4, access: "M", conformance: "LOG",
            direction: "request", response: "GetLogRecordResponse",
            xref: { document: "cluster", section: "5.2.4" }
        },
        {
            tag: "command", name: "GetLogRecordResponse", id: 0x4, conformance: "LOG", direction: "response",
            xref: { document: "cluster", section: "5.2.4" }
        },
        {
            tag: "command", name: "SetPinCode", id: 0x5, access: "A T", conformance: "!USR & PIN",
            direction: "request", response: "status",
            xref: { document: "cluster", section: "5.2.4" }
        },
        {
            tag: "command", name: "GetPinCode", id: 0x6, access: "A", conformance: "!USR & PIN",
            direction: "request", response: "GetPinCodeResponse",
            xref: { document: "cluster", section: "5.2.4" }
        },
        {
            tag: "command", name: "GetPinCodeResponse", id: 0x6, conformance: "!USR & PIN",
            direction: "response",
            xref: { document: "cluster", section: "5.2.4" }
        },
        {
            tag: "command", name: "ClearPinCode", id: 0x7, access: "A T", conformance: "!USR & PIN",
            direction: "request", response: "status",
            xref: { document: "cluster", section: "5.2.4" }
        },
        {
            tag: "command", name: "ClearAllPinCodes", id: 0x8, access: "A T", conformance: "!USR & PIN",
            direction: "request", response: "status",
            xref: { document: "cluster", section: "5.2.4" }
        },
        {
            tag: "command", name: "SetUserStatus", id: 0x9, access: "A", conformance: "!USR & (PIN | RID)",
            direction: "request", response: "status",
            xref: { document: "cluster", section: "5.2.4" }
        },
        {
            tag: "command", name: "GetUserStatus", id: 0xa, access: "A", conformance: "!USR & (PIN | RID)",
            direction: "request", response: "GetUserStatusResponse",
            xref: { document: "cluster", section: "5.2.4" }
        },
        {
            tag: "command", name: "GetUserStatusResponse", id: 0xa, conformance: "!USR", direction: "response",
            xref: { document: "cluster", section: "5.2.4" }
        },

        {
            tag: "command", name: "SetWeekDaySchedule", id: 0xb, access: "R A", conformance: "WDSCH",
            direction: "request", response: "status",
            xref: { document: "cluster", section: "5.2.4" },

            children: [
                { tag: "datatype", name: "WeekDayIndex", type: "uint8", conformance: "M" },
                { tag: "datatype", name: "UserIndex", type: "uint16", conformance: "M" },
                { tag: "datatype", name: "DaysMask", type: "DaysMaskMap", conformance: "M" },
                { tag: "datatype", name: "StartHour", type: "uint8", conformance: "M" },
                { tag: "datatype", name: "StartMinute", type: "uint8", conformance: "M" },
                { tag: "datatype", name: "EndHour", type: "uint8", conformance: "M" },
                { tag: "datatype", name: "EndMinute", type: "uint8", conformance: "M" }
            ]
        },

        {
            tag: "command", name: "GetWeekDaySchedule", id: 0xc, access: "R A", conformance: "WDSCH",
            direction: "request", response: "GetWeekDayScheduleResponse",
            xref: { document: "cluster", section: "5.2.4" },
            children: [
                { tag: "datatype", name: "WeekDayIndex", type: "uint8", conformance: "M" },
                { tag: "datatype", name: "UserIndex", type: "uint16", conformance: "M" }
            ]
        },

        {
            tag: "command", name: "GetWeekDayScheduleResponse", id: 0xc, conformance: "WDSCH",
            direction: "response",
            xref: { document: "cluster", section: "5.2.4" },

            children: [
                { tag: "datatype", name: "WeekDayIndex", type: "uint8", conformance: "M" },
                { tag: "datatype", name: "UserIndex", type: "uint16", conformance: "M" },
                { tag: "datatype", name: "Status", type: "DlStatus", conformance: "M" },
                { tag: "datatype", name: "DaysMask", type: "DaysMaskMap", conformance: "O" },
                { tag: "datatype", name: "StartHour", type: "uint8", conformance: "O" },
                { tag: "datatype", name: "StartMinute", type: "uint8", conformance: "O" },
                { tag: "datatype", name: "EndHour", type: "uint8", conformance: "O" },
                { tag: "datatype", name: "EndMinute", type: "uint8", conformance: "O" }
            ]
        },

        {
            tag: "command", name: "ClearWeekDaySchedule", id: 0xd, access: "R A", conformance: "WDSCH",
            direction: "request", response: "status",
            xref: { document: "cluster", section: "5.2.4" },
            children: [
                { tag: "datatype", name: "WeekDayIndex", type: "uint8", conformance: "M" },
                { tag: "datatype", name: "UserIndex", type: "uint16", conformance: "M" }
            ]
        },

        {
            tag: "command", name: "SetYearDaySchedule", id: 0xe, access: "R A", conformance: "YDSCH",
            direction: "request", response: "status",
            xref: { document: "cluster", section: "5.2.4" },

            children: [
                { tag: "datatype", name: "YearDayIndex", type: "uint8", conformance: "M" },
                { tag: "datatype", name: "UserIndex", type: "uint16", conformance: "M" },
                { tag: "datatype", name: "LocalStartTime", type: "epoch-s", conformance: "M" },
                { tag: "datatype", name: "LocalEndTime", type: "epoch-s", conformance: "M" }
            ]
        },

        {
            tag: "command", name: "GetYearDaySchedule", id: 0xf, access: "R A", conformance: "YDSCH",
            direction: "request", response: "GetYearDayScheduleResponse",
            xref: { document: "cluster", section: "5.2.4" },
            children: [
                { tag: "datatype", name: "YearDayIndex", type: "uint8", conformance: "M" },
                { tag: "datatype", name: "UserIndex", type: "uint16", conformance: "M" }
            ]
        },

        {
            tag: "command", name: "GetYearDayScheduleResponse", id: 0xf, conformance: "YDSCH",
            direction: "response",
            xref: { document: "cluster", section: "5.2.4" },

            children: [
                { tag: "datatype", name: "YearDayIndex", type: "uint8", conformance: "M" },
                { tag: "datatype", name: "UserIndex", type: "uint16", conformance: "M" },
                { tag: "datatype", name: "Status", type: "DlStatus", conformance: "M" },
                { tag: "datatype", name: "LocalStartTime", type: "epoch-s", conformance: "O" },
                { tag: "datatype", name: "LocalEndTime", type: "epoch-s", conformance: "O" }
            ]
        },

        {
            tag: "command", name: "ClearYearDaySchedule", id: 0x10, access: "R A", conformance: "YDSCH",
            direction: "request", response: "status",
            xref: { document: "cluster", section: "5.2.4" },
            children: [
                { tag: "datatype", name: "YearDayIndex", type: "uint8", conformance: "M" },
                { tag: "datatype", name: "UserIndex", type: "uint16", conformance: "M" }
            ]
        },

        {
            tag: "command", name: "SetHolidaySchedule", id: 0x11, access: "R A", conformance: "HDSCH",
            direction: "request", response: "status",
            xref: { document: "cluster", section: "5.2.4" },

            children: [
                { tag: "datatype", name: "HolidayIndex", type: "uint8", conformance: "M" },
                { tag: "datatype", name: "LocalStartTime", type: "epoch-s", conformance: "M" },
                { tag: "datatype", name: "LocalEndTime", type: "epoch-s", conformance: "M" },
                { tag: "datatype", name: "OperatingMode", type: "OperatingModeEnum", conformance: "M" }
            ]
        },

        {
            tag: "command", name: "GetHolidaySchedule", id: 0x12, access: "R A", conformance: "HDSCH",
            direction: "request", response: "GetHolidayScheduleResponse",
            xref: { document: "cluster", section: "5.2.4" },
            children: [ { tag: "datatype", name: "HolidayIndex", type: "uint8", conformance: "M" } ]
        },

        {
            tag: "command", name: "GetHolidayScheduleResponse", id: 0x12, conformance: "HDSCH",
            direction: "response",
            xref: { document: "cluster", section: "5.2.4" },

            children: [
                { tag: "datatype", name: "HolidayIndex", type: "uint8", conformance: "M" },
                { tag: "datatype", name: "Status", type: "DlStatus", conformance: "M" },
                { tag: "datatype", name: "LocalStartTime", type: "epoch-s", conformance: "O" },
                { tag: "datatype", name: "LocalEndTime", type: "epoch-s", conformance: "O" },
                { tag: "datatype", name: "OperatingMode", type: "OperatingModeEnum", conformance: "O" }
            ]
        },

        {
            tag: "command", name: "ClearHolidaySchedule", id: 0x13, access: "R A", conformance: "HDSCH",
            direction: "request", response: "status",
            xref: { document: "cluster", section: "5.2.4" },
            children: [ { tag: "datatype", name: "HolidayIndex", type: "uint8", conformance: "M" } ]
        },

        {
            tag: "command", name: "SetUserType", id: 0x14, access: "A", conformance: "!USR & (PIN | RID)",
            direction: "request", response: "status",
            xref: { document: "cluster", section: "5.2.4" }
        },
        {
            tag: "command", name: "GetUserType", id: 0x15, access: "A", conformance: "!USR & (PIN | RID)",
            direction: "request", response: "GetUserTypeResponse",
            xref: { document: "cluster", section: "5.2.4" }
        },
        {
            tag: "command", name: "GetUserTypeResponse", id: 0x15, conformance: "!USR", direction: "response",
            xref: { document: "cluster", section: "5.2.4" }
        },
        {
            tag: "command", name: "SetRfidCode", id: 0x16, access: "A T", conformance: "!USR & RID",
            direction: "request", response: "status",
            xref: { document: "cluster", section: "5.2.4" }
        },
        {
            tag: "command", name: "GetRfidCode", id: 0x17, access: "A", conformance: "!USR & RID",
            direction: "request", response: "GetRfidCodeResponse",
            xref: { document: "cluster", section: "5.2.4" }
        },
        {
            tag: "command", name: "GetRfidCodeResponse", id: 0x17, conformance: "!USR & RID",
            direction: "response",
            xref: { document: "cluster", section: "5.2.4" }
        },
        {
            tag: "command", name: "ClearRfidCode", id: 0x18, access: "A T", conformance: "!USR & RID",
            direction: "request", response: "status",
            xref: { document: "cluster", section: "5.2.4" }
        },
        {
            tag: "command", name: "ClearAllRfidCodes", id: 0x19, access: "A T", conformance: "!USR & RID",
            direction: "request", response: "status",
            xref: { document: "cluster", section: "5.2.4" }
        },

        {
            tag: "command", name: "SetUser", id: 0x1a, access: "R A", conformance: "USR", direction: "request",
            response: "status",
            xref: { document: "cluster", section: "5.2.4" },

            children: [
                { tag: "datatype", name: "OperationType", type: "DataOperationTypeEnum", conformance: "M" },
                { tag: "datatype", name: "UserIndex", type: "uint16", conformance: "M" },
                { tag: "datatype", name: "UserName", type: "string", conformance: "M", quality: "X" },
                { tag: "datatype", name: "UserUniqueId", type: "uint32", conformance: "M", quality: "X" },
                { tag: "datatype", name: "UserStatus", type: "UserStatusEnum", conformance: "M", quality: "X" },
                { tag: "datatype", name: "UserType", type: "UserTypeEnum", conformance: "M", quality: "X" },
                { tag: "datatype", name: "CredentialRule", type: "CredentialRuleEnum", conformance: "M", quality: "X" }
            ]
        },

        {
            tag: "command", name: "GetUser", id: 0x1b, access: "R A", conformance: "USR", direction: "request",
            response: "GetUserResponse",
            xref: { document: "cluster", section: "5.2.4" },
            children: [ { tag: "datatype", name: "UserIndex", type: "uint16", conformance: "M" } ]
        },

        {
            tag: "command", name: "GetUserResponse", id: 0x1c, conformance: "USR", direction: "response",
            xref: { document: "cluster", section: "5.2.4" },

            children: [
                { tag: "datatype", name: "UserIndex", type: "uint16", conformance: "M" },
                { tag: "datatype", name: "UserName", type: "string", conformance: "M", quality: "X" },
                { tag: "datatype", name: "UserUniqueId", type: "uint32", conformance: "M", quality: "X" },
                { tag: "datatype", name: "UserStatus", type: "UserStatusEnum", conformance: "M", quality: "X" },
                { tag: "datatype", name: "UserType", type: "UserTypeEnum", conformance: "M", quality: "X" },
                { tag: "datatype", name: "CredentialRule", type: "CredentialRuleEnum", conformance: "M", quality: "X" },
                { tag: "datatype", name: "Credentials", type: "CredentialStruct", conformance: "M", quality: "X" },
                { tag: "datatype", name: "CreatorFabricIndex", type: "fabric-idx", conformance: "M", quality: "X" },
                {
                    tag: "datatype", name: "LastModifiedFabricIndex", type: "fabric-idx", conformance: "M",
                    quality: "X"
                },
                { tag: "datatype", name: "NextUserIndex", type: "uint16", conformance: "M", quality: "X" }
            ]
        },

        {
            tag: "command", name: "ClearUser", id: 0x1d, access: "R A", conformance: "USR",
            direction: "request", response: "status",
            xref: { document: "cluster", section: "5.2.4" },
            children: [ { tag: "datatype", name: "UserIndex", type: "uint16", conformance: "M" } ]
        },

        {
            tag: "command", name: "OperatingEventNotification", id: 0x20, conformance: "[NOT]",
            direction: "response",
            xref: { document: "cluster", section: "5.2.4" }
        },
        {
            tag: "command", name: "ProgrammingEventNotification", id: 0x21, conformance: "[NOT]",
            direction: "response",
            xref: { document: "cluster", section: "5.2.4" }
        },

        {
            tag: "command", name: "SetCredential", id: 0x22, access: "R A", conformance: "USR",
            direction: "request", response: "SetCredentialResponse",
            xref: { document: "cluster", section: "5.2.4" },

            children: [
                { tag: "datatype", name: "OperationType", type: "DataOperationTypeEnum", conformance: "M" },
                { tag: "datatype", name: "Credential", type: "CredentialStruct", conformance: "M" },
                { tag: "datatype", name: "CredentialData", type: "octstr", conformance: "M" },
                { tag: "datatype", name: "UserIndex", type: "uint16", conformance: "M", quality: "X" },
                { tag: "datatype", name: "UserStatus", type: "UserStatusEnum", conformance: "M", quality: "X" },
                { tag: "datatype", name: "UserType", type: "UserTypeEnum", conformance: "M", quality: "X" }
            ]
        },

        {
            tag: "command", name: "SetCredentialResponse", id: 0x23, conformance: "USR", direction: "response",
            xref: { document: "cluster", section: "5.2.4" },
            children: [
                { tag: "datatype", name: "Status", type: "DlStatus", conformance: "M" },
                { tag: "datatype", name: "UserIndex", type: "uint16", conformance: "M", quality: "X" },
                { tag: "datatype", name: "NextCredentialIndex", type: "uint16", conformance: "M", quality: "X" }
            ]
        },

        {
            tag: "command", name: "GetCredentialStatus", id: 0x24, access: "R A", conformance: "USR",
            direction: "request", response: "GetCredentialStatusResponse",
            xref: { document: "cluster", section: "5.2.4" },
            children: [ { tag: "datatype", name: "Credential", type: "CredentialStruct", conformance: "M" } ]
        },

        {
            tag: "command", name: "GetCredentialStatusResponse", id: 0x25, conformance: "USR",
            direction: "response",
            xref: { document: "cluster", section: "5.2.4" },

            children: [
                { tag: "datatype", name: "CredentialExists", type: "bool", conformance: "M" },
                { tag: "datatype", name: "UserIndex", type: "uint16", conformance: "M", quality: "X" },
                { tag: "datatype", name: "CreatorFabricIndex", type: "fabric-idx", conformance: "M", quality: "X" },
                {
                    tag: "datatype", name: "LastModifiedFabricIndex", type: "fabric-idx", conformance: "M",
                    quality: "X"
                },
                { tag: "datatype", name: "NextCredentialIndex", type: "uint16", conformance: "M", quality: "X" }
            ]
        },

        {
            tag: "command", name: "ClearCredential", id: 0x26, access: "R A", conformance: "USR",
            direction: "request", response: "status",
            xref: { document: "cluster", section: "5.2.4" },
            children: [ { tag: "datatype", name: "Credential", type: "CredentialStruct", conformance: "M", quality: "X" } ]
        },

        {
            tag: "datatype", name: "AlarmCodeEnum", type: "enum8", conformance: "M",
            details: "The Alarm Code enum SHALL indicate the alarm type. The data type of the Alarm Code enum is derived " +
                     "from enum8.",
            xref: { document: "cluster", section: "5.2.6.1" },

            children: [
                {
                    tag: "datatype", name: "LockJammed", id: 0x0, conformance: "M",
                    description: "Locking Mechanism Jammed"
                },
                {
                    tag: "datatype", name: "LockFactoryReset", id: 0x1, conformance: "O",
                    description: "Lock Reset to Factory Defaults"
                },
                {
                    tag: "datatype", name: "LockRadioPowerCycled", id: 0x3, conformance: "O",
                    description: "Lock Radio Power Cycled"
                },
                {
                    tag: "datatype", name: "WrongCodeEntryLimit", id: 0x4, conformance: "[USR]",
                    description: "Tamper Alarm - wrong code entry limit"
                },
                {
                    tag: "datatype", name: "FrontEsceutcheonRemoved", id: 0x5, conformance: "O",
                    description: "Tamper Alarm - front escutcheon removed from main"
                },
                {
                    tag: "datatype", name: "DoorForcedOpen", id: 0x6, conformance: "[DPS]",
                    description: "Forced Door Open under Door Locked Condition"
                },
                { tag: "datatype", name: "DoorAjar", id: 0x7, conformance: "[DPS]", description: "Door ajar" },
                {
                    tag: "datatype", name: "ForcedUser", id: 0x8, conformance: "[USR]",
                    description: "Force User SOS alarm"
                }
            ]
        },

        {
            tag: "datatype", name: "CredentialRuleEnum", type: "enum8", conformance: "M",
            details: "The CredentialRule enum used in various commands SHALL indicate the credential rule that can be " +
                     "applied to a particular user. The data type of the CredentialRule enum is derived from enum8.",
            xref: { document: "cluster", section: "5.2.6.2" },
            children: [
                { tag: "datatype", name: "Single", id: 0x0, conformance: "USR" },
                { tag: "datatype", name: "Dual", id: 0x1, conformance: "[USR]" },
                { tag: "datatype", name: "Tri", id: 0x2, conformance: "[USR]" }
            ]
        },

        {
            tag: "datatype", name: "CredentialStruct", type: "struct", conformance: "M",
            details: "The CredentialStruct is used in LockOperation event and Get User Record Response command and SHALL " +
                     "indicate the credential types and their corresponding indices (if any) for the event or user record.",
            xref: { document: "cluster", section: "5.2.6.3" },

            children: [
                {
                    tag: "datatype", name: "CredentialType", id: 0x0, type: "CredentialTypeEnum", conformance: "M",
                    details: "The credential type used to authorize the lock operation.",
                    xref: { document: "cluster", section: "5.2.6.3.1" }
                },

                {
                    tag: "datatype", name: "CredentialIndex", id: 0x1, type: "uint16", conformance: "M",
                    details: "This is the index of the specific credential used to authorize the lock operation in the list of " +
                             "credentials identified by CredentialType (e.g. schedule, PIN, RFID, etc.). This SHALL be set to 0 " +
                             "if CredentialType is ProgrammingPIN or does not correspond to a list that can be indexed into.",
                    xref: { document: "cluster", section: "5.2.6.3.2" }
                }
            ]
        },

        {
            tag: "datatype", name: "CredentialTypeEnum", type: "enum8", conformance: "M",
            details: "The Credential Type enum SHALL indicate the credential type. The data type of the Credential Type " +
                     "enum is derived from enum8.",
            xref: { document: "cluster", section: "5.2.6.4" },

            children: [
                { tag: "datatype", name: "ProgrammingPin", id: 0x0, conformance: "O" },
                { tag: "datatype", name: "Pin", id: 0x1, conformance: "PIN" },
                { tag: "datatype", name: "Rfid", id: 0x2, conformance: "RID" },
                { tag: "datatype", name: "Fingerprint", id: 0x3, conformance: "FGP" },
                { tag: "datatype", name: "FingerVein", id: 0x4, conformance: "FGP" },
                { tag: "datatype", name: "Face", id: 0x5, conformance: "FACE" }
            ]
        },

        {
            tag: "datatype", name: "DataOperationTypeEnum", type: "enum8", conformance: "M",
            details: "The DataOperationType enum SHALL indicate the data operation performed. The data type of the " +
                     "DataOperationType enum is derived from enum8.",
            xref: { document: "cluster", section: "5.2.6.5" },

            children: [
                {
                    tag: "datatype", name: "Add", id: 0x0, conformance: "M",
                    description: "Data is being added or was added"
                },
                {
                    tag: "datatype", name: "Clear", id: 0x1, conformance: "M",
                    description: "Data is being cleared or was cleared"
                },
                {
                    tag: "datatype", name: "Modify", id: 0x2, conformance: "M",
                    description: "Data is being modified or was modified"
                }
            ]
        },

        {
            tag: "datatype", name: "DaysMaskMap", type: "map8", conformance: "M",
            details: "The DaysMask field used in various commands and SHALL indicate the days of the week the Week Day " +
                     "schedule applies for. The data type of the DaysMask field is derived from map8.",
            xref: { document: "cluster", section: "5.2.6.6" },

            children: [
                { tag: "datatype", name: "Sunday", id: 0x0 },
                { tag: "datatype", name: "Tuesday", id: 0x2, conformance: "M" },
                { tag: "datatype", name: "Wednesday", id: 0x8, conformance: "M" },
                { tag: "datatype", name: "Thursday", id: 0x10, conformance: "M" },
                { tag: "datatype", name: "Friday", id: 0x20, conformance: "M" },
                { tag: "datatype", name: "Saturday", id: 0x40, conformance: "M" }
            ]
        },

        {
            tag: "datatype", name: "DoorStateEnum", type: "enum8", conformance: "M",
            details: "The DoorState enumeration SHALL indicate the current door state. The data type of the DoorState",
            xref: { document: "cluster", section: "5.2.6.7" },

            children: [
                { tag: "datatype", name: "DoorOpen", id: 0x0, conformance: "DPS", description: "Door state is open" },
                {
                    tag: "datatype", name: "DoorClosed", id: 0x1, conformance: "DPS",
                    description: "Door state is closed"
                },
                {
                    tag: "datatype", name: "DoorJammed", id: 0x2, conformance: "[DPS]",
                    description: "Door state is jammed"
                },
                {
                    tag: "datatype", name: "DoorForcedOpen", id: 0x3, conformance: "[DPS]",
                    description: "Door state is currently forced open"
                },
                {
                    tag: "datatype", name: "DoorUnspecifiedError", id: 0x4, conformance: "[DPS]",
                    description: "Door state is invalid for unspecified reason"
                },
                { tag: "datatype", name: "DoorAjar", id: 0x5, conformance: "[DPS]", description: "Door state is ajar" }
            ]
        },

        {
            tag: "datatype", name: "DoorLockStatus", type: "status",
            details: "The cluster-specific status codes for the Door Lock cluster are as follows:",
            xref: { document: "cluster", section: "5.2.6.8" }
        },

        {
            tag: "datatype", name: "LockDataTypeEnum", type: "enum8", conformance: "M",
            details: "The LockDataType enum SHALL indicate the data type that is being or has changed. The data type of " +
                     "the DataType enum is derived from enum8.",
            xref: { document: "cluster", section: "5.2.6.9" },

            children: [
                {
                    tag: "datatype", name: "Unspecified", id: 0x0, conformance: "O",
                    description: "Unspecified or manufacturer specific lock user data added, cleared, or modified."
                },
                {
                    tag: "datatype", name: "ProgrammingCode", id: 0x1, conformance: "O",
                    description: "Lock programming PIN code was added, cleared, or modified."
                },
                {
                    tag: "datatype", name: "UserIndex", id: 0x2, conformance: "M",
                    description: "Lock user index was added, cleared, or modified."
                },
                {
                    tag: "datatype", name: "WeekDaySchedule", id: 0x3, conformance: "WDSCH",
                    description: "Lock user week day schedule was added, cleared, or modified."
                },
                {
                    tag: "datatype", name: "YearDaySchedule", id: 0x4, conformance: "YDSCH",
                    description: "Lock user year day schedule was added, cleared, or modified."
                },
                {
                    tag: "datatype", name: "HolidaySchedule", id: 0x5, conformance: "HDSCH",
                    description: "Lock holiday schedule was added, cleared, or modified."
                },
                {
                    tag: "datatype", name: "Pin", id: 0x6, conformance: "PIN",
                    description: "Lock user PIN code was added, cleared, or modified."
                },
                {
                    tag: "datatype", name: "Rfid", id: 0x7, conformance: "RID",
                    description: "Lock user RFID code was added, cleared, or modified."
                },
                {
                    tag: "datatype", name: "Fingerprint", id: 0x8, conformance: "FGP",
                    description: "Lock user fingerprint was added, cleared, or modified."
                },
                {
                    tag: "datatype", name: "FingerVein", id: 0x9, conformance: "FGP",
                    description: "Lock user finger-vein information was added, cleared, or modified."
                },
                {
                    tag: "datatype", name: "Face", id: 0xa, conformance: "FACE",
                    description: "Lock user face information was added, cleared, or modified."
                }
            ]
        },

        {
            tag: "datatype", name: "LockOperationTypeEnum", type: "enum8", conformance: "M",
            details: "The LockOperationType enumeration SHALL indicate the type of Lock operation performed. The data " +
                     "type of the LockOperationType enum field is derived from enum8.",
            xref: { document: "cluster", section: "5.2.6.10" },

            children: [
                { tag: "datatype", name: "Lock", id: 0x0, conformance: "M" },
                { tag: "datatype", name: "Unlock", id: 0x1, conformance: "M" },
                { tag: "datatype", name: "NonAccessUserEvent", id: 0x2, conformance: "O" },
                { tag: "datatype", name: "ForcedUserEvent", id: 0x3, conformance: "O" }
            ]
        },

        {
            tag: "datatype", name: "OperationErrorEnum", type: "enum8", conformance: "M",
            details: "The OperationError enumeration SHALL indicate the error cause of the Lock/Unlock operation " +
                     "performed. The data type of the OperationError enum field is derived from enum8.",
            xref: { document: "cluster", section: "5.2.6.11" },

            children: [
                { tag: "datatype", name: "Unspecified", id: 0x0, conformance: "O" },
                { tag: "datatype", name: "InvalidCredential", id: 0x1, conformance: "USR" },
                { tag: "datatype", name: "DisabledUserDenied", id: 0x2, conformance: "M" },
                { tag: "datatype", name: "Restricted", id: 0x3, conformance: "WDSCH | YDSCH" },
                { tag: "datatype", name: "InsufficientBattery", id: 0x4, conformance: "O" }
            ]
        },

        {
            tag: "datatype", name: "OperatingModeEnum", type: "enum8", conformance: "M",
            details: "The OperatingMode enumeration SHALL indicate the lock operating mode. The data type of the " +
                     "OperatingMode enum field is derived from enum8.",
            xref: { document: "cluster", section: "5.2.6.12" },

            children: [
                {
                    tag: "datatype", name: "Normal", id: 0x0, conformance: "M",
                    details: "The lock operates normally. All interfaces are enabled.",
                    xref: { document: "cluster", section: "5.2.6.12.1" }
                },
                {
                    tag: "datatype", name: "Vacation", id: 0x1, conformance: "O",
                    details: "Only remote interaction is enabled. The keypad SHALL only be operable by the master user.",
                    xref: { document: "cluster", section: "5.2.6.12.2" }
                },

                {
                    tag: "datatype", name: "Privacy", id: 0x2, conformance: "O",
                    details: "This mode is only possible if the door is locked. Manual unlocking changes the mode to Normal " +
                             "operating mode. All external interaction with the door lock is disabled. This mode is intended to " +
                             "be used so that users, presumably inside the property, will have control over the entrance.",
                    xref: { document: "cluster", section: "5.2.6.12.3" }
                },

                {
                    tag: "datatype", name: "NoRemoteLockUnlock", id: 0x3, conformance: "M",
                    details: "This mode only disables remote interaction with the lock. This does not apply to any remote " +
                             "proprietary means of communication. It specifically applies to the Lock, Unlock, Toggle, and Unlock " +
                             "with Timeout Commands.",
                    xref: { document: "cluster", section: "5.2.6.12.4" }
                },

                {
                    tag: "datatype", name: "Passage", id: 0x4, conformance: "O",
                    details: "The lock is open or can be opened or closed at will without the use of a Keypad or other means of " +
                             "user validation (e.g. a lock for a business during work hours).",
                    xref: { document: "cluster", section: "5.2.6.12.5" }
                }
            ]
        },

        {
            tag: "datatype", name: "OperationSourceEnum", type: "enum8", conformance: "M",
            details: "The OperationSource enumeration SHALL indicate the source of the Lock/Unlock operation performed. " +
                     "The data type of the OperationSource enum field is derived from enum8.",
            xref: { document: "cluster", section: "5.2.6.13" },

            children: [
                { tag: "datatype", name: "Unspecified", id: 0x0, conformance: "O" },
                { tag: "datatype", name: "Manual", id: 0x1, conformance: "O" },
                { tag: "datatype", name: "ProprietaryRemote", id: 0x2, conformance: "O" },
                { tag: "datatype", name: "Keypad", id: 0x3, conformance: "O" },
                { tag: "datatype", name: "Auto", id: 0x4, conformance: "O" },
                { tag: "datatype", name: "Button", id: 0x5, conformance: "O" },
                { tag: "datatype", name: "Schedule", id: 0x6, conformance: "HDSCH" },
                { tag: "datatype", name: "Remote", id: 0x7, conformance: "M" },
                { tag: "datatype", name: "Rfid", id: 0x8, conformance: "RID" },
                { tag: "datatype", name: "Biometric", id: 0x9, conformance: "[USR]" }
            ]
        },

        {
            tag: "datatype", name: "UserStatusEnum", type: "enum8", conformance: "M",
            details: "The UserStatus enum used in various commands SHALL indicate what the status is for a specific user " +
                     "ID.",
            xref: { document: "cluster", section: "5.2.6.15" },
            children: [
                { tag: "datatype", name: "Available", id: 0x0, conformance: "M" },
                { tag: "datatype", name: "OccupiedEnabled", id: 0x1, conformance: "M" },
                { tag: "datatype", name: "OccupiedDisabled", id: 0x3, conformance: "O" }
            ]
        },

        {
            tag: "datatype", name: "UserTypeEnum", type: "enum8", conformance: "M",
            details: "The UserType enum used in various commands SHALL indicate what the type is for a specific user ID.",
            xref: { document: "cluster", section: "5.2.6.16" },

            children: [
                {
                    tag: "datatype", name: "UnrestrictedUser", id: 0x0, conformance: "M",
                    details: "User has access 24/7 provided proper PIN or RFID is supplied (e.g., owner).",
                    xref: { document: "cluster", section: "5.2.6.16.1" }
                },
                {
                    tag: "datatype", name: "YearDayScheduleUser", id: 0x1, conformance: "O",
                    details: "User has ability to open lock within a specific time period (e.g., guest).",
                    xref: { document: "cluster", section: "5.2.6.16.2" }
                },

                {
                    tag: "datatype", name: "WeekDayScheduleUser", id: 0x2, conformance: "O",
                    details: "User has ability to open lock based on specific time period within a reoccurring weekly schedule " +
                             "(e.g., cleaning worker).",
                    xref: { document: "cluster", section: "5.2.6.16.3" }
                },

                {
                    tag: "datatype", name: "ProgrammingUser", id: 0x3, conformance: "O",
                    details: "User has ability to both program and operate the door lock. This user can manage the users and user " +
                             "schedules. In all other respects this user matches the unrestricted (default) user. ProgrammingUser " +
                             "is the only user that can disable the user interface (keypad, remote, etc…).",
                    xref: { document: "cluster", section: "5.2.6.16.4" }
                },

                {
                    tag: "datatype", name: "NonAccessUser", id: 0x4, conformance: "O",
                    details: "User is recognized by the lock but does not have the ability to open the lock. This user will only " +
                             "cause the lock to generate the appropriate event notification to any bound devices.",
                    xref: { document: "cluster", section: "5.2.6.16.5" }
                },

                {
                    tag: "datatype", name: "ForcedUser", id: 0x5, conformance: "[USR]",
                    details: "User has ability to open lock but a ForcedUser LockOperationType and ForcedUser silent alarm will " +
                             "be emitted to allow a notified Node to alert emergency services or contacts on the user account " +
                             "when used.",
                    xref: { document: "cluster", section: "5.2.6.16.6" }
                },

                {
                    tag: "datatype", name: "DisposableUser", id: 0x6, conformance: "[USR]",
                    details: "User has ability to open lock once after which the lock SHALL change the corresponding user record " +
                             "UserStatus value to OccupiedDisabled automatically.",
                    xref: { document: "cluster", section: "5.2.6.16.7" }
                },

                {
                    tag: "datatype", name: "ExpiringUser", id: 0x7, conformance: "[USR]",
                    details: "User has ability to open lock for ExpiringUserTimeout attribute minutes after the first use of the " +
                             "PIN code, RFID code, Fingerprint, or other credential. After ExpiringUserTimeout minutes the " +
                             "corresponding user record UserStatus value SHALL be set to OccupiedDisabled automatically by the " +
                             "lock. The lock SHALL persist the timeout across reboots such that the ExpiringUserTimeout is " +
                             "honored.",
                    xref: { document: "cluster", section: "5.2.6.16.8" }
                },

                {
                    tag: "datatype", name: "ScheduleRestrictedUser", id: 0x8, conformance: "WDSCH | YDSCH",
                    details: "User access is restricted by Week Day and/or Year Day schedule.",
                    xref: { document: "cluster", section: "5.2.6.16.9" }
                },

                {
                    tag: "datatype", name: "RemoteOnlyUser", id: 0x9, conformance: "USR & COTA",
                    details: "User access and PIN code is restricted to remote lock/unlock commands only. This type of user might " +
                             "be useful for regular delivery services or voice assistant unlocking operations to prevent a PIN " +
                             "code credential created for them from being used at the keypad. The PIN code credential would only " +
                             "be provided over-the-air for the lock/unlock commands.",
                    xref: { document: "cluster", section: "5.2.6.16.10" }
                }
            ]
        },

        {
            tag: "datatype", name: "DlStatus", type: "enum8", conformance: "M",

            children: [
                { tag: "datatype", name: "Success", id: 0x0, conformance: "M" },
                { tag: "datatype", name: "Failure", id: 0x1, conformance: "M" },
                { tag: "datatype", name: "Duplicate", id: 0x2, conformance: "M" },
                { tag: "datatype", name: "Occupied", id: 0x3, conformance: "M" },
                { tag: "datatype", name: "InvalidField", id: 0x85, conformance: "M" },
                { tag: "datatype", name: "ResourceExhausted", id: 0x89, conformance: "M" },
                { tag: "datatype", name: "NotFound", id: 0x8b, conformance: "M" }
            ]
        }
    ]
});