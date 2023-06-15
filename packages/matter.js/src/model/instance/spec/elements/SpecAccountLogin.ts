/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { SpecMatter } from "../SpecMatter.js";
import { ClusterElement, AttributeElement, CommandElement } from "../../../elements/index.js";

SpecMatter.children!.push(ClusterElement({
    id: 0x050e, name: "AccountLogin",
    classification: "application",
    children: [
        AttributeElement({
            id: 0xfffd, name: "ClusterRevision", base: "uint16",
            access: "R V", conformance: "M", constraint: "min 1", default: 1, quality: "F"
        }),

        AttributeElement({
            id: 0xfffc, name: "FeatureMap", base: "map32",
            access: "R V", conformance: "M", default: 0, quality: "F"
        }),

        CommandElement({
            id: 0x0000, name: "GetSetupPin",
            access: "A T", conformance: "M", direction: "request", response: "GetSetupPinResponse",
            details: "The purpose of this command is to determine if the active user account of the given Content App matches the active user account of a given Commissionee, and when it does, return a Setup PIN code which can be used for password-authenticated session establishment (PASE) with the Commissionee.",
            xref: { document: "cluster", section: "6.2.4.1", version: "1.1" }
        }),

        CommandElement({
            id: 0x0001, name: "GetSetupPinResponse",
            conformance: "M", direction: "response",
            details: "This message is sent in response to the GetSetupPIN command, and contains the Setup PIN code, or null when the account identified in the request does not match the active account of the running Content App.",
            xref: { document: "cluster", section: "6.2.4.2", version: "1.1" }
        }),

        CommandElement({
            id: 0x0002, name: "Login",
            access: "A T", conformance: "M", direction: "request", response: "status",
            details: "The purpose of this command is to allow the Content App to assume the user account of a given Commissionee by leveraging the Setup PIN code input by the user during the commissioning process.",
            xref: { document: "cluster", section: "6.2.4.3", version: "1.1" }
        }),

        CommandElement({
            id: 0x0003, name: "Logout",
            access: "O T", conformance: "M", direction: "request", response: "status",
            details: "The purpose of this command is to instruct the Content App to clear the current user account. This command SHOULD be used by clients of a Content App to indicate the end of a user session.",
            xref: { document: "cluster", section: "6.2.4.4", version: "1.1" }
        })
    ]
}));
