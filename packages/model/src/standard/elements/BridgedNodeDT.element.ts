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
    { name: "BridgedNode", id: 0x13 },
    Requirement(
        { name: "Descriptor", id: 0x1d, element: "serverCluster" },
        Requirement({ name: "DeviceTypeList", element: "attribute", default: [ { deviceType: 19, revision: 3 } ] })
    ),
    Requirement({ name: "BridgedDeviceBasicInformation", id: 0x39, element: "serverCluster", conformance: "M" }),
    Requirement({ name: "PowerSourceConfiguration", id: 0x2e, element: "serverCluster", conformance: "BridgedPowerSourceInfo, D" }),
    Requirement({ name: "PowerSource", id: 0x2f, element: "serverCluster", conformance: "BridgedPowerSourceInfo" }),
    Requirement(
        { name: "EcosystemInformation", id: 0x750, element: "serverCluster", conformance: "FabricSynchronizedNode, O" }
    ),
    Requirement({ name: "AdministratorCommissioning", id: 0x3c, element: "serverCluster", conformance: "FabricSynchronizedNode" }),
    Field({ name: "conditions", type: "enum8" }, Field({ name: "FabricSynchronizedNode" }))
);

MatterDefinition.children.push(BridgedNodeDt);
