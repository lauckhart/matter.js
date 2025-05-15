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
    DatatypeElement as Datatype
} from "../../elements/index.js";

export const LaundryWasherControls = Cluster(
    { id: 0x53, name: "LaundryWasherControls" },
    Attribute({ id: 0xfffd, name: "ClusterRevision", type: "ClusterRevision", default: 2 }),
    Attribute(
        { id: 0xfffc, name: "FeatureMap", type: "FeatureMap" },
        Field({ name: "SPIN", conformance: "O.a+", constraint: "0", description: "Spin" }),
        Field({ name: "RINSE", conformance: "O.a+", constraint: "1", description: "Rinse" })
    ),
    Attribute(
        { id: 0x0, name: "SpinSpeeds", type: "list", access: "R V", conformance: "SPIN", constraint: "max 16[max 64]" },
        Field({ name: "entry", type: "string" })
    ),
    Attribute({
        id: 0x1, name: "SpinSpeedCurrent", type: "uint8",
        access: "RW VO", conformance: "SPIN", constraint: "max 15", quality: "X"
    }),
    Attribute({
        id: 0x2, name: "NumberOfRinses", type: "NumberOfRinsesEnum",
        access: "RW VO", conformance: "RINSE", constraint: "desc", default: 1
    }),
    Attribute(
        { id: 0x3, name: "SupportedRinses", type: "list", access: "R V", conformance: "RINSE", constraint: "max 4" },
        Field({ name: "entry", type: "NumberOfRinsesEnum" })
    ),

    Datatype(
        { name: "NumberOfRinsesEnum", type: "enum8" },
        Field({ id: 0x0, name: "None", conformance: "RINSE" }),
        Field({ id: 0x1, name: "Normal", conformance: "RINSE" }),
        Field({ id: 0x2, name: "Extra", conformance: "RINSE" }),
        Field({ id: 0x3, name: "Max", conformance: "RINSE" })
    )
);

MatterDefinition.children.push(LaundryWasherControls);
