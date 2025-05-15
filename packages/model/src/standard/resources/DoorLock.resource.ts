/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { DoorLock } from "#index.js";

DoorLock.patch(
    {
        classification: "application", pics: "DRLK",
        details: "The door lock cluster provides an interface to a generic way to secure a door. The physical object " +
            "that provides the locking functionality is abstracted from the cluster. The cluster has a small list " +
            "of mandatory attributes and functions and a list of optional features." +
            "\n" +
            "Figure 16. Typical Usage of the Door Lock Cluster",
        xref: "cluster§5.2",

        children: [
            undefined,

            {
                xref: "cluster§5.2.4",

                children: [
                    {
                        description: "PinCredential",

                        details: "If the User Feature is also supported then any PIN Code stored in the lock shall be associated with " +
                            "a User." +
                            "\n" +
                            "A lock may support multiple credential types so if the User feature is supported the UserType, " +
                            "UserStatus and Schedules are all associated with a User index and not directly with a PIN index. A " +
                            "User index may have several credentials associated with it.",

                        xref: "cluster§5.2.4.1"
                    },

                    {
                        description: "RfidCredential",

                        details: "If the User Feature is also supported then any RFID credential stored in the lock shall be " +
                            "associated with a User." +
                            "\n" +
                            "A lock may support multiple credential types so if the User feature is supported the UserType, " +
                            "UserStatus and Schedules are all associated with a User index and not directly with a RFID index. A " +
                            "User Index may have several credentials associated with it.",

                        xref: "cluster§5.2.4.2"
                    },

                    {
                        description: "FingerCredentials",

                        details: "Currently the cluster only defines the metadata format for notifications when a fingerprint/ finger " +
                            "vein credential is used to access the lock and doesn’t describe how to create fingerprint/finger " +
                            "vein credentials. If the Users feature is also supported then the User that a fingerprint/finger " +
                            "vein is associated with can also have its UserType, UserStatus and Schedule modified." +
                            "\n" +
                            "A lock may support multiple credential types so if the User feature is supported the UserType, " +
                            "UserStatus and Schedules are all associated with a User index and not directly with a Finger index. " +
                            "A User Index may have several credentials associated with it.",

                        xref: "cluster§5.2.4.3"
                    },

                    {
                        description: "WeekDayAccessSchedules",

                        details: "If the User feature is supported then Week Day Schedules are applied to a User and not a credential." +
                            "\n" +
                            "Week Day Schedules are used to restrict access to a specified time window on certain days of the " +
                            "week. The schedule is repeated each week." +
                            "\n" +
                            "The lock may automatically adjust the UserType when a schedule is created or cleared." +
                            "\n" +
                            "Support for WeekDayAccessSchedules requires that the lock has the capability of keeping track of " +
                            "local time.",

                        xref: "cluster§5.2.4.4"
                    },

                    {
                        description: "DoorPositionSensor",
                        details: "If this feature is supported this indicates that the lock has the ability to determine the position " +
                            "of the door which is separate from the state of the lock.",
                        xref: "cluster§5.2.4.5"
                    },

                    {
                        description: "FaceCredentials",

                        details: "Currently the cluster only defines the metadata format for notifications when a face recognition, " +
                            "iris, or retina credential is used to access the lock and doesn’t describe how to create face " +
                            "recognition, iris, or retina credentials. If the Users feature is also supported then the User that " +
                            "a face recognition, iris, or retina credential is associated with can also have its UserType, " +
                            "UserStatus and Schedule modified." +
                            "\n" +
                            "A lock may support multiple credential types so if the User feature is supported the UserType, " +
                            "UserStatus and Schedules are all associated with a User and not directly with a credential.",

                        xref: "cluster§5.2.4.6"
                    },

                    {
                        description: "CredentialOverTheAirAccess",
                        details: "If this feature is supported then the lock supports the ability to verify a credential provided in a" +
                            "\n" +
                            "lock/unlock command. Currently the cluster only supports providing the PIN credential to the " +
                            "lock/unlock commands. If this feature is supported then the PIN Credential feature shall also be " +
                            "supported.",
                        xref: "cluster§5.2.4.7"
                    },

                    {
                        description: "User",
                        details: "If the User Feature is supported then a lock employs a User database. A User within the User " +
                            "database is used to associate credentials and schedules to single user record within the lock. This " +
                            "also means the UserType and UserStatus fields are associated with a User and not a credential.",
                        xref: "cluster§5.2.4.8"
                    },

                    {
                        description: "YearDayAccessSchedules",

                        details: "If the User feature is supported then Year Day Schedules are applied to a User and not a credential. " +
                            "Year Day Schedules are used to restrict access to a specified date and time window." +
                            "\n" +
                            "The lock may automatically adjust the UserType when a schedule is created or cleared." +
                            "\n" +
                            "Support for YearDayAccessSchedules requires that the lock has the capability of keeping track of " +
                            "local time.",

                        xref: "cluster§5.2.4.9"
                    },

                    {
                        description: "HolidaySchedules",
                        details: "This feature is used to setup Holiday Schedule in the lock device. A Holiday Schedule sets a start " +
                            "and stop end date/time for the lock to use the specified operating mode set by the Holiday Schedule." +
                            "\n" +
                            "Support for HolidaySchedules requires that the lock has the capability of keeping track of local " +
                            "time.",
                        xref: "cluster§5.2.4.10"
                    },

                    {
                        description: "Unbolting",
                        details: "Locks that support this feature differentiate between unbolting and unlocking. The Unbolt Door " +
                            "command retracts the bolt without pulling the latch. The Unlock Door command fully unlocks the door " +
                            "by retracting the bolt and briefly pulling the latch. While the latch is pulled, the lock state " +
                            "changes to Unlatched. Locks without unbolting support don’t differentiate between unbolting and " +
                            "unlocking and perform the same operation for both commands.",
                        xref: "cluster§5.2.4.11"
                    },

                    {
                        description: "AliroProvisioning",
                        details: "Locks that support this feature implement the Aliro specification as defined in [Aliro] and support " +
                            "Matter as a method for provisioning Aliro credentials.",
                        xref: "cluster§5.2.4.12"
                    },

                    {
                        description: "AliroBleuwb",
                        details: "Locks that support this feature implement the Bluetooth LE + UWB Access Control Flow as defined in " +
                            "[Aliro].",
                        xref: "cluster§5.2.4.13"
                    }
                ]
            },

            {
                details: "This attribute may be NULL if the lock hardware does not currently know the status of the locking " +
                    "mechanism. For example, a lock may not know the LockState status after a power cycle until the first " +
                    "lock actuation is completed." +
                    "\n" +
                    "The Not Fully Locked value is used by a lock to indicate that the state of the lock is somewhere " +
                    "between Locked and Unlocked so it is only partially secured. For example, a deadbolt could be " +
                    "partially extended and not in a dead latched state.",

                xref: "cluster§5.2.9.1"
            },

            { details: "Indicates the type of door lock as defined in LockTypeEnum.", xref: "cluster§5.2.9.2" },
            {
                details: "Indicates if the lock is currently able to (Enabled) or not able to (Disabled) process remote Lock, " +
                    "Unlock, or Unlock with Timeout commands.",
                xref: "cluster§5.2.9.3"
            },

            {
                details: "Indicates the current door state as defined in DoorStateEnum." +
                    "\n" +
                    "Null only if an internal error prevents the retrieval of the current door state.",
                xref: "cluster§5.2.9.4"
            },

            {
                details: "This attribute shall hold the number of door open events that have occurred since it was last " +
                    "zeroed.",
                xref: "cluster§5.2.9.5"
            },
            {
                details: "This attribute shall hold the number of door closed events that have occurred since it was last " +
                    "zeroed.",
                xref: "cluster§5.2.9.6"
            },
            {
                details: "This attribute shall hold the number of minutes the door has been open since the last time it " +
                    "transitioned from closed to open.",
                xref: "cluster§5.2.9.7"
            },
            { details: "Indicates the number of total users supported by the lock.", xref: "cluster§5.2.9.8" },
            { details: "Indicates the number of PIN users supported.", xref: "cluster§5.2.9.9" },
            { details: "Indicates the number of RFID users supported.", xref: "cluster§5.2.9.10" },
            {
                details: "Indicates the number of configurable week day schedule supported per user.",
                xref: "cluster§5.2.9.11"
            },
            {
                details: "Indicates the number of configurable year day schedule supported per user.",
                xref: "cluster§5.2.9.12"
            },
            {
                details: "Indicates the number of holiday schedules supported for the entire door lock device.",
                xref: "cluster§5.2.9.13"
            },
            {
                details: "Indicates the maximum length in bytes of a PIN Code on this device.",
                xref: "cluster§5.2.9.14"
            },
            {
                details: "Indicates the minimum length in bytes of a PIN Code on this device.",
                xref: "cluster§5.2.9.15"
            },

            {
                details: "Indicates the maximum length in bytes of a RFID Code on this device. The value depends on the RFID " +
                    "code range specified by the manufacturer, if media anti-collision identifiers (UID) are used as RFID " +
                    "code, a value of 20 (equals 10 Byte ISO 14443A UID) is recommended.",
                xref: "cluster§5.2.9.16"
            },

            {
                details: "Indicates the minimum length in bytes of a RFID Code on this device. The value depends on the RFID " +
                    "code range specified by the manufacturer, if media anti-collision identifiers (UID) are used as RFID " +
                    "code, a value of 8 (equals 4 Byte ISO 14443A UID) is recommended.",
                xref: "cluster§5.2.9.17"
            },

            {
                details: "This attribute shall contain a bitmap with the bits set for the values of CredentialRuleEnum " +
                    "supported on this device.",
                xref: "cluster§5.2.9.18"
            },

            {
                details: "Indicates the number of credentials that could be assigned for each user." +
                    "\n" +
                    "Depending on the value of NumberOfRFIDUsersSupported and NumberOfPINUsersSupported it may not be " +
                    "possible to assign that number of credentials for a user." +
                    "\n" +
                    "For example, if the device supports only PIN and RFID credential types, " +
                    "NumberOfCredentialsSupportedPerUser is set to 10, NumberOfPINUsersSupported is set to 5 and " +
                    "NumberOfRFIDUsersSupported is set to 3, it will not be possible to actually assign 10 credentials " +
                    "for a user because maximum number of credentials in the database is 8.",

                xref: "cluster§5.2.9.19"
            },

            {
                details: "Indicates the language for the on-screen or audible user interface using a 2- byte language code " +
                    "from ISO-639-1.",
                xref: "cluster§5.2.9.20"
            },
            {
                details: "Indicates the settings for the LED support, as defined by LEDSettingEnum.",
                xref: "cluster§5.2.9.21"
            },

            {
                details: "Indicates the number of seconds to wait after unlocking a lock before it automatically locks again. " +
                    "0=disabled. If set, unlock operations from any source will be timed. For one time unlock with " +
                    "timeout use the specific command.",
                xref: "cluster§5.2.9.22"
            },

            {
                details: "Indicates the sound volume on a door lock as defined by SoundVolumeEnum.",
                xref: "cluster§5.2.9.23"
            },
            {
                details: "Indicates the current operating mode of the lock as defined in OperatingModeEnum.",
                xref: "cluster§5.2.9.24"
            },

            {
                details: "This attribute shall contain a bitmap with all operating bits of the OperatingMode attribute " +
                    "supported by the lock. All operating modes NOT supported by a lock shall be set to one. The value of " +
                    "the OperatingMode enumeration defines the related bit to be set.",
                xref: "cluster§5.2.9.25"
            },

            {
                details: "Indicates the default configurations as they are physically set on the device (example: hardware dip " +
                    "switch setting, etc…) and represents the default setting for some of the" +
                    "\n" +
                    "attributes within this cluster (for example: LED, Auto Lock, Sound Volume, and Operating Mode " +
                    "attributes)." +
                    "\n" +
                    "This is a read-only attribute and is intended to allow clients to determine what changes may need to " +
                    "be made without having to query all the included attributes. It may be beneficial for the clients to " +
                    "know what the device’s original settings were in the event that the device needs to be restored to " +
                    "factory default settings." +
                    "\n" +
                    "If the Client device would like to query and modify the door lock server’s operating settings, it " +
                    "SHOULD send read and write attribute requests to the specific attributes." +
                    "\n" +
                    "For example, the Sound Volume attribute default value is Silent Mode. However, it is possible that " +
                    "the current Sound Volume is High Volume. Therefore, if the client wants to query/modify the current " +
                    "Sound Volume setting on the server, the client SHOULD read/write to the Sound Volume attribute.",

                xref: "cluster§5.2.9.26"
            },

            {
                details: "This attribute shall enable/disable local programming on the door lock of certain features (see " +
                    "LocalProgrammingFeatures attribute). If this value is set to TRUE then local programming is enabled " +
                    "on the door lock for all features. If it is set to FALSE then local programming is disabled on the " +
                    "door lock for those features whose bit is set to 0 in the LocalProgrammingFeatures attribute. Local " +
                    "programming shall be enabled by default.",
                xref: "cluster§5.2.9.27"
            },

            {
                details: "This attribute shall enable/disable the ability to lock the door lock with a single touch on the " +
                    "door lock.",
                xref: "cluster§5.2.9.28"
            },
            {
                details: "This attribute shall enable/disable an inside LED that allows the user to see at a glance if the " +
                    "door is locked.",
                xref: "cluster§5.2.9.29"
            },
            {
                details: "This attribute shall enable/disable a button inside the door that is used to put the lock into " +
                    "privacy mode. When the lock is in privacy mode it cannot be manipulated from the outside.",
                xref: "cluster§5.2.9.30"
            },

            {
                details: "Indicates the local programming features that will be disabled when EnableLocalProgramming attribute " +
                    "is set to False. If a door lock doesn’t support disabling one aspect of local programming it shall " +
                    "return CONSTRAINT_ERROR during a write operation of this attribute. If the EnableLocalProgramming " +
                    "attribute is set to True then all local programming features shall be enabled regardless of the bits " +
                    "set to 0 in this attribute." +
                    "\n" +
                    "The features that can be disabled from local programming are defined in " +
                    "LocalProgrammingFeaturesBitmap.",

                xref: "cluster§5.2.9.31"
            },

            {
                details: "Indicates the number of incorrect Pin codes or RFID presentment attempts a user is allowed to enter " +
                    "before the lock will enter a lockout state. The value of this attribute is compared to all failing " +
                    "forms of credential presentation, including Pin codes used in an Unlock Command when " +
                    "RequirePINforRemoteOperation is set to true. Valid range is 1-255 incorrect attempts. The lockout " +
                    "state will be for the duration of UserCodeTemporaryDisableTime. If the attribute accepts writes and " +
                    "an attempt to write the value 0 is made, the device shall respond with CONSTRAINT_ERROR." +
                    "\n" +
                    "The lock may reset the counter used to track incorrect credential presentations as required by " +
                    "internal logic, environmental events, or other reasons. The lock shall reset the counter if a valid " +
                    "credential is presented.",

                xref: "cluster§5.2.9.32"
            },

            {
                details: "Indicates the number of seconds that the lock shuts down following wrong code entry. Valid range is " +
                    "1-255 seconds. Device can shut down to lock user out for specified amount of time. (Makes it " +
                    "difficult to try and guess a PIN for the device.) If the attribute accepts writes and an attempt to " +
                    "write the attribute to 0 is made, the device shall respond with CONSTRAINT_ERROR.",
                xref: "cluster§5.2.9.33"
            },

            {
                details: "Indicates the door locks ability to send PINs over the air. If the attribute is True it is ok for " +
                    "the door lock server to send PINs over the air. This attribute determines the behavior of the " +
                    "server’s TX operation. If it is false, then it is not ok for the device to send PIN in any messages " +
                    "over the air." +
                    "\n" +
                    "The PIN field within any door lock cluster message shall keep the first octet unchanged and" +
                    "\n" +
                    "masks the actual code by replacing with 0xFF. For example (PIN \"1234\" ): If the attribute value is " +
                    "True, 0x04 0x31 0x32 0x33 0x34 shall be used in the PIN field in any door lock cluster message " +
                    "payload. If the attribute value is False, 0x04 0xFF 0xFF 0xFF 0xFF shall be used.",

                xref: "cluster§5.2.9.34"
            },

            {
                details: "Indicates if the door lock requires an optional PIN. If this attribute is set to True, the door lock " +
                    "server requires that an optional PINs be included in the payload of remote lock operation events " +
                    "like Lock, Unlock, Unlock with Timeout and Toggle in order to function.",
                xref: "cluster§5.2.9.35"
            },

            { xref: "cluster§5.2.9" },

            {
                details: "Indicates the number of minutes a PIN, RFID, Fingerprint, or other credential associated with a user " +
                    "of type ExpiringUser shall remain valid after its first use before expiring. When the credential " +
                    "expires the UserStatus for the corresponding user record shall be set to OccupiedDisabled.",
                xref: "cluster§5.2.9.36"
            },

            {
                details: "This attribute is only supported if the Alarms cluster is on the same endpoint. The alarm mask is " +
                    "used to turn on/off alarms for particular functions. Alarms for an alarm group are enabled if the " +
                    "associated alarm mask bit is set. Each bit represents a group of alarms. Entire alarm groups can be " +
                    "turned on or off by setting or clearing the associated bit in the alarm mask." +
                    "\n" +
                    "This mask DOES NOT apply to the Events mechanism of this cluster.",

                xref: "cluster§5.2.9.37"
            },

            {
                details: "Indicates the verification key component of the Reader’s key pair as defined in [Aliro]. The value, " +
                    "if not null, shall be an uncompressed elliptic curve public key as defined in section 2.3.3 of SEC " +
                    "1." +
                    "\n" +
                    "Null if no Reader key pair has been configured on the lock. See SetAliroReaderConfig.",
                xref: "cluster§5.2.9.38"
            },

            {
                details: "Indicates the reader_group_identifier as defined in [Aliro]." +
                    "\n" +
                    "Null if no reader_group_identifier has been configured on the lock. See SetAliroReaderConfig.",
                xref: "cluster§5.2.9.39"
            },

            { details: "Indicates the reader_group_sub_identifier as defined in [Aliro].", xref: "cluster§5.2.9.40" },
            {
                details: "Indicates the list of protocol versions supported for expedited transactions as defined in [Aliro].",
                xref: "cluster§5.2.9.41"
            },

            {
                details: "Indicates the Group Resolving Key as defined in [Aliro]." +
                    "\n" +
                    "Null if no group resolving key has been configured on the lock. See SetAliroReaderConfig.",
                xref: "cluster§5.2.9.42"
            },

            {
                details: "Indicates the list of protocol versions supported for the Bluetooth LE + UWB Access Control Flow as " +
                    "defined in [Aliro].",
                xref: "cluster§5.2.9.43"
            },
            {
                details: "Indicates the version of the Bluetooth LE advertisement as defined in [Aliro].",
                xref: "cluster§5.2.9.44"
            },
            {
                details: "Indicates the maximum number of AliroCredentialIssuerKey credentials that can be stored on the lock.",
                xref: "cluster§5.2.9.45"
            },

            {
                details: "Indicates the maximum number of endpoint key credentials that can be stored on the lock. This limit " +
                    "applies to the sum of the number of AliroEvictableEndpointKey credentials and the number of " +
                    "AliroNonEvictableEndpointKey credentials." +
                    "\n" +
                    "NOTE" +
                    "\n" +
                    "The credential indices used for these two credential types are independent of each other, similar to " +
                    "all other credential types. As long as NumberOfAliroEndpointKeysSupported is at least 2 a client " +
                    "could add a credential of type AliroEvictableEndpointKey at any index from 1 to " +
                    "NumberOfAliroEndpointKeysSupported and also add a credential of type AliroNonEvictableEndpointKey at " +
                    "the same index, and both credentials would exist on the server.",

                xref: "cluster§5.2.9.46"
            },

            {
                details: "The door lock server provides several alarms which can be sent when there is a critical state on the " +
                    "door lock. The alarms available for the door lock server are listed in AlarmCodeEnum.",
                xref: "cluster§5.2.11.1",
                children: [{
                    details: "This field shall indicate the alarm code of the event that has happened.",
                    xref: "cluster§5.2.11.1.1"
                }]
            },

            {
                details: "The door lock server sends out a DoorStateChange event when the door lock door state changes.",
                xref: "cluster§5.2.11.2",
                children: [{
                    details: "This field shall indicate the new door state for this door event.",
                    xref: "cluster§5.2.11.2.1"
                }]
            },

            {
                details: "The door lock server sends out a LockOperation event when the event is triggered by the various lock " +
                    "operation sources." +
                    "\n" +
                    "  • If the door lock server supports the Unbolt Door command, it shall generate a LockOperation " +
                    "    event with LockOperationType set to Unlock after an Unbolt Door command succeeds." +
                    "\n" +
                    "  • If the door lock server supports the Unbolting feature and an Unlock Door command is performed, " +
                    "    it shall generate a LockOperation event with LockOperationType set to Unlatch when the unlatched " +
                    "    state is reached and a LockOperation event with LockOperationType set to Unlock when the lock " +
                    "    successfully completes the unlock → hold latch → release latch and return to unlock state " +
                    "    operation." +
                    "\n" +
                    "  • If the command fails during holding or releasing the latch but after passing the unlocked state, " +
                    "    the door lock server shall generate a LockOperationError event with LockOperationType set to " +
                    "    Unlatch and a LockOperation event with LockOperationType set to Unlock." +
                    "\n" +
                    "    ◦ If it fails before reaching the unlocked state, the door lock server shall generate only a " +
                    "      LockOperationError event with LockOperationType set to Unlock." +
                    "\n" +
                    "  • Upon manual actuation, a door lock server that supports the Unbolting feature:" +
                    "\n" +
                    "    ◦ shall generate a LockOperation event of LockOperationType Unlatch when it is actuated from the " +
                    "      outside." +
                    "\n" +
                    "    ◦ may generate a LockOperation event of LockOperationType Unlatch when it is actuated" +
                    "\n" +
                    "from the inside.",

                xref: "cluster§5.2.11.3",

                children: [
                    {
                        details: "This field shall indicate the type of the lock operation that was performed.",
                        xref: "cluster§5.2.11.3.1"
                    },
                    {
                        details: "This field shall indicate the source of the lock operation that was performed.",
                        xref: "cluster§5.2.11.3.2"
                    },

                    {
                        details: "This field shall indicate the UserIndex who performed the lock operation. This shall be null if " +
                            "there is no user index that can be determined for the given operation source. This shall NOT be null " +
                            "if a user index can be determined. In particular, this shall NOT be null if the operation was " +
                            "associated with a valid credential.",
                        xref: "cluster§5.2.11.3.3"
                    },

                    {
                        details: "This field shall indicate the fabric index of the fabric that performed the lock operation. This " +
                            "shall be null if there is no fabric that can be determined for the given operation source. This " +
                            "shall NOT be null if the operation source is \"Remote\".",
                        xref: "cluster§5.2.11.3.4"
                    },

                    {
                        details: "This field shall indicate the Node ID of the node that performed the lock operation. This shall be " +
                            "null if there is no Node associated with the given operation source. This shall NOT be null if the " +
                            "operation source is \"Remote\".",
                        xref: "cluster§5.2.11.3.5"
                    },

                    {
                        details: "This field shall indicate the list of credentials used in performing the lock operation. This shall " +
                            "be null if no credentials were involved.",
                        xref: "cluster§5.2.11.3.6"
                    }
                ]
            },

            {
                details: "The door lock server sends out a LockOperationError event when a lock operation fails for various " +
                    "reasons.",
                xref: "cluster§5.2.11.4",

                children: [
                    {
                        details: "This field shall indicate the type of the lock operation that was performed.",
                        xref: "cluster§5.2.11.4.1"
                    },
                    {
                        details: "This field shall indicate the source of the lock operation that was performed.",
                        xref: "cluster§5.2.11.4.2"
                    },
                    {
                        details: "This field shall indicate the lock operation error triggered when the operation was performed.",
                        xref: "cluster§5.2.11.4.3"
                    },
                    {
                        details: "This field shall indicate the lock UserIndex who performed the lock operation. This shall be null if " +
                            "there is no user id that can be determined for the given operation source.",
                        xref: "cluster§5.2.11.4.4"
                    },

                    {
                        details: "This field shall indicate the fabric index of the fabric that performed the lock operation. This " +
                            "shall be null if there is no fabric that can be determined for the given operation source. This " +
                            "shall NOT be null if the operation source is \"Remote\".",
                        xref: "cluster§5.2.11.4.5"
                    },

                    {
                        details: "This field shall indicate the Node ID of the node that performed the lock operation. This shall be " +
                            "null if there is no Node associated with the given operation source. This shall NOT be null if the " +
                            "operation source is \"Remote\".",
                        xref: "cluster§5.2.11.4.6"
                    },

                    {
                        details: "This field shall indicate the list of credentials used in performing the lock operation. This shall " +
                            "be null if no credentials were involved.",
                        xref: "cluster§5.2.11.4.7"
                    }
                ]
            },

            {
                details: "The door lock server sends out a LockUserChange event when a lock user, schedule, or credential " +
                    "change has occurred.",
                xref: "cluster§5.2.11.5",

                children: [
                    {
                        details: "This field shall indicate the lock data type that was changed.",
                        xref: "cluster§5.2.11.5.1"
                    },
                    {
                        details: "This field shall indicate the data operation performed on the lock data type changed.",
                        xref: "cluster§5.2.11.5.2"
                    },
                    {
                        details: "This field shall indicate the source of the user data change.",
                        xref: "cluster§5.2.11.5.3"
                    },

                    {
                        details: "This field shall indicate the lock UserIndex associated with the change (if any). This shall be null " +
                            "if there is no specific user associated with the data operation. This shall be 0xFFFE if all users " +
                            "are affected (e.g. Clear Users).",
                        xref: "cluster§5.2.11.5.4"
                    },

                    {
                        details: "This field shall indicate the fabric index of the fabric that performed the change (if any). This " +
                            "shall be null if there is no fabric that can be determined to have caused the change. This shall NOT " +
                            "be null if the operation source is \"Remote\".",
                        xref: "cluster§5.2.11.5.5"
                    },

                    {
                        details: "This field shall indicate the Node ID that performed the change (if any). The Node ID of the node " +
                            "that performed the change. This shall be null if there was no Node involved in the change. This " +
                            "shall NOT be null if the operation source is \"Remote\".",
                        xref: "cluster§5.2.11.5.6"
                    },

                    {
                        details: "This field shall indicate the index of the specific item that was changed (e.g. schedule, PIN, RFID, " +
                            "etc.) in the list of items identified by LockDataType. This shall be null if the LockDataType does " +
                            "not correspond to a list that can be indexed into (e.g. ProgrammingUser). This shall be 0xFFFE if " +
                            "all indices are affected (e.g. ClearPINCode, ClearRFIDCode, ClearWeekDaySchedule, " +
                            "ClearYearDaySchedule, etc.).",
                        xref: "cluster§5.2.11.5.7"
                    }
                ]
            },

            {
                details: "This command causes the lock device to lock the door. This command includes an optional code for the " +
                    "lock. The door lock may require a PIN depending on the value of the RequirePINForRemoteOperation " +
                    "attribute.",
                xref: "cluster§5.2.10.1",

                children: [{
                    details: "If the RequirePINforRemoteOperation attribute is True then PINCode field shall be provided and the " +
                        "door lock shall NOT grant access if it is not provided." +
                        "\n" +
                        "If the PINCode field is provided, the door lock shall verify PINCode before granting access " +
                        "regardless of the value of RequirePINForRemoteOperation attribute." +
                        "\n" +
                        "When the PINCode field is provided an invalid PIN will count towards the WrongCodeEntryLimit and the " +
                        "UserCodeTemporaryDisableTime will be triggered if the WrongCodeEntryLimit is exceeded. The lock " +
                        "shall ignore any attempts to lock/unlock the door until the UserCodeTemporaryDisableTime expires.",

                    xref: "cluster§5.2.10.1.1"
                }]
            },

            {
                details: "This command causes the lock device to unlock the door. This command includes an optional code for " +
                    "the lock. The door lock may require a code depending on the value of the " +
                    "RequirePINForRemoteOperation attribute." +
                    "\n" +
                    "NOTE" +
                    "\n" +
                    "If the attribute AutoRelockTime is supported the lock will transition to the locked state when the " +
                    "auto relock time has expired.",

                xref: "cluster§5.2.10.2",
                children: [{ details: "See PINCode field.", xref: "cluster§5.2.10.2.1" }]
            },

            { xref: "cluster§5.2.10" },

            {
                details: "This command causes the lock device to unlock the door with a timeout parameter. After the time in " +
                    "seconds specified in the timeout field, the lock device will relock itself automatically. This " +
                    "timeout parameter is only temporary for this message transition and overrides the default relock " +
                    "time as specified in the AutoRelockTime attribute. If the door lock device is not capable of or does " +
                    "not want to support temporary Relock Timeout, it SHOULD NOT support this optional command.",
                xref: "cluster§5.2.10.3",

                children: [
                    {
                        details: "This field shall indicate the timeout in seconds to wait before relocking the door lock. This value " +
                            "is independent of the AutoRelockTime attribute value.",
                        xref: "cluster§5.2.10.3.1"
                    },
                    { details: "See PINCode field.", xref: "cluster§5.2.10.3.2" }
                ]
            },

            {
                details: "Set a PIN Code into the lock." +
                    "\n" +
                    "Return status is a global status code or a cluster-specific status code from the Status Codes table " +
                    "and shall be one of the following values:",
                xref: "cluster§5.2.10.4",

                children: [
                    {
                        details: "This field shall indicate the user ID. The value of the UserID field shall be between 0 and the " +
                            "value of the NumberOfPINUsersSupported attribute.",
                        xref: "cluster§5.2.10.4.1"
                    },
                    {
                        details: "This field shall indicate the user status. Only the values 1 (Occupied/Enabled) and 3 " +
                            "(Occupied/Disabled) are allowed for UserStatus.",
                        xref: "cluster§5.2.10.4.2"
                    }
                ]
            },

            {
                details: "Retrieve a PIN Code.",
                xref: "cluster§5.2.10.5",
                children: [{
                    details: "This field shall indicate the user ID. The value of the UserID field shall be between 0 and the " +
                        "value of the NumberOfPINUsersSupported attribute.",
                    xref: "cluster§5.2.10.5.1"
                }]
            },

            {
                details: "Returns the PIN for the specified user ID." +
                    "\n" +
                    "If the requested UserID is valid and the Code doesn’t exist, Get RFID Code Response shall have the " +
                    "following format:" +
                    "\n" +
                    "UserID = requested User ID UserStatus = 0 (Available) UserType = Null (Not supported) PINCode = 0 " +
                    "(zero length)" +
                    "\n" +
                    "If the requested UserID is invalid, send Default Response with an error status. The error status " +
                    "shall be equal to CONSTRAINT_ERROR when User_ID is less than the max number of users supported, and " +
                    "NOT_FOUND if greater than or equal to the max number of users supported.",

                xref: "cluster§5.2.10.6"
            },

            {
                details: "Clear a PIN code or all PIN codes." +
                    "\n" +
                    "For each PIN Code cleared whose user doesn’t have a RFID Code or other credential type, then " +
                    "corresponding user record’s UserStatus value shall be set to Available, and UserType value shall be " +
                    "set to UnrestrictedUser and all schedules shall be cleared.",
                xref: "cluster§5.2.10.7",
                children: [{
                    details: "This field shall specify a valid PIN code slot index or 0xFFFE to indicate all PIN code slots shall " +
                        "be cleared.",
                    xref: "cluster§5.2.10.7.1"
                }]
            },

            {
                details: "Clear out all PINs on the lock." +
                    "\n" +
                    "NOTE" +
                    "\n" +
                    "On the server, the clear all PIN codes command SHOULD have the same effect as the ClearPINCode " +
                    "command with respect to the setting of user status, user type and schedules.",

                xref: "cluster§5.2.10.8"
            },

            {
                details: "Set the status of a user ID.",
                xref: "cluster§5.2.10.9",

                children: [
                    {
                        details: "This field shall indicate the user ID. The value of the UserID field shall be between 0 and the " +
                            "value of the NumberOfPINUsersSupported attribute.",
                        xref: "cluster§5.2.10.9.1"
                    },
                    {
                        details: "UserStatus value of Available is not allowed. In order to clear a user id, the ClearUser Command " +
                            "shall be used. For user status value please refer to UserStatusEnum.",
                        xref: "cluster§5.2.10.9.2"
                    }
                ]
            },

            {
                details: "Get the status of a user.",
                xref: "cluster§5.2.10.10",
                children: [{
                    details: "This field shall indicate the user ID. The value of the UserID field shall be between 0 and the " +
                        "value of the NumberOfPINUsersSupported attribute.",
                    xref: "cluster§5.2.10.10.1"
                }]
            },

            {
                details: "Returns the user status for the specified user ID.",
                xref: "cluster§5.2.10.11",

                children: [
                    {
                        details: "This field shall indicate the user ID provided in the request.",
                        xref: "cluster§5.2.10.11.1"
                    },
                    {
                        details: "This field shall indicate the current status of the requested user ID.",
                        xref: "cluster§5.2.10.11.2"
                    }
                ]
            },

            {
                details: "Set a weekly repeating schedule for a specified user." +
                    "\n" +
                    "The associated UserType may be changed to ScheduleRestrictedUser by the lock when a Week Day " +
                    "schedule is set." +
                    "\n" +
                    "Return status shall be one of the following values:",

                xref: "cluster§5.2.10.12",

                children: [
                    {
                        details: "This field shall indicate the index of the Week Day schedule.",
                        xref: "cluster§5.2.10.12.1"
                    },
                    { details: "This field shall indicate the user ID.", xref: "cluster§5.2.10.12.2" },
                    {
                        details: "This field shall indicate which week days the schedule is active.",
                        xref: "cluster§5.2.10.12.3"
                    },
                    {
                        details: "This field shall indicate the starting hour for the Week Day schedule.",
                        xref: "cluster§5.2.10.12.4"
                    },
                    {
                        details: "This field shall indicate the starting minute for the Week Day schedule.",
                        xref: "cluster§5.2.10.12.5"
                    },
                    {
                        details: "This field shall indicate the ending hour for the Week Day schedule. EndHour shall be equal to or " +
                            "greater than StartHour.",
                        xref: "cluster§5.2.10.12.6"
                    },

                    {
                        details: "This field shall indicate the ending minute for the Week Day schedule. If EndHour is equal to " +
                            "StartHour then EndMinute shall be greater than StartMinute." +
                            "\n" +
                            "If the EndHour is equal to 23 and the EndMinute is equal to 59 the Lock shall grant access to the " +
                            "user up until 23:59:59.",
                        xref: "cluster§5.2.10.12.7"
                    }
                ]
            },

            { details: "Retrieve the specific weekly schedule for the specific user.", xref: "cluster§5.2.10.13" },

            {
                details: "Returns the weekly repeating schedule data for the specified schedule index.",
                xref: "cluster§5.2.10.14",

                children: [
                    {
                        details: "This field shall indicate the index of the Week Day schedule.",
                        xref: "cluster§5.2.10.14.1"
                    },
                    { details: "This field shall indicate the user ID.", xref: "cluster§5.2.10.14.2" },

                    {
                        details: "Status shall be one of the following values:" +
                            "\n" +
                            "  • SUCCESS if both WeekDayIndex and UserIndex are valid and there is a corresponding schedule " +
                            "    entry." +
                            "\n" +
                            "  • INVALID_COMMAND if either WeekDayIndex and/or UserIndex values are not within valid range" +
                            "\n" +
                            "  • NOT_FOUND if no corresponding schedule entry found for WeekDayIndex." +
                            "\n" +
                            "  • NOT_FOUND if no corresponding user entry found for UserIndex." +
                            "\n" +
                            "If this field is SUCCESS, the optional fields for this command shall be present. For other (error) " +
                            "status values, only the fields up to the status field shall be present.",

                        xref: "cluster§5.2.10.14.3"
                    },

                    undefined,
                    {
                        details: "This field shall indicate the starting hour for the Week Day schedule.",
                        xref: "cluster§5.2.10.14.4"
                    },
                    {
                        details: "This field shall indicate the starting minute for the Week Day schedule.",
                        xref: "cluster§5.2.10.14.5"
                    },
                    {
                        details: "This field shall indicate the ending hour for the Week Day schedule. EndHour shall be equal to or " +
                            "greater than StartHour.",
                        xref: "cluster§5.2.10.14.6"
                    },
                    {
                        details: "This field shall indicate the ending minute for the Week Day schedule. If EndHour is equal to " +
                            "StartHour then EndMinute shall be greater than StartMinute.",
                        xref: "cluster§5.2.10.14.7"
                    }
                ]
            },

            {
                details: "Clear the specific weekly schedule or all weekly schedules for the specific user." +
                    "\n" +
                    "Return status shall be one of the following values:",
                xref: "cluster§5.2.10.15",

                children: [
                    {
                        details: "This field shall indicate the Week Day schedule index to clear or 0xFE to clear all Week Day " +
                            "schedules for the specified user.",
                        xref: "cluster§5.2.10.15.1"
                    },
                    { details: "This field shall indicate the user ID.", xref: "cluster§5.2.10.15.2" }
                ]
            },

            {
                details: "Set a time-specific schedule ID for a specified user." +
                    "\n" +
                    "The associated UserType may be changed to ScheduleRestrictedUser by the lock when a Year Day " +
                    "schedule is set." +
                    "\n" +
                    "Return status shall be one of the following values:",

                xref: "cluster§5.2.10.16",

                children: [
                    {
                        details: "This field shall indicate the index of the Year Day schedule.",
                        xref: "cluster§5.2.10.16.1"
                    },
                    { details: "This field shall indicate the user ID.", xref: "cluster§5.2.10.16.2" },
                    {
                        details: "This field shall indicate the starting time for the Year Day schedule in Epoch Time in Seconds with " +
                            "local time offset based on the local timezone and DST offset on the day represented by the value.",
                        xref: "cluster§5.2.10.16.3"
                    },

                    {
                        details: "This field shall indicate the ending time for the Year Day schedule in Epoch Time in Seconds with " +
                            "local time offset based on the local timezone and DST offset on the day represented by the value. " +
                            "LocalEndTime shall be greater than LocalStartTime.",
                        xref: "cluster§5.2.10.16.4"
                    }
                ]
            },

            {
                details: "Retrieve the specific year day schedule for the specific schedule and user indexes.",
                xref: "cluster§5.2.10.17"
            },

            {
                details: "Returns the year day schedule data for the specified schedule and user indexes.",
                xref: "cluster§5.2.10.18",

                children: [
                    {
                        details: "This field shall indicate the index of the Year Day schedule.",
                        xref: "cluster§5.2.10.18.1"
                    },
                    { details: "This field shall indicate the user ID.", xref: "cluster§5.2.10.18.2" },

                    {
                        details: "Status shall be one of the following values:" +
                            "\n" +
                            "  • SUCCESS if both YearDayIndex and UserIndex are valid and there is a corresponding schedule " +
                            "    entry." +
                            "\n" +
                            "  • INVALID_COMMAND if either YearDayIndex and/or UserIndex values are not within valid range" +
                            "\n" +
                            "  • NOT_FOUND if no corresponding schedule entry found for YearDayIndex." +
                            "\n" +
                            "  • NOT_FOUND if no corresponding user entry found for UserIndex." +
                            "\n" +
                            "If this field is SUCCESS, the optional fields for this command shall be present. For other (error) " +
                            "status values, only the fields up to the status field shall be present.",

                        xref: "cluster§5.2.10.18.3"
                    },

                    {
                        details: "This field shall indicate the starting time for the Year Day schedule in Epoch Time in Seconds with " +
                            "local time offset based on the local timezone and DST offset on the day represented by the value. " +
                            "This shall be null if the schedule is not set for the YearDayIndex and UserIndex provided.",
                        xref: "cluster§5.2.10.18.4"
                    },

                    {
                        details: "This field shall indicate the ending time for the Year Day schedule in Epoch Time in Seconds with " +
                            "local time offset based on the local timezone and DST offset on the day represented by the value. " +
                            "LocalEndTime shall be greater than LocalStartTime. This shall be null if the schedule is not set for " +
                            "the YearDayIndex and UserIndex provided.",
                        xref: "cluster§5.2.10.18.5"
                    }
                ]
            },

            {
                details: "Clears the specific year day schedule or all year day schedules for the specific user." +
                    "\n" +
                    "Return status shall be one of the following values:",
                xref: "cluster§5.2.10.19",

                children: [
                    {
                        details: "This field shall indicate the Year Day schedule index to clear or 0xFE to clear all Year Day " +
                            "schedules for the specified user.",
                        xref: "cluster§5.2.10.19.1"
                    },
                    { details: "This field shall indicate the user ID.", xref: "cluster§5.2.10.19.2" }
                ]
            },

            {
                details: "Set the holiday Schedule by specifying local start time and local end time with respect to any Lock " +
                    "Operating Mode." +
                    "\n" +
                    "Return status shall be one of the following values:",
                xref: "cluster§5.2.10.20",

                children: [
                    {
                        details: "This field shall indicate the index of the Holiday schedule.",
                        xref: "cluster§5.2.10.20.1"
                    },

                    {
                        details: "This field shall indicate the starting time for the Holiday Day schedule in Epoch Time in Seconds " +
                            "with local time offset based on the local timezone and DST offset on the day represented by the " +
                            "value.",
                        xref: "cluster§5.2.10.20.2"
                    },

                    {
                        details: "This field shall indicate the ending time for the Holiday Day schedule in Epoch Time in Seconds with " +
                            "local time offset based on the local timezone and DST offset on the day represented by the value. " +
                            "LocalEndTime shall be greater than LocalStartTime.",
                        xref: "cluster§5.2.10.20.3"
                    },

                    {
                        details: "This field shall indicate the operating mode to use during this Holiday schedule start/end time.",
                        xref: "cluster§5.2.10.20.4"
                    }
                ]
            },

            { details: "Get the holiday schedule for the specified index.", xref: "cluster§5.2.10.21" },

            {
                details: "Returns the Holiday Schedule Entry for the specified Holiday ID.",
                xref: "cluster§5.2.10.22",

                children: [
                    {
                        details: "This field shall indicate the index of the Holiday schedule.",
                        xref: "cluster§5.2.10.22.1"
                    },

                    {
                        details: "Status shall be one of the following values:" +
                            "\n" +
                            "  • FAILURE if the attribute NumberOfHolidaySchedulesSupported is zero." +
                            "\n" +
                            "  • SUCCESS if the HolidayIndex is valid and there is a corresponding schedule entry." +
                            "\n" +
                            "  • INVALID_COMMAND if the HolidayIndex is not within valid range" +
                            "\n" +
                            "  • NOT_FOUND if the HolidayIndex is within the valid range, however, there is not corresponding " +
                            "    schedule entry found." +
                            "\n" +
                            "If this field is SUCCESS, the optional fields for this command shall be present. For other (error) " +
                            "status values, only the fields up to the status field shall be present.",

                        xref: "cluster§5.2.10.22.2"
                    },

                    {
                        details: "This field shall indicate the starting time for the Holiday schedule in Epoch Time in Seconds with " +
                            "local time offset based on the local timezone and DST offset on the day represented by the value. " +
                            "This shall be null if the schedule is not set for the HolidayIndex provided.",
                        xref: "cluster§5.2.10.22.3"
                    },

                    {
                        details: "This field shall indicate the ending time for the Holiday schedule in Epoch Time in Seconds with " +
                            "local time offset based on the local timezone and DST offset on the day represented by the value. " +
                            "LocalEndTime shall be greater than LocalStartTime. This shall be null if the schedule is not set for " +
                            "the HolidayIndex provided.",
                        xref: "cluster§5.2.10.22.4"
                    },

                    {
                        details: "This field shall indicate the operating mode to use during this Holiday schedule start/end time. " +
                            "This shall be null if the schedule is not set for the HolidayIndex provided.",
                        xref: "cluster§5.2.10.22.5"
                    }
                ]
            },

            {
                details: "Clears the holiday schedule or all holiday schedules.",
                xref: "cluster§5.2.10.23",
                children: [{
                    details: "This field shall indicate the Holiday schedule index to clear or 0xFE to clear all Holiday " +
                        "schedules.",
                    xref: "cluster§5.2.10.23.1"
                }]
            },

            {
                details: "Set the user type for a specified user." +
                    "\n" +
                    "For user type value please refer to User Type Value." +
                    "\n" +
                    "Return status shall be one of the following values:",
                xref: "cluster§5.2.10.24",
                children: [
                    { details: "This field shall indicate the user ID.", xref: "cluster§5.2.10.24.1" },
                    { details: "This field shall indicate the user type.", xref: "cluster§5.2.10.24.2" }
                ]
            },

            { details: "Retrieve the user type for a specific user.", xref: "cluster§5.2.10.25" },
            {
                details: "Returns the user type for the specified user ID. If the requested User ID is invalid, send Default " +
                    "Response with an error status equal to FAILURE.",
                xref: "cluster§5.2.10.26"
            },

            {
                details: "Set an ID for RFID access into the lock." +
                    "\n" +
                    "Return status is a global status code or a cluster-specific status code from the Status Codes table " +
                    "and shall be one of the following values:",
                xref: "cluster§5.2.10.27",

                children: [
                    {
                        details: "This field shall indicate the user ID." +
                            "\n" +
                            "The value of the UserID field shall be between 0 and the value of the NumberOfRFIDUsersSupported " +
                            "attribute.",
                        xref: "cluster§5.2.10.27.1"
                    },

                    {
                        details: "This field shall indicate what the status is for a specific user ID. The values are according to " +
                            "“Set PIN” while not all are supported." +
                            "\n" +
                            "Only the values 1 (Occupied/Enabled) and 3 (Occupied/Disabled) are allowed for UserStatus.",
                        xref: "cluster§5.2.10.27.2"
                    },

                    { details: "The values are the same as used for SetPINCode command.", xref: "cluster§5.2.10.27.3" }
                ]
            },

            {
                details: "Retrieve an RFID code.",
                xref: "cluster§5.2.10.28",

                children: [{
                    details: "This field shall indicate the user ID." +
                        "\n" +
                        "The value of the UserID field shall be between 0 and the value of the NumberOfRFIDUsersSupported " +
                        "attribute.",
                    xref: "cluster§5.2.10.28.1"
                }]
            },

            {
                details: "Returns the RFID code for the specified user ID." +
                    "\n" +
                    "If the requested User ID is valid and the Code doesn’t exist, Get RFID Code Response shall have the " +
                    "following format:" +
                    "\n" +
                    "User ID = requested User ID UserStatus = 0 (available) UserType = 0xFF (not supported) RFID Code = 0 " +
                    "(zero length)" +
                    "\n" +
                    "If requested User ID is invalid, send Default Response with an error status. The error status shall " +
                    "be equal to CONSTRAINT_ERROR when User_ID is less than the max number of users supported, and " +
                    "NOT_FOUND if greater than or equal to the max number of users supported.",

                xref: "cluster§5.2.10.29"
            },

            {
                details: "Clear an RFID code or all RFID codes." +
                    "\n" +
                    "For each RFID Code cleared whose user doesn’t have a PIN Code or other credential type, then the " +
                    "corresponding user record’s UserStatus value shall be set to Available, and UserType value shall be " +
                    "set to UnrestrictedUser and all schedules shall be cleared.",
                xref: "cluster§5.2.10.30",
                children: [{
                    details: "This field shall indicate a valid RFID code slot index or 0xFFFE to indicate all RFID code slots " +
                        "shall be cleared.",
                    xref: "cluster§5.2.10.30.1"
                }]
            },

            {
                details: "Clear out all RFIDs on the lock. If you clear all RFID codes and this user didn’t have a PIN code, " +
                    "the user status has to be set to \"0 Available\", the user type has to be set to the default value, " +
                    "and all schedules which are supported have to be set to the default values.",
                xref: "cluster§5.2.10.31"
            },

            {
                details: "Set user into the lock." +
                    "\n" +
                    "Fields used for different use cases:" +
                    "\n" +
                    "Return status is a global status code or a cluster-specific status code from the Status Codes table " +
                    "and" +
                    "\n" +
                    "shall be one of the following values:" +
                    "\n" +
                    "  • SUCCESS, if setting User was successful." +
                    "\n" +
                    "  • FAILURE, if some unexpected internal error occurred setting User." +
                    "\n" +
                    "  • OCCUPIED, if OperationType is Add and UserIndex points to an occupied slot." +
                    "\n" +
                    "  • INVALID_COMMAND, if one or more fields violate constraints or are invalid or if OperationType is " +
                    "    Modify and UserIndex points to an available slot.",

                xref: "cluster§5.2.10.32",

                children: [
                    { details: "This field shall indicate the type of operation.", xref: "cluster§5.2.10.32.1" },
                    { details: "This field shall indicate the user ID.", xref: "cluster§5.2.10.32.2" },

                    {
                        details: "This field shall contain a string to use as a human readable identifier for the user. If UserName is " +
                            "null then:" +
                            "\n" +
                            "  • If the OperationType is Add, the UserName in the resulting user record shall be set to an empty " +
                            "    string." +
                            "\n" +
                            "  • If the OperationType is Modify, the UserName in the user record shall NOT be changed from the " +
                            "    current value." +
                            "\n" +
                            "If UserName is not null, the UserName in the user record shall be set to the provided value.",

                        xref: "cluster§5.2.10.32.3"
                    },

                    {
                        details: "This field shall indicate the fabric assigned number to use for connecting this user to other users " +
                            "on other devices from the fabric’s perspective." +
                            "\n" +
                            "If UserUniqueID is null then:" +
                            "\n" +
                            "  • If the OperationType is Add, the UserUniqueID in the resulting user record shall be set to " +
                            "    default value specified above." +
                            "\n" +
                            "  • If the OperationType is Modify, the UserUniqueID in the user record shall NOT be changed from " +
                            "    the current value." +
                            "\n" +
                            "If UserUniqueID is not null, the UserUniqueID in the user record shall be set to the provided value.",

                        xref: "cluster§5.2.10.32.4"
                    },

                    {
                        details: "This field shall indicate the UserStatus to assign to this user when created or modified. If " +
                            "UserStatus is null then:" +
                            "\n" +
                            "  • If the OperationType is Add, the UserStatus in the resulting user record shall be set to default " +
                            "    value specified above." +
                            "\n" +
                            "  • If the OperationType is Modify, the UserStatus in the user record shall NOT be changed from the " +
                            "    current value." +
                            "\n" +
                            "If UserStatus is not null, the UserStatus in the user record shall be set to the provided value.",

                        xref: "cluster§5.2.10.32.5"
                    },

                    {
                        details: "This field shall indicate the UserType to assign to this user when created or modified. If UserType " +
                            "is null then:" +
                            "\n" +
                            "  • If the OperationType is Add, the UserType in the resulting user record shall be set to default " +
                            "    value specified above." +
                            "\n" +
                            "  • If the OperationType is Modify, the UserType in the user record shall NOT be changed from the " +
                            "    current value." +
                            "\n" +
                            "If UserType is not null, the UserType in the user record shall be set to the provided value.",

                        xref: "cluster§5.2.10.32.6"
                    },

                    {
                        details: "This field shall indicate the CredentialRule to use for this user." +
                            "\n" +
                            "The valid CredentialRule enumeration values depends on the bits in the CredentialRulesBitmap map. " +
                            "Each bit in the map identifies a valid CredentialRule that can be used." +
                            "\n" +
                            "If CredentialRule is null then:" +
                            "\n" +
                            "  • If the OperationType is Add, the CredentialRule in the resulting user record shall be set to " +
                            "    default value specified above." +
                            "\n" +
                            "  • If the OperationType is Modify, the CredentialRule in the user record shall NOT be changed from " +
                            "    the current value." +
                            "\n" +
                            "If CredentialRule is not null, the CredentialRule in the user record shall be set to the provided " +
                            "value.",

                        xref: "cluster§5.2.10.32.7"
                    }
                ]
            },

            {
                details: "Retrieve user." +
                    "\n" +
                    "An InvokeResponse command shall be sent with an appropriate error" +
                    "\n" +
                    "COMMAND, etc.) as needed otherwise the GetUserResponse Command shall be sent implying a status of " +
                    "SUCCESS.",

                xref: "cluster§5.2.10.33"
            },

            {
                details: "Returns the user for the specified UserIndex." +
                    "\n" +
                    "If the requested UserIndex is valid and the UserStatus is Available for the requested UserIndex then " +
                    "UserName, UserUniqueID, UserStatus, UserType, CredentialRule, Credentials, CreatorFabricIndex, and " +
                    "LastModifiedFabricIndex shall all be null in the response.",
                xref: "cluster§5.2.10.34",

                children: [
                    { details: "This field shall indicate the user ID.", xref: "cluster§5.2.10.34.1" },
                    {
                        details: "This field shall contain a string to use as a human readable identifier for the user.",
                        xref: "cluster§5.2.10.34.2"
                    },
                    { details: "See UserUniqueID field.", xref: "cluster§5.2.10.34.3" },
                    {
                        details: "This field shall indicate the UserStatus assigned to the user when created or modified.",
                        xref: "cluster§5.2.10.34.4"
                    },
                    {
                        details: "This field shall indicate the UserType assigned to this user when created or modified.",
                        xref: "cluster§5.2.10.34.5"
                    },
                    {
                        details: "This field shall indicate the CredentialRule set for this user.",
                        xref: "cluster§5.2.10.34.6"
                    },
                    {
                        details: "This field shall contain a list of credentials for this user.",
                        xref: "cluster§5.2.10.34.7"
                    },

                    {
                        details: "This field shall indicate the user’s creator fabric index. CreatorFabricIndex shall be null if " +
                            "UserStatus is set to Available or when the creator fabric cannot be determined (for example, when " +
                            "user was created outside the Interaction Model) and shall NOT be null otherwise. This value shall be " +
                            "set to 0 if the original creator fabric was deleted.",
                        xref: "cluster§5.2.10.34.8"
                    },

                    {
                        details: "This field shall indicate the user’s last modifier fabric index. LastModifiedFabricIndex shall be " +
                            "null if UserStatus is set to Available or when the modifier fabric cannot be determined (for " +
                            "example, when user was modified outside the Interaction Model) and shall NOT be null otherwise. This " +
                            "value shall be set to 0 if the last modifier fabric was deleted.",
                        xref: "cluster§5.2.10.34.9"
                    },

                    {
                        details: "This field shall indicate the next occupied UserIndex in the database which is useful for quickly " +
                            "identifying occupied user slots in the database. This shall NOT be null if there is at least one " +
                            "occupied entry after the requested UserIndex in the User database and shall be null if there are no " +
                            "more occupied entries.",
                        xref: "cluster§5.2.10.34.10"
                    }
                ]
            },

            {
                details: "Clears a user or all Users." +
                    "\n" +
                    "For each user to clear, all associated credentials (e.g. PIN, RFID, fingerprint, etc.) shall be " +
                    "cleared and the user entry values shall be reset to their default values (e.g. UserStatus shall be " +
                    "Available, UserType shall be UnrestrictedUser) and all associated schedules shall be cleared." +
                    "\n" +
                    "A LockUserChange event with the provided UserIndex shall be generated after successfully clearing " +
                    "users.",

                xref: "cluster§5.2.10.35",
                children: [{
                    details: "This field shall specify a valid User index or 0xFFFE to indicate all user slots shall be cleared.",
                    xref: "cluster§5.2.10.35.1"
                }]
            },

            {
                details: "Set a credential (e.g. PIN, RFID, Fingerprint, etc.) into the lock for a new user, existing user, or " +
                    "ProgrammingUser." +
                    "\n" +
                    "Fields used for different use cases:",
                xref: "cluster§5.2.10.36",

                children: [
                    {
                        details: "This field shall indicate the set credential operation type requested.",
                        xref: "cluster§5.2.10.36.1"
                    },
                    {
                        details: "This field shall contain a credential structure that contains the CredentialTypeEnum and the " +
                            "credential index (if applicable or 0 if not) to set.",
                        xref: "cluster§5.2.10.36.2"
                    },

                    {
                        details: "This field shall indicate the credential data to set for the credential being added or modified. The " +
                            "length of the credential data shall conform to the limits of the CredentialType specified in the " +
                            "Credential structure otherwise an INVALID_COMMAND status shall be returned in the " +
                            "SetCredentialResponse command.",
                        xref: "cluster§5.2.10.36.3"
                    },

                    {
                        details: "This field shall indicate the user index to the user record that corresponds to the credential being " +
                            "added or modified. This shall be null if OperationType is add and a new credential and user is being " +
                            "added at the same time.",
                        xref: "cluster§5.2.10.36.4"
                    },

                    {
                        details: "This field shall indicate the user status to use in the new user record if a new user is being " +
                            "created. This shall be null if OperationType is Modify. This may be null when adding a new " +
                            "credential and user.",
                        xref: "cluster§5.2.10.36.5"
                    },

                    {
                        details: "This field shall indicate the user type to use in the new user record if a new user is being " +
                            "created. This shall be null if OperationType is Modify. This may be null when adding a new " +
                            "credential and user.",
                        xref: "cluster§5.2.10.36.6"
                    }
                ]
            },

            {
                details: "Returns the status for setting the specified credential.",
                xref: "cluster§5.2.10.37",

                children: [
                    {
                        details: "Status comes from the Status Codes table and shall be one of the following values:" +
                            "\n" +
                            "  • SUCCESS, if setting user credential was successful." +
                            "\n" +
                            "  • FAILURE, if some unexpected internal error occurred setting user credential." +
                            "\n" +
                            "  • OCCUPIED, if OperationType is Add and CredentialIndex in Credential structure points to an " +
                            "    occupied slot." +
                            "\n" +
                            "  • OCCUPIED, if OperationType is Modify and CredentialIndex in Credential structure does not match " +
                            "    the CredentialIndex that is already associated with the provided UserIndex." +
                            "\n" +
                            "  • DUPLICATE, if CredentialData provided is a duplicate of another credential with the same " +
                            "    CredentialType (e.g. duplicate PIN code)." +
                            "\n" +
                            "  • RESOURCE_EXHAUSTED, if OperationType is Add and the new credential cannot be added due to " +
                            "    resource constraints such as:" +
                            "\n" +
                            "    ◦ The user referred to by UserIndex already has NumberOfCredentialsSupportedPerUser credentials " +
                            "      associated." +
                            "\n" +
                            "    ◦ The credential is of type AliroEvictableEndpointKey or AliroNonEvictableEndpointKey, and " +
                            "      adding it would cause the total number of credentials of those two types to exceed " +
                            "      NumberOfAliroEndpointKeysSupported." +
                            "\n" +
                            "  • INVALID_COMMAND, if one or more fields violate constraints or are invalid." +
                            "\n" +
                            "  • INVALID_COMMAND, if the CredentialIndex in the Credential provided exceeds the number of " +
                            "    credentials of the provided CredentialType supported by the lock." +
                            "\n" +
                            "  • INVALID_COMMAND, if OperationType is Modify and UserIndex points to an available slot.",

                        xref: "cluster§5.2.10.37.1"
                    },

                    {
                        details: "This field shall indicate the user index that was created with the new credential. If the status " +
                            "being returned is not success then this shall be null. This shall be null if OperationType was " +
                            "Modify; if the OperationType was Add and a new User was created this shall NOT be null and shall " +
                            "provide the UserIndex created. If the OperationType was Add and an existing User was associated with " +
                            "the new credential then this shall be null.",
                        xref: "cluster§5.2.10.37.2"
                    },

                    {
                        details: "This field shall indicate the next available index in the database for the credential type set, " +
                            "which is useful for quickly identifying available credential slots in the database. This shall NOT " +
                            "be null if there is at least one available entry after the requested credential index in the " +
                            "corresponding database and shall be null if there are no more available entries. The " +
                            "NextCredentialIndex reported shall NOT exceed the maximum number of credentials for a particular " +
                            "credential type.",

                        xref: "cluster§5.2.10.37.3"
                    }
                ]
            },

            {
                details: "Retrieve the status of a particular credential (e.g. PIN, RFID, Fingerprint, etc.) by index." +
                    "\n" +
                    "An InvokeResponse command shall be sent with an appropriate error (e.g. FAILURE, INVALID_COMMAND, " +
                    "etc.) as needed otherwise the GetCredentialStatusResponse command shall be sent implying a status of " +
                    "SUCCESS.",
                xref: "cluster§5.2.10.38",
                children: [{
                    details: "This field shall contain a credential structure that contains the CredentialTypeEnum and the " +
                        "credential index (if applicable or 0 if not) to retrieve the status for.",
                    xref: "cluster§5.2.10.38.1"
                }]
            },

            {
                details: "Returns the status for the specified credential.",
                xref: "cluster§5.2.10.39",

                children: [
                    {
                        details: "This field shall indicate if the requested credential type and index exists and is populated for the " +
                            "requested user index.",
                        xref: "cluster§5.2.10.39.1"
                    },

                    {
                        details: "This field shall indicate the credential’s corresponding user index value if the credential exists. " +
                            "If CredentialType requested was ProgrammingPIN then UserIndex shall be null; otherwise, UserIndex " +
                            "shall be null if CredentialExists is set to False and shall NOT be null if CredentialExists is set " +
                            "to True.",
                        xref: "cluster§5.2.10.39.2"
                    },

                    {
                        details: "This field shall indicate the credential’s creator fabric index. CreatorFabricIndex shall be null if " +
                            "CredentialExists is set to False or when the creator fabric cannot be determined (for example, when " +
                            "credential was created outside the Interaction Model) and shall NOT be null otherwise. This value " +
                            "shall be set to 0 if the original creator fabric was deleted.",
                        xref: "cluster§5.2.10.39.3"
                    },

                    {
                        details: "This field shall indicate the credential’s last modifier fabric index. LastModifiedFabricIndex shall " +
                            "be null if CredentialExists is set to False or when the modifier fabric cannot be determined (for " +
                            "example, when credential was modified outside the Interaction Model) and shall NOT be null " +
                            "otherwise. This value shall be set to 0 if the last modifier fabric was deleted.",
                        xref: "cluster§5.2.10.39.4"
                    },

                    {
                        details: "This field shall indicate the next occupied index in the database for the credential type requested, " +
                            "which is useful for quickly identifying occupied credential slots in the database. This shall NOT be " +
                            "null if there is at least one occupied entry after the requested credential index in the " +
                            "corresponding" +
                            "\n" +
                            "database and shall be null if there are no more occupied entries. The NextCredentialIndex reported " +
                            "shall NOT exceed the maximum number of credentials for a particular credential type.",

                        xref: "cluster§5.2.10.39.5"
                    },

                    {
                        details: "This field shall indicate the credential data for the requested user index." +
                            "\n" +
                            "If the CredentialType in the GetCredentialStatus command was not AliroCredentialIssuerKey, " +
                            "AliroEvictableEndpointKey, or AliroNonEvictableEndpointKey, this field shall NOT be included." +
                            "\n" +
                            "Otherwise, if CredentialExists is false this field shall be null." +
                            "\n" +
                            "Otherwise, the value of this field shall be the value of the relevant credential, as a 65-byte " +
                            "uncompressed elliptic curve public key as defined in section 2.3.3 of SEC 1." +
                            "\n" +
                            "NOTE" +
                            "\n" +
                            "Since the Aliro credentials are public keys, there is no security risk in allowing them to be read. " +
                            "Possession of the credential octet string does not allow operating the lock.",

                        xref: "cluster§5.2.10.39.6"
                    }
                ]
            },

            {
                details: "Clear one, one type, or all credentials except ProgrammingPIN credential." +
                    "\n" +
                    "Fields used for different use cases:" +
                    "\n" +
                    "For each credential cleared whose user doesn’t have another valid credential, the corresponding user " +
                    "record shall be reset back to default values and its UserStatus value shall be set to Available and " +
                    "UserType value shall be set to UnrestrictedUser and all schedules shall be cleared. In this case a " +
                    "LockUserChange event shall be generated for the user being cleared." +
                    "\n" +
                    "Return status shall be one of the following values:",

                xref: "cluster§5.2.10.40",

                children: [{
                    details: "This field shall contain a credential structure that contains the CredentialTypeEnum and the " +
                        "credential index (0xFFFE for all credentials or 0 if not applicable) to clear. This shall be null if " +
                        "clearing all credential types otherwise it shall NOT be null.",
                    xref: "cluster§5.2.10.40.1"
                }]
            },

            {
                details: "This command causes the lock device to unlock the door without pulling the latch. This command " +
                    "includes an optional code for the lock. The door lock may require a code depending on the value of " +
                    "the RequirePINForRemoteOperation attribute." +
                    "\n" +
                    "NOTE" +
                    "\n" +
                    "If the attribute AutoRelockTime is supported, the lock will transition to the locked state when the " +
                    "auto relock time has expired.",

                xref: "cluster§5.2.10.41",
                children: [{ details: "See PINCode field.", xref: "cluster§5.2.10.41.1" }]
            },

            {
                details: "This command allows communicating an Aliro Reader configuration, as defined in [Aliro], to the lock.",
                xref: "cluster§5.2.10.42",

                children: [
                    {
                        details: "This field shall indicate the signing key component of the Reader’s key pair.",
                        xref: "cluster§5.2.10.42.1"
                    },
                    {
                        details: "This field shall indicate the verification key component of the Reader’s key pair. This shall be an " +
                            "uncompressed elliptic curve public key as defined in section 2.3.3 of SEC 1.",
                        xref: "cluster§5.2.10.42.2"
                    },
                    {
                        details: "This field shall indicate the reader group identifier for the lock.",
                        xref: "cluster§5.2.10.42.3"
                    },
                    {
                        details: "This field shall indicate the group resolving key for the lock.",
                        xref: "cluster§5.2.10.42.4"
                    }
                ]
            },

            {
                details: "This command allows clearing an existing Aliro Reader configuration for the lock. Administrators " +
                    "shall NOT clear an Aliro Reader configuration without explicit user permission." +
                    "\n" +
                    "NOTE" +
                    "\n" +
                    "Using this command will revoke the ability of all existing Aliro user devices that have the old " +
                    "verification key to interact with the lock. This effect is not restricted to a single fabric or " +
                    "otherwise scoped in any way.",

                xref: "cluster§5.2.10.43"
            },

            {
                details: "This bitmap shall indicate the days of the week the Week Day schedule applies for.",
                xref: "cluster§5.2.6.1",

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
                xref: "cluster§5.2.6.2",
                children: [
                    { description: "Only one credential is required for lock operation" },
                    { description: "Any two credentials are required for lock operation" },
                    { description: "Any three credentials are required for lock operation" }
                ]
            },

            {
                description: "For the OperatingModesBitmap, a bit SET indicates that the operating mode IS NOT supported. A bit CLEAR indicates that the operating mode IS supported. This is the inverse of most bitmaps in this specification, and it is RECOMMENDED that clients carefully take this into consideration.",
                xref: "cluster§5.2.6.3",

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
                xref: "cluster§5.2.6.4",

                children: [
                    {
                        description: "The state of local programming functionality",
                        details: "This bit shall indicate the state related to local programming:" +
                            "\n" +
                            "  • 0 = Local programming is disabled" +
                            "\n" +
                            "  • 1 = Local programming is enabled",
                        xref: "cluster§5.2.6.4.1"
                    },

                    {
                        description: "The state of the keypad interface",
                        details: "This bit shall indicate the state related to keypad interface:" +
                            "\n" +
                            "  • 0 = Keypad interface is disabled" +
                            "\n" +
                            "  • 1 = Keypad interface is enabled",
                        xref: "cluster§5.2.6.4.2"
                    },

                    {
                        description: "The state of the remote interface",
                        details: "This bit shall indicate the state related to remote interface:" +
                            "\n" +
                            "  • 0 = Remote interface is disabled" +
                            "\n" +
                            "  • 1 = Remote interface is enabled",
                        xref: "cluster§5.2.6.4.3"
                    },

                    {
                        description: "Sound volume is set to Silent value",
                        details: "This bit shall indicate the state related to sound volume:" +
                            "\n" +
                            "  • 0 = Sound volume value is 0 (Silent)" +
                            "\n" +
                            "  • 1 = Sound volume value is equal to something other than 0",
                        xref: "cluster§5.2.6.4.4"
                    },

                    {
                        description: "Auto relock time it set to 0",
                        details: "This bit shall indicate the state related to auto relock time:" +
                            "\n" +
                            "  • 0 = Auto relock time value is 0" +
                            "\n" +
                            "  • 1 = Auto relock time value is equal to something other than 0",
                        xref: "cluster§5.2.6.4.5"
                    },

                    {
                        description: "LEDs is disabled",
                        details: "This bit shall indicate the state related to LED settings:" +
                            "\n" +
                            "  • 0 = LED settings value is 0 (NoLEDSignal)" +
                            "\n" +
                            "  • 1 = LED settings value is equal to something other than 0",
                        xref: "cluster§5.2.6.4.6"
                    }
                ]
            },

            {
                xref: "cluster§5.2.6.5",

                children: [
                    {
                        description: "The state of the ability to add users, credentials or schedules on the device",
                        details: "This bit shall indicate whether the door lock is able to add Users/Credentials/Schedules locally:" +
                            "\n" +
                            "  • 0 = This ability is disabled" +
                            "\n" +
                            "  • 1 = This ability is enabled",
                        xref: "cluster§5.2.6.5.1"
                    },

                    {
                        description: "The state of the ability to modify users, credentials or schedules on the device",
                        details: "This bit shall indicate whether the door lock is able to modify Users/Credentials/Schedules locally:" +
                            "\n" +
                            "  • 0 = This ability is disabled" +
                            "\n" +
                            "  • 1 = This ability is enabled",
                        xref: "cluster§5.2.6.5.2"
                    },

                    {
                        description: "The state of the ability to clear users, credentials or schedules on the device",
                        details: "This bit shall indicate whether the door lock is able to clear Users/Credentials/Schedules locally:" +
                            "\n" +
                            "  • 0 = This ability is disabled" +
                            "\n" +
                            "  • 1 = This ability is enabled",
                        xref: "cluster§5.2.6.5.3"
                    },

                    {
                        description: "The state of the ability to adjust settings on the device",
                        details: "This bit shall indicate whether the door lock is able to adjust lock settings locally:" +
                            "\n" +
                            "  • 0 = This ability is disabled" +
                            "\n" +
                            "  • 1 = This ability is enabled",
                        xref: "cluster§5.2.6.5.4"
                    }
                ]
            },

            {
                xref: "cluster§5.2.6.6",

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
                details: "This enumeration shall indicate the alarm type.",
                xref: "cluster§5.2.6.7",

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
                details: "This enumeration shall indicate the credential rule that can be applied to a particular user.",
                xref: "cluster§5.2.6.8",
                children: [
                    { description: "Only one credential is required for lock operation" },
                    { description: "Any two credentials are required for lock operation" },
                    { description: "Any three credentials are required for lock operation" }
                ]
            },

            {
                details: "This enumeration shall indicate the credential type.",
                xref: "cluster§5.2.6.9",

                children: [
                    { description: "Programming PIN code credential type" },
                    { description: "PIN code credential type" },
                    { description: "RFID identifier credential type" },
                    { description: "Fingerprint identifier credential type" },
                    { description: "Finger vein identifier credential type" },
                    { description: "Face identifier credential type" },

                    {
                        description: "A Credential Issuer public key as defined in [Aliro]",

                        details: "Credentials of this type shall be 65-byte uncompressed elliptic curve public keys as defined in " +
                            "section 2.3.3 of SEC 1." +
                            "\n" +
                            "Credentials of this type shall NOT be used to allow operating the lock. They shall be used, as " +
                            "defined in [Aliro], to create new credentials of type AliroEvictableEndpointKey via a step-up " +
                            "transaction." +
                            "\n" +
                            "When performing the step-up transaction, the lock shall request the data element with identifier " +
                            "\"matter1\", and shall attempt to create a new credential of type AliroEvictableEndpointKey if and " +
                            "only if the data element is returned and the Access Credential can be validated using the " +
                            "AliroCredentialIssuerKey." +
                            "\n" +
                            "When a new credential of type AliroEvictableEndpointKey is added in this manner, it shall be " +
                            "associated with the same user record as the AliroCredentialIssuerKey credential that allowed the new " +
                            "credential to be added." +
                            "\n" +
                            "If there are no available credential slots to add a new AliroEvictableEndpointKey credential (i.e. " +
                            "either the NumberOfCredentialsSupportedPerUser or the NumberOfAliroEndpointKeysSupported limit has " +
                            "been reached) but there exist credentials of type AliroEvictableEndpointKey associated with the user " +
                            "record, the server shall remove one of those credentials using the same procedure it would follow " +
                            "for the ClearCredential command before adding the new credential." +
                            "\n" +
                            "If there are no available credential slots to add a new AliroEvictableEndpointKey credential (i.e. " +
                            "either the NumberOfCredentialsSupportedPerUser or the NumberOfAliroEndpointKeysSupported limit has " +
                            "been reached) and there do not exist credentials of type AliroEvictableEndpointKey associated with " +
                            "the user record, a new AliroEvictableEndpointKey credential shall NOT be created." +
                            "\n" +
                            "If the step-up process results in addition of new credentials, the corresponding LockUserChange " +
                            "event shall have OperationSource set to Aliro." +
                            "\n" +
                            "If the step-up process results in the lock state changing (e.g. locking or unlocking), the " +
                            "credential associated with those changes in the LockOperation events shall be the newly provisioned " +
                            "AliroEvictableEndpointKey credential if one was created. If no new AliroEvictableEndpointKey " +
                            "credential was created, the credential associated with the changes in the LockOperation events shall " +
                            "be the AliroCredentialIssuerKey credential used for the step-up.",

                        xref: "cluster§5.2.6.9.1"
                    },

                    {
                        description: "An Endpoint public key as defined in [Aliro] which can be evicted if space is needed for another endpoint key",
                        details: "Credentials of this type shall be 65-byte uncompressed elliptic curve public keys as defined in " +
                            "section 2.3.3 of SEC 1.",
                        xref: "cluster§5.2.6.9.2"
                    },

                    {
                        description: "An Endpoint public key as defined in [Aliro] which cannot be evicted if space is needed for another endpoint key",
                        details: "Credentials of this type shall be 65-byte uncompressed elliptic curve public keys as defined in " +
                            "section 2.3.3 of SEC 1.",
                        xref: "cluster§5.2.6.9.3"
                    }
                ]
            },

            {
                details: "This enumeration shall indicate the data operation performed.",
                xref: "cluster§5.2.6.10",
                children: [
                    { description: "Data is being added or was added" },
                    { description: "Data is being cleared or was cleared" },
                    { description: "Data is being modified or was modified" }
                ]
            },

            {
                details: "This enumeration shall indicate the current door state.",
                xref: "cluster§5.2.6.11",

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
                details: "This enumeration shall indicate the data type that is being or has changed.",
                xref: "cluster§5.2.6.12",

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
                details: "This enumeration shall indicate the type of Lock operation performed.",
                xref: "cluster§5.2.6.13",

                children: [
                    { description: "Lock operation" },
                    { description: "Unlock operation" },
                    { description: "Triggered by keypad entry for user with User Type set to Non Access User" },
                    { description: "Triggered by using a user with UserType set to Forced User" },
                    { description: "Unlatch operation" }
                ]
            },

            {
                details: "This enumeration shall indicate the error cause of the Lock/Unlock operation performed.",
                xref: "cluster§5.2.6.14",

                children: [
                    { description: "Lock/unlock error caused by unknown or unspecified source" },
                    { description: "Lock/unlock error caused by invalid PIN, RFID, fingerprint or other credential" },
                    { description: "Lock/unlock error caused by disabled USER or credential" },
                    { description: "Lock/unlock error caused by schedule restriction" },
                    {
                        description: "Lock/unlock error caused by insufficient battery power left to safely actuate the lock"
                    }
                ]
            },

            {
                details: "This enumeration shall indicate the lock operating mode." +
                    "\n" +
                    "The table below shows the operating mode and which interfaces are enabled, if supported, for each " +
                    "mode." +
                    "\n" +
                    "* Interface Operational: Yes, No or N/A" +
                    "\n" +
                    "NOTE" +
                    "\n" +
                    "For modes that disable the remote interface, the door lock shall respond to Lock, Unlock, Toggle, " +
                    "and Unlock with Timeout commands with a response status Failure and not take the action requested by " +
                    "those commands. The door lock shall NOT disable the radio or otherwise unbind or leave the network. " +
                    "It shall still respond to all other commands and requests.",

                xref: "cluster§5.2.6.15",

                children: [
                    { details: "The lock operates normally. All interfaces are enabled.", xref: "cluster§5.2.6.15.1" },
                    {
                        details: "Only remote interaction is enabled. The keypad shall only be operable by the master user.",
                        xref: "cluster§5.2.6.15.2"
                    },

                    {
                        details: "This mode is only possible if the door is locked. Manual unlocking changes the mode to Normal " +
                            "operating mode. All external interaction with the door lock is disabled. This mode is intended to be " +
                            "used so that users, presumably inside the property, will have control over the entrance.",
                        xref: "cluster§5.2.6.15.3"
                    },

                    {
                        details: "This mode only disables remote interaction with the lock. This does not apply to any remote " +
                            "proprietary means of communication. It specifically applies to the Lock, Unlock, Toggle, and Unlock " +
                            "with Timeout Commands.",
                        xref: "cluster§5.2.6.15.4"
                    },

                    {
                        details: "The lock is open or can be opened or closed at will without the use of a Keypad or other means of " +
                            "user validation (e.g. a lock for a business during work hours).",
                        xref: "cluster§5.2.6.15.5"
                    }
                ]
            },

            {
                details: "This enumeration shall indicate the source of the Lock/Unlock or user change operation performed.",
                xref: "cluster§5.2.6.16",

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
                details: "This enumeration shall indicate what the status is for a specific user ID.",
                xref: "cluster§5.2.6.17",
                children: [
                    { description: "The user ID is available" },
                    { description: "The user ID is occupied and enabled" },
                    { description: "The user ID is occupied and disabled" }
                ]
            },

            {
                details: "This enumeration shall indicate what the type is for a specific user ID.",
                xref: "cluster§5.2.6.18",

                children: [
                    {
                        description: "The user ID type is unrestricted",
                        details: "This value shall indicate the user has access 24/7 provided proper PIN or RFID is supplied (e.g., " +
                            "owner).",
                        xref: "cluster§5.2.6.18.1"
                    },

                    {
                        description: "The user ID type is schedule",

                        details: "This value shall indicate the user has the ability to open lock within a specific time period (e.g., " +
                            "guest)." +
                            "\n" +
                            "When UserType is set to YearDayScheduleUser, user access shall be restricted as follows:" +
                            "\n" +
                            "  • If no YearDaySchedules are set for the user, then access shall be denied" +
                            "\n" +
                            "  • If one or more YearDaySchedules are set, user access shall be granted if and only if the current " +
                            "    time falls within at least one of the YearDaySchedules. If current time is not known, user " +
                            "    access shall NOT be granted.",

                        xref: "cluster§5.2.6.18.2"
                    },

                    {
                        description: "The user ID type is schedule",

                        details: "This value shall indicate the user has the ability to open lock based on specific time period within " +
                            "a reoccurring weekly schedule (e.g., cleaning worker)." +
                            "\n" +
                            "When UserType is set to WeekDayScheduleUser, user access shall be restricted as follows:" +
                            "\n" +
                            "  • If no WeekDaySchedules are set for the user, then access shall be denied" +
                            "\n" +
                            "  • If one or more WeekDaySchedules are set, user access shall be granted if and only if the current " +
                            "    time falls within at least one of the WeekDaySchedules. If current time is not known, user " +
                            "    access shall NOT be granted.",

                        xref: "cluster§5.2.6.18.3"
                    },

                    {
                        description: "The user ID type is programming",
                        details: "This value shall indicate the user has the ability to both program and operate the door lock. This " +
                            "user can manage the users and user schedules. In all other respects this user matches the " +
                            "unrestricted (default) user. ProgrammingUser is the only user that can disable the user interface " +
                            "(keypad, remote, etc…).",
                        xref: "cluster§5.2.6.18.4"
                    },

                    {
                        description: "The user ID type is non access",
                        details: "This value shall indicate the user is recognized by the lock but does not have the ability to open " +
                            "the lock. This user will only cause the lock to generate the appropriate event notification to any " +
                            "bound devices.",
                        xref: "cluster§5.2.6.18.5"
                    },

                    {
                        description: "The user ID type is forced",
                        details: "This value shall indicate the user has the ability to open lock but a ForcedUser LockOperationType " +
                            "and ForcedUser silent alarm will be emitted to allow a notified Node to alert emergency services or " +
                            "contacts on the user account when used.",
                        xref: "cluster§5.2.6.18.6"
                    },

                    {
                        description: "The user ID type is disposable",
                        details: "This value shall indicate the user has the ability to open lock once after which the lock shall " +
                            "change the corresponding user record UserStatus value to OccupiedDisabled automatically.",
                        xref: "cluster§5.2.6.18.7"
                    },

                    {
                        description: "The user ID type is expiring",
                        details: "This value shall indicate the user has the ability to open lock for ExpiringUserTimeout attribute " +
                            "minutes after the first use of the PIN code, RFID code, Fingerprint, or other credential. After " +
                            "ExpiringUserTimeout minutes the corresponding user record UserStatus value shall be set to " +
                            "OccupiedDisabled automatically by the lock. The lock shall persist the timeout across reboots such " +
                            "that the ExpiringUserTimeout is honored.",
                        xref: "cluster§5.2.6.18.8"
                    },

                    {
                        description: "The user ID type is schedule restricted",

                        details: "This value shall indicate the user access is restricted by Week Day and/or Year Day schedule. When " +
                            "UserType is set to ScheduleRestrictedUser, user access shall be restricted as follows:" +
                            "\n" +
                            "  • If no WeekDaySchedules and no YearDaySchedules are set for the user, then access shall be denied" +
                            "\n" +
                            "  • If one or more WeekDaySchedules are set, but no YearDaySchedules are set for the user, then user " +
                            "    access shall be equivalent to the WeekDayScheduleUser UserType" +
                            "\n" +
                            "  • If one or more YearDaySchedules are set, but no WeekDaySchedules are set for the user, then user " +
                            "    access shall be equivalent to the YearDayScheduleUser UserType" +
                            "\n" +
                            "  • If one or WeekDaySchedules are set AND one or more YearDaySchedules are set, then user access " +
                            "    shall be granted if and only if the current time falls within at least one of the " +
                            "    WeekDaySchedules AND the current time falls within at least one of the YearDaySchedules.",

                        xref: "cluster§5.2.6.18.9"
                    },

                    {
                        description: "The user ID type is remote only",
                        details: "This value shall indicate the user access and PIN code is restricted to remote lock/unlock commands " +
                            "only. This type of user might be useful for regular delivery services or voice assistant unlocking " +
                            "operations to prevent a PIN code credential created for them from being used at the keypad. The PIN " +
                            "code credential would only be provided over-the-air for the lock/unlock commands.",
                        xref: "cluster§5.2.6.18.10"
                    }
                ]
            },

            {
                xref: "cluster§5.2.6.19",

                children: [
                    { description: "Lock state is not fully locked" },
                    { description: "Lock state is fully locked" },
                    { description: "Lock state is fully unlocked" },
                    { description: "Lock state is fully unlocked and the latch is pulled" }
                ]
            },

            {
                xref: "cluster§5.2.6.20",

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
                xref: "cluster§5.2.6.21",
                children: [
                    { description: "Never use LED for signalization" },
                    { description: "Use LED signalization except for access allowed events" },
                    { description: "Use LED signalization for all events" }
                ]
            },

            {
                xref: "cluster§5.2.6.22",

                children: [
                    { description: "Silent Mode" },
                    { description: "Low Volume" },
                    { description: "High Volume" },
                    { description: "Medium Volume" }
                ]
            },

            {
                xref: "cluster§5.2.6.23",
                children: [
                    { description: "Event type is operation" },
                    { description: "Event type is programming" },
                    { description: "Event type is alarm" }
                ]
            },

            {
                details: "This struct shall indicate the credential types and their corresponding indices (if any) for the " +
                    "event or user record.",
                xref: "cluster§5.2.6.24",

                children: [
                    {
                        details: "This field shall indicate the credential field used to authorize the lock operation.",
                        xref: "cluster§5.2.6.24.1"
                    },

                    {
                        details: "This field shall indicate the index of the specific credential used to authorize the lock operation " +
                            "in the list of credentials identified by CredentialType (e.g. PIN, RFID, etc.). This field shall be " +
                            "set to 0 if CredentialType is ProgrammingPIN or does not correspond to a list that can be indexed " +
                            "into.",
                        xref: "cluster§5.2.6.24.2"
                    }
                ]
            },

            {
                xref: "cluster§5.2.7.1",
                children: [
                    { description: "Entry would cause a duplicate credential/ID." },
                    { description: "Entry would replace an occupied slot." }
                ]
            }
        ]
    }
);
