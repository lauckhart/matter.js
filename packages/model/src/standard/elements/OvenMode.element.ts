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

export const OvenMode = Cluster(
    { id: 0x49, name: "OvenMode", type: "ModeBase" },
    Attribute({ id: 0xfffd, name: "ClusterRevision", type: "ClusterRevision", default: 2 }),
    Attribute(
        { id: 0xfffc, name: "FeatureMap", type: "FeatureMap" },
        Field({ name: "DEPONOFF", conformance: "X", constraint: "0", description: "OnOff" })
    ),
    Attribute({ id: 0x0, name: "SupportedModes" }),
    Attribute({ id: 0x1, name: "CurrentMode" }),
    Attribute({ id: 0x2, name: "StartUpMode", conformance: "X" }),
    Attribute({ id: 0x3, name: "OnMode", conformance: "X" }),
    Datatype({ name: "ModeOptionStruct", type: "ModeOptionStruct" }),

    Datatype(
        { name: "ModeTag", type: "enum16" },
        Field({ id: 0x0, name: "Auto" }),
        Field({ id: 0x1, name: "Quick" }),
        Field({ id: 0x2, name: "Quiet" }),
        Field({ id: 0x3, name: "LowNoise" }),
        Field({ id: 0x4, name: "LowEnergy" }),
        Field({ id: 0x5, name: "Vacation" }),
        Field({ id: 0x6, name: "Min" }),
        Field({ id: 0x7, name: "Max" }),
        Field({ id: 0x8, name: "Night" }),
        Field({ id: 0x9, name: "Day" }),
        Field({ id: 0x4000, name: "Bake" }),
        Field({ id: 0x4001, name: "Convection" }),
        Field({ id: 0x4002, name: "Grill" }),
        Field({ id: 0x4003, name: "Roast" }),
        Field({ id: 0x4004, name: "Clean" }),
        Field({ id: 0x4005, name: "ConvectionBake" }),
        Field({ id: 0x4006, name: "ConvectionRoast" }),
        Field({ id: 0x4007, name: "Warming" }),
        Field({ id: 0x4008, name: "Proofing" }),
        Field({ id: 0x4009, name: "Steam" })
    )
);

MatterDefinition.children.push(OvenMode);
