/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterDefinition } from "../MatterDefinition.js";
import { ClusterElement as Cluster, AttributeElement as Attribute } from "../../elements/index.js";

export const WakeOnLan = Cluster(
    { id: 0x503, name: "WakeOnLan" },
    Attribute({ id: 0xfffd, name: "ClusterRevision", type: "ClusterRevision", default: 1 }),
    Attribute({
        id: 0x0, name: "MacAddress", type: "string",
        access: "R V", conformance: "O", constraint: "max 12", quality: "F"
    }),
    Attribute({
        id: 0x1, name: "LinkLocalAddress", type: "ipv6adr",
        access: "R V", conformance: "O", constraint: "all", quality: "F"
    })
);

MatterDefinition.children.push(WakeOnLan);
