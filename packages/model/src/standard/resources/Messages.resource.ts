/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Resource } from "#models/Resource.js";

Resource.add({
    name: "Messages", tag: "cluster",
    classification: "application", pics: "MESS",
    details: "This cluster provides an interface for passing messages to be presented by a device.",
    xref: "cluster§1.16",

    children: [
        {
            name: "FeatureMap", tag: "attribute",
            xref: "cluster§1.16.4",

            children: [
                {
                    name: "CONF", tag: "field",
                    details: "This feature shall indicate that the device can get confirmation from a user that the message was " +
                        "received.",
                    xref: "cluster§1.16.4.1"
                },

                {
                    name: "RESP", tag: "field",
                    details: "This feature shall indicate that the device is capable of presenting a list of responses to the user " +
                        "and recording the user’s choice of response.",
                    xref: "cluster§1.16.4.2"
                },

                {
                    name: "RPLY", tag: "field",
                    details: "This feature shall indicate that the device is capable of collecting a free-form text response to a " +
                        "message.",
                    xref: "cluster§1.16.4.3"
                },

                {
                    name: "PROT", tag: "field",
                    details: "This feature shall indicate that the device is capable of requiring the user to authenticate before " +
                        "viewing a message; e.g. entering a PIN or password before viewing a message with billing " +
                        "information.",
                    xref: "cluster§1.16.4.4"
                }
            ]
        },

        {
            name: "Messages", tag: "attribute",
            details: "Indicates a list of queued messages." +
                "\n" +
                "In addition to filtering based upon fabric, to preserve user privacy, the server may further limit " +
                "the set of messages returned in a read request. At minimum, the server shall return to a client " +
                "those messages that the client itself created/submitted.",
            xref: "cluster§1.16.6.1"
        },

        {
            name: "ActiveMessageIDs", tag: "attribute",
            details: "Indicates a list of the MessageIDs of the Messages currently being presented. If this list is empty, " +
                "no messages are currently being presented." +
                "\n" +
                "This list shall NOT be fabric-scoped; it shall contain MessageIDs for all Messages being presented, " +
                "no matter what fabric the client that queued them is on.",
            xref: "cluster§1.16.6.2"
        },

        {
            name: "MessageQueued", tag: "event",
            details: "This event shall be generated when a message is added to the messages attribute.",
            xref: "cluster§1.16.8.1",
            children: [{
                name: "MessageId", tag: "field",
                details: "This field shall indicate the MessageID for newly added message.",
                xref: "cluster§1.16.8.1.1"
            }]
        },

        {
            name: "MessagePresented", tag: "event",
            details: "This event shall be generated when the message is presented to the user.",
            xref: "cluster§1.16.8.2",
            children: [{
                name: "MessageId", tag: "field",
                details: "This field shall indicate the MessageID for the message being presented.",
                xref: "cluster§1.16.8.2.1"
            }]
        },

        {
            name: "MessageComplete", tag: "event",
            details: "This event shall be generated when the message is confirmed by the user, or when the Duration of the " +
                "message has elapsed without confirmation.",
            xref: "cluster§1.16.8.3",

            children: [
                {
                    name: "MessageId", tag: "field",
                    details: "This field shall indicate the MessageID for the message being confirmed.",
                    xref: "cluster§1.16.8.3.1"
                },

                {
                    name: "ResponseId", tag: "field",
                    details: "This field shall indicate the MessageResponseID selected by the user. If there was no response " +
                        "before the Duration of the message has elapsed, this field shall be null.",
                    xref: "cluster§1.16.8.3.2"
                },

                {
                    name: "Reply", tag: "field",
                    details: "This field shall indicate a user-provided reply to the message. If there was no reply, or the " +
                        "message did not have the ReplyRequired bit set, this field shall be null.",
                    xref: "cluster§1.16.8.3.3"
                }
            ]
        },

        {
            name: "PresentMessagesRequest", tag: "command",

            details: "Upon receipt, this shall cause the message in the passed fields to be appended to the Messages " +
                "attribute." +
                "\n" +
                "If appending the message would cause the number of messages to be greater than the capacity of the " +
                "list, the device shall NOT append any message to Messages, and shall return a status code of " +
                "RESOURCE_EXHAUSTED." +
                "\n" +
                "When displaying a message in response to this command, an indication (ex. visual) of the origin node " +
                "of the command shall be provided. This could be in the form of a friendly name label which uniquely " +
                "identifies the node to the user. This friendly name label is typically assigned by the Matter Admin " +
                "at the time of commissioning and, when it’s a device, is often editable by the user. It might be a " +
                "combination of a company name and friendly name, for example, ”Acme” or “Acme Streaming Service on " +
                "Alice’s Phone”." +
                "\n" +
                "NOTE" +
                "\n" +
                "It is currently not specified where the friendly name label can be found on the node, meaning that " +
                "clients SHOULD NOT rely on a certain method they happen to observe in a particular server instance, " +
                "since other instances could employ a different method." +
                "\n" +
                "The device SHOULD make it possible for the user to view which nodes have access to this cluster and " +
                "to individually remove privileges for each node.",

            xref: "cluster§1.16.7.1",

            children: [
                {
                    name: "MessageId", tag: "field",
                    details: "This field shall indicate a globally unique ID for this message. See MessageID.",
                    xref: "cluster§1.16.7.1.1"
                },
                {
                    name: "Priority", tag: "field",
                    details: "This field shall indicate the priority level for this message. See Priority.",
                    xref: "cluster§1.16.7.1.2"
                },
                {
                    name: "MessageControl", tag: "field",
                    details: "This field shall indicate control information related to the message. See MessageControl.",
                    xref: "cluster§1.16.7.1.3"
                },

                {
                    name: "StartTime", tag: "field",
                    details: "This field shall indicate the time in UTC at which the message becomes available to be presented. A " +
                        "null value shall indicate \"now.\" See StartTime.",
                    xref: "cluster§1.16.7.1.4"
                },

                {
                    name: "Duration", tag: "field",
                    details: "This field shall indicate the amount of time, in milliseconds, after the StartTime during which the " +
                        "message is available to be presented. A null value shall indicate \"until changed\". See Duration.",
                    xref: "cluster§1.16.7.1.5"
                },

                {
                    name: "MessageText", tag: "field",
                    details: "This field shall indicate a string containing the message to be presented. See MessageText.",
                    xref: "cluster§1.16.7.1.6"
                },

                {
                    name: "Responses", tag: "field",

                    details: "This field shall indicate a list of potential responses to the message. The entries in this list " +
                        "shall have unique values of MessageResponseID." +
                        "\n" +
                        "If the ResponseRequired bit is set on the message but this list is empty, the device shall provide a " +
                        "generic acknowledgement button, e.g. \"OK\"." +
                        "\n" +
                        "If the ResponseRequired bit is not set on the message, this list shall be ignored. See Responses.",

                    xref: "cluster§1.16.7.1.7"
                }
            ]
        },

        {
            name: "CancelMessagesRequest", tag: "command",
            xref: "cluster§1.16.7.2",

            children: [{
                name: "MessageIDs", tag: "field",

                details: "This field shall indicate the MessageIDs for the messages being cancelled." +
                    "\n" +
                    "Cancelling a message shall cause it to be removed from Messages, cause its MessageID to be removed " +
                    "from ActiveMessageIDs and cause any active presentation of the message to cease." +
                    "\n" +
                    "Message IDs in this command that indicate messages that do not exist in Messages, or that are not " +
                    "scoped to the fabric of the sender, shall be ignored.",

                xref: "cluster§1.16.7.2.1"
            }]
        },

        {
            name: "MessageID", tag: "datatype",
            details: "This data type is an octstr of fixed length 16, containing the binary encoding of a UUID as " +
                "specified in RFC 4122.",
            xref: "cluster§1.16.5.1"
        },

        {
            name: "MessageControlBitmap", tag: "datatype",
            details: "This data type is derived from map16, and indicates control information related to a message.",
            xref: "cluster§1.16.5.2",

            children: [
                {
                    name: "ConfirmationRequired", tag: "field",
                    description: "Message requires confirmation from user",
                    details: "This bit shall indicate that the message originator requests a confirmation of receipt by the user. " +
                        "If confirmation is required, the device SHOULD present the message until it is either confirmed by " +
                        "the user selecting a confirmation option, or the message expires.",
                    xref: "cluster§1.16.5.2.1"
                },

                {
                    name: "ResponseRequired", tag: "field",
                    description: "Message requires response from user",
                    details: "This bit shall indicate that a MessagePresented event SHOULD be generated based on the response of " +
                        "the user to the message.",
                    xref: "cluster§1.16.5.2.2"
                },

                {
                    name: "ReplyMessage", tag: "field",
                    description: "Message supports reply message from user",
                    details: "This bit shall indicate that a free-form user reply is to be included in the confirmation of " +
                        "receipt.",
                    xref: "cluster§1.16.5.2.3"
                },

                {
                    name: "MessageConfirmed", tag: "field",
                    description: "Message has already been confirmed",
                    details: "This bit shall indicate the current confirmation state of a message, which is useful in the event " +
                        "that there are multiple Messages cluster client devices on a network.",
                    xref: "cluster§1.16.5.2.4"
                },

                {
                    name: "MessageProtected", tag: "field",
                    description: "Message required PIN/password protection",
                    details: "This bit shall indicate that user authentication (e.g. by password or PIN) is required before " +
                        "viewing a message.",
                    xref: "cluster§1.16.5.2.5"
                }
            ]
        },

        {
            name: "FutureMessagePreferenceEnum", tag: "datatype",
            details: "A display device may include this preference in the MessageComplete event as a hint to clients about " +
                "how to handle future similar messages.",
            xref: "cluster§1.16.5.3",

            children: [
                { name: "Allowed", tag: "field", description: "Similar messages are allowed" },
                { name: "Increased", tag: "field", description: "Similar messages should be sent more often" },
                { name: "Reduced", tag: "field", description: "Similar messages should be sent less often" },
                { name: "Disallowed", tag: "field", description: "Similar messages should not be sent" },
                { name: "Banned", tag: "field", description: "No further messages should be sent" }
            ]
        },

        {
            name: "MessagePriorityEnum", tag: "datatype",
            details: "Priority SHOULD be used to decide which messages to show when the number of eligible messages is " +
                "larger than the device’s capacity to present them.",
            xref: "cluster§1.16.5.4",

            children: [
                { name: "Low", tag: "field", description: "Message to be transferred with a low level of importance" },
                {
                    name: "Medium", tag: "field",
                    description: "Message to be transferred with a medium level of importance"
                },
                {
                    name: "High", tag: "field",
                    description: "Message to be transferred with a high level of importance"
                },
                {
                    name: "Critical", tag: "field",
                    description: "Message to be transferred with a critical level of importance"
                }
            ]
        },

        {
            name: "MessageStruct", tag: "datatype",
            details: "This represents a single message.",
            xref: "cluster§1.16.5.5",

            children: [
                {
                    name: "MessageId", tag: "field",
                    details: "This field shall indicate a globally unique ID for this message.",
                    xref: "cluster§1.16.5.5.1"
                },
                {
                    name: "Priority", tag: "field",
                    details: "This field shall indicate the priority level for this message.",
                    xref: "cluster§1.16.5.5.2"
                },
                {
                    name: "MessageControl", tag: "field",
                    details: "This field shall indicate control information related to the message.",
                    xref: "cluster§1.16.5.5.3"
                },

                {
                    name: "StartTime", tag: "field",
                    details: "This field shall indicate the time in UTC at which the message becomes available to be presented. A " +
                        "null value shall indicate \"now.\"",
                    xref: "cluster§1.16.5.5.4"
                },

                {
                    name: "Duration", tag: "field",
                    details: "This field shall indicate the amount of time, in milliseconds, after the StartTime during which the " +
                        "message is available to be presented. A null value shall indicate \"until changed\".",
                    xref: "cluster§1.16.5.5.5"
                },

                {
                    name: "MessageText", tag: "field",
                    details: "This field shall indicate a string containing the message to be presented.",
                    xref: "cluster§1.16.5.5.6"
                },

                {
                    name: "Responses", tag: "field",

                    details: "This field shall indicate a list of potential responses to the message. The entries in this list " +
                        "shall have unique values of MessageResponseID." +
                        "\n" +
                        "If the ResponseRequired bit is set on the message but this list is empty, the device shall provide a " +
                        "generic acknowledgement button, e.g. \"OK\"." +
                        "\n" +
                        "If the ResponseRequired bit is not set on the message, this list shall be ignored.",

                    xref: "cluster§1.16.5.5.7"
                }
            ]
        },

        {
            name: "MessageResponseOptionStruct", tag: "datatype",
            details: "This represents a possible response to a message.",
            xref: "cluster§1.16.5.6",

            children: [
                {
                    name: "MessageResponseId", tag: "field",
                    details: "This field shall indicate a unique unsigned 32-bit number identifier for this message response " +
                        "option.",
                    xref: "cluster§1.16.5.6.1"
                },

                {
                    name: "Label", tag: "field",
                    details: "This field shall indicate the text for this option; e.g. \"Yes\", \"No\", etc.",
                    xref: "cluster§1.16.5.6.2"
                }
            ]
        }
    ]
});
