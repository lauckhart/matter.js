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

export const OvenCavityOperationalState = Cluster(
    { id: 0x48, name: "OvenCavityOperationalState", type: "OperationalState" },
    Attribute({ id: 0xfffd, name: "ClusterRevision", type: "ClusterRevision", default: 2 }),
    Command({ id: 0x0, name: "Pause", conformance: "X" }),
    Command({ id: 0x1, name: "Stop" }),
    Command({ id: 0x2, name: "Start" }),
    Command({ id: 0x3, name: "Resume", conformance: "X" }),
    Command({ id: 0x4, name: "OperationalCommandResponse" })
);

MatterDefinition.children.push(OvenCavityOperationalState);
