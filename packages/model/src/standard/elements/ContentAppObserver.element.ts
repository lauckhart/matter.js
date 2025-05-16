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
    CommandElement as Command,
    FieldElement as Field,
    DatatypeElement as Datatype
} from "../../elements/index.js";

export const ContentAppObserver = Cluster(
    { name: "ContentAppObserver", id: 0x510 },
    Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 1 }),

    Command(
        {
            name: "ContentAppMessage", id: 0x0,
            conformance: "M", access: "O", direction: "request", response: "ContentAppMessageResponse"
        },
        Field({ name: "Data", id: 0x0, type: "string", constraint: "max 500", conformance: "M" }),
        Field({ name: "EncodingHint", id: 0x1, type: "string", constraint: "max 100", conformance: "O" })
    ),

    Command(
        { name: "ContentAppMessageResponse", id: 0x1, conformance: "M", direction: "response" },
        Field({ name: "Status", id: 0x0, type: "StatusEnum", conformance: "M" }),
        Field({ name: "Data", id: 0x1, type: "string", constraint: "max 500", conformance: "O" }),
        Field({ name: "EncodingHint", id: 0x2, type: "string", constraint: "max 100", conformance: "O" })
    ),

    Datatype(
        { name: "StatusEnum", type: "enum8" },
        Field({ name: "Success", id: 0x0, conformance: "M" }),
        Field({ name: "UnexpectedData", id: 0x1, conformance: "M" })
    )
);

MatterDefinition.children.push(ContentAppObserver);
