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
    FieldElement as Field
} from "../../elements/index.js";

export const ProxyDiscovery = Cluster(
    { name: "ProxyDiscovery", id: 0x43 },
    Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 1 }),

    Command(
        { name: "ProxyDiscoverRequest", id: 0x0, conformance: "M", access: "O", direction: "request" },
        Field({ name: "SourceNodeId", id: 0x0, type: "node-id", conformance: "M" }),
        Field({ name: "NumAttributePaths", id: 0x1, type: "uint16", constraint: "desc", conformance: "M" }),
        Field({ name: "NumEventPaths", id: 0x2, type: "uint16", constraint: "desc", conformance: "M" })
    ),

    Command(
        { name: "ProxyDiscoverResponse", id: 0x1, conformance: "M", direction: "response" },
        Field({ name: "SourceNodeId", id: 0x0, type: "node-id", conformance: "M" }),
        Field({ name: "NumHopsToSource", id: 0x1, type: "uint16", constraint: "desc", conformance: "M" }),
        Field({ name: "AvailableCapacity", id: 0x2, type: "uint16", constraint: "desc", conformance: "M" })
    )
);

MatterDefinition.children.push(ProxyDiscovery);
