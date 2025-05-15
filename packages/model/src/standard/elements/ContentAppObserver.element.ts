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
    { id: 0x510, name: "ContentAppObserver" },
    Attribute({ id: 0xfffd, name: "ClusterRevision", type: "ClusterRevision", default: 1 }),

    Command(
        {
            id: 0x0, name: "ContentAppMessage",
            access: "O", conformance: "M", direction: "request", response: "ContentAppMessageResponse"
        },
        Field({ id: 0x0, name: "Data", type: "string", conformance: "M", constraint: "max 500" }),
        Field({ id: 0x1, name: "EncodingHint", type: "string", conformance: "O", constraint: "max 100" })
    ),

    Command(
        { id: 0x1, name: "ContentAppMessageResponse", conformance: "M", direction: "response" },
        Field({ id: 0x0, name: "Status", type: "StatusEnum", conformance: "M" }),
        Field({ id: 0x1, name: "Data", type: "string", conformance: "O", constraint: "max 500" }),
        Field({ id: 0x2, name: "EncodingHint", type: "string", conformance: "O", constraint: "max 100" })
    ),

    Datatype(
        { name: "StatusEnum", type: "enum8" },
        Field({ id: 0x0, name: "Success", conformance: "M" }),
        Field({ id: 0x1, name: "UnexpectedData", conformance: "M" })
    )
);

MatterDefinition.children.push(ContentAppObserver);
