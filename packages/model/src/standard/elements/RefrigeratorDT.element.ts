/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterDefinition } from "../MatterDefinition.js";
import { DeviceTypeElement as DeviceType, RequirementElement as Requirement } from "../../elements/index.js";

export const RefrigeratorDt = DeviceType(
    { name: "Refrigerator", id: 0x70 },
    Requirement(
        { name: "Descriptor", id: 0x1d, element: "serverCluster" },
        Requirement({ name: "DeviceTypeList", element: "attribute", default: [ { deviceType: 112, revision: 2 } ] })
    ),
    Requirement({ name: "Identify", id: 0x3, element: "serverCluster", conformance: "O" }),

    Requirement(
        {
            name: "RefrigeratorAndTemperatureControlledCabinetMode", id: 0x52,
            element: "serverCluster", conformance: "O"
        },
        Requirement({ name: "StartUpMode", element: "attribute", conformance: "X" }),
        Requirement({ name: "ONOFF", element: "feature", conformance: "X" })
    ),

    Requirement({ name: "RefrigeratorAlarm", id: 0x57, element: "serverCluster", conformance: "O" })
);

MatterDefinition.children.push(RefrigeratorDt);
