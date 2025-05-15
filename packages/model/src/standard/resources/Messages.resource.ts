/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Messages } from "#index.js";

Messages.patch({
    details: "This cluster provides an interface for passing messages to be presented by a device.",
    xref: { document: "cluster", section: "1.16" },

    children: [
        undefined,

        {
            children: [
                { description: "ReceivedConfirmation" },
                { description: "ConfirmationResponse" },
                { description: "ConfirmationReply" },
                { description: "ProtectedMessages" }
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

        {
            children: [
                { description: "Message requires confirmation from user" },
                { description: "Message requires response from user" },
                { description: "Message supports reply message from user" },
                { description: "Message has already been confirmed" },
                { description: "Message required PIN/password protection" }
            ]
        },

        {
            children: [
                { description: "Similar messages are allowed" },
                { description: "Similar messages should be sent more often" },
                { description: "Similar messages should be sent less often" },
                { description: "Similar messages should not be sent" },
                { description: "No further messages should be sent" }
            ]
        },

        {
            children: [
                { description: "Message to be transferred with a low level of importance" },
                { description: "Message to be transferred with a medium level of importance" },
                { description: "Message to be transferred with a high level of importance" },
                { description: "Message to be transferred with a critical level of importance" }
            ]
        }
    ]
});
