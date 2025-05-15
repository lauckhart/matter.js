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

export const OnOff = Cluster(
    { id: 0x6, name: "OnOff" },
    Attribute({ id: 0xfffd, name: "ClusterRevision", type: "ClusterRevision", default: 6 }),

    Attribute(
        { id: 0xfffc, name: "FeatureMap", type: "FeatureMap" },
        Field({ name: "LT", conformance: "[!OFFONLY]", constraint: "0" }),
        Field({ name: "DF", conformance: "[!OFFONLY]", constraint: "1" }),
        Field({ name: "OFFONLY", conformance: "[!LT | DF]", constraint: "2" })
    ),

    Attribute({ id: 0x0, name: "OnOff", type: "bool", access: "R V", conformance: "M", default: false, quality: "N S" }),
    Attribute({ id: 0x4000, name: "GlobalSceneControl", type: "bool", access: "R V", conformance: "LT", default: true }),
    Attribute({ id: 0x4001, name: "OnTime", type: "uint16", access: "RW VO", conformance: "LT", default: 0 }),
    Attribute({ id: 0x4002, name: "OffWaitTime", type: "uint16", access: "RW VO", conformance: "LT", default: 0 }),
    Attribute({
        id: 0x4003, name: "StartUpOnOff", type: "StartUpOnOffEnum",
        access: "RW VM", conformance: "LT", constraint: "all", quality: "X N"
    }),
    Command({ id: 0x0, name: "Off", access: "O", conformance: "M", direction: "request", response: "status" }),
    Command({ id: 0x1, name: "On", access: "O", conformance: "!OFFONLY", direction: "request", response: "status" }),
    Command({ id: 0x2, name: "Toggle", access: "O", conformance: "!OFFONLY", direction: "request", response: "status" }),
    Command(
        { id: 0x40, name: "OffWithEffect", access: "O", conformance: "LT", direction: "request", response: "status" },
        Field({ id: 0x0, name: "EffectIdentifier", type: "EffectIdentifierEnum", conformance: "M", constraint: "all" }),
        Field({ id: 0x1, name: "EffectVariant", type: "enum8", conformance: "M", constraint: "all", default: 0 })
    ),
    Command({
        id: 0x41, name: "OnWithRecallGlobalScene",
        access: "O", conformance: "LT", direction: "request", response: "status"
    }),

    Command(
        { id: 0x42, name: "OnWithTimedOff", access: "O", conformance: "LT", direction: "request", response: "status" },
        Field({ id: 0x0, name: "OnOffControl", type: "OnOffControlBitmap", conformance: "M", constraint: "0 to 1" }),
        Field({ id: 0x1, name: "OnTime", type: "uint16", conformance: "M", constraint: "max 65534" }),
        Field({ id: 0x2, name: "OffWaitTime", type: "uint16", conformance: "M", constraint: "max 65534" })
    ),

    Datatype({ name: "OnOffControlBitmap", type: "map8" }, Field({ name: "AcceptOnlyWhenOn", constraint: "0" })),

    Datatype(
        { name: "StartUpOnOffEnum", type: "enum8" },
        Field({ id: 0x0, name: "Off", conformance: "M" }),
        Field({ id: 0x1, name: "On", conformance: "M" }),
        Field({ id: 0x2, name: "Toggle", conformance: "M" })
    ),

    Datatype(
        { name: "EffectIdentifierEnum", type: "enum8" },
        Field({ id: 0x0, name: "DelayedAllOff", conformance: "M" }),
        Field({ id: 0x1, name: "DyingLight", conformance: "M" })
    ),

    Datatype(
        { name: "DelayedAllOffEffectVariantEnum", type: "enum8" },
        Field({ id: 0x0, name: "DelayedOffFastFade", conformance: "M" }),
        Field({ id: 0x1, name: "NoFade", conformance: "M" }),
        Field({ id: 0x2, name: "DelayedOffSlowFade", conformance: "M" })
    ),

    Datatype(
        { name: "DyingLightEffectVariantEnum", type: "enum8" },
        Field({ id: 0x0, name: "DyingLightFadeOff", conformance: "M" })
    )
);

MatterDefinition.children.push(OnOff);
