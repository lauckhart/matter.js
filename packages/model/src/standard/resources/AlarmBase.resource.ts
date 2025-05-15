/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { AlarmBase } from "#index.js";

AlarmBase.patch({
    classification: "application", pics: "ALARM",
    details: "This cluster is a base cluster from which clusters for particular alarms for a device type can be " +
        "derived. Each derivation shall define the values for the AlarmBitmap data type used in this cluster. " +
        "Each derivation shall define which alarms are latched.",
    xref: { document: "cluster", section: "1.15" },

    children: [
        undefined,

        {
            xref: { document: "cluster", section: "1.15.4" },
            children: [{
                description: "Reset",
                details: "This feature indicates that alarms can be reset via the Reset command.",
                xref: { document: "cluster", section: "1.15.4.1" }
            }]
        },

        {
            details: "Indicates a bitmap where each bit set in the Mask attribute corresponds to an alarm that shall be " +
                "enabled.",
            xref: { document: "cluster", section: "1.15.6.1" }
        },

        {
            details: "Indicates a bitmap where each bit set in the Latch attribute shall indicate that the corresponding " +
                "alarm will be latched when set, and will not reset to inactive when the underlying condition which " +
                "caused the alarm is no longer present, and so requires an explicit reset using the Reset command.",
            xref: { document: "cluster", section: "1.15.6.2" }
        },

        {
            details: "Indicates a bitmap where each bit shall represent the state of an alarm. The value of true means the " +
                "alarm is active, otherwise the alarm is inactive.",
            xref: { document: "cluster", section: "1.15.6.3" }
        },

        {
            details: "Indicates a bitmap where each bit shall represent whether or not an alarm is supported. The value of " +
                "true means the alarm is supported, otherwise the alarm is not supported." +
                "\n" +
                "If an alarm is not supported, the corresponding bit in Mask, Latch, and State shall be false.",
            xref: { document: "cluster", section: "1.15.6.4" }
        },

        {
            details: "This event shall be generated when one or more alarms change state, and shall have these fields:",
            xref: { document: "cluster", section: "1.15.8.1" },

            children: [
                {
                    details: "This field shall indicate those alarms that have become active.",
                    xref: { document: "cluster", section: "1.15.8.1.1" }
                },
                {
                    details: "This field shall indicate those alarms that have become inactive.",
                    xref: { document: "cluster", section: "1.15.8.1.2" }
                },

                {
                    details: "This field shall be a copy of the new State attribute value that resulted in the event being " +
                        "generated. That is, this field shall have all the bits in Active set and shall NOT have any of the " +
                        "bits in Inactive set.",
                    xref: { document: "cluster", section: "1.15.8.1.4" }
                },

                {
                    details: "This field shall be a copy of the Mask attribute when this event was generated.",
                    xref: { document: "cluster", section: "1.15.8.1.3" }
                }
            ]
        },

        {
            details: "This command resets active and latched alarms (if possible). Any generated Notify event shall " +
                "contain fields that represent the state of the server after the command has been processed.",
            xref: { document: "cluster", section: "1.15.7.1" },

            children: [{
                details: "This field shall indicate a bitmap where each bit set in this field corresponds to an alarm that " +
                    "shall be reset to inactive in the State attribute unless the alarm definition requires manual " +
                    "intervention. If the alarms indicated are successfully reset, the response status code shall be " +
                    "SUCCESS, otherwise, the response status code shall be FAILURE.",
                xref: { document: "cluster", section: "1.15.7.1.1" }
            }]
        },

        {
            details: "This command allows a client to request that an alarm be enabled or suppressed at the server.",
            xref: { document: "cluster", section: "1.15.7.2" },

            children: [{
                details: "This field shall indicate a bitmap where each bit set in the this field corresponds to an alarm that " +
                    "SHOULD be enabled or suppressed. A value of 1 shall indicate that the alarm SHOULD be enabled while " +
                    "a value of 0 shall indicate that the alarm SHOULD be suppressed." +
                    "\n" +
                    "A server that receives this command with a Mask that includes bits that are set for unknown alarms " +
                    "shall respond with a status code of INVALID_COMMAND." +
                    "\n" +
                    "A server that receives this command with a Mask that includes bits that are set for alarms which are " +
                    "not supported, as indicated in the Supported attribute, shall respond with a status code of " +
                    "INVALID_COMMAND." +
                    "\n" +
                    "A server that is unable to enable a currently suppressed alarm, or is unable to suppress a currently " +
                    "enabled alarm shall respond with a status code of FAILURE; otherwise the server shall respond with a " +
                    "status code of SUCCESS." +
                    "\n" +
                    "On a SUCCESS case, the server shall also change the value of the Mask attribute to the value of the " +
                    "Mask field from this command. After that the server shall also update the value of its State " +
                    "attribute to reflect the status of the new alarm set as indicated by the new value of the Mask " +
                    "attribute.",

                xref: { document: "cluster", section: "1.15.7.2.1" }
            }]
        },

        {
            details: "This data type shall be a map32 with values defined by the derived cluster. The meaning of each bit " +
                "position shall be consistent for all attributes in a derived cluster. That is, if bit 0 is defined " +
                "for an alarm, the Latch, State, and Supported information for that alarm are also bit 0.",
            xref: { document: "cluster", section: "1.15.5.1" }
        }
    ]
});
