/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterDefinition } from "../MatterDefinition.js";
import { DatatypeElement as Datatype, FieldElement as Field } from "../../elements/index.js";

export const MeasurementTypeEnum = Datatype(
    { name: "MeasurementTypeEnum", type: "enum16" },
    Field({ id: 0x0, name: "Unspecified", conformance: "M" }),
    Field({ id: 0x1, name: "Voltage", conformance: "M" }),
    Field({ id: 0x2, name: "ActiveCurrent", conformance: "M" }),
    Field({ id: 0x3, name: "ReactiveCurrent", conformance: "M" }),
    Field({ id: 0x4, name: "ApparentCurrent", conformance: "M" }),
    Field({ id: 0x5, name: "ActivePower", conformance: "M" }),
    Field({ id: 0x6, name: "ReactivePower", conformance: "M" }),
    Field({ id: 0x7, name: "ApparentPower", conformance: "M" }),
    Field({ id: 0x8, name: "RmsVoltage", conformance: "M" }),
    Field({ id: 0x9, name: "RmsCurrent", conformance: "M" }),
    Field({ id: 0xa, name: "RmsPower", conformance: "M" }),
    Field({ id: 0xb, name: "Frequency", conformance: "M" }),
    Field({ id: 0xc, name: "PowerFactor", conformance: "M" }),
    Field({ id: 0xd, name: "NeutralCurrent", conformance: "M" }),
    Field({ id: 0xe, name: "ElectricalEnergy", conformance: "M" })
);

MatterDefinition.children.push(MeasurementTypeEnum);
