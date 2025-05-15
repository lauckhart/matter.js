/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterDefinition } from "../MatterDefinition.js";
import { DeviceTypeElement as DeviceType, RequirementElement as Requirement } from "../../elements/index.js";

export const OtaRequestorDt = DeviceType(
    { id: 0x12, name: "OtaRequestor", classification: "utility" },
    Requirement(
        { id: 0x1d, name: "Descriptor", element: "serverCluster" },
        Requirement({ name: "DeviceTypeList", default: [ { deviceType: 18, revision: 1 } ], element: "attribute" })
    ),
    Requirement({ id: 0x2a, name: "OtaSoftwareUpdateRequestor", conformance: "M", element: "serverCluster" }),
    Requirement({ id: 0x29, name: "OtaSoftwareUpdateProvider", conformance: "M", element: "clientCluster" })
);

MatterDefinition.children.push(OtaRequestorDt);
