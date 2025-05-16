/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterDefinition } from "../MatterDefinition.js";
import { DeviceTypeElement as DeviceType, RequirementElement as Requirement } from "../../elements/index.js";

export const OtaRequestorDt = DeviceType(
    { name: "OtaRequestor", id: 0x12 },
    Requirement(
        { name: "Descriptor", id: 0x1d, element: "serverCluster" },
        Requirement({ name: "DeviceTypeList", element: "attribute", default: [ { deviceType: 18, revision: 1 } ] })
    ),
    Requirement({ name: "OtaSoftwareUpdateRequestor", id: 0x2a, element: "serverCluster", conformance: "M" }),
    Requirement({ name: "OtaSoftwareUpdateProvider", id: 0x29, element: "clientCluster", conformance: "M" })
);

MatterDefinition.children.push(OtaRequestorDt);
