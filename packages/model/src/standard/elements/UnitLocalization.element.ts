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

export const UnitLocalization = Cluster(
    { id: 0x2d, name: "UnitLocalization" },
    Attribute({ id: 0xfffd, name: "ClusterRevision", type: "ClusterRevision", default: 1 }),
    Attribute(
        { id: 0xfffc, name: "FeatureMap", type: "FeatureMap" },
        Field({ name: "TEMP", constraint: "0", longName: "TemperatureUnit" })
    ),
    Attribute(
        { id: 0x0, name: "TemperatureUnit", type: "TempUnitEnum", access: "RW VM", conformance: "TEMP", quality: "N" }
    ),

    Datatype(
        { name: "TempUnitEnum", type: "enum8" },
        Field({ id: 0x0, name: "Fahrenheit", conformance: "M" }),
        Field({ id: 0x1, name: "Celsius", conformance: "M" }),
        Field({ id: 0x2, name: "Kelvin", conformance: "M" })
    )
);

MatterDefinition.children.push(UnitLocalization);
