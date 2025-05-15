/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterDefinition } from "../MatterDefinition.js";
import { DeviceTypeElement as DeviceType, RequirementElement as Requirement } from "../../elements/index.js";

export const PumpControllerDt = DeviceType(
    { id: 0x304, name: "PumpController", classification: "simple" },
    Requirement(
        { id: 0x1d, name: "Descriptor", element: "serverCluster" },
        Requirement({ name: "DeviceTypeList", default: [ { deviceType: 772, revision: 4 } ], element: "attribute" })
    ),
    Requirement({ id: 0x6, name: "OnOff", conformance: "M", element: "clientCluster" }),
    Requirement({ id: 0x200, name: "PumpConfigurationAndControl", conformance: "M", element: "clientCluster" }),
    Requirement({ id: 0x3, name: "Identify", conformance: "M", element: "serverCluster" }),
    Requirement({ id: 0x3, name: "Identify", conformance: "O", element: "clientCluster" }),
    Requirement({ id: 0x4, name: "Groups", conformance: "O", element: "clientCluster" }),
    Requirement({ id: 0x8, name: "LevelControl", conformance: "O", element: "clientCluster" }),
    Requirement({ id: 0x62, name: "ScenesManagement", conformance: "P, O", element: "clientCluster" }),
    Requirement({ id: 0x402, name: "TemperatureMeasurement", conformance: "O", element: "clientCluster" }),
    Requirement({ id: 0x403, name: "PressureMeasurement", conformance: "O", element: "clientCluster" }),
    Requirement({ id: 0x404, name: "FlowMeasurement", conformance: "O", element: "clientCluster" })
);

MatterDefinition.children.push(PumpControllerDt);
