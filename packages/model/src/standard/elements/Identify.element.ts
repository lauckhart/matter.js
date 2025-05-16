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
    CommandElement as Command,
    FieldElement as Field,
    DatatypeElement as Datatype
} from "../../elements/index.js";

export const Identify = Cluster(
    { name: "Identify", id: 0x3 },
    Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 5 }),
    Attribute({ name: "IdentifyTime", id: 0x0, type: "uint16", default: 0, conformance: "M", access: "RW VO" }),
    Attribute({ name: "IdentifyType", id: 0x1, type: "IdentifyTypeEnum", constraint: "desc", conformance: "M", access: "R V" }),
    Command(
        { name: "Identify", id: 0x0, conformance: "M", access: "M", direction: "request", response: "status" },
        Field({ name: "IdentifyTime", id: 0x0, type: "uint16", conformance: "M" })
    ),
    Command(
        { name: "TriggerEffect", id: 0x40, conformance: "O", access: "M", direction: "request", response: "status" },
        Field({ name: "EffectIdentifier", id: 0x0, type: "EffectIdentifierEnum", constraint: "desc", conformance: "M" }),
        Field({ name: "EffectVariant", id: 0x1, type: "EffectVariantEnum", constraint: "desc", conformance: "M" })
    ),

    Datatype(
        { name: "IdentifyTypeEnum", type: "enum8" },
        Field({ name: "None", id: 0x0, conformance: "M" }),
        Field({ name: "LightOutput", id: 0x1, conformance: "M" }),
        Field({ name: "VisibleIndicator", id: 0x2, conformance: "M" }),
        Field({ name: "AudibleBeep", id: 0x3, conformance: "M" }),
        Field({ name: "Display", id: 0x4, conformance: "M" }),
        Field({ name: "Actuator", id: 0x5, conformance: "M" })
    ),

    Datatype(
        { name: "EffectIdentifierEnum", type: "enum8" },
        Field({ name: "Blink", id: 0x0, conformance: "M" }),
        Field({ name: "Breathe", id: 0x1, conformance: "M" }),
        Field({ name: "Okay", id: 0x2, conformance: "M" }),
        Field({ name: "ChannelChange", id: 0xb, conformance: "M" }),
        Field({ name: "FinishEffect", id: 0xfe, conformance: "M" }),
        Field({ name: "StopEffect", id: 0xff, conformance: "M" })
    ),

    Datatype({ name: "EffectVariantEnum", type: "enum8" }, Field({ name: "Default", id: 0x0, conformance: "M" }))
);

MatterDefinition.children.push(Identify);
