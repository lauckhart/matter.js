/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterDefinition } from "../MatterDefinition.js";
import { DeviceTypeElement as DeviceType, RequirementElement as Requirement } from "../../elements/index.js";

export const ExtractorHoodDt = DeviceType(
    { id: 0x7a, name: "ExtractorHood", classification: "simple" },
    Requirement(
        { id: 0x1d, name: "Descriptor", element: "serverCluster" },
        Requirement({ name: "DeviceTypeList", default: [ { deviceType: 122, revision: 1 } ], element: "attribute" })
    ),
    Requirement({ id: 0x3, name: "Identify", conformance: "O", element: "serverCluster" }),
    Requirement({ id: 0x71, name: "HepaFilterMonitoring", conformance: "O", element: "serverCluster" }),
    Requirement({ id: 0x72, name: "ActivatedCarbonFilterMonitoring", conformance: "O", element: "serverCluster" }),

    Requirement(
        { id: 0x202, name: "FanControl", conformance: "M", element: "serverCluster" },
        Requirement({ name: "ROCKING", conformance: "X", element: "feature" }),
        Requirement({ name: "WIND", conformance: "X", element: "feature" }),
        Requirement({ name: "AIRFLOWDIRECTION", conformance: "X", element: "feature" })
    )
);

MatterDefinition.children.push(ExtractorHoodDt);
