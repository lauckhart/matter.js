/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterDefinition } from "../MatterDefinition.js";
import {
    DeviceTypeElement as DeviceType,
    RequirementElement as Requirement,
    FieldElement as Field
} from "../../elements/index.js";

export const BridgedNodeDt = DeviceType(
    { id: 0x13, name: "BridgedNode", classification: "utility" },
    Requirement(
        { id: 0x1d, name: "Descriptor", element: "serverCluster" },
        Requirement({ name: "DeviceTypeList", default: [ { deviceType: 19, revision: 3 } ], element: "attribute" })
    ),
    Requirement({ id: 0x39, name: "BridgedDeviceBasicInformation", conformance: "M", element: "serverCluster" }),
    Requirement({ id: 0x2e, name: "PowerSourceConfiguration", conformance: "BridgedPowerSourceInfo, D", element: "serverCluster" }),
    Requirement({ id: 0x2f, name: "PowerSource", conformance: "BridgedPowerSourceInfo", element: "serverCluster" }),
    Requirement(
        { id: 0x750, name: "EcosystemInformation", conformance: "FabricSynchronizedNode, O", element: "serverCluster" }
    ),
    Requirement({ id: 0x3c, name: "AdministratorCommissioning", conformance: "FabricSynchronizedNode", element: "serverCluster" }),
    Field({ name: "conditions", type: "enum8" }, Field({ name: "FabricSynchronizedNode" }))
);

MatterDefinition.children.push(BridgedNodeDt);
