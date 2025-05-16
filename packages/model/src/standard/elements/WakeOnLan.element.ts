/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterDefinition } from "../MatterDefinition.js";
import { ClusterElement as Cluster, AttributeElement as Attribute } from "../../elements/index.js";

export const WakeOnLan = Cluster(
    { name: "WakeOnLan", id: 0x503 },
    Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 1 }),
    Attribute({
        name: "MacAddress", id: 0x0, type: "string",
        constraint: "max 12", conformance: "O", access: "R V", quality: "F"
    }),
    Attribute({
        name: "LinkLocalAddress", id: 0x1, type: "ipv6adr",
        constraint: "desc", conformance: "O", access: "R V", quality: "F"
    })
);

MatterDefinition.children.push(WakeOnLan);
