/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterDefinition } from "../MatterDefinition.js";
import { DeviceTypeElement as DeviceType, RequirementElement as Requirement } from "../../elements/index.js";

export const OtaProviderDt = DeviceType(
    { id: 0x14, name: "OtaProvider", classification: "utility" },
    Requirement(
        { id: 0x1d, name: "Descriptor", element: "serverCluster" },
        Requirement({ name: "DeviceTypeList", default: [ { deviceType: 20, revision: 1 } ], element: "attribute" })
    ),
    Requirement({ id: 0x2a, name: "OtaSoftwareUpdateRequestor", conformance: "O", element: "clientCluster" }),
    Requirement({ id: 0x29, name: "OtaSoftwareUpdateProvider", conformance: "M", element: "serverCluster" })
);

MatterDefinition.children.push(OtaProviderDt);
