/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterDefinition } from "../MatterDefinition.js";
import {
    ClusterElement as Cluster,
    AttributeElement as Attribute,
    EventElement as Event,
    FieldElement as Field,
    CommandElement as Command
} from "../../elements/index.js";

export const AccountLogin = Cluster(
    { id: 0x50e, name: "AccountLogin" },
    Attribute({ id: 0xfffd, name: "ClusterRevision", type: "ClusterRevision", default: 2 }),
    Event(
        { id: 0x0, name: "LoggedOut", access: "S A", conformance: "O", priority: "critical" },
        Field({ id: 0x0, name: "Node", type: "node-id", conformance: "O" })
    ),

    Command(
        {
            id: 0x0, name: "GetSetupPin",
            access: "F A T", conformance: "M", direction: "request", response: "GetSetupPinResponse"
        },
        Field({ id: 0x0, name: "TempAccountIdentifier", type: "string", conformance: "M", constraint: "16 to 100" })
    ),

    Command(
        { id: 0x1, name: "GetSetupPinResponse", access: "F", conformance: "M", direction: "response" },
        Field({ id: 0x0, name: "SetupPin", type: "string", conformance: "M", constraint: "all" })
    ),

    Command(
        { id: 0x2, name: "Login", access: "F A T", conformance: "M", direction: "request", response: "status" },
        Field({ id: 0x0, name: "TempAccountIdentifier", type: "string", conformance: "M", constraint: "16 to 100" }),
        Field({ id: 0x1, name: "SetupPin", type: "string", conformance: "M", constraint: "min 8" }),
        Field({ id: 0x2, name: "Node", type: "node-id", conformance: "O" })
    ),

    Command(
        { id: 0x3, name: "Logout", access: "F O T", conformance: "M", direction: "request", response: "status" },
        Field({ id: 0x0, name: "Node", type: "node-id", conformance: "O" })
    )
);

MatterDefinition.children.push(AccountLogin);
