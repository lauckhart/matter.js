/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ChipMatter } from "../index.js";
import { ClusterElement, CommandElement, DatatypeElement } from "../../../index.js";

ChipMatter.children!.push(ClusterElement({
    id: 0x050e, name: "AccountLogin",
    description: "Account Login",
    details: "This cluster provides commands that facilitate user account login on a Content App or a node. For example, a Content App running on a Video Player device, which is represented as an endpoint (see [TV Architecture]), can use this cluster to help make the user account on the Content App match the user account on the Client.",
    children: [
        CommandElement({
            id: 0x0000, name: "GetSetupPin",
            direction: "request", response: "GetSetupPinResponse",
            children: [
                DatatypeElement({
                    name: "TempAccountIdentifier", base: "string"
                })
            ]
        }),

        CommandElement({
            id: 0x0002, name: "Login",
            direction: "request",
            children: [
                DatatypeElement({
                    name: "TempAccountIdentifier", base: "string"
                }),

                DatatypeElement({
                    name: "SetupPin", base: "string"
                })
            ]
        }),

        CommandElement({
            id: 0x0003, name: "Logout",
            direction: "request"
        }),

        CommandElement({
            id: 0x0001, name: "GetSetupPinResponse",
            direction: "response",
            children: [
                DatatypeElement({
                    name: "SetupPin", base: "string"
                })
            ]
        })
    ]
}));
