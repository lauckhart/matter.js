/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ChipMatter } from "../internal.js";
import { ClusterElement, CommandElement, DatatypeElement } from "../../../index.js";

ChipMatter.children!.push(ClusterElement({
    id: 0x050e, name: "AccountLogin",
    description: "Account Login",
    details: "This cluster provides commands that facilitate user account login on a Content App or a node. For example, a Content App running on a Video Player device, which is represented as an endpoint (see [TV Architecture]), can use this cluster to help make the user account on the Content App match the user account on the Client.",
    children: [
        CommandElement({
            id: 0x0000, name: "GetSetupPin", base: "struct",
            access: { rw: "R" }, conformance: [ "M" ], direction: "request", response: "GetSetupPINResponse",
            children: [
                DatatypeElement({
                    name: "TempAccountIdentifier", base: "CHAR_STRING",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "TempAccountIdentifier", base: "CHAR_STRING",
                    access: { rw: "R" }, conformance: [ "M" ]
                })
            ]
        }),

        CommandElement({
            id: 0x0002, name: "Login", base: "struct",
            access: { rw: "R" }, conformance: [ "M" ], direction: "request",
            children: [
                DatatypeElement({
                    name: "TempAccountIdentifier", base: "CHAR_STRING",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "TempAccountIdentifier", base: "CHAR_STRING",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "SetupPin", base: "CHAR_STRING",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "SetupPin", base: "CHAR_STRING",
                    access: { rw: "R" }, conformance: [ "M" ]
                })
            ]
        }),

        CommandElement({
            id: 0x0003, name: "Logout", base: "struct",
            access: { rw: "R" }, conformance: [ "M" ], direction: "request"
        }),

        CommandElement({
            id: 0x0001, name: "GetSetupPinResponse", base: "struct",
            access: { rw: "R" }, conformance: [ "M" ], direction: "response",
            children: [
                DatatypeElement({
                    name: "SetupPin", base: "CHAR_STRING",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "SetupPin", base: "CHAR_STRING",
                    access: { rw: "R" }, conformance: [ "M" ]
                })
            ]
        })
    ]
}))