/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterDefinition } from "../MatterDefinition.js";
import { DeviceTypeElement as DeviceType, RequirementElement as Requirement } from "../../elements/index.js";

export const RainSensorDt = DeviceType(
    { id: 0x44, name: "RainSensor", classification: "simple" },
    Requirement(
        { id: 0x1d, name: "Descriptor", element: "serverCluster" },
        Requirement({ name: "DeviceTypeList", default: [ { deviceType: 68, revision: 1 } ], element: "attribute" })
    ),
    Requirement({ id: 0x3, name: "Identify", conformance: "M", element: "serverCluster" }),
    Requirement(
        { id: 0x45, name: "BooleanState", conformance: "M", element: "serverCluster" },
        Requirement({ name: "StateChange", conformance: "M", element: "event" })
    ),
    Requirement({ id: 0x80, name: "BooleanStateConfiguration", conformance: "O", element: "serverCluster" })
);

MatterDefinition.children.push(RainSensorDt);
