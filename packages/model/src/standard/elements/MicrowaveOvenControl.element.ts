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

export const MicrowaveOvenControl = Cluster(
    { name: "MicrowaveOvenControl", id: 0x5f },
    Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 1 }),

    Attribute(
        { name: "FeatureMap", id: 0xfffc, type: "FeatureMap" },
        Field({ name: "PWRNUM", constraint: "0", conformance: "O.a", longName: "PowerAsNumber" }),
        Field({ name: "WATTS", constraint: "1", conformance: "P, O.a", longName: "PowerInWatts" }),
        Field({ name: "PWRLMTS", constraint: "2", conformance: "[PWRNUM]", longName: "PowerNumberLimits" })
    ),

    Attribute({
        name: "CookTime", id: 0x0, type: "elapsed-s",
        default: 30, constraint: "1 to maxCookTime", conformance: "M", access: "R V"
    }),
    Attribute({
        name: "MaxCookTime", id: 0x1, type: "elapsed-s",
        constraint: "1 to 86400", conformance: "M", access: "R V", quality: "F"
    }),
    Attribute({ name: "PowerSetting", id: 0x2, type: "uint8", constraint: "desc", conformance: "PWRNUM", access: "R V" }),
    Attribute({
        name: "MinPower", id: 0x3, type: "uint8",
        default: 10, constraint: "1 to 99", conformance: "PWRLMTS", access: "R V", quality: "F"
    }),
    Attribute({
        name: "MaxPower", id: 0x4, type: "uint8",
        default: 100, constraint: "minPower + 1 to 100", conformance: "PWRLMTS", access: "R V",
        quality: "F"
    }),
    Attribute({
        name: "PowerStep", id: 0x5, type: "uint8",
        default: 10, constraint: "desc", conformance: "PWRLMTS", access: "R V", quality: "F"
    }),

    Attribute(
        {
            name: "SupportedWatts", id: 0x6, type: "list",
            constraint: "1 to 10", conformance: "P, WATTS", access: "R V", quality: "F"
        },
        Field({ name: "entry", type: "uint16" })
    ),

    Attribute({ name: "SelectedWattIndex", id: 0x7, type: "uint8", constraint: "desc", conformance: "P, WATTS", access: "R V" }),
    Attribute({ name: "WattRating", id: 0x8, type: "uint16", conformance: "O", access: "R V", quality: "F" }),

    Command(
        {
            name: "SetCookingParameters", id: 0x0,
            conformance: "M", access: "O", direction: "request", response: "status"
        },
        Field({ name: "CookMode", id: 0x0, type: "uint8", constraint: "desc", conformance: "O.b+" }),
        Field({
            name: "CookTime", id: 0x1, type: "elapsed-s",
            default: 30, constraint: "1 to maxCookTime", conformance: "O.b+"
        }),
        Field({
            name: "PowerSetting", id: 0x2, type: "uint8",
            default: { type: "reference", name: "MaxPower" }, constraint: "minPower to maxPower",
            conformance: "[PWRNUM].b+"
        }),
        Field({ name: "WattSettingIndex", id: 0x3, type: "uint8", constraint: "desc", conformance: "[WATTS].b+" }),
        Field({ name: "StartAfterSetting", id: 0x4, type: "bool", default: false, conformance: "O" })
    ),

    Command(
        { name: "AddMoreTime", id: 0x1, conformance: "O", access: "O", direction: "request", response: "status" },
        Field({ name: "TimeToAdd", id: 0x0, type: "elapsed-s", constraint: "1 to maxCookTime", conformance: "M" })
    )
);

MatterDefinition.children.push(MicrowaveOvenControl);
