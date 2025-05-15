/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterDefinition } from "../MatterDefinition.js";
import { DeviceTypeElement as DeviceType, RequirementElement as Requirement } from "../../elements/index.js";

export const ElectricalSensorDt = DeviceType(
    { id: 0x510, name: "ElectricalSensor", classification: "utility" },
    Requirement(
        { id: 0x1d, name: "Descriptor", element: "serverCluster" },
        Requirement({ name: "DeviceTypeList", default: [ { deviceType: 1296, revision: 1 } ], element: "attribute" })
    ),
    Requirement({ id: 0x9c, name: "PowerTopology", conformance: "M", element: "serverCluster" }),
    Requirement({ id: 0x90, name: "ElectricalPowerMeasurement", conformance: "O.a+", element: "serverCluster" }),
    Requirement({ id: 0x91, name: "ElectricalEnergyMeasurement", conformance: "O.a+", element: "serverCluster" })
);

MatterDefinition.children.push(ElectricalSensorDt);
