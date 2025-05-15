/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterDefinition } from "../MatterDefinition.js";
import { DeviceTypeElement as DeviceType, RequirementElement as Requirement } from "../../elements/index.js";

export const SecondaryNetworkInterfaceDt = DeviceType(
    { id: 0x19, name: "SecondaryNetworkInterface", classification: "utility" },
    Requirement(
        { id: 0x1d, name: "Descriptor", element: "serverCluster" },
        Requirement({ name: "DeviceTypeList", default: [ { deviceType: 25, revision: 1 } ], element: "attribute" })
    ),
    Requirement({ id: 0x31, name: "NetworkCommissioning", conformance: "M", element: "serverCluster" }),
    Requirement({ id: 0x37, name: "EthernetNetworkDiagnostics", conformance: "[Ethernet]", element: "serverCluster" }),
    Requirement({ id: 0x36, name: "WiFiNetworkDiagnostics", conformance: "[Wi, Fi]", element: "serverCluster" }),
    Requirement({ id: 0x35, name: "ThreadNetworkDiagnostics", conformance: "[Thread]", element: "serverCluster" })
);

MatterDefinition.children.push(SecondaryNetworkInterfaceDt);
