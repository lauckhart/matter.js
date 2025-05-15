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

export const EnergyPreference = Cluster(
    { id: 0x9b, name: "EnergyPreference" },
    Attribute({ id: 0xfffd, name: "ClusterRevision", type: "ClusterRevision", default: 1 }),
    Attribute(
        { id: 0xfffc, name: "FeatureMap", type: "FeatureMap" },
        Field({ name: "BALA", conformance: "O.a+", constraint: "0" }),
        Field({ name: "LPMS", conformance: "O.a+", constraint: "1" })
    ),

    Attribute(
        {
            id: 0x0, name: "EnergyBalances", type: "list",
            access: "R V", conformance: "BALA", constraint: "2 to 10", quality: "F"
        },
        Field({ name: "entry", type: "BalanceStruct" })
    ),

    Attribute({ id: 0x1, name: "CurrentEnergyBalance", type: "uint8", access: "RW VO", conformance: "BALA", quality: "N" }),

    Attribute(
        {
            id: 0x2, name: "EnergyPriorities", type: "list",
            access: "R V", conformance: "BALA", constraint: "2", quality: "F"
        },
        Field({ name: "entry", type: "EnergyPriorityEnum" })
    ),

    Attribute(
        {
            id: 0x3, name: "LowPowerModeSensitivities", type: "list",
            access: "R V", conformance: "LPMS", constraint: "2 to 10", quality: "F"
        },
        Field({ name: "entry", type: "BalanceStruct" })
    ),

    Attribute({
        id: 0x4, name: "CurrentLowPowerModeSensitivity", type: "uint8",
        access: "RW VO", conformance: "LPMS", quality: "N"
    }),

    Datatype(
        { name: "EnergyPriorityEnum", type: "enum8" },
        Field({ id: 0x0, name: "Comfort", conformance: "M" }),
        Field({ id: 0x1, name: "Speed", conformance: "M" }),
        Field({ id: 0x2, name: "Efficiency", conformance: "M" }),
        Field({ id: 0x3, name: "WaterConsumption", conformance: "M" })
    ),

    Datatype(
        { name: "BalanceStruct", type: "struct" },
        Field({ id: 0x0, name: "Step", type: "percent", conformance: "M", quality: "F" }),
        Field({ id: 0x1, name: "Label", type: "string", conformance: "O", constraint: "max 64", quality: "F" })
    )
);

MatterDefinition.children.push(EnergyPreference);
