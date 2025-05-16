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
    { name: "OnOff", id: 0x6 },
    Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 6 }),

    Attribute(
        { name: "FeatureMap", id: 0xfffc, type: "FeatureMap" },
        Field({ name: "LT", constraint: "0", conformance: "[!OFFONLY]", longName: "Lighting" }),
        Field({ name: "DF", constraint: "1", conformance: "[!OFFONLY]", longName: "DeadFrontBehavior" }),
        Field({ name: "OFFONLY", constraint: "2", conformance: "[!LT | DF]", longName: "OffOnly" })
    ),

    Attribute({ name: "OnOff", id: 0x0, type: "bool", default: false, conformance: "M", access: "R V", quality: "N S" }),
    Attribute({ name: "GlobalSceneControl", id: 0x4000, type: "bool", default: true, conformance: "LT", access: "R V" }),
    Attribute({ name: "OnTime", id: 0x4001, type: "uint16", default: 0, conformance: "LT", access: "RW VO" }),
    Attribute({ name: "OffWaitTime", id: 0x4002, type: "uint16", default: 0, conformance: "LT", access: "RW VO" }),
    Attribute({
        name: "StartUpOnOff", id: 0x4003, type: "StartUpOnOffEnum",
        constraint: "desc", conformance: "LT", access: "RW VM", quality: "X N"
    }),
    Command({ name: "Off", id: 0x0, conformance: "M", access: "O", direction: "request", response: "status" }),
    Command({ name: "On", id: 0x1, conformance: "!OFFONLY", access: "O", direction: "request", response: "status" }),
    Command({ name: "Toggle", id: 0x2, conformance: "!OFFONLY", access: "O", direction: "request", response: "status" }),
    Command(
        { name: "OffWithEffect", id: 0x40, conformance: "LT", access: "O", direction: "request", response: "status" },
        Field({ name: "EffectIdentifier", id: 0x0, type: "EffectIdentifierEnum", constraint: "desc", conformance: "M" }),
        Field({ name: "EffectVariant", id: 0x1, type: "enum8", default: 0, constraint: "desc", conformance: "M" })
    ),
    Command({
        name: "OnWithRecallGlobalScene", id: 0x41,
        conformance: "LT", access: "O", direction: "request", response: "status"
    }),

    Command(
        { name: "OnWithTimedOff", id: 0x42, conformance: "LT", access: "O", direction: "request", response: "status" },
        Field({ name: "OnOffControl", id: 0x0, type: "OnOffControlBitmap", constraint: "0 to 1", conformance: "M" }),
        Field({ name: "OnTime", id: 0x1, type: "uint16", constraint: "max 65534", conformance: "M" }),
        Field({ name: "OffWaitTime", id: 0x2, type: "uint16", constraint: "max 65534", conformance: "M" })
    ),

    Datatype({ name: "OnOffControlBitmap", type: "map8" }, Field({ name: "AcceptOnlyWhenOn", constraint: "0" })),

    Datatype(
        { name: "StartUpOnOffEnum", type: "enum8" },
        Field({ name: "Off", id: 0x0, conformance: "M" }),
        Field({ name: "On", id: 0x1, conformance: "M" }),
        Field({ name: "Toggle", id: 0x2, conformance: "M" })
    ),

    Datatype(
        { name: "EffectIdentifierEnum", type: "enum8" },
        Field({ name: "DelayedAllOff", id: 0x0, conformance: "M" }),
        Field({ name: "DyingLight", id: 0x1, conformance: "M" })
    ),

    Datatype(
        { name: "DelayedAllOffEffectVariantEnum", type: "enum8" },
        Field({ name: "DelayedOffFastFade", id: 0x0, conformance: "M" }),
        Field({ name: "NoFade", id: 0x1, conformance: "M" }),
        Field({ name: "DelayedOffSlowFade", id: 0x2, conformance: "M" })
    ),

    Datatype(
        { name: "DyingLightEffectVariantEnum", type: "enum8" },
        Field({ name: "DyingLightFadeOff", id: 0x0, conformance: "M" })
    )
);

MatterDefinition.children.push(OnOff);
