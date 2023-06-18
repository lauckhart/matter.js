/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Matter } from "../Matter.js";

Matter.children.push({
    tag: "cluster", id: 0x0101, name: "DoorLock",
    classification: "application", description: "Door Lock",
    children: [
        {
            tag: "attribute", id: 0x0000, name: "LockState",
            access: "R V", conformance: "M", constraint: "desc", default: 0, quality: "X S P", type: "DlLockState",
            details: "This attribute has the following possible values",
            xref: { document: "cluster", section: "5.2.3.1" }
        },

        {
            tag: "attribute", id: 0x0001, name: "LockType",
            access: "R V", conformance: "M", constraint: "desc", default: 0, type: "DlLockType",
            details: "The LockType attribute is indicated by an enumeration",
            xref: { document: "cluster", section: "5.2.3.2" }
        },

        {
            tag: "attribute", id: 0x0002, name: "ActuatorEnabled",
            access: "R V", conformance: "M", default: false, type: "bool",
            details: "The ActuatorEnabled attribute indicates if the lock is currently able " +
                     "to (Enabled) or not able to (Disabled) process remote Lock, Unlock, or" +
                     " Unlock with Timeout commands",
            xref: { document: "cluster", section: "5.2.3.3" }
        },

        {
            tag: "attribute", id: 0x0003, name: "DoorState",
            access: "R V", conformance: "D, P, S", constraint: "desc", default: 0, quality: "X P", type: "DoorStateEnum",
            details: "The current door state as defined in DoorStateEnum",
            xref: { document: "cluster", section: "5.2.3.4" }
        },

        {
            tag: "attribute", id: 0x0004, name: "DoorOpenEvents",
            access: "RW VM", conformance: "[D, P, S]", default: 0, type: "uint32",
            details: "This attribute holds the number of door open events that have occurred" +
                     " since it was last zeroed",
            xref: { document: "cluster", section: "5.2.3.5" }
        },

        {
            tag: "attribute", id: 0x0005, name: "DoorClosedEvents",
            access: "RW VM", conformance: "[D, P, S]", default: 0, type: "uint32",
            details: "This attribute holds the number of door closed events that have " +
                     "occurred since it was last zeroed",
            xref: { document: "cluster", section: "5.2.3.6" }
        },

        {
            tag: "attribute", id: 0x0006, name: "OpenPeriod",
            access: "RW VM", conformance: "[D, P, S]", default: 0, type: "uint16",
            details: "This attribute holds the number of minutes the door has been open " +
                     "since the last time it transitioned from closed to open",
            xref: { document: "cluster", section: "5.2.3.7" }
        },

        {
            tag: "attribute", id: 0x0010, name: "NumberOfLogRecordsSupported",
            access: "R V", conformance: "LOG", default: 0, quality: "F", type: "uint16",
            details: "The number of available log records",
            xref: { document: "cluster", section: "5.2.3.8" }
        },

        {
            tag: "attribute", id: 0x0011, name: "NumTotalUsersSupported",
            access: "R V", conformance: "USR", default: 0, quality: "F", type: "uint16",
            details: "Number of total users supported by the lock",
            xref: { document: "cluster", section: "5.2.3.9" }
        },

        {
            tag: "attribute", id: 0x0012, name: "NumPinUsersSupported",
            access: "R V", conformance: "P, IN", default: 0, quality: "F", type: "uint16",
            details: "The number of PIN users supported",
            xref: { document: "cluster", section: "5.2.3.10" }
        },

        {
            tag: "attribute", id: 0x0013, name: "NumRfidUsersSupported",
            access: "R V", conformance: "RID", default: 0, quality: "F", type: "uint16",
            details: "The number of RFID users supported",
            xref: { document: "cluster", section: "5.2.3.11" }
        },

        {
            tag: "attribute", id: 0x0014, name: "NumWeekdaySchedulesSupportedPerUser",
            access: "R V", conformance: "WDSCH", default: 0, quality: "F", type: "uint8",
            details: "The number of configurable week day schedule supported per user",
            xref: { document: "cluster", section: "5.2.3.12" }
        },

        {
            tag: "attribute", id: 0x0015, name: "NumYeardaySchedulesSupportedPerUser",
            access: "R V", conformance: "YDSCH", default: 0, quality: "F", type: "uint8",
            details: "The number of configurable year day schedule supported per user",
            xref: { document: "cluster", section: "5.2.3.13" }
        },

        {
            tag: "attribute", id: 0x0016, name: "NumHolidaySchedulesSupported",
            access: "R V", conformance: "HDSCH", default: 0, quality: "F", type: "uint8",
            details: "The number of holiday schedules supported for the entire door lock " +
                     "device",
            xref: { document: "cluster", section: "5.2.3.14" }
        },

        {
            tag: "attribute", id: 0x0017, name: "MaxPinLength",
            access: "R V", conformance: "P, IN", default: "MS", quality: "F", type: "uint8",
            details: "An 8 bit value indicates the maximum length in bytes of a PIN Code on " +
                     "this device",
            xref: { document: "cluster", section: "5.2.3.15" }
        },

        {
            tag: "attribute", id: 0x0018, name: "MinPinLength",
            access: "R V", conformance: "P, IN", default: "MS", quality: "F", type: "uint8",
            details: "An 8 bit value indicates the minimum length in bytes of a PIN Code on " +
                     "this device",
            xref: { document: "cluster", section: "5.2.3.16" }
        },

        {
            tag: "attribute", id: 0x0019, name: "MaxRfidCodeLength",
            access: "R V", conformance: "RID", default: "MS", quality: "F", type: "uint8",
            details: "An 8 bit value indicates the maximum length in bytes of a RFID Code on" +
                     " this device. The value depends on the RFID code range specified by " +
                     "the manufacturer, if media anti-collision identifiers (UID) are used " +
                     "as RFID code, a value of 20 (equals 10 Byte ISO 14443A UID) is " +
                     "recommended",
            xref: { document: "cluster", section: "5.2.3.17" }
        },

        {
            tag: "attribute", id: 0x001a, name: "MinRfidCodeLength",
            access: "R V", conformance: "RID", default: "MS", quality: "F", type: "uint8",
            details: "An 8 bit value indicates the minimum length in bytes of a RFID Code on" +
                     " this device. The value depends on the RFID code range specified by " +
                     "the manufacturer, if media anti-collision identifiers (UID) are used " +
                     "as RFID code, a value of 8 (equals 4 Byte ISO 14443A UID) is " +
                     "recommended",
            xref: { document: "cluster", section: "5.2.3.18" }
        },

        {
            tag: "attribute", id: 0x001b, name: "CredentialRulesSupport",
            access: "R V", conformance: "USR", default: 1, quality: "F", type: "DlCredentialRuleMask",
            details: "This bitmap contains a bit for every value of CredentialRuleEnum " +
                     "supported on this device",
            xref: { document: "cluster", section: "5.2.3.19" }
        },

        {
            tag: "attribute", id: 0x001c, name: "NumCredentialsSupportedPerUser",
            access: "R V", conformance: "USR", default: 0, quality: "F", type: "uint8",
            details: "The number of credentials that could be assigned for each user",
            xref: { document: "cluster", section: "5.2.3.20" }
        },

        {
            tag: "attribute", id: 0x0020, name: "EnableLogging",
            access: "R[W] VA", conformance: "LOG", default: true, quality: "P", type: "bool",
            details: "Enable/disable event logging. When event logging is enabled, all event" +
                     " messages are stored on the lock for retrieval. Logging events can be " +
                     "but not limited to Tamper Alarm, Lock, Unlock, AutoRelock, User Code " +
                     "Added, User Code Cleared, Schedule Added, and Schedule Cleared. For a " +
                     "full detail of all the possible alarms and events, please refer to the" +
                     " full list in the Alarm and Event Masks Attribute Set",
            xref: { document: "cluster", section: "5.2.3.21" }
        },

        {
            tag: "attribute", id: 0x0021, name: "Language",
            access: "RW VM", conformance: "O", constraint: "max 3", default: "MS", quality: "P", type: "string",
            details: "Modifies the language for the on-screen or audible user interface " +
                     "using a 2-byte language code from ISO-639-1",
            xref: { document: "cluster", section: "5.2.3.22" }
        },

        {
            tag: "attribute", id: 0x0022, name: "LedSettings",
            access: "RW VM", conformance: "O", constraint: "desc", default: 0, quality: "P", type: "uint8",
            details: "The settings for the LED support three different modes, shown below",
            xref: { document: "cluster", section: "5.2.3.25" }
        },

        {
            tag: "attribute", id: 0x0023, name: "AutoRelockTime",
            access: "RW VM", conformance: "O", default: "MS", quality: "P", type: "uint32",
            details: "The number of seconds to wait after unlocking a lock before it " +
                     "automatically locks again. 0=disabled. If set, unlock operations from " +
                     "any source will be timed. For one time unlock with timeout use the " +
                     "specific command",
            xref: { document: "cluster", section: "5.2.3.26" }
        },

        {
            tag: "attribute", id: 0x0024, name: "SoundVolume",
            access: "RW VM", conformance: "O", constraint: "desc", default: 0, quality: "P", type: "uint8",
            details: "The sound volume on a door lock has four possible settings: silent, " +
                     "low, high and medium volumes, shown below",
            xref: { document: "cluster", section: "5.2.3.27" }
        },

        {
            tag: "attribute", id: 0x0025, name: "OperatingMode",
            access: "RW VM", conformance: "M", constraint: "desc", default: 0, quality: "P", type: "OperatingModeEnum",
            details: "The current operating mode of the lock (see OperatingModeEnum",
            xref: { document: "cluster", section: "5.2.3.23" }
        },

        {
            tag: "attribute", id: 0x0026, name: "SupportedOperatingModes",
            access: "R V", conformance: "M", default: 65526, quality: "F", type: "DlSupportedOperatingModes",
            details: "This bitmap contains all operating bits of the Operating Mode " +
                     "Attribute supported by the lock. All operating modes NOT supported by " +
                     "a lock SHALL be set to one. The value of the OperatingMode enumeration" +
                     " defines the related bit to be set, as shown below",
            xref: { document: "cluster", section: "5.2.3.24" }
        },

        {
            tag: "attribute", id: 0x0027, name: "DefaultConfigurationRegister",
            access: "R V", conformance: "O", default: 0, quality: "P", type: "DlDefaultConfigurationRegister",
            details: "This attribute represents the default configurations as they are " +
                     "physically set on the device (example: hardware dip switch setting, " +
                     "etc…) and represents the default setting for some of the attributes " +
                     "within this cluster (for example: LED, Auto Lock, Sound Volume, and " +
                     "Operating Mode attributes",
            xref: { document: "cluster", section: "5.2.3.28" }
        },

        {
            tag: "attribute", id: 0x0028, name: "EnableLocalProgramming",
            access: "RW VA", conformance: "O", default: true, quality: "P", type: "bool",
            details: "Enable/disable local programming on the door lock of certain features" +
                     " (see LocalProgrammingFeatures attribute). If this value is set to " +
                     "TRUE then local programming is enabled on the door lock for all " +
                     "features. If it is set to FALSE then local programming is disabled on " +
                     "the door lock for those features whose bit is set to 0 in the " +
                     "LocalProgrammingFeatures attribute. Local programming SHALL be enabled" +
                     " by default",
            xref: { document: "cluster", section: "5.2.3.29" }
        },

        {
            tag: "attribute", id: 0x0029, name: "EnableOneTouchLocking",
            access: "RW VM", conformance: "O", default: true, quality: "P", type: "bool",
            details: "Enable/disable the ability to lock the door lock with a single touch " +
                     "on the door lock",
            xref: { document: "cluster", section: "5.2.3.30" }
        },

        {
            tag: "attribute", id: 0x002a, name: "EnableInsideStatusLed",
            access: "RW VM", conformance: "O", default: true, quality: "P", type: "bool",
            details: "Enable/disable an inside LED that allows the user to see at a glance " +
                     "if the door is locked",
            xref: { document: "cluster", section: "5.2.3.31" }
        },

        {
            tag: "attribute", id: 0x002b, name: "EnablePrivacyModeButton",
            access: "RW VM", conformance: "O", default: true, quality: "P", type: "bool",
            details: "Enable/disable a button inside the door that is used to put the lock " +
                     "into privacy mode. When the lock is in privacy mode it cannot be " +
                     "manipulated from the outside",
            xref: { document: "cluster", section: "5.2.3.32" }
        },

        {
            tag: "attribute", id: 0x002c, name: "LocalProgrammingFeatures",
            access: "RW VA", conformance: "O", default: 0, quality: "P", type: "DlLocalProgrammingFeatures",
            details: "The local programming features that will be disabled when " +
                     "EnableLocalProgramming attribute is set to False. If a door lock doesn" +
                     "’t support disabling one aspect of local programming it SHALL return " +
                     "CONSTRAINT_ERROR during a write operation of this attribute. If the " +
                     "EnableLocalProgramming attribute is set to True then all local " +
                     "programming features SHALL be enabled regardless of the bits set to 0 " +
                     "in this attribute",
            xref: { document: "cluster", section: "5.2.3.33" }
        },

        {
            tag: "attribute", id: 0x0030, name: "WrongCodeEntryLimit",
            access: "RW VA", conformance: "P, IN | RID", constraint: "1 to 255", default: "MS", quality: "P", type: "uint8",
            details: "The number of incorrect Pin codes or RFID presentment attempts a user " +
                     "is allowed to enter before the lock will enter a lockout state. The " +
                     "value of this attribute is compared to all failing forms of credential" +
                     " presentation, including Pin codes used in an Unlock Command when " +
                     "RequirePINforRemoteOperation is set to true. Valid range is 1-255 " +
                     "incorrect attempts. The lockout state will be for the duration of " +
                     "UserCodeTemporaryDisableTime. If the attribute accepts writes and an " +
                     "attempt to write the value 0 is made, the device SHALL respond with " +
                     "CONSTRAINT_ERROR",
            xref: { document: "cluster", section: "5.2.3.34" }
        },

        {
            tag: "attribute", id: 0x0031, name: "UserCodeTemporaryDisableTime",
            access: "RW VA", conformance: "P, IN | RID", constraint: "1 to 255", default: "MS", quality: "P", type: "uint8",
            details: "The number of seconds that the lock shuts down following wrong code " +
                     "entry. Valid range is 1-255 seconds. Device can shut down to lock user" +
                     " out for specified amount of time. (Makes it difficult to try and " +
                     "guess a PIN for the device.) If the attribute accepts writes and an " +
                     "attempt to write the attribute to 0 is made, the device SHALL respond " +
                     "with CONSTRAINT_ERROR",
            xref: { document: "cluster", section: "5.2.3.35" }
        },

        {
            tag: "attribute", id: 0x0032, name: "SendPinOverTheAir",
            access: "RW VA", conformance: "[P, IN]", default: true, quality: "P", type: "bool",
            details: "Boolean set to True if it is ok for the door lock server to send PINs " +
                     "over the air. This attribute determines the behavior of the server’s " +
                     "TX operation. If it is false, then it is not ok for the device to send" +
                     " PIN in any messages over the air",
            xref: { document: "cluster", section: "5.2.3.36" }
        },

        {
            tag: "attribute", id: 0x0033, name: "RequirePinForRemoteOperation",
            access: "RW VA", conformance: "COTA & P, IN", default: true, quality: "P", type: "bool",
            details: "Boolean set to True if the door lock server requires that an optional " +
                     "PINs be included in the payload of remote lock operation events like " +
                     "Lock, Unlock, Unlock with Timeout and Toggle in order to function",
            xref: { document: "cluster", section: "5.2.3.37" }
        },

        {
            tag: "attribute", id: 0x0035, name: "ExpiringUserTimeout",
            access: "RW VA", conformance: "[USR]", constraint: "1 to 2880", default: "MS", quality: "P", type: "uint16",
            details: "Number of minutes a PIN, RFID, Fingerprint, or other credential " +
                     "associated with a user of type ExpiringUser SHALL remain valid after " +
                     "its first use before expiring. When the credential expires the " +
                     "UserStatus for the corresponding user record SHALL be set to " +
                     "OccupiedDisabled",
            xref: { document: "cluster", section: "5.2.3.38" }
        },

        {
            tag: "attribute", id: 0x0040, name: "AlarmMask",
            access: "RW VA", conformance: "O", default: 65535, quality: "P", type: "map16",
            details: "This attribute is only supported if the Alarms cluster is on the same " +
                     "endpoint. The alarm mask is used to turn on/off alarms for particular " +
                     "functions. Alarms for an alarm group are enabled if the associated " +
                     "alarm mask bit is set. Each bit represents a group of alarms. Entire " +
                     "alarm groups can be turned on or off by setting or clearing the " +
                     "associated bit in the alarm mask",
            xref: { document: "cluster", section: "5.2.3.39" }
        },

        {
            tag: "attribute", id: 0x0041, name: "KeypadOperationEventMask",
            access: "RW VA", conformance: "[NOT & P, IN]", default: 65535, quality: "P", type: "map16",
            details: "Event mask used to turn on and off the transmission of keypad " +
                     "operation events. This mask DOES NOT apply to the storing of events in" +
                     " the event log. This mask only applies to the Operation Event " +
                     "Notification Command",
            xref: { document: "cluster", section: "5.2.3.40" }
        },

        {
            tag: "attribute", id: 0x0042, name: "RemoteOperationEventMask",
            access: "RW VA", conformance: "[NOT]", default: 65535, quality: "P", type: "map16",
            details: "Event mask used to turn on and off the transmission of remote " +
                     "operation events. This mask DOES NOT apply to the storing of events in" +
                     " the event log. This mask only applies to the Operation Event",
            xref: { document: "cluster", section: "5.2.3.41" }
        },

        {
            tag: "attribute", id: 0x0043, name: "ManualOperationEventMask",
            access: "RW VA", conformance: "[NOT]", default: 65535, quality: "P", type: "map16",
            details: "Event mask used to turn on and off manual operation events. This mask " +
                     "DOES NOT apply to the storing of events in the event log. This mask " +
                     "only applies to the Operation Event Notification Command",
            xref: { document: "cluster", section: "5.2.3.42" }
        },

        {
            tag: "attribute", id: 0x0044, name: "RfidOperationEventMask",
            access: "RW VA", conformance: "[NOT & RID]", default: 65535, quality: "P", type: "map16",
            details: "Event mask used to turn on and off RFID operation events. This mask " +
                     "DOES NOT apply to the storing of events in the event log. This mask " +
                     "only applies to the Operation Event Notification Command",
            xref: { document: "cluster", section: "5.2.3.43" }
        },

        {
            tag: "attribute", id: 0x0045, name: "KeypadProgrammingEventMask",
            access: "RW VA", conformance: "[NOT & P, IN]", default: 65535, quality: "P", type: "map16",
            details: "Event mask used to turn on and off keypad programming events. This " +
                     "mask DOES NOT apply to the storing of events in the event log. This " +
                     "mask only applies to the Programming Event Notification Command",
            xref: { document: "cluster", section: "5.2.3.44" }
        },

        {
            tag: "attribute", id: 0x0046, name: "RemoteProgrammingEventMask",
            access: "RW VA", conformance: "[NOT]", default: 65535, quality: "P", type: "map16",
            details: "Event mask used to turn on and off remote programming events. This " +
                     "mask DOES NOT apply to the storing of events in the event log. This " +
                     "mask only applies to the Programming Event Notification Command",
            xref: { document: "cluster", section: "5.2.3.45" }
        },

        {
            tag: "attribute", id: 0x0047, name: "RfidProgrammingEventMask",
            access: "RW VA", conformance: "[NOT & RID]", default: 65535, quality: "P", type: "map16",
            details: "Event mask used to turn on and off RFID programming events. This mask " +
                     "DOES NOT apply to the storing of events in the event log. This mask " +
                     "only applies to the Programming Event Notification Command",
            xref: { document: "cluster", section: "5.2.3.46" }
        },

        {
            tag: "event", id: 0x0000, name: "DoorLockAlarm",
            access: "V", conformance: "M", priority: "critical",
            details: "The door lock cluster provides several alarms which can be sent when " +
                     "there is a critical state on the door lock. The alarms available for " +
                     "the door lock cluster are listed in the AlarmCodeEnum section below",
            xref: { document: "cluster", section: "5.2.5.1" },
            children: [
                {
                    tag: "datatype", name: "AlarmCode",
                    conformance: "M", type: "AlarmCodeEnum"
                }
            ]
        },

        {
            tag: "event", id: 0x0001, name: "DoorStateChange",
            access: "V", conformance: "D, P, S", priority: "critical",
            details: "The door lock server sends out a DoorStateChange event when the door " +
                     "lock door state changes. The data of this event SHALL contain the " +
                     "following information",
            xref: { document: "cluster", section: "5.2.5.2" },
            children: [
                {
                    tag: "datatype", name: "DoorState",
                    conformance: "M", type: "DoorStateEnum"
                }
            ]
        },

        {
            tag: "event", id: 0x0002, name: "LockOperation",
            access: "V", conformance: "M", priority: "critical",
            details: "The door lock server sends out a LockOperation event when the event is" +
                     " triggered by the various lock operation sources",
            xref: { document: "cluster", section: "5.2.5.3" },
            children: [
                {
                    tag: "datatype", name: "LockOperationType",
                    conformance: "M", type: "LockOperationTypeEnum"
                },

                {
                    tag: "datatype", name: "OperationSource",
                    conformance: "M", type: "OperationSourceEnum"
                },

                {
                    tag: "datatype", name: "UserIndex",
                    conformance: "M", quality: "X", type: "uint16"
                },

                {
                    tag: "datatype", name: "FabricIndex",
                    conformance: "M", quality: "X", type: "fabric-idx"
                },

                {
                    tag: "datatype", name: "SourceNode",
                    conformance: "M", quality: "X", type: "node-id"
                },

                {
                    tag: "datatype", name: "Credentials",
                    conformance: "O", quality: "X", type: "CredentialStruct"
                }
            ]
        },

        {
            tag: "event", id: 0x0003, name: "LockOperationError",
            access: "V", conformance: "M", priority: "critical",
            details: "The door lock server sends out a LockOperationError event when a lock " +
                     "operation fails for various reasons",
            xref: { document: "cluster", section: "5.2.5.4" },
            children: [
                {
                    tag: "datatype", name: "LockOperationType",
                    conformance: "M", type: "LockOperationTypeEnum"
                },

                {
                    tag: "datatype", name: "OperationSource",
                    conformance: "M", type: "OperationSourceEnum"
                },

                {
                    tag: "datatype", name: "OperationError",
                    conformance: "M", type: "OperationErrorEnum"
                },

                {
                    tag: "datatype", name: "UserIndex",
                    conformance: "M", quality: "X", type: "uint16"
                },

                {
                    tag: "datatype", name: "FabricIndex",
                    conformance: "M", quality: "X", type: "fabric-idx"
                },

                {
                    tag: "datatype", name: "SourceNode",
                    conformance: "M", quality: "X", type: "node-id"
                },

                {
                    tag: "datatype", name: "Credentials",
                    conformance: "O", quality: "X", type: "CredentialStruct"
                }
            ]
        },

        {
            tag: "event", id: 0x0004, name: "LockUserChange",
            access: "V", conformance: "USR", priority: "info",
            details: "The door lock server sends out a LockUserChange event when a lock user" +
                     ", schedule, or credential change has occurred",
            xref: { document: "cluster", section: "5.2.5.5" },
            children: [
                {
                    tag: "datatype", name: "LockDataType",
                    conformance: "M", type: "LockDataTypeEnum"
                },

                {
                    tag: "datatype", name: "DataOperationType",
                    conformance: "M", type: "DataOperationTypeEnum"
                },

                {
                    tag: "datatype", name: "OperationSource",
                    conformance: "M", type: "OperationSourceEnum"
                },

                {
                    tag: "datatype", name: "UserIndex",
                    conformance: "M", quality: "X", type: "uint16"
                },

                {
                    tag: "datatype", name: "FabricIndex",
                    conformance: "M", quality: "X", type: "fabric-idx"
                },

                {
                    tag: "datatype", name: "SourceNode",
                    conformance: "M", quality: "X", type: "node-id"
                },

                {
                    tag: "datatype", name: "DataIndex",
                    conformance: "M", quality: "X", type: "uint16"
                }
            ]
        },

        {
            tag: "command", id: 0x0000, name: "LockDoor",
            access: "O T", conformance: "M", direction: "request", response: "status",
            xref: { document: "cluster", section: "5.2.4" },
            children: [
                {
                    tag: "datatype", name: "PinCode",
                    conformance: "O", type: "octstr"
                }
            ]
        },

        {
            tag: "command", id: 0x0001, name: "UnlockDoor",
            access: "O T", conformance: "M", direction: "request", response: "status",
            xref: { document: "cluster", section: "5.2.4" },
            children: [
                {
                    tag: "datatype", name: "PinCode",
                    conformance: "O", type: "octstr"
                }
            ]
        },

        {
            tag: "command", id: 0x0002, name: "Toggle",
            access: "O T", conformance: "X", direction: "request", response: "status",
            xref: { document: "cluster", section: "5.2.4" }
        },

        {
            tag: "command", id: 0x0003, name: "UnlockWithTimeout",
            access: "O T", conformance: "O", direction: "request", response: "status",
            xref: { document: "cluster", section: "5.2.4" },
            children: [
                {
                    tag: "datatype", name: "Timeout",
                    conformance: "M", type: "uint16"
                },

                {
                    tag: "datatype", name: "PinCode",
                    conformance: "O", type: "octstr"
                }
            ]
        },

        {
            tag: "command", id: 0x0004, name: "GetLogRecordResponse",
            conformance: "LOG", direction: "response",
            xref: { document: "cluster", section: "5.2.4" }
        },

        {
            tag: "command", id: 0x0005, name: "SetPinCode",
            access: "A T", conformance: "!USR & P, IN", direction: "request", response: "status",
            xref: { document: "cluster", section: "5.2.4" }
        },

        {
            tag: "command", id: 0x0006, name: "GetPinCodeResponse",
            conformance: "!USR & P, IN", direction: "response",
            xref: { document: "cluster", section: "5.2.4" }
        },

        {
            tag: "command", id: 0x0007, name: "ClearPinCode",
            access: "A T", conformance: "!USR & P, IN", direction: "request", response: "status",
            xref: { document: "cluster", section: "5.2.4" }
        },

        {
            tag: "command", id: 0x0008, name: "ClearAllPinCodes",
            access: "A T", conformance: "!USR & P, IN", direction: "request", response: "status",
            xref: { document: "cluster", section: "5.2.4" }
        },

        {
            tag: "command", id: 0x0009, name: "SetUserStatus",
            access: "A", conformance: "!USR & (P, IN | RID)", direction: "request", response: "status",
            xref: { document: "cluster", section: "5.2.4" }
        },

        {
            tag: "command", id: 0x000a, name: "GetUserStatusResponse",
            conformance: "!USR", direction: "response",
            xref: { document: "cluster", section: "5.2.4" }
        },

        {
            tag: "command", id: 0x000b, name: "SetWeekDaySchedule",
            access: "R A", conformance: "WDSCH", direction: "request", response: "status",
            xref: { document: "cluster", section: "5.2.4" },
            children: [
                {
                    tag: "datatype", name: "WeekDayIndex",
                    conformance: "M", type: "uint8"
                },

                {
                    tag: "datatype", name: "UserIndex",
                    conformance: "M", type: "uint16"
                },

                {
                    tag: "datatype", name: "DaysMask",
                    conformance: "M", type: "DaysMaskMap"
                },

                {
                    tag: "datatype", name: "StartHour",
                    conformance: "M", type: "uint8"
                },

                {
                    tag: "datatype", name: "StartMinute",
                    conformance: "M", type: "uint8"
                },

                {
                    tag: "datatype", name: "EndHour",
                    conformance: "M", type: "uint8"
                },

                {
                    tag: "datatype", name: "EndMinute",
                    conformance: "M", type: "uint8"
                }
            ]
        },

        {
            tag: "command", id: 0x000c, name: "GetWeekDayScheduleResponse",
            conformance: "WDSCH", direction: "response",
            xref: { document: "cluster", section: "5.2.4" },
            children: [
                {
                    tag: "datatype", name: "WeekDayIndex",
                    conformance: "M", type: "uint8"
                },

                {
                    tag: "datatype", name: "UserIndex",
                    conformance: "M", type: "uint16"
                },

                {
                    tag: "datatype", name: "Status",
                    conformance: "M", type: "DlStatus"
                },

                {
                    tag: "datatype", name: "DaysMask",
                    conformance: "O", type: "DaysMaskMap"
                },

                {
                    tag: "datatype", name: "StartHour",
                    conformance: "O", type: "uint8"
                },

                {
                    tag: "datatype", name: "StartMinute",
                    conformance: "O", type: "uint8"
                },

                {
                    tag: "datatype", name: "EndHour",
                    conformance: "O", type: "uint8"
                },

                {
                    tag: "datatype", name: "EndMinute",
                    conformance: "O", type: "uint8"
                }
            ]
        },

        {
            tag: "command", id: 0x000d, name: "ClearWeekDaySchedule",
            access: "R A", conformance: "WDSCH", direction: "request", response: "status",
            xref: { document: "cluster", section: "5.2.4" },
            children: [
                {
                    tag: "datatype", name: "WeekDayIndex",
                    conformance: "M", type: "uint8"
                },

                {
                    tag: "datatype", name: "UserIndex",
                    conformance: "M", type: "uint16"
                }
            ]
        },

        {
            tag: "command", id: 0x000e, name: "SetYearDaySchedule",
            access: "R A", conformance: "YDSCH", direction: "request", response: "status",
            xref: { document: "cluster", section: "5.2.4" },
            children: [
                {
                    tag: "datatype", name: "YearDayIndex",
                    conformance: "M", type: "uint8"
                },

                {
                    tag: "datatype", name: "UserIndex",
                    conformance: "M", type: "uint16"
                },

                {
                    tag: "datatype", name: "LocalStartTime",
                    conformance: "M", type: "epoch-s"
                },

                {
                    tag: "datatype", name: "LocalEndTime",
                    conformance: "M", type: "epoch-s"
                }
            ]
        },

        {
            tag: "command", id: 0x000f, name: "GetYearDayScheduleResponse",
            conformance: "YDSCH", direction: "response",
            xref: { document: "cluster", section: "5.2.4" },
            children: [
                {
                    tag: "datatype", name: "YearDayIndex",
                    conformance: "M", type: "uint8"
                },

                {
                    tag: "datatype", name: "UserIndex",
                    conformance: "M", type: "uint16"
                },

                {
                    tag: "datatype", name: "Status",
                    conformance: "M", type: "DlStatus"
                },

                {
                    tag: "datatype", name: "LocalStartTime",
                    conformance: "O", type: "epoch-s"
                },

                {
                    tag: "datatype", name: "LocalEndTime",
                    conformance: "O", type: "epoch-s"
                }
            ]
        },

        {
            tag: "command", id: 0x0010, name: "ClearYearDaySchedule",
            access: "R A", conformance: "YDSCH", direction: "request", response: "status",
            xref: { document: "cluster", section: "5.2.4" },
            children: [
                {
                    tag: "datatype", name: "YearDayIndex",
                    conformance: "M", type: "uint8"
                },

                {
                    tag: "datatype", name: "UserIndex",
                    conformance: "M", type: "uint16"
                }
            ]
        },

        {
            tag: "command", id: 0x0011, name: "SetHolidaySchedule",
            access: "R A", conformance: "HDSCH", direction: "request", response: "status",
            xref: { document: "cluster", section: "5.2.4" },
            children: [
                {
                    tag: "datatype", name: "HolidayIndex",
                    conformance: "M", type: "uint8"
                },

                {
                    tag: "datatype", name: "LocalStartTime",
                    conformance: "M", type: "epoch-s"
                },

                {
                    tag: "datatype", name: "LocalEndTime",
                    conformance: "M", type: "epoch-s"
                },

                {
                    tag: "datatype", name: "OperatingMode",
                    conformance: "M", type: "OperatingModeEnum"
                }
            ]
        },

        {
            tag: "command", id: 0x0012, name: "GetHolidayScheduleResponse",
            conformance: "HDSCH", direction: "response",
            xref: { document: "cluster", section: "5.2.4" },
            children: [
                {
                    tag: "datatype", name: "HolidayIndex",
                    conformance: "M", type: "uint8"
                },

                {
                    tag: "datatype", name: "Status",
                    conformance: "M", type: "DlStatus"
                },

                {
                    tag: "datatype", name: "LocalStartTime",
                    conformance: "O", type: "epoch-s"
                },

                {
                    tag: "datatype", name: "LocalEndTime",
                    conformance: "O", type: "epoch-s"
                },

                {
                    tag: "datatype", name: "OperatingMode",
                    conformance: "O", type: "OperatingModeEnum"
                }
            ]
        },

        {
            tag: "command", id: 0x0013, name: "ClearHolidaySchedule",
            access: "R A", conformance: "HDSCH", direction: "request", response: "status",
            xref: { document: "cluster", section: "5.2.4" },
            children: [
                {
                    tag: "datatype", name: "HolidayIndex",
                    conformance: "M", type: "uint8"
                }
            ]
        },

        {
            tag: "command", id: 0x0014, name: "SetUserType",
            access: "A", conformance: "!USR & (P, IN | RID)", direction: "request", response: "status",
            xref: { document: "cluster", section: "5.2.4" }
        },

        {
            tag: "command", id: 0x0015, name: "GetUserTypeResponse",
            conformance: "!USR", direction: "response",
            xref: { document: "cluster", section: "5.2.4" }
        },

        {
            tag: "command", id: 0x0016, name: "SetRfidCode",
            access: "A T", conformance: "!USR & RID", direction: "request", response: "status",
            xref: { document: "cluster", section: "5.2.4" }
        },

        {
            tag: "command", id: 0x0017, name: "GetRfidCodeResponse",
            conformance: "!USR & RID", direction: "response",
            xref: { document: "cluster", section: "5.2.4" }
        },

        {
            tag: "command", id: 0x0018, name: "ClearRfidCode",
            access: "A T", conformance: "!USR & RID", direction: "request", response: "status",
            xref: { document: "cluster", section: "5.2.4" }
        },

        {
            tag: "command", id: 0x0019, name: "ClearAllRfidCodes",
            access: "A T", conformance: "!USR & RID", direction: "request", response: "status",
            xref: { document: "cluster", section: "5.2.4" }
        },

        {
            tag: "command", id: 0x001a, name: "SetUser",
            access: "R A", conformance: "USR", direction: "request", response: "status",
            xref: { document: "cluster", section: "5.2.4" },
            children: [
                {
                    tag: "datatype", name: "OperationType",
                    conformance: "M", type: "DataOperationTypeEnum"
                },

                {
                    tag: "datatype", name: "UserIndex",
                    conformance: "M", type: "uint16"
                },

                {
                    tag: "datatype", name: "UserName",
                    conformance: "M", quality: "X", type: "string"
                },

                {
                    tag: "datatype", name: "UserUniqueId",
                    conformance: "M", quality: "X", type: "uint32"
                },

                {
                    tag: "datatype", name: "UserStatus",
                    conformance: "M", quality: "X", type: "UserStatusEnum"
                },

                {
                    tag: "datatype", name: "UserType",
                    conformance: "M", quality: "X", type: "UserTypeEnum"
                },

                {
                    tag: "datatype", name: "CredentialRule",
                    conformance: "M", quality: "X", type: "CredentialRuleEnum"
                }
            ]
        },

        {
            tag: "command", id: 0x001b, name: "GetUser",
            access: "R A", conformance: "USR", direction: "request", response: "GetUserResponse",
            xref: { document: "cluster", section: "5.2.4" },
            children: [
                {
                    tag: "datatype", name: "UserIndex",
                    conformance: "M", type: "uint16"
                }
            ]
        },

        {
            tag: "command", id: 0x001c, name: "GetUserResponse",
            conformance: "USR", direction: "response",
            xref: { document: "cluster", section: "5.2.4" },
            children: [
                {
                    tag: "datatype", name: "UserIndex",
                    conformance: "M", type: "uint16"
                },

                {
                    tag: "datatype", name: "UserName",
                    conformance: "M", quality: "X", type: "string"
                },

                {
                    tag: "datatype", name: "UserUniqueId",
                    conformance: "M", quality: "X", type: "uint32"
                },

                {
                    tag: "datatype", name: "UserStatus",
                    conformance: "M", quality: "X", type: "UserStatusEnum"
                },

                {
                    tag: "datatype", name: "UserType",
                    conformance: "M", quality: "X", type: "UserTypeEnum"
                },

                {
                    tag: "datatype", name: "CredentialRule",
                    conformance: "M", quality: "X", type: "CredentialRuleEnum"
                },

                {
                    tag: "datatype", name: "Credentials",
                    conformance: "M", quality: "X", type: "CredentialStruct"
                },

                {
                    tag: "datatype", name: "CreatorFabricIndex",
                    conformance: "M", quality: "X", type: "fabric-idx"
                },

                {
                    tag: "datatype", name: "LastModifiedFabricIndex",
                    conformance: "M", quality: "X", type: "fabric-idx"
                },

                {
                    tag: "datatype", name: "NextUserIndex",
                    conformance: "M", quality: "X", type: "uint16"
                }
            ]
        },

        {
            tag: "command", id: 0x001d, name: "ClearUser",
            access: "R A", conformance: "USR", direction: "request", response: "status",
            xref: { document: "cluster", section: "5.2.4" },
            children: [
                {
                    tag: "datatype", name: "UserIndex",
                    conformance: "M", type: "uint16"
                }
            ]
        },

        {
            tag: "command", id: 0x0020, name: "OperatingEventNotification",
            conformance: "[NOT]", direction: "response",
            xref: { document: "cluster", section: "5.2.4" }
        },

        {
            tag: "command", id: 0x0021, name: "ProgrammingEventNotification",
            conformance: "[NOT]", direction: "response",
            xref: { document: "cluster", section: "5.2.4" }
        },

        {
            tag: "command", id: 0x0022, name: "SetCredential",
            access: "R A", conformance: "USR", direction: "request", response: "SetCredentialResponse",
            xref: { document: "cluster", section: "5.2.4" },
            children: [
                {
                    tag: "datatype", name: "OperationType",
                    conformance: "M", type: "DataOperationTypeEnum"
                },

                {
                    tag: "datatype", name: "Credential",
                    conformance: "M", type: "CredentialStruct"
                },

                {
                    tag: "datatype", name: "CredentialData",
                    conformance: "M", type: "octstr"
                },

                {
                    tag: "datatype", name: "UserIndex",
                    conformance: "M", quality: "X", type: "uint16"
                },

                {
                    tag: "datatype", name: "UserStatus",
                    conformance: "M", quality: "X", type: "UserStatusEnum"
                },

                {
                    tag: "datatype", name: "UserType",
                    conformance: "M", quality: "X", type: "UserTypeEnum"
                }
            ]
        },

        {
            tag: "command", id: 0x0023, name: "SetCredentialResponse",
            conformance: "USR", direction: "response",
            xref: { document: "cluster", section: "5.2.4" },
            children: [
                {
                    tag: "datatype", name: "Status",
                    conformance: "M", type: "DlStatus"
                },

                {
                    tag: "datatype", name: "UserIndex",
                    conformance: "M", quality: "X", type: "uint16"
                },

                {
                    tag: "datatype", name: "NextCredentialIndex",
                    conformance: "M", quality: "X", type: "uint16"
                }
            ]
        },

        {
            tag: "command", id: 0x0024, name: "GetCredentialStatus",
            access: "R A", conformance: "USR", direction: "request", response: "GetCredentialStatusResponse",
            xref: { document: "cluster", section: "5.2.4" },
            children: [
                {
                    tag: "datatype", name: "Credential",
                    conformance: "M", type: "CredentialStruct"
                }
            ]
        },

        {
            tag: "command", id: 0x0025, name: "GetCredentialStatusResponse",
            conformance: "USR", direction: "response",
            xref: { document: "cluster", section: "5.2.4" },
            children: [
                {
                    tag: "datatype", name: "CredentialExists",
                    conformance: "M", type: "bool"
                },

                {
                    tag: "datatype", name: "UserIndex",
                    conformance: "M", quality: "X", type: "uint16"
                },

                {
                    tag: "datatype", name: "CreatorFabricIndex",
                    conformance: "M", quality: "X", type: "fabric-idx"
                },

                {
                    tag: "datatype", name: "LastModifiedFabricIndex",
                    conformance: "M", quality: "X", type: "fabric-idx"
                },

                {
                    tag: "datatype", name: "NextCredentialIndex",
                    conformance: "M", quality: "X", type: "uint16"
                }
            ]
        },

        {
            tag: "command", id: 0x0026, name: "ClearCredential",
            access: "R A", conformance: "USR", direction: "request", response: "status",
            xref: { document: "cluster", section: "5.2.4" },
            children: [
                {
                    tag: "datatype", name: "Credential",
                    conformance: "M", quality: "X", type: "CredentialStruct"
                }
            ]
        },

        {
            tag: "datatype", name: "DoorLockDayOfWeek",
            conformance: "M", type: "map8",
            details: "The Alarm Code enum SHALL indicate the alarm type. The data type of " +
                     "the Alarm Code enum is derived from enum8",
            xref: { document: "cluster", section: "5.2.6.1" },
            children: [
                {
                    tag: "datatype", id: 0x0000, name: "LockJammed",
                    conformance: "M", description: "Locking Mechanism Jammed",
                    xref: { document: "cluster", section: "5.2.6.1" }
                },

                {
                    tag: "datatype", id: 0x0001, name: "Sunday",
                    conformance: "O", description: "Lock Reset to Factory Defaults",
                    xref: { document: "cluster", section: "5.2.6.1" }
                },

                {
                    tag: "datatype", id: 0x0003, name: "LockRadioPowerCycled",
                    conformance: "O", description: "Lock Radio Power Cycled",
                    xref: { document: "cluster", section: "5.2.6.1" }
                },

                {
                    tag: "datatype", id: 0x0004, name: "Tuesday",
                    conformance: "[USR]", description: "Tamper Alarm - wrong code entry limit",
                    xref: { document: "cluster", section: "5.2.6.1" }
                },

                {
                    tag: "datatype", id: 0x0005, name: "FrontEsceutcheonRemoved",
                    conformance: "O", description: "Tamper Alarm - front escutcheon removed from main",
                    xref: { document: "cluster", section: "5.2.6.1" }
                },

                {
                    tag: "datatype", id: 0x0006, name: "DoorForcedOpen",
                    conformance: "[D, P, S]", description: "Forced Door Open under Door Locked Condition",
                    xref: { document: "cluster", section: "5.2.6.1" }
                },

                {
                    tag: "datatype", id: 0x0007, name: "DoorAjar",
                    conformance: "[D, P, S]", description: "Door ajar",
                    xref: { document: "cluster", section: "5.2.6.1" }
                },

                {
                    tag: "datatype", id: 0x0008, name: "Wednesday",
                    conformance: "[USR]", description: "Force User SOS alarm",
                    details: "User has ability to open lock but a ForcedUser LockOperationType and " +
                             "ForcedUser silent alarm will be emitted to allow a notified Node to " +
                             "alert emergency services or contacts on the user account when used",
                    xref: { document: "cluster", section: "5.2.6.16.6" }
                },

                {
                    tag: "datatype", id: 0x0002, name: "Monday",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0010, name: "Thursday",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0020, name: "Friday",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0040, name: "Saturday",
                    conformance: "M"
                }
            ]
        },

        {
            tag: "datatype", name: "CredentialRuleEnum",
            conformance: "M", type: "enum8",
            children: [
                {
                    tag: "datatype", id: 0x0000, name: "Single",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0001, name: "Dual",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0002, name: "Tri",
                    conformance: "M"
                }
            ]
        },

        {
            tag: "datatype", name: "DlCredentialRuleMask",
            conformance: "M", type: "map8",
            children: [
                {
                    tag: "datatype", id: 0x0001, name: "Single",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0002, name: "Dual",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0004, name: "Tri",
                    conformance: "M"
                }
            ]
        },

        {
            tag: "datatype", name: "CredentialStruct",
            conformance: "M", type: "struct",
            children: [
                {
                    tag: "datatype", name: "CredentialType",
                    conformance: "M", type: "CredentialTypeEnum"
                },

                {
                    tag: "datatype", name: "CredentialIndex",
                    conformance: "M", type: "uint16"
                }
            ]
        },

        {
            tag: "datatype", name: "CredentialTypeEnum",
            conformance: "M", type: "enum8",
            children: [
                {
                    tag: "datatype", id: 0x0000, name: "ProgrammingPin",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0001, name: "Pin",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0002, name: "Rfid",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0003, name: "Fingerprint",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0004, name: "FingerVein",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0005, name: "Face",
                    conformance: "M"
                }
            ]
        },

        {
            tag: "datatype", name: "DataOperationTypeEnum",
            conformance: "M", type: "enum8",
            children: [
                {
                    tag: "datatype", id: 0x0000, name: "Add",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0001, name: "Clear",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0002, name: "Modify",
                    conformance: "M"
                }
            ]
        },

        {
            tag: "datatype", name: "DaysMaskMap",
            conformance: "M", type: "map8",
            children: [
                {
                    tag: "datatype", id: 0x0001, name: "Sunday",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0002, name: "Monday",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0004, name: "Tuesday",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0008, name: "Wednesday",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0010, name: "Thursday",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0020, name: "Friday",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0040, name: "Saturday",
                    conformance: "M"
                }
            ]
        },

        {
            tag: "datatype", name: "DoorStateEnum",
            conformance: "M", type: "enum8",
            children: [
                {
                    tag: "datatype", id: 0x0000, name: "DoorOpen",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0001, name: "DoorClosed",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0002, name: "DoorJammed",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0003, name: "DoorForcedOpen",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0004, name: "DoorUnspecifiedError",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0005, name: "DoorAjar",
                    conformance: "M"
                }
            ]
        },

        {
            tag: "datatype", name: "LockDataTypeEnum",
            conformance: "M", type: "enum8",
            children: [
                {
                    tag: "datatype", id: 0x0000, name: "Unspecified",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0001, name: "ProgrammingCode",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0002, name: "UserIndex",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0003, name: "WeekDaySchedule",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0004, name: "YearDaySchedule",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0005, name: "HolidaySchedule",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0006, name: "Pin",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0007, name: "Rfid",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0008, name: "Fingerprint",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0009, name: "FingerVein",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x000a, name: "Face",
                    conformance: "M"
                }
            ]
        },

        {
            tag: "datatype", name: "LockOperationTypeEnum",
            conformance: "M", type: "enum8",
            children: [
                {
                    tag: "datatype", id: 0x0000, name: "Lock",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0001, name: "Unlock",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0002, name: "NonAccessUserEvent",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0003, name: "ForcedUserEvent",
                    conformance: "M"
                }
            ]
        },

        {
            tag: "datatype", name: "OperationErrorEnum",
            conformance: "M", type: "enum8",
            children: [
                {
                    tag: "datatype", id: 0x0000, name: "Unspecified",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0001, name: "InvalidCredential",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0002, name: "DisabledUserDenied",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0003, name: "Restricted",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0004, name: "InsufficientBattery",
                    conformance: "M"
                }
            ]
        },

        {
            tag: "datatype", name: "OperatingModeEnum",
            conformance: "M", type: "enum8",
            children: [
                {
                    tag: "datatype", id: 0x0000, name: "Normal",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0001, name: "Vacation",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0002, name: "Privacy",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0003, name: "NoRemoteLockUnlock",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0004, name: "Passage",
                    conformance: "M"
                }
            ]
        },

        {
            tag: "datatype", name: "OperationSourceEnum",
            conformance: "M", type: "enum8",
            children: [
                {
                    tag: "datatype", id: 0x0000, name: "Unspecified",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0001, name: "Manual",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0002, name: "ProprietaryRemote",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0003, name: "Keypad",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0004, name: "Auto",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0005, name: "Button",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0006, name: "Schedule",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0007, name: "Remote",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0008, name: "Rfid",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0009, name: "Biometric",
                    conformance: "M"
                }
            ]
        },

        {
            tag: "datatype", name: "UserStatusEnum",
            conformance: "M", type: "enum8",
            children: [
                {
                    tag: "datatype", id: 0x0000, name: "Available",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0001, name: "OccupiedEnabled",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0003, name: "OccupiedDisabled",
                    conformance: "M"
                }
            ]
        },

        {
            tag: "datatype", name: "UserTypeEnum",
            conformance: "M", type: "enum8",
            children: [
                {
                    tag: "datatype", id: 0x0000, name: "UnrestrictedUser",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0001, name: "YearDayScheduleUser",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0002, name: "WeekDayScheduleUser",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0003, name: "ProgrammingUser",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0004, name: "NonAccessUser",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0005, name: "ForcedUser",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0006, name: "DisposableUser",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0007, name: "ExpiringUser",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0008, name: "ScheduleRestrictedUser",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0009, name: "RemoteOnlyUser",
                    conformance: "M"
                }
            ]
        },

        {
            tag: "datatype", name: "DlLockState",
            conformance: "M", type: "enum8",
            children: [
                {
                    tag: "datatype", id: 0x0000, name: "NotFullyLocked",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0001, name: "Locked",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0002, name: "Unlocked",
                    conformance: "M"
                }
            ]
        },

        {
            tag: "datatype", name: "DlLockType",
            conformance: "M", type: "enum8",
            children: [
                {
                    tag: "datatype", id: 0x0000, name: "DeadBolt",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0001, name: "Magnetic",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0002, name: "Other",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0003, name: "Mortise",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0004, name: "Rim",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0005, name: "LatchBolt",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0006, name: "CylindricalLock",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0007, name: "TubularLock",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0008, name: "InterconnectedLock",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0009, name: "DeadLatch",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x000a, name: "DoorFurniture",
                    conformance: "M"
                }
            ]
        },

        {
            tag: "datatype", name: "DlCredentialRulesSupport",
            conformance: "M", type: "map8",
            children: [
                {
                    tag: "datatype", id: 0x0001, name: "Single",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0002, name: "Dual",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0004, name: "Tri",
                    conformance: "M"
                }
            ]
        },

        {
            tag: "datatype", name: "DlSupportedOperatingModes",
            conformance: "M", type: "map16",
            children: [
                {
                    tag: "datatype", id: 0x0001, name: "Normal",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0002, name: "Vacation",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0004, name: "Privacy",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0008, name: "NoRemoteLockUnlock",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0010, name: "Passage",
                    conformance: "M"
                }
            ]
        },

        {
            tag: "datatype", name: "DlDefaultConfigurationRegister",
            conformance: "M", type: "map16",
            children: [
                {
                    tag: "datatype", id: 0x0001, name: "EnableLocalProgrammingEnabled",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0002, name: "KeypadInterfaceDefaultAccessEnabled",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0004, name: "RemoteInterfaceDefaultAccessIsEnabled",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0020, name: "SoundEnabled",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0040, name: "AutoRelockTimeSet",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0080, name: "LedSettingsSet",
                    conformance: "M"
                }
            ]
        },

        {
            tag: "datatype", name: "DlLocalProgrammingFeatures",
            conformance: "M", type: "map8",
            children: [
                {
                    tag: "datatype", id: 0x0001, name: "AddUsersCredentialsSchedulesLocally",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0002, name: "ModifyUsersCredentialsSchedulesLocally",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0004, name: "ClearUsersCredentialsSchedulesLocally",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0008, name: "AdjustLockSettingsLocally",
                    conformance: "M"
                }
            ]
        },

        {
            tag: "datatype", name: "DlKeypadOperationEventMask",
            conformance: "M", type: "map16",
            children: [
                {
                    tag: "datatype", id: 0x0001, name: "Unknown",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0002, name: "Lock",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0004, name: "Unlock",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0008, name: "LockInvalidPin",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0010, name: "LockInvalidSchedule",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0020, name: "UnlockInvalidCode",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0040, name: "UnlockInvalidSchedule",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0080, name: "NonAccessUserOpEvent",
                    conformance: "M"
                }
            ]
        },

        {
            tag: "datatype", name: "DlRemoteOperationEventMask",
            conformance: "M", type: "map16",
            children: [
                {
                    tag: "datatype", id: 0x0001, name: "Unknown",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0002, name: "Lock",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0004, name: "Unlock",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0008, name: "LockInvalidCode",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0010, name: "LockInvalidSchedule",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0020, name: "UnlockInvalidCode",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0040, name: "UnlockInvalidSchedule",
                    conformance: "M"
                }
            ]
        },

        {
            tag: "datatype", name: "DlManualOperationEventMask",
            conformance: "M", type: "map16",
            children: [
                {
                    tag: "datatype", id: 0x0001, name: "Unknown",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0002, name: "ThumbturnLock",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0004, name: "ThumbturnUnlock",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0008, name: "OneTouchLock",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0010, name: "KeyLock",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0020, name: "KeyUnlock",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0040, name: "AutoLock",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0080, name: "ScheduleLock",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0100, name: "ScheduleUnlock",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0200, name: "ManualLock",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0400, name: "ManualUnlock",
                    conformance: "M"
                }
            ]
        },

        {
            tag: "datatype", name: "DlRfidOperationEventMask",
            conformance: "M", type: "map16",
            children: [
                {
                    tag: "datatype", id: 0x0001, name: "Unknown",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0002, name: "Lock",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0004, name: "Unlock",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0008, name: "LockInvalidRfid",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0010, name: "LockInvalidSchedule",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0020, name: "UnlockInvalidRfid",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0040, name: "UnlockInvalidSchedule",
                    conformance: "M"
                }
            ]
        },

        {
            tag: "datatype", name: "DlKeypadProgrammingEventMask",
            conformance: "M", type: "map16",
            children: [
                {
                    tag: "datatype", id: 0x0001, name: "Unknown",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0002, name: "ProgrammingPinChanged",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0004, name: "PinAdded",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0008, name: "PinCleared",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0010, name: "PinChanged",
                    conformance: "M"
                }
            ]
        },

        {
            tag: "datatype", name: "DlRemoteProgrammingEventMask",
            conformance: "M", type: "map16",
            children: [
                {
                    tag: "datatype", id: 0x0001, name: "Unknown",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0002, name: "ProgrammingPinChanged",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0004, name: "PinAdded",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0008, name: "PinCleared",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0010, name: "PinChanged",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0020, name: "RfidCodeAdded",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0040, name: "RfidCodeCleared",
                    conformance: "M"
                }
            ]
        },

        {
            tag: "datatype", name: "DlRfidProgrammingEventMask",
            conformance: "M", type: "map16",
            children: [
                {
                    tag: "datatype", id: 0x0001, name: "Unknown",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0020, name: "RfidCodeAdded",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0040, name: "RfidCodeCleared",
                    conformance: "M"
                }
            ]
        },

        {
            tag: "datatype", name: "DlStatus",
            conformance: "M", type: "enum8",
            children: [
                {
                    tag: "datatype", id: 0x0000, name: "Success",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0001, name: "Failure",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0002, name: "Duplicate",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0003, name: "Occupied",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0085, name: "InvalidField",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0089, name: "ResourceExhausted",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x008b, name: "NotFound",
                    conformance: "M"
                }
            ]
        },

        {
            tag: "datatype", name: "DoorLockFeature",
            conformance: "M", type: "map32",
            children: [
                {
                    tag: "datatype", id: 0x0001, name: "PinCredential",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0002, name: "RfidCredential",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0004, name: "FingerCredentials",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0008, name: "Logging",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0010, name: "WeekDayAccessSchedules",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0020, name: "DoorPositionSensor",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0040, name: "FaceCredentials",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0080, name: "CredentialsOverTheAirAccess",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0100, name: "User",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0200, name: "Notification",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0400, name: "YearDayAccessSchedules",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0800, name: "HolidaySchedules",
                    conformance: "M"
                }
            ]
        },

        {
            tag: "datatype", name: "DoorLockSetPinOrIdStatus",
            conformance: "M", type: "enum8",
            children: [
                {
                    tag: "datatype", id: 0x0000, name: "Success",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0001, name: "GeneralFailure",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0002, name: "MemoryFull",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0003, name: "DuplicateCodeError",
                    conformance: "M"
                }
            ]
        },

        {
            tag: "datatype", name: "DoorLockOperationEventCode",
            conformance: "M", type: "enum8",
            children: [
                {
                    tag: "datatype", id: 0x0000, name: "UnknownOrMfgSpecific",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0001, name: "Lock",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0002, name: "Unlock",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0003, name: "LockInvalidPinOrId",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0004, name: "LockInvalidSchedule",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0005, name: "UnlockInvalidPinOrId",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0006, name: "UnlockInvalidSchedule",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0007, name: "OneTouchLock",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0008, name: "KeyLock",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0009, name: "KeyUnlock",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x000a, name: "AutoLock",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x000b, name: "ScheduleLock",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x000c, name: "ScheduleUnlock",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x000d, name: "ManualLock",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x000e, name: "ManualUnlock",
                    conformance: "M"
                }
            ]
        },

        {
            tag: "datatype", name: "DoorLockProgrammingEventCode",
            conformance: "M", type: "enum8",
            children: [
                {
                    tag: "datatype", id: 0x0000, name: "UnknownOrMfgSpecific",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0001, name: "MasterCodeChanged",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0002, name: "PinAdded",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0003, name: "PinDeleted",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0004, name: "PinChanged",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0005, name: "IdAdded",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0006, name: "IdDeleted",
                    conformance: "M"
                }
            ]
        },

        {
            tag: "datatype", name: "DoorLockUserStatus",
            conformance: "M", type: "enum8",
            children: [
                {
                    tag: "datatype", id: 0x0000, name: "Available",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0001, name: "OccupiedEnabled",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0003, name: "OccupiedDisabled",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x00ff, name: "NotSupported",
                    conformance: "M"
                }
            ]
        },

        {
            tag: "datatype", name: "DoorLockUserType",
            conformance: "M", type: "enum8",
            children: [
                {
                    tag: "datatype", id: 0x0000, name: "Unrestricted",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0001, name: "YearDayScheduleUser",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0002, name: "WeekDayScheduleUser",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0003, name: "MasterUser",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0004, name: "NonAccessUser",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x00ff, name: "NotSupported",
                    conformance: "M"
                }
            ]
        }
    ]
});
