/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Resource } from "#models/Resource.js";

Resource.add({
    name: "ValveConfigurationAndControl", tag: "cluster",
    classification: "application", pics: "VALCC",
    details: "This cluster is used to configure a valve.",
    xref: "cluster§4.6",

    children: [
        {
            name: "FeatureMap", tag: "attribute",
            xref: "cluster§4.6.4",

            children: [
                {
                    name: "TS", tag: "field",
                    details: "This feature shall indicate that the valve uses Time Synchronization and UTC time to indicate " +
                        "duration and auto close time." +
                        "\n" +
                        "This feature shall NOT be supported unless the device supports the Time Synchronization cluster.",
                    xref: "cluster§4.6.4.1"
                },

                {
                    name: "LVL", tag: "field",
                    details: "This feature shall indicate that the valve is capable of being adjusted to a specific position, as a " +
                        "percentage, of its full range of motion.",
                    xref: "cluster§4.6.4.2"
                }
            ]
        },

        {
            name: "OpenDuration", tag: "attribute",
            details: "Indicates the total duration, in seconds, for which the valve will remain open for this current " +
                "opening." +
                "\n" +
                "A value of null shall indicate the duration is not set, meaning that the valve will remain open " +
                "until closed by the user or some other automation.",
            xref: "cluster§4.6.7.1"
        },

        {
            name: "DefaultOpenDuration", tag: "attribute",
            details: "Indicates the default duration, in seconds, for which the valve will remain open, if the " +
                "OpenDuration field is not present in the Open command." +
                "\n" +
                "A value of null shall indicate the duration is not set, meaning that the valve will remain open " +
                "until closed by the user or some other automation.",
            xref: "cluster§4.6.7.2"
        },

        {
            name: "AutoCloseTime", tag: "attribute",

            details: "Indicates the UTC time when the valve will close, depending on value of the OpenDuration attribute." +
                "\n" +
                "Null:" +
                "\n" +
                "  • When OpenDuration is null, or" +
                "\n" +
                "  • When the valve does not have a synchronized UTCTime in the Time Synchronization cluster, or" +
                "\n" +
                "  • When the valve is closed." +
                "\n" +
                "When the value of this attribute is earlier or equal to the current UTC time, the valve shall " +
                "automatically transition to its closed position. The behavior of transitioning to the closed " +
                "position, shall match the behavior described in the Close command." +
                "\n" +
                "If this attribute is not null and the Time Synchronization cluster receives a SetUTCTime command, " +
                "modifying the current UTC time of the device, the value of this attribute shall be adjusted to match " +
                "the new UTC time plus the value of the RemainingDuration attribute.",

            xref: "cluster§4.6.7.3"
        },

        {
            name: "RemainingDuration", tag: "attribute",

            details: "Indicates the remaining duration, in seconds, until the valve closes. Null:" +
                "\n" +
                "  • When OpenDuration is null, or" +
                "\n" +
                "  • When the valve is closed." +
                "\n" +
                "The value of this attribute shall only be reported in the following cases:" +
                "\n" +
                "  • When it changes from null to any other value and vice versa, or" +
                "\n" +
                "  • When it changes to 0, or" +
                "\n" +
                "  • When it increases, or" +
                "\n" +
                "  • When the closing time changes." +
                "\n" +
                "Meaning that clients SHOULD NOT rely on the reporting of this attribute in order to keep track of " +
                "the remaining duration, due to this attribute not being reported during regular countdown." +
                "\n" +
                "When reading this attribute it shall return the remaining duration, in seconds, until the valve " +
                "closes." +
                "\n" +
                "When the value of this attribute counts down to 0, the valve shall automatically transition to its " +
                "closed position. The behavior of transitioning to the closed position shall match the behavior " +
                "described in the Close command.",

            xref: "cluster§4.6.7.4"
        },

        {
            name: "CurrentState", tag: "attribute",
            details: "Indicates the current state of the valve." +
                "\n" +
                "A value of null shall indicate that the current state is not known.",
            xref: "cluster§4.6.7.5"
        },

        {
            name: "TargetState", tag: "attribute",
            details: "Indicates the target state, while changing the state, of the valve." +
                "\n" +
                "A value of null shall indicate that no target position is set, since the change in state is either " +
                "done or failed.",
            xref: "cluster§4.6.7.6"
        },

        {
            name: "CurrentLevel", tag: "attribute",

            details: "Indicates the current level of the valve as a percentage value, between fully closed and fully open. " +
                "During a transition from one level to another level, the valve SHOULD keep this attribute updated to " +
                "the best of its ability, in order to represent the actual level of the valve during the movement." +
                "\n" +
                "A value of 100 percent shall indicate the fully open position. A value of 0 percent shall indicate " +
                "the fully closed position." +
                "\n" +
                "A value of null shall indicate that the current state is not known.",

            xref: "cluster§4.6.7.7"
        },

        {
            name: "TargetLevel", tag: "attribute",

            details: "Indicates the target level of the valve as a percentage value, between fully closed and fully open." +
                "\n" +
                "The interpretation of the percentage value is the same as for the CurrentLevel attribute." +
                "\n" +
                "A value of null shall indicate that no target position is set, since the change of level is either " +
                "done or failed.",

            xref: "cluster§4.6.7.8"
        },

        {
            name: "DefaultOpenLevel", tag: "attribute",

            details: "Indicates the default value used for the TargetLevel attribute, when a valve transitions from the " +
                "closed to the open state, caused by an Open command, if a TargetLevel field is not present in the " +
                "Open command." +
                "\n" +
                "If the LevelStep attribute is present and the value of a write interaction to this attribute field " +
                "is not 100, the value shall be a supported value as defined by the LevelStep attribute, such that " +
                "(Value received in the write interaction) % (Value of LevelStep attribute) equals 0. If the " +
                "resulting value is not 0, the requested DefaultOpenLevel value is considered an unsupported value " +
                "and a CONSTRAINT_ERROR status shall be returned.",

            xref: "cluster§4.6.7.9"
        },

        {
            name: "ValveFault", tag: "attribute",
            details: "Indicates any faults registered by the valve.",
            xref: "cluster§4.6.7.10"
        },

        {
            name: "LevelStep", tag: "attribute",

            details: "Indicates the step size the valve can support." +
                "\n" +
                "The step size defined by this attribute is counted from 0 and the final step towards 100 may be " +
                "different than what is defined in this attribute. For example, if the value of this attribute is 15, " +
                "it results in these target values being supported; 0, 15, 30, 45, 60, 75, 90 and 100." +
                "\n" +
                "The values of 0 and 100 shall always be supported, regardless of the value of this attribute.",

            xref: "cluster§4.6.7.11"
        },

        {
            name: "ValveStateChanged", tag: "event",
            details: "This event shall be generated when the valve state changed. For level changes, after the end of " +
                "movement, for state changes when the new state has been reached.",
            xref: "cluster§4.6.9.1",

            children: [
                {
                    name: "ValveState", tag: "field",
                    details: "This field shall indicate the new state of the valve.",
                    xref: "cluster§4.6.9.1.1"
                },
                {
                    name: "ValveLevel", tag: "field",
                    details: "This field shall indicate the new level of the valve.",
                    xref: "cluster§4.6.9.1.2"
                }
            ]
        },

        {
            name: "ValveFault", tag: "event",
            details: "This event shall be generated when the valve registers or clears a fault, e.g. not being able to " +
                "transition to the requested target level or state.",
            xref: "cluster§4.6.9.2",

            children: [{
                name: "ValveFault", tag: "field",
                details: "This field shall indicate the value of the ValveFault attribute, at the time this event is " +
                    "generated.",
                xref: "cluster§4.6.9.2.1"
            }]
        },

        {
            name: "Open", tag: "command",
            details: "This command is used to set the valve to its open position.",
            xref: "cluster§4.6.8.1",

            children: [
                {
                    name: "OpenDuration", tag: "field",
                    details: "This field shall indicate the duration that the valve will remain open for this specific Open " +
                        "command." +
                        "\n" +
                        "A value of null shall indicate the duration is not set, meaning that the valve will remain open " +
                        "until closed by the user or some other automation.",
                    xref: "cluster§4.6.8.1.1"
                },

                {
                    name: "TargetLevel", tag: "field",
                    details: "This field shall indicate the target level used for this specific Open command.",
                    xref: "cluster§4.6.8.1.2"
                }
            ]
        },

        {
            name: "Close", tag: "command",
            details: "This command is used to set the valve to its closed position.",
            xref: "cluster§4.6.8.2"
        },

        {
            name: "ValveFaultBitmap", tag: "datatype",
            xref: "cluster§4.6.5.1",

            children: [
                { name: "GeneralFault", tag: "field", description: "Unspecified fault detected" },
                { name: "Blocked", tag: "field", description: "Valve is blocked" },
                { name: "Leaking", tag: "field", description: "Valve has detected a leak" },
                { name: "NotConnected", tag: "field", description: "No valve is connected to controller" },
                { name: "ShortCircuit", tag: "field", description: "Short circuit is detected" },
                { name: "CurrentExceeded", tag: "field", description: "The available current has been exceeded" }
            ]
        },

        {
            name: "ValveStateEnum", tag: "datatype",
            xref: "cluster§4.6.5.2",

            children: [
                { name: "Closed", tag: "field", description: "Valve is in closed position" },
                { name: "Open", tag: "field", description: "Valve is in open position" },
                {
                    name: "Transitioning", tag: "field",
                    description: "Valve is transitioning between closed and open positions or between levels"
                }
            ]
        },

        {
            name: "StatusCodeEnum", tag: "datatype",
            xref: "cluster§4.6.6.1",
            children: [{
                name: "FailureDueToFault", tag: "field",
                description: "The requested action could not be performed due to a fault on the valve."
            }]
        }
    ]
});
