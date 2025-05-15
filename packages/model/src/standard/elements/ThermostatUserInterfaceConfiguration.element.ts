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
    DatatypeElement as Datatype,
    FieldElement as Field
} from "../../elements/index.js";

export const ThermostatUserInterfaceConfiguration = Cluster(
    { id: 0x204, name: "ThermostatUserInterfaceConfiguration" },
    Attribute({ id: 0xfffd, name: "ClusterRevision", type: "ClusterRevision", default: 2 }),
    Attribute({
        id: 0x0, name: "TemperatureDisplayMode", type: "TemperatureDisplayModeEnum",
        access: "RW VO", conformance: "M", default: 0
    }),
    Attribute({ id: 0x1, name: "KeypadLockout", type: "KeypadLockoutEnum", access: "RW VM", conformance: "M", default: 0 }),
    Attribute({
        id: 0x2, name: "ScheduleProgrammingVisibility", type: "ScheduleProgrammingVisibilityEnum",
        access: "RW VM", conformance: "O", default: 0
    }),
    Datatype(
        { name: "TemperatureDisplayModeEnum", type: "enum8" },
        Field({ id: 0x0, name: "Celsius", conformance: "M" }),
        Field({ id: 0x1, name: "Fahrenheit", conformance: "M" })
    ),

    Datatype(
        { name: "KeypadLockoutEnum", type: "enum8" },
        Field({ id: 0x0, name: "NoLockout", conformance: "M" }),
        Field({ id: 0x1, name: "Lockout1", conformance: "M" }),
        Field({ id: 0x2, name: "Lockout2", conformance: "M" }),
        Field({ id: 0x3, name: "Lockout3", conformance: "M" }),
        Field({ id: 0x4, name: "Lockout4", conformance: "M" }),
        Field({ id: 0x5, name: "Lockout5", conformance: "M" })
    ),

    Datatype(
        { name: "ScheduleProgrammingVisibilityEnum", type: "enum8" },
        Field({ id: 0x0, name: "ScheduleProgrammingPermitted", conformance: "M" }),
        Field({ id: 0x1, name: "ScheduleProgrammingDenied", conformance: "M" })
    )
);

MatterDefinition.children.push(ThermostatUserInterfaceConfiguration);
