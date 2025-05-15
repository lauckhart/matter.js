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
    FieldElement as Field,
    EventElement as Event,
    CommandElement as Command,
    DatatypeElement as Datatype
} from "../../elements/index.js";

export const TargetNavigator = Cluster(
    { id: 0x505, name: "TargetNavigator" },
    Attribute({ id: 0xfffd, name: "ClusterRevision", type: "ClusterRevision", default: 2 }),
    Attribute(
        { id: 0x0, name: "TargetList", type: "list", access: "R V", conformance: "M" },
        Field({ name: "entry", type: "TargetInfoStruct" })
    ),
    Attribute({ id: 0x1, name: "CurrentTarget", type: "uint8", access: "R V", conformance: "O", constraint: "all", default: 255 }),

    Event(
        { id: 0x0, name: "TargetUpdated", access: "V", conformance: "O", priority: "info" },
        Field(
            { id: 0x0, name: "TargetList", type: "list", conformance: "O" },
            Field({ name: "entry", type: "TargetInfoStruct" })
        ),
        Field({ id: 0x1, name: "CurrentTarget", type: "uint8", conformance: "O", constraint: "all", default: 255 }),
        Field({ id: 0x2, name: "Data", type: "octstr", conformance: "O", constraint: "max 900" })
    ),

    Command(
        {
            id: 0x0, name: "NavigateTarget",
            access: "O", conformance: "M", direction: "request", response: "NavigateTargetResponse"
        },
        Field({ id: 0x0, name: "Target", type: "uint8", conformance: "M" }),
        Field({ id: 0x1, name: "Data", type: "string", conformance: "O" })
    ),

    Command(
        { id: 0x1, name: "NavigateTargetResponse", conformance: "M", direction: "response" },
        Field({ id: 0x0, name: "Status", type: "StatusEnum", conformance: "M" }),
        Field({ id: 0x1, name: "Data", type: "string", conformance: "O", constraint: "any" })
    ),

    Datatype(
        { name: "StatusEnum", type: "enum8" },
        Field({ id: 0x0, name: "Success", conformance: "M" }),
        Field({ id: 0x1, name: "TargetNotFound", conformance: "M" }),
        Field({ id: 0x2, name: "NotAllowed", conformance: "M" })
    ),

    Datatype(
        { name: "TargetInfoStruct", type: "struct" },
        Field({ id: 0x0, name: "Identifier", type: "uint8", conformance: "M", constraint: "max 254" }),
        Field({ id: 0x1, name: "Name", type: "string", conformance: "M" })
    )
);

MatterDefinition.children.push(TargetNavigator);
