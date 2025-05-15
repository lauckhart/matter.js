/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterDefinition } from "../MatterDefinition.js";
import { DeviceTypeElement as DeviceType, RequirementElement as Requirement } from "../../elements/index.js";

export const MicrowaveOvenDt = DeviceType(
    { id: 0x79, name: "MicrowaveOven", classification: "simple" },
    Requirement(
        { id: 0x1d, name: "Descriptor", element: "serverCluster" },
        Requirement({ name: "DeviceTypeList", default: [ { deviceType: 121, revision: 1 } ], element: "attribute" })
    ),
    Requirement({ id: 0x3, name: "Identify", conformance: "O", element: "serverCluster" }),
    Requirement(
        { id: 0x60, name: "OperationalState", conformance: "M", element: "serverCluster" },
        Requirement({ name: "CountdownTime", conformance: "M", element: "attribute" })
    ),
    Requirement(
        { id: 0x202, name: "FanControl", conformance: "O", element: "serverCluster" },
        Requirement({ name: "WIND", conformance: "X", element: "feature" }),
        Requirement({ name: "AIRFLOWDIRECTION", conformance: "X", element: "feature" })
    ),
    Requirement({ id: 0x5e, name: "MicrowaveOvenMode", conformance: "M", element: "serverCluster" }),
    Requirement({ id: 0x5f, name: "MicrowaveOvenControl", conformance: "M", element: "serverCluster" })
);

MatterDefinition.children.push(MicrowaveOvenDt);
