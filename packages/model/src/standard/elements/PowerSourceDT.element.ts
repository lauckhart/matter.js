/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterDefinition } from "../MatterDefinition.js";
import { DeviceTypeElement as DeviceType, RequirementElement as Requirement } from "../../elements/index.js";

export const PowerSourceDt = DeviceType(
    { id: 0x11, name: "PowerSource", classification: "utility" },
    Requirement(
        { id: 0x1d, name: "Descriptor", element: "serverCluster" },
        Requirement({ name: "DeviceTypeList", default: [ { deviceType: 17, revision: 1 } ], element: "attribute" })
    ),
    Requirement({ id: 0x2f, name: "PowerSource", conformance: "M", element: "serverCluster" })
);

MatterDefinition.children.push(PowerSourceDt);
