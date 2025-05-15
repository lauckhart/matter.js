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
    { id: 0x43, name: "ProxyDiscovery" },
    Attribute({ id: 0xfffd, name: "ClusterRevision", type: "ClusterRevision", default: 1 }),

    Command(
        { id: 0x0, name: "ProxyDiscoverRequest", access: "O", conformance: "M", direction: "request" },
        Field({ id: 0x0, name: "SourceNodeId", type: "node-id", conformance: "M" }),
        Field({ id: 0x1, name: "NumAttributePaths", type: "uint16", conformance: "M", constraint: "all" }),
        Field({ id: 0x2, name: "NumEventPaths", type: "uint16", conformance: "M", constraint: "all" })
    ),

    Command(
        { id: 0x1, name: "ProxyDiscoverResponse", conformance: "M", direction: "response" },
        Field({ id: 0x0, name: "SourceNodeId", type: "node-id", conformance: "M" }),
        Field({ id: 0x1, name: "NumHopsToSource", type: "uint16", conformance: "M", constraint: "all" }),
        Field({ id: 0x2, name: "AvailableCapacity", type: "uint16", conformance: "M", constraint: "all" })
    )
);

MatterDefinition.children.push(ProxyDiscovery);
