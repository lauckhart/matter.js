/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Matter } from "../Matter.js";

Matter.children.push({
    tag: "cluster", id: 0x050e, name: "AccountLogin",
    classification: "application", description: "Account Login",
    children: [
        {
            tag: "command", id: 0x0000, name: "GetSetupPin",
            access: "A T", conformance: "M", direction: "request", response: "GetSetupPinResponse",
            details: "The purpose of this command is to determine if the active user account" +
                     " of the given Content App matches the active user account of a given " +
                     "Commissionee, and when it does, return a Setup PIN code which can be " +
                     "used for password-authenticated session establishment (PASE) with the " +
                     "Commissionee",
            xref: { document: "cluster", section: "6.2.4.1" },
            children: [
                {
                    tag: "datatype", name: "TempAccountIdentifier",
                    conformance: "M", type: "string"
                }
            ]
        },

        {
            tag: "command", id: 0x0001, name: "GetSetupPinResponse",
            conformance: "M", direction: "response",
            details: "This message is sent in response to the GetSetupPIN command, and " +
                     "contains the Setup PIN code, or null when the account identified in " +
                     "the request does not match the active account of the running Content " +
                     "App",
            xref: { document: "cluster", section: "6.2.4.2" },
            children: [
                {
                    tag: "datatype", name: "SetupPin",
                    conformance: "M", type: "string"
                }
            ]
        },

        {
            tag: "command", id: 0x0002, name: "Login",
            access: "A T", conformance: "M", direction: "request", response: "status",
            details: "The purpose of this command is to allow the Content App to assume the " +
                     "user account of a given Commissionee by leveraging the Setup PIN code " +
                     "input by the user during the commissioning process",
            xref: { document: "cluster", section: "6.2.4.3" },
            children: [
                {
                    tag: "datatype", name: "TempAccountIdentifier",
                    conformance: "M", type: "string"
                },

                {
                    tag: "datatype", name: "SetupPin",
                    conformance: "M", type: "string"
                }
            ]
        },

        {
            tag: "command", id: 0x0003, name: "Logout",
            access: "O T", conformance: "M", direction: "request", response: "status",
            details: "The purpose of this command is to instruct the Content App to clear " +
                     "the current user account. This command SHOULD be used by clients of a " +
                     "Content App to indicate the end of a user session",
            xref: { document: "cluster", section: "6.2.4.4" }
        }
    ]
});
