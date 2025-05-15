/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterDefinition } from "../MatterDefinition.js";
import { DeviceTypeElement as DeviceType, RequirementElement as Requirement } from "../../elements/index.js";

export const JointFabricAdministratorDt = DeviceType(
    { id: 0x130, name: "JointFabricAdministrator", classification: "utility" },
    Requirement(
        { id: 0x1d, name: "Descriptor", element: "serverCluster" },
        Requirement({ name: "DeviceTypeList", default: [ { deviceType: 304, revision: 1 } ], element: "attribute" })
    ),
    Requirement({ id: 0x752, name: "JointFabricDatastore", conformance: "M", element: "serverCluster" }),
    Requirement({ id: 0x753, name: "JointFabricPki", conformance: "M", element: "serverCluster" })
);

MatterDefinition.children.push(JointFabricAdministratorDt);
