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
    CommandElement as Command,
    DatatypeElement as Datatype
} from "../../elements/index.js";

export const ValidProxies = Cluster(
    { id: 0x44, name: "ValidProxies" },
    Attribute({ id: 0xfffd, name: "ClusterRevision", type: "ClusterRevision", default: 1 }),
    Attribute(
        { id: 0x0, name: "ValidProxyList", type: "list", access: "RW", conformance: "M", default: [], quality: "N F" },
        Field({ name: "entry", type: "ValidProxyStruct" })
    ),
    Command({
        id: 0x0, name: "GetValidProxiesRequest",
        access: "O", conformance: "M", direction: "request", response: "GetValidProxiesResponse"
    }),

    Command(
        { id: 0x1, name: "GetValidProxiesResponse", conformance: "M", direction: "response" },
        Field(
            { id: 0x0, name: "ProxyNodeIdList", type: "list", conformance: "M" },
            Field({ name: "entry", type: "node-id" })
        )
    ),

    Datatype(
        { name: "ValidProxyStruct", type: "struct" },
        Field({ id: 0x1, name: "NodeId", type: "node-id", access: "RW", conformance: "M" })
    )
);

MatterDefinition.children.push(ValidProxies);
