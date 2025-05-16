/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterDefinition } from "../MatterDefinition.js";
import { DeviceTypeElement as DeviceType, RequirementElement as Requirement } from "../../elements/index.js";

export const MicrowaveOvenDt = DeviceType(
    { name: "MicrowaveOven", id: 0x79 },
    Requirement(
        { name: "Descriptor", id: 0x1d, element: "serverCluster" },
        Requirement({ name: "DeviceTypeList", element: "attribute", default: [ { deviceType: 121, revision: 1 } ] })
    ),
    Requirement({ name: "Identify", id: 0x3, element: "serverCluster", conformance: "O" }),
    Requirement(
        { name: "OperationalState", id: 0x60, element: "serverCluster", conformance: "M" },
        Requirement({ name: "CountdownTime", element: "attribute", conformance: "M" })
    ),
    Requirement(
        { name: "FanControl", id: 0x202, element: "serverCluster", conformance: "O" },
        Requirement({ name: "WIND", element: "feature", conformance: "X" }),
        Requirement({ name: "AIRFLOWDIRECTION", element: "feature", conformance: "X" })
    ),
    Requirement({ name: "MicrowaveOvenMode", id: 0x5e, element: "serverCluster", conformance: "M" }),
    Requirement({ name: "MicrowaveOvenControl", id: 0x5f, element: "serverCluster", conformance: "M" })
);

MatterDefinition.children.push(MicrowaveOvenDt);
