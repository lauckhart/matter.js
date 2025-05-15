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
    CommandElement as Command
} from "../../elements/index.js";

export const LowPower = Cluster(
    { id: 0x508, name: "LowPower" },
    Attribute({ id: 0xfffd, name: "ClusterRevision", type: "ClusterRevision", default: 1 }),
    Command({ id: 0x0, name: "Sleep", access: "O", conformance: "M", direction: "request", response: "status" })
);
MatterDefinition.children.push(LowPower);
