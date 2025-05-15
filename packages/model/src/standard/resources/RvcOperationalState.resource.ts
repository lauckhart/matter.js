/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { RvcOperationalState } from "#index.js";

RvcOperationalState.patch({
    classification: "application", pics: "RVCOPSTATE",
    details: "This cluster is derived from the Operational State cluster and provides an interface for monitoring " +
        "the operational state of a robotic vacuum cleaner.",
    xref: "cluster§7.4",

    children: [
        undefined,
        { xref: "cluster§7.4.5" },
        { xref: "cluster§7.4.5" },
        { xref: "cluster§7.4.5" },
        { xref: "cluster§7.4.5" },
        { xref: "cluster§7.4.5" },

        {
            details: "On receipt of this command, the device shall start seeking the charging dock, if possible in the " +
                "current state of the device." +
                "\n" +
                "If this command is received when already in the SeekingCharger state the device shall respond with " +
                "an OperationalCommandResponse command with an ErrorStateID of NoError but the command shall have no " +
                "other effect." +
                "\n" +
                "A device that receives this command in any state which does not allow seeking the charger, such as " +
                "Charging or Docked, shall respond with an OperationalCommandResponse command with an ErrorStateID of " +
                "CommandInvalidInState and shall have no other effect." +
                "\n" +
                "Otherwise, on success:" +
                "\n" +
                "  • The OperationalState attribute shall be set to SeekingCharger." +
                "\n" +
                "  • The device shall respond with an OperationalCommandResponse command with an ErrorStateID of " +
                "    NoError.",

            xref: "cluster§7.4.5.1"
        },

        {
            details: "The values defined herein are applicable to this derived cluster of Operational State only and are " +
                "additional to the set of values defined in Operational State itself." +
                "\n" +
                "RVC Pause Compatibility defines the compatibility of the states this cluster defines with the Pause " +
                "command." +
                "\n" +
                "### Table 13. RVC Pause Compatibility" +
                "\n" +
                "RVC Resume Compatibility defines the compatibility of the states this cluster defines with the " +
                "Resume command." +
                "\n" +
                "### Table 14. RVC Resume Compatibility" +
                "\n" +
                "While in the Charging or Docked states, the device shall NOT attempt to resume unless it " +
                "transitioned to those states while operating and can resume, such as, for example, if it is " +
                "recharging while in a cleaning cycle. Else, if the operational state is Charging or Docked but " +
                "there’s no operation to resume or the operation can’t be resumed, the device shall respond with an " +
                "OperationalCommandResponse command with an ErrorStateID of CommandInvalidInState but take no further " +
                "action.",

            xref: "cluster§7.4.4.1",

            children: [
                { description: "The device is stopped" },
                { description: "The device is operating" },
                { description: "The device is paused during an operation" },
                { description: "The device is in an error state" },
                { description: "The device is en route to the charging dock" },
                { description: "The device is charging" },
                { description: "The device is on the dock, not charging" }
            ]
        },

        {
            details: "The values defined herein are applicable to this derived cluster of Operational State only and are " +
                "additional to the set of values defined in Operational State itself.",
            xref: "cluster§7.4.4.2",

            children: [
                { description: "The device is not in an error state" },
                { description: "The device is unable to start or resume operation" },
                { description: "The device was unable to complete the current operation" },
                { description: "The device cannot process the command in its current state" },
                { description: "The device has failed to find or reach the charging dock" },
                { description: "The device is stuck and requires manual intervention" },
                { description: "The device has detected that its dust bin is missing" },
                { description: "The device has detected that its dust bin is full" },
                { description: "The device has detected that its water tank is empty" },
                { description: "The device has detected that its water tank is missing" },
                { description: "The device has detected that its water tank lid is open" },
                { description: "The device has detected that its cleaning pad is missing" }
            ]
        }
    ]
});
