/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterDefinition } from "../MatterDefinition.js";
import { DeviceTypeElement as DeviceType, RequirementElement as Requirement } from "../../elements/index.js";

export const EnergyEvseDt = DeviceType(
    { id: 0x50c, name: "EnergyEvse", classification: "simple" },
    Requirement(
        { id: 0x1d, name: "Descriptor", element: "serverCluster" },
        Requirement({ name: "DeviceTypeList", default: [ { deviceType: 1292, revision: 2 } ], element: "attribute" })
    ),
    Requirement({ id: 0x3, name: "Identify", conformance: "O", element: "serverCluster" }),
    Requirement({ id: 0x99, name: "EnergyEvse", conformance: "M", element: "serverCluster" }),
    Requirement({ id: 0x9d, name: "EnergyEvseMode", conformance: "M", element: "serverCluster" }),
    Requirement({ id: 0x402, name: "TemperatureMeasurement", conformance: "O", element: "serverCluster" })
);

MatterDefinition.children.push(EnergyEvseDt);
