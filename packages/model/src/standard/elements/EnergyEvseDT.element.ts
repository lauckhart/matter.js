/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterDefinition } from "../MatterDefinition.js";
import { DeviceTypeElement as DeviceType, RequirementElement as Requirement } from "../../elements/index.js";

export const EnergyEvseDt = DeviceType(
    { name: "EnergyEvse", id: 0x50c },
    Requirement(
        { name: "Descriptor", id: 0x1d, element: "serverCluster" },
        Requirement({ name: "DeviceTypeList", element: "attribute", default: [ { deviceType: 1292, revision: 2 } ] })
    ),
    Requirement({ name: "Identify", id: 0x3, element: "serverCluster", conformance: "O" }),
    Requirement({ name: "EnergyEvse", id: 0x99, element: "serverCluster", conformance: "M" }),
    Requirement({ name: "EnergyEvseMode", id: 0x9d, element: "serverCluster", conformance: "M" }),
    Requirement({ name: "TemperatureMeasurement", id: 0x402, element: "serverCluster", conformance: "O" })
);

MatterDefinition.children.push(EnergyEvseDt);
