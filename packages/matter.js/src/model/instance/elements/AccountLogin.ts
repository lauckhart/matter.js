/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Matter } from "../Matter.js";

Matter.children.push({
    tag: "cluster", name: "AccountLogin", id: 0x50e, classification: "application",
    description: "Account Login",
    details: "This cluster provides commands that facilitate user account login on a Content App or a node. For " +
             "example, a Content App running on a Video Player device, which is represented as an endpoint (see " +
             "[TV Architecture]), can use this cluster to help make the user account on the Content App match the " +
             "user account on the Client.",
    xref: { document: "cluster", section: "6.2" },

    children: [
        {
            tag: "command", name: "GetSetupPin", id: 0x0, access: "A T", conformance: "M", direction: "request",
            response: "GetSetupPinResponse",
            details: "The purpose of this command is to determine if the active user account of the given Content App " +
                     "matches the active user account of a given Commissionee, and when it does, return a Setup PIN code " +
                     "which can be used for password-authenticated session establishment (PASE) with the Commissionee.",
            xref: { document: "cluster", section: "6.2.4.1" },

            children: [
                {
                    tag: "datatype", name: "TempAccountIdentifier", id: 0x0, type: "string", conformance: "M",
                    xref: { document: "cluster", section: "6.2.4.1" }
                }
            ]
        },

        {
            tag: "command", name: "GetSetupPinResponse", id: 0x1, conformance: "M", direction: "response",
            details: "This message is sent in response to the GetSetupPIN command, and contains the Setup PIN code, or " +
                     "null when the account identified in the request does not match the active account of the running " +
                     "Content App.",
            xref: { document: "cluster", section: "6.2.4.2" },

            children: [
                {
                    tag: "datatype", name: "SetupPin", id: 0x0, type: "string", conformance: "M", constraint: "min 11",
                    quality: "X",
                    xref: { document: "cluster", section: "6.2.4.2" }
                }
            ]
        },

        {
            tag: "command", name: "Login", id: 0x2, access: "A T", conformance: "M", direction: "request",
            response: "status",
            details: "The purpose of this command is to allow the Content App to assume the user account of a given " +
                     "Commissionee by leveraging the Setup PIN code input by the user during the commissioning process.",
            xref: { document: "cluster", section: "6.2.4.3" },

            children: [
                {
                    tag: "datatype", name: "TempAccountIdentifier", id: 0x0, type: "string", conformance: "M",
                    xref: { document: "cluster", section: "6.2.4.3" }
                },
                {
                    tag: "datatype", name: "SetupPin", id: 0x1, type: "string", conformance: "M", constraint: "min 11",
                    xref: { document: "cluster", section: "6.2.4.3" }
                }
            ]
        },

        {
            tag: "command", name: "Logout", id: 0x3, access: "O T", conformance: "M", direction: "request",
            response: "status",
            details: "The purpose of this command is to instruct the Content App to clear the current user account. This " +
                     "command SHOULD be used by clients of a Content App to indicate the end of a user session.",
            xref: { document: "cluster", section: "6.2.4.4" }
        }
    ]
});