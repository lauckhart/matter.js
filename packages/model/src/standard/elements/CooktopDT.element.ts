/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterDefinition } from "../MatterDefinition.js";
import { DeviceTypeElement as DeviceType, RequirementElement as Requirement } from "../../elements/index.js";

export const CooktopDt = DeviceType(
    { name: "Cooktop", id: 0x78 },
    Requirement(
        { name: "Descriptor", id: 0x1d, element: "serverCluster" },
        Requirement({ name: "DeviceTypeList", element: "attribute", default: [ { deviceType: 120, revision: 1 } ] })
    ),
    Requirement({ name: "Identify", id: 0x3, element: "serverCluster", conformance: "O" }),
    Requirement(
        { name: "OnOff", id: 0x6, element: "serverCluster", conformance: "M" },
        Requirement({ name: "OFFONLY", element: "feature", conformance: "M" })
    )
);

MatterDefinition.children.push(CooktopDt);
