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
    EventElement as Event,
    FieldElement as Field
} from "../../elements/index.js";

export const BooleanState = Cluster(
    { id: 0x45, name: "BooleanState" },
    Attribute({ id: 0xfffd, name: "ClusterRevision", type: "ClusterRevision", default: 1 }),
    Attribute({ id: 0x0, name: "StateValue", type: "bool", access: "R V", conformance: "M", quality: "P" }),
    Event(
        { id: 0x0, name: "StateChange", access: "V", conformance: "O", priority: "info" },
        Field({ id: 0x0, name: "StateValue", type: "bool", conformance: "M" })
    )
);

MatterDefinition.children.push(BooleanState);
