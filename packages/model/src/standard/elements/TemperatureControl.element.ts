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
    CommandElement as Command
} from "../../elements/index.js";

export const TemperatureControl = Cluster(
    { id: 0x56, name: "TemperatureControl" },
    Attribute({ id: 0xfffd, name: "ClusterRevision", type: "ClusterRevision", default: 1 }),

    Attribute(
        { id: 0xfffc, name: "FeatureMap", type: "FeatureMap" },
        Field({ name: "TN", conformance: "O.a", constraint: "0", description: "TemperatureNumber" }),
        Field({ name: "TL", conformance: "O.a", constraint: "1", description: "TemperatureLevel" }),
        Field({ name: "STEP", conformance: "[TN]", constraint: "2", description: "TemperatureStep" })
    ),

    Attribute({
        id: 0x0, name: "TemperatureSetpoint", type: "temperature",
        access: "R V", conformance: "TN", constraint: "minTemperature to maxTemperature"
    }),
    Attribute({
        id: 0x1, name: "MinTemperature", type: "temperature",
        access: "R V", conformance: "TN", constraint: "max maxTemperature - 1", quality: "F"
    }),
    Attribute({
        id: 0x2, name: "MaxTemperature", type: "temperature",
        access: "R V", conformance: "TN", constraint: "desc", quality: "F"
    }),
    Attribute({
        id: 0x3, name: "Step", type: "temperature",
        access: "R V", conformance: "STEP", constraint: "max maxTemperature - minTemperature", quality: "F"
    }),
    Attribute({
        id: 0x4, name: "SelectedTemperatureLevel", type: "uint8",
        access: "R V", conformance: "TL", constraint: "max 31"
    }),

    Attribute(
        {
            id: 0x5, name: "SupportedTemperatureLevels", type: "list",
            access: "R V", conformance: "TL", constraint: "max 32[max 16]"
        },
        Field({ name: "entry", type: "string" })
    ),

    Command(
        { id: 0x0, name: "SetTemperature", access: "O", conformance: "M", direction: "request", response: "status" },
        Field({ id: 0x0, name: "TargetTemperature", type: "temperature", conformance: "TN", constraint: "desc" }),
        Field({ id: 0x1, name: "TargetTemperatureLevel", type: "uint8", conformance: "TL", constraint: "desc" })
    )
);

MatterDefinition.children.push(TemperatureControl);
