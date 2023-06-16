/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ChipMatter } from "../ChipMatter.js";
import { ClusterElement, CommandElement, DatatypeElement } from "../../../elements/index.js";

ChipMatter.children!.push(ClusterElement({
    id: 0x050e, name: "AccountLogin",
    description: "Account Login",
    details: "This cluster provides commands that facilitate user account login on a Content App or a node. For example, a Content App running on a Video Player device, which is represented as an endpoint (see [TV Architecture]), can use this cluster to help make the user account on the Content App match the user account on the Client.",
    children: [
        CommandElement({
            id: 0x0000, name: "GetSetupPin",
            conformance: "M", direction: "request", response: "GetSetupPinResponse",
            children: [
                DatatypeElement({
                    name: "TempAccountIdentifier", type: "string",
                    conformance: "M"
                })
            ]
        }),

        CommandElement({
            id: 0x0002, name: "Login",
            conformance: "M", direction: "request",
            children: [
                DatatypeElement({
                    name: "TempAccountIdentifier", type: "string",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "SetupPin", type: "string",
                    conformance: "M"
                })
            ]
        }),

        CommandElement({
            id: 0x0003, name: "Logout",
            conformance: "M", direction: "request"
        }),

        CommandElement({
            id: 0x0001, name: "GetSetupPinResponse",
            conformance: "M", direction: "response",
            children: [
                DatatypeElement({
                    name: "SetupPin", type: "string",
                    conformance: "M"
                })
            ]
        })
    ]
}));
