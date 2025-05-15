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
    { id: 0x5f, name: "MicrowaveOvenControl" },
    Attribute({ id: 0xfffd, name: "ClusterRevision", type: "ClusterRevision", default: 1 }),

    Attribute(
        { id: 0xfffc, name: "FeatureMap", type: "FeatureMap" },
        Field({ name: "PWRNUM", conformance: "O.a", constraint: "0", description: "PowerAsNumber" }),
        Field({ name: "WATTS", conformance: "P, O.a", constraint: "1", description: "PowerInWatts" }),
        Field({ name: "PWRLMTS", conformance: "[PWRNUM]", constraint: "2", description: "PowerNumberLimits" })
    ),

    Attribute({
        id: 0x0, name: "CookTime", type: "elapsed-s",
        access: "R V", conformance: "M", constraint: "1 to maxCookTime", default: 30
    }),
    Attribute({
        id: 0x1, name: "MaxCookTime", type: "elapsed-s",
        access: "R V", conformance: "M", constraint: "1 to 86400", quality: "F"
    }),
    Attribute({ id: 0x2, name: "PowerSetting", type: "uint8", access: "R V", conformance: "PWRNUM", constraint: "desc" }),
    Attribute({
        id: 0x3, name: "MinPower", type: "uint8",
        access: "R V", conformance: "PWRLMTS", constraint: "1 to 99", default: 10, quality: "F"
    }),
    Attribute({
        id: 0x4, name: "MaxPower", type: "uint8",
        access: "R V", conformance: "PWRLMTS", constraint: "minPower + 1 to 100", default: 100,
        quality: "F"
    }),
    Attribute({
        id: 0x5, name: "PowerStep", type: "uint8",
        access: "R V", conformance: "PWRLMTS", constraint: "desc", default: 10, quality: "F"
    }),

    Attribute(
        {
            id: 0x6, name: "SupportedWatts", type: "list",
            access: "R V", conformance: "P, WATTS", constraint: "1 to 10", quality: "F"
        },
        Field({ name: "entry", type: "uint16" })
    ),

    Attribute({ id: 0x7, name: "SelectedWattIndex", type: "uint8", access: "R V", conformance: "P, WATTS", constraint: "desc" }),
    Attribute({ id: 0x8, name: "WattRating", type: "uint16", access: "R V", conformance: "O", quality: "F" }),

    Command(
        {
            id: 0x0, name: "SetCookingParameters",
            access: "O", conformance: "M", direction: "request", response: "status"
        },
        Field({ id: 0x0, name: "CookMode", type: "uint8", conformance: "O.b+", constraint: "desc" }),
        Field({
            id: 0x1, name: "CookTime", type: "elapsed-s",
            conformance: "O.b+", constraint: "1 to maxCookTime", default: 30
        }),
        Field({
            id: 0x2, name: "PowerSetting", type: "uint8",
            conformance: "[PWRNUM].b+", constraint: "minPower to maxPower",
            default: { type: "reference", name: "MaxPower" }
        }),
        Field({ id: 0x3, name: "WattSettingIndex", type: "uint8", conformance: "[WATTS].b+", constraint: "desc" }),
        Field({ id: 0x4, name: "StartAfterSetting", type: "bool", conformance: "O", default: false })
    ),

    Command(
        { id: 0x1, name: "AddMoreTime", access: "O", conformance: "O", direction: "request", response: "status" },
        Field({ id: 0x0, name: "TimeToAdd", type: "elapsed-s", conformance: "M", constraint: "1 to maxCookTime" })
    )
);

MatterDefinition.children.push(MicrowaveOvenControl);
