/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterDefinition } from "../MatterDefinition.js";
import { DeviceTypeElement as DeviceType, RequirementElement as Requirement } from "../../elements/index.js";

export const NetworkInfrastructureManagerDt = DeviceType(
    { id: 0x90, name: "NetworkInfrastructureManager", classification: "simple" },
    Requirement(
        { id: 0x1d, name: "Descriptor", element: "serverCluster" },
        Requirement({ name: "DeviceTypeList", default: [ { deviceType: 144, revision: 1 } ], element: "attribute" })
    ),
    Requirement({ id: 0x451, name: "WiFiNetworkManagement", conformance: "M", element: "serverCluster" }),
    Requirement({ id: 0x452, name: "ThreadBorderRouterManagement", conformance: "M", element: "serverCluster" }),
    Requirement({ id: 0x453, name: "ThreadNetworkDirectory", conformance: "M", element: "serverCluster" })
);

MatterDefinition.children.push(NetworkInfrastructureManagerDt);
