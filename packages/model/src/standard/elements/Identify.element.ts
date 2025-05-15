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
    { id: 0x3, name: "Identify" },
    Attribute({ id: 0xfffd, name: "ClusterRevision", type: "ClusterRevision", default: 5 }),
    Attribute({ id: 0x0, name: "IdentifyTime", type: "uint16", access: "RW VO", conformance: "M", default: 0 }),
    Attribute(
        { id: 0x1, name: "IdentifyType", type: "IdentifyTypeEnum", access: "R V", conformance: "M", constraint: "all" }
    ),
    Command(
        { id: 0x0, name: "Identify", access: "M", conformance: "M", direction: "request", response: "status" },
        Field({ id: 0x0, name: "IdentifyTime", type: "uint16", conformance: "M" })
    ),
    Command(
        { id: 0x40, name: "TriggerEffect", access: "M", conformance: "O", direction: "request", response: "status" },
        Field({ id: 0x0, name: "EffectIdentifier", type: "EffectIdentifierEnum", conformance: "M", constraint: "all" }),
        Field({ id: 0x1, name: "EffectVariant", type: "EffectVariantEnum", conformance: "M", constraint: "all" })
    ),

    Datatype(
        { name: "IdentifyTypeEnum", type: "enum8" },
        Field({ id: 0x0, name: "None", conformance: "M" }),
        Field({ id: 0x1, name: "LightOutput", conformance: "M" }),
        Field({ id: 0x2, name: "VisibleIndicator", conformance: "M" }),
        Field({ id: 0x3, name: "AudibleBeep", conformance: "M" }),
        Field({ id: 0x4, name: "Display", conformance: "M" }),
        Field({ id: 0x5, name: "Actuator", conformance: "M" })
    ),

    Datatype(
        { name: "EffectIdentifierEnum", type: "enum8" },
        Field({ id: 0x0, name: "Blink", conformance: "M" }),
        Field({ id: 0x1, name: "Breathe", conformance: "M" }),
        Field({ id: 0x2, name: "Okay", conformance: "M" }),
        Field({ id: 0xb, name: "ChannelChange", conformance: "M" }),
        Field({ id: 0xfe, name: "FinishEffect", conformance: "M" }),
        Field({ id: 0xff, name: "StopEffect", conformance: "M" })
    ),

    Datatype({ name: "EffectVariantEnum", type: "enum8" }, Field({ id: 0x0, name: "Default", conformance: "M" }))
);

MatterDefinition.children.push(Identify);
