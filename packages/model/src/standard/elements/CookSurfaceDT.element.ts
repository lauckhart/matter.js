/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterDefinition } from "../MatterDefinition.js";
import { DeviceTypeElement as DeviceType, RequirementElement as Requirement } from "../../elements/index.js";

export const CookSurfaceDt = DeviceType(
    { id: 0x77, name: "CookSurface", classification: "simple" },
    Requirement(
        { id: 0x1d, name: "Descriptor", element: "serverCluster" },
        Requirement({ name: "DeviceTypeList", default: [ { deviceType: 119, revision: 1 } ], element: "attribute" })
    ),
    Requirement({ id: 0x56, name: "TemperatureControl", conformance: "O.a+", element: "serverCluster" }),
    Requirement({ id: 0x402, name: "TemperatureMeasurement", conformance: "O.a+", element: "serverCluster" }),
    Requirement(
        { id: 0x6, name: "OnOff", conformance: "O", element: "serverCluster" },
        Requirement({ name: "OFFONLY", conformance: "M", element: "feature" })
    )
);

MatterDefinition.children.push(CookSurfaceDt);
