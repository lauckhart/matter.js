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
    { name: "AccountLogin", id: 0x50e },
    Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 2 }),
    Event(
        { name: "LoggedOut", id: 0x0, conformance: "O", access: "S A", priority: "critical" },
        Field({ name: "Node", id: 0x0, type: "node-id", conformance: "O" })
    ),

    Command(
        {
            name: "GetSetupPin", id: 0x0,
            conformance: "M", access: "F A T", direction: "request", response: "GetSetupPinResponse"
        },
        Field({ name: "TempAccountIdentifier", id: 0x0, type: "string", constraint: "16 to 100", conformance: "M" })
    ),

    Command(
        { name: "GetSetupPinResponse", id: 0x1, conformance: "M", access: "F", direction: "response" },
        Field({ name: "SetupPin", id: 0x0, type: "string", constraint: "desc", conformance: "M" })
    ),

    Command(
        { name: "Login", id: 0x2, conformance: "M", access: "F A T", direction: "request", response: "status" },
        Field({ name: "TempAccountIdentifier", id: 0x0, type: "string", constraint: "16 to 100", conformance: "M" }),
        Field({ name: "SetupPin", id: 0x1, type: "string", constraint: "min 8", conformance: "M" }),
        Field({ name: "Node", id: 0x2, type: "node-id", conformance: "O" })
    ),

    Command(
        { name: "Logout", id: 0x3, conformance: "M", access: "F O T", direction: "request", response: "status" },
        Field({ name: "Node", id: 0x0, type: "node-id", conformance: "O" })
    )
);

MatterDefinition.children.push(AccountLogin);
