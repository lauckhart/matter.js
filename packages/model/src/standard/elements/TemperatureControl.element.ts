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
    { name: "TemperatureControl", id: 0x56 },
    Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 1 }),

    Attribute(
        { name: "FeatureMap", id: 0xfffc, type: "FeatureMap" },
        Field({ name: "TN", constraint: "0", conformance: "O.a", longName: "TemperatureNumber" }),
        Field({ name: "TL", constraint: "1", conformance: "O.a", longName: "TemperatureLevel" }),
        Field({ name: "STEP", constraint: "2", conformance: "[TN]", longName: "TemperatureStep" })
    ),

    Attribute({
        name: "TemperatureSetpoint", id: 0x0, type: "temperature",
        constraint: "minTemperature to maxTemperature", conformance: "TN", access: "R V"
    }),
    Attribute({
        name: "MinTemperature", id: 0x1, type: "temperature",
        constraint: "max maxTemperature - 1", conformance: "TN", access: "R V", quality: "F"
    }),
    Attribute({
        name: "MaxTemperature", id: 0x2, type: "temperature",
        constraint: "desc", conformance: "TN", access: "R V", quality: "F"
    }),
    Attribute({
        name: "Step", id: 0x3, type: "temperature",
        constraint: "max maxTemperature - minTemperature", conformance: "STEP", access: "R V", quality: "F"
    }),
    Attribute({
        name: "SelectedTemperatureLevel", id: 0x4, type: "uint8",
        constraint: "max 31", conformance: "TL", access: "R V"
    }),

    Attribute(
        {
            name: "SupportedTemperatureLevels", id: 0x5, type: "list",
            constraint: "max 32[max 16]", conformance: "TL", access: "R V"
        },
        Field({ name: "entry", type: "string" })
    ),

    Command(
        { name: "SetTemperature", id: 0x0, conformance: "M", access: "O", direction: "request", response: "status" },
        Field({ name: "TargetTemperature", id: 0x0, type: "temperature", constraint: "desc", conformance: "TN" }),
        Field({ name: "TargetTemperatureLevel", id: 0x1, type: "uint8", constraint: "desc", conformance: "TL" })
    )
);

MatterDefinition.children.push(TemperatureControl);
