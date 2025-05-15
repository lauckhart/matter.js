/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterDefinition } from "../MatterDefinition.js";
import { DeviceTypeElement as DeviceType, RequirementElement as Requirement } from "../../elements/index.js";

export const RefrigeratorDt = DeviceType(
    { id: 0x70, name: "Refrigerator", classification: "simple" },
    Requirement(
        { id: 0x1d, name: "Descriptor", element: "serverCluster" },
        Requirement({ name: "DeviceTypeList", default: [ { deviceType: 112, revision: 2 } ], element: "attribute" })
    ),
    Requirement({ id: 0x3, name: "Identify", conformance: "O", element: "serverCluster" }),

    Requirement(
        {
            id: 0x52, name: "RefrigeratorAndTemperatureControlledCabinetMode",
            conformance: "O", element: "serverCluster"
        },
        Requirement({ name: "StartUpMode", conformance: "X", element: "attribute" }),
        Requirement({ name: "ONOFF", conformance: "X", element: "feature" })
    ),

    Requirement({ id: 0x57, name: "RefrigeratorAlarm", conformance: "O", element: "serverCluster" })
);

MatterDefinition.children.push(RefrigeratorDt);
