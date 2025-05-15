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

export const RefrigeratorAlarm = Cluster(
    { id: 0x57, name: "RefrigeratorAlarm", type: "AlarmBase" },
    Attribute({ id: 0xfffd, name: "ClusterRevision", type: "ClusterRevision", default: 1 }),
    Attribute(
        { id: 0xfffc, name: "FeatureMap", type: "FeatureMap" },
        Field({ name: "RESET", conformance: "X", constraint: "0", description: "Reset" })
    ),
    Command({ id: 0x1, name: "ModifyEnabledAlarms", conformance: "X" }),
    Datatype({ name: "AlarmBitmap", type: "map32" }, Field({ name: "DoorOpen", constraint: "0" }))
);

MatterDefinition.children.push(RefrigeratorAlarm);
