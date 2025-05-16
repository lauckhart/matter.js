/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterDefinition } from "../MatterDefinition.js";
import { DeviceTypeElement as DeviceType, RequirementElement as Requirement } from "../../elements/index.js";

export const CookSurfaceDt = DeviceType(
    { name: "CookSurface", id: 0x77 },
    Requirement(
        { name: "Descriptor", id: 0x1d, element: "serverCluster" },
        Requirement({ name: "DeviceTypeList", element: "attribute", default: [ { deviceType: 119, revision: 1 } ] })
    ),
    Requirement({ name: "TemperatureControl", id: 0x56, element: "serverCluster", conformance: "O.a+" }),
    Requirement({ name: "TemperatureMeasurement", id: 0x402, element: "serverCluster", conformance: "O.a+" }),
    Requirement(
        { name: "OnOff", id: 0x6, element: "serverCluster", conformance: "O" },
        Requirement({ name: "OFFONLY", element: "feature", conformance: "M" })
    )
);

MatterDefinition.children.push(CookSurfaceDt);
